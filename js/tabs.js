/**
 * Created by LJacobs on 4/12/2016.
 */

$(function () {
    var $items = $('.accordian-item'),
        $contents = $(".accordian-content");
    $('.accordian-content:first').show();
    //click event
    $items.on("click", function () {
        var $clickedItem = $(this);
        var id = $clickedItem.attr('data-id');
        var content = $(".accordian-content[data-id='" +id + "']");

        if (content.is(":visible")) {
            content.fadeOut();
        } else {
            $contents.fadeOut().promise().done(function () {
                content.fadeIn();
            });
        }
    });
});
