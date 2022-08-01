import pandas as pd
import joblib
import numpy as np
from sklearn.model_selection import GridSearchCV
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, Normalizer, StandardScaler, RobustScaler, QuantileTransformer, PowerTransformer, MinMaxScaler
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, f1_score


#Criação da classe
class Preditor:

    def __init__(self, lista_dados, atributoTarget, metricaAvaliacao):
        self.lista_dados = self._transformarDados(lista_dados)
        self.atributoTarget = atributoTarget
        self.metricaAvaliacao = metricaAvaliacao



    def _transformarDados(self, lista_dados):
        df = pd.DataFrame(lista_dados[1:], columns=lista_dados[0])

        df.dropna(inplace=True)
        self.target = df['target'].astype(float).values

        df.drop(columns=['target', 'feature6', 'feature7', 'feature9', 'feature12', 'feature14'], inplace=True)

        for column in df:
            df[column] = df[column].astype(float)

        return df.values
        

    def predict(self):
        model = joblib.load('notebook/modelo/modelo-20220731-090438.pkl')
        
        previsoes = model.predict(self.lista_dados)
        
        score = 0
        if self.atributoTarget == 'yes':
            #Faz calculo de validação
            if self.metricaAvaliacao == 'acc':
                score = accuracy_score(self.target, previsoes)
            elif self.metricaAvaliacao == 'f1':
                score = f1_score(self.target, previsoes)
        
        
        return previsoes, score