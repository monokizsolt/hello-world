<?php
//give permission to write new files
// PUTTY -> login with caeser -> fs sa ~/../web/gonogo_data kispalinkas.web write
// the $_POST[] array will contain the passed in filename and data
// the directory "data" is writable by the server (chmod 777)
//phpinfo();

function fn($neptun){
    return "./data/" . $neptun . ".csv";
}

$neptun = $_POST['neptun'];
preg_match('/\w+/', $neptun, $m);

$neptun = $m[0];

if(file_exists(fn($neptun))){
    $i = 1;
    while(file_exists(fn($neptun . "-" . $i)))
        $i++;
    $neptun .= ("-" . $i);
}

$data = $_POST['RTs'];
// write the file to disk
file_put_contents(fn($neptun), $data);

echo("Válaszaidat elmentettük. Most már bezárhatod az ablakot.")
?>