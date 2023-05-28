const factura = {
    id: 1,
    descripcion: 'Factura de ejemplo',
    fecha: new Date("2020-01-01"),
    cliente: {
        id: 1,
        nombre: 'Juan Perez'
    },
    items: [
        {
            id: 1,
            descripcion: 'Arroz',
            precio: 123,
            cantidad: 2
        },
        {
            id: 2,
            descripcion: 'Leche',
            precio: 200,
            cantidad: 1
        }
    ],
    total: function () {
        let total = 0;
        this.items.forEach(item =>
            total += item.precio * item.cantidad);
        return total;
    }
};

factura.cliente.nombre = 'Pedro Perez';

console.log(`El total de la factura es: ${factura.total()}€`);