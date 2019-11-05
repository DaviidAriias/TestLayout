//Document Ready - Validation
$(document).ready(function(){
    console.log('JS Loaded - Everything ok!');    
});


//-------------------- Overlay Estudio de crédito
$('#triggerModalStudy').click(function(){
    $('#StudyProcess').addClass('contStudyProcess--isShowed');
    $('body').addClass('is--scrollLocked');
});


//-------------------- Overlay Modal
$('#triggerModal').click(function(){
    $('#modalDefault').addClass('contModal--isShowed');
    $('body').addClass('is--scrollLocked');
});

$('#triggerModalClose').click(function(){
    $('#modalDefault').removeClass('contModal--isShowed');
    $('body').removeClass('is--scrollLocked');
});


//-------------------- Overlay Canguro
$('#triggerCanguro').click(function(){
    $('#contCanguro').addClass('contCanguroMain--iscanguroShowed');
    $('body').addClass('is--scrollLocked');
});

$('#triggerCanguroClose, #closeCanguro').click(function(){
    $('#contCanguro').removeClass('contCanguroMain--iscanguroShowed');
    $('body').removeClass('is--scrollLocked');
});


//-------------------- Mostrar Direccion
$('#triggerChangeAddress').click(function(){
    $(this).hide();
    $('#adressDefault').hide();
    $('#adressAltern').show();
});


//-------------------- Mostrar datos ocultos confirmación
$('#result__ConfirToggle').click(function(){
    $('.result__Confir__item--hidden').slideToggle();
    $('.result__ConfirButton--more').toggle();
    $('.result__ConfirButton--less').toggle();
    $('.result__ConfirButton--icon').toggleClass('icon-dv-showMore');
    $('.result__ConfirButton--icon').toggleClass('icon-dv-showLess');
});


//-------------------- Mostrar datos tarjetas tipo Toggle
$('#seemore--firstCard').click(function(){
  $(this).toggleClass('clicked');
  $('#firstCard').slideToggle();
  if ( $("#seemore--firstCard").hasClass("clicked") ) {
    $("#seemore--firstCard").text("");
    $("#seemore--firstCard").append( "<span></span> Ver más" );;
    $(this).find('span').addClass('icon-dv-arrowDownBG icon');
  }
  else {
    $("#seemore--firstCard").text("");
    $("#seemore--firstCard").append( "<span></span> Ver menos" );
    $(this).find('span').toggleClass('icon-dv-arrowDownBG icon');
    $(this).find('span.icon').toggleClass('icon--isToggle');
  }
});

$('#seemore--secondCard').click(function(){
  $(this).toggleClass('clicked');
  $('#secondCard').slideToggle();
  if ( $("#seemore--secondCard").hasClass("clicked") ) {
    $("#seemore--secondCard").text("");
    $("#seemore--secondCard").append( "<span></span> Ver más" );;
    $(this).find('span').addClass('icon-dv-arrowDownBG icon');
  }
  else {
    $("#seemore--secondCard").text("");
    $("#seemore--secondCard").append( "<span></span> Ver menos" );
    $(this).find('span').toggleClass('icon-dv-arrowDownBG icon');
    $(this).find('span.icon').toggleClass('icon--isToggle');
  }
});

//-------------------- Init rangeslider
var valueBubble = '<output class="input--rangeSlider__bubble" />';

function updateValueBubble(pos, value, context) {
  pos = pos || context.position;
  value = value || context.value;
  var $valueBubble = $('.input--rangeSlider__bubble', context.$range);
  var tempPosition = pos + context.grabPos;
  var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

  if ($valueBubble.length) {
    $valueBubble[0].style.left = Math.ceil(position) + 'px';
    $valueBubble[0].innerHTML = value;
  }
}

$('input[type="range"]').rangeslider({
  polyfill: false,
  onInit: function() {
    this.$range.append($(valueBubble));
    updateValueBubble(null, null, this);
  },
  onSlide: function(pos, value) {
    updateValueBubble(pos, value, this);
  }
});