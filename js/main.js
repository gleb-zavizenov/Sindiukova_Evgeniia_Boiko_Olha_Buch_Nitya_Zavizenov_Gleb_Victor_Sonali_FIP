import UsersComponent from "./components/UsersComponent.js";


const router = new VueRouter({
  routes: [
    {path: "/", name: "home", component: UsersComponent}
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
    getUserData() {
      //do a fetch call here and get the user from the DB
      const url = './includes/index.php?getUser=1';

      fetch(url) // get data from the DB 
      .then(res => res.json()) // translate JSON from DB to plain object
      .then(data => { //use the plain data object (the user)
        console.log(data);
        
        // log it to the console (testing)
        this.user.settings = data[0];
      })
      .catch((error) => console.error(error))

    },
    setUserPrefs() {
      // this is the preferences control, hit the api when ready (or use a component)
      console.log('set user prefs here');
    }, 

    userLogin() {
      // call the login route, and / or load the login component
      console.log('do login / logout on click');
      this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
    },


  }

});
