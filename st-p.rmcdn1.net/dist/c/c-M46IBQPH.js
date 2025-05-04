import {
    a as d
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BJKDAX5B.js";
import {
    a as h,
    b as c
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-J2GD7AJO.js";
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
import {
    a,
    b as u
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-QL5DFQIW.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-FZKUL5ZS.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-MWTOBXCT.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-K4MSOFN3.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-OQWTLMV5.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BBGOCAHY.js";
import {
    o,
    p as w
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
    b as m
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-33VGZGAT.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ILD4NFNU.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BXWTANI3.js";
import {
    d as _
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";
var i = _(m());
u();
w();
c();
var p = d.extend({
        CONTENT_WAIT_TICK: 100,
        CONTENT_WAIT_MAX_TICKS: 20,
        CONTENT_IMG_WAIT: 1e3,
        DO_NOT_WAIT_FOR_PRELOAD: !0,
        render: function() {
            this.makeBox("widget-twitter"), this.rendered = !0;
            let e, t;
            return this.current_type ? (t = this[this.current_type], t.use_own_url === "mag" ? t.url = this.page.mag.getUrl() : (t.use_own_url === "page" || !t.url) && (t.url = this.page.getUrl()), RM.screenshot || (t.text = a.getFinalShare(this.page, i.default.extend(this.page.mag.model.toJSON(), {
                user: this.page.mag.user
            }), {
                forProject: t.use_own_url === "mag",
                customDomain: RM.common.isDomainViewer
            }).tweet), e = h["template-constructor-block-twitter-" + this.current_type], this.$el.html(e(t)), this.current_type === "type_timeline" && this.$el.find("a").attr({
                width: this.w,
                height: this.h
            }), o.initTwitterAPI(function() {
                this.destroyed || (window.twttr && window.twttr.widgets && i.default.isFunction(window.twttr.widgets.load) && window.twttr.widgets.load(), (0, i.default)(["type_timeline", "type_embed"]).contains(this.current_type) ? this.waitForTwitterContent() : this.widgetIsLoaded())
            }.bind(this)), this) : (this.widgetIsLoaded(), this)
        },
        waitForTwitterContent: function() {
            let e, t = 0,
                r, n = !1,
                s, l = {
                    type_timeline: ".timeline-Widget",
                    type_embed: "blockquote.tweet"
                };
            clearInterval(e), e = setInterval(i.default.bind(function() {
                if (t++, this.destroyed) {
                    clearInterval(e);
                    return
                }
                r = this.$el.find("iframe"), r.length == 1 && (s = l[this.current_type], n = r.contents().find(s).length > 0), (n || t > this.CONTENT_WAIT_MAX_TICKS) && (this.current_type == "type_embed" && r.css({
                    margin: 0,
                    "max-width": "100%"
                }), this.current_type == "type_timeline" && r.css({
                    width: "100%",
                    height: "100%!important",
                    "max-width": "100%"
                }), clearInterval(e), setTimeout(i.default.bind(function() {
                    this.widgetIsLoaded()
                }, this), this.CONTENT_IMG_WAIT))
            }, this), this.CONTENT_WAIT_TICK)
        }
    }),
    y = p;
export {
    y as
    default
};