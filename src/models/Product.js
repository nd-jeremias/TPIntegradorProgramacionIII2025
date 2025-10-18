export class Product{

    constructor(id, name, price, category, stock, image, status) {
        this.id = id;
        this.name = name;
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
            Nombre: ${this.name}, 
            Precio: ${this.price}, 
            Categoria: ${this.category}, 
            Stock: ${this.stock}, 
            Imagen: ${this.image}, 
            Estado: ${((this.status) ? "Activo" : "Inactivo")}
        `;
    }
}