import {
    e as w,
    g as x,
    m as _
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-OXCFVNGZ.js";
import {
    a as L,
    b as q
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-M2KJKF46.js";
import {
    a as P,
    b as A,
    c as te
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-O6KGWW5U.js";
import {
    d as j,
    n as z,
    q as C,
    r as ee
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-XXM23K5I.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-LNRZGIXR.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-2BVENUPD.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-YTXIKAGQ.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-IRIOEDIN.js";
import {
    a as m,
    g as V
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-HQUF2BFY.js";
import {
    a as c,
    d as $
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-P5VDGSEO.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-LFUSN6Y5.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-I6JNYDBX.js";
import {
    v as J
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ZCYSW665.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-LY4A4ZCW.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-QXKVEKVP.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-OQTCXMQ2.js";
import {
    c as u
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-YNQJOZVU.js";
import {
    C as N,
    D as i,
    E as M,
    F as h
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-6YK6Y3LS.js";
import {
    a as X
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-X2AVVSDG.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ESPTCIFT.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-LURZCKUX.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-UHXY36KN.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ISPIXJKU.js";
import {
    a as Y,
    d as K
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";

function ae({
    projectId: t,
    useSharedState: s,
    widget: k
}) {
    let {
        model: {
            uri: r,
            interactions: T,
            w: v
        },
        modelSet: U,
        modelSave: b
    } = (0, e.useContext)(m), [{
        isUploading: B,
        isSelected: Q,
        viewport: E,
        isKeyhole: G
    }, g] = s(), I = (0, e.useRef)(null), [a] = (0, e.useState)(() => new P), [f, D] = (0, e.useState)(!1), [y, S] = (0, e.useState)(() => r), [O, Z] = (0, e.useState)(0);
    (0, e.useEffect)(() => {
        let n = T;
        async function l() {
            if (G) return;
            let o = {};
            if (I.current) {
                let d = I.current.querySelector(oe);
                if (d) try {
                    d.style.height = "auto";
                    let p = await C(d),
                        W = v / p;
                    k.setInViewports((H, F) => {
                        if (F !== E) return {
                            h: H.w / W
                        }
                    }), o.h = p
                } catch {
                    console.error("Cannot get animation container height")
                }
            }
            n || (o.interactions = [z()]), b(o), setTimeout(() => {
                a.seek(0), a.play()
            }, 100)
        }
        r !== y && (S(r), a.addEventListener("Ready", l, {
            once: !0
        }), a.remount())
    }, [r, y]);
    async function R(n) {
        n.preventDefault(), D(!1);
        let l = n.dataTransfer.files ? .[0];
        if (!(!l || !t)) {
            g({
                isUploading: !0
            });
            try {
                let o = await j(l, t);
                o.uri && U({
                    uri: o.uri
                })
            } catch (o) {
                o instanceof Error && alert(`Error uploading Lottie file: ${o.message}`)
            } finally {
                setTimeout(() => g({
                    isUploading: !1
                }), 100)
            }
        }
    }
    return M(N, {
        children: [i(ie, {
            type: r === void 0 ? "placeholder" : Q ? "transparent" : "checkerboard"
        }), M(c, {
            ref: I,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "all",
            onDrop: R,
            onDragOver: () => D(!0),
            onDragLeave: () => D(!1),
            children: [i(A, {
                uri: r,
                player: a,
                onReady: () => g({
                    isPlayerReady: !0,
                    isUploading: !1,
                    player: a
                }),
                lottieSizes: ({
                    width: n,
                    height: l
                }) => Z(Math.min(n, l))
            }), (f || B) && i(re, {
                replace: f,
                size: O
            })]
        })]
    })
}
var e, oe, ie, re, fe, ne = Y(() => {
    e = K(X());
    $();
    V();
    te();
    ee();
    q();
    _();
    J();
    h();
    oe = ".animation", ie = (0, e.memo)(({
        type: t
    }) => i(c, {
        position: "absolute",
        top: "0",
        left: "0",
        backgroundRepeat: "repeat",
        opacity: t === "placeholder" ? 1 : .2,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: t === "checkerboard" ? 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNzQ0XzYwMjkpIj4KPHBhdGggZD0iTTYgN0M2LjU1MjI4IDcgNyA2LjU1MjI4IDcgNkM3IDUuNDQ3NzIgNi41NTIyOCA1IDYgNUM1LjQ0NzcyIDUgNSA1LjQ0NzcyIDUgNkM1IDYuNTUyMjggNS40NDc3MiA3IDYgN1oiIGZpbGw9IiMyODI4MjgiLz4KPHBhdGggZD0iTTIgMUMyLjU1MjI4IDEgMyAxLjQ0NzcyIDMgMkMzIDIuNTUyMjggMi41NTIyOCAzIDIgM0MxLjQ0NzcyIDMgMSAyLjU1MjI4IDEgMkMxIDEuNDQ3NzIgMS40NDc3MiAxIDIgMVoiIGZpbGw9IiMyODI4MjgiLz4KPHBhdGggZD0iTTIgOEMzLjEwNDU3IDggNCA3LjEwNDU3IDQgNkM0IDQuODk1NDMgMy4xMDQ1NyA0IDIgNEMwLjg5NTQzIDQgMCA0Ljg5NTQzIDAgNkMwIDcuMTA0NTcgMC44OTU0MyA4IDIgOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02IDRDNy4xMDQ1NyA0IDggMy4xMDQ1NyA4IDJDOCAwLjg5NTQzIDcuMTA0NTcgMCA2IDBDNC44OTU0MyAwIDQgMC44OTU0MyA0IDJDNCAzLjEwNDU3IDQuODk1NDMgNCA2IDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzc0NF82MDI5Ij4KPHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iOCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K")' : t === "placeholder" ? "#F4F4F4" : "transparent",
        css: u `
        svg {
          max-width: 64px;
          max-height: 64px;
          width: 100%;
          height: 100%;
        }
      `,
        children: t === "placeholder" ? i(x, {}) : null
    })), re = (0, e.memo)(({
        replace: t,
        size: s
    }) => i(c, {
        display: "flex",
        position: "absolute",
        top: "50%",
        left: "50%",
        cursor: "default",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        css: s ? u `
              & > div {
                width: ${s/3}px;
                height: ${s/3}px;
              }
            ` : void 0,
        children: t ? i(w, {}) : i(L, {
            bgColor: "gray"
        })
    }));
    fe = ae
});
ne();
export {
    ae as LottieBlock, fe as
    default
};