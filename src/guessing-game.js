class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min,
        this.max = max    
    }
    guess() {

         this.candidate = Math.round((this.max + this.min)/2);
         return this.candidate
    }

    lower() {
        this.max = this.candidate;
        this.guess();
    }

    greater() {
        this.min = this.candidate;
        this.guess();
    }
}

module.exports = GuessingGame;
