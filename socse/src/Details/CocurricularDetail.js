/*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LiteratureDetail.css'; // Import your custom CSS file
export const poem1Image = require('../images/events.jpg');
function CocurricularDetail() {
  const { year } = useParams();
/*
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

export default  CocurricularDetail;*/
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function CocurricularDetail() {
  const [carouselItems, setCarouselItems] = useState([]);
  const [expandedSlides, setExpandedSlides] = useState({});

  const sliderRef = useRef(null);

  const location = useLocation();
  const { data } = location.state || {};

  useEffect(() => {
    setCarouselItems(data);
  }, [data]);

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

  const handleNext = () => {
    // Use slick slider method to move to the next slide
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="cocurricular-detail-container">
      <h2 className="events-heading">Cocurricular Events</h2>

      <div className="slider-box" style={{ height: 'auto' }}>
        <Slider {...settings} ref={sliderRef}>
          {carouselItems.map((item) => (
            <div key={item._id} className="carousel-slide">
              <h3>{item.title}</h3>
              {item.images.length > 0 && (
                <img
                  src={`http://your-image-base-url/${item.images[0]}`}
                  alt={`Image for ${item.title}`}
                  className="event-image"
                />
              )}
              {expandedSlides[item._id] ? (
                <div>
                  <p>{item.relatedText}</p>
                </div>
              ) : (
                <div>
                  <p>{item.relatedText.substring(0, 100)}</p>
                  <button
                    className="read-more-button"
                    onClick={() => handleReadMore(item._id)}
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

export default CocurricularDetail;
