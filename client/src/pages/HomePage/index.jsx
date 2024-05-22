import React, { useEffect, useState } from "react";
import { Card } from "antd";
const { Meta } = Card;
import { Grid } from "antd";
import { Col, Divider, Row } from "antd";

import "./index.scss";
import { getAllData } from "../../services";
const HomePage = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getAllData().then((res) => {
      setProducts(res.data.data);
    });
  }, []);

  return (
    <div id="home-page">
      <div className="home-page">
        <section id="banner">
          <h1 className="banner-h1">
            Get your <span>Education</span> today!
          </h1>
        </section>
        <div className="container">
          <section id="dynamics-card">
            <div className="popular-items">
              <h1>Popular Courses</h1>
              <div className="product-cards">
                <Row gutter={16}>
                  {products &&
                    products.map((p) => {
                      return (
                        <Col
                          className="gutter-row"
                          span={8}
                          key={p._id}
                          xs={24}
                          md={12}
                          lg={8}
                        >
                          <Card
                            hoverable
                            cover={<img alt="example" src={p.imageUrl} />}
                          >
                            <Meta title={p.title} description={p.description} />
                          </Card>
                        </Col>
                      );
                    })}
                </Row>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
