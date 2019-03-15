export default {
    template: `
    <div class="container">
    <h1>Admin Dashboard</h1>
    <h3>Welcome!</h3>
    <p> {{ message }}</p>
    <nav>
        <ul>
            <li><a href="#">Create User</a></li>
            <li><a href="#">Edit User</a></li>
            <li><a href="#">Delete User</a></li>
            <li><a href="">Sign Out</a></li>
            <!-- scripts/caller.php?caller_id=logout -->
        </ul>
    </nav>
    </div>
    `,
	created: function() {
		this.fetchAllUsers();
	},
    data() {
        return {
            message: "This is the admin dashboard page"
        }
    },
    methods: {
        fetchAllUsers() {
          let url = `./admin/scripts/users.php?allusers=true`;
  
          fetch(url)
            .then(res => res.json())
            .then(data => {this.userList = data})
          .catch(function(error) {
            console.error(error);
          });
        },
        
          edit(id){
              this.$router.push({ name: "edit", params: { userID: id } });
          },
  
          new(){
              this.$router.push({ name: "new" });
          },
  
         
  
      }
}