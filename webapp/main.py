from flask import Flask, request, render_template, jsonify
import json

from tools.preditor import Preditor



# Cria a app
app = Flask(__name__)


# Página index
@app.route('/',  methods=["POST", "GET"])
def index():

    if request.method == 'POST':
        atributoTarget = json.loads(request.form.get('atributoTarget'))    
        #metricaAvaliacao = json.loads(request.form.get('metricaAvaliacao'))    
        listaDados = json.loads(request.form.get('listaDados'))    

        preditor = Preditor(listaDados, atributoTarget)
        previsoes, score_acc, score_f1 = preditor.predict()

        previsoes = json.dumps(previsoes.tolist())
        score_acc = round(score_acc * 100, 2)
        score_f1 = round(score_f1 * 100, 2)

        return jsonify(result={'atributoTarget': atributoTarget, 'score_f1': score_f1, 'score_acc': score_acc, 'previsoes': previsoes})


    return render_template('index.html')


@app.route("/upload_file",methods=["POST","GET"])
def uploadFile():
    f = request.files['file']

    conteudo = f.read().decode('utf-8')

    listaResultante = formatarLista(conteudo)

    return jsonify(result={'listaTable': listaResultante})


def formatarLista(lista):
    listaResultante = []
    
    listaRow = lista.split('\n')

    for element in listaRow:
        listaElements = element.replace(';', ',').replace('\r', '').split(',')
        listaResultante.append(listaElements)

    
    return listaResultante



if __name__ == '__main__':
    app.run(debug=True)