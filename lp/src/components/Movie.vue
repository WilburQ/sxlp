<template>
    <div>
        <myheader></myheader>
        <div class="banner">
            <a href="javascript:;"><img id="img1" src="static/images/movie/weidianying.jpg" alt=""></a>
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
        <div class="blk40"></div>
        <div class="head-cj">
            <img class="img2" src="static/images/movie/movie.jpg" alt="">
        </div>
        <div class="blk40"></div>
        <div class="movie container">
            <div class="movie-dev row" style="margin:0px;">
                <div class="small-movie col-lg-6" v-for="(app,index) in items" :key="app.index" style="padding:0px;"
                @mouseenter="enter(index)" @mouseleave="leave(index)">
                    <video class="mv" src="static/images/movie/mv1.mp4"></video>
                    <img class="bg" :src="app.ddd" v-show="switchNice[index].arry">
                    <img class="play" src="static/images/movie/play.png" v-show="switchNice[index].arrys" @click="replay">
                </div>

            </div>
            <div class="down"><img id="downimg" src="static/images/movie/down.jpg" alt=""></div>
        </div>
        <myfooter></myfooter>
    </div>
</template>
<script>
    import MyHeader from "./MyHeader"
    import MyFooter from "./MyFooter"
    export default {
        data(){
            return {
                items:[
                    {"aaa":'static/images/movie/mv1.mp4',"ddd":'static/images/movie/background3.jpg'},
                    {"aaa":'static/images/movie/mv1.mp4',"ddd":'static/images/movie/background1.jpg'},
                    {"aaa":'static/images/movie/mv1.mp4',"ddd":'static/images/movie/background2.jpg'},
                    {"aaa":'static/images/movie/mv1.mp4',"ddd":'static/images/movie/background.jpg'},
                    {"aaa":'static/images/movie/mv1.mp4',"ddd":'static/images/movie/background4.jpg'},
                    {"aaa":'static/images/movie/mv1.mp4',"ddd":'static/images/movie/background5.jpg'},
                    {"aaa":'static/images/movie/mv1.mp4',"ddd":'static/images/movie/background6.jpg'},
                    {"aaa":'static/images/movie/mv1.mp4',"ddd":'static/images/movie/background7.jpg'},
                ],
                switchNice:[
                    {arry:true,arrys:false},
                    {arry:true,arrys:false},
                    {arry:true,arrys:false},
                    {arry:true,arrys:false},
                    {arry:true,arrys:false},
                    {arry:true,arrys:false},
                    {arry:true,arrys:false},
                    {arry:true,arrys:false},
                ]

            }
        },
        components:{
        // 子组件名:对象
        "myheader":MyHeader,
        "myfooter":MyFooter,
        },
        methods:{
            enter(index){
                // console.log(34234)
                // this.switchNice[index].arry = false;   
                this.switchNice[index].arrys = true;  
            },
            leave(index) {
                // console.log(43423)
                this.switchNice[index].arrys = false; 
                // this.switchNice[index].arry = true;
            },
            replay(){
                console.log(123)
                var ctrl = document.querySelector(".play");
                var mv = document.querySelector(".mv");
                var img = document.querySelector(".play")
                var bg = document.querySelector(".bg");
                ctrl.onclick = function(event){
                // 1：阻止事件默认行为
                event.preventDefault();
                // 2：判断视频状态是否暂停
                mv.onplay = function(){
                    bg.style.display = "none";
                }
                //onpause 暂停事件
                mv.onpause = function(){
                    bg.style.display = "block";
                }
                if(mv.paused){
                // 3：播放暂停
                   mv.play();
                    //当视频开始播放修改成竖线图片
                    img.src = "static/images/movie/play.png";
                }else{
                // 4：否则暂停播放视频
                    mv.pause();
                    img.src = "static/images/movie/play.png";
                }
            }
        }
        }
    }
</script>
<style scoped>
    .movie{
        margin:0 auto;
    }
    .movie-dev{
        margin-top:23px;
    }    
   .movie-dev>.small-movie{
        height:280px;
        position: relative;  
        margin:0 auto;
        margin-top:23px;
        display:flex;
        justify-content: center;
    }
    .bg{
        width:497px;height:280px;
        position:absolute;
        z-index:1;
    }
    .play{
        width:50px;height:50px;
        position:absolute;
        left:50%;
        top:50%;
        margin-left:-25px;
        margin-top:-25px;
        z-index: 2;
    }
    .mv{
        width:495px;height:280px;
        position:absolute;
        z-index:0;
    }
    .down{
        width:100%;

        text-align:center;
    }
    #downimg{
        padding-top:50px;
        padding-bottom: 50px;


    }
    /* .banner{
        position: relative;
    }
    #img1{
        width:100%;height:600px;
    } */
    .blk40{height: 40px;}
   .head-cj .img2{
        width: 100%;height: 100%;
        margin: 0 auto;
    }
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
