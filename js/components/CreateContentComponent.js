export default {
    template: `
        <div class="settings-page">
        <div class="form-style-content-create">
        <h2>Create</h2>
        <form @submit.prevent="addContent" enctype="multipart/form-data">
        <div class="align-items-center-create">
        <div class="col-md-3 my-1">

        <textarea name="section_header" type="text" class="colortext"  placeholder="Header Info" required></textarea>
        </div>

        <div class="col-md-3 my-1">
        <textarea name="section_text" type="text" class="colortext" placeholder="Main Text" required></textarea>
        </div>
        <div class="col-md-3 my-1">
        <input name="section_hashtag" type="text" class="colortext" placeholder="Hashtag" required>
        </div>

        <div class="col-md-3 my-1">
        <input name="section_color" type="text" class="colortext" placeholder="Color" required>
        </div>

        <div class="col-md-3 my-1">
        <input id="con-create-style" name="img" type="file" class="colortext" placeholder="color" required>
        </div>

        <div class="submit-button">
        <button type="submit">Create</button>
        </div>
        </div>
        </form>
        </div> 

        </div>
     `,

     data(){
         return {
             file: null
         }
     },


    methods: {


            addContent() {
            let url = "./admin/admin_createcontent.php?add_content=true";
            let userData = new FormData(document.querySelector("form"));

            fetch(url, {
                method: 'POST',
                body: userData
            })
            .then(res => res.json())
            .then(data => {
                if (data.result == true){
                    alert('added a new content!')
                } else {
                    alert(`couldn\'t add content: ${data.result}`)
                }
                
            })
            .catch((err) => console.error(err)

            ); 
        },
                            

    }

}
