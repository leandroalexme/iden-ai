import {
    a as d
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BJKDAX5B.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-PJEQGESF.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-VBQ72NC4.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-RDXN3NMA.js";
import {
    b as a,
    c as A
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-5R7RBNIB.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-NRKM3O27.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-UT22G6CJ.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-O454CSQB.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-KSXA7H77.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-VFUQL75R.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-N2N7GOUG.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-7TFJVZMD.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-2M3GYHUW.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ZJMKULCD.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-3HBNHCFR.js";
import {
    a as l,
    e as m,
    g as p
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-HQUF2BFY.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-MWTOBXCT.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-K4MSOFN3.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-OQWTLMV5.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BBGOCAHY.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-YZMXGORB.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-VCWMZ4MQ.js";
import {
    a as g
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-TCPTYTUX.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BVZRGHXD.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-LFUSN6Y5.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-XGXYOKTY.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-I6JNYDBX.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ZCYSW665.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-LY4A4ZCW.js";
import {
    a as C
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-QXKVEKVP.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-OQTCXMQ2.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-YNQJOZVU.js";
import {
    D as n,
    F as s
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-6YK6Y3LS.js";
import {
    a as y
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-X2AVVSDG.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ESPTCIFT.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-7GYVYFTN.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-FX3USXD4.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-LURZCKUX.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-UHXY36KN.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ISPIXJKU.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-JIE3ALW5.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-33VGZGAT.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ILD4NFNU.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BXWTANI3.js";
import {
    d as i
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";
var f = i(g()),
    w = i(C());
p();
var u = i(y());
p();
A();
s();

function k() {
    let {
        model: o
    } = (0, u.useContext)(l);
    return o.url ? n(a, {
        url: o.url,
        socials: o.socials,
        artwork: o.artwork,
        type: o.current_type,
        color: o.color,
        comments: o.comments
    }) : null
}
var c = k;
var r = class extends d {
        initialize(e, t, h) {
            this.model = new f.default.Model(e), d.prototype.initialize.apply(this, [e, t, h])
        }
        render() {
            return this.makeBox("audio"), this.preloadSDK().catch(() => {}).finally(() => {
                if (m({
                        component: c,
                        domElement: this.$el[0],
                        model: this.model,
                        onDestroy: () => {
                            let e = this.$el[0];
                            w.default.unmountComponentAtNode(e), e && e.parentNode && e.parentNode.removeChild(e)
                        }
                    }), typeof window.SC < "u") {
                    let e = window.SC.Widget(this.$el.find("iframe")[0]);
                    e.bind(window.SC.Widget.Events.READY, this.widgetIsLoaded), e.bind(window.SC.Widget.Events.ERROR, this.widgetIsLoaded)
                } else this.widgetIsLoaded()
            }), this.rendered = !0, this
        }
        isValid() {
            return !!this.model.get("url")
        }
        async preloadSDK() {
            let t = await fetch("https://w.soundcloud.com/player/api.js");
            if (!t.ok) throw new Error("Failed to load SoundCloud SDK");
            await t.text()
        }
    },
    P = r;
export {
    P as
    default
};