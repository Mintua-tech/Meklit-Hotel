import React from 'react';

function Home() {
  return (
    <div>
      <section id="home" class="banner_wrapper p-0">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" styles="background-image:url(../images/slider/slider2.webp);">
              <div class="slide-caption text-center">
                <div>
                  <h3>wellcome to hotel in atlanta</h3>
                  <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. ut enim 
                  </p>
                  
                </div>
              </div>
            </div>
            <div class="swiper-slide" styles="background-image:url(../images/slider/slider1.webp);">
              <div class="slide-caption text-center">
                <div>
                  <h2>wellcome to hotel in atlanta</h2>
                  <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. ut enim
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </section>
    </div>
  )
}

export default Home