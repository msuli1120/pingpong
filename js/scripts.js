function play(num){
  num = parseInt(num);
  tag1 = "<ul><li>";
  tag2 = "</li></ul>";
  numbers = [];

  for(var i=1; i<=num; ++i){
    numbers.push(i);
  };
  numbers.forEach(function(number,index){
    if(number%15===0){
      numbers.splice(index,1,"pingpong");
    } else if (number%5===0){
      numbers.splice(index,1,"pong");
    } else if (number%3===0){
      numbers.splice(index,1,"ping");
    };
  });
  console.log(numbers);
};





$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var number = $("#numInput").val();
    play(number);
  });
});
