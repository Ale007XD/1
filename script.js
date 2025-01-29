const words = [
    { vietnamese: "Xin chào", russian: "Привет" },
    { vietnamese: "Cảm ơn", russian: "Спасибо" },
    { vietnamese: "Tạm biệt", russian: "Пока" },
    { vietnamese: "Vâng", russian: "Да (вежливо)" },
    { vietnamese: "Không", russian: "Нет" },
    { vietnamese: "Tôi", russian: "Я" },
    { vietnamese: "Bạn", russian: "Ты" },
    { vietnamese: "Anh", russian: "Он/Вы (к старшему)" },
    { vietnamese: "Cô", russian: "Она/Вы (к старшей)" },
    { vietnamese: "Chúng tôi", russian: "Мы" },
    { vietnamese: "Các bạn", russian: "Вы (множественное число)" },
    { vietnamese: "Họ", russian: "Они" },
    { vietnamese: "Đây là", russian: "Это есть" },
    { vietnamese: "Cái này", russian: "Это (вещь)" },
    { vietnamese: "Ở đâu?", russian: "Где?" },
    { vietnamese: "Khi nào?", russian: "Когда?" },
    { vietnamese: "Như thế nào?", russian: "Как?" },
    { vietnamese: "Bao nhiêu?", russian: "Сколько?" },
    { vietnamese: "Một", russian: "Один" },
    { vietnamese: "Hai", russian: "Два" },
    { vietnamese: "Ba", russian: "Три" },
    { vietnamese: "Bốn", russian: "Четыре" },
    { vietnamese: "Năm", russian: "Пять" },
    { vietnamese: "Sáu", russian: "Шесть" },
    { vietnamese: "Bảy", russian: "Семь" },
    { vietnamese: "Tám", russian: "Восемь" },
    { vietnamese: "Chín", russian: "Девять" },
    { vietnamese: "Mười", russian: "Десять" },
    { vietnamese: "Trăm", russian: "Сто" },
    { vietnamese: "Nghìn", russian: "Тысяча" },
    { vietnamese: "Ngày", russian: "День" },
    { vietnamese: "Đêm", russian: "Ночь" },
    { vietnamese: "Hôm nay", russian: "Сегодня" },
    { vietnamese: "Ngày mai", russian: "Завтра" },
    { vietnamese: "Hôm qua", russian: "Вчера" },
    { vietnamese: "Ăn", russian: "Есть (кушать)" },
    { vietnamese: "Uống", russian: "Пить" },
    { vietnamese: "Đi", russian: "Идти" },
    { vietnamese: "Đến", russian: "Приходить" },
    { vietnamese: "Nói", russian: "Говорить" },
    { vietnamese: "Nghe", russian: "Слушать" },
    { vietnamese: "Xem", russian: "Смотреть" },
    { vietnamese: "Đọc", russian: "Читать" },
    { vietnamese: "Viết", russian: "Писать" },
    { vietnamese: "Học", russian: "Учиться" },
    { vietnamese: "Chơi", russian: "Играть" },
    { vietnamese: "Yêu", russian: "Любить" },
    { vietnamese: "Chào buổi sáng", russian: "Доброе утро" },
    { vietnamese: "Chào buổi tối", russian: "Добрый вечер" }
];

const cardsDiv = document.getElementById("cards");

words.forEach(word => {
    const card = document.createElement("div");
    card.className = "card";

    const cardInner = document.createElement("div");
    cardInner.className = "card-inner";

    const cardFront = document.createElement("div");
    cardFront.className = "card-front";
    cardFront.innerHTML = `<h3>${word.vietnamese}</h3>`;

    const cardBack = document.createElement("div");
    cardBack.className = "card-back";
    cardBack.innerHTML = `
        <p>${word.russian}</p>
        <button onclick="speak('${word.vietnamese}', 'vi-VN')">Произношение</button>
    `;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    cardsDiv.appendChild(card);

    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});

function speak(text, lang = 'vi-VN') {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
}
