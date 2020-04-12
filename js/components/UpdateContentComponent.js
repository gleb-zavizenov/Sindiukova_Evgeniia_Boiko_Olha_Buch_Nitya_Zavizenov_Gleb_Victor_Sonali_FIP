export default {
    template: `
        <div class="settings-page">
            <div class="form-style-update">
            <h2>Update</h2>
                <form @submit.prevent="editContent" enctype="multipart/form-data">
                    <div class="align-items-center-update">
                        <div class="col-md-3 my-1">
                        <input name="id" type="text" class="colortext" id="inlineFormInputFName" placeholder="Id">
                        </div>
                        <div class="col-md-3 my-1">
                        <textarea name="section_header" type="text" class="colortext" id="inlineFormUsername" placeholder="Main Header"></textarea>
                        </div>
                        <div class="col-md-3 my-1">
                        <textarea name="section_text" type="text" class="colortext" id="inlineFormUsername" placeholder="Main Text"></textarea>
                        </div>
                        <div class="col-md-3 my-1">
                        <input name="section_hashtag" type="text" class="colortext" placeholder="Hashtag">
                        </div>
                        <div class="col-md-3 my-1">
                        <input name="section_color" type="text" class="colortext" placeholder="Color">
                        </div>
                        <div class="col-md-3 my-1">
                        <input name="popup" type="text" class="colortext" placeholder="Popup">
                        </div>
                        <div class="col-md-3 my-1">
                        <input id="con-create-style" name="img" type="file" class="colortext" placeholder="image">
                        </div>  
                        <div class="submit-button">
                            <button type="submit">Update</button>
                        </div>
                    </div>
                </form>            
            </div>
        </div>
     `,

     
    methods: {

        editContent() {

            let url = "./admin/admine_editcontent.php?edit_content=true";
            let userData = new FormData(document.querySelector("form"));

            fetch(url, {
                method: 'POST',
                body: userData
            })
            .then(res => res.json())
            .then(data => {
                if (data.result == true){
                    alert('content updated!')
                } else {
                    alert(`couldn\'t update: ${data.result}`)
                }
            })
            .catch((err) => console.error(err)
            ); 
        }
            

    }

    }