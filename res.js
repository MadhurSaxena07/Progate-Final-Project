$("li a").mouseover(function(){
	$(this).css(newcss);
})
$("li a").mouseout(function(){
	$(this).css(oldcss);
})
var newcss=
{
	'background-color':'#400100',
	"color":"white",
	"border-radius": "10px"
	
}
var oldcss=
{
	'background-color':' #101010',
	"color":"white"

}
var newcs=
{
	'background-color':'  #101010',
	"color":"white",
	"border-radius": "10px"
	
}
var oldcs=
{
	'background-color':' #400100',
	"color":"white"

}
$('.carousel').carousel({
  interval: 3000
})
$("#btn").mouseover(function(){
	$(this).css(newcs);
})
$("#btn").mouseout(function(){
	$(this).css(oldcs);
})
$("#bt2").click(function(){
	$('#sec').hide().css("visibility","hidden");
	$('#third').hide().css("visibility","hidden");
	
})
$("#bt1").click(function(){
	$('#first').show().css("visibility","visible");
	$('#sec').show().css("visibility","visible");
	$('#third').show().css("visibility","visible");
})
$("#bt3").click(function(){
	$('#first').hide().css("visibility","hidden");
	$('#third').hide().css("visibility","hidden");
	$('#sec').show().css("visibility","visible");
})
$("#bt4").click(function(){
	$('#first').hide().css("visibility","hidden");
	$('#sec').hide().css("visibility","hidden");
	$('#third').show().css("visibility","visible");
})
$(".food").mouseover(function(){
	$(this).css(food);
})
$(".food").mouseout(function(){
	$(this).css(backfood);
})
var food={
	 'height':'200px',
    'width':'350px'
}
var backfood=
{
	'height':'165px',
    'width':'260px'
}