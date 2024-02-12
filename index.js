const perguntas = [
    {
      pergunta: "O que significa 'JS' em JavaScript?",
      respostas: [
        "Just Style",
        "Java Source",
        "JavaScript",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método JavaScript é usado para remover o último elemento de um array e retorná-lo?",
      respostas: [
        "pop()",
        "shift()",
        "splice()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função JavaScript é usada para converter uma string em um número inteiro?",
      respostas: [
        "parseInt()",
        "stringToInt()",
        "toInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "=",
        "==",
        "===",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método JavaScript é usado para ordenar elementos de um array?",
      respostas: [
        "sort()",
        "order()",
        "arrange()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
      respostas: [
        "'32'",
        "5",
        "TypeError",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão 4 + 3 + '7' em JavaScript?",
      respostas: [
        "14",
        "'47'",
        "7",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método JavaScript é usado para adicionar novos elementos ao final de um array e retornar o novo comprimento do array?",
      respostas: [
        "push()",
        "unshift()",
        "concat()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do código: console.log(typeof 42)?",
      respostas: [
        "'number'",
        "number",
        "TypeError",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para executar uma função repetidamente em intervalos especificados?",
      respostas: [
        "setTimeout()",
        "setInterval()",
        "executeInterval()",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta =  event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      
     
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }