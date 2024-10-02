let cart = []; // Массив для хранения товаров в корзине
let products = []; // Массив для хранения данных о товарах

async function loadProducts() {
    try {
        const response = await fetch('products.json');
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных: ' + response.status);
        }
        products = await response.json();
        console.log('Загруженные товары:', products); // Логируем загруженные товары
    } catch (error) {
        console.error(error);
    }
}

// Функция для получения товара по ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Функция для добавления товара в корзину
function addToCart(id, button) {
    const product = getProductById(id);
    if (product) {
        const item = { 
            id: product.id, 
            name: product.name, 
            price: product.price, 
            imgSrc: product.image, 
            quantity: 1 
        };
        cart.push(item);
        updateCart();
        
        // Изменяем цвет кнопки после нажатия
        button.style.backgroundColor = '#4CAF50'; // Зеленый цвет при добавлении
        button.innerText = 'Добавлено'; // Изменяем текст кнопки

        // Оповещение о добавлении товара
        alert(`${product.name} добавлен в корзину!`); // Оповещение
    } else {
        console.log(`Товар с ID ${id} не найден.`);
    }
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = ''; // Очищаем контейнер

    let totalPrice = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');

        itemDiv.innerHTML = `
            <div class="item-info"> <!-- Контейнер для изображения и названия -->
                <img src="${item.imgSrc}" alt="${item.name}">
                <span>${item.name}</span>
            </div>
            <span>${item.id}</span>
            <span>${item.price} ₴</span>
            <button class="remove-button" onclick="removeFromCart(${item.id})">X</button>
        `;
        cartItemsDiv.appendChild(itemDiv);

        totalPrice += item.price; // Считаем общую стоимость
    });

    document.getElementById('totalPrice').innerText = totalPrice + ' ₴';
}


// Функция для удаления товара
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id); // Удаляем товар по ID
    updateCart(); // Обновляем корзину
}



// Открытие модального окна
document.querySelector('.cart-button').addEventListener('click', function() {
    const modal = document.getElementById('cartModal');
    modal.style.display = "block";
});

// Закрытие модального окна
document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('cartModal');
    modal.style.display = "none";
});

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('cartModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Загрузка данных о товарах при инициализации
loadProducts();
