import { Product } from "../models/Product";
import { CrudImplementation, deleteProduct } from "../dao/CrudImplementation"

class ProductService {

    createProduct(newProduct) {
        
        CrudImplementation.createProduct(newProduct);

    }

    deleteProduct(id) {

        CrudImplementation.deleteProduct(id);

    }

    modifyProduct(product) {

        CrudImplementation.modifyProduct(product);

    }

    getProduct() {

        CrudImplementation.getProduct();
    }
    
}