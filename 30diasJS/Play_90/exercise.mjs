import { Node } from "./node.mjs";

export class Playlist {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    addSong(song) {
        let newNode =new Node(song);

        if(!this.top){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    playSong() {
        // Si esta vacio lanzar error
        if(!this.top){
            throw new Error("No hay canciones");
        }else{
            // Si no esta vacio
            let current = this.top;
            // Si solo hay un elemento
            if(this.top === this.bottom){
                this.top = null;
                this.bottom = null;
                this.length--;
                return current.value;
            }
            this.top = this.top.next;
            this.length--;
            return current.value;
        }
    }

    getPlaylist() {
        //
        let current = this.top;
        let playlist = [];

        while(current){
            playlist.push(current.value);
            current = current.next;
        }

        return playlist;
    }
}



//Ejemplo 1:
//Input:
const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

playlist.playSong();    //Output: "Hotel California"
playlist.playSong();    //Output: "Stairway to Heaven"
console.log(playlist.playSong());    //Output: "Bohemian Rhapsody"
//console.log(playlist.playSong());    //Output: Error: No hay canciones en la lista


//Ejemplo 2:
//Input:
const playlist2 = new Playlist();

playlist2.addSong("Bohemian Rhapsody");
playlist2.addSong("Stairway to Heaven");
playlist2.addSong("Hotel California");

console.log(playlist2.getPlaylist());  //Output: ["Hotel California", "Stairway to Heaven", "Bohemian Rhapsody"]

