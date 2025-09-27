"use client"

import { socials } from "@/data"
import { landingPageSocialMediaDescription } from "@/data"
import { useState, useEffect } from "react"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Thumbs } from "swiper/modules";

// TO DO : Refresh API key!

type Post = {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  like_count: number;
};

const SocialMedia = () => {
  const [instagramPosts, setInstagramPosts] = useState<Post[]>([])
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  
  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/8868451236552531/media?fields=id,caption,media_url,media_type,like_count&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`
        )

        if (!response.ok) {
          console.log("Failed to retrieve Instagram posts.")
          return
        }

        const data = await response.json()

        console.log(data)

        const filteredData = data.data
          .filter((post: Post) => post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM" || post.media_type === "VIDEO")
          .slice(0, 5)

        setInstagramPosts(filteredData)
        console.log("Filtered Instagram Posts:", filteredData)
      } catch (error) {
        console.error("Error fetching Instagram data:", error)
      }
    }

    fetchInstagramData()
  }, [])

  // Ensure first thumbnail is activated when posts are loaded
  useEffect(() => {
    if (instagramPosts.length > 0) {
      setActiveIndex(0)
    }
  }, [instagramPosts])

  return (
    <section className="w-full bg-secondary flex justify-center items-center">
      <section className='max-w-max w-full
        px-x pt-44 pb-28
        flex gap-x-16 max-xl:gap-x-12 max-lg:gap-x-8
        max-lg:flex-col max-lg:gap-y-12 max-md:gap-y-8'>
        
        <div className="flex flex-col gap-y-12 max-w-[600px]">
          <h3 className='dynamic-subheading text-header'>Check out our latest posts</h3>
          <p className='dynamic-text text-body'>{landingPageSocialMediaDescription}</p>
          <div className="flex flex-row justify-start items-center gap-x-4">
            {socials.map((social, index) => (
              <a 
                key={index}
                href={social.link}
                className="text-2xl text-header">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="w-[540px] h-[655px]
          flex flex-col gap-y-2 items-start
          max-lg:h-auto max-lg:max-w-[600px] max-lg:w-full">
          
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            initialSlide={0}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Note: use `realIndex` for loop
            modules={[FreeMode, Thumbs]}
            className="w-full aspect-square"
          >
            {instagramPosts.map((post: Post, index: number) => (
              <SwiperSlide key={index} className="w-full h-full">
                {/* Show image for IMAGE or CAROUSEL, show video thumbnail for VIDEO */}
                {post.media_type === "VIDEO" ? (
                  <video src={post.media_url} className="w-full h-full object-cover" controls poster="" />
                ) : (
                  <>
                  {/* ISSUE: Change to <Image /> */}
                  <img src={post.media_url} className="w-full h-full object-cover" />
                  </>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={(swiper) => setThumbsSwiper(swiper)}
            style={{
              "marginLeft": "0px"
            }}
            spaceBetween={5}
            slidesPerView={5}
            initialSlide={0}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className={`h-[80px] w-[400px] mb-14 max-lg:h-[60px] max-lg:w-[300px] ${instagramPosts.length === 1 ? 'hidden' : ''}`}
          >
            {instagramPosts.map((post: Post, index: number) => (
              <SwiperSlide key={index} className="w-full h-full">
                <div className="w-full h-full aspect-square">
                  {/* Show image thumbnail for IMAGE or CAROUSEL, video thumbnail for VIDEO */}
                  {post.media_type === "VIDEO" ? (
                    <video src={post.media_url} className={`w-full h-full object-cover cursor-pointer transition-all duration-300 ${activeIndex === index ? 'brightness-100' : 'brightness-[30%]'}`} />
                  ) : (
                    <>
                    {/* ISSUE: Change to <Image /> */}
                    <img
                      src={post.media_url}
                      className={`w-full h-full object-cover cursor-pointer transition-all duration-300 ${activeIndex === index ? 'brightness-100' : 'brightness-[30%]'}`}
                    />
                    </>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>
    </section>
  )
}

export default SocialMedia
