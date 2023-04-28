class ContactList {
    constructor(size) {
        this.buckets =new Array(size);
		this.numBuckets =this.buckets.length;
    }

    hash(name) {
        let total = 0;
        for (let i = 0; i < name.length; i++) {
            total += name.charCodeAt(i);
        }
        return total % this.numBuckets;
    }

    insert(name, phone) { 
        //  recibirá el nombre y el número de teléfono de un contacto, y agregará este último a la hashTable.
        let index = this.hash(name);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        this.buckets[index].push([name, phone]);
    }

    get(name) {
        // recibirá el nombre de un contacto y devolverá su número de teléfono. Si el contacto no existe, retornará null.
        let index =this.hash(name);

		// si ese bucket no existe, se retorna null.
		if (!this.buckets[index]){
            //console.log("no existe el index")
			return null
		}

		// Si el bucket existe, se recorre el array en busca de un arreglo
		// que tenga la name especificada
		for (let i = 0; i <this.buckets[index].length; i++) {
			// Si se encuentra ese bucket, se retorna su value correspondiente.
			if (this.buckets[index][i][0] === name) {
				return this.buckets[index][i][1];
            }
        }

		//Si no se encuentra la name, se retorna null.
		return null;
    }

    retrieveAll() {
		let allValues = [];
		for (let i = 0; i <this.numBuckets; i++) {
			if (this.buckets[i]) {
				for (let j = 0; j <this.buckets[i].length; j++) {
                    allValues.push(this.buckets[i][j]);
				}
			}
		}
		// Para finalmente retornarlo.
		return allValues;
    }

    delete(name) {
        // recibirá el nombre de un contacto y eliminará dicho contacto de la hashTable, en caso de no encontrar el name debe retornar null.
        let index =this.hash(name);

        // si ese bucket no existe, se retorna null.
        if (!this.buckets[index]){
            return null
        }

        // Si el bucket existe, se recorre el array en busca de un arreglo
        // que tenga la name especificada y se elimina
        for (let i = 0; i <this.buckets[index].length; i++) {
            // Si se encuentra ese bucket, se retorna su value correspondiente.
            if (this.buckets[index][i][0] === name) {
                this.buckets[index].splice(i, 1);
                return;
            }
        }

        //Si no se encuentra la name, se retorna null.
        return null;
    }
}

//EJEMPLO 1
//Input:

const contactList = new ContactList(10)
contactList.insert("Mr michi", "123-456-7890")

console.log(contactList.retrieveAll() ) //Output: [["Mr michi", "123-456-7890"]]


//EJEMPLO 2
//Input:
const contactList1 = new ContactList(10)
contactList1.insert("Mr michi", "123-456-7890")
console.log(contactList1.retrieveAll() )
console.log(contactList1.get("Mr michi")) //Output: "123-456-7890"



//EJEMPLO3
//Input:
const contactList2 = new ContactList(10)
contactList2.insert("Mr michi", "123-456-7890")
contactList2.delete("Mr michi")

//console.log(contactList2.retrieveAll() )
//console.log(contactList2.get("Mr Michi"))   //Output: null