const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' '
};

function decode(expr) {
    let arr = Array.from(expr);
    return Transformation(DivisionIntoParts(arr)).map((item) => MORSE_TABLE[item]).join('')
}

function DivisionIntoParts(arr) {
    let AfterSplice = [];
    while (arr.length > 0) {
        AfterSplice.push(arr.splice(0, 10));
    }
    return AfterSplice;
}

function Transformation(func) {
    let word = [];
    for (let mas of func) {
        let char = '';
        if (mas[0] === '*') {
            word.push(' ');
        } else {
            for (let i = 0; i < mas.length; i += 2) {
                let comb = mas[i] + mas[i + 1];
                if (comb === '10') {
                    char += '.'
                } else if (comb === '11') {
                    char += '-'
                }
            }
            word.push(char)
        }
        char = '';
    }
    return word;
}

module.exports = {
    decode
}
