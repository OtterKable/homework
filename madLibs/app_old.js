wNodes = document.querySelectorAll('input[type=text]');
wNodes.forEach(input => input.addEventListener('blur', update));

twoDigit = (integer) => {
    iText = integer.toString();
    len = iText.length;
    td = ('00' + iText).substring(len, len + 2);
    return td;
}

function getWords() {
    let _wCount = wNodes.length;
    var _words = [];
    for (i = 0; i < _wCount; i++) { _words.push(wNodes[i].value) };
    return _words;
}

pars = document.querySelectorAll('p');
text = pars.toString();
var pCount = pars.length;

replaceString = '\\(blank\\)';
rStringShort = replaceString.replaceAll('\\', '');
rLen = replaceString.length;
var re = new RegExp(replaceString, 'g');

function update() {
    words = getWords();
    console
    allText = '';
    k = 0;
    for (i = 0; i < pCount; i++) {
        _text = pars[i].innerHTML;
        let _bCount = (_text.match(re) || []).length;
        for (j = 0; j < _bCount; j++) {
            _word = words[k]
            _text = _text.replace(rStringShort, _word);
            k++;
        }
    }
    return allText;
}

allText = update();
console.log(allText);

