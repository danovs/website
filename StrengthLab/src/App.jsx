import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Contacts from './Components/Contacts';
import Feedbacks from './Components/Feedbacks';
import Footer from './Components/footer';
import Hero from './Components/Hero';
import Memberships from './Components/membership';
import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/Pricing';
import Requests from './Components/Requests';
import Schedule from './Components/Schedule';
import Services from './Components/Services';
import Subscription from './Components/subcription';
import Team from './Components/Team'; // Импорт компонента
import Vacancies from './Components/vacancies';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Главная страница */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Pricing />
              <Feedbacks />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Страница "Наша команда" */}
        <Route path="/team" element={<Team />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path='/vacancies' element={<Vacancies/>}/>
        <Route path='/membership' element={<Memberships/>} />
        <Route path='/subscription' element={<Subscription/>} />
        <Route path='/requests' element={<Requests/>} />
      </Routes>
    </Router>
  );
};

export default App;