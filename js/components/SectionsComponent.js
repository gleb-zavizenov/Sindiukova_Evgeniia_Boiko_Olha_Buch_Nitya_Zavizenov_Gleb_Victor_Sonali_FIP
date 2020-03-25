

export default {
    template: `
        <div class="main-content">
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
        <section class="character-section" id="pink" v-if="content.id === '3'">
            <div class="container character-container">
                <div class="character-container-content">
                    <h2>{{content.section_header}}</h2>
                    <h3>{{content.section_hashtag}}</h3>
                    <pre><p>{{content.section_text}}</p></pre>
                    <div class="character-buttons">
                        <a href="#" target="_blank" class="character-button">More info</a>
                        <a href="#" target="_blank" class="character-button">Get help</a>
                    </div>
                </div>
                <img class="character-container-img other-hero" :src="'images/'+ content.img" alt="love">
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
                        <a href="#" target="_blank" class="character-button">More info</a>
                        <a href="#" target="_blank" class="character-button">Get help</a>
                    </div>
                </div>
                <img class="character-container-img green-hero" :src="'images/'+ content.img" alt="character">
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
                        <a href="#" target="_blank" class="character-button">More info</a>
                        <a href="#" target="_blank" class="character-button">Get help</a>
                    </div>
                </div>
                <img class="character-container-img orange-hero" :src="'images/'+ content.img" alt="character">
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
                        <a href="#" target="_blank" class="character-button">More info</a>
                        <a href="#" target="_blank" class="character-button">Get help</a>
                    </div>
                </div>
                <img class="character-container-img other-hero" :src="'images/'+ content.img" alt="character">
                <img class="character-container-img character-container-img-mobile" :src="'images/mobile-'+ content.img" alt="blue">
            </div>
        </section> 
        </div> 
        </div>
        
    `,

    data: function() {
        return {
            contentList: []
        }
    },

    created: function() {
        // this will fire when the component gets build
        this.fetchAllContent();
    },

    methods: {
        fetchAllContent() {
            // let url = `./admin/admin_content.php?getContent=true`;
            let url = `./includes/index.php?getContent=true`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.contentList = data;
            })
            .catch((err) => {console.error(err)})
        }
    }
}