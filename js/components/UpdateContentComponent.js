export default {
    template: `
        <div class="settings-page">
            <div class="form-style-update">
            <h2>Update</h2>
                <form @submit.prevent="editContent">
                    <div class="align-items-center">
                        <div class="col-md-3 my-1">
                            <input name="id" type="text" class="colortext" id="inlineFormInputFName" placeholder="id" required>
                        </div>
                        <div class="col-md-3 my-1">
                            <input name="section_header" type="text" class="colortext" id="inlineFormUsername" placeholder="header">
                        </div>
                        <div class="col-md-3 my-1">
                        <input name="section_text" type="text" class="colortext" id="inlineFormUsername" placeholder="text">
                        </div>
                        <div class="col-md-3 my-1">
                        <input name="section_hashtag" type="text" class="colortext" placeholder="hashtag" required>
                        </div>
                        <div class="col-md-3 my-1">
                        <input name="section_color" type="text" class="colortext" placeholder="color" required>
                        </div>
                        <div class="col-md-3 my-1">
                        <input name="img" type="text" class="colortext" placeholder="image" required>
                        </div>
                        <div class="col-md-3 my-1">
                        <input name="popup" type="text" class="colortext" placeholder="popup" required>
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