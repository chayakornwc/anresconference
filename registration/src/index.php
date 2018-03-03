<html lang="TH">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">

    <title>Lampang Rajabhat University</title>
    <!-- Bootstrap core CSS -->
    <script src="https://www.gstatic.com/firebasejs/4.6.0/firebase.js"></script>
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
      <!-- font calling -->

    <link rel="stylesheet" href="../css/new-age.css">
    <link rel="stylesheet" href="../vendor/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="../vendor/font-chatThai/csChatThaiUi.css">
    <link href="../css/course.css" rel="stylesheet">
    <link href="./css/animate.css" rel="stylesheet">
    <link href="./css/formV1.css" rel="stylesheet">
    <link href="./dist/datepicker/css/bootstrap-datepicker.min.css" rel="stylesheet">
    <link href="../vendor/jquery-ui/css/jquery-ui.css">
        <!-- Custom Style-->
  </head>
    <body ng-app="sourse-training">
      <nav class="navbar navbar-expand-lg navbar-light fixed-top couTop"  id="mainNav">
      <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="/chayakorn"><img src="../img/logo.png"></a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
       <ul class="navbar-nav ml-auto" id="head-selector">
         <li class="nav-item">
            <a class="nav-link js-scroll-trigger"  data-target="#/course" href="#/course">เอกสาร</a>
          </li>
         <li class="nav-item">
            <a class="nav-link js-scroll-trigger"  data-target="#/course" href="#/course">การอบรม</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" data-target="#/signin" href="#/signin">ลงชื่อเข้าใช้</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" data-target="/chayakorn/" href="/chayakorn/">สร้างบัญชีผู้ใช้</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      <header id="contextNav" class="contextNav">
        <div class="subcontext">
          <div class="styles_breadcrumbs">
            <div class="styles_breadcrumbs__li"><a href="#/course/OutSideTr">ตารางการอบรม บุคลากรภายนอก </a></div>
              <div class="styles_breadcrumbs__li"><a href="#/course/OutSideTr">ตารางอบรมบุคลากร ภายใน</a></div>
                <div class="styles_breadcrumbs__li"><a href="#/course/OutSideTr">ตารางการอบรม นักศึกษา</a></div>
                  <div class="styles_breadcrumbs__li"><a href="#/course/OutSideTr">ค้นหารายชื่อผู้เข้าร่วมอบรม</a></div>
          </div>
        </div>
      </header>
        <div class="module-course body-2j__style" ng-controller="TodoTraining">
            <div class="contextBody">
              <div class="content-action">
                <div class="styles__leftActions___2UaiY">
                  <div>
                    <div>
                    <div class="Select dselect  is-searchable has-value">
                    <div class="select-control">
                      <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        การดำเนินการ
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">กำลังดำเนินการ</a>
                        <a class="dropdown-item" href="#">เสร็จสิ้นกระบวนการอบรม</a>
                        <a class="dropdown-item" href="#">ยังไม่ได้ดำเนินการ</a>
                      </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div class="styles__flex filter_data">
                  <div>
                    <div class="filter_body">
                      <input class="filter-i" value="" type="text" id="" ng-model="search" placeholder="กรองข้อมูลโดย... "> </input>
                  <div>
                        <hr class="hr_first"><hr class="hr_second">
                      </div>
                    </div>

                  </div>
                </div>

                </div>
                <div class="NewActivity">
                  <button class="btn" data-toggle="modal" type="button" data-target="#add-trData"> <svg class="icon icon-plus"><use xlink:href="#icon-plus"></use><symbol id="icon-plus" viewBox="0 0 22 28">
                  <title>plus</title>
                  <path d="M22 11.5v3c0 0.828-0.672 1.5-1.5 1.5h-6.5v6.5c0 0.828-0.672 1.5-1.5 1.5h-3c-0.828 0-1.5-0.672-1.5-1.5v-6.5h-6.5c-0.828 0-1.5-0.672-1.5-1.5v-3c0-0.828 0.672-1.5 1.5-1.5h6.5v-6.5c0-0.828 0.672-1.5 1.5-1.5h3c0.828 0 1.5 0.672 1.5 1.5v6.5h6.5c0.828 0 1.5 0.672 1.5 1.5z"></path>
                  </symbol></svg> เปิดการอบรม </button>
                </div>
              </div>

                 <div class="dlist">
                  <ul class="styles__cul3">
                    <li class="dlist__item styles_hover" ng-repeat="d in courseDetail | filter: search">
                   <div class="dselector">
                     <div class="dcheckbox"></div>
                   </div>
                   <div class="list-content">
                     <div class="course-item-list">
                       <a class="course-link"></a>
                       <div class="course-content">
                         <div class="courseName">
      <svg class="icon icon-files-empty privacyIcon"><use xlink:href="#icon-files-empty"><symbol id="icon-files-empty" viewbox="0 0 32 32"><path d="M28.681 11.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-11.5c-1.379 0-2.5 1.122-2.5 2.5v23c0 1.378 1.121 2.5 2.5 2.5h19c1.378 0 2.5-1.122 2.5-2.5v-15.5c0-0.448-0.137-1.23-1.319-2.841zM24.543 9.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268v0zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-19c-0.271 0-0.5-0.229-0.5-0.5v-23c0-0.271 0.229-0.5 0.5-0.5 0 0 11.499-0 11.5 0v7c0 0.552 0.448 1 1 1h7v15.5z"></path><path d="M18.841 1.319c-1.612-1.182-2.393-1.319-2.841-1.319h-11.5c-1.378 0-2.5 1.121-2.5 2.5v23c0 1.207 0.86 2.217 2 2.45v-25.45c0-0.271 0.229-0.5 0.5-0.5h15.215c-0.301-0.248-0.595-0.477-0.873-0.681z"></path></symbol></use></svg>
                           <div>{{d.course}}</div>
                         </div>
                         <div class="lectureDescrip">วิทยากรหลัก {{d.course_lecture}}</div>
                       </div>
                           <div>
                             <div class="date-using-tr">
                               <svg class="icon icon-calendar"><use xlink:href="#icon-calendar">
                                 <symbol id="icon-calendar" viewBox="0 0 32 32">
                                   <path d="M22 16h-2v4h2v-4zM18 16h-2v4h2v-4zM22 10h-2v4h2v-4zM26 16h-2v4h2v-4zM18 22h-2v4h2v-4zM24 0h-2v4h2v-4zM8 0h-2v4h2v-4zM26 10h-2v4h2v-4zM18 10h-2v4h2v-4zM10 22h-2v4h2v-4zM6 16h-2v4h2v-4zM10 16h-2v4h2v-4zM26 2v4h-6v-4h-10v4h-6v-4h-4v28h30v-28h-4zM28 28h-26v-20h26v20zM6 22h-2v4h2v-4zM14 10h-2v4h2v-4zM14 22h-2v4h2v-4zM10 10h-2v4h2v-4zM14 16h-2v4h2v-4zM22 22h-2v4h2v-4z"></path>
                                   </symbol>
                                   </use>
                                 </svg>
                                 <span class="display__dateX">{{d.op_course}}</span>
                                 <span class="display__dateX">{{d.close_course}}</span>
                             </div>
                             <div class="time-using-tr">
                               <svg class="icon icon-clock"><use xlink:href="#icon-clock"></use>
                                 <symbol id="icon-clock" viewBox="0 0 32 32">
                                   <path d="M20.586 23.414l-6.586-6.586v-8.828h4v7.172l5.414 5.414zM16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z"></path>
                                   </symbol>
                               </svg>
                               <span class="display__timeX">{{d.timeusing}}</span>
                             </div>
                           </div>
                           <div class="display_attendee">
                             <span>
                               <svg class="icon icon-organization"><use xlink:href="#icon-organization"></use>
                                 <symbol id="icon-organization" viewBox="0 0 28 32">
                                     <path d="M24 12h-20c-2.208 0-4 1.792-4 4v2c0 1.477 0.808 2.752 2 3.445v6.555h8v4h8v-4h8v-6.555c1.191-0.693 2-1.967 2-3.445v-2c0-2.208-1.793-4-4-4zM8 26h-4v-8h-2v-2c0-1.104 0.897-2 2-2h2.554c-0.344 0.59-0.554 1.268-0.554 2v4c0 1.477 0.808 2.752 2 3.445v2.555zM18 22v-4h-2v12h-4v-12h-2v4c-1.104 0-2-0.895-2-2v-4c0-1.104 0.896-2 2-2h8c1.105 0 2 0.896 2 2v4c0 1.105-0.895 2-2 2zM26 18h-2v8h-4v-2.555c1.191-0.693 2-1.967 2-3.445v-4c0-0.732-0.211-1.41-0.555-2h2.555c1.105 0 2 0.896 2 2v2zM9.49 9.918c1.1 1.266 2.702 2.082 4.51 2.082s3.41-0.816 4.51-2.082c0.682 1.236 1.98 2.082 3.49 2.082 2.207 0 4-1.792 4-4s-1.793-4-4-4c-0.801 0-1.543 0.24-2.168 0.646-0.617-2.66-2.986-4.646-5.832-4.646s-5.216 1.986-5.832 4.646c-0.626-0.406-1.368-0.647-2.168-0.647-2.208 0-4 1.792-4 4s1.792 4 4 4c1.51 0 2.808-0.846 3.49-2.082zM22 6c1.105 0 2 0.894 2 2s-0.895 2-2 2c-1.104 0-2-0.894-2-2s0.896-2 2-2zM14 2c2.207 0 4 1.792 4 4s-1.793 4-4 4c-2.208 0-4-1.792-4-4s1.792-4 4-4zM6 10c-1.104 0-2-0.894-2-2s0.896-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2z"></path>
                                     </symbol>
                               </svg>
                             </span>
                               <span class="attn_count">จำนวนผู้เข้าอบรม {{d.Counte}} </span>
                              <div class="course_or">
                                <span>
                                      <svg class="icon icon-leanpub"><symbol id="icon-leanpub" viewBox="0 0 32 28"><title>leanpub</title><path d="M29.578 6.125l2.422 19.875c-1.453 0-2.703-0.297-4.016-0.891-1.953-0.891-3.984-1.422-6.141-1.422-2.219 0-4.266 0.734-5.844 2.312-1.578-1.578-3.625-2.312-5.844-2.312-2.156 0-4.188 0.531-6.141 1.422-1.266 0.562-2.547 0.891-3.938 0.891h-0.078l2.422-19.875c2.234-1.266 4.953-1.984 7.531-1.984 2.109 0 4.281 0.438 6.047 1.656 1.766-1.219 3.938-1.656 6.047-1.656 2.578 0 5.297 0.719 7.531 1.984zM21.844 21.547c2.969 0 5 0.797 7.688 1.906l-1.937-15.953c-1.75-0.797-3.828-1.219-5.75-1.219-2.188 0-4.234 0.688-5.844 2.203-1.609-1.516-3.656-2.203-5.844-2.203-1.922 0-4 0.422-5.75 1.219l-1.937 15.953c2.688-1.109 4.719-1.906 7.688-1.906 2.141 0 4.031 0.547 5.844 1.687 1.813-1.141 3.703-1.687 5.844-1.687zM22.469 21.016l-0.859-14.172c-2.25 0.047-4.031 0.812-5.609 2.422-1.641-1.672-3.5-2.422-5.844-2.422-1.75 0-3.625 0.359-5.25 1.031l-1.781 14.703c2.359-0.969 4.438-1.578 7.031-1.578 2.063 0 4.078 0.5 5.844 1.594 1.766-1.094 3.781-1.641 5.844-1.594z"></path></symbol><use xlink:href="#icon-leanpub"></use></svg>
                              </span>
                              <span class="display_courseOR">{{d.couse_or}}</span>
                            </div>
                           </div>
                           <div>
                           <div class="status-course">
                             <span class="display-status-course">{{d.status}}</span>
                           </div>
                           <div class="course-assessment">
                             <span>
                               <svg class="icon icon-pie-chart"><use xlink:href="#icon-pie-chart"></use>
                                 <symbol id="icon-pie-chart" viewBox="0 0 32 32">
                                 <path d="M14 18v-14c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14c0-2.251-0.532-4.378-1.476-6.262l-12.524 6.262zM28.524 7.738c-2.299-4.588-7.043-7.738-12.524-7.738v14l12.524-6.262z"></path>
                                 </symbol></svg>
                             </span>
                             <span class="assessment-display">{{d.assessment}}</span>
                           </div>
                         </div>

                     </div>
                   </div>
                 </li>

                  </ul>
                </div>
            </div>
         </div>
                 <div class="modal" tabindex="-1" id="add-trData" role="dialog" ng-controller="openCourse">
                  <div class="modal-dialog" role="document">
                  <div class="modal-content">
                   <div class="modal-header">
                     <p class="modal-title">เปิดการอบรม กรุณาป้อนข้อมูล</p>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                     </button>
                   </div>
                   <form class="data-form-modal" id="add-course-tr">
                   <div class="modal-body">
                     <div>
                     <select class="custom-select CourseSelect">
                       <option selected>กรุณาเลือกหลักสูตร</option>
                       <option ng-repeat="itrData in itrData" >{{itrData}}</option>
                     </select>
                   </div>
                   <div>
                     <select class="custom-select LectureSelect">
                       <option selected>วิทยากรหลัก</option>
                       <option ng-repeat="trLecData in trLecData">{{trLecData.name}} {{trLecData.surname}}</option>
                     </select>
                   </div>
                   <div>
                     <select class="custom-select orSelect">
                       <option selected>ห้องปฏิบัติการ</option>
                       <option ng-repeat="trORData in trORData">{{trORData}}</option>
                     </select>
                   </div>
                  <div>
                         <div class='input-group date' id='opcdatepicker'>
                             <input type='text' class="form-control"/>
                             <span class="input-group-addon">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                             </span>
                        </div>

                        <span style="padding-left:5px; padding-right:5px; margin-top:10px"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                         <div class='input-group date' id='clscdatepicker'>
                           <input type='text' class="form-control"/>
                           <span class="input-group-addon">
                          <i class="fa fa-calendar" aria-hidden="true"></i>
                           </span>

                   </div>
                  </div>
                        <div>
                          <span style="padding-right:5px;"><i class="fa fa-clock-o fa-2x" aria-hidden="true"></i></span>
                          <select class="custom-select orSelect">
                            <option selected> --:-- ถึง --:-- </option>
                            <option>08.30 ถึง 16.30 น.</option>
                            <option>16.30 ถึง 20.00 น.</option>
                          </select>
                        </div>

                  <div>
                      <div class="lf-input-group" id="add_attendeeData">
                        <input type='text' data-uid="" placeholder="ป้อนชื่อ นามสกุล username รหัสนักศึกษา" id="input_attn_data" class="form-control"/>
                          <button class="btn btn-secondary" id="add-attendee" type="button" style="margin-left:5px;">
                              <i class="fa fa-user-plus" aria-hidden="true"></i> เพิ่ม
                           </button>
                      </div>
                  </div>
                  <div class="autocomplteAttendee shadow" style="border: solid 1px rgba(204, 204, 204, 0.42); position: absolute;
                background-color: #fff;
                z-index: 999;
                top: 306px;">
                  <ul style="list-style: none;
                  left: -15px;
                  position: relative;" tabindex="0">
                  </ul>
                  </ul>
                </div>
                  <div>
                    <table class="todo_std table">
                        <thead>
                          <tr>
                            <th>ลำดับ</th>
                            <th>รหัสผู้เข้าร่วม</th>
                            <th>ชื่อ นามสกุล</th>
                            <th>คณะ/หน่วยงาน</th>
                            <th>สาขาวิชา/ฝ่ายง่าน</th>
                          </tr>
                        </thead>
                        <tbody > </tbody>
                    </table>
                   <div class="modal-footer">
                     <button  type="submit" class="btn lf-btn-success">ตกลง</button>
                     <button type="button" class="btn btn-secondary" data-dismiss="modal">ยกเลิก</button>
                   </div>
                 </form>
                  </div>
                  </div>
                  </div>
                </div>
              </div>


    <script src="../vendor/popper/popper.min.js"></script>
    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/jquery-ui/jquery-ui.js"></script>
    <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>
	  <script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js'></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>
    <script src="https://cdn.firebase.com/libs/angularfire/2.3.0/angularfire.min.js"></script>
    <script src="./js/restful.js" rel="stylesheet"></script>
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="../vendor/js/new-age.js"></script>
    <script src="./js/animate.js"> </script>
    <script src="./dist/datepicker/js/bootstrap-datepicker.min.js"></script>
    <script src="./dist/datepicker/locales/bootstrap-datepicker.th.min.js" charset="utf-8"></script>

    </body>

</html>
