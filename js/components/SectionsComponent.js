

export default {
    template: `
        <div class="main-content">
        <section class="heroes-content-header">
        <header v-show="$route.meta.mainpageheader">
                    <div class="container header-container">
                        <div class="header-left">
                            <a class="header-left-link" href="index.html" >
                                <img src="images/logo.svg" alt="logo">
                            </a>
                            <div class="header-left-burger">
                                <img src="images/burger-red.svg" alt="burger-img">
                            </div>
                            <div class="header-left-nav">
                                <a href="#pink">Love</a>
                                <a href="#green">Treatment</a>
                                <a href="#orange">Protection</a>
                                <a href="#blue">Connection</a>
                            </div>
                        </div>
                        <div class="header-right">
                            <div class="header-right-list">
                            
                                <router-link to="/admin">
                                    <img src="images/login1.svg" alt="profile">
                                </router-link>
        
                            </div>
                            <img src="images/purple-round.svg" alt="" class="header-right-img">
                        </div>
                    </div>
        </header>
        <div class="main-content-section" v-for="content in contentList" >
        <section class="hero-section" v-if="content.id === '1'">
            <div class="container hero-container" >
                <div class="hero-boy">
                    <img class="hero-boy-img" :src="'images/'+ content.img" alt="Gary">
                    <img class="hero-boy-mobile" :src="'images/mobile-'+ content.img" alt="Gary">
                </div>
                <div class="hero-text">
                    <img src="images/hero-bg.svg" alt="background">
                    <div class="hero-text-content">
                        <h2>{{content.section_header}}</h2>
                        <p>{{content.section_text}}</p>
                    </div> 
                </div>
            </div>
        </section>  
        <section class="disclaimer-section" v-if="content.id === '2'">
            <div class="container disclaimer-container">
                <h1>{{content.section_header}}</h1>
                <p class="main-text">{{content.section_text}}</p>
                <div class="disclaimer-socials">
                    <img src="images/fb.svg" alt="facebook">
                    <img src="images/twit.svg" alt="twitter">
                    <img src="images/ytube.svg" alt="youtube">
                    <img src="images/insta.svg" alt="instagram">
                    <img src="images/snapch.svg" alt="snapchat">
                </div>
                <h2>Are you ready to meet my friends?</h2>
            </div>
        </section>
        </div>
        </section>
        <section class="heroes-main-content">
        <div class="main-content-section" v-for="content in contentList">
        <section class="character-section" id="pink" v-if="content.id === '3'">
            <div class="container character-container">
                <div class="character-container-content">
                    <h2>{{content.section_header}}</h2>
                    <h3>{{content.section_hashtag}}</h3>
                    <pre><p>{{content.section_text}}</p></pre>
                    <div class="character-buttons">
                        <a href="#" @click.prevent="showPopup(content.popup)" target="_blank" class="character-button">More info</a>
                        <a href="http://www.hivaidsconnection.ca/?fbclid=IwAR3Lufa_M4p_V6fmkUCWUxCzsfVi_MHBy_I5VA3aiULxYL5tkzslWV-FG_Y" target="_blank" class="character-button">Get help</a>
                    </div>
                </div>
                <img class="character-container-img character-container-img-tablet other-hero" :src="'images/'+ content.img" alt="love">
                <img class="character-container-img character-container-img-mobile other-hero" :src="'images/mobile-'+ content.img" alt="love">
            </div>
        </section> 
        <section class="character-section" id="green" v-if="content.id === '4'">
            <div class="container character-container">
                <div class="character-container-content">
                    <h2>{{content.section_header}}</h2>
                    <h3>{{content.section_hashtag}}</h3>
                    <p><pre>{{content.section_text}}</pre></p>
                    <div class="character-buttons">
                        <a href="#" @click.prevent="showPopup(content.popup)" target="_blank" class="character-button">More info</a>
                        <a href="http://www.hivaidsconnection.ca/?fbclid=IwAR3Lufa_M4p_V6fmkUCWUxCzsfVi_MHBy_I5VA3aiULxYL5tkzslWV-FG_Y" target="_blank" class="character-button">Get help</a>
                    </div>
                </div>
                <img class="character-container-img character-container-img-tablet green-hero" :src="'images/'+ content.img" alt="character">
                <img class="character-container-img character-container-img-mobile" :src="'images/mobile-'+ content.img" alt="treatment">
            </div>
        </section>
        <section class="character-section" id="orange" v-if="content.id === '5'">
            <div class="container character-container">
                <div class="character-container-content">
                    <h2>{{content.section_header}}</h2>
                    <h3>{{content.section_hashtag}}</h3>
                    <p><pre>{{content.section_text}}</pre></p>
                    <div class="character-buttons">
                        <a href="#" @click.prevent="showPopup(content.popup)" target="_blank" class="character-button">More info</a>
                        <a href="http://www.hivaidsconnection.ca/?fbclid=IwAR3Lufa_M4p_V6fmkUCWUxCzsfVi_MHBy_I5VA3aiULxYL5tkzslWV-FG_Y" target="_blank" class="character-button">Get help</a>
                    </div>
                </div>
                <img class="character-container-img character-container-img-tablet orange-hero" :src="'images/'+ content.img" alt="character">
                <img class="character-container-img character-container-img-mobile" :src="'images/mobile-'+ content.img" alt="orange">
            </div>
        </section>
        <section class="character-section" id="blue" v-if="content.id === '6'">
            <div class="container character-container">
                <div class="character-container-content">
                    <h2>{{content.section_header}}</h2>
                    <h3>{{content.section_hashtag}}</h3>
                    <p><pre>{{content.section_text}}</pre></p>
                    <div class="character-buttons">
                        <a href="#" @click.prevent="showPopup(content.popup)" target="_blank" class="character-button">More info</a>
                        <a href="http://www.hivaidsconnection.ca/?fbclid=IwAR3Lufa_M4p_V6fmkUCWUxCzsfVi_MHBy_I5VA3aiULxYL5tkzslWV-FG_Y" target="_blank" class="character-button">Get help</a>
                    </div>
                </div>
                <img class="character-container-img character-container-img-tablet other-hero" :src="'images/'+ content.img" alt="character">
                <img class="character-container-img character-container-img-mobile" :src="'images/mobile-'+ content.img" alt="blue">
            </div>
        </section>
        </div> 
        </section>
        <section class="container all-heroes">
            <img src="./images/all_heroes.svg">
        </section>
        </div>
        
    `,

    data: function() {
        return {
            contentList: []
        }
    },

    created: function() {

        this.fetchAllContent();
    },

    methods: {
        fetchAllContent() {
            let url = `./admin/index.php?content=main_sections`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.contentList = data;
            })
            .catch((err) => {console.error(err)})
        },

        showPopup(background){
            let imageUrl = `url('./images/${background}')`;
            document.querySelector(".popup-box").style.backgroundImage = imageUrl;
            document.querySelector(".popup").classList.add("popup-show");
        }
    }
}