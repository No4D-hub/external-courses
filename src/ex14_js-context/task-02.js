class Hangman {
    constructor(word) {
        this.word = word;
        let guessedString = '';
        for (let i = 0; i < word.length; i++) {
            guessedString +='_';
        }
        this.guessedString = guessedString;
        this.errorsLeft = 6;
        this.wrongSymbols = [];
    }
    getGuessedString() {
        return this.guessedString;
    }
    getErrorsLeft() {
        return this.errorsLeft;
    }
    getWrongSymbols() {
        return this.wrongSymbols;
    }
    setGuessedString(guessedString) {
        this.guessedString = guessedString;
    }
    getStatus() {
        let message = '';

        if (!this.getGuessedString().includes('_')) {
            message = ' | You won!'
        } else {
            message = ` | errors left: ${this.getErrorsLeft()} `    
        }
        console.log(`${this.getGuessedString()} ${message}`)
    }
    guess(symbol) {
        if (this.errorsLeft === 0) {
            console.log('Sorry but you have no errors left')

            return undefined;
        }
        if (this.word.includes(symbol)) {
            let guessedString = this.getGuessedString();
            let newString = guessedString;

            for (let j = 0; j < this.word.length; j++) {
                if (this.word[j] === symbol) {
                    newString = guessedString.split('');
                    newString.splice.apply(newString,[j,1].concat(symbol.split('')));
                    guessedString = newString.join('')
                }
            }
            this.setGuessedString(guessedString);
            this.getStatus();
        } else {
            this.wrongSymbols.push(symbol);
            this.errorsLeft--;
            console.log(`wrong letter, errors left ${this.getErrorsLeft()} | ${this.getWrongSymbols().join('')}`)
        }
        
        return this;
    }
    startAgain(string) {
        this.word = string;
        let guessedString = '';

        for (let i = 0; i < string.length; i++) {
            guessedString +='_';
        }
        this.guessedString = guessedString;
        this.errorsLeft = 6;
        this.wrongSymbols = [];
        
        return this;
    }
}
let hangman = new Hangman();
module.exports = hangman;