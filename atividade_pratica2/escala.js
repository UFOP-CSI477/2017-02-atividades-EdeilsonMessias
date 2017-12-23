$(document).ready(function() {
	$("button[name='calcular'").click(function() {
		var amplitude = parseFloat($("#amplitude").val());
		var intervalo = parseFloat($("#intervalo").val());

		var magnitude = Math.log10(amplitude) + 3 * Math.log10(8*intervalo) - 2.92;
		
		$("#magnitude").val(magnitude);

		if (magnitude < 3.5) {
			alert('Geralmente não sentido, mas gravado.');
		} else if (magnitude >= 3.5 && magnitude <= 5.4) {
			alert('Às vezes sentido, mas raramente causa danos.');
		} else if (magnitude >= 5.5 && magnitude <= 6.0) {
			alert('No máximo causa pequenos danos a prédios bem construídos, mas pode danificar seriamente casas mal construídas em regiões próximas.') ;
		} else if (magnitude >= 6.1 && magnitude <= 6.9) {
			alert('Pode ser destrutivo em áreas em torno de até 100 km do epicentro.');
		} else if (magnitude >= 7.0 && magnitude <= 7.9) {
			alert('Grande terremoto. Pode causar sérios danos numa grande faixa.');
		} else if (magnitude >= 8.0) {
			alert('Enorme terremoto. Pode causar graves danos em muitas áreas mesmo que estejam a centenas de quilômetros.');
		}
	});
});