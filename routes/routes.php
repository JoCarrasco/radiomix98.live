<?php 
require_once "controllers/controllers.php";
require_once "routes/route.helpers.php";

class DataRoute {
  private $package;

  function init()
  {
    $this->package = new DataController();
    $method = $_SERVER['REQUEST_METHOD'];
    switch ($method) {
    case 'POST': 
      $this->login();
    case 'GET':
      $this->getVideoSource();
    case 'PUT':
      $this->updateVideoSource();
    default:
      break;
    }
  }

  public function login() {
    if ($_GET['action'] == 'login') {
      $obj = (array) json_decode(file_get_contents('php://input'), true);
      if (empty($obj)) {
        ResponseHelper::handle(422, "error", "Nothing to add. Check json");   
      }

      if (isset($obj['username']) && isset($obj['password'])) {
        $package_array = $this->package->login($obj['username'], $obj['password']);
        if ($package_array !== 'error' && $package_array !== 'not_exists') {
          echo json_encode($package_array, JSON_PRETTY_PRINT);
        } else {
          echo json_encode([], JSON_PRETTY_PRINT);
        }
      }
    }
  }

  public function getVideoSource()
  {
    if ($_GET['action'] == 'video') {
      $package_array = $this->package->getVideoSource();
      if ($package_array !== 'error' && $package_array !== 'not_exists') {
        echo json_encode($package_array, JSON_PRETTY_PRINT);
      } else {
        echo json_encode([], JSON_PRETTY_PRINT);
      }
    }
  }

  public function updateVideoSource()
  {
    if ($_GET['action'] == 'video') {
      $obj = (array) json_decode(file_get_contents('php://input'), true);
      if (empty($obj)) {
        ResponseHelper::handle(422, "error", "Nothing to add. Check json");     
      } else {
        if (isset($obj['value']) ) {
          $result = $this->package->updateVideo($obj['value']);
          if ($result === 'success') {
            ResponseHelper::handle(201, "success", "Package updated"); 
          } else {
            ResponseHelper::handle(500, "error", "Server Error"); 
          }
        } else {
          ResponseHelper::handle(422, "error", "Nothing to add. Check json");     
        }
      }
    }
  }
}
?>