var config = {
  apiKey: "AIzaSyABbdVqWAOwDzKJS-5QgEyWIdjNl0nT-Rg",
  authDomain: "trmanger-44936.firebaseapp.com",
  databaseURL: "https://trmanger-44936.firebaseio.com",
  projectId: "trmanger-44936",
  storageBucket: "trmanger-44936.appspot.com",
  messagingSenderId: "170847716626",
  auth:	{ "provider": "anonymous", "uid": "b346f95e-0375-45ae-aa21-b4fe0573456f" }
}
firebase.initializeApp(config);
  var app = angular.module('sourse-training',['firebase']);

  app.controller('TodoTraining',['$scope','$firebaseObject', function TodoTraining($scope,$firebaseObject){
    $scope.courseDetail = [];
    $scope.search  = '';
    const rootRef = firebase.database().ref().child('course_op');
    this.object = $firebaseObject(rootRef);
                rootRef.once('value').then(function (snapshot){
                    snapshot.forEach(function(datasnapshot) {
                    AttnCoute = 0;
                    var dt = datasnapshot.val();
                    $.each((dt.attn), function(key, values){
                      AttnCoute++;
                    })
                    dt.Counte =   AttnCoute;
                    $scope.courseDetail.push(dt);

                });

             });


  }]);

  app.controller('openCourse', ['$scope', '$firebaseObject', function openCourse($scope, $firebaseObject){
    $scope.itrData=[];
    $scope.trLecData =[];
    $scope.trORData =[];

    const root = firebase.database().ref()
    const TRref = root.child('coursetr');
    this.object = $firebaseObject(TRref);
        TRref.once('value').then(function (snapshot){
          snapshot.forEach(function(datasnapshot){
            var data = datasnapshot.val();
          //  data.course = data;
            $scope.itrData.push(data);
          })

        })
    const Lectureref = root.child('lecture');
    this.object = $firebaseObject(Lectureref);
    Lectureref.once('value').then(function (snapshot){
      snapshot.forEach(function (datasnapshot){
        var data = datasnapshot.val()
        $scope.trLecData.push(data);
      })
    })
    const TRORref = root.child('tr_or');
    this.object = $firebaseObject(TRORref);
    TRORref.once('value').then(function (snapshot){
      snapshot.forEach(function (datasnapshot){
        var data = datasnapshot.val();
      //  data.TROR = data;
        $scope.trORData.push(data);
      })
    })
  $('.autocomplteAttendee').hide();
const $attn_info_textbox = $('#input_attn_data');
var dataCache = null;
$attn_info_textbox.on('keyup', function(){
  if($(this).val().length>=1){
    var data_term =$(this).val();
      search_userData(data_term);
    }else{
      $('.autocomplteAttendee').hide();
    }
    })

search_userData = function(data_terminal){
  $('.autocomplteAttendee').show();
  $.ajax({
    type:"POST",
    url:"/chayakorn/api/search.api.php",
    data:{data_term:data_terminal},
  }).then(function successCallback(data){
      responsedata = JSON.parse(data);
      const  $todoAttendee =  $('.autocomplteAttendee').find('ul');
      $todoAttendee.html('');
      $.each(responsedata.user, function(key, values){
            $.when($todoAttendee.append('<li data-uid="'+values.uid+'" data-firtname="'+values.usr_firstname+'" data-surname="'+values.usr_surname+'" ">'+values.uid+' '+values.usr_firstname+' '+values.usr_surname+' '+values.usr_faculty+' '+values.usr_major)
        ).then(function Calldata(){
          const  $todoAttendee =  $('.autocomplteAttendee').find('ul');
          var todoList = $todoAttendee.find('li');
          todoList.on('click', function(){
            var $thisuid = $(this).data('uid');
            var $thisfirstname = $(this).data('firtname');
            var $thissurname =$(this).data('surname');
            $('#input_attn_data').val($thisuid);
            $('.autocomplteAttendee').hide();
          })
        })
      })

});

  }


}]);

$('#add-course-tr').on('submit', function(){
  var  $courseUID = guid();
  //var jsonobj ={guid():"test"}
    $.ajax({
      type: "POST",
      datatype:JSON,
      url:"/chayakorn/api/search.api.php",
      data:jsonobj
    })
})


$('#add-attendee').on('click', function(){
    AddAttendee();

})
var dataAttendee = []; // declare dataAttendee
function AddAttendee(){
var  data = $('#input_attn_data').val()
  $.ajax({
    type:"POST",
    url:"/chayakorn/api/search.api.php",
    data:{SELECTDATA:data}
  }).then(function response(res){
      responsedata = JSON.parse(res)
      $.when(dataAttendee.push(responsedata)).then(
        function FetchAttendee(){
        //console.log(dataAttendee)
        //console.log(obj);
          const fetchTodo = $('.todo_std').find('tbody');
          var i =0;
            fetchTodo.html('');
          $.each(dataAttendee, function(key, values){
            $.each(values.user, function(key, values){
              i++
              fetchTodo.append(
                $('<tr>').append(
                  $('<th>').append(i),
                  $('<th>').append(values.uid),
                  $('<th>').append(values.usr_prefix+' '+values.usr_firstname+' '+values.usr_surname),
                  $('<th>').append(values.usr_faculty),
                  $('<th>').append(values.usr_major)
              ))
            })

          })

        }
      )

  })
}

$(function(){
  $('#opcdatepicker').datepicker({
    format: "mm-dd-yyyy",
      todayBtn: "linked",
      language: "th",
      orientation: "bottom left",
      autoclose: true,
      beforeShowYear: function (date){
                    if (date.getFullYear() == 2007) {
                      return false;
                    }
                  }
});
$('#clscdatepicker').datepicker({
  format: "mm-dd-yyyy",
    todayBtn: "linked",
    language: "th",
    orientation: "bottom left",
    autoclose: true,
    beforeShowYear: function (date){
                  if (date.getFullYear() == 2007) {
                    return false;
                  }
                }
});
})

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4();
}
