// Открытие модального окна с информацией
document.querySelectorAll('.product-card').forEach(function(card) {
    card.addEventListener('click', function() {
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
    });
});

// Закрытие модального окна по кнопке "X"
document.querySelector('.close').addEventListener('click', function() {
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
