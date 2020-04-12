export default {
    template: `
        <div class="settings-page">
        <div class="form-style-delete">
        <h2> Delete</h2>
        <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Header</th>
            </tr>
        </thead>
        <tbody v-if="contentList.length > 0" >
        <tr v-for="content in contentList">
            <td>{{content.id}}</td>   
            <td>{{content.section_header}}</td>
            <td><button @click="manageContent('deleteOne', {id: content.id}, updateContentList(content, 'delete'))" class="deleteuserbutton" type="submit">Delete</button></td>       
        </tr> 
        </tbody>
        </tbody>
        </table>
        </div>
        </div>
     `,


    data() {
        return {

            contentList: []

        }
    },


    created: function () {

		this.manageContent("getAll", {}, (data) => {
            this.contentList = data;
        });

	},

    methods: {

            
        manageContent(op, params, cb) {
    


            let ops = {


                "getAll": { path: `content=main_sections`, options: null },

                "deleteOne": { 
                    path: `delete_content=true&&id=${params.id ? params.id : null}`,
                    options: { method: 'DELETE' }
                },

                // "addOne": { path: `add_user=true`, options: { method: 'POST'}},

                // "createOne": { path: `update_content=true`, options: { method: 'POST', body: formData}},
            };

            let url = `./admin/index.php?${ops[op].path}`;

            fetch(url, ops[op].options)
            .then(res => res.json())
            .then(data => { 
                console.log(data);
                if (cb) { cb(data) }
             })
            .catch((err) => console.log(err))
        },

        updateContentList(currentcontent, method) {
            if (method === "delete") {
                this.contentList = this.contentList.filter(content => content.section_header !== currentcontent.section_header);

        } 
                    
        }
            
            

    }

    }
