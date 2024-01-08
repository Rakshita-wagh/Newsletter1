import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function TechnicalDetail() {
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
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="technical-detail-container">
      <h2 className="events-heading" style={{ textAlign: 'center' }}>
        Technical Events
      </h2>

      <div className="slider-box" style={{ height: 'auto', textAlign: 'center' }}>
        <Slider {...settings} ref={sliderRef}>
          {carouselItems.map((item) => (
            <div key={item._id} className="carousel-slide">
              <h3>{item.title}</h3>
              {item.images.length > 0 && (
                <div className="image-gallery">
                  {item.images.map((image, index) => (
                    <img
                      key={index}
                      src={`data:${image.contentType};base64,${image.data}`}
                      alt={`Image ${index + 1} for ${item.title}`}
                      className="event-image"
                      style={{ maxWidth: '100%', maxHeight: '400px', display: 'inline-block' }}
                    />
                  ))}
                </div>
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

export default TechnicalDetail;