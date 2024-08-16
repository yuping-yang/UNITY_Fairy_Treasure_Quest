#pragma strict
var obss:GameObject[];
function Start () {
InvokeRepeating("CreateObstacle", 1f, 1.8f);

}

function Update () {

}

function CreateObstacle()
{

	Instantiate(obss[Random.Range(0,obss.Length)]);
}
