from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json
import pandas as pd
import requests
import numpy as np
import matlab.engine

app = Flask(__name__)
eng = matlab.engine.start_matlab()

cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/api/')
def index():
    return ('Hey!!')


@app.route('/api/all_temp', methods=["GET"])
@cross_origin()
def allTemp():
    # data = request.get_json()
    h = eng.model(0.6)
    return jsonify({'result': h})


if __name__ == "__main__":
    app.run(debug=True)
