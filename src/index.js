"use strict";

const BOOKS = {
  fantazy: [
    {
      id: 1,
      title: "Володар перснів: Братерство Персня",
      author: "Джон Рональд Руел Толкін",
      year: 1954,
    },
    {
      id: 2,
      title: "Гаррі Поттер і філософський камінь",
      author: "Джоан Роулінг",
      year: 1997,
    },
    {
      id: 3,
      title: "Відьмак: Останнє бажання",
      author: "Анджей Сапковський",
      year: 1993,
    },
    {
      id: 4,
      title: "Гра престолів",
      author: "Джордж Реймонд Річард Мартін",
      year: 1996,
    },
    {
      id: 5,
      title: "Хроніки Нарнії: Лев, Біла Відьма та шафа",
      author: "Клайв Стейплз Льюїс",
      year: 1950,
    },
  ],
  scienceFiction: [
    {
      id: 6,
      title: "Дюна",
      author: "Френк Герберт",
      year: 1965,
    },
    {
      id: 7,
      title: "1984",
      author: "Джордж Орвелл",
      year: 1949,
    },
    {
      id: 8,
      title: "Фундація",
      author: "Айзек Азімов",
      year: 1951,
    },
    {
      id: 9,
      title: "451 градус за Фаренгейтом",
      author: "Рей Бредбері",
      year: 1953,
    },
    {
      id: 10,
      title: "Соляріс",
      author: "Станіслав Лем",
      year: 1961,
    },
  ],
};

const {fantazy:[,,thirdBook], scienceFiction:[,,,{author:writer}]} = BOOKS

console.log(thirdBook)
console.log(writer)