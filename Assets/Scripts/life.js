#pragma strict
var lifenumber:Texture[];
static var playerlife =3;
function Start () {
playerlife=3;
}
function Update () {

}
function OnGUI(){
for(var i:int=0;i<playerlife;i++){
GUI.DrawTexture(new Rect(60+i*50,10,50,60),lifenumber[0]);
}
}