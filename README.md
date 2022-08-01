<h1>DESAFIO TÉCNICO - CIENTISTA DE DADOS JÚNIOR - AMERICANAS S.A.</h1>

Repositório contendo o teste de avaliação para a vaga de Cientista de Dados Jr. 

> A aplicação pode ser executada no servidor do Heroku: <a target="_blank" href="https://app-teste-americanas.herokuapp.com">app-teste-americanas</a>


<h2>INTRODUÇÃO</h2>

Este teste consiste em desenvolver um modelo de aprendizado de máquina capaz de classificar as amostras do conjunto de dados **dataset_cdjr.parquet.gzip**. Disponível em: <https://drive.google.com/file/d/1HXq9mczY-5OpFaXK3kk8zAgFEgEgF3jt/view?usp=sharing>

É um conjunto de dados pequeno de **466 entradas**, composto inicialmente por **16 features** (feature0, feature1, …, feature 15) e uma coluna target, que é a classe. A coluna target é zero indicando a não ocorrência do evento que desejamos prever e um quando há ocorrência do evento que desejamos prever.

<h2>ORGANIZAÇÃO DOS DIRETÓRIOS</h2>
* `**notebook/**: Contém os arquivos com os jupyter-notebooks com todas as análises realizadas (análise exploratória, estatística é preditiva);
* `notebook/data/`: O dataset do projeto;
* `notebook/modelo/`: O modelo que foi exportar pelo jupyter-notebook;
* `notebook/Desafio Técnico - Cientista de Dados - Americanas SA.PDF`: Descrição do desafio;
* `notebook/00 - analise.ipynb`: Primeiro notebook desenvolvido. Contém a Análise exploratória dos dados;
* `notebook/01 - preparacao.ipynb`: Notebook contendo o pré-processamento dos dados, tratamento de outliers, modelagem, avaliação dos resultados e exportação do modelo.
<br/><br/>

* `**webpp/**`: Contém os arquivos do webapp que foi desenvolvido. Arquivos HTML, CSS, Javascript. A integração com o modelo desenvolvido.
* `webapp/static/`: Arquivos de Script JS e arquivos de Estilo CSS. Jquery.js, Bootstrap.js, main.js  
* `webapp/templates`: Arquivo index.html do site;
* `webapp/tools`: Classe que foi desenvolvida para realizar a integração entre o modelo de Machine Learning e a aplicação web;
* `webapp/main.py`: Arquivo principal para executar o website utilizando Flask;
* `webapp/requirements.txt`: Contém os pacotes necessários para instalar, caso deseje executar a aplicação em uma máquina local;
* `webapp/runtime.txt`: Versão Python utilizada;
* `webapp/Procfile`: Arquivo de configuração para o servidor Heroku;
<br/><br/>

<h2>COMO EXECUTAR O PROJETO</h2>
O projeto pode ser executar acessando o link que foi hospedado: <a target="_blank" href="https://app-teste-americanas.herokuapp.com">app-teste-americanas</a>


