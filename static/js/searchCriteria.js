function searchCriteria() {
    let query = {};
    console.log("hi");
    console.log($("#dropdownMenuButtonFilt1").text());
    for (i=1; i<7; i++) {
        if ($("#input"+i).html() != undefined) {
            let name_of_entry = $("#input"+i+" .entry-data").attr("name");
            let value_of_entry = $("#"+name_of_entry).val();
            query[name_of_entry] = value_of_entry;
        }
    }
    return query; // to block the button from loading a new page
}