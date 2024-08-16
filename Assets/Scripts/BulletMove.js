#pragma strict
var speed=5.0;
function Start () {
  Destroy(gameObject,2);
  transform.position.x+=2.0;
}

function Update () {
transform.Translate(1*Time.deltaTime*speed,0,0);
}
function OnTriggerEnter2D(other:Collider2D){
   Destroy(gameObject);
}

     