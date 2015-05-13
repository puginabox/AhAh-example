$(document).ready(function(e) {

$('#list').find('a').on('click', function(e){
e.preventDefault();

var pieceOf = $('#fruit');

switch($(this).attr('href')) {
case 'apple.html' :
pieceOf.load('views/apple.html');
break;
case 'pear.html' :
pieceOf.load('views/pear.html');
break;
case 'grapes.html' :
pieceOf.load('views/grapes.html');
break;
case 'lemon.html' :
pieceOf.load('views/lemon.html');
break;
case 'orange.html' :
pieceOf.load('views/orange.html');
break;
case 'beetroot.html' :
pieceOf.load('views/beetroot.html');
break;    
case 'carrot.html' :
pieceOf.load('views/carrot.html');
break;    
case 'strawberry.html' :
pieceOf.load('views/strawberry.html');
break;                
}
});
});