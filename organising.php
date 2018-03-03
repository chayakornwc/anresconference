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
    <link href="css/landing-page.css" rel="stylesheet">
    <link href="css/ANRES.css" rel="stylesheet">
  </head>

  <body>
 <!-- banner zone -->
     <!-- Navigation -->
     <?php
     include('header.php');
 
     include('layout/navigationbar.php');
    ?>
 
     <!-- Masthead -->

    <!-- Masthead -->
    <main class="masthead text-white text-center">
      <div class="_masterhead">
      <article class="main-article" style="min-height:600px;">
        <div  class="section-conntent">
          <!-- <div class="header-content">
            <i class="fa fa-users" aria-hidden="true"></i>
            <p>Conference Organising Committee</p>
          </div>
            <div class="decoration" style="line-height: 0em;
      text-align: center;
      margin-top: 15px;
      margin-bottom: 15px;">
            <div class="decoration-inside" style="height: 1px; display: inline-block;  border-top: 0.25em solid #333333;  width: 100%;  max-width: 25%;">
             </div> -->


         </div>

</article>


    </main>
</div>




    <!-- Testimonials -->



    <!-- Footer -->
<?php
  include('footer.php');
?>
    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script>
      $.getJSON('./organising.json', function(object){
        $.each(object, function(key, values){
          var _table = $('<table>',{class:"table"});
          var _tbody = $('<tbody>');
          var _tr =$('<tr>');
          $.each(values, function(i, obj){
            _tbody.append(
              $('<tr>').append(
                $('<i>', {class:'fa fa-user-circle'},{style:'font-size:16px;'}),
                $('<td>', {text:i}),
                $('<td>',{text:obj})
                      )
           );
          });
          _table.append(_tbody);
            $('.section-conntent').append(
              $('<div>', {class:'header-content'}).append(
           key =="Conference Organising Committee" ?      $("<img>", {src:'img/header2.jpg'}) :'',
                $("<p>").append(
                  key
                ),
              $('<div>', {class:'organising-commit'}).append(
                _table
              )
            )
          )
        });
      });
    </script>
  </body>

</html>
