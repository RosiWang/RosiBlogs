<template>
    <div>
        <!--<header>-->
            <!---->
        <!--</header>-->

        <!--<div id="slider" class="nivoSlider">-->
            <!--<img src="source/display0.jpg"/>-->
            <!--<img src="source/display.jpg"/>-->
            <!--<img src="source/display1.jpg"/>-->
        <!--</div>-->

        <!--<section id="home">-->
                <!--<div class="overlay">-->
                    <!--<h1>Rosi Blogs</h1>-->
                    <!--<h2>UI / UX / Frontend</h2>-->
                    <!--<a href="#" target="_blank" class="but">Download Resume</a>-->
                <!--</div>-->
        <!--</section>-->
        <img style="width: 100%;height: 500px" src="static/img/header-bg.jpg"/>

        <!--about me-->
        <section style="text-align: center" id="about" >
            <div >
                <div >
                    <h3
                            data-100="-webkit-transform: translateX(100px); opacity:0;"
                            data-500="-webkit-transform: translateX(0px); opacity:1;"
                    >About me</h3>
                </div>
                <div style="font-size: 20px">
                    My name is Rosi.I like travelling, reading and painting.
                        I think of myself as an optimistic, enthusiasm towards life,
                        infinite hope for the future,
                        I like me.</p>
                    <a href="#" class="but">Get in touch</a>
                </div>

            </div>
        </section>

   <!--展示区-->
        <section id="work" style="text-align: center">
            <div >
                <div >
                    <h3>My latest work</h3>
                </div>
                <div style="text-align: center;font-size: 20px">
                   A selection of recent projects I've been working
                        on: landing pages, websites, email marketing...</p>
                </div>
            </div>
        </section>

        <!--页尾-->
        <section style="text-align: center">
            <div >
                <div style="font-size: 30px" >
                    Get in touch</h3>
                </div>
                <div c>
                    <a href="#" class="but">rosiwang@163.com</a>
                </div>
            </div>
        </section>

        <footer style="text-align: center" >
            <div >
                <div >
                    <p>
                        © 2018 Rosi Blogs. Welcome to contact me.
                       <br> Email : rosiwang@163.com <br>
                    </p>
                </div>
            </div>
        </footer>

    </div>

</template>

<script>
    import $ from 'jquery'
    export default {
        name: ""
    }
    // $(window).load(function () {
    //     $('#slider').nivoSlider();
    // });
    /*import '/static/juquery/canvas-particle'
    import '/static/juquery/jquery-1.6.1.min'
    import '/static/juquery/jquery.nivo.slider'
    import '/static/juquery/jquery.nivo.slider.pack'*/

    window.onload = function() {
        //配置
        var config = {
            vx: 4,	//小球x轴速度,正为右，负为左
            vy: 4,	//小球y轴速度
            height: 2,	//小球高宽，其实为正方形，所以不宜太大
            width: 2,
            count: 200,		//点个数
            color: "121, 162, 185", 	//点颜色
            stroke: "130,255,255", 		//线条颜色
            dist: 6000, 	//点吸附距离
            e_dist: 20000, 	//鼠标吸附加速距离
            max_conn: 20 	//点到点最大连接数
        }
        console.log("window lonload8866");
        //调用
      // CanvasParticle(config);
    };
    console.log("jquery test",$);

</script>
<style scoped>
    /*#home {*/
        /*background-color: rgba(0,0,0, .5);*/
        /*background-image: url(/static/img/header-bg.jpg);*/
        /*background-position: bottom;*/
        /*background-repeat: no-repeat;*/
        /*background-size: cover;*/
        /*background-attachment: fixed;*/
        /*position: relative;*/
        /*text-align: center;*/
        /*height: 540px;*/
    /*}*/

    .but {
        display: inline-block;
        font-family: 'Lato', Helvetica, Arial, sans-serif;
        font-weight: 300;
        font-size: 1rem;
        font-size: 16px;
        padding: 0 45px;
        line-height: 55px;
        background-color: #F10061;

        -webkit-border-radius: 45px;
        -moz-border-radius: 45px;
        border-radius: 45px;

        -webkit-background-clip: padding-box;
        -moz-background-clip: padding-box;
        background-clip: padding-box;

        color: #fff;
        border: 0;

        -webkit-transition: background-color 0.3s ease;
        -moz-transition: background-color 0.3s ease;
        -o-transition: background-color 0.3s ease;
        transition: background-color 0.3s ease;
    }

    .footer h3 {
        font-family: 'Lato', Helvetica, Arial, sans-serif;
        font-size: 2.25rem;
        font-size: 27px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 3px;
        margin-bottom: 45px;
        color: #000;
    }

</style>
