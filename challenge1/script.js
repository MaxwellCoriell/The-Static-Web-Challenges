// grab the input box ('slider_amount') and set the value property to that of 'slideAmount'
// slideAmount is grabbed from "this.value" in a onchange="rangeBarToForm(this.value)

function rangeBarToForm (slideAmount) {
	document.getElementById("slider_value").value = slideAmount;
}

