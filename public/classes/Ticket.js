export class Ticket{

    constructor(id, cliente, total, fecha, detalle) {
        this.id = id,
        this.cliente = cliente,
        this.total = total,
        this.fecha = fecha,
        this.detalle = detalle
    }

    getId() {
        return this.id
    }

    setId(nuevoId) {
        this.id = nuevoId;
    }

    getCliente(){
        return this.cliente;
    }

    setCliente(newCliente){
        this.cliente = newCliente;
    }

    getDetalle(){
        return this.detalle;
    }

    setDetalle(newDetalle){
        this.detalle = newDetalle;
    }

    getTotal(){
        return this.total;
    }

    setTotal(newTotal){
        this.total = newTotal;
    }

    getFecha(){
        return this.fecha;
    }

    setFecha(newFecha){
        this.fecha = newFecha;
    }

    toString() {
        return `
            ID: ${this.id}, 
            Cliente: ${this.cliente}, 
            Total: ${this.total}, 
            Fecha: ${this.fecha}, 
            Detalle: ${this.detalle}, 
        `;
    }

    toHTML() {
        const fechaFormateada = new Date(this.fecha).toLocaleString('es-AR', {
            dateStyle: 'short',
            timeStyle: 'short'
        });
    
        const filasDetalle = this.detalle.map(item => `
            <tr>
                <td>${item.producto.titulo.replace(/_/g, ' ')}</td>
                <td class="text-center">${item.cantidad}</td>
                <td class="text-end">$${item.precio_unitario.toFixed(2)}</td>
                <td class="text-end">$${(item.cantidad * item.precio_unitario).toFixed(2)}</td>
            </tr>
        `).join('');
    
        return `
            <div class="container mt-4 mb-5" style="max-width: 700px;">
                <div class="card shadow-sm">
                    <div class="card-header bg-dark text-white text-center">
                        <h4 class="mb-0">Ticket de Compra</h4>
                    </div>
    
                    <div class="card-body">
                        <div class="mb-3">
                            <p><strong>ID Venta:</strong> ${this.id}</p>
                            <p><strong>Cliente:</strong> ${this.cliente}</p>
                            <p><strong>Fecha:</strong> ${fechaFormateada}</p>
                        </div>
    
                        <h5 class="mt-4">Detalle de la compra</h5>
    
                        <table class="table table-striped mt-2">
                            <thead class="table-dark">
                                <tr>
                                    <th>Producto</th>
                                    <th class="text-center">Cant.</th>
                                    <th class="text-end">P. Unitario</th>
                                    <th class="text-end">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${filasDetalle}
                            </tbody>
                        </table>
    
                        <div class="text-end mt-4">
                            <h4>Total: <span class="badge bg-success">$${this.total.toFixed(2)}</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
}