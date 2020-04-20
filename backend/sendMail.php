<html>

<head>
  <title>Sending HTML email using PHP</title>
</head>

<body>
  <!-- CORS -->
  <?php

  // We'll be granting access to only the thiagodellanoce.com.br/portfolio domain 
  // which we think is safe to access this resource as application/xml
  if ($_SERVER['HTTP_ORIGIN'] == "https://thiagodellanoce.com.br/portfolio") {
    header('Access-Control-Allow-Origin: https://thiagodellanoce.com.br/portfolio');
  } else {
    echo "Não aceito";
  }
  ?>

  <?php

  // sendEmail
  $to = "contato@thiagodellanoce.com.br";
  $subject = $_POST["subject"];

  $message = "<b>Mensagem do site:</b>";
  $message .= $_GET["name"] . "\n<br>";
  $message .= $_GET["email"] . "\n<br>";
  $message .= $_GET["subject"] . "\n<br>";
  $message .= $_GET["message"] . "\n<br>";

  // To send HTML mail, the Content-type header must be set
  $headers = "From: site@thiagodellanoce.com\r\n";
  $headers .= "Reply-To: site@thiagodellanoce.com\r\n";
  $headers .= "CC: site@thiagodellanoce.com\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  $retval = mail($to, $subject, $message, $headers);

  if ($retval == true) {
    echo "Message sent successfully...";
  } else {
    echo "Message could not be sent...";
  }

  ?>

</body>

</html>