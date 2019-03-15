export default {
    template: `
        <div class="container">
        <form action="admin_createuser.php" method="post">
		<label for="first-name">First Name:</label>
		<input v-model="input.fname" type="text" id="first-name" name="fname" value=""><br><br>

		<label for="username">User Name:</label>
		<input v-model="input.username" type="text" id="username" name="username" value=""><br><br>

		<label for="email">Email:</label>
		<input v-model="input.email" type="email" id="email" name="email" value=""><br><br>

		<label for="password">Password:</label>
		<input v-model="input.password" type="text" id="password" name="password" value=""><br><br>

		<button type="submit" name="submit">Create User</button>
	</form>
        </div>
	 `,
	 data() {
        return {
            input: {
				fname: '',
                username: '',
                email: '',
                password: '',
          
            },

			admin: '',
            
            create: []
        }
    },

    created: function() {
        this.getAllRatings();
    },

    methods: {
		methods: {
			getAllDD(){
				let url = `./admin/scripts/ed.php?allDD=true`;
	
				fetch(url)
					.then(res => res.json())
					.then(data => {this.rating = data})
				.catch(function(error) {
					console.error(error);
				});
			},
	
		   
			

    }
}}