export default {
    template: `
        <div class="container">
            <div class="jumbotron roku-jumbotron row">
                <h1 class="display-4">
                    <span class="span">W</span>el<span class="span1">c</span>ome
                    <span class="span">T</span>o
                <span class="titleright"><span class="span">F</span>lash<span class="span1">b</span>ack</span></h1>
                <p class="lead">Before revisiting your favourite movies, tv shows or music from yesteryear, please log in with a valid username and password.</p>
                <hr class="my-2">
                <form>
                    <div class="form-row align-items-center">
                        <div class="col-md-12 my-1">
                            <label class="name" for="inlineFormInputName">Name：</label>
                            <i class="fas fa-user"></i><input v-model="input.username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>
                        </div>

                        <div class="col-md-12 my-1">
                            <label class="pass" for="inlineFormPassword">Password: </label>
                            <i class="fas fa-key"></i><input v-model="input.password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
                        </div>

                        <div class="my-3 button">
                            <button v-on:click.prevent="login()" type="submit" class="btn btn-primary">Go Go Go ! ! !</button>
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
 
            if(this.input.username != "" && this.input.password != "") {
            // fetch the user from the DB
            // generate the form data
            let formData = new FormData();

             formData.append("username", this.input.username);
             formData.append("password", this.input.password);

             let url = `./admin/scripts/admin_login.php`;
 
             fetch(url, {
                    method: 'POST',
                    body: formData
                })
                 .then(res => res.json())
                 .then(data => {
                    if (typeof data != "object") { // means that we're not getting a user object back
                        console.warn(data);
                        console.error("authentication failed, please try again");
                        this.$emit("autherror", data);
                    } else {
                        this.$emit("authenticated", true, data[0]);
                        this.$router.replace({ name: "users" });
                    }
                })
             .catch(function(error) { 
                 console.log(error);
             });
        } else {
                 console.log("A username and password must be present");
            }
        }
    }
 }