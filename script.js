$('input:radio[name=filingType]').change(function(){
	if (this.value == 'indy') {
 		$("#income")
      .keyup(function(){
    		var value = $(this).val();
        if (value <= 9225) {
          $("p").text(value * indyFirst); 
        }
        else if (value > 9226 && value < 37450) {
          indySecond(value);
        }
      	else if (value > 37451 && value < 90750 ) {
          indyThird(value);
        }
        else if (value > 90751 && value < 189300 ) {
          indyFourth(value);
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

var indyFirst = .1;

function indySecond(income) {
  var indySecondTier = .15,
  answer = 922.50 + ((income - 995) * indySecondTier);
 	$("p").text(answer);
}

function indyThird(income) {
	var indyThirdTier = .25,
	answer = 5156.25 + ((income - 37450) * indyThirdTier);
	$("p").text(answer);
}

function indyFourth(income) {
	var indyFourthTier = .28,
	answer = 18481.25 + ((income - 90750) * indyFourthTier);
	$("p").text(answer);
}