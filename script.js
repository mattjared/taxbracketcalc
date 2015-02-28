var first = .1;

function second(income) {
  var secondTier = .15,
  answer = (income * secondTier) + 995;
 	$("p").text(answer);
}

$('input:radio[name=filingType]').change(function(){
	if (this.value == 'a') {
 		$("#income")
      .keyup(function(){
    		var value = $(this).val();
        if (value <= 9225) {
          $("p").text(value * first); 
        }
        else if (value > 9225 && value < 37450) {
          $("p").text(second(value));
        }
      	else {
          second(value);
        }
    	})
    	.keyup();
  }
  else if (this.value == 'b'){
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
