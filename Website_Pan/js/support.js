$(document).ready(function(){    
    $("#img1").mouseenter(onitemhover1);
    $("#img2").mouseenter(onitemhover2);
    $("#img3").mouseenter(onitemhover3);
    $("#img4").mouseenter(onitemhover4);
    
    $("#img1").mouseleave(onmouseout1);
    $("#img2").mouseleave(onmouseout2);
    $("#img3").mouseleave(onmouseout3);
    $("#img4").mouseleave(onmouseout4);
    
})

function onitemhover1(event){
    //1번 아이템이 호버되었을때 애니메이트
    $("#img1").animate({width:"22vw",opacity:1},300);
    $("#hover_content1").animate({opacity:1},300);
}

function onmouseout1(event){
    //1번 아이템이 마우스아웃 되었을떄 애니메이트
    $("#img1").animate({width:"18vw",opacity:0.3},100);
    $("#hover_content1").animate({opacity:0},100);
}

function onitemhover2(event){
    //1번 아이템이 호버되었을때 애니메이트
    $("#img2").animate({width:"22vw",opacity:1},300);
     $("#hover_content2").animate({opacity:1},300);
}

function onmouseout2(event){
    //1번 아이템이 마우스아웃 되었을떄 애니메이트
    $("#img2").animate({width:"18vw",opacity:0.3},100);
     $("#hover_content2").animate({opacity:0},100);
}
function onitemhover3(event){
    //1번 아이템이 호버되었을때 애니메이트
    $("#img3").animate({width:"22vw",opacity:1},300);
     $("#hover_content3").animate({opacity:1},300);
}

function onmouseout3(event){
    //1번 아이템이 마우스아웃 되었을떄 애니메이트
    $("#img3").animate({width:"18vw",opacity:0.3},100);
     $("#hover_content3").animate({opacity:0},100);
}

function onitemhover4(event){
    //1번 아이템이 호버되었을때 애니메이트
    $("#img4").animate({width:"22vw",opacity:1},300);
     $("#hover_content4").animate({opacity:1},300);
}

function onmouseout4(event){
    //1번 아이템이 마우스아웃 되었을떄 애니메이트
    $("#img4").animate({width:"18vw",opacity:0.3},100);
     $("#hover_content4").animate({opacity:0},100);
}