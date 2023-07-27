body {
  overflow: hidden;
  background: #d7d7d7;
}
#tetris {
  width: 360px;
  border: 1px solid black;
  padding: 20px;
}
#canvas {
  width: 200px;
  height: 440px;
  background-color: #000;
  position: relative;
  color: #fff;
}
#canvas h1 {
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 30px;
  padding-top: 200px;
}
.piece {
  border: 1px solid white;
  position: absolute;
}

#start{
  animation: blink .7s steps(2, start) infinite;
  background: #E1FF5F;
  border-radius: 2px;
  color: #202020;
  cursor: pointer;
  font-size: 28px;
}

@keyframes blink {
  to {
    outline: #E1FF5F solid 1px;
  }
}

.red{
  color: #f00000;
}

.square {
  position: absolute;
  width: 19px;
  height: 19px;
  border: 1px solid white;
}
.type0 {
  background-color: #a000f0;
}
.type1 {
  background-color: #00f0f0;
}
.type2 {
  background-color: #f0a000;
}
.type3 {
  background-color: #0000f0;
}
.type4 {
  background-color: #00f000;
}
.type5 {
  background-color: #f00000;
}
.type6 {
  background-color: #f0f000;
}
#next_shape {
  position: relative;
  background-color: #000;
  border: 1px solid white;
  width: 110px;
  height: 110px;
}
#info {
  background-color: #000;
  color: #fff;
  float: right;
  width: 110px;
  height: 420px;
  padding: 10px;
}
