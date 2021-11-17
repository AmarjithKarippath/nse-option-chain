from flask import Flask
from flask_cors import CORS
from flask_jsonpify import jsonpify

from option_chain import get_option_chain

app = Flask(__name__)
CORS(app)

@app.route("/option_chain")
def option_chain():

    df = get_option_chain()
    print(df.columns)
    df_list = df.values.tolist()
    JSONP_data = jsonpify(df_list)
    return JSONP_data
