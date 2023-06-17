var hitung = 0;
function showText(){
    hitung++;
var textShow = document.getElementById('card');
if(hitung %2 == 0){
    textShow.style.color = 'rgba(255, 255, 255, 0)';
}else{
    textShow.style.color = 'rgb(87, 198, 250)';

}
}
function showText(){
var textShow2 = document.getElementById('card');
    textShow2.style.color = 'rgb(87, 198, 250)';
    setTimeout(function() {
        textShow2.style.color = 'rgba(255, 255, 255, 0)';
      }, 8000);
}
function showMau() {
    var pesan = document.getElementById('pesan');

    pesan.style.display = 'block';
  setTimeout(function() {
    window.location.href = 'flowers.html';
  }, 3000);
}
function showImage() {
    var image = document.getElementById('ketawa');
    var sedih = document.getElementById('sedih');
    var sedih2 = document.getElementById('sedih2');
    image.style.display = 'block';
    sedih.style.display = 'none';
    sedih2.style.display = 'none';
    setTimeout(function(){
        image.style.display = 'none';
    }, 4000);
}

var count = 0;
function Move() {
    count++;
    var size = 15 - (count * 2);
    var btnSize = 100 - (count * 15);
    var button = document.getElementById('dih');
    var container = document.querySelector('.container');

    var containerRect = container.getBoundingClientRect();
    var containerWidth = containerRect.width;
    var containerHeight = containerRect.height;

    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;

    var maxLeft = containerWidth - buttonWidth;
    var maxTop = containerHeight - buttonHeight;

    var randomLeft = Math.floor(Math.random() * maxLeft);
    var randomTop = Math.floor(Math.random() * maxTop);

    button.style.position = 'absolute';
    button.style.left = randomLeft + 'px';
    button.style.top = randomTop + 'px';
    button.style.fontSize = size + 'px';
    button.style.backgroundSize = '10px';
    button.style.width = btnSize + 'px';
    button.style.height = btnSize/2 + 'px';
    button.style.display = (count >= 5) ? 'none' : 'block';
    var senang = document.getElementById('ketawa');
    var sedih = document.getElementById('sedih');
    var sedih2 = document.getElementById('sedih2');
    senang.style.display = 'none';
    if(count >= 2){
        sedih.style.display = 'block';
        sedih2.style.display = 'none';
    }else{
        sedih2.style.display = 'block';
        sedih.style.display = 'none';
    }

}
