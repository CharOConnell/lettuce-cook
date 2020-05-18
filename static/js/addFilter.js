function addFilter() {
    for (i=2; i<8; i++) {
        if (i===2) {
            // add the remove / refresh filter buttons
            $("#addfilterbtn").removeClass("col justify-content-center").addClass("col-5 justify-content-end")
            $("#removefilterbtn").html(`<button class="btn" type="button" onclick="removeFilter()"> Remove Filter </button>`)
                .addClass("d-flex col-2 justify-content-center align-self-center")
            $("#refreshfilterbtn").html(`<button class="btn" type="button" onclick="refreshFilters()"> Refresh Filters </button>`)
                .addClass("d-flex col-5 justify-content-start align-self-center")
        }
        if (i===6) {
            // we've reached our total number of options, so remove the add filter button
            $("#addfilterbtn").html(``).removeClass("col-5");
            $("#removefilterbtn").removeClass("col-2 justify-content-center").addClass("col-6 justify-content-end");
            $("#refreshfilterbtn").removeClass("col-5").addClass("col-6");
        
        }
        if ($("#"+i).html() === "") {
            let filterval = "filter"+i;
            let inputval = "input"+i;
            // if there is no filter, add the filter option boxes
            $("#"+i).html(`<div class="row entry-box">
                <!-- FILTER DROPDOWN -->
                    <div class="col input-field">
                        <select class="form-control" id="${filterval}" onchange="addBoxSearch(value, id);">
                            <option value="">Search Category</option>
                            <option value="recipe_name">Recipe Name</option>
                            <option value="cuisine_type">Cuisine Type</option>
                            <option value="difficulty_level">Difficulty Level</option>
                            <option value="prep">Preparation Time</option>
                            <option value="cook">Cooking Time</option>
                            <option value="serving_size">Serving Size</option>
                            <option value="ingredients">Ingredients</option>
                        </select>
                    </div>
                </div>

                <!-- INPUT FIELD - Linked to the choice in the dropdown above -->
                <div class="row input" id="${inputval}"></div>`);
            // break so it produces one extra filter at a time, not 6 at once
            break
        }        
    }
}