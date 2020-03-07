import SectionsComponent from "./components/SectionsComponent.js";
import LoginComponent from "./components/LoginComponent.js";



const router = new VueRouter({
  routes: [

    {path: "/home", name: "home", component: SectionsComponent, meta: {
      mainpageheader: true, mainpagefooter: true}},
    {path: '/', name: "login", component: LoginComponent}
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
      // this.mainpageheader = status;
      this.administrator = parseInt(data.isadmin); 
      this.user = data; 
    },

    logout() {
      this.$router.push({ path: "/login" });
      // this.mainpageheader = false;
      this.administrator = false;

    }
   



  },
  router: router

}).$mount("#app");

// router.beforeEach((to, from, next) =>  {
//   console.log('router guard fired');
//   if(vm.mainpageheader == false){
//     next("/login");
//   } else {
//     next();
//   }
// });

