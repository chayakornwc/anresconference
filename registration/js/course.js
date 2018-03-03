app.controller('courseController',['$scope','$http','$timeout',function($scope,$http,$timeout){
    var hash = window.location.hash;
     var path = new RegExp("#/course")

     if(path.test(hash)){
       $("#mainNav").addClass("couTop");
     }else{
       $("#mainNav").removeClass("couTop");
     }

$scope.courseDetail = [];
$scope.search  = '';
        var ref = getDataFirebase();
        $timeout(function(){
          ref.once('value').then(function (snapshot){
            snapshot.forEach(function(datasnapshot) {
            $timeout(function(){
                AttnCoute = 0;
                var dt = datasnapshot.val();
                $.each((dt.attn), function(key, values){
                  AttnCoute++;
                })
              //  Newdata = dt;
                dt.Counte =   AttnCoute;
              var ward =  $scope.courseDetail.push(dt);
            },100);
            });
                //   var results = snapshot.val();
                //   data.push(results);
                //   console.log(results);
                // $scope.courseDetail.push(results);
         });
       },5);

// $scope.courseDetail = function(){
//   reuturn new Promise(function(){
//     var ref = getDataFirebase();
//     ref().once('value').then(function (snapshot){
//       var results = datasnapshot.val();
//       data.push(results);
//       return JSON.stringify(data);
//     });
//   });
// }
  //      if (courseDetail.length>0){
  //       localStorage.clear();
  //         $.each(courseDetail, function(key, item){
  //       var  Attn=0;
  //       var   _courseName = (courseDetail[key].course);
  //       var  _lecture =(courseDetail[key].course_lecture);
  //       var  _op_course = (courseDetail[key].op_course)
  //       var  _close_course   = (courseDetail[key].close_course)
  //       var  _coursestatus  = (courseDetail[key].status)
  //       var _courseAssn  = (courseDetail[key].assessment)
  //       var _courseTimeDuration  = (courseDetail[key].timeusing)
  //       var courseOR = (courseDetail[key].couse_or)
   //
  //          $.each((courseDetail[key].attn), function(key, item){
  //            $scope.Attn++;
  //          })
   //
  //      addDataList(_courseName, _lecture, _op_course, _close_course, Attn,_coursestatus, _courseAssn, _courseTimeDuration, courseOR);
  //    })
  //  }






    // var   _courseName = (data.course);
    // var  _lecture = (results.course_lecture);
    // var _op_course = (results.op_course);
    // var _close_course = (results.close_course);
    // var _coursestatus =(results.status);
    // var _courseAssn = (results.assessment);
    // var _courseTimeDuration = (results.timeusing);
    // var courseOR = (results.couse_or);
    // var CountAttn = [];

}]);

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4();
}
