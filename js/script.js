$(window).on('load', function () {    
	if ($('#preloader').length) {      
		$('#preloader').delay(100).fadeOut('slow', function () {        
			$(this).remove();      
		});    
	}
});

$('#btnRun1').click(function() {

	$.ajax({
		url: "./php/getOcean.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat: $('#selLat').val(),
			lng: $('#selLong').val()
		},
		success: function(result) {

			console.log(result);

			if (result.status.name == "ok") {

				$('#oceanResult').html(result['data']['name']);

			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert("The following error occured: " + jqXHR.status + " " + textStatus);
		}
	}); 

});

$('#btnRun2').click(function() {

	$.ajax({
		url: "./php/getAddress.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat: $('#selLat2').val(),
			lng: $('#selLong2').val()
		},
		success: function(result) {

			console.log(result);

			if (result.status.name == "ok") {

				$('#houseNumberResult').html(result['data']['houseNumber']);
				$('#localityResult').html(result['data']['locality']);
				$('#streetResult').html(result['data']['street']);
				$('#postCodeResult').html(result['data']['postalcode']);
				$('#countryCodeResult').html(result['data']['countryCode']);

			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert("The following error occured: " + jqXHR.status + " " + textStatus);
		}
	}); 

});

$('#btnRun3').click(function() {

	$.ajax({
		url: "./php/getEarthquakes.php",
		type: 'POST',
		dataType: 'json',
		data: {
			north: $('#selNorth').val(),
			south: $('#selSouth').val(),
			east: $('#selEast').val(),
			west: $('#selWest').val()
		},
		success: function(result) {

			console.log(result);

			if (result.status.name == "ok") {

				$('#datetimeResult').append(result['data'][0]['datetime']);
				$('#depthResult').append(result['data'][0]['depth']);
				$('#magnitudeResult').append(result['data'][0]['magnitude']);
				$('#latitudeResult').append(result['data'][0]['lat']);
				$('#longitudeResult').append(result['data'][0]['lng']);

				if(result['data'].length >= 2){
					$('#datetimeResult2').append(result['data'][1]['datetime']);
					$('#depthResult2').append(result['data'][1]['depth']);
					$('#magnitudeResult2').append(result['data'][1]['magnitude']);
					$('#latitudeResult2').append(result['data'][1]['lat']);
					$('#longitudeResult2').append(result['data'][1]['lng']);
				}

				if(result['data'].length >= 3){
					$('#datetimeResult3').append(result['data'][2]['datetime']);
					$('#depthResult3').append(result['data'][2]['depth']);
					$('#magnitudeResult3').append(result['data'][2]['magnitude']);
					$('#latitudeResult3').append(result['data'][2]['lat']);
					$('#longitudeResult3').append(result['data'][2]['lng']);
				}

			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert("The following error occured: " + jqXHR.status + " " + textStatus);
		}
	}); 

});
