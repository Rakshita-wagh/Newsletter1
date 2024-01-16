// MagazineLayout.js
import React, { useState } from 'react';
import { Row, Col, Card, Typography, Input, Button } from 'antd';
import ReactPageflip from 'react-pageflip';
import './MagazineLayout.css'; // Import external stylesheet

const { Title, Paragraph } = Typography;

const MagazineLayout = () => {
  const [userContent, setUserContent] = useState({
    heading: '',
    article: '',
    author: '',
    image: '',
  });

  const [pages, setPages] = useState([]);

  const handleInputChange = (key, value) => {
    setUserContent((prevContent) => ({ ...prevContent, [key]: value }));
  };

  const addPage = () => {
    setPages((prevPages) => [...prevPages, { ...userContent }]);
    setUserContent({ heading: '', article: '', author: '', image: '' });
  };

  const deletePage = (index) => {
    setPages((prevPages) => prevPages.filter((_, i) => i !== index));
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9' }}>
      <Title level={2} style={{ textAlign: 'center' }}>Magazine Layout</Title>

      <Row gutter={16} style={{ marginTop: '20px' }}>
        <Col span={24}>
          <Card title="Add Content">
            <Input
              placeholder="Heading"
              value={userContent.heading}
              onChange={(e) => handleInputChange('heading', e.target.value)}
              style={{ marginBottom: '10px' }}
            />
            <Input
              placeholder="Article"
              value={userContent.article}
              onChange={(e) => handleInputChange('article', e.target.value)}
              style={{ marginBottom: '10px' }}
            />
            <Input
              placeholder="Author"
              value={userContent.author}
              onChange={(e) => handleInputChange('author', e.target.value)}
              style={{ marginBottom: '10px' }}
            />
            <Input
              placeholder="Image URL"
              value={userContent.image}
              onChange={(e) => handleInputChange('image', e.target.value)}
              style={{ marginBottom: '10px' }}
            />
            <Button type="primary" onClick={addPage}>Add Page</Button>
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: '20px' }}>
        <Col span={24}>
          <Card title="Display Content">
            <ReactPageflip
              width={500 * 2} // Considering a higher resolution for better display
              height={297 * 2} // Considering a higher resolution for better display
              animationDuration={700}
              showCover
              mobileScrollSupport
            >
              {pages.map((page, index) => (
                <div
                  key={index}
                  className={`custom-page custom-background-${index + 1}`}
                >
                  <div className="page-content">
                    <div>
                      <Title level={3}>{page.heading}</Title>
                      <Paragraph>{page.article}</Paragraph>
                      <Paragraph>Author: {page.author}</Paragraph>
                      {page.image && <img src={page.image} alt="Author" style={{ maxWidth: '100%' }} />}
                    </div>
                  </div>
                  <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                    <Button type="danger" onClick={() => deletePage(index)}>Delete Page</Button>
                  </div>
                </div>
              ))}
            </ReactPageflip>
          </Card>
        </Col>
      </Row>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button type="primary" >Save</Button>
      </div>
    </div>
  );
};

export default MagazineLayout;
