export default {
    template: `
        <div class="settings-page">
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
        <tbody v-if="userList.length > 0" >
        <tr v-for="user in userList">
            <td>{{user.id}}</td>
            <td>{{user.username}}</td>
            <td>{{user.email}}</td>
            <td><button @click="manageUsers('deleteOne', {id: user.id}, updateUserList(user, 'delete'))" class="deleteuserbutton" type="submit">Delete</button></td>    
        </tr> 
       </tbody>
        </tbody>
        </table>
        </div>
        </div>
     `,


    data() {
        return {

            userList: []

        }
    },


    created: function () {

		this.manageUsers("getAll", {}, (data) => {
            this.userList = data;
        });

	},

    methods: {

            
        manageUsers(op, params, cb) {


            let formData = new FormData();
    


            let ops = {
                "getAll": { path: `allusers=true`, options: null },

                "deleteOne": { 
                    path: `delete_user=true&&user_id=${params.id ? params.id : null}`,
                    options: { method: 'DELETE' }
                },

                // "addOne": { path: `add_user=true`, options: { method: 'POST'}},

                // "createOne": { path: `update_user=true`, options: { method: 'POST', body: formData}},
            };

            let url = `./admin/admin_deleteuser.php?${ops[op].path}`;

            fetch(url, ops[op].options)
            .then(res => res.json())
            .then(data => { 
                console.log(data);
                if (cb) { cb(data) }
             })
            .catch((err) => console.log(err))
        },

        updateUserList(currentuser, method) {
            if (method === "delete") {
                this.userList = this.userList.filter(user => user.fname !== currentuser.fname);

        } 
                    
        }
            
            

    }

    }


