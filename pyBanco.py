import pyodbc
cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER=SERVIDORPROF\SQLEXPRESS;DATABASE=sesialimentacao;uid=x_tech_sp;pwd=essa-equipe-nao-tem-senha')
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

def insert_image(img_route):
    with open(img_route, 'rb') as file:
        img_data = file.read()
    query = (f"insert into cardapio(imagem, data_inicial, data_final) values(?, ?, ?)")
    cursor.execute(query, (img_data, '21/09/2024', '26/09/2024'))
    cursor.commit()