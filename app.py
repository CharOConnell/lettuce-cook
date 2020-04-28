import os
from flask import Flask, render_template
# redirect, url_for, request
from flask_pymongo import PyMongo
# from bson.objectid import ObjectId

app = Flask(__name__)
app.config["MONGO_DBNAME"] = 'lettuce-cook'
app.config["MONGO_URI"] = os.getenv('MONGO_URI', 'mongodb://localhost')

mongo = PyMongo(app)


@app.route('/')
def home():
    return render_template('home.html', recipes=mongo.db.recipes.find())


if __name__ == '__main__':
    app.run(host=os.getenv('IP', "0.0.0.0"), port=int(
        os.getenv('PORT', "5000")), debug=True)
