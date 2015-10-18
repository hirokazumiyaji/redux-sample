# coding: utf-8

import json
import threading
import os

from flask import Flask, request, render_template, jsonify, Response

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
        body = json.loads(request.data)
        add_comment(str(body["comment"]))

    comments = [
        comment
        for comment in _COMMENTS
        if comment["id"] > body["latest_id"]
    ]
    return jsonify({
        "comments": comments,
    })


@app.route("/assets/<path:path>")
def assets(path):
    mimetypes = {
        "css": "text/css",
        "js": "application/javascript",
    }
    mimetype = mimetypes[os.path.dirname(path)]

    return Response(
        open(os.path.join(os.path.dirname(__file__), "assets", path)).read(),
        mimetype=mimetype)

if __name__ == "__main__":
    app.run(debug=True)
