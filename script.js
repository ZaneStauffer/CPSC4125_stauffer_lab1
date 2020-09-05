$(document).ready(() => {
    // Entry hover functionality
    $("li").hover(function(){
        $(this).attr('class', 'list-group-item active');
        $(this).find('button').show();
    }, function(){
        $(this).attr('class', 'list-group-item');
        $(this).find('button').hide();
    });
    
});