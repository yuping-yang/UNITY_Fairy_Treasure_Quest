#pragma strict
var buttonnumber:Texture[];
function OnGUI(){
	if (GUI.Button(Rect(Screen.width/2,Screen.height/2-30,240,90),buttonnumber[0])){
		Application.LoadLevel("play");
	}
	if (GUI.Button(Rect(Screen.width/2,Screen.height/2+60,240,90),buttonnumber[1])){
		Application.LoadLevel("playsheji");
	}
	if (GUI.Button(Rect(Screen.width/2,Screen.height/2+150,240,90),buttonnumber[2])){
		Application.Quit();
	}
}
