
<?php
$botToken = "7172293846:AAFWJVHkDI6UVyJ5zOUyA0uD_CEhFjPWomQ";
$website = "https://api.telegram.org/bot".$botToken;

// Получаем обновления от Telegram
$update = file_get_contents('php://input');
$update = json_decode($update, TRUE);

// Извлекаем ID чата и сообщение
$chatId = $update["message"]["chat"]["id"];
$message = $update["message"]["text"];

// Ответ в зависимости от команды
switch($message) {
    case "/start":
        $response = "Привет, это бот!";
        break;
    default:
        $response = "Вы написали: ".$message;
        break;
}

// Отправка ответа
file_get_contents($website."/sendMessage?chat_id=".$chatId."&text=".urlencode($response));
?>
