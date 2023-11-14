function submit() {
	ognum = document.getElementById("text").value;

	if (ognum % 2 === 0) {
        givennum = ognum / 2;

		if (givennum = 1) {
			document.getElementById("proof").innerHTML = "The number " + ognum + " follows the Collats Conjecture.";
			document.getElementById("text").value = "";
		}
		else{
			document.getElementById("proof").innerHTML = "The number " + ognum + "does not follow the Collats Conjecture.";
			document.getElementById("text").value = "";
		}

    } else {
        givennum = ognum * 3 + 1;

		if (givennum = 1) {
			document.getElementById("proof").innerHTML = "The number " + ognum + " follows the Collats Conjecture.";
			document.getElementById("text").value = "";
		}
		else{
			document.getElementById("proof").innerHTML = "The number " + ognum + "does not follow the Collats Conjecture.";
			document.getElementById("text").value = "";
		}
    }
}


