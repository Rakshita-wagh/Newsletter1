import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function LiteratureDetail() {
  const [carouselItems, setCarouselItems] = useState([]);
  const [expandedSlides, setExpandedSlides] = useState({});

  const location = useLocation();
  const { data } = location.state || {};
  console.log(location.state);


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

  return (
    <div className="literature-detail-container">
      <h2 className="poems-heading">Poems</h2>

      <div className="slider-box" style={{ height: 'auto' }}>
        <Slider {...settings}>
          {carouselItems.map((item) => (
            <div key={item._id} className="carousel-slide">
              <h3>{item.title}</h3>
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

export default LiteratureDetail;
