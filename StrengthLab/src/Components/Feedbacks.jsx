import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const TestimonialData = [
  {
    id: 1,
    name: "Анна",
    text: "Прекрасный сервис! Я очень довольна.",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Иван",
    text: "Отличное место для тренировок.",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 3,
    name: "Мария",
    text: "Замечательная команда!",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 4,
    name: "Дмитрий",
    text: "Супер место! Спасибо вам!",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      id="testimonials"
      className="py-20 overflow-x-hidden px-7 md:px-0 bg-zinc-900 text-white"
    >
      <div className="max-w-7xl mx-auto items-center text-center">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            Отзывы
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Посмотрите, что говорят о нас наши клиенты!
          </p>
        </div>

        {/* Testimonials Slider */}
        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-zinc-800 relative">
                  <div className="mb-4 flex justify-center">
                    <img
                      src={data.img}
                      alt={`Аватар ${data.name}`}
                      className="rounded-full w-24 h-24 border-4 border-primary object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-sm text-gray-300 text-center">
                        {data.text}
                      </p>
                      <h1 className="text-lg font-bold text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-primary/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
