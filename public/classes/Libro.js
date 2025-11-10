import { Product } from "./Product"

export class Libro extends Product{

    /**
     * @param {Number} id 
     * @param {String} tittle 
     * @param {Number} price 
     * @param {String} category 
     * @param {Number} stock 
     * @param {String} image 
     * @param {Boolean} status 
     * @param {Number} id_product
     * @param {String} author
     * @param {String} editorial
     * @param {String} genre
     */
    constructor(id, tittle, price, category, stock, image, status, id_product, author, editorial, genre){
        super(id, tittle, price, category, stock, image, status)
        this.id_product = id_product;
        this.author = author;
        this.editorial = editorial;
        this.genre = genre;
    }

    getIdProduct(){
        return this.id_product;
    }

    setIdProduct(id_product){
        this.id_product = id_product;
    }

    getAuthor(){
        return this.author;
    }

    setAuthor(author){
        this.author = author;
    }

    getEditorial(){
        return this.editorial;
    }

    setEditorial(editorial){
        this.editorial = editorial;
    }

    getGenre(){
        return this.genre;
    }

    setGenre(genre){
        this.genre = genre;
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
            Autor: ${this.author}, 
            Editorial: ${this.editorial}, 
            Genero: ${this.genre}
        `;
    }
}