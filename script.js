var indyFirst = .1;

function indySecond(income) {
  var indySecondTier = .15,
  answer = 922.50 + ((income - 995) * indySecondTier);
 	$("p").text(answer);
}

function indyThird(income) {
	var indyThirdTier = .25,
	answer = 5156.25 + ((income - 37450) * indySecondTier);
	$("p").text(answer);
}

$('input:radio[name=filingType]').change(function(){
	if (this.value == 'indy') {
 		$("#income")
      .keyup(function(){
    		var value = $(this).val();
        if (value <= 9225) {
          $("p").text(value * indyFirst); 
        }
        else if (value > 9226 && value < 37450) {
          $("p").text(indySecond(value));
        }
      	else if (value > 37451 && value < 90750 ) {
          $("p").text(indyThird(value));
        }
    	})
    	.keyup();
  }
  else if (this.value == 'married'){
    $("#income")
      .keyup(function(){
    		var value = $(this).val();
        if (value <= 10) {
          $("p").text("yup"); 
        }
        else if (value >= 11) {
          $("p").text("yawp");
        }
    	})
    	.keyup();
  }
});
