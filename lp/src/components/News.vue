<template>
    <div>
      <myheader></myheader>
      <div class="banner">
            <a href="javascript:;"><img id="img1" src="static/images/news/b1.jpg" alt=""></a>
            <div class="banner-nav">
            <!--  下边选项框	-->
            <a href="javascript:;">10大维新美学</a>|
            <a href="javascript:;">专人专车</a>|
            <a href="javascript:;">匠选自由行</a>|
            <a href="javascript:;">质感减龄妆</a>|
            <a href="javascript:;">星范造型</a>|
            <a href="javascript:;">COSMO新娘课堂</a>|
            <a href="javascript:;">FUNS礼服设计师品牌</a>|
            <a href="javascript:;">智能影像设计</a>
            </div>
        </div>
      <div class="m1title">
        <img src="static/images/news/b2.jpg"  class="m1title_img">
      </div>
      <div class="container">
        <div class="news">
          <div class="d1">
            <ul>
                <li>
                  <div>
                      <router-link tag='a' :to="'/Xq'">
                      <img src="static/images/news/06.jpg">
                      </router-link>
                      <h4>随心旅拍新闻一</h4>
                      <p>4月26日唯一旅拍宣布全新品牌代言人邓伦
                      要不要跟着邓伦小哥哥一起出发</p>
                      <span>
                          <em>ONLY TRAVEL PHOTO</em>
                          <em>TIME:2019.04.26</em>
                      </span>
                      <hr>
                      <button class="btn btn-danger">NOW BROWSE!</button>
                  </div>
                </li>
                <li>
                    <div>
                      <img src="static/images/news/01.jpg">
                      <h4>随心旅拍新闻二</h4>
                      <p>一同走进柴碧云的世界,一同寻找"自类"的真谛</p>
                      <span>
                        <em>ONLY TRAVEL PHOTO</em>
                        <em>TIME:2019.01.18</em>
                      </span>
                      <hr>
                      <button class="btn btn-danger">NOW BROWSE!</button>
                    </div>
                </li>
                <li>
                    <div>
                    <img src="static/images/news/02.jpg">
                      <h4>随心旅拍新闻三</h4>
                      <p>随心旅拍携手百克力&amp;张杨果而，在云南大理合作拍摄时尚大片“万物定理”</p>
                      <span>
                        <em>ONLY TRAVEL PHOTO</em>
                        <em>TIME:2019.01.05</em>
                      </span>
                      <hr>
                      <button class="btn btn-danger">NOW BROWSE!</button>
                    </div>
                </li>
                <li>
                    <div>
                      <img src="static/images/news/03.jpg">
                      <h4>随心旅拍新闻四</h4>
                      <p>演技派男神-王阳，2018荧屏首度告白，遇到你，是我的幸福婚纱大片</p>
                      <span>
                        <em>ONLY TRAVEL PHOTO</em>
                        <em>TIME:2018.12.26</em>
                      </span>
                      <hr>
                      <button class="btn btn-danger">NOW BROWSE!</button>
                    </div>
                </li>
                <li>
                    <div>
                      <img src="static/images/news/04.jpg">
                      <h4>随心旅拍新闻四</h4>
                      <p>时尚先生·系列大赏，客片比样片更美，所见即所得，</p>
                      <span>
                        <em>ONLY TRAVEL PHOTO</em>
                        <em>TIME:2018.12.26</em>
                      </span>
                      <hr>
                      <button class="btn btn-danger">NOW BROWSE!</button>
                    </div>
                </li>
                <li>
                    <div>
                      <img src="static/images/news/05.jpg">
                      <h4>随心旅拍新闻五</h4>
                      <p>可暖可盐的邻家大哥哥陈翔携手随心视觉拍摄主题大片“三季”</p>
                      <span>
                        <em>ONLY TRAVEL PHOTO</em>
                        <em>TIME:2018.12.26</em>
                      </span>
                      <hr>
                      <button class="btn btn-danger">NOW BROWSE!</button>
                    </div>
                </li>
                <li>
                    <div>
                      <img src="static/images/news/07.jpg">
                      <h4>随心旅拍新闻六</h4>
                      <p>关于陈小春&amp;应采儿爱情之路：随心旅拍有幸得以所见，开心得以记录</p>
                      <span>
                        <em>ONLY TRAVEL PHOTO</em>
                        <em>TIME:2018.12.26</em>
                      </span>
                      <hr>
                      <button class="btn btn-danger">NOW BROWSE!</button>
                    </div>
                </li>
                <li>
                    <div>
                      <img src="static/images/news/08.jpg">
                      <h4>随心旅拍新闻七</h4>
                      <p>世界拳王李豪&amp;冉莹颖携手随心旅拍合作拍摄“北纬18度”主题大片</p>
                      <span>
                        <em>ONLY TRAVEL PHOTO</em>
                        <em>TIME:2018.12.26</em>
                      </span>
                      <hr>
                      <button class="btn btn-danger">NOW BROWSE!</button>
                    </div>
                </li>
                <li>
                    <div>
                      <img src="static/images/news/08.jpg">
                      <h4>随心旅拍新闻八</h4>
                      <p>世界拳王李豪&amp;冉莹颖携手随心旅拍合作拍摄“北纬18度”主题大片</p>
                      <span>
                        <em>ONLY TRAVEL PHOTO</em>
                        <em>TIME:2018.12.26</em>
                      </span>
                      <hr>
                      <button class="btn btn-danger">NOW BROWSE!</button>
                    </div>
                </li>
                <div style="clear:both;"></div>
            </ul>
          </div>
          <div class="b1">
              <ul class="pagination">
                  <li class="page-item disabled">
                      <a class="page-link" href="">上一页</a>
                  </li>
                  <li class="page-item active">
                      <a class="page-link" href="">1</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" href="">2</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" href="">3</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" href="">4</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" href="">5</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" href="">下一页</a>
                  </li>
              </ul>
          </div>
        </div>
      </div>
      <myfooter></myfooter>
    </div>
</template>
<script>
import MyHeader from "./MyHeader"
import MyFooter from "./MyFooter"
export default {
  components:{
        // 子组件名:对象
        "myheader":MyHeader,
        "myfooter":MyFooter,
  }
}
</script>
<style>
    .container .news{width: 1200px;margin: 0 auto;overflow: hidden;}
    .news .d1{
      width:1200px;height: 100%;
      margin:0 auto;
      overflow: hidden;
    }
    .news .d1 ul{background-color: #fff}
    .news .d1 ul li{
      float: left; 
      margin-left:50px; 
      width: 270px;height: 484px; 
      text-decoration: none;
      list-style-type: none;
    }
    .news .d1 ul li span{
      display: block; 
      padding-top:40px; 
      font-size:12px;
    }
    .news .d1 ul li:hover{
      color: sandybrown;
    }
    .news .d1 li button:hover{
        background: sandybrown;
    }
    .m1title{
      padding:60px 0;
      margin: 0 auto;
    }
    /* 分页 */
    .news .b1{
      width: 500px;
      margin: 0 auto;
    }
    /* banner */
    /* .banner{
        position: relative;
    }
    #img1{
        width:100%;height:600px;
    }
    #img2{
        margin-top:80px;
        width:100%;height:60px;
        margin-bottom:80px;
    } */
    .banner { 
    position: relative;
    max-width: 3000px; 
    margin: auto; 
    }
    .banner img { 
        width: 100%; 
        height: auto; 
        max-width: 1920px; 
        margin: auto; 
        display: block; 
    }
    .banner-nav{
       position:absolute;
       width:100%;height:70px; 
       background:hsla(60, 3%, 15%, 0.624);
       margin-top:-70px;
       text-align:center;
       line-height:70px;
       color:#ffffff;
    }
    .banner-nav a{
        font-size:13px;
        color:#ffffff;
        padding:0px 10px 0px;
    }
    .banner-nav a:hover{
        color:hsl(39, 69%, 60%);
        text-decoration:none;
    }
</style>