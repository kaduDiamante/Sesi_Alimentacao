from flask import Flask, render_template, request, jsonify
import pyBanco

app = Flask(__name__)

@app.route('/')
def pagina_inicial():
    return render_template('pag_login.html')

@app.route('/Dashboard')
def Dashboard():
    return render_template('Dashboard.html')

@app.route('/Dashboard_Aluno')
def Dashboard_Aluno():
    return render_template('Dashboard Aluno.html')

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

@app.route('/set_cardapio', methods=['POST', 'GET'])
def cardapio():
    if request.method == 'POST':
        informacao = request.get_json()
        imgCode = informacao['imgSource']
        pyBanco.insert_img(imgCode)
    else:
        return render_template('Set_Cardapio.html')

@app.route('/Perfil_nutricionista')
def Perfil_nutricionista():
    return render_template('Perfil_Nutricionista.html')

@app.route('/Perfil_Aluno')
def Perfil_Aluno():
    return render_template('Perfil_Aluno.html')

@app.route('/Refeicoes_alunos')
def Refeicoes_alunos():
    return render_template('Refeicoes alunos.html')

@app.route('/historico_de_desperdicio_alunos')
def historico_de_desperdicio_alunos():
    return render_template('historico de desperdicio alunos.html')

@app.route('/Tables')
def Tables():
    return render_template('Tables.html')

@app.route('/Salas')
def Salas():
    return render_template('Salas.html')

@app.route('/Set_agenda')
def Set_agenda():
    return render_template('Set_agenda.html')

if __name__ == '__main__':
    app.run(debug=True)