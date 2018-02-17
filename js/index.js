$('.button').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
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