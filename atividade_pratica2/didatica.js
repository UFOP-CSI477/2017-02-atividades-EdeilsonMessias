$(document).ready(function() {
	$("#link1").click(function() {
		$("#resultado1").show();
		$("#resultado2").hide();
		$("#resultado3").hide();
		$("#resultado4").hide();
	});

	$("#link2").click(function() {
		$("#resultado1").hide();
		$("#resultado2").show();
		$("#resultado3").hide();
		$("#resultado4").hide();
	});

	$("#link3").click(function() {
		$("#resultado1").hide();
		$("#resultado2").hide();
		$("#resultado3").show();
		$("#resultado4").hide();
	});

	$("#link4").click(function() {
		$("#resultado1").hide();
		$("#resultado2").hide();
		$("#resultado3").hide();
		$("#resultado4").show();
	});

	$("#link5").click(function() {
		$("#resultado5").show();
		$("#resultado6").hide();
		$("#resultado7").hide();
		$("#resultado8").hide();
		$('html, body').animate(
			{
				scrollTop: $('#link5').offset().top
			},
			1000
		);
	});

	$("#link6").click(function() {
		$("#resultado5").hide();
		$("#resultado6").show();
		$("#resultado7").hide();
		$("#resultado8").hide();
		$('html, body').animate(
			{
				scrollTop: $('#link6').offset().top
			},
			1000
		);
	});

	$("#link7").click(function() {
		$("#resultado5").hide();
		$("#resultado6").hide();
		$("#resultado7").show();
		$("#resultado8").hide();
		$('html, body').animate(
			{
				scrollTop: $('#link7').offset().top
			},
			1000
		);
	});

	$("#link8").click(function() {
		$("#resultado5").hide();
		$("#resultado6").hide();
		$("#resultado7").hide();
		$("#resultado8").show();
		$('html, body').animate(
			{
				scrollTop: $('#link8').offset().top
			},
			1000
		);
	});

	$("#link9").click(function() {
		$("#resultado9").show();
		$("#resultado10").hide();
		$("#resultado11").hide();
		$("#resultado12").hide();
		$('html, body').animate(
			{
				scrollTop: $('#link9').offset().top
			},
			1000
		);
	});

	$("#link10").click(function() {
		$("#resultado9").hide();
		$("#resultado10").show();
		$("#resultado11").hide();
		$("#resultado12").hide();
		$('html, body').animate(
			{
				scrollTop: $('#link10').offset().top
			},
			1000
		);
	});

	$("#link11").click(function() {
		$("#resultado9").hide();
		$("#resultado10").hide();
		$("#resultado11").show();
		$("#resultado12").hide();
		$('html, body').animate(
			{
				scrollTop: $('#link11').offset().top
			},
			1000
		);
	});

	$("#link12").click(function() {
		$("#resultado9").hide();
		$("#resultado10").hide();
		$("#resultado11").hide();
		$("#resultado12").show();
		$('html, body').animate(
			{
				scrollTop: $('#link12').offset().top
			},
			1000
		);
	});



	$("#link13").click(function() {
		$("#resultado13").show();
		$("#resultado14").hide();
		$("#resultado15").hide();
		$("#resultado16").hide();
		$('html, body').animate(
			{
				scrollTop: $('#link13').offset().top
			},
			1000
		);
	});

	$("#link14").click(function() {
		$("#resultado13").hide();
		$("#resultado14").show();
		$("#resultado15").hide();
		$("#resultado16").hide();
		$('html, body').animate(
			{
				scrollTop: $('#link14').offset().top
			},
			1000
		);
	});

	$("#link15").click(function() {
		$("#resultado13").hide();
		$("#resultado14").hide();
		$("#resultado15").show();
		$("#resultado16").hide();
		$('html, body').animate(
			{
				scrollTop: $('#link15').offset().top
			},
			1000
		);
	});

	$("#link16").click(function() {
		$("#resultado13").hide();
		$("#resultado14").hide();
		$("#resultado15").hide();
		$("#resultado16").show();
		$('html, body').animate(
			{
				scrollTop: $('#link16').offset().top
			},
			1000
		);
	});

	$("#triangulo").click(function() {
		if ($("#triangulo").val() == 'Vermelho') {
			$("#acerto1").show();
			$("#erro1").hide();
		} else if ($("#triangulo").val() == 'Selecione') {
			$("#acerto1").hide();
			$("#erro1").hide();
		} else {
			$("#erro1").show();
			$("#acerto1").hide();
		}
	});

	$("#quadrado").click(function() {
		if ($("#quadrado").val() == 'Verde') {
			$("#acerto2").show();
			$("#erro2").hide();
		} else if ($("#quadrado").val() == 'Selecione') {
			$("#acerto2").hide();
			$("#erro2").hide();
		} else {
			$("#erro2").show();
			$("#acerto2").hide();
		}
	});

	$("#circulo").click(function() {
		if ($("#circulo").val() == 'Amarelo') {
			$("#acerto3").show();
			$("#erro3").hide();
		} else if ($("#circulo").val() == 'Selecione') {
			$("#acerto3").hide();
			$("#erro3").hide();
		} else {
			$("#erro3").show();
			$("#acerto3").hide();
		}
	});

	$("#retangulo").click(function() {
		if ($("#retangulo").val() == 'Azul') {
			$("#acerto4").show();
			$("#erro4").hide();
		} else if ($("#retangulo").val() == 'Selecione') {
			$("#acerto4").hide();
			$("#erro4").hide();
		} else {
			$("#erro4").show();
			$("#acerto4").hide();
		}
	});
});