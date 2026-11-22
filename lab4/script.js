class Reader {
    constructor(name, email, agreement) {
        this.name = name;
        this.email = email;
        this.agreement = agreement;
    }

    printInfo() {
        console.log(`Читатель библиотеки
        Имя: ${this.name}
        Почта: ${this.email}
        Согласие на обработку данных: ${this.agreement ? 'Да' : 'Нет'}`);
    }
}

const form = document.getElementById('reader-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('reader-name').value.trim();
    const email = document.getElementById('reader-email').value.trim();
    const agreement = document.getElementById('reader-agreement').checked;

    const reader = new Reader(name, email, agreement);
    reader.printInfo();

    document.getElementById('form-message').textContent =
        'Объект читателя создан. Данные выведены в консоль браузера (F12 → Console).';
});
