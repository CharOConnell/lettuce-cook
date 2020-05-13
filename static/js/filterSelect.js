function filterSelect() {
    // Update the dropdown menu to the option selected
    $(".dropdown-menu option").click(function () {
        let idtag = $(this).parents(".dropdown").find(".input-field-dropdown").attr("id");
        let newidtag = $("#" + idtag).siblings(".dropdown-menu").attr("id");
        let newinput = $("#" + newidtag + " option:selected").html();
        $("#" + idtag).html(newinput);
    });
}