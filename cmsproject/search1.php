<html>
	<head>
		<title>Infiniti blog</title>
		
<link rel="stylesheet" href="style.css" media="all">
	</head>
	
<body>
<div><?php include("includes/header.php"); ?></div>
<div><?php include("includes/navbar1.php"); ?></div>

<div id="main_content">
<h1>Your search result is here</h1>
<?php
include("includes/connect1.php");

if(isset($_GET['search'])){


}

	$search_id = $_REQUEST['value'];
	
if(empty($search_id)){

echo "<h2><center>Oops!!!, seems that you submitted an empty form.</center></h2>";
}


else
{
	
	 $search_query = "select * from posts where
	 post_keywords like '%$search_id%'";
	 
	 $run_query = mysql_query($search_query);
	 
	 while ($search_row=mysql_fetch_array($run_query)){

	 $post_id = $search_row['post_id'];
	 $post_title = $search_row['post_title'];
	 $post_content = substr($search_row['post_content'],0,150
	 );	
	
?>

<center>


<h2>
<a href="pages1.php?id=<?php echo $post_id; ?>">
<?php echo $post_title; ?>
</a>

</h2>

<p><?php echo $post_content; ?></p>

</center>


<?php }  }?>

</div>




<div  style="background-color: #0a386c;">
<p align="center" ><font color="white">&copy <?php echo date("Y"); ?>. Infiniti Software Solutions</font></p>


</div>



</body>
</html>