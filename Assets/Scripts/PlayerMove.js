#pragma strict
var speed =5.0;
static var score =0;
function Start () {
	score=0;
}
function Update () {
	transform.Translate(Input.GetAxis("Horizontal")*Time.deltaTime*speed,
	Input.GetAxis("Vertical")*Time.deltaTime*speed,0);
	var screenPosition = Camera.main.WorldToScreenPoint(transform.position);
	if (screenPosition.y > Screen.height || screenPosition.y < 0)
	{
		Die();
	}
	if(time.lefttimes==0)
	Application.LoadLevel("win");
}
function OnCollisionEnter2D(other:Collision2D)
{
    if(life.playerlife>=1) life.playerlife--;
	if(life.playerlife<1) Die();
}
function OnTriggerEnter2D(other:Collider2D)
{
    if(life.playerlife>=1) life.playerlife--;
	if(life.playerlife<1) Die();
}
function OnGUI () 
{
	GUI.color = Color.black;
	GUILayout.Label(" Score: " + score.ToString());
}
function Die()
{
	Application.LoadLevel("scores");
}
