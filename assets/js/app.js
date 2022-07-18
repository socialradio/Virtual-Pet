var pet_info = {
  Zufriedenheit: 0,
  Name: "Felix",
  Essen: 0,
  Spielen: 0,
  Aktionen: 4,
  Leben: 0
};
var xaktionen = document.getElementById("aktionen");
var xzufriedenheit = document.getElementById("zufriedenheit");
var xspielen = document.getElementById("spielen");
var xessen = document.getElementById("essen");
var x = document.getElementById("gametable");
x.querySelector(".petzufriedenheit").innerHTML = pet_info.Zufriedenheit;
x.querySelector(".petname").innerHTML = pet_info.Name;
x.querySelector(".petessen").innerHTML = pet_info.Essen;
x.querySelector(".petspielen").innerHTML = pet_info.Spielen;
x.querySelector(".petaktionen").innerHTML = pet_info.Aktionen;
xaktionen.style.width = 25 * pet_info.Aktionen + "%";
xzufriedenheit.style.width = pet_info.Zufriedenheit + "%";

function pettreat() {
  pet_info.Zufriedenheit += 25;
  pet_info.Essen += 1;
  pet_info.Aktionen -= 1;
  CheckAndUpdate();
}

function petplay() {
  pet_info.Zufriedenheit += 25;
  pet_info.Spielen += 1;
  pet_info.Essen -= 1;
  pet_info.Aktionen -= 1;
  CheckAndUpdate();
}

function Check() {
  var valid = true;
  if (pet_info.Aktionen < 0) {
    valid = false;
    pet_info.Aktionen = 0;
    alert("Du hast keine Aktionen mehr");
  }
  if (pet_info.Essen < 0) {
    valid = false;
    pet_info.Essen = 0;
    alert("Dein Tier hat hunger");
  }
  if (pet_info.Zufriedenheit < 0) {
    valid = false;
    pet_info.happiness = 0;
    alert("Dein Tier hat langeweile");
  }
  return valid;
}

function CheckAndUpdate() {
  if (Check()) {
    Update();
  }
}

function Update() {
  x.querySelector(".petzufriedenheit").innerHTML = pet_info.Zufriedenheit;
  x.querySelector(".petessen").innerHTML = pet_info.Essen;
  x.querySelector(".petspielen").innerHTML = pet_info.Spielen;
  x.querySelector(".petaktionen").innerHTML = pet_info.Aktionen;
  xaktionen.style.width = 25 * pet_info.Aktionen + "%";
  xzufriedenheit.style.width = pet_info.Zufriedenheit + "%";
}

function petaktionen() {
  if (pet_info.Aktionen < 4) {
    pet_info.Aktionen += 1;
    x.querySelector(".petaktionen").innerHTML = pet_info.Aktionen;
    xaktionen.style.width = 25 * pet_info.Aktionen + "%";
  }
}

function petzufriedenheit() {
  if (pet_info.Zufriedenheit >= 25) {
    pet_info.Zufriedenheit -= 25;
    x.querySelector(".petzufriedenheit").innerHTML = pet_info.Zufriedenheit;
    xzufriedenheit.style.width = pet_info.Zufriedenheit + "%";
  }
}

setInterval(petaktionen, 10000);
setInterval(petzufriedenheit, 10000);

/*
	    1000 ms =  1 sek
	   60000 ms =  1 Minute
	  900000 ms = 15 Minuten
	 3600000 ms =  1 Std
	86400000 ms =  1 Tag
	*/

/* TODO
	
	Zufriedenheit max 100 Abfrage
  Decrease Faktoren
  Increase Faktoren
  
  function touch() {
  var petname = prompt("What is the Pets name?");
  
  if (petname) {
    alert("It is good to meet you, " + petsname + ".");
    document.getElementById("roc...
  	
	// Auto Decrease Function
	function decreas(){
		pet_info.Zufriedenheit -= 1;
		pet_info.Essen -= 1;
		pet_info.Spielen -= 1;
	}
	setInterval(decrease, 10000);
	*/
