#pragma strict
var lifenumber:Texture[];
function Start () {

}

function Update () {

}
function OnGUI(){
for(var i:int=0;i<life.playerlife;i++){
GUI.DrawTexture(new Rect(550+i*50,470,50,60),lifenumber[0]);
}
}