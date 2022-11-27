import psycopg2
from flask import Flask, request, jsonify

app = Flask(__name__)

def get_db_connection():
    return psycopg2.connect(host='db_6_03', database='postgres', user='postgres', password='postgres', port=5432)

@app.route('/')
def index():
    return "Flask Application"


@app.route('/cars', methods=['GET'])
def getCars():
    conn = get_db_connection()
    cur = conn.cursor()

    query = "SELECT * FROM Car"
    year_arg = request.args.get('year')
    if year_arg is not None:
        query += " WHERE year = " + year_arg
    print(year_arg)
    print(query)
    cur.execute(query)
    output_json = cur.fetchall()
    conn.close()

    return jsonify(output_json)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)