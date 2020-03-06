import SectionsComponent from "./components/SectionsComponent.js";


const router = new VueRouter({
  routes: [
    {path: "/", name: "home", component: SectionsComponent}
  ]
})

var vm = new Vue({
  el: "#app",
  router,

  data: {

   
    user: {
      isLoggedIn: true,
      settings: {}
    },
  },

  created: function() {
    // run a fetch call and get the user data
    console.log('created lifecycle hook fired here, go get user data');
    // this.getUserData();

  },

  methods: {
    getContentData() {
      //do a fetch call here and get the user from the DB
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
   

    userLogin() {
      // call the login route, and / or load the login component
      console.log('do login / logout on click');
      this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
    },


  }

});
