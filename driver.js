window.onload = function() {

	var canvas = document.getElementById("viewport");
	var c = canvas.getContext("2d");

	//context = canvas.context2d;    
	//context.translate(0.5, 0.5);

	c.strokeStyle = "black";
	c.lineWidth = 1;
	c.beginPath();
	c.moveTo(0,0);
	c.lineTo(100,100);
	c.stroke();

}

