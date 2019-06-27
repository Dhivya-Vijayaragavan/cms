<?php session_start();
require_once('dbconnection.php');

//Code for Registration 
if(isset($_POST['signup']))
{
	$fname=$_POST['fname'];
	$lname=$_POST['lname'];
	$email=$_POST['email'];
	$password=$_POST['password'];
	$contact=$_POST['contact'];
	//$enc_password=md5($password);
	$msg=mysqli_query($con,"insert into user(fname,lname,email,password,contactno) values('$fname','$lname','$email','$password','$contact')");
if($msg)
{
	echo "<script>alert('Register successfully');</script>";
}
}

// Code for login system
if(isset($_POST['login']))
{
$password=$_POST['password'];
//$dec_password=md5($password);
$useremail=$_POST['uemail'];
$ret= mysqli_query($con,"SELECT * FROM user WHERE email='$useremail' and password='$password'");
$num=mysqli_fetch_array($ret);
if($num>0)
{
$extra="welcome.php";
$_SESSION['login']=$_POST['uemail'];
$_SESSION['id']=$num['id'];
$_SESSION['name']=$num['fname'];
$host=$_SERVER['HTTP_HOST'];
$uri=rtrim(dirname($_SERVER['PHP_SELF']),'/\\');
header("location:http://$host$uri/$extra");
exit();
}
else
{
echo "<script>alert('Invalid username or password');</script>";
$extra="index.php";
$host  = $_SERVER['HTTP_HOST'];
$uri  = rtrim(dirname($_SERVER['PHP_SELF']),'/\\');
//header("location:http://$host$uri/$extra");
exit();
}
}

?>

<div class="form" id="log">
<form method="post" name="login" action="">
<center>
<table border="1" width="30%" cellpadding="3">
<thead>
<tr>
<th colspan="2">Login Here!!!</th>
</tr>
</thead>
<tbody>
<tr>
<td>User Name</td>
<td><input type="text" name="uemail" value=""/></td>
</tr>
<tr>
<td>Password</td>
<td><input type="password" name="password" value=""/></td>
</tr>
<tr>
<td><input type="submit" name="login" value="login"/></td>
</tr>
</tbody>
</table>
</center>
</form>
</div>

<div class="form" id="reg">
<form method="post" name="signup" action="">
<center>
<table border="1" width="30%" cellpadding="3">
<thead>
<tr>
<th colspan="2">Register Here!!!</th>
</tr>
</thead>
<tbody>
<tr>
<td>First Name</td>
<td><input type="text" name="fname" value=""/></td>
</tr>
<tr>
<td>Last Name</td>
<td><input type="text" name="lname" value=""/></td>
</tr>
<tr>
<td>Email</td>
<td><input type="text" name="email" value=""/></td>
</tr>
<tr>

<tr>
<td>Password</td>
<td><input type="password" name="password" value=""/></td>
</tr>
<td>Contactno</td>
<td><input type="text" name="contact" value=""/></td>
</tr>
<tr>
<td><input type="submit" name="signup" value="signup"/></td>
</tr>
</tbody>
</table>
</center>
</form>
</div>