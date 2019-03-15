<?php
	require_once('scripts/config.php');

	confirm_logged_in();
	$id = $_SESSION['user_id'];
	// $id = ddd;
	$tbl = "tbl_user";
	$col = "user_id";


	// include('./scripts/connect.php');
	//Check if username exists

	// $query ='SELECT * FROM '.$tbl.'where'.$col.'='.$id;
	// $runQuery = $pdo->query($query);
	// $found_user = $runQuery->fetch(PDO::FETCH_ASSOC);
	// var_dump($found_user);
	// exit;

	$found_user_set = getSingle($tbl,$col,$id);
	// $found_user = $found_user_set->fetch(PDO::FETCH_ASSOC);
	if(is_string($found_user_set)){
		$message = 'fail to get user message';
	}
	// if(isset($_POST['submit'])){
	// }
	// // var_dump($found_user);
	// // exit;
	// if($user_set->fetchColumn()>0){
	// $get_user_edit = 'SELECT * FROM tbl_user WHERE user_name = :username';

	if(isset($_POST['submit'])){
		$fname = trim($_POST['fname']);
		$username = trim($_POST['username']);
		$password = trim($_POST['password']);
		$email = trim($_POST['email']);

		if(empty($username) || empty($password) || empty($email)){
			
		$message = "plz fill the required fields";

		}else{
			$result = editUser($id, $fname, $username, $password, $email);
			$message = $result;
		}
	}

?>
<!doctype html>

<html>
<head>
	<meta charset="UTF-8">
	<title>Edit user</title>
</head>
<body>
	<h2>Edit user</h2>
		<?php if(!empty($message)):?>
		<p><?php echo $message;?></p>
	<?php endif;?>

	<?php if($found_user = $found_user_set->fetch(PDO::FETCH_ASSOC)):?>
	<form action="admin_edit.php" method="post">
	<label for="first-name">First Name:</label>
		<input type="text" id="first-name" name="fname" value="<?php echo $found_user['user_fname'];?>"><br><br>

		<label for="username">User Name:</label>
		<input type="text" id="username" name="username" value="<?php echo $found_user['user_name'];?>"><br><br>

		<label for="email">Email:</label>
		<input type="email" id="email" name="email" value="<?php echo $found_user['user_email'];?>"><br><br>

		<label for="password">Password:</label>
		<input type="text" id="password" name="password" value="<?php echo $found_user['user_pass'];?>"><br><br>

		<button type="submit" name="submit">Edit User</button>
	</form>
<?php endif;?>
</body>
</html>