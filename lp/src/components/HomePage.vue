<template>
    <div id="home">
        <myheader></myheader>
        <div id="slideBox" class="banner">
            <el-carousel indicator-position="outside" height="500px">
                <el-carousel-item v-for="item in bannerImg" :key="item.id">
                <img :src="item.src">
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 分割线 -->
        <div class="target_title">
            <img src="static/images/index/200.jpg">
        </div>
        <div class="wrap_target">
            <div class="target">
                <!-- 一级导航标题 -->
                <ul class="big_title">
                    <li>
                        <a><img src="static/images/index/place.png" alt><br>国内</a>
                    </li>
                    <li>
                        <a><img src="static/images/index/place.png" alt><br>亚洲</a>
                    </li>
                    <li>
                        <a><img src="static/images/index/place.png" alt><br>欧洲</a>
                    </li>
                    <li>
                        <a><img src="static/images/index/place.png" alt><br>大洋洲</a>
                    </li>
                    <li>
                        <a><img src="static/images/index/place.png" alt><br>非洲</a>
                    </li>
                    <li>
                        <a><img src="static/images/index/place.png" alt><br>美洲</a>
                    </li>
                </ul>
                <!-- 二级导航 -->
                <div class="tar_nav">
                    <!-- 二级导航列表 -->
                    <dl style="display:block;">
                        <a>三亚</a>
                        <a>丽江</a>
                        <a>青岛</a>
                    </dl>
                    <dl style="display:none;">
                        <a href="javascript:;">普吉岛</a>
                        <a>巴厘岛</a>
                        <a>马尔代夫</a>
                    </dl>
                    <dl style="display:none;">
                        <a>巴黎</a>
                        <a>布拉格</a>
                        <a>普罗旺斯</a>
                    </dl>
                    <dl style="display:none;">
                        <a>悉尼</a>
                        <a>墨尔本</a>
                        <a>霍巴特</a>
                    </dl>
                    <dl style="display:none;">
                        <a>毛里求斯</a>
                    </dl>
                    <dl style="display:none;">
                        <a>纽约</a>
                    </dl>
                    <!-- 图片层 -->
                    <div class="content">
                        <!-- 一级导航下第一项图片层 -->
                        <ul style="display:block;">
                            <!-- 二级导航下第一项图片层 -->
                            <li style="display:list-item;">
                                <a href="javascript:;">
                                    <img src="static/images/index/sanya_shouye.jpg" alt="三亚湾">
                                </a>
                            </li>
                            <li style="display:none;">
                                <a href="javascript:;">
                                    <img src="static/images/index/lijiang_shouye.jpg" alt="丽江">
                                </a>
                            </li>
                            <li style="display:none;">
                                <a href="javascript:;">
                                    <img src="static/images/index/qingdao_shouye.jpg" alt="青岛">
                                </a>
                            </li>
                        </ul>
                        <ul style="display:none;">
                            <!-- 二级导航下第二项图片层 -->
                            <li style="display:list-item;">
                                <a href="javascript:;">
                                    <img src="static/images/index/pujidao_shouye.jpg" alt="普吉岛">
                                </a>
                            </li>
                            <li style="display:none;">
                                <a href="javascript:;">
                                    <img src="static/images/index/balidao_shouye.jpg" alt="巴厘岛">
                                </a>
                            </li>
                            <li style="display:none;">
                                <a href="javascript:;">
                                    <img src="static/images/index/maerdaifu_shouye.jpg" alt="马尔代夫">
                                </a>
                            </li>
                        </ul>
                        <ul style="display:none;">
                            <!-- 二级导航下第三项图片层 -->
                            <li style="display:list-item;">
                                <a href="javascript:;">
                                    <img src="static/images/index/bali_shouye.jpg" alt="巴厘岛">
                                </a>
                            </li>
                            <li style="display:none;">
                                <a href="javascript:;">
                                    <img src="static/images/index/bulage_shouye.jpg" alt="布拉格">
                                </a>
                            </li>
                            <li style="display:none;">
                                <a href="javascript:;">
                                    <img src="static/images/index/puluowangsi_shouye.jpg" alt="普罗旺斯">
                                </a>
                            </li>
                        </ul>
                        <ul style="display:none;">
                            <!-- 二级导航下第四项图片层 -->
                            <li style="display:list-item;">
                                <a href="javascript:;">
                                    <img src="static/images/index/xini_shouye.jpg" alt="悉尼">
                                </a>
                            </li>
                            <li style="display:none;">
                                <a href="javascript:;">
                                    <img src="static/images/index/moerben_shouye.jpg" alt="墨尔本">
                                </a>
                            </li>
                            <li style="display:none;">
                                <a href="javascript:;">
                                    <img src="static/images/index/huobate_shouye.jpg" alt="霍巴特">
                                </a>
                            </li>
                        </ul>
                        <ul style="display:none;">
                            <!-- 二级导航下第五项图片层 -->
                            <li style="display:list-item;">
                                <a href="javascript:;">
                                    <img src="static/images/index/maoliqiusi_shouye.jpg" alt="毛里求斯">
                                </a>
                            </li>
                        </ul>
                        <ul style="display:none;">
                            <!-- 二级导航下第六项图片层 -->
                            <li style="display:list-item;">
                                <a href="javascript:;">
                                    <img src="static/images/index/niuyue_shouye.jpg" alt="纽约">
                                </a>
                            </li>javascript:;
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- 分割线 -->
        <div class="target_title">
            <img src="static/images/index/kepian_hr.jpg">
        </div>
        <!-- 客片 -->
        <div class="ind_os">
            <div class="ind_osa main1400">
                <div class="ind_osas">
                    <img src="static/images/index/ind_osas1.png" alt="">
                    <img src="static/images/index/ind_osas2.png" alt="">
                    <img src="static/images/index/ind_osas3.png" alt="">
                </div>
                <div class="ind_osac">
                    <ul>
                        <li>
                            <router-link tag='a' :to="'/Kepian'">
                                <img src="static/images/index/kepian1.jpg" alt="">
                                <div>
                                    <span class="t">客片展示1</span>
                                    <p class="d">
                                        <span>KEPIAN</span>
                                        <span>ZHANSHI1</span>
                                    </p>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag='a' :to="'/Kepian'">
                                <img src="static/images/index/kepian2.jpg" alt="">
                                <div>
                                    <span class="t">客片展示2</span>
                                    <p class="d">
                                        <span>KEPIAN</span>
                                        <span>ZHANSHI2</span>
                                    </p>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag='a' :to="'/Kepian'">
                                <img src="static/images/index/kepian3.jpg" alt="">
                                <div>
                                    <span class="t">客片展示3</span>
                                    <p class="d">
                                        <span>KEPIAN</span>
                                        <span>ZHANSHI3</span>
                                    </p>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag='a' :to="'/Kepian'">
                                <img src="static/images/index/kepian4.jpg" alt="">
                                <div>
                                    <span class="t">客片展示4</span>
                                    <p class="d">
                                        <span>KEPIAN</span>
                                        <span>ZHANSHI4</span>
                                    </p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="ind_osax">
                    <img src="static/images/index/osi.png">
                </div>
            </div>
        </div>
        <!-- 新闻资讯 -->
        <div class="wrap_news">
            <!-- 分割线 -->
            <div class="target_title">
                <img src="static/images/index/news_title.jpg">
            </div>
            <bcarousel></bcarousel>
        </div>
        <myfooter></myfooter>
    </div>
</template>
<script>
$(document).ready(function(e) {	
	//+200目的地
	$(".target .big_title li").hover(function(){
		 var index = $(this).index();
		 var tar_nav = $(".tar_nav dl").eq(index);
		 var content =  $(".tar_nav .content").children("ul")
		 $(this).addClass("on").siblings().removeClass("on");
		 tar_nav.show().siblings("dl").hide();
		 content.eq(index).show().siblings("ul").hide()
	})
	
	$(".tar_nav dl a").hover(function(){
		 var index = $(this).parent("dl").index();
		 var index_a = $(this).index();
		 $(".target .tar_nav .content").children("ul").eq(index).children("li").eq(index_a).show().siblings().hide();
    })
    
    // 客片展示
    $(".ind_osac ul li").hover(function(){
        $(this).animate({marginTop:"-10px"},"normal");
    },function(){
        $(this).animate({marginTop:"0"},"normal");
    })
    
})

import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import BCarousel from "./BCarousel";
export default {
    data() {
      return {
        bannerImg:[{
          id:1,
          src:'static/images/index/banner1.jpg',
        },{
          id:2,
          src:'static/images/index/banner2.jpg',
        },{
          id:3,
          src:'static/images/index/banner3.jpg',
        },{
          id:4,
          src:'static/images/index/banner4.jpg',  
        }]
      }
    },
    components:{
    // 子组件名:对象
    "myheader":MyHeader,
    "myfooter":MyFooter,
    "bcarousel":BCarousel
    }
}
</script>
<style scoped>
    /* 样式格式化 */
    html { color: #000; background: #FFF; overflow-x:hidden;}
    body { color: #111111; font-family: "\5FAE\8F6F\96C5\9ED1"; font-size: 14px;}
    body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, 
    fieldset, legend, input, button, textarea, p, blockquote, th, td { 
        margin: 0; padding: 0; 
    }
    table { border-collapse: collapse; border-spacing: 0; }
    fieldset, img { border: 0; }
    address, caption, cite, code, dfn, em, strong, th, var, optgroup { 
        font-style: inherit; 
        font-weight: inherit; 
    }
    del, ins { text-decoration: none; }
    li { list-style: none; }
    caption, th { text-align: left; }
    q:before, q:after { content: ''; }
    abbr, acronym { border: 0; font-variant: normal; }
    sup { vertical-align: baseline; }
    sub { vertical-align: baseline; }
    input, button, textarea, select, optgroup, option { 
        font-family: inherit; 
        font-size: inherit; 
        font-style: inherit; 
        font-weight: inherit; 
    }
    input, button, textarea, select { *font-size:100%;
    }
    img { vertical-align: middle }
    table { background: #fff }
    a { text-decoration: none; color: #101010; }
    .fl { float: left; }
    .fr { float: right; }
    input, select { vertical-align: middle; }
    /* 轮播图 */
    .el-carousel__item div {
        color: #475669;
        font-size: 18px;
        opacity: 0;
        line-height: 300px;
        margin: 0;
    }
    /*banner*/
    .banner { position: relative; max-width: 1920px; margin: auto }
    /* 200+ */
    .target_title { 
        text-align: center; 
        overflow: hidden; 
        padding: 66px 0 58px 0; 
        width: 100%; 
    }
    .target_title img { width: 100%; max-width: 1920px }
    /* tabs样式 */
    .wrap_target{
        overflow: hidden;
        background-color: #f8f8f8;
    }
    .target{
        width: 1200px;
        margin:auto;
    }
    .target .big_title{
        width: 440px;margin: auto;
    }
    .target .big_title li{
        float: left;
        list-style-type: none;
        width: 70px;height: 57px;
        background-color: #544d4c;
        color: #fff;
        text-align: center;
        margin-right: 2px;
        cursor: pointer;
    }
    .target .big_title li:hover{
        background-color: #f00;
    }
    .target .tar_nav{
        width: 100%;overflow: hidden;
        padding-top: 20px; 
    }
    .target .tar_nav dl{
        width: 100%;margin:auto;
        text-align: center;
    }
    .target .tar_nav a{
        display: inline-block;
        padding-right: 30px;
        font-size: 16px;
        cursor: pointer;
        text-decoration: none;
        color: #101010;
    }
    .target .tar_nav a:hover{
        color: red;
    }
    .target .tar_nav .content{
        overflow: hidden;
        width: 100%;
        text-align: center;
        padding-top: 20px;
    }
    .target .tar_nav .content img{
        display: block;
        margin: auto;
    }
    /* 客片展示 */
    .ind_os{
        width:100%;
        height:885px;
        background:#282727;
        margin:0 auto;
        overflow: hidden;
    }
    .ind_osa{
        width:1400px;
        height:885px;
        margin:0 auto;
    }
    .ind_osas{
        padding-top:60px;
        padding-bottom: 60px;
    }
    .ind_osas img:nth-child(1){
        padding-right:210px;
    }
    .ind_osas img:nth-child(2){
        padding-right:25px;
    }
    .ind_osac ul{
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    }
    .ind_osac ul li{
        /* float:left; */
        /* width:325px; */
        /* height:510px; */
        overflow:hidden;
        /* margin-right:33.3px; */
        position:relative;
        cursor:pointer;
        /* margin-top: -20px; */
    }
    .ind_osac ul li:nth-last-child(1){
        margin-right:0;
    }
    .ind_osac ul li div{
        width: 325px;height: 510px;
        position: absolute;
        bottom: 0;
        /* opacity:0.5; */
    }
    .ind_osac ul li div i{
        display:block;
        position:absolute;
        bottom:0;
        width:325px;height:493px;
    }
    .ind_osac ul li:nth-child(2n) div i{
        display:block;
        position:absolute;
        bottom:0;
        width:325px;height:493px;
    }
    .ind_osac ul li div span.t{
        z-index:100;
        font-size:30px;
        color:#ffffff;
        position:absolute;
        bottom:15px;
        left:15px;
    }
    .ind_osac ul li:hover div span,
    .ind_osac ul li:hover div p.d span{
        color:#ffc107;
    }

    .ind_osac ul li div p.d span{
        z-index:100;
        /* display:block; */
        height:15px;
        line-height:15px;
        font-size:14px;
        color:#fff;
    }
    .ind_osac ul li div p.d{
        z-index:100;
        width:80px;height:30px;
        position:absolute;
        bottom:30px;
        left:155px;
    }

    .ind_osax{
        width:1400px;
        height:175px;line-height:175px;margin:0 auto;margin-top:70px;
        text-align:center;
    }
    .ind_osax img{
        width:807px;height:25px;
        margin:0 auto;
        vertical-align:center;
    }
    /*新闻资讯*/
    .wrap_news {
        overflow: hidden;
        height: 770px;
        background: #1a1a1a;
    }
    .news .target_title{
        padding-top: 0;
    }
    .news {
        width: 1300px; 
        overflow: hidden; 
        position: relative; 
        margin: auto
    }
    .news .prev, .news .next{ 
        display: block; 
        width: 39px; height: 42px; 
        position: absolute; 
        overflow: hidden; 
        cursor: pointer; 
        right: 0; top: 170px 
    }
    .news .prev img, .news .next img{ 
        margin-top: 3px; 
    }
    .news .next { 
        right: auto; left: 0; 
    }
    .news .bd { 
        width: 1170px; margin: auto 
    }
    .news .bd ul { 
        width: 3874px; 
        position: relative; 
        overflow: hidden; 
        padding: 0px; 
        margin: 0px; 
        left: -298px;
    }
    .news .bd ul li { 
        float: left; 
        overflow: hidden; 
        text-align: center;
        width: 270px; height: 416px; 
        overflow: hidden; 
        background: #fff; 
        margin-right: 28px; 
        position: relative;
    }
    .news .bd ul li .pic { 
        text-align: center; 
    }
    .news .bd ul li .pic img {
        width: 270px; height: 190px; 
    }
    .news .txt h2 { 
        font-size: 18px; 
        color: #4f4f4f; 
        font-weight: normal; 
        padding: 20px; 
        padding-bottom: 0; 
        text-align: left 
    }
    .news .txt p { 
        padding-top: 10px; 
        color: #838383; 
        text-align: left; 
        padding: 20px; 
        padding-bottom: 0; 
    }
    .news .txt span { 
        width: 100%; 
        position: absolute; 
        color: #838383; 
        bottom: 0; left: 0; 
        height: 42px; line-height: 42px; 
        font-size: 12px; 
        border-top: solid 1px #eae3db 
    }
    .news li:hover .txt h2 { 
        color: #f00; 
    }
    .news li:hover .txt p { 
        color: #ab9171; 
    }
    .news li:hover .txt span { 
        color: #ab9171; 
    }
</style>