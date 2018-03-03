<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>ANRES 2018</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">

    <!-- Custom styles for this template -->

    <link href="css/ANRES.css" rel="stylesheet">

  </head>

  <body>
     <!-- banner zone -->
     <!-- Navigation -->
<?php
    include('header.php');

    include('layout/navigationbar.php');
   ?>
   <body>
   <main class="masthead text-white text-center">
      <div class="_masterhead">
      </div>
      <article class="main-article">
        <div class="section-conntent">

        <div class="col-md-8 md-auto">
        <p style="padding-top:15px;"><a style="color: #f52c40; font-weight:bold;" href="http://www.windsorsuiteshotel.com/">HOTEL WINDSOR SUITES & CONVENTION
         <br> Sukhumvit 20, Sukhumvit Road, Bangkok 10110, Thailand Tel +66 2 262 1234
      </a></p><button style="margin-bottom:10px;" onclick="window.location.href='http://www.windsorsuiteshotel.com/'" type="button" class="btn btn-info"><i class="fa fa-external-link" aria-hidden="true"></i> Hotel Website</button>
        <img src="./img/winsor.jpg" style="width:100%; height:auto;"> </img>
      <p>The Hotel Windsor Suites & Convention has a privileged location at the heart of Bangkok, a few steps away (500 m) from the BTS sky train Asoke station and the MRT subway Sukhumvit station. </p>
        <p>Special hotel room reservation for ANRES 2018, <br> please download<a href="./files-article/rh1.doc"> Reservation Hotel Form </a>and E-mail to  rsvn@windsorsuiteshotel.com or vatit@windsorsuiteshotel.com</p> 
      <p>The Bus pass are line 2, 25, 38, 40, 501, 508, 511, 513 </p>
   
     
      </div>
      <div class="col-md-8 md-auto">
          <div class="container" style="padding-bottom:30px;">
      <div id="map" style="display:block">
              this map
           </div>
    </div>
    <img src="./img/windsor.jpg" style="width:100%; height:auto;"> </img>
    </div>

            </article>
            </div> 
    </main>


    <?php include('footer.php') ?> 
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
 <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQr4jsrhjjyftqcsxG9chVieJ5Q4L15Yo&callback=initMap" async defer></script>
 <script>
   var map;
 function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 13.733900, lng: 100.563892},
         zoom: 19
        });
        var marker = new google.maps.Marker({
          position: {lat: 13.733900, lng: 100.563892},
          map: map,
          title: 'Windsor Suites Hotel Bangkok'
        });
      }
 </script>
</body>
</html>