class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    map(func) {
        let newArray = new MyArray();
        for(let i = 0; i < this.length; i++) {
            //this.data[i] = func(this.data[i]);
            newArray.push(func(this.data[i]));
        }
        return newArray;
    }

    filter(func) {
        let newArray = new MyArray();
        for(let i = 0; i < this.length; i++) {
            if(func(this.data[i])) {
                newArray.push(this.data[i]);
            }
        }
        return newArray;
    }

    push(item) {
        if(item !== undefined && item !== null && item !== "") {
            this.data = {...this.data, [this.length]: item};
            this.length++;
        }
    }

    pop() {
        //delete this.data[this.length - 1];
        let newArray = new MyArray();
        let last = this.data[this.length - 1];
        for(let i = 0; i < this.length; i++) {
            if(i === this.length - 1) {
                this.length--;
                break;
            }
            newArray.push(this.data[i]);
        }
        this.data = newArray.data;
        return last;
    }

    join(character = ",") {
        let string = "";
        for(let i=0; i < this.length; i++) {
            if(i === this.length - 1) {
                string += this.data[i];
                break;
            }
            string += this.data[i] + character;
        }
        return string;
    }

    shift() {
        let newArray = new MyArray();
        let firstItem = this.data[0];
        for(let i = 1; i < this.length; i++) {
            newArray.push(this.data[i]);
            if(i === this.length - 1) {
                this.data = newArray.data;
                this.length--;
                break;
            }
        }
        return firstItem;
    }

    unshift(item) {
        if(item !== undefined && item !== null && item !== "") {
            let newArray = new MyArray();
            newArray.push(item);
            for(let i = 0; i < this.length; i++) {
                newArray.push(this.data[i]);
            }
            this.data = newArray.data;
            this.length++;
            return this.length;
        }
    }
}


//Ejemplo 1:
//Input:
const myArray = new MyArray();
myArray.push(1);
myArray.push(2);
myArray.push(3);
console.log(myArray.data)
//Output: { 0: 1, 1: 2, 2: 3 }


//Ejemplo 2:
//Input:
const myArray2 = new MyArray()
myArray2.push("Platzinauta");
myArray2.unshift("Hola!")
console.log(myArray2.data)

//Output: { 0: "Hola!", 1: "Platzinauta" }

//pop
//Input:
const myArray3 = new MyArray()
myArray3.push("Platzinauta");
myArray3.push("Hola!")
myArray3.push("HI!")
myArray3.pop()
console.log(myArray3.data)

//Should not add an item if no item is provided (unshift)
//Input:
const myArray4 = new MyArray()
myArray4.push("Platzinauta");
myArray4.unshift("")
console.log(myArray4.data)