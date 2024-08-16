#pragma strict
var velocity = Vector2(-4, 0);
var i=0.0;
function Start () {
    Destroy(gameObject,6);
	rigidbody2D.velocity = 2*velocity;
	//1.3*velcocity 
	 i=Random.Range(-2,2);
	 if (i<-0.5||i>0.5)
	 transform.position.y +=i;
	 else if (i>=-0.5&&i<0)
	 transform.position.y +=Random.Range(-1.5,-1);
	 else
	 transform.position.y +=Random.Range(1,1.5);	
}
function Update () {
}
function OnTriggerEnter2D(other:Collider2D){
   //gameObject.audio.Play();
   Destroy(gameObject);
   PlayerMove.score++;
}
