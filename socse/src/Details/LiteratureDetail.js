// PoemSlider.js

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { Spinner, Alert } from 'react-bootstrap';

const PoemSlider = ({ year }) => {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPoems = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get(`http://localhost:8000/poems?year=${year}`);
      setPoems(response.data);
    } catch (error) {
      console.error('Error fetching poems:', error);
      setError('Error fetching poems. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (year) {
      fetchPoems();
    }
  }, [year]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h2 className="text-center mb-4">Poems for Year {year}</h2>

          {loading && <Spinner animation="border" variant="primary" className="d-block mx-auto mb-3" />}
          {error && <Alert variant="danger" className="text-center">{error}</Alert>}

          <Slider {...settings}>
            {poems.map((poem) => (
              <div key={poem._id} className="text-center">
                <p className="lead">{poem.relatedText}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PoemSlider;
