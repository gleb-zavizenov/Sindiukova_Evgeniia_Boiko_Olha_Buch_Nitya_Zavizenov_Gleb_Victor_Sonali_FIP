

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

            if (this.input.username != "" && this.input.password != "") {
            
                let formData = new FormData();

                formData.append("username", this.input.username);
                formData.append("password", this.input.password);

                let url = `./admin/admin_login.php`;

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(data => {
                        if (typeof data != "object") { 
                            console.warn(data);
                           
                            alert("authentication failed, please try again");
                        } else {
                            this.$emit("authenticated", true, data);
                            localStorage.setItem('user', JSON.stringify(data[0]));
                            this.$router.replace({ name: "admin" });
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                console.log("A username and password must be present");
            }
        }
    }
}