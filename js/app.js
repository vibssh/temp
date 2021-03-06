/**
 * Created by LJacobs on 4/11/2016.
 */


$(function () {
    var $items = $('.accordian-item'),
        $contents = $(".accordian-content");
    //click event
    $items.on("click", function () {
        var $clickedItem = $(this);
        var id = $clickedItem.attr('data-id');
        var content = $(".accordian-content[data-id='" +id + "']");

        if (content.is(":visible")) {
            content.slideUp();
        } else {
            $contents.slideUp().promise().done(function () {
                content.slideDown();
            });
        }
    });
});