$('input:radio[name=filingType]').change(function(){
	if (this.value == 'indy') {
 		$("#income")
      .keyup(function(){
    		var value = $(this).val().replace(/\,/g,'');
        if (value <= 9225) {
          $("p").text(value * indyFirst);
        }
        else if (value > 9226 && value < 37450) {
          return indySecond(value);
        }
      	else if (value > 37451 && value < 90750) {
          indyThird(value);
        }
        else if (value > 90751 && value < 189300) {
          indyFourth(value);
        }
        else if (value > 189301 && value < 411500) {
          indyFifth(value);
        }
        else if (value > 411501 && value < 413200) {
          indySixth(value);
        }
        else {
        	indySeventh(value);
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
  		display = numeral(answer).format('$0,00.00');
 	$("p").text(display);
}

function indyThird(income) {
	var indyThirdTier = .25,
	answer = 5156.25 + ((income - 37450) * indyThirdTier);
	$("p").text(answer.toLocaleString());
}

function indyFourth(income) {
	var indyFourthTier = .28,
	answer = 18481.25 + ((income - 90750) * indyFourthTier);
	$("p").text(answer.toLocaleString());
}

function indyFifth(income) {
	var indyFifthTier = .33,
	answer = 46075.25 + ((income - 189300) * indyFifthTier);
	$("p").text(answer.toLocaleString());
}

function indySixth(income) {
	var indySixthTier = .35,
	answer = 119401.25 + ((income - 411500) * indySixthTier);
	$("p").text(answer.toLocaleString());
}

function indySeventh(income) {
	var indySeventhTier = .39,
	answer = 119996.25 + ((income - 413200) * indySeventhTier);
	$("p").text(answer.toLocaleString());
}

var string = numeral(1001.099018191).format('$0,00.00');
console.log(string);