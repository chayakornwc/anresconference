
function Callmodal(x) {
    $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
};
$('.modal').on('show.bs.modal', function (e) {
  var anim = $('#entrance').val();
      Callmodal(anim);
})
$('.modal').on('hide.bs.modal', function (e) {
  var anim = $('#exit').val();
      Callmodal(anim);
})
