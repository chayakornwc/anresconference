var config = {
    apiKey: "AIzaSyABbdVqWAOwDzKJS-5QgEyWIdjNl0nT-Rg",
    authDomain: "trmanger-44936.firebaseapp.com",
    databaseURL: "https://trmanger-44936.firebaseio.com",
    projectId: "trmanger-44936",
    storageBucket: "trmanger-44936.appspot.com",
    messagingSenderId: "170847716626"
  };
var data = [];
firebase.initializeApp(config);
var firebase_ref = firebase.database().ref('course_op');

// firebase_ref.on('value', function (snapshot) {
//  load();
//
// });
//
// //console.log(courseDetail)
// // function fetchCourse(e){
// //     $.each(e, function(key, object){
// //     var _courseName = (course.val());
// //     })
// // }
//
//
// var $ul = $('.styles__cul3');
//
// function load() {
//     var  firebase_ref = firebase.database().ref('course_op');
//     firebase_ref.once('value').then(function (snapshot){
//        $ul.empty();
//        snapshot.forEach(function (datasnapshot) {
//         var results = datasnapshot.val();
//         data.push(results);
//         localStorage["CourseReference"] = JSON.stringify(data);
//         var   _courseName = (results.course);
//         var  _lecture = (results.course_lecture);
//         var _op_course = (results.op_course);
//         var _close_course = (results.close_course);
//         var _coursestatus =(results.status);
//         var _courseAssn = (results.assessment);
//         var _courseTimeDuration = (results.timeusing);
//         var courseOR = (results.couse_or);
//         var CountAttn = [];
//       $.each(results, function(i, obj){
//           if (i =='attn'){
//             var total_attn = 0;
//               $.each(obj, function (i, item) {
//                   total_attn++;
//               });
//             CountAttn.push(total_attn)
//           }
//           return CountAttn;
//         })
//         var CountAttn = JSON.parse(CountAttn)
//         addDataList(_courseName, _lecture, _op_course, _close_course, CountAttn, _coursestatus, _courseAssn,_courseTimeDuration,courseOR);
//   })
//
//
// });
//
//
//   //  console.log(CourseReference);
// }
//
// function load() {
//     var  firebase_ref = firebase.database().ref('course_op');
//     firebase_ref.once('value').then(function (snapshot){
//       // $ul.empty();
//        snapshot.forEach(function (datasnapshot) {
//         var results = datasnapshot.val();
//         data.push(results);
//         localStorage["CourseReference"] = JSON.stringify(data);
//         var   _courseName = (results.course);
//         var  _lecture = (results.course_lecture);
//         var _op_course = (results.op_course);
//         var _close_course = (results.close_course);
//         var _coursestatus =(results.status);
//         var _courseAssn = (results.assessment);
//         var _courseTimeDuration = (results.timeusing);
//         var courseOR = (results.couse_or);
//         var CountAttn = [];
//       $.each(results, function(i, obj){
//           if (i =='attn'){
//             var total_attn = 0;
//               $.each(obj, function (i, item) {
//                   total_attn++;
//               });
//             CountAttn.push(total_attn)
//           }
//           return CountAttn;
//         })
//         var CountAttn = JSON.parse(CountAttn)
//       //  addDataList(_courseName, _lecture, _op_course, _close_course, CountAttn, _coursestatus, _courseAssn,_courseTimeDuration,courseOR);
//   })
//
//
// });
//
//
//   //  console.log(CourseReference);
// }

function getDataFirebase() {
    var  firebase_ref = firebase.database().ref('course_op');
    return firebase_ref;
}


function addDataList(_courseName, _lecture, _op_course, _close_course, CountAttn,_coursestatus, _courseAssn, _courseTimeDuration, courseOR){

          $ul.append(
            $('<li>',{ class:'dlist__item styles_hover'}).append(
              $('<div>', {class:'dselector'}).append(
                $('<div>', {class:'dcheckbox'})
              ),
              $('<div>',{class:'list-content'}).append(
              $('<div>', {class:'course-item-list'}).append(
                $('<a>,', {class:'course-link'}),
                $('<div>', {class:'course-content'}).append(
                  $('<div>', {class:'courseName'}).append(
                  $('<svg class="icon icon-files-empty privacyIcon"><use xlink:href="#icon-files-empty"><symbol id="icon-files-empty" viewbox="0 0 32 32"><path d="M28.681 11.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-11.5c-1.379 0-2.5 1.122-2.5 2.5v23c0 1.378 1.121 2.5 2.5 2.5h19c1.378 0 2.5-1.122 2.5-2.5v-15.5c0-0.448-0.137-1.23-1.319-2.841zM24.543 9.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268v0zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-19c-0.271 0-0.5-0.229-0.5-0.5v-23c0-0.271 0.229-0.5 0.5-0.5 0 0 11.499-0 11.5 0v7c0 0.552 0.448 1 1 1h7v15.5z"></path><path d="M18.841 1.319c-1.612-1.182-2.393-1.319-2.841-1.319h-11.5c-1.378 0-2.5 1.121-2.5 2.5v23c0 1.207 0.86 2.217 2 2.45v-25.45c0-0.271 0.229-0.5 0.5-0.5h15.215c-0.301-0.248-0.595-0.477-0.873-0.681z"></path></symbol></use></svg>'),
                  $('<div>').text(_courseName)
                ),
                $('<div>', {class:'lectureDescrip'},).text('วิทยากรหลัก: '+_lecture)
              ),
              $('<div>').append(
                $('<div>', {class:'date-using-tr'}).append(
                  $('<svg class="icon icon-calendar"><use xlink:href="#icon-calendar"><symbol id="icon-calendar" viewBox="0 0 32 32"><path d="M22 16h-2v4h2v-4zM18 16h-2v4h2v-4zM22 10h-2v4h2v-4zM26 16h-2v4h2v-4zM18 22h-2v4h2v-4zM24 0h-2v4h2v-4zM8 0h-2v4h2v-4zM26 10h-2v4h2v-4zM18 10h-2v4h2v-4zM10 22h-2v4h2v-4zM6 16h-2v4h2v-4zM10 16h-2v4h2v-4zM26 2v4h-6v-4h-10v4h-6v-4h-4v28h30v-28h-4zM28 28h-26v-20h26v20zM6 22h-2v4h2v-4zM14 10h-2v4h2v-4zM14 22h-2v4h2v-4zM10 10h-2v4h2v-4zM14 16h-2v4h2v-4zM22 22h-2v4h2v-4z"></path></symbol></use></svg>'),
                  $('<span>', {class:'display__dateX'}).text(_op_course),
                  $('<span>', {class:'display__dateX'}).text(_close_course)
                ),
                $('<div>', {class:'time-using-tr'}).append(
                  $('  <svg class="icon icon-clock"><use xlink:href="#icon-clock"></use><symbol id="icon-clock" viewBox="0 0 32 32"><path d="M20.586 23.414l-6.586-6.586v-8.828h4v7.172l5.414 5.414zM16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z"></path></symbol></svg>'),
                  $('<span>', {class:'display__timeX'}).append(_courseTimeDuration)
                )
              ),
                $('<div>').append(
              $('<div>', {class:'display_attendee'}).append(

                $('<span>').append(
$('<svg class="icon icon-organization"><use xlink:href="#icon-organization"></use><symbol id="icon-organization" viewBox="0 0 28 32"><path d="M24 12h-20c-2.208 0-4 1.792-4 4v2c0 1.477 0.808 2.752 2 3.445v6.555h8v4h8v-4h8v-6.555c1.191-0.693 2-1.967 2-3.445v-2c0-2.208-1.793-4-4-4zM8 26h-4v-8h-2v-2c0-1.104 0.897-2 2-2h2.554c-0.344 0.59-0.554 1.268-0.554 2v4c0 1.477 0.808 2.752 2 3.445v2.555zM18 22v-4h-2v12h-4v-12h-2v4c-1.104 0-2-0.895-2-2v-4c0-1.104 0.896-2 2-2h8c1.105 0 2 0.896 2 2v4c0 1.105-0.895 2-2 2zM26 18h-2v8h-4v-2.555c1.191-0.693 2-1.967 2-3.445v-4c0-0.732-0.211-1.41-0.555-2h2.555c1.105 0 2 0.896 2 2v2zM9.49 9.918c1.1 1.266 2.702 2.082 4.51 2.082s3.41-0.816 4.51-2.082c0.682 1.236 1.98 2.082 3.49 2.082 2.207 0 4-1.792 4-4s-1.793-4-4-4c-0.801 0-1.543 0.24-2.168 0.646-0.617-2.66-2.986-4.646-5.832-4.646s-5.216 1.986-5.832 4.646c-0.626-0.406-1.368-0.647-2.168-0.647-2.208 0-4 1.792-4 4s1.792 4 4 4c1.51 0 2.808-0.846 3.49-2.082zM22 6c1.105 0 2 0.894 2 2s-0.895 2-2 2c-1.104 0-2-0.894-2-2s0.896-2 2-2zM14 2c2.207 0 4 1.792 4 4s-1.793 4-4 4c-2.208 0-4-1.792-4-4s1.792-4 4-4zM6 10c-1.104 0-2-0.894-2-2s0.896-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2z"></path></symbol></svg>')
                ), //clock icon
                $('<span>', {class:'attn_count'}).append(
                    'จำนวนผู้เข้าอบรม '+CountAttn
                )

              ),
                $('<div>',  {class:'course_or'}).append(
                  $('<span>').append(
                  $('<svg class="icon icon-leanpub"><symbol id="icon-leanpub" viewBox="0 0 32 28"><title>leanpub</title><path d="M29.578 6.125l2.422 19.875c-1.453 0-2.703-0.297-4.016-0.891-1.953-0.891-3.984-1.422-6.141-1.422-2.219 0-4.266 0.734-5.844 2.312-1.578-1.578-3.625-2.312-5.844-2.312-2.156 0-4.188 0.531-6.141 1.422-1.266 0.562-2.547 0.891-3.938 0.891h-0.078l2.422-19.875c2.234-1.266 4.953-1.984 7.531-1.984 2.109 0 4.281 0.438 6.047 1.656 1.766-1.219 3.938-1.656 6.047-1.656 2.578 0 5.297 0.719 7.531 1.984zM21.844 21.547c2.969 0 5 0.797 7.688 1.906l-1.937-15.953c-1.75-0.797-3.828-1.219-5.75-1.219-2.188 0-4.234 0.688-5.844 2.203-1.609-1.516-3.656-2.203-5.844-2.203-1.922 0-4 0.422-5.75 1.219l-1.937 15.953c2.688-1.109 4.719-1.906 7.688-1.906 2.141 0 4.031 0.547 5.844 1.687 1.813-1.141 3.703-1.687 5.844-1.687zM22.469 21.016l-0.859-14.172c-2.25 0.047-4.031 0.812-5.609 2.422-1.641-1.672-3.5-2.422-5.844-2.422-1.75 0-3.625 0.359-5.25 1.031l-1.781 14.703c2.359-0.969 4.438-1.578 7.031-1.578 2.063 0 4.078 0.5 5.844 1.594 1.766-1.094 3.781-1.641 5.844-1.594z"></path></symbol><use xlink:href="#icon-leanpub"></use></svg>')
                ),
                $('<span>',{class:'display_courseOR'}).append(courseOR)
              )
            ),
              $('<div>').append(
                $('<div>',{class:'status-course'}).append(
                  $('<span>', {class:'display-status-course'}).append(_coursestatus)
                ),
                $('<div>', {class: 'course-assessment'}).append(
                  $('<span>').append(
                    $('<svg class="icon icon-pie-chart"><use xlink:href="#icon-pie-chart"></use><symbol id="icon-pie-chart" viewBox="0 0 32 32"><path d="M14 18v-14c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14c0-2.251-0.532-4.378-1.476-6.262l-12.524 6.262zM28.524 7.738c-2.299-4.588-7.043-7.738-12.524-7.738v14l12.524-6.262z"></path></symbol></svg>')
                  ),
                  $('<span>', {class:'assessment-display'}).append(_courseAssn)
                )
              )
                  )
            )
                )
              )


}
