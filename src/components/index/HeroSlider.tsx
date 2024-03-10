import {Swiper, SwiperSlide} from 'swiper/react'
import {useSwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import {Autoplay, Mousewheel} from 'swiper/modules'

export default function HeroSlider() {
  const slideContent = {
    1: ['Для малых компаний'],
    2: ['Бухгалтерский учет'],
    3: ['Оптимизация налогов'],
    4: ['Аналитика предприятия'],
    5: ['Консалтинг'],
  }

  return (
    <div className="w-full h-[25vh] pt-5">
      <Swiper
        loop={true}
        slidesPerView={3}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        direction={'vertical'}
        mousewheel={true}
        modules={[Autoplay, Mousewheel]}
        className="w-full h-full"
      >
        {Object.entries(slideContent).map(([key, value]) => (
          <SwiperSlide className="!grid text-2xl text-center uppercase place-items-center" key={key}>
            {value}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
