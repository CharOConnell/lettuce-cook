function refreshFilters() {
    for (i = 1; i < 7; i++) {
        // clear all the data
        $("#" + i).html(``);
    }
    // put in the first value of data
    $("#1").html(`<div class="row entry-box">
            <!-- FILTER DROPDOWN -->
                <div class="col input-field">
                    <select class="form-control" name="filter1" id="filter1" onchange="addBoxSearch(value, id);">
                        <option value="">Search Category</option>
                        <option value="recipe_name">Recipe Name</option>
                        <option value="cuisine_type">Cuisine Type</option>
                        <option value="difficulty_level">Difficulty Level</option>
                        <option value="prep">Preparation Time</option>
                        <option value="cook">Cooking Time</option>
                        <option value="serving_size">Serving Size</option>
                    </select>
                </div>
            </div>

            <!-- INPUT FIELD - Linked to the choice in the dropdown above -->
            <div class="row input" id="input1"></div>`);
}
