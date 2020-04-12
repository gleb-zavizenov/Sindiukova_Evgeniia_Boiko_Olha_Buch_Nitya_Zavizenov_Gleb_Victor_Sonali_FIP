import SectionsComponent from "./components/SectionsComponent.js";
import LoginComponent from "./components/LoginComponent.js";
import SettingsComponent from "./components/SettingsComponent.js";
import UpdateUserComponent  from "./components/UpdateUserComponent.js";
import CreateUserComponent from "./components/CreateUserComponent.js";
import DeleteUserComponent from "./components/DeleteUserComponent.js";
import CreateContentComponent from "./components/CreateContentComponent.js";
import DeleteContentComponent from "./components/DeleteContentComponent.js";
import UpdateContentComponent from "./components/UpdateContentComponent.js";



const router = new VueRouter({
  routes: [

    {path: "/", name: "home", component: SectionsComponent, meta: {
      mainpageheader: true, mainpagefooter: true}},
    {path: '/login', name: "login", component: LoginComponent},
    {path: '/admin', name: "admin", component: SettingsComponent, meta: { requiresAuth: true }},
    {path: '/updateuser', name: "update_user", component: UpdateUserComponent },
    {path: '/createuser', name: "create_user", component: CreateUserComponent },
    {path: '/deleteuser', name: "delete_user", component: DeleteUserComponent },
    {path: '/createcontent', name: "create_content", component: CreateContentComponent },
    {path: '/deletecontent', name: "delete_content", component: DeleteContentComponent },
    {path: '/updatecontent', name: "update_content", component: UpdateContentComponent }




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

