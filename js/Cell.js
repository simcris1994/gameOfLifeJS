class Cell {
    constructor(alive) {
        this.alive = alive;
        this.aliveNext = false;
    }

    color() {
        return this.alive ? "green" : "black";
    }
}