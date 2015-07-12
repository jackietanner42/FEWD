.card effect__click
.card {
  display:inline-block;
  position: absolute;
  float: left;
  padding: 5px;
  width: 16.66%;
}
.back, .front{

  width: 16.66%;
  float: left;
  clear: both;
}
.card img {
  width: 100%;
}

.back{
  position: relative;
}
.front{
 position: absolute;
}
.front,
.back {
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transition: -webkit-transform 0.3s;
          transition: transform 0.3s;
}

.front {
  background-color: #ff5078;
}

.back {
  background-color: #1e1e1e;
  -webkit-transform: rotateY(-180deg);
          transform: rotateY(-180deg);
          }

  .card.effect__click.flipped .front {
    -webkit-transform: rotateY(-180deg);
      transform: rotateY(-180deg);
        }

  .card.effect__click.flipped .back {
    -webkit-transform: rotateY(0);
      transform: rotateY(0);
        }*/
