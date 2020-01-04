// clear textarea
document.getElementById('inner_text').value ="";
document.getElementById('symbols_text').value ="";

document.getElementById('inner_text').oninput = function() {
	// number of offset
	const offset = 3;
	let str = this.value;
	// from symbol to code
	let out = '';
	for (let i=0; i< str.length; i++) {
		let code = str.charCodeAt(i);
		code = code + offset;
		// from code to symbol
		out += String.fromCharCode(code);
	}
	document.getElementById('out').innerHTML = out;
}

// AND REVERSE WITH "-"

document.getElementById('decrypt').onclick = function() {
	
	function textTypeArea() {
		let line = 0;
		let count = 0;
		let typing = '';
		let htmlOut = document.getElementById('out_offset');

		function typeLine() {
			//draw stroke
			let interval = setTimeout(function() {
				typing += out[line][count];
				htmlOut.innerHTML = typing + '|';
				count++;
				// Checking
				// Check if the line has ended?
				if (count >= out[line].length) {
					count = 0;
					line++;
					if (line == out.length) {
						clearTimeout(interval); // stop timeout
						htmlOut.innerHTML = typing; //remove vertical line'|'
						return true;
					}
				}
				typeLine();
			}, getRandomInt(getRandomInt(350 * 2.8)));
		}

		typeLine();
	}
	// number of offset
	const offset = 3;
	let str = document.getElementById('symbols_text').value;
	// from symbol to code
	let out = '';
	for (let i=0; i< str.length; i++) {
		let code = str.charCodeAt(i);
		code = code - offset;
		// from code to symbol
		out += String.fromCharCode(code);
	}
	textTypeArea();
}

// CAESAR IN MATRIX

const h = [
	'How do you need to understand Caesar:\n',
];

function typeText() {
	let line = 0;
	let count = 0;
	let typing = '';
	let htmlOut = document.querySelector('.out_matrix');


	function typeLine() {
		//draw stroke
		let interval = setTimeout(function() {
			typing += h[line][count];
			htmlOut.innerHTML = typing + '|';
			count++;
			// Checking
			// Check if the line has ended?
			if (count >= h[line].length) {
				count = 0;
				line++;
				if (line == h.length) {
					clearTimeout(interval); // stop timeout
					htmlOut.innerHTML = typing; //remove vertical line'|'
					return true;
				}
			}
			typeLine();
		}, getRandomInt(getRandomInt(350 * 2.8)));
	}

	typeLine();
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}


typeText();