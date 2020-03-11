import SectionsComponent from "./components/SectionsComponent.js";
import LoginComponent from "./components/LoginComponent.js";
import SettingsComponent from "./components/SettingsComponent.js";



const router = new VueRouter({
  routes: [

    {path: "/home", name: "home", component: SectionsComponent, meta: {
      mainpageheader: true, mainpagefooter: true}},
    {path: '/', name: "login", component: LoginComponent},
    {path: '/settingsadmin', name: "settings", component: SettingsComponent}

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
    administrator: false,
    mainpageheader:false,

      mockAccount: {
        username: "user",
        password: "password"
      },

      user: [],

   
    
  },

  created: function() {
    // run a fetch call and get the user data
    console.log('created lifecycle hook fired here, go get user data');
    // this.getUserData();

  },

  methods: {
    getContentData() {
      const url = './includes/index.php?getContent=1';

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
      this.administrator = parseInt(data.isadmin); 
      this.user = data; 
    },

    logout() {
      this.$router.push({ path: "/" });
      this.authenticated = false;
      this.administrator = false;

    },

    settings() {
      this.$router.push({ path: "/settingsadmin" });

    }
   



  },
  router: router

}).$mount("#app");

router.beforeEach((to, from, next) =>  {
  console.log('router guard fired');
  if(vm.authenticated == false){
    next("/");
  } else {
    next();
  }
});

