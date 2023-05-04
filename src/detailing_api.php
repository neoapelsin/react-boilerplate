<?php 
header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + 3600)); 
?>
<?php 
header("Content-Type: application/json; charset=UTF-8");    
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Authorization, Cache-Control, Expires, Pragma, Content-Type, X-Requested-With");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>
<?php
  $json = file_get_contents('php://input');
  $obj = json_decode($json);
	$command = $obj->command;

  if ($command == 'book_appointment') {
    print_r(bookAppointment($obj));
	} 


  function bookAppointment($obj) {
    $name = $obj->name;
    $phone = $obj->phone;
    $res = sendMessage(428542657, "$name|$phone", "6268489926:AAHV1VfcAtbchHQvZkMzAzGM_90i7sc7YDs");
    return $res;
  }


  function sendMessage($chatID, $messaggio, $token) {
    //echo "sending message to " . $chatID . "\n";
    $url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chatID;
    $url = $url . "&text=" . urlencode($messaggio);
    $ch = curl_init();
    $optArray = array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true
    );
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
  }

?>