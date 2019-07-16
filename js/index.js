/* $('.button').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
}) */

function onClickBtn(){
  var buttonId = $('.button').attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
}


$('document').ready(function(){
  setTimeout(function(){
    var elem = document.getElementsByClassName('button');
    onClickBtn();
  }, 300);

})

/*$('#modal-container').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});*/



/*$('.modal' && '!.frontPage').click(function(){
  $('#modal-container').addClass('out');
  $('body').removeClass('modal-active');
});
*/
/*$('.frontPage').click(function(){

    var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
});*/