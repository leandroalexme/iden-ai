import {
    a as b
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-X2AVVSDG.js";
import {
    a as g,
    d as v
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";

function i(l = !1) {
    let [r, o] = (0, e.useState)(l), n = (0, e.useCallback)(() => {
        o(!0)
    }, []), u = (0, e.useCallback)(() => {
        o(!1)
    }, []), s = (0, e.useCallback)(t => {
        (t ? .target).setAttribute("draggable", "true"), o(!0)
    }, []), a = (0, e.useCallback)(t => {
        (t ? .target).removeAttribute("draggable"), o(!1)
    }, []), c = (0, e.useCallback)(t => {
        t ? .preventDefault()
    }, []);
    return (0, e.useMemo)(() => ({
        isHovered: r,
        onMouseEnter: n,
        onMouseLeave: u,
        onTouchStart: s,
        onTouchEnd: a,
        onTouchCancel: a,
        onContextMenu: c
    }), [r, c, n, u, a, s])
}
var e, d = g(() => {
    "use strict";
    e = v(b())
});
export {
    i as a, d as b
};