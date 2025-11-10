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
    constructor(id, tittle, price, image, stock, status, category) {
        this.id = id;
        this.tittle = tittle;
        this.price = price;
        this.image = image;
        this.stock = stock;
        this.status = status;
        this.category = category;
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

    toHTML(page) {
        const card = document.createElement("div");
        card.classList.add("card", "m-1");
        card.style.width = "18rem";

        const img = document.createElement("img");
        img.src = this.image;
        img.alt = this.tittle;
        img.classList.add("card-img-top");

        const body = document.createElement("div");
        body.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = this.tittle;

        const price = document.createElement("p");
        price.classList.add("card-text");
        price.textContent = `$${this.price}`;

        const btn = document.createElement("a");
        const deleteBtn = document.createElement('a');

        if( page == "admin" ){
            btn.href = "#";
            btn.classList.add("btn", "btn-secondary");
            btn.textContent = "Modificar Producto";
            btn.dataset.id = this.id; 
            deleteBtn.href = "#"
            deleteBtn.classList.add("btn", "btn-danger");
            deleteBtn.textContent = "Borrar Producto";
            deleteBtn.dataset.id = this.id; 
        }
        if( page == 'user') {
            btn.href = "#";
            btn.classList.add("btn", "btn-primary");
            btn.textContent = "Agregar al carrito";
            btn.dataset.id = this.id; 
        } 
        
        body.appendChild(title);
        body.appendChild(price);
        body.appendChild(btn);
        body.appendChild(deleteBtn)
        card.appendChild(img);
        card.appendChild(body);

        return card;
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