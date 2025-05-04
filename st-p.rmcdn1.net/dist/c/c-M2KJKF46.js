import {
    a,
    d as h
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-P5VDGSEO.js";
import {
    v as u
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ZCYSW665.js";
import {
    e as r,
    i as c
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-QXKVEKVP.js";
import {
    c as l,
    d as p
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-YNQJOZVU.js";
import {
    D as o,
    F as b
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-6YK6Y3LS.js";
import {
    a as d
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";

function f({
    size: t,
    bgColor: g,
    color: e
}) {
    let n = typeof t == "number" ? `${t}px` : t && i[t] ? i[t] : i.big,
        m = t === "big" || t === "medium" ? "50%" : "100%";
    return o(a, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: g || (t === "big" || t === "medium" ? "tomato" : "transparent"),
        height: n,
        width: n,
        borderRadius: "100%",
        children: o(a, {
            height: m,
            width: m,
            border: "2px solid",
            borderRadius: "100%",
            css: l `
          animation: ${x} 2s infinite linear;
        `,
            borderColor: e ? `${e} ${e} transparent transparent` : t === "big" || t === "medium" || typeof t == "number" ? "white white transparent transparent" : `${r.light.tomato} ${r.light.tomato} transparent transparent`
        })
    })
}
var x, i, y, s = d(() => {
    "use strict";
    h();
    u();
    c();
    b();
    x = p `
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`, i = {
        small: 22,
        medium: 48,
        big: 56
    };
    f.defaultProps = {
        size: "big"
    };
    y = f
});
var $ = d(() => {
    "use strict";
    s();
    s()
});
export {
    y as a, $ as b
};