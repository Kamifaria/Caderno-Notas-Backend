# Projeto de Caderno de Notas com NodeJs
Este é um projeto de caderno de notas desenvolvido em Node Backend. Ele permite que o usuário crie, visualize, edite e exclua suas anotações de maneira simples e intuitiva.

## Instalação

1.Certifique-se de ter o Node.js instalado em sua máquina.

2.Clone este repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```
3.Navegue até o diretório do projeto:
```bash
cd nome-do-repositorio
```
4.Instale as dependências:
```bash
npm install
```
5.Inicie a aplicação:
```bash
npm start
```

## Funcionalidades

Cadastro de Notas: Adicione novas notas inserindo um título e uma descrição.
Prioridades: Marque notas como prioritárias para destacá-las.
Filtragem por Prioridade: Filtre suas notas por prioridade (alta, média, baixa) ou visualize todas.
Exclusão de Notas: Remova notas que não são mais necessárias.

## Estrutura do Projeto
O projeto é estruturado em componentes React para facilitar a manutenção e escalabilidade. Alguns dos principais componentes incluem:

App: O componente principal que gerencia o estado global e renderiza os componentes filhos.
Notes: Componente responsável pela exibição de cada nota, permitindo a exclusão e a alteração de prioridade.
RadioButton: Componente para seleção de prioridade.

## Uso
Cadastro de Notas:

Insira um título e uma descrição no formulário à esquerda.
Clique no botão "Salvar" para adicionar a nota.
Prioridades:

Utilize os botões de rádio para selecionar a prioridade desejada.
Filtragem por Prioridade:

Escolha entre "Alta", "Média", "Baixa" ou "Todas" para filtrar as notas.
Exclusão de Notas:

Clique no ícone de lixeira para excluir uma nota.

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Node JS
- JavaScript
- MongoDB
- Git e Github

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas e enviar pull requests para melhorar este projeto.

## Licença
Este projeto está licenciado sob a MIT License.