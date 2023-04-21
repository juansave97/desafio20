const socket = io();
const tbodyProducts = document.getElementById(`tbodyProducts`);


//Pedido de productos desde el cliente

socket.emit(`sendProduct`);

//Servidor --> Cliente: envia todos los productos
socket.on(`allProducts`, data => {

    data.forEach(product => {
        product = `
            <tr>
                <td>
                    ${product.title}
                </td>
                <td>
                    ${product.price} 
                </td>
                <td>
                    <img src="${product.thumbnail}" width="60" height="60">
                </td>
                <td>
                    ${product.category}
                </td>
            </tr>
        `;
        tbodyProducts.innerHTML += product;
    });
});