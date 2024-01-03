import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LiteratureDetail.css'; // Import your custom CSS file
export const poem1Image = require('../images/events.jpg');
function Achievements() {
  const { year } = useParams();

  // Example data for the carousel
  const carouselItems = [
    {
      id: 1,
      title: 'Poem 1',
      name: 'Author 1',
      year: 2024,
      achievements: 'Achievement 1: Something notable\nAchievement 2: Another achievement',
      image: poem1Image,
      content: 'Content of Poem 1 ...',
    },
    {
        id: 2,
        title: 'Poem 1',
        name: 'Author 1',
        year: 2024,
        achievements: 'Achievement 1: Something notable\nAchievement 2: Another achievement',
        image: 'path/to/image1.jpg',
        content: 'Content of Poem 1 ...',
      },
      {
        id: 3,
        title: 'Poem 1',
        name: 'Author 1',
        year: 2024,
        achievements: 'Achievement 1: Something notable\nAchievement 2: Another achievement',
        image: 'path/to/image1.jpg',
        content: 'Content of Poem 1 ...',
      },
    // Add more items as needed
  ];

  const [expandedSlides, setExpandedSlides] = useState({});

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleReadMore = (id) => {
    setExpandedSlides((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="literature-detail-container">
      <h2 className="poems-heading">Poems of the year {year}</h2>

      <div className="slider-box" style={{ height: 'auto' }}>
        <Slider {...settings}>
          {carouselItems.map((item) => (
            <div key={item.id} className="carousel-slide">
              <img
                src={item.image}
                alt={`Image for ${item.title}`}
                className="center-image"
              />
              <h3>{item.title}</h3>
              <p>Author: {item.name}</p>
              <p>Year: {item.year}</p>
              {expandedSlides[item.id] ? (
                <div>
                  <p>{item.content}</p>
                  <p>{item.achievements}</p>
                </div>
              ) : (
                <div>
                  <p>{item.content.substring(0, 100)}</p>
                  <button
                    className="read-more-button"
                    onClick={() => handleReadMore(item.id)}
                  >
                    Read More
                  </button>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default  Achievements;
