function reqListener () {
  console.log(this.responseText);
  console.log(JSON.parse(this.responseText));
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "http://www.omdbapi.com/?t=star%20wars", true);
oReq.send();
