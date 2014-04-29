var periodical;
var bullpen;
var height;
var width;
var ajaxholder;
var request;
var counter;
var newimage;
var rotator;

function cycleimage(){

  if ( counter >= images.length ) { counter=0; };
  if ( images.length <= 1 ) {
    clearInterval( rotator );
    return false;
  }
  $('#chickens').fadeOut( 'slow',
    function() {
      newimage = images[counter];
    $('#chickens').attr("src", 'images/'+newimage)
      .fadeIn('slow');
      counter++;
    });
}


$(document).ready( function() {
  // images = '!{chickens}'
  // images = jQuery.parseJSON( '!{images}' );
  counter=1;
  rotator = setInterval(
      function() {
        cycleimage();
      }, 6000 );
});