<?php

include(__DIR__ . '/data.php');

header('Content-Type: application/json');

    echo json_encode($discs);

    //http://localhost/php-ajax-dischi/data/data.php
    //json raggiungibile qui^

?>