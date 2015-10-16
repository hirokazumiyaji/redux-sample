# coding: utf-8

import json
import threading

from flask import Flask, render_template, jsonify

app = Flask(__name__)

_LOCK = threading.Lock()
_COMMENTS = []


def add_comment(comment):
    with _LOCK:
        comment["id"] = len(_COMMENTS) + 1
        _COMMENTS.append(comment)
        _COMMENTS = sorted(_COMMENTS, lambda x: x["id"])


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")


@app.route("/comments", methods=["GET", "POST"])
def comments():
    global _COMMENTS
    latest_id = 0
    if request.method == "POST":
        body = json.loads(request.body)
        add_comment(body["comment"])

    comments = [
        comment
        for comment in _COMMENTS
        if comment["id"] > body["latest_id"]
    ]
    return jsonify({
        "comments": comments,
    })




if __name__ == "__main__":
    app.run(debug=True)
