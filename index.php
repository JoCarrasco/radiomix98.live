<?php
require "lib/imports.php";
require "routes/route.helpers.php";
require "routes/routes.php";

(new DotEnv(__DIR__ . '/.env'))->load();
define("DB_HOST", getenv('HOST'));
define("DB_USER", getenv('DATABASE_USER'));
define("DB_PASSWORD", getenv('DATABASE_PASSWORD'));
define("DB_DATABASE", getenv('DATABASE_NAME'));
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, UPDATE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=utf-8");

$dataRoute = new DataRoute();
$dataRoute->init();
?>