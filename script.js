$(document).ready(() => {
    // Entry hover functionality
    $(document).on("mouseenter","li", function(){
        $(this).attr('class', 'list-group-item active');
        $(this).find('button').css('visibility', 'visible');
    });
    $(document).on("mouseleave", "li", function(){
        $(this).attr('class', 'list-group-item');
        $(this).find('button').css('visibility', 'hidden');
    });

    // Delete button functionality
    $(document).on("click", 'li > .row > .col-sm > .float-right > button', function(){
        $(this).parents('li').remove();
    });

    // Add button functionality
    $('#add-button').click(function(){
        $('#todo').append($('#entry-template').html());
    });
});