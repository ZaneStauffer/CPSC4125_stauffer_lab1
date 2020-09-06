// We define a template for the entry. Normally I would never do it like this, but CORS prevents loading templates on the local machine.
var entry_template = `
<li class="list-group-item">
    <div class="row">
        <div class="col-sm-11">
            <div class="contents">
                <p style="margin: 0 0 0 0;">Enter your text here!</p>
            </div>
        </div>
        <div class="col-sm">
            <div class="float-right" style="margin: auto;">
                <!-- The button is hidden until the mouse is hovered over the entry. -->
                <button type="button" class="btn btn-default" style="padding: 0; visibility: hidden;">
                    <i class="fa fa-trash fa-2x"></i>
                </button>
            </div>
        </div>
    </div>
</li>
`;
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
        $('#todo').append($.parseHTML(entry_template));
    });
});