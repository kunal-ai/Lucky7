let rollDice = document.getElementById('button');

var faces = ["&#9856;","&#9857;","&#9858;","&#9859;","&#9860;","&#9861;"]

rollDice.addEventListener('click',function()

{
  var randomNumber1 = Math.floor(Math.random() * 6) +1;
  document.getElementById("number1").textContent = randomNumber1;

  if (randomNumber1 == 1) { document.getElementById("face1").innerHTML = faces[0];

} else if (randomNumber1 == 2) { document.getElementById("face1").innerHTML = faces[1];

} else if (randomNumber1 == 3) { document.getElementById("face1").innerHTML = faces[2];

} else if (randomNumber1 == 4) { document.getElementById("face1").innerHTML = faces[3];

} else if (randomNumber1 == 5) { document.getElementById("face1").innerHTML = faces[4];

} else { document.getElementById("face1").innerHTML = faces[5];}

}
)

rollDice.addEventListener('click',function()
{
  var randomNumber2 = Math.floor(Math.random() * 6) +1;
  document.getElementById("number2").textContent = randomNumber2;


  if (randomNumber2 == 1) { document.getElementById("face2").innerHTML = faces[0];

} else if (randomNumber2 == 2) { document.getElementById("face2").innerHTML = faces[1];

} else if (randomNumber2 == 3) { document.getElementById("face2").innerHTML = faces[2];

} else if (randomNumber2 == 4) { document.getElementById("face2").innerHTML = faces[3];

} else if (randomNumber2 == 5) { document.getElementById("face2").innerHTML = faces[4];

} else { document.getElementById("face2").innerHTML = faces[5];}

}
)

  rollDice.addEventListener('click',function()
{
  var val1 = Math.floor(document.getElementById("number1").childNodes[0].nodeValue);
  var val2 = Math.floor(document.getElementById("number2").childNodes[0].nodeValue);
  var mastfinal = val1 + val2
   if (mastfinal<7) { document.getElementById("resultf").textContent = "Below 7"

 } else if (mastfinal>7) { document.getElementById("resultf").textContent = "Above 7";

} else {document.getElementById("resultf").textContent = "Lucky Seven !!!!"; }

}
)
