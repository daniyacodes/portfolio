<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../PHPMailer/src/Exception.php';
require __DIR__ . '/../PHPMailer/src/PHPMailer.php';
require __DIR__ . '/../PHPMailer/src/SMTP.php';

header('Content-Type: text/plain; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    exit('Method not allowed.');
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

if (strlen($name) < 2 || strlen($name) > 100 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    strlen($subject) < 2 || strlen($subject) > 150 ||
    strlen($message) < 10 || strlen($message) > 5000) {
    http_response_code(422);
    exit('Please check the form fields and try again.');
}



$configFile = dirname(__DIR__, 2) . '/portfolio-private/smtp-config.php';

if (!is_file($configFile)) {
    error_log('Portfolio contact form: private SMTP config file is missing.');
    http_response_code(500);
    exit('Email is not configured yet. Please email me directly.');
}

$smtp = require $configFile;

if (!is_array($smtp) || empty($smtp['password'])) {
    error_log('Portfolio contact form: SMTP settings are incomplete.');
    http_response_code(500);
    exit('Email is not configured yet. Please email me directly.');
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $smtp['host'];
    $mail->SMTPAuth = true;
    $mail->Username = $smtp['username'];
    $mail->Password = $smtp['password'];
    $mail->SMTPSecure = $smtp['encryption'] === 'ssl'
        ? PHPMailer::ENCRYPTION_SMTPS
        : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = (int) $smtp['port'];
    $mail->CharSet = 'UTF-8';

    $mail->setFrom($smtp['from_email'], $smtp['from_name']);
    $mail->addAddress($smtp['to_email']);
    $mail->addReplyTo($email, $name);

    $mail->Subject = $subject;
    $mail->Body = "Name: $name\nEmail: $email\n\n$message";

    $mail->send();
    echo 'OK';
} catch (Exception $error) {
    error_log('Portfolio contact form failed: ' . $mail->ErrorInfo);
    http_response_code(500);
    echo 'Message could not be sent. Please try again later.';
}
