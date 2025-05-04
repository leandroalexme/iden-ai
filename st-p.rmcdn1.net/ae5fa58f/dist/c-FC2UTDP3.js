import {
    a as i
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BJKDAX5B.js";
import {
    a as n,
    b as p
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-IHO7BQ4B.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-PJEQGESF.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-VBQ72NC4.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-RDXN3NMA.js";
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
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-HQUF2BFY.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-MWTOBXCT.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-K4MSOFN3.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-OQWTLMV5.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BBGOCAHY.js";
import {
    o as s,
    p as u
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-YZMXGORB.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-VCWMZ4MQ.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-TCPTYTUX.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BVZRGHXD.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-LFUSN6Y5.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-XGXYOKTY.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-I6JNYDBX.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ZCYSW665.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-LY4A4ZCW.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-QXKVEKVP.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-OQTCXMQ2.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-YNQJOZVU.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-6YK6Y3LS.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-X2AVVSDG.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ESPTCIFT.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-7GYVYFTN.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-FX3USXD4.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-LURZCKUX.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-UHXY36KN.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ISPIXJKU.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-JIE3ALW5.js";
import {
    b as a
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-33VGZGAT.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ILD4NFNU.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BXWTANI3.js";
import {
    d
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";
var o = d(a());
u();
p();
var l = i.extend({
        DO_NOT_WAIT_FOR_PRELOAD: !0,
        initialize: function() {
            return i.prototype.initialize.apply(this, arguments), this.current_type === "type_like_box" && (this.current_type = "type_page", this.type_page = this.type_like_box), this
        },
        render: function() {
            return this.makeBox("widget-facebook"), this.rendered = !0, this.started ? this.start() : !RM.screenshot && this.widgetIsLoaded(), this
        },
        start: function() {
            if (this.started = !0, this.destroyed || !this.rendered || this.innerRendered) return this;
            this.innerRendered = !0;
            let e = this,
                r, t, h = ["type_like_button", "type_page", "type_comments"];
            return this.current_type ? (t = this[this.current_type], t.w = this.w, t.h = this.h, t.use_own_url === "mag" ? t.url = this.page.mag.getUrl() : (t.use_own_url === "page" || !t.url) && (t.url = this.page.getUrl()), r = n["template-constructor-block-facebook-" + this.current_type], this.$el.html(r({
                data: t
            })).removeClass(h.join(" ")).addClass(this.current_type), this.current_type === "type_comments" ? this.$el.css({
                "overflow-x": "hidden",
                "overflow-y": "auto"
            }) : this.current_type !== "type_like_button" && this.$el.css({
                overflow: "hidden"
            }), s.initFacebookAPI(function() {
                e.destroyed || !e.innerRendered || window.FB.XFBML.parse(e.$el.get(0), function() {
                    o.default.delay(function() {
                        e.destroyed || !e.innerRendered || (e.widgetIsLoaded(), e.current_type === "type_like_button" && (e.iframe_w = e.$("iframe").width(), e.iframe_h = e.$("iframe").height()))
                    }, 500)
                })
            }), this) : (this.widgetIsLoaded(), this)
        },
        stop: function() {
            return this.started = !1, this
        }
    }),
    y = l;
export {
    y as
    default
};