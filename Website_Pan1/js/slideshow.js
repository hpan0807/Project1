var SelectedSRC = 0 ;

$(document).ready(function() {
    var url = document.location.href,
    params = url.split('?')[1].split('&'),
    data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    SelectedSRC = Number(data.SelectedSRC);
    
    $("#panelName").html(PanelNameList[SelectedSRC][0]);
    $("#content_title_p").html(TitleList[SelectedSRC]);
    $("#dates_p").html(DateList[SelectedSRC]);
    $("#content_description_p").html(Description_Long[SelectedSRC]);
    $("#description_p").html(Description_Long[SelectedSRC]);
    
    var PanelSrcs = PanelSrcList[SelectedSRC];
    
    for (var i=0 ; i<PanelSrcs.length ; i++){
        var div_panel = document.createElement("DIV");
        div_panel.className = "panel";
        var img_panel = document.createElement("IMG");
        img_panel.className = "panelimg";
        img_panel.src = PanelSrcs[i];
        div_panel.appendChild(img_panel);
        document.getElementById("slides").appendChild(div_panel);
    }
	$("#slides").slidesjs({
		width:580,
		height: 386,
		callback:{
            complete:function(number){
                console.log(number);
                $("#panelName").html(PanelNameList[SelectedSRC][number-1]);
            }
        }
	});    

});

