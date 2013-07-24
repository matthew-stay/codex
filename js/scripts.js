$(document).ready(function(){

   // $('#term').focus(function(){
   //    var full = $("#definition").has("dt").length ? true : false;
   //    if(full == false){
   //       $('#error').removeClass('show');
   //    } else {
   //       $("#word-list").addClass('faded');
   //    }
   // });

   //    $("input#term").click(function(){
   //    });
   //    $("button#search").click(function(){
   //       $("#word-list").removeClass('faded');
   //    });
   //    $("input#term").blur(function(){
   //       $("#word-list").removeClass('faded');
   //    });
  
// $('#fetch').fitText();
// $("#term").fitText(1.5, { minFontSize: '30px', maxFontSize: '1200px' });
      

  $('#term').keyup(function(event) {
    var full = $("#definition").has("dt").length ? true : false;
              $('#error').removeClass('show');
              $("#term").removeClass('error-input');
  });

   var getDefinition = function(){

        var word = $('#term').val();

         if(word == ''){

            $('#definition').html("<h2 class='loading'>Ha! We haven't forgotten to validate the form! Please enter something.</h2>");

         } else {

            $.getJSON("http://api.wordnik.com/v4/word.json/" + word + "/definitions?api_key=9ad18aa0aa0d5cdf57c3b15aa46172443aca2d4db5c438c2f", function(json) {
                  if (json.length != 0){
    			           $("#definition").html('<dt class="word">' + '</dt><h2><dd class="text">' + json[0].text + '</dd></h2></h3><cite>' + json[0].attributionText + '</cite></h3>');
                   } else {
                     $("#error").addClass('show');
                     $("#term").addClass('error-input');
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
