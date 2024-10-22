import pyodbc
import base64
cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER=servidorprof\sqlexpress;DATABASE=sesialimentacao;uid=x_tech_sp;pwd=essa-equipe-nao-tem-senha')
cursor = cnxn.cursor()

def insert(desperdicio, dia):
    try:
        cursor.execute(f"INSERT INTO desperdicio (quantidade_desperdicio, data_desperdicio) VALUES ({desperdicio},'{dia}')")
        cursor.commit()
    except:
        print('erro')

def insert_img(img_route):
    query = (f"insert into cardapio(imagem, data_inicial, data_final) values(?, ?, ?)")
    cursor.execute(query, (img_route, '18/05/2024', '23/05/2024'))
    cursor.commit()

def insert_image(img_route, inicioSem, fimSem):
    img_data = img_route.read()
    query = (f"insert into cardapio(imagem, data_inicial, data_final) values(?, ?, ?)")
    cursor.execute(query, (img_data, inicioSem, fimSem))
    cursor.commit()

def select_cardapio(data_ini, data_final):
    query = (f'select imagem from cardapio where data_inicial = ? and data_final = ?')
    cursor.execute(query, (data_ini, data_final))
    cardapio_img = cursor.fetchone()
    imagens = base64.b64encode(cardapio_img[0]).decode('utf-8')
    return imagens

