<template>
  <header>
    <div class="header" >
        <div class="logo" >
            <a href="javascript:;">
                <img src="static/images/movie/logo.png">
            </a>
        </div>
        <ul class="nav">
            <li class="on">
                <router-link tag='a' :to="'/HomePage'">
                    <span class="span3">
                        <span class="span1">网站首页</span>
                        <span class="span2">HOME</span>
                    </span>
                </router-link>
            </li>
            <li>
                <router-link tag='a' :to="'/Kepian'">
                    <span class="span3">
                        <span class="span1">全球客片</span>
                        <span class="span2">LOVESHOW</span>
                    </span>
                </router-link>
            </li>
            <li>
                <router-link tag='a' :to="'/Yang'">
                    <span class="span3">
                        <span class="span1">全球样片</span>
                        <span class="span2">STYLE</span>
                    </span>
                </router-link>
            </li>
            <li>
                <router-link tag='a' :to="'/News'">
                    <span class="span3">
                        <span class="span1">新闻中心</span>
                        <span class="span2">NEWS</span>
                    </span>
                </router-link>
            </li>
            <li>
                <router-link tag='a' :to="'/Price'">
                    <span class="span3">
                        <span class="span1">服务报价</span>
                        <span class="span2">PRICE</span>
                    </span>
                </router-link>
            </li>
            <li>
                <router-link tag='a' :to="'/Movie'">
                    <span class="span3">
                        <span class="span1">微电影</span>
                        <span class="span2">DEMO</span>
                    </span>
                </router-link>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="span3">
                        <span class="span1">关于我们</span>
                        <span class="span2">ABOUT</span>
                    </span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="span3">
                        <span class="span1">粉丝好评</span>
                        <span class="span2">BOOK</span>
                    </span>
                </a>
            </li>
        </ul>
    </div>
    <div class="top">
        <div class="on1">
            <span>联系电话:10086</span>
        </div>
        <login class="sign"></login>
        <div class="topr">
            <a href="javascript:;"><img src="static/images/movie/phone_3.png" alt=""></a>
            <a href="javascript:;"><img src="static/images/movie/xinlang_3.png" alt=""></a>
            <a href="javascript:;"><img src="static/images/movie/weicat_3.png" alt=""></a>
            <a href="javascript:;"><img src="static/images/movie/tmall_3.png" alt=""></a>
        </div>
    </div>
  </header>
</template>
<script>
import Login from "./Login"
export default {
    data(){
        return{}
    },
    components:{
    // 子组件名:对象
    "login":Login
    },
    methods:{
        Kepian(){
            this.$router.push("/Kepian");
        }
    }
}
</script>
<style scoped>
li{list-style:none}
a {text-decoration:none;}
.header{background:linear-gradient(#29081fe1,#0a1b1be1);width:100%;height:110px;line-height:110px;display:flex;margin-top:0;}
.logo{float:left;width:340px;height:175px;}
.logo a img{padding-top:5px;padding-left:15px;}
.nav{width:925px;height:110px;line-height:110px;text-align:center;
    margin:0 auto;
    overflow:hidden;
}
.nav li{width:12.5%;height:110px;line-height:110px;position:relative;}
.nav li a span:hover{
   color:#f8ae0f;
}
.nav li .span3{position:absolute;top:35px;display:block;width:100%;height:40px;color:#fff;}
.nav li .span1,.nav li .span2{display:block;line-height:20px;font-size:16px;}
.nav li .span2{font-size:8.5px;}
.top{width:100%;height:40px;background:linear-gradient(#060f0fe1,#061213e1);
display:flex;
position: relative;
/* float: left; */
/* justify-content: space-between; */
}
.top .sign{position: absolute;right: 230px;width: 100px;top: 10px;color: #fff}
.top .topr{position: absolute;right: 20px;}
.top .on1 span{color:#858585;line-height:40px;padding-left:16px;}
.topr a img{ width:25px;height:25px;margin-right:25px;margin-top:8px;}
</style>
