$(function(){
	$('.collapse').on('show.bs.collapse', function(){
    $(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle');
  });

  $('.collapse').on('hide.bs.collapse', function(){
    $(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle');
  });
});


$(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});
 
 $('.animated-appearance').boxLoader({
    direction:"y",
    position: "100%",
    effect: "fadeIn",
    duration: "0.5s",
    windowarea: "50%"
});

