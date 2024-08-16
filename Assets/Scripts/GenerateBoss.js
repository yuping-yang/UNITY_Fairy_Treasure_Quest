#pragma strict
var boss:GameObject[];
function Start () {
InvokeRepeating("CreateObstacle", 8f, 20f);

}

function Update () {

}

function CreateObstacle()
{

	Instantiate(boss[Random.Range(0,boss.Length)]);
}
