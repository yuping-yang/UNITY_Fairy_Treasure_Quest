#pragma strict
var sun:GameObject[];
function Start () {
InvokeRepeating("CreateObstacle", 6f, 6f);

}

function Update () {

}

function CreateObstacle()
{

	Instantiate(sun[Random.Range(0,sun.Length)]);
}
