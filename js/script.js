 // スケールの初期値（CSSの初期値と合わせる）
 var sc="0.8";

 $( function() {

   $( "#draggable" ).draggable();

   $( "#zoomIn" ).click( function(){
     sc *= 1.1;
     $( "#draggable" ).css( {Transform: 'scale(' + sc + ')' } );
   });

   $( "#zoomOut" ).click( function(){
     sc /= 1.1;
     $( "#draggable" ).css( {Transform: 'scale(' + sc + ')' } );
   });

 } );
