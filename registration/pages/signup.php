<!DOCTYPE html>
<html lang="TH" ng-app="app">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">

    <title>Lampang Rajabhat University</title>
    <!-- Bootstrap core CSS -->
    <script src="https://www.gstatic.com/firebasejs/4.6.0/firebase.js"></script>
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
      <!-- font calling -->

    <link rel="stylesheet" href="css/new-age.css">
    <link rel="stylesheet" href="vendor/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="vendor/font-chatThai/csChatThaiUi.css">

        <!-- Custom Style-->
  </head>
    <body>
                <div class="col-lg-5 my-auto">
                  <div class="device-container">
        <div id="main" style="
        margin-top: 90px;">
      <form id="signup-form" class="material lf" >
          <div class="lf-field username">
            <div class="lf input-field">
              <input
              type="text"
              name="username"
              id="username"
              placeholder="กรุณาป้อนบัญชีผู้ใช้ที่คุณต้องการ"
              required
              />
              <span class="material-bar">  </span>
            </div>
          </div>
          <div class="lf-field firstname">
            <div class="lf input-field">
              <input type="text"
               name="firstname"
                id="firstname"
                placeholder="กรุณาป้อนชื่อของคุณ"
                required
                />
                <span class="material-bar">  </span>
            </div>
          </div>
          <div class="lf-field lastname">
            <div class="lf input-field">
              <input type="text"
               name="lastname"
               id="lastname"
               placeholder="กรุณาป้อนนามสกุลของคุณ"

            required  />
              <span class="material-bar"> </span>
            </div>
          </div>
          <div class="lf-field address">
            <div class="lf input-field">
              <input type="text"
               name="address"
                id="address"
                placeholder="กรุณาป้อนที่อยู่อยู่ของคุณ"

              required  />
              <span class="material-bar">  </span>
            </div>
          </div>
          <div class="lf-field company">
            <div class="lf input-field">
              <input
              type="text"
              name="company"
              id="campany"
              placeholder="กรุณาป้อนที่ทำงานของคุณ"

            required  />
              <span class="material-bar">  </span>
            </div>
          </div>
          <div class="lf-field phone-number">
            <div class="lf input-field">
              <input
              type="phonenumber"
              name="phonenumber"
              id="phonenumber"
              placeholder="กรุณาป้อนเบอร์โทรศัพท์ของคุณ"
              required
               />
              <span class="material-bar">  </span>
              <div class="res"></div>
            </div>
          </div>
            <div class="lf-field email">
              <div class="lf input-field">
                <input
                type="email"
                name="email"
                id="email"
                placeholder="กรุณาป้อนอีเมลของคุณ"
                required
                 />
                <span class="material-bar">  </span>
                <div class="res"> </div>
              </div>
          </div>
          <div class="lf-field password">
            <div class="lf input-field">
              <input type="password"
               name="password"
               id="password"
            required
            placeholder="กรุณาป้อนรหัสผ่านที่คุณต้องการ"
             />
              <span class="material-bar">  </span>
              <span id="res"></span>
            </div>
          </div>
          <div class="lf-field password-cf">
            <div class="lf input-field">
              <input
              type="password"
              name="passwordcf"
              id="passwordcf"
               required
               placeholder="ยืนยันรหัสผ่านของคุณ"
               data-validation-confirm="confirmation"
               class=""
              />
              <span class="material-bar"></span>
              <div class="res"></div>
            </div>
          </div>
          <button class="lf-submit dbutton btn-block"  type="submit" >ลงทะเบียน</button>
      </form>
                  </div>
                </div>
            </div>
          </div>
        </header>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/jquery.form-validator.min.js"></script>
      <script src="js/handle.js">  </script>
      <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<script src="vendor/popper/popper.min.js"></script>
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
	<script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js'></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>
    <script src="js/routes.js"> </script>
    <script src="js/course.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="vendor/js/new-age.js"></script>


    </body>

</html>
