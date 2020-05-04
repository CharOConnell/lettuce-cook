import os
from flask import Flask, render_template, url_for, redirect
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


@app.route('/add_recipe')
def add_task():
    the_recipes = mongo.db.recipes.find()
    the_difficulty = mongo.db.difficulty.find()
    the_cuisine = mongo.db.cuisine_style.find()
    preparation = mongo.db.preparation.find()
    cooking = mongo.db.cooking.find()
    return render_template('add.html', recipes=the_recipes, difficulty=the_difficulty, cuisine=the_cuisine, prep=preparation, cook=cooking)


"""
@app.route('/insert_recipe', methods=['POST'])
def insert_task():
    recipes = mongo.db.recipes
    recipes.insert_one(request.form.to_dict())
    return redirect(url_for('/'))
"""


if __name__ == '__main__':
    app.run(host=os.getenv('IP', "0.0.0.0"), port=int(
        os.getenv('PORT', "5000")), debug=True)
