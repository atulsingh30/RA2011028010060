from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/numbers', methods=['GET'])
def get_numbers():
    urls = request.args.getlist('url')
    result = []

    for url in urls:
        try:
            response= requests.get(url)
            data= response.json()
            result.extend(data['numbers'])
            result =list(set(result))
        except Exception as e:
            print("Error")

    return jsonify(numbers=result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8008)