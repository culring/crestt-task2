$(document).ready(function() {
    addEventsForTogglingListItems();
    addEventsForHoveringOverListItems();
});

function addEventsForTogglingListItems() {
    const nodeWithChildrenDescriptionSelector = $("li:not(.no_children)>span.node_description");
    nodeWithChildrenDescriptionSelector.click(function(event) {
        const parentListItem = this.parentElement;
        switchListItemChildrenShownClass(parentListItem);
        toggleChildrenList(parentListItem);
        updateBulletForListItem(parentListItem,
            "/assets/images/bullet_open_hovered.png",
            "/assets/images/bullet_closed_hovered.png");
        event.stopPropagation();
    });
}

function switchListItemChildrenShownClass(listItem) {
    if($(listItem).hasClass("children_show")) {
        $(listItem).removeClass("children_show");
        $(listItem).addClass("children_hide");
    }
    else {
        $(listItem).removeClass("children_hide");
        $(listItem).addClass("children_show");
    }
}

function toggleChildrenList(parentListItem) {
    const childrenListSelector = $("ul", parentListItem).first();
    childrenListSelector.slideToggle();
}

function addEventsForHoveringOverListItems() {
    const childrenNodeRowSelector = $("li:not(.no_children)>span.node_description,li:not(.no_children)>span.bullet");
    childrenNodeRowSelector.hover(handleMouseEnterChildrenNodeRow, handleMouseLeaveChildrenNodeRow);
}

function handleMouseEnterChildrenNodeRow(event) {
    const parentListItem = this.parentElement;
    const nodeDescriptionSelector = $("span.node_description", parentListItem).first();
    nodeDescriptionSelector.css("font-weight", "bold");
    updateBulletForListItem(parentListItem,
        "/assets/images/bullet_open_hovered.png",
        "/assets/images/bullet_closed_hovered.png");
    event.stopPropagation();
}

function handleMouseLeaveChildrenNodeRow(event) {
    const parentListItem = this.parentElement;
    const nodeDescriptionSelector = $("span.node_description", parentListItem).first();
    nodeDescriptionSelector.css("font-weight", "normal");
    updateBulletForListItem(parentListItem,
        "/assets/images/bullet_open.png",
        "/assets/images/bullet_closed.png");
    event.stopPropagation();
}

function updateBulletForListItem(listItem, openImgSrc, closedImgSrc) {
    const spanSelector = $("span.bullet", listItem).first();
    const span = spanSelector.get(0);
    const img = document.createElement('img');
    if($(listItem).hasClass("children_show")) {
        img.src = openImgSrc;
    }
    else if($(listItem).hasClass("children_hide")) {
        img.src = closedImgSrc;
    }
    span.textContent = "";
    span.appendChild(img);
}