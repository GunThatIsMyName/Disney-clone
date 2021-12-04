import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper";
import styled from "styled-components";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Hero = () => {
  return (
    <Wrapper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1618855468071-0fa0d8383377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="a" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80" alt="b" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1570745859748-6ba2014423eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="c" />
      </SwiperSlide>
    </Wrapper>
  );
};

const Wrapper = styled(Swiper)`
  margin-top: 3rem;
  height:20rem;
  width:80vw;
  .swiper-slide{
    img{
      object-fit:cover;
      border-radius:10px;
    }
  }
`;


export default Hero;
