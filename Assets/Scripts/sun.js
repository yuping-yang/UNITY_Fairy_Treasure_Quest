#pragma strict
function OnTriggerEnter2D(other:Collider2D)
{
Destroy(gameObject);
life.playerlife+=2;
}