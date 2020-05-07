function addFilter() {
    for (i=2; i<7; i++) {
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
            // get the special tag names
            let nameval = "filter"+i;
            let id1val = "dropdownMenuButtonFilt"+i;
            let id2val = "filter"+i;
            let inputval = "input"+i;
            // if there is no filter, add the filter option boxes
            $("#"+i).html(`<div class="row entry-box">
                        <div class="col dropdown">
                            <div class="input-field-dropdown dropdown-toggle" role="button" id=${id1val} data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                            Pick the category to search in
                            </div>

                            <select name=${nameval} id=${id2val} class="dropdown-menu" aria-labelledby=${id1val} multiple onchange="filterSelect(this)">
                                <option value="recipe_name" class="dropdown-item">Recipe Name</option>
                                <option value="cuisine_type" class="dropdown-item">Cuisine Type</option>
                                <option value="difficulty_level" class="dropdown-item">Difficulty Level</option>
                                <option value="prep" class="dropdown-item">Preparation Time</option>
                                <option value="cook" class="dropdown-item">Cooking Time</option>
                                <option value="serving_size" class="dropdown-item">Serving Size</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="row input" id=${inputval}></div>`);
            // break so it produces one extra filter at a time, not 6 at once
            break
        }        
    }
}