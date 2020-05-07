function removeFilter() {
    for (i=6; i>1; i--) {
        if (i===5) {
            // if the button has got 5 options left, put the add filter button back in
            if ($("#addfilterbtn").html() === "") {
                // if the add filter button is not already there, add it back
                $("#addfilterbtn").html(`<button class="btn" type="button" onclick="addFilter()"> Add Filter </button>`)
                    .addClass("d-flex col-5 justify-content-end align-self-center")
                $("#removefilterbtn").removeClass("col-6 justify-content-end").addClass("col-2 justify-content-center");
                $("#refreshfilterbtn").removeClass("col-6").addClass("col-5");
            }
        }
        if (i===2) {
            // if there is no filter for the second row, remove the remove / refresh filter buttons
            $("#addfilterbtn").removeClass("col-5 justify-content-end").addClass("col justify-content-center");
            $("#removefilterbtn").html(``).removeClass("col-2");
            $("#refreshfilterbtn").html(``).removeClass("col-5");
        }
        if ($("#"+i).html() != "") {
            // if the latest value has a filter box in it remove it
            $("#"+i).html(``);
            // break so it only deletes one filter at a time, not all at once
            break
        }        
    }
}