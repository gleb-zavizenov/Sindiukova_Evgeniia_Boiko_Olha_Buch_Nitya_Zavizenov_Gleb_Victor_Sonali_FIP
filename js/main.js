import SectionsComponent from "./components/SectionsComponent.js";
import LoginComponent from "./components/LoginComponent.js";
import SettingsComponent from "./components/SettingsComponent.js";



const router = new VueRouter({
  routes: [

    {path: "/", name: "home", component: SectionsComponent, meta: {
      mainpageheader: true, mainpagefooter: true}},
    {path: '/login', name: "login", component: LoginComponent},
    {path: '/admin', name: "admin", component: SettingsComponent, meta: { requiresAuth: true }}

  ]
})

var foo = new Vue({
  el: 'footer',
  router,

  data: {
    mainpagefooter: false
  }
});


var vm = new Vue({
  el: "#app",
  router,

  data: {
    authenticated: false,
    administrator: true,
    mainpageheader:false,
    user: [],
  },

  created(){
    if(localStorage.getItem("user")){
      let retrievedUser = JSON.parse(localStorage.getItem("user"));
      this.authenticated = true;
      this.user = retrievedUser;
    } else {
      this.$router.push({ path: "/" });
    }
  },

  mounted(){
    this.closePopup();
  },

  methods: {
    getContentData() {
      const url = './includes/index.php?getContent=1';
      // let url = `./admin/admin_content.php?getContent=1`;

      fetch(url) // get data from the DB 
      .then(res => res.json()) // translate JSON from DB to plain object
      .then(data => { //use the plain data object (the user)
        console.log(data);
        
        // log it to the console (testing)
        this.content.settings = data[0];
      })
      .catch((error) => console.error(error))

    },

    setAuthenticated(status, data) {
      this.authenticated = status;
      // this.administrator = parseInt(data.isadmin); 
      this.user = data; 
    },

    logout() {
      if(localStorage.getItem('user')){
        localStorage.removeItem('user');
      }
      this.$router.push({ path: "/" });
      this.authenticated = false;
      this.administrator = false;
    },

    settings() {
      this.$router.push({ path: "/admin" });
    },

    closePopup(){
      let popup = document.querySelector(".popup");
      popup.addEventListener('click', function(){
          popup.classList.remove("popup-show");
      });
    }
  },
  router: router

}).$mount("#app");

router.beforeEach((to,from,next) => {
  let Authenticated = vm.authenticated;

  if(to.matched.some(record => record.meta.requiresAuth)){
    if(Authenticated){
        next();
    } else {
      // console.log("redirecting user to login");
      next({name: 'login'});
    }
  } else {
    next();
    // console.log('Page does not require auth');
  }
});

