function buttonUpdate(id) {
    let innerdata = $("#"+id).html();
    // get the id of the recipe being viewed
    let fullid = id.slice(3);
    // split up the ingredients by the delimiter ","
    let ingredientsChange = $("#ingredients"+fullid).html().split(",");
    let ingredientsUpdate = "";
    // add a line to the ingredients at the delimiter
    ingredientsChange.forEach(function(item, index) {
        ingredientsUpdate += item + "<br>";});
    // update the ingredients with the new lines
    $("#ingredients"+fullid).html(`${ingredientsUpdate}`);
    
    // update the text within the buttons
    if (innerdata == "Show More +") {
        $("#"+id).html("Show Less -");
    } else {
        $("#"+id).html("Show More +");
    }
}
