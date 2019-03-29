// function([string1, string2],target id,[color1,color2])    
 consoleText(['Hello World!', 'Welcome to my site!'], 'text',['green','green',]);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var i = 0;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])

  // Выводит строку сообщения 
  window.setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      i = i + 1;
      console.log(i);
        if ( i > 2 ) {
        return i;
        }
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)

  //Мерцание курсора
  window.setInterval(function() {
    if (i === 3) { return i; }
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;
    } else  {
      con.className = 'console-underscore'
      visible = true;
    }
  }, 400)
}