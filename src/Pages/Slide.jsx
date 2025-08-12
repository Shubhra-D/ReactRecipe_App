import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import BurgerP from '../assets/burger.jpg';
import MomoP from '../assets/momo.jpg';
import PastaP from '../assets/pasta.jpg';
import SushiP from '../assets/sushi.jpg';
import PastryP from '../assets/pastry.jpg';
import PizzaP from '../assets/pizza.jpg';
import Slider from 'react-slick';

export default function Slide() {
  const slides = [
    { img: BurgerP, title: 'Juicy Burgers', desc: 'Savor every bite of our freshly grilled burgers.' },
    { img: MomoP, title: 'Steamed Momos', desc: 'Delicious momos with authentic spices.' },
    { img: PizzaP, title: 'Cheesy Pizza', desc: 'Hot, cheesy, and baked to perfection.' },
    { img: PastryP, title: 'Sweet Pastries', desc: 'Indulge in our delightful sweet treats.' },
    { img: SushiP, title: 'Fresh Sushi', desc: 'Taste the ocean’s freshness in every roll.' },
    { img: PastaP, title: 'Italian Pasta', desc: 'Rich, creamy pasta made with love.' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box w="80%" m="auto" borderRadius="2xl" overflow="hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} position="relative">
            {/* Image */}
            <Image
              src={slide.img}
              alt={slide.title}
              height="400px"
              width="100%"
              objectFit="cover"
            />

            {/* Overlay Text */}
            <Box
              position="absolute"
              top="90%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="center"
              color="white"
              bg="rgba(0,0,0,0.4)" // semi-transparent background
              p={4}
              borderRadius="md"
            >
              <Text fontSize="2xl" fontWeight="bold">{slide.title}</Text>
              <Text fontSize="md">{slide.desc}</Text>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
