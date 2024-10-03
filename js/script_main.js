// Открытие модального окна с информацией
document.querySelectorAll('.product-card').forEach(function(card) {
    card.addEventListener('click', function(event) {
        // Проверяем, был ли клик на кнопке "Добавить в корзину" или на элементе с классом "product__quantity"
        const isBuyButton = event.target.closest('.buy-button');
        const isQuantityButton = event.target.closest('.product__quantity');
        
        // Если клик был на кнопке "Добавить в корзину" или на элементе "product__quantity", не открываем модальное окно
        if (!isBuyButton && !isQuantityButton) {
            const productName = card.getAttribute('data-name');
            const productId = card.getAttribute('data-id');
            const productPrice = card.getAttribute('data-price');
            const productImage = card.getAttribute('data-image');
            const productDescription = card.getAttribute('data-description');
            
            // Заполняем модальное окно данными
            document.getElementById('modalProductName').innerText = productName;
            document.getElementById('modalProductDescription').innerText = productDescription;
            document.getElementById('modalProductId').innerText = `ID: ${productId}`;
            document.getElementById('modalProductPrice').innerText = `Цена: ${productPrice} ₴`;
            document.getElementById('modalProductImage').src = productImage;

            // Показываем модальное окно
            const modal = document.getElementById('productModal');
            modal.classList.add('show');
        }
    });
});

// Закрытие модального окна по кнопке "X"
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('productModal').classList.remove('show');
});
// Закрытие модального окна по кнопке "X"
document.querySelector('.modal-back').addEventListener('click', function() {
    document.getElementById('productModal').classList.remove('show');
});

// Закрытие модального окна при нажатии на затемненный фон
document.getElementById('productModal').addEventListener('click', function(event) {
    if (event.target === this) {
        this.classList.remove('show');
    }
});

// Закрытие модального окна по клавише "Escape"
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('productModal').classList.remove('show');
    }
});


// Получаем элемент заголовка
const header = document.getElementById('header');

// Функция для отслеживания прокрутки
document.addEventListener('DOMContentLoaded', function() {
    // Получаем элемент заголовка
    const header = document.getElementById('header');
    // Получаем целевой элемент
    const targetElement = document.getElementById('hero');

    // Проверяем, найдены ли элементы
    if (header && targetElement) {
        // Функция для отслеживания прокрутки
        window.addEventListener('scroll', function() {
            // Получаем положение целевого элемента
            const targetPosition = targetElement.getBoundingClientRect();

            // Проверяем, если целевой элемент полностью выше видимой области
            if (targetPosition.bottom < 0) {
                header.classList.add('show'); // Показываем заголовок
            } else {
                header.classList.remove('show'); // Прячем заголовок
            }
        });
    } else {
        console.error("Элементы с id='header' или id='target-element' не найдены");
    }
});
