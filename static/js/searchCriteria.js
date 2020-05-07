function searchCriteria() {
    let query = {};
    for (i=1; i<7; i++) {
        if ($("#input"+i).html() != undefined) {
            let name_of_entry = $("#input"+i+" .entry-data").attr("name");
            let value_of_entry = $("#"+name_of_entry).val();
            query[name_of_entry] = value_of_entry;
        }
    }
    return false; // to block the button from loading a new page
}