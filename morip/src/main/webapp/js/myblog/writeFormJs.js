$('document').ready(function(){
  $('.switch_infomation').hide();
});
$('.switch').mouseover(function(){
  $('.switch_infomation').show();
});
$('.switch').mouseout(function(){
  $('.switch_infomation').hide();
});