const quotes = [
  {
    quotes:
      "서툴고 넘어지는 일이 많더라도 괜찮다면. 간혹 잘못된 길을 선택해서 다치고, 상처받더라도 스스로를 다독일 수 있다면. 잡아.",
    author: "Giselle Caudill",
  },
  {
    quotes: "그래도 나는 너를 포기하는 법을 모르겠어.",
    author: "Giselle Caudill",
  },
  {
    quotes: "계속해서 새로운 시작이 이어지는 것, 그게 영원일지도 몰라.",
    author: "Giselle Caudill",
  },
  {
    quotes: "…언제나 나만 뒤처지는 것 같아.",
    author: "Giselle Caudill",
  },
  {
    quotes: "잘 자, 나의 아기 불사조.",
    author: "Giselle Caudill",
  },
  {
    quotes:
      "…베니는 어떻게 생각하는데? 나는 기다리는 일 말고는 할 줄 모르는걸.",
    author: "Giselle Caudill",
  },
  {
    quotes:
      "내가 네게 뻗는 손은, 너에게 닿는 걸까? 내 염려와 걱정은 너에게 와 닿고 있는 거야?",
    author: "Giselle Caudill",
  },
  {
    quotes:
      "나는… 행복했어. 우리가 찾을 수 있는 최대한의 평범함이었다고 생각해.",
    author: "Giselle Caudill",
  },
  {
    quotes: "내게 행복을, 당신을 주세요, 벤자민 라이언.",
    author: "Giselle Caudill",
  },
  {
    quotes: "너는… 나한테 행복을 주는 사람이야.",
    author: "Giselle Caudill",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
