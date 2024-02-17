# Biblioteca_API
# API de Filmes

## Author
[Everton Sousa Oliveira]

## Descrição e Objetivo do Projeto
Este sistema é uma interface de programação de aplicativos (API) desenvolvida para facilitar o controle de dados relacionados a livros. Com esta ferramenta, os usuários podem realizar operações como adicionar, modificar, remover e consultar informações sobre diferentes livros, tais como título, descrição e autor.

## Tecnologias Utilizadas
- Node.js
- Express.js
- MongoDB (com Mongoose)
- Render

## URL API: 

## Endpoints

### [POST] /book

Descrição: Cadastra um novo livro.

Body:
```json
{
	"title": "Animal Farm",
	"author": "George Orwell",
	"description": "O livro narra uma história de corrupção e traição e recorre a figuras de animais para retratar as fraquezas humanas e demolir o paraíso comunista proposto pela União Soviética na época de Stalin. A revolta dos animais da quinta contra os humanos é liderada pelos porcos Bola-de-Neve (Snowball) e Napoleão (Napoleon). Os animais tentam criar uma sociedade utópica, porém Napoleão, seduzido pelo poder, afasta Bola-de-Neve e estabelece uma ditadura tão corrupta quanto a sociedade de humanos.",
}
```

Resposta:
```json
{
	"title": "Animal Farm",
	"author": "George Orwell",
	"description": "O livro narra uma história de corrupção e traição e recorre a figuras de animais para retratar as fraquezas humanas e demolir o paraíso comunista proposto pela União Soviética na época de Stalin. A revolta dos animais da quinta contra os humanos é liderada pelos porcos Bola-de-Neve (Snowball) e Napoleão (Napoleon). Os animais tentam criar uma sociedade utópica, porém Napoleão, seduzido pelo poder, afasta Bola-de-Neve e estabelece uma ditadura tão corrupta quanto a sociedade de humanos.",
	"_id": "65d021926db75c2b58c9f5ce",
	"__v": 0
}
```

### [GET] /films

Descrição: Retorna todos os livros cadastrados.

Resposta:
```json
[
	{
		"_id": "65cfe9cd566de49945efac6d",
		"title": "Keep the Aspidistra Flying",
		"author": "George Orwell",
		"description": "O título refere-se à aspidistra, flor que, segundo Gordon, todo o inglês respeitável, que possua uma boa casa, uma família e ao menos um pouco de dinheiro, e todo inglês não respeitável e pobre mas que deseja, por assim dizer, entrar na linha e assim tornar-se, possui e rega todos os dias.",
		"__v": 0
	},
	{
		"_id": "65d021926db75c2b58c9f5ce",
		"title": "Animal Farm",
		"author": "George Orwell",
		"description": "O livro narra uma história de corrupção e traição e recorre a figuras de animais para retratar as fraquezas humanas e demolir o paraíso comunista proposto pela União Soviética na época de Stalin. A revolta dos animais da quinta contra os humanos é liderada pelos porcos Bola-de-Neve (Snowball) e Napoleão (Napoleon). Os animais tentam criar uma sociedade utópica, porém Napoleão, seduzido pelo poder, afasta Bola-de-Neve e estabelece uma ditadura tão corrupta quanto a sociedade de humanos.",
		"__v": 0
	},
	{
		"_id": "65d0db2d1cf007b12722c127",
		"title": "Down and Out in Paris and London",
		"author": "George Orwell",
		"description": "Down and Out in Paris and London (Brasil: Na Pior em Paris e Londres / Portugal: Na Penúria em Paris e Londres), é um livro de George Orwell, publicado em 1933. Foi marcado por ser um período de penúria e total dificuldade para Orwell, e durante este tempo, constrói muitas de suas crenças. No final da década de 1920, quando já estava decidido a tornar-se escritor, Eric Arthur Blair viveu uma experiência bastante radical: submeteu-se à extrema pobreza. Mesmo sem o intuito de narrá-la depois. Teve empregos de baixo nível, passou fome e chegou a conviver com mendigos, morar na rua e, por fim, foi embora de Londres. Desprezado por muitas editoras, o livro só foi lançado em 1933. Foi nesse livro que ele usou pela primeira vez o pseudônimo de George Orwell, que o consagrou um dos maiores escritores do século XX.",
		"__v": 0
	}
]
```

### [GET] /films/{id}

Descrição: Retorna um livro de acordo com ID especificado.

Resposta:
```json
{
	"_id": "65d021926db75c2b58c9f5ce",
	"title": "Animal Farm",
	"author": "George Orwell",
	"description": "O livro narra uma história de corrupção e traição e recorre a figuras de animais para retratar as fraquezas humanas e demolir o paraíso comunista proposto pela União Soviética na época de Stalin. A revolta dos animais da quinta contra os humanos é liderada pelos porcos Bola-de-Neve (Snowball) e Napoleão (Napoleon). Os animais tentam criar uma sociedade utópica, porém Napoleão, seduzido pelo poder, afasta Bola-de-Neve e estabelece uma ditadura tão corrupta quanto a sociedade de humanos.",
	"__v": 0
}

```

### [PUT] /film/{id}

Descrição: Atualiza dados de um livro de acordo com ID especificado.

Body:
```json
{
	"description": "Um dos livros mais lidos do mundo",

}
```

Resposta:
```json
{
	"_id": "65d021926db75c2b58c9f5ce",
	"title": "Animal Farm",
	"author": "George Orwell",
	"description": "Um dos livros mais lidos do mundo",
	"__v": 0
}
```

### [DELETE] /film/{id}

Descrição: Exclui um livro de acordo com ID especificado.

Resposta:
```json
{
	"_id": "65d0db2d1cf007b12722c127",
	"title": "Down and Out in Paris and London",
	"author": "George Orwell",
	"description": "Down and Out in Paris and London (Brasil: Na Pior em Paris e Londres / Portugal: Na Penúria em Paris e Londres), é um livro de George Orwell, publicado em 1933. Foi marcado por ser um período de penúria e total dificuldade para Orwell, e durante este tempo, constrói muitas de suas crenças. No final da década de 1920, quando já estava decidido a tornar-se escritor, Eric Arthur Blair viveu uma experiência bastante radical: submeteu-se à extrema pobreza. Mesmo sem o intuito de narrá-la depois. Teve empregos de baixo nível, passou fome e chegou a conviver com mendigos, morar na rua e, por fim, foi embora de Londres. Desprezado por muitas editoras, o livro só foi lançado em 1933. Foi nesse livro que ele usou pela primeira vez o pseudônimo de George Orwell, que o consagrou um dos maiores escritores do século XX.",
	"__v": 0
}
```

## Créditos

### https://mongoosejs.com/docs/guide.html
### https://youtu.be/zaWFnHagbrM?si=l5rN66Lmo2yWmO7L
