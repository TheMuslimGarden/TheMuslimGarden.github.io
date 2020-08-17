
document.getElementsByTagName("head")[0].innerHTML+='   <meta name="viewport" content="width=device-width, initial-scale=1"><title>The Muslim Garden | Home</title><!-- Latest compiled and minified CSS --><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"   integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"><!-- Optional theme --><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css"integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous"><!--Jquery--><script src="https://code.jquery.com/jquery-2.2.4.min.js"   integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script><!-- Latest compiled and minified JavaScript Bootstrap--><script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"   integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"   crossorigin="anonymous"></script><link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"><link href="https://themuslimgarden.github.io/stylesheets/main.css" rel="stylesheet">';

if($===!undefined){
$("body").prepend("<div id='header-placeholder'></div>");
$("body").append("<div id='footer-placeholder'></div>")

$("#header-placeholder").load("https://TheMuslimGarden.github.io/WebsiteParts/Header.html");


$("#footer-placeholder").html("<footer><a href=\"https://Themuslimgarden.github.io/About Us\">About Us</a></footer>");
 
}