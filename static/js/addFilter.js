function addFilter() {
    for (i=2; i<7; i++) {
        if ($("#"+i).html() === "") {
            // if there is no filter, add the filter option boxes
            $("#"+i).html(`<div class="row entry-box">
                        <div class="col dropdown">
                            <div class="input-field-dropdown dropdown-toggle" role="button" id="dropdownMenuButtonFilt2" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                            Pick the category to search in
                            </div>

                            <select name="filter2" id="filter2" class="dropdown-menu" aria-labelledby="dropdownMenuButtonFilt2" multiple onchange="filterSelect(this)">
                                <option value="recipe_name" class="dropdown-item">Recipe Name</option>
                                <option value="cuisine_type" class="dropdown-item">Cuisine Type</option>
                                <option value="difficulty_level" class="dropdown-item">Difficulty Level</option>
                                <option value="prep" class="dropdown-item">Preparation Time</option>
                                <option value="cook" class="dropdown-item">Cooking Time</option>
                                <option value="serving_size" class="dropdown-item">Serving Size</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="row entry-box input" id="input2"></div>`)
        if (i===6) {
            // we've reached our total number of options, so remove the add filter button
            $("#addfilterbtn").html(``);
        }
        // break so it produces one extra filter at a time, not 6 at once
        break
        } 
    }
    // console.log($("#2").html())
}