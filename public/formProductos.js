const socket = io();


const nameForm = document.getElementById(`nameForm`);
const priceForm = document.getElementById(`priceForm`);
const imgForm = document.getElementById(`imgForm`);
const categoryForm = document.getElementById(`categoryForm`);
const descriptionForm = document.getElementById(`descriptionForm`);
const stockForm = document.getElementById(`stockForm`);
const codeForm = document.getElementById(`codeForm`);

const addProduct = document.getElementById(`sendMessage`);


//Cliente --> Servidor: envia nuevo producto
addProduct.addEventListener('click', () => {
    const product = {
        nombre: nameForm.value,
        descripcion: descriptionForm.value,
        codigo: codeForm.value,
        thumbnail: imgForm.value,
        precio: priceForm.value,
        stock: stockForm.value,
        category: categoryForm.value,
    }

    nameForm.value = "";
    priceForm.value = "";
    imgForm.value = "";
    categoryForm.value = ""
    descriptionForm.value = ""
    stockForm.value = ""
    codeForm.value = ""

    console.log('product', product)

    socket.emit('addProducts', product);
});


//Servidor --> Cliente: Envio los datos para agregar a la tabla.
socket.on(`refreshTable`, data => {
  window.location.href = '/productos'
});


