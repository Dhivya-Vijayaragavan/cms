<html>
	<head>
		<title>Infiniti blog</title>
		
<link rel="stylesheet" href="style.css" media="all">
	</head>
	
<body>
<div><?php include("includes/header.php"); ?></div>
<div><?php include("includes/navbar1.php"); ?></div>



<div id="pages">
<?php
include("includes/connect1.php");

if(isset($_GET['id'])){

$page_id = $_GET['id'];

	$select_query = "select * from posts where post_id='$page_id'";

	$run_query = mysql_query($select_query);

while($row=mysql_fetch_array($run_query)){
	
	$post_id = $row['post_id'];
	$post_title = $row['post_title'];
	$post_date = $row['post_date'];
	$post_author = $row['post_author'];
	$post_content =$row['post_content'];




?>

<h2>
<a href="pages.php?id=<?php echo $post_id; ?>">

<?php echo $post_title; ?>

</a>


</h2>

<p align="left">Published on: <b><?php echo $post_date; ?>
</b></p>

<p align="left">Posted by: <b><?php echo $post_author; ?>
</b></p>

<p>
<p align="justify"><?php echo $post_content; ?></p>

<div id="pa">





<?php } }?>
</div>


</div>



<div  style="background-color: #0a386c;">
<p align="center" ><font color="white">&copy <?php echo date("Y"); ?>. Infiniti Software Solutions</font></p>


</div>




</body>
</html>