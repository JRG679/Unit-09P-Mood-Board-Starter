$('button').click(function(){
var feeling = $(".mood").val();

   if(feeling==="happy") {
    happy();
}
    else if(feeling==="sad") {
     sad();
}
      else if(feeling==="hungry") {
     hungry();
}
          else if(feeling==="jimy") {
    jimy();
}
});
var happyPics = [
    "https://preview.redd.it/i1potvblvqv01.jpg?width=1024&auto=webp&s=921a3405bcd911450b7a182e8eabca6ff9207398",
    "https://i.ytimg.com/vi/kFjZye3Ytzo/maxresdefault.jpg",
    "https://images.theweek.com/sites/default/files/styles/tw_image_9_4/public/istock-527028804.jpg?itok=VtQBDIcm&resize=1260x560"
    ];
var sadPics = [
    "https://cdn.drawception.com/drawings/VAgDTCcJaO.png"
    ];
var hungryPics = [
    "https://i.ytimg.com/vi/jdy2O0C2mBU/maxresdefault.jpg"
    ];
var jimyPics = [
    "https://media.giphy.com/media/MK3MCHd2ZCwKY/giphy.gif"
    ];
function happy(){
    happyPics.forEach(function(happymood){
      $(".image").append("<img src=" + happymood + ">");
    });
     $(".message").html("But this does bring a smile to my face");
      $("body").css("background-color", "yellow");
    }
function sad(){
    sadPics.forEach(function(sadmood){
      $(".image").append("<img src=" + sadmood + ">");
    });
    $(".message").html("It be like that sometimes get help dawg");
       $("body").css("background-color", "black");
       $("body").css("color", "red");
    }
function hungry(){
    hungryPics.forEach(function(hungrymood){
      $(".image").append("<img src=" + hungrymood + ">");
    });
    $(".message").html("Yea well me too....");
      $("body").css("background-color", "orange");
    }
function jimy(){
    jimyPics.forEach(function(jimymood){
      $(".image").append("<img src=" + jimymood + ">");
    });
     $(".message").html("Well I dont know what to do with this");
      $("body").css("background-color", "cyan");
    }


