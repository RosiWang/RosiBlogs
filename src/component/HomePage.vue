<template>
    <div>
        <div id="slider" class="nivoSlider">
            <p>
                测试测试测试888888888888888888
            </p>
        </div>

        <header>
            <a class="menu-icon">
                <span></span>
            </a>
            <nav class="menu visuallyhidden">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#work">My Works</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>

        <!--<div id="slider" class="nivoSlider">-->
            <!--<img src="source/display0.jpg"/>-->
            <!--<img src="source/display.jpg"/>-->
            <!--<img src="source/display1.jpg"/>-->
        <!--</div>-->

        <section id="home">
                <div class="overlay">
                    <h1>Rosi Blogs</h1>
                    <h2>UI / UX / Frontend</h2>
                    <a href="#" target="_blank" class="but">Download Resume</a>
                </div>
        </section>

        <!--about me-->
        <section id="about" class="row">
            <div class="page about-content">
                <div class="col about-title">
                    <h3
                            data-100="-webkit-transform: translateX(100px); opacity:0;"
                            data-500="-webkit-transform: translateX(0px); opacity:1;"
                    >About me</h3>
                </div>
                <div class="col empty">&nbsp;</div>
                <div class="col about-description">
                    <p
                            data-100="opacity:0;"
                            data-500="opacity:1;"
                    >My name is Rosi.I like travelling, reading and painting.
                        I think of myself as an optimistic, enthusiasm towards life,
                        infinite hope for the future,
                        I like me.</p>
                    <a href="#" class="but">Get in touch</a>
                </div>
                <div class="col empty">&nbsp;</div>
            </div>
        </section>

   <!--展示区-->
        <section id="work" class="row">
            <div class="work-content page">
                <div class="col work-title">
                    <h3
                            data-900="-webkit-transform: translateX(-100px); opacity:0;"
                            data-1300="-webkit-transform: translateX(0px); opacity:1;"
                    >My latest work</h3>
                </div>
                <div class="col empty">&nbsp;</div>
                <div class="col work-description">
                    <p
                            data-900="opacity:0;"
                            data-1300="opacity:1;"
                    >A selection of recent projects I've been working
                        on: landing pages, websites, email marketing...</p>
                </div>
                <div class="col empty">&nbsp;</div>
            </div>
            <div class="work-examples page">
                <div class="col work-item"
                     data-1300="opacity:0;"
                     data-1400="opacity:1;"
                >
                    <img src="/static/img/display/1.jpg" alt="">
                    <div class="work-item-inside">
                        <div class="work-item-inside-content">
                            <h4>Design</h4>
                            <a href="#" class="but">Click here</a>
                        </div>
                    </div>
                </div>
                <div class="col work-item"
                     data-1300="opacity:0;"
                     data-1400="opacity:1;"
                >
                    <img src="/static/img/display/1.jpg" alt="">
                    <div class="work-item-inside">
                        <div class="work-item-inside-content">
                            <h4>Design</h4>
                            <a href="#" class="but">Click here</a>
                        </div>
                    </div>
                </div>
                <div class="col work-item"
                     data-1300="opacity:0;"
                     data-1600="opacity:1;"
                >
                    <img src="/static/img/display/1.jpg" alt="">
                    <div class="work-item-inside">
                        <div class="work-item-inside-content">
                            <h4>Design</h4>
                            <a href="#" class="but">Click here</a>
                        </div>
                    </div>
                </div>
                <div class="col work-item"
                     data-1300="opacity:0;"
                     data-1400="opacity:1;"
                >
                    <img src="/static/img/display/1.jpg" alt="">
                    <div class="work-item-inside">
                        <div class="work-item-inside-content">
                            <h4>Design</h4>
                            <a href="#" class="but">Click here</a>
                        </div>
                    </div>
                </div>
                <div class="col work-item"
                     data-1300="opacity:0;"
                     data-1500="opacity:1;"
                >
                    <img src="/static/img/display/1.jpg" alt="">
                    <div class="work-item-inside">
                        <div class="work-item-inside-content">
                            <h4>Design</h4>
                            <a href="#" class="but">Click here</a>
                        </div>
                    </div>
                </div>
                <div class="col work-item"
                     data-1300="opacity:0;"
                     data-1600="opacity:1;"
                >
                    <img src="/static/img/display/1.jpg" alt="">
                    <div class="work-item-inside">
                        <div class="work-item-inside-content">
                            <h4>Design</h4>
                            <a href="#" class="but">Click here</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr>

        <!--页尾-->
        <section id="contact" class="row">
            <div class="contact-content page">
                <div class="col contact-title">
                    <h3
                            data-100="-webkit-transform: translateX(100px); opacity:0;"
                            data-500="-webkit-transform: translateX(0px); opacity:1;"
                    >Get in touch</h3>
                </div>
                <div class="col empty">&nbsp;</div>
                <div class="col contact-description">
                    <a href="#" class="but">rosiwang@163.com</a>
                </div>
                <div class="col empty">&nbsp;</div>
                <div class="col span_12 social">
                    <a class="icon-twitter" href="#" target="_blank"></a>
                    <a class="icon-github" href="#" target="_blank"></a>
                    <a class="icon-instagram" href="#" target="_blank"></a>
                    <a class="icon-linkedin" href="#" target="_blank"></a>
                </div>
            </div>
        </section>

        <footer id="footer" class="row">
            <div class="footer-content page">
                <div class="col f1">
                    <p>
                        © 2018 Rosi Blogs. Welcome to contact me.
                       <br> Email : rosiwang@163.com <br>
                    </p>
                </div>
            </div>
        </footer>
    </div>
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
    @import "/static/style/main.css";
</style>