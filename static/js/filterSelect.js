function filterSelect(dropdownMenu){
    $(".dropdown-menu option").click(function(){
        var idtag = $(this).parents(".dropdown").find('.input-field-dropdown').attr("id");
        var newidtag = $("#"+idtag).siblings(".dropdown-menu").attr("id");
        var newinput = $("#"+newidtag+" option:selected").html();
        $("#"+idtag).html(newinput);
    });
    
    // Check to see if we are in the search window
    windowPath = window.location.href;
    windowPathlen = windowPath.length;
    windowName = windowPath.slice((windowPathlen-13),(windowPathlen-7));


    if (windowName === "search") {
        console.log($(this).siblings());    
    }
    
}