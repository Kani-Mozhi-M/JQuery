$("document").ready(function(){
    $("button").on("click",function(){
        $("h1").css("color","red");
       });
}); //when both scripts src(jquery& ur js) in head use this 




$("button").on("click",function(){
    $("h1").css("color","red");
   });

$("button").on("click",function(){
   $("*").hide(); //hides all
});

$("button").on("click",function(){
    $("p").hide(); //hides all para
 });

$("button").on("click",function(){
    $(this).hide(); //hide the selected one
     $("div .para1 ").hide();
    
 });

$("p").dblclick(function(){   
    alert("you double clicked");
     
});
$("button").dblclick(function(){   
    $("h1").addClass("clss name from css");// to add clss
    $("h1").removeClass("");
    $("h1").toggleClass("");//if class present it wil remove else it will add
    $("h1").text("add text here");
    $("h1").html("with <span> tags </span>");
    $("img").attr(src,"paste link to be changed");
    $("img").attr("width","200px"); //to change width
    $("#id").removeClass("");
    $(".classname").removeClass("");
    $("#id").val(); //shows the value present in that particular tag

    $("p").after("<p> </p>"); 
    $("p").append("<p> </p>"); //creates p tag inside a ptag 
    
    $("p").before("<p> </p>");
    $("p").prepend("<p> </p>");  
});
