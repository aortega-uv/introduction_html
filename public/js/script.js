var topicLabel = document.getElementById('topicLabel');
var topicText = document.getElementById('topicText');
var topicImage = document.getElementById('topicImage');

jQuery('document').ready(function($){

    var menuBtn= $('.menu-icon'),
        menu = $('.navigation ul');
        
    
        menuBtn.click(function(){

            if(menu.hasClass('show')){
                menu.removeClass('show');
            }else{
                menu.addClass('show');
            }
            
        });
});

(function() {
	'use strict';
	window.addEventListener('load', function() {
	  var forms = document.getElementsByClassName('needs-validation');
	  var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
		  if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();   
		  }else 
		  {
			 let name = document.getElementById('name').value;
			 let emailAdress = document.getElementById('emailAdress').value;
			 let phoneNumber = document.getElementById('phoneNumber').value;
			 let message = document.getElementById('message').value;
			 alert("Datos:"+name+","+emailAdress+","+phoneNumber+","+message);
		  }
		  form.classList.add('was-validated');
		}, false);
	  });
	}, false);
  })();

/* BREAD SECTION */
function showTopic(e){
	switch(e){
		case 1:
			console.log("case 1");
			getTopicData(e);// Populate card data
			$('#topicModal').modal()// Open modal
			break;
		case 2:
			console.log("case 2");
			getTopicData(e);
			$('#topicModal').modal();
			break;
		case 3:
			console.log("case 3");
			getTopicData(e);
			$('#topicModal').modal();
			break;
		case 4:
			console.log("case 4");
			getTopicData(e);
			$('#topicModal').modal();
			break;
		case 5:
			console.log("case 5");
			getTopicData(e);
			$('#topicModal').modal();
			break;
		case 6:
			console.log("case 6");
			getTopicData(e);
			$('#topicModal').modal();
			break;
		default:
			console.log("invalid");
			alert("Opción invalida")
	}
}

// Get Data From content.js
function getTopicData(e){
	//Update labels with current data
	topicLabel.innerHTML = topics["topic" + e].topicLabel
	topicText.innerHTML = topics["topic" + e].topicText;
	topicImage.src = topics["topic" + e].topicImage;
}
