
<?php

$request =  trim($_SERVER['REQUEST_URI'], '/');
$requests= explode('?',$request);
// echo $_SERVER['REQUEST_URI'];
switch ($requests[0]) {
    case '/' :
        require __DIR__ . '/views/index.php';
        break;
    case '' :
        require __DIR__ . '/views/index.php';
        break;
    case 'login' :
        require __DIR__ . '/views/login.php';
        break;
    case 'signup' :
        require __DIR__ . '/views/reg.php';
        break;
    
    default:
            http_response_code(404);
        require __DIR__ . '/views/404.php';
        
        break;
}

?>