$(document).ready(function() {
    addEventsForTogglingListItems();
    addEventsForHoveringOverListItems();
});

function addEventsForTogglingListItems() {
    const listItemRowSelector = $("li:not(.empty)>span.node_description");
    listItemRowSelector.click(function(event) {
        const parentListItem = this.parentElement;
        const childrenListSelector = $("ul", parentListItem).first();
        if(childrenListSelector.length > 0) {
            if($(parentListItem).hasClass("open")) {
                $(parentListItem).removeClass("open");
                $(parentListItem).addClass("closed");
            }
            else {
                $(parentListItem).removeClass("closed");
                $(parentListItem).addClass("open");
            }
            childrenListSelector.slideToggle();
        }

        updateBulletForListItem(parentListItem,
            "/assets/images/bullet_open_hovered.png",
            "/assets/images/bullet_closed_hovered.png");

        event.stopPropagation();
    });
}

function addEventsForHoveringOverListItems() {
    const listItemRowSelector = $("li:not(.empty)>span.node_description,span.bullet");
    listItemRowSelector.hover(function(event) {
        const parentListItem = this.parentElement;
        const nodeDescriptionSelector = $("span.node_description", parentListItem).first();
        nodeDescriptionSelector.css("font-weight", "bold");
        updateBulletForListItem(parentListItem,
            "/assets/images/bullet_open_hovered.png",
            "/assets/images/bullet_closed_hovered.png")
        event.stopPropagation();
    }, function(event) {
        const parentListItem = this.parentElement;
        const nodeDescriptionSelector = $("span.node_description", parentListItem).first();
        nodeDescriptionSelector.css("font-weight", "normal");
        updateBulletForListItem(parentListItem,
            "/assets/images/bullet_open.png",
            "/assets/images/bullet_closed.png");
        event.stopPropagation();
    });
}

function updateBulletForListItem(listItem, openImgSrc, closedImgSrc) {
    const spanSelector = $("span.bullet", listItem).first();
    const span = spanSelector.get(0);
    const img = document.createElement('img');
    if($(listItem).hasClass("open")) {
        img.src = openImgSrc;
    }
    else if($(listItem).hasClass("closed")) {
        img.src = closedImgSrc;
    }
    span.textContent = "";
    span.appendChild(img);
}