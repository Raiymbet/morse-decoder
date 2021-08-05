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
};

var letter_length = 10;
const MORSE_DECODER_TABLE = {
    10: '.',
    11: '-',
    '**********': ' '
}

function decode(expr) {
    // write your solution here
    let result = '';

    for (let i = 0; i < expr.length; i+=letter_length ) {
        let part = expr.substring(i, letter_length + i),
        morse_code = '';
        if (part == '**********') {
            result += MORSE_DECODER_TABLE[part];
        } else {
            for (let j = 0; j < part.length; j+=2) {
                let code_ = part.substring(j, j+2);
                if ( code_ != '00') {
                    morse_code += MORSE_DECODER_TABLE[code_]
                }
            }
            result += MORSE_TABLE[morse_code];
        }
    }

    return result;
}

module.exports = {
    decode
}