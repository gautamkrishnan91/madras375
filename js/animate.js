$(document).ready(function(){
    setTimeout(function(){
    	central();
    },200);
    
});
function central(){
	$('.chennaiCentral').addClass("addAnimation");
	$('.lighthouse').removeClass("addAnimation");
	setTimeout(function(){
    	lighthouse();
    },4200);
}
function lighthouse(){
	$('.lighthouse').addClass("addAnimation");
	$('.napiersBridge').removeClass("addAnimation");
	setTimeout(function(){
    	napiers();
    },2000);
}
function napiers(){
	$('.napiersBridge').addClass("addAnimation");
	$('.annaArch').removeClass("addAnimation");
	setTimeout(function(){
    	annaArch();
    },5500);
}
function annaArch(){
	$('.annaArch').addClass("addAnimation");
	$('.chennaiCentral').removeClass("addAnimation");
	setTimeout(function(){
    	central();
    },3500);
}