import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";
var g = ({
        widget: e
    }) => {
        if (e && e.isDragging) {
            e.isDragging = !1, e.mag.isWidgetDragging = !1, document.body.style.pointerEvents === "none" && (document.body.style.pointerEvents = "");
            let t = e.$el ? .[0];
            t && t.classList.toggle("dragging"), document.onselectstart = () => !0, e.mag.trigger("widget:drag:stopped")
        }
    },
    n = g;
export {
    n as
    default
};