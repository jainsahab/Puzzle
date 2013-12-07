var sourcePosition;
var destinationPosition;


$(function(){
  $(".placeholder").mousedown(function(){
    sourcePosition = $(this).position();
    sourcePosition.id = $(this).attr('id');
    console.log(JSON.stringify(sourcePosition));
  });
})

$(function() {
    $( ".placeholder" ).draggable({ cursor: "move",revert: "invalid",});
});

$(function() {
    $( ".placeholder" ).droppable({drop: function(event, ui){
    	destinationPosition = $(this).position();
    	destinationPosition.id = $(this).attr('id');
	    console.log(JSON.stringify(destinationPosition));
	    $(this).css({top: sourcePosition.top, left: sourcePosition.left, position:'absolute'});
	    $(ui.draggable).css({top: destinationPosition.top, left: destinationPosition.left, position:'absolute'});
     } });
});