#pragma strict
var speed =5.0;
static var score =0;
//var jumpForce = Vector2(0,300);
function Start () {
score=0;
}

function Update () {
	transform.Translate(Input.GetAxis("Horizontal")*Time.deltaTime*speed,
	Input.GetAxis("Vertical")*Time.deltaTime*speed,0);
	//if (Input.GetKeyUp("space")){
		//rigidbody2D.velocity = Vector2.zero;
		//rigidbody2D.AddForce(jumpForce);
	//}
	// Die by being off screen
	var screenPosition = Camera.main.WorldToScreenPoint(transform.position);
	if (screenPosition.y > Screen.height || screenPosition.y < 0)
	{
		Die();
	}
}

// Die by collision
function OnCollisionEnter2D(other:Collision2D)
{
	//if(life>0) life--;
	//else Die();
	Die();
}
function OnTriggerExit2D(other:Collider2D)
{
   // Instantiate(rocks[Random.Range(0,rocks.Length)]);
    score++;
     
}

function OnGUI () 
{
	GUI.color = Color.blue;
	GUILayout.Label(" Score: " + score.ToString());
}

function Die()
{
	Application.LoadLevel("score");
}
