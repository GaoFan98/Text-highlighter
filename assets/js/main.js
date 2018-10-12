


var mainText = document.getElementById('paragraph').textContent;

 function highlight () {
    var input = document.getElementById('typed-text').value;

    if (1) {
        document.getElementById('paragraph').innerHTML = mainText.split(input).join('<span style="background-color: #ffff00;">'+input+'</span>');
    }
}



