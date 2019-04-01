<?php


$connections = array();

function getDbConnection(){

  $servername = "stark.cse.buffalo.edu";
  $username = "410team10_user";
  $password = "insecure1";
  $dbname = "cse410_team10_db";

  error_log("Connecting to  ".$dbname." as user ".$username, 0);

  $conn = null;


  // Create connection
  try{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    array_push($connections, $conn);
    return $conn;
  }
  catch(Exception $e){
    echo "connection error ".$servername;
    error_log("Error Connecting to  ".$dbname." as user ".$username, 0);
  }

}

function closeConnections(){
  foreach ($connections as $conn) {
    $conn = null;
  }
}

?>
