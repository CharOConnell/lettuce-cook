import os
from flask import Flask, render_template, url_for, redirect, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId


app = Flask(__name__)
app.config["MONGO_DBNAME"] = 'lettuce-cook'
app.config["MONGO_URI"] = os.getenv('MONGO_URI', 'mongodb://localhost')

mongo = PyMongo(app)


@app.route('/')
def home():
    return render_template('home.html', recipes=mongo.db.recipes.find())


@app.route('/add_recipe')
def add_recipe():
    the_recipes = mongo.db.recipes.find()
    the_difficulty = mongo.db.difficulty.find()
    the_cuisine = mongo.db.cuisine_style.find()
    preparation = mongo.db.preparation.find()
    cooking = mongo.db.cooking.find()
    return render_template(
        'add.html', recipes=the_recipes, difficulty=the_difficulty,
        cuisine=the_cuisine, prep=preparation, cook=cooking)


@app.route('/insert_recipe', methods=['POST'])
def insert_recipe():
    recipes = mongo.db.recipes
    recipes.insert_one(request.form.to_dict())
    return redirect(url_for('home'))


@app.route('/edit_recipe/<recipe_id>')
def edit_recipe(recipe_id):
    the_recipe = mongo.db.recipes.find_one({'_id': ObjectId(recipe_id)})
    the_difficulty = mongo.db.difficulty.find()
    the_cuisine = mongo.db.cuisine_style.find()
    preparation = mongo.db.preparation.find()
    cooking = mongo.db.cooking.find()
    return render_template(
        'edit.html', recipe=the_recipe, difficulty=the_difficulty,
        cuisine=the_cuisine, prep=preparation, cook=cooking)


@app.route('/update_recipe/<recipe_id>', methods=['POST'])
def update_recipe(recipe_id):
    recipes = mongo.db.recipes
    recipes.update({'_id': ObjectId(recipe_id)},
                   {
        'recipe_name': request.form.get('recipe_name'),
        'recipe_description': request.form.get('recipe_description'),
        'photo': request.form.get('photo'),
        'difficulty_level': request.form.get('difficulty_level'),
        'cuisine_type': request.form.get('cuisine_type'),
        'prep_time': request.form.get('prep_time'),
        'cooking_time': request.form.get('cooking_time'),
        'serving_size': request.form.get('serving_size'),
        'ingredients': request.form.get('ingredients'),
        'method': request.form.get('method')
    })
    return redirect(url_for('home'))


@app.route('/delete_recipe/<recipe_id>')
def delete_recipe(recipe_id):
    mongo.db.recipes.remove({'_id': ObjectId(recipe_id)})
    return redirect(url_for('home'))


@app.route('/search_recipe')
def search_recipe():
    the_recipes = mongo.db.recipes.find()
    the_difficulty = mongo.db.difficulty.find()
    the_cuisine = mongo.db.cuisine_style.find()
    the_prep = mongo.db.preparation.find()
    the_cooking = mongo.db.cooking.find()
    return render_template(
        'search.html', recipes=the_recipes, difficulty=the_difficulty,
        cuisine=the_cuisine, prep=the_prep, cook=the_cooking)


@app.route("/search", methods=['POST'])
def search():
    the_query = request.form
    query = the_query.to_dict()
    name = 'recipe_name'
    ingredient = 'ingredients'
    idval = []
    testquery = {}
    newquery = {}
    if name in query.keys():
        nameslower = query['recipe_name'].lower()
        namescap = query['recipe_name'].capitalize()
        recipe_result = mongo.db.recipes.distinct('recipe_name')
        for result in recipe_result:
            if result.find(nameslower) > -1:
                idval.extend(mongo.db.recipes.find(
                    {'recipe_name': result}).distinct('_id'))
            if result.find(namescap) > -1:
                idval.extend(mongo.db.recipes.find(
                    {'recipe_name': result}).distinct('_id'))
        testquery['$in'] = idval
        newquery['_id'] = testquery
        the_results = mongo.db.recipes.find(newquery)
    elif ingredient in query.keys():
        ingredientlower = query['ingredients'].lower()
        ingredientcap = query['ingredients'].capitalize()
        ingredient_result = mongo.db.recipes.distinct('ingredients')
        for result in ingredient_result:
            if result.find(ingredientlower) > -1:
                idval.extend(mongo.db.recipes.find(
                    {'ingredients': result}).distinct('_id'))
            if result.find(ingredientcap) > -1:
                idval.extend(mongo.db.recipes.find(
                    {'ingredients': result}).distinct('_id'))
        testquery['$in'] = idval
        newquery['_id'] = testquery
        the_results = mongo.db.recipes.find(newquery)
    else:
        the_results = mongo.db.recipes.find(query)
    return render_template('searchresults.html', results=the_results)


if __name__ == '__main__':
    app.run(host=os.getenv('IP', "0.0.0.0"), port=int(
        os.getenv('PORT', "5000")), debug=False)
