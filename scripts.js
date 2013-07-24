$(document).ready(function(){

   var getDefinition = function(){

        var word = $('#term').val();

         if(word == ''){

            $('#definition').html("<h2 class='loading'>Ha! We haven't forgotten to validate the form! Please enter something.</h2>");

         } else {

            $.getJSON("http://api.wordnik.com/v4/word.json/" + word + "/definitions?api_key=9ad18aa0aa0d5cdf57c3b15aa46172443aca2d4db5c438c2f", function(json) {
                  if (json.length != 0){
    			           $("#definition").html('<dt class="word">' + json[0].word + '</dt><dd class="text">' + json[0].text + '</dd><div class="citation">' + json[0].attributionText + '</div>');
                   } else {
    			           $("#definition").hmtl('<p>' + 'Check your spelling!' + '</p>');
                   }
          		});		
          }

        return false;
   }

   $('#search').click(getDefinition);
   $('#term').keyup(function(event){
       if(event.keyCode == 13){
           getDefinition();
       }
   });

});
