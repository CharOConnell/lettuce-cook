function refreshFilters() {
    for (i = 1; i < 7; i++) {
        // clear all the data
        $("#" + i).html(``);
    }
    // put in the first value of data
    $("#1").html(`<div class="row entry-box">
                <div class="col dropdown">
                    <div class="input-field-dropdown dropdown-toggle" role="button" id="dropdownMenuButtonFilt1" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                    Pick the category to search in
                    </div>

                    <select name="filter1" id="filter1" class="dropdown-menu" aria-labelledby="dropdownMenuButtonFilt1" required multiple onchange="filterSelect(this)">
                        <option value="recipe_name" class="dropdown-item">Recipe Name</option>
                        <option value="cuisine_type" class="dropdown-item">Cuisine Type</option>
                        <option value="difficulty_level" class="dropdown-item">Difficulty Level</option>
                        <option value="prep" class="dropdown-item">Preparation Time</option>
                        <option value="cook" class="dropdown-item">Cooking Time</option>
                        <option value="serving_size" class="dropdown-item">Serving Size</option>
                    </select>
                </div>
            </div>
            
            <div class="row input" id="input1"></div>`);
}
