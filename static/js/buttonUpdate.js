function buttonUpdate(id) {
    innerdata=$("#"+id).html();
    if (innerdata == "Show More +") {
        $("#"+id).html("Show Less -");
    } else {
        $("#"+id).html("Show More +");
    }
}