#pragma strict
var rocks:GameObject[];

function Start () {
InvokeRepeating("CreateObstacle", 1f, 4.2f);

}

function Update () {

}

function CreateObstacle()
{
	Instantiate(rocks[Random.Range(0,rocks.Length)]);
	
}
