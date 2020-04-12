export default {
    template: `
        <div class="settings-page">
            <div class="form-style">
            <h2>User</h2>
            <div class="routes-flex">
            <router-link :to="{ name: 'create_user' }" class="style-link">Create</router-link>
            <router-link :to="{ name: 'update_user' }" class="style-link">Update</router-link> 
            <router-link :to="{ name: 'delete_user' }" class="style-link">Delete</router-link> 
            </div>
            </div>
            <div class="form-style">
            <h2>Content</h2>
            <div class="routes-flex">
            <router-link :to="{ name: 'create_content' }" class="style-link">Create</router-link>
            <router-link :to="{ name: 'update_content' }" class="style-link">Update</router-link> 
            <router-link :to="{ name: 'delete_content' }" class="style-link">Delete</router-link> 
            </div>
            </div>  

        </div>
     `,
}

  

        
    

