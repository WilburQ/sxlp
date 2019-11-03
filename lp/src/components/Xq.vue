<template>
    <div>
         <myheader></myheader>
         <router-link tag='a' :to="'/News'" class="back">
            <button class="btn btn-warning">返回上页</button>
         </router-link>
        <h1><p>新闻详情</p></h1>
        <h5><p>Time:2019-04-26 14:29:24</p></h5>
        <hr>
        <div><img src="static/images/news/x1.jpg" alt=""></div>
        <div><img src="static/images/news/x2.gif" alt=""></div>
        <div><img src="static/images/news/x3.jpg" alt=""></div>
        <div><img src="static/images/news/end.jpg" alt=""></div>
        <!-- <div><img src="static/images/news/x8.jpg" alt=""></div>
        <div><img src="static/images/news/x6.jpg" alt=""></div>
        <div><img src="static/images/news/x9.jpg" alt=""></div>
        <div><img src="static/images/news/x11.jpg" alt=""></div> -->
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
<style lang="">
    .back{
        float: left;
    }
</style>