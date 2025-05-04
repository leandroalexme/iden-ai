import {
    B as Z,
    E as Qe,
    a as Y,
    b as Ae,
    c as q,
    e as Le,
    y as U,
    z as K
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-XWERTDGT.js";
import {
    a as O,
    b as ke
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-5RBXWDXS.js";
import {
    a as Oe
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-OQUFNHOJ.js";
import {
    a as h,
    d as Pe
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-P5VDGSEO.js";
import {
    r as N,
    v as Ce
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ZCYSW665.js";
import {
    b as X,
    i as Ee
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-QXKVEKVP.js";
import {
    D as y,
    E as J,
    F as be
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-6YK6Y3LS.js";
import {
    a as Q
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-X2AVVSDG.js";
import {
    a as v,
    d as S
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";

function ee() {
    let [, s] = K(), [i, c] = U(), {
        setSidebarAutoOpen: u
    } = Z();
    (0, _.useEffect)(() => {
        let l = ({
            data: g
        }) => {
            if (!g) return;
            let o;
            try {
                o = JSON.parse(g)
            } catch {
                return
            }
            if (!o) return;
            let {
                type: a
            } = o;
            if (a === "increaseCartQuantity" || a === "decreaseCartQuantity") {
                let {
                    key: r
                } = o, e = i[r];
                if (!e) return;
                let T = a === "increaseCartQuantity" ? e.cartQuantity + 1 : e.cartQuantity - 1;
                c({ ...i,
                    [r]: { ...e,
                        cartQuantity: T
                    }
                })
            } else if (a === "removeFromCart") {
                let {
                    key: r
                } = o, e = { ...i
                };
                delete e[r], c(e)
            } else if (a === "toggleSidebar") {
                let {
                    visible: r
                } = o;
                s(r)
            } else if (a === "changeSetting") {
                let {
                    key: r,
                    value: e
                } = o;
                if (r === "bar-auto-open") u(!!e);
                else throw "Unsupported setting key in an e-commerce action"
            }
        };
        return window.addEventListener("message", l), () => {
            window.removeEventListener("message", l)
        }
    }, [i, c, s, u])
}
var _, te = v(() => {
    "use strict";
    _ = S(Q());
    Qe()
});
var re, Ie, Je, We = v(() => {
    "use strict";
    Ae();
    re = S(Q());
    Le();
    te();
    Ie = () => {
        let {
            currentPageId: s,
            goToPage: i
        } = q(l => ({
            goToPage: l.goToPage,
            currentPageId: l.state.currentPageId
        }), !0), [c, u] = Y();
        return (0, re.useEffect)(() => {
            let l = ({
                data: g
            }) => {
                if (!g) return;
                let o;
                try {
                    o = JSON.parse(g)
                } catch {
                    return
                }
                if (!o) return;
                let {
                    type: a
                } = o;
                if (a === "setOption") {
                    let {
                        options: r
                    } = o;
                    r.viewertype !== c.viewertype && setTimeout(() => i(s)), u({ ...c,
                        ...r
                    })
                } else if (a === "goToPage") {
                    let {
                        pageId: r,
                        scrollTop: e
                    } = o;
                    i(r, {
                        scrollTop: e
                    })
                } else if (a === "scrollPage") {
                    let {
                        scrollTop: r
                    } = o;
                    i(s, {
                        scrollTop: r,
                        silent: !0,
                        skipNavigation: !0
                    })
                }
            };
            return window.addEventListener("message", l), () => {
                window.removeEventListener("message", l)
            }
        }, [c, u, s, i]), ee(), null
    }, Je = Ie
});

function je({
    children: s,
    freeze: i,
    alwaysActiveBar: c = !1,
    onScroll: u,
    onFirstRender: l,
    mode: g = "vertical",
    overscrollBehavior: o,
    onDragStart: a,
    onDragEnd: r
}) {
    let e = g === "vertical",
        T = (0, t.useRef)((0, oe.isMobile)()).current,
        d = (0, t.useRef)(null),
        ne = O(d, i),
        C = (0, t.useRef)(null),
        [ie, ae] = (0, t.useState)(0),
        [se, W] = (0, t.useState)(0),
        [ce, le] = (0, t.useState)(0),
        [pe, M] = (0, t.useState)(!!T),
        [b, R] = (0, t.useState)(!1),
        [E, P] = (0, t.useState)(!1),
        [x, F] = (0, t.useState)(!1),
        A = (0, t.useRef)(0),
        [j] = (0, t.useState)({
            wrapperRef: (0, t.useRef)(null)
        }),
        {
            wrapperRef: n
        } = j,
        ue = O(n, i),
        [L, me] = (0, t.useState)(0),
        B = p => {
            if (d.current && n.current) {
                let f = d.current[e ? "scrollHeight" : "scrollWidth"],
                    m = n.current[e ? "scrollTop" : "scrollLeft"],
                    w = n.current[e ? "offsetHeight" : "offsetWidth"];
                if (m + w > f || m < 0) return;
                le(m / f * 100), u && p && u(p)
            }
        },
        ge = () => {
            if (d.current && n.current) {
                let p = d.current,
                    f = n.current,
                    m = p[e ? "scrollHeight" : "scrollWidth"],
                    w = C.current && C.current.parentElement,
                    z = (w && document.defaultView ? parseInt(document.defaultView.getComputedStyle(w).getPropertyValue(e ? "max-height" : "max-width"), 10) : 0) || f[e ? "clientHeight" : "clientWidth"],
                    G = z / m;
                ae(G), W(Math.max(G * 100, 10)), P(m > z);
                return
            }
            P(!1), W(0)
        };
    (0, t.useEffect)(() => {
        i ? E && P(!1) : (ge(), B())
    }, [i, E, d, n, ue, ne]), (0, t.useLayoutEffect)(() => {
        if (n.current) {
            n.current.addEventListener("scroll", B), l && l(n.current);
            let p = n.current[e ? "offsetWidth" : "offsetHeight"] - n.current[e ? "clientWidth" : "clientHeight"];
            me(p)
        }
    }, [n]);
    let de = p => {
            if (A.current = p[e ? "pageY" : "pageX"], F(!0), typeof a == "function") return a()
        },
        D = p => {
            let f = e ? "pageY" : "pageX",
                m = p[f] - A.current;
            A.current = p[f], Me(() => {
                n.current && (n.current[e ? "scrollTop" : "scrollLeft"] += m / ie)
            })
        },
        H = () => {
            if (F(!1), typeof r == "function") return r()
        };
    (0, t.useEffect)(() => {
        if (x) return window.addEventListener("mousemove", D), window.addEventListener("mouseup", H), () => {
            window.removeEventListener("mousemove", D), window.removeEventListener("mouseup", H)
        }
    }, [x]);
    let fe = {
            [e ? "maxHeight" : "maxWidth"]: "inherit"
        },
        V = L ? 0 : k,
        ye = e ? `0px ${V}px 0px 0px` : `0px 0px ${V}px 0px`,
        he = {
            height: e ? "100%" : `calc(100% + ${L||k}px)`,
            width: e ? `calc(100% + ${L||k}px)` : "100%",
            overscrollBehavior: o,
            [e ? "maxHeight" : "maxWidth"]: "inherit",
            [e ? "overflowY" : "overflowX"]: "scroll"
        },
        xe = {
            right: 2,
            left: e ? "initial" : 2,
            top: e ? 0 : "initial",
            bottom: e ? "initial" : 12,
            height: e ? "100%" : 8,
            width: e ? 8 : "initial"
        },
        ve = b || x || c ? 1 : pe ? .2 : 0,
        we = {
            [e ? "height" : "width"]: `${se}%`,
            [e ? "top" : "left"]: `${ce}%`,
            opacity: ve
        },
        $ = b || x || c ? "8px" : "4px",
        Se = b || x || c ? X.gray : "#A0A0A0",
        Te = {
            width: e ? $ : "100%",
            height: e ? "100%" : $
        };
    return y(Re.Provider, {
        value: j,
        children: J(h, {
            ref: C,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "relative",
            "data-scrollable": !0,
            onMouseEnter: () => M(!0),
            onMouseLeave: () => M(!1),
            ...fe,
            children: [y(h, {
                ref: n,
                position: "relative",
                padding: ye,
                ...he,
                children: s({
                    ref: d
                })
            }), E ? y(h, {
                position: "absolute",
                ...xe,
                children: y(Fe, {
                    style: we,
                    "data-testid": "scrollbar-scrubber",
                    onMouseEnter: () => R(!0),
                    onMouseLeave: () => R(!1),
                    children: y(h, {
                        margin: "0 auto",
                        borderRadius: 88,
                        onMouseDown: de,
                        backgroundColor: Se,
                        ...Te
                    })
                })
            }) : void 0]
        })
    })
}
var t, oe, k, Me, Re, Fe, Be, I = v(() => {
    "use strict";
    t = S(Q()), oe = S(Oe());
    ke();
    Pe();
    Ee();
    Ce();
    be();
    k = 18, Me = typeof window < "u" && (window.requestAnimationFrame || window.setImmediate) || (s => setTimeout(s, 0)), Re = (0, t.createContext)({}), Fe = N(h)
    `
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  padding: 8px 0;
  cursor: default;
  user-select: none;
  transition: opacity 0.1s;
`;
    Be = je
});
var De = v(() => {
    "use strict";
    I();
    I()
});

function ot(s) {
    return s.hasOwnProperty("tag")
}
var He = v(() => {
    "use strict"
});
export {
    te as a, Je as b, We as c, Re as d, Be as e, De as f, ot as g, He as h
};