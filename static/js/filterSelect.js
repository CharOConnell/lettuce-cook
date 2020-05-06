function filterSelect() {
    $(".dropdown-menu option").click(function(){
        let idtag = $(this).parents(".dropdown").find(".input-field-dropdown").attr("id");
        let newidtag = $("#"+idtag).siblings(".dropdown-menu").attr("id");
        let newinput = $("#"+newidtag+" option:selected").html();
        $("#"+idtag).html(newinput);
    });

    // Check to see if we are in the search window
    windowPath = window.location.href;
    windowPathlen = windowPath.length;
    windowName = windowPath.slice((windowPathlen-13),(windowPathlen-7));

    if (windowName === "search") {
        $(".dropdown-menu option").click(function(){
            let containerid = $(this).parents(".searching").attr("id");
            let idtag = $(this).parents(".dropdown").find(".input-field-dropdown").attr("id");
            let category = $("#"+idtag).html();
            let newidtag = $("#"+containerid).find(".input").attr("id");

            if (category === "Recipe Name") {
                $("#"+newidtag).html(`<div class="input-field col">
                    <input type="text" name="recipe_name" id="recipe_name" placeholder="Recipe name to search for" required class="entry-data"/>
                </div>`);
                $("#"+newidtag).addClass("entry-box");
            } else if (category === "Cuisine Type") {
                $("#"+newidtag).html(`<div class="col dropdown">
                    <div class="input-field-dropdown dropdown-toggle updateMe" role="button" id="dropdownMenuButtonCui" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                    Choose the cuisine type
                    </div>
                    
                    <select id="cuisine" name="cuisine_type" class="dropdown-menu" aria-labelledby="dropdownMenuButtonCui" multiple>
                        {% for style in cuisine %}
                        <option class="dropdown-item" value="{{style.cuisine_type}}">{{style.cuisine_type}}</option>
                        {% endfor %}
                    </select>
                </div>`);
                $("#"+newidtag).addClass("entry-box");
            } else if (category === "Difficulty Level") {
                $("#"+newidtag).html(`<div class="col dropdown">
                    <div class="input-field-dropdown dropdown-toggle updateMe" role="button" id="dropdownMenuButtonDiff" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                    Choose the difficulty level
                    </div>
                    
                    <select id="difficulty" name="difficulty_level" class="dropdown-menu" aria-labelledby="dropdownMenuButtonDiff" multiple>
                        {% for diffi in difficulty %}
                        <option class="dropdown-item" value="{{diffi.difficulty_level}}">{{diffi.difficulty_level}}</option>
                        {% endfor %}
                    </select>
                </div>`);
                $("#"+newidtag).addClass("entry-box");
            } else if (category === "Preparation Time") {
                $("#"+newidtag).html(`<div class="col dropdown">
                    <div class="input-field-dropdown dropdown-toggle updateMe" role="button" id="dropdownMenuButtonPrep" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                    Choose the preparation time
                    </div>
                    
                    <select id="preparation" name="preparation_time" class="dropdown-menu" aria-labelledby="dropdownMenuButtonPrep" multiple>
                        {% for prep in preparation %}
                        <option class="dropdown-item" value="{{prep.preparation_time}}">{{prep.preparation_time}}</option>
                        {% endfor %}
                    </select>
                </div>`);
                $("#"+newidtag).addClass("entry-box");
            } else if (category === "Cooking Time") {
                $("#"+newidtag).html(`<div class="col dropdown">
                    <div class="input-field-dropdown dropdown-toggle updateMe" role="button" id="dropdownMenuButtonCook" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                    Choose the cooking time
                    </div>
                    
                    <select id="cooking" name="cooking_time" class="dropdown-menu" aria-labelledby="dropdownMenuButtonCook" multiple>
                        {% for cook in cooking %}
                        <option class="dropdown-item" value="{{cook.cooking_time}}">{{cook.cooking_time}}</option>
                        {% endfor %}
                    </select>
                </div>`);
                $("#"+newidtag).addClass("entry-box");
            } else if (category === "Serving Size") {
                $("#"+newidtag).html(`<div class="input-field col">
                    <input type="text" name="serving_size" id="serving_size" placeholder="Serving size to search for" required class="entry-data"/>
                </div>`);
                $("#"+newidtag).addClass("entry-box");
            } else {
                $("#"+newidtag).html(``);
            }
            

        });
    }
}