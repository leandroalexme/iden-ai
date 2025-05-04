import {
    q as o,
    r as p
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-YZMXGORB.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-VCWMZ4MQ.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-TCPTYTUX.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-XGXYOKTY.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-I6JNYDBX.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-X2AVVSDG.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-FX3USXD4.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-LURZCKUX.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ISPIXJKU.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-JIE3ALW5.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-33VGZGAT.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ILD4NFNU.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BXWTANI3.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";
p();
var g = ({
        widget: t,
        e: r
    }) => {
        if (t && !t.isDragging) {
            t.isDragging = !0, t.mag.isWidgetDragging = !0;
            let n = t.$el ? .[0];
            n && n.classList.toggle("dragging"), t.currentScale = t.mag.getScale(t.mag.currentPage.pageViewport) || 1;
            let s = 0;
            if (t.hasAnimation() && n) {
                let e = n,
                    l = {
                        x: 1,
                        y: 1
                    };
                for (; e ? .parentElement ? .classList.contains("animation-container");) {
                    let i = o.getElementScale(e.parentElement),
                        m = o.getElementRotationAngle(e.parentElement);
                    m && (s += m), i && !m && (l.x *= i.x, l.y *= i.y), e = e.parentElement
                }(l.x !== 1 || l.y !== 1) && (t.animationScale = l), s && (t.animationAngle = s)
            }
            t.mouseStart = {
                x: t.is_above ? r.clientX : r.pageX,
                y: t.is_above ? r.clientY : r.pageY
            };
            let a = o.getElementTranslateByString(n);
            if (n.style.transform) {
                let e = n.style.transform;
                /translate\(.+?\)/.test(e) ? e = e.replace(/translate\(.+?\)/, `translate(${a.x}px, ${a.y}px)`) : e += ` translate(${a.x}px, ${a.y}px) `, n.style.transform = e
            } else n.style.transform = `translate(${a.x}px, ${a.y}px)`;
            t.startPosition = {
                x: a.x,
                y: a.y
            }, document.onselectstart = () => !1;
            let c = t.softBringToTopZ();
            t.z = c
        }
    },
    x = g;
export {
    x as
    default
};