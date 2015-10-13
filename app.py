# coding: utf-8

from flask import Flask, render_template

app = Flask(__name__)


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")


@app.route("/search", methods=["GET", "POST"])
def search():
    if request.method == "POST":
        pass
    else:
        pass




if __name__ == "__main__":
    app.run(debug=True)
