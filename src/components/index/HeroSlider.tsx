import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import {Autoplay} from 'swiper/modules'

export const linksArray = {
  1: {
    text: 'Запуск бизнеса с нуля',
    link: '/services/business-startup',
  },
  2: {
    text: 'Бухгалтерские услуги',
    link: '/services/accounting-services',
  },
  3: {
    text: 'Финансово-экономические услуги',
    link: '/services/financial-services/',
  },
  4: {
    text: 'Юридические услуги',
    link: '/services/legal-services/',
  },
  5: {
    text: 'Услуги для НКО',
    link: '/services/nko-services/',
  },
}

export default function HeroSlider() {
  return (
    <div className="w-full h-[25vh] -mt-7 sm:mt-[40vh]">
      <Swiper
        loop={true}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={700}
        centeredSlides={true}
        direction={'vertical'}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        {Object.entries(linksArray).map(([key, content]) => (
          <SwiperSlide className="!grid text-3xl xl:text-2xl sm:text-base text-center uppercase place-items-center" key={key}>
            <a href={content.link}>{content.text}</a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
