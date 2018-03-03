const $form = $('#signup-form');
var $passwordConfirmation = $('#signup-form').find('#passwordcf')
var $passwordValidation = $('#signup-form').find('#password');
var $email = $('#signup-form').find('#email');
var $attendas = $('.js-attendas').find('.js-list-item');
var preview = $('#preview');
let $selection =null; //attend as a
let $PType = null;
let _THB = 0;
let _USD = 0;
let currentCurrency = null;
let totalpayment = null;
$persentation_type = $('.presentation_types').find('.js-attender');
persentation_type = null
let stdCard = null;
let mouDoc = null;
let stdCardP = null;
let mouDocP = null;
let title = null;
let submission_type ='';
var gender = null
var payTYPESTRING ="";
var agree = false;
var present_title = "Attend conference only";
const _gender = $('.gender').find('[name=gender]');


 function number_format(number, decimals, dec_point, thousands_sep) {
  // Strip all characters but numerical ones.
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };

    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }

    return s.join(dec);
}

  _gender.click(function(){
    gender = $(this).val();
    return gender
  })

 $('.dialog-free').delegate('.js-submit', 'click', function(){
    if(agree){
      $('#signup-form').submit();
    }else{
      swal({
        title:"Please agree to our terms of use!",
        text:" ",
        icon:"warning"   
      })
    }

 }) 
 $('.dialog-free').delegate('#agreeCheck1','change', 'click', function(e){
  agree = e.target.checked
   }) 

 $('.predesc').delegate('[name=present_title]', 'change' ,   function (event) {
  present_title = event.target.value
 })
$('.std-card').delegate('[type=file]', 'change', function(){
  var property = this.files[0];
  
  var fileData  =  new FormData();
  fileData.append('file', property)
  
   $.ajax({
    url:'/admin/registration/upload_student',
    type:'POST',
    data:fileData,
    contentType:false,
    processData:false,
    cache:false,
    success:function(response){
      stdCard = JSON.parse(response)
      stdCard = stdCard.name
    }
      
  })
    return stdCard
})
$('.mou-doc').delegate('[type=file]', 'change', function(){
  var property = this.files[0];
  
  var fileData  =  new FormData();
  fileData.append('file', property)
  
  $.ajax({
    url:'/admin/registration/upload_mou',
    type:'POST',
    data:fileData,
    contentType:false,
    processData:false,
    cache:false,
    success:function(response){
      mouDoc = JSON.parse(response)
      mouDoc = mouDoc.name
    }
      
  })
  return mouDoc;
})
  
preview.click(function(){
   let title = $('#title-select').val();
  let fname = $('#firstname').val();
  let lname = $('#lastname').val();
  let email = $('#email').val();
  let affiliation  =  $('#affiliation').val();
  let address = $('#address').val();
  let district = $('#district').val();
  let province = $('#province').val();
  let ZipCode = $('#pos_zip').val();
  let Country = $('#Region').val();
    
      if(title ==null || fname == null || lname ==null ||  affiliation == null || address == null ||   district ==null || province==null || ZipCode ==null || Country == null || email =="" || gender ==null ){
        switch(null || ""){
          case title :  
          swal({
          title:"Something wentwrong !",
          text:"Please choose a title",
          icon:"warning"   
         });
         location.href = "#title-select";
         $('#title-select').focus();
           break; 
           case fname :  
          swal({
          title:"Something wentwrong !",
          text:"Please Enter your Firstname",
          icon:"warning"   
         });
         location.href = "#firstname";
         $('#firstname').focus();
           break; 
           case lname :  
           swal({
           title:"Something wentwrong !",
           text:"Please Enter your Lastname",
           icon:"warning"   
          });
          location.href = "#lasname";
          $('#lastname').focus();
             break; 
          case affiliation :  
             swal({
             title:"Something wentwrong !",
             text:"Please Enter your affiliation",
             icon:"warning"   
            });
            location.href = "#affiliation";
            $('#affiliation').focus();
              break; 
              case address :  
              swal({
              title:"Something wentwrong !",
              text:"Please Enter your address",
              icon:"warning"   
             });
             location.href = "#address";
             $('#address').focus();
               break; 
               case district :  
               swal({
               title:"Something wentwrong !",
               text:"Please Enter your district",
               icon:"warning"   
              });
              location.href = "#district";
              $('#district').focus();
                break;
               case province:
               swal({
                title:"Something wentwrong !",
                text:"Please Enter your Province",
                icon:"warning"   
               });
               location.href = "#province";
               $('#province').focus();
               break;  
                case ZipCode :  
                swal({
                title:"Something wentwrong !",
                text:"Please Enter your Postal or ZipCode",
                icon:"warning"   
               });
               location.href = "#pos_zip";
               $('#pos_zip').focus();
                 break; 
                 case Country :  
                 swal({
                 title:"Something wentwrong !",
                 text:"Please select you country",
                 icon:"warning"   
                });
                location.href = "#country";
                $('#country').focus();
                  break;
                  case email :  
                  swal({
                  title:"Something wentwrong !",
                  text:"Please Enter your email",
                  icon:"warning"   
                 });
                 location.href = "#email";
                 $('#email').focus();
                 break;
                 case $selection:
                 swal({
                  title:"Something wentwrong !",
                  text:"Please select your attend as ",
                  icon:"warning"   
                 });
                 location.href = ".presentation_types";
                 $('.presentation_types').focus();
                 break;
                 default:swal({
                  title:"Something wentwrong !",
                  text:"Please select your gender ",
                  icon:"warning"   
                 });  
                 break;
         
        }
       
      } else
      {
              if ($selection ==null){
                swal({
                  title:"Something wentwrong !",
                  text:"Would your like attends as?",
                  icon:"warning"   
                 });
              }else
        if($selection =='International Student' || $selection=='International Student (ASEAN/MOU with KU)' || $selection=='International Delegate' ||$selection== 'International Delegate (ASEAN/MOU with KU)'){
            if($selection =="International Student" && stdCard ==null){
              swal({
                title:"Something wentwrong !",
                text:"Please  upload you student card",
                icon:"warning"   
               });
             
            
            } else if($selection=='International Student (ASEAN/MOU with KU)' && stdCard ==null || $selection=='International Student (ASEAN/MOU with KU)' && mouDoc ==null){
              swal({
                title:"Something wentwrong !",
                text:"Please  upload you student card and mou document",
                icon:"warning"   
               });
            } else if  ($selection =="International Delegate (ASEAN/MOU with KU)" && mouDoc ==null){
              swal({
                title:"Something wentwrong !",
                text:"Please  upload you  mou document",
                icon:"warning"   
               });
            }
            else if (persentation_type == null) {
              swal({
                title:"Something wentwrong !",
                text:"Please choose a presentation type",
                icon:"warning"   
               });
            } else if (persentation_type == "Oral presentation" && submission_type ==null || persentation_type == "Poster presentation" && submission_type ==null){
              swal({
                title:"Something wentwrong !",
                text:"Please choose a submisstion type",
                icon:"warning"   
               });
            }else if ($PType ==null){
              swal({
                title:"Something wentwrong !",
                text:"Please choose a payment type",
                icon:"warning"   
               });
            }
            
            else {
             
                 
          currentCurrency = addInformation('USD');
          var d = new Date();
          var time = d.getTime();
          var jan = new Date (2018,1, 1)
              jan = jan.getTime();
          var feb = new Date(2018, 2, 16)
              feb = feb.getTime();
          var mar = new Date(2018, 3, 1)
              mar = mar.getTime();
          var apr1 =  new Date(2018, 4, 26) 
              apr1 = apr1.getTime();
          var apr2 =  new Date(2018, 4,28) 
              apr2 = apr2.getTime();                
         
          switch($selection){
            case'International Student':
            switch(true){
              case time <feb:
                _USD = addInformation(320);
                _THB = addInformation(0); 
                break;
              case time < mar :
              _USD = addInformation(370);
              _THB = addInformation(0);      
              break;
              case   time > apr1 && time < apr2 :
              _USD = addInformation(420);
              _THB = addInformation(0);        
               default: 
               swal({
                title:"Sorry !",
                text:"Sorry This time registration was closed",
                icon:"warning"   
                });
                break;
            }
            break;
           case'International Student (ASEAN/MOU with KU)':
           switch(true){
            case time <feb:
              _USD = addInformation(270);
              _THB = addInformation(0);
             
              break;
            case time < mar :
            _USD = addInformation(320);
            _THB = addInformation(0);
           
            break;
            case time > apr1 && time < apr2 :
            _USD = addInformation(370);
            _THB = addInformation(0);
            
             default: 
             swal({
              title:"Sorry !",
              text:"Sorry This time registration was closed",
              icon:"warning"   
              });
              break;
            } // close switchcase true
            break;
            case'International Delegate':
            switch(true){
              case time <feb:
                _USD = addInformation(470);
                _THB = addInformation(0);
               
                break;
              case time < mar :
              _USD = addInformation(520);
              _THB = addInformation(0);
             
              break;
              case time > apr1 && time < apr2 :
              _USD = addInformation(570);
              _THB = addInformation(0);
              
               default: 
               swal({
                title:"Sorry !",
                text:"Sorry This time registration was closed",
                icon:"warning"   
                });
                break;
              } // close switchcase true
              break;
              case'International Delegate (ASEAN/MOU with KU)':
              switch(true){
                case time < feb:
                  _USD = addInformation(400);
                  _THB = addInformation(0);
                 
                  break;
                case time < mar :
                _USD = addInformation(450);
                _THB = addInformation(0);
             
                break;
                case time > apr1 && time < apr2 :
                _USD = addInformation(500);
                _THB = addInformation(0);
                
                 default: 
                 swal({
                  title:"Sorry !",
                  text:"Sorry This time registration was closed",
                  icon:"warning"   
                  });
                  break;
                } // close switchcase true
                break;
          }
                 // berfore submit
        switch(currentCurrency){
          case'THB':
          totalpayment = number_format(_THB)+' Baht'
          break;
          case'USD':
          totalpayment = addInformation(_USD+' USD');
          break;
        }
       if(present_title==''){
         swal({
          title:"Sorry !",
          text:"Please enter you presentation title",
          icon:"warning"   
        
         });
       }else{
       $.when(
        $('.dialog-free').append(
          $('<div>', {class:'modal fade ', "tabindex":"-1", role:"dialog", "aria-labelledby":"LargeModalLabel", "aria-hidden":"true"}).append(
          $('<div>', {class:"modal-dialog modal-lg", role:"document"}).append(
            $('<div>', {class:"modal-content"}).append(
             $('<div>',{class:'modal-header'}).append(
               $('<span>', {class:'modal-title'}).text('Registration confirmation'),
               $('<button>',{type:'button', class:'close', "data-dismiss":"modal", "aria-label":'Close'}).append(
                 $('<span>', {"aria-hidden":"true"}).html('&times;')
               )

             ),
             $('<div>',{class:"modal-body"}).append(
              $('<table>', {class:"preview_table"}).append(
                $('<tr>').append($('<th>',{text:'Title'}),$('<td>',{text:title})),
                $('<tr>').append($('<th>', {text:'First Name'}), $('<td>', {text:fname})),
                $('<tr>').append($('<th>',{text:'Last Name'}), $('<td>', {text:lname})),
                $('<tr>').append($('<th>', {text:'Gender'}),$('<td>',{text:gender})),
                $('<tr>').append($('<th>', {text:'Affiliation'}),$('<td>',{text:affiliation})),
                $('<tr>').append($('<th>', {text:'Address'}),$('<td>',{text:address})),
                $('<tr>').append($('<th>', {text:'State / Province'}),$('<td>',{text:province})),
                $('<tr>').append($('<th>', {text:'Country / Region'}),$('<td>',{text:Country})),
                $('<tr>').append($('<th>', {text:'Postal'}),$('<td>',{text:ZipCode})),
                $('<tr>').append($('<th>', {text:'E-mail'}),$('<td>',{text:email})),
                $('<tr>').append($('<th>', {text:'Attend as a'}),$('<td>',{text:$selection})),
                $('<tr>').append($('<th>', {text:'Presentation type'}),$('<td>',{text:persentation_type})),
                present_title=='Attend conference only' ? '': $('<tr>').append($('<th>', {text:'Presentation title'}),$('<td>',{text:present_title})),
                submission_type !=null ?  $('<tr>').append($('<th>', {text:'Submission type'}),$('<td>',{text:submission_type})) : '',    
                stdCard !=null ? $('<tr>').append($('<th>',{text:'Student card'}),$('<td>').append($('<a>', {target:"_blank", href:"/public/uploads/file/"+stdCard, text:stdCard}))) : '' ,
                mouDoc !=null ?  $('<tr>').append($('<th>',{text:'Mou Document'}),$('<td>').append($('<a>', {target:"_blank", href:"/public/uploads/file/"+mouDoc, text:mouDoc}))) : '' ,
                $('<tr>').append($('<th>', {text:'Payment Type'}),$('<td>',{text:payTYPESTRING})),
                $('<tr>').append($('<th>', {text:'Total amount payable'}),  $('<td>',{text:totalpayment}))
              ),
              $('<span>',{ class:'red my-auto note',text:'Please note all payments are non-refundable. ***'}),
              $('<div>',{class:'form-check'}).append($('<input>',{type:'checkbox', class:'form-check-input', id:'agreeCheck1'}),
                                                      $('<label>',{class:'form-check-label',text:' I Agree', for:'agreeCheck1'})
            )
           ),
           $('<div>',{class:"modal-footer"}).append(
             $('<button>', {type:"button", class:"btn btn-orange js-submit", text:"Confirm and payment"}),
             $('<button>', {type:"button", class:"btn ", "data-dismiss":"modal", text:"Close"})
           )
            )
          )
          )
        )
      ).then(
        $('.modal').modal('show')
      )
    }         
         }
        }
        else if ($selection == 'Thai Delegate' ||$selection == 'Thai Student'){
            if($selection == 'Thai Student' && stdCard==null){
              swal({
                title:"Sorry !",
                text:"Please upload your student card",
                icon:"warning"   
                });
            }else if (persentation_type == null) {
              swal({
                title:"Something wentwrong !",
                text:"Please choose a presentation type",
                icon:"warning"   
               });
            } else if (persentation_type == "Oral presentation" && submission_type ==null || persentation_type == "Poster presentation" && submission_type ==null){
              swal({
                title:"Something wentwrong !",
                text:"Please choose a submisstion type",
                icon:"warning"   
               });
            }else if ($PType ==null){
              swal({
                title:"Something wentwrong !",
                text:"Please choose a payment type",
                icon:"warning"   
               });
            }else 
            {
                
         currentCurrency = addInformation('THB');       
          var d = new Date();
          var time = d.getTime();
          var jan = new Date (2018,1, 1)
              jan = jan.getTime();
          var feb = new Date(2018, 2, 16)
              feb = feb.getTime();
          var mar = new Date(2018, 3, 1)
              mar = mar.getTime();
          var apr1 =  new Date(2018, 4, 26) 
              apr1 = apr1.getTime();
          var apr2 =  new Date(2018, 4,28) 
              apr2 = apr2.getTime();                

        switch($selection){
          case 'Thai Delegate':
              switch(true){
                case time < feb:
                _USD = addInformation(0);
                _THB = addInformation(5500);
               
                break;
              case time < mar :
              _USD = addInformation(0);
              _THB = addInformation(6500);
            
              break;
              case time < mar :
              _USD = addInformation(0);
              _THB = addInformation(7500);
              
               default: 
               swal({
                title:"Sorry !",
                text:"Sorry This time registration was closed",
                icon:"warning"   
                });
                break;
              }
              break;
          case 'Thai Student':
          switch(true){
            case time < feb:
            _USD = addInformation(0);
            _THB = addInformation(3500);
            break;
          case time < mar :
          _USD = addInformation(0);
          _THB = addInformation(4500);
         
          break;
          case time > apr1 && time < apr2 :
          _USD = addInformation(0);
          _THB = addInformation(5500);
          
           default: 
           swal({
            title:"Sorry !",
            text:"Sorry This time registration was closed",
            icon:"warning"   
            });
            break;
          }
          break;    

        }
        
      
        // berfore submit
        switch(currentCurrency){
          case'THB':
          totalpayment = number_format(_THB) +' Baht';
          break;
          case'USD':
          totalpayment = addInformation(_USD+' USD');
          break;
        }
        if(present_title ==""){
          swal({
      title:"Sorry !",
      text:"Please enter you presentation title",
      icon:"warning"   
      });
  } else {  //important else
       $.when(
        $('.dialog-free').append(
          $('<div>', {class:'modal fade ', "tabindex":"-1", role:"dialog", "aria-labelledby":"LargeModalLabel", "aria-hidden":"true"}).append(
          $('<div>', {class:"modal-dialog modal-lg", role:"document"}).append(
            $('<div>', {class:"modal-content"}).append(
             $('<div>',{class:'modal-header'}).append(
               $('<span>', {class:'modal-title'}).text('Registration confirmation'),
               $('<button>',{type:'button', class:'close', "data-dismiss":"modal", "aria-label":'Close'}).append(
                 $('<span>', {"aria-hidden":"true"}).html('&times;')
               )

             ),
             $('<div>',{class:"modal-body"}).append(
              $('<table>', {class:"preview_table"}).append(
                $('<tr>').append($('<th>',{text:'Title'}),$('<td>',{text:title})),
                $('<tr>').append($('<th>', {text:'First Name'}), $('<td>', {text:fname})),
                $('<tr>').append($('<th>',{text:'Last Name'}), $('<td>', {text:lname})),
                $('<tr>').append($('<th>', {text:'Gender'}),$('<td>',{text:gender})),
                $('<tr>').append($('<th>', {text:'Affiliation'}),$('<td>',{text:affiliation})),
                $('<tr>').append($('<th>', {text:'Address'}),$('<td>',{text:address})),
                $('<tr>').append($('<th>', {text:'State / Province'}),$('<td>',{text:province})),
                $('<tr>').append($('<th>', {text:'Country / Region'}),$('<td>',{text:Country})),
                $('<tr>').append($('<th>', {text:'Postal'}),$('<td>',{text:ZipCode})),
                $('<tr>').append($('<th>', {text:'E-mail'}),$('<td>',{text:email})),
                $('<tr>').append($('<th>', {text:'Attend as a'}),$('<td>',{text:$selection})),
                $('<tr>').append($('<th>', {text:'Presentation type'}),$('<td>',{text:persentation_type})),
                present_title=='Attend conference only' ? '': $('<tr>').append($('<th>', {text:'Presentation title'}),$('<td>',{text:present_title})),
                submission_type !=null ?  $('<tr>').append($('<th>', {text:'Submission type'}),$('<td>',{text:submission_type})) : '',    
                stdCard !=null ? $('<tr>').append($('<th>',{text:'Student card'}),$('<td>').append($('<a>', {target:"_blank", href:"/public/uploads/file/"+stdCard, text:stdCard}))) : '' ,
                mouDoc !=null ?  $('<tr>').append($('<th>',{text:'Mou Document'}),$('<td>').append($('<a>', {target:"_blank", href:"/public/uploads/file/"+mouDoc, text:mouDoc}))) : '' ,
                $('<tr>').append($('<th>', {text:'Payment Type'}),$('<td>',{text:payTYPESTRING})),
                $('<tr>').append($('<th>', {text:'Total amount payable'}),  $('<td>',{text:totalpayment}))
              ),
              $('<span>',{ class:'red my-auto note',text:'Please note all payments are non-refundable. ***'}),
              $('<div>',{class:'form-check'}).append($('<input>',{type:'checkbox', class:'form-check-input', id:'agreeCheck1'}),
                                                      $('<label>',{class:'form-check-label',text:' I Agree', for:'agreeCheck1'})
            )
           ),
           $('<div>',{class:"modal-footer"}).append(
            $('<button>', {type:"button", class:"btn btn-orange js-submit", text:"Confirm and payment"}),
             $('<button>', {type:"button", class:"btn ", "data-dismiss":"modal", text:"Close"})
           )
            )
          )
          )
        )
      ).then(
        $('.modal').modal('show')
      )
          }
    }
         }
      }
  
});

$('.dialog-free').delegate('.modal','hidden.bs.modal', function (e) {
  $('.dialog-free').empty();
  agree =false;
})

$('.submission_type').delegate('[name=submission_types]', 'click', function(){
   submission_type = $(this).val();
   return submission_type
});
$persentation_type.click(function(){
  let $this = $(this).val();
  persentation_type = $this;

  const data = $('.submission_type');
    if($this =='Poster presentation' || $this =='Oral presentation'){
      data.empty();
      $('.predesc').empty();
      present_title = "";
      data.append(
        $('<span>',{text:" choose a submission types"}),
        $('<div>', {class:'linebox'}).append(
          $('<label>').append(
            $('<input>', {type:"radio", value:"Abstract", name:"submission_types", "id":"abstract", required:"required"}),' Abstract'
          ),
          $('<label>').append(
            $('<input>', {type:"radio",value:"Proceeding", name:"submission_types", "id":"proceeding", required:"required"}),' Proceeding'
          ),
          $('<label>').append(
            $('<input>', {type:"radio",value:"Full article", name:"submission_types", "id":"full_article", required:"required"}),' Full article'
          )
        )
      )
     $('.predesc').append(
       $('<div>', {class:'lf input-field'}).append(
       $('<span>').text('Presentation title'),
       $('<input>', {type:'text',name:'present_title', required:'required'}),
       $('<span>', {class:'material-bar'}) 
     )
    ) 
    }else{
      data.empty();
      $('.predesc').empty();
      present_title = "Attend conference only";
    }
  
    return persentation_type
});
  function studentUpload(){

  }
$attendas.click( function(){
 let $this = $(this).val();
 $selection = addInformation($this);
 $PType = addInformation(null);
  switch($selection){
    case 'Thai Student':
    $('.payment-type').empty(); 
    $('.std-card').empty();
    $('.mou-doc').empty();
  $('.std-card').append(
    $('<div>', {class:'form-group'}).append(
      $('<label>', {for:"Stdinput"}).text('Please upload your student card'),
      $('<input>', {type:"file", accept:"application/pdf", id:"Stdinput", name:"std-card", class:"form-control-file", "aria-describedby":"fileHelp"}),
      $('<small>', {id:"fileHelp", class:"form-text text-muted"}).text('Please upload only PDF file(.pdf) and file size must not more than 2MB')
      )
    )
  $('.payment-type').append(
    $('<span>').text('Payment type*'),
    $('<div>', {class:"linebox"}).append(
      $('<label>').append(
        $('<input>', {type:"radio", value:1, name:"payment_type", required:"required"}),(' Bill payment ')
      ),
      $('<label>').append(
        $('<input>', {type:"radio", value:2, name:"payment_type", required:"required"}),
       (' Credit card')
      )
    )
  )


    break;
    case 'Thai Delegate':
    $('.payment-type').empty(); 
    $('.std-card').empty();
    $('.mou-doc').empty();
    $('.payment-type').append(
      $('<span>').text('Payment type*'),
      $('<div>', {class:"linebox"}).append(
        $('<label>').append(
          $('<input>', {type:"radio", value:"1", name:"payment_type", required:"required"}),(' Bill payment ')
        ),
        $('<label>').append(
          $('<input>', {type:"radio", value:"2", name:"payment_type", required:"required"}),
         (' Credit card')
        )
      )
    )
    
  
    break;
    case 'International Student':
    $('.payment-type').empty(); 
    $('.std-card').empty();
    $('.mou-doc').empty();
    $('.std-card').append(
      $('<div>', {class:'form-group'}).append(
        $('<label>', {for:"Stdinput"}).text('Please upload your student card'),
        $('<input>', {type:"file", accept:"application/pdf", id:"Stdinput", name:"std-card", class:"form-control-file", "aria-describedby":"fileHelp"}),
        $('<small>', {id:"fileHelp", class:"form-text text-muted"}).text('Please upload only PDF(.pdf) and file size must not more than 2MB')
          
        )
      )
      $('.payment-type').append(
        $('<span>').text('Payment type*'),
        $('<div>', {class:"linebox"}).append(
          $('<label>').append(
            $('<input>', {type:"radio", value:"2", name:"payment_type", required:"required"}),
           (' Credit card')
          )
        )
      )
    
    break;
    case 'International Student (ASEAN/MOU with KU)':
    $('.payment-type').empty(); 
    $('.std-card').empty();
    $('.mou-doc').empty();
    $('.std-card').append(
      $('<div>', {class:'form-group'}).append(
        $('<label>', {for:"Stdinput"}).text('Please upload your student card'),
        $('<input>', {type:"file", accept:"application/pdf", id:"Stdinput", name:"std-card", class:"form-control-file", "aria-describedby":"fileHelp"}),
        $('<small>', {id:"fileHelp", class:"form-text text-muted"}).text('Please upload PDF file(.pdf) and file size must not more than 2MB')
          
        )
      )
      $('.mou-doc').append(
        $('<div>', {class:'form-group'}).append(
          $('<label>', {for:"mou-input"}).text('Please upload your mou document'),
          $('<input>', {type:"file", accept:"application/pdf", name:"mou-doc", id:"mou-input", class:"form-control-file", "aria-describedby":"fileHelp"}),
          $('<small>', {id:"fileHelp", class:"form-text text-muted"}).text('Please upload only PDF file(.pdf) and file size must not more than 2MB')
            
          )
        )
        $('.payment-type').append(
          $('<span>').text('Payment type*'),
          $('<div>', {class:"linebox"}).append(
            $('<label>').append(
              $('<input>', {type:"radio", value:"2", name:"payment_type", required:"required"}),
             (' Credit card')
            )
          )
        )
       
    break;
    case 'International Delegate':
    $('.std-card').empty();
    $('.mou-doc').empty();
    $('.payment-type').empty();
    $('.payment-type').append(
      $('<span>').text('Payment type*'),
      $('<div>', {class:"linebox"}).append(
        $('<label>').append(
          $('<input>', {type:"radio", value:"2", name:"payment_type", required:"required"}),
         (' Credit card')
        )
      )
    )
    break;
    case 'International Delegate (ASEAN/MOU with KU)':
    $('.std-card').empty();
    $('.mou-doc').empty();
    $('.payment-type').empty();
    $('.mou-doc').append(
      $('<div>', {class:'form-group'}).append(
        $('<label>', {for:"mou-input"}).text('Please upload your mou document'),
        $('<input>', {type:"file", accept:"application/pdf", name:"mou-doc", id:"mou-input", class:"form-control-file", "aria-describedby":"fileHelp"}),
        $('<small>', {id:"fileHelp", class:"form-text text-muted"}).text('Please upload only PDF file(.pdf) and file size must not more than 2MB')
        )
      )
      $('.payment-type').append(
        $('<span>').text('Payment type*'),
        $('<div>', {class:"linebox"}).append(
          $('<label>').append(
            $('<input>', {type:"radio",  value:"2", name:"payment_type", required:"required"}),
           (' Credit card')
          )
        )
      )
      
    break;
  }
});


function addInformation(values){
  return values
}
$('#phonenumber').on('keyup, change', function(){
  var phone = $('#phonenumber').val();
  phonenumberValidation(phone);
})
  $passwordValidation.on('keyup, change', function(){
    var res = $('.password').find('#res');
    var password = $('#password').val();
    res.html(passwordValidation(password));
    passwordConfirmation(password);
  })

$passwordConfirmation.on('keyup, change', function(){
    var password = $('#password').val();
    passwordConfirmation(password);
})
$email.on('keyup, change', function(){
  
  var email =  $(this).val();
  var result = $('.lf-field.email').find('.res');
if(isValidEmailAddress(email)){
    result.removeClass('Invalid');
    result.addClass('Done');
  //  result.html('');
}else{
  result.removeClass('Done');
  result.addClass('Invalid');
  //result.html('กรุณาป้อนข้อมูลให้ถูกต้องตามรูปแบบ เช่น example.lpru.th');
}
  if(email==''){
  result.removeClass('Invalid Done');
  }
})
function passwordConfirmation(password){
  var passwordcf = $('#passwordcf').val();
  if(passwordcf==""){
    return false
  }
    if(password == passwordcf){
        var result = $('.lf-field.password-cf').find('.res');
      result.removeClass('Invalid');
      result.addClass('Done');
    }else{
    var result = $('.lf-field.password-cf').find('.res');
      result.removeClass('Done');
      result.addClass('Invalid');
  //    var invalid = $("#passwordcf").find('.Invalid');
    }
}
$('.payment-type').delegate('[name=payment_type]', 'click', function(){

  $PType = addInformation($(this).val());
  switch ($PType){
    case "1":  payTYPESTRING ="Bill payment";
    return payTYPESTRING
    break;
    case "2" : payTYPESTRING = "Credit card";
    return payTYPESTRING
    break;
  }
  
});
function phonenumberValidation(phone){
var res = $('.phone-number').find('.res');
  if(phone=="") {
    res.removeClass('Done Invalid');
    return false
}
    if (phone.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/) && phone.length < 13) {
        res.removeClass('Invalid');
        res.addClass('Done');
    }
    else {
        res.removeClass('Done');
      res.addClass('Invalid');
    }

  }
function passwordValidation(password){
  var strength = 0;
  var result = $('.lf-field.password').find('#res');
  if(password=='')return false
  if (password.length < 6 ){
    result.removeAttr('Class')
    result.addClass('error')
    return'รหัสผ่านสั้น กรุณาลองอีกครั้ง'
  }
  if (password.length >7) strength +=1
  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
  if (password.match(/([a-zA-Z])/)&&password.match(/([0-9])/))strength +=1
  if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength +=1
  if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/))strength +=1
  console.log(strength);

  switch (strength) {
    case 1:
      result.removeAttr('Class')
      result.addClass('weak')
      return'รหัสผ่านนี้คาดเดาง่าย'
      break;
    case 2 :
      result.removeAttr('Class')
      result.addClass('good')
    return'รหัสผ่านคาดนี้เดาค่อนข้างยาก'
    break;
    case 3:
    result.removeAttr('Class')
    result.addClass('strong')
    return'รหัสผ่านนี้ปลอดภัย'
      break;
  }
}

// Checking before sending data
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};
$('#signup-form').on('submit', function (e){
var callback = null;  
  e.preventDefault();
  var title = $('#title-select').val();
  let fname = $('#firstname').val();
  let lname = $('#lastname').val();
  let affiliation = $('#affiliation').val();

  let email = $('#email').val();
  let address = $('#address').val();
  let district = $('#district').val();
  let province = $('#province').val();
  let ZipCode = $('#pos_zip').val();
  let Country =$('#Region').val();

    if (title=="" || title== null ){
      $('.modal').modal('hide');
      swal({
        title:"Something wentwrong !",
        text:"Please check infomation and try agian",
        icon:"warning"   
      })
    }else{
  $.ajax({
   type:"POST",
   url:"/admin/registration/save",
   data: {
    title:title,
    firstname:fname,
    lastname:lname,
    gender:gender,
    affiliation:affiliation,
    address:address,
    district:district,
    province:province,
    postal:ZipCode,
    region:Country,
    email:email,
    attend_type:$selection,
    presentation_type:persentation_type,
    submission_type:submission_type,
    payment_type:$PType,
    mou_doc:mouDoc,
    stu_card:stdCard,
    presentation_title:present_title
  },
   success:function(response) {
     
    res = JSON.parse(response)
    if(res.id== 0 ){
        swal ({
          title:"Error",
          text:"System infomation invalid, Please contract administrator",
          icon:"Error"   
        })
    }else if(res.error){
      $.each(res.error, function(key, values){
        console.log(key)
        switch(key){
          case'email':
          swal ({
            title:"Warning",
            text:"This email is already been registered",
            icon:"warning"   
          })
          break;
          default:({
            title:"Warning",
            text:"Please try agian",
            icon:"warning"   
          })
          break;
        }
      });    
    }
    
    else{
        if(res.id !=0 ) {  
      $('#PSource').val(3);
      $('#PSourceID').val(res.id);
      $('#PDescription').val('ANRES 2018 International Conference of Agriculture and Natural Resources |'+present_title);
      $('#PType').val($PType);
      $('#TotAmntTHB').val(_THB);
      $('#TotAmntUSD').val(_USD);
      $('#Email').val(email);
      $('#Name').val(fname+" "+lname);
      $('#Address').val(address);
      $('#District').val(district);
      $('#Province').val(province);
      $('#ZipCode').val(ZipCode);
      $('#Country').val(Country);
  submission_type ==''?   $('#ItemDetail').val(persentation_type+';1;'+_USD+';'+_THB+';') : $('#ItemDetail').val(submission_type+'-'+persentation_type+';1;'+_USD+';'+_THB+';'); 
     $('#RetURL').val('http://anresconference2018.org/admin/registration/confirmpayment');
      $('#form1').submit();
        }
  // 
    }
  
  } 
 
 });


    // $('#PSource').val(3);
    // $('#PSourceID').val();
    // $('#PDescription').val('ANRES 2018 International Conference of Agriculture and Natural Resources, Hotel Windsor Suites & Convention Bangkok Thailand |'+present_title);
    // $('#PType').val($PType);
    // $('#TotAmntTHB').val(5500);
    // $('#TotAmntUSD').val(0);
    // $('#Email').val(email);
    // $('#Name').val(fname+" "+lname);
    // $('#Address').val(address);
    // $('#District').val(district);
    // $('#Province').val(province);
    // $('#ZipCode').val(ZipCode);
    // $('#Country').val(Country);
    // $('#ItemDetail').val('Submitted fee for KJSS;1;80;2800|Accepted fee for ANRES;1;100;3500');
    // $('#RetURL').val('https://anresconference2018.org/admin/registration/comfirm_payment');
// $('#form1').submit();
    }

})
