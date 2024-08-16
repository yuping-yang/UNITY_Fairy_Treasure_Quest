#pragma strict
var velocity = Vector2(-1, 0);
var i=1;
var j=3;
function Start () {
    i=1;
	rigidbody2D.velocity =1*velocity;
	//1.3*velcocity 		 	
}
function Update () {
     if(transform.position.x<6)  i=0;
     rigidbody2D.velocity = i*velocity;
}
function OnTriggerEnter2D(other:Collider2D){
   Destroy(other.gameObject);
   j--;
   if(j<1)
   {Destroy(gameObject);
   PlayerMove.score+=5;
   }
}

