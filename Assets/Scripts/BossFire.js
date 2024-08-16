#pragma strict
var bossbullet :Transform;
var time:float=0;
function Start () {

}

function Update () {
time+=Time.deltaTime;
if (time>1){
   Instantiate(bossbullet,transform.position,transform.rotation);
   time=0;
   }
}
