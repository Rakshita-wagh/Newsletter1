/*import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LiteratureDetail.css'; // Import your custom CSS file

function LiteratureDetail() {
    const { year } = useParams();

    // Example data for the carousel
    const carouselItems = [
        { id: 1, title: 'Poem 1', content: 'Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1' },
        { id: 2, title: 'Poem 2', content: 'Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2' },
        { id: 3, title: 'Poem 3', content: 'Content of Poem 3' },
        // Add more items as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="literature-detail-container">
            <h2>Literature Detail for {year}</h2>
            <div className="slider-box">
                <Slider {...settings}>
                    {carouselItems.map((item) => (
                        <div key={item.id} className="carousel-slide">
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                            <button className="read-more-button">Read More</button>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default LiteratureDetail;*/

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LiteratureDetail.css'; // Import your custom CSS file
import { useLocation } from 'react-router-dom';

function LiteratureDetail() {
  const { year } = useParams();

  const { data } = useLocation().state || { data: [] };

  // Example data for the carousel
  /*const carouselItems = [
    {
      id: 1,
      title: 'Poem 1',
      content:
        'Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1Content of Poem 1',
    },
    {
      id: 2,
      title: 'Poem 2',
      content:
        'Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2Content of Poem 2',
    },
    {
      id: 3,
      title: 'Poem 3',
      content: 'Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3Content of Poem 3',
    },
    
  ];*/
  console.log('Raw Data:', data);
  const carouselItems = Array.isArray(data)
  ? data.map((item) => ({
      id: item._id,
      title: item.title,
      content: item.relatedText, // Assuming relatedText is the content
      year: item.year,
    }))
  : [];
    console.log('carouselItems:', carouselItems);


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
              <h3>{item.title}</h3>
              {expandedSlides[item.id] ? (
                <div>
                  <p>{item.content}</p>
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

export default LiteratureDetail;



/*
  return (
    <div className="literature-detail-container">
      <h2 className="poems-heading">Poems of the year {year}</h2>

      <div className="slider-box">
        <Slider {...settings}>
          {carouselItems.map((item) => (
            <div key={item.id} className="carousel-slide">
              <h3>{item.title}</h3>
              {expandedSlides[item.id] ? (
                <div>
                  <p>{item.content}</p>
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
*/