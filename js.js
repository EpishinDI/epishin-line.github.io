//генератор простых чисел
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
//функция прорисовки дуги стрелки
function arc(widthArc, arcId) {
	var canvas = document.getElementById(arcId);
	var context = canvas.getContext("2d");
	canvas.height = 50;
	canvas.width = (widthArc * 39);
	context.lineWidth = 3;
	context.strokeStyle = "#ff347a";
	context.moveTo(0, 50);
	context.bezierCurveTo((widthArc * 39) / 4, 0, ((widthArc * 39) / 4) * 3, 0, (widthArc * 39), 50);
	context.stroke();
}
//случайное число [6,9]
var a = getRandomInt(6, 9);
//проверка ответа [11,14]
do {
	var b = getRandomInt(1, 9);
} while ((a + b) < 11 || (a + b) > 14);
//вывод дуги
arc(a, "arcA");
arc(b, "arcB");
var c = a + b;
document.getElementById("a").innerHTML = a;
document.getElementById("b").innerHTML = b;
//функция делает видимым
function inline(name) {
	document.getElementById(name).style.display = 'inline';
}
//функция нефидимости
function none(name) {
	document.getElementById(name).style.display = 'none';
}
//функция числа а
function fa() {
	var inp = document.getElementById('valueA');
	if (inp.value == a) {
		inp.style.display = 'none';
		document.getElementById('spA').innerHTML = a;
		inline('spA')
		inline('boxb');
		document.getElementById('a').style.backgroundColor = "";
	} else {
		inp.style.color = 'red';
		document.getElementById('a').style.backgroundColor = "#f8cd3b";
	}
}
//функция числа b
function fb() {
	var inp = document.getElementById('valueB');
	if (inp.value == b) {
		inp.style.display = 'none';
		document.getElementById('spB').innerHTML = b;
		inline('spB');
		inline('valueC');
		none('qwe');
		document.getElementById('b').style.backgroundColor = "";
	} else {
		inp.style.color = 'red';
		document.getElementById('b').style.backgroundColor = "#f8cd3b";
	}
}
//функция ответа
function fc() {
	var inp = document.getElementById('valueC');
	if (inp.value == c) {
		inp.style.display = 'none';
		document.getElementById('spC').innerHTML = c;
	} else {
		inp.style.color = 'red';
	}
}

function on(name) {
	$(name).keypress(function (event) {event = event || window.event;
		if (event.charCode && event.charCode != 0 && event.charCode != 46 && (event.charCode < 48 || event.charCode > 57))
			return false;
	});
}
