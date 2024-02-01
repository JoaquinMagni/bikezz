'use client';
import Bike from './Bike';

// Import Swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules'

const PopularBikeCarousel = ({ bikes }) => {
  return (
    <Swiper>
        {bikes.map(bike => {
            return <SwiperSlide key={bike._id}>
                <Bike bike={bike} />
            </SwiperSlide>
        })}
    </Swiper>
  )
}

export default PopularBikeCarousel