<?php 
class ResponseHelper {
	static function handle($code=200, $status="", $message="") 
	{
		http_response_code($code);
		if(!empty($status) && !empty($message))
		{
			$response = array("status" => $status ,"message" => $message);  
			echo json_encode($response, JSON_PRETTY_PRINT);    
		} 
	}
}
?>