#pragma strict
var scorenumber:Texture[];
static var scores:int=0;
function Start(){
scores=PlayerMove.score;
}
function Update () {
}
function OnGUI(){
for(var i:int=0;i<scores.ToString().Length;i++){
GUI.DrawTexture(new Rect(500+i*100,300,175,190),scorenumber[System.Int32.Parse((scores.ToString())[i].ToString())]);
//GUILayout.Label(" Score: " + scores.ToString());
if (GUI.Button(Rect(Screen.width/2-80,Screen.height/2+250,160,60),scorenumber[10])){
		Application.LoadLevel("title");
}
}
}