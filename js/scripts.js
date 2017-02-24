function play(num){
  num = parseInt(num);
  tag1 = "<ul><li>";
  tag2 = "</li></ul>";
  numbers = [];

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
    $("#result").append(tag1+numbers+tag2);
  });
};





$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var number = $("#numInput").val();
    play(number);
  });
});
