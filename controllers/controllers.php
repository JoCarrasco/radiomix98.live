<?php 
class DataController {
    protected $mysqli;

    public function __construct() 
    {
        try {
            $this->mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
        } catch (mysqli_sql_exception $e) {
            http_response_code(500);
            exit;
        }     
    }

    public function getVideoSource()
    {
        $query = "SELECT value from radio_values WHERE key_name = video;";
        $stmt = $this->mysqli->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result();     
        $stmt->close();  
        $package_array = $result->fetch_all(MYSQLI_ASSOC);
        if (empty($package_array)) {
            return 'not_exists';
        } else {
            return $package_array;
        }
    }
    
    public function updateVideo($value)
    {
        $query = "UPDATE radio_values SET value = ? WHERE key_name = video;";
        if ($stmt = $this->mysqli->prepare($query)) {
            $stmt->bind_param('s', $value);
            $stmt->execute();
            $stmt->close();
            mysqli_error($this->mysqli);
            return 'success';  
         } else {
            echo $this->mysqli->error;
            return 'error';
         }
    }

    public function login($username, $password)
    {   
        $query = "SELECT users WHERE username = ? WHERE password = ?;";
        if ($stmt = $this->mysqli->prepare($query)) {
            $stmt->bind_param('ss', $username, $password);
            $stmt->execute();
            $result = $stmt->get_result();     
            $stmt->close();  
            $package_array = $result->fetch_all(MYSQLI_ASSOC);
            if (empty($package_array)) {
                return 'not_exists';
            } else {
                return $package_array;
            } 
         } else {
            echo $this->mysqli->error;
            return 'error';
         }
    }
}
?>