$(document).ready(() => {
    // Entry hover functionality
    $(document).on("mouseenter","li", function(){
        $(this).attr('class', 'list-group-item active');
        $(this).find('button').css('visibility', 'visible');
        //$(this).find('.editable').css('outline', 'solid');
    });
    $(document).on("mouseleave", "li", function(){
        $(this).attr('class', 'list-group-item');
        $(this).find('button').css('visibility', 'hidden');
        //$(this).find('.editable').css('outline', 'none');
    });

    // Delete button functionality
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
        $input.one('blur', save).focus();
        $(document).on('keypress', function(e){
            if(e.which == 13){
                save();
            }
        });
    });
});