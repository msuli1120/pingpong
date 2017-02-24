function play(num){
  num = parseInt(num);
  var tag1 = "<ul><li>";
  var tag2 = "</li></ul>";
  var numbers = [];

  for(var i=1; i<=num; ++i){     //countup to the provided number
    numbers.push(i);             //push all numbers into an array
  };

  numbers.forEach(function(number,index){   //checking each number in the array
    if(number%15===0){
      numbers.splice(index,1,"pingpong");
    } else if (number%5===0){
      numbers.splice(index,1,"pong");
    } else if (number%3===0){
      numbers.splice(index,1,"ping");
    };
  });

  for(var j=0; j<numbers.length; j++){        //display new array as a list
    $("#result").append(tag1+numbers[j]+tag2);
    $("#result").animate({height: "100%", opacity: "0"}, 5000,"swing");
  };
};

$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var number = $("#numInput").val();
    play(number);
  });
});
