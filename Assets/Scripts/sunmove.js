#pragma strict
var velocity = Vector2(-2, 0);
var i=0.0;
var player:GameObject;
function Start () {
    Destroy(gameObject,6);
	rigidbody2D.velocity = 2*velocity;
	//1.3*velcocity 
	 transform.position.y+=Random.Range(-2,2);		
}
function Update () {
}
function OnTriggerEnter2D(other:Collider2D){
   
   Destroy(gameObject);
   PlayerMove.score++;
}
