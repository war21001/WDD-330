<!DOCTYPE HTML>  
<html lang="en-us">
<head>
  <title>Cookie Purchase Confirmation</title>
  <meta charset="utf-8"/>
  <meta name="viewport" content="eidth=device-with, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="styles.css">
<head>
  
<body>
    <div id="content">
    <header>
        <h1><strong>Form Validation</strong></h1>
    </header>
    <br>
        <main>
            <div class="confirmation">           
                                 
<?php
$first_name=$_POST["first_name"];
$last_name=$_POST["last_name"];
$address=$_POST["address"];
$phone=$_POST["phone"];
$creditcard=$_POST["credit_card"];
$exp_date=$_POST["exp_date"];
$card=$_POST["card"];

    
    $out_str = "<h2>Purchase Confirmation</h2>
                <p>"
        .       $first_name
        .   " "
        .   $last_name
        .   "<br>"
        .   $address
        .   "<br>"
        .   $phone
        .   "<br><br>"
        .   "Cookies Ordered: "
        .   "<br>";

$total=0;
if(!empty($_POST["item_0"])){
    $out_str .= "Chocolate Chip $1.99"
    . "<br>";
    $total=$total+1.99;
}
if(!empty($_POST["item_1"])){
    $out_str.= "Frosted Sugar Cookie $2.99"
    . "<br>";
    $total=$total+2.99;
}
if(!empty($_POST["item_2"])){
    $out_str .=  "Peanut Butter Chunk $2.25"
    . "<br>";
    $total=$total+2.25;
}
if(!empty($_POST["item_3"])){
    $out_str .= "Snickerdoodle $1.50"
    . "<br>";
    $total=$total+1.50;
}
if(!empty($_POST["item_4"])){
    $out_str .= "Weekly Special $2.50"
    . "<br>";
    $total=$total+2.5;
}
$out_str .= "<strong>Total: $"
    .   $total
    .   "</strong><br><br>"
    .   "Credit Card Information: "
    .   $card
    .   " "
    .   $creditcard
    .   " "
    .   $exp_date
    .   " "
    .   "<br>";
    
print $out_str;
?>
</div>
<form name="form" method="POST" class="custom_form" action="assign11_a.php"> 
    <div class="buttons">
        <button type="submit" id="submit" name="confirm">Confirm</button>
        <button type="submit" id="cancel" name="cancel">Cancel</button>
    <div>
</form>

</main>
<br>
    <footer>     
      <p class="copyright"> &copy; 2021 Lisa Ward - CS 213</p>
      <!-- <p class="to_top"><a href="#content">Back to Top</a></p> -->
      <p class="assign_link"><a href="../index.html">CS 213 Assignments</a></p>
    </footer>
</div>
</body>
</html>