"use client"

import { socials } from "@/data"
import { landingPageSocialMediaDescription } from "@/data"
import { useState, useEffect } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Thumbs } from 'swiper/modules';


const SocialMedia = () => {
  const [instagramPosts, setInstagramPosts] = useState([])
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);                  // Track active thumbnail clicked
  const [activeIndex, setActiveIndex] = useState<number>(0);                    // Secondary thumbnail tracker (for styles) (!)

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/8868451236552531/media?fields=id,caption,media_url,like_count&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`
        )
        
        if (!response.ok) {
          console.log("Failed to retrieve Instagram posts.")
          return
        }

        const data = await response.json()
        
        const limitedData = data.data.slice(0, 5)
        setInstagramPosts(limitedData)
        console.log("Limited Instagram Posts:", limitedData)
      } catch (error) {
        console.error("Error fetching Instagram data:", error)
      }
    }

    fetchInstagramData()
  }, [])

  return (
    <section className="w-full bg-secondary flex justify-center items-center">
      <section className='max-w-max w-full
      px-x pt-44 pb-28
      flex gap-x-12
      max-lg:flex-col max-lg:gap-y-16'>
        <div className="flex flex-col gap-y-12 max-w-[600px]">
          <h3 className='dynamic-subheading text-header'>Check out our latest posts</h3>
          <p className='dynamic-text text-body'>{landingPageSocialMediaDescription}</p>
          <div className="flex flex-row justify-start items-center gap-x-4">
            {
              socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  className="text-2xl text-header">
                  {social.icon}
                </a>
              ))
            }
          </div>
        </div>
        <div className="w-[540px] h-[640px]
        flex flex-col
        max-lg:h-auto max-lg:max-w-[600px] max-lg:w-full">
          {/* Main Swiper */}
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}                                         // Link main swiper with thumbnail swiper (!)
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}            // Update active index
            modules={[FreeMode, Thumbs]}
            className="w-full aspect-square"
          >
            {instagramPosts.map((post: any, index: number) => (
              <SwiperSlide key={index} className="w-full h-full">
                <img src={post.media_url} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail Swiper */}
          <Swiper
            onSwiper={(swiper) => setThumbsSwiper(swiper)}                            // Update value of main swiper on click (!)
            style={{
              "marginLeft" : "0px"
            }}
            loop={true}
            spaceBetween={5}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="h-[100px] w-[485px] mb-14
              max-lg:h-[55px] max-lg:w-[290px]"
          >
            {instagramPosts.map((post: any, index: number) => (
              <SwiperSlide key={index} className="w-full h-full">
                <img
                  src={post.media_url}
                  className={`w-full h-full object-cover 
                    transition-all duration-300 
                    ${activeIndex === index ? 'brightness-100' : 'brightness-[30%]'}`} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </section>
  )
}

export default SocialMedia
