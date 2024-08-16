#pragma strict
var speed=5.0;
function Start () {
	transform.position.y += Random.Range(-0.8,0.8);
	Destroy(gameObject,7);
	//transform.FindChild("rockDown").Translate(0,Random.Range(0,2),0);
}

function Update () {
transform.Translate(-1*Time.deltaTime*speed,0,0);
}
