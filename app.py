from flask import Flask, render_template, request, jsonify
import pyBanco

app = Flask(__name__)

@app.route('/')
def pagina_inicial():
    return render_template('Dashboard.html')

@app.route('/desperdicio', methods=['POST', 'GET'])
def desperdicio():
    if request.method == 'POST':
        informacao = request.get_json()
        segunda = informacao['segunda']
        terca = informacao['terca']
        quarta = informacao['quarta']
        quinta = informacao['quinta']
        sexta = informacao['sexta']
        data = informacao['data']
        pyBanco.insert(segunda, data)
    else: 
        return render_template('desperdicio.html')

@app.route('/cardapio', methods=['POST', 'GET'])
def cardapio():
    if request.method == 'POST':
        informacao = request.get_json()
        imgCode = informacao['imgSource']
        pyBanco.insert_img(imgCode)
    else:
        return render_template('Set_Cardapio.html')

if __name__ == '__main__':
    app.run(debug=True)