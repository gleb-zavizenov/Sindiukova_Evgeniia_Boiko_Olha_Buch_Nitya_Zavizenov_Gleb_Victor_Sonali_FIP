

export default {
    template: `
        <div class="settings-page">
            <div class="form-style">
            <h2>Create User</h2>
                <form @submit.prevent="create">
                    <div class="align-items-center">
                        <div class="col-md-3 my-1">
                            <label class="not-display" for="inlineFormInputFName">Your Name</label>
                            <input v-model="input.fname" type="text" class="colortext" id="inlineFormInputFName" placeholder="name" required>
                        </div>

                        <div class="col-md-3 my-1">
                            <label class="not-display" for="inlineFormUsername">Username</label>
                            <input v-model="input.username" type="text" class="colortext" id="inlineFormUsername" placeholder="username" required>
                        </div>
                        <div class="col-md-3 my-1">
                            <label class="not-display" for="inlineFormPassword">Password</label>
                            <input v-model="input.password" type="password" class="colortext" id="inlineFormPassword" placeholder="password" required>
                        </div>

                        <div class="col-md-3 my-1">
                        <label class="not-display" for="inlineFormEmail">Email</label>
                        <input v-model="input.email" type="text" class="colortext" id="inlineFormEmail" placeholder="email" required>
                        </div>

                        <div class="submit-button">
                            <button type="submit">Create</button>
                        </div>
                    </div>
                </form>            
            </div>
            <div class="form-style">
            <h2>Update User</h2>
                <form @submit.prevent="updateUser">
                    <div class="align-items-center">
                        <div class="col-md-3 my-1">
                            <label class="not-display" for="inlineFormInputFName">Your Name</label>
                            <input v-model="update.fname" type="text" class="colortext" id="inlineFormInputFName" placeholder="name" required>
                        </div>
                        <div class="col-md-3 my-1">
                            <label class="not-display" for="inlineFormUsername">Username</label>
                            <input v-model="update.username" type="text" class="colortext" id="inlineFormUsername" placeholder="username" required>
                        </div>
                        <div class="col-md-3 my-1">
                            <label class="not-display" for="inlineFormPassword">Password</label>
                            <input v-model="update.password" type="password" class="colortext" id="inlineFormPassword" placeholder="password" required>
                        </div>
                        <div class="col-md-3 my-1">
                        <label class="not-display" for="inlineFormEmail">Email</label>
                        <input v-model="update.email" type="text" class="colortext" id="inlineFormEmail" placeholder="email" required>
                        </div>
                        <div class="submit-button">
                            <button type="submit">Update</button>
                        </div>
                    </div>
                </form>            
            </div>
            <div class="form-style-delete">
            <h2> Delete Users</h2>
            <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in userList">
                    <td>{{user.id}}</td>
                    <td>{{user.username}}</td>
                    <td>{{user.email}}</td>
                    <td><button class="deleteuserbutton" type="submit">Delete</button></td>
                    
                </tr>
                
            </tbody>
            </table>
            </div>
        </div>
     `,


    data() {
        return {
            input: {
                fname: "",
                username: "",
                password: "",
                email: ""

            },

           update: {
                fname: "",
                username: "",
                password: "",
                email: ""

            },

            userList: []

        }
    },

    // data: {

    //         userList: []

    //     },
    

    created: function () {
        // this.manageUsers("getAll", {}, (data) => {
        //     this.userList = data;
        // });
		this.fetchAllUsers();

	},

    methods: {
    //     manageUsers(op, params, cb) {
            
    //         let ops = {
    //             "getAll": { path: `allusers=true`, options: null },

    //             "deleteOne": { 
    //                 path: `delete_user=true&&user_id=${params.id ? params.id : null}`,
    //                 options: { method: 'DELETE' }
    //             },

    //             "addOne": { path: `add_user=true`, options: {} }
    //         };

    //         let url = `./admin/admin_deleteuser.php?${ops[op].path}`;

    //         fetch(url, ops[op].options)
    //         .then(res => res.json())
    //         .then(data => { 
    //             console.log(data);
    //             if (cb) { cb(data) }
    //          })
    //         .catch((err) => console.log(err))
    //     },
        create() {

            if (this.input.fname != "" && this.input.username != "" && this.input.password != "" && this.input.email != "") {
                let formData = new FormData();

                formData.append("fname", this.input.fname);
                formData.append("username", this.input.username);
                formData.append("password", this.input.password);
                formData.append("email", this.input.email);

                let url = `./admin/admin_createuser.php`;

                fetch(url, {
                     method: 'POST',
                     body: formData
                 })

                }
                
            },

            updateUser() {

                if (this.update.fname != "" && this.update.username != "" && this.update.password != "" && this.update.email != "") {

                    let formData = new FormData();
    
                    formData.append("fname", this.update.fname);
                    formData.append("username", this.update.username);
                    formData.append("password", this.update.password);
                    formData.append("email", this.update.email);
    
                    let url = `./admin/admin_edituser.php`;
    
                    fetch(url, {
                         method: 'POST',
                         body: formData
                     })
    
                    }
                    
                },
            
            fetchAllUsers() {

                let url = './admin/admin_deleteuser.php?allusers=true';
        
                fetch(url)
                .then(res => res.json())
                .then(data => this.userList = data)
                .catch((error) => console.error(error))
                }


           
               
            
            // deleteUser(index) {
                
              
            
            //     fetch('./admin/admin_deleteuser.php?id=true' + index,{
            //         method: 'GET',
            //     })
            //     .then(response => response.json())
            //     .then(data => this.userList = data)
            //     .catch((error) => console.error(error))
                
            // }
            
            

            }

        }

   

  

        
    

