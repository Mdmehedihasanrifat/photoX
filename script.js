$(window).scroll(function () {
    let position=$(this).scrollTop();
if(position>650){

    $('.camera-image').addClass('keyleft');
    $('.mission-text').addClass('Textright')
}
else{
    $('.camera-image').removeClass('keyleft');
    $('.mission-text').removeClass('Textright')

}

})


$(".gallery-list-items").click(function () {
let value=$(this).attr('data-filter');

if(value==='all'){

    $('.filter').show(300);
}
else {

    $('.filter').not('.'+value).hide(300);
    $('.filter').filter('.'+value).show(300);
}

})

$('.gallery-list-items').click(function () {


    $(this).addClass('active-item').siblings().removeClass('active-item')
})




$(window).scroll(function () {

    var position=$(this).scrollTop();

console.log(position);
    if(position>4300){


        $('.card-1').addClass('moveFromLeft');
        $('.card-2').addClass('moveFromBottom');
        $('.card-3').addClass('moveFromRight');
    }
    else{
        $('.card-3').removeClass('moveFromRight');
        $('.card-1').removeClass('moveFromLeft');
        $('.card-2').removeClass('moveFromBottom');

    }
})

























