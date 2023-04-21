const socket = io();


const nameForm = document.getElementById(`nameForm`);
const priceForm = document.getElementById(`priceForm`);
const imgForm = document.getElementById(`imgForm`);
const categoryForm = document.getElementById(`categoryForm`);
const addProduct = document.getElementById(`sendMessage`);

//Cliente --> Servidor: envia nuevo producto
addProduct.addEventListener('click', () => {
    const product = {
        name: nameForm.value,
        price: priceForm.value,
        img: imgForm.value,
        category: categoryForm.value
    }

    nameForm.value = "";
    priceForm.value = "";
    imgForm.value = "";
    categoryForm.value = ""

    console.log('product', product)

    socket.emit('addProducts', product);
});


//Servidor --> Cliente: Envio los datos para agregar a la tabla.
socket.on(`refreshTable`, data => {
  window.location.href = '/productos'
});


