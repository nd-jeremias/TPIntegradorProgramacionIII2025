import { Product } from "./Product";

export class Disco extends Product{

    /**
     * @param {Number} id 
     * @param {String} tittle 
     * @param {Number} price 
     * @param {String} category 
     * @param {Number} stock 
     * @param {String} image 
     * @param {Boolean} status 
     * @param {Number} id_product
     * @param {String} artist
     * @param {String} genre
     * @param {String} year
     */
    constructor(id, tittle, price, category, stock, image, status, id_product, artist, genre, year){
        super(id, tittle, price, category, stock, image, status)
        this.id_product = id_product;
        this.artist = artist;
        this.genre = genre;
        this.year = year;
    }


    getArtist(){
        return this.artist;
    }
    
    setArtist(newArtist){
        this.artist = newArtist;
    }

    getGenre(){
        return this.genre
    }
    
    setGenre(newGenre){
        this.genre = newGenre;
    }

    getYear(){
        return this.year;
    }
    
    setYear(newYear){
        this.year = newYear;
    }
    
    toString() {
        return `
            ID: ${this.id}, 
            Nombre: ${this.tittle}, 
            Precio: ${this.price}, 
            Categoria: ${this.category}, 
            Stock: ${this.stock}, 
            Imagen: ${this.image}, 
            Estado: ${((this.status) ? "Activo" : "Inactivo")}
            Id Producto: ${this.id_product}, 
            Interprete: ${this.artist}, 
            Genero: ${this.genre}, 
            Año: ${this.year}
        `;
    }
}