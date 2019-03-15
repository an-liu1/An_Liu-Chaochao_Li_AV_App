<?php 
	require_once('scripts/config.php');

	confirm_logged_in();

	if(isset($_POST['submit'])){
		//Do some preprocess for the data
		// trim would just be a start point...
		$fname = trim($_POST['fname']);
		$username = trim($_POST['username']);
		$password = trim($_POST['password']);
		$email = trim($_POST['email']);


		//Validation?
		if(empty($username) || empty($password) || empty($email)){
			$message = 'Please fill the required fields';
		}else{
			$result = createUser($fname,$username,$password,$email);
			
			$message = $result;
		}
	}
?>
