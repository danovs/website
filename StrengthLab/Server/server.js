import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mysql from 'mysql2/promise'; // Для работы с MySQL

// Инициализация сервера
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
const staticPath = '/home/dansludanov/dev/Website/StrengthLab/public/assets';
console.log('Serving static files from:', staticPath); // Диагностика пути
app.use('/assets', express.static(staticPath));

// Подключение к базе данных
async function connectToDatabase() {
    try {
        // Подключаемся к базе данных MySQL
        const db = await mysql.createConnection({
            host: 'localhost',
            port: 33061, // Порт MySQL
            user: 'root',
            password: 'root',
            database: 'DB',
        });
        console.log('✅ Connected to MySQL database successfully!');
        return db;
    } catch (error) {
        console.error('❌ Error connecting to MySQL database:', error.message);
        return null;
    }
}

// Маршрут для проверки работы сервера
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Маршрут для получения данных о команде
app.get('/Trainers', async (req, res) => {
    const db = await connectToDatabase();
    try {
        const [rows] = await db.query('SELECT id, name, position, description FROM Trainers');
        const trainers = rows.map((trainer) => ({
            ...trainer,
            photo: `/assets/trainers/trainer${trainer.id}.jpg`, // Генерируем путь к фото
        }));
        res.json(trainers);
    } catch (error) {
        console.error('Ошибка при запросе к базе данных:', error.message);
        res.status(500).send('Ошибка сервера');
    } finally {
        db.end();
    }
});

app.post('/contact', async (req, res) => {
    const db = await connectToDatabase();
    if (!db) {
        return res.status(500).send('Ошибка подключения к базе данных');
    }

    const { name, email, message } = req.body; // Получаем данные из тела запроса

    // Проверяем, что все поля заполнены
    if (!name || !email || !message) {
        return res.status(400).send('Все поля должны быть заполнены');
    }

    try {
        // Вставляем нового клиента в таблицу Clients
        const [clientResult] = await db.query(
            'INSERT INTO Clients (Name, Email) VALUES (?, ?)', 
            [name, email]
        );
        
        // Получаем ClientID, чтобы добавить запрос
        const clientId = clientResult.insertId;

        // Вставляем новый запрос в таблицу Requests
        await db.query(
            'INSERT INTO Requests (ClientID, RequestDescription) VALUES (?, ?)',
            [clientId, message]
        );

        res.status(200).send('Данные успешно отправлены!');
    } catch (error) {
        console.error('Ошибка при добавлении данных в базу:', error.message);
        res.status(500).send('Ошибка при добавлении данных');
    } finally {
        await db.end();
    }
});

// Маршрут для получения данных о расписании
app.get('/schedule', async (req, res) => {
    const db = await connectToDatabase();
    if (!db) {
        return res.status(500).send('Ошибка подключения к базе данных');
    }

    try {
        // Запрос для получения данных расписания с правильными названиями полей
        console.log('✅ Executing query to fetch schedule data');
        const [rows] = await db.query(`
            SELECT s.id, s.day_id, s.shift_time, s.trainer_id, t.name as trainer_name
            FROM shifts s
            JOIN Trainers t ON s.trainer_id = t.id
        `);
        console.log('✅ Fetched schedule data:', rows);
        res.json(rows); // Отправляем массив расписания
    } catch (error) {
        console.error('❌ Error fetching schedule data:', error.message);
        res.status(500).send('Ошибка запроса к базе данных');
    } finally {
        await db.end();
    }
});

// Маршрут для получения данных о вакансиях
app.get('/vacancies', async (req, res) => {
    const db = await connectToDatabase();
    if (!db) {
        return res.status(500).send('Ошибка подключения к базе данных');
    }

    try {
        // Запрос для получения данных о вакансиях
        console.log('✅ Executing query to fetch vacancies');
        const [rows] = await db.query('SELECT id, title, status, salary FROM vacancies');
        console.log('✅ Fetched vacancies:', rows);
        res.json(rows); // Отправляем массив вакансий
    } catch (error) {
        console.error('❌ Error fetching vacancies data:', error.message);
        res.status(500).send('Ошибка запроса к базе данных');
    } finally {
        await db.end();
    }
});

// Маршрут для получения данных о клиентах и их запросах
app.get('/clients', async (req, res) => {
    const db = await connectToDatabase();
    if (!db) {
      return res.status(500).send('Ошибка подключения к базе данных');
    }
  
    try {
      // Запрос для получения данных клиентов и их запросов
      const [rows] = await db.query(`
        SELECT c.name, c.email, r.RequestDescription
        FROM Clients c
        JOIN Requests r ON c.id = r.ClientID
      `);
      
      res.json(rows); // Отправляем массив данных
    } catch (error) {
      console.error('❌ Error fetching client data:', error.message);
      res.status(500).send('Ошибка запроса к базе данных');
    } finally {
      await db.end();
    }
  });

// Получение данных о планах подписки
app.get('/plans', async (req, res) => {
    const db = await connectToDatabase();

    if (!db) {
        return res.status(500).send('Ошибка подключения к базе данных');
    }

    try {
        const [rows] = await db.query('SELECT id, name, description, price, benefits FROM subscription_plans');
        res.json(rows); // Убедитесь, что это массив
    } catch (error) {
        console.error('❌ Error fetching subscription plans data:', error.message);
        res.status(500).send('Ошибка запроса к базе данных');
    } finally {
        await db.end();
    }
});

app.route('/subscribe')
  .post(async (req, res) => {
    const { name, email, planId } = req.body;

    // Логирование входящих данных
    console.log('Received data:', { name, email, planId });

    if (!name || !email || !planId) {
        return res.status(400).send('Все поля должны быть заполнены');
    }

    const db = await connectToDatabase();
    if (!db) {
        return res.status(500).send('Ошибка подключения к базе данных');
    }

    try {
        // Проверка, существует ли план подписки
        const [plan] = await db.query('SELECT id, name, price FROM subscription_plans WHERE id = ?', [planId]);
        if (plan.length === 0) {
            return res.status(404).send('План подписки не найден');
        }

        // Проверка, существует ли клиент с таким email
        const [existingClient] = await db.query('SELECT id FROM Clients WHERE Email = ?', [email]);

        let clientId;
        if (existingClient.length === 0) {
            // Если клиента нет, создаем нового
            const [clientResult] = await db.query(
                'INSERT INTO Clients (Name, Email) VALUES (?, ?)', 
                [name, email]
            );
            clientId = clientResult.insertId;
        } else {
            clientId = existingClient[0].id;
        }

        // Добавляем подписку в таблицу clients_subscriptions
        await db.query(
            'INSERT INTO client_subscriptions (client_id, subscription_id, subscription_status) VALUES (?, ?, ?)',
            [clientId, planId, 'Активирована'] // Используем корректное значение для статуса
        );
        

        res.status(200).send('Подписка успешно оформлена!');
    } catch (error) {
        console.error('Ошибка при оформлении подписки:', error.message);
        res.status(500).send('Ошибка при оформлении подписки');
    } finally {
        await db.end();
    }
  });


// Получение подписки клиента по ID
app.get('/client/:client_id/subscription', async (req, res) => {
    const { client_id } = req.params;
    const db = await connectToDatabase();

    if (!db) {
        return res.status(500).send('Ошибка подключения к базе данных');
    }

    try {
        // Запрос для получения информации о подписке клиента
        const [rows] = await db.query(`
            SELECT cs.client_id, cs.subscription_status, sp.name AS subscription_name, sp.price, sp.benefits
            FROM client_subscriptions cs
            JOIN subscription_plans sp ON cs.subscription_id = sp.id
            WHERE cs.client_id = ?`, [client_id]);

        if (rows.length === 0) {
            return res.status(404).send('Подписка не найдена');
        }

        res.json(rows[0]); // Отправляем данные подписки
    } catch (error) {
        console.error('❌ Error fetching subscription data:', error.message);
        res.status(500).send('Ошибка запроса к базе данных');
    } finally {
        await db.end();
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});