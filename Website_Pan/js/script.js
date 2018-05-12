var MainSelectedSRC = 0;

var PreviewHideLeft = "-30vw"
var PreviewPreviousLeft = "-7vw"
var PreviewCurrentLeft = "17vw"
var PreviewNextLeft = "97vw"
var PreviewHideRight = "110vw"


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "25vw";
    document.getElementById("bg_grey").style.display = "flex";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("bg_grey").style.display = "none";
}

$(document).ready(function() {
    $("#main_preview_img1").attr("src",SRCList[(MainSelectedSRC+3)%4]);
    $("#main_preview_image1").css("left",PreviewPreviousLeft);
    $("#main_preview_img2").attr("src",SRCList[MainSelectedSRC]);
    $("#main_preview_image2").css("left",PreviewCurrentLeft);
    $("#main_preview_img3").attr("src",SRCList[(MainSelectedSRC+1)%4]);
    $("#main_preview_image3").css("left",PreviewNextLeft);
    $("#main_preview_image4").css("left",PreviewHideRight);
    
    //Link click handlers
    $("#main_preview_img1").click(on_preview_previous_click);
    $("#main_preview_img1").addClass("clickable");
    $("#main_preview_img3").click(on_preview_next_click);
    $("#main_preview_img3").addClass("clickable");
    $("#main_preview_image1").mouseenter(on_hover_previous);
    $("#main_preview_image3").mouseenter(on_hover_next);
    $("#main_preview_image1").mouseout(on_exit_previous);
    $("#main_preview_image3").mouseout(on_exit_next);
    $("#main_viewmore_btn_bg").click(function(){
        var blist = {
            SelectedSRC:MainSelectedSRC
        }
        var burl = location.origin + location.pathname.substring(0,location.pathname.lastIndexOf("/"))+'/readmore.html';
        for (key in blist){
            burl += ('?' + key + '=' + encodeURIComponent(blist[key]));
        }
        document.location.href = burl;
    });
    for (var i=0;i<4;i++){
        $("#indicator"+i).click(on_click_indicator);
    }
});

function on_click_indicator(){
    var indicator_id = $(this).attr('id');
    var new_SRC = Number(indicator_id.charAt(indicator_id.length-1));
    if (new_SRC < MainSelectedSRC){
        MainSelectedSRC = new_SRC + 1;
        on_preview_previous_click();
    }else if (new_SRC > MainSelectedSRC){
        MainSelectedSRC = new_SRC - 1;
        on_preview_next_click();
    }
}

function on_hover_previous(){
    $(this).animate({left:"-5vw"},300); 
}

function on_hover_next(){
    $(this).animate({left:"95vw"},300);
}

function on_exit_previous(){
    $(this).animate({left:PreviewPreviousLeft},100); 
}

function on_exit_next(){
    $(this).animate({left:PreviewNextLeft},100); 
}

function on_preview_next_click(){
    //Increase selected preview number
    MainSelectedSRC = (MainSelectedSRC+1)%4;
    
    //Prepare images
    $("#main_preview_img1").attr("src",SRCList[(MainSelectedSRC+2)%4]);
    $("#main_preview_img2").attr("src",SRCList[(MainSelectedSRC+3)%4]);
    $("#main_preview_img3").attr("src",SRCList[MainSelectedSRC]);
    $("#main_preview_img4").attr("src",SRCList[(MainSelectedSRC+1)%4]);
        
    //Unbind all click handlers
    $("#main_preview_img1").unbind("click");
    $("#main_preview_img2").unbind("click");
    $("#main_preview_img3").unbind("click");
    $("#main_preview_img4").unbind("click");
    $("#main_preview_image1").unbind("mouseenter mouseout");
    $("#main_preview_image2").unbind("mouseenter mouseout");
    $("#main_preview_image3").unbind("mouseenter mouseout");
    $("#main_preview_image4").unbind("mouseenter mouseout");
    
    //Register new click handlers
    $("#main_preview_img2").click(on_preview_previous_click);
    $("#main_preview_img2").toggleClass("clickable",true);
    $("#main_preview_img4").click(on_preview_next_click);
    $("#main_preview_img4").toggleClass("clickable",true);
    $("#main_preview_img1").toggleClass("clickable",false);
    $("#main_preview_img3").toggleClass("clickable",false);
    $("#main_preview_image2").mouseenter(on_hover_previous);
    $("#main_preview_image4").mouseenter(on_hover_next);
    $("#main_preview_image2").mouseout(on_exit_previous);
    $("#main_preview_image4").mouseout(on_exit_next);
    
    //Set initial positions
    $("#main_preview_image1").css("left",PreviewPreviousLeft);
    $("#main_preview_image2").css("left",PreviewCurrentLeft);
    $("#main_preview_image3").css("left",PreviewNextLeft);
    $("#main_preview_image4").css("left",PreviewHideRight);
    
    //Start Animation
    $("#main_preview_image1").animate({left:PreviewHideLeft},500);
    $("#main_preview_image2").animate({left:PreviewPreviousLeft},500);
    $("#main_preview_image3").animate({left:PreviewCurrentLeft},500);
    $("#main_preview_image4").animate({left:PreviewNextLeft},500);
    
    
    //Change circle indicator
    for (var i=0;i<4;i++){
        if (i!=MainSelectedSRC){
            $("#indicator"+i).toggleClass("circle_selected",false);
            $("#indicator"+i).toggleClass("circle_unselected",true);
        }else{
            $("#indicator"+i).toggleClass("circle_selected",true);
            $("#indicator"+i).toggleClass("circle_unselected",false);
        }
    }
    
    change_date_title_and_description();
}

function on_preview_previous_click(){
    //Decrease selected preview number
    MainSelectedSRC = (MainSelectedSRC+3)%4;
    
    //Prepare images
    $("#main_preview_img1").attr("src",SRCList[(MainSelectedSRC+3)%4]);
    $("#main_preview_img2").attr("src",SRCList[MainSelectedSRC]);
    $("#main_preview_img3").attr("src",SRCList[(MainSelectedSRC+1)%4]);
    $("#main_preview_img4").attr("src",SRCList[(MainSelectedSRC+2)%4]);
    
    //Unbind all click handlers
    $("#main_preview_img1").unbind("click");
    $("#main_preview_img2").unbind("click");
    $("#main_preview_img3").unbind("click");
    $("#main_preview_img4").unbind("click");
    $("#main_preview_image1").unbind("mouseenter mouseout");
    $("#main_preview_image2").unbind("mouseenter mouseout");
    $("#main_preview_image3").unbind("mouseenter mouseout");
    $("#main_preview_image4").unbind("mouseenter mouseout");
        
    //Register new click handlers
    $("#main_preview_img1").click(on_preview_previous_click);
    $("#main_preview_img1").toggleClass("clickable",true);
    $("#main_preview_img3").click(on_preview_next_click);
    $("#main_preview_img3").toggleClass("clickable",true);
    $("#main_preview_img2").toggleClass("clickable",false);
    $("#main_preview_img4").toggleClass("clickable",false);
    $("#main_preview_image1").mouseenter(on_hover_previous);
    $("#main_preview_image3").mouseenter(on_hover_next);
    $("#main_preview_image1").mouseout(on_exit_previous);
    $("#main_preview_image3").mouseout(on_exit_next);
    
    //Set initial positions
    $("#main_preview_image1").css("left",PreviewHideLeft);
    $("#main_preview_image2").css("left",PreviewPreviousLeft);
    $("#main_preview_image3").css("left",PreviewCurrentLeft);
    $("#main_preview_image4").css("left",PreviewNextLeft);
    
    //Start Animation
    $("#main_preview_image1").animate({left:PreviewPreviousLeft},500);
    $("#main_preview_image2").animate({left:PreviewCurrentLeft},500);
    $("#main_preview_image3").animate({left:PreviewNextLeft},500);
    $("#main_preview_image4").animate({left:PreviewHideRight},500);
    $("")
    
    
 
    
    //Change circle indicator
    for (var i=0;i<4;i++){
        if (i!=MainSelectedSRC){
            $("#indicator"+i).toggleClass("circle_selected",false);
            $("#indicator"+i).toggleClass("circle_unselected",true);
        }else{
            $("#indicator"+i).toggleClass("circle_selected",true);
            $("#indicator"+i).toggleClass("circle_unselected",false);
        }
    }
    change_date_title_and_description();
}

function change_date_title_and_description(){
    //Hide title and description
    $("#main_dates").css("opacity",0);
    $("#main_title").css("opacity",0);
    $("#main_description").css("opacity",0);
    $("#bg_text").css("opacity",0);
    
    //Set new title and description
    $("#main_dates").html(DateList[MainSelectedSRC]);
    $("#main_title_p").html(TitleList[MainSelectedSRC]);
    $("#main_description_p").html(DescriptionList[MainSelectedSRC]);
    $("#bg_text_p").html(BgTextList[MainSelectedSRC]);
    
    //Animate opacity
    $("#main_dates").animate({opacity:0.2},900);
    $("#main_title").animate({opacity:1},900);
    $("#main_description").animate({opacity:1},900);
    $("#bg_text").animate({opacity:0.05},1000);
}


