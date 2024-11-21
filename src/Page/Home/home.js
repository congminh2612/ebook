import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CardBook } from "../../Components/Card/card";
import "./home.scss";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const renderSliderItems = () =>
    Array(9)
      .fill(null)
      .map((_, index) => (
        <div className="categories-slider-item" key={index}>
          <CardBook />
        </div>
      ));

  return (
    <>
    <div className="container slider">
      <div className="title-book">
        <span>Sách mới nổi bật</span>
      </div>
      <div>
        <Carousel responsive={responsive}>
          {renderSliderItems()}
        </Carousel>
      </div>
    </div>
    <div className="container slider">
      <div className="title-book">
        <span>Sách Văn Học</span>
      </div>
      <div>
        <Carousel responsive={responsive}>
          {renderSliderItems()}
        </Carousel>
      </div>
    </div>
    <div className="container slider">
      <div className="title-book">
        <span>Sách Toán Học</span>
      </div>
      <div>
        <Carousel responsive={responsive}>
          {renderSliderItems()}
        </Carousel>
      </div>
    </div>
    <div className="container slider">
      <div className="title-book">
        <span>Sách Vật Lý</span>
      </div>
      <div>
        <Carousel responsive={responsive}>
          {renderSliderItems()}
        </Carousel>
      </div>
    </div>
    <div className="container slider">
      <div className="title-book">
        <span>Sách Ngoại Ngữ</span>
      </div>
      <div>
        <Carousel responsive={responsive}>
          {renderSliderItems()}
        </Carousel>
      </div>
    </div>
    <div className="container slider">
      <div className="title-book">
        <span>Sách Hóa Học</span>
      </div>
      <div>
        <Carousel responsive={responsive}>
          {renderSliderItems()}
        </Carousel>
      </div>
    </div>
    </>
  );
};

export default HomePage;
