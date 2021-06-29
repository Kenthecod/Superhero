var canvas=new fabric.Canvas('myCanvas');
playerx=10;
playery=10;
blockwidth=30;
blockheight=30;

var player_object="";
var block_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
top:playery,
left:playerx
        });
        canvas.add(player_object);
        });
}