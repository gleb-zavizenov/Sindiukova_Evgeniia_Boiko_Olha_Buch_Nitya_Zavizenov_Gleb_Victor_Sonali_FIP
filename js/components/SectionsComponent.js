

export default {
    template: `
        <div>
        <div v-for="content in contentList" >
        <div class="hero-section" v-if="content.id === '1'">
        <div class="container hero-container" >
                <div class="hero-boy">
                    <img :src="'images/'+ content.img" alt="Gary">
                </div>
                <div class="hero-text">
                    <div class="hero-text-content">
                        <div class="text-align-m">
                        <h2>{{content.section_header}}</h2>
                        <p>{{content.section_text}}</p>
                        </div>
                    </div> 
                </div>
        </div>
        </div>  
        <div class="disclaimer-section" v-if="content.id === '2'">
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
        </div>
        <div class="character-section" id="pink" v-if="content.id === '3'">
            <div class="container character-container">
                <div class="character-container-content">
                    <div class="text-pink">
                    <h2>{{content.section_header}}</h2>
                    <p>{{content.section_text}}</p>
                    </div>
                    <div class="character-buttons">
                        <a href="#" target="_blank" class="character-button">More info</a>
                        <a href="#" target="_blank" class="character-button">Get help</a>
                    </div>
                </div>
                <img class="character-container-img other-hero" :src="'images/'+ content.img" alt="love">
            </div>
        </div> 
        <div class="character-section" id="green" v-if="content.id === '4'">
            <div class="container character-container">
                <div class="character-container-content">
                    <div class="text-green">
                    <h2>{{content.section_header}}</h2>
                    <p>{{content.section_text}}</p>
                    </div>
                    <div class="character-buttons">
                        <a href="#" target="_blank" class="character-button">More info</a>
                        <a href="#" target="_blank" class="character-button">Get help</a>
                    </div>
                </div>
                <img class="character-container-img other-hero" :src="'images/'+ content.img" alt="character">
            </div>
        </div>
        <div class="character-section" id="orange" v-if="content.id === '5'">
            <div class="container character-container">
                <div class="character-container-content">
                    <div class="text-yellow">
                    <h2>{{content.section_header}}</h2>
                    <p>{{content.section_text}}</p>
                    </div>
                    <div class="character-buttons">
                        <a href="#" target="_blank" class="character-button">More info</a>
                        <a href="#" target="_blank" class="character-button">Get help</a>
                    </div>
                </div>
                <img class="character-container-img orange-hero" :src="'images/'+ content.img" alt="character">
            </div>
        </div>
        <div class="character-section" id="blue" v-if="content.id === '6'">
            <div class="container character-container">
                <div class="character-container-content">
                    <div class="text-blue">
                    <h2>{{content.section_header}}</h2>
                    <p>{{content.section_text}}</p>
                    </div>
                    <div class="character-buttons">
                        <a href="#" target="_blank" class="character-button">More info</a>
                        <a href="#" target="_blank" class="character-button">Get help</a>
                    </div>
                </div>
                <img class="character-container-img other-hero" :src="'images/'+ content.img" alt="character">
            </div>
        </div> 
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
            let url = `./includes/index.php?getContent=true`;
            fetch(url)
            .then(res => res.json())
            .then(data => {this.contentList = data})
            .catch((err) => {console.error(err)})
        }
    },

    components: {
       

        
       
       
    }
}