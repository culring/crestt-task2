$(document).ready(function() {
    const listItemsSelector = $("li:not(.empty)");

    listItemsSelector.click(function(event) {
        const childrenListSelector = $("ul", this).first();
        if(childrenListSelector.length > 0) {
            if($(this).hasClass("opened")) {
                $(this).removeClass("opened");
                $(this).addClass("closed");
            }
            else {
                $(this).removeClass("closed");
                $(this).addClass("opened");
            }
            childrenListSelector.slideToggle();
        }

        updateBulletForListItem(this,
            "/assets/images/bullet_opened.png",
            "/assets/images/bullet_closed.png");

        event.stopPropagation();
    });

    listItemsSelector.hover(function(event) {
        updateBulletForListItem(this,
            "/assets/images/bullet_opened_hovered.png",
            "/assets/images/bullet_closed_hovered.png")
        event.stopPropagation();
    }, function(event) {
        updateBulletForListItem(this,
            "/assets/images/bullet_opened.png",
            "/assets/images/bullet_closed.png");
        event.stopPropagation();
    });

    function updateBulletForListItem(listItem, openedImgSrc, closedImgSrc) {
        const spanSelector = $("span", listItem).first();
        const span = spanSelector.get(0);
        const img = document.createElement('img');
        if($(listItem).hasClass("opened")) {
            img.src = openedImgSrc;
        }
        else if($(listItem).hasClass("closed")) {
            img.src = closedImgSrc;
        }
        span.textContent = "";
        span.appendChild(img);
    }
});