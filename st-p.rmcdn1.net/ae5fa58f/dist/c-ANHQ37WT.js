import {
    c as l,
    d as v
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-53SUDWFZ.js";
import {
    b as u,
    d as h
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BVZRGHXD.js";
import {
    a as m
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-X2AVVSDG.js";
import {
    a as n,
    b as f
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BXWTANI3.js";
import {
    d as c
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";
var a = "rm-fonts-loaded";

function V(e = {}) {
    return e.method === "color" ? {
        [`body:not(.${a}) &`]: {
            color: "transparent !important"
        }
    } : {
        [`body:not(.${a}) &`]: {
            visibility: "hidden"
        }
    }
}
var s = c(m());
h();
f();

function w() {
    let e = "",
        i = "";
    return typeof document < "u" && ("hidden" in document ? (e = "hidden", i = "visibilitychange") : "mozHidden" in document ? (e = "mozHidden", i = "mozvisibilitychange") : "msHidden" in document ? (e = "msHidden", i = "msvisibilitychange") : "webkitHidden" in document && (e = "webkitHidden", i = "webkitvisibilitychange")), {
        hiddenKey: e,
        eventName: i
    }
}

function y(e) {
    return n() ? !0 : e in document && !document[e]
}

function D(e, i = []) {
    let {
        hiddenKey: t,
        eventName: o
    } = w(), [d, p] = (0, s.useState)(() => y(t)), r = (0, s.useCallback)(() => {
        p(y(t))
    }, [t]);
    return u(() => {
        if (!n()) return document.addEventListener(o, r, !1), () => {
            document.removeEventListener(o, r)
        }
    }, [r, o]), u(() => {
        typeof e == "function" && e(d)
    }, [d, i]), typeof e == "function" ? void 0 : {
        isTabVisible: d
    }
}
var b = c(m());

function S(e, i) {
    let t = (0, b.useRef)(!1);
    (t.current ? !0 : i) && !t.current && typeof e == "function" && (e(), t.current = !0)
}
v();
f();
var K = n() ? {
        width: 0,
        height: 0
    } : {
        width: window.innerWidth,
        height: window.innerHeight
    },
    F = l("resize", K, () => ({
        width: window.innerWidth,
        height: window.innerHeight
    }));
export {
    S as a, F as b, a as c, V as d, w as e, D as f
};