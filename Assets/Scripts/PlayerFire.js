#pragma strict
var playerbullet :Transform;
function Start () {

}

function Update () {
if(Input.GetButtonDown("Jump")){
   Instantiate(playerbullet,transform.position,transform.rotation);

}
}
