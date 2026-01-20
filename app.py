from flask import Flask, request, send_file
from PIL import Image
import os

app = Flask(__name__)

@app.route("/process-photo", methods=["POST"])
def process_photo():
    file = request.files["file"]
    img = Image.open(file)

    img = img.convert("RGB")  # placeholder AI
    output = "output.jpg"
    img.save(output, quality=95)

    return send_file(output, as_attachment=True)

@app.route("/process-video", methods=["POST"])
def process_video():
    file = request.files["file"]
    output = "output.mp4"
    file.save(output)
    return send_file(output, as_attachment=True)

if __name__ == "__main__":
    app.run()
