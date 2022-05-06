class clsTick {

    constructor(pInterval = 100) {
        this.frame = 0;
        this.interval = pInterval;

    }

    checkStatus() {
        this.frame++;
        if (this.frame % this.interval == 0) {
            this.frame = 0;
            return true;
        }
        return false;
    }
}