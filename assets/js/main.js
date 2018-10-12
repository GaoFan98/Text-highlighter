
var mainText = document.getElementById('paragraph').textContent;
var toLower = mainText.toLowerCase();

function highlight() {
    var input = document.getElementById('typed-text').value;
    document.getElementById('paragraph').innerHTML = mainText.replace(input, '<span style="background-color: #ffff00;">' + input + '</span>');
}

function highlightAll() {
    var input = document.getElementById('typed-text').value;
    document.getElementById('paragraph').innerHTML = mainText.replace(new RegExp(input, 'g' ),'<span style="background-color: #ffff00;">' + input + '</span>');
}
console.log(toLower);


