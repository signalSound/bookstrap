
// $(document).ready(function(){
	$(window).scroll(function(){
		var topp = $(document).scrollTop();
		// console.log(topp)
		if(topp > 0){
			$('.navbar-inverse-c').addClass('navbar-example')
		}else {
			$('.navbar-inverse-c').removeClass('navbar-example')
		}	

	})

// })
$('body').scrollspy({ target: '#navbar-example' })
	$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})

$('#navbar-example').on('activate.bs.scrollspy', function() {
		console.log('第二屏')
 }); 

function removeSec(e) {
  $(e).parents('.sec').remove();
  $('#content').scrollspy('refresh');
}

	
var navbar = document.getElementById('navbar')
var liArr = navbar.getElementsByTagName('a')
for(var i=0;i<liArr.length;i++){
	liArr[i].onclick = function(){
		  $("html,body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, 1000);
        return false;
	}
}


$(window).load(function(){ 
		setTimeout(function(){
	 $('#loader').hide()

	},1000)
});
// function handleScroll(argument) {

// 	handleScrollTop('.distance-top')
// }
// function handleScrollTop(value) {
// 	var scrollSetTop = window.pageYOffset || document.documentElement.scrollTop 
// 	var titleTop = $(value).offset().top-Math.round(document.body.clientWidth/2)
// 	if(scrollSetTop >= titleTop){
// 		$(value).addClass('fadeInDown')
// 	}
// }
// window.addEventListener('scroll', handleScroll)