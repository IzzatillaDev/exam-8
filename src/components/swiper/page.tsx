"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './style.css';
import { FreeMode, Pagination } from 'swiper/modules';
import Card from "@/components/products/page"


export default function App({data}:any) {
  console.log(data,"llllllll")
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 1024px (desktop)
          1252: {
            slidesPerView: 4,
          },
          // when window width is >= 768px (tablet)
          768: {
            slidesPerView: 3,
          },
          // when window width is >= 320px (mobile)
          320: {
            slidesPerView: 2,
          },
        }}

      >
        {/* <SwiperSlide><Card /></SwiperSlide> */}
        {
        data?.map((el:any,i:any) => {
            return (
              <SwiperSlide key={i}>
                <Card
                datas={el}
                />
              </SwiperSlide>
            )
  
        })}
        {/* <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide> */}
      </Swiper>
    </>
  );
}
