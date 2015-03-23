function calc(base, income, cap, tier) {
	var answer = base + ((income - cap) * tier),
			show = numeral(answer).format('$0,000.00');
	$("p").text(show);
}

$('input:radio[name=filingType]').change(function(){
	if (this.value == 'indy') {
 		$("#income")
      .keyup(function(){
    		var value = $(this).val().replace(/\,/g,'');
        if (value <= 9225) {
          calc(0, value, 0, .1);
        }
        else if (value > 9226 && value < 37450) {
          calc(922.50, value, 995, .15);
        }
      	else if (value > 37451 && value < 90750) {
          calc(5156.25, value, 37450, .25);
        }
        else if (value > 90751 && value < 189300) {
          calc(18481.25, value, 90750, .28);
        }
        else if (value > 189301 && value < 411500) {
          calc(46075.25, value, 189300, .33);
        }
        else if (value > 411501 && value < 413200) {
          calc(119401.25, value, 411500, .35);
        }
        else if (value >= 413201) {
        	calc(119996.25, value, 413200, .39);
        }
        else {
        	$('p').text("Sorry that's not a number")
        }
    	})
    	.keyup();
  }
   else if (this.value == 'married'){
    $("#income")
      .keyup(function(){
    		var value = $(this).val().replace(/\,/g,'');
        if (value <= 18450) {
          calc(0, value, 0, .9);
        }
        else if (value > 18451) {
          $("p").text("yawp");
        }
    	})
    	.keyup();
  }
});