#pragma strict
var timenumber:Texture[];
static var lefttime:int=60;
static var lefttimes:int=60;
var time:float=0;
function Start(){
lefttime=60;
lefttimes=lefttime+score.scores;
}
function Update () {
time+=Time.deltaTime;
if(time>1)
{
lefttimes--;
time=0;
}
if(lefttimes<1.0)
{
lefttimes=0;

}
}
function OnGUI(){
for(var i:int=0;i<lefttimes.ToString().Length;i++){
GUI.DrawTexture(new Rect(600+i*50,10,50,60),timenumber[System.Int32.Parse((lefttimes.ToString())[i].ToString())]);
}
}
