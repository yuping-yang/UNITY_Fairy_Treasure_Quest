#pragma strict
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