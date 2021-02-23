class Memento {
    constructor() {
       this.values = [];
       this.index = -1;
    }

    addElement = (element) => {
       this.values.splice(this.index + 1, this.values.length); //On supprime tout ce qu'il y a après notre index
       this.values.push(JSON.stringify(element));
       this.index += 1;
    }

    undo = () => {
        if (this.index <= 0) {
            return false;
        }
        this.index -= 1;
        return JSON.parse(this.values[this.index]);
    }

    redo = () => {
        if (this.index >= this.values.length-1) {
            return false;
        }
        this.index += 1;
        return JSON.parse(this.values[this.index]);
    }
}