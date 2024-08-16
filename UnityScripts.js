#pragma strict
// Create
var shakes:Transform[];
var t=0.0;
function Start () {

}

function Update () {
  t=t+Time.deltaTime;
  if (t>2.5)
  {
  Instantiate(shakes[Random.Range(0,shakes.Length)]);
  t=t-2.5;
  }
  }


#pragma strict 
// Obstacle
var speed=5.0;
function Start () {
	transform.position.y += Random.Range(-0.8,0.8);
	Destroy(gameObject,7);
	//transform.FindChild("rockDown").Translate(0,Random.Range(0,2),0);
}

function Update () {
transform.Translate(-1.8*Time.deltaTime*speed,0,0);
}


#pragma strict
// GenObs
var obss:GameObject[];
function Start () {
InvokeRepeating("CreateObstacle", 1f, 1.8f);
//first appearance, interval of appearance
}

function Update () {

}

function CreateObstacle()
{

	Instantiate(obss[Random.Range(0,obss.Length)]);
}


#pragma strict
// Obstacle parameters
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


#pragma strict
// BossBuMove
var speed=5.0;
//var i=2;
function Start () {
  Destroy(gameObject,3.0);
  transform.position.x-=2.0;
}

function Update () {
transform.Translate(-1*Time.deltaTime*speed,0,0);
}
function OnTriggerEnter2D(other:Collider2D){
   //if(i<1)
   Destroy(gameObject);
  // i--;
}


#pragma strict
// BossFire
var bossbullet :Transform;
var time:float=0;
function Start () {

}

function Update () {
time+=Time.deltaTime;
if (time>1){
   Instantiate(bossbullet,transform.position,transform.rotation);
   time=0;
   }
}


#pragma strict
// BossMove
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


#pragma strict
// BulletMove
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

     
#pragma strict
// finallife
var lifenumber:Texture[];
function Start () {

}

function Update () {

}
function OnGUI(){
for(var i:int=0;i<life.playerlife;i++){
GUI.DrawTexture(new Rect(550+i*50,470,50,60),lifenumber[0]);
}
}


#pragma strict
// Generate
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

     
#pragma strict
// GenerateBoss
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


#pragma strict
// GenerateObs
var obss:GameObject[];
function Start () {
InvokeRepeating("CreateObstacle", 1f, 2.8f);
}

function Update () {

}

function CreateObstacle()
{

	Instantiate(obss[Random.Range(0,obss.Length)]);
}


#pragma strict
// GenerateSun
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


#pragma strict
// life
var lifenumber:Texture[];
static var playerlife =3;
function Start () {
playerlife=3;
}
function Update () {

}
function OnGUI(){
for(var i:int=0;i<playerlife;i++){
GUI.DrawTexture(new Rect(60+i*50,10,50,60),lifenumber[0]);
}
}


#pragma strict
// Obstacle2
var speed=5.0;
function Start () {
  Destroy(gameObject,3.0);
  transform.position.y=Random.Range(-5,5);
}

function Update () {
transform.Translate(-1*Time.deltaTime*speed,0,0);
}

function OnCollisionEnter(other:Collision){
Debug.Log("pengle");
Destroy(other.gameObject);
Destroy(gameObject);
}


#pragma strict
// Pair
var speed=5.0;
function Start () {
	transform.position.y += Random.Range(-0.8,0.8);
	Destroy(gameObject,7);
	//transform.FindChild("rockDown").Translate(0,Random.Range(0,2),0);
}

function Update () {
transform.Translate(-1*Time.deltaTime*speed,0,0);
}


#pragma strict
// PlayerFire
var playerbullet :Transform;
function Start () {

}

function Update () {
if(Input.GetButtonDown("Jump")){
   Instantiate(playerbullet,transform.position,transform.rotation);

}
}


#pragma strict
// PlayerM
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


#pragma strict
// PlayerMove
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


#pragma strict
// score
var scorenumber:Texture[];
static var scores:int=0;
function Start(){
scores=PlayerM.score;
}
function Update () {
}
function OnGUI(){
for(var i:int=0;i<scores.ToString().Length;i++){
GUI.DrawTexture(new Rect(550+i*50,320,175,190),scorenumber[System.Int32.Parse((scores.ToString())[i].ToString())]);
//GUILayout.Label(" Score: " + scores.ToString());
if (GUI.Button(Rect(Screen.width/2-80,Screen.height/2+250,160,60),scorenumber[10])){
		Application.LoadLevel("title");
}
}
}


#pragma strict
// Scores
var scorenumber:Texture[];
static var scores:int=0;
function Start(){
scores=PlayerMove.score;
}
function Update () {
}
function OnGUI(){
for(var i:int=0;i<scores.ToString().Length;i++){
GUI.DrawTexture(new Rect(500+i*100,300,175,190),scorenumber[System.Int32.Parse((scores.ToString())[i].ToString())]);
//GUILayout.Label(" Scores: " + scores.ToString());
if (GUI.Button(Rect(Screen.width/2-80,Screen.height/2+250,160,60),scorenumber[10])){
		Application.LoadLevel("title");
}
}
}


#pragma strict
// sun
function OnTriggerEnter2D(other:Collider2D)
{
Destroy(gameObject);
life.playerlife+=2;
}


#pragma strict
// sunmove
var velocity = Vector2(-2, 0);
var i=0.0;
var player:GameObject;
function Start () {
    Destroy(gameObject,6);
	rigidbody2D.velocity = 2*velocity;
	//1.3*velcocity 
	 transform.position.y+=Random.Range(-2,2);		
}
function Update () {
}
function OnTriggerEnter2D(other:Collider2D){
   
   Destroy(gameObject);
   PlayerMove.score++;
}


#pragma strict
// time
var timenumber:Texture[];
static var lefttime:int=60;
static var lefttimes:int=60;
var time:float=0;
function Start(){
lefttime=60;
lefttimes=lefttime+score.scores;
}
function Update () {
time+=Time.deltaTime;
if(time>1)
{
lefttimes--;
time=0;
}
if(lefttimes<1.0)
{
lefttimes=0;

}
}
function OnGUI(){
for(var i:int=0;i<lefttimes.ToString().Length;i++){
GUI.DrawTexture(new Rect(600+i*50,10,50,60),timenumber[System.Int32.Parse((lefttimes.ToString())[i].ToString())]);
}
}


#pragma strict
// title
var buttonnumber:Texture[];
function OnGUI(){
	if (GUI.Button(Rect(Screen.width/2,Screen.height/2-30,240,90),buttonnumber[0])){
		Application.LoadLevel("play");
	}
	if (GUI.Button(Rect(Screen.width/2,Screen.height/2+60,240,90),buttonnumber[1])){
		Application.LoadLevel("playsheji");
	}
	if (GUI.Button(Rect(Screen.width/2,Screen.height/2+150,240,90),buttonnumber[2])){
		Application.Quit();
	}
}


#pragma strict
// victory
var buttonnumber:Texture[];
function OnGUI(){
	if (GUI.Button(Rect(Screen.width/2-120,Screen.height/2+240,240,90),buttonnumber[0])){
		Application.LoadLevel("scores");
		}
		}