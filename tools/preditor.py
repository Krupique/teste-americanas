import pandas as pd
import joblib
import numpy as np
from sklearn.model_selection import GridSearchCV
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, RobustScaler, QuantileTransformer, PowerTransformer, MinMaxScaler
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score, f1_score


#Criação da classe
class Preditor:

    def __init__(self, lista_dados, atributoTarget):
        self.lista_dados = self._transformarDados(lista_dados)
        self.atributoTarget = atributoTarget


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
        
        score_acc = 0
        score_f1 = 0
        if self.atributoTarget == 'yes':
            score_acc = accuracy_score(self.target, previsoes)
            score_f1 = f1_score(self.target, previsoes)
        
        return previsoes, score_acc, score_f1