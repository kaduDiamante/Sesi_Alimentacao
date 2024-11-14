dados = [
    {'data': '11/11/2024', 'cafe_manha': True, 'almoco': True, 'cafe_tarde': False},
    {'data': '12/11/2024', 'cafe_manha': True, 'almoco': True, 'cafe_tarde': False},
    {'data': '13/11/2024', 'cafe_manha': True, 'almoco': True, 'cafe_tarde': False},
    {'data': '14/11/2024', 'cafe_manha': True, 'almoco': True, 'cafe_tarde': False},
    {'data': '15/11/2024', 'cafe_manha': True, 'almoco': False, 'cafe_tarde': False}
]

for dado in dados:
    print(f"{dado['data']} -  {dado['cafe_manha']} - {dado['almoco']} - {dado['cafe_tarde']}" )