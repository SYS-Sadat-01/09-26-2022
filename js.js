$('.img1').click(function(){
    $('.ball').animate({left: '0px'},2000)
})
$('.img2').click(function(){
    $('.ball').animate({left: '1180px'},2000)
})






$('button').click(()=>{
    //$('div, ul, li, span').addClass('pressed')
    $('h1').clone().appendTo('span')

})


$('#btn').click(()=>{
    $('div').children('p:first').css({'border':'2px solid green','color':'red'})
})


