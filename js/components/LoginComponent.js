

export default {
    template: `
        <div class="login-page">
            <div class="logo-login">
            <img src="images/logo.svg" alt="logo">
            </div>
            <div class="form-style">
            <h2>Sign In</h2>
                <form @submit.prevent="login">
                    <div class="align-items-center">
                        <div class="col-md-3 my-1">
                            <label class="not-display" for="inlineFormInputName">Name</label>
                            <input v-model="input.username" type="text" class="colortext" id="inlineFormInputName" placeholder="Username" required>
                        </div>

                        <div class="col-md-3 my-1">
                            <label class="not-display" for="inlineFormPassword">Name</label>
                            <input v-model="input.password" type="password" class="colortext" id="inlineFormPassword" placeholder="Password" required>
                        </div>

                        <div class="submit-button">
                            <button type="submit">Login</button>
                        </div>
                    </div>
                </form>            
            </div>
        </div>
     `,

    data() {
        return {
            input: {
                username: "",
                password: ""
            },

        }
    },

    methods: {

        

        login() {
            
            //console.log(this.$parent.mockAccount.username);
            if(this.input.username != "" && this.input.password != ""){
                //use the FormData object to collect and send our params
                let formData = new FormData();
                formData.append("username", this.input.username);
                formData.append("password", this.input.password);

                let url = "./includes/index.php?user=true";

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(data => {

                    console.log(data);

                    
                    this.$emit("", true, data[0]);
                    this.$router.replace({name: "home"});
                    
                })
                .catch((err) => console.log(err));

            } else {
                console.error("inouts can't be blank");
            }
        }
    }
}