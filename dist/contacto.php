<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'include/phpmailer/Exception.php';
    require 'include/phpmailer/PHPMailer.php';
    require 'include/phpmailer/SMTP.php';

    date_default_timezone_set('America/Mexico_City');

    $mail = new PHPMailer(true);


	// Fetching Values from URL.
	$name    = $_POST['name'];
	$email   = $_POST['email'];
	$message = $_POST['message'];
    $data     = [];
    /*$name     = "Jonathan";
    $email    = "jonathan.bailon@cch.unam.mx";
    $message  = "Mensaje de prueba";*/
	//$contact = $_POST['contact1'];
	$email    = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
    $template = $message;
	$from     = "portalad@cch.unam.mx";
    
	// After sanitization Validation is performed
	if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

        try {
            //Server settings
           // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.office365.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'portalad@cch.unam.mx';                     //SMTP username
            $mail->Password   = '';                               //SMTP password
            //$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->SMTPSecure = 'tls'; 
            $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
        
            //Recipients
            $mail->setFrom($from, 'Soporte Portal Académico del CCH');
            $mail->addAddress('portalacademico@cch.unam.mx', 'Portal Académico');     //Add a recipient
            //$mail->addAddress('ellen@example.com');               //Name is optional
            $mail->addReplyTo($email, '');
            //$mail->addCC('cc@example.com');
            //$mail->addBCC('bcc@example.com');
        
            //Attachments
            //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
            //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
        
            //Content
            $mail->isHTML(true);   
            $mail->CharSet = "utf-8";                               //Set email format to HTML
            $mail->Subject = 'Enviado desde contacto de Publica';
            //$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
            $mail->Body    = $template;
            //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        
            $mail->send();

            $data["envio"] = "exito";

        } catch (Exception $e) {
            $data["envio"] = "error";
            $data["error_message"] = "No se pudo enviar el mensaje. Error de correo: {$mail->ErrorInfo}";
        }

	} else {
        $data["envio"] = "error";
        $data["error_message"] = "Correo electrónico invalido";
	}

    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data);
?>