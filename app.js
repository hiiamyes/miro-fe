window.onload = function(){

  var req = new XMLHttpRequest();

  document.getElementById('input').addEventListener('keypress', e => {
    if (e.keyCode === 13){
      req.open('GET', 'http://0b294bdf.ngrok.io/' + e.target.value + ')');
      // req.setRequestHeader('Content-type', 'application/json; charset=utf-8')
      req.send()
      req.onload = function(){
        let song = JSON.parse(this.responseText);
        document.getElementById('miro-say').innerHTML = song.lyric_partial;
      }
    }
  })



}
