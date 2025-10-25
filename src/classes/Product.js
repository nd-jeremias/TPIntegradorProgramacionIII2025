export class Product{

    /**
     * @param {Number} id 
     * @param {String} tittle 
     * @param {Number} price 
     * @param {String} category 
     * @param {Number} stock 
     * @param {String} image 
     * @param {Boolean} status 
     */
    constructor(id, tittle, price, category, stock, image, status) {
        this.id = id;
        this.tittle = tittle;
        this.price = price;
        this.category = category;
        this.stock = stock;
        this.image = image;
        this.status = status;
    }

    getId() {
        return this.id
    }

    setId(nuevoId) {
        this.id = nuevoId;
    }

    getPrice(){
        return this.price;
    }

    setPrice(newPrice){
        this.price = newPrice;
    }

    getCategory() {
        return this.category
    }

    setCategory(newCategory) {
        this.category = newCategory;
    }
    
    getStock() {
        return this.stock;
    }

    setStock(newStock) {
        this.stock = newStock;
    }
    
    getImage() {
        return this.image;
    }

    setImage(newImage) {
        this.image = newImage;
    }
    
    getStatus() {
        return this.status;
    }

    setStatus() {
        this.status = !this.status;
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
        `;
    }
}