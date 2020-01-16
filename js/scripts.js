$(document).ready(function(){
  
  var clickedId;
  $(".btTxt").click(function(){
    clickedId = $(this).attr("id");
  });

  $(".inputPic").submit(function(event){
    event.preventDefault();

    if(clickedId === "turtlePic"){
      $("#snakes").hide();
      $("#insects").hide();
      $("#turtles").toggle();
    }

    else if(clickedId === "snakePic"){
      $("#turtles").hide();
      $("#insects").hide();
      $("#snakes").toggle();
    }

    else if(clickedId === "insectPic"){
      $("#turtles").hide();
      $("#snakes").hide();
      $("#insects").toggle();
    }
  });
  
});