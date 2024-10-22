import pyodbc
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
