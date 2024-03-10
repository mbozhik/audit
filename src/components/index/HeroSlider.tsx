import {Swiper, SwiperSlide} from 'swiper/react'
import {useSwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import {Autoplay} from 'swiper/modules'

export const slideContent = {
  1: {
    text: 'Для малых компаний',
    link: '/services/for-small-companies/',
  },
  2: {
    text: 'Бухгалтерский учет',
    link: '/services/accounting/',
  },
  3: {
    text: 'Оптимизация налогов',
    link: '/services/tax-optimization/',
  },
  4: {
    text: 'Аналитика предприятия',
    link: '/services/enterprise-analytics/',
  },
  5: {
    text: 'Консалтинг',
    link: '/services/consulting/',
  },
}

export default function HeroSlider() {
  return (
    <div className="w-full h-[25vh] pt-5">
      <Swiper
        loop={true}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        direction={'vertical'}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        {Object.entries(slideContent).map(([key, content]) => (
          <SwiperSlide className="!grid text-3xl text-center uppercase place-items-center" key={key}>
            <a href={content.link}>{content.text}</a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
