function buttonUpdate(id) {
    let innerdata = $("#"+id).html();
    // get the id of the recipe being viewed
    let fullid = id.slice(3);
    // split up the ingredients by the delimiter "," and method with "\n"
    let ingredientsChange = $("#ingredients"+fullid).html().split(",");
    let ingredientsUpdate = "";
    var methodChange = $("#method"+fullid).html().split("\n");
    methodChange = methodChange.slice(1);
    let methodUpdate = "";

    // add a line at the delimiter
    ingredientsChange.forEach(function(item, index) {
        ingredientsUpdate += item + "<br>";});
    methodChange.forEach(function(item, index) {
        methodUpdate += item + "<br>";});

    // update the html with the new lines
    $("#ingredients"+fullid).html(`${ingredientsUpdate}`);
    $("#method"+fullid).html(`${methodUpdate}`);

    // update the text within the buttons
    if (innerdata == "Show More +") {
        $("#"+id).html("Show Less -");
    } else {
        $("#"+id).html("Show More +");
    }
}
