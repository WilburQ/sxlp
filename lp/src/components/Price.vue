<template>
    <div>
        <myheader></myheader>
        <!-- banner -->
        <div class="banner" id="banner">
            <a href="javascript:;">
                <img src="static/images/index/price_banner.jpg">
            </a>
        </div>
        <div class="blk50"></div>
        <div class="container">
        <!-- 价格展示 -->
            <div class="target_title">
                <img src="static/images/index/price_title2.png" alt="">
                <a class="youhui">优惠</a>
                <hr>
            </div>
            <!-- <div class="xian"></div> -->
            <div class="blk50"></div>
            <div class="target">
                <ul>
                    <li class="on">
                        <a href="javascript:;">
                            三亚
                            <div class="border"></div>
                            <div class="border"></div>
                            <div class="border"></div>
                            <div class="border"></div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            丽江
                            <div class="border"></div>
                            <div class="border"></div>
                            <div class="border"></div>
                            <div class="border"></div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            青岛
                            <div class="border"></div>
                            <div class="border"></div>
                            <div class="border"></div>
                            <div class="border"></div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            普吉岛
                            <div class="border"></div>
                            <div class="border"></div>
                            <div class="border"></div>
                            <div class="border"></div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            巴厘岛
                            <div class="border"></div>
                            <div class="border"></div>
                            <div class="border"></div>
                            <div class="border"></div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            马尔代夫
                            <div class="border"></div>
                            <div class="border"></div>
                            <div class="border"></div>
                            <div class="border"></div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="blk50"></div>
            <!-- 价格展示列表 -->
            <div class="kepian_list">
                <ul>
                    <!-- 1 -->
                    <li>
                        <div class="p-con">
                            <a href="javascript:;">
                                <img src="static/images/index/baojia_sanya1.jpg" alt="">
                            </a>
                            <div class="bj_hover">
                                <span class="tit">三亚-经典特惠</span>
                                <ins>Sui Xin Travel</ins>
                                <ins>Wedding Photography</ins>
                                <span class="liangdian">拍摄景点：A 幸福湾基地+内景/夜景（2选1）...</span>
                            </div>
                        </div>
                        <div class="p-txt">
                            <ul class="bj">
                                <li class="jiage">¥9999</li>
                                <li>
                                    <span>推荐指数：</span>
                                </li>
                                <li class="xingji">
                                    <div class="block">
                                        <el-rate v-model="value1"></el-rate>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <!-- 2 -->
                    <li>
                        <div class="p-con">
                            <a href="javascript:;">
                                <img src="static/images/index/baojia_sanya2.jpg" alt="">
                            </a>
                            <div class="bj_hover">
                                <span class="tit">三亚-经典特惠</span>
                                <ins>Sui Xin Travel</ins>
                                <ins>Wedding Photography</ins>
                                <span class="liangdian">拍摄景点：A 幸福湾基地+内景/夜景（2选1）...</span>
                            </div>
                        </div>
                        <div class="p-txt">
                            <ul class="bj">
                                <li class="jiage">¥9999</li>
                                <li>
                                    <span>推荐指数：</span>
                                </li>
                                <li class="xingji">
                                    <div class="block">
                                        <el-rate v-model="value2"></el-rate>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <!-- 3 -->
                    <li>
                        <div class="p-con">
                            <a href="javascript:;">
                                <img src="static/images/index/baojia_sanya3.jpg" alt="">
                            </a>
                            <div class="bj_hover">
                                <span class="tit">三亚-经典特惠</span>
                                <ins>Sui Xin Travel</ins>
                                <ins>Wedding Photography</ins>
                                <span class="liangdian">拍摄景点：A 幸福湾基地+内景/夜景（2选1）...</span>
                            </div>
                        </div>
                        <div class="p-txt">
                            <ul class="bj">
                                <li class="jiage">¥9999</li>
                                <li>
                                    <span>推荐指数：</span>
                                </li>
                                <li class="xingji">
                                    <div class="block">
                                        <el-rate v-model="value3"></el-rate>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <!-- 4 -->
                    <li>
                        <div class="p-con">
                            <a href="javascript:;">
                                <img src="static/images/index/baojia_sanya4.jpg" alt="">
                            </a>
                            <div class="bj_hover">
                                <span class="tit">三亚-经典特惠</span>
                                <ins>Sui Xin Travel</ins>
                                <ins>Wedding Photography</ins>
                                <span class="liangdian">拍摄景点：A 幸福湾基地+内景/夜景（2选1）...</span>
                            </div>
                        </div>
                        <div class="p-txt">
                            <ul class="bj">
                                <li class="jiage">¥9999</li>
                                <li>
                                    <span>推荐指数：</span>
                                </li>
                                <li class="xingji">
                                    <div class="block">
                                        <el-rate v-model="value4"></el-rate>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <!-- 5 -->
                    <li>
                        <div class="p-con">
                            <a href="javascript:;">
                                <img src="static/images/index/baojia_sanya1.jpg" alt="">
                            </a>
                            <div class="bj_hover">
                                <span class="tit">三亚-经典特惠</span>
                                <ins>Sui Xin Travel</ins>
                                <ins>Wedding Photography</ins>
                                <span class="liangdian">拍摄景点：A 幸福湾基地+内景/夜景（2选1）...</span>
                            </div>
                        </div>
                        <div class="p-txt">
                            <ul class="bj">
                                <li class="jiage">¥9999</li>
                                <li>
                                    <span>推荐指数：</span>
                                </li>
                                <li class="xingji">
                                    <div class="block">
                                        <el-rate v-model="value5"></el-rate>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <!-- 6 -->
                    <li>
                        <div class="p-con">
                            <a href="javascript:;">
                                <img src="static/images/index/baojia_sanya2.jpg" alt="">
                            </a>
                            <div class="bj_hover">
                                <span class="tit">三亚-经典特惠</span>
                                <ins>Sui Xin Travel</ins>
                                <ins>Wedding Photography</ins>
                                <span class="liangdian">拍摄景点：A 幸福湾基地+内景/夜景（2选1）...</span>
                            </div>
                        </div>
                        <div class="p-txt">
                            <ul class="bj">
                                <li class="jiage">¥9999</li>
                                <li>
                                    <span>推荐指数：</span>
                                </li>
                                <li class="xingji">
                                    <div class="block">
                                        <el-rate v-model="value6"></el-rate>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="xian_bottom">
                <img src="static/images/index/osi.png" alt="">
            </div>
            <div class="blk50"></div>
        </div>
        <myfooter></myfooter>
    </div>
</template>

<style scoped>
/* 样式格式化 */
html { 
    color: #000; 
    background: #FFF; 
    overflow-x:hidden;
}
body { color: #111111; font-family: "\5FAE\8F6F\96C5\9ED1"; font-size: 14px;}
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td { 
    margin: 0; padding: 0; 
    }
del, ins { text-decoration: none; }
li { list-style: none; }
a { text-decoration: none; color: #101010; }

.container{width: 1200px;margin: 0 auto}
.target_title{
    width:100%;
    margin: 0;
    line-height:40px;
    vertical-align:middle;
    text-align:right;
}
.target_title img{
    vertical-align:middle;
    float:left;
}
.blk50{height: 50px;}
.youhui{
    font-size: 16.5px;
    display:inline-block;
    letter-spacing: 1px;
    color: #fff;
    padding:0 15px;
    background: #00afff;
    border-radius: 20px;
}
a.youhui:hover{
    color:#fff;
}

/* banner */
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


/**target样式**/
.target ul{
    width: 100%;
    /* margin: auto; */
    margin-left: 80px;
    overflow: hidden;
}
.target ul li{
    position: relative;
    overflow: hidden;
    float:left;
    margin: 0 20px 0 0;
}
.target ul li a{
    z-index:1;
    display:block;
    width:130px;height:38px;
    line-height:38px;
    font-size:16px;
    color:#000000;
    border:1px solid #bfbfbf;
    text-align:center;
}
/* .target ul li:hover,
.target ul li.on{
    background:#f90036;
    border-color:#f90036;
}
.target ul li:hover a,
.target ul li.on a{
    color:#fff;
} */
.target ul li a .border{
    z-index:-1;
    transform:rotate(45deg);
    position:absolute;
    transition: all 0.5s ease-in-out;
    width:30px;height:30px;
    background-color:#f90036;
}
.target ul li .border:nth-of-type(1){top:-65px;left:-65px;}
.target ul li .border:nth-of-type(2){top:-65px;right:-65px;}
.target ul li .border:nth-of-type(3){bottom:-65px;left:-65px;}
.target ul li .border:nth-of-type(4){bottom:-65px;right:-65px;}
.target ul li a:hover .border,
.target ul li.on .border{
    /* width:160px; */
    width:190px;
    height:160px;
}
.target ul li a:hover,
.target ul li.on a{
    color:#fff;
    border-color:#f90036;
    transition:all 0.5s ease-in-out;
}

/*报价列表*/
.kepian_list { 
    width: 100%; 
    margin-left: 80px;
    overflow: hidden;
}
.kepian_list li { 
    float: left; 
    /* width: 24.22%;  */
    margin-right: 2%; 
    position: relative; 
    overflow: hidden; 
}
.kepian_list li .p-con { 
    width: 100%; height: 480px;
    overflow: hidden; 
    position: relative;
}
.kepian_list li img { 
    width: 100%; height: 480px ;
}
.kepian_list li span { 
    font-size: 12px; 
    width: 100%; 
    float: left; 
}
.kepian_list li .pic-cover { 
    position: absolute; 
    top: 480px; left: 0; 
}
.kepian_list li .p-txt { 
    width: 100%; height: 112px; 
    background: #fff; 
    position: absolute; 
    bottom: 0; left: 0; 
    z-index: 3 
}
.kepian_list li a:hover img { 
    transform: scale(1); 
}
/* 报价列表 图表上层介绍图层 */
.bj_hover{
    width:100%;height:70px;
    position:absolute;
    top: 20px;
    z-index: 100;
    text-align: center;
    font-weight: bold;
}
.bj_hover:hover span,
.bj_hover:hover ins{color: #00afff}
.bj_hover .tit{
    display:block;
    font-size:28.81px;
    color:#fff;
}
.bj_hover ins{
    display:block;
    font-size:12.66px;
    color:#fff;
}
.liangdian{
    display:block;
    color: #fff;
    height:25px;
    line-height:25px;
}
/* 报价列表 价格层效果 */
.bj{
    width:100%;height:70px;
    line-height:70px;
    background:#00afff;
    position:relative;
    z-index: 1;
}
.jiage{
    float:left;
    font-size:25.65px;
    color:#fff;
    margin:0;
}
.xingji{
    position:absolute;
    height:20px;
    line-height:20px;
    float:left;
    font-size:10px;
    color:#fff;
    top:25px;
}
.bj:hover{
    background:#f90036;
}
.xian_bottom{
    margin: 0 auto;
    width: 100%;
}
</style>

<script>
import MyHeader from "./MyHeader"
import MyFooter from "./MyFooter"
export default {
    data() {
      return {
        value1: null,
        value2: null,
        value3: null,
        value4: null,
        value5: null,
        value6: null,
        value7: null,
        value8: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']
        // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      }
    },
    components:{
        // 子组件名:对象
        "myheader":MyHeader,
        "myfooter":MyFooter,
    },
}
</script>