import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import banner from '../assets/bannerFerre1.png'
import banner2 from '../assets/bannerFerre2.png'
import banner3 from '../assets/bannerFerre3.png'
import Autoplay from 'embla-carousel-autoplay'
export function Carousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img src={banner} alt="" /></div>
        <div className="embla__slide"><img src={banner2} alt="" /></div>
        <div className="embla__slide"><img src={banner3} alt="" /></div>
      </div>
    </div>
  )
}
