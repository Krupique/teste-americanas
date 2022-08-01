<h1>DESAFIO TÉCNICO - CIENTISTA DE DADOS JÚNIOR - AMERICANAS S.A.</h1>

Repositório contendo o teste de avaliação para a vaga de Cientista de Dados Jr. 

> A aplicação pode ser executada no servidor do Heroku: <a target="_blank" href="https://app-teste-americanas.herokuapp.com">app-teste-americanas</a>


<h2>INTRODUÇÃO</h2>

Este teste consiste em desenvolver um modelo de aprendizado de máquina capaz de classificar as amostras do conjunto de dados **dataset_cdjr.parquet.gzip**. Disponível em: <https://drive.google.com/file/d/1HXq9mczY-5OpFaXK3kk8zAgFEgEgF3jt/view?usp=sharing>

É um conjunto de dados pequeno de **466 entradas**, composto inicialmente por **16 features** (feature0, feature1, …, feature 15) e uma coluna target, que é a classe. A coluna target é zero indicando a não ocorrência do evento que desejamos prever e um quando há ocorrência do evento que desejamos prever.

<h2>ORGANIZAÇÃO DOS DIRETÓRIOS</h2>


>**`notebook/`**: Contém os arquivos com os jupyter-notebooks com todas as análises realizadas (análise exploratória, estatística é preditiva);<br/>
>`notebook/data/`: O dataset do projeto;<br/>
>`notebook/modelo/`: O modelo que foi exportar pelo jupyter-notebook;<br/>
>`notebook/Desafio Técnico - Cientista de Dados - Americanas SA.PDF`: Descrição do desafio;<br/>
>`notebook/00 - analise.ipynb`: Primeiro notebook desenvolvido. Contém a Análise exploratória dos dados;<br/>
>`notebook/01 - preparacao.ipynb`: Notebook contendo o pré-processamento dos dados, tratamento de outliers, modelagem, avaliação dos resultados e exportação do modelo.
<br/>

> **`webpp/`**: Contém os arquivos do webapp que foi desenvolvido. Arquivos HTML, CSS, Javascript. A integração com o modelo desenvolvido.<br/>
> `webapp/static/`: Arquivos de Script JS e arquivos de Estilo CSS. Jquery.js, Bootstrap.js, main.js;  <br/>
> `webapp/templates`: Arquivo index.html do site;<br/>
> `webapp/tools`: Classe que foi desenvolvida para realizar a integração entre o modelo de Machine Learning e a aplicação web;<br/>
> `webapp/main.py`: Arquivo principal para executar o website utilizando Flask;<br/>
> `webapp/requirements.txt`: Contém os pacotes necessários para instalar, caso deseje executar a aplicação em uma máquina local;<br/>
> `webapp/runtime.txt`: Versão Python utilizada;<br/>
> `webapp/Procfile`: Arquivo de configuração para o servidor Heroku;
<br/>

<h2>COMO EXECUTAR O PROJETO</h2>

O projeto pode ser executar acessando o link que foi hospedado: <a target="_blank" href="https://app-teste-americanas.herokuapp.com">app-teste-americanas</a>
> **Orientações de Uso**: Você tem duas opções para carregar os dados:
>  * A primeira é colar os dados diretamente no campo de texto;
>  * A segunda é carregar um arquivo .CSV diretamente da sua máquina;<br/><br/>
> Em ambos os casos é necessário que o arquivo tenha a seguinte estrutura:
> * A primeira linha precisar ser o nome das colunas: Exemplo: `feature0`, `feature1`, ..., `feature15`, `target`.
> * O arquivo precisa estar separado por `,` ou `;`<br/><br/>
> * Ao executar o projeto, ele vai exibir os resultados com as métricas de avaliação `Acurácia` e `F1-Score` e em seguida realizar o `download de um arquivo .csv` contendo as previsões.

  
<h2>COMO VISUALIZAR AS ANÁLISES</h2>

As análises realizadas, explicações de conceitos e metodologia utilizada para o desenvolvimento podem ser visualizadas no diretório(pasta) `notebook/`:
> **00 - analise.ipynb**: Contém a análise exploratória e estatística inicial do proejeto;<br/>
> **01 - preparacao.ipynb**: Contém o pré-processamento dos dados, tratamento de outliers, feature selection, modelagem, avaliação dos resultados e deploy do modelo;<br/><br/>
> **NOTA:** O Github não consegue exibir todas as tabelas e gráficos dos pacotes Python. Portanto, o ideal é utilizar alguma IDE para visualizar melhor todos os dados e análise completa. Por exemplo: `Jupyter-notebook`, `Jupyter-lab` ou `Visual studio code`. 

Sumário das análises:

**PARTE 1 - analise.ipynb**
> * INTRODUÇÃO
> * ANÁLISE EXPLORATÓRIA
> * ANÁLISE UNIVARIADA
> * ANÁLISE MULTIVARIADA

**PARTE 2 - preparacao.ipynb**
> * TRATAMENTO DE OUTLIERS BASEADO EM ESTATÍSTICA
>    * Z-Score
>    * Amplitude Interquartil
>
> * MÉTODOS DE DETECÇÃO DE OUTLIERS MULTIVARIADOS
> * MÉTODOS DE DETECÇÃO BASEADO EM CLUSTERS
> * FEATURE SELECTION
> * DIVISÃO EM TREINO E TESTE
> * ESCALA DOS DADOS
> * MODELAGEM BASE
>    * K Fold
>    * KNN
>    * Logistic Regression
>    * Random Forest
>    * SVM Classifier
>    * XGB Classifier
> * MODELAGEM AUTOMATIZADA
>    * Avaliando os resultados
> * EXPORTANDO O MODELO
> * CONSIDERAÇÕES SOBRE OS RESULTADOS OBTIDOS


