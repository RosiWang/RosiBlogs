<template>
    <div>
        <!--top img-->
        <!--<header>-->
            <!--<a class="menu-icon jiji">-->
                <!--<span></span>-->
            <!--</a>-->
            <!--<nav class="menu visuallyhidden">-->
                <!--<ul>-->
                    <!--<li><a href="#home">Home</a></li>-->
                    <!--<li><a href="#about">About me</a></li>-->
                    <!--<li><a href="#work">My Works</a></li>-->
                    <!--<li><a href="#contact">Contact</a></li>-->
                <!--</ul>-->
            <!--</nav>-->
        <!--</header>-->

        <section id="home"  >
                <div class="overlay">
                    <h1>John Deo</h1>
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
                    >Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                        lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                        Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
                    <a href="#" class="but">Get in touch</a>
                </div>
                <div class="col empty">&nbsp;</div>
            </div>
        </section>

    </div>

</template>

<script>
    export default {
        name: ""
    }
</script>
<style scoped>
    @import "/static/style/main.css";
</style>