function filterSelect(dropdownMenu){
    $(".dropdown-menu option").click(function(){
        var idtag = $(this).parents(".dropdown").find('.input-field-dropdown').attr("id");
        var newidtag = $("#"+idtag).siblings(".dropdown-menu").attr("id");
        var newinput = $("#"+newidtag+" option:selected").html();
        $("#"+idtag).html(newinput);
        });
}