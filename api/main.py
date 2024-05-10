import anthropic
import os
from waitress import serve
from dotenv import load_dotenv
from flask_cors import CORS
from flask import Flask, request, jsonify
from utils.getPlot import getPlot
from utils.getPipe import getPipe
from utils.getImage import getImage

load_dotenv()

app = Flask(__name__)
CORS(app)

pipe = getPipe()

client = anthropic.Anthropic(
    api_key=os.environ.get("ANTHROPIC_API_KEY"),
)

@app.route("/generate-plot", methods=["POST"])
def generate_plot():
    data = request.json
    prompt = data["prompt"]

    try:
        plot = getPlot(client, prompt)
        getImage(plot, pipe)
        
        return jsonify({"plot": plot}), 200
    except Exception as e:
        print("Error generating plot:", e)
        return jsonify({"error": "Failed to generate plot"}), 500

if __name__ == "__main__":
    serve(app, host="0.0.0.0", port=5000)