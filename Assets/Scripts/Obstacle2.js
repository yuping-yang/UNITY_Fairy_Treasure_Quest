//#pragma strict
//var velocity = Vector2(-4, 0);
//function Start () {
//	rigidbody2D.velocity = velocity;
//	transform.position.y += Random.Range(-1,1);
//	Destroy(gameObject,6);
	
//}

//function Update () {

//}
#pragma strict
var speed=5.0;
function Start () {
  Destroy(gameObject,3.0);
  transform.position.y=Random.Range(-5,5);
}

function Update () {
transform.Translate(-1*Time.deltaTime*speed,0,0);
}

function OnCollisionEnter(other:Collision){
Debug.Log("pengle");
Destroy(other.gameObject);
Destroy(gameObject);
}