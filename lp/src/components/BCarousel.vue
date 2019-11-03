<template>
  <md-card>
    <md-card-media >
      <!-- swiper -->
      <swiper :options="swiperOption" style="width:1200px;">
        <swiper-slide>
            <div style="width:270px;height:416px;background:#fff;">
                <div class="swiper"> 
                    <!-- <a href="javascript:;"> -->
                        <router-link tag='a' :to="'/News'">
                        <div class="pic">
                            <img src="static/images/index/news1.jpg"/>
                        </div>
                        <div class="txt">
                            <h2>新闻资讯一</h2>
                            <p>随心旅拍随心旅拍随心旅拍随心旅拍随心旅拍</p>
                            <span>
                                <em>ONLY TRAVEL PHOTO</em>
                                <em>TIME:2019.04.26</em>
                            </span>
                        </div>
                    <!-- </a> -->
                    </router-link>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div style="width:270px;height:416px;background:#fff;">
                <div class="swiper"> 
                    <router-link tag='a' :to="'/News'">
                        <div class="pic">
                            <img src="static/images/index/news2.jpg"/>
                        </div>
                        <div class="txt">
                            <h2>新闻资讯二</h2>
                            <p>随心旅拍随心旅拍随心旅拍随心旅拍随心旅拍</p>
                            <span>
                                <em>ONLY TRAVEL PHOTO</em>
                                <em>TIME:2019.04.26</em>
                            </span>
                        </div>
                    </router-link>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div style="width:270px;height:416px;background:#fff;">
                <div class="swiper"> 
                    <router-link tag='a' :to="'/News'">
                        <div class="pic">
                            <img src="static/images/index/news3.jpg"/>
                        </div>
                        <div class="txt">
                            <h2>新闻资讯三</h2>
                            <p>随心旅拍随心旅拍随心旅拍随心旅拍随心旅拍</p>
                            <span>
                                <em>ONLY TRAVEL PHOTO</em>
                                <em>TIME:2019.04.26</em>
                            </span>
                        </div>
                    </router-link>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div style="width:270px;height:416px;background:#fff;">
                <div class="swiper"> 
                    <router-link tag='a' :to="'/News'">
                        <div class="pic">
                            <img src="static/images/index/news4.jpg"/>
                        </div>
                        <div class="txt">
                            <h2>新闻资讯四</h2>
                            <p>随心旅拍随心旅拍随心旅拍随心旅拍随心旅拍</p>
                            <span>
                                <em>ONLY TRAVEL PHOTO</em>
                                <em>TIME:2019.04.26</em>
                            </span>
                        </div>
                    </router-link>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div style="width:270px;height:416px;background:#fff;">
                <div class="swiper"> 
                    <router-link tag='a' :to="'/News'">
                        <div class="pic">
                            <img src="static/images/index/news5.jpg"/>
                        </div>
                        <div class="txt">
                            <h2>新闻资讯五</h2>
                            <p>随心旅拍随心旅拍随心旅拍随心旅拍随心旅拍</p>
                            <span>
                                <em>ONLY TRAVEL PHOTO</em>
                                <em>TIME:2019.04.26</em>
                            </span>
                        </div>
                    </router-link>
                </div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: true,
        speed: 300,
        loop: true,
        grabCursor: true,
        scrollbar: '.swiper-scrollbar',
        mousewheelControl: true,
        // observeParents: true
        }
      }
    }
  }
</script>
<style scoped>
    a{text-decoration: none}
    .pic { 
        text-align: center; 
    }
    .pic img {
        width: 270px; height: 190px; 
    }
    .txt h2 { 
        font-size: 18px; 
        color: #4f4f4f; 
        font-weight: normal; 
        padding: 20px; 
        padding-bottom: 0; 
        text-align: left 
    }
    .txt p { 
        padding-top: 10px; 
        color: #838383; 
        text-align: left; 
        padding: 20px; 
        padding-bottom: 0; 
    }
    .txt span { 
        width: 270px; 
        position: absolute; 
        color: #838383; 
        bottom: 0; left: 0; 
        height: 42px; line-height: 42px; 
        font-size: 12px; 
        border-top: solid 1px #eae3db 
    }
    .swiper:hover .txt h2 { 
        color: #f00; 
    }
    .swiper:hover .txt p { 
        color: #ab9171; 
    }
    .swiper:hover .txt span { 
        color: #ab9171; 
    }
</style>