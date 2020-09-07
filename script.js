/*
Zane Stauffer, 9/7/2020
CPSC 4125
*/

$(document).ready(() => {
    // Entry hover functionality. We use on because we need to assign event delegates for elements that are dynamically created.
    $(document).on("mouseenter","li", function(){ // For some reason JQuery doesn't like arrow functions, so we use function()
        $(this).attr('class', 'list-group-item active');
        $(this).find('button').css('visibility', 'visible');
    });
    $(document).on("mouseleave", "li", function(){
        $(this).attr('class', 'list-group-item');
        $(this).find('button').css('visibility', 'hidden');
    });

    // Delete button functionality. Selector syntax for delegates is weird.
    $(document).on("click", 'li > .row > .col-sm > .float-right > button', function(){
        $(this).parents('li').remove();
    });

    // Add button functionality
    $('#add-button').click(function(){
        $('#todo').append($('#entry-template').html());
    });

    // Edit functionality
    $(document).on("click", "li", function(){
        var $el = $(this).find(".editable");
        var $input = $('<textarea style=\"width:100%;\"/>').val($el.text());
        $el.replaceWith($input);
        var save = () => {
            var $p = $("<p class=\"editable\" style=\"margin: 0 0 0 0;\"</p>").text($input.val());
            $input.replaceWith($p);
        };
        $input.one('blur', save).focus(); // If the user clicks away from the text area, it'll get saved.
        $(document).on('keypress', function(e){ // If the user presses enter, it'll get saved.
            if(e.which == 13){
                save();
            }
        });
    });
});