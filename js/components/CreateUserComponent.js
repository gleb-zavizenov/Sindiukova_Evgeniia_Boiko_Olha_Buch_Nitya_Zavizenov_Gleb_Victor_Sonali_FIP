export default {
    template: `
        <div class="settings-page">
        <div class="form-style">
        <h2> Create User</h2>
        <form @submit.prevent="addUser">
        <div class="align-items-center">
        <div class="col-md-3 my-1">
        <label class="not-display" for="inlineFormInputFName">Your Name</label>
        <input name="user_fname" type="text" class="colortext" id="inlineFormInputFName" placeholder="name" required>
        </div>

        <div class="col-md-3 my-1">
        <label class="not-display" for="inlineFormUsername">Username</label>
        <input name="user_name" type="text" class="colortext" id="inlineFormUsername" placeholder="username" required>
        </div>
        <div class="col-md-3 my-1">
        <label class="not-display" for="inlineFormPassword">Password</label>
        <input name="user_pass" type="password" class="colortext" id="inlineFormPassword" placeholder="password" required>
        </div>

        <div class="col-md-3 my-1">
        <label class="not-display" for="inlineFormEmail">Email</label>
        <input name="user_email" type="text" class="colortext" id="inlineFormEmail" placeholder="email" required>
        </div>

        <div class="submit-button">
        <button type="submit">Create</button>
        </div>
        </div>
        </form>
        </div> 

        </div>
     `,


    methods: {


            addUser() {
            let url = "./admin/admin_createuser.php?add_user=true";
            let userData = new FormData(document.querySelector("form"));

            fetch(url, {
                method: 'POST',
                body: userData
            })
            .then(res => res.json())
            .then(data => {
                if (data.result == true){
                    alert('added a new user!')
                } else {
                    alert(`couldn\'t add user: ${data.result}`)
                }
            })
            .catch((err) => console.error(err)
            ); 
        },
                            

    }

}
