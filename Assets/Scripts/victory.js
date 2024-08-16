#pragma strict
var buttonnumber:Texture[];
function OnGUI(){
	if (GUI.Button(Rect(Screen.width/2-120,Screen.height/2+240,240,90),buttonnumber[0])){
		Application.LoadLevel("scores");
		}
		}