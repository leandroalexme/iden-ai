import {
    a as ip,
    c as op,
    g as $E
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-VCWMZ4MQ.js";
import {
    a as DE
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-TCPTYTUX.js";
import {
    e as rp,
    o as np,
    p as UE
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-I6JNYDBX.js";
import {
    a as FE
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-X2AVVSDG.js";
import {
    D as kE,
    r as Qd
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-FX3USXD4.js";
import {
    b as Be,
    c as tp
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-LURZCKUX.js";
import {
    c as ep,
    e as LE
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ISPIXJKU.js";
import {
    a as Zd
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-JIE3ALW5.js";
import {
    b as el
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-33VGZGAT.js";
import {
    a as w,
    b as Jd,
    d as lr
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";
var Gi, sp, jE, ap, lp = w(() => {
    "use strict";
    Gi = lr(DE()), sp = lr(el()), jE = typeof window < "u" && window.RM && window.RM.DEBUG ? {
        on: function(r, e) {
            console.log('RM.Events: subscribe to "' + r + '": ', e), Gi.default.Events.on.apply(this, arguments)
        },
        trigger: function(r, e) {
            console.log('RM.Events: "' + r + '": ', e), Gi.default.Events.trigger.apply(this, arguments)
        }
    } : {}, ap = sp.default.extend(jE, Gi.default.Events)
});
var fp = Jd((up, cp) => {
    "use strict";
    (function(r) {
        var e;
        if (typeof define == "function" && define.amd && (define(r), e = !0), typeof up == "object" && (cp.exports = r(), e = !0), !e) {
            var t = window.Cookies,
                n = window.Cookies = r();
            n.noConflict = function() {
                return window.Cookies = t, n
            }
        }
    })(function() {
        function r() {
            for (var n = 0, i = {}; n < arguments.length; n++) {
                var o = arguments[n];
                for (var s in o) i[s] = o[s]
            }
            return i
        }

        function e(n) {
            return n.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }

        function t(n) {
            function i() {}

            function o(u, a, l) {
                if (!(typeof document > "u")) {
                    l = r({
                        path: "/"
                    }, i.defaults, l), typeof l.expires == "number" && (l.expires = new Date(new Date * 1 + l.expires * 864e5)), l.expires = l.expires ? l.expires.toUTCString() : "";
                    try {
                        var c = JSON.stringify(a);
                        /^[\{\[]/.test(c) && (a = c)
                    } catch {}
                    a = n.write ? n.write(a, u) : encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), u = encodeURIComponent(String(u)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var f = "";
                    for (var d in l) l[d] && (f += "; " + d, l[d] !== !0 && (f += "=" + l[d].split(";")[0]));
                    return document.cookie = u + "=" + a + f
                }
            }

            function s(u, a) {
                if (!(typeof document > "u")) {
                    for (var l = {}, c = document.cookie ? document.cookie.split("; ") : [], f = 0; f < c.length; f++) {
                        var d = c[f].split("="),
                            p = d.slice(1).join("=");
                        !a && p.charAt(0) === '"' && (p = p.slice(1, -1));
                        try {
                            var h = e(d[0]);
                            if (p = (n.read || n)(p, h) || e(p), a) try {
                                p = JSON.parse(p)
                            } catch {}
                            if (l[h] = p, u === h) break
                        } catch {}
                    }
                    return u ? l[u] : l
                }
            }
            return i.set = o, i.get = function(u) {
                return s(u, !1)
            }, i.getJSON = function(u) {
                return s(u, !0)
            }, i.remove = function(u, a) {
                o(u, "", r(a, {
                    expires: -1
                }))
            }, i.defaults = {}, i.withConverter = t, i
        }
        return t(function() {})
    })
});
var ke, dp, xn = w(() => {
    "use strict";
    ke = () => typeof window < "u", dp = () => {
        if (!ke()) return !1;
        try {
            return window.self !== window.top
        } catch {
            return !0
        }
    }
});
var It, tl = w(() => {
    "use strict";
    (function(r) {
        r[r.Registration = 11192105] = "Registration", r[r.FirstPurchase = 11192113] = "FirstPurchase", r[r.BookDemo = 11192121] = "BookDemo", r[r.PersonalMonthlyFirstPurchase = 19651553] = "PersonalMonthlyFirstPurchase", r[r.PersonalYearlyFirstPurchase = 19651561] = "PersonalYearlyFirstPurchase", r[r.FreelancerMonthlyFirstPurchase = 19651569] = "FreelancerMonthlyFirstPurchase", r[r.FreelancerYearlyFirstPurchase = 19651577] = "FreelancerYearlyFirstPurchase", r[r.StudioMonthlyFirstPurchase = 19651585] = "StudioMonthlyFirstPurchase", r[r.StudioYearlyFirstPurchase = 19651593] = "StudioYearlyFirstPurchase", r[r.BusinessMonthlyFirstPurchase = 19651601] = "BusinessMonthlyFirstPurchase", r[r.BusinessYearlyFirstPurchase = 19651617] = "BusinessYearlyFirstPurchase"
    })(It || (It = {}))
});
async function rl({
    partnerId: r
}) {
    if (!(!ke() || pp() || !r)) return new Promise((e, t) => {
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [], window._linkedin_data_partner_ids.push(r);
        let n = document.getElementsByTagName("script")[0],
            i = document.createElement("script");
        i.type = "text/javascript", i.async = !0, i.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js", i.onload = () => e(), i.onerror = () => t(), n ? .parentNode ? .insertBefore(i, n);
        let o = document.createElement("img");
        o.alt = "", o.height = 1, o.width = 1, o.src = `https://px.ads.linkedin.com/collect/?pid=${r}&fmt=gif`
    })
}
async function nl({
    partnerId: r,
    eventId: e
}) {
    !ke() || !e || (!pp() && r && await rl({
        partnerId: r
    }), window ? .lintrk ? .("track", {
        conversion_id: e
    }))
}

function BE({
    level: r,
    interval: e
}) {
    return {
        personal: {
            month: It.PersonalMonthlyFirstPurchase,
            year: It.PersonalYearlyFirstPurchase
        },
        freelancer: {
            month: It.FreelancerMonthlyFirstPurchase,
            year: It.FreelancerYearlyFirstPurchase
        },
        studio: {
            month: It.StudioMonthlyFirstPurchase,
            year: It.StudioYearlyFirstPurchase
        },
        business: {
            month: It.BusinessMonthlyFirstPurchase,
            year: It.BusinessYearlyFirstPurchase
        }
    }[r] ? .[e]
}
async function hp({
    level: r,
    interval: e,
    partnerId: t
}) {
    if (!ke() || !r || !e || !t) return;
    let n = BE({
        level: r,
        interval: e
    });
    n && await nl({
        partnerId: t,
        eventId: n
    })
}
var pp, mp = w(() => {
    "use strict";
    xn();
    tl();
    pp = () => !!window ? .lintrk
});
var gp, vp = w(() => {
    "use strict";
    (function(r) {
        r.Registration = "iGBtCP76u9QDEIu60MsD", r.FirstPurchase = "IAUrCIivjtYDEIu60MsD", r.FirstPurchasePersonal = "7fmQCNLswYAYEIu60MsD", r.FirstPurchaseFreelancer = "REXDCIHywYAYEIu60MsD", r.FirstPurchaseStudio = "86PxCICIw4AYEIu60MsD", r.FirstPurchaseBusiness = "o7gMCOKNw4AYEIu60MsD"
    })(gp || (gp = {}))
});
var il, In, Cn, wr, VE, WE, GE, zE, qE, HE, YE, KE, ol, sl = w(() => {
    "use strict";
    il = lr(fp());
    mp();
    xn();
    vp();
    tl();
    In = () => {
        if (ke()) return !!window.gtag
    }, Cn = "", wr = "", VE = ({
        GA_ID: r,
        GA4_ID: e,
        GOOGLE_ADS_ID: t,
        userId: n,
        userEmail: i
    }) => {
        let o = document.createElement("script");
        o.async = !0, o.src = `https://www.googletagmanager.com/gtag/js?id=${r}`, document.head.appendChild(o);
        let s = document.createElement("script");
        s.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    ${e?`gtag('config', '${e}', { send_page_view: false, user_id: '${n||""}' });`:""}
    gtag('js', new Date());
    gtag('set', {
      'send_page_view': false,
      'custom_map': {
        'dimension2': 'userId',
        'dimension9': 'userId',
        'dimension13': 'clientId'
      }
    })
    ${n?`gtag('config', '${r}', { 'userId': '${n}'});`:`gtag('config', '${r}');`}
    ${t?`gtag('config', '${t}', { "allow_enhanced_conversions": true });`:""}
    ${t&&i?`gtag('set', 'user_data', { "email": "${i}" });`:""}
  `, document.head.appendChild(s)
    }, WE = ({
        userId: r,
        ignoreIsGAInitialized: e = !1,
        GA_ID: t,
        GA4_ID: n,
        GOOGLE_ADS_ID: i,
        userEmail: o
    }) => {
        if (!(!ke() || In() && !e)) return Cn = n || "", VE({
            GA_ID: t,
            GA4_ID: n,
            GOOGLE_ADS_ID: i,
            userId: r,
            userEmail: o
        }), {
            GA_ID: t,
            GA4_ID: n,
            GOOGLE_ADS_ID: i,
            userId: r
        }
    }, GE = () => {
        let r = il.default.get("shortlink_redirect");
        if (!r) return {};
        let e = JSON.parse(atob(r));
        return il.default.remove("shortlink_redirect"), {
            campaignName: e.utm_campaign,
            campaignSource: e.utm_source,
            campaignMedium: e.utm_medium
        }
    }, zE = ({
        campaignName: r,
        campaignSource: e,
        campaignMedium: t
    } = {}) => {
        if (!ke() || !In()) return null;
        let n = { ...GE(),
                campaignName: r,
                campaignSource: e,
                campaignMedium: t
            },
            i = (o, s) => {
                let u = {
                    campaign: {
                        name: o.campaignName,
                        source: o.campaignSource,
                        medium: o.campaignMedium
                    },
                    c_id: s || ""
                };
                window.gtag("event", "page_view", u)
            };
        return Cn ? wr ? i(n, wr) : window.gtag("get", Cn, "client_id", o => {
            wr = o, i(n, o)
        }) : i(n), n
    }, qE = (r, e = {}) => {
        if (!ke() || !In()) return null;
        let t = n => {
            let i = {
                c_id: n || "",
                event_label: e.eventLabel,
                value: e.eventValue
            };
            for (let o in e)["eventLabel", "eventValue"].includes(o) || (i[o] = e[o]);
            window.gtag("event", r, i)
        };
        return Cn ? wr ? t(wr) : window.gtag("get", Cn, "client_id", n => {
            typeof n == "string" && (wr = n, t(wr))
        }) : t(""), {
            action: r,
            ...e
        }
    }, HE = ({
        actionName: r,
        eventLabel: e,
        eventCategory: t
    }) => !ke() || !In() ? null : (window.gtag("event", r, {
        event_category: t,
        event_label: e
    }), {
        actionName: r,
        eventCategory: t,
        eventLabel: e
    }), YE = ({
        CONVERSION_ID: r,
        CONVERSION_LABEL: e,
        value: t,
        transaction_id: n = "",
        ...i
    }) => {
        if (!ke() || !In()) return null;
        let o = {};
        return t && (o = {
            value: t,
            transaction_id: n,
            currency: "USD"
        }), o = {
            send_to: `${r}/${e}`,
            ...o,
            ...i
        }, window.gtag("event", "conversion", o), { ...i,
            CONVERSION_ID: r,
            CONVERSION_LABEL: e
        }
    }, KE = ({
        location: r,
        role: e,
        withAnalytics: t = !0
    }) => !r || !ke() ? Promise.resolve() : fetch(`/api/me/visit/${r}/${e||""}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            withAnalytics: t
        })
    }), ol = {
        init: WE,
        sendEvent: qE,
        sendConversionEvent: YE,
        sendPromoActionEvent: HE,
        trackPage: zE,
        trackDailyVisit: KE,
        initLinkedInInsights: rl,
        sendEventToLinkedInInsights: nl,
        sendPlanFirstPurchaseEventToLinkedInInsights: hp
    }
});
var yp, wp, bp, Sp = w(() => {
    "use strict";
    (function(r) {
        r.Create = "create", r.PageView = "pageview", r.ProfileSettings = "profileSettings", r.ProfileClick = "profileClick", r.ProfileSettingsUsage = "profileSettingsUsage", r.ProfileBanner = "profileBanner"
    })(yp || (yp = {}));
    (function(r) {
        r.Publish = "publish", r.Preview = "preview", r.WidgetAdd = "widgetAdd", r.WidgetTotal = "widgetTotal", r.WidgetFeature = "widgetFeature", r.WidgetMisc = "widgetMisc", r.OpenProject = "openProject", r.ViewportFeature = "viewportFeature", r.SettingsProject = "settingsProject", r.SettingsViewer = "settingsViewer", r.SettingsGeneral = "settingsGeneral", r.Template = "template", r.MyTemplates = "myTemplates", r.HelpTour = "helpTour", r.HelpTourProgress = "helpTourProgress", r.HelpTourLeave = "helpTourLeave", r.EditorTips = "editorTips", r.EditorTips2 = "editorTips2", r.EditorHelp = "editorHelp", r.EditorActions = "editorActions", r.ContentEditMode = "contentEditMode", r.Zendesk = "zendesk", r.BlocksMode = "blocksMode", r.CommentsMode = "commentsMode", r.CommentAdd = "commentAdd", r.Popup = "popup", r.SettingsLayers = "settingsLayers", r.AnimationAddStep = "animationAddStep", r.AnimationAddTrigger = "animationAddTrigger", r.AnimationLoad = "animationLoad", r.AnimationSettings = "animationSettings", r.AnimationPresetSelected = "animationPresetSelected", r.SettingsPreviewViewer = "settingsPreviewViewer", r.PresetAdd = "presetAdd", r.PresetClick = "presetClick", r.PresetMisc = "presetMisc", r.PresetSave = "presetSave", r.WidgetArrange = "widgetArrange", r.WhatsNewPopup = "whatsNewPopup", r.GroupEdit = "groupEdit", r.ExamplesSubmit = "examplesSubmit", r.WidgetLottie = "widgetLottie", r.WidgetVideoUpload = "widgetVideoUpload", r.WidgetVideoState = "widgetVideoState"
    })(wp || (wp = {}));
    (function(r) {
        r.UpgradeBanner = "upgradeBanner"
    })(bp || (bp = {}))
});
var Ep, _p = w(() => {
    "use strict";
    (function(r) {
        r.TemplatePreview = "template preview", r.TemplatesPage = "templates page", r.Profile = "profile", r.Help = "help", r.Editor = "editor", r.EditorHelp = "editor help", r.EditorPages = "editor pages"
    })(Ep || (Ep = {}))
});

function xp(r, e) {
    var t = {};
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (t[n[i]] = r[n[i]]);
    return t
}

function Se(r, e, t, n) {
    function i(o) {
        return o instanceof t ? o : new t(function(s) {
            s(o)
        })
    }
    return new(t || (t = Promise))(function(o, s) {
        function u(c) {
            try {
                l(n.next(c))
            } catch (f) {
                s(f)
            }
        }

        function a(c) {
            try {
                l(n.throw(c))
            } catch (f) {
                s(f)
            }
        }

        function l(c) {
            c.done ? o(c.value) : i(c.value).then(u, a)
        }
        l((n = n.apply(r, e || [])).next())
    })
}

function Ee(r, e) {
    var t = {
            label: 0,
            sent: function() {
                if (o[0] & 1) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        },
        n, i, o, s;
    return s = {
        next: u(0),
        throw: u(1),
        return: u(2)
    }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }), s;

    function u(l) {
        return function(c) {
            return a([l, c])
        }
    }

    function a(l) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; s && (s = 0, l[0] && (t = 0)), t;) try {
            if (n = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done) return o;
            switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
                case 0:
                case 1:
                    o = l;
                    break;
                case 4:
                    return t.label++, {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    t.label++, i = l[1], l = [0];
                    continue;
                case 7:
                    l = t.ops.pop(), t.trys.pop();
                    continue;
                default:
                    if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
                        t.label = l[1];
                        break
                    }
                    if (l[0] === 6 && t.label < o[1]) {
                        t.label = o[1], o = l;
                        break
                    }
                    if (o && t.label < o[2]) {
                        t.label = o[2], t.ops.push(l);
                        break
                    }
                    o[2] && t.ops.pop(), t.trys.pop();
                    continue
            }
            l = e.call(r, t)
        } catch (c) {
            l = [6, c], i = 0
        } finally {
            n = o = 0
        }
        if (l[0] & 5) throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}

function Ft(r) {
    var e = typeof Symbol == "function" && Symbol.iterator,
        t = e && r[e],
        n = 0;
    if (t) return t.call(r);
    if (r && typeof r.length == "number") return {
        next: function() {
            return r && n >= r.length && (r = void 0), {
                value: r && r[n++],
                done: !r
            }
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function Yt(r, e) {
    var t = typeof Symbol == "function" && r[Symbol.iterator];
    if (!t) return r;
    var n = t.call(r),
        i, o = [],
        s;
    try {
        for (;
            (e === void 0 || e-- > 0) && !(i = n.next()).done;) o.push(i.value)
    } catch (u) {
        s = {
            error: u
        }
    } finally {
        try {
            i && !i.done && (t = n.return) && t.call(n)
        } finally {
            if (s) throw s.error
        }
    }
    return o
}

function Tn(r, e, t) {
    if (t || arguments.length === 2)
        for (var n = 0, i = e.length, o; n < i; n++)(o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
    return r.concat(o || Array.prototype.slice.call(e))
}
var de, Ut = w(() => {
    "use strict";
    de = function() {
        return de = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) {
                t = arguments[n];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
        }, de.apply(this, arguments)
    }
});
var Cp, Ip, Tp, Op, Rp, Pp, Ap, al = w(() => {
    "use strict";
    Cp = "Event tracked successfully", Ip = "Unexpected error occurred", Tp = "Event rejected due to exceeded retry count", Op = "Event skipped due to optOut config", Rp = "Event rejected due to missing API key", Pp = "Invalid API key", Ap = "Client not initialized"
});
var Pe, Kt, ur, Mp = w(() => {
    "use strict";
    (function(r) {
        r.SET = "$set", r.SET_ONCE = "$setOnce", r.ADD = "$add", r.APPEND = "$append", r.PREPEND = "$prepend", r.REMOVE = "$remove", r.PREINSERT = "$preInsert", r.POSTINSERT = "$postInsert", r.UNSET = "$unset", r.CLEAR_ALL = "$clearAll"
    })(Pe || (Pe = {}));
    (function(r) {
        r.REVENUE_PRODUCT_ID = "$productId", r.REVENUE_QUANTITY = "$quantity", r.REVENUE_PRICE = "$price", r.REVENUE_TYPE = "$revenueType", r.REVENUE = "$revenue"
    })(Kt || (Kt = {}));
    (function(r) {
        r.IDENTIFY = "$identify", r.GROUP_IDENTIFY = "$groupidentify", r.REVENUE = "revenue_amount"
    })(ur || (ur = {}))
});
var Le, Np = w(() => {
    "use strict";
    (function(r) {
        r[r.None = 0] = "None", r[r.Error = 1] = "Error", r[r.Warn = 2] = "Warn", r[r.Verbose = 3] = "Verbose", r[r.Debug = 4] = "Debug"
    })(Le || (Le = {}))
});
var nt, Dp = w(() => {
    "use strict";
    (function(r) {
        r.US = "US", r.EU = "EU"
    })(nt || (nt = {}))
});
var H, kp = w(() => {
    "use strict";
    (function(r) {
        r.Unknown = "unknown", r.Skipped = "skipped", r.Success = "success", r.RateLimit = "rate_limit", r.PayloadTooLarge = "payload_too_large", r.Invalid = "invalid", r.Failed = "failed", r.Timeout = "Timeout", r.SystemError = "SystemError"
    })(H || (H = {}))
});
var ll, Lp = w(() => {
    "use strict";
    ll = null
});
var ul, cl, fl, Fp = w(() => {
    "use strict";
    ul = ["a", "button", "input", "select", "textarea", "label", "video", "audio", '[contenteditable="true" i]', "[data-amp-default-track]", ".amp-default-track"], cl = "data-amp-track-", fl = ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6"]
});
var Fe = w(() => {
    "use strict";
    Mp();
    Np();
    Dp();
    kp();
    Lp();
    Fp()
});
var Xt, zi = w(() => {
    "use strict";
    Fe();
    Xt = function(r, e, t) {
        return e === void 0 && (e = 0), t === void 0 && (t = H.Unknown), {
            event: r,
            code: e,
            message: t
        }
    }
});
var mt, qi = w(() => {
    "use strict";
    mt = function(r) {
        return r ? (r ^ Math.random() * 16 >> r / 4).toString(16) : (String(1e7) + String(-1e3) + String(-4e3) + String(-8e3) + String(-1e11)).replace(/[018]/g, mt)
    }
});
var Up, $p = w(() => {
    "use strict";
    Ut();
    zi();
    qi();
    Up = function() {
        function r(e) {
            this.client = e, this.queue = [], this.applying = !1, this.plugins = []
        }
        return r.prototype.register = function(e, t) {
            var n, i;
            return Se(this, void 0, void 0, function() {
                return Ee(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return this.plugins.some(function(s) {
                                return s.name === e.name
                            }) ? (t.loggerProvider.warn("Plugin with name ".concat(e.name, " already exists, skipping registration")), [2]) : (e.name === void 0 && (e.name = mt(), t.loggerProvider.warn(`Plugin name is undefined. 
      Generating a random UUID for plugin name: `.concat(e.name, `. 
      Set a name for the plugin to prevent it from being added multiple times.`))), e.type = (n = e.type) !== null && n !== void 0 ? n : "enrichment", [4, (i = e.setup) === null || i === void 0 ? void 0 : i.call(e, t, this.client)]);
                        case 1:
                            return o.sent(), this.plugins.push(e), [2]
                    }
                })
            })
        }, r.prototype.deregister = function(e, t) {
            var n;
            return Se(this, void 0, void 0, function() {
                var i, o;
                return Ee(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return i = this.plugins.findIndex(function(u) {
                                return u.name === e
                            }), i === -1 ? (t.loggerProvider.warn("Plugin with name ".concat(e, " does not exist, skipping deregistration")), [2]) : (o = this.plugins[i], this.plugins.splice(i, 1), [4, (n = o.teardown) === null || n === void 0 ? void 0 : n.call(o)]);
                        case 1:
                            return s.sent(), [2]
                    }
                })
            })
        }, r.prototype.reset = function(e) {
            this.applying = !1;
            var t = this.plugins;
            t.map(function(n) {
                var i;
                return (i = n.teardown) === null || i === void 0 ? void 0 : i.call(n)
            }), this.plugins = [], this.client = e
        }, r.prototype.push = function(e) {
            var t = this;
            return new Promise(function(n) {
                t.queue.push([e, n]), t.scheduleApply(0)
            })
        }, r.prototype.scheduleApply = function(e) {
            var t = this;
            this.applying || (this.applying = !0, setTimeout(function() {
                t.apply(t.queue.shift()).then(function() {
                    t.applying = !1, t.queue.length > 0 && t.scheduleApply(0)
                })
            }, e))
        }, r.prototype.apply = function(e) {
            return Se(this, void 0, void 0, function() {
                var t, n, i, o, s, u, a, p, h, l, c, f, d, p, h, g, m, b, v, y, S, _;
                return Ee(this, function(x) {
                    switch (x.label) {
                        case 0:
                            if (!e) return [2];
                            t = Yt(e, 1), n = t[0], i = Yt(e, 2), o = i[1], s = this.plugins.filter(function(C) {
                                return C.type === "before"
                            }), x.label = 1;
                        case 1:
                            x.trys.push([1, 6, 7, 8]), u = Ft(s), a = u.next(), x.label = 2;
                        case 2:
                            return a.done ? [3, 5] : (p = a.value, p.execute ? [4, p.execute(de({}, n))] : [3, 4]);
                        case 3:
                            if (h = x.sent(), h === null) return o({
                                event: n,
                                code: 0,
                                message: ""
                            }), [2];
                            n = h, x.label = 4;
                        case 4:
                            return a = u.next(), [3, 2];
                        case 5:
                            return [3, 8];
                        case 6:
                            return l = x.sent(), v = {
                                error: l
                            }, [3, 8];
                        case 7:
                            try {
                                a && !a.done && (y = u.return) && y.call(u)
                            } finally {
                                if (v) throw v.error
                            }
                            return [7];
                        case 8:
                            c = this.plugins.filter(function(C) {
                                return C.type === "enrichment" || C.type === void 0
                            }), x.label = 9;
                        case 9:
                            x.trys.push([9, 14, 15, 16]), f = Ft(c), d = f.next(), x.label = 10;
                        case 10:
                            return d.done ? [3, 13] : (p = d.value, p.execute ? [4, p.execute(de({}, n))] : [3, 12]);
                        case 11:
                            if (h = x.sent(), h === null) return o({
                                event: n,
                                code: 0,
                                message: ""
                            }), [2];
                            n = h, x.label = 12;
                        case 12:
                            return d = f.next(), [3, 10];
                        case 13:
                            return [3, 16];
                        case 14:
                            return g = x.sent(), S = {
                                error: g
                            }, [3, 16];
                        case 15:
                            try {
                                d && !d.done && (_ = f.return) && _.call(f)
                            } finally {
                                if (S) throw S.error
                            }
                            return [7];
                        case 16:
                            return m = this.plugins.filter(function(C) {
                                return C.type === "destination"
                            }), b = m.map(function(C) {
                                var E = de({}, n);
                                return C.execute(E).catch(function(I) {
                                    return Xt(E, 0, String(I))
                                })
                            }), Promise.all(b).then(function(C) {
                                var E = Yt(C, 1),
                                    I = E[0],
                                    R = I || Xt(n, 100, "Event not tracked, no destination plugins on the instance");
                                o(R)
                            }), [2]
                    }
                })
            })
        }, r.prototype.flush = function() {
            return Se(this, void 0, void 0, function() {
                var e, t, n, i = this;
                return Ee(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return e = this.queue, this.queue = [], [4, Promise.all(e.map(function(s) {
                                return i.apply(s)
                            }))];
                        case 1:
                            return o.sent(), t = this.plugins.filter(function(s) {
                                return s.type === "destination"
                            }), n = t.map(function(s) {
                                return s.flush && s.flush()
                            }), [4, Promise.all(n)];
                        case 2:
                            return o.sent(), [2]
                    }
                })
            })
        }, r
    }()
});
var dl, Jt, On, pl, jp, Bp, Vp, Rn = w(() => {
    "use strict";
    dl = "-", Jt = "AMP", On = "".concat(Jt, "_unsent"), pl = "https://api2.amplitude.com/2/httpapi", jp = "https://api.eu.amplitude.com/2/httpapi", Bp = "https://api2.amplitude.com/batch", Vp = "https://api.eu.amplitude.com/batch"
});
var XE, Hi, hl, ml = w(() => {
    "use strict";
    Ut();
    XE = 1e3, Hi = function(r) {
        if (Object.keys(r).length > XE) return !1;
        for (var e in r) {
            var t = r[e];
            if (!hl(e, t)) return !1
        }
        return !0
    }, hl = function(r, e) {
        var t, n;
        if (typeof r != "string") return !1;
        if (Array.isArray(e)) {
            var i = !0;
            try {
                for (var o = Ft(e), s = o.next(); !s.done; s = o.next()) {
                    var u = s.value;
                    if (Array.isArray(u)) return !1;
                    if (typeof u == "object") i = i && Hi(u);
                    else if (!["number", "string"].includes(typeof u)) return !1;
                    if (!i) return !1
                }
            } catch (a) {
                t = {
                    error: a
                }
            } finally {
                try {
                    s && !s.done && (n = o.return) && n.call(o)
                } finally {
                    if (t) throw t.error
                }
            }
        } else {
            if (e == null) return !1;
            if (typeof e == "object") return Hi(e);
            if (!["number", "string", "boolean"].includes(typeof e)) return !1
        }
        return !0
    }
});
var Tt, gl = w(() => {
    "use strict";
    Ut();
    Fe();
    Rn();
    ml();
    Tt = function() {
        function r() {
            this._propertySet = new Set, this._properties = {}
        }
        return r.prototype.getUserProperties = function() {
            return de({}, this._properties)
        }, r.prototype.set = function(e, t) {
            return this._safeSet(Pe.SET, e, t), this
        }, r.prototype.setOnce = function(e, t) {
            return this._safeSet(Pe.SET_ONCE, e, t), this
        }, r.prototype.append = function(e, t) {
            return this._safeSet(Pe.APPEND, e, t), this
        }, r.prototype.prepend = function(e, t) {
            return this._safeSet(Pe.PREPEND, e, t), this
        }, r.prototype.postInsert = function(e, t) {
            return this._safeSet(Pe.POSTINSERT, e, t), this
        }, r.prototype.preInsert = function(e, t) {
            return this._safeSet(Pe.PREINSERT, e, t), this
        }, r.prototype.remove = function(e, t) {
            return this._safeSet(Pe.REMOVE, e, t), this
        }, r.prototype.add = function(e, t) {
            return this._safeSet(Pe.ADD, e, t), this
        }, r.prototype.unset = function(e) {
            return this._safeSet(Pe.UNSET, e, dl), this
        }, r.prototype.clearAll = function() {
            return this._properties = {}, this._properties[Pe.CLEAR_ALL] = dl, this
        }, r.prototype._safeSet = function(e, t, n) {
            if (this._validate(e, t, n)) {
                var i = this._properties[e];
                return i === void 0 && (i = {}, this._properties[e] = i), i[t] = n, this._propertySet.add(t), !0
            }
            return !1
        }, r.prototype._validate = function(e, t, n) {
            return this._properties[Pe.CLEAR_ALL] !== void 0 || this._propertySet.has(t) ? !1 : e === Pe.ADD ? typeof n == "number" : e !== Pe.UNSET && e !== Pe.REMOVE ? hl(t, n) : !0
        }, r
    }()
});
var Wp, Pn, Gp, zp, qp, vl = w(() => {
    "use strict";
    Ut();
    Fe();
    gl();
    Wp = function(r, e, t) {
        var n = typeof r == "string" ? {
            event_type: r
        } : r;
        return de(de(de({}, n), t), e && {
            event_properties: e
        })
    }, Pn = function(r, e) {
        var t = de(de({}, e), {
            event_type: ur.IDENTIFY,
            user_properties: r.getUserProperties()
        });
        return t
    }, Gp = function(r, e, t, n) {
        var i, o = de(de({}, n), {
            event_type: ur.GROUP_IDENTIFY,
            group_properties: t.getUserProperties(),
            groups: (i = {}, i[r] = e, i)
        });
        return o
    }, zp = function(r, e, t) {
        var n, i = new Tt;
        i.set(r, e);
        var o = de(de({}, t), {
            event_type: ur.IDENTIFY,
            user_properties: i.getUserProperties(),
            groups: (n = {}, n[r] = e, n)
        });
        return o
    }, qp = function(r, e) {
        return de(de({}, e), {
            event_type: ur.REVENUE,
            event_properties: r.getEventProperties()
        })
    }
});
var Ue, yl = w(() => {
    "use strict";
    Ue = function(r) {
        return {
            promise: r || Promise.resolve()
        }
    }
});
var wl, Hp = w(() => {
    "use strict";
    Ut();
    al();
    $p();
    vl();
    zi();
    yl();
    wl = function() {
        function r(e) {
            e === void 0 && (e = "$default"), this.initializing = !1, this.isReady = !1, this.q = [], this.dispatchQ = [], this.logEvent = this.track.bind(this), this.timeline = new Up(this), this.name = e
        }
        return r.prototype._init = function(e) {
            return Se(this, void 0, void 0, function() {
                return Ee(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return this.config = e, this.timeline.reset(this), [4, this.runQueuedFunctions("q")];
                        case 1:
                            return t.sent(), this.isReady = !0, [2]
                    }
                })
            })
        }, r.prototype.runQueuedFunctions = function(e) {
            return Se(this, void 0, void 0, function() {
                var t, n, i, o, s, u, a, l;
                return Ee(this, function(c) {
                    switch (c.label) {
                        case 0:
                            t = this[e], this[e] = [], c.label = 1;
                        case 1:
                            c.trys.push([1, 8, 9, 10]), n = Ft(t), i = n.next(), c.label = 2;
                        case 2:
                            return i.done ? [3, 7] : (o = i.value, s = o(), s && "promise" in s ? [4, s.promise] : [3, 4]);
                        case 3:
                            return c.sent(), [3, 6];
                        case 4:
                            return [4, s];
                        case 5:
                            c.sent(), c.label = 6;
                        case 6:
                            return i = n.next(), [3, 2];
                        case 7:
                            return [3, 10];
                        case 8:
                            return u = c.sent(), a = {
                                error: u
                            }, [3, 10];
                        case 9:
                            try {
                                i && !i.done && (l = n.return) && l.call(n)
                            } finally {
                                if (a) throw a.error
                            }
                            return [7];
                        case 10:
                            return this[e].length ? [4, this.runQueuedFunctions(e)] : [3, 12];
                        case 11:
                            c.sent(), c.label = 12;
                        case 12:
                            return [2]
                    }
                })
            })
        }, r.prototype.track = function(e, t, n) {
            var i = Wp(e, t, n);
            return Ue(this.dispatch(i))
        }, r.prototype.identify = function(e, t) {
            var n = Pn(e, t);
            return Ue(this.dispatch(n))
        }, r.prototype.groupIdentify = function(e, t, n, i) {
            var o = Gp(e, t, n, i);
            return Ue(this.dispatch(o))
        }, r.prototype.setGroup = function(e, t, n) {
            var i = zp(e, t, n);
            return Ue(this.dispatch(i))
        }, r.prototype.revenue = function(e, t) {
            var n = qp(e, t);
            return Ue(this.dispatch(n))
        }, r.prototype.add = function(e) {
            return this.isReady ? this._addPlugin(e) : (this.q.push(this._addPlugin.bind(this, e)), Ue())
        }, r.prototype._addPlugin = function(e) {
            return Ue(this.timeline.register(e, this.config))
        }, r.prototype.remove = function(e) {
            return this.isReady ? this._removePlugin(e) : (this.q.push(this._removePlugin.bind(this, e)), Ue())
        }, r.prototype._removePlugin = function(e) {
            return Ue(this.timeline.deregister(e, this.config))
        }, r.prototype.dispatchWithCallback = function(e, t) {
            if (!this.isReady) return t(Xt(e, 0, Ap));
            this.process(e).then(t)
        }, r.prototype.dispatch = function(e) {
            return Se(this, void 0, void 0, function() {
                var t = this;
                return Ee(this, function(n) {
                    return this.isReady ? [2, this.process(e)] : [2, new Promise(function(i) {
                        t.dispatchQ.push(t.dispatchWithCallback.bind(t, e, i))
                    })]
                })
            })
        }, r.prototype.process = function(e) {
            return Se(this, void 0, void 0, function() {
                var i, t, n, i;
                return Ee(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]), this.config.optOut ? [2, Xt(e, 0, Op)] : [4, this.timeline.push(e)];
                        case 1:
                            return i = o.sent(), i.code === 200 ? this.config.loggerProvider.log(i.message) : i.code === 100 ? this.config.loggerProvider.warn(i.message) : this.config.loggerProvider.error(i.message), [2, i];
                        case 2:
                            return t = o.sent(), n = String(t), this.config.loggerProvider.error(n), i = Xt(e, 0, n), [2, i];
                        case 3:
                            return [2]
                    }
                })
            })
        }, r.prototype.setOptOut = function(e) {
            if (!this.isReady) {
                this.q.push(this._setOptOut.bind(this, !!e));
                return
            }
            this._setOptOut(e)
        }, r.prototype._setOptOut = function(e) {
            this.config.optOut = !!e
        }, r.prototype.flush = function() {
            return Ue(this.timeline.flush())
        }, r
    }()
});
var Yi, Yp = w(() => {
    "use strict";
    Ut();
    Fe();
    ml();
    Yi = function() {
        function r() {
            this.productId = "", this.quantity = 1, this.price = 0
        }
        return r.prototype.setProductId = function(e) {
            return this.productId = e, this
        }, r.prototype.setQuantity = function(e) {
            return e > 0 && (this.quantity = e), this
        }, r.prototype.setPrice = function(e) {
            return this.price = e, this
        }, r.prototype.setRevenueType = function(e) {
            return this.revenueType = e, this
        }, r.prototype.setRevenue = function(e) {
            return this.revenue = e, this
        }, r.prototype.setEventProperties = function(e) {
            return Hi(e) && (this.properties = e), this
        }, r.prototype.getEventProperties = function() {
            var e = this.properties ? de({}, this.properties) : {};
            return e[Kt.REVENUE_PRODUCT_ID] = this.productId, e[Kt.REVENUE_QUANTITY] = this.quantity, e[Kt.REVENUE_PRICE] = this.price, e[Kt.REVENUE_TYPE] = this.revenueType, e[Kt.REVENUE] = this.revenue, e
        }, r
    }()
});
var Kp, Xp = w(() => {
    "use strict";
    Kp = function(r, e) {
        var t = Math.max(e, 1);
        return r.reduce(function(n, i, o) {
            var s = Math.floor(o / t);
            return n[s] || (n[s] = []), n[s].push(i), n
        }, [])
    }
});
var Ki, $t, bl = w(() => {
    "use strict";
    Fe();
    Ki = "Amplitude Logger ", $t = function() {
        function r() {
            this.logLevel = Le.None
        }
        return r.prototype.disable = function() {
            this.logLevel = Le.None
        }, r.prototype.enable = function(e) {
            e === void 0 && (e = Le.Warn), this.logLevel = e
        }, r.prototype.log = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this.logLevel < Le.Verbose || console.log("".concat(Ki, "[Log]: ").concat(e.join(" ")))
        }, r.prototype.warn = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this.logLevel < Le.Warn || console.warn("".concat(Ki, "[Warn]: ").concat(e.join(" ")))
        }, r.prototype.error = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this.logLevel < Le.Error || console.error("".concat(Ki, "[Error]: ").concat(e.join(" ")))
        }, r.prototype.debug = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this.logLevel < Le.Debug || console.log("".concat(Ki, "[Debug]: ").concat(e.join(" ")))
        }, r
    }()
});
var Xi, An, JE, Sl, Mn, El = w(() => {
    "use strict";
    Fe();
    Rn();
    bl();
    Xi = function() {
        return {
            flushMaxRetries: 12,
            flushQueueSize: 200,
            flushIntervalMillis: 1e4,
            instanceName: "$default_instance",
            logLevel: Le.Warn,
            loggerProvider: new $t,
            offline: !1,
            optOut: !1,
            serverUrl: pl,
            serverZone: "US",
            useBatch: !1
        }
    }, An = function() {
        function r(e) {
            var t, n, i, o;
            this._optOut = !1;
            var s = Xi();
            this.apiKey = e.apiKey, this.flushIntervalMillis = (t = e.flushIntervalMillis) !== null && t !== void 0 ? t : s.flushIntervalMillis, this.flushMaxRetries = e.flushMaxRetries || s.flushMaxRetries, this.flushQueueSize = e.flushQueueSize || s.flushQueueSize, this.instanceName = e.instanceName || s.instanceName, this.loggerProvider = e.loggerProvider || s.loggerProvider, this.logLevel = (n = e.logLevel) !== null && n !== void 0 ? n : s.logLevel, this.minIdLength = e.minIdLength, this.plan = e.plan, this.ingestionMetadata = e.ingestionMetadata, this.offline = e.offline !== void 0 ? e.offline : s.offline, this.optOut = (i = e.optOut) !== null && i !== void 0 ? i : s.optOut, this.serverUrl = e.serverUrl, this.serverZone = e.serverZone || s.serverZone, this.storageProvider = e.storageProvider, this.transportProvider = e.transportProvider, this.useBatch = (o = e.useBatch) !== null && o !== void 0 ? o : s.useBatch, this.loggerProvider.enable(this.logLevel);
            var u = Sl(e.serverUrl, e.serverZone, e.useBatch);
            this.serverZone = u.serverZone, this.serverUrl = u.serverUrl
        }
        return Object.defineProperty(r.prototype, "optOut", {
            get: function() {
                return this._optOut
            },
            set: function(e) {
                this._optOut = e
            },
            enumerable: !1,
            configurable: !0
        }), r
    }(), JE = function(r, e) {
        return r === "EU" ? e ? Vp : jp : e ? Bp : pl
    }, Sl = function(r, e, t) {
        if (r === void 0 && (r = ""), e === void 0 && (e = Xi().serverZone), t === void 0 && (t = Xi().useBatch), r) return {
            serverUrl: r,
            serverZone: void 0
        };
        var n = ["US", "EU"].includes(e) ? e : Xi().serverZone;
        return {
            serverZone: n,
            serverUrl: JE(n, t)
        }
    }, Mn = function() {
        function r() {
            this.sdk = {
                metrics: {
                    histogram: {}
                }
            }
        }
        return r.prototype.recordHistogram = function(e, t) {
            this.sdk.metrics.histogram[e] = t
        }, r
    }()
});

function ZE(r) {
    return r instanceof Error ? r.message : String(r)
}

function Ji(r) {
    var e = "";
    try {
        "body" in r && (e = JSON.stringify(r.body, null, 2))
    } catch {}
    return e
}
var _l, Jp = w(() => {
    "use strict";
    Ut();
    Fe();
    al();
    Rn();
    Xp();
    zi();
    El();
    qi();
    _l = function() {
        function r() {
            this.name = "amplitude", this.type = "destination", this.retryTimeout = 1e3, this.throttleTimeout = 3e4, this.storageKey = "", this.scheduled = null, this.queue = []
        }
        return r.prototype.setup = function(e) {
            var t;
            return Se(this, void 0, void 0, function() {
                var n, i = this;
                return Ee(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return this.config = e, this.storageKey = "".concat(On, "_").concat(this.config.apiKey.substring(0, 10)), [4, (t = this.config.storageProvider) === null || t === void 0 ? void 0 : t.get(this.storageKey)];
                        case 1:
                            return n = o.sent(), n && n.length > 0 && Promise.all(n.map(function(s) {
                                return i.execute(s)
                            })).catch(), [2, Promise.resolve(void 0)]
                    }
                })
            })
        }, r.prototype.execute = function(e) {
            var t = this;
            return e.insert_id || (e.insert_id = mt()), new Promise(function(n) {
                var i = {
                    event: e,
                    attempts: 0,
                    callback: function(o) {
                        return n(o)
                    },
                    timeout: 0
                };
                t.addToQueue(i)
            })
        }, r.prototype.getTryableList = function(e) {
            var t = this;
            return e.filter(function(n) {
                return n.attempts < t.config.flushMaxRetries ? (n.attempts += 1, !0) : (t.fulfillRequest([n], 500, Tp), !1)
            })
        }, r.prototype.scheduleTryable = function(e, t) {
            var n = this;
            t === void 0 && (t = !1), e.forEach(function(i) {
                if (t && (n.queue = n.queue.concat(i)), i.timeout === 0) {
                    n.schedule(n.config.flushIntervalMillis);
                    return
                }
                setTimeout(function() {
                    i.timeout = 0, n.schedule(0)
                }, i.timeout)
            })
        }, r.prototype.addToQueue = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = this.getTryableList(e);
            this.scheduleTryable(n, !0), this.saveEvents()
        }, r.prototype.schedule = function(e) {
            var t = this;
            this.scheduled || this.config.offline || (this.scheduled = setTimeout(function() {
                t.flush(!0).then(function() {
                    t.queue.length > 0 && t.schedule(e)
                })
            }, e))
        }, r.prototype.flush = function(e) {
            return e === void 0 && (e = !1), Se(this, void 0, void 0, function() {
                var t, n, i, o = this;
                return Ee(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return this.config.offline ? (this.config.loggerProvider.debug("Skipping flush while offline."), [2]) : (t = [], n = [], this.queue.forEach(function(u) {
                                return u.timeout === 0 ? t.push(u) : n.push(u)
                            }), this.scheduled && (clearTimeout(this.scheduled), this.scheduled = null), i = Kp(t, this.config.flushQueueSize), [4, i.reduce(function(u, a) {
                                return Se(o, void 0, void 0, function() {
                                    return Ee(this, function(l) {
                                        switch (l.label) {
                                            case 0:
                                                return [4, u];
                                            case 1:
                                                return l.sent(), [4, this.send(a, e)];
                                            case 2:
                                                return [2, l.sent()]
                                        }
                                    })
                                })
                            }, Promise.resolve())]);
                        case 1:
                            return s.sent(), this.scheduleTryable(n), [2]
                    }
                })
            })
        }, r.prototype.send = function(e, t) {
            return t === void 0 && (t = !0), Se(this, void 0, void 0, function() {
                var n, i, o, s, u;
                return Ee(this, function(a) {
                    switch (a.label) {
                        case 0:
                            if (!this.config.apiKey) return [2, this.fulfillRequest(e, 400, Rp)];
                            n = {
                                api_key: this.config.apiKey,
                                events: e.map(function(l) {
                                    var c = l.event,
                                        f = c.extra,
                                        d = xp(c, ["extra"]);
                                    return d
                                }),
                                options: {
                                    min_id_length: this.config.minIdLength
                                },
                                client_upload_time: new Date().toISOString(),
                                request_metadata: this.config.requestMetadata
                            }, this.config.requestMetadata = new Mn, a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]), i = Sl(this.config.serverUrl, this.config.serverZone, this.config.useBatch).serverUrl, [4, this.config.transportProvider.send(i, n)];
                        case 2:
                            return o = a.sent(), o === null ? (this.fulfillRequest(e, 0, Ip), [2]) : t ? (this.handleResponse(o, e), [3, 4]) : ("body" in o ? this.fulfillRequest(e, o.statusCode, "".concat(o.status, ": ").concat(Ji(o))) : this.fulfillRequest(e, o.statusCode, o.status), [2]);
                        case 3:
                            return s = a.sent(), u = ZE(s), this.config.loggerProvider.error(u), this.handleResponse({
                                status: H.Failed,
                                statusCode: 0
                            }, e), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }, r.prototype.handleResponse = function(e, t) {
            var n = e.status;
            switch (n) {
                case H.Success:
                    {
                        this.handleSuccessResponse(e, t);
                        break
                    }
                case H.Invalid:
                    {
                        this.handleInvalidResponse(e, t);
                        break
                    }
                case H.PayloadTooLarge:
                    {
                        this.handlePayloadTooLargeResponse(e, t);
                        break
                    }
                case H.RateLimit:
                    {
                        this.handleRateLimitResponse(e, t);
                        break
                    }
                default:
                    {
                        this.config.loggerProvider.warn(`{code: 0, error: "Status '`.concat(n, "' provided for ").concat(t.length, ' events"}')),
                        this.handleOtherResponse(t);
                        break
                    }
            }
        }, r.prototype.handleSuccessResponse = function(e, t) {
            this.fulfillRequest(t, e.statusCode, Cp)
        }, r.prototype.handleInvalidResponse = function(e, t) {
            var n = this;
            if (e.body.missingField || e.body.error.startsWith(Pp)) {
                this.fulfillRequest(t, e.statusCode, e.body.error);
                return
            }
            var i = Tn(Tn(Tn(Tn([], Yt(Object.values(e.body.eventsWithInvalidFields)), !1), Yt(Object.values(e.body.eventsWithMissingFields)), !1), Yt(Object.values(e.body.eventsWithInvalidIdLengths)), !1), Yt(e.body.silencedEvents), !1).flat(),
                o = new Set(i),
                s = t.filter(function(a, l) {
                    if (o.has(l)) {
                        n.fulfillRequest([a], e.statusCode, e.body.error);
                        return
                    }
                    return !0
                });
            s.length > 0 && this.config.loggerProvider.warn(Ji(e));
            var u = this.getTryableList(s);
            this.scheduleTryable(u)
        }, r.prototype.handlePayloadTooLargeResponse = function(e, t) {
            if (t.length === 1) {
                this.fulfillRequest(t, e.statusCode, e.body.error);
                return
            }
            this.config.loggerProvider.warn(Ji(e)), this.config.flushQueueSize /= 2;
            var n = this.getTryableList(t);
            this.scheduleTryable(n)
        }, r.prototype.handleRateLimitResponse = function(e, t) {
            var n = this,
                i = Object.keys(e.body.exceededDailyQuotaUsers),
                o = Object.keys(e.body.exceededDailyQuotaDevices),
                s = e.body.throttledEvents,
                u = new Set(i),
                a = new Set(o),
                l = new Set(s),
                c = t.filter(function(d, p) {
                    if (d.event.user_id && u.has(d.event.user_id) || d.event.device_id && a.has(d.event.device_id)) {
                        n.fulfillRequest([d], e.statusCode, e.body.error);
                        return
                    }
                    return l.has(p) && (d.timeout = n.throttleTimeout), !0
                });
            c.length > 0 && this.config.loggerProvider.warn(Ji(e));
            var f = this.getTryableList(c);
            this.scheduleTryable(f)
        }, r.prototype.handleOtherResponse = function(e) {
            var t = this,
                n = e.map(function(o) {
                    return o.timeout = o.attempts * t.retryTimeout, o
                }),
                i = this.getTryableList(n);
            this.scheduleTryable(i)
        }, r.prototype.fulfillRequest = function(e, t, n) {
            this.removeEvents(e), e.forEach(function(i) {
                return i.callback(Xt(i.event, t, n))
            })
        }, r.prototype.saveEvents = function() {
            if (this.config.storageProvider) {
                var e = this.queue.map(function(t) {
                    return t.event
                });
                this.config.storageProvider.set(this.storageKey, e)
            }
        }, r.prototype.removeEvents = function(e) {
            this.queue = this.queue.filter(function(t) {
                return !e.some(function(n) {
                    return n.event.insert_id === t.event.insert_id
                })
            }), this.saveEvents()
        }, r
    }()
});
var QE, _e, e_, xe, ee, Zp = w(() => {
    "use strict";
    Ut();
    Fe();
    QE = function(r) {
        r === void 0 && (r = 0);
        var e = new Error().stack || "";
        return e.split(`
`).slice(2 + r).map(function(t) {
            return t.trim()
        })
    }, _e = function(r) {
        return function() {
            var e = de({}, r.config),
                t = e.loggerProvider,
                n = e.logLevel;
            return {
                logger: t,
                logLevel: n
            }
        }
    }, e_ = function(r, e) {
        var t, n;
        e = e.replace(/\[(\w+)\]/g, ".$1"), e = e.replace(/^\./, "");
        try {
            for (var i = Ft(e.split(".")), o = i.next(); !o.done; o = i.next()) {
                var s = o.value;
                if (s in r) r = r[s];
                else return
            }
        } catch (u) {
            t = {
                error: u
            }
        } finally {
            try {
                o && !o.done && (n = i.return) && n.call(i)
            } finally {
                if (t) throw t.error
            }
        }
        return r
    }, xe = function(r, e) {
        return function() {
            var t, n, i = {};
            try {
                for (var o = Ft(e), s = o.next(); !s.done; s = o.next()) {
                    var u = s.value;
                    i[u] = e_(r, u)
                }
            } catch (a) {
                t = {
                    error: a
                }
            } finally {
                try {
                    s && !s.done && (n = o.return) && n.call(o)
                } finally {
                    if (t) throw t.error
                }
            }
            return i
        }
    }, ee = function(r, e, t, n, i) {
        return i === void 0 && (i = null),
            function() {
                for (var o = [], s = 0; s < arguments.length; s++) o[s] = arguments[s];
                var u = t(),
                    a = u.logger,
                    l = u.logLevel;
                if (l && l < Le.Debug || !l || !a) return r.apply(i, o);
                var c = {
                    type: "invoke public method",
                    name: e,
                    args: o,
                    stacktrace: QE(1),
                    time: {
                        start: new Date().toISOString()
                    },
                    states: {}
                };
                n && c.states && (c.states.before = n());
                var f = r.apply(i, o);
                return f && f.promise ? f.promise.then(function() {
                    n && c.states && (c.states.after = n()), c.time && (c.time.end = new Date().toISOString()), a.debug(JSON.stringify(c, null, 2))
                }) : (n && c.states && (c.states.after = n()), c.time && (c.time.end = new Date().toISOString()), a.debug(JSON.stringify(c, null, 2))), f
            }
    }
});
var Nn, Qp = w(() => {
    "use strict";
    Ut();
    Nn = function() {
        function r() {
            this.memoryStorage = new Map
        }
        return r.prototype.isEnabled = function() {
            return Se(this, void 0, void 0, function() {
                return Ee(this, function(e) {
                    return [2, !0]
                })
            })
        }, r.prototype.get = function(e) {
            return Se(this, void 0, void 0, function() {
                return Ee(this, function(t) {
                    return [2, this.memoryStorage.get(e)]
                })
            })
        }, r.prototype.getRaw = function(e) {
            return Se(this, void 0, void 0, function() {
                var t;
                return Ee(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, this.get(e)];
                        case 1:
                            return t = n.sent(), [2, t ? JSON.stringify(t) : void 0]
                    }
                })
            })
        }, r.prototype.set = function(e, t) {
            return Se(this, void 0, void 0, function() {
                return Ee(this, function(n) {
                    return this.memoryStorage.set(e, t), [2]
                })
            })
        }, r.prototype.remove = function(e) {
            return Se(this, void 0, void 0, function() {
                return Ee(this, function(t) {
                    return this.memoryStorage.delete(e), [2]
                })
            })
        }, r.prototype.reset = function() {
            return Se(this, void 0, void 0, function() {
                return Ee(this, function(e) {
                    return this.memoryStorage.clear(), [2]
                })
            })
        }, r
    }()
});
var at, eh = w(() => {
    "use strict";
    Fe();
    at = function() {
        function r() {}
        return r.prototype.send = function(e, t) {
            return Promise.resolve(null)
        }, r.prototype.buildResponse = function(e) {
            var t, n, i, o, s, u, a, l, c, f, d, p, h, g, m, b, v, y, S, _, x, C;
            if (typeof e != "object") return null;
            var E = e.code || 0,
                I = this.buildStatus(E);
            switch (I) {
                case H.Success:
                    return {
                        status: I,
                        statusCode: E,
                        body: {
                            eventsIngested: (t = e.events_ingested) !== null && t !== void 0 ? t : 0,
                            payloadSizeBytes: (n = e.payload_size_bytes) !== null && n !== void 0 ? n : 0,
                            serverUploadTime: (i = e.server_upload_time) !== null && i !== void 0 ? i : 0
                        }
                    };
                case H.Invalid:
                    return {
                        status: I,
                        statusCode: E,
                        body: {
                            error: (o = e.error) !== null && o !== void 0 ? o : "",
                            missingField: (s = e.missing_field) !== null && s !== void 0 ? s : "",
                            eventsWithInvalidFields: (u = e.events_with_invalid_fields) !== null && u !== void 0 ? u : {},
                            eventsWithMissingFields: (a = e.events_with_missing_fields) !== null && a !== void 0 ? a : {},
                            eventsWithInvalidIdLengths: (l = e.events_with_invalid_id_lengths) !== null && l !== void 0 ? l : {},
                            epsThreshold: (c = e.eps_threshold) !== null && c !== void 0 ? c : 0,
                            exceededDailyQuotaDevices: (f = e.exceeded_daily_quota_devices) !== null && f !== void 0 ? f : {},
                            silencedDevices: (d = e.silenced_devices) !== null && d !== void 0 ? d : [],
                            silencedEvents: (p = e.silenced_events) !== null && p !== void 0 ? p : [],
                            throttledDevices: (h = e.throttled_devices) !== null && h !== void 0 ? h : {},
                            throttledEvents: (g = e.throttled_events) !== null && g !== void 0 ? g : []
                        }
                    };
                case H.PayloadTooLarge:
                    return {
                        status: I,
                        statusCode: E,
                        body: {
                            error: (m = e.error) !== null && m !== void 0 ? m : ""
                        }
                    };
                case H.RateLimit:
                    return {
                        status: I,
                        statusCode: E,
                        body: {
                            error: (b = e.error) !== null && b !== void 0 ? b : "",
                            epsThreshold: (v = e.eps_threshold) !== null && v !== void 0 ? v : 0,
                            throttledDevices: (y = e.throttled_devices) !== null && y !== void 0 ? y : {},
                            throttledUsers: (S = e.throttled_users) !== null && S !== void 0 ? S : {},
                            exceededDailyQuotaDevices: (_ = e.exceeded_daily_quota_devices) !== null && _ !== void 0 ? _ : {},
                            exceededDailyQuotaUsers: (x = e.exceeded_daily_quota_users) !== null && x !== void 0 ? x : {},
                            throttledEvents: (C = e.throttled_events) !== null && C !== void 0 ? C : []
                        }
                    };
                case H.Timeout:
                default:
                    return {
                        status: I,
                        statusCode: E
                    }
            }
        }, r.prototype.buildStatus = function(e) {
            return e >= 200 && e < 300 ? H.Success : e === 429 ? H.RateLimit : e === 413 ? H.PayloadTooLarge : e === 408 ? H.Timeout : e >= 400 && e < 500 ? H.Invalid : e >= 500 ? H.Failed : H.Unknown
        }, r
    }()
});
var Ae = w(() => {
    "use strict";
    Hp();
    gl();
    Yp();
    Jp();
    El();
    bl();
    Rn();
    yl();
    Zp();
    qi();
    Qp();
    eh();
    vl()
});

function gt(r, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    xl(r, e);

    function t() {
        this.constructor = r
    }
    r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t)
}

function $(r, e, t, n) {
    function i(o) {
        return o instanceof t ? o : new t(function(s) {
            s(o)
        })
    }
    return new(t || (t = Promise))(function(o, s) {
        function u(c) {
            try {
                l(n.next(c))
            } catch (f) {
                s(f)
            }
        }

        function a(c) {
            try {
                l(n.throw(c))
            } catch (f) {
                s(f)
            }
        }

        function l(c) {
            c.done ? o(c.value) : i(c.value).then(u, a)
        }
        l((n = n.apply(r, e || [])).next())
    })
}

function j(r, e) {
    var t = {
            label: 0,
            sent: function() {
                if (o[0] & 1) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        },
        n, i, o, s;
    return s = {
        next: u(0),
        throw: u(1),
        return: u(2)
    }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }), s;

    function u(l) {
        return function(c) {
            return a([l, c])
        }
    }

    function a(l) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; s && (s = 0, l[0] && (t = 0)), t;) try {
            if (n = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done) return o;
            switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
                case 0:
                case 1:
                    o = l;
                    break;
                case 4:
                    return t.label++, {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    t.label++, i = l[1], l = [0];
                    continue;
                case 7:
                    l = t.ops.pop(), t.trys.pop();
                    continue;
                default:
                    if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
                        t.label = l[1];
                        break
                    }
                    if (l[0] === 6 && t.label < o[1]) {
                        t.label = o[1], o = l;
                        break
                    }
                    if (o && t.label < o[2]) {
                        t.label = o[2], t.ops.push(l);
                        break
                    }
                    o[2] && t.ops.pop(), t.trys.pop();
                    continue
            }
            l = e.call(r, t)
        } catch (c) {
            l = [6, c], i = 0
        } finally {
            n = o = 0
        }
        if (l[0] & 5) throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}

function th(r, e) {
    var t = typeof Symbol == "function" && r[Symbol.iterator];
    if (!t) return r;
    var n = t.call(r),
        i, o = [],
        s;
    try {
        for (;
            (e === void 0 || e-- > 0) && !(i = n.next()).done;) o.push(i.value)
    } catch (u) {
        s = {
            error: u
        }
    } finally {
        try {
            i && !i.done && (t = n.return) && t.call(n)
        } finally {
            if (s) throw s.error
        }
    }
    return o
}
var xl, pe, it = w(() => {
    "use strict";
    xl = function(r, e) {
        return xl = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, n) {
            t.__proto__ = n
        } || function(t, n) {
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }, xl(r, e)
    };
    pe = function() {
        return pe = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) {
                t = arguments[n];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
        }, pe.apply(this, arguments)
    }
});

function rh(r, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    Cl(r, e);

    function t() {
        this.constructor = r
    }
    r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t)
}

function Il(r, e) {
    var t = {};
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (t[n[i]] = r[n[i]]);
    return t
}

function Ve(r, e, t, n) {
    function i(o) {
        return o instanceof t ? o : new t(function(s) {
            s(o)
        })
    }
    return new(t || (t = Promise))(function(o, s) {
        function u(c) {
            try {
                l(n.next(c))
            } catch (f) {
                s(f)
            }
        }

        function a(c) {
            try {
                l(n.throw(c))
            } catch (f) {
                s(f)
            }
        }

        function l(c) {
            c.done ? o(c.value) : i(c.value).then(u, a)
        }
        l((n = n.apply(r, e || [])).next())
    })
}

function We(r, e) {
    var t = {
            label: 0,
            sent: function() {
                if (o[0] & 1) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        },
        n, i, o, s;
    return s = {
        next: u(0),
        throw: u(1),
        return: u(2)
    }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }), s;

    function u(l) {
        return function(c) {
            return a([l, c])
        }
    }

    function a(l) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; s && (s = 0, l[0] && (t = 0)), t;) try {
            if (n = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done) return o;
            switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
                case 0:
                case 1:
                    o = l;
                    break;
                case 4:
                    return t.label++, {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    t.label++, i = l[1], l = [0];
                    continue;
                case 7:
                    l = t.ops.pop(), t.trys.pop();
                    continue;
                default:
                    if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
                        t.label = l[1];
                        break
                    }
                    if (l[0] === 6 && t.label < o[1]) {
                        t.label = o[1], o = l;
                        break
                    }
                    if (o && t.label < o[2]) {
                        t.label = o[2], t.ops.push(l);
                        break
                    }
                    o[2] && t.ops.pop(), t.trys.pop();
                    continue
            }
            l = e.call(r, t)
        } catch (c) {
            l = [6, c], i = 0
        } finally {
            n = o = 0
        }
        if (l[0] & 5) throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}

function Zi(r, e) {
    var t = typeof Symbol == "function" && r[Symbol.iterator];
    if (!t) return r;
    var n = t.call(r),
        i, o = [],
        s;
    try {
        for (;
            (e === void 0 || e-- > 0) && !(i = n.next()).done;) o.push(i.value)
    } catch (u) {
        s = {
            error: u
        }
    } finally {
        try {
            i && !i.done && (t = n.return) && t.call(n)
        } finally {
            if (s) throw s.error
        }
    }
    return o
}
var Cl, qe, cr = w(() => {
    "use strict";
    Cl = function(r, e) {
        return Cl = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, n) {
            t.__proto__ = n
        } || function(t, n) {
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }, Cl(r, e)
    };
    qe = function() {
        return qe = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) {
                t = arguments[n];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
        }, qe.apply(this, arguments)
    }
});
var B, Qi = w(() => {
    "use strict";
    B = function() {
        var r = "ampIntegrationContext";
        if (typeof globalThis < "u" && typeof globalThis[r] < "u") return globalThis[r];
        if (typeof globalThis < "u") return globalThis;
        if (typeof window < "u") return window;
        if (typeof self < "u") return self;
        if (typeof window < "u") return window
    }
});
var fr, nh, Tl = w(() => {
    "use strict";
    Qi();
    fr = function() {
        var r, e = B();
        if (!(!((r = e ? .location) === null || r === void 0) && r.search)) return {};
        var t = e.location.search.substring(1).split("&").filter(Boolean),
            n = t.reduce(function(i, o) {
                var s = o.split("=", 2),
                    u = nh(s[0]),
                    a = nh(s[1]);
                return a && (i[u] = a), i
            }, {});
        return n
    }, nh = function(r) {
        r === void 0 && (r = "");
        try {
            return decodeURIComponent(r)
        } catch {
            return ""
        }
    }
});
var ih, oh, sh, ah, lh, uh, Ol, Rl, Pl, Al, Ml, Nl, Dl, kl, Ll, Fl, Ul, Zt, Dn = w(() => {
    "use strict";
    ih = "utm_campaign", oh = "utm_content", sh = "utm_id", ah = "utm_medium", lh = "utm_source", uh = "utm_term", Ol = "dclid", Rl = "fbclid", Pl = "gbraid", Al = "gclid", Ml = "ko_click_id", Nl = "li_fat_id", Dl = "msclkid", kl = "rtd_cid", Ll = "ttclid", Fl = "twclid", Ul = "wbraid", Zt = {
        utm_campaign: void 0,
        utm_content: void 0,
        utm_id: void 0,
        utm_medium: void 0,
        utm_source: void 0,
        utm_term: void 0,
        referrer: void 0,
        referring_domain: void 0,
        dclid: void 0,
        gbraid: void 0,
        gclid: void 0,
        fbclid: void 0,
        ko_click_id: void 0,
        li_fat_id: void 0,
        msclkid: void 0,
        rtd_cid: void 0,
        ttclid: void 0,
        twclid: void 0,
        wbraid: void 0
    }
});
var kn, $l = w(() => {
    "use strict";
    cr();
    Tl();
    Dn();
    kn = function() {
        function r() {}
        return r.prototype.parse = function() {
            return Ve(this, void 0, void 0, function() {
                return We(this, function(e) {
                    return [2, qe(qe(qe(qe({}, Zt), this.getUtmParam()), this.getReferrer()), this.getClickIds())]
                })
            })
        }, r.prototype.getUtmParam = function() {
            var e = fr(),
                t = e[ih],
                n = e[oh],
                i = e[sh],
                o = e[ah],
                s = e[lh],
                u = e[uh];
            return {
                utm_campaign: t,
                utm_content: n,
                utm_id: i,
                utm_medium: o,
                utm_source: s,
                utm_term: u
            }
        }, r.prototype.getReferrer = function() {
            var e, t, n = {
                referrer: void 0,
                referring_domain: void 0
            };
            try {
                n.referrer = document.referrer || void 0, n.referring_domain = (t = (e = n.referrer) === null || e === void 0 ? void 0 : e.split("/")[2]) !== null && t !== void 0 ? t : void 0
            } catch {}
            return n
        }, r.prototype.getClickIds = function() {
            var e, t = fr();
            return e = {}, e[Ol] = t[Ol], e[Rl] = t[Rl], e[Pl] = t[Pl], e[Al] = t[Al], e[Ml] = t[Ml], e[Nl] = t[Nl], e[Dl] = t[Dl], e[kl] = t[kl], e[Ll] = t[Ll], e[Fl] = t[Fl], e[Ul] = t[Ul], e
        }, r
    }()
});
var eo, jl, ch = w(() => {
    "use strict";
    Ae();
    eo = function(r, e, t) {
        return e === void 0 && (e = ""), t === void 0 && (t = 10), [Jt, e, r.substring(0, t)].filter(Boolean).join("_")
    }, jl = function(r) {
        return "".concat(Jt.toLowerCase(), "_").concat(r.substring(0, 6))
    }
});
var fh, t_, dh, r_, ph, hh, mh = w(() => {
    "use strict";
    cr();
    Ae();
    Dn();
    fh = function(r) {
        var e = r.split(".");
        return e.length <= 2 ? r : e.slice(e.length - 2, e.length).join(".")
    }, t_ = function(r) {
        return Object.values(r).every(function(e) {
            return !e
        })
    }, dh = function(r, e, t, n, i) {
        i === void 0 && (i = !0);
        var o = r.referrer,
            s = r.referring_domain,
            u = Il(r, ["referrer", "referring_domain"]),
            a = e || {},
            l = a.referrer,
            c = a.referring_domain,
            f = Il(a, ["referrer", "referring_domain"]);
        if (r_(t.excludeReferrers, r.referring_domain)) return n.debug("This is not a new campaign because ".concat(r.referring_domain, " is in the exclude referrer list.")), !1;
        if (!i && t_(r) && e) return n.debug("This is not a new campaign because this is a direct traffic in the same session."), !1;
        var d = JSON.stringify(u) !== JSON.stringify(f),
            p = fh(s || "") !== fh(c || ""),
            h = !e || d || p;
        return h ? n.debug("This is a new campaign. An $identify event will be sent.") : n.debug("This is not a new campaign because it's the same as the previous one."), h
    }, r_ = function(r, e) {
        return r === void 0 && (r = []), e === void 0 && (e = ""), r.some(function(t) {
            return t instanceof RegExp ? t.test(e) : t === e
        })
    }, ph = function(r, e) {
        var t = qe(qe({}, Zt), r),
            n = Object.entries(t).reduce(function(i, o) {
                var s, u = Zi(o, 2),
                    a = u[0],
                    l = u[1];
                return i.setOnce("initial_".concat(a), (s = l ? ? e.initialEmptyValue) !== null && s !== void 0 ? s : "EMPTY"), l ? i.set(a, l) : i.unset(a)
            }, new Tt);
        return Pn(n)
    }, hh = function(r) {
        var e = r;
        return e ? (e.startsWith(".") && (e = e.substring(1)), [new RegExp("".concat(e.replace(".", "\\."), "$"))]) : []
    }
});
var gh, vh = w(() => {
    "use strict";
    Ae();
    gh = function(r, e, t) {
        return e === void 0 && (e = ""), t === void 0 && (t = 10), [Jt, e, r.substring(0, t)].filter(Boolean).join("_")
    }
});
var Ln, Bl = w(() => {
    "use strict";
    Ln = function(r, e) {
        e === void 0 && (e = Date.now());
        var t = Date.now(),
            n = t - e;
        return n > r
    }
});
var Vl, yh = w(() => {
    "use strict";
    cr();
    mh();
    vh();
    $l();
    Dn();
    Bl();
    Vl = function() {
        function r(e, t) {
            var n;
            this.shouldTrackNewCampaign = !1, this.options = qe({
                initialEmptyValue: "EMPTY",
                resetSessionOnNewCampaign: !1,
                excludeReferrers: hh((n = t.cookieOptions) === null || n === void 0 ? void 0 : n.domain)
            }, e), this.storage = t.cookieStorage, this.storageKey = gh(t.apiKey, "MKTG"), this.currentCampaign = Zt, this.sessionTimeout = t.sessionTimeout, this.lastEventTime = t.lastEventTime, this.logger = t.loggerProvider, t.loggerProvider.log("Installing web attribution tracking.")
        }
        return r.prototype.init = function() {
            return Ve(this, void 0, void 0, function() {
                var e, t;
                return We(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, this.fetchCampaign()];
                        case 1:
                            return t = Zi.apply(void 0, [n.sent(), 2]), this.currentCampaign = t[0], this.previousCampaign = t[1], e = this.lastEventTime ? Ln(this.sessionTimeout, this.lastEventTime) : !0, dh(this.currentCampaign, this.previousCampaign, this.options, this.logger, e) ? (this.shouldTrackNewCampaign = !0, [4, this.storage.set(this.storageKey, this.currentCampaign)]) : [3, 3];
                        case 2:
                            n.sent(), n.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
        }, r.prototype.fetchCampaign = function() {
            return Ve(this, void 0, void 0, function() {
                return We(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Promise.all([new kn().parse(), this.storage.get(this.storageKey)])];
                        case 1:
                            return [2, e.sent()]
                    }
                })
            })
        }, r.prototype.generateCampaignEvent = function(e) {
            this.shouldTrackNewCampaign = !1;
            var t = ph(this.currentCampaign, this.options);
            return e && (t.event_id = e), t
        }, r.prototype.shouldSetSessionIdOnNewCampaign = function() {
            return this.shouldTrackNewCampaign && !!this.options.resetSessionOnNewCampaign
        }, r
    }()
});
var Fn, n_, i_, wh = w(() => {
    "use strict";
    cr();
    Qi();
    Fn = function() {
        function r(e) {
            this.options = qe({}, e)
        }
        return r.prototype.isEnabled = function() {
            return Ve(this, void 0, void 0, function() {
                var e, t, n, i;
                return We(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (!B()) return [2, !1];
                            r.testValue = String(Date.now()), e = new r(this.options), t = "AMP_TEST", o.label = 1;
                        case 1:
                            return o.trys.push([1, 4, 5, 7]), [4, e.set(t, r.testValue)];
                        case 2:
                            return o.sent(), [4, e.get(t)];
                        case 3:
                            return n = o.sent(), [2, n === r.testValue];
                        case 4:
                            return i = o.sent(), [2, !1];
                        case 5:
                            return [4, e.remove(t)];
                        case 6:
                            return o.sent(), [7];
                        case 7:
                            return [2]
                    }
                })
            })
        }, r.prototype.get = function(e) {
            var t;
            return Ve(this, void 0, void 0, function() {
                var n, i;
                return We(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return [4, this.getRaw(e)];
                        case 1:
                            if (n = o.sent(), !n) return [2, void 0];
                            try {
                                return i = (t = n_(n)) !== null && t !== void 0 ? t : i_(n), i === void 0 ? (console.error("Amplitude Logger [Error]: Failed to decode cookie value for key: ".concat(e, ", value: ").concat(n)), [2, void 0]) : [2, JSON.parse(i)]
                            } catch {
                                return console.error("Amplitude Logger [Error]: Failed to parse cookie value for key: ".concat(e, ", value: ").concat(n)), [2, void 0]
                            }
                            return [2]
                    }
                })
            })
        }, r.prototype.getRaw = function(e) {
            var t, n;
            return Ve(this, void 0, void 0, function() {
                var i, o, s;
                return We(this, function(u) {
                    return i = B(), o = (n = (t = i ? .document) === null || t === void 0 ? void 0 : t.cookie.split("; ")) !== null && n !== void 0 ? n : [], s = o.find(function(a) {
                        return a.indexOf(e + "=") === 0
                    }), s ? [2, s.substring(e.length + 1)] : [2, void 0]
                })
            })
        }, r.prototype.set = function(e, t) {
            var n;
            return Ve(this, void 0, void 0, function() {
                var i, o, s, u, a, l, c;
                return We(this, function(f) {
                    try {
                        i = (n = this.options.expirationDays) !== null && n !== void 0 ? n : 0, o = t !== null ? i : -1, s = void 0, o && (u = new Date, u.setTime(u.getTime() + o * 24 * 60 * 60 * 1e3), s = u), a = "".concat(e, "=").concat(btoa(encodeURIComponent(JSON.stringify(t)))), s && (a += "; expires=".concat(s.toUTCString())), a += "; path=/", this.options.domain && (a += "; domain=".concat(this.options.domain)), this.options.secure && (a += "; Secure"), this.options.sameSite && (a += "; SameSite=".concat(this.options.sameSite)), l = B(), l && (l.document.cookie = a)
                    } catch (d) {
                        c = d instanceof Error ? d.message : String(d), console.error("Amplitude Logger [Error]: Failed to set cookie for key: ".concat(e, ". Error: ").concat(c))
                    }
                    return [2]
                })
            })
        }, r.prototype.remove = function(e) {
            return Ve(this, void 0, void 0, function() {
                return We(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.set(e, null)];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, r.prototype.reset = function() {
            return Ve(this, void 0, void 0, function() {
                return We(this, function(e) {
                    return [2]
                })
            })
        }, r
    }(), n_ = function(r) {
        try {
            return decodeURIComponent(atob(r))
        } catch {
            return
        }
    }, i_ = function(r) {
        try {
            return decodeURIComponent(atob(decodeURIComponent(r)))
        } catch {
            return
        }
    }
});
var Un, bh = w(() => {
    "use strict";
    cr();
    Ae();
    Un = function(r) {
        rh(e, r);

        function e() {
            return r !== null && r.apply(this, arguments) || this
        }
        return e.prototype.send = function(t, n) {
            return Ve(this, void 0, void 0, function() {
                var i, o, s;
                return We(this, function(u) {
                    switch (u.label) {
                        case 0:
                            if (typeof fetch > "u") throw new Error("FetchTransport is not supported");
                            return i = {
                                headers: {
                                    "Content-Type": "application/json",
                                    Accept: "*/*"
                                },
                                body: JSON.stringify(n),
                                method: "POST"
                            }, [4, fetch(t, i)];
                        case 1:
                            return o = u.sent(), [4, o.text()];
                        case 2:
                            s = u.sent();
                            try {
                                return [2, this.buildResponse(JSON.parse(s))]
                            } catch {
                                return [2, this.buildResponse({
                                    code: o.status
                                })]
                            }
                            return [2]
                    }
                })
            })
        }, e
    }(at)
});

function to(r) {
    var e = typeof Symbol == "function" && Symbol.iterator,
        t = e && r[e],
        n = 0;
    if (t) return t.call(r);
    if (r && typeof r.length == "number") return {
        next: function() {
            return r && n >= r.length && (r = void 0), {
                value: r && r[n++],
                done: !r
            }
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function Sh(r, e) {
    var t = typeof Symbol == "function" && r[Symbol.iterator];
    if (!t) return r;
    var n = t.call(r),
        i, o = [],
        s;
    try {
        for (;
            (e === void 0 || e-- > 0) && !(i = n.next()).done;) o.push(i.value)
    } catch (u) {
        s = {
            error: u
        }
    } finally {
        try {
            i && !i.done && (t = n.return) && t.call(n)
        } finally {
            if (s) throw s.error
        }
    }
    return o
}
var o_, s_, a_, dr, ro, l_, u_, c_, f_, $n, Eh, _h = w(() => {
    "use strict";
    o_ = function() {
        function r() {}
        return r.prototype.getApplicationContext = function() {
            return {
                versionName: this.versionName,
                language: s_(),
                platform: "Web",
                os: void 0,
                deviceModel: void 0
            }
        }, r
    }(), s_ = function() {
        return typeof navigator < "u" && (navigator.languages && navigator.languages[0] || navigator.language) || ""
    }, a_ = function() {
        function r() {
            this.queue = []
        }
        return r.prototype.logEvent = function(e) {
            this.receiver ? this.receiver(e) : this.queue.length < 512 && this.queue.push(e)
        }, r.prototype.setEventReceiver = function(e) {
            this.receiver = e, this.queue.length > 0 && (this.queue.forEach(function(t) {
                e(t)
            }), this.queue = [])
        }, r
    }(), dr = function() {
        return dr = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) {
                t = arguments[n];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
        }, dr.apply(this, arguments)
    };
    ro = function(r, e) {
        var t, n, i = ["string", "number", "boolean", "undefined"],
            o = typeof r,
            s = typeof e;
        if (o !== s) return !1;
        try {
            for (var u = to(i), a = u.next(); !a.done; a = u.next()) {
                var l = a.value;
                if (l === o) return r === e
            }
        } catch (m) {
            t = {
                error: m
            }
        } finally {
            try {
                a && !a.done && (n = u.return) && n.call(u)
            } finally {
                if (t) throw t.error
            }
        }
        if (r == null && e == null) return !0;
        if (r == null || e == null || r.length !== e.length) return !1;
        var c = Array.isArray(r),
            f = Array.isArray(e);
        if (c !== f) return !1;
        if (c && f) {
            for (var d = 0; d < r.length; d++)
                if (!ro(r[d], e[d])) return !1
        } else {
            var p = Object.keys(r).sort(),
                h = Object.keys(e).sort();
            if (!ro(p, h)) return !1;
            var g = !0;
            return Object.keys(r).forEach(function(m) {
                ro(r[m], e[m]) || (g = !1)
            }), g
        }
        return !0
    }, l_ = "$set", u_ = "$unset", c_ = "$clearAll";
    Object.entries || (Object.entries = function(r) {
        for (var e = Object.keys(r), t = e.length, n = new Array(t); t--;) n[t] = [e[t], r[e[t]]];
        return n
    });
    f_ = function() {
        function r() {
            this.identity = {
                userProperties: {}
            }, this.listeners = new Set
        }
        return r.prototype.editIdentity = function() {
            var e = this,
                t = dr({}, this.identity.userProperties),
                n = dr(dr({}, this.identity), {
                    userProperties: t
                });
            return {
                setUserId: function(i) {
                    return n.userId = i, this
                },
                setDeviceId: function(i) {
                    return n.deviceId = i, this
                },
                setUserProperties: function(i) {
                    return n.userProperties = i, this
                },
                setOptOut: function(i) {
                    return n.optOut = i, this
                },
                updateUserProperties: function(i) {
                    var o, s, u, a, l, c, f = n.userProperties || {};
                    try {
                        for (var d = to(Object.entries(i)), p = d.next(); !p.done; p = d.next()) {
                            var h = Sh(p.value, 2),
                                g = h[0],
                                m = h[1];
                            switch (g) {
                                case l_:
                                    try {
                                        for (var b = (u = void 0, to(Object.entries(m))), v = b.next(); !v.done; v = b.next()) {
                                            var y = Sh(v.value, 2),
                                                S = y[0],
                                                _ = y[1];
                                            f[S] = _
                                        }
                                    } catch (E) {
                                        u = {
                                            error: E
                                        }
                                    } finally {
                                        try {
                                            v && !v.done && (a = b.return) && a.call(b)
                                        } finally {
                                            if (u) throw u.error
                                        }
                                    }
                                    break;
                                case u_:
                                    try {
                                        for (var x = (l = void 0, to(Object.keys(m))), C = x.next(); !C.done; C = x.next()) {
                                            var S = C.value;
                                            delete f[S]
                                        }
                                    } catch (E) {
                                        l = {
                                            error: E
                                        }
                                    } finally {
                                        try {
                                            C && !C.done && (c = x.return) && c.call(x)
                                        } finally {
                                            if (l) throw l.error
                                        }
                                    }
                                    break;
                                case c_:
                                    f = {};
                                    break
                            }
                        }
                    } catch (E) {
                        o = {
                            error: E
                        }
                    } finally {
                        try {
                            p && !p.done && (s = d.return) && s.call(d)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return n.userProperties = f, this
                },
                commit: function() {
                    return e.setIdentity(n), this
                }
            }
        }, r.prototype.getIdentity = function() {
            return dr({}, this.identity)
        }, r.prototype.setIdentity = function(e) {
            var t = dr({}, this.identity);
            this.identity = dr({}, e), ro(t, this.identity) || this.listeners.forEach(function(n) {
                n(e)
            })
        }, r.prototype.addIdentityListener = function(e) {
            this.listeners.add(e)
        }, r.prototype.removeIdentityListener = function(e) {
            this.listeners.delete(e)
        }, r
    }(), $n = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : self, Eh = function() {
        function r() {
            this.identityStore = new f_, this.eventBridge = new a_, this.applicationContextProvider = new o_
        }
        return r.getInstance = function(e) {
            return $n.analyticsConnectorInstances || ($n.analyticsConnectorInstances = {}), $n.analyticsConnectorInstances[e] || ($n.analyticsConnectorInstances[e] = new r), $n.analyticsConnectorInstances[e]
        }, r
    }()
});
var jt, Wl, Gl, zl = w(() => {
    "use strict";
    _h();
    jt = function(r) {
        return r === void 0 && (r = "$default_instance"), Eh.getInstance(r)
    }, Wl = function(r, e) {
        jt(e).identityStore.editIdentity().setUserId(r).commit()
    }, Gl = function(r, e) {
        jt(e).identityStore.editIdentity().setDeviceId(r).commit()
    }
});
var ql, xh = w(() => {
    "use strict";
    cr();
    zl();
    ql = function() {
        function r() {
            this.name = "identity", this.type = "before", this.identityStore = jt().identityStore
        }
        return r.prototype.execute = function(e) {
            return Ve(this, void 0, void 0, function() {
                var t;
                return We(this, function(n) {
                    return t = e.user_properties, t && this.identityStore.editIdentity().updateUserProperties(t).commit(), [2, e]
                })
            })
        }, r.prototype.setup = function(e) {
            return Ve(this, void 0, void 0, function() {
                return We(this, function(t) {
                    return e.instanceName && (this.identityStore = jt(e.instanceName).identityStore), [2]
                })
            })
        }, r
    }()
});
var Hl, Ch = w(() => {
    "use strict";
    Hl = function() {
        var r, e, t, n;
        if (typeof navigator > "u") return "";
        var i = navigator.userLanguage;
        return (n = (t = (e = (r = navigator.languages) === null || r === void 0 ? void 0 : r[0]) !== null && e !== void 0 ? e : navigator.language) !== null && t !== void 0 ? t : i) !== null && n !== void 0 ? n : ""
    }
});
var jn, no, Yl, Kl, io, oo, so, Xl, Jl, Zl, Ih = w(() => {
    "use strict";
    cr();
    jn = function(r, e) {
        return typeof r == "boolean" ? r : r ? .[e] !== !1
    }, no = function(r) {
        return jn(r, "attribution")
    }, Yl = function(r) {
        return jn(r, "fileDownloads")
    }, Kl = function(r) {
        return jn(r, "formInteractions")
    }, io = function(r) {
        return jn(r, "pageViews")
    }, oo = function(r) {
        return jn(r, "sessions")
    }, so = function(r) {
        return typeof r == "boolean" ? r : typeof r == "object" && (r.elementInteractions === !0 || typeof r.elementInteractions == "object")
    }, Xl = function(r) {
        if (so(r.autocapture) && typeof r.autocapture == "object" && typeof r.autocapture.elementInteractions == "object") return r.autocapture.elementInteractions
    }, Jl = function(r) {
        var e = function() {
                return !1
            },
            t = void 0,
            n, i = r.pageCounter,
            o = io(r.defaultTracking);
        return o && (e = void 0, n = void 0, r.defaultTracking && typeof r.defaultTracking == "object" && r.defaultTracking.pageViews && typeof r.defaultTracking.pageViews == "object" && ("trackOn" in r.defaultTracking.pageViews && (e = r.defaultTracking.pageViews.trackOn), "trackHistoryChanges" in r.defaultTracking.pageViews && (t = r.defaultTracking.pageViews.trackHistoryChanges), "eventType" in r.defaultTracking.pageViews && r.defaultTracking.pageViews.eventType && (n = r.defaultTracking.pageViews.eventType))), {
            trackOn: e,
            trackHistoryChanges: t,
            eventType: n,
            pageCounter: i
        }
    }, Zl = function(r) {
        return no(r.defaultTracking) && r.defaultTracking && typeof r.defaultTracking == "object" && r.defaultTracking.attribution && typeof r.defaultTracking.attribution == "object" ? qe({}, r.defaultTracking.attribution) : {}
    }
});
var Me = w(() => {
    "use strict";
    $l();
    yh();
    Dn();
    Tl();
    Bl();
    ch();
    wh();
    bh();
    zl();
    xh();
    Ch();
    Qi();
    Ih()
});
var ao, lo, Th = w(() => {
    "use strict";
    ao = function(r, e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t],
                i = n.name,
                o = n.args,
                s = n.resolve,
                u = r && r[i];
            if (typeof u == "function") {
                var a = u.apply(r, o);
                typeof s == "function" && s(a ? .promise)
            }
        }
        return r
    }, lo = function(r) {
        var e = r;
        return e && e._q !== void 0
    }
});
var Oh, Rh = w(() => {
    "use strict";
    Oh = "2.11.12"
});
var Ph, Ah = w(() => {
    "use strict";
    Ph = "amplitude-ts"
});
var d_, p_, Mh, Nh = w(() => {
    "use strict";
    it();
    Ae();
    Me();
    Rh();
    Ah();
    d_ = "Web", p_ = "$remote", Mh = function() {
        function r() {
            this.name = "@amplitude/plugin-context-browser", this.type = "before", this.library = "".concat(Ph, "/").concat(Oh), typeof navigator < "u" && (this.userAgent = navigator.userAgent)
        }
        return r.prototype.setup = function(e) {
            return this.config = e, Promise.resolve(void 0)
        }, r.prototype.execute = function(e) {
            var t, n;
            return $(this, void 0, void 0, function() {
                var i, o, s, u;
                return j(this, function(a) {
                    return i = new Date().getTime(), o = (t = this.config.lastEventId) !== null && t !== void 0 ? t : -1, s = (n = e.event_id) !== null && n !== void 0 ? n : o + 1, this.config.lastEventId = s, e.time || (this.config.lastEventTime = i), u = pe(pe(pe(pe(pe(pe(pe(pe({
                        user_id: this.config.userId,
                        device_id: this.config.deviceId,
                        session_id: this.config.sessionId,
                        time: i
                    }, this.config.appVersion && {
                        app_version: this.config.appVersion
                    }), this.config.trackingOptions.platform && {
                        platform: d_
                    }), this.config.trackingOptions.language && {
                        language: Hl()
                    }), this.config.trackingOptions.ipAddress && {
                        ip: p_
                    }), {
                        insert_id: mt(),
                        partner_id: this.config.partnerId,
                        plan: this.config.plan
                    }), this.config.ingestionMetadata && {
                        ingestion_metadata: {
                            source_name: this.config.ingestionMetadata.sourceName,
                            source_version: this.config.ingestionMetadata.sourceVersion
                        }
                    }), e), {
                        event_id: s,
                        library: this.library,
                        user_agent: this.userAgent
                    }), [2, u]
                })
            })
        }, r
    }()
});
var uo, Ql = w(() => {
    "use strict";
    it();
    uo = function() {
        function r(e) {
            this.storage = e
        }
        return r.prototype.isEnabled = function() {
            return $(this, void 0, void 0, function() {
                var e, t, n, i, o;
                return j(this, function(s) {
                    switch (s.label) {
                        case 0:
                            if (!this.storage) return [2, !1];
                            e = String(Date.now()), t = new r(this.storage), n = "AMP_TEST", s.label = 1;
                        case 1:
                            return s.trys.push([1, 4, 5, 7]), [4, t.set(n, e)];
                        case 2:
                            return s.sent(), [4, t.get(n)];
                        case 3:
                            return i = s.sent(), [2, i === e];
                        case 4:
                            return o = s.sent(), [2, !1];
                        case 5:
                            return [4, t.remove(n)];
                        case 6:
                            return s.sent(), [7];
                        case 7:
                            return [2]
                    }
                })
            })
        }, r.prototype.get = function(e) {
            return $(this, void 0, void 0, function() {
                var t, n;
                return j(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 2, , 3]), [4, this.getRaw(e)];
                        case 1:
                            return t = i.sent(), t ? [2, JSON.parse(t)] : [2, void 0];
                        case 2:
                            return n = i.sent(), console.error("[Amplitude] Error: Could not get value from storage"), [2, void 0];
                        case 3:
                            return [2]
                    }
                })
            })
        }, r.prototype.getRaw = function(e) {
            var t;
            return $(this, void 0, void 0, function() {
                return j(this, function(n) {
                    return [2, ((t = this.storage) === null || t === void 0 ? void 0 : t.getItem(e)) || void 0]
                })
            })
        }, r.prototype.set = function(e, t) {
            var n;
            return $(this, void 0, void 0, function() {
                return j(this, function(i) {
                    try {
                        (n = this.storage) === null || n === void 0 || n.setItem(e, JSON.stringify(t))
                    } catch {}
                    return [2]
                })
            })
        }, r.prototype.remove = function(e) {
            var t;
            return $(this, void 0, void 0, function() {
                return j(this, function(n) {
                    try {
                        (t = this.storage) === null || t === void 0 || t.removeItem(e)
                    } catch {}
                    return [2]
                })
            })
        }, r.prototype.reset = function() {
            var e;
            return $(this, void 0, void 0, function() {
                return j(this, function(t) {
                    try {
                        (e = this.storage) === null || e === void 0 || e.clear()
                    } catch {}
                    return [2]
                })
            })
        }, r
    }()
});
var co, eu, Dh = w(() => {
    "use strict";
    it();
    Me();
    Ql();
    co = 1e3, eu = function(r) {
        gt(e, r);

        function e(t) {
            var n = this,
                i;
            return n = r.call(this, (i = B()) === null || i === void 0 ? void 0 : i.localStorage) || this, n.loggerProvider = t ? .loggerProvider, n
        }
        return e.prototype.set = function(t, n) {
            var i;
            return $(this, void 0, void 0, function() {
                var o;
                return j(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return Array.isArray(n) && n.length > co ? (o = n.length - co, [4, r.prototype.set.call(this, t, n.slice(0, co))]) : [3, 2];
                        case 1:
                            return s.sent(), (i = this.loggerProvider) === null || i === void 0 || i.error("Failed to save ".concat(o, " events because the queue length exceeded ").concat(co, ".")), [3, 4];
                        case 2:
                            return [4, r.prototype.set.call(this, t, n)];
                        case 3:
                            s.sent(), s.label = 4;
                        case 4:
                            return [2]
                    }
                })
            })
        }, e
    }(uo)
});
var kh, Lh = w(() => {
    "use strict";
    it();
    Me();
    Ql();
    kh = function(r) {
        gt(e, r);

        function e() {
            var t;
            return r.call(this, (t = B()) === null || t === void 0 ? void 0 : t.sessionStorage) || this
        }
        return e
    }(uo)
});
var Fh, Uh = w(() => {
    "use strict";
    it();
    Ae();
    Fh = function(r) {
        gt(e, r);

        function e() {
            var t = r !== null && r.apply(this, arguments) || this;
            return t.state = {
                done: 4
            }, t
        }
        return e.prototype.send = function(t, n) {
            return $(this, void 0, void 0, function() {
                var i = this;
                return j(this, function(o) {
                    return [2, new Promise(function(s, u) {
                        typeof XMLHttpRequest > "u" && u(new Error("XHRTransport is not supported."));
                        var a = new XMLHttpRequest;
                        a.open("POST", t, !0), a.onreadystatechange = function() {
                            if (a.readyState === i.state.done) {
                                var l = a.responseText;
                                try {
                                    s(i.buildResponse(JSON.parse(l)))
                                } catch {
                                    s(i.buildResponse({
                                        code: a.status
                                    }))
                                }
                            }
                        }, a.setRequestHeader("Content-Type", "application/json"), a.setRequestHeader("Accept", "*/*"), a.send(JSON.stringify(n))
                    })]
                })
            })
        }, e
    }(at)
});
var $h, jh = w(() => {
    "use strict";
    it();
    Me();
    Ae();
    $h = function(r) {
        gt(e, r);

        function e() {
            return r !== null && r.apply(this, arguments) || this
        }
        return e.prototype.send = function(t, n) {
            return $(this, void 0, void 0, function() {
                var i = this;
                return j(this, function(o) {
                    return [2, new Promise(function(s, u) {
                        var a = B();
                        if (!a ? .navigator.sendBeacon) throw new Error("SendBeaconTransport is not supported");
                        try {
                            var l = JSON.stringify(n),
                                c = a.navigator.sendBeacon(t, JSON.stringify(n));
                            return s(c ? i.buildResponse({
                                code: 200,
                                events_ingested: n.events.length,
                                payload_size_bytes: l.length,
                                server_upload_time: Date.now()
                            }) : i.buildResponse({
                                code: 500
                            }))
                        } catch (f) {
                            u(f)
                        }
                    })]
                })
            })
        }, e
    }(at)
});
var Bh, tu, h_, Vh = w(() => {
    "use strict";
    it();
    Me();
    Bh = function(r, e, t) {
        return t === void 0 && (t = !0), $(void 0, void 0, void 0, function() {
            var n, i, o, s, u, a, l, c, f;
            return j(this, function(d) {
                switch (d.label) {
                    case 0:
                        return n = jl(r), [4, e.getRaw(n)];
                    case 1:
                        return i = d.sent(), i ? t ? [4, e.remove(n)] : [3, 3] : [2, {
                            optOut: !1
                        }];
                    case 2:
                        d.sent(), d.label = 3;
                    case 3:
                        return o = th(i.split("."), 6), s = o[0], u = o[1], a = o[2], l = o[3], c = o[4], f = o[5], [2, {
                            deviceId: s,
                            userId: h_(u),
                            sessionId: tu(l),
                            lastEventId: tu(f),
                            lastEventTime: tu(c),
                            optOut: !!a
                        }]
                }
            })
        })
    }, tu = function(r) {
        var e = parseInt(r, 32);
        if (!isNaN(e)) return e
    }, h_ = function(r) {
        if (!(!atob || !escape || !r)) try {
            return decodeURIComponent(escape(atob(r)))
        } catch {
            return
        }
    }
});
var vt, ZD, ru, Wh, Gh, nu, iu, zh, qh, Hh, Yh, Kh, fo, po, ho, Bn, Xh, Vn = w(() => {
    "use strict";
    vt = "[Amplitude]", ZD = "".concat(vt, " Page Viewed"), ru = "".concat(vt, " Form Started"), Wh = "".concat(vt, " Form Submitted"), Gh = "".concat(vt, " File Downloaded"), nu = "session_start", iu = "session_end", zh = "".concat(vt, " File Extension"), qh = "".concat(vt, " File Name"), Hh = "".concat(vt, " Link ID"), Yh = "".concat(vt, " Link Text"), Kh = "".concat(vt, " Link URL"), fo = "".concat(vt, " Form ID"), po = "".concat(vt, " Form Name"), ho = "".concat(vt, " Form Destination"), Bn = "cookie", Xh = "US"
});
var m_, Jh, g_, ou, v_, Zh = w(() => {
    "use strict";
    it();
    Fe();
    Ae();
    Me();
    Dh();
    Lh();
    Uh();
    jh();
    Vh();
    Vn();
    m_ = function(r) {
        gt(e, r);

        function e(t, n, i, o, s, u, a, l, c, f, d, p, h, g, m, b, v, y, S, _, x, C, E, I, R, k, D, P, X, Z, L, F, Q, J) {
            i === void 0 && (i = new Nn), o === void 0 && (o = {
                domain: "",
                expiration: 365,
                sameSite: "Lax",
                secure: !1,
                upgrade: !0
            }), l === void 0 && (l = 1e3), c === void 0 && (c = 5), f === void 0 && (f = 30), d === void 0 && (d = Bn), b === void 0 && (b = new $t), v === void 0 && (v = Le.Warn), S === void 0 && (S = !1), _ === void 0 && (_ = !1), E === void 0 && (E = ""), I === void 0 && (I = Xh), k === void 0 && (k = 30 * 60 * 1e3), D === void 0 && (D = new eu({
                loggerProvider: b
            })), P === void 0 && (P = {
                ipAddress: !0,
                language: !0,
                platform: !0
            }), X === void 0 && (X = "fetch"), Z === void 0 && (Z = !1), L === void 0 && (L = !1);
            var A = r.call(this, {
                apiKey: t,
                storageProvider: D,
                transportProvider: ou(X)
            }) || this;
            return A.apiKey = t, A.appVersion = n, A.cookieOptions = o, A.defaultTracking = s, A.autocapture = u, A.flushIntervalMillis = l, A.flushMaxRetries = c, A.flushQueueSize = f, A.identityStorage = d, A.ingestionMetadata = p, A.instanceName = h, A.loggerProvider = b, A.logLevel = v, A.minIdLength = y, A.offline = S, A.partnerId = x, A.plan = C, A.serverUrl = E, A.serverZone = I, A.sessionTimeout = k, A.storageProvider = D, A.trackingOptions = P, A.transport = X, A.useBatch = Z, A.fetchRemoteConfig = L, A._optOut = !1, A._cookieStorage = i, A.deviceId = a, A.lastEventId = g, A.lastEventTime = m, A.optOut = _, A.sessionId = R, A.pageCounter = Q, A.userId = F, A.debugLogsEnabled = J, A.loggerProvider.enable(J ? Le.Debug : A.logLevel), A
        }
        return Object.defineProperty(e.prototype, "cookieStorage", {
            get: function() {
                return this._cookieStorage
            },
            set: function(t) {
                this._cookieStorage !== t && (this._cookieStorage = t, this.updateStorage())
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "deviceId", {
            get: function() {
                return this._deviceId
            },
            set: function(t) {
                this._deviceId !== t && (this._deviceId = t, this.updateStorage())
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "userId", {
            get: function() {
                return this._userId
            },
            set: function(t) {
                this._userId !== t && (this._userId = t, this.updateStorage())
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "sessionId", {
            get: function() {
                return this._sessionId
            },
            set: function(t) {
                this._sessionId !== t && (this._sessionId = t, this.updateStorage())
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "optOut", {
            get: function() {
                return this._optOut
            },
            set: function(t) {
                this._optOut !== t && (this._optOut = t, this.updateStorage())
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "lastEventTime", {
            get: function() {
                return this._lastEventTime
            },
            set: function(t) {
                this._lastEventTime !== t && (this._lastEventTime = t, this.updateStorage())
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "lastEventId", {
            get: function() {
                return this._lastEventId
            },
            set: function(t) {
                this._lastEventId !== t && (this._lastEventId = t, this.updateStorage())
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "pageCounter", {
            get: function() {
                return this._pageCounter
            },
            set: function(t) {
                this._pageCounter !== t && (this._pageCounter = t, this.updateStorage())
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "debugLogsEnabled", {
            set: function(t) {
                this._debugLogsEnabled !== t && (this._debugLogsEnabled = t, this.updateStorage())
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.updateStorage = function() {
            var t = {
                deviceId: this._deviceId,
                userId: this._userId,
                sessionId: this._sessionId,
                optOut: this._optOut,
                lastEventTime: this._lastEventTime,
                lastEventId: this._lastEventId,
                pageCounter: this._pageCounter,
                debugLogsEnabled: this._debugLogsEnabled
            };
            this.cookieStorage.set(eo(this.apiKey), t)
        }, e
    }(An), Jh = function(r, e, t) {
        return e === void 0 && (e = {}), $(void 0, void 0, void 0, function() {
            var n, i, o, s, u, a, l, c, f, d, p, h, g, m, b, v, y, S, _, x, C, E, I, R, k, D, P, X, Z, L, F, Q, J, A, ye, je, Oe, we, oe, ht, De, Re, Ht;
            return j(this, function(Ze) {
                switch (Ze.label) {
                    case 0:
                        return n = e.identityStorage || Bn, _ = {}, n === Bn ? [3, 1] : (o = "", [3, 5]);
                    case 1:
                        return (C = (x = e.cookieOptions) === null || x === void 0 ? void 0 : x.domain) !== null && C !== void 0 ? (s = C, [3, 4]) : [3, 2];
                    case 2:
                        return [4, v_()];
                    case 3:
                        s = Ze.sent(), Ze.label = 4;
                    case 4:
                        o = s, Ze.label = 5;
                    case 5:
                        return i = pe.apply(void 0, [(_.domain = o, _.expiration = 365, _.sameSite = "Lax", _.secure = !1, _.upgrade = !0, _), e.cookieOptions]), u = g_(e.identityStorage, i), [4, Bh(r, u, (I = (E = e.cookieOptions) === null || E === void 0 ? void 0 : E.upgrade) !== null && I !== void 0 ? I : !0)];
                    case 6:
                        return a = Ze.sent(), [4, u.get(eo(r))];
                    case 7:
                        return l = Ze.sent(), c = fr(), f = (X = (P = (D = (k = (R = e.deviceId) !== null && R !== void 0 ? R : c.ampDeviceId) !== null && k !== void 0 ? k : c.deviceId) !== null && D !== void 0 ? D : l ? .deviceId) !== null && P !== void 0 ? P : a.deviceId) !== null && X !== void 0 ? X : mt(), d = (Z = l ? .lastEventId) !== null && Z !== void 0 ? Z : a.lastEventId, p = (L = l ? .lastEventTime) !== null && L !== void 0 ? L : a.lastEventTime, h = (Q = (F = e.optOut) !== null && F !== void 0 ? F : l ? .optOut) !== null && Q !== void 0 ? Q : a.optOut, g = (J = l ? .sessionId) !== null && J !== void 0 ? J : a.sessionId, m = (ye = (A = e.userId) !== null && A !== void 0 ? A : l ? .userId) !== null && ye !== void 0 ? ye : a.userId, t.previousSessionDeviceId = (je = l ? .deviceId) !== null && je !== void 0 ? je : a.deviceId, t.previousSessionUserId = (Oe = l ? .userId) !== null && Oe !== void 0 ? Oe : a.userId, b = {
                            ipAddress: (oe = (we = e.trackingOptions) === null || we === void 0 ? void 0 : we.ipAddress) !== null && oe !== void 0 ? oe : !0,
                            language: (De = (ht = e.trackingOptions) === null || ht === void 0 ? void 0 : ht.language) !== null && De !== void 0 ? De : !0,
                            platform: (Ht = (Re = e.trackingOptions) === null || Re === void 0 ? void 0 : Re.platform) !== null && Ht !== void 0 ? Ht : !0
                        }, v = l ? .pageCounter, y = l ? .debugLogsEnabled, e.autocapture !== void 0 && (e.defaultTracking = e.autocapture), S = new m_(r, e.appVersion, u, i, e.defaultTracking, e.autocapture, f, e.flushIntervalMillis, e.flushMaxRetries, e.flushQueueSize, n, e.ingestionMetadata, e.instanceName, d, p, e.loggerProvider, e.logLevel, e.minIdLength, e.offline, h, e.partnerId, e.plan, e.serverUrl, e.serverZone, g, e.sessionTimeout, e.storageProvider, b, e.transport, e.useBatch, e.fetchRemoteConfig, m, v, y), [4, S.storageProvider.isEnabled()];
                    case 8:
                        return Ze.sent() || (S.loggerProvider.warn("Storage provider ".concat(S.storageProvider.constructor.name, " is not enabled. Falling back to MemoryStorage.")), S.storageProvider = new Nn), [2, S]
                }
            })
        })
    }, g_ = function(r, e) {
        switch (r === void 0 && (r = Bn), e === void 0 && (e = {}), r) {
            case "localStorage":
                return new eu;
            case "sessionStorage":
                return new kh;
            case "none":
                return new Nn;
            case "cookie":
            default:
                return new Fn(pe(pe({}, e), {
                    expirationDays: e.expiration
                }))
        }
    }, ou = function(r) {
        return r === "xhr" ? new Fh : r === "beacon" ? new $h : new Un
    }, v_ = function(r) {
        return $(void 0, void 0, void 0, function() {
            var e, t, n, i, o, o, s, u, a, l;
            return j(this, function(c) {
                switch (c.label) {
                    case 0:
                        return [4, new Fn().isEnabled()];
                    case 1:
                        if (!c.sent() || !r && (typeof location > "u" || !location.hostname)) return [2, ""];
                        for (e = r ? ? location.hostname, t = e.split("."), n = [], i = "AMP_TLDTEST", o = t.length - 2; o >= 0; --o) n.push(t.slice(o).join("."));
                        o = 0, c.label = 2;
                    case 2:
                        return o < n.length ? (s = n[o], u = {
                            domain: "." + s
                        }, a = new Fn(u), [4, a.set(i, 1)]) : [3, 7];
                    case 3:
                        return c.sent(), [4, a.get(i)];
                    case 4:
                        return l = c.sent(), l ? [4, a.remove(i)] : [3, 6];
                    case 5:
                        return c.sent(), [2, "." + s];
                    case 6:
                        return o++, [3, 2];
                    case 7:
                        return [2, ""]
                }
            })
        })
    }
});

function br(r, e, t, n) {
    function i(o) {
        return o instanceof t ? o : new t(function(s) {
            s(o)
        })
    }
    return new(t || (t = Promise))(function(o, s) {
        function u(c) {
            try {
                l(n.next(c))
            } catch (f) {
                s(f)
            }
        }

        function a(c) {
            try {
                l(n.throw(c))
            } catch (f) {
                s(f)
            }
        }

        function l(c) {
            c.done ? o(c.value) : i(c.value).then(u, a)
        }
        l((n = n.apply(r, e || [])).next())
    })
}

function Sr(r, e) {
    var t = {
            label: 0,
            sent: function() {
                if (o[0] & 1) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        },
        n, i, o, s;
    return s = {
        next: u(0),
        throw: u(1),
        return: u(2)
    }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }), s;

    function u(l) {
        return function(c) {
            return a([l, c])
        }
    }

    function a(l) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; s && (s = 0, l[0] && (t = 0)), t;) try {
            if (n = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done) return o;
            switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
                case 0:
                case 1:
                    o = l;
                    break;
                case 4:
                    return t.label++, {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    t.label++, i = l[1], l = [0];
                    continue;
                case 7:
                    l = t.ops.pop(), t.trys.pop();
                    continue;
                default:
                    if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
                        t.label = l[1];
                        break
                    }
                    if (l[0] === 6 && t.label < o[1]) {
                        t.label = o[1], o = l;
                        break
                    }
                    if (o && t.label < o[2]) {
                        t.label = o[2], t.ops.push(l);
                        break
                    }
                    o[2] && t.ops.pop(), t.trys.pop();
                    continue
            }
            l = e.call(r, t)
        } catch (c) {
            l = [6, c], i = 0
        } finally {
            n = o = 0
        }
        if (l[0] & 5) throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}

function mo(r, e) {
    var t = typeof Symbol == "function" && r[Symbol.iterator];
    if (!t) return r;
    var n = t.call(r),
        i, o = [],
        s;
    try {
        for (;
            (e === void 0 || e-- > 0) && !(i = n.next()).done;) o.push(i.value)
    } catch (u) {
        s = {
            error: u
        }
    } finally {
        try {
            i && !i.done && (t = n.return) && t.call(n)
        } finally {
            if (s) throw s.error
        }
    }
    return o
}

function su(r, e, t) {
    if (t || arguments.length === 2)
        for (var n = 0, i = e.length, o; n < i; n++)(o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
    return r.concat(o || Array.prototype.slice.call(e))
}
var Qt, Qh = w(() => {
    "use strict";
    Qt = function() {
        return Qt = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) {
                t = arguments[n];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
        }, Qt.apply(this, arguments)
    }
});
var em, tm = w(() => {
    "use strict";
    em = function(r) {
        var e = {};
        for (var t in r) {
            var n = r[t];
            n && (e[t] = n)
        }
        return e
    }
});
var y_, au, w_, b_, S_, rm = w(() => {
    "use strict";
    Qh();
    Me();
    Fe();
    Me();
    tm();
    y_ = "[Amplitude] Page Viewed", au = function(r) {
        r === void 0 && (r = {});
        var e, t = B(),
            n = void 0,
            i, o, s = r.trackOn,
            u = r.trackHistoryChanges,
            a = r.eventType,
            l = a === void 0 ? y_ : a,
            c = function(b) {
                var v = b;
                try {
                    v = decodeURI(b)
                } catch (y) {
                    n ? .error("Malformed URI sequence: ", y)
                }
                return v
            },
            f = function() {
                return br(void 0, void 0, void 0, function() {
                    var b, v, y;
                    return Sr(this, function(S) {
                        switch (S.label) {
                            case 0:
                                return b = c(typeof location < "u" && location.href || ""), y = {
                                    event_type: l
                                }, v = [{}], [4, w_()];
                            case 1:
                                return [2, (y.event_properties = Qt.apply(void 0, [Qt.apply(void 0, v.concat([S.sent()])), {
                                    "[Amplitude] Page Domain": typeof location < "u" && location.hostname || "",
                                    "[Amplitude] Page Location": b,
                                    "[Amplitude] Page Path": typeof location < "u" && c(location.pathname) || "",
                                    "[Amplitude] Page Title": typeof document < "u" && document.title || "",
                                    "[Amplitude] Page URL": b.split("?")[0]
                                }]), y)]
                        }
                    })
                })
            },
            d = function() {
                return typeof s > "u" || typeof s == "function" && s()
            },
            p = typeof location < "u" ? location.href : null,
            h = function() {
                return br(void 0, void 0, void 0, function() {
                    var b, v, y, S, _;
                    return Sr(this, function(x) {
                        switch (x.label) {
                            case 0:
                                return b = location.href, v = S_(u, b, p || "") && d(), p = b, v ? (n ? .log("Tracking page view event"), e != null ? [3, 1] : (y = void 0, [3, 3])) : [3, 4];
                            case 1:
                                return _ = (S = e).track, [4, f()];
                            case 2:
                                y = _.apply(S, [x.sent()]), x.label = 3;
                            case 3:
                                x.label = 4;
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            g = function() {
                h()
            },
            m = {
                name: "@amplitude/plugin-page-view-tracking-browser",
                type: "enrichment",
                setup: function(b, v) {
                    return br(void 0, void 0, void 0, function() {
                        var y, S;
                        return Sr(this, function(_) {
                            switch (_.label) {
                                case 0:
                                    return e = v, o = b, n = b.loggerProvider, n.log("Installing @amplitude/plugin-page-view-tracking-browser"), t && (t.addEventListener("popstate", g), i = t.history.pushState, t.history.pushState = new Proxy(t.history.pushState, {
                                        apply: function(x, C, E) {
                                            var I = mo(E, 3),
                                                R = I[0],
                                                k = I[1],
                                                D = I[2];
                                            x.apply(C, [R, k, D]), h()
                                        }
                                    })), d() ? (n.log("Tracking page view event"), S = (y = e).track, [4, f()]) : [3, 2];
                                case 1:
                                    S.apply(y, [_.sent()]), _.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                },
                execute: function(b) {
                    return br(void 0, void 0, void 0, function() {
                        var v;
                        return Sr(this, function(y) {
                            switch (y.label) {
                                case 0:
                                    return s === "attribution" && b_(b) ? (n ? .log("Enriching campaign event to page view event with campaign parameters"), [4, f()]) : [3, 2];
                                case 1:
                                    v = y.sent(), b.event_type = v.event_type, b.event_properties = Qt(Qt({}, b.event_properties), v.event_properties), y.label = 2;
                                case 2:
                                    return o && b.event_type === l && (o.pageCounter = o.pageCounter ? o.pageCounter + 1 : 1, b.event_properties = Qt(Qt({}, b.event_properties), {
                                        "[Amplitude] Page Counter": o.pageCounter
                                    })), [2, b]
                            }
                        })
                    })
                },
                teardown: function() {
                    return br(void 0, void 0, void 0, function() {
                        return Sr(this, function(b) {
                            return t && (t.removeEventListener("popstate", g), i && (t.history.pushState = i)), [2]
                        })
                    })
                }
            };
        return m
    }, w_ = function() {
        return br(void 0, void 0, void 0, function() {
            var r;
            return Sr(this, function(e) {
                switch (e.label) {
                    case 0:
                        return r = em, [4, new kn().parse()];
                    case 1:
                        return [2, r.apply(void 0, [e.sent()])]
                }
            })
        })
    }, b_ = function(r) {
        if (r.event_type === "$identify" && r.user_properties) {
            var e = r.user_properties,
                t = e[Pe.SET] || {},
                n = e[Pe.UNSET] || {},
                i = su(su([], mo(Object.keys(t)), !1), mo(Object.keys(n)), !1);
            return Object.keys(Zt).every(function(o) {
                return i.includes(o)
            })
        }
        return !1
    }, S_ = function(r, e, t) {
        switch (r) {
            case "pathOnly":
                {
                    if (t == "") return !0;
                    var n = new URL(e),
                        i = new URL(t),
                        o = n.origin + n.pathname,
                        s = i.origin + i.pathname;
                    return o !== s
                }
            default:
                return e !== t
        }
    }
});
var nm = w(() => {
    "use strict";
    rm()
});
var om, qr, im, sm = w(() => {
    "use strict";
    it();
    Vn();
    Me();
    om = function() {
        var r, e = [],
            t = function(l, c, f) {
                l.addEventListener(c, f), e.push({
                    element: l,
                    type: c,
                    handler: f
                })
            },
            n = function() {
                e.forEach(function(l) {
                    var c = l.element,
                        f = l.type,
                        d = l.handler;
                    c ? .removeEventListener(f, d)
                }), e = []
            },
            i = "@amplitude/plugin-form-interaction-tracking-browser",
            o = "enrichment",
            s = function(l, c) {
                return $(void 0, void 0, void 0, function() {
                    var f;
                    return j(this, function(d) {
                        return (f = B()) === null || f === void 0 || f.addEventListener("load", function() {
                            if (!c) {
                                l.loggerProvider.warn("Form interaction tracking requires a later version of @amplitude/analytics-browser. Form interaction events are not tracked.");
                                return
                            }
                            if (!(typeof document > "u")) {
                                var p = function(g) {
                                        var m = !1;
                                        t(g, "change", function() {
                                            var b, v = im(g);
                                            m || c.track(ru, (b = {}, b[fo] = qr(g.id), b[po] = qr(g.name), b[ho] = v, b)), m = !0
                                        }), t(g, "submit", function() {
                                            var b, v, y = im(g);
                                            m || c.track(ru, (b = {}, b[fo] = qr(g.id), b[po] = qr(g.name), b[ho] = y, b)), c.track(Wh, (v = {}, v[fo] = qr(g.id), v[po] = qr(g.name), v[ho] = y, v)), m = !1
                                        })
                                    },
                                    h = Array.from(document.getElementsByTagName("form"));
                                h.forEach(p), typeof MutationObserver < "u" && (r = new MutationObserver(function(g) {
                                    g.forEach(function(m) {
                                        m.addedNodes.forEach(function(b) {
                                            b.nodeName === "FORM" && p(b), "querySelectorAll" in b && typeof b.querySelectorAll == "function" && Array.from(b.querySelectorAll("form")).map(p)
                                        })
                                    })
                                }), r.observe(document.body, {
                                    subtree: !0,
                                    childList: !0
                                }))
                            }
                        }), [2]
                    })
                })
            },
            u = function(l) {
                return $(void 0, void 0, void 0, function() {
                    return j(this, function(c) {
                        return [2, l]
                    })
                })
            },
            a = function() {
                return $(void 0, void 0, void 0, function() {
                    return j(this, function(l) {
                        return r ? .disconnect(), n(), [2]
                    })
                })
            };
        return {
            name: i,
            type: o,
            setup: s,
            execute: u,
            teardown: a
        }
    }, qr = function(r) {
        if (typeof r == "string") return r
    }, im = function(r) {
        var e = r.getAttribute("action");
        try {
            e = new URL(encodeURI(e ? ? ""), window.location.href).href
        } catch {}
        return e
    }
});
var am, lm = w(() => {
    "use strict";
    it();
    Vn();
    Me();
    am = function() {
        var r, e = [],
            t = function(l, c, f) {
                l.addEventListener(c, f), e.push({
                    element: l,
                    type: c,
                    handler: f
                })
            },
            n = function() {
                e.forEach(function(l) {
                    var c = l.element,
                        f = l.type,
                        d = l.handler;
                    c ? .removeEventListener(f, d)
                }), e = []
            },
            i = "@amplitude/plugin-file-download-tracking-browser",
            o = "enrichment",
            s = function(l, c) {
                return $(void 0, void 0, void 0, function() {
                    var f;
                    return j(this, function(d) {
                        return (f = B()) === null || f === void 0 || f.addEventListener("load", function() {
                            if (!c) {
                                l.loggerProvider.warn("File download tracking requires a later version of @amplitude/analytics-browser. File download events are not tracked.");
                                return
                            }
                            if (!(typeof document > "u")) {
                                var p = function(m) {
                                        var b;
                                        try {
                                            b = new URL(m.href, window.location.href)
                                        } catch {
                                            return
                                        }
                                        var v = h.exec(b.href),
                                            y = v ? .[1];
                                        y && t(m, "click", function() {
                                            var S;
                                            y && c.track(Gh, (S = {}, S[zh] = y, S[qh] = b.pathname, S[Hh] = m.id, S[Yh] = m.text, S[Kh] = m.href, S))
                                        })
                                    },
                                    h = /\.(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)(\?.+)?$/,
                                    g = Array.from(document.getElementsByTagName("a"));
                                g.forEach(p), typeof MutationObserver < "u" && (r = new MutationObserver(function(m) {
                                    m.forEach(function(b) {
                                        b.addedNodes.forEach(function(v) {
                                            v.nodeName === "A" && p(v), "querySelectorAll" in v && typeof v.querySelectorAll == "function" && Array.from(v.querySelectorAll("a")).map(p)
                                        })
                                    })
                                }), r.observe(document.body, {
                                    subtree: !0,
                                    childList: !0
                                }))
                            }
                        }), [2]
                    })
                })
            },
            u = function(l) {
                return $(void 0, void 0, void 0, function() {
                    return j(this, function(c) {
                        return [2, l]
                    })
                })
            },
            a = function() {
                return $(void 0, void 0, void 0, function() {
                    return j(this, function(l) {
                        return r ? .disconnect(), n(), [2]
                    })
                })
            };
        return {
            name: i,
            type: o,
            setup: s,
            execute: u,
            teardown: a
        }
    }
});
var um, cm, fm = w(() => {
    "use strict";
    um = !1, cm = function(r) {
        if (!(um || r.defaultTracking !== void 0)) {
            var e = `\`options.defaultTracking\` is set to undefined. This implicitly configures your Amplitude instance to track Page Views, Sessions, File Downloads, and Form Interactions. You can suppress this warning by explicitly setting a value to \`options.defaultTracking\`. The value must either be a boolean, to enable and disable all default events, or an object, for advanced configuration. For example:

amplitude.init(<YOUR_API_KEY>, {
  defaultTracking: true,
});

Visit https://www.docs.developers.amplitude.com/data/sdks/browser-2/#tracking-default-events for more details.`;
            r.loggerProvider.warn(e), um = !0
        }
    }
});
var dm, pm = w(() => {
    "use strict";
    it();
    Me();
    dm = function() {
        var r = "@amplitude/plugin-network-checker-browser",
            e = "before",
            t = B(),
            n = [],
            i = function(a, l) {
                t && (t.addEventListener(a, l), n.push({
                    type: a,
                    handler: l
                }))
            },
            o = function() {
                n.forEach(function(a) {
                    var l = a.type,
                        c = a.handler;
                    t && t.removeEventListener(l, c)
                }), n = []
            },
            s = function(a, l) {
                return $(void 0, void 0, void 0, function() {
                    return j(this, function(c) {
                        return typeof navigator > "u" ? (a.loggerProvider.debug("Network connectivity checker plugin is disabled because navigator is not available."), a.offline = !1, [2]) : (a.offline = !navigator.onLine, i("online", function() {
                            a.loggerProvider.debug("Network connectivity changed to online."), a.offline = !1, setTimeout(function() {
                                l.flush()
                            }, a.flushIntervalMillis)
                        }), i("offline", function() {
                            a.loggerProvider.debug("Network connectivity changed to offline."), a.offline = !0
                        }), [2])
                    })
                })
            },
            u = function() {
                return $(void 0, void 0, void 0, function() {
                    return j(this, function(a) {
                        return o(), [2]
                    })
                })
            };
        return {
            name: r,
            type: e,
            setup: s,
            teardown: u
        }
    }
});

function Er(r, e, t, n) {
    function i(o) {
        return o instanceof t ? o : new t(function(s) {
            s(o)
        })
    }
    return new(t || (t = Promise))(function(o, s) {
        function u(c) {
            try {
                l(n.next(c))
            } catch (f) {
                s(f)
            }
        }

        function a(c) {
            try {
                l(n.throw(c))
            } catch (f) {
                s(f)
            }
        }

        function l(c) {
            c.done ? o(c.value) : i(c.value).then(u, a)
        }
        l((n = n.apply(r, e || [])).next())
    })
}

function _r(r, e) {
    var t = {
            label: 0,
            sent: function() {
                if (o[0] & 1) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        },
        n, i, o, s;
    return s = {
        next: u(0),
        throw: u(1),
        return: u(2)
    }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }), s;

    function u(l) {
        return function(c) {
            return a([l, c])
        }
    }

    function a(l) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; s && (s = 0, l[0] && (t = 0)), t;) try {
            if (n = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done) return o;
            switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
                case 0:
                case 1:
                    o = l;
                    break;
                case 4:
                    return t.label++, {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    t.label++, i = l[1], l = [0];
                    continue;
                case 7:
                    l = t.ops.pop(), t.trys.pop();
                    continue;
                default:
                    if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
                        t.label = l[1];
                        break
                    }
                    if (l[0] === 6 && t.label < o[1]) {
                        t.label = o[1], o = l;
                        break
                    }
                    if (o && t.label < o[2]) {
                        t.label = o[2], t.ops.push(l);
                        break
                    }
                    o[2] && t.ops.pop(), t.trys.pop();
                    continue
            }
            l = e.call(r, t)
        } catch (c) {
            l = [6, c], i = 0
        } finally {
            n = o = 0
        }
        if (l[0] & 5) throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}

function hm(r) {
    var e = typeof Symbol == "function" && Symbol.iterator,
        t = e && r[e],
        n = 0;
    if (t) return t.call(r);
    if (r && typeof r.length == "number") return {
        next: function() {
            return r && n >= r.length && (r = void 0), {
                value: r && r[n++],
                done: !r
            }
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
var Wn, mm = w(() => {
    "use strict";
    Wn = function() {
        return Wn = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) {
                t = arguments[n];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
        }, Wn.apply(this, arguments)
    }
});
var E_, __, x_, gm, vm, C_, I_, T_, O_, ym, wm = w(() => {
    "use strict";
    mm();
    Ae();
    Fe();
    E_ = "Network error occurred, remote config fetch failed", __ = "Remote config successfully fetched", x_ = "Remote config fetch rejected due to exceeded retry count", gm = "Remote config fetch rejected due to timeout after 5 seconds", vm = "Unexpected error occurred", C_ = "https://sr-client-cfg.amplitude.com/config", I_ = "https://sr-client-cfg.stag2.amplitude.com/config", T_ = "https://sr-client-cfg.eu.amplitude.com/config", O_ = function() {
        function r(e) {
            var t = e.localConfig,
                n = e.configKeys,
                i = this;
            this.retryTimeout = 1e3, this.attempts = 0, this.sessionTargetingMatch = !1, this.metrics = {}, this.getRemoteConfig = function(o, s, u) {
                return Er(i, void 0, void 0, function() {
                    var a, l, c;
                    return _r(this, function(f) {
                        switch (f.label) {
                            case 0:
                                return a = Date.now(), [4, this.fetchWithTimeout(u)];
                            case 1:
                                return l = f.sent(), l && (c = l.configs && l.configs[o], c) ? (this.metrics.fetchTimeAPISuccess = Date.now() - a, [2, c[s]]) : (this.metrics.fetchTimeAPIFail = Date.now() - a, [2, void 0])
                        }
                    })
                })
            }, this.fetchWithTimeout = function(o) {
                return Er(i, void 0, void 0, function() {
                    var s, u, a;
                    return _r(this, function(l) {
                        switch (l.label) {
                            case 0:
                                return s = new AbortController, u = setTimeout(function() {
                                    return s.abort()
                                }, 5e3), [4, this.fetchRemoteConfig(s.signal, o)];
                            case 1:
                                return a = l.sent(), clearTimeout(u), [2, a]
                        }
                    })
                })
            }, this.fetchRemoteConfig = function(o, s) {
                return Er(i, void 0, void 0, function() {
                    var u, a, l, c, f, d, p, h, g, m, b, v, y;
                    return _r(this, function(S) {
                        switch (S.label) {
                            case 0:
                                if (s === this.lastFetchedSessionId && this.attempts >= this.localConfig.flushMaxRetries) return [2, this.completeRequest({
                                    err: x_
                                })];
                                if (o.aborted) return [2, this.completeRequest({
                                    err: gm
                                })];
                                s !== this.lastFetchedSessionId && (this.lastFetchedSessionId = s, this.attempts = 0), S.label = 1;
                            case 1:
                                S.trys.push([1, 3, , 4]), u = new URLSearchParams({
                                    api_key: this.localConfig.apiKey
                                });
                                try {
                                    for (a = hm(this.configKeys), l = a.next(); !l.done; l = a.next()) c = l.value, u.append("config_keys", c)
                                } catch (_) {
                                    b = {
                                        error: _
                                    }
                                } finally {
                                    try {
                                        l && !l.done && (v = a.return) && v.call(a)
                                    } finally {
                                        if (b) throw b.error
                                    }
                                }
                                return s && u.set("session_id", String(s)), f = {
                                    headers: {
                                        Accept: "*/*"
                                    },
                                    method: "GET"
                                }, d = "".concat(this.getServerUrl(), "?").concat(u.toString()), this.attempts += 1, [4, fetch(d, Wn(Wn({}, f), {
                                    signal: o
                                }))];
                            case 2:
                                if (p = S.sent(), p === null) return [2, this.completeRequest({
                                    err: vm
                                })];
                                switch (h = new at().buildStatus(p.status), h) {
                                    case H.Success:
                                        return this.attempts = 0, [2, this.parseAndStoreConfig(p)];
                                    case H.Failed:
                                        return [2, this.retryFetch(o, s)];
                                    default:
                                        return [2, this.completeRequest({
                                            err: E_
                                        })]
                                }
                                return [3, 4];
                            case 3:
                                return g = S.sent(), m = g, o.aborted ? [2, this.completeRequest({
                                    err: gm
                                })] : [2, this.completeRequest({
                                    err: (y = m.message) !== null && y !== void 0 ? y : vm
                                })];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, this.retryFetch = function(o, s) {
                return Er(i, void 0, void 0, function() {
                    var u = this;
                    return _r(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, new Promise(function(l) {
                                    return setTimeout(l, u.attempts * u.retryTimeout)
                                })];
                            case 1:
                                return a.sent(), [2, this.fetchRemoteConfig(o, s)]
                        }
                    })
                })
            }, this.parseAndStoreConfig = function(o) {
                return Er(i, void 0, void 0, function() {
                    var s;
                    return _r(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, o.json()];
                            case 1:
                                return s = u.sent(), this.completeRequest({
                                    success: __
                                }), [2, s]
                        }
                    })
                })
            }, this.localConfig = t, this.configKeys = n
        }
        return r.prototype.getServerUrl = function() {
            return this.localConfig.serverZone === nt.STAGING ? I_ : this.localConfig.serverZone === nt.EU ? T_ : C_
        }, r.prototype.completeRequest = function(e) {
            var t = e.err,
                n = e.success;
            if (t) throw new Error(t);
            n && this.localConfig.loggerProvider.log(n)
        }, r
    }(), ym = function(r) {
        var e = r.localConfig,
            t = r.configKeys;
        return Er(void 0, void 0, void 0, function() {
            return _r(this, function(n) {
                return [2, new O_({
                    localConfig: e,
                    configKeys: t
                })]
            })
        })
    }
});
var bm, Sm = w(() => {
    "use strict";
    wm();
    bm = ym
});
var P_, Em, _m = w(() => {
    "use strict";
    it();
    Sm();
    Ae();
    P_ = function() {
        function r(e) {
            this.config = e, this.config.loggerProvider.debug("Local configuration before merging with remote config", JSON.stringify(this.config, null, 2))
        }
        return r.prototype.initialize = function() {
            return $(this, void 0, void 0, function() {
                var e;
                return j(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = this, [4, bm({
                                localConfig: this.config,
                                configKeys: ["analyticsSDK"]
                            })];
                        case 1:
                            return e.remoteConfigFetch = t.sent(), [2]
                    }
                })
            })
        }, r.prototype.generateJoinedConfig = function() {
            var e, t, n, i;
            return $(this, void 0, void 0, function() {
                var o, s, u;
                return j(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 3, , 4]), s = this.remoteConfigFetch, s ? [4, this.remoteConfigFetch.getRemoteConfig("analyticsSDK", "browserSDK", this.config.sessionId)] : [3, 2];
                        case 1:
                            s = a.sent(), a.label = 2;
                        case 2:
                            return o = s, this.config.loggerProvider.debug("Remote configuration:", JSON.stringify(o, null, 2)), o && "autocapture" in o && (typeof o.autocapture == "boolean" && (this.config.autocapture = o.autocapture), typeof o.autocapture == "object" && (this.config.autocapture === void 0 && (this.config.autocapture = o.autocapture), typeof this.config.autocapture == "boolean" && (this.config.autocapture = pe({
                                attribution: this.config.autocapture,
                                fileDownloads: this.config.autocapture,
                                formInteractions: this.config.autocapture,
                                pageViews: this.config.autocapture,
                                sessions: this.config.autocapture,
                                elementInteractions: this.config.autocapture
                            }, o.autocapture)), typeof this.config.autocapture == "object" && (this.config.autocapture = pe(pe({}, this.config.autocapture), o.autocapture))), this.config.defaultTracking = this.config.autocapture), this.config.loggerProvider.debug("Joined configuration: ", JSON.stringify(this.config, null, 2)), (e = (i = this.config).requestMetadata) !== null && e !== void 0 || (i.requestMetadata = new Mn), !((t = this.remoteConfigFetch) === null || t === void 0) && t.metrics.fetchTimeAPISuccess && this.config.requestMetadata.recordHistogram("remote_config_fetch_time_API_success", this.remoteConfigFetch.metrics.fetchTimeAPISuccess), !((n = this.remoteConfigFetch) === null || n === void 0) && n.metrics.fetchTimeAPIFail && this.config.requestMetadata.recordHistogram("remote_config_fetch_time_API_fail", this.remoteConfigFetch.metrics.fetchTimeAPIFail), [3, 4];
                        case 3:
                            return u = a.sent(), this.config.loggerProvider.error("Failed to fetch remote configuration because of error: ", u), [3, 4];
                        case 4:
                            return [2, this.config]
                    }
                })
            })
        }, r
    }(), Em = function(r) {
        return $(void 0, void 0, void 0, function() {
            var e;
            return j(this, function(t) {
                switch (t.label) {
                    case 0:
                        return e = new P_(r), [4, e.initialize()];
                    case 1:
                        return t.sent(), [2, e]
                }
            })
        })
    }
});

function go(r, e, t, n) {
    function i(o) {
        return o instanceof t ? o : new t(function(s) {
            s(o)
        })
    }
    return new(t || (t = Promise))(function(o, s) {
        function u(c) {
            try {
                l(n.next(c))
            } catch (f) {
                s(f)
            }
        }

        function a(c) {
            try {
                l(n.throw(c))
            } catch (f) {
                s(f)
            }
        }

        function l(c) {
            c.done ? o(c.value) : i(c.value).then(u, a)
        }
        l((n = n.apply(r, e || [])).next())
    })
}

function xr(r, e) {
    var t = {
            label: 0,
            sent: function() {
                if (o[0] & 1) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        },
        n, i, o, s;
    return s = {
        next: u(0),
        throw: u(1),
        return: u(2)
    }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }), s;

    function u(l) {
        return function(c) {
            return a([l, c])
        }
    }

    function a(l) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; s && (s = 0, l[0] && (t = 0)), t;) try {
            if (n = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done) return o;
            switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
                case 0:
                case 1:
                    o = l;
                    break;
                case 4:
                    return t.label++, {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    t.label++, i = l[1], l = [0];
                    continue;
                case 7:
                    l = t.ops.pop(), t.trys.pop();
                    continue;
                default:
                    if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
                        t.label = l[1];
                        break
                    }
                    if (l[0] === 6 && t.label < o[1]) {
                        t.label = o[1], o = l;
                        break
                    }
                    if (o && t.label < o[2]) {
                        t.label = o[2], t.ops.push(l);
                        break
                    }
                    o[2] && t.ops.pop(), t.trys.pop();
                    continue
            }
            l = e.call(r, t)
        } catch (c) {
            l = [6, c], i = 0
        } finally {
            n = o = 0
        }
        if (l[0] & 5) throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}

function yt(r) {
    var e = typeof Symbol == "function" && Symbol.iterator,
        t = e && r[e],
        n = 0;
    if (t) return t.call(r);
    if (r && typeof r.length == "number") return {
        next: function() {
            return r && n >= r.length && (r = void 0), {
                value: r && r[n++],
                done: !r
            }
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function He(r, e) {
    var t = typeof Symbol == "function" && r[Symbol.iterator];
    if (!t) return r;
    var n = t.call(r),
        i, o = [],
        s;
    try {
        for (;
            (e === void 0 || e-- > 0) && !(i = n.next()).done;) o.push(i.value)
    } catch (u) {
        s = {
            error: u
        }
    } finally {
        try {
            i && !i.done && (t = n.return) && t.call(n)
        } finally {
            if (s) throw s.error
        }
    }
    return o
}

function Bt(r, e, t) {
    if (t || arguments.length === 2)
        for (var n = 0, i = e.length, o; n < i; n++)(o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
    return r.concat(o || Array.prototype.slice.call(e))
}
var pr, Hr = w(() => {
    "use strict";
    pr = function() {
        return pr = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) {
                t = arguments[n];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
        }, pr.apply(this, arguments)
    }
});
var xm, Gn, Cm, Im, Tm, vo, yo, Om, Rm, Pm, Am, Mm, Nm, wo, Dm, bo, km, Lm, Fm, zn, A_, M_, Um, $m, qn, Cr = w(() => {
    "use strict";
    xm = "@amplitude/plugin-autocapture-browser", Gn = "[Amplitude] Element Clicked", Cm = "[Amplitude] Element Changed", Im = "[Amplitude] Element ID", Tm = "[Amplitude] Element Class", vo = "[Amplitude] Element Tag", yo = "[Amplitude] Element Text", Om = "[Amplitude] Element Hierarchy", Rm = "[Amplitude] Element Href", Pm = "[Amplitude] Element Position Left", Am = "[Amplitude] Element Position Top", Mm = "[Amplitude] Element Aria Label", Nm = "[Amplitude] Element Attributes", wo = "[Amplitude] Element Selector", Dm = "[Amplitude] Element Parent Label", bo = "[Amplitude] Page URL", km = "[Amplitude] Page Title", Lm = "[Amplitude] Viewport Height", Fm = "[Amplitude] Viewport Width", zn = "https://app.amplitude.com", A_ = "https://app.eu.amplitude.com", M_ = "https://apps.stag2.amplitude.com", Um = {
        US: zn,
        EU: A_,
        STAGING: M_
    }, $m = "https://cdn.amplitude.com/libs/visual-tagging-selector-1.0.0-alpha.js.gz", qn = "amp-visual-tagging-selector-highlight"
});

function Ot(r, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    lu(r, e);

    function t() {
        this.constructor = r
    }
    r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t)
}

function Bm(r, e, t, n) {
    function i(o) {
        return o instanceof t ? o : new t(function(s) {
            s(o)
        })
    }
    return new(t || (t = Promise))(function(o, s) {
        function u(c) {
            try {
                l(n.next(c))
            } catch (f) {
                s(f)
            }
        }

        function a(c) {
            try {
                l(n.throw(c))
            } catch (f) {
                s(f)
            }
        }

        function l(c) {
            c.done ? o(c.value) : i(c.value).then(u, a)
        }
        l((n = n.apply(r, e || [])).next())
    })
}

function So(r, e) {
    var t = {
            label: 0,
            sent: function() {
                if (o[0] & 1) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        },
        n, i, o, s;
    return s = {
        next: u(0),
        throw: u(1),
        return: u(2)
    }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }), s;

    function u(l) {
        return function(c) {
            return a([l, c])
        }
    }

    function a(l) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; t;) try {
            if (n = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done) return o;
            switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
                case 0:
                case 1:
                    o = l;
                    break;
                case 4:
                    return t.label++, {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    t.label++, i = l[1], l = [0];
                    continue;
                case 7:
                    l = t.ops.pop(), t.trys.pop();
                    continue;
                default:
                    if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
                        t.label = l[1];
                        break
                    }
                    if (l[0] === 6 && t.label < o[1]) {
                        t.label = o[1], o = l;
                        break
                    }
                    if (o && t.label < o[2]) {
                        t.label = o[2], t.ops.push(l);
                        break
                    }
                    o[2] && t.ops.pop(), t.trys.pop();
                    continue
            }
            l = e.call(r, t)
        } catch (c) {
            l = [6, c], i = 0
        } finally {
            n = o = 0
        }
        if (l[0] & 5) throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}

function Ir(r) {
    var e = typeof Symbol == "function" && Symbol.iterator,
        t = e && r[e],
        n = 0;
    if (t) return t.call(r);
    if (r && typeof r.length == "number") return {
        next: function() {
            return r && n >= r.length && (r = void 0), {
                value: r && r[n++],
                done: !r
            }
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function lt(r, e) {
    var t = typeof Symbol == "function" && r[Symbol.iterator];
    if (!t) return r;
    var n = t.call(r),
        i, o = [],
        s;
    try {
        for (;
            (e === void 0 || e-- > 0) && !(i = n.next()).done;) o.push(i.value)
    } catch (u) {
        s = {
            error: u
        }
    } finally {
        try {
            i && !i.done && (t = n.return) && t.call(n)
        } finally {
            if (s) throw s.error
        }
    }
    return o
}

function Rt(r, e, t) {
    if (t || arguments.length === 2)
        for (var n = 0, i = e.length, o; n < i; n++)(o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
    return r.concat(o || Array.prototype.slice.call(e))
}

function Tr(r) {
    return this instanceof Tr ? (this.v = r, this) : new Tr(r)
}

function Vm(r, e, t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = t.apply(r, e || []),
        i, o = [];
    return i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
        return this
    }, i;

    function s(d) {
        n[d] && (i[d] = function(p) {
            return new Promise(function(h, g) {
                o.push([d, p, h, g]) > 1 || u(d, p)
            })
        })
    }

    function u(d, p) {
        try {
            a(n[d](p))
        } catch (h) {
            f(o[0][3], h)
        }
    }

    function a(d) {
        d.value instanceof Tr ? Promise.resolve(d.value.v).then(l, c) : f(o[0][2], d)
    }

    function l(d) {
        u("next", d)
    }

    function c(d) {
        u("throw", d)
    }

    function f(d, p) {
        d(p), o.shift(), o.length && u(o[0][0], o[0][1])
    }
}

function Wm(r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = r[Symbol.asyncIterator],
        t;
    return e ? e.call(r) : (r = typeof Ir == "function" ? Ir(r) : r[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
        return this
    }, t);

    function n(o) {
        t[o] = r[o] && function(s) {
            return new Promise(function(u, a) {
                s = r[o](s), i(u, a, s.done, s.value)
            })
        }
    }

    function i(o, s, u, a) {
        Promise.resolve(a).then(function(l) {
            o({
                value: l,
                done: u
            })
        }, s)
    }
}
var lu, ut = w(() => {
    "use strict";
    lu = function(r, e) {
        return lu = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, n) {
            t.__proto__ = n
        } || function(t, n) {
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }, lu(r, e)
    }
});

function U(r) {
    return typeof r == "function"
}
var Qe = w(() => {
    "use strict"
});

function Eo(r) {
    var e = function(n) {
            Error.call(n), n.stack = new Error().stack
        },
        t = r(e);
    return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
}
var uu = w(() => {
    "use strict"
});
var _o, Gm = w(() => {
    "use strict";
    uu();
    _o = Eo(function(r) {
        return function(t) {
            r(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, i) {
                return i + 1 + ") " + n.toString()
            }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t
        }
    })
});

function Hn(r, e) {
    if (r) {
        var t = r.indexOf(e);
        0 <= t && r.splice(t, 1)
    }
}
var cu = w(() => {
    "use strict"
});

function xo(r) {
    return r instanceof Yr || r && "closed" in r && U(r.remove) && U(r.add) && U(r.unsubscribe)
}

function zm(r) {
    U(r) ? r() : r.unsubscribe()
}
var Yr, Qk, Co = w(() => {
    "use strict";
    ut();
    Qe();
    Gm();
    cu();
    Yr = function() {
        function r(e) {
            this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null
        }
        return r.prototype.unsubscribe = function() {
            var e, t, n, i, o;
            if (!this.closed) {
                this.closed = !0;
                var s = this._parentage;
                if (s)
                    if (this._parentage = null, Array.isArray(s)) try {
                        for (var u = Ir(s), a = u.next(); !a.done; a = u.next()) {
                            var l = a.value;
                            l.remove(this)
                        }
                    } catch (g) {
                        e = {
                            error: g
                        }
                    } finally {
                        try {
                            a && !a.done && (t = u.return) && t.call(u)
                        } finally {
                            if (e) throw e.error
                        }
                    } else s.remove(this);
                var c = this.initialTeardown;
                if (U(c)) try {
                    c()
                } catch (g) {
                    o = g instanceof _o ? g.errors : [g]
                }
                var f = this._finalizers;
                if (f) {
                    this._finalizers = null;
                    try {
                        for (var d = Ir(f), p = d.next(); !p.done; p = d.next()) {
                            var h = p.value;
                            try {
                                zm(h)
                            } catch (g) {
                                o = o ? ? [], g instanceof _o ? o = Rt(Rt([], lt(o)), lt(g.errors)) : o.push(g)
                            }
                        }
                    } catch (g) {
                        n = {
                            error: g
                        }
                    } finally {
                        try {
                            p && !p.done && (i = d.return) && i.call(d)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }
                if (o) throw new _o(o)
            }
        }, r.prototype.add = function(e) {
            var t;
            if (e && e !== this)
                if (this.closed) zm(e);
                else {
                    if (e instanceof r) {
                        if (e.closed || e._hasParent(this)) return;
                        e._addParent(this)
                    }(this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e)
                }
        }, r.prototype._hasParent = function(e) {
            var t = this._parentage;
            return t === e || Array.isArray(t) && t.includes(e)
        }, r.prototype._addParent = function(e) {
            var t = this._parentage;
            this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e
        }, r.prototype._removeParent = function(e) {
            var t = this._parentage;
            t === e ? this._parentage = null : Array.isArray(t) && Hn(t, e)
        }, r.prototype.remove = function(e) {
            var t = this._finalizers;
            t && Hn(t, e), e instanceof r && e._removeParent(this)
        }, r.EMPTY = function() {
            var e = new r;
            return e.closed = !0, e
        }(), r
    }(), Qk = Yr.EMPTY
});
var Pt, Yn = w(() => {
    "use strict";
    Pt = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1
    }
});
var Kr, fu = w(() => {
    "use strict";
    ut();
    Kr = {
        setTimeout: function(r, e) {
            for (var t = [], n = 2; n < arguments.length; n++) t[n - 2] = arguments[n];
            var i = Kr.delegate;
            return i ? .setTimeout ? i.setTimeout.apply(i, Rt([r, e], lt(t))) : setTimeout.apply(void 0, Rt([r, e], lt(t)))
        },
        clearTimeout: function(r) {
            var e = Kr.delegate;
            return (e ? .clearTimeout || clearTimeout)(r)
        },
        delegate: void 0
    }
});

function Io(r) {
    Kr.setTimeout(function() {
        var e = Pt.onUnhandledError;
        if (e) e(r);
        else throw r
    })
}
var du = w(() => {
    "use strict";
    Yn();
    fu()
});

function Or() {}
var To = w(() => {
    "use strict"
});

function Hm(r) {
    return pu("E", void 0, r)
}

function Ym(r) {
    return pu("N", r, void 0)
}

function pu(r, e, t) {
    return {
        kind: r,
        value: e,
        error: t
    }
}
var qm, Km = w(() => {
    "use strict";
    qm = function() {
        return pu("C", void 0, void 0)
    }()
});

function Xm(r) {
    if (Pt.useDeprecatedSynchronousErrorHandling) {
        var e = !Rr;
        if (e && (Rr = {
                errorThrown: !1,
                error: null
            }), r(), e) {
            var t = Rr,
                n = t.errorThrown,
                i = t.error;
            if (Rr = null, n) throw i
        }
    } else r()
}

function Jm(r) {
    Pt.useDeprecatedSynchronousErrorHandling && Rr && (Rr.errorThrown = !0, Rr.error = r)
}
var Rr, hu = w(() => {
    "use strict";
    Yn();
    Rr = null
});

function mu(r, e) {
    return N_.call(r, e)
}

function Oo(r) {
    Pt.useDeprecatedSynchronousErrorHandling ? Jm(r) : Io(r)
}

function k_(r) {
    throw r
}

function gu(r, e) {
    var t = Pt.onStoppedNotification;
    t && Kr.setTimeout(function() {
        return t(r, e)
    })
}
var Kn, N_, D_, Ro, L_, vu = w(() => {
    "use strict";
    ut();
    Qe();
    Co();
    Yn();
    du();
    To();
    Km();
    fu();
    hu();
    Kn = function(r) {
        Ot(e, r);

        function e(t) {
            var n = r.call(this) || this;
            return n.isStopped = !1, t ? (n.destination = t, xo(t) && t.add(n)) : n.destination = L_, n
        }
        return e.create = function(t, n, i) {
            return new Ro(t, n, i)
        }, e.prototype.next = function(t) {
            this.isStopped ? gu(Ym(t), this) : this._next(t)
        }, e.prototype.error = function(t) {
            this.isStopped ? gu(Hm(t), this) : (this.isStopped = !0, this._error(t))
        }, e.prototype.complete = function() {
            this.isStopped ? gu(qm, this) : (this.isStopped = !0, this._complete())
        }, e.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0, r.prototype.unsubscribe.call(this), this.destination = null)
        }, e.prototype._next = function(t) {
            this.destination.next(t)
        }, e.prototype._error = function(t) {
            try {
                this.destination.error(t)
            } finally {
                this.unsubscribe()
            }
        }, e.prototype._complete = function() {
            try {
                this.destination.complete()
            } finally {
                this.unsubscribe()
            }
        }, e
    }(Yr), N_ = Function.prototype.bind;
    D_ = function() {
        function r(e) {
            this.partialObserver = e
        }
        return r.prototype.next = function(e) {
            var t = this.partialObserver;
            if (t.next) try {
                t.next(e)
            } catch (n) {
                Oo(n)
            }
        }, r.prototype.error = function(e) {
            var t = this.partialObserver;
            if (t.error) try {
                t.error(e)
            } catch (n) {
                Oo(n)
            } else Oo(e)
        }, r.prototype.complete = function() {
            var e = this.partialObserver;
            if (e.complete) try {
                e.complete()
            } catch (t) {
                Oo(t)
            }
        }, r
    }(), Ro = function(r) {
        Ot(e, r);

        function e(t, n, i) {
            var o = r.call(this) || this,
                s;
            if (U(t) || !t) s = {
                next: t ? ? void 0,
                error: n ? ? void 0,
                complete: i ? ? void 0
            };
            else {
                var u;
                o && Pt.useDeprecatedNextContext ? (u = Object.create(t), u.unsubscribe = function() {
                    return o.unsubscribe()
                }, s = {
                    next: t.next && mu(t.next, u),
                    error: t.error && mu(t.error, u),
                    complete: t.complete && mu(t.complete, u)
                }) : s = t
            }
            return o.destination = new D_(s), o
        }
        return e
    }(Kn);
    L_ = {
        closed: !0,
        next: Or,
        error: k_,
        complete: Or
    }
});
var Xr, Po = w(() => {
    "use strict";
    Xr = function() {
        return typeof Symbol == "function" && Symbol.observable || "@@observable"
    }()
});

function Ao(r) {
    return r
}
var yu = w(() => {
    "use strict"
});

function Zm(r) {
    return r.length === 0 ? Ao : r.length === 1 ? r[0] : function(t) {
        return r.reduce(function(n, i) {
            return i(n)
        }, t)
    }
}
var Qm = w(() => {
    "use strict";
    yu()
});

function eg(r) {
    var e;
    return (e = r ? ? Pt.Promise) !== null && e !== void 0 ? e : Promise
}

function F_(r) {
    return r && U(r.next) && U(r.error) && U(r.complete)
}

function U_(r) {
    return r && r instanceof Kn || F_(r) && xo(r)
}
var Ce, er = w(() => {
    "use strict";
    vu();
    Co();
    Po();
    Qm();
    Yn();
    Qe();
    hu();
    Ce = function() {
        function r(e) {
            e && (this._subscribe = e)
        }
        return r.prototype.lift = function(e) {
            var t = new r;
            return t.source = this, t.operator = e, t
        }, r.prototype.subscribe = function(e, t, n) {
            var i = this,
                o = U_(e) ? e : new Ro(e, t, n);
            return Xm(function() {
                var s = i,
                    u = s.operator,
                    a = s.source;
                o.add(u ? u.call(o, a) : a ? i._subscribe(o) : i._trySubscribe(o))
            }), o
        }, r.prototype._trySubscribe = function(e) {
            try {
                return this._subscribe(e)
            } catch (t) {
                e.error(t)
            }
        }, r.prototype.forEach = function(e, t) {
            var n = this;
            return t = eg(t), new t(function(i, o) {
                var s = new Ro({
                    next: function(u) {
                        try {
                            e(u)
                        } catch (a) {
                            o(a), s.unsubscribe()
                        }
                    },
                    error: o,
                    complete: i
                });
                n.subscribe(s)
            })
        }, r.prototype._subscribe = function(e) {
            var t;
            return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e)
        }, r.prototype[Xr] = function() {
            return this
        }, r.prototype.pipe = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return Zm(e)(this)
        }, r.prototype.toPromise = function(e) {
            var t = this;
            return e = eg(e), new e(function(n, i) {
                var o;
                t.subscribe(function(s) {
                    return o = s
                }, function(s) {
                    return i(s)
                }, function() {
                    return n(o)
                })
            })
        }, r.create = function(e) {
            return new r(e)
        }, r
    }()
});

function $_(r) {
    return U(r ? .lift)
}

function he(r) {
    return function(e) {
        if ($_(e)) return e.lift(function(t) {
            try {
                return r(t, this)
            } catch (n) {
                this.error(n)
            }
        });
        throw new TypeError("Unable to lift unknown Observable type")
    }
}
var ct = w(() => {
    "use strict";
    Qe()
});

function le(r, e, t, n, i) {
    return new j_(r, e, t, n, i)
}
var j_, wt = w(() => {
    "use strict";
    ut();
    vu();
    j_ = function(r) {
        Ot(e, r);

        function e(t, n, i, o, s, u) {
            var a = r.call(this, t) || this;
            return a.onFinalize = s, a.shouldUnsubscribe = u, a._next = n ? function(l) {
                try {
                    n(l)
                } catch (c) {
                    t.error(c)
                }
            } : r.prototype._next, a._error = o ? function(l) {
                try {
                    o(l)
                } catch (c) {
                    t.error(c)
                } finally {
                    this.unsubscribe()
                }
            } : r.prototype._error, a._complete = i ? function() {
                try {
                    i()
                } catch (l) {
                    t.error(l)
                } finally {
                    this.unsubscribe()
                }
            } : r.prototype._complete, a
        }
        return e.prototype.unsubscribe = function() {
            var t;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                var n = this.closed;
                r.prototype.unsubscribe.call(this), !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this))
            }
        }, e
    }(Kn)
});
var wu, tg = w(() => {
    "use strict";
    wu = {
        now: function() {
            return (wu.delegate || Date).now()
        },
        delegate: void 0
    }
});
var rg, ng = w(() => {
    "use strict";
    ut();
    Co();
    rg = function(r) {
        Ot(e, r);

        function e(t, n) {
            return r.call(this) || this
        }
        return e.prototype.schedule = function(t, n) {
            return n === void 0 && (n = 0), this
        }, e
    }(Yr)
});
var Xn, ig = w(() => {
    "use strict";
    ut();
    Xn = {
        setInterval: function(r, e) {
            for (var t = [], n = 2; n < arguments.length; n++) t[n - 2] = arguments[n];
            var i = Xn.delegate;
            return i ? .setInterval ? i.setInterval.apply(i, Rt([r, e], lt(t))) : setInterval.apply(void 0, Rt([r, e], lt(t)))
        },
        clearInterval: function(r) {
            var e = Xn.delegate;
            return (e ? .clearInterval || clearInterval)(r)
        },
        delegate: void 0
    }
});
var og, sg = w(() => {
    "use strict";
    ut();
    ng();
    ig();
    cu();
    og = function(r) {
        Ot(e, r);

        function e(t, n) {
            var i = r.call(this, t, n) || this;
            return i.scheduler = t, i.work = n, i.pending = !1, i
        }
        return e.prototype.schedule = function(t, n) {
            var i;
            if (n === void 0 && (n = 0), this.closed) return this;
            this.state = t;
            var o = this.id,
                s = this.scheduler;
            return o != null && (this.id = this.recycleAsyncId(s, o, n)), this.pending = !0, this.delay = n, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(s, this.id, n), this
        }, e.prototype.requestAsyncId = function(t, n, i) {
            return i === void 0 && (i = 0), Xn.setInterval(t.flush.bind(t, this), i)
        }, e.prototype.recycleAsyncId = function(t, n, i) {
            if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1) return n;
            n != null && Xn.clearInterval(n)
        }, e.prototype.execute = function(t, n) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = !1;
            var i = this._execute(t, n);
            if (i) return i;
            this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }, e.prototype._execute = function(t, n) {
            var i = !1,
                o;
            try {
                this.work(t)
            } catch (s) {
                i = !0, o = s || new Error("Scheduled action threw falsy error")
            }
            if (i) return this.unsubscribe(), o
        }, e.prototype.unsubscribe = function() {
            if (!this.closed) {
                var t = this,
                    n = t.id,
                    i = t.scheduler,
                    o = i.actions;
                this.work = this.state = this.scheduler = null, this.pending = !1, Hn(o, this), n != null && (this.id = this.recycleAsyncId(i, n, null)), this.delay = null, r.prototype.unsubscribe.call(this)
            }
        }, e
    }(rg)
});
var bu, ag = w(() => {
    "use strict";
    tg();
    bu = function() {
        function r(e, t) {
            t === void 0 && (t = r.now), this.schedulerActionCtor = e, this.now = t
        }
        return r.prototype.schedule = function(e, t, n) {
            return t === void 0 && (t = 0), new this.schedulerActionCtor(this, e).schedule(n, t)
        }, r.now = wu.now, r
    }()
});
var lg, ug = w(() => {
    "use strict";
    ut();
    ag();
    lg = function(r) {
        Ot(e, r);

        function e(t, n) {
            n === void 0 && (n = bu.now);
            var i = r.call(this, t, n) || this;
            return i.actions = [], i._active = !1, i
        }
        return e.prototype.flush = function(t) {
            var n = this.actions;
            if (this._active) {
                n.push(t);
                return
            }
            var i;
            this._active = !0;
            do
                if (i = t.execute(t.state, t.delay)) break; while (t = n.shift());
            if (this._active = !1, i) {
                for (; t = n.shift();) t.unsubscribe();
                throw i
            }
        }, e
    }(bu)
});
var Pr, cg, Jn = w(() => {
    "use strict";
    sg();
    ug();
    Pr = new lg(og), cg = Pr
});
var Ar, Mo = w(() => {
    "use strict";
    er();
    Ar = new Ce(function(r) {
        return r.complete()
    })
});

function No(r) {
    return r && U(r.schedule)
}
var Su = w(() => {
    "use strict";
    Qe()
});

function fg(r) {
    return r[r.length - 1]
}

function Do(r) {
    return No(fg(r)) ? r.pop() : void 0
}

function dg(r, e) {
    return typeof fg(r) == "number" ? r.pop() : e
}
var Eu = w(() => {
    "use strict";
    Su()
});
var Jr, ko = w(() => {
    "use strict";
    Jr = function(r) {
        return r && typeof r.length == "number" && typeof r != "function"
    }
});

function Lo(r) {
    return U(r ? .then)
}
var _u = w(() => {
    "use strict";
    Qe()
});

function Fo(r) {
    return U(r[Xr])
}
var xu = w(() => {
    "use strict";
    Po();
    Qe()
});

function Uo(r) {
    return Symbol.asyncIterator && U(r ? .[Symbol.asyncIterator])
}
var Cu = w(() => {
    "use strict";
    Qe()
});

function $o(r) {
    return new TypeError("You provided " + (r !== null && typeof r == "object" ? "an invalid object" : "'" + r + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
}
var Iu = w(() => {
    "use strict"
});

function B_() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
}
var jo, Tu = w(() => {
    "use strict";
    jo = B_()
});

function Bo(r) {
    return U(r ? .[jo])
}
var Ou = w(() => {
    "use strict";
    Tu();
    Qe()
});

function Vo(r) {
    return Vm(this, arguments, function() {
        var t, n, i, o;
        return So(this, function(s) {
            switch (s.label) {
                case 0:
                    t = r.getReader(), s.label = 1;
                case 1:
                    s.trys.push([1, , 9, 10]), s.label = 2;
                case 2:
                    return [4, Tr(t.read())];
                case 3:
                    return n = s.sent(), i = n.value, o = n.done, o ? [4, Tr(void 0)] : [3, 5];
                case 4:
                    return [2, s.sent()];
                case 5:
                    return [4, Tr(i)];
                case 6:
                    return [4, s.sent()];
                case 7:
                    return s.sent(), [3, 2];
                case 8:
                    return [3, 10];
                case 9:
                    return t.releaseLock(), [7];
                case 10:
                    return [2]
            }
        })
    })
}

function Wo(r) {
    return U(r ? .getReader)
}
var Go = w(() => {
    "use strict";
    ut();
    Qe()
});

function Ie(r) {
    if (r instanceof Ce) return r;
    if (r != null) {
        if (Fo(r)) return V_(r);
        if (Jr(r)) return W_(r);
        if (Lo(r)) return G_(r);
        if (Uo(r)) return pg(r);
        if (Bo(r)) return z_(r);
        if (Wo(r)) return q_(r)
    }
    throw $o(r)
}

function V_(r) {
    return new Ce(function(e) {
        var t = r[Xr]();
        if (U(t.subscribe)) return t.subscribe(e);
        throw new TypeError("Provided object does not correctly implement Symbol.observable")
    })
}

function W_(r) {
    return new Ce(function(e) {
        for (var t = 0; t < r.length && !e.closed; t++) e.next(r[t]);
        e.complete()
    })
}

function G_(r) {
    return new Ce(function(e) {
        r.then(function(t) {
            e.closed || (e.next(t), e.complete())
        }, function(t) {
            return e.error(t)
        }).then(null, Io)
    })
}

function z_(r) {
    return new Ce(function(e) {
        var t, n;
        try {
            for (var i = Ir(r), o = i.next(); !o.done; o = i.next()) {
                var s = o.value;
                if (e.next(s), e.closed) return
            }
        } catch (u) {
            t = {
                error: u
            }
        } finally {
            try {
                o && !o.done && (n = i.return) && n.call(i)
            } finally {
                if (t) throw t.error
            }
        }
        e.complete()
    })
}

function pg(r) {
    return new Ce(function(e) {
        H_(r, e).catch(function(t) {
            return e.error(t)
        })
    })
}

function q_(r) {
    return pg(Vo(r))
}

function H_(r, e) {
    var t, n, i, o;
    return Bm(this, void 0, void 0, function() {
        var s, u;
        return So(this, function(a) {
            switch (a.label) {
                case 0:
                    a.trys.push([0, 5, 6, 11]), t = Wm(r), a.label = 1;
                case 1:
                    return [4, t.next()];
                case 2:
                    if (n = a.sent(), !!n.done) return [3, 4];
                    if (s = n.value, e.next(s), e.closed) return [2];
                    a.label = 3;
                case 3:
                    return [3, 1];
                case 4:
                    return [3, 11];
                case 5:
                    return u = a.sent(), i = {
                        error: u
                    }, [3, 11];
                case 6:
                    return a.trys.push([6, , 9, 10]), n && !n.done && (o = t.return) ? [4, o.call(t)] : [3, 8];
                case 7:
                    a.sent(), a.label = 8;
                case 8:
                    return [3, 10];
                case 9:
                    if (i) throw i.error;
                    return [7];
                case 10:
                    return [7];
                case 11:
                    return e.complete(), [2]
            }
        })
    })
}
var bt = w(() => {
    "use strict";
    ut();
    ko();
    _u();
    er();
    xu();
    Cu();
    Iu();
    Ou();
    Go();
    Qe();
    du();
    Po()
});

function ot(r, e, t, n, i) {
    n === void 0 && (n = 0), i === void 0 && (i = !1);
    var o = e.schedule(function() {
        t(), i ? r.add(this.schedule(null, n)) : this.unsubscribe()
    }, n);
    if (r.add(o), !i) return o
}
var Zr = w(() => {
    "use strict"
});

function zo(r, e) {
    return e === void 0 && (e = 0), he(function(t, n) {
        t.subscribe(le(n, function(i) {
            return ot(n, r, function() {
                return n.next(i)
            }, e)
        }, function() {
            return ot(n, r, function() {
                return n.complete()
            }, e)
        }, function(i) {
            return ot(n, r, function() {
                return n.error(i)
            }, e)
        }))
    })
}
var Ru = w(() => {
    "use strict";
    Zr();
    ct();
    wt()
});

function qo(r, e) {
    return e === void 0 && (e = 0), he(function(t, n) {
        n.add(r.schedule(function() {
            return t.subscribe(n)
        }, e))
    })
}
var Pu = w(() => {
    "use strict";
    ct()
});

function hg(r, e) {
    return Ie(r).pipe(qo(e), zo(e))
}
var mg = w(() => {
    "use strict";
    bt();
    Ru();
    Pu()
});

function gg(r, e) {
    return Ie(r).pipe(qo(e), zo(e))
}
var vg = w(() => {
    "use strict";
    bt();
    Ru();
    Pu()
});

function yg(r, e) {
    return new Ce(function(t) {
        var n = 0;
        return e.schedule(function() {
            n === r.length ? t.complete() : (t.next(r[n++]), t.closed || this.schedule())
        })
    })
}
var wg = w(() => {
    "use strict";
    er()
});

function bg(r, e) {
    return new Ce(function(t) {
        var n;
        return ot(t, e, function() {
                n = r[jo](), ot(t, e, function() {
                    var i, o, s;
                    try {
                        i = n.next(), o = i.value, s = i.done
                    } catch (u) {
                        t.error(u);
                        return
                    }
                    s ? t.complete() : t.next(o)
                }, 0, !0)
            }),
            function() {
                return U(n ? .return) && n.return()
            }
    })
}
var Sg = w(() => {
    "use strict";
    er();
    Tu();
    Qe();
    Zr()
});

function Ho(r, e) {
    if (!r) throw new Error("Iterable cannot be null");
    return new Ce(function(t) {
        ot(t, e, function() {
            var n = r[Symbol.asyncIterator]();
            ot(t, e, function() {
                n.next().then(function(i) {
                    i.done ? t.complete() : t.next(i.value)
                })
            }, 0, !0)
        })
    })
}
var Au = w(() => {
    "use strict";
    er();
    Zr()
});

function Eg(r, e) {
    return Ho(Vo(r), e)
}
var _g = w(() => {
    "use strict";
    Au();
    Go()
});

function xg(r, e) {
    if (r != null) {
        if (Fo(r)) return hg(r, e);
        if (Jr(r)) return yg(r, e);
        if (Lo(r)) return gg(r, e);
        if (Uo(r)) return Ho(r, e);
        if (Bo(r)) return bg(r, e);
        if (Wo(r)) return Eg(r, e)
    }
    throw $o(r)
}
var Cg = w(() => {
    "use strict";
    mg();
    vg();
    wg();
    Sg();
    Au();
    xu();
    _u();
    ko();
    Ou();
    Cu();
    Iu();
    Go();
    _g()
});

function Yo(r, e) {
    return e ? xg(r, e) : Ie(r)
}
var Mu = w(() => {
    "use strict";
    Cg();
    bt()
});

function Ko(r) {
    return r instanceof Date && !isNaN(r)
}
var Nu = w(() => {
    "use strict"
});

function Du(r, e) {
    var t = Ko(r) ? {
            first: r
        } : typeof r == "number" ? {
            each: r
        } : r,
        n = t.first,
        i = t.each,
        o = t.with,
        s = o === void 0 ? K_ : o,
        u = t.scheduler,
        a = u === void 0 ? e ? ? Pr : u,
        l = t.meta,
        c = l === void 0 ? null : l;
    if (n == null && i == null) throw new TypeError("No timeout provided.");
    return he(function(f, d) {
        var p, h, g = null,
            m = 0,
            b = function(v) {
                h = ot(d, a, function() {
                    try {
                        p.unsubscribe(), Ie(s({
                            meta: c,
                            lastValue: g,
                            seen: m
                        })).subscribe(d)
                    } catch (y) {
                        d.error(y)
                    }
                }, v)
            };
        p = f.subscribe(le(d, function(v) {
            h ? .unsubscribe(), m++, d.next(g = v), i > 0 && b(i)
        }, void 0, void 0, function() {
            h ? .closed || h ? .unsubscribe(), g = null
        })), !m && b(n != null ? typeof n == "number" ? n : +n - a.now() : i)
    })
}

function K_(r) {
    throw new Y_(r)
}
var Y_, Ig = w(() => {
    "use strict";
    Jn();
    Nu();
    ct();
    bt();
    uu();
    wt();
    Zr();
    Y_ = Eo(function(r) {
        return function(t) {
            t === void 0 && (t = null), r(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = t
        }
    })
});

function Ge(r, e) {
    return he(function(t, n) {
        var i = 0;
        t.subscribe(le(n, function(o) {
            n.next(r.call(e, o, i++))
        }))
    })
}
var Zn = w(() => {
    "use strict";
    ct();
    wt()
});

function J_(r, e) {
    return X_(e) ? r.apply(void 0, Rt([], lt(e))) : r(e)
}

function Tg(r) {
    return Ge(function(e) {
        return J_(r, e)
    })
}
var X_, Og = w(() => {
    "use strict";
    ut();
    Zn();
    X_ = Array.isArray
});

function Rg(r, e, t, n, i, o, s, u) {
    var a = [],
        l = 0,
        c = 0,
        f = !1,
        d = function() {
            f && !a.length && !l && e.complete()
        },
        p = function(g) {
            return l < n ? h(g) : a.push(g)
        },
        h = function(g) {
            o && e.next(g), l++;
            var m = !1;
            Ie(t(g, c++)).subscribe(le(e, function(b) {
                i ? .(b), o ? p(b) : e.next(b)
            }, function() {
                m = !0
            }, void 0, function() {
                if (m) try {
                    l--;
                    for (var b = function() {
                            var v = a.shift();
                            s ? ot(e, s, function() {
                                return h(v)
                            }) : h(v)
                        }; a.length && l < n;) b();
                    d()
                } catch (v) {
                    e.error(v)
                }
            }))
        };
    return r.subscribe(le(e, p, function() {
            f = !0, d()
        })),
        function() {
            u ? .()
        }
}
var Pg = w(() => {
    "use strict";
    bt();
    Zr();
    wt()
});

function Mr(r, e, t) {
    return t === void 0 && (t = 1 / 0), U(e) ? Mr(function(n, i) {
        return Ge(function(o, s) {
            return e(n, o, i, s)
        })(Ie(r(n, i)))
    }, t) : (typeof e == "number" && (t = e), he(function(n, i) {
        return Rg(n, i, r, t)
    }))
}
var Xo = w(() => {
    "use strict";
    Zn();
    bt();
    ct();
    Pg();
    Qe()
});

function Jo(r) {
    return r === void 0 && (r = 1 / 0), Mr(Ao, r)
}
var ku = w(() => {
    "use strict";
    Xo();
    yu()
});

function Ag() {
    return Jo(1)
}
var Mg = w(() => {
    "use strict";
    ku()
});

function Ng() {
    for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
    return Ag()(Yo(r, Do(r)))
}
var Dg = w(() => {
    "use strict";
    Mg();
    Eu();
    Mu()
});

function Nr(r, e, t, n) {
    if (U(t) && (n = t, t = void 0), n) return Nr(r, e, t).pipe(Tg(n));
    var i = lt(nx(r) ? Q_.map(function(u) {
            return function(a) {
                return r[u](e, a, t)
            }
        }) : tx(r) ? Z_.map(kg(r, e)) : rx(r) ? ex.map(kg(r, e)) : [], 2),
        o = i[0],
        s = i[1];
    if (!o && Jr(r)) return Mr(function(u) {
        return Nr(u, e, t)
    })(Ie(r));
    if (!o) throw new TypeError("Invalid event target");
    return new Ce(function(u) {
        var a = function() {
            for (var l = [], c = 0; c < arguments.length; c++) l[c] = arguments[c];
            return u.next(1 < l.length ? l : l[0])
        };
        return o(a),
            function() {
                return s(a)
            }
    })
}

function kg(r, e) {
    return function(t) {
        return function(n) {
            return r[t](e, n)
        }
    }
}

function tx(r) {
    return U(r.addListener) && U(r.removeListener)
}

function rx(r) {
    return U(r.on) && U(r.off)
}

function nx(r) {
    return U(r.addEventListener) && U(r.removeEventListener)
}
var Z_, Q_, ex, Lg = w(() => {
    "use strict";
    ut();
    bt();
    er();
    Xo();
    ko();
    Qe();
    Og();
    Z_ = ["addListener", "removeListener"], Q_ = ["addEventListener", "removeEventListener"], ex = ["on", "off"]
});

function Fg(r, e, t) {
    r === void 0 && (r = 0), t === void 0 && (t = cg);
    var n = -1;
    return e != null && (No(e) ? t = e : n = e), new Ce(function(i) {
        var o = Ko(r) ? +r - t.now() : r;
        o < 0 && (o = 0);
        var s = 0;
        return t.schedule(function() {
            i.closed || (i.next(s++), 0 <= n ? this.schedule(void 0, n) : i.complete())
        }, o)
    })
}
var Ug = w(() => {
    "use strict";
    er();
    Jn();
    Su();
    Nu()
});

function Qn() {
    for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
    var t = Do(r),
        n = dg(r, 1 / 0),
        i = r;
    return i.length ? i.length === 1 ? Ie(i[0]) : Jo(n)(Yo(i, t)) : Ar
}
var $g = w(() => {
    "use strict";
    ku();
    bt();
    Mo();
    Eu();
    Mu()
});

function St(r, e) {
    return he(function(t, n) {
        var i = 0;
        t.subscribe(le(n, function(o) {
            return r.call(e, o, i++) && n.next(o)
        }))
    })
}
var jg = w(() => {
    "use strict";
    ct();
    wt()
});
var Bg = w(() => {
    "use strict"
});

function Lu(r) {
    return he(function(e, t) {
        var n = [];
        return e.subscribe(le(t, function(i) {
                return n.push(i)
            }, function() {
                t.next(n), t.complete()
            })), Ie(r).subscribe(le(t, function() {
                var i = n;
                n = [], t.next(i)
            }, Or)),
            function() {
                n = null
            }
    })
}
var Vg = w(() => {
    "use strict";
    ct();
    To();
    wt();
    bt()
});

function Fu(r, e) {
    return e === void 0 && (e = Pr), he(function(t, n) {
        var i = null,
            o = null,
            s = null,
            u = function() {
                if (i) {
                    i.unsubscribe(), i = null;
                    var l = o;
                    o = null, n.next(l)
                }
            };

        function a() {
            var l = s + r,
                c = e.now();
            if (c < l) {
                i = this.schedule(void 0, l - c), n.add(i);
                return
            }
            u()
        }
        t.subscribe(le(n, function(l) {
            o = l, s = e.now(), i || (i = e.schedule(a, r), n.add(i))
        }, function() {
            u(), n.complete()
        }, void 0, function() {
            o = i = null
        }))
    })
}
var Wg = w(() => {
    "use strict";
    Jn();
    ct();
    wt()
});

function Qr(r) {
    return r <= 0 ? function() {
        return Ar
    } : he(function(e, t) {
        var n = 0;
        e.subscribe(le(t, function(i) {
            ++n <= r && (t.next(i), r <= n && t.complete())
        }))
    })
}
var Uu = w(() => {
    "use strict";
    Mo();
    ct();
    wt()
});

function Gg() {
    return he(function(r, e) {
        r.subscribe(le(e, Or))
    })
}
var zg = w(() => {
    "use strict";
    ct();
    wt();
    To()
});

function qg(r) {
    return Ge(function() {
        return r
    })
}
var Hg = w(() => {
    "use strict";
    Zn()
});

function $u(r, e) {
    return e ? function(t) {
        return Ng(e.pipe(Qr(1), Gg()), t.pipe($u(r)))
    } : Mr(function(t, n) {
        return Ie(r(t, n)).pipe(Qr(1), qg(t))
    })
}
var Yg = w(() => {
    "use strict";
    Dg();
    Uu();
    zg();
    Hg();
    Xo();
    bt()
});

function ju(r, e) {
    e === void 0 && (e = Pr);
    var t = Fg(r, e);
    return $u(function() {
        return t
    })
}
var Kg = w(() => {
    "use strict";
    Jn();
    Yg();
    Ug()
});

function Bu() {
    return he(function(r, e) {
        var t, n = !1;
        r.subscribe(le(e, function(i) {
            var o = t;
            t = i, n && e.next([o, i]), n = !0
        }))
    })
}
var Xg = w(() => {
    "use strict";
    ct();
    wt()
});

function Vu(r, e) {
    return he(function(t, n) {
        var i = null,
            o = 0,
            s = !1,
            u = function() {
                return s && !i && n.complete()
            };
        t.subscribe(le(n, function(a) {
            i ? .unsubscribe();
            var l = 0,
                c = o++;
            Ie(r(a, c)).subscribe(i = le(n, function(f) {
                return n.next(e ? e(a, f, c, l++) : f)
            }, function() {
                i = null, u()
            }))
        }, function() {
            s = !0, u()
        }))
    })
}
var Jg = w(() => {
    "use strict";
    bt();
    ct();
    wt()
});
var ei = w(() => {
    "use strict";
    er();
    Lg();
    $g();
    Mo();
    Bg();
    Vg();
    Wg();
    Kg();
    jg();
    Zn();
    Xg();
    Jg();
    Uu();
    Ig()
});

function tv(r, e) {
    if (r.nodeType !== Node.ELEMENT_NODE) throw new Error("Can't generate CSS selector for non-element node type.");
    if (r.tagName.toLowerCase() === "html") return "html";
    var t = {
        root: document.body,
        idName: function(o) {
            return !0
        },
        className: function(o) {
            return !0
        },
        tagName: function(o) {
            return !0
        },
        attr: function(o, s) {
            return !1
        },
        seedMinLength: 1,
        optimizedMinLength: 2,
        threshold: 1e3,
        maxNumberOfTries: 1e4
    };
    Vt = pr(pr({}, t), e), Gu = ix(Vt.root, t);
    var n = Zo(r, "all", function() {
        return Zo(r, "two", function() {
            return Zo(r, "one", function() {
                return Zo(r, "none")
            })
        })
    });
    if (n) {
        var i = iv(ov(n, r));
        return i.length > 0 && (n = i[0]), ts(n)
    } else throw new Error("Selector was not found.")
}

function ix(r, e) {
    return r.nodeType === Node.DOCUMENT_NODE ? r : r === e.root ? r.ownerDocument : r
}

function Zo(r, e, t) {
    for (var n = null, i = [], o = r, s = 0, u = function() {
            var l, c, f = es(ox(o)) || es.apply(void 0, Bt([], He(sx(o)), !1)) || es.apply(void 0, Bt([], He(ax(o)), !1)) || es(lx(o)) || [ev()],
                d = ux(o);
            if (e == "all") d && (f = f.concat(f.filter(Wu).map(function(b) {
                return Qo(b, d)
            })));
            else if (e == "two") f = f.slice(0, 1), d && (f = f.concat(f.filter(Wu).map(function(b) {
                return Qo(b, d)
            })));
            else if (e == "one") {
                var p = He(f = f.slice(0, 1), 1),
                    h = p[0];
                d && Wu(h) && (f = [Qo(h, d)])
            } else e == "none" && (f = [ev()], d && (f = [Qo(f[0], d)]));
            try {
                for (var g = (l = void 0, yt(f)), m = g.next(); !m.done; m = g.next()) {
                    var h = m.value;
                    h.level = s
                }
            } catch (b) {
                l = {
                    error: b
                }
            } finally {
                try {
                    m && !m.done && (c = g.return) && c.call(g)
                } finally {
                    if (l) throw l.error
                }
            }
            if (i.push(f), i.length >= Vt.seedMinLength && (n = Zg(i, t), n)) return "break";
            o = o.parentElement, s++
        }; o;) {
        var a = u();
        if (a === "break") break
    }
    return n || (n = Zg(i, t)), !n && t ? t() : n
}

function Zg(r, e) {
    var t, n, i = r.reduce(function(l, c) {
        return l * c.length
    }, 1);
    if (i > Vt.threshold) return e ? e() : null;
    var o = iv(nv(r));
    try {
        for (var s = yt(o), u = s.next(); !u.done; u = s.next()) {
            var a = u.value;
            if (rv(a)) return a
        }
    } catch (l) {
        t = {
            error: l
        }
    } finally {
        try {
            u && !u.done && (n = s.return) && n.call(s)
        } finally {
            if (t) throw t.error
        }
    }
    return null
}

function ts(r) {
    for (var e = r[0], t = e.name, n = 1; n < r.length; n++) {
        var i = r[n].level || 0;
        e.level === i - 1 ? t = "".concat(r[n].name, " > ").concat(t) : t = "".concat(r[n].name, " ").concat(t), e = r[n]
    }
    return t
}

function Qg(r) {
    return r.map(function(e) {
        return e.penalty
    }).reduce(function(e, t) {
        return e + t
    }, 0)
}

function rv(r) {
    var e = ts(r);
    switch (Gu.querySelectorAll(e).length) {
        case 0:
            throw new Error("Can't select any node with this selector: ".concat(e));
        case 1:
            return !0;
        default:
            return !1
    }
}

function ox(r) {
    var e = r.getAttribute("id");
    return e && Vt.idName(e) ? {
        name: "#" + CSS.escape(e),
        penalty: 0
    } : null
}

function sx(r) {
    var e = Array.from(r.attributes).filter(function(t) {
        return Vt.attr(t.name, t.value)
    });
    return e.map(function(t) {
        return {
            name: "[".concat(CSS.escape(t.name), '="').concat(CSS.escape(t.value), '"]'),
            penalty: .5
        }
    })
}

function ax(r) {
    var e = Array.from(r.classList).filter(Vt.className);
    return e.map(function(t) {
        return {
            name: "." + CSS.escape(t),
            penalty: 1
        }
    })
}

function lx(r) {
    var e = r.tagName.toLowerCase();
    return Vt.tagName(e) ? {
        name: e,
        penalty: 2
    } : null
}

function ev() {
    return {
        name: "*",
        penalty: 3
    }
}

function ux(r) {
    var e = r.parentNode;
    if (!e) return null;
    var t = e.firstChild;
    if (!t) return null;
    for (var n = 0; t && (t.nodeType === Node.ELEMENT_NODE && n++, t !== r);) t = t.nextSibling;
    return n
}

function Qo(r, e) {
    return {
        name: r.name + ":nth-child(".concat(e, ")"),
        penalty: r.penalty + 1
    }
}

function Wu(r) {
    return r.name !== "html" && !r.name.startsWith("#")
}

function es() {
    for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
    var t = r.filter(cx);
    return t.length > 0 ? t : null
}

function cx(r) {
    return r != null
}

function nv(r, e) {
    var t, n, i, o, s, u;
    return e === void 0 && (e = []), xr(this, function(a) {
        switch (a.label) {
            case 0:
                if (!(r.length > 0)) return [3, 9];
                a.label = 1;
            case 1:
                a.trys.push([1, 6, 7, 8]), t = yt(r[0]), n = t.next(), a.label = 2;
            case 2:
                return n.done ? [3, 5] : (i = n.value, [5, yt(nv(r.slice(1, r.length), e.concat(i)))]);
            case 3:
                a.sent(), a.label = 4;
            case 4:
                return n = t.next(), [3, 2];
            case 5:
                return [3, 8];
            case 6:
                return o = a.sent(), s = {
                    error: o
                }, [3, 8];
            case 7:
                try {
                    n && !n.done && (u = t.return) && u.call(t)
                } finally {
                    if (s) throw s.error
                }
                return [7];
            case 8:
                return [3, 11];
            case 9:
                return [4, e];
            case 10:
                a.sent(), a.label = 11;
            case 11:
                return [2]
        }
    })
}

function iv(r) {
    return Bt([], He(r), !1).sort(function(e, t) {
        return Qg(e) - Qg(t)
    })
}

function ov(r, e, t) {
    var n, i, o;
    return t === void 0 && (t = {
        counter: 0,
        visited: new Map
    }), xr(this, function(s) {
        switch (s.label) {
            case 0:
                if (!(r.length > 2 && r.length > Vt.optimizedMinLength)) return [3, 5];
                n = 1, s.label = 1;
            case 1:
                return n < r.length - 1 ? t.counter > Vt.maxNumberOfTries ? [2] : (t.counter += 1, i = Bt([], He(r), !1), i.splice(n, 1), o = ts(i), t.visited.has(o) ? [2] : rv(i) && fx(i, e) ? [4, i] : [3, 4]) : [3, 5];
            case 2:
                return s.sent(), t.visited.set(o, !0), [5, yt(ov(i, e, t))];
            case 3:
                s.sent(), s.label = 4;
            case 4:
                return n++, [3, 1];
            case 5:
                return [2]
        }
    })
}

function fx(r, e) {
    return Gu.querySelector(ts(r)) === e
}
var Vt, Gu, sv = w(() => {
    "use strict";
    Hr()
});

function fv() {
    return "".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9))
}
var dx, rs, av, px, zu, ns, qu, hx, lv, mx, Hu, Yu, ti, uv, cv, en, Dr = w(() => {
    "use strict";
    sv();
    Cr();
    dx = ["input", "select", "textarea"], rs = function(r, e) {
        return function(t, n) {
            var i, o, s, u = r.pageUrlAllowlist,
                a = r.shouldTrackEventResolver,
                l = (o = (i = n ? .tagName) === null || i === void 0 ? void 0 : i.toLowerCase) === null || o === void 0 ? void 0 : o.call(i);
            if (!l) return !1;
            if (a) return a(t, n);
            if (!hx(window.location.href, u)) return !1;
            var c = String(n ? .getAttribute("type")) || "";
            if (typeof c == "string") switch (c.toLowerCase()) {
                case "hidden":
                    return !1;
                case "password":
                    return !1
            }
            if (e) {
                var f = e.some(function(p) {
                    var h;
                    return !!(!((h = n ? .matches) === null || h === void 0) && h.call(n, p))
                });
                if (!f) return !1
            }
            switch (l) {
                case "input":
                case "select":
                case "textarea":
                    return t === "change" || t === "click";
                default:
                    {
                        var d = (s = window ? .getComputedStyle) === null || s === void 0 ? void 0 : s.call(window, n);
                        return d && d.getPropertyValue("cursor") === "pointer" && t === "click" ? !0 : t === "click"
                    }
            }
        }
    }, av = function(r) {
        if (r == null) return !1;
        if (typeof r == "string") {
            var e = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
            if (e.test((r || "").replace(/[- ]/g, ""))) return !1;
            var t = /(^\d{3}-?\d{2}-?\d{4}$)/;
            if (t.test(r)) return !1
        }
        return !0
    }, px = function(r) {
        return !!r && r.nodeType === 3
    }, zu = function(r) {
        var e, t, n, i = (t = (e = r ? .tagName) === null || e === void 0 ? void 0 : e.toLowerCase) === null || t === void 0 ? void 0 : t.call(e),
            o = r instanceof HTMLElement ? ((n = r.getAttribute("contenteditable")) === null || n === void 0 ? void 0 : n.toLowerCase()) === "true" : !1;
        return !dx.includes(i) && !o
    }, ns = function(r) {
        var e = "";
        return zu(r) && r.childNodes && r.childNodes.length && r.childNodes.forEach(function(t) {
            var n = "";
            px(t) ? t.textContent && (n = t.textContent) : n = ns(t), e += n.split(/(\s+)/).filter(av).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
        }), e
    }, qu = function(r, e) {
        var t, n, i = "";
        try {
            return i = tv(r, {
                className: function(c) {
                    return c !== qn
                },
                maxNumberOfTries: 1e3
            }), i
        } catch (c) {
            if (e) {
                var o = c;
                e.warn("Failed to get selector with finder, use fallback strategy instead: ".concat(o.toString()))
            }
        }
        var s = (n = (t = r ? .tagName) === null || t === void 0 ? void 0 : t.toLowerCase) === null || n === void 0 ? void 0 : n.call(t);
        s && (i = s);
        var u = r.getAttribute("id"),
            a = r.getAttribute("class");
        if (u) i = "#".concat(u);
        else if (a) {
            var l = a.split(" ").filter(function(c) {
                return c !== qn
            }).join(".");
            l && (i = "".concat(i, ".").concat(l))
        }
        return i
    }, hx = function(r, e) {
        return !e || !e.length ? !0 : e.some(function(t) {
            return typeof t == "string" ? r === t : r.match(t)
        })
    }, lv = function(r, e) {
        return r.getAttributeNames().reduce(function(t, n) {
            if (n.startsWith(e)) {
                var i = n.replace(e, ""),
                    o = r.getAttribute(n);
                i && (t[i] = o || "")
            }
            return t
        }, {})
    }, mx = function(r) {
        return r == null || typeof r == "object" && Object.keys(r).length === 0 || typeof r == "string" && r.trim().length === 0
    }, Hu = function(r) {
        return Object.keys(r).reduce(function(e, t) {
            var n = r[t];
            return mx(n) || (e[t] = n), e
        }, {})
    }, Yu = function(r) {
        var e = r.parentElement;
        if (!e) return "";
        var t;
        try {
            t = e.querySelector(":scope>span,h1,h2,h3,h4,h5,h6")
        } catch {
            t = null
        }
        if (t) {
            var n = t.textContent || "";
            return av(n) ? n : ""
        }
        return Yu(e)
    }, ti = function(r, e) {
        return r ? e.some(function(t) {
            var n;
            return (n = r ? .matches) === null || n === void 0 ? void 0 : n.call(r, t)
        }) ? r : ti(r ? .parentElement, e) : null
    }, uv = function(r, e) {
        var t, n, i;
        if (!r) return {};
        var o = (i = (n = r ? .tagName) === null || n === void 0 ? void 0 : n.toLowerCase) === null || i === void 0 ? void 0 : i.call(n),
            s = qu(r, e),
            u = (t = {}, t[vo] = o, t[yo] = ns(r), t[wo] = s, t[bo] = window.location.href.split("?")[0], t);
        return Hu(u)
    }, cv = function(r) {
        return new Promise(function(e, t) {
            var n;
            try {
                var i = document.createElement("script");
                i.type = "text/javascript", i.async = !0, i.src = r, i.addEventListener("load", function() {
                    e({
                        status: !0
                    })
                }, {
                    once: !0
                }), i.addEventListener("error", function() {
                    t({
                        status: !1,
                        message: "Failed to load the script ".concat(r)
                    })
                }), (n = document.head) === null || n === void 0 || n.appendChild(i)
            } catch (o) {
                t(o)
            }
        })
    };
    en = function(r) {
        return !(r.event.target === null || !r.closestTrackedAncestor)
    }
});
var dv, pv = w(() => {
    "use strict";
    Cr();
    Dr();
    dv = function() {
        function r(e) {
            var t = e === void 0 ? {} : e,
                n = t.origin,
                i = n === void 0 ? zn : n,
                o = this;
            this.endpoint = zn, this.requestCallbacks = {}, this.onSelect = function(s) {
                o.notify({
                    action: "element-selected",
                    data: s
                })
            }, this.onTrack = function(s, u) {
                s === "selector-mode-changed" ? o.notify({
                    action: "track-selector-mode-changed",
                    data: u
                }) : s === "selector-moved" && o.notify({
                    action: "track-selector-moved",
                    data: u
                })
            }, this.endpoint = i
        }
        return r.prototype.notify = function(e) {
            var t, n, i, o;
            (n = (t = this.logger) === null || t === void 0 ? void 0 : t.debug) === null || n === void 0 || n.call(t, "Message sent: ", JSON.stringify(e)), (o = (i = window.opener) === null || i === void 0 ? void 0 : i.postMessage) === null || o === void 0 || o.call(i, e, this.endpoint)
        }, r.prototype.sendRequest = function(e, t, n) {
            var i = this;
            n === void 0 && (n = {
                timeout: 15e3
            });
            var o = fv(),
                s = {
                    id: o,
                    action: e,
                    args: t
                },
                u = new Promise(function(a, l) {
                    i.requestCallbacks[o] = {
                        resolve: a,
                        reject: l
                    }, i.notify(s), n ? .timeout > 0 && setTimeout(function() {
                        l(new Error("".concat(e, " timed out (id: ").concat(o, ")"))), delete i.requestCallbacks[o]
                    }, n.timeout)
                });
            return u
        }, r.prototype.handleResponse = function(e) {
            var t;
            if (!this.requestCallbacks[e.id]) {
                (t = this.logger) === null || t === void 0 || t.warn("No callback found for request id: ".concat(e.id));
                return
            }
            this.requestCallbacks[e.id].resolve(e.responseData), delete this.requestCallbacks[e.id]
        }, r.prototype.setup = function(e) {
            var t = this,
                n = e === void 0 ? {} : e,
                i = n.logger,
                o = n.endpoint,
                s = n.isElementSelectable,
                u = n.cssSelectorAllowlist,
                a = n.actionClickAllowlist;
            this.logger = i, o && this.endpoint === zn && (this.endpoint = o);
            var l = null;
            window.addEventListener("message", function(c) {
                var f, d, p, h, g;
                if ((d = (f = t.logger) === null || f === void 0 ? void 0 : f.debug) === null || d === void 0 || d.call(f, "Message received: ", JSON.stringify(c)), t.endpoint === c.origin) {
                    var m = c ? .data,
                        b = m ? .action;
                    if (b)
                        if ("id" in m)(h = (p = t.logger) === null || p === void 0 ? void 0 : p.debug) === null || h === void 0 || h.call(p, "Received Response to previous request: ", JSON.stringify(c)), t.handleResponse(m);
                        else if (b === "ping") t.notify({
                        action: "pong"
                    });
                    else if (b === "initialize-visual-tagging-selector") {
                        var v = m ? .data;
                        cv($m).then(function() {
                            var y;
                            l = (y = window ? .amplitudeVisualTaggingSelector) === null || y === void 0 ? void 0 : y.call(window, {
                                getEventTagProps: uv,
                                isElementSelectable: function(S) {
                                    return s ? s(v ? .actionType || "click", S) : !0
                                },
                                onTrack: t.onTrack,
                                onSelect: t.onSelect,
                                visualHighlightClass: qn,
                                messenger: t,
                                cssSelectorAllowlist: u,
                                actionClickAllowlist: a
                            }), t.notify({
                                action: "selector-loaded"
                            })
                        }).catch(function() {
                            var y;
                            (y = t.logger) === null || y === void 0 || y.warn("Failed to initialize visual tagging selector")
                        })
                    } else b === "close-visual-tagging-selector" && ((g = l ? .close) === null || g === void 0 || g.call(l))
                }
            }), this.notify({
                action: "page-loaded"
            })
        }, r
    }()
});

function Ex(r) {
    var e, t, n, i, o, s;
    if (r === null) return null;
    var u = String(r.tagName).toLowerCase(),
        a = {
            tag: u
        },
        l = Array.from((i = (n = r.parentElement) === null || n === void 0 ? void 0 : n.children) !== null && i !== void 0 ? i : []);
    l.length && (a.index = l.indexOf(r), a.indexOfType = l.filter(function(S) {
        return S.tagName === r.tagName
    }).indexOf(r));
    var c = (s = (o = r.previousElementSibling) === null || o === void 0 ? void 0 : o.tagName) === null || s === void 0 ? void 0 : s.toLowerCase();
    c && (a.prevSib = String(c));
    var f = r.getAttribute("id");
    f && (a.id = String(f));
    var d = Array.from(r.classList);
    d.length && (a.classes = d);
    var p = {},
        h = Array.from(r.attributes),
        g = h.filter(function(S) {
            return !gx.includes(S.name)
        }),
        m = !zu(r);
    if (!wx.includes(String(r.getAttribute("type"))) && !yx.includes(u)) try {
        for (var b = yt(g), v = b.next(); !v.done; v = b.next()) {
            var y = v.value;
            m && !vx.includes(y.name) || (p[y.name] = String(y.value).substring(0, bx))
        }
    } catch (S) {
        e = {
            error: S
        }
    } finally {
        try {
            v && !v.done && (t = b.return) && t.call(b)
        } finally {
            if (e) throw e.error
        }
    }
    return Object.keys(p).length && (a.attrs = p), a
}

function _x(r) {
    var e = [];
    if (!r) return e;
    e.push(r);
    for (var t = r.parentElement; t && t.tagName !== "HTML";) e.push(t), t = t.parentElement;
    return e
}

function xx(r, e) {
    for (var t = 0, n = 0; n < r.length; n++) {
        var i = r[n];
        if (i === null) t += 4;
        else {
            var o = is(i);
            t += o ? Array.from(o).length : 4
        }
        if (t > e) return r.slice(0, n)
    }
    return r
}

function is(r, e) {
    e === void 0 && (e = !1);
    try {
        if (r == null) return e ? "None" : null;
        if (typeof r == "string") return e ? (r = r.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r"), r.includes('"') ? "'".concat(r, "'") : r.includes("'") ? '"'.concat(r.replace(/'/g, "\\'"), '"') : "'".concat(r, "'")) : r;
        if (typeof r == "boolean") return r ? "True" : "False";
        if (Array.isArray(r)) {
            var t = r.map(function(o) {
                return is(o, !0)
            });
            return "[".concat(t.join(", "), "]")
        } else if (typeof r == "object") {
            var n = Object.entries(r).filter(function(o) {
                    var s = He(o, 1),
                        u = s[0];
                    return u != null
                }).map(function(o) {
                    var s = He(o, 2),
                        u = s[0],
                        a = s[1];
                    return "".concat(String(is(u, !0)), ": ").concat(String(is(a, !0)))
                }),
                i = "{".concat(n.join(", "), "}");
            return i.includes("\\'") && (i = i.replace(/'/g, "'").replace(/'/g, "\\'")), i
        }
        return r.toString()
    } catch {
        return null
    }
}
var gx, vx, yx, wx, bx, Sx, hv, mv = w(() => {
    "use strict";
    Hr();
    Dr();
    gx = ["id", "class", "style", "value", "onclick", "onchange", "oninput", "onblur", "onsubmit", "onfocus", "onkeydown", "onkeyup", "onkeypress", "data-reactid", "data-react-checksum", "data-reactroot"], vx = ["type"], yx = ["svg", "path", "g"], wx = ["password", "hidden"], bx = 128, Sx = 1024;
    hv = function(r) {
        var e = [];
        if (!r) return [];
        var t = _x(r);
        return e = xx(t.map(function(n) {
            return Ex(n)
        }), Sx), e
    }
});

function gv(r) {
    var e = r.amplitude,
        t = r.allObservables,
        n = r.options,
        i = r.shouldTrackEvent,
        o = t.clickObservable,
        s = o.pipe(Bu(), St(function(c) {
            var f = He(c, 2),
                d = f[0],
                p = f[1],
                h = d.event.target !== p.event.target,
                g = Math.abs(p.event.screenX - d.event.screenX) <= 20 && Math.abs(p.event.screenY - d.event.screenY) <= 20;
            return h && !g
        })),
        u = o.pipe(Fu(n.debounceTime), Ge(function() {
            return "timeout"
        })),
        a = Qn(s, u),
        l = o.pipe(ju(0), St(en), St(function(c) {
            return i("click", c.closestTrackedAncestor)
        }), Lu(a));
    return l.subscribe(function(c) {
        var f, d, p = c.length >= Cx ? Gn : Gn;
        try {
            for (var h = yt(c), g = h.next(); !g.done; g = h.next()) {
                var m = g.value;
                e ? .track(p, m.targetElementProperties, {
                    time: m.timestamp
                })
            }
        } catch (b) {
            f = {
                error: b
            }
        } finally {
            try {
                g && !g.done && (d = h.return) && d.call(h)
            } finally {
                if (f) throw f.error
            }
        }
    })
}
var Cx, vv = w(() => {
    "use strict";
    Hr();
    ei();
    Dr();
    Cr();
    Cx = 5
});

function yv(r) {
    var e = r.amplitude,
        t = r.allObservables,
        n = r.getEventProperties,
        i = r.shouldTrackEvent,
        o = t.changeObservable,
        s = o.pipe(St(en), St(function(u) {
            return i("change", u.closestTrackedAncestor)
        }));
    return s.subscribe(function(u) {
        e ? .track(Cm, n("change", u.closestTrackedAncestor))
    })
}
var wv = w(() => {
    "use strict";
    ei();
    Dr();
    Cr()
});

function bv(r) {
    var e = r.amplitude,
        t = r.allObservables,
        n = r.options,
        i = r.getEventProperties,
        o = r.shouldTrackEvent,
        s = r.shouldTrackActionClick,
        u = t.clickObservable,
        a = t.mutationObservable,
        l = t.navigateObservable,
        c = u.pipe(St(function(h) {
            return !o("click", h.closestTrackedAncestor)
        }), Ge(function(h) {
            var g = ti(h.event.target, n.actionClickAllowlist);
            return h.closestTrackedAncestor = g, h.closestTrackedAncestor !== null && (h.targetElementProperties = i(h.type, h.closestTrackedAncestor)), h
        }), St(en), St(function(h) {
            return s("click", h.closestTrackedAncestor)
        })),
        f = [a];
    l && f.push(l);
    var d = Qn.apply(void 0, Bt([], He(f), !1)),
        p = c.pipe(Vu(function(h) {
            return d.pipe(Qr(1), Du({
                first: 500,
                with: function() {
                    return Ar
                }
            }), Ge(function() {
                return h
            }))
        }));
    return p.subscribe(function(h) {
        e ? .track(Gn, i("click", h.closestTrackedAncestor), {
            time: h.timestamp
        })
    })
}
var Sv = w(() => {
    "use strict";
    Hr();
    ei();
    Dr();
    Cr()
});

function Ix(r) {
    return r.type === "click" || r.type === "change"
}
var tn, os, Ev = w(() => {
    "use strict";
    Hr();
    Fe();
    Cr();
    ei();
    Dr();
    pv();
    mv();
    vv();
    wv();
    Sv();
    (function(r) {
        r.ClickObservable = "clickObservable", r.ChangeObservable = "changeObservable", r.NavigateObservable = "navigateObservable", r.MutationObservable = "mutationObservable"
    })(tn || (tn = {}));
    os = function(r) {
        var e, t, n;
        r === void 0 && (r = {});
        var i = r.dataAttributePrefix,
            o = i === void 0 ? cl : i,
            s = r.visualTaggingOptions,
            u = s === void 0 ? {
                enabled: !0,
                messenger: new dv
            } : s;
        r.cssSelectorAllowlist = (e = r.cssSelectorAllowlist) !== null && e !== void 0 ? e : ul, r.actionClickAllowlist = (t = r.actionClickAllowlist) !== null && t !== void 0 ? t : fl, r.debounceTime = (n = r.debounceTime) !== null && n !== void 0 ? n : 0;
        var a = xm,
            l = "enrichment",
            c = [],
            f = void 0,
            d = function() {
                var v, y = Nr(document, "click", {
                        capture: !0
                    }).pipe(Ge(function(C) {
                        return h(C, "click")
                    })),
                    S = Nr(document, "change", {
                        capture: !0
                    }).pipe(Ge(function(C) {
                        return h(C, "change")
                    })),
                    _;
                window.navigation && (_ = Nr(window.navigation, "navigate").pipe(Ge(function(C) {
                    return h(C, "navigate")
                })));
                var x = new Ce(function(C) {
                    var E = new MutationObserver(function(I) {
                        C.next(I)
                    });
                    return E.observe(document.body, {
                            childList: !0,
                            attributes: !0,
                            characterData: !0,
                            subtree: !0
                        }),
                        function() {
                            return E.disconnect()
                        }
                }).pipe(Ge(function(C) {
                    return h(C, "mutation")
                }));
                return v = {}, v[tn.ClickObservable] = y, v[tn.ChangeObservable] = S, v[tn.NavigateObservable] = _, v[tn.MutationObservable] = x, v
            },
            p = function(v, y) {
                var S, _, x, C = (x = (_ = y ? .tagName) === null || _ === void 0 ? void 0 : _.toLowerCase) === null || x === void 0 ? void 0 : x.call(_),
                    E = typeof y.getBoundingClientRect == "function" ? y.getBoundingClientRect() : {
                        left: null,
                        top: null
                    },
                    I = y.getAttribute("aria-label"),
                    R = lv(y, o),
                    k = Yu(y),
                    D = qu(y, f),
                    P = (S = {}, S[Im] = y.getAttribute("id") || "", S[Tm] = y.getAttribute("class"), S[Om] = hv(y), S[vo] = C, S[yo] = ns(y), S[Pm] = E.left == null ? null : Math.round(E.left), S[Am] = E.top == null ? null : Math.round(E.top), S[Mm] = I, S[Nm] = R, S[wo] = D, S[Dm] = k, S[bo] = window.location.href.split("?")[0], S[km] = typeof document < "u" && document.title || "", S[Lm] = window.innerHeight, S[Fm] = window.innerWidth, S);
                return C === "a" && v === "click" && y instanceof HTMLAnchorElement && (P[Rm] = y.href), Hu(P)
            },
            h = function(v, y) {
                var S = {
                    event: v,
                    timestamp: Date.now(),
                    type: y
                };
                if (Ix(S) && S.event.target !== null) {
                    var _ = ti(S.event.target, r.cssSelectorAllowlist);
                    return _ && (S.closestTrackedAncestor = _, S.targetElementProperties = p(S.type, _)), S
                }
                return S
            },
            g = function(v, y) {
                return go(void 0, void 0, void 0, function() {
                    var S, _, x, C, E, I, R, k, D, P;
                    return xr(this, function(X) {
                        return f = v.loggerProvider, typeof document > "u" ? [2] : (S = rs(r, r.cssSelectorAllowlist), _ = rs(r, r.actionClickAllowlist), x = d(), C = gv({
                            allObservables: x,
                            options: r,
                            amplitude: y,
                            shouldTrackEvent: S
                        }), c.push(C), E = yv({
                            allObservables: x,
                            getEventProperties: p,
                            amplitude: y,
                            shouldTrackEvent: S
                        }), c.push(E), I = bv({
                            allObservables: x,
                            options: r,
                            getEventProperties: p,
                            amplitude: y,
                            shouldTrackEvent: S,
                            shouldTrackActionClick: _
                        }), c.push(I), (D = v ? .loggerProvider) === null || D === void 0 || D.log("".concat(a, " has been successfully added.")), window.opener && u.enabled && (R = r.cssSelectorAllowlist, k = r.actionClickAllowlist, (P = u.messenger) === null || P === void 0 || P.setup(pr(pr({
                            logger: v ? .loggerProvider
                        }, v ? .serverZone && {
                            endpoint: Um[v.serverZone]
                        }), {
                            isElementSelectable: rs(r, Bt(Bt([], He(R), !1), He(k), !1)),
                            cssSelectorAllowlist: R,
                            actionClickAllowlist: k
                        }))), [2])
                    })
                })
            },
            m = function(v) {
                return go(void 0, void 0, void 0, function() {
                    return xr(this, function(y) {
                        return [2, v]
                    })
                })
            },
            b = function() {
                return go(void 0, void 0, void 0, function() {
                    var v, y, S, _, x;
                    return xr(this, function(C) {
                        try {
                            for (v = yt(c), y = v.next(); !y.done; y = v.next()) S = y.value, S.unsubscribe()
                        } catch (E) {
                            _ = {
                                error: E
                            }
                        } finally {
                            try {
                                y && !y.done && (x = v.return) && x.call(v)
                            } finally {
                                if (_) throw _.error
                            }
                        }
                        return [2]
                    })
                })
            };
        return {
            name: a,
            type: l,
            setup: g,
            execute: m,
            teardown: b
        }
    }
});
var _v = w(() => {
    "use strict";
    Ev()
});
var xv, Cv = w(() => {
    "use strict";
    it();
    Ae();
    Me();
    Fe();
    Th();
    Nh();
    Zh();
    nm();
    sm();
    lm();
    Vn();
    fm();
    pm();
    _m();
    _v();
    xv = function(r) {
        gt(e, r);

        function e() {
            return r !== null && r.apply(this, arguments) || this
        }
        return e.prototype.init = function(t, n, i) {
            t === void 0 && (t = "");
            var o, s;
            return arguments.length > 2 ? (o = n, s = i) : typeof n == "string" ? (o = n, s = void 0) : (o = n ? .userId, s = n), Ue(this._init(pe(pe({}, s), {
                userId: o,
                apiKey: t
            })))
        }, e.prototype._init = function(t) {
            var n, i, o;
            return $(this, void 0, void 0, function() {
                var s, u, a, l, c, f, d = this;
                return j(this, function(p) {
                    switch (p.label) {
                        case 0:
                            return this.initializing ? [2] : (this.initializing = !0, [4, Jh(t.apiKey, t, this)]);
                        case 1:
                            return s = p.sent(), t.fetchRemoteConfig ? [4, Em(s)] : [3, 4];
                        case 2:
                            return u = p.sent(), [4, u.generateJoinedConfig()];
                        case 3:
                            s = p.sent(), p.label = 4;
                        case 4:
                            return [4, r.prototype._init.call(this, s)];
                        case 5:
                            return p.sent(), this.logBrowserOptions(s), no(this.config.defaultTracking) ? (a = Zl(this.config), this.webAttribution = new Vl(a, this.config), [4, this.webAttribution.init()]) : [3, 7];
                        case 6:
                            p.sent(), p.label = 7;
                        case 7:
                            return l = fr(), c = Number.isNaN(Number(l.ampSessionId)) ? void 0 : Number(l.ampSessionId), this.setSessionId((o = (i = (n = t.sessionId) !== null && n !== void 0 ? n : c) !== null && i !== void 0 ? i : this.config.sessionId) !== null && o !== void 0 ? o : Date.now()), f = jt(t.instanceName), f.identityStore.setIdentity({
                                userId: this.config.userId,
                                deviceId: this.config.deviceId
                            }), this.config.offline === ll ? [3, 9] : [4, this.add(dm()).promise];
                        case 8:
                            p.sent(), p.label = 9;
                        case 9:
                            return [4, this.add(new _l).promise];
                        case 10:
                            return p.sent(), [4, this.add(new Mh).promise];
                        case 11:
                            return p.sent(), [4, this.add(new ql).promise];
                        case 12:
                            return p.sent(), cm(this.config), Yl(this.config.defaultTracking) ? (this.config.loggerProvider.debug("Adding file download tracking plugin"), [4, this.add(am()).promise]) : [3, 14];
                        case 13:
                            p.sent(), p.label = 14;
                        case 14:
                            return Kl(this.config.defaultTracking) ? (this.config.loggerProvider.debug("Adding form interaction plugin"), [4, this.add(om()).promise]) : [3, 16];
                        case 15:
                            p.sent(), p.label = 16;
                        case 16:
                            return io(this.config.defaultTracking) ? (this.config.loggerProvider.debug("Adding page view tracking plugin"), [4, this.add(au(Jl(this.config))).promise]) : [3, 18];
                        case 17:
                            p.sent(), p.label = 18;
                        case 18:
                            return so(this.config.autocapture) ? (this.config.loggerProvider.debug("Adding user interactions plugin (autocapture plugin)"), [4, this.add(os(Xl(this.config))).promise]) : [3, 20];
                        case 19:
                            p.sent(), p.label = 20;
                        case 20:
                            return this.initializing = !1, [4, this.runQueuedFunctions("dispatchQ")];
                        case 21:
                            return p.sent(), f.eventBridge.setEventReceiver(function(h) {
                                d.track(h.eventType, h.eventProperties)
                            }), [2]
                    }
                })
            })
        }, e.prototype.getUserId = function() {
            var t;
            return (t = this.config) === null || t === void 0 ? void 0 : t.userId
        }, e.prototype.setUserId = function(t) {
            if (!this.config) {
                this.q.push(this.setUserId.bind(this, t));
                return
            }
            this.config.loggerProvider.debug("function setUserId: ", t), (t !== this.config.userId || t === void 0) && (this.config.userId = t, Wl(t, this.config.instanceName))
        }, e.prototype.getDeviceId = function() {
            var t;
            return (t = this.config) === null || t === void 0 ? void 0 : t.deviceId
        }, e.prototype.setDeviceId = function(t) {
            if (!this.config) {
                this.q.push(this.setDeviceId.bind(this, t));
                return
            }
            this.config.loggerProvider.debug("function setDeviceId: ", t), this.config.deviceId = t, Gl(t, this.config.instanceName)
        }, e.prototype.reset = function() {
            this.setDeviceId(mt()), this.setUserId(void 0)
        }, e.prototype.getSessionId = function() {
            var t;
            return (t = this.config) === null || t === void 0 ? void 0 : t.sessionId
        }, e.prototype.setSessionId = function(t) {
            var n, i = [];
            if (!this.config) return this.q.push(this.setSessionId.bind(this, t)), Ue(Promise.resolve());
            if (t === this.config.sessionId) return Ue(Promise.resolve());
            this.config.loggerProvider.debug("function setSessionId: ", t);
            var o = this.getSessionId(),
                s = this.config.lastEventTime,
                u = (n = this.config.lastEventId) !== null && n !== void 0 ? n : -1;
            this.config.sessionId = t, this.config.lastEventTime = void 0, this.config.pageCounter = 0, oo(this.config.defaultTracking) && (o && s && i.push(this.track(iu, void 0, {
                device_id: this.previousSessionDeviceId,
                event_id: ++u,
                session_id: o,
                time: s + 1,
                user_id: this.previousSessionUserId
            }).promise), this.config.lastEventTime = this.config.sessionId);
            var a = this.trackCampaignEventIfNeeded(++u, i);
            return oo(this.config.defaultTracking) && i.push(this.track(nu, void 0, {
                event_id: a ? ++u : u,
                session_id: this.config.sessionId,
                time: this.config.lastEventTime
            }).promise), this.previousSessionDeviceId = this.config.deviceId, this.previousSessionUserId = this.config.userId, Ue(Promise.all(i))
        }, e.prototype.extendSession = function() {
            if (!this.config) {
                this.q.push(this.extendSession.bind(this));
                return
            }
            this.config.lastEventTime = Date.now()
        }, e.prototype.setTransport = function(t) {
            if (!this.config) {
                this.q.push(this.setTransport.bind(this, t));
                return
            }
            this.config.transportProvider = ou(t)
        }, e.prototype.identify = function(t, n) {
            if (lo(t)) {
                var i = t._q;
                t._q = [], t = ao(new Tt, i)
            }
            return n ? .user_id && this.setUserId(n.user_id), n ? .device_id && this.setDeviceId(n.device_id), r.prototype.identify.call(this, t, n)
        }, e.prototype.groupIdentify = function(t, n, i, o) {
            if (lo(i)) {
                var s = i._q;
                i._q = [], i = ao(new Tt, s)
            }
            return r.prototype.groupIdentify.call(this, t, n, i, o)
        }, e.prototype.revenue = function(t, n) {
            if (lo(t)) {
                var i = t._q;
                t._q = [], t = ao(new Yi, i)
            }
            return r.prototype.revenue.call(this, t, n)
        }, e.prototype.trackCampaignEventIfNeeded = function(t, n) {
            if (!this.webAttribution || !this.webAttribution.shouldTrackNewCampaign) return !1;
            var i = this.webAttribution.generateCampaignEvent(t);
            return n ? n.push(this.track(i).promise) : this.track(i), this.config.loggerProvider.log("Tracking attribution."), !0
        }, e.prototype.process = function(t) {
            return $(this, void 0, void 0, function() {
                var n, i, o;
                return j(this, function(s) {
                    return n = Date.now(), i = Ln(this.config.sessionTimeout, this.config.lastEventTime), o = this.webAttribution && this.webAttribution.shouldSetSessionIdOnNewCampaign(), t.event_type !== nu && t.event_type !== iu && (!t.session_id || t.session_id === this.getSessionId()) && (i || o ? (this.setSessionId(n), o && this.config.loggerProvider.log("Created a new session for new campaign.")) : i || this.trackCampaignEventIfNeeded()), [2, r.prototype.process.call(this, t)]
                })
            })
        }, e.prototype.logBrowserOptions = function(t) {
            try {
                var n = pe(pe({}, t), {
                    apiKey: t.apiKey.substring(0, 10) + "********"
                });
                this.config.loggerProvider.debug("Initialized Amplitude with BrowserConfig:", JSON.stringify(n))
            } catch (i) {
                this.config.loggerProvider.error("Error logging browser config", i)
            }
        }, e
    }(wl)
});
var Tx, Ne, Iv = w(() => {
    "use strict";
    Ae();
    Cv();
    Tx = function() {
        var r = new xv;
        return {
            init: ee(r.init.bind(r), "init", _e(r), xe(r, ["config"])),
            add: ee(r.add.bind(r), "add", _e(r), xe(r, ["config.apiKey", "timeline.plugins"])),
            remove: ee(r.remove.bind(r), "remove", _e(r), xe(r, ["config.apiKey", "timeline.plugins"])),
            track: ee(r.track.bind(r), "track", _e(r), xe(r, ["config.apiKey", "timeline.queue.length"])),
            logEvent: ee(r.logEvent.bind(r), "logEvent", _e(r), xe(r, ["config.apiKey", "timeline.queue.length"])),
            identify: ee(r.identify.bind(r), "identify", _e(r), xe(r, ["config.apiKey", "timeline.queue.length"])),
            groupIdentify: ee(r.groupIdentify.bind(r), "groupIdentify", _e(r), xe(r, ["config.apiKey", "timeline.queue.length"])),
            setGroup: ee(r.setGroup.bind(r), "setGroup", _e(r), xe(r, ["config.apiKey", "timeline.queue.length"])),
            revenue: ee(r.revenue.bind(r), "revenue", _e(r), xe(r, ["config.apiKey", "timeline.queue.length"])),
            flush: ee(r.flush.bind(r), "flush", _e(r), xe(r, ["config.apiKey", "timeline.queue.length"])),
            getUserId: ee(r.getUserId.bind(r), "getUserId", _e(r), xe(r, ["config", "config.userId"])),
            setUserId: ee(r.setUserId.bind(r), "setUserId", _e(r), xe(r, ["config", "config.userId"])),
            getDeviceId: ee(r.getDeviceId.bind(r), "getDeviceId", _e(r), xe(r, ["config", "config.deviceId"])),
            setDeviceId: ee(r.setDeviceId.bind(r), "setDeviceId", _e(r), xe(r, ["config", "config.deviceId"])),
            reset: ee(r.reset.bind(r), "reset", _e(r), xe(r, ["config", "config.userId", "config.deviceId"])),
            getSessionId: ee(r.getSessionId.bind(r), "getSessionId", _e(r), xe(r, ["config"])),
            setSessionId: ee(r.setSessionId.bind(r), "setSessionId", _e(r), xe(r, ["config"])),
            extendSession: ee(r.extendSession.bind(r), "extendSession", _e(r), xe(r, ["config"])),
            setOptOut: ee(r.setOptOut.bind(r), "setOptOut", _e(r), xe(r, ["config"])),
            setTransport: ee(r.setTransport.bind(r), "setTransport", _e(r), xe(r, ["config"]))
        }
    }, Ne = Tx()
});
var Tv, AB, MB, NB, DB, kB, LB, Ov, Rv, UB, $B, jB, BB, VB, WB, GB, zB, qB, Pv, Av, Mv = w(() => {
    "use strict";
    Iv();
    Ae();
    Tv = Ne.add, AB = Ne.extendSession, MB = Ne.flush, NB = Ne.getDeviceId, DB = Ne.getSessionId, kB = Ne.getUserId, LB = Ne.groupIdentify, Ov = Ne.identify, Rv = Ne.init, UB = Ne.logEvent, $B = Ne.remove, jB = Ne.reset, BB = Ne.revenue, VB = Ne.setDeviceId, WB = Ne.setGroup, GB = Ne.setOptOut, zB = Ne.setSessionId, qB = Ne.setTransport, Pv = Ne.setUserId, Av = Ne.track
});

function ss(r, e, t, n) {
    function i(o) {
        return o instanceof t ? o : new t(function(s) {
            s(o)
        })
    }
    return new(t || (t = Promise))(function(o, s) {
        function u(c) {
            try {
                l(n.next(c))
            } catch (f) {
                s(f)
            }
        }

        function a(c) {
            try {
                l(n.throw(c))
            } catch (f) {
                s(f)
            }
        }

        function l(c) {
            c.done ? o(c.value) : i(c.value).then(u, a)
        }
        l((n = n.apply(r, e || [])).next())
    })
}

function as(r, e) {
    var t = {
            label: 0,
            sent: function() {
                if (o[0] & 1) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        },
        n, i, o, s;
    return s = {
        next: u(0),
        throw: u(1),
        return: u(2)
    }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }), s;

    function u(l) {
        return function(c) {
            return a([l, c])
        }
    }

    function a(l) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; s && (s = 0, l[0] && (t = 0)), t;) try {
            if (n = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done) return o;
            switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
                case 0:
                case 1:
                    o = l;
                    break;
                case 4:
                    return t.label++, {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    t.label++, i = l[1], l = [0];
                    continue;
                case 7:
                    l = t.ops.pop(), t.trys.pop();
                    continue;
                default:
                    if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
                        t.label = l[1];
                        break
                    }
                    if (l[0] === 6 && t.label < o[1]) {
                        t.label = o[1], o = l;
                        break
                    }
                    if (o && t.label < o[2]) {
                        t.label = o[2], t.ops.push(l);
                        break
                    }
                    o[2] && t.ops.pop(), t.trys.pop();
                    continue
            }
            l = e.call(r, t)
        } catch (c) {
            l = [6, c], i = 0
        } finally {
            n = o = 0
        }
        if (l[0] & 5) throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}
var Wt, Nv = w(() => {
    "use strict";
    Wt = function() {
        return Wt = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) {
                t = arguments[n];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
        }, Wt.apply(this, arguments)
    }
});

function rn(r, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    Ku(r, e);

    function t() {
        this.constructor = r
    }
    r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t)
}

function N(r, e, t, n) {
    function i(o) {
        return o instanceof t ? o : new t(function(s) {
            s(o)
        })
    }
    return new(t || (t = Promise))(function(o, s) {
        function u(c) {
            try {
                l(n.next(c))
            } catch (f) {
                s(f)
            }
        }

        function a(c) {
            try {
                l(n.throw(c))
            } catch (f) {
                s(f)
            }
        }

        function l(c) {
            c.done ? o(c.value) : i(c.value).then(u, a)
        }
        l((n = n.apply(r, e || [])).next())
    })
}

function M(r, e) {
    var t = {
            label: 0,
            sent: function() {
                if (o[0] & 1) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        },
        n, i, o, s;
    return s = {
        next: u(0),
        throw: u(1),
        return: u(2)
    }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }), s;

    function u(l) {
        return function(c) {
            return a([l, c])
        }
    }

    function a(l) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; s && (s = 0, l[0] && (t = 0)), t;) try {
            if (n = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done) return o;
            switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
                case 0:
                case 1:
                    o = l;
                    break;
                case 4:
                    return t.label++, {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    t.label++, i = l[1], l = [0];
                    continue;
                case 7:
                    l = t.ops.pop(), t.trys.pop();
                    continue;
                default:
                    if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
                        t.label = l[1];
                        break
                    }
                    if (l[0] === 6 && t.label < o[1]) {
                        t.label = o[1], o = l;
                        break
                    }
                    if (o && t.label < o[2]) {
                        t.label = o[2], t.ops.push(l);
                        break
                    }
                    o[2] && t.ops.pop(), t.trys.pop();
                    continue
            }
            l = e.call(r, t)
        } catch (c) {
            l = [6, c], i = 0
        } finally {
            n = o = 0
        }
        if (l[0] & 5) throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}

function et(r) {
    var e = typeof Symbol == "function" && Symbol.iterator,
        t = e && r[e],
        n = 0;
    if (t) return t.call(r);
    if (r && typeof r.length == "number") return {
        next: function() {
            return r && n >= r.length && (r = void 0), {
                value: r && r[n++],
                done: !r
            }
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function ft(r, e) {
    var t = typeof Symbol == "function" && r[Symbol.iterator];
    if (!t) return r;
    var n = t.call(r),
        i, o = [],
        s;
    try {
        for (;
            (e === void 0 || e-- > 0) && !(i = n.next()).done;) o.push(i.value)
    } catch (u) {
        s = {
            error: u
        }
    } finally {
        try {
            i && !i.done && (t = n.return) && t.call(n)
        } finally {
            if (s) throw s.error
        }
    }
    return o
}

function tr(r, e, t) {
    if (t || arguments.length === 2)
        for (var n = 0, i = e.length, o; n < i; n++)(o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
    return r.concat(o || Array.prototype.slice.call(e))
}
var Ku, V, dt = w(() => {
    "use strict";
    Ku = function(r, e) {
        return Ku = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, n) {
            t.__proto__ = n
        } || function(t, n) {
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }, Ku(r, e)
    };
    V = function() {
        return V = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) {
                t = arguments[n];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
        }, V.apply(this, arguments)
    }
});
var Dv, kv, Lv, Fv, Uv, $v, ls, jv, Bv, Vv, Wv, QB, Gv, zv, qv, Hv, Yv, e3, us, ri, nn = w(() => {
    "use strict";
    Ae();
    Fe();
    Dv = "[Amplitude]", kv = "".concat(Dv, " Session Replay ID"), Lv = 0, Fv = nt.US, Uv = "".concat(Dv, " Session Replay Debug"), $v = "amp-block", ls = "amp-mask", jv = "amp-unmask", Bv = "https://api-sr.amplitude.com/sessions/v2/track", Vv = "https://api-sr.eu.amplitude.com/sessions/v2/track", Wv = "https://api-sr.stag2.amplitude.com/sessions/v2/track", QB = "".concat(Jt, "_replay_unsent"), Gv = 1 * 1e6, zv = 3e4, qv = 6e4, Hv = 500, Yv = 10 * 1e3, e3 = 1e3 * 60 * 60 * 24 * 3, us = 1024;
    (function(r) {
        r.GET_SR_PROPS = "get-sr-props", r.DEBUG_INFO = "debug-info"
    })(ri || (ri = {}))
});
var Xu, Kv, Ju = w(() => {
    "use strict";
    dt();
    Me();
    Ae();
    Fe();
    nn();
    Xu = function() {
        return {
            flushMaxRetries: 2,
            logLevel: Le.Warn,
            loggerProvider: new $t,
            transportProvider: new Un
        }
    }, Kv = function(r) {
        rn(e, r);

        function e(t, n) {
            var i = this,
                o, s = Xu();
            return i = r.call(this, V(V({
                transportProvider: s.transportProvider
            }, n), {
                apiKey: t
            })) || this, i.flushMaxRetries = n.flushMaxRetries !== void 0 && n.flushMaxRetries <= s.flushMaxRetries ? n.flushMaxRetries : s.flushMaxRetries, i.apiKey = t, i.sampleRate = n.sampleRate || Lv, i.serverZone = n.serverZone || Fv, i.configServerUrl = n.configServerUrl, i.trackServerUrl = n.trackServerUrl, i.shouldInlineStylesheet = n.shouldInlineStylesheet, i.version = n.version, i.performanceConfig = n.performanceConfig, i.storeType = (o = n.storeType) !== null && o !== void 0 ? o : "idb", n.privacyConfig && (i.privacyConfig = n.privacyConfig), n.debugMode && (i.debugMode = n.debugMode), n.experimental && (i.experimental = n.experimental), i
        }
        return e
    }(An)
});

function Qc(r) {
    if (cs[r]) return cs[r];
    let e = globalThis[r],
        t = e.prototype,
        n = r in Zv ? Zv[r] : void 0,
        i = !!(n && n.every(u => {
            var a, l;
            return !!((l = (a = Object.getOwnPropertyDescriptor(t, u)) == null ? void 0 : a.get) != null && l.toString().includes("[native code]"))
        })),
        o = r in Qv ? Qv[r] : void 0,
        s = !!(o && o.every(u => {
            var a;
            return typeof t[u] == "function" && ((a = t[u]) == null ? void 0 : a.toString().includes("[native code]"))
        }));
    if (i && s && !Mx()) return cs[r] = e.prototype, e.prototype;
    try {
        let u = document.createElement("iframe");
        document.body.appendChild(u);
        let a = u.contentWindow;
        if (!a) return e.prototype;
        let l = a[r].prototype;
        return document.body.removeChild(u), l ? cs[r] = l : t
    } catch {
        return t
    }
}

function mr(r, e, t) {
    var n;
    let i = `${r}.${String(t)}`;
    if (Zu[i]) return Zu[i].call(e);
    let o = Qc(r),
        s = (n = Object.getOwnPropertyDescriptor(o, t)) == null ? void 0 : n.get;
    return s ? (Zu[i] = s, s.call(e)) : e[t]
}

function Yy(r, e, t) {
    let n = `${r}.${String(t)}`;
    if (Qu[n]) return Qu[n].bind(e);
    let o = Qc(r)[t];
    return typeof o != "function" ? e[t] : (Qu[n] = o, o.bind(e))
}

function Nx(r) {
    return mr("Node", r, "childNodes")
}

function Dx(r) {
    return mr("Node", r, "parentNode")
}

function kx(r) {
    return mr("Node", r, "parentElement")
}

function Lx(r) {
    return mr("Node", r, "textContent")
}

function Fx(r, e) {
    return Yy("Node", r, "contains")(e)
}

function Ux(r) {
    return Yy("Node", r, "getRootNode")()
}

function $x(r) {
    return !r || !("host" in r) ? null : mr("ShadowRoot", r, "host")
}

function jx(r) {
    return r.styleSheets
}

function Bx(r) {
    return !r || !("shadowRoot" in r) ? null : mr("Element", r, "shadowRoot")
}

function Vx(r, e) {
    return mr("Element", r, "querySelector")(e)
}

function Wx(r, e) {
    return mr("Element", r, "querySelectorAll")(e)
}

function Gx() {
    return Qc("MutationObserver").constructor
}

function Ky(r) {
    return r.nodeType === r.ELEMENT_NODE
}

function li(r) {
    let e = r && "host" in r && "mode" in r && Ye.host(r) || null;
    return !!(e && "shadowRoot" in e && Ye.shadowRoot(e) === r)
}

function ui(r) {
    return Object.prototype.toString.call(r) === "[object ShadowRoot]"
}

function zx(r) {
    return r.includes(" background-clip: text;") && !r.includes(" -webkit-background-clip: text;") && (r = r.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), r
}

function qx(r) {
    let {
        cssText: e
    } = r;
    if (e.split('"').length < 3) return e;
    let t = ["@import", `url(${JSON.stringify(r.href)})`];
    return r.layerName === "" ? t.push("layer") : r.layerName && t.push(`layer(${r.layerName})`), r.supportsText && t.push(`supports(${r.supportsText})`), r.media.length && t.push(r.media.mediaText), t.join(" ") + ";"
}

function dc(r) {
    try {
        let e = r.rules || r.cssRules;
        if (!e) return null;
        let t = r.href;
        !t && r.ownerNode && r.ownerNode.ownerDocument && (t = r.ownerNode.ownerDocument.location.href);
        let n = Array.from(e, i => Xy(i, t)).join("");
        return zx(n)
    } catch {
        return null
    }
}

function Xy(r, e) {
    if (Yx(r)) {
        let t;
        try {
            t = dc(r.styleSheet) || qx(r)
        } catch {
            t = r.cssText
        }
        return r.styleSheet.href ? js(t, r.styleSheet.href) : t
    } else {
        let t = r.cssText;
        return Kx(r) && r.selectorText.includes(":") && (t = Hx(t)), e ? js(t, e) : t
    }
}

function Hx(r) {
    let e = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
    return r.replace(e, "$1\\$2")
}

function Yx(r) {
    return "styleSheet" in r
}

function Kx(r) {
    return "selectorText" in r
}

function Xx() {
    return new $s
}

function ef({
    element: r,
    maskInputOptions: e,
    tagName: t,
    type: n,
    value: i,
    maskInputFn: o
}) {
    let s = i || "",
        u = n && Lr(n);
    return (e[t.toLowerCase()] || u && e[u]) && (o ? s = o(s, r) : s = "*".repeat(s.length)), s
}

function Lr(r) {
    return r.toLowerCase()
}

function Jx(r) {
    let e = r.getContext("2d");
    if (!e) return !0;
    let t = 50;
    for (let n = 0; n < r.width; n += t)
        for (let i = 0; i < r.height; i += t) {
            let o = e.getImageData,
                s = ey in o ? o[ey] : o;
            if (new Uint32Array(s.call(e, n, i, Math.min(t, r.width - n), Math.min(t, r.height - i)).data.buffer).some(a => a !== 0)) return !1
        }
    return !0
}

function tf(r) {
    let e = r.type;
    return r.hasAttribute("data-rr-is-password") ? "password" : e ? Lr(e) : null
}

function Jy(r, e) {
    let t;
    try {
        t = new URL(r, e ? ? window.location.href)
    } catch {
        return null
    }
    let n = /\.([0-9a-z]+)(?:$)/i,
        i = t.pathname.match(n);
    return i ? .[1] ? ? null
}

function Zx(r) {
    let e = "";
    return r.indexOf("//") > -1 ? e = r.split("/").slice(0, 3).join("/") : e = r.split("/")[0], e = e.split("?")[0], e
}

function js(r, e) {
    return (r || "").replace(Qx, (t, n, i, o, s, u) => {
        let a = i || s || u,
            l = n || o || "";
        if (!a) return t;
        if (eC.test(a) || tC.test(a)) return `url(${l}${a}${l})`;
        if (rC.test(a)) return `url(${l}${a}${l})`;
        if (a[0] === "/") return `url(${l}${Zx(e)+a}${l})`;
        let c = e.split("/"),
            f = a.split("/");
        c.pop();
        for (let d of f) d !== "." && (d === ".." ? c.pop() : c.push(d));
        return `url(${l}${c.join("/")}${l})`
    })
}

function ec(r) {
    return r.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "")
}

function nC(r, e) {
    let t = Array.from(e.childNodes),
        n = [];
    if (t.length > 1 && r && typeof r == "string") {
        let i = ec(r);
        for (let o = 1; o < t.length; o++)
            if (t[o].textContent && typeof t[o].textContent == "string") {
                let s = ec(t[o].textContent);
                for (let u = 3; u < s.length; u++) {
                    let a = s.substring(0, u);
                    if (i.split(a).length === 2) {
                        let l = i.indexOf(a);
                        for (let c = l; c < r.length; c++)
                            if (ec(r.substring(0, c)).length === l) {
                                n.push(r.substring(0, c)), r = r.substring(c);
                                break
                            }
                        break
                    }
                }
            }
    }
    return n.push(r), n
}

function iC(r, e) {
    return nC(r, e).join("/* rr_split */")
}

function Zy() {
    return oC++
}

function aC(r) {
    if (r instanceof HTMLFormElement) return "form";
    let e = Lr(r.tagName);
    return sC.test(e) ? "div" : e
}

function cC(r, e) {
    if (e.trim() === "") return e;
    let t = 0;

    function n(o) {
        let s, u = o.exec(e.substring(t));
        return u ? (s = u[0], t += s.length, s) : ""
    }
    let i = [];
    for (; n(uC), !(t >= e.length);) {
        let o = n(lC);
        if (o.slice(-1) === ",") o = ln(r, o.substring(0, o.length - 1)), i.push(o);
        else {
            let s = "";
            o = ln(r, o);
            let u = !1;
            for (;;) {
                let a = e.charAt(t);
                if (a === "") {
                    i.push((o + s).trim());
                    break
                } else if (u) a === ")" && (u = !1);
                else if (a === ",") {
                    t += 1, i.push((o + s).trim());
                    break
                } else a === "(" && (u = !0);
                s += a, t += 1
            }
        }
    }
    return i.join(", ")
}

function ln(r, e) {
    return !e || e.trim() === "" ? e : rf(r, e)
}

function fC(r) {
    return !!(r.tagName === "svg" || r.ownerSVGElement)
}

function rf(r, e) {
    let t = ry.get(r);
    if (t || (t = r.createElement("a"), ry.set(r, t)), !e) e = "";
    else if (e.startsWith("blob:") || e.startsWith("data:")) return e;
    return t.setAttribute("href", e), t.href
}

function Qy(r, e, t, n) {
    return n && (t === "src" || t === "href" && !(e === "use" && n[0] === "#") || t === "xlink:href" && n[0] !== "#" || t === "background" && (e === "table" || e === "td" || e === "th") ? ln(r, n) : t === "srcset" ? cC(r, n) : t === "style" ? js(n, rf(r)) : e === "object" && t === "data" ? ln(r, n) : n)
}

function ew(r, e, t) {
    return (r === "video" || r === "audio") && e === "autoplay"
}

function dC(r, e, t) {
    try {
        if (typeof e == "string") {
            if (r.classList.contains(e)) return !0
        } else
            for (let n = r.classList.length; n--;) {
                let i = r.classList[n];
                if (e.test(i)) return !0
            }
        if (t) return r.matches(t)
    } catch {}
    return !1
}

function Bs(r, e, t) {
    if (!r) return !1;
    if (r.nodeType !== r.ELEMENT_NODE) return t ? Bs(Ye.parentNode(r), e, t) : !1;
    for (let n = r.classList.length; n--;) {
        let i = r.classList[n];
        if (e.test(i)) return !0
    }
    return t ? Bs(Ye.parentNode(r), e, t) : !1
}

function tw(r, e, t, n) {
    let i;
    if (Ky(r)) {
        if (i = r, !Ye.childNodes(i).length) return !1
    } else {
        if (Ye.parentElement(r) === null) return !1;
        i = Ye.parentElement(r)
    }
    try {
        if (typeof e == "string") {
            if (n) {
                if (i.closest(`.${e}`)) return !0
            } else if (i.classList.contains(e)) return !0
        } else if (Bs(i, e, n)) return !0;
        if (t) {
            if (n) {
                if (i.closest(t)) return !0
            } else if (i.matches(t)) return !0
        }
    } catch {}
    return !1
}

function pC(r, e, t) {
    let n = r.contentWindow;
    if (!n) return;
    let i = !1,
        o;
    try {
        o = n.document.readyState
    } catch {
        return
    }
    if (o !== "complete") {
        let u = setTimeout(() => {
            i || (e(), i = !0)
        }, t);
        r.addEventListener("load", () => {
            clearTimeout(u), i = !0, e()
        });
        return
    }
    let s = "about:blank";
    if (n.location.href !== s || r.src === s || r.src === "") return setTimeout(e, 0), r.addEventListener("load", e);
    r.addEventListener("load", e)
}

function hC(r, e, t) {
    let n = !1,
        i;
    try {
        i = r.sheet
    } catch {
        return
    }
    if (i) return;
    let o = setTimeout(() => {
        n || (e(), n = !0)
    }, t);
    r.addEventListener("load", () => {
        clearTimeout(o), n = !0, e()
    })
}

function mC(r, e) {
    let {
        doc: t,
        mirror: n,
        blockClass: i,
        blockSelector: o,
        needsMask: s,
        inlineStylesheet: u,
        maskInputOptions: a = {},
        maskTextFn: l,
        maskInputFn: c,
        dataURLOptions: f = {},
        inlineImages: d,
        recordCanvas: p,
        keepIframeSrcFn: h,
        newlyAddedElement: g = !1,
        cssCaptured: m = !1
    } = e, b = gC(t, n);
    switch (r.nodeType) {
        case r.DOCUMENT_NODE:
            return r.compatMode !== "CSS1Compat" ? {
                type: $e.Document,
                childNodes: [],
                compatMode: r.compatMode
            } : {
                type: $e.Document,
                childNodes: []
            };
        case r.DOCUMENT_TYPE_NODE:
            return {
                type: $e.DocumentType,
                name: r.name,
                publicId: r.publicId,
                systemId: r.systemId,
                rootId: b
            };
        case r.ELEMENT_NODE:
            return yC(r, {
                doc: t,
                blockClass: i,
                blockSelector: o,
                inlineStylesheet: u,
                maskInputOptions: a,
                maskInputFn: c,
                dataURLOptions: f,
                inlineImages: d,
                recordCanvas: p,
                keepIframeSrcFn: h,
                newlyAddedElement: g,
                rootId: b
            });
        case r.TEXT_NODE:
            return vC(r, {
                doc: t,
                needsMask: s,
                maskTextFn: l,
                rootId: b,
                cssCaptured: m
            });
        case r.CDATA_SECTION_NODE:
            return {
                type: $e.CDATA,
                textContent: "",
                rootId: b
            };
        case r.COMMENT_NODE:
            return {
                type: $e.Comment,
                textContent: Ye.textContent(r) || "",
                rootId: b
            };
        default:
            return !1
    }
}

function gC(r, e) {
    if (!e.hasNode(r)) return;
    let t = e.getId(r);
    return t === 1 ? void 0 : t
}

function vC(r, e) {
    let {
        needsMask: t,
        maskTextFn: n,
        rootId: i,
        cssCaptured: o
    } = e, s = Ye.parentNode(r), u = s && s.tagName, a = "", l = u === "STYLE" ? !0 : void 0, c = u === "SCRIPT" ? !0 : void 0;
    return c ? a = "SCRIPT_PLACEHOLDER" : o || (a = Ye.textContent(r), l && a && (a = js(a, rf(e.doc)))), !l && !c && a && t && (a = n ? n(a, Ye.parentElement(r)) : a.replace(/[\S]/g, "*")), {
        type: $e.Text,
        textContent: a || "",
        rootId: i
    }
}

function yC(r, e) {
    let {
        doc: t,
        blockClass: n,
        blockSelector: i,
        inlineStylesheet: o,
        maskInputOptions: s = {},
        maskInputFn: u,
        dataURLOptions: a = {},
        inlineImages: l,
        recordCanvas: c,
        keepIframeSrcFn: f,
        newlyAddedElement: d = !1,
        rootId: p
    } = e, h = dC(r, n, i), g = aC(r), m = {}, b = r.attributes.length;
    for (let y = 0; y < b; y++) {
        let S = r.attributes[y];
        ew(g, S.name, S.value) || (m[S.name] = Qy(t, g, Lr(S.name), S.value))
    }
    if (g === "link" && o) {
        let y = Array.from(t.styleSheets).find(_ => _.href === r.href),
            S = null;
        y && (S = dc(y)), S && (delete m.rel, delete m.href, m._cssText = S)
    }
    if (g === "style" && r.sheet) {
        let y = dc(r.sheet);
        y && (r.childNodes.length > 1 && (y = iC(y, r)), m._cssText = y)
    }
    if (g === "input" || g === "textarea" || g === "select") {
        let y = r.value,
            S = r.checked;
        m.type !== "radio" && m.type !== "checkbox" && m.type !== "submit" && m.type !== "button" && y ? m.value = ef({
            element: r,
            type: tf(r),
            tagName: g,
            value: y,
            maskInputOptions: s,
            maskInputFn: u
        }) : S && (m.checked = S)
    }
    if (g === "option" && (r.selected && !s.select ? m.selected = !0 : delete m.selected), g === "dialog" && r.open && (m.rr_open_mode = r.matches("dialog:modal") ? "modal" : "non-modal"), g === "canvas" && c) {
        if (r.__context === "2d") Jx(r) || (m.rr_dataURL = r.toDataURL(a.type, a.quality));
        else if (!("__context" in r)) {
            let y = r.toDataURL(a.type, a.quality),
                S = t.createElement("canvas");
            S.width = r.width, S.height = r.height;
            let _ = S.toDataURL(a.type, a.quality);
            y !== _ && (m.rr_dataURL = y)
        }
    }
    if (g === "img" && l) {
        on || (on = t.createElement("canvas"), ty = on.getContext("2d"));
        let y = r,
            S = y.currentSrc || y.getAttribute("src") || "<unknown-src>",
            _ = y.crossOrigin,
            x = () => {
                y.removeEventListener("load", x);
                try {
                    on.width = y.naturalWidth, on.height = y.naturalHeight, ty.drawImage(y, 0, 0), m.rr_dataURL = on.toDataURL(a.type, a.quality)
                } catch (C) {
                    if (y.crossOrigin !== "anonymous") {
                        y.crossOrigin = "anonymous", y.complete && y.naturalWidth !== 0 ? x() : y.addEventListener("load", x);
                        return
                    } else console.warn(`Cannot inline img src=${S}! Error: ${C}`)
                }
                y.crossOrigin === "anonymous" && (_ ? m.crossOrigin = _ : y.removeAttribute("crossorigin"))
            };
        y.complete && y.naturalWidth !== 0 ? x() : y.addEventListener("load", x)
    }
    if (g === "audio" || g === "video") {
        let y = m;
        y.rr_mediaState = r.paused ? "paused" : "played", y.rr_mediaCurrentTime = r.currentTime, y.rr_mediaPlaybackRate = r.playbackRate, y.rr_mediaMuted = r.muted, y.rr_mediaLoop = r.loop, y.rr_mediaVolume = r.volume
    }
    if (d || (r.scrollLeft && (m.rr_scrollLeft = r.scrollLeft), r.scrollTop && (m.rr_scrollTop = r.scrollTop)), h) {
        let {
            width: y,
            height: S
        } = r.getBoundingClientRect();
        m = {
            class: m.class,
            rr_width: `${y}px`,
            rr_height: `${S}px`
        }
    }
    g === "iframe" && !f(m.src) && (r.contentDocument || (m.rr_src = m.src), delete m.src);
    let v;
    try {
        customElements.get(g) && (v = !0)
    } catch {}
    return {
        type: $e.Element,
        tagName: g,
        attributes: m,
        childNodes: [],
        isSVG: fC(r) || void 0,
        needBlock: h,
        rootId: p,
        isCustom: v
    }
}

function ae(r) {
    return r == null ? "" : r.toLowerCase()
}

function wC(r, e) {
    if (e.comment && r.type === $e.Comment) return !0;
    if (r.type === $e.Element) {
        if (e.script && (r.tagName === "script" || r.tagName === "link" && (r.attributes.rel === "preload" || r.attributes.rel === "modulepreload") && r.attributes.as === "script" || r.tagName === "link" && r.attributes.rel === "prefetch" && typeof r.attributes.href == "string" && Jy(r.attributes.href) === "js")) return !0;
        if (e.headFavicon && (r.tagName === "link" && r.attributes.rel === "shortcut icon" || r.tagName === "meta" && (ae(r.attributes.name).match(/^msapplication-tile(image|color)$/) || ae(r.attributes.name) === "application-name" || ae(r.attributes.rel) === "icon" || ae(r.attributes.rel) === "apple-touch-icon" || ae(r.attributes.rel) === "shortcut icon"))) return !0;
        if (r.tagName === "meta") {
            if (e.headMetaDescKeywords && ae(r.attributes.name).match(/^description|keywords$/)) return !0;
            if (e.headMetaSocial && (ae(r.attributes.property).match(/^(og|twitter|fb):/) || ae(r.attributes.name).match(/^(og|twitter):/) || ae(r.attributes.name) === "pinterest")) return !0;
            if (e.headMetaRobots && (ae(r.attributes.name) === "robots" || ae(r.attributes.name) === "googlebot" || ae(r.attributes.name) === "bingbot")) return !0;
            if (e.headMetaHttpEquiv && r.attributes["http-equiv"] !== void 0) return !0;
            if (e.headMetaAuthorship && (ae(r.attributes.name) === "author" || ae(r.attributes.name) === "generator" || ae(r.attributes.name) === "framework" || ae(r.attributes.name) === "publisher" || ae(r.attributes.name) === "progid" || ae(r.attributes.property).match(/^article:/) || ae(r.attributes.property).match(/^product:/))) return !0;
            if (e.headMetaVerification && (ae(r.attributes.name) === "google-site-verification" || ae(r.attributes.name) === "yandex-verification" || ae(r.attributes.name) === "csrf-token" || ae(r.attributes.name) === "p:domain_verify" || ae(r.attributes.name) === "verify-v1" || ae(r.attributes.name) === "verification" || ae(r.attributes.name) === "shopify-checkout-api-token")) return !0
        }
    }
    return !1
}

function un(r, e) {
    let {
        doc: t,
        mirror: n,
        blockClass: i,
        blockSelector: o,
        maskTextClass: s,
        maskTextSelector: u,
        skipChild: a = !1,
        inlineStylesheet: l = !0,
        maskInputOptions: c = {},
        maskTextFn: f,
        maskInputFn: d,
        slimDOMOptions: p,
        dataURLOptions: h = {},
        inlineImages: g = !1,
        recordCanvas: m = !1,
        onSerialize: b,
        onIframeLoad: v,
        iframeLoadTimeout: y = 5e3,
        onStylesheetLoad: S,
        stylesheetLoadTimeout: _ = 5e3,
        keepIframeSrcFn: x = () => !1,
        newlyAddedElement: C = !1,
        cssCaptured: E = !1
    } = e, {
        needsMask: I
    } = e, {
        preserveWhiteSpace: R = !0
    } = e;
    I || (I = tw(r, s, u, I === void 0));
    let k = mC(r, {
        doc: t,
        mirror: n,
        blockClass: i,
        blockSelector: o,
        needsMask: I,
        inlineStylesheet: l,
        maskInputOptions: c,
        maskTextFn: f,
        maskInputFn: d,
        dataURLOptions: h,
        inlineImages: g,
        recordCanvas: m,
        keepIframeSrcFn: x,
        newlyAddedElement: C,
        cssCaptured: E
    });
    if (!k) return console.warn(r, "not serialized"), null;
    let D;
    n.hasNode(r) ? D = n.getId(r) : wC(k, p) || !R && k.type === $e.Text && !k.textContent.replace(/^\s+|\s+$/gm, "").length ? D = fi : D = Zy();
    let P = Object.assign(k, {
        id: D
    });
    if (n.add(r, P), D === fi) return null;
    b && b(r);
    let X = !a;
    if (P.type === $e.Element) {
        X = X && !P.needBlock, delete P.needBlock;
        let L = Ye.shadowRoot(r);
        L && ui(L) && (P.isShadowHost = !0)
    }
    if ((P.type === $e.Document || P.type === $e.Element) && X) {
        p.headWhitespace && P.type === $e.Element && P.tagName === "head" && (R = !1);
        let L = {
            doc: t,
            mirror: n,
            blockClass: i,
            blockSelector: o,
            needsMask: I,
            maskTextClass: s,
            maskTextSelector: u,
            skipChild: a,
            inlineStylesheet: l,
            maskInputOptions: c,
            maskTextFn: f,
            maskInputFn: d,
            slimDOMOptions: p,
            dataURLOptions: h,
            inlineImages: g,
            recordCanvas: m,
            preserveWhiteSpace: R,
            onSerialize: b,
            onIframeLoad: v,
            iframeLoadTimeout: y,
            onStylesheetLoad: S,
            stylesheetLoadTimeout: _,
            keepIframeSrcFn: x,
            cssCaptured: !1
        };
        if (!(P.type === $e.Element && P.tagName === "textarea" && P.attributes.value !== void 0)) {
            P.type === $e.Element && P.attributes._cssText !== void 0 && typeof P.attributes._cssText == "string" && (L.cssCaptured = !0);
            for (let Q of Array.from(Ye.childNodes(r))) {
                let J = un(Q, L);
                J && P.childNodes.push(J)
            }
        }
        let F = null;
        if (Ky(r) && (F = Ye.shadowRoot(r)))
            for (let Q of Array.from(Ye.childNodes(F))) {
                let J = un(Q, L);
                J && (ui(F) && (J.isShadow = !0), P.childNodes.push(J))
            }
    }
    let Z = Ye.parentNode(r);
    return Z && li(Z) && ui(Z) && (P.isShadow = !0), P.type === $e.Element && P.tagName === "iframe" && pC(r, () => {
        let L = r.contentDocument;
        if (L && v) {
            let F = un(L, {
                doc: L,
                mirror: n,
                blockClass: i,
                blockSelector: o,
                needsMask: I,
                maskTextClass: s,
                maskTextSelector: u,
                skipChild: !1,
                inlineStylesheet: l,
                maskInputOptions: c,
                maskTextFn: f,
                maskInputFn: d,
                slimDOMOptions: p,
                dataURLOptions: h,
                inlineImages: g,
                recordCanvas: m,
                preserveWhiteSpace: R,
                onSerialize: b,
                onIframeLoad: v,
                iframeLoadTimeout: y,
                onStylesheetLoad: S,
                stylesheetLoadTimeout: _,
                keepIframeSrcFn: x
            });
            F && v(r, F)
        }
    }, y), P.type === $e.Element && P.tagName === "link" && typeof P.attributes.rel == "string" && (P.attributes.rel === "stylesheet" || P.attributes.rel === "preload" && typeof P.attributes.href == "string" && Jy(P.attributes.href) === "css") && hC(r, () => {
        if (S) {
            let L = un(r, {
                doc: t,
                mirror: n,
                blockClass: i,
                blockSelector: o,
                needsMask: I,
                maskTextClass: s,
                maskTextSelector: u,
                skipChild: !1,
                inlineStylesheet: l,
                maskInputOptions: c,
                maskTextFn: f,
                maskInputFn: d,
                slimDOMOptions: p,
                dataURLOptions: h,
                inlineImages: g,
                recordCanvas: m,
                preserveWhiteSpace: R,
                onSerialize: b,
                onIframeLoad: v,
                iframeLoadTimeout: y,
                onStylesheetLoad: S,
                stylesheetLoadTimeout: _,
                keepIframeSrcFn: x
            });
            L && S(r, L)
        }
    }, _), P
}

function bC(r, e) {
    let {
        mirror: t = new $s,
        blockClass: n = "rr-block",
        blockSelector: i = null,
        maskTextClass: o = "rr-mask",
        maskTextSelector: s = null,
        inlineStylesheet: u = !0,
        inlineImages: a = !1,
        recordCanvas: l = !1,
        maskAllInputs: c = !1,
        maskTextFn: f,
        maskInputFn: d,
        slimDOM: p = !1,
        dataURLOptions: h,
        preserveWhiteSpace: g,
        onSerialize: m,
        onIframeLoad: b,
        iframeLoadTimeout: v,
        onStylesheetLoad: y,
        stylesheetLoadTimeout: S,
        keepIframeSrcFn: _ = () => !1
    } = e || {};
    return un(r, {
        doc: r,
        mirror: t,
        blockClass: n,
        blockSelector: i,
        maskTextClass: o,
        maskTextSelector: s,
        skipChild: !1,
        inlineStylesheet: u,
        maskInputOptions: c === !0 ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            password: !0
        } : c === !1 ? {
            password: !0
        } : c,
        maskTextFn: f,
        maskInputFn: d,
        slimDOMOptions: p === !0 || p === "all" ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaDescKeywords: p === "all",
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaAuthorship: !0,
            headMetaVerification: !0
        } : p === !1 ? {} : p,
        dataURLOptions: h,
        inlineImages: a,
        recordCanvas: l,
        preserveWhiteSpace: g,
        onSerialize: m,
        onIframeLoad: b,
        iframeLoadTimeout: v,
        onStylesheetLoad: y,
        stylesheetLoadTimeout: S,
        keepIframeSrcFn: _,
        newlyAddedElement: !1
    })
}

function EC(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}

function _C(r) {
    if (r.__esModule) return r;
    var e = r.default;
    if (typeof e == "function") {
        var t = function n() {
            return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
        };
        t.prototype = e.prototype
    } else t = {};
    return Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.keys(r).forEach(function(n) {
        var i = Object.getOwnPropertyDescriptor(r, n);
        Object.defineProperty(t, n, i.get ? i : {
            enumerable: !0,
            get: function() {
                return r[n]
            }
        })
    }), t
}

function TC(r) {
    return r[0].toUpperCase() + r.slice(1)
}

function mc(r, e) {
    new OC(e).stringify(r)
}

function gc(r, e) {
    let t = new r.constructor;
    for (let n in r) {
        if (!Object.prototype.hasOwnProperty.call(r, n) || n === "proxyCache") continue;
        let i = r[n],
            o = typeof i;
        n === "parent" && o === "object" ? e && (t[n] = e) : n === "source" ? t[n] = i : Array.isArray(i) ? t[n] = i.map(s => gc(s, t)) : (o === "object" && i !== null && (i = gc(i)), t[n] = i)
    }
    return t
}

function BC(r) {
    return Buffer ? Buffer.from(r, "base64").toString() : window.atob(r)
}

function vw(r) {
    return r.map(e => (e.nodes && (e.nodes = vw(e.nodes)), delete e.source, e))
}

function yw(r) {
    if (r[fw] = !1, r.proxyOf.nodes)
        for (let e of r.proxyOf.nodes) yw(e)
}

function wI(r) {
    for (let e = r.length - 1; e >= 0; e--) {
        let t = r[e],
            n = t[3] || t[2];
        if (n) return n
    }
}

function zs(r, e) {
    let t = new xI(r, e),
        n = new _I(t);
    try {
        n.parse()
    } catch (i) {
        throw i
    }
    return n.root
}

function ii(r) {
    return typeof r == "object" && typeof r.then == "function"
}

function Rw(r) {
    let e = !1,
        t = MI[r.type];
    return r.type === "decl" ? e = r.prop.toLowerCase() : r.type === "atrule" && (e = r.name.toLowerCase()), e && r.append ? [t, t + "-" + e, dn, t + "Exit", t + "Exit-" + e] : e ? [t, t + "-" + e, t + "Exit", t + "Exit-" + e] : r.append ? [t, dn, t + "Exit"] : [t, t + "Exit"]
}

function yy(r) {
    let e;
    return r.type === "document" ? e = ["Document", dn, "DocumentExit"] : r.type === "root" ? e = ["Root", dn, "RootExit"] : e = Rw(r), {
        eventIndex: 0,
        events: e,
        iterator: 0,
        node: r,
        visitorIndex: 0,
        visitors: []
    }
}

function Cc(r) {
    return r[Gt] = !1, r.nodes && r.nodes.forEach(e => Cc(e)), r
}

function mi(r, e) {
    if (Array.isArray(r)) return r.map(i => mi(i));
    let {
        inputs: t,
        ...n
    } = r;
    if (t) {
        e = [];
        for (let i of t) {
            let o = { ...i,
                __proto__: KI.prototype
            };
            o.map && (o.map = { ...o.map,
                __proto__: qI.prototype
            }), e.push(o)
        }
    }
    if (n.nodes && (n.nodes = r.nodes.map(i => mi(i, e))), n.source) {
        let {
            inputId: i,
            ...o
        } = n.source;
        n.source = o, i != null && (n.source.input = e[i])
    }
    if (n.type === "root") return new XI(n);
    if (n.type === "decl") return new zI(n);
    if (n.type === "rule") return new JI(n);
    if (n.type === "comment") return new HI(n);
    if (n.type === "atrule") return new YI(n);
    throw new Error("Unknown node type: " + r.type)
}

function te(...r) {
    return r.length === 1 && Array.isArray(r[0]) && (r = r[0]), new pf(r)
}

function pT(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}

function hT(r) {
    if (r.__esModule) return r;
    var e = r.default;
    if (typeof e == "function") {
        var t = function n() {
            return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
        };
        t.prototype = e.prototype
    } else t = {};
    return Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.keys(r).forEach(function(n) {
        var i = Object.getOwnPropertyDescriptor(r, n);
        Object.defineProperty(t, n, i.get ? i : {
            enumerable: !0,
            get: function() {
                return r[n]
            }
        })
    }), t
}

function yT(r) {
    return r[0].toUpperCase() + r.slice(1)
}

function Pc(r, e) {
    new wT(e).stringify(r)
}

function Ac(r, e) {
    let t = new r.constructor;
    for (let n in r) {
        if (!Object.prototype.hasOwnProperty.call(r, n) || n === "proxyCache") continue;
        let i = r[n],
            o = typeof i;
        n === "parent" && o === "object" ? e && (t[n] = e) : n === "source" ? t[n] = i : Array.isArray(i) ? t[n] = i.map(s => Ac(s, t)) : (o === "object" && i !== null && (i = Ac(i)), t[n] = i)
    }
    return t
}

function MT(r) {
    return Buffer ? Buffer.from(r, "base64").toString() : window.atob(r)
}

function Qw(r) {
    return r.map(e => (e.nodes && (e.nodes = Qw(e.nodes)), delete e.source, e))
}

function eb(r) {
    if (r[Hw] = !1, r.proxyOf.nodes)
        for (let e of r.proxyOf.nodes) eb(e)
}

function cO(r) {
    for (let e = r.length - 1; e >= 0; e--) {
        let t = r[e],
            n = t[3] || t[2];
        if (n) return n
    }
}

function Ks(r, e) {
    let t = new mO(r, e),
        n = new hO(t);
    try {
        n.parse()
    } catch (i) {
        throw i
    }
    return n.root
}

function si(r) {
    return typeof r == "object" && typeof r.then == "function"
}

function fb(r) {
    let e = !1,
        t = _O[r.type];
    return r.type === "decl" ? e = r.prop.toLowerCase() : r.type === "atrule" && (e = r.name.toLowerCase()), e && r.append ? [t, t + "-" + e, mn, t + "Exit", t + "Exit-" + e] : e ? [t, t + "-" + e, t + "Exit", t + "Exit-" + e] : r.append ? [t, mn, t + "Exit"] : [t, t + "Exit"]
}

function Dy(r) {
    let e;
    return r.type === "document" ? e = ["Document", mn, "DocumentExit"] : r.type === "root" ? e = ["Root", mn, "RootExit"] : e = fb(r), {
        eventIndex: 0,
        events: e,
        iterator: 0,
        node: r,
        visitorIndex: 0,
        visitors: []
    }
}

function jc(r) {
    return r[zt] = !1, r.nodes && r.nodes.forEach(e => jc(e)), r
}

function wi(r, e) {
    if (Array.isArray(r)) return r.map(i => wi(i));
    let {
        inputs: t,
        ...n
    } = r;
    if (t) {
        e = [];
        for (let i of t) {
            let o = { ...i,
                __proto__: jO.prototype
            };
            o.map && (o.map = { ...o.map,
                __proto__: FO.prototype
            }), e.push(o)
        }
    }
    if (n.nodes && (n.nodes = r.nodes.map(i => wi(i, e))), n.source) {
        let {
            inputId: i,
            ...o
        } = n.source;
        n.source = o, i != null && (n.source.input = e[i])
    }
    if (n.type === "root") return new BO(n);
    if (n.type === "decl") return new LO(n);
    if (n.type === "rule") return new VO(n);
    if (n.type === "comment") return new UO(n);
    if (n.type === "atrule") return new $O(n);
    throw new Error("Unknown node type: " + r.type)
}

function re(...r) {
    return r.length === 1 && Array.isArray(r[0]) && (r = r[0]), new _f(r)
}

function xf(r) {
    if (Rs[r]) return Rs[r];
    let e = globalThis[r],
        t = e.prototype,
        n = r in ky ? ky[r] : void 0,
        i = !!(n && n.every(u => {
            var a, l;
            return !!((l = (a = Object.getOwnPropertyDescriptor(t, u)) == null ? void 0 : a.get) != null && l.toString().includes("[native code]"))
        })),
        o = r in Ly ? Ly[r] : void 0,
        s = !!(o && o.every(u => {
            var a;
            return typeof t[u] == "function" && ((a = t[u]) == null ? void 0 : a.toString().includes("[native code]"))
        }));
    if (i && s && !r1()) return Rs[r] = e.prototype, e.prototype;
    try {
        let u = document.createElement("iframe");
        document.body.appendChild(u);
        let a = u.contentWindow;
        if (!a) return e.prototype;
        let l = a[r].prototype;
        return document.body.removeChild(u), l ? Rs[r] = l : t
    } catch {
        return t
    }
}

function gr(r, e, t) {
    var n;
    let i = `${r}.${String(t)}`;
    if (uc[i]) return uc[i].call(e);
    let o = xf(r),
        s = (n = Object.getOwnPropertyDescriptor(o, t)) == null ? void 0 : n.get;
    return s ? (uc[i] = s, s.call(e)) : e[t]
}

function bb(r, e, t) {
    let n = `${r}.${String(t)}`;
    if (cc[n]) return cc[n].bind(e);
    let o = xf(r)[t];
    return typeof o != "function" ? e[t] : (cc[n] = o, o.bind(e))
}

function n1(r) {
    return gr("Node", r, "childNodes")
}

function i1(r) {
    return gr("Node", r, "parentNode")
}

function o1(r) {
    return gr("Node", r, "parentElement")
}

function s1(r) {
    return gr("Node", r, "textContent")
}

function a1(r, e) {
    return bb("Node", r, "contains")(e)
}

function l1(r) {
    return bb("Node", r, "getRootNode")()
}

function u1(r) {
    return !r || !("host" in r) ? null : gr("ShadowRoot", r, "host")
}

function c1(r) {
    return r.styleSheets
}

function f1(r) {
    return !r || !("shadowRoot" in r) ? null : gr("Element", r, "shadowRoot")
}

function d1(r, e) {
    return gr("Element", r, "querySelector")(e)
}

function p1(r, e) {
    return gr("Element", r, "querySelectorAll")(e)
}

function Sb() {
    return xf("MutationObserver").constructor
}

function Ke(r, e, t = document) {
    let n = {
        capture: !0,
        passive: !0
    };
    return t.addEventListener(r, e, n), () => t.removeEventListener(r, e, n)
}

function vn(r, e, t = {}) {
    let n = null,
        i = 0;
    return function(...o) {
        let s = Date.now();
        !i && t.leading === !1 && (i = s);
        let u = e - (s - i),
            a = this;
        u <= 0 || u > e ? (n && (clearTimeout(n), n = null), i = s, r.apply(a, o)) : !n && t.trailing !== !1 && (n = setTimeout(() => {
            i = t.leading === !1 ? 0 : Date.now(), n = null, r.apply(a, o)
        }, u))
    }
}

function Ci(r, e, t, n, i = window) {
    let o = i.Object.getOwnPropertyDescriptor(r, e);
    return i.Object.defineProperty(r, e, n ? t : {
        set(s) {
            setTimeout(() => {
                t.set.call(this, s)
            }, 0), o && o.set && o.set.call(this, s)
        }
    }), () => Ci(r, e, o || {}, !0)
}

function $r(r, e, t) {
    try {
        if (!(e in r)) return () => {};
        let n = r[e],
            i = t(n);
        return typeof i == "function" && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
            __rrweb_original__: {
                enumerable: !1,
                value: n
            }
        })), r[e] = i, () => {
            r[e] = n
        }
    } catch {
        return () => {}
    }
}

function Cf(r) {
    var e, t, n, i;
    let o = r.document;
    return {
        left: o.scrollingElement ? o.scrollingElement.scrollLeft : r.pageXOffset !== void 0 ? r.pageXOffset : o.documentElement.scrollLeft || o ? .body && ((e = W.parentElement(o.body)) == null ? void 0 : e.scrollLeft) || ((t = o ? .body) == null ? void 0 : t.scrollLeft) || 0,
        top: o.scrollingElement ? o.scrollingElement.scrollTop : r.pageYOffset !== void 0 ? r.pageYOffset : o ? .documentElement.scrollTop || o ? .body && ((n = W.parentElement(o.body)) == null ? void 0 : n.scrollTop) || ((i = o ? .body) == null ? void 0 : i.scrollTop) || 0
    }
}

function If() {
    return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
}

function Tf() {
    return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
}

function Of(r) {
    return r ? r.nodeType === r.ELEMENT_NODE ? r : W.parentElement(r) : null
}

function Xe(r, e, t, n) {
    if (!r) return !1;
    let i = Of(r);
    if (!i) return !1;
    try {
        if (typeof e == "string") {
            if (i.classList.contains(e) || n && i.closest("." + e) !== null) return !0
        } else if (Bs(i, e, n)) return !0
    } catch {}
    return !!(t && (i.matches(t) || n && i.closest(t) !== null))
}

function Eb(r, e) {
    return e.getId(r) !== -1
}

function Ls(r, e, t) {
    return r.tagName === "TITLE" && t.headTitleMutations ? !0 : e.getId(r) === fi
}

function Rf(r, e) {
    if (li(r)) return !1;
    let t = e.getId(r);
    if (!e.has(t)) return !0;
    let n = W.parentNode(r);
    return n && n.nodeType === r.DOCUMENT_NODE ? !1 : n ? Rf(n, e) : !0
}

function Xs(r) {
    return !!r.changedTouches
}

function _b(r = window) {
    "NodeList" in r && !r.NodeList.prototype.forEach && (r.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in r && !r.DOMTokenList.prototype.forEach && (r.DOMTokenList.prototype.forEach = Array.prototype.forEach)
}

function h1(r) {
    let e = {},
        t = (i, o) => {
            let s = {
                value: i,
                parent: o,
                children: []
            };
            return e[i.node.id] = s, s
        },
        n = [];
    for (let i of r) {
        let {
            nextId: o,
            parentId: s
        } = i;
        if (o && o in e) {
            let u = e[o];
            if (u.parent) {
                let a = u.parent.children.indexOf(u);
                u.parent.children.splice(a, 0, t(i, u.parent))
            } else {
                let a = n.indexOf(u);
                n.splice(a, 0, t(i, null))
            }
            continue
        }
        if (s in e) {
            let u = e[s];
            u.children.push(t(i, u));
            continue
        }
        n.push(t(i, null))
    }
    return n
}

function xb(r, e) {
    e(r.value);
    for (let t = r.children.length - 1; t >= 0; t--) xb(r.children[t], e)
}

function Pf(r, e) {
    return !!(r.nodeName === "IFRAME" && e.getMeta(r))
}

function Af(r, e) {
    return !!(r.nodeName === "LINK" && r.nodeType === r.ELEMENT_NODE && r.getAttribute && r.getAttribute("rel") === "stylesheet" && e.getMeta(r))
}

function Cb(r, e) {
    var t, n;
    let i = (n = (t = r.ownerDocument) == null ? void 0 : t.defaultView) == null ? void 0 : n.frameElement;
    if (!i || i === e) return {
        x: 0,
        y: 0,
        relativeScale: 1,
        absoluteScale: 1
    };
    let o = i.getBoundingClientRect(),
        s = Cb(i, e),
        u = o.height / i.clientHeight;
    return {
        x: o.x * s.relativeScale + s.x,
        y: o.y * s.relativeScale + s.y,
        relativeScale: u,
        absoluteScale: s.absoluteScale * u
    }
}

function Js(r) {
    return r ? r instanceof Wc && "shadowRoot" in r ? !!r.shadowRoot : !!W.shadowRoot(r) : !1
}

function Ib(r, e) {
    let t = r[e[0]];
    return e.length === 1 ? t : Ib(t.cssRules[e[1]].cssRules, e.slice(2))
}

function m1(r) {
    let e = [...r],
        t = e.pop();
    return {
        positions: e,
        index: t
    }
}

function g1(r) {
    let e = new Set,
        t = [];
    for (let n = r.length; n--;) {
        let i = r[n];
        e.has(i.id) || (t.push(i), e.add(i.id))
    }
    return t
}

function Mf(r) {
    var e;
    let t = null;
    return "getRootNode" in r && ((e = W.getRootNode(r)) == null ? void 0 : e.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && W.host(W.getRootNode(r)) && (t = W.host(W.getRootNode(r))), t
}

function Tb(r) {
    let e = r,
        t;
    for (; t = Mf(e);) e = t;
    return e
}

function Ob(r) {
    let e = r.ownerDocument;
    if (!e) return !1;
    let t = Tb(r);
    return W.contains(e, t)
}

function Nf(r) {
    let e = r.ownerDocument;
    return e ? W.contains(e, r) || Ob(r) : !1
}

function Fy(r) {
    return "__ln" in r
}

function Hc(r, e) {
    r.delete(e), W.childNodes(e).forEach(t => Hc(r, t))
}

function v1(r, e) {
    let t = [r];
    for (; t.length;) {
        let n = t.pop();
        e.has(n) || (e.add(n), W.childNodes(n).forEach(i => t.push(i)))
    }
}

function $y(r, e, t) {
    return r.size === 0 ? !1 : y1(r, e)
}

function y1(r, e, t) {
    let n = W.parentNode(e);
    return n ? r.has(n) : !1
}

function jy(r, e) {
    return r.size === 0 ? !1 : Pb(r, e)
}

function Pb(r, e) {
    let t = W.parentNode(e);
    return t ? r.has(t) ? !0 : Pb(r, t) : !1
}

function w1(r) {
    ci = r
}

function b1() {
    ci = void 0
}

function By(r) {
    return (...e) => {
        try {
            return r(...e)
        } catch (t) {
            try {
                t._external_ = !0
            } catch {}
            throw t
        }
    }
}

function Ti(r) {
    try {
        if ("composedPath" in r) {
            let e = r.composedPath();
            if (e.length) return e[0]
        } else if ("path" in r && r.path.length) return r.path[0]
    } catch {}
    return r && r.target
}

function Ab(r, e) {
    let t = new qc;
    kr.push(t), t.init(r);
    let n = new(Sb())(z(t.processMutations.bind(t)));
    return n.observe(e, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
    }), n
}

function S1({
    mousemoveCb: r,
    sampling: e,
    doc: t,
    mirror: n
}) {
    if (e.mousemove === !1) return () => {};
    let i = typeof e.mousemove == "number" ? e.mousemove : 50,
        o = typeof e.mousemoveCallback == "number" ? e.mousemoveCallback : 500,
        s = [],
        u, a = vn(z(f => {
            let d = Date.now() - u;
            r(s.map(p => (p.timeOffset -= d, p)), f), s = [], u = null
        }), o),
        l = z(vn(z(f => {
            let d = Ti(f),
                {
                    clientX: p,
                    clientY: h
                } = Xs(f) ? f.changedTouches[0] : f;
            u || (u = bi()), s.push({
                x: p,
                y: h,
                id: n.getId(d),
                timeOffset: bi() - u
            }), a(typeof DragEvent < "u" && f instanceof DragEvent ? G.Drag : f instanceof MouseEvent ? G.MouseMove : G.TouchMove)
        }), i, {
            trailing: !1
        })),
        c = [Ke("mousemove", l, t), Ke("touchmove", l, t), Ke("drag", l, t)];
    return z(() => {
        c.forEach(f => f())
    })
}

function E1({
    mouseInteractionCb: r,
    doc: e,
    mirror: t,
    blockClass: n,
    blockSelector: i,
    sampling: o
}) {
    if (o.mouseInteraction === !1) return () => {};
    let s = o.mouseInteraction === !0 || o.mouseInteraction === void 0 ? {} : o.mouseInteraction,
        u = [],
        a = null,
        l = c => f => {
            let d = Ti(f);
            if (Xe(d, n, i, !0)) return;
            let p = null,
                h = c;
            if ("pointerType" in f) {
                switch (f.pointerType) {
                    case "mouse":
                        p = rr.Mouse;
                        break;
                    case "touch":
                        p = rr.Touch;
                        break;
                    case "pen":
                        p = rr.Pen;
                        break
                }
                p === rr.Touch ? st[c] === st.MouseDown ? h = "TouchStart" : st[c] === st.MouseUp && (h = "TouchEnd") : rr.Pen
            } else Xs(f) && (p = rr.Touch);
            p !== null ? (a = p, (h.startsWith("Touch") && p === rr.Touch || h.startsWith("Mouse") && p === rr.Mouse) && (p = null)) : st[c] === st.Click && (p = a, a = null);
            let g = Xs(f) ? f.changedTouches[0] : f;
            if (!g) return;
            let m = t.getId(d),
                {
                    clientX: b,
                    clientY: v
                } = g;
            z(r)({
                type: st[h],
                id: m,
                x: b,
                y: v,
                ...p !== null && {
                    pointerType: p
                }
            })
        };
    return Object.keys(st).filter(c => Number.isNaN(Number(c)) && !c.endsWith("_Departed") && s[c] !== !1).forEach(c => {
        let f = Lr(c),
            d = l(c);
        if (window.PointerEvent) switch (st[c]) {
            case st.MouseDown:
            case st.MouseUp:
                f = f.replace("mouse", "pointer");
                break;
            case st.TouchStart:
            case st.TouchEnd:
                return
        }
        u.push(Ke(f, d, e))
    }), z(() => {
        u.forEach(c => c())
    })
}

function Mb({
    scrollCb: r,
    doc: e,
    mirror: t,
    blockClass: n,
    blockSelector: i,
    sampling: o
}) {
    let s = z(vn(z(u => {
        let a = Ti(u);
        if (!a || Xe(a, n, i, !0)) return;
        let l = t.getId(a);
        if (a === e && e.defaultView) {
            let c = Cf(e.defaultView);
            r({
                id: l,
                x: c.left,
                y: c.top
            })
        } else r({
            id: l,
            x: a.scrollLeft,
            y: a.scrollTop
        })
    }), o.scroll || 100));
    return Ke("scroll", s, e)
}

function _1({
    viewportResizeCb: r
}, {
    win: e
}) {
    let t = -1,
        n = -1,
        i = z(vn(z(() => {
            let o = If(),
                s = Tf();
            (t !== o || n !== s) && (r({
                width: Number(s),
                height: Number(o)
            }), t = o, n = s)
        }), 200));
    return Ke("resize", i, e)
}

function C1({
    inputCb: r,
    doc: e,
    mirror: t,
    blockClass: n,
    blockSelector: i,
    ignoreClass: o,
    ignoreSelector: s,
    maskInputOptions: u,
    maskInputFn: a,
    sampling: l,
    userTriggeredOnInput: c
}) {
    function f(v) {
        let y = Ti(v),
            S = v.isTrusted,
            _ = y && y.tagName;
        if (y && _ === "OPTION" && (y = W.parentElement(y)), !y || !_ || x1.indexOf(_) < 0 || Xe(y, n, i, !0) || y.classList.contains(o) || s && y.matches(s)) return;
        let x = y.value,
            C = !1,
            E = tf(y) || "";
        E === "radio" || E === "checkbox" ? C = y.checked : (u[_.toLowerCase()] || u[E]) && (x = ef({
            element: y,
            maskInputOptions: u,
            tagName: _,
            type: E,
            value: x,
            maskInputFn: a
        })), d(y, c ? {
            text: x,
            isChecked: C,
            userTriggered: S
        } : {
            text: x,
            isChecked: C
        });
        let I = y.name;
        E === "radio" && I && C && e.querySelectorAll(`input[type="radio"][name="${I}"]`).forEach(R => {
            if (R !== y) {
                let k = R.value;
                d(R, c ? {
                    text: k,
                    isChecked: !C,
                    userTriggered: !1
                } : {
                    text: k,
                    isChecked: !C
                })
            }
        })
    }

    function d(v, y) {
        let S = Vy.get(v);
        if (!S || S.text !== y.text || S.isChecked !== y.isChecked) {
            Vy.set(v, y);
            let _ = t.getId(v);
            z(r)({ ...y,
                id: _
            })
        }
    }
    let h = (l.input === "last" ? ["change"] : ["input", "change"]).map(v => Ke(v, z(f), e)),
        g = e.defaultView;
    if (!g) return () => {
        h.forEach(v => v())
    };
    let m = g.Object.getOwnPropertyDescriptor(g.HTMLInputElement.prototype, "value"),
        b = [
            [g.HTMLInputElement.prototype, "value"],
            [g.HTMLInputElement.prototype, "checked"],
            [g.HTMLSelectElement.prototype, "value"],
            [g.HTMLTextAreaElement.prototype, "value"],
            [g.HTMLSelectElement.prototype, "selectedIndex"],
            [g.HTMLOptionElement.prototype, "selected"]
        ];
    return m && m.set && h.push(...b.map(v => Ci(v[0], v[1], {
        set() {
            z(f)({
                target: this,
                isTrusted: !1
            })
        }
    }, !1, g))), z(() => {
        h.forEach(v => v())
    })
}

function Qs(r) {
    let e = [];

    function t(n, i) {
        if (Ps("CSSGroupingRule") && n.parentRule instanceof CSSGroupingRule || Ps("CSSMediaRule") && n.parentRule instanceof CSSMediaRule || Ps("CSSSupportsRule") && n.parentRule instanceof CSSSupportsRule || Ps("CSSConditionRule") && n.parentRule instanceof CSSConditionRule) {
            let s = Array.from(n.parentRule.cssRules).indexOf(n);
            i.unshift(s)
        } else if (n.parentStyleSheet) {
            let s = Array.from(n.parentStyleSheet.cssRules).indexOf(n);
            i.unshift(s)
        }
        return i
    }
    return t(r, e)
}

function hr(r, e, t) {
    let n, i;
    return r ? (r.ownerNode ? n = e.getId(r.ownerNode) : i = t.getId(r), {
        styleId: i,
        id: n
    }) : {}
}

function I1({
    styleSheetRuleCb: r,
    mirror: e,
    stylesheetManager: t
}, {
    win: n
}) {
    if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype) return () => {};
    let i = n.CSSStyleSheet.prototype.insertRule;
    n.CSSStyleSheet.prototype.insertRule = new Proxy(i, {
        apply: z((c, f, d) => {
            let [p, h] = d, {
                id: g,
                styleId: m
            } = hr(f, e, t.styleMirror);
            return (g && g !== -1 || m && m !== -1) && r({
                id: g,
                styleId: m,
                adds: [{
                    rule: p,
                    index: h
                }]
            }), By(() => c.apply(f, d))()
        })
    }), n.CSSStyleSheet.prototype.addRule = function(c, f, d = this.cssRules.length) {
        let p = `${c} { ${f} }`;
        return n.CSSStyleSheet.prototype.insertRule.apply(this, [p, d])
    };
    let o = n.CSSStyleSheet.prototype.deleteRule;
    n.CSSStyleSheet.prototype.deleteRule = new Proxy(o, {
        apply: z((c, f, d) => {
            let [p] = d, {
                id: h,
                styleId: g
            } = hr(f, e, t.styleMirror);
            return (h && h !== -1 || g && g !== -1) && r({
                id: h,
                styleId: g,
                removes: [{
                    index: p
                }]
            }), By(() => c.apply(f, d))()
        })
    }), n.CSSStyleSheet.prototype.removeRule = function(c) {
        return n.CSSStyleSheet.prototype.deleteRule.apply(this, [c])
    };
    let s;
    n.CSSStyleSheet.prototype.replace && (s = n.CSSStyleSheet.prototype.replace, n.CSSStyleSheet.prototype.replace = new Proxy(s, {
        apply: z((c, f, d) => {
            let [p] = d, {
                id: h,
                styleId: g
            } = hr(f, e, t.styleMirror);
            return (h && h !== -1 || g && g !== -1) && r({
                id: h,
                styleId: g,
                replace: p
            }), c.apply(f, d)
        })
    }));
    let u;
    n.CSSStyleSheet.prototype.replaceSync && (u = n.CSSStyleSheet.prototype.replaceSync, n.CSSStyleSheet.prototype.replaceSync = new Proxy(u, {
        apply: z((c, f, d) => {
            let [p] = d, {
                id: h,
                styleId: g
            } = hr(f, e, t.styleMirror);
            return (h && h !== -1 || g && g !== -1) && r({
                id: h,
                styleId: g,
                replaceSync: p
            }), c.apply(f, d)
        })
    }));
    let a = {};
    As("CSSGroupingRule") ? a.CSSGroupingRule = n.CSSGroupingRule : (As("CSSMediaRule") && (a.CSSMediaRule = n.CSSMediaRule), As("CSSConditionRule") && (a.CSSConditionRule = n.CSSConditionRule), As("CSSSupportsRule") && (a.CSSSupportsRule = n.CSSSupportsRule));
    let l = {};
    return Object.entries(a).forEach(([c, f]) => {
        l[c] = {
            insertRule: f.prototype.insertRule,
            deleteRule: f.prototype.deleteRule
        }, f.prototype.insertRule = new Proxy(l[c].insertRule, {
            apply: z((d, p, h) => {
                let [g, m] = h, {
                    id: b,
                    styleId: v
                } = hr(p.parentStyleSheet, e, t.styleMirror);
                return (b && b !== -1 || v && v !== -1) && r({
                    id: b,
                    styleId: v,
                    adds: [{
                        rule: g,
                        index: [...Qs(p), m || 0]
                    }]
                }), d.apply(p, h)
            })
        }), f.prototype.deleteRule = new Proxy(l[c].deleteRule, {
            apply: z((d, p, h) => {
                let [g] = h, {
                    id: m,
                    styleId: b
                } = hr(p.parentStyleSheet, e, t.styleMirror);
                return (m && m !== -1 || b && b !== -1) && r({
                    id: m,
                    styleId: b,
                    removes: [{
                        index: [...Qs(p), g]
                    }]
                }), d.apply(p, h)
            })
        })
    }), z(() => {
        n.CSSStyleSheet.prototype.insertRule = i, n.CSSStyleSheet.prototype.deleteRule = o, s && (n.CSSStyleSheet.prototype.replace = s), u && (n.CSSStyleSheet.prototype.replaceSync = u), Object.entries(a).forEach(([c, f]) => {
            f.prototype.insertRule = l[c].insertRule, f.prototype.deleteRule = l[c].deleteRule
        })
    })
}

function Nb({
    mirror: r,
    stylesheetManager: e
}, t) {
    var n, i, o;
    let s = null;
    t.nodeName === "#document" ? s = r.getId(t) : s = r.getId(W.host(t));
    let u = t.nodeName === "#document" ? (n = t.defaultView) == null ? void 0 : n.Document : (o = (i = t.ownerDocument) == null ? void 0 : i.defaultView) == null ? void 0 : o.ShadowRoot,
        a = u ? .prototype ? Object.getOwnPropertyDescriptor(u ? .prototype, "adoptedStyleSheets") : void 0;
    return s === null || s === -1 || !u || !a ? () => {} : (Object.defineProperty(t, "adoptedStyleSheets", {
        configurable: a.configurable,
        enumerable: a.enumerable,
        get() {
            var l;
            return (l = a.get) == null ? void 0 : l.call(this)
        },
        set(l) {
            var c;
            let f = (c = a.set) == null ? void 0 : c.call(this, l);
            if (s !== null && s !== -1) try {
                e.adoptStyleSheets(l, s)
            } catch {}
            return f
        }
    }), z(() => {
        Object.defineProperty(t, "adoptedStyleSheets", {
            configurable: a.configurable,
            enumerable: a.enumerable,
            get: a.get,
            set: a.set
        })
    }))
}

function T1({
    styleDeclarationCb: r,
    mirror: e,
    ignoreCSSAttributes: t,
    stylesheetManager: n
}, {
    win: i
}) {
    let o = i.CSSStyleDeclaration.prototype.setProperty;
    i.CSSStyleDeclaration.prototype.setProperty = new Proxy(o, {
        apply: z((u, a, l) => {
            var c;
            let [f, d, p] = l;
            if (t.has(f)) return o.apply(a, [f, d, p]);
            let {
                id: h,
                styleId: g
            } = hr((c = a.parentRule) == null ? void 0 : c.parentStyleSheet, e, n.styleMirror);
            return (h && h !== -1 || g && g !== -1) && r({
                id: h,
                styleId: g,
                set: {
                    property: f,
                    value: d,
                    priority: p
                },
                index: Qs(a.parentRule)
            }), u.apply(a, l)
        })
    });
    let s = i.CSSStyleDeclaration.prototype.removeProperty;
    return i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(s, {
        apply: z((u, a, l) => {
            var c;
            let [f] = l;
            if (t.has(f)) return s.apply(a, [f]);
            let {
                id: d,
                styleId: p
            } = hr((c = a.parentRule) == null ? void 0 : c.parentStyleSheet, e, n.styleMirror);
            return (d && d !== -1 || p && p !== -1) && r({
                id: d,
                styleId: p,
                remove: {
                    property: f
                },
                index: Qs(a.parentRule)
            }), u.apply(a, l)
        })
    }), z(() => {
        i.CSSStyleDeclaration.prototype.setProperty = o, i.CSSStyleDeclaration.prototype.removeProperty = s
    })
}

function O1({
    mediaInteractionCb: r,
    blockClass: e,
    blockSelector: t,
    mirror: n,
    sampling: i,
    doc: o
}) {
    let s = z(a => vn(z(l => {
            let c = Ti(l);
            if (!c || Xe(c, e, t, !0)) return;
            let {
                currentTime: f,
                volume: d,
                muted: p,
                playbackRate: h,
                loop: g
            } = c;
            r({
                type: a,
                id: n.getId(c),
                currentTime: f,
                volume: d,
                muted: p,
                playbackRate: h,
                loop: g
            })
        }), i.media || 500)),
        u = [Ke("play", s(an.Play), o), Ke("pause", s(an.Pause), o), Ke("seeked", s(an.Seeked), o), Ke("volumechange", s(an.VolumeChange), o), Ke("ratechange", s(an.RateChange), o)];
    return z(() => {
        u.forEach(a => a())
    })
}

function R1({
    fontCb: r,
    doc: e
}) {
    let t = e.defaultView;
    if (!t) return () => {};
    let n = [],
        i = new WeakMap,
        o = t.FontFace;
    t.FontFace = function(a, l, c) {
        let f = new o(a, l, c);
        return i.set(f, {
            family: a,
            buffer: typeof l != "string",
            descriptors: c,
            fontSource: typeof l == "string" ? l : JSON.stringify(Array.from(new Uint8Array(l)))
        }), f
    };
    let s = $r(e.fonts, "add", function(u) {
        return function(a) {
            return setTimeout(z(() => {
                let l = i.get(a);
                l && (r(l), i.delete(a))
            }), 0), u.apply(this, [a])
        }
    });
    return n.push(() => {
        t.FontFace = o
    }), n.push(s), z(() => {
        n.forEach(u => u())
    })
}

function P1(r) {
    let {
        doc: e,
        mirror: t,
        blockClass: n,
        blockSelector: i,
        selectionCb: o
    } = r, s = !0, u = z(() => {
        let a = e.getSelection();
        if (!a || s && a ? .isCollapsed) return;
        s = a.isCollapsed || !1;
        let l = [],
            c = a.rangeCount || 0;
        for (let f = 0; f < c; f++) {
            let d = a.getRangeAt(f),
                {
                    startContainer: p,
                    startOffset: h,
                    endContainer: g,
                    endOffset: m
                } = d;
            Xe(p, n, i, !0) || Xe(g, n, i, !0) || l.push({
                start: t.getId(p),
                startOffset: h,
                end: t.getId(g),
                endOffset: m
            })
        }
        o({
            ranges: l
        })
    });
    return u(), Ke("selectionchange", u)
}

function A1({
    doc: r,
    customElementCb: e
}) {
    let t = r.defaultView;
    return !t || !t.customElements ? () => {} : $r(t.customElements, "define", function(i) {
        return function(o, s, u) {
            try {
                e({
                    define: {
                        name: o
                    }
                })
            } catch {
                console.warn(`Custom element callback failed for ${o}`)
            }
            return i.apply(this, [o, s, u])
        }
    })
}

function M1(r, e) {
    let {
        mutationCb: t,
        mousemoveCb: n,
        mouseInteractionCb: i,
        scrollCb: o,
        viewportResizeCb: s,
        inputCb: u,
        mediaInteractionCb: a,
        styleSheetRuleCb: l,
        styleDeclarationCb: c,
        canvasMutationCb: f,
        fontCb: d,
        selectionCb: p,
        customElementCb: h
    } = r;
    r.mutationCb = (...g) => {
        e.mutation && e.mutation(...g), t(...g)
    }, r.mousemoveCb = (...g) => {
        e.mousemove && e.mousemove(...g), n(...g)
    }, r.mouseInteractionCb = (...g) => {
        e.mouseInteraction && e.mouseInteraction(...g), i(...g)
    }, r.scrollCb = (...g) => {
        e.scroll && e.scroll(...g), o(...g)
    }, r.viewportResizeCb = (...g) => {
        e.viewportResize && e.viewportResize(...g), s(...g)
    }, r.inputCb = (...g) => {
        e.input && e.input(...g), u(...g)
    }, r.mediaInteractionCb = (...g) => {
        e.mediaInteaction && e.mediaInteaction(...g), a(...g)
    }, r.styleSheetRuleCb = (...g) => {
        e.styleSheetRule && e.styleSheetRule(...g), l(...g)
    }, r.styleDeclarationCb = (...g) => {
        e.styleDeclaration && e.styleDeclaration(...g), c(...g)
    }, r.canvasMutationCb = (...g) => {
        e.canvasMutation && e.canvasMutation(...g), f(...g)
    }, r.fontCb = (...g) => {
        e.font && e.font(...g), d(...g)
    }, r.selectionCb = (...g) => {
        e.selection && e.selection(...g), p(...g)
    }, r.customElementCb = (...g) => {
        e.customElement && e.customElement(...g), h(...g)
    }
}

function N1(r, e = {}) {
    let t = r.doc.defaultView;
    if (!t) return () => {};
    M1(r, e);
    let n;
    r.recordDOM && (n = Ab(r, r.doc));
    let i = S1(r),
        o = E1(r),
        s = Mb(r),
        u = _1(r, {
            win: t
        }),
        a = C1(r),
        l = O1(r),
        c = () => {},
        f = () => {},
        d = () => {},
        p = () => {};
    r.recordDOM && (c = I1(r, {
        win: t
    }), f = Nb(r, r.doc), d = T1(r, {
        win: t
    }), r.collectFonts && (p = R1(r)));
    let h = P1(r),
        g = A1(r),
        m = [];
    for (let b of r.plugins) m.push(b.observer(b.callback, t, b.options));
    return z(() => {
        kr.forEach(b => b.reset()), n ? .disconnect(), i(), o(), s(), u(), a(), l(), c(), f(), d(), p(), h(), g(), m.forEach(b => b())
    })
}

function Ps(r) {
    return typeof window[r] < "u"
}

function As(r) {
    return !!(typeof window[r] < "u" && window[r].prototype && "insertRule" in window[r].prototype && "deleteRule" in window[r].prototype)
}

function L1(r, e) {
    let t = Wy.get(r);
    return t || (t = new Map, Wy.set(r, t)), t.has(e) || t.set(e, []), t.get(e)
}

function Fs(r, e, t) {
    if (r instanceof Array) return r.map(n => Fs(n, e, t));
    if (r === null) return r;
    if (r instanceof Float32Array || r instanceof Float64Array || r instanceof Int32Array || r instanceof Uint32Array || r instanceof Uint8Array || r instanceof Uint16Array || r instanceof Int16Array || r instanceof Int8Array || r instanceof Uint8ClampedArray) return {
        rr_type: r.constructor.name,
        args: [Object.values(r)]
    };
    if (r instanceof ArrayBuffer) {
        let n = r.constructor.name,
            i = k1(r);
        return {
            rr_type: n,
            base64: i
        }
    } else {
        if (r instanceof DataView) return {
            rr_type: r.constructor.name,
            args: [Fs(r.buffer, e, t), r.byteOffset, r.byteLength]
        };
        if (r instanceof HTMLImageElement) {
            let n = r.constructor.name,
                {
                    src: i
                } = r;
            return {
                rr_type: n,
                src: i
            }
        } else if (r instanceof HTMLCanvasElement) {
            let n = "HTMLImageElement",
                i = r.toDataURL();
            return {
                rr_type: n,
                src: i
            }
        } else {
            if (r instanceof ImageData) return {
                rr_type: r.constructor.name,
                args: [Fs(r.data, e, t), r.width, r.height]
            };
            if (Lb(r, e) || typeof r == "object") {
                let n = r.constructor.name,
                    i = Db(r, e, t);
                return {
                    rr_type: n,
                    index: i
                }
            }
        }
    }
    return r
}

function F1(r, e, t, n) {
    let i = [],
        o = Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype);
    for (let s of o) try {
        if (typeof e.CanvasRenderingContext2D.prototype[s] != "function") continue;
        let u = $r(e.CanvasRenderingContext2D.prototype, s, function(a) {
            return function(...l) {
                return Xe(this.canvas, t, n, !0) || setTimeout(() => {
                    let c = kb(l, e, this);
                    r(this.canvas, {
                        type: yn["2D"],
                        property: s,
                        args: c
                    })
                }, 0), a.apply(this, l)
            }
        });
        i.push(u)
    } catch {
        let u = Ci(e.CanvasRenderingContext2D.prototype, s, {
            set(a) {
                r(this.canvas, {
                    type: yn["2D"],
                    property: s,
                    args: [a],
                    setter: !0
                })
            }
        });
        i.push(u)
    }
    return () => {
        i.forEach(s => s())
    }
}

function U1(r) {
    return r === "experimental-webgl" ? "webgl" : r
}

function Gy(r, e, t, n) {
    let i = [];
    try {
        let o = $r(r.HTMLCanvasElement.prototype, "getContext", function(s) {
            return function(u, ...a) {
                if (!Xe(this, e, t, !0)) {
                    let l = U1(u);
                    if ("__context" in this || (this.__context = l), n && ["webgl", "webgl2"].includes(l))
                        if (a[0] && typeof a[0] == "object") {
                            let c = a[0];
                            c.preserveDrawingBuffer || (c.preserveDrawingBuffer = !0)
                        } else a.splice(0, 1, {
                            preserveDrawingBuffer: !0
                        })
                }
                return s.apply(this, [u, ...a])
            }
        });
        i.push(o)
    } catch {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext")
    }
    return () => {
        i.forEach(o => o())
    }
}

function zy(r, e, t, n, i, o) {
    let s = [],
        u = Object.getOwnPropertyNames(r);
    for (let a of u)
        if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(a)) try {
            if (typeof r[a] != "function") continue;
            let l = $r(r, a, function(c) {
                return function(...f) {
                    let d = c.apply(this, f);
                    if (Db(d, o, this), "tagName" in this.canvas && !Xe(this.canvas, n, i, !0)) {
                        let p = kb(f, o, this),
                            h = {
                                type: e,
                                property: a,
                                args: p
                            };
                        t(this.canvas, h)
                    }
                    return d
                }
            });
            s.push(l)
        } catch {
            let l = Ci(r, a, {
                set(c) {
                    t(this.canvas, {
                        type: e,
                        property: a,
                        args: [c],
                        setter: !0
                    })
                }
            });
            s.push(l)
        }
    return s
}

function $1(r, e, t, n) {
    let i = [];
    return i.push(...zy(e.WebGLRenderingContext.prototype, yn.WebGL, r, t, n, e)), typeof e.WebGL2RenderingContext < "u" && i.push(...zy(e.WebGL2RenderingContext.prototype, yn.WebGL2, r, t, n, e)), () => {
        i.forEach(o => o())
    }
}

function B1(r) {
    let e;
    try {
        if (e = qy && (window.URL || window.webkitURL).createObjectURL(qy), !e) throw "";
        let t = new Worker(e, {
            name: r ? .name
        });
        return t.addEventListener("error", () => {
            (window.URL || window.webkitURL).revokeObjectURL(e)
        }), t
    } catch {
        return new Worker("data:text/javascript;base64," + Fb, {
            name: r ? .name
        })
    } finally {
        e && (window.URL || window.webkitURL).revokeObjectURL(e)
    }
}

function _t(r = {}) {
    let {
        emit: e,
        checkoutEveryNms: t,
        checkoutEveryNth: n,
        blockClass: i = "rr-block",
        blockSelector: o = null,
        ignoreClass: s = "rr-ignore",
        ignoreSelector: u = null,
        maskTextClass: a = "rr-mask",
        maskTextSelector: l = null,
        inlineStylesheet: c = !0,
        maskAllInputs: f,
        maskInputOptions: d,
        slimDOMOptions: p,
        maskInputFn: h,
        maskTextFn: g,
        hooks: m,
        packFn: b,
        sampling: v = {},
        dataURLOptions: y = {},
        mousemoveWait: S,
        recordDOM: _ = !0,
        recordCanvas: x = !1,
        recordCrossOriginIframes: C = !1,
        recordAfter: E = r.recordAfter === "DOMContentLoaded" ? r.recordAfter : "load",
        userTriggeredOnInput: I = !1,
        collectFonts: R = !1,
        inlineImages: k = !1,
        plugins: D,
        keepIframeSrcFn: P = () => !1,
        ignoreCSSAttributes: X = new Set([]),
        errorHandler: Z
    } = r;
    w1(Z);
    let L = C ? window.parent === window : !0,
        F = !1;
    if (!L) try {
        window.parent.document && (F = !1)
    } catch {
        F = !0
    }
    if (L && !e) throw new Error("emit function is required");
    if (!L && !F) return () => {};
    S !== void 0 && v.mousemove === void 0 && (v.mousemove = S), At.reset();
    let Q = f === !0 ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            password: !0
        } : d !== void 0 ? d : {
            password: !0
        },
        J = p === !0 || p === "all" ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: p === "all",
            headMetaDescKeywords: p === "all",
            headTitleMutations: p === "all"
        } : p || {};
    _b();
    let A, ye = 0,
        je = q => {
            for (let rt of D || []) rt.eventProcessor && (q = rt.eventProcessor(q));
            return b && !F && (q = b(q)), q
        };
    Te = (q, rt) => {
        var be;
        let se = q;
        if (se.timestamp = bi(), (be = kr[0]) != null && be.isFrozen() && se.type !== Y.FullSnapshot && !(se.type === Y.IncrementalSnapshot && se.data.source === G.Mutation) && kr.forEach(Lt => Lt.unfreeze()), L) e ? .(je(se), rt);
        else if (F) {
            let Lt = {
                type: "rrweb",
                event: je(se),
                origin: window.location.origin,
                isCheckout: rt
            };
            window.parent.postMessage(Lt, "*")
        }
        if (se.type === Y.FullSnapshot) A = se, ye = 0;
        else if (se.type === Y.IncrementalSnapshot) {
            if (se.data.source === G.Mutation && se.data.isAttachIframe) return;
            ye++;
            let Lt = n && ye >= n,
                ie = t && se.timestamp - A.timestamp > t;
            (Lt || ie) && Us(!0)
        }
    };
    let Oe = q => {
            Te({
                type: Y.IncrementalSnapshot,
                data: {
                    source: G.Mutation,
                    ...q
                }
            })
        },
        we = q => Te({
            type: Y.IncrementalSnapshot,
            data: {
                source: G.Scroll,
                ...q
            }
        }),
        oe = q => Te({
            type: Y.IncrementalSnapshot,
            data: {
                source: G.CanvasMutation,
                ...q
            }
        }),
        ht = q => Te({
            type: Y.IncrementalSnapshot,
            data: {
                source: G.AdoptedStyleSheet,
                ...q
            }
        }),
        De = new Jc({
            mutationCb: Oe,
            adoptedStyleSheetCb: ht
        }),
        Re = new Yc({
            mirror: At,
            mutationCb: Oe,
            stylesheetManager: De,
            recordCrossOriginIframes: C,
            wrappedEmit: Te
        });
    for (let q of D || []) q.getMirror && q.getMirror({
        nodeMirror: At,
        crossOriginIframeMirror: Re.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: Re.crossOriginIframeStyleMirror
    });
    let Ht = new Zc;
    fc = new Xc({
        recordCanvas: x,
        mutationCb: oe,
        win: window,
        blockClass: i,
        blockSelector: o,
        mirror: At,
        sampling: v.canvas,
        dataURLOptions: y
    });
    let Ze = new Kc({
        mutationCb: Oe,
        scrollCb: we,
        bypassOptions: {
            blockClass: i,
            blockSelector: o,
            maskTextClass: a,
            maskTextSelector: l,
            inlineStylesheet: c,
            maskInputOptions: Q,
            dataURLOptions: y,
            maskTextFn: g,
            maskInputFn: h,
            recordCanvas: x,
            inlineImages: k,
            sampling: v,
            slimDOMOptions: J,
            iframeManager: Re,
            stylesheetManager: De,
            canvasManager: fc,
            keepIframeSrcFn: P,
            processedNodeManager: Ht
        },
        mirror: At
    });
    Us = (q = !1) => {
        if (!_) return;
        Te({
            type: Y.Meta,
            data: {
                href: window.location.href,
                width: Tf(),
                height: If()
            }
        }, q), De.reset(), Ze.init(), kr.forEach(be => be.lock());
        let rt = bC(document, {
            mirror: At,
            blockClass: i,
            blockSelector: o,
            maskTextClass: a,
            maskTextSelector: l,
            inlineStylesheet: c,
            maskAllInputs: Q,
            maskTextFn: g,
            maskInputFn: h,
            slimDOM: J,
            dataURLOptions: y,
            recordCanvas: x,
            inlineImages: k,
            onSerialize: be => {
                Pf(be, At) && Re.addIframe(be), Af(be, At) && De.trackLinkElement(be), Js(be) && Ze.addShadowRoot(W.shadowRoot(be), document)
            },
            onIframeLoad: (be, se) => {
                Re.attachIframe(be, se), Ze.observeAttachShadow(be)
            },
            onStylesheetLoad: (be, se) => {
                De.attachLinkElement(be, se)
            },
            keepIframeSrcFn: P
        });
        if (!rt) return console.warn("Failed to snapshot the document");
        Te({
            type: Y.FullSnapshot,
            data: {
                node: rt,
                initialOffset: Cf(window)
            }
        }, q), kr.forEach(be => be.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && De.adoptStyleSheets(document.adoptedStyleSheets, At.getId(document))
    };
    try {
        let q = [],
            rt = se => {
                var Lt;
                return z(N1)({
                    mutationCb: Oe,
                    mousemoveCb: (ie, Qa) => Te({
                        type: Y.IncrementalSnapshot,
                        data: {
                            source: Qa,
                            positions: ie
                        }
                    }),
                    mouseInteractionCb: ie => Te({
                        type: Y.IncrementalSnapshot,
                        data: {
                            source: G.MouseInteraction,
                            ...ie
                        }
                    }),
                    scrollCb: we,
                    viewportResizeCb: ie => Te({
                        type: Y.IncrementalSnapshot,
                        data: {
                            source: G.ViewportResize,
                            ...ie
                        }
                    }),
                    inputCb: ie => Te({
                        type: Y.IncrementalSnapshot,
                        data: {
                            source: G.Input,
                            ...ie
                        }
                    }),
                    mediaInteractionCb: ie => Te({
                        type: Y.IncrementalSnapshot,
                        data: {
                            source: G.MediaInteraction,
                            ...ie
                        }
                    }),
                    styleSheetRuleCb: ie => Te({
                        type: Y.IncrementalSnapshot,
                        data: {
                            source: G.StyleSheetRule,
                            ...ie
                        }
                    }),
                    styleDeclarationCb: ie => Te({
                        type: Y.IncrementalSnapshot,
                        data: {
                            source: G.StyleDeclaration,
                            ...ie
                        }
                    }),
                    canvasMutationCb: oe,
                    fontCb: ie => Te({
                        type: Y.IncrementalSnapshot,
                        data: {
                            source: G.Font,
                            ...ie
                        }
                    }),
                    selectionCb: ie => {
                        Te({
                            type: Y.IncrementalSnapshot,
                            data: {
                                source: G.Selection,
                                ...ie
                            }
                        })
                    },
                    customElementCb: ie => {
                        Te({
                            type: Y.IncrementalSnapshot,
                            data: {
                                source: G.CustomElement,
                                ...ie
                            }
                        })
                    },
                    blockClass: i,
                    ignoreClass: s,
                    ignoreSelector: u,
                    maskTextClass: a,
                    maskTextSelector: l,
                    maskInputOptions: Q,
                    inlineStylesheet: c,
                    sampling: v,
                    recordDOM: _,
                    recordCanvas: x,
                    inlineImages: k,
                    userTriggeredOnInput: I,
                    collectFonts: R,
                    doc: se,
                    maskInputFn: h,
                    maskTextFn: g,
                    keepIframeSrcFn: P,
                    blockSelector: o,
                    slimDOMOptions: J,
                    dataURLOptions: y,
                    mirror: At,
                    iframeManager: Re,
                    stylesheetManager: De,
                    shadowDomManager: Ze,
                    processedNodeManager: Ht,
                    canvasManager: fc,
                    ignoreCSSAttributes: X,
                    plugins: ((Lt = D ? .filter(ie => ie.observer)) == null ? void 0 : Lt.map(ie => ({
                        observer: ie.observer,
                        options: ie.options,
                        callback: Qa => Te({
                            type: Y.Plugin,
                            data: {
                                plugin: ie.name,
                                payload: Qa
                            }
                        })
                    }))) || []
                }, m)
            };
        Re.addLoadListener(se => {
            try {
                q.push(rt(se.contentDocument))
            } catch (Lt) {
                console.warn(Lt)
            }
        });
        let be = () => {
            Us(), q.push(rt(document)), ta = !0
        };
        return document.readyState === "interactive" || document.readyState === "complete" ? be() : (q.push(Ke("DOMContentLoaded", () => {
            Te({
                type: Y.DomContentLoaded,
                data: {}
            }), E === "DOMContentLoaded" && be()
        })), q.push(Ke("load", () => {
            Te({
                type: Y.Load,
                data: {}
            }), E === "load" && be()
        }, window))), () => {
            q.forEach(se => se()), Ht.destroy(), ta = !1, b1()
        }
    } catch (q) {
        console.warn(q)
    }
}
var Ox, Rx, T, Xv, Px, Ax, Jv, $e, Zv, Qv, cs, Mx, Zu, Qu, Ye, $s, ey, Qx, eC, tC, rC, oC, sC, fi, on, ty, lC, uC, ry, SC, l3, nf, ue, rw, xC, CC, IC, Mt, ny, iy, pc, of , Si, oy, hc, iw, OC, ra, fs, RC, PC, AC, MC, vc, na, NC, yc, ia, DC, kC, LC, FC, sy, ay, UC, $C, tc, jC, wc, ow, VC, WC, ly, ds, bc, Sc, GC, rc, uy, zC, nc, qC, cy, Vs, oa, sw, Ms, Ns, aw, lw, uw, fy, HC, YC, KC, XC, cw, JC, Ec, sa, fw, dw, pw, hw, ZC, mw, sf, af, gw, nr, Fr, QC, bw, Sw, di, lf, _c, Ew, eI, xc, uf, ic, dy, ps, py, hs, ni, ms, gs, vs, tI, rI, nI, iI, oI, sI, aI, lI, uI, cI, ys, ws, fI, hy, dI, _w, Ws, cf, xw, Cw, Iw, fn, Ei, pi, Tw, Ow, pI, Gs, ff, hI, mI, gI, vI, yI, my, gy, bI, SI, EI, _I, xI, df, Gt, CI, II, TI, OI, RI, vy, PI, AI, MI, NI, DI, dn, Ic, pn, Aw, kI, LI, FI, UI, Tc, $I, jI, BI, VI, WI, hi, GI, zI, qI, HI, YI, KI, XI, JI, ZI, QI, Mw, eT, tT, pf, rT, nT, Nw, iT, Dw, kw, oT, sT, aT, lT, Lw, Fw, uT, cT, me, fT, dT, Et, hf, ce, Uw, mT, gT, vT, Nt, wy, by, Oc, mf, _i, Sy, Rc, jw, wT, aa, bs, bT, ST, ET, _T, Mc, la, xT, Nc, ua, CT, IT, TT, OT, Ey, _y, RT, PT, oc, AT, Dc, Bw, NT, DT, xy, Ss, kc, Lc, kT, sc, Cy, LT, ac, FT, Iy, qs, ca, Vw, Ds, ks, Ww, Gw, zw, Ty, UT, $T, jT, BT, qw, VT, Fc, fa, Hw, Yw, Kw, Xw, WT, Jw, gf, vf, Zw, ir, Ur, GT, rb, nb, gi, yf, Uc, ib, zT, $c, wf, lc, Oy, Es, Ry, _s, oi, xs, Cs, Is, qT, HT, YT, KT, XT, JT, ZT, QT, eO, tO, Ts, Os, rO, Py, nO, ob, Hs, bf, sb, ab, lb, hn, xi, vi, ub, cb, iO, Ys, Sf, oO, sO, aO, lO, uO, Ay, My, fO, dO, pO, hO, mO, Ef, zt, gO, vO, yO, wO, bO, Ny, SO, EO, _O, xO, CO, mn, Bc, gn, pb, IO, TO, OO, RO, Vc, PO, AO, MO, NO, DO, yi, kO, LO, FO, UO, $O, jO, BO, VO, WO, GO, hb, zO, qO, _f, HO, YO, mb, KO, gb, vb, XO, JO, ZO, QO, yb, wb, e1, t1, ge, Wc, ky, Ly, Rs, r1, uc, cc, W, sn, Gc, bi, Zs, Ii, Y, G, st, rr, yn, an, Rb, zc, Uy, qc, ci, z, kr, x1, Vy, ea, Yc, Kc, cn, D1, ai, k1, Wy, Db, kb, Lb, Fb, j1, qy, Xc, Jc, Zc, Te, Us, fc, ta, At, Hy, B3, V3, W3, da = w(() => {
    "use strict";
    Ox = Object.defineProperty, Rx = (r, e, t) => e in r ? Ox(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, T = (r, e, t) => Rx(r, typeof e != "symbol" ? e + "" : e, t), Px = Object.defineProperty, Ax = (r, e, t) => e in r ? Px(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, Jv = (r, e, t) => Ax(r, typeof e != "symbol" ? e + "" : e, t), $e = (r => (r[r.Document = 0] = "Document", r[r.DocumentType = 1] = "DocumentType", r[r.Element = 2] = "Element", r[r.Text = 3] = "Text", r[r.CDATA = 4] = "CDATA", r[r.Comment = 5] = "Comment", r))($e || {}), Zv = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
    }, Qv = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
    }, cs = {}, Mx = () => !!globalThis.Zone;
    Zu = {};
    Qu = {};
    Ye = {
        childNodes: Nx,
        parentNode: Dx,
        parentElement: kx,
        textContent: Lx,
        contains: Fx,
        getRootNode: Ux,
        host: $x,
        styleSheets: jx,
        shadowRoot: Bx,
        querySelector: Vx,
        querySelectorAll: Wx,
        mutationObserver: Gx
    };
    $s = class {
        constructor() {
            Jv(this, "idNodeMap", new Map), Jv(this, "nodeMetaMap", new WeakMap)
        }
        getId(e) {
            var t;
            return e ? ((t = this.getMeta(e)) == null ? void 0 : t.id) ? ? -1 : -1
        }
        getNode(e) {
            return this.idNodeMap.get(e) || null
        }
        getIds() {
            return Array.from(this.idNodeMap.keys())
        }
        getMeta(e) {
            return this.nodeMetaMap.get(e) || null
        }
        removeNodeFromMap(e) {
            let t = this.getId(e);
            this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach(n => this.removeNodeFromMap(n))
        }
        has(e) {
            return this.idNodeMap.has(e)
        }
        hasNode(e) {
            return this.nodeMetaMap.has(e)
        }
        add(e, t) {
            let n = t.id;
            this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
        }
        replace(e, t) {
            let n = this.getNode(e);
            if (n) {
                let i = this.nodeMetaMap.get(n);
                i && this.nodeMetaMap.set(t, i)
            }
            this.idNodeMap.set(e, t)
        }
        reset() {
            this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
    };
    ey = "__rrweb_original__";
    Qx = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, eC = /^(?:[a-z+]+:)?\/\//i, tC = /^www\..*/i, rC = /^(data:)([^,]*),(.*)/i;
    oC = 1, sC = new RegExp("[^a-z0-9-_:]"), fi = -2;
    lC = /^[^ \t\n\r\u000c]+/, uC = /^[, \t\n\r\u000c]+/;
    ry = new WeakMap;
    SC = /(max|min)-device-(width|height)/, l3 = new RegExp(SC.source, "g");
    nf = {
        exports: {}
    }, ue = String, rw = function() {
        return {
            isColorSupported: !1,
            reset: ue,
            bold: ue,
            dim: ue,
            italic: ue,
            underline: ue,
            inverse: ue,
            hidden: ue,
            strikethrough: ue,
            black: ue,
            red: ue,
            green: ue,
            yellow: ue,
            blue: ue,
            magenta: ue,
            cyan: ue,
            white: ue,
            gray: ue,
            bgBlack: ue,
            bgRed: ue,
            bgGreen: ue,
            bgYellow: ue,
            bgBlue: ue,
            bgMagenta: ue,
            bgCyan: ue,
            bgWhite: ue
        }
    };
    nf.exports = rw();
    nf.exports.createColors = rw;
    xC = nf.exports, CC = {}, IC = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: CC
    }, Symbol.toStringTag, {
        value: "Module"
    })), Mt = _C(IC), ny = xC, iy = Mt, pc = class nw extends Error {
        constructor(e, t, n, i, o, s) {
            super(e), this.name = "CssSyntaxError", this.reason = e, o && (this.file = o), i && (this.source = i), s && (this.plugin = s), typeof t < "u" && typeof n < "u" && (typeof t == "number" ? (this.line = t, this.column = n) : (this.line = t.line, this.column = t.column, this.endLine = n.line, this.endColumn = n.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, nw)
        }
        setMessage() {
            this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(e) {
            if (!this.source) return "";
            let t = this.source;
            e == null && (e = ny.isColorSupported), iy && e && (t = iy(t));
            let n = t.split(/\r?\n/),
                i = Math.max(this.line - 3, 0),
                o = Math.min(this.line + 2, n.length),
                s = String(o).length,
                u, a;
            if (e) {
                let {
                    bold: l,
                    gray: c,
                    red: f
                } = ny.createColors(!0);
                u = d => l(f(d)), a = d => c(d)
            } else u = a = l => l;
            return n.slice(i, o).map((l, c) => {
                let f = i + 1 + c,
                    d = " " + (" " + f).slice(-s) + " | ";
                if (f === this.line) {
                    let p = a(d.replace(/\d/g, " ")) + l.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                    return u(">") + a(d) + l + `
 ` + p + u("^")
                }
                return " " + a(d) + l
            }).join(`
`)
        }
        toString() {
            let e = this.showSourceCode();
            return e && (e = `

` + e + `
`), this.name + ": " + this.message + e
        }
    }, of = pc;
    pc.default = pc;
    Si = {};
    Si.isClean = Symbol("isClean");
    Si.my = Symbol("my");
    oy = {
        after: `
`,
        beforeClose: `
`,
        beforeComment: `
`,
        beforeDecl: `
`,
        beforeOpen: " ",
        beforeRule: `
`,
        colon: ": ",
        commentLeft: " ",
        commentRight: " ",
        emptyBody: "",
        indent: "    ",
        semicolon: !1
    };
    hc = class {
        constructor(e) {
            this.builder = e
        }
        atrule(e, t) {
            let n = "@" + e.name,
                i = e.params ? this.rawValue(e, "params") : "";
            if (typeof e.raws.afterName < "u" ? n += e.raws.afterName : i && (n += " "), e.nodes) this.block(e, n + i);
            else {
                let o = (e.raws.between || "") + (t ? ";" : "");
                this.builder(n + i + o, e)
            }
        }
        beforeAfter(e, t) {
            let n;
            e.type === "decl" ? n = this.raw(e, null, "beforeDecl") : e.type === "comment" ? n = this.raw(e, null, "beforeComment") : t === "before" ? n = this.raw(e, null, "beforeRule") : n = this.raw(e, null, "beforeClose");
            let i = e.parent,
                o = 0;
            for (; i && i.type !== "root";) o += 1, i = i.parent;
            if (n.includes(`
`)) {
                let s = this.raw(e, null, "indent");
                if (s.length)
                    for (let u = 0; u < o; u++) n += s
            }
            return n
        }
        block(e, t) {
            let n = this.raw(e, "between", "beforeOpen");
            this.builder(t + n + "{", e, "start");
            let i;
            e.nodes && e.nodes.length ? (this.body(e), i = this.raw(e, "after")) : i = this.raw(e, "after", "emptyBody"), i && this.builder(i), this.builder("}", e, "end")
        }
        body(e) {
            let t = e.nodes.length - 1;
            for (; t > 0 && e.nodes[t].type === "comment";) t -= 1;
            let n = this.raw(e, "semicolon");
            for (let i = 0; i < e.nodes.length; i++) {
                let o = e.nodes[i],
                    s = this.raw(o, "before");
                s && this.builder(s), this.stringify(o, t !== i || n)
            }
        }
        comment(e) {
            let t = this.raw(e, "left", "commentLeft"),
                n = this.raw(e, "right", "commentRight");
            this.builder("/*" + t + e.text + n + "*/", e)
        }
        decl(e, t) {
            let n = this.raw(e, "between", "colon"),
                i = e.prop + n + this.rawValue(e, "value");
            e.important && (i += e.raws.important || " !important"), t && (i += ";"), this.builder(i, e)
        }
        document(e) {
            this.body(e)
        }
        raw(e, t, n) {
            let i;
            if (n || (n = t), t && (i = e.raws[t], typeof i < "u")) return i;
            let o = e.parent;
            if (n === "before" && (!o || o.type === "root" && o.first === e || o && o.type === "document")) return "";
            if (!o) return oy[n];
            let s = e.root();
            if (s.rawCache || (s.rawCache = {}), typeof s.rawCache[n] < "u") return s.rawCache[n];
            if (n === "before" || n === "after") return this.beforeAfter(e, n); {
                let u = "raw" + TC(n);
                this[u] ? i = this[u](s, e) : s.walk(a => {
                    if (i = a.raws[t], typeof i < "u") return !1
                })
            }
            return typeof i > "u" && (i = oy[n]), s.rawCache[n] = i, i
        }
        rawBeforeClose(e) {
            let t;
            return e.walk(n => {
                if (n.nodes && n.nodes.length > 0 && typeof n.raws.after < "u") return t = n.raws.after, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1
            }), t && (t = t.replace(/\S/g, "")), t
        }
        rawBeforeComment(e, t) {
            let n;
            return e.walkComments(i => {
                if (typeof i.raws.before < "u") return n = i.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1
            }), typeof n > "u" ? n = this.raw(t, null, "beforeDecl") : n && (n = n.replace(/\S/g, "")), n
        }
        rawBeforeDecl(e, t) {
            let n;
            return e.walkDecls(i => {
                if (typeof i.raws.before < "u") return n = i.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1
            }), typeof n > "u" ? n = this.raw(t, null, "beforeRule") : n && (n = n.replace(/\S/g, "")), n
        }
        rawBeforeOpen(e) {
            let t;
            return e.walk(n => {
                if (n.type !== "decl" && (t = n.raws.between, typeof t < "u")) return !1
            }), t
        }
        rawBeforeRule(e) {
            let t;
            return e.walk(n => {
                if (n.nodes && (n.parent !== e || e.first !== n) && typeof n.raws.before < "u") return t = n.raws.before, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1
            }), t && (t = t.replace(/\S/g, "")), t
        }
        rawColon(e) {
            let t;
            return e.walkDecls(n => {
                if (typeof n.raws.between < "u") return t = n.raws.between.replace(/[^\s:]/g, ""), !1
            }), t
        }
        rawEmptyBody(e) {
            let t;
            return e.walk(n => {
                if (n.nodes && n.nodes.length === 0 && (t = n.raws.after, typeof t < "u")) return !1
            }), t
        }
        rawIndent(e) {
            if (e.raws.indent) return e.raws.indent;
            let t;
            return e.walk(n => {
                let i = n.parent;
                if (i && i !== e && i.parent && i.parent === e && typeof n.raws.before < "u") {
                    let o = n.raws.before.split(`
`);
                    return t = o[o.length - 1], t = t.replace(/\S/g, ""), !1
                }
            }), t
        }
        rawSemicolon(e) {
            let t;
            return e.walk(n => {
                if (n.nodes && n.nodes.length && n.last.type === "decl" && (t = n.raws.semicolon, typeof t < "u")) return !1
            }), t
        }
        rawValue(e, t) {
            let n = e[t],
                i = e.raws[t];
            return i && i.value === n ? i.raw : n
        }
        root(e) {
            this.body(e), e.raws.after && this.builder(e.raws.after)
        }
        rule(e) {
            this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end")
        }
        stringify(e, t) {
            if (!this[e.type]) throw new Error("Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier.");
            this[e.type](e, t)
        }
    }, iw = hc;
    hc.default = hc;
    OC = iw;
    ra = mc;
    mc.default = mc;
    ({
        isClean: fs,
        my: RC
    } = Si), PC = of , AC = iw, MC = ra;
    vc = class {
        constructor(e = {}) {
            this.raws = {}, this[fs] = !1, this[RC] = !0;
            for (let t in e)
                if (t === "nodes") {
                    this.nodes = [];
                    for (let n of e[t]) typeof n.clone == "function" ? this.append(n.clone()) : this.append(n)
                } else this[t] = e[t]
        }
        addToError(e) {
            if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
                let t = this.source;
                e.stack = e.stack.replace(/\n\s{4}at /, `$&${t.input.from}:${t.start.line}:${t.start.column}$&`)
            }
            return e
        }
        after(e) {
            return this.parent.insertAfter(this, e), this
        }
        assign(e = {}) {
            for (let t in e) this[t] = e[t];
            return this
        }
        before(e) {
            return this.parent.insertBefore(this, e), this
        }
        cleanRaws(e) {
            delete this.raws.before, delete this.raws.after, e || delete this.raws.between
        }
        clone(e = {}) {
            let t = gc(this);
            for (let n in e) t[n] = e[n];
            return t
        }
        cloneAfter(e = {}) {
            let t = this.clone(e);
            return this.parent.insertAfter(this, t), t
        }
        cloneBefore(e = {}) {
            let t = this.clone(e);
            return this.parent.insertBefore(this, t), t
        }
        error(e, t = {}) {
            if (this.source) {
                let {
                    end: n,
                    start: i
                } = this.rangeBy(t);
                return this.source.input.error(e, {
                    column: i.column,
                    line: i.line
                }, {
                    column: n.column,
                    line: n.line
                }, t)
            }
            return new PC(e)
        }
        getProxyProcessor() {
            return {
                get(e, t) {
                    return t === "proxyOf" ? e : t === "root" ? () => e.root().toProxy() : e[t]
                },
                set(e, t, n) {
                    return e[t] === n || (e[t] = n, (t === "prop" || t === "value" || t === "name" || t === "params" || t === "important" || t === "text") && e.markDirty()), !0
                }
            }
        }
        markDirty() {
            if (this[fs]) {
                this[fs] = !1;
                let e = this;
                for (; e = e.parent;) e[fs] = !1
            }
        }
        next() {
            if (!this.parent) return;
            let e = this.parent.index(this);
            return this.parent.nodes[e + 1]
        }
        positionBy(e, t) {
            let n = this.source.start;
            if (e.index) n = this.positionInside(e.index, t);
            else if (e.word) {
                t = this.toString();
                let i = t.indexOf(e.word);
                i !== -1 && (n = this.positionInside(i, t))
            }
            return n
        }
        positionInside(e, t) {
            let n = t || this.toString(),
                i = this.source.start.column,
                o = this.source.start.line;
            for (let s = 0; s < e; s++) n[s] === `
` ? (i = 1, o += 1) : i += 1;
            return {
                column: i,
                line: o
            }
        }
        prev() {
            if (!this.parent) return;
            let e = this.parent.index(this);
            return this.parent.nodes[e - 1]
        }
        rangeBy(e) {
            let t = {
                    column: this.source.start.column,
                    line: this.source.start.line
                },
                n = this.source.end ? {
                    column: this.source.end.column + 1,
                    line: this.source.end.line
                } : {
                    column: t.column + 1,
                    line: t.line
                };
            if (e.word) {
                let i = this.toString(),
                    o = i.indexOf(e.word);
                o !== -1 && (t = this.positionInside(o, i), n = this.positionInside(o + e.word.length, i))
            } else e.start ? t = {
                column: e.start.column,
                line: e.start.line
            } : e.index && (t = this.positionInside(e.index)), e.end ? n = {
                column: e.end.column,
                line: e.end.line
            } : typeof e.endIndex == "number" ? n = this.positionInside(e.endIndex) : e.index && (n = this.positionInside(e.index + 1));
            return (n.line < t.line || n.line === t.line && n.column <= t.column) && (n = {
                column: t.column + 1,
                line: t.line
            }), {
                end: n,
                start: t
            }
        }
        raw(e, t) {
            return new AC().raw(this, e, t)
        }
        remove() {
            return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith(...e) {
            if (this.parent) {
                let t = this,
                    n = !1;
                for (let i of e) i === this ? n = !0 : n ? (this.parent.insertAfter(t, i), t = i) : this.parent.insertBefore(t, i);
                n || this.remove()
            }
            return this
        }
        root() {
            let e = this;
            for (; e.parent && e.parent.type !== "document";) e = e.parent;
            return e
        }
        toJSON(e, t) {
            let n = {},
                i = t == null;
            t = t || new Map;
            let o = 0;
            for (let s in this) {
                if (!Object.prototype.hasOwnProperty.call(this, s) || s === "parent" || s === "proxyCache") continue;
                let u = this[s];
                if (Array.isArray(u)) n[s] = u.map(a => typeof a == "object" && a.toJSON ? a.toJSON(null, t) : a);
                else if (typeof u == "object" && u.toJSON) n[s] = u.toJSON(null, t);
                else if (s === "source") {
                    let a = t.get(u.input);
                    a == null && (a = o, t.set(u.input, o), o++), n[s] = {
                        end: u.end,
                        inputId: a,
                        start: u.start
                    }
                } else n[s] = u
            }
            return i && (n.inputs = [...t.keys()].map(s => s.toJSON())), n
        }
        toProxy() {
            return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString(e = MC) {
            e.stringify && (e = e.stringify);
            let t = "";
            return e(this, n => {
                t += n
            }), t
        }
        warn(e, t, n) {
            let i = {
                node: this
            };
            for (let o in n) i[o] = n[o];
            return e.warn(t, i)
        }
        get proxyOf() {
            return this
        }
    }, na = vc;
    vc.default = vc;
    NC = na, yc = class extends NC {
        constructor(e) {
            e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e,
                value: String(e.value)
            }), super(e), this.type = "decl"
        }
        get variable() {
            return this.prop.startsWith("--") || this.prop[0] === "$"
        }
    }, ia = yc;
    yc.default = yc;
    DC = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", kC = (r, e = 21) => (t = e) => {
        let n = "",
            i = t;
        for (; i--;) n += r[Math.random() * r.length | 0];
        return n
    }, LC = (r = 21) => {
        let e = "",
            t = r;
        for (; t--;) e += DC[Math.random() * 64 | 0];
        return e
    }, FC = {
        nanoid: LC,
        customAlphabet: kC
    }, {
        SourceMapConsumer: sy,
        SourceMapGenerator: ay
    } = Mt, {
        existsSync: UC,
        readFileSync: $C
    } = Mt, {
        dirname: tc,
        join: jC
    } = Mt;
    wc = class {
        constructor(e, t) {
            if (t.map === !1) return;
            this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
            let n = t.map ? t.map.prev : void 0,
                i = this.loadMap(t.from, n);
            !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = tc(this.mapFile)), i && (this.text = i)
        }
        consumer() {
            return this.consumerCache || (this.consumerCache = new sy(this.text)), this.consumerCache
        }
        decodeInline(e) {
            let t = /^data:application\/json;charset=utf-?8;base64,/,
                n = /^data:application\/json;base64,/,
                i = /^data:application\/json;charset=utf-?8,/,
                o = /^data:application\/json,/;
            if (i.test(e) || o.test(e)) return decodeURIComponent(e.substr(RegExp.lastMatch.length));
            if (t.test(e) || n.test(e)) return BC(e.substr(RegExp.lastMatch.length));
            let s = e.match(/data:application\/json;([^,]+),/)[1];
            throw new Error("Unsupported source map encoding " + s)
        }
        getAnnotationURL(e) {
            return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(e) {
            return typeof e != "object" ? !1 : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections)
        }
        loadAnnotation(e) {
            let t = e.match(/\/\*\s*# sourceMappingURL=/gm);
            if (!t) return;
            let n = e.lastIndexOf(t.pop()),
                i = e.indexOf("*/", n);
            n > -1 && i > -1 && (this.annotation = this.getAnnotationURL(e.substring(n, i)))
        }
        loadFile(e) {
            if (this.root = tc(e), UC(e)) return this.mapFile = e, $C(e, "utf-8").toString().trim()
        }
        loadMap(e, t) {
            if (t === !1) return !1;
            if (t) {
                if (typeof t == "string") return t;
                if (typeof t == "function") {
                    let n = t(e);
                    if (n) {
                        let i = this.loadFile(n);
                        if (!i) throw new Error("Unable to load previous source map: " + n.toString());
                        return i
                    }
                } else {
                    if (t instanceof sy) return ay.fromSourceMap(t).toString();
                    if (t instanceof ay) return t.toString();
                    if (this.isMap(t)) return JSON.stringify(t);
                    throw new Error("Unsupported previous source map format: " + t.toString())
                }
            } else {
                if (this.inline) return this.decodeInline(this.annotation);
                if (this.annotation) {
                    let n = this.annotation;
                    return e && (n = jC(tc(e), n)), this.loadFile(n)
                }
            }
        }
        startWith(e, t) {
            return e ? e.substr(0, t.length) === t : !1
        }
        withContent() {
            return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
    }, ow = wc;
    wc.default = wc;
    ({
        SourceMapConsumer: VC,
        SourceMapGenerator: WC
    } = Mt), {
        fileURLToPath: ly,
        pathToFileURL: ds
    } = Mt, {
        isAbsolute: bc,
        resolve: Sc
    } = Mt, {
        nanoid: GC
    } = FC, rc = Mt, uy = of , zC = ow, nc = Symbol("fromOffsetCache"), qC = !!(VC && WC), cy = !!(Sc && bc), Vs = class {
        constructor(e, t = {}) {
            if (e === null || typeof e > "u" || typeof e == "object" && !e.toString) throw new Error(`PostCSS received ${e} instead of CSS string`);
            if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!cy || /^\w+:\/\//.test(t.from) || bc(t.from) ? this.file = t.from : this.file = Sc(t.from)), cy && qC) {
                let n = new zC(this.css, t);
                if (n.text) {
                    this.map = n;
                    let i = n.consumer().file;
                    !this.file && i && (this.file = this.mapResolve(i))
                }
            }
            this.file || (this.id = "<input css " + GC(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(e, t, n, i = {}) {
            let o, s, u;
            if (t && typeof t == "object") {
                let l = t,
                    c = n;
                if (typeof l.offset == "number") {
                    let f = this.fromOffset(l.offset);
                    t = f.line, n = f.col
                } else t = l.line, n = l.column;
                if (typeof c.offset == "number") {
                    let f = this.fromOffset(c.offset);
                    s = f.line, u = f.col
                } else s = c.line, u = c.column
            } else if (!n) {
                let l = this.fromOffset(t);
                t = l.line, n = l.col
            }
            let a = this.origin(t, n, s, u);
            return a ? o = new uy(e, a.endLine === void 0 ? a.line : {
                column: a.column,
                line: a.line
            }, a.endLine === void 0 ? a.column : {
                column: a.endColumn,
                line: a.endLine
            }, a.source, a.file, i.plugin) : o = new uy(e, s === void 0 ? t : {
                column: n,
                line: t
            }, s === void 0 ? n : {
                column: u,
                line: s
            }, this.css, this.file, i.plugin), o.input = {
                column: n,
                endColumn: u,
                endLine: s,
                line: t,
                source: this.css
            }, this.file && (ds && (o.input.url = ds(this.file).toString()), o.input.file = this.file), o
        }
        fromOffset(e) {
            let t, n;
            if (this[nc]) n = this[nc];
            else {
                let o = this.css.split(`
`);
                n = new Array(o.length);
                let s = 0;
                for (let u = 0, a = o.length; u < a; u++) n[u] = s, s += o[u].length + 1;
                this[nc] = n
            }
            t = n[n.length - 1];
            let i = 0;
            if (e >= t) i = n.length - 1;
            else {
                let o = n.length - 2,
                    s;
                for (; i < o;)
                    if (s = i + (o - i >> 1), e < n[s]) o = s - 1;
                    else if (e >= n[s + 1]) i = s + 1;
                else {
                    i = s;
                    break
                }
            }
            return {
                col: e - n[i] + 1,
                line: i + 1
            }
        }
        mapResolve(e) {
            return /^\w+:\/\//.test(e) ? e : Sc(this.map.consumer().sourceRoot || this.map.root || ".", e)
        }
        origin(e, t, n, i) {
            if (!this.map) return !1;
            let o = this.map.consumer(),
                s = o.originalPositionFor({
                    column: t,
                    line: e
                });
            if (!s.source) return !1;
            let u;
            typeof n == "number" && (u = o.originalPositionFor({
                column: i,
                line: n
            }));
            let a;
            bc(s.source) ? a = ds(s.source) : a = new URL(s.source, this.map.consumer().sourceRoot || ds(this.map.mapFile));
            let l = {
                column: s.column,
                endColumn: u && u.column,
                endLine: u && u.line,
                line: s.line,
                url: a.toString()
            };
            if (a.protocol === "file:")
                if (ly) l.file = ly(a);
                else throw new Error("file: protocol is not available in this PostCSS build");
            let c = o.sourceContentFor(s.source);
            return c && (l.source = c), l
        }
        toJSON() {
            let e = {};
            for (let t of ["hasBOM", "css", "file", "id"]) this[t] != null && (e[t] = this[t]);
            return this.map && (e.map = { ...this.map
            }, e.map.consumerCache && (e.map.consumerCache = void 0)), e
        }
        get from() {
            return this.file || this.id
        }
    }, oa = Vs;
    Vs.default = Vs;
    rc && rc.registerInput && rc.registerInput(Vs);
    ({
        SourceMapConsumer: sw,
        SourceMapGenerator: Ms
    } = Mt), {
        dirname: Ns,
        relative: aw,
        resolve: lw,
        sep: uw
    } = Mt, {
        pathToFileURL: fy
    } = Mt, HC = oa, YC = !!(sw && Ms), KC = !!(Ns && lw && aw && uw), XC = class {
        constructor(e, t, n, i) {
            this.stringify = e, this.mapOpts = n.map || {}, this.root = t, this.opts = n, this.css = i, this.originalCSS = i, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
            let e;
            this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
            let t = `
`;
            this.css.includes(`\r
`) && (t = `\r
`), this.css += t + "/*# sourceMappingURL=" + e + " */"
        }
        applyPrevMaps() {
            for (let e of this.previous()) {
                let t = this.toUrl(this.path(e.file)),
                    n = e.root || Ns(e.file),
                    i;
                this.mapOpts.sourcesContent === !1 ? (i = new sw(e.text), i.sourcesContent && (i.sourcesContent = null)) : i = e.consumer(), this.map.applySourceMap(i, t, this.toUrl(this.path(n)))
            }
        }
        clearAnnotation() {
            if (this.mapOpts.annotation !== !1)
                if (this.root) {
                    let e;
                    for (let t = this.root.nodes.length - 1; t >= 0; t--) e = this.root.nodes[t], e.type === "comment" && e.text.indexOf("# sourceMappingURL=") === 0 && this.root.removeChild(t)
                } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
            if (this.clearAnnotation(), KC && YC && this.isMap()) return this.generateMap(); {
                let e = "";
                return this.stringify(this.root, t => {
                    e += t
                }), [e]
            }
        }
        generateMap() {
            if (this.root) this.generateString();
            else if (this.previous().length === 1) {
                let e = this.previous()[0].consumer();
                e.file = this.outputFile(), this.map = Ms.fromSourceMap(e, {
                    ignoreInvalidMapping: !0
                })
            } else this.map = new Ms({
                file: this.outputFile(),
                ignoreInvalidMapping: !0
            }), this.map.addMapping({
                generated: {
                    column: 0,
                    line: 1
                },
                original: {
                    column: 0,
                    line: 1
                },
                source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
            });
            return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map]
        }
        generateString() {
            this.css = "", this.map = new Ms({
                file: this.outputFile(),
                ignoreInvalidMapping: !0
            });
            let e = 1,
                t = 1,
                n = "<no source>",
                i = {
                    generated: {
                        column: 0,
                        line: 0
                    },
                    original: {
                        column: 0,
                        line: 0
                    },
                    source: ""
                },
                o, s;
            this.stringify(this.root, (u, a, l) => {
                if (this.css += u, a && l !== "end" && (i.generated.line = e, i.generated.column = t - 1, a.source && a.source.start ? (i.source = this.sourcePath(a), i.original.line = a.source.start.line, i.original.column = a.source.start.column - 1, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, this.map.addMapping(i))), o = u.match(/\n/g), o ? (e += o.length, s = u.lastIndexOf(`
`), t = u.length - s) : t += u.length, a && l !== "start") {
                    let c = a.parent || {
                        raws: {}
                    };
                    (!(a.type === "decl" || a.type === "atrule" && !a.nodes) || a !== c.last || c.raws.semicolon) && (a.source && a.source.end ? (i.source = this.sourcePath(a), i.original.line = a.source.end.line, i.original.column = a.source.end.column - 1, i.generated.line = e, i.generated.column = t - 2, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, i.generated.line = e, i.generated.column = t - 1, this.map.addMapping(i)))
                }
            })
        }
        isAnnotation() {
            return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some(e => e.annotation) : !0
        }
        isInline() {
            if (typeof this.mapOpts.inline < "u") return this.mapOpts.inline;
            let e = this.mapOpts.annotation;
            return typeof e < "u" && e !== !0 ? !1 : this.previous().length ? this.previous().some(t => t.inline) : !0
        }
        isMap() {
            return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
            return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some(e => e.withContent()) : !0
        }
        outputFile() {
            return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(e) {
            if (this.mapOpts.absolute || e.charCodeAt(0) === 60 || /^\w+:\/\//.test(e)) return e;
            let t = this.memoizedPaths.get(e);
            if (t) return t;
            let n = this.opts.to ? Ns(this.opts.to) : ".";
            typeof this.mapOpts.annotation == "string" && (n = Ns(lw(n, this.mapOpts.annotation)));
            let i = aw(n, e);
            return this.memoizedPaths.set(e, i), i
        }
        previous() {
            if (!this.previousMaps)
                if (this.previousMaps = [], this.root) this.root.walk(e => {
                    if (e.source && e.source.input.map) {
                        let t = e.source.input.map;
                        this.previousMaps.includes(t) || this.previousMaps.push(t)
                    }
                });
                else {
                    let e = new HC(this.originalCSS, this.opts);
                    e.map && this.previousMaps.push(e.map)
                }
            return this.previousMaps
        }
        setSourcesContent() {
            let e = {};
            if (this.root) this.root.walk(t => {
                if (t.source) {
                    let n = t.source.input.from;
                    if (n && !e[n]) {
                        e[n] = !0;
                        let i = this.usesFileUrls ? this.toFileUrl(n) : this.toUrl(this.path(n));
                        this.map.setSourceContent(i, t.source.input.css)
                    }
                }
            });
            else if (this.css) {
                let t = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
                this.map.setSourceContent(t, this.css)
            }
        }
        sourcePath(e) {
            return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from))
        }
        toBase64(e) {
            return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)))
        }
        toFileUrl(e) {
            let t = this.memoizedFileURLs.get(e);
            if (t) return t;
            if (fy) {
                let n = fy(e).toString();
                return this.memoizedFileURLs.set(e, n), n
            } else throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(e) {
            let t = this.memoizedURLs.get(e);
            if (t) return t;
            uw === "\\" && (e = e.replace(/\\/g, "/"));
            let n = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
            return this.memoizedURLs.set(e, n), n
        }
    }, cw = XC, JC = na, Ec = class extends JC {
        constructor(e) {
            super(e), this.type = "comment"
        }
    }, sa = Ec;
    Ec.default = Ec;
    ({
        isClean: fw,
        my: dw
    } = Si), pw = ia, hw = sa, ZC = na;
    nr = class ww extends ZC {
        append(...e) {
            for (let t of e) {
                let n = this.normalize(t, this.last);
                for (let i of n) this.proxyOf.nodes.push(i)
            }
            return this.markDirty(), this
        }
        cleanRaws(e) {
            if (super.cleanRaws(e), this.nodes)
                for (let t of this.nodes) t.cleanRaws(e)
        }
        each(e) {
            if (!this.proxyOf.nodes) return;
            let t = this.getIterator(),
                n, i;
            for (; this.indexes[t] < this.proxyOf.nodes.length && (n = this.indexes[t], i = e(this.proxyOf.nodes[n], n), i !== !1);) this.indexes[t] += 1;
            return delete this.indexes[t], i
        }
        every(e) {
            return this.nodes.every(e)
        }
        getIterator() {
            this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
            let e = this.lastEach;
            return this.indexes[e] = 0, e
        }
        getProxyProcessor() {
            return {
                get(e, t) {
                    return t === "proxyOf" ? e : e[t] ? t === "each" || typeof t == "string" && t.startsWith("walk") ? (...n) => e[t](...n.map(i => typeof i == "function" ? (o, s) => i(o.toProxy(), s) : i)) : t === "every" || t === "some" ? n => e[t]((i, ...o) => n(i.toProxy(), ...o)) : t === "root" ? () => e.root().toProxy() : t === "nodes" ? e.nodes.map(n => n.toProxy()) : t === "first" || t === "last" ? e[t].toProxy() : e[t] : e[t]
                },
                set(e, t, n) {
                    return e[t] === n || (e[t] = n, (t === "name" || t === "params" || t === "selector") && e.markDirty()), !0
                }
            }
        }
        index(e) {
            return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e))
        }
        insertAfter(e, t) {
            let n = this.index(e),
                i = this.normalize(t, this.proxyOf.nodes[n]).reverse();
            n = this.index(e);
            for (let s of i) this.proxyOf.nodes.splice(n + 1, 0, s);
            let o;
            for (let s in this.indexes) o = this.indexes[s], n < o && (this.indexes[s] = o + i.length);
            return this.markDirty(), this
        }
        insertBefore(e, t) {
            let n = this.index(e),
                i = n === 0 ? "prepend" : !1,
                o = this.normalize(t, this.proxyOf.nodes[n], i).reverse();
            n = this.index(e);
            for (let u of o) this.proxyOf.nodes.splice(n, 0, u);
            let s;
            for (let u in this.indexes) s = this.indexes[u], n <= s && (this.indexes[u] = s + o.length);
            return this.markDirty(), this
        }
        normalize(e, t) {
            if (typeof e == "string") e = vw(mw(e).nodes);
            else if (typeof e > "u") e = [];
            else if (Array.isArray(e)) {
                e = e.slice(0);
                for (let i of e) i.parent && i.parent.removeChild(i, "ignore")
            } else if (e.type === "root" && this.type !== "document") {
                e = e.nodes.slice(0);
                for (let i of e) i.parent && i.parent.removeChild(i, "ignore")
            } else if (e.type) e = [e];
            else if (e.prop) {
                if (typeof e.value > "u") throw new Error("Value field is missed in node creation");
                typeof e.value != "string" && (e.value = String(e.value)), e = [new pw(e)]
            } else if (e.selector) e = [new sf(e)];
            else if (e.name) e = [new af(e)];
            else if (e.text) e = [new hw(e)];
            else throw new Error("Unknown node type in node creation");
            return e.map(i => (i[dw] || ww.rebuild(i), i = i.proxyOf, i.parent && i.parent.removeChild(i), i[fw] && yw(i), typeof i.raws.before > "u" && t && typeof t.raws.before < "u" && (i.raws.before = t.raws.before.replace(/\S/g, "")), i.parent = this.proxyOf, i))
        }
        prepend(...e) {
            e = e.reverse();
            for (let t of e) {
                let n = this.normalize(t, this.first, "prepend").reverse();
                for (let i of n) this.proxyOf.nodes.unshift(i);
                for (let i in this.indexes) this.indexes[i] = this.indexes[i] + n.length
            }
            return this.markDirty(), this
        }
        push(e) {
            return e.parent = this, this.proxyOf.nodes.push(e), this
        }
        removeAll() {
            for (let e of this.proxyOf.nodes) e.parent = void 0;
            return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(e) {
            e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
            let t;
            for (let n in this.indexes) t = this.indexes[n], t >= e && (this.indexes[n] = t - 1);
            return this.markDirty(), this
        }
        replaceValues(e, t, n) {
            return n || (n = t, t = {}), this.walkDecls(i => {
                t.props && !t.props.includes(i.prop) || t.fast && !i.value.includes(t.fast) || (i.value = i.value.replace(e, n))
            }), this.markDirty(), this
        }
        some(e) {
            return this.nodes.some(e)
        }
        walk(e) {
            return this.each((t, n) => {
                let i;
                try {
                    i = e(t, n)
                } catch (o) {
                    throw t.addToError(o)
                }
                return i !== !1 && t.walk && (i = t.walk(e)), i
            })
        }
        walkAtRules(e, t) {
            return t ? e instanceof RegExp ? this.walk((n, i) => {
                if (n.type === "atrule" && e.test(n.name)) return t(n, i)
            }) : this.walk((n, i) => {
                if (n.type === "atrule" && n.name === e) return t(n, i)
            }) : (t = e, this.walk((n, i) => {
                if (n.type === "atrule") return t(n, i)
            }))
        }
        walkComments(e) {
            return this.walk((t, n) => {
                if (t.type === "comment") return e(t, n)
            })
        }
        walkDecls(e, t) {
            return t ? e instanceof RegExp ? this.walk((n, i) => {
                if (n.type === "decl" && e.test(n.prop)) return t(n, i)
            }) : this.walk((n, i) => {
                if (n.type === "decl" && n.prop === e) return t(n, i)
            }) : (t = e, this.walk((n, i) => {
                if (n.type === "decl") return t(n, i)
            }))
        }
        walkRules(e, t) {
            return t ? e instanceof RegExp ? this.walk((n, i) => {
                if (n.type === "rule" && e.test(n.selector)) return t(n, i)
            }) : this.walk((n, i) => {
                if (n.type === "rule" && n.selector === e) return t(n, i)
            }) : (t = e, this.walk((n, i) => {
                if (n.type === "rule") return t(n, i)
            }))
        }
        get first() {
            if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
            if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
    };
    nr.registerParse = r => {
        mw = r
    };
    nr.registerRule = r => {
        sf = r
    };
    nr.registerAtRule = r => {
        af = r
    };
    nr.registerRoot = r => {
        gw = r
    };
    Fr = nr;
    nr.default = nr;
    nr.rebuild = r => {
        r.type === "atrule" ? Object.setPrototypeOf(r, af.prototype) : r.type === "rule" ? Object.setPrototypeOf(r, sf.prototype) : r.type === "decl" ? Object.setPrototypeOf(r, pw.prototype) : r.type === "comment" ? Object.setPrototypeOf(r, hw.prototype) : r.type === "root" && Object.setPrototypeOf(r, gw.prototype), r[dw] = !0, r.nodes && r.nodes.forEach(e => {
            nr.rebuild(e)
        })
    };
    QC = Fr, di = class extends QC {
        constructor(e) {
            super({
                type: "document",
                ...e
            }), this.nodes || (this.nodes = [])
        }
        toResult(e = {}) {
            return new bw(new Sw, this, e).stringify()
        }
    };
    di.registerLazyResult = r => {
        bw = r
    };
    di.registerProcessor = r => {
        Sw = r
    };
    lf = di;
    di.default = di;
    _c = class {
        constructor(e, t = {}) {
            if (this.type = "warning", this.text = e, t.node && t.node.source) {
                let n = t.node.rangeBy(t);
                this.line = n.start.line, this.column = n.start.column, this.endLine = n.end.line, this.endColumn = n.end.column
            }
            for (let n in t) this[n] = t[n]
        }
        toString() {
            return this.node ? this.node.error(this.text, {
                index: this.index,
                plugin: this.plugin,
                word: this.word
            }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
    }, Ew = _c;
    _c.default = _c;
    eI = Ew, xc = class {
        constructor(e, t, n) {
            this.processor = e, this.messages = [], this.root = t, this.opts = n, this.css = void 0, this.map = void 0
        }
        toString() {
            return this.css
        }
        warn(e, t = {}) {
            t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
            let n = new eI(e, t);
            return this.messages.push(n), n
        }
        warnings() {
            return this.messages.filter(e => e.type === "warning")
        }
        get content() {
            return this.css
        }
    }, uf = xc;
    xc.default = xc;
    ic = 39, dy = 34, ps = 92, py = 47, hs = 10, ni = 32, ms = 12, gs = 9, vs = 13, tI = 91, rI = 93, nI = 40, iI = 41, oI = 123, sI = 125, aI = 59, lI = 42, uI = 58, cI = 64, ys = /[\t\n\f\r "#'()/;[\\\]{}]/g, ws = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, fI = /.[\r\n"'(/\\]/, hy = /[\da-f]/i, dI = function(e, t = {}) {
        let n = e.css.valueOf(),
            i = t.ignoreErrors,
            o, s, u, a, l, c, f, d, p, h, g = n.length,
            m = 0,
            b = [],
            v = [];

        function y() {
            return m
        }

        function S(E) {
            throw e.error("Unclosed " + E, m)
        }

        function _() {
            return v.length === 0 && m >= g
        }

        function x(E) {
            if (v.length) return v.pop();
            if (m >= g) return;
            let I = E ? E.ignoreUnclosed : !1;
            switch (o = n.charCodeAt(m), o) {
                case hs:
                case ni:
                case gs:
                case vs:
                case ms:
                    {
                        s = m;do s += 1,
                        o = n.charCodeAt(s);
                        while (o === ni || o === hs || o === gs || o === vs || o === ms);h = ["space", n.slice(m, s)],
                        m = s - 1;
                        break
                    }
                case tI:
                case rI:
                case oI:
                case sI:
                case uI:
                case aI:
                case iI:
                    {
                        let R = String.fromCharCode(o);h = [R, R, m];
                        break
                    }
                case nI:
                    {
                        if (d = b.length ? b.pop()[1] : "", p = n.charCodeAt(m + 1), d === "url" && p !== ic && p !== dy && p !== ni && p !== hs && p !== gs && p !== ms && p !== vs) {
                            s = m;
                            do {
                                if (c = !1, s = n.indexOf(")", s + 1), s === -1)
                                    if (i || I) {
                                        s = m;
                                        break
                                    } else S("bracket");
                                for (f = s; n.charCodeAt(f - 1) === ps;) f -= 1, c = !c
                            } while (c);
                            h = ["brackets", n.slice(m, s + 1), m, s], m = s
                        } else s = n.indexOf(")", m + 1),
                        a = n.slice(m, s + 1),
                        s === -1 || fI.test(a) ? h = ["(", "(", m] : (h = ["brackets", a, m, s], m = s);
                        break
                    }
                case ic:
                case dy:
                    {
                        u = o === ic ? "'" : '"',
                        s = m;do {
                            if (c = !1, s = n.indexOf(u, s + 1), s === -1)
                                if (i || I) {
                                    s = m + 1;
                                    break
                                } else S("string");
                            for (f = s; n.charCodeAt(f - 1) === ps;) f -= 1, c = !c
                        } while (c);h = ["string", n.slice(m, s + 1), m, s],
                        m = s;
                        break
                    }
                case cI:
                    {
                        ys.lastIndex = m + 1,
                        ys.test(n),
                        ys.lastIndex === 0 ? s = n.length - 1 : s = ys.lastIndex - 2,
                        h = ["at-word", n.slice(m, s + 1), m, s],
                        m = s;
                        break
                    }
                case ps:
                    {
                        for (s = m, l = !0; n.charCodeAt(s + 1) === ps;) s += 1,
                        l = !l;
                        if (o = n.charCodeAt(s + 1), l && o !== py && o !== ni && o !== hs && o !== gs && o !== vs && o !== ms && (s += 1, hy.test(n.charAt(s)))) {
                            for (; hy.test(n.charAt(s + 1));) s += 1;
                            n.charCodeAt(s + 1) === ni && (s += 1)
                        }
                        h = ["word", n.slice(m, s + 1), m, s],
                        m = s;
                        break
                    }
                default:
                    {
                        o === py && n.charCodeAt(m + 1) === lI ? (s = n.indexOf("*/", m + 2) + 1, s === 0 && (i || I ? s = n.length : S("comment")), h = ["comment", n.slice(m, s + 1), m, s], m = s) : (ws.lastIndex = m + 1, ws.test(n), ws.lastIndex === 0 ? s = n.length - 1 : s = ws.lastIndex - 2, h = ["word", n.slice(m, s + 1), m, s], b.push(h), m = s);
                        break
                    }
            }
            return m++, h
        }

        function C(E) {
            v.push(E)
        }
        return {
            back: C,
            endOfFile: _,
            nextToken: x,
            position: y
        }
    }, _w = Fr, Ws = class extends _w {
        constructor(e) {
            super(e), this.type = "atrule"
        }
        append(...e) {
            return this.proxyOf.nodes || (this.nodes = []), super.append(...e)
        }
        prepend(...e) {
            return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e)
        }
    }, cf = Ws;
    Ws.default = Ws;
    _w.registerAtRule(Ws);
    xw = Fr, fn = class extends xw {
        constructor(e) {
            super(e), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(e, t, n) {
            let i = super.normalize(e);
            if (t) {
                if (n === "prepend") this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
                else if (this.first !== t)
                    for (let o of i) o.raws.before = t.raws.before
            }
            return i
        }
        removeChild(e, t) {
            let n = this.index(e);
            return !t && n === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n].raws.before), super.removeChild(e)
        }
        toResult(e = {}) {
            return new Cw(new Iw, this, e).stringify()
        }
    };
    fn.registerLazyResult = r => {
        Cw = r
    };
    fn.registerProcessor = r => {
        Iw = r
    };
    Ei = fn;
    fn.default = fn;
    xw.registerRoot(fn);
    pi = {
        comma(r) {
            return pi.split(r, [","], !0)
        },
        space(r) {
            let e = [" ", `
`, "	"];
            return pi.split(r, e)
        },
        split(r, e, t) {
            let n = [],
                i = "",
                o = !1,
                s = 0,
                u = !1,
                a = "",
                l = !1;
            for (let c of r) l ? l = !1 : c === "\\" ? l = !0 : u ? c === a && (u = !1) : c === '"' || c === "'" ? (u = !0, a = c) : c === "(" ? s += 1 : c === ")" ? s > 0 && (s -= 1) : s === 0 && e.includes(c) && (o = !0), o ? (i !== "" && n.push(i.trim()), i = "", o = !1) : i += c;
            return (t || i !== "") && n.push(i.trim()), n
        }
    }, Tw = pi;
    pi.default = pi;
    Ow = Fr, pI = Tw, Gs = class extends Ow {
        constructor(e) {
            super(e), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
            return pI.comma(this.selector)
        }
        set selectors(e) {
            let t = this.selector ? this.selector.match(/,\s*/) : null,
                n = t ? t[0] : "," + this.raw("between", "beforeOpen");
            this.selector = e.join(n)
        }
    }, ff = Gs;
    Gs.default = Gs;
    Ow.registerRule(Gs);
    hI = ia, mI = dI, gI = sa, vI = cf, yI = Ei, my = ff, gy = {
        empty: !0,
        space: !0
    };
    bI = class {
        constructor(e) {
            this.input = e, this.root = new yI, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
                input: e,
                start: {
                    column: 1,
                    line: 1,
                    offset: 0
                }
            }
        }
        atrule(e) {
            let t = new vI;
            t.name = e[1].slice(1), t.name === "" && this.unnamedAtrule(t, e), this.init(t, e[2]);
            let n, i, o, s = !1,
                u = !1,
                a = [],
                l = [];
            for (; !this.tokenizer.endOfFile();) {
                if (e = this.tokenizer.nextToken(), n = e[0], n === "(" || n === "[" ? l.push(n === "(" ? ")" : "]") : n === "{" && l.length > 0 ? l.push("}") : n === l[l.length - 1] && l.pop(), l.length === 0)
                    if (n === ";") {
                        t.source.end = this.getPosition(e[2]), t.source.end.offset++, this.semicolon = !0;
                        break
                    } else if (n === "{") {
                    u = !0;
                    break
                } else if (n === "}") {
                    if (a.length > 0) {
                        for (o = a.length - 1, i = a[o]; i && i[0] === "space";) i = a[--o];
                        i && (t.source.end = this.getPosition(i[3] || i[2]), t.source.end.offset++)
                    }
                    this.end(e);
                    break
                } else a.push(e);
                else a.push(e);
                if (this.tokenizer.endOfFile()) {
                    s = !0;
                    break
                }
            }
            t.raws.between = this.spacesAndCommentsFromEnd(a), a.length ? (t.raws.afterName = this.spacesAndCommentsFromStart(a), this.raw(t, "params", a), s && (e = a[a.length - 1], t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++, this.spaces = t.raws.between, t.raws.between = "")) : (t.raws.afterName = "", t.params = ""), u && (t.nodes = [], this.current = t)
        }
        checkMissedSemicolon(e) {
            let t = this.colon(e);
            if (t === !1) return;
            let n = 0,
                i;
            for (let o = t - 1; o >= 0 && (i = e[o], !(i[0] !== "space" && (n += 1, n === 2))); o--);
            throw this.input.error("Missed semicolon", i[0] === "word" ? i[3] + 1 : i[2])
        }
        colon(e) {
            let t = 0,
                n, i, o;
            for (let [s, u] of e.entries()) {
                if (n = u, i = n[0], i === "(" && (t += 1), i === ")" && (t -= 1), t === 0 && i === ":")
                    if (!o) this.doubleColon(n);
                    else {
                        if (o[0] === "word" && o[1] === "progid") continue;
                        return s
                    }
                o = n
            }
            return !1
        }
        comment(e) {
            let t = new gI;
            this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++;
            let n = e[1].slice(2, -2);
            if (/^\s*$/.test(n)) t.text = "", t.raws.left = n, t.raws.right = "";
            else {
                let i = n.match(/^(\s*)([^]*\S)(\s*)$/);
                t.text = i[2], t.raws.left = i[1], t.raws.right = i[3]
            }
        }
        createTokenizer() {
            this.tokenizer = mI(this.input)
        }
        decl(e, t) {
            let n = new hI;
            this.init(n, e[0][2]);
            let i = e[e.length - 1];
            for (i[0] === ";" && (this.semicolon = !0, e.pop()), n.source.end = this.getPosition(i[3] || i[2] || wI(e)), n.source.end.offset++; e[0][0] !== "word";) e.length === 1 && this.unknownWord(e), n.raws.before += e.shift()[1];
            for (n.source.start = this.getPosition(e[0][2]), n.prop = ""; e.length;) {
                let l = e[0][0];
                if (l === ":" || l === "space" || l === "comment") break;
                n.prop += e.shift()[1]
            }
            n.raws.between = "";
            let o;
            for (; e.length;)
                if (o = e.shift(), o[0] === ":") {
                    n.raws.between += o[1];
                    break
                } else o[0] === "word" && /\w/.test(o[1]) && this.unknownWord([o]), n.raws.between += o[1];
            (n.prop[0] === "_" || n.prop[0] === "*") && (n.raws.before += n.prop[0], n.prop = n.prop.slice(1));
            let s = [],
                u;
            for (; e.length && (u = e[0][0], !(u !== "space" && u !== "comment"));) s.push(e.shift());
            this.precheckMissedSemicolon(e);
            for (let l = e.length - 1; l >= 0; l--) {
                if (o = e[l], o[1].toLowerCase() === "!important") {
                    n.important = !0;
                    let c = this.stringFrom(e, l);
                    c = this.spacesFromEnd(e) + c, c !== " !important" && (n.raws.important = c);
                    break
                } else if (o[1].toLowerCase() === "important") {
                    let c = e.slice(0),
                        f = "";
                    for (let d = l; d > 0; d--) {
                        let p = c[d][0];
                        if (f.trim().indexOf("!") === 0 && p !== "space") break;
                        f = c.pop()[1] + f
                    }
                    f.trim().indexOf("!") === 0 && (n.important = !0, n.raws.important = f, e = c)
                }
                if (o[0] !== "space" && o[0] !== "comment") break
            }
            e.some(l => l[0] !== "space" && l[0] !== "comment") && (n.raws.between += s.map(l => l[1]).join(""), s = []), this.raw(n, "value", s.concat(e), t), n.value.includes(":") && !t && this.checkMissedSemicolon(e)
        }
        doubleColon(e) {
            throw this.input.error("Double colon", {
                offset: e[2]
            }, {
                offset: e[2] + e[1].length
            })
        }
        emptyRule(e) {
            let t = new my;
            this.init(t, e[2]), t.selector = "", t.raws.between = "", this.current = t
        }
        end(e) {
            this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e)
        }
        endFile() {
            this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position())
        }
        freeSemicolon(e) {
            if (this.spaces += e[1], this.current.nodes) {
                let t = this.current.nodes[this.current.nodes.length - 1];
                t && t.type === "rule" && !t.raws.ownSemicolon && (t.raws.ownSemicolon = this.spaces, this.spaces = "")
            }
        }
        getPosition(e) {
            let t = this.input.fromOffset(e);
            return {
                column: t.col,
                line: t.line,
                offset: e
            }
        }
        init(e, t) {
            this.current.push(e), e.source = {
                input: this.input,
                start: this.getPosition(t)
            }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = !1)
        }
        other(e) {
            let t = !1,
                n = null,
                i = !1,
                o = null,
                s = [],
                u = e[1].startsWith("--"),
                a = [],
                l = e;
            for (; l;) {
                if (n = l[0], a.push(l), n === "(" || n === "[") o || (o = l), s.push(n === "(" ? ")" : "]");
                else if (u && i && n === "{") o || (o = l), s.push("}");
                else if (s.length === 0)
                    if (n === ";")
                        if (i) {
                            this.decl(a, u);
                            return
                        } else break;
                else if (n === "{") {
                    this.rule(a);
                    return
                } else if (n === "}") {
                    this.tokenizer.back(a.pop()), t = !0;
                    break
                } else n === ":" && (i = !0);
                else n === s[s.length - 1] && (s.pop(), s.length === 0 && (o = null));
                l = this.tokenizer.nextToken()
            }
            if (this.tokenizer.endOfFile() && (t = !0), s.length > 0 && this.unclosedBracket(o), t && i) {
                if (!u)
                    for (; a.length && (l = a[a.length - 1][0], !(l !== "space" && l !== "comment"));) this.tokenizer.back(a.pop());
                this.decl(a, u)
            } else this.unknownWord(a)
        }
        parse() {
            let e;
            for (; !this.tokenizer.endOfFile();) switch (e = this.tokenizer.nextToken(), e[0]) {
                case "space":
                    this.spaces += e[1];
                    break;
                case ";":
                    this.freeSemicolon(e);
                    break;
                case "}":
                    this.end(e);
                    break;
                case "comment":
                    this.comment(e);
                    break;
                case "at-word":
                    this.atrule(e);
                    break;
                case "{":
                    this.emptyRule(e);
                    break;
                default:
                    this.other(e);
                    break
            }
            this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(e, t, n, i) {
            let o, s, u = n.length,
                a = "",
                l = !0,
                c, f;
            for (let d = 0; d < u; d += 1) o = n[d], s = o[0], s === "space" && d === u - 1 && !i ? l = !1 : s === "comment" ? (f = n[d - 1] ? n[d - 1][0] : "empty", c = n[d + 1] ? n[d + 1][0] : "empty", !gy[f] && !gy[c] ? a.slice(-1) === "," ? l = !1 : a += o[1] : l = !1) : a += o[1];
            if (!l) {
                let d = n.reduce((p, h) => p + h[1], "");
                e.raws[t] = {
                    raw: d,
                    value: a
                }
            }
            e[t] = a
        }
        rule(e) {
            e.pop();
            let t = new my;
            this.init(t, e[0][2]), t.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(t, "selector", e), this.current = t
        }
        spacesAndCommentsFromEnd(e) {
            let t, n = "";
            for (; e.length && (t = e[e.length - 1][0], !(t !== "space" && t !== "comment"));) n = e.pop()[1] + n;
            return n
        }
        spacesAndCommentsFromStart(e) {
            let t, n = "";
            for (; e.length && (t = e[0][0], !(t !== "space" && t !== "comment"));) n += e.shift()[1];
            return n
        }
        spacesFromEnd(e) {
            let t, n = "";
            for (; e.length && (t = e[e.length - 1][0], t === "space");) n = e.pop()[1] + n;
            return n
        }
        stringFrom(e, t) {
            let n = "";
            for (let i = t; i < e.length; i++) n += e[i][1];
            return e.splice(t, e.length - t), n
        }
        unclosedBlock() {
            let e = this.current.source.start;
            throw this.input.error("Unclosed block", e.line, e.column)
        }
        unclosedBracket(e) {
            throw this.input.error("Unclosed bracket", {
                offset: e[2]
            }, {
                offset: e[2] + 1
            })
        }
        unexpectedClose(e) {
            throw this.input.error("Unexpected }", {
                offset: e[2]
            }, {
                offset: e[2] + 1
            })
        }
        unknownWord(e) {
            throw this.input.error("Unknown word", {
                offset: e[0][2]
            }, {
                offset: e[0][2] + e[0][1].length
            })
        }
        unnamedAtrule(e, t) {
            throw this.input.error("At-rule without name", {
                offset: t[2]
            }, {
                offset: t[2] + t[1].length
            })
        }
    }, SI = bI, EI = Fr, _I = SI, xI = oa;
    df = zs;
    zs.default = zs;
    EI.registerParse(zs);
    ({
        isClean: Gt,
        my: CI
    } = Si), II = cw, TI = ra, OI = Fr, RI = lf, vy = uf, PI = df, AI = Ei, MI = {
        atrule: "AtRule",
        comment: "Comment",
        decl: "Declaration",
        document: "Document",
        root: "Root",
        rule: "Rule"
    }, NI = {
        AtRule: !0,
        AtRuleExit: !0,
        Comment: !0,
        CommentExit: !0,
        Declaration: !0,
        DeclarationExit: !0,
        Document: !0,
        DocumentExit: !0,
        Once: !0,
        OnceExit: !0,
        postcssPlugin: !0,
        prepare: !0,
        Root: !0,
        RootExit: !0,
        Rule: !0,
        RuleExit: !0
    }, DI = {
        Once: !0,
        postcssPlugin: !0,
        prepare: !0
    }, dn = 0;
    Ic = {}, pn = class Pw {
        constructor(e, t, n) {
            this.stringified = !1, this.processed = !1;
            let i;
            if (typeof t == "object" && t !== null && (t.type === "root" || t.type === "document")) i = Cc(t);
            else if (t instanceof Pw || t instanceof vy) i = Cc(t.root), t.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = !1), n.map.prev = t.map);
            else {
                let o = PI;
                n.syntax && (o = n.syntax.parse), n.parser && (o = n.parser), o.parse && (o = o.parse);
                try {
                    i = o(t, n)
                } catch (s) {
                    this.processed = !0, this.error = s
                }
                i && !i[CI] && OI.rebuild(i)
            }
            this.result = new vy(e, i, n), this.helpers = { ...Ic,
                postcss: Ic,
                result: this.result
            }, this.plugins = this.processor.plugins.map(o => typeof o == "object" && o.prepare ? { ...o,
                ...o.prepare(this.result)
            } : o)
        }
        async () {
            return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (e) {
            return this.async().catch(e)
        } finally(e) {
            return this.async().then(e, e)
        }
        getAsyncError() {
            throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(e, t) {
            let n = this.result.lastPlugin;
            try {
                t && t.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin ? (e.plugin = n.postcssPlugin, e.setMessage()) : n.postcssVersion
            } catch (i) {
                console && console.error && console.error(i)
            }
            return e
        }
        prepareVisitors() {
            this.listeners = {};
            let e = (t, n, i) => {
                this.listeners[n] || (this.listeners[n] = []), this.listeners[n].push([t, i])
            };
            for (let t of this.plugins)
                if (typeof t == "object")
                    for (let n in t) {
                        if (!NI[n] && /^[A-Z]/.test(n)) throw new Error(`Unknown event ${n} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                        if (!DI[n])
                            if (typeof t[n] == "object")
                                for (let i in t[n]) i === "*" ? e(t, n, t[n][i]) : e(t, n + "-" + i.toLowerCase(), t[n][i]);
                            else typeof t[n] == "function" && e(t, n, t[n])
                    }
            this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
            this.plugin = 0;
            for (let e = 0; e < this.plugins.length; e++) {
                let t = this.plugins[e],
                    n = this.runOnRoot(t);
                if (ii(n)) try {
                    await n
                } catch (i) {
                    throw this.handleError(i)
                }
            }
            if (this.prepareVisitors(), this.hasListener) {
                let e = this.result.root;
                for (; !e[Gt];) {
                    e[Gt] = !0;
                    let t = [yy(e)];
                    for (; t.length > 0;) {
                        let n = this.visitTick(t);
                        if (ii(n)) try {
                            await n
                        } catch (i) {
                            let o = t[t.length - 1].node;
                            throw this.handleError(i, o)
                        }
                    }
                }
                if (this.listeners.OnceExit)
                    for (let [t, n] of this.listeners.OnceExit) {
                        this.result.lastPlugin = t;
                        try {
                            if (e.type === "document") {
                                let i = e.nodes.map(o => n(o, this.helpers));
                                await Promise.all(i)
                            } else await n(e, this.helpers)
                        } catch (i) {
                            throw this.handleError(i)
                        }
                    }
            }
            return this.processed = !0, this.stringify()
        }
        runOnRoot(e) {
            this.result.lastPlugin = e;
            try {
                if (typeof e == "object" && e.Once) {
                    if (this.result.root.type === "document") {
                        let t = this.result.root.nodes.map(n => e.Once(n, this.helpers));
                        return ii(t[0]) ? Promise.all(t) : t
                    }
                    return e.Once(this.result.root, this.helpers)
                } else if (typeof e == "function") return e(this.result.root, this.result)
            } catch (t) {
                throw this.handleError(t)
            }
        }
        stringify() {
            if (this.error) throw this.error;
            if (this.stringified) return this.result;
            this.stringified = !0, this.sync();
            let e = this.result.opts,
                t = TI;
            e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
            let i = new II(t, this.result.root, this.result.opts).generate();
            return this.result.css = i[0], this.result.map = i[1], this.result
        }
        sync() {
            if (this.error) throw this.error;
            if (this.processed) return this.result;
            if (this.processed = !0, this.processing) throw this.getAsyncError();
            for (let e of this.plugins) {
                let t = this.runOnRoot(e);
                if (ii(t)) throw this.getAsyncError()
            }
            if (this.prepareVisitors(), this.hasListener) {
                let e = this.result.root;
                for (; !e[Gt];) e[Gt] = !0, this.walkSync(e);
                if (this.listeners.OnceExit)
                    if (e.type === "document")
                        for (let t of e.nodes) this.visitSync(this.listeners.OnceExit, t);
                    else this.visitSync(this.listeners.OnceExit, e)
            }
            return this.result
        }
        then(e, t) {
            return this.async().then(e, t)
        }
        toString() {
            return this.css
        }
        visitSync(e, t) {
            for (let [n, i] of e) {
                this.result.lastPlugin = n;
                let o;
                try {
                    o = i(t, this.helpers)
                } catch (s) {
                    throw this.handleError(s, t.proxyOf)
                }
                if (t.type !== "root" && t.type !== "document" && !t.parent) return !0;
                if (ii(o)) throw this.getAsyncError()
            }
        }
        visitTick(e) {
            let t = e[e.length - 1],
                {
                    node: n,
                    visitors: i
                } = t;
            if (n.type !== "root" && n.type !== "document" && !n.parent) {
                e.pop();
                return
            }
            if (i.length > 0 && t.visitorIndex < i.length) {
                let [s, u] = i[t.visitorIndex];
                t.visitorIndex += 1, t.visitorIndex === i.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = s;
                try {
                    return u(n.toProxy(), this.helpers)
                } catch (a) {
                    throw this.handleError(a, n)
                }
            }
            if (t.iterator !== 0) {
                let s = t.iterator,
                    u;
                for (; u = n.nodes[n.indexes[s]];)
                    if (n.indexes[s] += 1, !u[Gt]) {
                        u[Gt] = !0, e.push(yy(u));
                        return
                    }
                t.iterator = 0, delete n.indexes[s]
            }
            let o = t.events;
            for (; t.eventIndex < o.length;) {
                let s = o[t.eventIndex];
                if (t.eventIndex += 1, s === dn) {
                    n.nodes && n.nodes.length && (n[Gt] = !0, t.iterator = n.getIterator());
                    return
                } else if (this.listeners[s]) {
                    t.visitors = this.listeners[s];
                    return
                }
            }
            e.pop()
        }
        walkSync(e) {
            e[Gt] = !0;
            let t = Rw(e);
            for (let n of t)
                if (n === dn) e.nodes && e.each(i => {
                    i[Gt] || this.walkSync(i)
                });
                else {
                    let i = this.listeners[n];
                    if (i && this.visitSync(i, e.toProxy())) return
                }
        }
        warnings() {
            return this.sync().warnings()
        }
        get content() {
            return this.stringify().content
        }
        get css() {
            return this.stringify().css
        }
        get map() {
            return this.stringify().map
        }
        get messages() {
            return this.sync().messages
        }
        get opts() {
            return this.result.opts
        }
        get processor() {
            return this.result.processor
        }
        get root() {
            return this.sync().root
        }
        get[Symbol.toStringTag]() {
            return "LazyResult"
        }
    };
    pn.registerPostcss = r => {
        Ic = r
    };
    Aw = pn;
    pn.default = pn;
    AI.registerLazyResult(pn);
    RI.registerLazyResult(pn);
    kI = cw, LI = ra, FI = df, UI = uf, Tc = class {
        constructor(e, t, n) {
            t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = n, this._map = void 0;
            let i, o = LI;
            this.result = new UI(this._processor, i, this._opts), this.result.css = t;
            let s = this;
            Object.defineProperty(this.result, "root", {
                get() {
                    return s.root
                }
            });
            let u = new kI(o, i, this._opts, t);
            if (u.isMap()) {
                let [a, l] = u.generate();
                a && (this.result.css = a), l && (this.result.map = l)
            } else u.clearAnnotation(), this.result.css = u.css
        }
        async () {
            return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
        } catch (e) {
            return this.async().catch(e)
        } finally(e) {
            return this.async().then(e, e)
        }
        sync() {
            if (this.error) throw this.error;
            return this.result
        }
        then(e, t) {
            return this.async().then(e, t)
        }
        toString() {
            return this._css
        }
        warnings() {
            return []
        }
        get content() {
            return this.result.css
        }
        get css() {
            return this.result.css
        }
        get map() {
            return this.result.map
        }
        get messages() {
            return []
        }
        get opts() {
            return this.result.opts
        }
        get processor() {
            return this.result.processor
        }
        get root() {
            if (this._root) return this._root;
            let e, t = FI;
            try {
                e = t(this._css, this._opts)
            } catch (n) {
                this.error = n
            }
            if (this.error) throw this.error;
            return this._root = e, e
        }
        get[Symbol.toStringTag]() {
            return "NoWorkResult"
        }
    }, $I = Tc;
    Tc.default = Tc;
    jI = $I, BI = Aw, VI = lf, WI = Ei, hi = class {
        constructor(e = []) {
            this.version = "8.4.38", this.plugins = this.normalize(e)
        }
        normalize(e) {
            let t = [];
            for (let n of e)
                if (n.postcss === !0 ? n = n() : n.postcss && (n = n.postcss), typeof n == "object" && Array.isArray(n.plugins)) t = t.concat(n.plugins);
                else if (typeof n == "object" && n.postcssPlugin) t.push(n);
            else if (typeof n == "function") t.push(n);
            else if (!(typeof n == "object" && (n.parse || n.stringify))) throw new Error(n + " is not a PostCSS plugin");
            return t
        }
        process(e, t = {}) {
            return !this.plugins.length && !t.parser && !t.stringifier && !t.syntax ? new jI(this, e, t) : new BI(this, e, t)
        }
        use(e) {
            return this.plugins = this.plugins.concat(this.normalize([e])), this
        }
    }, GI = hi;
    hi.default = hi;
    WI.registerProcessor(hi);
    VI.registerProcessor(hi);
    zI = ia, qI = ow, HI = sa, YI = cf, KI = oa, XI = Ei, JI = ff;
    ZI = mi;
    mi.default = mi;
    QI = of , Mw = ia, eT = Aw, tT = Fr, pf = GI, rT = ra, nT = ZI, Nw = lf, iT = Ew, Dw = sa, kw = cf, oT = uf, sT = oa, aT = df, lT = Tw, Lw = ff, Fw = Ei, uT = na;
    te.plugin = function(e, t) {
        let n = !1;

        function i(...s) {
            console && console.warn && !n && (n = !0, console.warn(e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(e + `: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));
            let u = t(...s);
            return u.postcssPlugin = e, u.postcssVersion = new pf().version, u
        }
        let o;
        return Object.defineProperty(i, "postcss", {
            get() {
                return o || (o = i()), o
            }
        }), i.process = function(s, u, a) {
            return te([i(a)]).process(s, u)
        }, i
    };
    te.stringify = rT;
    te.parse = aT;
    te.fromJSON = nT;
    te.list = lT;
    te.comment = r => new Dw(r);
    te.atRule = r => new kw(r);
    te.decl = r => new Mw(r);
    te.rule = r => new Lw(r);
    te.root = r => new Fw(r);
    te.document = r => new Nw(r);
    te.CssSyntaxError = QI;
    te.Declaration = Mw;
    te.Container = tT;
    te.Processor = pf;
    te.Document = Nw;
    te.Comment = Dw;
    te.Warning = iT;
    te.AtRule = kw;
    te.Result = oT;
    te.Input = sT;
    te.Rule = Lw;
    te.Root = Fw;
    te.Node = uT;
    eT.registerPostcss(te);
    cT = te;
    te.default = te;
    me = EC(cT);
    me.stringify;
    me.fromJSON;
    me.plugin;
    me.parse;
    me.list;
    me.document;
    me.comment;
    me.atRule;
    me.rule;
    me.decl;
    me.root;
    me.CssSyntaxError;
    me.Declaration;
    me.Container;
    me.Processor;
    me.Document;
    me.Comment;
    me.Warning;
    me.AtRule;
    me.Result;
    me.Input;
    me.Rule;
    me.Root;
    me.Node;
    fT = Object.defineProperty, dT = (r, e, t) => e in r ? fT(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, Et = (r, e, t) => dT(r, typeof e != "symbol" ? e + "" : e, t);
    hf = {
        exports: {}
    }, ce = String, Uw = function() {
        return {
            isColorSupported: !1,
            reset: ce,
            bold: ce,
            dim: ce,
            italic: ce,
            underline: ce,
            inverse: ce,
            hidden: ce,
            strikethrough: ce,
            black: ce,
            red: ce,
            green: ce,
            yellow: ce,
            blue: ce,
            magenta: ce,
            cyan: ce,
            white: ce,
            gray: ce,
            bgBlack: ce,
            bgRed: ce,
            bgGreen: ce,
            bgYellow: ce,
            bgBlue: ce,
            bgMagenta: ce,
            bgCyan: ce,
            bgWhite: ce
        }
    };
    hf.exports = Uw();
    hf.exports.createColors = Uw;
    mT = hf.exports, gT = {}, vT = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: gT
    }, Symbol.toStringTag, {
        value: "Module"
    })), Nt = hT(vT), wy = mT, by = Nt, Oc = class $w extends Error {
        constructor(e, t, n, i, o, s) {
            super(e), this.name = "CssSyntaxError", this.reason = e, o && (this.file = o), i && (this.source = i), s && (this.plugin = s), typeof t < "u" && typeof n < "u" && (typeof t == "number" ? (this.line = t, this.column = n) : (this.line = t.line, this.column = t.column, this.endLine = n.line, this.endColumn = n.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, $w)
        }
        setMessage() {
            this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(e) {
            if (!this.source) return "";
            let t = this.source;
            e == null && (e = wy.isColorSupported), by && e && (t = by(t));
            let n = t.split(/\r?\n/),
                i = Math.max(this.line - 3, 0),
                o = Math.min(this.line + 2, n.length),
                s = String(o).length,
                u, a;
            if (e) {
                let {
                    bold: l,
                    gray: c,
                    red: f
                } = wy.createColors(!0);
                u = d => l(f(d)), a = d => c(d)
            } else u = a = l => l;
            return n.slice(i, o).map((l, c) => {
                let f = i + 1 + c,
                    d = " " + (" " + f).slice(-s) + " | ";
                if (f === this.line) {
                    let p = a(d.replace(/\d/g, " ")) + l.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                    return u(">") + a(d) + l + `
 ` + p + u("^")
                }
                return " " + a(d) + l
            }).join(`
`)
        }
        toString() {
            let e = this.showSourceCode();
            return e && (e = `

` + e + `
`), this.name + ": " + this.message + e
        }
    }, mf = Oc;
    Oc.default = Oc;
    _i = {};
    _i.isClean = Symbol("isClean");
    _i.my = Symbol("my");
    Sy = {
        after: `
`,
        beforeClose: `
`,
        beforeComment: `
`,
        beforeDecl: `
`,
        beforeOpen: " ",
        beforeRule: `
`,
        colon: ": ",
        commentLeft: " ",
        commentRight: " ",
        emptyBody: "",
        indent: "    ",
        semicolon: !1
    };
    Rc = class {
        constructor(e) {
            this.builder = e
        }
        atrule(e, t) {
            let n = "@" + e.name,
                i = e.params ? this.rawValue(e, "params") : "";
            if (typeof e.raws.afterName < "u" ? n += e.raws.afterName : i && (n += " "), e.nodes) this.block(e, n + i);
            else {
                let o = (e.raws.between || "") + (t ? ";" : "");
                this.builder(n + i + o, e)
            }
        }
        beforeAfter(e, t) {
            let n;
            e.type === "decl" ? n = this.raw(e, null, "beforeDecl") : e.type === "comment" ? n = this.raw(e, null, "beforeComment") : t === "before" ? n = this.raw(e, null, "beforeRule") : n = this.raw(e, null, "beforeClose");
            let i = e.parent,
                o = 0;
            for (; i && i.type !== "root";) o += 1, i = i.parent;
            if (n.includes(`
`)) {
                let s = this.raw(e, null, "indent");
                if (s.length)
                    for (let u = 0; u < o; u++) n += s
            }
            return n
        }
        block(e, t) {
            let n = this.raw(e, "between", "beforeOpen");
            this.builder(t + n + "{", e, "start");
            let i;
            e.nodes && e.nodes.length ? (this.body(e), i = this.raw(e, "after")) : i = this.raw(e, "after", "emptyBody"), i && this.builder(i), this.builder("}", e, "end")
        }
        body(e) {
            let t = e.nodes.length - 1;
            for (; t > 0 && e.nodes[t].type === "comment";) t -= 1;
            let n = this.raw(e, "semicolon");
            for (let i = 0; i < e.nodes.length; i++) {
                let o = e.nodes[i],
                    s = this.raw(o, "before");
                s && this.builder(s), this.stringify(o, t !== i || n)
            }
        }
        comment(e) {
            let t = this.raw(e, "left", "commentLeft"),
                n = this.raw(e, "right", "commentRight");
            this.builder("/*" + t + e.text + n + "*/", e)
        }
        decl(e, t) {
            let n = this.raw(e, "between", "colon"),
                i = e.prop + n + this.rawValue(e, "value");
            e.important && (i += e.raws.important || " !important"), t && (i += ";"), this.builder(i, e)
        }
        document(e) {
            this.body(e)
        }
        raw(e, t, n) {
            let i;
            if (n || (n = t), t && (i = e.raws[t], typeof i < "u")) return i;
            let o = e.parent;
            if (n === "before" && (!o || o.type === "root" && o.first === e || o && o.type === "document")) return "";
            if (!o) return Sy[n];
            let s = e.root();
            if (s.rawCache || (s.rawCache = {}), typeof s.rawCache[n] < "u") return s.rawCache[n];
            if (n === "before" || n === "after") return this.beforeAfter(e, n); {
                let u = "raw" + yT(n);
                this[u] ? i = this[u](s, e) : s.walk(a => {
                    if (i = a.raws[t], typeof i < "u") return !1
                })
            }
            return typeof i > "u" && (i = Sy[n]), s.rawCache[n] = i, i
        }
        rawBeforeClose(e) {
            let t;
            return e.walk(n => {
                if (n.nodes && n.nodes.length > 0 && typeof n.raws.after < "u") return t = n.raws.after, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1
            }), t && (t = t.replace(/\S/g, "")), t
        }
        rawBeforeComment(e, t) {
            let n;
            return e.walkComments(i => {
                if (typeof i.raws.before < "u") return n = i.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1
            }), typeof n > "u" ? n = this.raw(t, null, "beforeDecl") : n && (n = n.replace(/\S/g, "")), n
        }
        rawBeforeDecl(e, t) {
            let n;
            return e.walkDecls(i => {
                if (typeof i.raws.before < "u") return n = i.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1
            }), typeof n > "u" ? n = this.raw(t, null, "beforeRule") : n && (n = n.replace(/\S/g, "")), n
        }
        rawBeforeOpen(e) {
            let t;
            return e.walk(n => {
                if (n.type !== "decl" && (t = n.raws.between, typeof t < "u")) return !1
            }), t
        }
        rawBeforeRule(e) {
            let t;
            return e.walk(n => {
                if (n.nodes && (n.parent !== e || e.first !== n) && typeof n.raws.before < "u") return t = n.raws.before, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1
            }), t && (t = t.replace(/\S/g, "")), t
        }
        rawColon(e) {
            let t;
            return e.walkDecls(n => {
                if (typeof n.raws.between < "u") return t = n.raws.between.replace(/[^\s:]/g, ""), !1
            }), t
        }
        rawEmptyBody(e) {
            let t;
            return e.walk(n => {
                if (n.nodes && n.nodes.length === 0 && (t = n.raws.after, typeof t < "u")) return !1
            }), t
        }
        rawIndent(e) {
            if (e.raws.indent) return e.raws.indent;
            let t;
            return e.walk(n => {
                let i = n.parent;
                if (i && i !== e && i.parent && i.parent === e && typeof n.raws.before < "u") {
                    let o = n.raws.before.split(`
`);
                    return t = o[o.length - 1], t = t.replace(/\S/g, ""), !1
                }
            }), t
        }
        rawSemicolon(e) {
            let t;
            return e.walk(n => {
                if (n.nodes && n.nodes.length && n.last.type === "decl" && (t = n.raws.semicolon, typeof t < "u")) return !1
            }), t
        }
        rawValue(e, t) {
            let n = e[t],
                i = e.raws[t];
            return i && i.value === n ? i.raw : n
        }
        root(e) {
            this.body(e), e.raws.after && this.builder(e.raws.after)
        }
        rule(e) {
            this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end")
        }
        stringify(e, t) {
            if (!this[e.type]) throw new Error("Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier.");
            this[e.type](e, t)
        }
    }, jw = Rc;
    Rc.default = Rc;
    wT = jw;
    aa = Pc;
    Pc.default = Pc;
    ({
        isClean: bs,
        my: bT
    } = _i), ST = mf, ET = jw, _T = aa;
    Mc = class {
        constructor(e = {}) {
            this.raws = {}, this[bs] = !1, this[bT] = !0;
            for (let t in e)
                if (t === "nodes") {
                    this.nodes = [];
                    for (let n of e[t]) typeof n.clone == "function" ? this.append(n.clone()) : this.append(n)
                } else this[t] = e[t]
        }
        addToError(e) {
            if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
                let t = this.source;
                e.stack = e.stack.replace(/\n\s{4}at /, `$&${t.input.from}:${t.start.line}:${t.start.column}$&`)
            }
            return e
        }
        after(e) {
            return this.parent.insertAfter(this, e), this
        }
        assign(e = {}) {
            for (let t in e) this[t] = e[t];
            return this
        }
        before(e) {
            return this.parent.insertBefore(this, e), this
        }
        cleanRaws(e) {
            delete this.raws.before, delete this.raws.after, e || delete this.raws.between
        }
        clone(e = {}) {
            let t = Ac(this);
            for (let n in e) t[n] = e[n];
            return t
        }
        cloneAfter(e = {}) {
            let t = this.clone(e);
            return this.parent.insertAfter(this, t), t
        }
        cloneBefore(e = {}) {
            let t = this.clone(e);
            return this.parent.insertBefore(this, t), t
        }
        error(e, t = {}) {
            if (this.source) {
                let {
                    end: n,
                    start: i
                } = this.rangeBy(t);
                return this.source.input.error(e, {
                    column: i.column,
                    line: i.line
                }, {
                    column: n.column,
                    line: n.line
                }, t)
            }
            return new ST(e)
        }
        getProxyProcessor() {
            return {
                get(e, t) {
                    return t === "proxyOf" ? e : t === "root" ? () => e.root().toProxy() : e[t]
                },
                set(e, t, n) {
                    return e[t] === n || (e[t] = n, (t === "prop" || t === "value" || t === "name" || t === "params" || t === "important" || t === "text") && e.markDirty()), !0
                }
            }
        }
        markDirty() {
            if (this[bs]) {
                this[bs] = !1;
                let e = this;
                for (; e = e.parent;) e[bs] = !1
            }
        }
        next() {
            if (!this.parent) return;
            let e = this.parent.index(this);
            return this.parent.nodes[e + 1]
        }
        positionBy(e, t) {
            let n = this.source.start;
            if (e.index) n = this.positionInside(e.index, t);
            else if (e.word) {
                t = this.toString();
                let i = t.indexOf(e.word);
                i !== -1 && (n = this.positionInside(i, t))
            }
            return n
        }
        positionInside(e, t) {
            let n = t || this.toString(),
                i = this.source.start.column,
                o = this.source.start.line;
            for (let s = 0; s < e; s++) n[s] === `
` ? (i = 1, o += 1) : i += 1;
            return {
                column: i,
                line: o
            }
        }
        prev() {
            if (!this.parent) return;
            let e = this.parent.index(this);
            return this.parent.nodes[e - 1]
        }
        rangeBy(e) {
            let t = {
                    column: this.source.start.column,
                    line: this.source.start.line
                },
                n = this.source.end ? {
                    column: this.source.end.column + 1,
                    line: this.source.end.line
                } : {
                    column: t.column + 1,
                    line: t.line
                };
            if (e.word) {
                let i = this.toString(),
                    o = i.indexOf(e.word);
                o !== -1 && (t = this.positionInside(o, i), n = this.positionInside(o + e.word.length, i))
            } else e.start ? t = {
                column: e.start.column,
                line: e.start.line
            } : e.index && (t = this.positionInside(e.index)), e.end ? n = {
                column: e.end.column,
                line: e.end.line
            } : typeof e.endIndex == "number" ? n = this.positionInside(e.endIndex) : e.index && (n = this.positionInside(e.index + 1));
            return (n.line < t.line || n.line === t.line && n.column <= t.column) && (n = {
                column: t.column + 1,
                line: t.line
            }), {
                end: n,
                start: t
            }
        }
        raw(e, t) {
            return new ET().raw(this, e, t)
        }
        remove() {
            return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith(...e) {
            if (this.parent) {
                let t = this,
                    n = !1;
                for (let i of e) i === this ? n = !0 : n ? (this.parent.insertAfter(t, i), t = i) : this.parent.insertBefore(t, i);
                n || this.remove()
            }
            return this
        }
        root() {
            let e = this;
            for (; e.parent && e.parent.type !== "document";) e = e.parent;
            return e
        }
        toJSON(e, t) {
            let n = {},
                i = t == null;
            t = t || new Map;
            let o = 0;
            for (let s in this) {
                if (!Object.prototype.hasOwnProperty.call(this, s) || s === "parent" || s === "proxyCache") continue;
                let u = this[s];
                if (Array.isArray(u)) n[s] = u.map(a => typeof a == "object" && a.toJSON ? a.toJSON(null, t) : a);
                else if (typeof u == "object" && u.toJSON) n[s] = u.toJSON(null, t);
                else if (s === "source") {
                    let a = t.get(u.input);
                    a == null && (a = o, t.set(u.input, o), o++), n[s] = {
                        end: u.end,
                        inputId: a,
                        start: u.start
                    }
                } else n[s] = u
            }
            return i && (n.inputs = [...t.keys()].map(s => s.toJSON())), n
        }
        toProxy() {
            return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString(e = _T) {
            e.stringify && (e = e.stringify);
            let t = "";
            return e(this, n => {
                t += n
            }), t
        }
        warn(e, t, n) {
            let i = {
                node: this
            };
            for (let o in n) i[o] = n[o];
            return e.warn(t, i)
        }
        get proxyOf() {
            return this
        }
    }, la = Mc;
    Mc.default = Mc;
    xT = la, Nc = class extends xT {
        constructor(e) {
            e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e,
                value: String(e.value)
            }), super(e), this.type = "decl"
        }
        get variable() {
            return this.prop.startsWith("--") || this.prop[0] === "$"
        }
    }, ua = Nc;
    Nc.default = Nc;
    CT = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", IT = (r, e = 21) => (t = e) => {
        let n = "",
            i = t;
        for (; i--;) n += r[Math.random() * r.length | 0];
        return n
    }, TT = (r = 21) => {
        let e = "",
            t = r;
        for (; t--;) e += CT[Math.random() * 64 | 0];
        return e
    }, OT = {
        nanoid: TT,
        customAlphabet: IT
    }, {
        SourceMapConsumer: Ey,
        SourceMapGenerator: _y
    } = Nt, {
        existsSync: RT,
        readFileSync: PT
    } = Nt, {
        dirname: oc,
        join: AT
    } = Nt;
    Dc = class {
        constructor(e, t) {
            if (t.map === !1) return;
            this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
            let n = t.map ? t.map.prev : void 0,
                i = this.loadMap(t.from, n);
            !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = oc(this.mapFile)), i && (this.text = i)
        }
        consumer() {
            return this.consumerCache || (this.consumerCache = new Ey(this.text)), this.consumerCache
        }
        decodeInline(e) {
            let t = /^data:application\/json;charset=utf-?8;base64,/,
                n = /^data:application\/json;base64,/,
                i = /^data:application\/json;charset=utf-?8,/,
                o = /^data:application\/json,/;
            if (i.test(e) || o.test(e)) return decodeURIComponent(e.substr(RegExp.lastMatch.length));
            if (t.test(e) || n.test(e)) return MT(e.substr(RegExp.lastMatch.length));
            let s = e.match(/data:application\/json;([^,]+),/)[1];
            throw new Error("Unsupported source map encoding " + s)
        }
        getAnnotationURL(e) {
            return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(e) {
            return typeof e != "object" ? !1 : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections)
        }
        loadAnnotation(e) {
            let t = e.match(/\/\*\s*# sourceMappingURL=/gm);
            if (!t) return;
            let n = e.lastIndexOf(t.pop()),
                i = e.indexOf("*/", n);
            n > -1 && i > -1 && (this.annotation = this.getAnnotationURL(e.substring(n, i)))
        }
        loadFile(e) {
            if (this.root = oc(e), RT(e)) return this.mapFile = e, PT(e, "utf-8").toString().trim()
        }
        loadMap(e, t) {
            if (t === !1) return !1;
            if (t) {
                if (typeof t == "string") return t;
                if (typeof t == "function") {
                    let n = t(e);
                    if (n) {
                        let i = this.loadFile(n);
                        if (!i) throw new Error("Unable to load previous source map: " + n.toString());
                        return i
                    }
                } else {
                    if (t instanceof Ey) return _y.fromSourceMap(t).toString();
                    if (t instanceof _y) return t.toString();
                    if (this.isMap(t)) return JSON.stringify(t);
                    throw new Error("Unsupported previous source map format: " + t.toString())
                }
            } else {
                if (this.inline) return this.decodeInline(this.annotation);
                if (this.annotation) {
                    let n = this.annotation;
                    return e && (n = AT(oc(e), n)), this.loadFile(n)
                }
            }
        }
        startWith(e, t) {
            return e ? e.substr(0, t.length) === t : !1
        }
        withContent() {
            return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
    }, Bw = Dc;
    Dc.default = Dc;
    ({
        SourceMapConsumer: NT,
        SourceMapGenerator: DT
    } = Nt), {
        fileURLToPath: xy,
        pathToFileURL: Ss
    } = Nt, {
        isAbsolute: kc,
        resolve: Lc
    } = Nt, {
        nanoid: kT
    } = OT, sc = Nt, Cy = mf, LT = Bw, ac = Symbol("fromOffsetCache"), FT = !!(NT && DT), Iy = !!(Lc && kc), qs = class {
        constructor(e, t = {}) {
            if (e === null || typeof e > "u" || typeof e == "object" && !e.toString) throw new Error(`PostCSS received ${e} instead of CSS string`);
            if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!Iy || /^\w+:\/\//.test(t.from) || kc(t.from) ? this.file = t.from : this.file = Lc(t.from)), Iy && FT) {
                let n = new LT(this.css, t);
                if (n.text) {
                    this.map = n;
                    let i = n.consumer().file;
                    !this.file && i && (this.file = this.mapResolve(i))
                }
            }
            this.file || (this.id = "<input css " + kT(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(e, t, n, i = {}) {
            let o, s, u;
            if (t && typeof t == "object") {
                let l = t,
                    c = n;
                if (typeof l.offset == "number") {
                    let f = this.fromOffset(l.offset);
                    t = f.line, n = f.col
                } else t = l.line, n = l.column;
                if (typeof c.offset == "number") {
                    let f = this.fromOffset(c.offset);
                    s = f.line, u = f.col
                } else s = c.line, u = c.column
            } else if (!n) {
                let l = this.fromOffset(t);
                t = l.line, n = l.col
            }
            let a = this.origin(t, n, s, u);
            return a ? o = new Cy(e, a.endLine === void 0 ? a.line : {
                column: a.column,
                line: a.line
            }, a.endLine === void 0 ? a.column : {
                column: a.endColumn,
                line: a.endLine
            }, a.source, a.file, i.plugin) : o = new Cy(e, s === void 0 ? t : {
                column: n,
                line: t
            }, s === void 0 ? n : {
                column: u,
                line: s
            }, this.css, this.file, i.plugin), o.input = {
                column: n,
                endColumn: u,
                endLine: s,
                line: t,
                source: this.css
            }, this.file && (Ss && (o.input.url = Ss(this.file).toString()), o.input.file = this.file), o
        }
        fromOffset(e) {
            let t, n;
            if (this[ac]) n = this[ac];
            else {
                let o = this.css.split(`
`);
                n = new Array(o.length);
                let s = 0;
                for (let u = 0, a = o.length; u < a; u++) n[u] = s, s += o[u].length + 1;
                this[ac] = n
            }
            t = n[n.length - 1];
            let i = 0;
            if (e >= t) i = n.length - 1;
            else {
                let o = n.length - 2,
                    s;
                for (; i < o;)
                    if (s = i + (o - i >> 1), e < n[s]) o = s - 1;
                    else if (e >= n[s + 1]) i = s + 1;
                else {
                    i = s;
                    break
                }
            }
            return {
                col: e - n[i] + 1,
                line: i + 1
            }
        }
        mapResolve(e) {
            return /^\w+:\/\//.test(e) ? e : Lc(this.map.consumer().sourceRoot || this.map.root || ".", e)
        }
        origin(e, t, n, i) {
            if (!this.map) return !1;
            let o = this.map.consumer(),
                s = o.originalPositionFor({
                    column: t,
                    line: e
                });
            if (!s.source) return !1;
            let u;
            typeof n == "number" && (u = o.originalPositionFor({
                column: i,
                line: n
            }));
            let a;
            kc(s.source) ? a = Ss(s.source) : a = new URL(s.source, this.map.consumer().sourceRoot || Ss(this.map.mapFile));
            let l = {
                column: s.column,
                endColumn: u && u.column,
                endLine: u && u.line,
                line: s.line,
                url: a.toString()
            };
            if (a.protocol === "file:")
                if (xy) l.file = xy(a);
                else throw new Error("file: protocol is not available in this PostCSS build");
            let c = o.sourceContentFor(s.source);
            return c && (l.source = c), l
        }
        toJSON() {
            let e = {};
            for (let t of ["hasBOM", "css", "file", "id"]) this[t] != null && (e[t] = this[t]);
            return this.map && (e.map = { ...this.map
            }, e.map.consumerCache && (e.map.consumerCache = void 0)), e
        }
        get from() {
            return this.file || this.id
        }
    }, ca = qs;
    qs.default = qs;
    sc && sc.registerInput && sc.registerInput(qs);
    ({
        SourceMapConsumer: Vw,
        SourceMapGenerator: Ds
    } = Nt), {
        dirname: ks,
        relative: Ww,
        resolve: Gw,
        sep: zw
    } = Nt, {
        pathToFileURL: Ty
    } = Nt, UT = ca, $T = !!(Vw && Ds), jT = !!(ks && Gw && Ww && zw), BT = class {
        constructor(e, t, n, i) {
            this.stringify = e, this.mapOpts = n.map || {}, this.root = t, this.opts = n, this.css = i, this.originalCSS = i, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
            let e;
            this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
            let t = `
`;
            this.css.includes(`\r
`) && (t = `\r
`), this.css += t + "/*# sourceMappingURL=" + e + " */"
        }
        applyPrevMaps() {
            for (let e of this.previous()) {
                let t = this.toUrl(this.path(e.file)),
                    n = e.root || ks(e.file),
                    i;
                this.mapOpts.sourcesContent === !1 ? (i = new Vw(e.text), i.sourcesContent && (i.sourcesContent = null)) : i = e.consumer(), this.map.applySourceMap(i, t, this.toUrl(this.path(n)))
            }
        }
        clearAnnotation() {
            if (this.mapOpts.annotation !== !1)
                if (this.root) {
                    let e;
                    for (let t = this.root.nodes.length - 1; t >= 0; t--) e = this.root.nodes[t], e.type === "comment" && e.text.indexOf("# sourceMappingURL=") === 0 && this.root.removeChild(t)
                } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
            if (this.clearAnnotation(), jT && $T && this.isMap()) return this.generateMap(); {
                let e = "";
                return this.stringify(this.root, t => {
                    e += t
                }), [e]
            }
        }
        generateMap() {
            if (this.root) this.generateString();
            else if (this.previous().length === 1) {
                let e = this.previous()[0].consumer();
                e.file = this.outputFile(), this.map = Ds.fromSourceMap(e, {
                    ignoreInvalidMapping: !0
                })
            } else this.map = new Ds({
                file: this.outputFile(),
                ignoreInvalidMapping: !0
            }), this.map.addMapping({
                generated: {
                    column: 0,
                    line: 1
                },
                original: {
                    column: 0,
                    line: 1
                },
                source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
            });
            return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map]
        }
        generateString() {
            this.css = "", this.map = new Ds({
                file: this.outputFile(),
                ignoreInvalidMapping: !0
            });
            let e = 1,
                t = 1,
                n = "<no source>",
                i = {
                    generated: {
                        column: 0,
                        line: 0
                    },
                    original: {
                        column: 0,
                        line: 0
                    },
                    source: ""
                },
                o, s;
            this.stringify(this.root, (u, a, l) => {
                if (this.css += u, a && l !== "end" && (i.generated.line = e, i.generated.column = t - 1, a.source && a.source.start ? (i.source = this.sourcePath(a), i.original.line = a.source.start.line, i.original.column = a.source.start.column - 1, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, this.map.addMapping(i))), o = u.match(/\n/g), o ? (e += o.length, s = u.lastIndexOf(`
`), t = u.length - s) : t += u.length, a && l !== "start") {
                    let c = a.parent || {
                        raws: {}
                    };
                    (!(a.type === "decl" || a.type === "atrule" && !a.nodes) || a !== c.last || c.raws.semicolon) && (a.source && a.source.end ? (i.source = this.sourcePath(a), i.original.line = a.source.end.line, i.original.column = a.source.end.column - 1, i.generated.line = e, i.generated.column = t - 2, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, i.generated.line = e, i.generated.column = t - 1, this.map.addMapping(i)))
                }
            })
        }
        isAnnotation() {
            return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some(e => e.annotation) : !0
        }
        isInline() {
            if (typeof this.mapOpts.inline < "u") return this.mapOpts.inline;
            let e = this.mapOpts.annotation;
            return typeof e < "u" && e !== !0 ? !1 : this.previous().length ? this.previous().some(t => t.inline) : !0
        }
        isMap() {
            return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
            return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some(e => e.withContent()) : !0
        }
        outputFile() {
            return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(e) {
            if (this.mapOpts.absolute || e.charCodeAt(0) === 60 || /^\w+:\/\//.test(e)) return e;
            let t = this.memoizedPaths.get(e);
            if (t) return t;
            let n = this.opts.to ? ks(this.opts.to) : ".";
            typeof this.mapOpts.annotation == "string" && (n = ks(Gw(n, this.mapOpts.annotation)));
            let i = Ww(n, e);
            return this.memoizedPaths.set(e, i), i
        }
        previous() {
            if (!this.previousMaps)
                if (this.previousMaps = [], this.root) this.root.walk(e => {
                    if (e.source && e.source.input.map) {
                        let t = e.source.input.map;
                        this.previousMaps.includes(t) || this.previousMaps.push(t)
                    }
                });
                else {
                    let e = new UT(this.originalCSS, this.opts);
                    e.map && this.previousMaps.push(e.map)
                }
            return this.previousMaps
        }
        setSourcesContent() {
            let e = {};
            if (this.root) this.root.walk(t => {
                if (t.source) {
                    let n = t.source.input.from;
                    if (n && !e[n]) {
                        e[n] = !0;
                        let i = this.usesFileUrls ? this.toFileUrl(n) : this.toUrl(this.path(n));
                        this.map.setSourceContent(i, t.source.input.css)
                    }
                }
            });
            else if (this.css) {
                let t = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
                this.map.setSourceContent(t, this.css)
            }
        }
        sourcePath(e) {
            return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from))
        }
        toBase64(e) {
            return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)))
        }
        toFileUrl(e) {
            let t = this.memoizedFileURLs.get(e);
            if (t) return t;
            if (Ty) {
                let n = Ty(e).toString();
                return this.memoizedFileURLs.set(e, n), n
            } else throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(e) {
            let t = this.memoizedURLs.get(e);
            if (t) return t;
            zw === "\\" && (e = e.replace(/\\/g, "/"));
            let n = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
            return this.memoizedURLs.set(e, n), n
        }
    }, qw = BT, VT = la, Fc = class extends VT {
        constructor(e) {
            super(e), this.type = "comment"
        }
    }, fa = Fc;
    Fc.default = Fc;
    ({
        isClean: Hw,
        my: Yw
    } = _i), Kw = ua, Xw = fa, WT = la;
    ir = class tb extends WT {
        append(...e) {
            for (let t of e) {
                let n = this.normalize(t, this.last);
                for (let i of n) this.proxyOf.nodes.push(i)
            }
            return this.markDirty(), this
        }
        cleanRaws(e) {
            if (super.cleanRaws(e), this.nodes)
                for (let t of this.nodes) t.cleanRaws(e)
        }
        each(e) {
            if (!this.proxyOf.nodes) return;
            let t = this.getIterator(),
                n, i;
            for (; this.indexes[t] < this.proxyOf.nodes.length && (n = this.indexes[t], i = e(this.proxyOf.nodes[n], n), i !== !1);) this.indexes[t] += 1;
            return delete this.indexes[t], i
        }
        every(e) {
            return this.nodes.every(e)
        }
        getIterator() {
            this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
            let e = this.lastEach;
            return this.indexes[e] = 0, e
        }
        getProxyProcessor() {
            return {
                get(e, t) {
                    return t === "proxyOf" ? e : e[t] ? t === "each" || typeof t == "string" && t.startsWith("walk") ? (...n) => e[t](...n.map(i => typeof i == "function" ? (o, s) => i(o.toProxy(), s) : i)) : t === "every" || t === "some" ? n => e[t]((i, ...o) => n(i.toProxy(), ...o)) : t === "root" ? () => e.root().toProxy() : t === "nodes" ? e.nodes.map(n => n.toProxy()) : t === "first" || t === "last" ? e[t].toProxy() : e[t] : e[t]
                },
                set(e, t, n) {
                    return e[t] === n || (e[t] = n, (t === "name" || t === "params" || t === "selector") && e.markDirty()), !0
                }
            }
        }
        index(e) {
            return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e))
        }
        insertAfter(e, t) {
            let n = this.index(e),
                i = this.normalize(t, this.proxyOf.nodes[n]).reverse();
            n = this.index(e);
            for (let s of i) this.proxyOf.nodes.splice(n + 1, 0, s);
            let o;
            for (let s in this.indexes) o = this.indexes[s], n < o && (this.indexes[s] = o + i.length);
            return this.markDirty(), this
        }
        insertBefore(e, t) {
            let n = this.index(e),
                i = n === 0 ? "prepend" : !1,
                o = this.normalize(t, this.proxyOf.nodes[n], i).reverse();
            n = this.index(e);
            for (let u of o) this.proxyOf.nodes.splice(n, 0, u);
            let s;
            for (let u in this.indexes) s = this.indexes[u], n <= s && (this.indexes[u] = s + o.length);
            return this.markDirty(), this
        }
        normalize(e, t) {
            if (typeof e == "string") e = Qw(Jw(e).nodes);
            else if (typeof e > "u") e = [];
            else if (Array.isArray(e)) {
                e = e.slice(0);
                for (let i of e) i.parent && i.parent.removeChild(i, "ignore")
            } else if (e.type === "root" && this.type !== "document") {
                e = e.nodes.slice(0);
                for (let i of e) i.parent && i.parent.removeChild(i, "ignore")
            } else if (e.type) e = [e];
            else if (e.prop) {
                if (typeof e.value > "u") throw new Error("Value field is missed in node creation");
                typeof e.value != "string" && (e.value = String(e.value)), e = [new Kw(e)]
            } else if (e.selector) e = [new gf(e)];
            else if (e.name) e = [new vf(e)];
            else if (e.text) e = [new Xw(e)];
            else throw new Error("Unknown node type in node creation");
            return e.map(i => (i[Yw] || tb.rebuild(i), i = i.proxyOf, i.parent && i.parent.removeChild(i), i[Hw] && eb(i), typeof i.raws.before > "u" && t && typeof t.raws.before < "u" && (i.raws.before = t.raws.before.replace(/\S/g, "")), i.parent = this.proxyOf, i))
        }
        prepend(...e) {
            e = e.reverse();
            for (let t of e) {
                let n = this.normalize(t, this.first, "prepend").reverse();
                for (let i of n) this.proxyOf.nodes.unshift(i);
                for (let i in this.indexes) this.indexes[i] = this.indexes[i] + n.length
            }
            return this.markDirty(), this
        }
        push(e) {
            return e.parent = this, this.proxyOf.nodes.push(e), this
        }
        removeAll() {
            for (let e of this.proxyOf.nodes) e.parent = void 0;
            return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(e) {
            e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
            let t;
            for (let n in this.indexes) t = this.indexes[n], t >= e && (this.indexes[n] = t - 1);
            return this.markDirty(), this
        }
        replaceValues(e, t, n) {
            return n || (n = t, t = {}), this.walkDecls(i => {
                t.props && !t.props.includes(i.prop) || t.fast && !i.value.includes(t.fast) || (i.value = i.value.replace(e, n))
            }), this.markDirty(), this
        }
        some(e) {
            return this.nodes.some(e)
        }
        walk(e) {
            return this.each((t, n) => {
                let i;
                try {
                    i = e(t, n)
                } catch (o) {
                    throw t.addToError(o)
                }
                return i !== !1 && t.walk && (i = t.walk(e)), i
            })
        }
        walkAtRules(e, t) {
            return t ? e instanceof RegExp ? this.walk((n, i) => {
                if (n.type === "atrule" && e.test(n.name)) return t(n, i)
            }) : this.walk((n, i) => {
                if (n.type === "atrule" && n.name === e) return t(n, i)
            }) : (t = e, this.walk((n, i) => {
                if (n.type === "atrule") return t(n, i)
            }))
        }
        walkComments(e) {
            return this.walk((t, n) => {
                if (t.type === "comment") return e(t, n)
            })
        }
        walkDecls(e, t) {
            return t ? e instanceof RegExp ? this.walk((n, i) => {
                if (n.type === "decl" && e.test(n.prop)) return t(n, i)
            }) : this.walk((n, i) => {
                if (n.type === "decl" && n.prop === e) return t(n, i)
            }) : (t = e, this.walk((n, i) => {
                if (n.type === "decl") return t(n, i)
            }))
        }
        walkRules(e, t) {
            return t ? e instanceof RegExp ? this.walk((n, i) => {
                if (n.type === "rule" && e.test(n.selector)) return t(n, i)
            }) : this.walk((n, i) => {
                if (n.type === "rule" && n.selector === e) return t(n, i)
            }) : (t = e, this.walk((n, i) => {
                if (n.type === "rule") return t(n, i)
            }))
        }
        get first() {
            if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
            if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
    };
    ir.registerParse = r => {
        Jw = r
    };
    ir.registerRule = r => {
        gf = r
    };
    ir.registerAtRule = r => {
        vf = r
    };
    ir.registerRoot = r => {
        Zw = r
    };
    Ur = ir;
    ir.default = ir;
    ir.rebuild = r => {
        r.type === "atrule" ? Object.setPrototypeOf(r, vf.prototype) : r.type === "rule" ? Object.setPrototypeOf(r, gf.prototype) : r.type === "decl" ? Object.setPrototypeOf(r, Kw.prototype) : r.type === "comment" ? Object.setPrototypeOf(r, Xw.prototype) : r.type === "root" && Object.setPrototypeOf(r, Zw.prototype), r[Yw] = !0, r.nodes && r.nodes.forEach(e => {
            ir.rebuild(e)
        })
    };
    GT = Ur, gi = class extends GT {
        constructor(e) {
            super({
                type: "document",
                ...e
            }), this.nodes || (this.nodes = [])
        }
        toResult(e = {}) {
            return new rb(new nb, this, e).stringify()
        }
    };
    gi.registerLazyResult = r => {
        rb = r
    };
    gi.registerProcessor = r => {
        nb = r
    };
    yf = gi;
    gi.default = gi;
    Uc = class {
        constructor(e, t = {}) {
            if (this.type = "warning", this.text = e, t.node && t.node.source) {
                let n = t.node.rangeBy(t);
                this.line = n.start.line, this.column = n.start.column, this.endLine = n.end.line, this.endColumn = n.end.column
            }
            for (let n in t) this[n] = t[n]
        }
        toString() {
            return this.node ? this.node.error(this.text, {
                index: this.index,
                plugin: this.plugin,
                word: this.word
            }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
    }, ib = Uc;
    Uc.default = Uc;
    zT = ib, $c = class {
        constructor(e, t, n) {
            this.processor = e, this.messages = [], this.root = t, this.opts = n, this.css = void 0, this.map = void 0
        }
        toString() {
            return this.css
        }
        warn(e, t = {}) {
            t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
            let n = new zT(e, t);
            return this.messages.push(n), n
        }
        warnings() {
            return this.messages.filter(e => e.type === "warning")
        }
        get content() {
            return this.css
        }
    }, wf = $c;
    $c.default = $c;
    lc = 39, Oy = 34, Es = 92, Ry = 47, _s = 10, oi = 32, xs = 12, Cs = 9, Is = 13, qT = 91, HT = 93, YT = 40, KT = 41, XT = 123, JT = 125, ZT = 59, QT = 42, eO = 58, tO = 64, Ts = /[\t\n\f\r "#'()/;[\\\]{}]/g, Os = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, rO = /.[\r\n"'(/\\]/, Py = /[\da-f]/i, nO = function(e, t = {}) {
        let n = e.css.valueOf(),
            i = t.ignoreErrors,
            o, s, u, a, l, c, f, d, p, h, g = n.length,
            m = 0,
            b = [],
            v = [];

        function y() {
            return m
        }

        function S(E) {
            throw e.error("Unclosed " + E, m)
        }

        function _() {
            return v.length === 0 && m >= g
        }

        function x(E) {
            if (v.length) return v.pop();
            if (m >= g) return;
            let I = E ? E.ignoreUnclosed : !1;
            switch (o = n.charCodeAt(m), o) {
                case _s:
                case oi:
                case Cs:
                case Is:
                case xs:
                    {
                        s = m;do s += 1,
                        o = n.charCodeAt(s);
                        while (o === oi || o === _s || o === Cs || o === Is || o === xs);h = ["space", n.slice(m, s)],
                        m = s - 1;
                        break
                    }
                case qT:
                case HT:
                case XT:
                case JT:
                case eO:
                case ZT:
                case KT:
                    {
                        let R = String.fromCharCode(o);h = [R, R, m];
                        break
                    }
                case YT:
                    {
                        if (d = b.length ? b.pop()[1] : "", p = n.charCodeAt(m + 1), d === "url" && p !== lc && p !== Oy && p !== oi && p !== _s && p !== Cs && p !== xs && p !== Is) {
                            s = m;
                            do {
                                if (c = !1, s = n.indexOf(")", s + 1), s === -1)
                                    if (i || I) {
                                        s = m;
                                        break
                                    } else S("bracket");
                                for (f = s; n.charCodeAt(f - 1) === Es;) f -= 1, c = !c
                            } while (c);
                            h = ["brackets", n.slice(m, s + 1), m, s], m = s
                        } else s = n.indexOf(")", m + 1),
                        a = n.slice(m, s + 1),
                        s === -1 || rO.test(a) ? h = ["(", "(", m] : (h = ["brackets", a, m, s], m = s);
                        break
                    }
                case lc:
                case Oy:
                    {
                        u = o === lc ? "'" : '"',
                        s = m;do {
                            if (c = !1, s = n.indexOf(u, s + 1), s === -1)
                                if (i || I) {
                                    s = m + 1;
                                    break
                                } else S("string");
                            for (f = s; n.charCodeAt(f - 1) === Es;) f -= 1, c = !c
                        } while (c);h = ["string", n.slice(m, s + 1), m, s],
                        m = s;
                        break
                    }
                case tO:
                    {
                        Ts.lastIndex = m + 1,
                        Ts.test(n),
                        Ts.lastIndex === 0 ? s = n.length - 1 : s = Ts.lastIndex - 2,
                        h = ["at-word", n.slice(m, s + 1), m, s],
                        m = s;
                        break
                    }
                case Es:
                    {
                        for (s = m, l = !0; n.charCodeAt(s + 1) === Es;) s += 1,
                        l = !l;
                        if (o = n.charCodeAt(s + 1), l && o !== Ry && o !== oi && o !== _s && o !== Cs && o !== Is && o !== xs && (s += 1, Py.test(n.charAt(s)))) {
                            for (; Py.test(n.charAt(s + 1));) s += 1;
                            n.charCodeAt(s + 1) === oi && (s += 1)
                        }
                        h = ["word", n.slice(m, s + 1), m, s],
                        m = s;
                        break
                    }
                default:
                    {
                        o === Ry && n.charCodeAt(m + 1) === QT ? (s = n.indexOf("*/", m + 2) + 1, s === 0 && (i || I ? s = n.length : S("comment")), h = ["comment", n.slice(m, s + 1), m, s], m = s) : (Os.lastIndex = m + 1, Os.test(n), Os.lastIndex === 0 ? s = n.length - 1 : s = Os.lastIndex - 2, h = ["word", n.slice(m, s + 1), m, s], b.push(h), m = s);
                        break
                    }
            }
            return m++, h
        }

        function C(E) {
            v.push(E)
        }
        return {
            back: C,
            endOfFile: _,
            nextToken: x,
            position: y
        }
    }, ob = Ur, Hs = class extends ob {
        constructor(e) {
            super(e), this.type = "atrule"
        }
        append(...e) {
            return this.proxyOf.nodes || (this.nodes = []), super.append(...e)
        }
        prepend(...e) {
            return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e)
        }
    }, bf = Hs;
    Hs.default = Hs;
    ob.registerAtRule(Hs);
    sb = Ur, hn = class extends sb {
        constructor(e) {
            super(e), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(e, t, n) {
            let i = super.normalize(e);
            if (t) {
                if (n === "prepend") this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
                else if (this.first !== t)
                    for (let o of i) o.raws.before = t.raws.before
            }
            return i
        }
        removeChild(e, t) {
            let n = this.index(e);
            return !t && n === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n].raws.before), super.removeChild(e)
        }
        toResult(e = {}) {
            return new ab(new lb, this, e).stringify()
        }
    };
    hn.registerLazyResult = r => {
        ab = r
    };
    hn.registerProcessor = r => {
        lb = r
    };
    xi = hn;
    hn.default = hn;
    sb.registerRoot(hn);
    vi = {
        comma(r) {
            return vi.split(r, [","], !0)
        },
        space(r) {
            let e = [" ", `
`, "	"];
            return vi.split(r, e)
        },
        split(r, e, t) {
            let n = [],
                i = "",
                o = !1,
                s = 0,
                u = !1,
                a = "",
                l = !1;
            for (let c of r) l ? l = !1 : c === "\\" ? l = !0 : u ? c === a && (u = !1) : c === '"' || c === "'" ? (u = !0, a = c) : c === "(" ? s += 1 : c === ")" ? s > 0 && (s -= 1) : s === 0 && e.includes(c) && (o = !0), o ? (i !== "" && n.push(i.trim()), i = "", o = !1) : i += c;
            return (t || i !== "") && n.push(i.trim()), n
        }
    }, ub = vi;
    vi.default = vi;
    cb = Ur, iO = ub, Ys = class extends cb {
        constructor(e) {
            super(e), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
            return iO.comma(this.selector)
        }
        set selectors(e) {
            let t = this.selector ? this.selector.match(/,\s*/) : null,
                n = t ? t[0] : "," + this.raw("between", "beforeOpen");
            this.selector = e.join(n)
        }
    }, Sf = Ys;
    Ys.default = Ys;
    cb.registerRule(Ys);
    oO = ua, sO = nO, aO = fa, lO = bf, uO = xi, Ay = Sf, My = {
        empty: !0,
        space: !0
    };
    fO = class {
        constructor(e) {
            this.input = e, this.root = new uO, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
                input: e,
                start: {
                    column: 1,
                    line: 1,
                    offset: 0
                }
            }
        }
        atrule(e) {
            let t = new lO;
            t.name = e[1].slice(1), t.name === "" && this.unnamedAtrule(t, e), this.init(t, e[2]);
            let n, i, o, s = !1,
                u = !1,
                a = [],
                l = [];
            for (; !this.tokenizer.endOfFile();) {
                if (e = this.tokenizer.nextToken(), n = e[0], n === "(" || n === "[" ? l.push(n === "(" ? ")" : "]") : n === "{" && l.length > 0 ? l.push("}") : n === l[l.length - 1] && l.pop(), l.length === 0)
                    if (n === ";") {
                        t.source.end = this.getPosition(e[2]), t.source.end.offset++, this.semicolon = !0;
                        break
                    } else if (n === "{") {
                    u = !0;
                    break
                } else if (n === "}") {
                    if (a.length > 0) {
                        for (o = a.length - 1, i = a[o]; i && i[0] === "space";) i = a[--o];
                        i && (t.source.end = this.getPosition(i[3] || i[2]), t.source.end.offset++)
                    }
                    this.end(e);
                    break
                } else a.push(e);
                else a.push(e);
                if (this.tokenizer.endOfFile()) {
                    s = !0;
                    break
                }
            }
            t.raws.between = this.spacesAndCommentsFromEnd(a), a.length ? (t.raws.afterName = this.spacesAndCommentsFromStart(a), this.raw(t, "params", a), s && (e = a[a.length - 1], t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++, this.spaces = t.raws.between, t.raws.between = "")) : (t.raws.afterName = "", t.params = ""), u && (t.nodes = [], this.current = t)
        }
        checkMissedSemicolon(e) {
            let t = this.colon(e);
            if (t === !1) return;
            let n = 0,
                i;
            for (let o = t - 1; o >= 0 && (i = e[o], !(i[0] !== "space" && (n += 1, n === 2))); o--);
            throw this.input.error("Missed semicolon", i[0] === "word" ? i[3] + 1 : i[2])
        }
        colon(e) {
            let t = 0,
                n, i, o;
            for (let [s, u] of e.entries()) {
                if (n = u, i = n[0], i === "(" && (t += 1), i === ")" && (t -= 1), t === 0 && i === ":")
                    if (!o) this.doubleColon(n);
                    else {
                        if (o[0] === "word" && o[1] === "progid") continue;
                        return s
                    }
                o = n
            }
            return !1
        }
        comment(e) {
            let t = new aO;
            this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++;
            let n = e[1].slice(2, -2);
            if (/^\s*$/.test(n)) t.text = "", t.raws.left = n, t.raws.right = "";
            else {
                let i = n.match(/^(\s*)([^]*\S)(\s*)$/);
                t.text = i[2], t.raws.left = i[1], t.raws.right = i[3]
            }
        }
        createTokenizer() {
            this.tokenizer = sO(this.input)
        }
        decl(e, t) {
            let n = new oO;
            this.init(n, e[0][2]);
            let i = e[e.length - 1];
            for (i[0] === ";" && (this.semicolon = !0, e.pop()), n.source.end = this.getPosition(i[3] || i[2] || cO(e)), n.source.end.offset++; e[0][0] !== "word";) e.length === 1 && this.unknownWord(e), n.raws.before += e.shift()[1];
            for (n.source.start = this.getPosition(e[0][2]), n.prop = ""; e.length;) {
                let l = e[0][0];
                if (l === ":" || l === "space" || l === "comment") break;
                n.prop += e.shift()[1]
            }
            n.raws.between = "";
            let o;
            for (; e.length;)
                if (o = e.shift(), o[0] === ":") {
                    n.raws.between += o[1];
                    break
                } else o[0] === "word" && /\w/.test(o[1]) && this.unknownWord([o]), n.raws.between += o[1];
            (n.prop[0] === "_" || n.prop[0] === "*") && (n.raws.before += n.prop[0], n.prop = n.prop.slice(1));
            let s = [],
                u;
            for (; e.length && (u = e[0][0], !(u !== "space" && u !== "comment"));) s.push(e.shift());
            this.precheckMissedSemicolon(e);
            for (let l = e.length - 1; l >= 0; l--) {
                if (o = e[l], o[1].toLowerCase() === "!important") {
                    n.important = !0;
                    let c = this.stringFrom(e, l);
                    c = this.spacesFromEnd(e) + c, c !== " !important" && (n.raws.important = c);
                    break
                } else if (o[1].toLowerCase() === "important") {
                    let c = e.slice(0),
                        f = "";
                    for (let d = l; d > 0; d--) {
                        let p = c[d][0];
                        if (f.trim().indexOf("!") === 0 && p !== "space") break;
                        f = c.pop()[1] + f
                    }
                    f.trim().indexOf("!") === 0 && (n.important = !0, n.raws.important = f, e = c)
                }
                if (o[0] !== "space" && o[0] !== "comment") break
            }
            e.some(l => l[0] !== "space" && l[0] !== "comment") && (n.raws.between += s.map(l => l[1]).join(""), s = []), this.raw(n, "value", s.concat(e), t), n.value.includes(":") && !t && this.checkMissedSemicolon(e)
        }
        doubleColon(e) {
            throw this.input.error("Double colon", {
                offset: e[2]
            }, {
                offset: e[2] + e[1].length
            })
        }
        emptyRule(e) {
            let t = new Ay;
            this.init(t, e[2]), t.selector = "", t.raws.between = "", this.current = t
        }
        end(e) {
            this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e)
        }
        endFile() {
            this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position())
        }
        freeSemicolon(e) {
            if (this.spaces += e[1], this.current.nodes) {
                let t = this.current.nodes[this.current.nodes.length - 1];
                t && t.type === "rule" && !t.raws.ownSemicolon && (t.raws.ownSemicolon = this.spaces, this.spaces = "")
            }
        }
        getPosition(e) {
            let t = this.input.fromOffset(e);
            return {
                column: t.col,
                line: t.line,
                offset: e
            }
        }
        init(e, t) {
            this.current.push(e), e.source = {
                input: this.input,
                start: this.getPosition(t)
            }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = !1)
        }
        other(e) {
            let t = !1,
                n = null,
                i = !1,
                o = null,
                s = [],
                u = e[1].startsWith("--"),
                a = [],
                l = e;
            for (; l;) {
                if (n = l[0], a.push(l), n === "(" || n === "[") o || (o = l), s.push(n === "(" ? ")" : "]");
                else if (u && i && n === "{") o || (o = l), s.push("}");
                else if (s.length === 0)
                    if (n === ";")
                        if (i) {
                            this.decl(a, u);
                            return
                        } else break;
                else if (n === "{") {
                    this.rule(a);
                    return
                } else if (n === "}") {
                    this.tokenizer.back(a.pop()), t = !0;
                    break
                } else n === ":" && (i = !0);
                else n === s[s.length - 1] && (s.pop(), s.length === 0 && (o = null));
                l = this.tokenizer.nextToken()
            }
            if (this.tokenizer.endOfFile() && (t = !0), s.length > 0 && this.unclosedBracket(o), t && i) {
                if (!u)
                    for (; a.length && (l = a[a.length - 1][0], !(l !== "space" && l !== "comment"));) this.tokenizer.back(a.pop());
                this.decl(a, u)
            } else this.unknownWord(a)
        }
        parse() {
            let e;
            for (; !this.tokenizer.endOfFile();) switch (e = this.tokenizer.nextToken(), e[0]) {
                case "space":
                    this.spaces += e[1];
                    break;
                case ";":
                    this.freeSemicolon(e);
                    break;
                case "}":
                    this.end(e);
                    break;
                case "comment":
                    this.comment(e);
                    break;
                case "at-word":
                    this.atrule(e);
                    break;
                case "{":
                    this.emptyRule(e);
                    break;
                default:
                    this.other(e);
                    break
            }
            this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(e, t, n, i) {
            let o, s, u = n.length,
                a = "",
                l = !0,
                c, f;
            for (let d = 0; d < u; d += 1) o = n[d], s = o[0], s === "space" && d === u - 1 && !i ? l = !1 : s === "comment" ? (f = n[d - 1] ? n[d - 1][0] : "empty", c = n[d + 1] ? n[d + 1][0] : "empty", !My[f] && !My[c] ? a.slice(-1) === "," ? l = !1 : a += o[1] : l = !1) : a += o[1];
            if (!l) {
                let d = n.reduce((p, h) => p + h[1], "");
                e.raws[t] = {
                    raw: d,
                    value: a
                }
            }
            e[t] = a
        }
        rule(e) {
            e.pop();
            let t = new Ay;
            this.init(t, e[0][2]), t.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(t, "selector", e), this.current = t
        }
        spacesAndCommentsFromEnd(e) {
            let t, n = "";
            for (; e.length && (t = e[e.length - 1][0], !(t !== "space" && t !== "comment"));) n = e.pop()[1] + n;
            return n
        }
        spacesAndCommentsFromStart(e) {
            let t, n = "";
            for (; e.length && (t = e[0][0], !(t !== "space" && t !== "comment"));) n += e.shift()[1];
            return n
        }
        spacesFromEnd(e) {
            let t, n = "";
            for (; e.length && (t = e[e.length - 1][0], t === "space");) n = e.pop()[1] + n;
            return n
        }
        stringFrom(e, t) {
            let n = "";
            for (let i = t; i < e.length; i++) n += e[i][1];
            return e.splice(t, e.length - t), n
        }
        unclosedBlock() {
            let e = this.current.source.start;
            throw this.input.error("Unclosed block", e.line, e.column)
        }
        unclosedBracket(e) {
            throw this.input.error("Unclosed bracket", {
                offset: e[2]
            }, {
                offset: e[2] + 1
            })
        }
        unexpectedClose(e) {
            throw this.input.error("Unexpected }", {
                offset: e[2]
            }, {
                offset: e[2] + 1
            })
        }
        unknownWord(e) {
            throw this.input.error("Unknown word", {
                offset: e[0][2]
            }, {
                offset: e[0][2] + e[0][1].length
            })
        }
        unnamedAtrule(e, t) {
            throw this.input.error("At-rule without name", {
                offset: t[2]
            }, {
                offset: t[2] + t[1].length
            })
        }
    }, dO = fO, pO = Ur, hO = dO, mO = ca;
    Ef = Ks;
    Ks.default = Ks;
    pO.registerParse(Ks);
    ({
        isClean: zt,
        my: gO
    } = _i), vO = qw, yO = aa, wO = Ur, bO = yf, Ny = wf, SO = Ef, EO = xi, _O = {
        atrule: "AtRule",
        comment: "Comment",
        decl: "Declaration",
        document: "Document",
        root: "Root",
        rule: "Rule"
    }, xO = {
        AtRule: !0,
        AtRuleExit: !0,
        Comment: !0,
        CommentExit: !0,
        Declaration: !0,
        DeclarationExit: !0,
        Document: !0,
        DocumentExit: !0,
        Once: !0,
        OnceExit: !0,
        postcssPlugin: !0,
        prepare: !0,
        Root: !0,
        RootExit: !0,
        Rule: !0,
        RuleExit: !0
    }, CO = {
        Once: !0,
        postcssPlugin: !0,
        prepare: !0
    }, mn = 0;
    Bc = {}, gn = class db {
        constructor(e, t, n) {
            this.stringified = !1, this.processed = !1;
            let i;
            if (typeof t == "object" && t !== null && (t.type === "root" || t.type === "document")) i = jc(t);
            else if (t instanceof db || t instanceof Ny) i = jc(t.root), t.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = !1), n.map.prev = t.map);
            else {
                let o = SO;
                n.syntax && (o = n.syntax.parse), n.parser && (o = n.parser), o.parse && (o = o.parse);
                try {
                    i = o(t, n)
                } catch (s) {
                    this.processed = !0, this.error = s
                }
                i && !i[gO] && wO.rebuild(i)
            }
            this.result = new Ny(e, i, n), this.helpers = { ...Bc,
                postcss: Bc,
                result: this.result
            }, this.plugins = this.processor.plugins.map(o => typeof o == "object" && o.prepare ? { ...o,
                ...o.prepare(this.result)
            } : o)
        }
        async () {
            return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (e) {
            return this.async().catch(e)
        } finally(e) {
            return this.async().then(e, e)
        }
        getAsyncError() {
            throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(e, t) {
            let n = this.result.lastPlugin;
            try {
                t && t.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin ? (e.plugin = n.postcssPlugin, e.setMessage()) : n.postcssVersion
            } catch (i) {
                console && console.error && console.error(i)
            }
            return e
        }
        prepareVisitors() {
            this.listeners = {};
            let e = (t, n, i) => {
                this.listeners[n] || (this.listeners[n] = []), this.listeners[n].push([t, i])
            };
            for (let t of this.plugins)
                if (typeof t == "object")
                    for (let n in t) {
                        if (!xO[n] && /^[A-Z]/.test(n)) throw new Error(`Unknown event ${n} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                        if (!CO[n])
                            if (typeof t[n] == "object")
                                for (let i in t[n]) i === "*" ? e(t, n, t[n][i]) : e(t, n + "-" + i.toLowerCase(), t[n][i]);
                            else typeof t[n] == "function" && e(t, n, t[n])
                    }
            this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
            this.plugin = 0;
            for (let e = 0; e < this.plugins.length; e++) {
                let t = this.plugins[e],
                    n = this.runOnRoot(t);
                if (si(n)) try {
                    await n
                } catch (i) {
                    throw this.handleError(i)
                }
            }
            if (this.prepareVisitors(), this.hasListener) {
                let e = this.result.root;
                for (; !e[zt];) {
                    e[zt] = !0;
                    let t = [Dy(e)];
                    for (; t.length > 0;) {
                        let n = this.visitTick(t);
                        if (si(n)) try {
                            await n
                        } catch (i) {
                            let o = t[t.length - 1].node;
                            throw this.handleError(i, o)
                        }
                    }
                }
                if (this.listeners.OnceExit)
                    for (let [t, n] of this.listeners.OnceExit) {
                        this.result.lastPlugin = t;
                        try {
                            if (e.type === "document") {
                                let i = e.nodes.map(o => n(o, this.helpers));
                                await Promise.all(i)
                            } else await n(e, this.helpers)
                        } catch (i) {
                            throw this.handleError(i)
                        }
                    }
            }
            return this.processed = !0, this.stringify()
        }
        runOnRoot(e) {
            this.result.lastPlugin = e;
            try {
                if (typeof e == "object" && e.Once) {
                    if (this.result.root.type === "document") {
                        let t = this.result.root.nodes.map(n => e.Once(n, this.helpers));
                        return si(t[0]) ? Promise.all(t) : t
                    }
                    return e.Once(this.result.root, this.helpers)
                } else if (typeof e == "function") return e(this.result.root, this.result)
            } catch (t) {
                throw this.handleError(t)
            }
        }
        stringify() {
            if (this.error) throw this.error;
            if (this.stringified) return this.result;
            this.stringified = !0, this.sync();
            let e = this.result.opts,
                t = yO;
            e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
            let i = new vO(t, this.result.root, this.result.opts).generate();
            return this.result.css = i[0], this.result.map = i[1], this.result
        }
        sync() {
            if (this.error) throw this.error;
            if (this.processed) return this.result;
            if (this.processed = !0, this.processing) throw this.getAsyncError();
            for (let e of this.plugins) {
                let t = this.runOnRoot(e);
                if (si(t)) throw this.getAsyncError()
            }
            if (this.prepareVisitors(), this.hasListener) {
                let e = this.result.root;
                for (; !e[zt];) e[zt] = !0, this.walkSync(e);
                if (this.listeners.OnceExit)
                    if (e.type === "document")
                        for (let t of e.nodes) this.visitSync(this.listeners.OnceExit, t);
                    else this.visitSync(this.listeners.OnceExit, e)
            }
            return this.result
        }
        then(e, t) {
            return this.async().then(e, t)
        }
        toString() {
            return this.css
        }
        visitSync(e, t) {
            for (let [n, i] of e) {
                this.result.lastPlugin = n;
                let o;
                try {
                    o = i(t, this.helpers)
                } catch (s) {
                    throw this.handleError(s, t.proxyOf)
                }
                if (t.type !== "root" && t.type !== "document" && !t.parent) return !0;
                if (si(o)) throw this.getAsyncError()
            }
        }
        visitTick(e) {
            let t = e[e.length - 1],
                {
                    node: n,
                    visitors: i
                } = t;
            if (n.type !== "root" && n.type !== "document" && !n.parent) {
                e.pop();
                return
            }
            if (i.length > 0 && t.visitorIndex < i.length) {
                let [s, u] = i[t.visitorIndex];
                t.visitorIndex += 1, t.visitorIndex === i.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = s;
                try {
                    return u(n.toProxy(), this.helpers)
                } catch (a) {
                    throw this.handleError(a, n)
                }
            }
            if (t.iterator !== 0) {
                let s = t.iterator,
                    u;
                for (; u = n.nodes[n.indexes[s]];)
                    if (n.indexes[s] += 1, !u[zt]) {
                        u[zt] = !0, e.push(Dy(u));
                        return
                    }
                t.iterator = 0, delete n.indexes[s]
            }
            let o = t.events;
            for (; t.eventIndex < o.length;) {
                let s = o[t.eventIndex];
                if (t.eventIndex += 1, s === mn) {
                    n.nodes && n.nodes.length && (n[zt] = !0, t.iterator = n.getIterator());
                    return
                } else if (this.listeners[s]) {
                    t.visitors = this.listeners[s];
                    return
                }
            }
            e.pop()
        }
        walkSync(e) {
            e[zt] = !0;
            let t = fb(e);
            for (let n of t)
                if (n === mn) e.nodes && e.each(i => {
                    i[zt] || this.walkSync(i)
                });
                else {
                    let i = this.listeners[n];
                    if (i && this.visitSync(i, e.toProxy())) return
                }
        }
        warnings() {
            return this.sync().warnings()
        }
        get content() {
            return this.stringify().content
        }
        get css() {
            return this.stringify().css
        }
        get map() {
            return this.stringify().map
        }
        get messages() {
            return this.sync().messages
        }
        get opts() {
            return this.result.opts
        }
        get processor() {
            return this.result.processor
        }
        get root() {
            return this.sync().root
        }
        get[Symbol.toStringTag]() {
            return "LazyResult"
        }
    };
    gn.registerPostcss = r => {
        Bc = r
    };
    pb = gn;
    gn.default = gn;
    EO.registerLazyResult(gn);
    bO.registerLazyResult(gn);
    IO = qw, TO = aa, OO = Ef, RO = wf, Vc = class {
        constructor(e, t, n) {
            t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = n, this._map = void 0;
            let i, o = TO;
            this.result = new RO(this._processor, i, this._opts), this.result.css = t;
            let s = this;
            Object.defineProperty(this.result, "root", {
                get() {
                    return s.root
                }
            });
            let u = new IO(o, i, this._opts, t);
            if (u.isMap()) {
                let [a, l] = u.generate();
                a && (this.result.css = a), l && (this.result.map = l)
            } else u.clearAnnotation(), this.result.css = u.css
        }
        async () {
            return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
        } catch (e) {
            return this.async().catch(e)
        } finally(e) {
            return this.async().then(e, e)
        }
        sync() {
            if (this.error) throw this.error;
            return this.result
        }
        then(e, t) {
            return this.async().then(e, t)
        }
        toString() {
            return this._css
        }
        warnings() {
            return []
        }
        get content() {
            return this.result.css
        }
        get css() {
            return this.result.css
        }
        get map() {
            return this.result.map
        }
        get messages() {
            return []
        }
        get opts() {
            return this.result.opts
        }
        get processor() {
            return this.result.processor
        }
        get root() {
            if (this._root) return this._root;
            let e, t = OO;
            try {
                e = t(this._css, this._opts)
            } catch (n) {
                this.error = n
            }
            if (this.error) throw this.error;
            return this._root = e, e
        }
        get[Symbol.toStringTag]() {
            return "NoWorkResult"
        }
    }, PO = Vc;
    Vc.default = Vc;
    AO = PO, MO = pb, NO = yf, DO = xi, yi = class {
        constructor(e = []) {
            this.version = "8.4.38", this.plugins = this.normalize(e)
        }
        normalize(e) {
            let t = [];
            for (let n of e)
                if (n.postcss === !0 ? n = n() : n.postcss && (n = n.postcss), typeof n == "object" && Array.isArray(n.plugins)) t = t.concat(n.plugins);
                else if (typeof n == "object" && n.postcssPlugin) t.push(n);
            else if (typeof n == "function") t.push(n);
            else if (!(typeof n == "object" && (n.parse || n.stringify))) throw new Error(n + " is not a PostCSS plugin");
            return t
        }
        process(e, t = {}) {
            return !this.plugins.length && !t.parser && !t.stringifier && !t.syntax ? new AO(this, e, t) : new MO(this, e, t)
        }
        use(e) {
            return this.plugins = this.plugins.concat(this.normalize([e])), this
        }
    }, kO = yi;
    yi.default = yi;
    DO.registerProcessor(yi);
    NO.registerProcessor(yi);
    LO = ua, FO = Bw, UO = fa, $O = bf, jO = ca, BO = xi, VO = Sf;
    WO = wi;
    wi.default = wi;
    GO = mf, hb = ua, zO = pb, qO = Ur, _f = kO, HO = aa, YO = WO, mb = yf, KO = ib, gb = fa, vb = bf, XO = wf, JO = ca, ZO = Ef, QO = ub, yb = Sf, wb = xi, e1 = la;
    re.plugin = function(e, t) {
        let n = !1;

        function i(...s) {
            console && console.warn && !n && (n = !0, console.warn(e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(e + `: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));
            let u = t(...s);
            return u.postcssPlugin = e, u.postcssVersion = new _f().version, u
        }
        let o;
        return Object.defineProperty(i, "postcss", {
            get() {
                return o || (o = i()), o
            }
        }), i.process = function(s, u, a) {
            return re([i(a)]).process(s, u)
        }, i
    };
    re.stringify = HO;
    re.parse = ZO;
    re.fromJSON = YO;
    re.list = QO;
    re.comment = r => new gb(r);
    re.atRule = r => new vb(r);
    re.decl = r => new hb(r);
    re.rule = r => new yb(r);
    re.root = r => new wb(r);
    re.document = r => new mb(r);
    re.CssSyntaxError = GO;
    re.Declaration = hb;
    re.Container = qO;
    re.Processor = _f;
    re.Document = mb;
    re.Comment = gb;
    re.Warning = KO;
    re.AtRule = vb;
    re.Result = XO;
    re.Input = JO;
    re.Rule = yb;
    re.Root = wb;
    re.Node = e1;
    zO.registerPostcss(re);
    t1 = re;
    re.default = re;
    ge = pT(t1);
    ge.stringify;
    ge.fromJSON;
    ge.plugin;
    ge.parse;
    ge.list;
    ge.document;
    ge.comment;
    ge.atRule;
    ge.rule;
    ge.decl;
    ge.root;
    ge.CssSyntaxError;
    ge.Declaration;
    ge.Container;
    ge.Processor;
    ge.Document;
    ge.Comment;
    ge.Warning;
    ge.AtRule;
    ge.Result;
    ge.Input;
    ge.Rule;
    ge.Root;
    ge.Node;
    Wc = class r {
        constructor(...e) {
            Et(this, "parentElement", null), Et(this, "parentNode", null), Et(this, "ownerDocument"), Et(this, "firstChild", null), Et(this, "lastChild", null), Et(this, "previousSibling", null), Et(this, "nextSibling", null), Et(this, "ELEMENT_NODE", 1), Et(this, "TEXT_NODE", 3), Et(this, "nodeType"), Et(this, "nodeName"), Et(this, "RRNodeType")
        }
        get childNodes() {
            let e = [],
                t = this.firstChild;
            for (; t;) e.push(t), t = t.nextSibling;
            return e
        }
        contains(e) {
            if (e instanceof r) {
                if (e.ownerDocument !== this.ownerDocument) return !1;
                if (e === this) return !0
            } else return !1;
            for (; e.parentNode;) {
                if (e.parentNode === this) return !0;
                e = e.parentNode
            }
            return !1
        }
        appendChild(e) {
            throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
        }
        insertBefore(e, t) {
            throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
        }
        removeChild(e) {
            throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
        }
        toString() {
            return "RRNode"
        }
    }, ky = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
    }, Ly = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
    }, Rs = {}, r1 = () => !!globalThis.Zone;
    uc = {};
    cc = {};
    W = {
        childNodes: n1,
        parentNode: i1,
        parentElement: o1,
        textContent: s1,
        contains: a1,
        getRootNode: l1,
        host: u1,
        styleSheets: c1,
        shadowRoot: f1,
        querySelector: d1,
        querySelectorAll: p1,
        mutationObserver: Sb
    };
    sn = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`, Gc = {
        map: {},
        getId() {
            return console.error(sn), -1
        },
        getNode() {
            return console.error(sn), null
        },
        removeNodeFromMap() {
            console.error(sn)
        },
        has() {
            return console.error(sn), !1
        },
        reset() {
            console.error(sn)
        }
    };
    typeof window < "u" && window.Proxy && window.Reflect && (Gc = new Proxy(Gc, {
        get(r, e, t) {
            return e === "map" && console.error(sn), Reflect.get(r, e, t)
        }
    }));
    bi = Date.now;
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (bi = () => new Date().getTime());
    Zs = class {
        constructor() {
            T(this, "id", 1), T(this, "styleIDMap", new WeakMap), T(this, "idStyleMap", new Map)
        }
        getId(e) {
            return this.styleIDMap.get(e) ? ? -1
        }
        has(e) {
            return this.styleIDMap.has(e)
        }
        add(e, t) {
            if (this.has(e)) return this.getId(e);
            let n;
            return t === void 0 ? n = this.id++ : n = t, this.styleIDMap.set(e, n), this.idStyleMap.set(n, e), n
        }
        getStyle(e) {
            return this.idStyleMap.get(e) || null
        }
        reset() {
            this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
            return this.id++
        }
    };
    Ii = Object.freeze(Object.defineProperty({
        __proto__: null,
        StyleSheetMirror: Zs,
        get _mirror() {
            return Gc
        },
        closestElementOfNode: Of,
        getBaseDimension: Cb,
        getNestedRule: Ib,
        getPositionsAndIndex: m1,
        getRootShadowHost: Tb,
        getShadowHost: Mf,
        getWindowHeight: If,
        getWindowScroll: Cf,
        getWindowWidth: Tf,
        hasShadowRoot: Js,
        hookSetter: Ci,
        inDom: Nf,
        isAncestorRemoved: Rf,
        isBlocked: Xe,
        isIgnored: Ls,
        isSerialized: Eb,
        isSerializedIframe: Pf,
        isSerializedStylesheet: Af,
        iterateResolveTree: xb,
        legacy_isTouchEvent: Xs,
        get nowTimestamp() {
            return bi
        },
        on: Ke,
        patch: $r,
        polyfill: _b,
        queueToResolveTrees: h1,
        shadowHostInDom: Ob,
        throttle: vn,
        uniqueTextMutations: g1
    }, Symbol.toStringTag, {
        value: "Module"
    })), Y = (r => (r[r.DomContentLoaded = 0] = "DomContentLoaded", r[r.Load = 1] = "Load", r[r.FullSnapshot = 2] = "FullSnapshot", r[r.IncrementalSnapshot = 3] = "IncrementalSnapshot", r[r.Meta = 4] = "Meta", r[r.Custom = 5] = "Custom", r[r.Plugin = 6] = "Plugin", r))(Y || {}), G = (r => (r[r.Mutation = 0] = "Mutation", r[r.MouseMove = 1] = "MouseMove", r[r.MouseInteraction = 2] = "MouseInteraction", r[r.Scroll = 3] = "Scroll", r[r.ViewportResize = 4] = "ViewportResize", r[r.Input = 5] = "Input", r[r.TouchMove = 6] = "TouchMove", r[r.MediaInteraction = 7] = "MediaInteraction", r[r.StyleSheetRule = 8] = "StyleSheetRule", r[r.CanvasMutation = 9] = "CanvasMutation", r[r.Font = 10] = "Font", r[r.Log = 11] = "Log", r[r.Drag = 12] = "Drag", r[r.StyleDeclaration = 13] = "StyleDeclaration", r[r.Selection = 14] = "Selection", r[r.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", r[r.CustomElement = 16] = "CustomElement", r))(G || {}), st = (r => (r[r.MouseUp = 0] = "MouseUp", r[r.MouseDown = 1] = "MouseDown", r[r.Click = 2] = "Click", r[r.ContextMenu = 3] = "ContextMenu", r[r.DblClick = 4] = "DblClick", r[r.Focus = 5] = "Focus", r[r.Blur = 6] = "Blur", r[r.TouchStart = 7] = "TouchStart", r[r.TouchMove_Departed = 8] = "TouchMove_Departed", r[r.TouchEnd = 9] = "TouchEnd", r[r.TouchCancel = 10] = "TouchCancel", r))(st || {}), rr = (r => (r[r.Mouse = 0] = "Mouse", r[r.Pen = 1] = "Pen", r[r.Touch = 2] = "Touch", r))(rr || {}), yn = (r => (r[r["2D"] = 0] = "2D", r[r.WebGL = 1] = "WebGL", r[r.WebGL2 = 2] = "WebGL2", r))(yn || {}), an = (r => (r[r.Play = 0] = "Play", r[r.Pause = 1] = "Pause", r[r.Seeked = 2] = "Seeked", r[r.VolumeChange = 3] = "VolumeChange", r[r.RateChange = 4] = "RateChange", r))(an || {}), Rb = (r => (r[r.Document = 0] = "Document", r[r.DocumentType = 1] = "DocumentType", r[r.Element = 2] = "Element", r[r.Text = 3] = "Text", r[r.CDATA = 4] = "CDATA", r[r.Comment = 5] = "Comment", r))(Rb || {});
    zc = class {
        constructor() {
            T(this, "length", 0), T(this, "head", null), T(this, "tail", null)
        }
        get(e) {
            if (e >= this.length) throw new Error("Position outside of list range");
            let t = this.head;
            for (let n = 0; n < e; n++) t = t ? .next || null;
            return t
        }
        addNode(e) {
            let t = {
                value: e,
                previous: null,
                next: null
            };
            if (e.__ln = t, e.previousSibling && Fy(e.previousSibling)) {
                let n = e.previousSibling.__ln.next;
                t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, n && (n.previous = t)
            } else if (e.nextSibling && Fy(e.nextSibling) && e.nextSibling.__ln.previous) {
                let n = e.nextSibling.__ln.previous;
                t.previous = n, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, n && (n.next = t)
            } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
            t.next === null && (this.tail = t), this.length++
        }
        removeNode(e) {
            let t = e.__ln;
            this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--)
        }
    }, Uy = (r, e) => `${r}@${e}`, qc = class {
        constructor() {
            T(this, "frozen", !1), T(this, "locked", !1), T(this, "texts", []), T(this, "attributes", []), T(this, "attributeMap", new WeakMap), T(this, "removes", []), T(this, "mapRemoves", []), T(this, "movedMap", {}), T(this, "addedSet", new Set), T(this, "movedSet", new Set), T(this, "droppedSet", new Set), T(this, "removesSubTreeCache", new Set), T(this, "mutationCb"), T(this, "blockClass"), T(this, "blockSelector"), T(this, "maskTextClass"), T(this, "maskTextSelector"), T(this, "inlineStylesheet"), T(this, "maskInputOptions"), T(this, "maskTextFn"), T(this, "maskInputFn"), T(this, "keepIframeSrcFn"), T(this, "recordCanvas"), T(this, "inlineImages"), T(this, "slimDOMOptions"), T(this, "dataURLOptions"), T(this, "doc"), T(this, "mirror"), T(this, "iframeManager"), T(this, "stylesheetManager"), T(this, "shadowDomManager"), T(this, "canvasManager"), T(this, "processedNodeManager"), T(this, "unattachedDoc"), T(this, "processMutations", e => {
                e.forEach(this.processMutation), this.emit()
            }), T(this, "emit", () => {
                if (this.frozen || this.locked) return;
                let e = [],
                    t = new Set,
                    n = new zc,
                    i = a => {
                        let l = a,
                            c = fi;
                        for (; c === fi;) l = l && l.nextSibling, c = l && this.mirror.getId(l);
                        return c
                    },
                    o = a => {
                        let l = W.parentNode(a);
                        if (!l || !Nf(a)) return;
                        let c = !1;
                        if (a.nodeType === Node.TEXT_NODE) {
                            let h = l.tagName;
                            if (h === "TEXTAREA") return;
                            h === "STYLE" && this.addedSet.has(l) && (c = !0)
                        }
                        let f = li(l) ? this.mirror.getId(Mf(a)) : this.mirror.getId(l),
                            d = i(a);
                        if (f === -1 || d === -1) return n.addNode(a);
                        let p = un(a, {
                            doc: this.doc,
                            mirror: this.mirror,
                            blockClass: this.blockClass,
                            blockSelector: this.blockSelector,
                            maskTextClass: this.maskTextClass,
                            maskTextSelector: this.maskTextSelector,
                            skipChild: !0,
                            newlyAddedElement: !0,
                            inlineStylesheet: this.inlineStylesheet,
                            maskInputOptions: this.maskInputOptions,
                            maskTextFn: this.maskTextFn,
                            maskInputFn: this.maskInputFn,
                            slimDOMOptions: this.slimDOMOptions,
                            dataURLOptions: this.dataURLOptions,
                            recordCanvas: this.recordCanvas,
                            inlineImages: this.inlineImages,
                            onSerialize: h => {
                                Pf(h, this.mirror) && this.iframeManager.addIframe(h), Af(h, this.mirror) && this.stylesheetManager.trackLinkElement(h), Js(a) && this.shadowDomManager.addShadowRoot(W.shadowRoot(a), this.doc)
                            },
                            onIframeLoad: (h, g) => {
                                this.iframeManager.attachIframe(h, g), this.shadowDomManager.observeAttachShadow(h)
                            },
                            onStylesheetLoad: (h, g) => {
                                this.stylesheetManager.attachLinkElement(h, g)
                            },
                            cssCaptured: c
                        });
                        p && (e.push({
                            parentId: f,
                            nextId: d,
                            node: p
                        }), t.add(p.id))
                    };
                for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                for (let a of this.movedSet) $y(this.removesSubTreeCache, a, this.mirror) && !this.movedSet.has(W.parentNode(a)) || o(a);
                for (let a of this.addedSet) !jy(this.droppedSet, a) && !$y(this.removesSubTreeCache, a, this.mirror) || jy(this.movedSet, a) ? o(a) : this.droppedSet.add(a);
                let s = null;
                for (; n.length;) {
                    let a = null;
                    if (s) {
                        let l = this.mirror.getId(W.parentNode(s.value)),
                            c = i(s.value);
                        l !== -1 && c !== -1 && (a = s)
                    }
                    if (!a) {
                        let l = n.tail;
                        for (; l;) {
                            let c = l;
                            if (l = l.previous, c) {
                                let f = this.mirror.getId(W.parentNode(c.value));
                                if (i(c.value) === -1) continue;
                                if (f !== -1) {
                                    a = c;
                                    break
                                } else {
                                    let p = c.value,
                                        h = W.parentNode(p);
                                    if (h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                        let g = W.host(h);
                                        if (this.mirror.getId(g) !== -1) {
                                            a = c;
                                            break
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (!a) {
                        for (; n.head;) n.removeNode(n.head.value);
                        break
                    }
                    s = a.previous, n.removeNode(a.value), o(a.value)
                }
                let u = {
                    texts: this.texts.map(a => {
                        let l = a.node,
                            c = W.parentNode(l);
                        return c && c.tagName === "TEXTAREA" && this.genTextAreaValueMutation(c), {
                            id: this.mirror.getId(l),
                            value: a.value
                        }
                    }).filter(a => !t.has(a.id)).filter(a => this.mirror.has(a.id)),
                    attributes: this.attributes.map(a => {
                        let {
                            attributes: l
                        } = a;
                        if (typeof l.style == "string") {
                            let c = JSON.stringify(a.styleDiff),
                                f = JSON.stringify(a._unchangedStyles);
                            c.length < l.style.length && (c + f).split("var(").length === l.style.split("var(").length && (l.style = a.styleDiff)
                        }
                        return {
                            id: this.mirror.getId(a.node),
                            attributes: l
                        }
                    }).filter(a => !t.has(a.id)).filter(a => this.mirror.has(a.id)),
                    removes: this.removes,
                    adds: e
                };
                !u.texts.length && !u.attributes.length && !u.removes.length && !u.adds.length || (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, this.mutationCb(u))
            }), T(this, "genTextAreaValueMutation", e => {
                let t = this.attributeMap.get(e);
                t || (t = {
                    node: e,
                    attributes: {},
                    styleDiff: {},
                    _unchangedStyles: {}
                }, this.attributes.push(t), this.attributeMap.set(e, t)), t.attributes.value = Array.from(W.childNodes(e), n => W.textContent(n) || "").join("")
            }), T(this, "processMutation", e => {
                if (!Ls(e.target, this.mirror, this.slimDOMOptions)) switch (e.type) {
                    case "characterData":
                        {
                            let t = W.textContent(e.target);!Xe(e.target, this.blockClass, this.blockSelector, !1) && t !== e.oldValue && this.texts.push({
                                value: tw(e.target, this.maskTextClass, this.maskTextSelector, !0) && t ? this.maskTextFn ? this.maskTextFn(t, Of(e.target)) : t.replace(/[\S]/g, "*") : t,
                                node: e.target
                            });
                            break
                        }
                    case "attributes":
                        {
                            let t = e.target,
                                n = e.attributeName,
                                i = e.target.getAttribute(n);
                            if (n === "value") {
                                let s = tf(t);
                                i = ef({
                                    element: t,
                                    maskInputOptions: this.maskInputOptions,
                                    tagName: t.tagName,
                                    type: s,
                                    value: i,
                                    maskInputFn: this.maskInputFn
                                })
                            }
                            if (Xe(e.target, this.blockClass, this.blockSelector, !1) || i === e.oldValue) return;
                            let o = this.attributeMap.get(e.target);
                            if (t.tagName === "IFRAME" && n === "src" && !this.keepIframeSrcFn(i))
                                if (!t.contentDocument) n = "rr_src";
                                else return;
                            if (o || (o = {
                                    node: e.target,
                                    attributes: {},
                                    styleDiff: {},
                                    _unchangedStyles: {}
                                }, this.attributes.push(o), this.attributeMap.set(e.target, o)), n === "type" && t.tagName === "INPUT" && (e.oldValue || "").toLowerCase() === "password" && t.setAttribute("data-rr-is-password", "true"), !ew(t.tagName, n))
                                if (o.attributes[n] = Qy(this.doc, Lr(t.tagName), Lr(n), i), n === "style") {
                                    if (!this.unattachedDoc) try {
                                        this.unattachedDoc = document.implementation.createHTMLDocument()
                                    } catch {
                                        this.unattachedDoc = this.doc
                                    }
                                    let s = this.unattachedDoc.createElement("span");
                                    e.oldValue && s.setAttribute("style", e.oldValue);
                                    for (let u of Array.from(t.style)) {
                                        let a = t.style.getPropertyValue(u),
                                            l = t.style.getPropertyPriority(u);
                                        a !== s.style.getPropertyValue(u) || l !== s.style.getPropertyPriority(u) ? l === "" ? o.styleDiff[u] = a : o.styleDiff[u] = [a, l] : o._unchangedStyles[u] = [a, l]
                                    }
                                    for (let u of Array.from(s.style)) t.style.getPropertyValue(u) === "" && (o.styleDiff[u] = !1)
                                } else n === "open" && t.tagName === "DIALOG" && (t.matches("dialog:modal") ? o.attributes.rr_open_mode = "modal" : o.attributes.rr_open_mode = "non-modal");
                            break
                        }
                    case "childList":
                        {
                            if (Xe(e.target, this.blockClass, this.blockSelector, !0)) return;
                            if (e.target.tagName === "TEXTAREA") {
                                this.genTextAreaValueMutation(e.target);
                                return
                            }
                            e.addedNodes.forEach(t => this.genAdds(t, e.target)),
                            e.removedNodes.forEach(t => {
                                let n = this.mirror.getId(t),
                                    i = li(e.target) ? this.mirror.getId(W.host(e.target)) : this.mirror.getId(e.target);
                                Xe(e.target, this.blockClass, this.blockSelector, !1) || Ls(t, this.mirror, this.slimDOMOptions) || !Eb(t, this.mirror) || (this.addedSet.has(t) ? (Hc(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && n === -1 || Rf(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[Uy(n, i)] ? Hc(this.movedSet, t) : (this.removes.push({
                                    parentId: i,
                                    id: n,
                                    isShadow: li(e.target) && ui(e.target) ? !0 : void 0
                                }), v1(t, this.removesSubTreeCache))), this.mapRemoves.push(t))
                            });
                            break
                        }
                }
            }), T(this, "genAdds", (e, t) => {
                if (!this.processedNodeManager.inOtherBuffer(e, this) && !(this.addedSet.has(e) || this.movedSet.has(e))) {
                    if (this.mirror.hasNode(e)) {
                        if (Ls(e, this.mirror, this.slimDOMOptions)) return;
                        this.movedSet.add(e);
                        let n = null;
                        t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)), n && n !== -1 && (this.movedMap[Uy(this.mirror.getId(e), n)] = !0)
                    } else this.addedSet.add(e), this.droppedSet.delete(e);
                    Xe(e, this.blockClass, this.blockSelector, !1) || (W.childNodes(e).forEach(n => this.genAdds(n)), Js(e) && W.childNodes(W.shadowRoot(e)).forEach(n => {
                        this.processedNodeManager.add(n, this), this.genAdds(n, e)
                    }))
                }
            })
        }
        init(e) {
            ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(t => {
                this[t] = e[t]
            })
        }
        freeze() {
            this.frozen = !0, this.canvasManager.freeze()
        }
        unfreeze() {
            this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
        }
        isFrozen() {
            return this.frozen
        }
        lock() {
            this.locked = !0, this.canvasManager.lock()
        }
        unlock() {
            this.locked = !1, this.canvasManager.unlock(), this.emit()
        }
        reset() {
            this.shadowDomManager.reset(), this.canvasManager.reset()
        }
    };
    z = r => ci ? (...t) => {
        try {
            return r(...t)
        } catch (n) {
            if (ci && ci(n) === !0) return;
            throw n
        }
    } : r;
    kr = [];
    x1 = ["INPUT", "TEXTAREA", "SELECT"], Vy = new WeakMap;
    ea = class {
        constructor(e) {
            T(this, "iframeIdToRemoteIdMap", new WeakMap), T(this, "iframeRemoteIdToIdMap", new WeakMap), this.generateIdFn = e
        }
        getId(e, t, n, i) {
            let o = n || this.getIdToRemoteIdMap(e),
                s = i || this.getRemoteIdToIdMap(e),
                u = o.get(t);
            return u || (u = this.generateIdFn(), o.set(t, u), s.set(u, t)), u
        }
        getIds(e, t) {
            let n = this.getIdToRemoteIdMap(e),
                i = this.getRemoteIdToIdMap(e);
            return t.map(o => this.getId(e, o, n, i))
        }
        getRemoteId(e, t, n) {
            let i = n || this.getRemoteIdToIdMap(e);
            if (typeof t != "number") return t;
            let o = i.get(t);
            return o || -1
        }
        getRemoteIds(e, t) {
            let n = this.getRemoteIdToIdMap(e);
            return t.map(i => this.getRemoteId(e, i, n))
        }
        reset(e) {
            if (!e) {
                this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap;
                return
            }
            this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e)
        }
        getIdToRemoteIdMap(e) {
            let t = this.iframeIdToRemoteIdMap.get(e);
            return t || (t = new Map, this.iframeIdToRemoteIdMap.set(e, t)), t
        }
        getRemoteIdToIdMap(e) {
            let t = this.iframeRemoteIdToIdMap.get(e);
            return t || (t = new Map, this.iframeRemoteIdToIdMap.set(e, t)), t
        }
    }, Yc = class {
        constructor(e) {
            T(this, "iframes", new WeakMap), T(this, "crossOriginIframeMap", new WeakMap), T(this, "crossOriginIframeMirror", new ea(Zy)), T(this, "crossOriginIframeStyleMirror"), T(this, "crossOriginIframeRootIdMap", new WeakMap), T(this, "mirror"), T(this, "mutationCb"), T(this, "wrappedEmit"), T(this, "loadListener"), T(this, "stylesheetManager"), T(this, "recordCrossOriginIframes"), this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new ea(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
        }
        addIframe(e) {
            this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
        }
        addLoadListener(e) {
            this.loadListener = e
        }
        attachIframe(e, t) {
            var n, i;
            this.mutationCb({
                adds: [{
                    parentId: this.mirror.getId(e),
                    nextId: null,
                    node: t
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
            }), this.recordCrossOriginIframes && ((n = e.contentWindow) == null || n.addEventListener("message", this.handleMessage.bind(this))), (i = this.loadListener) == null || i.call(this, e), e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument))
        }
        handleMessage(e) {
            let t = e;
            if (t.data.type !== "rrweb" || t.origin !== t.data.origin || !e.source) return;
            let i = this.crossOriginIframeMap.get(e.source);
            if (!i) return;
            let o = this.transformCrossOriginEvent(i, t.data.event);
            o && this.wrappedEmit(o, t.data.isCheckout)
        }
        transformCrossOriginEvent(e, t) {
            var n;
            switch (t.type) {
                case Y.FullSnapshot:
                    {
                        this.crossOriginIframeMirror.reset(e),
                        this.crossOriginIframeStyleMirror.reset(e),
                        this.replaceIdOnNode(t.data.node, e);
                        let i = t.data.node.id;
                        return this.crossOriginIframeRootIdMap.set(e, i),
                        this.patchRootIdOnNode(t.data.node, i),
                        {
                            timestamp: t.timestamp,
                            type: Y.IncrementalSnapshot,
                            data: {
                                source: G.Mutation,
                                adds: [{
                                    parentId: this.mirror.getId(e),
                                    nextId: null,
                                    node: t.data.node
                                }],
                                removes: [],
                                texts: [],
                                attributes: [],
                                isAttachIframe: !0
                            }
                        }
                    }
                case Y.Meta:
                case Y.Load:
                case Y.DomContentLoaded:
                    return !1;
                case Y.Plugin:
                    return t;
                case Y.Custom:
                    return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
                case Y.IncrementalSnapshot:
                    switch (t.data.source) {
                        case G.Mutation:
                            return t.data.adds.forEach(i => {
                                this.replaceIds(i, e, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(i.node, e);
                                let o = this.crossOriginIframeRootIdMap.get(e);
                                o && this.patchRootIdOnNode(i.node, o)
                            }), t.data.removes.forEach(i => {
                                this.replaceIds(i, e, ["parentId", "id"])
                            }), t.data.attributes.forEach(i => {
                                this.replaceIds(i, e, ["id"])
                            }), t.data.texts.forEach(i => {
                                this.replaceIds(i, e, ["id"])
                            }), t;
                        case G.Drag:
                        case G.TouchMove:
                        case G.MouseMove:
                            return t.data.positions.forEach(i => {
                                this.replaceIds(i, e, ["id"])
                            }), t;
                        case G.ViewportResize:
                            return !1;
                        case G.MediaInteraction:
                        case G.MouseInteraction:
                        case G.Scroll:
                        case G.CanvasMutation:
                        case G.Input:
                            return this.replaceIds(t.data, e, ["id"]), t;
                        case G.StyleSheetRule:
                        case G.StyleDeclaration:
                            return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                        case G.Font:
                            return t;
                        case G.Selection:
                            return t.data.ranges.forEach(i => {
                                this.replaceIds(i, e, ["start", "end"])
                            }), t;
                        case G.AdoptedStyleSheet:
                            return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), (n = t.data.styles) == null || n.forEach(i => {
                                this.replaceStyleIds(i, e, ["styleId"])
                            }), t
                    }
            }
            return !1
        }
        replace(e, t, n, i) {
            for (let o of i) !Array.isArray(t[o]) && typeof t[o] != "number" || (Array.isArray(t[o]) ? t[o] = e.getIds(n, t[o]) : t[o] = e.getId(n, t[o]));
            return t
        }
        replaceIds(e, t, n) {
            return this.replace(this.crossOriginIframeMirror, e, t, n)
        }
        replaceStyleIds(e, t, n) {
            return this.replace(this.crossOriginIframeStyleMirror, e, t, n)
        }
        replaceIdOnNode(e, t) {
            this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach(n => {
                this.replaceIdOnNode(n, t)
            })
        }
        patchRootIdOnNode(e, t) {
            e.type !== Rb.Document && !e.rootId && (e.rootId = t), "childNodes" in e && e.childNodes.forEach(n => {
                this.patchRootIdOnNode(n, t)
            })
        }
    }, Kc = class {
        constructor(e) {
            T(this, "shadowDoms", new WeakSet), T(this, "mutationCb"), T(this, "scrollCb"), T(this, "bypassOptions"), T(this, "mirror"), T(this, "restoreHandlers", []), this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init()
        }
        init() {
            this.reset(), this.patchAttachShadow(Element, document)
        }
        addShadowRoot(e, t) {
            if (!ui(e) || this.shadowDoms.has(e)) return;
            this.shadowDoms.add(e);
            let n = Ab({ ...this.bypassOptions,
                doc: t,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
            }, e);
            this.restoreHandlers.push(() => n.disconnect()), this.restoreHandlers.push(Mb({ ...this.bypassOptions,
                scrollCb: this.scrollCb,
                doc: e,
                mirror: this.mirror
            })), setTimeout(() => {
                e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(W.host(e))), this.restoreHandlers.push(Nb({
                    mirror: this.mirror,
                    stylesheetManager: this.bypassOptions.stylesheetManager
                }, e))
            }, 0)
        }
        observeAttachShadow(e) {
            !e.contentWindow || !e.contentDocument || this.patchAttachShadow(e.contentWindow.Element, e.contentDocument)
        }
        patchAttachShadow(e, t) {
            let n = this;
            this.restoreHandlers.push($r(e.prototype, "attachShadow", function(i) {
                return function(o) {
                    let s = i.call(this, o),
                        u = W.shadowRoot(this);
                    return u && Nf(this) && n.addShadowRoot(u, t), s
                }
            }))
        }
        reset() {
            this.restoreHandlers.forEach(e => {
                try {
                    e()
                } catch {}
            }), this.restoreHandlers = [], this.shadowDoms = new WeakSet
        }
    }, cn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", D1 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
    for (ai = 0; ai < cn.length; ai++) D1[cn.charCodeAt(ai)] = ai;
    k1 = function(r) {
        var e = new Uint8Array(r),
            t, n = e.length,
            i = "";
        for (t = 0; t < n; t += 3) i += cn[e[t] >> 2], i += cn[(e[t] & 3) << 4 | e[t + 1] >> 4], i += cn[(e[t + 1] & 15) << 2 | e[t + 2] >> 6], i += cn[e[t + 2] & 63];
        return n % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : n % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i
    }, Wy = new Map;
    Db = (r, e, t) => {
        if (!r || !(Lb(r, e) || typeof r == "object")) return;
        let n = r.constructor.name,
            i = L1(t, n),
            o = i.indexOf(r);
        return o === -1 && (o = i.length, i.push(r)), o
    };
    kb = (r, e, t) => r.map(n => Fs(n, e, t)), Lb = (r, e) => !!["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(i => typeof e[i] == "function").find(i => r instanceof e[i]);
    Fb = "KGZ1bmN0aW9uKCkgewogICJ1c2Ugc3RyaWN0IjsKICB2YXIgY2hhcnMgPSAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyI7CiAgdmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAidW5kZWZpbmVkIiA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTsKICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7CiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpOwogIH0KICB2YXIgZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHsKICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSwgaTIsIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gIiI7CiAgICBmb3IgKGkyID0gMDsgaTIgPCBsZW47IGkyICs9IDMpIHsKICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kyXSA+PiAyXTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMl0gJiAzKSA8PCA0IHwgYnl0ZXNbaTIgKyAxXSA+PiA0XTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMiArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpMiArIDJdID4+IDZdOwogICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaTIgKyAyXSAmIDYzXTsKICAgIH0KICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgIj0iOwogICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgIj09IjsKICAgIH0KICAgIHJldHVybiBiYXNlNjQ7CiAgfTsKICBjb25zdCBsYXN0QmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7CiAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICBhc3luYyBmdW5jdGlvbiBnZXRUcmFuc3BhcmVudEJsb2JGb3Iod2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMpIHsKICAgIGNvbnN0IGlkID0gYCR7d2lkdGh9LSR7aGVpZ2h0fWA7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBpZiAodHJhbnNwYXJlbnRCbG9iTWFwLmhhcyhpZCkpIHJldHVybiB0cmFuc3BhcmVudEJsb2JNYXAuZ2V0KGlkKTsKICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsKICAgICAgb2Zmc2NyZWVuLmdldENvbnRleHQoIjJkIik7CiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBvZmZzY3JlZW4uY29udmVydFRvQmxvYihkYXRhVVJMT3B0aW9ucyk7CiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpOwogICAgICBjb25zdCBiYXNlNjQgPSBlbmNvZGUoYXJyYXlCdWZmZXIpOwogICAgICB0cmFuc3BhcmVudEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICByZXR1cm4gYmFzZTY0OwogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuICIiOwogICAgfQogIH0KICBjb25zdCB3b3JrZXIgPSBzZWxmOwogIHdvcmtlci5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbihlKSB7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBjb25zdCB7IGlkLCBiaXRtYXAsIHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zIH0gPSBlLmRhdGE7CiAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKAogICAgICAgIHdpZHRoLAogICAgICAgIGhlaWdodCwKICAgICAgICBkYXRhVVJMT3B0aW9ucwogICAgICApOwogICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOwogICAgICBjb25zdCBjdHggPSBvZmZzY3JlZW4uZ2V0Q29udGV4dCgiMmQiKTsKICAgICAgY3R4LmRyYXdJbWFnZShiaXRtYXAsIDAsIDApOwogICAgICBiaXRtYXAuY2xvc2UoKTsKICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IG9mZnNjcmVlbi5jb252ZXJ0VG9CbG9iKGRhdGFVUkxPcHRpb25zKTsKICAgICAgY29uc3QgdHlwZSA9IGJsb2IudHlwZTsKICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7CiAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7CiAgICAgIGlmICghbGFzdEJsb2JNYXAuaGFzKGlkKSAmJiBhd2FpdCB0cmFuc3BhcmVudEJhc2U2NCA9PT0gYmFzZTY0KSB7CiAgICAgICAgbGFzdEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICAgIHJldHVybiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZCB9KTsKICAgICAgfQogICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KSByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7CiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7CiAgICAgICAgaWQsCiAgICAgICAgdHlwZSwKICAgICAgICBiYXNlNjQsCiAgICAgICAgd2lkdGgsCiAgICAgICAgaGVpZ2h0CiAgICAgIH0pOwogICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsKICAgIH0KICB9Owp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS1iaXRtYXAtZGF0YS11cmwtd29ya2VyLUlKcEM3Z19iLmpzLm1hcAo=", j1 = r => Uint8Array.from(atob(r), e => e.charCodeAt(0)), qy = typeof window < "u" && window.Blob && new Blob([j1(Fb)], {
        type: "text/javascript;charset=utf-8"
    });
    Xc = class {
        constructor(e) {
            T(this, "pendingCanvasMutations", new Map), T(this, "rafStamps", {
                latestId: 0,
                invokeId: null
            }), T(this, "mirror"), T(this, "mutationCb"), T(this, "resetObservers"), T(this, "frozen", !1), T(this, "locked", !1), T(this, "processMutation", (a, l) => {
                (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(a) || this.pendingCanvasMutations.set(a, []), this.pendingCanvasMutations.get(a).push(l)
            });
            let {
                sampling: t = "all",
                win: n,
                blockClass: i,
                blockSelector: o,
                recordCanvas: s,
                dataURLOptions: u
            } = e;
            this.mutationCb = e.mutationCb, this.mirror = e.mirror, s && t === "all" && this.initCanvasMutationObserver(n, i, o), s && typeof t == "number" && this.initCanvasFPSObserver(t, n, i, o, {
                dataURLOptions: u
            })
        }
        reset() {
            this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
        }
        freeze() {
            this.frozen = !0
        }
        unfreeze() {
            this.frozen = !1
        }
        lock() {
            this.locked = !0
        }
        unlock() {
            this.locked = !1
        }
        initCanvasFPSObserver(e, t, n, i, o) {
            let s = Gy(t, n, i, !0),
                u = new Map,
                a = new B1;
            a.onmessage = h => {
                let {
                    id: g
                } = h.data;
                if (u.set(g, !1), !("base64" in h.data)) return;
                let {
                    base64: m,
                    type: b,
                    width: v,
                    height: y
                } = h.data;
                this.mutationCb({
                    id: g,
                    type: yn["2D"],
                    commands: [{
                        property: "clearRect",
                        args: [0, 0, v, y]
                    }, {
                        property: "drawImage",
                        args: [{
                            rr_type: "ImageBitmap",
                            args: [{
                                rr_type: "Blob",
                                data: [{
                                    rr_type: "ArrayBuffer",
                                    base64: m
                                }],
                                type: b
                            }]
                        }, 0, 0]
                    }]
                })
            };
            let l = 1e3 / e,
                c = 0,
                f, d = () => {
                    let h = [];
                    return t.document.querySelectorAll("canvas").forEach(g => {
                        Xe(g, n, i, !0) || h.push(g)
                    }), h
                },
                p = h => {
                    if (c && h - c < l) {
                        f = requestAnimationFrame(p);
                        return
                    }
                    c = h, d().forEach(async g => {
                        var m;
                        let b = this.mirror.getId(g);
                        if (u.get(b) || g.width === 0 || g.height === 0) return;
                        if (u.set(b, !0), ["webgl", "webgl2"].includes(g.__context)) {
                            let y = g.getContext(g.__context);
                            ((m = y ? .getContextAttributes()) == null ? void 0 : m.preserveDrawingBuffer) === !1 && y.clear(y.COLOR_BUFFER_BIT)
                        }
                        let v = await createImageBitmap(g);
                        a.postMessage({
                            id: b,
                            bitmap: v,
                            width: g.width,
                            height: g.height,
                            dataURLOptions: o.dataURLOptions
                        }, [v])
                    }), f = requestAnimationFrame(p)
                };
            f = requestAnimationFrame(p), this.resetObservers = () => {
                s(), cancelAnimationFrame(f)
            }
        }
        initCanvasMutationObserver(e, t, n) {
            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
            let i = Gy(e, t, n, !1),
                o = F1(this.processMutation.bind(this), e, t, n),
                s = $1(this.processMutation.bind(this), e, t, n);
            this.resetObservers = () => {
                i(), o(), s()
            }
        }
        startPendingCanvasMutationFlusher() {
            requestAnimationFrame(() => this.flushPendingCanvasMutations())
        }
        startRAFTimestamping() {
            let e = t => {
                this.rafStamps.latestId = t, requestAnimationFrame(e)
            };
            requestAnimationFrame(e)
        }
        flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach((e, t) => {
                let n = this.mirror.getId(t);
                this.flushPendingCanvasMutationFor(t, n)
            }), requestAnimationFrame(() => this.flushPendingCanvasMutations())
        }
        flushPendingCanvasMutationFor(e, t) {
            if (this.frozen || this.locked) return;
            let n = this.pendingCanvasMutations.get(e);
            if (!n || t === -1) return;
            let i = n.map(s => {
                    let {
                        type: u,
                        ...a
                    } = s;
                    return a
                }),
                {
                    type: o
                } = n[0];
            this.mutationCb({
                id: t,
                type: o,
                commands: i
            }), this.pendingCanvasMutations.delete(e)
        }
    }, Jc = class {
        constructor(e) {
            T(this, "trackedLinkElements", new WeakSet), T(this, "mutationCb"), T(this, "adoptedStyleSheetCb"), T(this, "styleMirror", new Zs), this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
        }
        attachLinkElement(e, t) {
            "_cssText" in t.attributes && this.mutationCb({
                adds: [],
                removes: [],
                texts: [],
                attributes: [{
                    id: t.id,
                    attributes: t.attributes
                }]
            }), this.trackLinkElement(e)
        }
        trackLinkElement(e) {
            this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e))
        }
        adoptStyleSheets(e, t) {
            if (e.length === 0) return;
            let n = {
                    id: t,
                    styleIds: []
                },
                i = [];
            for (let o of e) {
                let s;
                this.styleMirror.has(o) ? s = this.styleMirror.getId(o) : (s = this.styleMirror.add(o), i.push({
                    styleId: s,
                    rules: Array.from(o.rules || CSSRule, (u, a) => ({
                        rule: Xy(u, o.href),
                        index: a
                    }))
                })), n.styleIds.push(s)
            }
            i.length > 0 && (n.styles = i), this.adoptedStyleSheetCb(n)
        }
        reset() {
            this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
        }
        trackStylesheetInLinkElement(e) {}
    }, Zc = class {
        constructor() {
            T(this, "nodeMap", new WeakMap), T(this, "active", !1)
        }
        inOtherBuffer(e, t) {
            let n = this.nodeMap.get(e);
            return n && Array.from(n).some(i => i !== t)
        }
        add(e, t) {
            this.active || (this.active = !0, requestAnimationFrame(() => {
                this.nodeMap = new WeakMap, this.active = !1
            })), this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
        }
        destroy() {}
    }, ta = !1;
    try {
        if (Array.from([1], r => r * 2)[0] !== 2) {
            let r = document.createElement("iframe");
            document.body.appendChild(r), Array.from = ((Xv = r.contentWindow) == null ? void 0 : Xv.Array.from) || Array.from, document.body.removeChild(r)
        }
    } catch (r) {
        console.debug("Unable to override Array.from", r)
    }
    At = Xx();
    _t.addCustomEvent = (r, e) => {
        if (!ta) throw new Error("please add custom event after start recording");
        Te({
            type: Y.Custom,
            data: {
                tag: r,
                payload: e
            }
        })
    };
    _t.freezePage = () => {
        kr.forEach(r => r.freeze())
    };
    _t.takeFullSnapshot = r => {
        if (!ta) throw new Error("please take full snapshot after start recording");
        Us(r)
    };
    _t.mirror = At;
    (function(r) {
        r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped"
    })(Hy || (Hy = {}));
    ({
        addCustomEvent: B3
    } = _t), {
        freezePage: V3
    } = _t, {
        takeFullSnapshot: W3
    } = _t
});
var V1, W1, G1, Ub, $b, z1, q1, H1, Y1, jb, Bb = w(() => {
    "use strict";
    dt();
    Ae();
    Fe();
    V1 = "Network error occurred, remote config fetch failed", W1 = "Remote config successfully fetched", G1 = "Remote config fetch rejected due to exceeded retry count", Ub = "Remote config fetch rejected due to timeout after 5 seconds", $b = "Unexpected error occurred", z1 = "https://sr-client-cfg.amplitude.com/config", q1 = "https://sr-client-cfg.stag2.amplitude.com/config", H1 = "https://sr-client-cfg.eu.amplitude.com/config", Y1 = function() {
        function r(e) {
            var t = e.localConfig,
                n = e.configKeys,
                i = this;
            this.retryTimeout = 1e3, this.attempts = 0, this.sessionTargetingMatch = !1, this.metrics = {}, this.getRemoteConfig = function(o, s, u) {
                return N(i, void 0, void 0, function() {
                    var a, l, c;
                    return M(this, function(f) {
                        switch (f.label) {
                            case 0:
                                return a = Date.now(), [4, this.fetchWithTimeout(u)];
                            case 1:
                                return l = f.sent(), l && (c = l.configs && l.configs[o], c) ? (this.metrics.fetchTimeAPISuccess = Date.now() - a, [2, c[s]]) : (this.metrics.fetchTimeAPIFail = Date.now() - a, [2, void 0])
                        }
                    })
                })
            }, this.fetchWithTimeout = function(o) {
                return N(i, void 0, void 0, function() {
                    var s, u, a;
                    return M(this, function(l) {
                        switch (l.label) {
                            case 0:
                                return s = new AbortController, u = setTimeout(function() {
                                    return s.abort()
                                }, 5e3), [4, this.fetchRemoteConfig(s.signal, o)];
                            case 1:
                                return a = l.sent(), clearTimeout(u), [2, a]
                        }
                    })
                })
            }, this.fetchRemoteConfig = function(o, s) {
                return N(i, void 0, void 0, function() {
                    var u, a, l, c, f, d, p, h, g, m, b, v, y;
                    return M(this, function(S) {
                        switch (S.label) {
                            case 0:
                                if (s === this.lastFetchedSessionId && this.attempts >= this.localConfig.flushMaxRetries) return [2, this.completeRequest({
                                    err: G1
                                })];
                                if (o.aborted) return [2, this.completeRequest({
                                    err: Ub
                                })];
                                s !== this.lastFetchedSessionId && (this.lastFetchedSessionId = s, this.attempts = 0), S.label = 1;
                            case 1:
                                S.trys.push([1, 3, , 4]), u = new URLSearchParams({
                                    api_key: this.localConfig.apiKey
                                });
                                try {
                                    for (a = et(this.configKeys), l = a.next(); !l.done; l = a.next()) c = l.value, u.append("config_keys", c)
                                } catch (_) {
                                    b = {
                                        error: _
                                    }
                                } finally {
                                    try {
                                        l && !l.done && (v = a.return) && v.call(a)
                                    } finally {
                                        if (b) throw b.error
                                    }
                                }
                                return s && u.set("session_id", String(s)), f = {
                                    headers: {
                                        Accept: "*/*"
                                    },
                                    method: "GET"
                                }, d = "".concat(this.getServerUrl(), "?").concat(u.toString()), this.attempts += 1, [4, fetch(d, V(V({}, f), {
                                    signal: o
                                }))];
                            case 2:
                                if (p = S.sent(), p === null) return [2, this.completeRequest({
                                    err: $b
                                })];
                                switch (h = new at().buildStatus(p.status), h) {
                                    case H.Success:
                                        return this.attempts = 0, [2, this.parseAndStoreConfig(p)];
                                    case H.Failed:
                                        return [2, this.retryFetch(o, s)];
                                    default:
                                        return [2, this.completeRequest({
                                            err: V1
                                        })]
                                }
                                return [3, 4];
                            case 3:
                                return g = S.sent(), m = g, o.aborted ? [2, this.completeRequest({
                                    err: Ub
                                })] : [2, this.completeRequest({
                                    err: (y = m.message) !== null && y !== void 0 ? y : $b
                                })];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, this.retryFetch = function(o, s) {
                return N(i, void 0, void 0, function() {
                    var u = this;
                    return M(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, new Promise(function(l) {
                                    return setTimeout(l, u.attempts * u.retryTimeout)
                                })];
                            case 1:
                                return a.sent(), [2, this.fetchRemoteConfig(o, s)]
                        }
                    })
                })
            }, this.parseAndStoreConfig = function(o) {
                return N(i, void 0, void 0, function() {
                    var s;
                    return M(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, o.json()];
                            case 1:
                                return s = u.sent(), this.completeRequest({
                                    success: W1
                                }), [2, s]
                        }
                    })
                })
            }, this.localConfig = t, this.configKeys = n
        }
        return r.prototype.getServerUrl = function() {
            return this.localConfig.configServerUrl ? this.localConfig.configServerUrl : this.localConfig.serverZone === nt.STAGING ? q1 : this.localConfig.serverZone === nt.EU ? H1 : z1
        }, r.prototype.completeRequest = function(e) {
            var t = e.err,
                n = e.success;
            if (t) throw new Error(t);
            n && this.localConfig.loggerProvider.log(n)
        }, r
    }(), jb = function(r) {
        var e = r.localConfig,
            t = r.configKeys;
        return N(void 0, void 0, void 0, function() {
            return M(this, function(n) {
                return [2, new Y1({
                    localConfig: e,
                    configKeys: t
                })]
            })
        })
    }
});
var Vb, Wb = w(() => {
    "use strict";
    Bb();
    Vb = jb
});

function X1(r) {
    return r.toLowerCase()
}

function sS(r) {
    let e = r.type;
    return r.hasAttribute("data-rr-is-password") ? "password" : e ? X1(e) : null
}

function Z1(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}

function Q1(r) {
    if (r.__esModule) return r;
    var e = r.default;
    if (typeof e == "function") {
        var t = function n() {
            return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
        };
        t.prototype = e.prototype
    } else t = {};
    return Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.keys(r).forEach(function(n) {
        var i = Object.getOwnPropertyDescriptor(r, n);
        Object.defineProperty(t, n, i.get ? i : {
            enumerable: !0,
            get: function() {
                return r[n]
            }
        })
    }), t
}

function nR(r) {
    return r[0].toUpperCase() + r.slice(1)
}

function jf(r, e) {
    new iR(e).stringify(r)
}

function Bf(r, e) {
    let t = new r.constructor;
    for (let n in r) {
        if (!Object.prototype.hasOwnProperty.call(r, n) || n === "proxyCache") continue;
        let i = r[n],
            o = typeof i;
        n === "parent" && o === "object" ? e && (t[n] = e) : n === "source" ? t[n] = i : Array.isArray(i) ? t[n] = i.map(s => Bf(s, t)) : (o === "object" && i !== null && (i = Bf(i)), t[n] = i)
    }
    return t
}

function vR(r) {
    return Buffer ? Buffer.from(r, "base64").toString() : window.atob(r)
}

function ES(r) {
    return r.map(e => (e.nodes && (e.nodes = ES(e.nodes)), delete e.source, e))
}

function _S(r) {
    if (r[gS] = !1, r.proxyOf.nodes)
        for (let e of r.proxyOf.nodes) _S(e)
}

function KR(r) {
    for (let e = r.length - 1; e >= 0; e--) {
        let t = r[e],
            n = t[3] || t[2];
        if (n) return n
    }
}

function Ta(r, e) {
    let t = new eP(r, e),
        n = new QR(t);
    try {
        n.parse()
    } catch (i) {
        throw i
    }
    return n.root
}

function Ri(r) {
    return typeof r == "object" && typeof r.then == "function"
}

function DS(r) {
    let e = !1,
        t = lP[r.type];
    return r.type === "decl" ? e = r.prop.toLowerCase() : r.type === "atrule" && (e = r.name.toLowerCase()), e && r.append ? [t, t + "-" + e, bn, t + "Exit", t + "Exit-" + e] : e ? [t, t + "-" + e, t + "Exit", t + "Exit-" + e] : r.append ? [t, bn, t + "Exit"] : [t, t + "Exit"]
}

function oS(r) {
    let e;
    return r.type === "document" ? e = ["Document", bn, "DocumentExit"] : r.type === "root" ? e = ["Root", bn, "RootExit"] : e = DS(r), {
        eventIndex: 0,
        events: e,
        iterator: 0,
        node: r,
        visitorIndex: 0,
        visitors: []
    }
}

function Xf(r) {
    return r[qt] = !1, r.nodes && r.nodes.forEach(e => Xf(e)), r
}

function Ni(r, e) {
    if (Array.isArray(r)) return r.map(i => Ni(i));
    let {
        inputs: t,
        ...n
    } = r;
    if (t) {
        e = [];
        for (let i of t) {
            let o = { ...i,
                __proto__: CP.prototype
            };
            o.map && (o.map = { ...o.map,
                __proto__: EP.prototype
            }), e.push(o)
        }
    }
    if (n.nodes && (n.nodes = r.nodes.map(i => Ni(i, e))), n.source) {
        let {
            inputId: i,
            ...o
        } = n.source;
        n.source = o, i != null && (n.source.input = e[i])
    }
    if (n.type === "root") return new IP(n);
    if (n.type === "decl") return new SP(n);
    if (n.type === "rule") return new TP(n);
    if (n.type === "comment") return new _P(n);
    if (n.type === "atrule") return new xP(n);
    throw new Error("Unknown node type: " + r.type)
}

function ne(...r) {
    return r.length === 1 && Array.isArray(r[0]) && (r = r[0]), new ld(r)
}
var K3, J1, X3, Qf, fe, aS, eR, tR, rR, Dt, Gb, zb, Uf, ed, Di, qb, $f, uS, iR, Oa, pa, oR, sR, aR, lR, Vf, Ra, uR, Wf, Pa, cR, fR, dR, pR, Hb, Yb, hR, mR, Df, gR, Gf, cS, yR, wR, Kb, ha, zf, qf, bR, kf, Xb, SR, Lf, ER, Jb, xa, Aa, fS, Ea, _a, dS, pS, hS, Zb, _R, xR, CR, IR, mS, TR, Hf, Ma, gS, vS, yS, wS, OR, bS, td, rd, SS, or, jr, RR, CS, IS, Pi, nd, Yf, TS, PR, Kf, id, Ff, Qb, ma, eS, ga, Oi, va, ya, wa, AR, MR, NR, DR, kR, LR, FR, UR, $R, jR, ba, Sa, BR, tS, VR, OS, Ca, od, RS, PS, AS, wn, ki, Ai, MS, NS, WR, Ia, sd, GR, zR, qR, HR, YR, rS, nS, XR, JR, ZR, QR, eP, ad, qt, tP, rP, nP, iP, oP, iS, sP, aP, lP, uP, cP, bn, Jf, Sn, LS, fP, dP, pP, hP, Zf, mP, gP, vP, yP, wP, Mi, bP, SP, EP, _P, xP, CP, IP, TP, OP, RP, FS, PP, AP, ld, MP, NP, US, DP, $S, jS, kP, LP, FP, UP, BS, VS, $P, jP, ve, WS = w(() => {
    "use strict";
    K3 = new RegExp("[^a-z0-9-_:]"), J1 = /(max|min)-device-(width|height)/, X3 = new RegExp(J1.source, "g");
    Qf = {
        exports: {}
    }, fe = String, aS = function() {
        return {
            isColorSupported: !1,
            reset: fe,
            bold: fe,
            dim: fe,
            italic: fe,
            underline: fe,
            inverse: fe,
            hidden: fe,
            strikethrough: fe,
            black: fe,
            red: fe,
            green: fe,
            yellow: fe,
            blue: fe,
            magenta: fe,
            cyan: fe,
            white: fe,
            gray: fe,
            bgBlack: fe,
            bgRed: fe,
            bgGreen: fe,
            bgYellow: fe,
            bgBlue: fe,
            bgMagenta: fe,
            bgCyan: fe,
            bgWhite: fe
        }
    };
    Qf.exports = aS();
    Qf.exports.createColors = aS;
    eR = Qf.exports, tR = {}, rR = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: tR
    }, Symbol.toStringTag, {
        value: "Module"
    })), Dt = Q1(rR), Gb = eR, zb = Dt, Uf = class lS extends Error {
        constructor(e, t, n, i, o, s) {
            super(e), this.name = "CssSyntaxError", this.reason = e, o && (this.file = o), i && (this.source = i), s && (this.plugin = s), typeof t < "u" && typeof n < "u" && (typeof t == "number" ? (this.line = t, this.column = n) : (this.line = t.line, this.column = t.column, this.endLine = n.line, this.endColumn = n.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, lS)
        }
        setMessage() {
            this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(e) {
            if (!this.source) return "";
            let t = this.source;
            e == null && (e = Gb.isColorSupported), zb && e && (t = zb(t));
            let n = t.split(/\r?\n/),
                i = Math.max(this.line - 3, 0),
                o = Math.min(this.line + 2, n.length),
                s = String(o).length,
                u, a;
            if (e) {
                let {
                    bold: l,
                    gray: c,
                    red: f
                } = Gb.createColors(!0);
                u = d => l(f(d)), a = d => c(d)
            } else u = a = l => l;
            return n.slice(i, o).map((l, c) => {
                let f = i + 1 + c,
                    d = " " + (" " + f).slice(-s) + " | ";
                if (f === this.line) {
                    let p = a(d.replace(/\d/g, " ")) + l.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                    return u(">") + a(d) + l + `
 ` + p + u("^")
                }
                return " " + a(d) + l
            }).join(`
`)
        }
        toString() {
            let e = this.showSourceCode();
            return e && (e = `

` + e + `
`), this.name + ": " + this.message + e
        }
    }, ed = Uf;
    Uf.default = Uf;
    Di = {};
    Di.isClean = Symbol("isClean");
    Di.my = Symbol("my");
    qb = {
        after: `
`,
        beforeClose: `
`,
        beforeComment: `
`,
        beforeDecl: `
`,
        beforeOpen: " ",
        beforeRule: `
`,
        colon: ": ",
        commentLeft: " ",
        commentRight: " ",
        emptyBody: "",
        indent: "    ",
        semicolon: !1
    };
    $f = class {
        constructor(e) {
            this.builder = e
        }
        atrule(e, t) {
            let n = "@" + e.name,
                i = e.params ? this.rawValue(e, "params") : "";
            if (typeof e.raws.afterName < "u" ? n += e.raws.afterName : i && (n += " "), e.nodes) this.block(e, n + i);
            else {
                let o = (e.raws.between || "") + (t ? ";" : "");
                this.builder(n + i + o, e)
            }
        }
        beforeAfter(e, t) {
            let n;
            e.type === "decl" ? n = this.raw(e, null, "beforeDecl") : e.type === "comment" ? n = this.raw(e, null, "beforeComment") : t === "before" ? n = this.raw(e, null, "beforeRule") : n = this.raw(e, null, "beforeClose");
            let i = e.parent,
                o = 0;
            for (; i && i.type !== "root";) o += 1, i = i.parent;
            if (n.includes(`
`)) {
                let s = this.raw(e, null, "indent");
                if (s.length)
                    for (let u = 0; u < o; u++) n += s
            }
            return n
        }
        block(e, t) {
            let n = this.raw(e, "between", "beforeOpen");
            this.builder(t + n + "{", e, "start");
            let i;
            e.nodes && e.nodes.length ? (this.body(e), i = this.raw(e, "after")) : i = this.raw(e, "after", "emptyBody"), i && this.builder(i), this.builder("}", e, "end")
        }
        body(e) {
            let t = e.nodes.length - 1;
            for (; t > 0 && e.nodes[t].type === "comment";) t -= 1;
            let n = this.raw(e, "semicolon");
            for (let i = 0; i < e.nodes.length; i++) {
                let o = e.nodes[i],
                    s = this.raw(o, "before");
                s && this.builder(s), this.stringify(o, t !== i || n)
            }
        }
        comment(e) {
            let t = this.raw(e, "left", "commentLeft"),
                n = this.raw(e, "right", "commentRight");
            this.builder("/*" + t + e.text + n + "*/", e)
        }
        decl(e, t) {
            let n = this.raw(e, "between", "colon"),
                i = e.prop + n + this.rawValue(e, "value");
            e.important && (i += e.raws.important || " !important"), t && (i += ";"), this.builder(i, e)
        }
        document(e) {
            this.body(e)
        }
        raw(e, t, n) {
            let i;
            if (n || (n = t), t && (i = e.raws[t], typeof i < "u")) return i;
            let o = e.parent;
            if (n === "before" && (!o || o.type === "root" && o.first === e || o && o.type === "document")) return "";
            if (!o) return qb[n];
            let s = e.root();
            if (s.rawCache || (s.rawCache = {}), typeof s.rawCache[n] < "u") return s.rawCache[n];
            if (n === "before" || n === "after") return this.beforeAfter(e, n); {
                let u = "raw" + nR(n);
                this[u] ? i = this[u](s, e) : s.walk(a => {
                    if (i = a.raws[t], typeof i < "u") return !1
                })
            }
            return typeof i > "u" && (i = qb[n]), s.rawCache[n] = i, i
        }
        rawBeforeClose(e) {
            let t;
            return e.walk(n => {
                if (n.nodes && n.nodes.length > 0 && typeof n.raws.after < "u") return t = n.raws.after, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1
            }), t && (t = t.replace(/\S/g, "")), t
        }
        rawBeforeComment(e, t) {
            let n;
            return e.walkComments(i => {
                if (typeof i.raws.before < "u") return n = i.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1
            }), typeof n > "u" ? n = this.raw(t, null, "beforeDecl") : n && (n = n.replace(/\S/g, "")), n
        }
        rawBeforeDecl(e, t) {
            let n;
            return e.walkDecls(i => {
                if (typeof i.raws.before < "u") return n = i.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1
            }), typeof n > "u" ? n = this.raw(t, null, "beforeRule") : n && (n = n.replace(/\S/g, "")), n
        }
        rawBeforeOpen(e) {
            let t;
            return e.walk(n => {
                if (n.type !== "decl" && (t = n.raws.between, typeof t < "u")) return !1
            }), t
        }
        rawBeforeRule(e) {
            let t;
            return e.walk(n => {
                if (n.nodes && (n.parent !== e || e.first !== n) && typeof n.raws.before < "u") return t = n.raws.before, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1
            }), t && (t = t.replace(/\S/g, "")), t
        }
        rawColon(e) {
            let t;
            return e.walkDecls(n => {
                if (typeof n.raws.between < "u") return t = n.raws.between.replace(/[^\s:]/g, ""), !1
            }), t
        }
        rawEmptyBody(e) {
            let t;
            return e.walk(n => {
                if (n.nodes && n.nodes.length === 0 && (t = n.raws.after, typeof t < "u")) return !1
            }), t
        }
        rawIndent(e) {
            if (e.raws.indent) return e.raws.indent;
            let t;
            return e.walk(n => {
                let i = n.parent;
                if (i && i !== e && i.parent && i.parent === e && typeof n.raws.before < "u") {
                    let o = n.raws.before.split(`
`);
                    return t = o[o.length - 1], t = t.replace(/\S/g, ""), !1
                }
            }), t
        }
        rawSemicolon(e) {
            let t;
            return e.walk(n => {
                if (n.nodes && n.nodes.length && n.last.type === "decl" && (t = n.raws.semicolon, typeof t < "u")) return !1
            }), t
        }
        rawValue(e, t) {
            let n = e[t],
                i = e.raws[t];
            return i && i.value === n ? i.raw : n
        }
        root(e) {
            this.body(e), e.raws.after && this.builder(e.raws.after)
        }
        rule(e) {
            this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end")
        }
        stringify(e, t) {
            if (!this[e.type]) throw new Error("Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier.");
            this[e.type](e, t)
        }
    }, uS = $f;
    $f.default = $f;
    iR = uS;
    Oa = jf;
    jf.default = jf;
    ({
        isClean: pa,
        my: oR
    } = Di), sR = ed, aR = uS, lR = Oa;
    Vf = class {
        constructor(e = {}) {
            this.raws = {}, this[pa] = !1, this[oR] = !0;
            for (let t in e)
                if (t === "nodes") {
                    this.nodes = [];
                    for (let n of e[t]) typeof n.clone == "function" ? this.append(n.clone()) : this.append(n)
                } else this[t] = e[t]
        }
        addToError(e) {
            if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
                let t = this.source;
                e.stack = e.stack.replace(/\n\s{4}at /, `$&${t.input.from}:${t.start.line}:${t.start.column}$&`)
            }
            return e
        }
        after(e) {
            return this.parent.insertAfter(this, e), this
        }
        assign(e = {}) {
            for (let t in e) this[t] = e[t];
            return this
        }
        before(e) {
            return this.parent.insertBefore(this, e), this
        }
        cleanRaws(e) {
            delete this.raws.before, delete this.raws.after, e || delete this.raws.between
        }
        clone(e = {}) {
            let t = Bf(this);
            for (let n in e) t[n] = e[n];
            return t
        }
        cloneAfter(e = {}) {
            let t = this.clone(e);
            return this.parent.insertAfter(this, t), t
        }
        cloneBefore(e = {}) {
            let t = this.clone(e);
            return this.parent.insertBefore(this, t), t
        }
        error(e, t = {}) {
            if (this.source) {
                let {
                    end: n,
                    start: i
                } = this.rangeBy(t);
                return this.source.input.error(e, {
                    column: i.column,
                    line: i.line
                }, {
                    column: n.column,
                    line: n.line
                }, t)
            }
            return new sR(e)
        }
        getProxyProcessor() {
            return {
                get(e, t) {
                    return t === "proxyOf" ? e : t === "root" ? () => e.root().toProxy() : e[t]
                },
                set(e, t, n) {
                    return e[t] === n || (e[t] = n, (t === "prop" || t === "value" || t === "name" || t === "params" || t === "important" || t === "text") && e.markDirty()), !0
                }
            }
        }
        markDirty() {
            if (this[pa]) {
                this[pa] = !1;
                let e = this;
                for (; e = e.parent;) e[pa] = !1
            }
        }
        next() {
            if (!this.parent) return;
            let e = this.parent.index(this);
            return this.parent.nodes[e + 1]
        }
        positionBy(e, t) {
            let n = this.source.start;
            if (e.index) n = this.positionInside(e.index, t);
            else if (e.word) {
                t = this.toString();
                let i = t.indexOf(e.word);
                i !== -1 && (n = this.positionInside(i, t))
            }
            return n
        }
        positionInside(e, t) {
            let n = t || this.toString(),
                i = this.source.start.column,
                o = this.source.start.line;
            for (let s = 0; s < e; s++) n[s] === `
` ? (i = 1, o += 1) : i += 1;
            return {
                column: i,
                line: o
            }
        }
        prev() {
            if (!this.parent) return;
            let e = this.parent.index(this);
            return this.parent.nodes[e - 1]
        }
        rangeBy(e) {
            let t = {
                    column: this.source.start.column,
                    line: this.source.start.line
                },
                n = this.source.end ? {
                    column: this.source.end.column + 1,
                    line: this.source.end.line
                } : {
                    column: t.column + 1,
                    line: t.line
                };
            if (e.word) {
                let i = this.toString(),
                    o = i.indexOf(e.word);
                o !== -1 && (t = this.positionInside(o, i), n = this.positionInside(o + e.word.length, i))
            } else e.start ? t = {
                column: e.start.column,
                line: e.start.line
            } : e.index && (t = this.positionInside(e.index)), e.end ? n = {
                column: e.end.column,
                line: e.end.line
            } : typeof e.endIndex == "number" ? n = this.positionInside(e.endIndex) : e.index && (n = this.positionInside(e.index + 1));
            return (n.line < t.line || n.line === t.line && n.column <= t.column) && (n = {
                column: t.column + 1,
                line: t.line
            }), {
                end: n,
                start: t
            }
        }
        raw(e, t) {
            return new aR().raw(this, e, t)
        }
        remove() {
            return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith(...e) {
            if (this.parent) {
                let t = this,
                    n = !1;
                for (let i of e) i === this ? n = !0 : n ? (this.parent.insertAfter(t, i), t = i) : this.parent.insertBefore(t, i);
                n || this.remove()
            }
            return this
        }
        root() {
            let e = this;
            for (; e.parent && e.parent.type !== "document";) e = e.parent;
            return e
        }
        toJSON(e, t) {
            let n = {},
                i = t == null;
            t = t || new Map;
            let o = 0;
            for (let s in this) {
                if (!Object.prototype.hasOwnProperty.call(this, s) || s === "parent" || s === "proxyCache") continue;
                let u = this[s];
                if (Array.isArray(u)) n[s] = u.map(a => typeof a == "object" && a.toJSON ? a.toJSON(null, t) : a);
                else if (typeof u == "object" && u.toJSON) n[s] = u.toJSON(null, t);
                else if (s === "source") {
                    let a = t.get(u.input);
                    a == null && (a = o, t.set(u.input, o), o++), n[s] = {
                        end: u.end,
                        inputId: a,
                        start: u.start
                    }
                } else n[s] = u
            }
            return i && (n.inputs = [...t.keys()].map(s => s.toJSON())), n
        }
        toProxy() {
            return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString(e = lR) {
            e.stringify && (e = e.stringify);
            let t = "";
            return e(this, n => {
                t += n
            }), t
        }
        warn(e, t, n) {
            let i = {
                node: this
            };
            for (let o in n) i[o] = n[o];
            return e.warn(t, i)
        }
        get proxyOf() {
            return this
        }
    }, Ra = Vf;
    Vf.default = Vf;
    uR = Ra, Wf = class extends uR {
        constructor(e) {
            e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e,
                value: String(e.value)
            }), super(e), this.type = "decl"
        }
        get variable() {
            return this.prop.startsWith("--") || this.prop[0] === "$"
        }
    }, Pa = Wf;
    Wf.default = Wf;
    cR = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", fR = (r, e = 21) => (t = e) => {
        let n = "",
            i = t;
        for (; i--;) n += r[Math.random() * r.length | 0];
        return n
    }, dR = (r = 21) => {
        let e = "",
            t = r;
        for (; t--;) e += cR[Math.random() * 64 | 0];
        return e
    }, pR = {
        nanoid: dR,
        customAlphabet: fR
    }, {
        SourceMapConsumer: Hb,
        SourceMapGenerator: Yb
    } = Dt, {
        existsSync: hR,
        readFileSync: mR
    } = Dt, {
        dirname: Df,
        join: gR
    } = Dt;
    Gf = class {
        constructor(e, t) {
            if (t.map === !1) return;
            this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
            let n = t.map ? t.map.prev : void 0,
                i = this.loadMap(t.from, n);
            !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = Df(this.mapFile)), i && (this.text = i)
        }
        consumer() {
            return this.consumerCache || (this.consumerCache = new Hb(this.text)), this.consumerCache
        }
        decodeInline(e) {
            let t = /^data:application\/json;charset=utf-?8;base64,/,
                n = /^data:application\/json;base64,/,
                i = /^data:application\/json;charset=utf-?8,/,
                o = /^data:application\/json,/;
            if (i.test(e) || o.test(e)) return decodeURIComponent(e.substr(RegExp.lastMatch.length));
            if (t.test(e) || n.test(e)) return vR(e.substr(RegExp.lastMatch.length));
            let s = e.match(/data:application\/json;([^,]+),/)[1];
            throw new Error("Unsupported source map encoding " + s)
        }
        getAnnotationURL(e) {
            return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(e) {
            return typeof e != "object" ? !1 : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections)
        }
        loadAnnotation(e) {
            let t = e.match(/\/\*\s*# sourceMappingURL=/gm);
            if (!t) return;
            let n = e.lastIndexOf(t.pop()),
                i = e.indexOf("*/", n);
            n > -1 && i > -1 && (this.annotation = this.getAnnotationURL(e.substring(n, i)))
        }
        loadFile(e) {
            if (this.root = Df(e), hR(e)) return this.mapFile = e, mR(e, "utf-8").toString().trim()
        }
        loadMap(e, t) {
            if (t === !1) return !1;
            if (t) {
                if (typeof t == "string") return t;
                if (typeof t == "function") {
                    let n = t(e);
                    if (n) {
                        let i = this.loadFile(n);
                        if (!i) throw new Error("Unable to load previous source map: " + n.toString());
                        return i
                    }
                } else {
                    if (t instanceof Hb) return Yb.fromSourceMap(t).toString();
                    if (t instanceof Yb) return t.toString();
                    if (this.isMap(t)) return JSON.stringify(t);
                    throw new Error("Unsupported previous source map format: " + t.toString())
                }
            } else {
                if (this.inline) return this.decodeInline(this.annotation);
                if (this.annotation) {
                    let n = this.annotation;
                    return e && (n = gR(Df(e), n)), this.loadFile(n)
                }
            }
        }
        startWith(e, t) {
            return e ? e.substr(0, t.length) === t : !1
        }
        withContent() {
            return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
    }, cS = Gf;
    Gf.default = Gf;
    ({
        SourceMapConsumer: yR,
        SourceMapGenerator: wR
    } = Dt), {
        fileURLToPath: Kb,
        pathToFileURL: ha
    } = Dt, {
        isAbsolute: zf,
        resolve: qf
    } = Dt, {
        nanoid: bR
    } = pR, kf = Dt, Xb = ed, SR = cS, Lf = Symbol("fromOffsetCache"), ER = !!(yR && wR), Jb = !!(qf && zf), xa = class {
        constructor(e, t = {}) {
            if (e === null || typeof e > "u" || typeof e == "object" && !e.toString) throw new Error(`PostCSS received ${e} instead of CSS string`);
            if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!Jb || /^\w+:\/\//.test(t.from) || zf(t.from) ? this.file = t.from : this.file = qf(t.from)), Jb && ER) {
                let n = new SR(this.css, t);
                if (n.text) {
                    this.map = n;
                    let i = n.consumer().file;
                    !this.file && i && (this.file = this.mapResolve(i))
                }
            }
            this.file || (this.id = "<input css " + bR(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(e, t, n, i = {}) {
            let o, s, u;
            if (t && typeof t == "object") {
                let l = t,
                    c = n;
                if (typeof l.offset == "number") {
                    let f = this.fromOffset(l.offset);
                    t = f.line, n = f.col
                } else t = l.line, n = l.column;
                if (typeof c.offset == "number") {
                    let f = this.fromOffset(c.offset);
                    s = f.line, u = f.col
                } else s = c.line, u = c.column
            } else if (!n) {
                let l = this.fromOffset(t);
                t = l.line, n = l.col
            }
            let a = this.origin(t, n, s, u);
            return a ? o = new Xb(e, a.endLine === void 0 ? a.line : {
                column: a.column,
                line: a.line
            }, a.endLine === void 0 ? a.column : {
                column: a.endColumn,
                line: a.endLine
            }, a.source, a.file, i.plugin) : o = new Xb(e, s === void 0 ? t : {
                column: n,
                line: t
            }, s === void 0 ? n : {
                column: u,
                line: s
            }, this.css, this.file, i.plugin), o.input = {
                column: n,
                endColumn: u,
                endLine: s,
                line: t,
                source: this.css
            }, this.file && (ha && (o.input.url = ha(this.file).toString()), o.input.file = this.file), o
        }
        fromOffset(e) {
            let t, n;
            if (this[Lf]) n = this[Lf];
            else {
                let o = this.css.split(`
`);
                n = new Array(o.length);
                let s = 0;
                for (let u = 0, a = o.length; u < a; u++) n[u] = s, s += o[u].length + 1;
                this[Lf] = n
            }
            t = n[n.length - 1];
            let i = 0;
            if (e >= t) i = n.length - 1;
            else {
                let o = n.length - 2,
                    s;
                for (; i < o;)
                    if (s = i + (o - i >> 1), e < n[s]) o = s - 1;
                    else if (e >= n[s + 1]) i = s + 1;
                else {
                    i = s;
                    break
                }
            }
            return {
                col: e - n[i] + 1,
                line: i + 1
            }
        }
        mapResolve(e) {
            return /^\w+:\/\//.test(e) ? e : qf(this.map.consumer().sourceRoot || this.map.root || ".", e)
        }
        origin(e, t, n, i) {
            if (!this.map) return !1;
            let o = this.map.consumer(),
                s = o.originalPositionFor({
                    column: t,
                    line: e
                });
            if (!s.source) return !1;
            let u;
            typeof n == "number" && (u = o.originalPositionFor({
                column: i,
                line: n
            }));
            let a;
            zf(s.source) ? a = ha(s.source) : a = new URL(s.source, this.map.consumer().sourceRoot || ha(this.map.mapFile));
            let l = {
                column: s.column,
                endColumn: u && u.column,
                endLine: u && u.line,
                line: s.line,
                url: a.toString()
            };
            if (a.protocol === "file:")
                if (Kb) l.file = Kb(a);
                else throw new Error("file: protocol is not available in this PostCSS build");
            let c = o.sourceContentFor(s.source);
            return c && (l.source = c), l
        }
        toJSON() {
            let e = {};
            for (let t of ["hasBOM", "css", "file", "id"]) this[t] != null && (e[t] = this[t]);
            return this.map && (e.map = { ...this.map
            }, e.map.consumerCache && (e.map.consumerCache = void 0)), e
        }
        get from() {
            return this.file || this.id
        }
    }, Aa = xa;
    xa.default = xa;
    kf && kf.registerInput && kf.registerInput(xa);
    ({
        SourceMapConsumer: fS,
        SourceMapGenerator: Ea
    } = Dt), {
        dirname: _a,
        relative: dS,
        resolve: pS,
        sep: hS
    } = Dt, {
        pathToFileURL: Zb
    } = Dt, _R = Aa, xR = !!(fS && Ea), CR = !!(_a && pS && dS && hS), IR = class {
        constructor(e, t, n, i) {
            this.stringify = e, this.mapOpts = n.map || {}, this.root = t, this.opts = n, this.css = i, this.originalCSS = i, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
            let e;
            this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
            let t = `
`;
            this.css.includes(`\r
`) && (t = `\r
`), this.css += t + "/*# sourceMappingURL=" + e + " */"
        }
        applyPrevMaps() {
            for (let e of this.previous()) {
                let t = this.toUrl(this.path(e.file)),
                    n = e.root || _a(e.file),
                    i;
                this.mapOpts.sourcesContent === !1 ? (i = new fS(e.text), i.sourcesContent && (i.sourcesContent = null)) : i = e.consumer(), this.map.applySourceMap(i, t, this.toUrl(this.path(n)))
            }
        }
        clearAnnotation() {
            if (this.mapOpts.annotation !== !1)
                if (this.root) {
                    let e;
                    for (let t = this.root.nodes.length - 1; t >= 0; t--) e = this.root.nodes[t], e.type === "comment" && e.text.indexOf("# sourceMappingURL=") === 0 && this.root.removeChild(t)
                } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
            if (this.clearAnnotation(), CR && xR && this.isMap()) return this.generateMap(); {
                let e = "";
                return this.stringify(this.root, t => {
                    e += t
                }), [e]
            }
        }
        generateMap() {
            if (this.root) this.generateString();
            else if (this.previous().length === 1) {
                let e = this.previous()[0].consumer();
                e.file = this.outputFile(), this.map = Ea.fromSourceMap(e, {
                    ignoreInvalidMapping: !0
                })
            } else this.map = new Ea({
                file: this.outputFile(),
                ignoreInvalidMapping: !0
            }), this.map.addMapping({
                generated: {
                    column: 0,
                    line: 1
                },
                original: {
                    column: 0,
                    line: 1
                },
                source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
            });
            return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map]
        }
        generateString() {
            this.css = "", this.map = new Ea({
                file: this.outputFile(),
                ignoreInvalidMapping: !0
            });
            let e = 1,
                t = 1,
                n = "<no source>",
                i = {
                    generated: {
                        column: 0,
                        line: 0
                    },
                    original: {
                        column: 0,
                        line: 0
                    },
                    source: ""
                },
                o, s;
            this.stringify(this.root, (u, a, l) => {
                if (this.css += u, a && l !== "end" && (i.generated.line = e, i.generated.column = t - 1, a.source && a.source.start ? (i.source = this.sourcePath(a), i.original.line = a.source.start.line, i.original.column = a.source.start.column - 1, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, this.map.addMapping(i))), o = u.match(/\n/g), o ? (e += o.length, s = u.lastIndexOf(`
`), t = u.length - s) : t += u.length, a && l !== "start") {
                    let c = a.parent || {
                        raws: {}
                    };
                    (!(a.type === "decl" || a.type === "atrule" && !a.nodes) || a !== c.last || c.raws.semicolon) && (a.source && a.source.end ? (i.source = this.sourcePath(a), i.original.line = a.source.end.line, i.original.column = a.source.end.column - 1, i.generated.line = e, i.generated.column = t - 2, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, i.generated.line = e, i.generated.column = t - 1, this.map.addMapping(i)))
                }
            })
        }
        isAnnotation() {
            return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some(e => e.annotation) : !0
        }
        isInline() {
            if (typeof this.mapOpts.inline < "u") return this.mapOpts.inline;
            let e = this.mapOpts.annotation;
            return typeof e < "u" && e !== !0 ? !1 : this.previous().length ? this.previous().some(t => t.inline) : !0
        }
        isMap() {
            return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
            return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some(e => e.withContent()) : !0
        }
        outputFile() {
            return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(e) {
            if (this.mapOpts.absolute || e.charCodeAt(0) === 60 || /^\w+:\/\//.test(e)) return e;
            let t = this.memoizedPaths.get(e);
            if (t) return t;
            let n = this.opts.to ? _a(this.opts.to) : ".";
            typeof this.mapOpts.annotation == "string" && (n = _a(pS(n, this.mapOpts.annotation)));
            let i = dS(n, e);
            return this.memoizedPaths.set(e, i), i
        }
        previous() {
            if (!this.previousMaps)
                if (this.previousMaps = [], this.root) this.root.walk(e => {
                    if (e.source && e.source.input.map) {
                        let t = e.source.input.map;
                        this.previousMaps.includes(t) || this.previousMaps.push(t)
                    }
                });
                else {
                    let e = new _R(this.originalCSS, this.opts);
                    e.map && this.previousMaps.push(e.map)
                }
            return this.previousMaps
        }
        setSourcesContent() {
            let e = {};
            if (this.root) this.root.walk(t => {
                if (t.source) {
                    let n = t.source.input.from;
                    if (n && !e[n]) {
                        e[n] = !0;
                        let i = this.usesFileUrls ? this.toFileUrl(n) : this.toUrl(this.path(n));
                        this.map.setSourceContent(i, t.source.input.css)
                    }
                }
            });
            else if (this.css) {
                let t = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
                this.map.setSourceContent(t, this.css)
            }
        }
        sourcePath(e) {
            return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from))
        }
        toBase64(e) {
            return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)))
        }
        toFileUrl(e) {
            let t = this.memoizedFileURLs.get(e);
            if (t) return t;
            if (Zb) {
                let n = Zb(e).toString();
                return this.memoizedFileURLs.set(e, n), n
            } else throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(e) {
            let t = this.memoizedURLs.get(e);
            if (t) return t;
            hS === "\\" && (e = e.replace(/\\/g, "/"));
            let n = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
            return this.memoizedURLs.set(e, n), n
        }
    }, mS = IR, TR = Ra, Hf = class extends TR {
        constructor(e) {
            super(e), this.type = "comment"
        }
    }, Ma = Hf;
    Hf.default = Hf;
    ({
        isClean: gS,
        my: vS
    } = Di), yS = Pa, wS = Ma, OR = Ra;
    or = class xS extends OR {
        append(...e) {
            for (let t of e) {
                let n = this.normalize(t, this.last);
                for (let i of n) this.proxyOf.nodes.push(i)
            }
            return this.markDirty(), this
        }
        cleanRaws(e) {
            if (super.cleanRaws(e), this.nodes)
                for (let t of this.nodes) t.cleanRaws(e)
        }
        each(e) {
            if (!this.proxyOf.nodes) return;
            let t = this.getIterator(),
                n, i;
            for (; this.indexes[t] < this.proxyOf.nodes.length && (n = this.indexes[t], i = e(this.proxyOf.nodes[n], n), i !== !1);) this.indexes[t] += 1;
            return delete this.indexes[t], i
        }
        every(e) {
            return this.nodes.every(e)
        }
        getIterator() {
            this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
            let e = this.lastEach;
            return this.indexes[e] = 0, e
        }
        getProxyProcessor() {
            return {
                get(e, t) {
                    return t === "proxyOf" ? e : e[t] ? t === "each" || typeof t == "string" && t.startsWith("walk") ? (...n) => e[t](...n.map(i => typeof i == "function" ? (o, s) => i(o.toProxy(), s) : i)) : t === "every" || t === "some" ? n => e[t]((i, ...o) => n(i.toProxy(), ...o)) : t === "root" ? () => e.root().toProxy() : t === "nodes" ? e.nodes.map(n => n.toProxy()) : t === "first" || t === "last" ? e[t].toProxy() : e[t] : e[t]
                },
                set(e, t, n) {
                    return e[t] === n || (e[t] = n, (t === "name" || t === "params" || t === "selector") && e.markDirty()), !0
                }
            }
        }
        index(e) {
            return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e))
        }
        insertAfter(e, t) {
            let n = this.index(e),
                i = this.normalize(t, this.proxyOf.nodes[n]).reverse();
            n = this.index(e);
            for (let s of i) this.proxyOf.nodes.splice(n + 1, 0, s);
            let o;
            for (let s in this.indexes) o = this.indexes[s], n < o && (this.indexes[s] = o + i.length);
            return this.markDirty(), this
        }
        insertBefore(e, t) {
            let n = this.index(e),
                i = n === 0 ? "prepend" : !1,
                o = this.normalize(t, this.proxyOf.nodes[n], i).reverse();
            n = this.index(e);
            for (let u of o) this.proxyOf.nodes.splice(n, 0, u);
            let s;
            for (let u in this.indexes) s = this.indexes[u], n <= s && (this.indexes[u] = s + o.length);
            return this.markDirty(), this
        }
        normalize(e, t) {
            if (typeof e == "string") e = ES(bS(e).nodes);
            else if (typeof e > "u") e = [];
            else if (Array.isArray(e)) {
                e = e.slice(0);
                for (let i of e) i.parent && i.parent.removeChild(i, "ignore")
            } else if (e.type === "root" && this.type !== "document") {
                e = e.nodes.slice(0);
                for (let i of e) i.parent && i.parent.removeChild(i, "ignore")
            } else if (e.type) e = [e];
            else if (e.prop) {
                if (typeof e.value > "u") throw new Error("Value field is missed in node creation");
                typeof e.value != "string" && (e.value = String(e.value)), e = [new yS(e)]
            } else if (e.selector) e = [new td(e)];
            else if (e.name) e = [new rd(e)];
            else if (e.text) e = [new wS(e)];
            else throw new Error("Unknown node type in node creation");
            return e.map(i => (i[vS] || xS.rebuild(i), i = i.proxyOf, i.parent && i.parent.removeChild(i), i[gS] && _S(i), typeof i.raws.before > "u" && t && typeof t.raws.before < "u" && (i.raws.before = t.raws.before.replace(/\S/g, "")), i.parent = this.proxyOf, i))
        }
        prepend(...e) {
            e = e.reverse();
            for (let t of e) {
                let n = this.normalize(t, this.first, "prepend").reverse();
                for (let i of n) this.proxyOf.nodes.unshift(i);
                for (let i in this.indexes) this.indexes[i] = this.indexes[i] + n.length
            }
            return this.markDirty(), this
        }
        push(e) {
            return e.parent = this, this.proxyOf.nodes.push(e), this
        }
        removeAll() {
            for (let e of this.proxyOf.nodes) e.parent = void 0;
            return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(e) {
            e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
            let t;
            for (let n in this.indexes) t = this.indexes[n], t >= e && (this.indexes[n] = t - 1);
            return this.markDirty(), this
        }
        replaceValues(e, t, n) {
            return n || (n = t, t = {}), this.walkDecls(i => {
                t.props && !t.props.includes(i.prop) || t.fast && !i.value.includes(t.fast) || (i.value = i.value.replace(e, n))
            }), this.markDirty(), this
        }
        some(e) {
            return this.nodes.some(e)
        }
        walk(e) {
            return this.each((t, n) => {
                let i;
                try {
                    i = e(t, n)
                } catch (o) {
                    throw t.addToError(o)
                }
                return i !== !1 && t.walk && (i = t.walk(e)), i
            })
        }
        walkAtRules(e, t) {
            return t ? e instanceof RegExp ? this.walk((n, i) => {
                if (n.type === "atrule" && e.test(n.name)) return t(n, i)
            }) : this.walk((n, i) => {
                if (n.type === "atrule" && n.name === e) return t(n, i)
            }) : (t = e, this.walk((n, i) => {
                if (n.type === "atrule") return t(n, i)
            }))
        }
        walkComments(e) {
            return this.walk((t, n) => {
                if (t.type === "comment") return e(t, n)
            })
        }
        walkDecls(e, t) {
            return t ? e instanceof RegExp ? this.walk((n, i) => {
                if (n.type === "decl" && e.test(n.prop)) return t(n, i)
            }) : this.walk((n, i) => {
                if (n.type === "decl" && n.prop === e) return t(n, i)
            }) : (t = e, this.walk((n, i) => {
                if (n.type === "decl") return t(n, i)
            }))
        }
        walkRules(e, t) {
            return t ? e instanceof RegExp ? this.walk((n, i) => {
                if (n.type === "rule" && e.test(n.selector)) return t(n, i)
            }) : this.walk((n, i) => {
                if (n.type === "rule" && n.selector === e) return t(n, i)
            }) : (t = e, this.walk((n, i) => {
                if (n.type === "rule") return t(n, i)
            }))
        }
        get first() {
            if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
            if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
    };
    or.registerParse = r => {
        bS = r
    };
    or.registerRule = r => {
        td = r
    };
    or.registerAtRule = r => {
        rd = r
    };
    or.registerRoot = r => {
        SS = r
    };
    jr = or;
    or.default = or;
    or.rebuild = r => {
        r.type === "atrule" ? Object.setPrototypeOf(r, rd.prototype) : r.type === "rule" ? Object.setPrototypeOf(r, td.prototype) : r.type === "decl" ? Object.setPrototypeOf(r, yS.prototype) : r.type === "comment" ? Object.setPrototypeOf(r, wS.prototype) : r.type === "root" && Object.setPrototypeOf(r, SS.prototype), r[vS] = !0, r.nodes && r.nodes.forEach(e => {
            or.rebuild(e)
        })
    };
    RR = jr, Pi = class extends RR {
        constructor(e) {
            super({
                type: "document",
                ...e
            }), this.nodes || (this.nodes = [])
        }
        toResult(e = {}) {
            return new CS(new IS, this, e).stringify()
        }
    };
    Pi.registerLazyResult = r => {
        CS = r
    };
    Pi.registerProcessor = r => {
        IS = r
    };
    nd = Pi;
    Pi.default = Pi;
    Yf = class {
        constructor(e, t = {}) {
            if (this.type = "warning", this.text = e, t.node && t.node.source) {
                let n = t.node.rangeBy(t);
                this.line = n.start.line, this.column = n.start.column, this.endLine = n.end.line, this.endColumn = n.end.column
            }
            for (let n in t) this[n] = t[n]
        }
        toString() {
            return this.node ? this.node.error(this.text, {
                index: this.index,
                plugin: this.plugin,
                word: this.word
            }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
    }, TS = Yf;
    Yf.default = Yf;
    PR = TS, Kf = class {
        constructor(e, t, n) {
            this.processor = e, this.messages = [], this.root = t, this.opts = n, this.css = void 0, this.map = void 0
        }
        toString() {
            return this.css
        }
        warn(e, t = {}) {
            t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
            let n = new PR(e, t);
            return this.messages.push(n), n
        }
        warnings() {
            return this.messages.filter(e => e.type === "warning")
        }
        get content() {
            return this.css
        }
    }, id = Kf;
    Kf.default = Kf;
    Ff = 39, Qb = 34, ma = 92, eS = 47, ga = 10, Oi = 32, va = 12, ya = 9, wa = 13, AR = 91, MR = 93, NR = 40, DR = 41, kR = 123, LR = 125, FR = 59, UR = 42, $R = 58, jR = 64, ba = /[\t\n\f\r "#'()/;[\\\]{}]/g, Sa = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, BR = /.[\r\n"'(/\\]/, tS = /[\da-f]/i, VR = function(e, t = {}) {
        let n = e.css.valueOf(),
            i = t.ignoreErrors,
            o, s, u, a, l, c, f, d, p, h, g = n.length,
            m = 0,
            b = [],
            v = [];

        function y() {
            return m
        }

        function S(E) {
            throw e.error("Unclosed " + E, m)
        }

        function _() {
            return v.length === 0 && m >= g
        }

        function x(E) {
            if (v.length) return v.pop();
            if (m >= g) return;
            let I = E ? E.ignoreUnclosed : !1;
            switch (o = n.charCodeAt(m), o) {
                case ga:
                case Oi:
                case ya:
                case wa:
                case va:
                    {
                        s = m;do s += 1,
                        o = n.charCodeAt(s);
                        while (o === Oi || o === ga || o === ya || o === wa || o === va);h = ["space", n.slice(m, s)],
                        m = s - 1;
                        break
                    }
                case AR:
                case MR:
                case kR:
                case LR:
                case $R:
                case FR:
                case DR:
                    {
                        let R = String.fromCharCode(o);h = [R, R, m];
                        break
                    }
                case NR:
                    {
                        if (d = b.length ? b.pop()[1] : "", p = n.charCodeAt(m + 1), d === "url" && p !== Ff && p !== Qb && p !== Oi && p !== ga && p !== ya && p !== va && p !== wa) {
                            s = m;
                            do {
                                if (c = !1, s = n.indexOf(")", s + 1), s === -1)
                                    if (i || I) {
                                        s = m;
                                        break
                                    } else S("bracket");
                                for (f = s; n.charCodeAt(f - 1) === ma;) f -= 1, c = !c
                            } while (c);
                            h = ["brackets", n.slice(m, s + 1), m, s], m = s
                        } else s = n.indexOf(")", m + 1),
                        a = n.slice(m, s + 1),
                        s === -1 || BR.test(a) ? h = ["(", "(", m] : (h = ["brackets", a, m, s], m = s);
                        break
                    }
                case Ff:
                case Qb:
                    {
                        u = o === Ff ? "'" : '"',
                        s = m;do {
                            if (c = !1, s = n.indexOf(u, s + 1), s === -1)
                                if (i || I) {
                                    s = m + 1;
                                    break
                                } else S("string");
                            for (f = s; n.charCodeAt(f - 1) === ma;) f -= 1, c = !c
                        } while (c);h = ["string", n.slice(m, s + 1), m, s],
                        m = s;
                        break
                    }
                case jR:
                    {
                        ba.lastIndex = m + 1,
                        ba.test(n),
                        ba.lastIndex === 0 ? s = n.length - 1 : s = ba.lastIndex - 2,
                        h = ["at-word", n.slice(m, s + 1), m, s],
                        m = s;
                        break
                    }
                case ma:
                    {
                        for (s = m, l = !0; n.charCodeAt(s + 1) === ma;) s += 1,
                        l = !l;
                        if (o = n.charCodeAt(s + 1), l && o !== eS && o !== Oi && o !== ga && o !== ya && o !== wa && o !== va && (s += 1, tS.test(n.charAt(s)))) {
                            for (; tS.test(n.charAt(s + 1));) s += 1;
                            n.charCodeAt(s + 1) === Oi && (s += 1)
                        }
                        h = ["word", n.slice(m, s + 1), m, s],
                        m = s;
                        break
                    }
                default:
                    {
                        o === eS && n.charCodeAt(m + 1) === UR ? (s = n.indexOf("*/", m + 2) + 1, s === 0 && (i || I ? s = n.length : S("comment")), h = ["comment", n.slice(m, s + 1), m, s], m = s) : (Sa.lastIndex = m + 1, Sa.test(n), Sa.lastIndex === 0 ? s = n.length - 1 : s = Sa.lastIndex - 2, h = ["word", n.slice(m, s + 1), m, s], b.push(h), m = s);
                        break
                    }
            }
            return m++, h
        }

        function C(E) {
            v.push(E)
        }
        return {
            back: C,
            endOfFile: _,
            nextToken: x,
            position: y
        }
    }, OS = jr, Ca = class extends OS {
        constructor(e) {
            super(e), this.type = "atrule"
        }
        append(...e) {
            return this.proxyOf.nodes || (this.nodes = []), super.append(...e)
        }
        prepend(...e) {
            return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e)
        }
    }, od = Ca;
    Ca.default = Ca;
    OS.registerAtRule(Ca);
    RS = jr, wn = class extends RS {
        constructor(e) {
            super(e), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(e, t, n) {
            let i = super.normalize(e);
            if (t) {
                if (n === "prepend") this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
                else if (this.first !== t)
                    for (let o of i) o.raws.before = t.raws.before
            }
            return i
        }
        removeChild(e, t) {
            let n = this.index(e);
            return !t && n === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n].raws.before), super.removeChild(e)
        }
        toResult(e = {}) {
            return new PS(new AS, this, e).stringify()
        }
    };
    wn.registerLazyResult = r => {
        PS = r
    };
    wn.registerProcessor = r => {
        AS = r
    };
    ki = wn;
    wn.default = wn;
    RS.registerRoot(wn);
    Ai = {
        comma(r) {
            return Ai.split(r, [","], !0)
        },
        space(r) {
            let e = [" ", `
`, "	"];
            return Ai.split(r, e)
        },
        split(r, e, t) {
            let n = [],
                i = "",
                o = !1,
                s = 0,
                u = !1,
                a = "",
                l = !1;
            for (let c of r) l ? l = !1 : c === "\\" ? l = !0 : u ? c === a && (u = !1) : c === '"' || c === "'" ? (u = !0, a = c) : c === "(" ? s += 1 : c === ")" ? s > 0 && (s -= 1) : s === 0 && e.includes(c) && (o = !0), o ? (i !== "" && n.push(i.trim()), i = "", o = !1) : i += c;
            return (t || i !== "") && n.push(i.trim()), n
        }
    }, MS = Ai;
    Ai.default = Ai;
    NS = jr, WR = MS, Ia = class extends NS {
        constructor(e) {
            super(e), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
            return WR.comma(this.selector)
        }
        set selectors(e) {
            let t = this.selector ? this.selector.match(/,\s*/) : null,
                n = t ? t[0] : "," + this.raw("between", "beforeOpen");
            this.selector = e.join(n)
        }
    }, sd = Ia;
    Ia.default = Ia;
    NS.registerRule(Ia);
    GR = Pa, zR = VR, qR = Ma, HR = od, YR = ki, rS = sd, nS = {
        empty: !0,
        space: !0
    };
    XR = class {
        constructor(e) {
            this.input = e, this.root = new YR, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
                input: e,
                start: {
                    column: 1,
                    line: 1,
                    offset: 0
                }
            }
        }
        atrule(e) {
            let t = new HR;
            t.name = e[1].slice(1), t.name === "" && this.unnamedAtrule(t, e), this.init(t, e[2]);
            let n, i, o, s = !1,
                u = !1,
                a = [],
                l = [];
            for (; !this.tokenizer.endOfFile();) {
                if (e = this.tokenizer.nextToken(), n = e[0], n === "(" || n === "[" ? l.push(n === "(" ? ")" : "]") : n === "{" && l.length > 0 ? l.push("}") : n === l[l.length - 1] && l.pop(), l.length === 0)
                    if (n === ";") {
                        t.source.end = this.getPosition(e[2]), t.source.end.offset++, this.semicolon = !0;
                        break
                    } else if (n === "{") {
                    u = !0;
                    break
                } else if (n === "}") {
                    if (a.length > 0) {
                        for (o = a.length - 1, i = a[o]; i && i[0] === "space";) i = a[--o];
                        i && (t.source.end = this.getPosition(i[3] || i[2]), t.source.end.offset++)
                    }
                    this.end(e);
                    break
                } else a.push(e);
                else a.push(e);
                if (this.tokenizer.endOfFile()) {
                    s = !0;
                    break
                }
            }
            t.raws.between = this.spacesAndCommentsFromEnd(a), a.length ? (t.raws.afterName = this.spacesAndCommentsFromStart(a), this.raw(t, "params", a), s && (e = a[a.length - 1], t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++, this.spaces = t.raws.between, t.raws.between = "")) : (t.raws.afterName = "", t.params = ""), u && (t.nodes = [], this.current = t)
        }
        checkMissedSemicolon(e) {
            let t = this.colon(e);
            if (t === !1) return;
            let n = 0,
                i;
            for (let o = t - 1; o >= 0 && (i = e[o], !(i[0] !== "space" && (n += 1, n === 2))); o--);
            throw this.input.error("Missed semicolon", i[0] === "word" ? i[3] + 1 : i[2])
        }
        colon(e) {
            let t = 0,
                n, i, o;
            for (let [s, u] of e.entries()) {
                if (n = u, i = n[0], i === "(" && (t += 1), i === ")" && (t -= 1), t === 0 && i === ":")
                    if (!o) this.doubleColon(n);
                    else {
                        if (o[0] === "word" && o[1] === "progid") continue;
                        return s
                    }
                o = n
            }
            return !1
        }
        comment(e) {
            let t = new qR;
            this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++;
            let n = e[1].slice(2, -2);
            if (/^\s*$/.test(n)) t.text = "", t.raws.left = n, t.raws.right = "";
            else {
                let i = n.match(/^(\s*)([^]*\S)(\s*)$/);
                t.text = i[2], t.raws.left = i[1], t.raws.right = i[3]
            }
        }
        createTokenizer() {
            this.tokenizer = zR(this.input)
        }
        decl(e, t) {
            let n = new GR;
            this.init(n, e[0][2]);
            let i = e[e.length - 1];
            for (i[0] === ";" && (this.semicolon = !0, e.pop()), n.source.end = this.getPosition(i[3] || i[2] || KR(e)), n.source.end.offset++; e[0][0] !== "word";) e.length === 1 && this.unknownWord(e), n.raws.before += e.shift()[1];
            for (n.source.start = this.getPosition(e[0][2]), n.prop = ""; e.length;) {
                let l = e[0][0];
                if (l === ":" || l === "space" || l === "comment") break;
                n.prop += e.shift()[1]
            }
            n.raws.between = "";
            let o;
            for (; e.length;)
                if (o = e.shift(), o[0] === ":") {
                    n.raws.between += o[1];
                    break
                } else o[0] === "word" && /\w/.test(o[1]) && this.unknownWord([o]), n.raws.between += o[1];
            (n.prop[0] === "_" || n.prop[0] === "*") && (n.raws.before += n.prop[0], n.prop = n.prop.slice(1));
            let s = [],
                u;
            for (; e.length && (u = e[0][0], !(u !== "space" && u !== "comment"));) s.push(e.shift());
            this.precheckMissedSemicolon(e);
            for (let l = e.length - 1; l >= 0; l--) {
                if (o = e[l], o[1].toLowerCase() === "!important") {
                    n.important = !0;
                    let c = this.stringFrom(e, l);
                    c = this.spacesFromEnd(e) + c, c !== " !important" && (n.raws.important = c);
                    break
                } else if (o[1].toLowerCase() === "important") {
                    let c = e.slice(0),
                        f = "";
                    for (let d = l; d > 0; d--) {
                        let p = c[d][0];
                        if (f.trim().indexOf("!") === 0 && p !== "space") break;
                        f = c.pop()[1] + f
                    }
                    f.trim().indexOf("!") === 0 && (n.important = !0, n.raws.important = f, e = c)
                }
                if (o[0] !== "space" && o[0] !== "comment") break
            }
            e.some(l => l[0] !== "space" && l[0] !== "comment") && (n.raws.between += s.map(l => l[1]).join(""), s = []), this.raw(n, "value", s.concat(e), t), n.value.includes(":") && !t && this.checkMissedSemicolon(e)
        }
        doubleColon(e) {
            throw this.input.error("Double colon", {
                offset: e[2]
            }, {
                offset: e[2] + e[1].length
            })
        }
        emptyRule(e) {
            let t = new rS;
            this.init(t, e[2]), t.selector = "", t.raws.between = "", this.current = t
        }
        end(e) {
            this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e)
        }
        endFile() {
            this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position())
        }
        freeSemicolon(e) {
            if (this.spaces += e[1], this.current.nodes) {
                let t = this.current.nodes[this.current.nodes.length - 1];
                t && t.type === "rule" && !t.raws.ownSemicolon && (t.raws.ownSemicolon = this.spaces, this.spaces = "")
            }
        }
        getPosition(e) {
            let t = this.input.fromOffset(e);
            return {
                column: t.col,
                line: t.line,
                offset: e
            }
        }
        init(e, t) {
            this.current.push(e), e.source = {
                input: this.input,
                start: this.getPosition(t)
            }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = !1)
        }
        other(e) {
            let t = !1,
                n = null,
                i = !1,
                o = null,
                s = [],
                u = e[1].startsWith("--"),
                a = [],
                l = e;
            for (; l;) {
                if (n = l[0], a.push(l), n === "(" || n === "[") o || (o = l), s.push(n === "(" ? ")" : "]");
                else if (u && i && n === "{") o || (o = l), s.push("}");
                else if (s.length === 0)
                    if (n === ";")
                        if (i) {
                            this.decl(a, u);
                            return
                        } else break;
                else if (n === "{") {
                    this.rule(a);
                    return
                } else if (n === "}") {
                    this.tokenizer.back(a.pop()), t = !0;
                    break
                } else n === ":" && (i = !0);
                else n === s[s.length - 1] && (s.pop(), s.length === 0 && (o = null));
                l = this.tokenizer.nextToken()
            }
            if (this.tokenizer.endOfFile() && (t = !0), s.length > 0 && this.unclosedBracket(o), t && i) {
                if (!u)
                    for (; a.length && (l = a[a.length - 1][0], !(l !== "space" && l !== "comment"));) this.tokenizer.back(a.pop());
                this.decl(a, u)
            } else this.unknownWord(a)
        }
        parse() {
            let e;
            for (; !this.tokenizer.endOfFile();) switch (e = this.tokenizer.nextToken(), e[0]) {
                case "space":
                    this.spaces += e[1];
                    break;
                case ";":
                    this.freeSemicolon(e);
                    break;
                case "}":
                    this.end(e);
                    break;
                case "comment":
                    this.comment(e);
                    break;
                case "at-word":
                    this.atrule(e);
                    break;
                case "{":
                    this.emptyRule(e);
                    break;
                default:
                    this.other(e);
                    break
            }
            this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(e, t, n, i) {
            let o, s, u = n.length,
                a = "",
                l = !0,
                c, f;
            for (let d = 0; d < u; d += 1) o = n[d], s = o[0], s === "space" && d === u - 1 && !i ? l = !1 : s === "comment" ? (f = n[d - 1] ? n[d - 1][0] : "empty", c = n[d + 1] ? n[d + 1][0] : "empty", !nS[f] && !nS[c] ? a.slice(-1) === "," ? l = !1 : a += o[1] : l = !1) : a += o[1];
            if (!l) {
                let d = n.reduce((p, h) => p + h[1], "");
                e.raws[t] = {
                    raw: d,
                    value: a
                }
            }
            e[t] = a
        }
        rule(e) {
            e.pop();
            let t = new rS;
            this.init(t, e[0][2]), t.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(t, "selector", e), this.current = t
        }
        spacesAndCommentsFromEnd(e) {
            let t, n = "";
            for (; e.length && (t = e[e.length - 1][0], !(t !== "space" && t !== "comment"));) n = e.pop()[1] + n;
            return n
        }
        spacesAndCommentsFromStart(e) {
            let t, n = "";
            for (; e.length && (t = e[0][0], !(t !== "space" && t !== "comment"));) n += e.shift()[1];
            return n
        }
        spacesFromEnd(e) {
            let t, n = "";
            for (; e.length && (t = e[e.length - 1][0], t === "space");) n = e.pop()[1] + n;
            return n
        }
        stringFrom(e, t) {
            let n = "";
            for (let i = t; i < e.length; i++) n += e[i][1];
            return e.splice(t, e.length - t), n
        }
        unclosedBlock() {
            let e = this.current.source.start;
            throw this.input.error("Unclosed block", e.line, e.column)
        }
        unclosedBracket(e) {
            throw this.input.error("Unclosed bracket", {
                offset: e[2]
            }, {
                offset: e[2] + 1
            })
        }
        unexpectedClose(e) {
            throw this.input.error("Unexpected }", {
                offset: e[2]
            }, {
                offset: e[2] + 1
            })
        }
        unknownWord(e) {
            throw this.input.error("Unknown word", {
                offset: e[0][2]
            }, {
                offset: e[0][2] + e[0][1].length
            })
        }
        unnamedAtrule(e, t) {
            throw this.input.error("At-rule without name", {
                offset: t[2]
            }, {
                offset: t[2] + t[1].length
            })
        }
    }, JR = XR, ZR = jr, QR = JR, eP = Aa;
    ad = Ta;
    Ta.default = Ta;
    ZR.registerParse(Ta);
    ({
        isClean: qt,
        my: tP
    } = Di), rP = mS, nP = Oa, iP = jr, oP = nd, iS = id, sP = ad, aP = ki, lP = {
        atrule: "AtRule",
        comment: "Comment",
        decl: "Declaration",
        document: "Document",
        root: "Root",
        rule: "Rule"
    }, uP = {
        AtRule: !0,
        AtRuleExit: !0,
        Comment: !0,
        CommentExit: !0,
        Declaration: !0,
        DeclarationExit: !0,
        Document: !0,
        DocumentExit: !0,
        Once: !0,
        OnceExit: !0,
        postcssPlugin: !0,
        prepare: !0,
        Root: !0,
        RootExit: !0,
        Rule: !0,
        RuleExit: !0
    }, cP = {
        Once: !0,
        postcssPlugin: !0,
        prepare: !0
    }, bn = 0;
    Jf = {}, Sn = class kS {
        constructor(e, t, n) {
            this.stringified = !1, this.processed = !1;
            let i;
            if (typeof t == "object" && t !== null && (t.type === "root" || t.type === "document")) i = Xf(t);
            else if (t instanceof kS || t instanceof iS) i = Xf(t.root), t.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = !1), n.map.prev = t.map);
            else {
                let o = sP;
                n.syntax && (o = n.syntax.parse), n.parser && (o = n.parser), o.parse && (o = o.parse);
                try {
                    i = o(t, n)
                } catch (s) {
                    this.processed = !0, this.error = s
                }
                i && !i[tP] && iP.rebuild(i)
            }
            this.result = new iS(e, i, n), this.helpers = { ...Jf,
                postcss: Jf,
                result: this.result
            }, this.plugins = this.processor.plugins.map(o => typeof o == "object" && o.prepare ? { ...o,
                ...o.prepare(this.result)
            } : o)
        }
        async () {
            return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (e) {
            return this.async().catch(e)
        } finally(e) {
            return this.async().then(e, e)
        }
        getAsyncError() {
            throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(e, t) {
            let n = this.result.lastPlugin;
            try {
                t && t.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin ? (e.plugin = n.postcssPlugin, e.setMessage()) : n.postcssVersion
            } catch (i) {
                console && console.error && console.error(i)
            }
            return e
        }
        prepareVisitors() {
            this.listeners = {};
            let e = (t, n, i) => {
                this.listeners[n] || (this.listeners[n] = []), this.listeners[n].push([t, i])
            };
            for (let t of this.plugins)
                if (typeof t == "object")
                    for (let n in t) {
                        if (!uP[n] && /^[A-Z]/.test(n)) throw new Error(`Unknown event ${n} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                        if (!cP[n])
                            if (typeof t[n] == "object")
                                for (let i in t[n]) i === "*" ? e(t, n, t[n][i]) : e(t, n + "-" + i.toLowerCase(), t[n][i]);
                            else typeof t[n] == "function" && e(t, n, t[n])
                    }
            this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
            this.plugin = 0;
            for (let e = 0; e < this.plugins.length; e++) {
                let t = this.plugins[e],
                    n = this.runOnRoot(t);
                if (Ri(n)) try {
                    await n
                } catch (i) {
                    throw this.handleError(i)
                }
            }
            if (this.prepareVisitors(), this.hasListener) {
                let e = this.result.root;
                for (; !e[qt];) {
                    e[qt] = !0;
                    let t = [oS(e)];
                    for (; t.length > 0;) {
                        let n = this.visitTick(t);
                        if (Ri(n)) try {
                            await n
                        } catch (i) {
                            let o = t[t.length - 1].node;
                            throw this.handleError(i, o)
                        }
                    }
                }
                if (this.listeners.OnceExit)
                    for (let [t, n] of this.listeners.OnceExit) {
                        this.result.lastPlugin = t;
                        try {
                            if (e.type === "document") {
                                let i = e.nodes.map(o => n(o, this.helpers));
                                await Promise.all(i)
                            } else await n(e, this.helpers)
                        } catch (i) {
                            throw this.handleError(i)
                        }
                    }
            }
            return this.processed = !0, this.stringify()
        }
        runOnRoot(e) {
            this.result.lastPlugin = e;
            try {
                if (typeof e == "object" && e.Once) {
                    if (this.result.root.type === "document") {
                        let t = this.result.root.nodes.map(n => e.Once(n, this.helpers));
                        return Ri(t[0]) ? Promise.all(t) : t
                    }
                    return e.Once(this.result.root, this.helpers)
                } else if (typeof e == "function") return e(this.result.root, this.result)
            } catch (t) {
                throw this.handleError(t)
            }
        }
        stringify() {
            if (this.error) throw this.error;
            if (this.stringified) return this.result;
            this.stringified = !0, this.sync();
            let e = this.result.opts,
                t = nP;
            e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
            let i = new rP(t, this.result.root, this.result.opts).generate();
            return this.result.css = i[0], this.result.map = i[1], this.result
        }
        sync() {
            if (this.error) throw this.error;
            if (this.processed) return this.result;
            if (this.processed = !0, this.processing) throw this.getAsyncError();
            for (let e of this.plugins) {
                let t = this.runOnRoot(e);
                if (Ri(t)) throw this.getAsyncError()
            }
            if (this.prepareVisitors(), this.hasListener) {
                let e = this.result.root;
                for (; !e[qt];) e[qt] = !0, this.walkSync(e);
                if (this.listeners.OnceExit)
                    if (e.type === "document")
                        for (let t of e.nodes) this.visitSync(this.listeners.OnceExit, t);
                    else this.visitSync(this.listeners.OnceExit, e)
            }
            return this.result
        }
        then(e, t) {
            return this.async().then(e, t)
        }
        toString() {
            return this.css
        }
        visitSync(e, t) {
            for (let [n, i] of e) {
                this.result.lastPlugin = n;
                let o;
                try {
                    o = i(t, this.helpers)
                } catch (s) {
                    throw this.handleError(s, t.proxyOf)
                }
                if (t.type !== "root" && t.type !== "document" && !t.parent) return !0;
                if (Ri(o)) throw this.getAsyncError()
            }
        }
        visitTick(e) {
            let t = e[e.length - 1],
                {
                    node: n,
                    visitors: i
                } = t;
            if (n.type !== "root" && n.type !== "document" && !n.parent) {
                e.pop();
                return
            }
            if (i.length > 0 && t.visitorIndex < i.length) {
                let [s, u] = i[t.visitorIndex];
                t.visitorIndex += 1, t.visitorIndex === i.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = s;
                try {
                    return u(n.toProxy(), this.helpers)
                } catch (a) {
                    throw this.handleError(a, n)
                }
            }
            if (t.iterator !== 0) {
                let s = t.iterator,
                    u;
                for (; u = n.nodes[n.indexes[s]];)
                    if (n.indexes[s] += 1, !u[qt]) {
                        u[qt] = !0, e.push(oS(u));
                        return
                    }
                t.iterator = 0, delete n.indexes[s]
            }
            let o = t.events;
            for (; t.eventIndex < o.length;) {
                let s = o[t.eventIndex];
                if (t.eventIndex += 1, s === bn) {
                    n.nodes && n.nodes.length && (n[qt] = !0, t.iterator = n.getIterator());
                    return
                } else if (this.listeners[s]) {
                    t.visitors = this.listeners[s];
                    return
                }
            }
            e.pop()
        }
        walkSync(e) {
            e[qt] = !0;
            let t = DS(e);
            for (let n of t)
                if (n === bn) e.nodes && e.each(i => {
                    i[qt] || this.walkSync(i)
                });
                else {
                    let i = this.listeners[n];
                    if (i && this.visitSync(i, e.toProxy())) return
                }
        }
        warnings() {
            return this.sync().warnings()
        }
        get content() {
            return this.stringify().content
        }
        get css() {
            return this.stringify().css
        }
        get map() {
            return this.stringify().map
        }
        get messages() {
            return this.sync().messages
        }
        get opts() {
            return this.result.opts
        }
        get processor() {
            return this.result.processor
        }
        get root() {
            return this.sync().root
        }
        get[Symbol.toStringTag]() {
            return "LazyResult"
        }
    };
    Sn.registerPostcss = r => {
        Jf = r
    };
    LS = Sn;
    Sn.default = Sn;
    aP.registerLazyResult(Sn);
    oP.registerLazyResult(Sn);
    fP = mS, dP = Oa, pP = ad, hP = id, Zf = class {
        constructor(e, t, n) {
            t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = n, this._map = void 0;
            let i, o = dP;
            this.result = new hP(this._processor, i, this._opts), this.result.css = t;
            let s = this;
            Object.defineProperty(this.result, "root", {
                get() {
                    return s.root
                }
            });
            let u = new fP(o, i, this._opts, t);
            if (u.isMap()) {
                let [a, l] = u.generate();
                a && (this.result.css = a), l && (this.result.map = l)
            } else u.clearAnnotation(), this.result.css = u.css
        }
        async () {
            return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
        } catch (e) {
            return this.async().catch(e)
        } finally(e) {
            return this.async().then(e, e)
        }
        sync() {
            if (this.error) throw this.error;
            return this.result
        }
        then(e, t) {
            return this.async().then(e, t)
        }
        toString() {
            return this._css
        }
        warnings() {
            return []
        }
        get content() {
            return this.result.css
        }
        get css() {
            return this.result.css
        }
        get map() {
            return this.result.map
        }
        get messages() {
            return []
        }
        get opts() {
            return this.result.opts
        }
        get processor() {
            return this.result.processor
        }
        get root() {
            if (this._root) return this._root;
            let e, t = pP;
            try {
                e = t(this._css, this._opts)
            } catch (n) {
                this.error = n
            }
            if (this.error) throw this.error;
            return this._root = e, e
        }
        get[Symbol.toStringTag]() {
            return "NoWorkResult"
        }
    }, mP = Zf;
    Zf.default = Zf;
    gP = mP, vP = LS, yP = nd, wP = ki, Mi = class {
        constructor(e = []) {
            this.version = "8.4.38", this.plugins = this.normalize(e)
        }
        normalize(e) {
            let t = [];
            for (let n of e)
                if (n.postcss === !0 ? n = n() : n.postcss && (n = n.postcss), typeof n == "object" && Array.isArray(n.plugins)) t = t.concat(n.plugins);
                else if (typeof n == "object" && n.postcssPlugin) t.push(n);
            else if (typeof n == "function") t.push(n);
            else if (!(typeof n == "object" && (n.parse || n.stringify))) throw new Error(n + " is not a PostCSS plugin");
            return t
        }
        process(e, t = {}) {
            return !this.plugins.length && !t.parser && !t.stringifier && !t.syntax ? new gP(this, e, t) : new vP(this, e, t)
        }
        use(e) {
            return this.plugins = this.plugins.concat(this.normalize([e])), this
        }
    }, bP = Mi;
    Mi.default = Mi;
    wP.registerProcessor(Mi);
    yP.registerProcessor(Mi);
    SP = Pa, EP = cS, _P = Ma, xP = od, CP = Aa, IP = ki, TP = sd;
    OP = Ni;
    Ni.default = Ni;
    RP = ed, FS = Pa, PP = LS, AP = jr, ld = bP, MP = Oa, NP = OP, US = nd, DP = TS, $S = Ma, jS = od, kP = id, LP = Aa, FP = ad, UP = MS, BS = sd, VS = ki, $P = Ra;
    ne.plugin = function(e, t) {
        let n = !1;

        function i(...s) {
            console && console.warn && !n && (n = !0, console.warn(e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(e + `: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));
            let u = t(...s);
            return u.postcssPlugin = e, u.postcssVersion = new ld().version, u
        }
        let o;
        return Object.defineProperty(i, "postcss", {
            get() {
                return o || (o = i()), o
            }
        }), i.process = function(s, u, a) {
            return ne([i(a)]).process(s, u)
        }, i
    };
    ne.stringify = MP;
    ne.parse = FP;
    ne.fromJSON = NP;
    ne.list = UP;
    ne.comment = r => new $S(r);
    ne.atRule = r => new jS(r);
    ne.decl = r => new FS(r);
    ne.rule = r => new BS(r);
    ne.root = r => new VS(r);
    ne.document = r => new US(r);
    ne.CssSyntaxError = RP;
    ne.Declaration = FS;
    ne.Container = AP;
    ne.Processor = ld;
    ne.Document = US;
    ne.Comment = $S;
    ne.Warning = DP;
    ne.AtRule = jS;
    ne.Result = kP;
    ne.Input = LP;
    ne.Rule = BS;
    ne.Root = VS;
    ne.Node = $P;
    PP.registerPostcss(ne);
    jP = ne;
    ne.default = ne;
    ve = Z1(jP);
    ve.stringify;
    ve.fromJSON;
    ve.plugin;
    ve.parse;
    ve.list;
    ve.document;
    ve.comment;
    ve.atRule;
    ve.rule;
    ve.decl;
    ve.root;
    ve.CssSyntaxError;
    ve.Declaration;
    ve.Container;
    ve.Processor;
    ve.Document;
    ve.Comment;
    ve.Warning;
    ve.AtRule;
    ve.Result;
    ve.Input;
    ve.Rule;
    ve.Root;
    ve.Node
});
var Na, GS = w(() => {
    "use strict";
    Na = "medium"
});
var zS, BP, ud, cd, qS, HS, YS, Da, ka, La, Br = w(() => {
    "use strict";
    dt();
    Me();
    Fe();
    WS();
    GS();
    nn();
    zS = function(r, e, t) {
        switch (e) {
            case "light":
                {
                    if (r !== "input") return !0;
                    var n = t ? sS(t) : "";
                    return n ? !!(["password", "hidden", "email", "tel"].includes(n) || t.autocomplete.startsWith("cc-")) : !1
                }
            case "medium":
            case "conservative":
                return !0;
            default:
                return zS(r, Na, t)
        }
    }, BP = function(r, e, t) {
        var n, i, o;
        if (e === void 0 && (e = {
                defaultMaskLevel: Na
            }), t) {
            if (t.closest("." + ls)) return !0;
            var s = ((n = e.maskSelector) !== null && n !== void 0 ? n : []).some(function(a) {
                return t.closest(a)
            });
            if (s) return !0;
            if (t.closest("." + jv)) return !1;
            var u = ((i = e.unmaskSelector) !== null && i !== void 0 ? i : []).some(function(a) {
                return t.closest(a)
            });
            if (u) return !1
        }
        return zS(r, (o = e.defaultMaskLevel) !== null && o !== void 0 ? o : Na, t)
    }, ud = function(r, e) {
        return function(t, n) {
            return BP(r, e, n) ? t.replace(/[^\s]/g, "*") : t
        }
    }, cd = function(r) {
        var e = 0;
        if (r.length === 0) return e;
        for (var t = 0; t < r.length; t++) {
            var n = r.charCodeAt(t);
            e = (e << 5) - e + n, e |= 0
        }
        return e
    }, qS = function(r, e) {
        var t = cd(r.toString()),
            n = Math.abs(t),
            i = n * 31,
            o = i % 1e6;
        return o / 1e6 < e
    }, HS = function() {
        var r = B();
        return r ? .location ? r.location.href : ""
    }, YS = function(r, e) {
        return "".concat(e, "/").concat(r)
    }, Da = function(r, e) {
        return e || (r === nt.STAGING ? Wv : r === nt.EU ? Vv : Bv)
    }, ka = function() {
        return N(void 0, void 0, void 0, function() {
            var r, e, t, n, i, o, s, u;
            return M(this, function(a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 3, , 4]), r = B(), r ? [4, r.navigator.storage.estimate()] : [3, 2];
                    case 1:
                        return e = a.sent(), t = e.usage, n = e.quota, i = e.usageDetails, o = t ? Math.round(t / us) : 0, s = t && n ? Math.round((t / n + Number.EPSILON) * 1e3) / 1e3 : 0, [2, {
                            totalStorageSize: o,
                            percentOfQuota: s,
                            usageDetails: JSON.stringify(i)
                        }];
                    case 2:
                        return [3, 4];
                    case 3:
                        return u = a.sent(), [3, 4];
                    case 4:
                        return [2, {
                            totalStorageSize: 0,
                            percentOfQuota: 0,
                            usageDetails: ""
                        }]
                }
            })
        })
    }, La = function(r) {
        var e = V({}, r),
            t = e.apiKey;
        return e.apiKey = "****".concat(t.substring(t.length - 4)), e
    }
});
var VP, WP, KS, XS = w(() => {
    "use strict";
    dt();
    Wb();
    Br();
    Ju();
    VP = function(r, e) {
        var t = document.createDocumentFragment(),
            n = function(i) {
                if (i === void 0 && (i = []), typeof i == "string" && (i = [i]), i = i.filter(function(o) {
                        try {
                            t.querySelector(o)
                        } catch {
                            return e.warn('[session-replay-browser] omitting selector "'.concat(o, '" because it is invalid')), !1
                        }
                        return !0
                    }), i.length !== 0) return i
            };
        return r.blockSelector = n(r.blockSelector), r.maskSelector = n(r.maskSelector), r.unmaskSelector = n(r.unmaskSelector), r
    }, WP = function() {
        function r(e, t) {
            this.localConfig = t, this.remoteConfigFetch = e
        }
        return r.prototype.generateJoinedConfig = function(e) {
            var t, n, i;
            return N(this, void 0, void 0, function() {
                var o, s, u, a, l, c, f, d, p, h, g, m, b, v, y, S, _, x, C, E;
                return M(this, function(I) {
                    switch (I.label) {
                        case 0:
                            o = V({}, this.localConfig), o.optOut = this.localConfig.optOut, o.captureEnabled = !0, I.label = 1;
                        case 1:
                            return I.trys.push([1, 5, , 6]), [4, this.remoteConfigFetch.getRemoteConfig("sessionReplay", "sr_sampling_config", e)];
                        case 2:
                            return u = I.sent(), [4, this.remoteConfigFetch.getRemoteConfig("sessionReplay", "sr_privacy_config", e)];
                        case 3:
                            return a = I.sent(), l = o, [4, this.remoteConfigFetch.getRemoteConfig("sessionReplay", "sr_interaction_config", e)];
                        case 4:
                            return l.interactionConfig = I.sent(), (u || a) && (s = {}, u && (s.sr_sampling_config = u), a && (s.sr_privacy_config = a)), [3, 6];
                        case 5:
                            return c = I.sent(), f = c, this.localConfig.loggerProvider.warn(f.message), o.captureEnabled = !1, [3, 6];
                        case 6:
                            if (!s) return [2, o];
                            if (d = s.sr_sampling_config, p = s.sr_privacy_config, d && Object.keys(d).length > 0 ? (Object.prototype.hasOwnProperty.call(d, "capture_enabled") ? o.captureEnabled = d.capture_enabled : o.captureEnabled = !1, Object.prototype.hasOwnProperty.call(d, "sample_rate") && (o.sampleRate = d.sample_rate)) : (o.captureEnabled = !0, this.localConfig.loggerProvider.debug("Remote config successfully fetched, but no values set for project, Session Replay capture enabled.")), p) {
                                h = (t = o.privacyConfig) !== null && t !== void 0 ? t : {}, g = {
                                    defaultMaskLevel: (i = (n = p.defaultMaskLevel) !== null && n !== void 0 ? n : h.defaultMaskLevel) !== null && i !== void 0 ? i : "medium",
                                    blockSelector: [],
                                    maskSelector: [],
                                    unmaskSelector: []
                                }, m = function(R) {
                                    var k, D, P, X, Z, L, F, Q, J, A = {};
                                    typeof R.blockSelector == "string" && (R.blockSelector = [R.blockSelector]);
                                    try {
                                        for (var ye = et((F = R.blockSelector) !== null && F !== void 0 ? F : []), je = ye.next(); !je.done; je = ye.next()) {
                                            var Oe = je.value;
                                            A[Oe] = "block"
                                        }
                                    } catch (Re) {
                                        k = {
                                            error: Re
                                        }
                                    } finally {
                                        try {
                                            je && !je.done && (D = ye.return) && D.call(ye)
                                        } finally {
                                            if (k) throw k.error
                                        }
                                    }
                                    try {
                                        for (var we = et((Q = R.maskSelector) !== null && Q !== void 0 ? Q : []), oe = we.next(); !oe.done; oe = we.next()) {
                                            var Oe = oe.value;
                                            A[Oe] = "mask"
                                        }
                                    } catch (Re) {
                                        P = {
                                            error: Re
                                        }
                                    } finally {
                                        try {
                                            oe && !oe.done && (X = we.return) && X.call(we)
                                        } finally {
                                            if (P) throw P.error
                                        }
                                    }
                                    try {
                                        for (var ht = et((J = R.unmaskSelector) !== null && J !== void 0 ? J : []), De = ht.next(); !De.done; De = ht.next()) {
                                            var Oe = De.value;
                                            A[Oe] = "unmask"
                                        }
                                    } catch (Re) {
                                        Z = {
                                            error: Re
                                        }
                                    } finally {
                                        try {
                                            De && !De.done && (L = ht.return) && L.call(ht)
                                        } finally {
                                            if (Z) throw Z.error
                                        }
                                    }
                                    return A
                                }, b = V(V({}, m(h)), m(p));
                                try {
                                    for (v = et(Object.entries(b)), y = v.next(); !y.done; y = v.next()) S = ft(y.value, 2), _ = S[0], x = S[1], x === "mask" ? g.maskSelector.push(_) : x === "block" ? g.blockSelector.push(_) : x === "unmask" && g.unmaskSelector.push(_)
                                } catch (R) {
                                    C = {
                                        error: R
                                    }
                                } finally {
                                    try {
                                        y && !y.done && (E = v.return) && E.call(v)
                                    } finally {
                                        if (C) throw C.error
                                    }
                                }
                                o.privacyConfig = VP(g, this.localConfig.loggerProvider)
                            }
                            return this.localConfig.loggerProvider.debug(JSON.stringify({
                                name: "session replay joined config",
                                config: La(o)
                            }, null, 2)), [2, o]
                    }
                })
            })
        }, r
    }(), KS = function(r, e) {
        return N(void 0, void 0, void 0, function() {
            var t, n;
            return M(this, function(i) {
                switch (i.label) {
                    case 0:
                        return t = new Kv(r, e), [4, Vb({
                            localConfig: t,
                            configKeys: ["sessionReplay"]
                        })];
                    case 1:
                        return n = i.sent(), [2, new WP(n, t)]
                }
            })
        })
    }
});
var JS, ZS, QS, Vr, e0, t0, fd = w(() => {
    "use strict";
    JS = "Unexpected error occurred", ZS = "Network error occurred, event batch rejected", QS = "Session replay event batch rejected due to exceeded retry count", Vr = "Failed to store session replay events in IndexedDB", e0 = "Session replay event batch not sent due to missing device ID", t0 = "Session replay event batch not sent due to missing api key"
});
var Fa, dd = w(() => {
    "use strict";
    Fa = "1.19.1"
});
var r0, n0 = w(() => {
    "use strict";
    dt();
    Ae();
    Fe();
    Br();
    fd();
    dd();
    nn();
    r0 = function() {
        function r(e) {
            var t = e.trackServerUrl,
                n = e.loggerProvider,
                i = e.payloadBatcher;
            this.storageKey = "", this.retryTimeout = 1e3, this.scheduled = null, this.queue = [], this.loggerProvider = n, this.payloadBatcher = i || function(o) {
                return o
            }, this.trackServerUrl = t
        }
        return r.prototype.sendEventsList = function(e) {
            this.addToQueue(V(V({}, e), {
                attempts: 0,
                timeout: 0
            }))
        }, r.prototype.addToQueue = function() {
            for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            var i = t.filter(function(o) {
                return o.attempts < (o.flushMaxRetries || 0) ? (o.attempts += 1, !0) : (e.completeRequest({
                    context: o,
                    err: QS
                }), !1)
            });
            i.forEach(function(o) {
                if (e.queue = e.queue.concat(o), o.timeout === 0) {
                    e.schedule(0);
                    return
                }
                setTimeout(function() {
                    o.timeout = 0, e.schedule(0)
                }, o.timeout)
            })
        }, r.prototype.schedule = function(e) {
            var t = this;
            this.scheduled || (this.scheduled = setTimeout(function() {
                t.flush(!0).then(function() {
                    t.queue.length > 0 && t.schedule(e)
                })
            }, e))
        }, r.prototype.flush = function(e) {
            return e === void 0 && (e = !1), N(this, void 0, void 0, function() {
                var t, n, i = this;
                return M(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return t = [], n = [], this.queue.forEach(function(s) {
                                return s.timeout === 0 ? t.push(s) : n.push(s)
                            }), this.queue = n, this.scheduled && (clearTimeout(this.scheduled), this.scheduled = null), [4, Promise.all(t.map(function(s) {
                                return i.send(s, e)
                            }))];
                        case 1:
                            return o.sent(), [2]
                    }
                })
            })
        }, r.prototype.send = function(e, t) {
            var n, i;
            return t === void 0 && (t = !0), N(this, void 0, void 0, function() {
                var o, s, u, a, l, c, f, d, p, h, g, m, b;
                return M(this, function(v) {
                    switch (v.label) {
                        case 0:
                            if (o = e.apiKey, !o) return [2, this.completeRequest({
                                context: e,
                                err: t0
                            })];
                            if (s = e.deviceId, !s) return [2, this.completeRequest({
                                context: e,
                                err: e0
                            })];
                            if (u = HS(), a = Fa, l = e.sampleRate, c = new URLSearchParams({
                                    device_id: s,
                                    session_id: "".concat(e.sessionId),
                                    type: "".concat(e.type)
                                }), f = "".concat(((n = e.version) === null || n === void 0 ? void 0 : n.type) || "standalone", "/").concat(((i = e.version) === null || i === void 0 ? void 0 : i.version) || a), d = this.payloadBatcher({
                                    version: 1,
                                    events: e.events
                                }), d.events.length === 0) return this.completeRequest({
                                context: e
                            }), [2];
                            v.label = 1;
                        case 1:
                            return v.trys.push([1, 3, , 4]), p = {
                                headers: {
                                    "Content-Type": "application/json",
                                    Accept: "*/*",
                                    Authorization: "Bearer ".concat(o),
                                    "X-Client-Version": a,
                                    "X-Client-Library": f,
                                    "X-Client-Url": u,
                                    "X-Client-Sample-Rate": "".concat(l)
                                },
                                body: JSON.stringify(d),
                                method: "POST"
                            }, h = "".concat(Da(e.serverZone, this.trackServerUrl), "?").concat(c.toString()), [4, fetch(h, p)];
                        case 2:
                            if (g = v.sent(), g === null) return this.completeRequest({
                                context: e,
                                err: JS
                            }), [2];
                            if (t) this.handleReponse(g.status, e);
                            else {
                                m = "";
                                try {
                                    m = JSON.stringify(g.body, null, 2)
                                } catch {}
                                this.completeRequest({
                                    context: e,
                                    success: "".concat(g.status, ": ").concat(m)
                                })
                            }
                            return [3, 4];
                        case 3:
                            return b = v.sent(), this.completeRequest({
                                context: e,
                                err: b
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }, r.prototype.handleReponse = function(e, t) {
            var n = new at().buildStatus(e);
            switch (n) {
                case H.Success:
                    this.handleSuccessResponse(t);
                    break;
                case H.Failed:
                    this.handleOtherResponse(t);
                    break;
                default:
                    this.completeRequest({
                        context: t,
                        err: ZS
                    })
            }
        }, r.prototype.handleSuccessResponse = function(e) {
            var t = Math.round(new Blob(e.events).size / us);
            this.completeRequest({
                context: e,
                success: "Session replay event batch tracked successfully for session id ".concat(e.sessionId, ", size of events: ").concat(t, " KB")
            })
        }, r.prototype.handleOtherResponse = function(e) {
            this.addToQueue(V(V({}, e), {
                timeout: e.attempts * this.retryTimeout
            }))
        }, r.prototype.completeRequest = function(e) {
            var t = e.context,
                n = e.err,
                i = e.success;
            t.onComplete(), n ? this.loggerProvider.warn(n) : i && this.loggerProvider.log(i)
        }, r
    }()
});

function GP() {
    return i0 || (i0 = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}

function zP() {
    return o0 || (o0 = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}

function qP(r) {
    let e = new Promise((t, n) => {
        let i = () => {
                r.removeEventListener("success", o), r.removeEventListener("error", s)
            },
            o = () => {
                t(Wr(r.result)), i()
            },
            s = () => {
                n(r.error), i()
            };
        r.addEventListener("success", o), r.addEventListener("error", s)
    });
    return Ua.set(e, r), e
}

function HP(r) {
    if (gd.has(r)) return;
    let e = new Promise((t, n) => {
        let i = () => {
                r.removeEventListener("complete", o), r.removeEventListener("error", s), r.removeEventListener("abort", s)
            },
            o = () => {
                t(), i()
            },
            s = () => {
                n(r.error || new DOMException("AbortError", "AbortError")), i()
            };
        r.addEventListener("complete", o), r.addEventListener("error", s), r.addEventListener("abort", s)
    });
    gd.set(r, e)
}

function u0(r) {
    vd = r(vd)
}

function YP(r) {
    return zP().includes(r) ? function(...e) {
        return r.apply(yd(this), e), Wr(this.request)
    } : function(...e) {
        return Wr(r.apply(yd(this), e))
    }
}

function KP(r) {
    return typeof r == "function" ? YP(r) : (r instanceof IDBTransaction && HP(r), md(r, GP()) ? new Proxy(r, vd) : r)
}

function Wr(r) {
    if (r instanceof IDBRequest) return qP(r);
    if (pd.has(r)) return pd.get(r);
    let e = KP(r);
    return e !== r && (pd.set(r, e), Ua.set(e, r)), e
}

function c0(r, e, {
    blocked: t,
    upgrade: n,
    blocking: i,
    terminated: o
} = {}) {
    let s = indexedDB.open(r, e),
        u = Wr(s);
    return n && s.addEventListener("upgradeneeded", a => {
        n(Wr(s.result), a.oldVersion, a.newVersion, Wr(s.transaction), a)
    }), t && s.addEventListener("blocked", a => t(a.oldVersion, a.newVersion, a)), u.then(a => {
        o && a.addEventListener("close", () => o()), i && a.addEventListener("versionchange", l => i(l.oldVersion, l.newVersion, l))
    }).catch(() => {}), u
}

function s0(r, e) {
    if (!(r instanceof IDBDatabase && !(e in r) && typeof e == "string")) return;
    if (hd.get(e)) return hd.get(e);
    let t = e.replace(/FromIndex$/, ""),
        n = e !== t,
        i = JP.includes(t);
    if (!(t in (n ? IDBIndex : IDBObjectStore).prototype) || !(i || XP.includes(t))) return;
    let o = async function(s, ...u) {
        let a = this.transaction(s, i ? "readwrite" : "readonly"),
            l = a.store;
        return n && (l = l.index(u.shift())), (await Promise.all([l[t](...u), i && a.done]))[0]
    };
    return hd.set(e, o), o
}
async function* eA(...r) {
    let e = this;
    if (e instanceof IDBCursor || (e = await e.openCursor(...r)), !e) return;
    e = e;
    let t = new Proxy(e, QP);
    for (f0.set(t, e), Ua.set(t, yd(e)); e;) yield t, e = await (wd.get(t) || e.continue()), wd.delete(t)
}

function l0(r, e) {
    return e === Symbol.asyncIterator && md(r, [IDBIndex, IDBObjectStore, IDBCursor]) || e === "iterate" && md(r, [IDBIndex, IDBObjectStore])
}
var md, i0, o0, gd, pd, Ua, vd, yd, XP, JP, hd, ZP, a0, wd, f0, QP, d0 = w(() => {
    "use strict";
    md = (r, e) => e.some(t => r instanceof t);
    gd = new WeakMap, pd = new WeakMap, Ua = new WeakMap;
    vd = {
        get(r, e, t) {
            if (r instanceof IDBTransaction) {
                if (e === "done") return gd.get(r);
                if (e === "store") return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0])
            }
            return Wr(r[e])
        },
        set(r, e, t) {
            return r[e] = t, !0
        },
        has(r, e) {
            return r instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in r
        }
    };
    yd = r => Ua.get(r);
    XP = ["get", "getKey", "getAll", "getAllKeys", "count"], JP = ["put", "add", "delete", "clear"], hd = new Map;
    u0(r => ({ ...r,
        get: (e, t, n) => s0(e, t) || r.get(e, t, n),
        has: (e, t) => !!s0(e, t) || r.has(e, t)
    }));
    ZP = ["continue", "continuePrimaryKey", "advance"], a0 = {}, wd = new WeakMap, f0 = new WeakMap, QP = {
        get(r, e) {
            if (!ZP.includes(e)) return r[e];
            let t = a0[e];
            return t || (t = a0[e] = function(...n) {
                wd.set(this, f0.get(this)[e](...n))
            }), t
        }
    };
    u0(r => ({ ...r,
        get(e, t, n) {
            return l0(e, t) ? eA : r.get(e, t, n)
        },
        has(e, t) {
            return l0(e, t) || r.has(e, t)
        }
    }))
});
var $a, bd = w(() => {
    "use strict";
    nn();
    $a = function() {
        function r(e) {
            var t = this,
                n, i, o;
            this.minInterval = Hv, this.maxInterval = Yv, this.maxPersistedEventsSize = Gv, this.interval = this.minInterval, this._timeAtLastSplit = Date.now(), this.shouldSplitEventsList = function(s, u) {
                var a = new Blob([u]).size,
                    l = new Blob(s).size;
                return l + a >= t.maxPersistedEventsSize ? !0 : Date.now() - t.timeAtLastSplit > t.interval && s.length ? (t.interval = Math.min(t.maxInterval, t.interval + t.minInterval), t._timeAtLastSplit = Date.now(), !0) : !1
            }, this.loggerProvider = e.loggerProvider, this.minInterval = (n = e.minInterval) !== null && n !== void 0 ? n : this.minInterval, this.maxInterval = (i = e.maxInterval) !== null && i !== void 0 ? i : this.maxInterval, this.maxPersistedEventsSize = (o = e.maxPersistedEventsSize) !== null && o !== void 0 ? o : this.maxPersistedEventsSize
        }
        return Object.defineProperty(r.prototype, "timeAtLastSplit", {
            get: function() {
                return this._timeAtLastSplit
            },
            enumerable: !1,
            configurable: !0
        }), r
    }()
});
var Li, p0 = w(() => {
    "use strict";
    (function(r) {
        r.RECORDING = "recording", r.SENT = "sent"
    })(Li || (Li = {}))
});
var Fi, Ui, tA, h0, rA, nA, m0, g0 = w(() => {
    "use strict";
    dt();
    Me();
    Ae();
    d0();
    fd();
    bd();
    p0();
    Fi = "sessionCurrentSequence", Ui = "sequencesToSend", tA = function() {
        var r = B();
        return new Promise(function(e, t) {
            if (!r) return t(new Error("Global scope not found"));
            if (!r.indexedDB) return t(new Error("Session Replay: cannot find indexedDB"));
            try {
                var n = r.indexedDB.open("keyval-store");
                n.onupgradeneeded = function() {
                    n.result.version === 1 && (n.result.close(), n.transaction && n.transaction.abort(), r.indexedDB.deleteDatabase("keyval-store"), e())
                }, n.onsuccess = function() {
                    e(n.result)
                }
            } catch (i) {
                t(i)
            }
        })
    }, h0 = function(r) {
        return N(void 0, void 0, void 0, function() {
            var e, t;
            return M(this, function(n) {
                switch (n.label) {
                    case 0:
                        return r.length > 0 ? (e = 10, t = r.splice(0, e), [4, Promise.all(t)]) : [3, 2];
                    case 1:
                        return n.sent(), [3, 0];
                    case 2:
                        return [2]
                }
            })
        })
    }, rA = function(r) {
        var e, t;
        return r.objectStoreNames.contains(Fi) || (t = r.createObjectStore(Fi, {
            keyPath: "sessionId"
        })), r.objectStoreNames.contains(Ui) || (e = r.createObjectStore(Ui, {
            keyPath: "sequenceId",
            autoIncrement: !0
        }), e.createIndex("sessionId", "sessionId")), {
            sequencesStore: e,
            currentSequenceStore: t
        }
    }, nA = function(r) {
        return N(void 0, void 0, void 0, function() {
            return M(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, c0(r, 1, {
                            upgrade: rA
                        })];
                    case 1:
                        return [2, e.sent()]
                }
            })
        })
    }, m0 = function(r) {
        rn(e, r);

        function e(t) {
            var n = r.call(this, t) || this;
            return n.getSequencesToSend = function() {
                return N(n, void 0, void 0, function() {
                    var i, o, s, u, a, l;
                    return M(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return c.trys.push([0, 5, , 6]), i = [], [4, this.db.transaction("sequencesToSend").store.openCursor()];
                            case 1:
                                o = c.sent(), c.label = 2;
                            case 2:
                                return o ? (s = o.value, u = s.sessionId, a = s.events, i.push({
                                    events: a,
                                    sequenceId: o.key,
                                    sessionId: u
                                }), [4, o.continue()]) : [3, 4];
                            case 3:
                                return o = c.sent(), [3, 2];
                            case 4:
                                return [2, i];
                            case 5:
                                return l = c.sent(), this.loggerProvider.warn("".concat(Vr, ": ").concat(l)), [3, 6];
                            case 6:
                                return [2, void 0]
                        }
                    })
                })
            }, n.storeCurrentSequence = function(i) {
                return N(n, void 0, void 0, function() {
                    var o, s, u;
                    return M(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 4, , 5]), [4, this.db.get(Fi, i)];
                            case 1:
                                return o = a.sent(), o ? [4, this.db.put(Ui, {
                                    sessionId: i,
                                    events: o.events
                                })] : [2, void 0];
                            case 2:
                                return s = a.sent(), [4, this.db.put(Fi, {
                                    sessionId: i,
                                    events: []
                                })];
                            case 3:
                                return a.sent(), [2, V(V({}, o), {
                                    sessionId: i,
                                    sequenceId: s
                                })];
                            case 4:
                                return u = a.sent(), this.loggerProvider.warn("".concat(Vr, ": ").concat(u)), [3, 5];
                            case 5:
                                return [2, void 0]
                        }
                    })
                })
            }, n.addEventToCurrentSequence = function(i, o) {
                return N(n, void 0, void 0, function() {
                    var s, u, a, l, c, f;
                    return M(this, function(d) {
                        switch (d.label) {
                            case 0:
                                return d.trys.push([0, 10, , 11]), s = this.db.transaction(Fi, "readwrite"), [4, s.store.get(i)];
                            case 1:
                                return u = d.sent(), u ? [3, 3] : [4, s.store.put({
                                    sessionId: i,
                                    events: [o]
                                })];
                            case 2:
                                return d.sent(), [2];
                            case 3:
                                return a = void 0, this.shouldSplitEventsList(u.events, o) ? (a = u.events, [4, s.store.put({
                                    sessionId: i,
                                    events: [o]
                                })]) : [3, 5];
                            case 4:
                                return d.sent(), [3, 7];
                            case 5:
                                return l = u.events.concat(o), [4, s.store.put({
                                    sessionId: i,
                                    events: l
                                })];
                            case 6:
                                d.sent(), d.label = 7;
                            case 7:
                                return [4, s.done];
                            case 8:
                                return d.sent(), a ? [4, this.storeSendingEvents(i, a)] : [2, void 0];
                            case 9:
                                return c = d.sent(), c ? [2, {
                                    events: a,
                                    sessionId: i,
                                    sequenceId: c
                                }] : [2, void 0];
                            case 10:
                                return f = d.sent(), this.loggerProvider.warn("".concat(Vr, ": ").concat(f)), [3, 11];
                            case 11:
                                return [2, void 0]
                        }
                    })
                })
            }, n.storeSendingEvents = function(i, o) {
                return N(n, void 0, void 0, function() {
                    var s, u;
                    return M(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, this.db.put(Ui, {
                                    sessionId: i,
                                    events: o
                                })];
                            case 1:
                                return s = a.sent(), [2, s];
                            case 2:
                                return u = a.sent(), this.loggerProvider.warn("".concat(Vr, ": ").concat(u)), [3, 3];
                            case 3:
                                return [2, void 0]
                        }
                    })
                })
            }, n.cleanUpSessionEventsStore = function(i, o) {
                return N(n, void 0, void 0, function() {
                    var s;
                    return M(this, function(u) {
                        switch (u.label) {
                            case 0:
                                if (!o) return [2];
                                u.label = 1;
                            case 1:
                                return u.trys.push([1, 3, , 4]), [4, this.db.delete(Ui, o)];
                            case 2:
                                return u.sent(), [3, 4];
                            case 3:
                                return s = u.sent(), this.loggerProvider.warn("".concat(Vr, ": ").concat(s)), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, n.transitionFromKeyValStore = function(i) {
                return N(n, void 0, void 0, function() {
                    var o, s, u, a, l, c, f, d, p = this;
                    return M(this, function(h) {
                        switch (h.label) {
                            case 0:
                                return h.trys.push([0, 6, , 7]), [4, tA()];
                            case 1:
                                if (o = h.sent(), !o) return [2];
                                s = function(g, m) {
                                    return N(p, void 0, void 0, function() {
                                        var b, v, y = this;
                                        return M(this, function(S) {
                                            switch (S.label) {
                                                case 0:
                                                    return b = m.sessionSequences, v = [], Object.keys(b).forEach(function(_) {
                                                        var x = parseInt(_, 10),
                                                            C = b[x];
                                                        if (x === m.currentSequenceId) {
                                                            var E = C.events.map(function(I) {
                                                                return N(y, void 0, void 0, function() {
                                                                    return M(this, function(R) {
                                                                        return [2, this.addEventToCurrentSequence(g, I)]
                                                                    })
                                                                })
                                                            });
                                                            v.concat(E)
                                                        } else C.status !== Li.SENT && v.push(y.storeSendingEvents(g, C.events))
                                                    }), [4, h0(v)];
                                                case 1:
                                                    return S.sent(), [2]
                                            }
                                        })
                                    })
                                }, u = "".concat(On, "_").concat(this.apiKey.substring(0, 10)), h.label = 2;
                            case 2:
                                return h.trys.push([2, 4, , 5]), a = o.transaction("keyval").objectStore("keyval").getAll(u), l = new Promise(function(g) {
                                    a.onsuccess = function(m) {
                                        return N(p, void 0, void 0, function() {
                                            var b, v, y, S = this;
                                            return M(this, function(_) {
                                                switch (_.label) {
                                                    case 0:
                                                        return b = m && m.target.result, v = b && b[0], v ? (y = [], Object.keys(v).forEach(function(x) {
                                                            var C = parseInt(x, 10),
                                                                E = v[C];
                                                            if (i === C) y.push(s(C, E));
                                                            else {
                                                                var I = E.sessionSequences;
                                                                Object.keys(I).forEach(function(R) {
                                                                    var k = parseInt(R, 10);
                                                                    I[k].status !== Li.SENT && y.push(S.storeSendingEvents(C, I[k].events))
                                                                })
                                                            }
                                                        }), [4, h0(y)]) : [3, 2];
                                                    case 1:
                                                        _.sent(), _.label = 2;
                                                    case 2:
                                                        return g(), [2]
                                                }
                                            })
                                        })
                                    }
                                }), [4, l];
                            case 3:
                                return h.sent(), c = B(), c && c.indexedDB.deleteDatabase("keyval-store"), [3, 5];
                            case 4:
                                return f = h.sent(), this.loggerProvider.warn("Failed to transition session replay events from keyval to new store: ".concat(f)), [3, 5];
                            case 5:
                                return [3, 7];
                            case 6:
                                return d = h.sent(), this.loggerProvider.warn("Failed to access keyval store: ".concat(d, ". For more information, visit: https://www.docs.developers.amplitude.com/session-replay/sdks/standalone/#indexeddb-best-practices")), [3, 7];
                            case 7:
                                return [2]
                        }
                    })
                })
            }, n.apiKey = t.apiKey, n.db = t.db, n
        }
        return e.new = function(t, n, i) {
            return N(this, void 0, void 0, function() {
                var o, s, u, a, l;
                return M(this, function(c) {
                    switch (c.label) {
                        case 0:
                            return c.trys.push([0, 3, , 4]), o = t === "replay" ? "" : "_".concat(t), s = "".concat(n.apiKey.substring(0, 10), "_amp_session_replay_events").concat(o), [4, nA(s)];
                        case 1:
                            return u = c.sent(), a = new e(V(V({}, n), {
                                db: u
                            })), [4, a.transitionFromKeyValStore(i)];
                        case 2:
                            return c.sent(), [2, a];
                        case 3:
                            return l = c.sent(), n.loggerProvider.warn("".concat(Vr, ": ").concat(l)), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.prototype.getCurrentSequenceEvents = function(t) {
            return N(this, void 0, void 0, function() {
                var s, n, i, o, s, u, a, l;
                return M(this, function(c) {
                    switch (c.label) {
                        case 0:
                            return t ? [4, this.db.get("sessionCurrentSequence", t)] : [3, 2];
                        case 1:
                            return s = c.sent(), s ? [2, [s]] : [2, void 0];
                        case 2:
                            n = [], c.label = 3;
                        case 3:
                            return c.trys.push([3, 8, 9, 10]), [4, this.db.getAll("sessionCurrentSequence")];
                        case 4:
                            i = et.apply(void 0, [c.sent()]), o = i.next(), c.label = 5;
                        case 5:
                            if (o.done) return [3, 7];
                            s = o.value, n.push(s), c.label = 6;
                        case 6:
                            return o = i.next(), [3, 5];
                        case 7:
                            return [3, 10];
                        case 8:
                            return u = c.sent(), a = {
                                error: u
                            }, [3, 10];
                        case 9:
                            try {
                                o && !o.done && (l = i.return) && l.call(i)
                            } finally {
                                if (a) throw a.error
                            }
                            return [7];
                        case 10:
                            return [2, n]
                    }
                })
            })
        }, e
    }($a)
});
var v0, y0 = w(() => {
    "use strict";
    dt();
    bd();
    v0 = function(r) {
        rn(e, r);

        function e() {
            var t = r !== null && r.apply(this, arguments) || this;
            return t.finalizedSequences = {}, t.sequences = {}, t.sequenceId = 0, t
        }
        return e.prototype.resetCurrentSequence = function(t) {
            this.sequences[t] = []
        }, e.prototype.addSequence = function(t) {
            var n = this.sequenceId++,
                i = tr([], ft(this.sequences[t]), !1);
            return this.finalizedSequences[n] = {
                sessionId: t,
                events: i
            }, this.resetCurrentSequence(t), {
                sequenceId: n,
                events: i,
                sessionId: t
            }
        }, e.prototype.getSequencesToSend = function() {
            return N(this, void 0, void 0, function() {
                return M(this, function(t) {
                    return [2, Object.entries(this.finalizedSequences).map(function(n) {
                        var i = ft(n, 2),
                            o = i[0],
                            s = i[1],
                            u = s.sessionId,
                            a = s.events;
                        return {
                            sequenceId: Number(o),
                            sessionId: u,
                            events: a
                        }
                    })]
                })
            })
        }, e.prototype.storeCurrentSequence = function(t) {
            return N(this, void 0, void 0, function() {
                return M(this, function(n) {
                    return this.sequences[t] ? [2, this.addSequence(t)] : [2, void 0]
                })
            })
        }, e.prototype.addEventToCurrentSequence = function(t, n) {
            return N(this, void 0, void 0, function() {
                var i;
                return M(this, function(o) {
                    return this.sequences[t] || this.resetCurrentSequence(t), this.shouldSplitEventsList(this.sequences[t], n) && (i = this.addSequence(t)), this.sequences[t].push(n), [2, i]
                })
            })
        }, e.prototype.storeSendingEvents = function(t, n) {
            return N(this, void 0, void 0, function() {
                return M(this, function(i) {
                    return this.finalizedSequences[this.sequenceId] = {
                        sessionId: t,
                        events: n
                    }, [2, this.sequenceId++]
                })
            })
        }, e.prototype.cleanUpSessionEventsStore = function(t, n) {
            return N(this, void 0, void 0, function() {
                return M(this, function(i) {
                    return n !== void 0 && delete this.finalizedSequences[n], [2]
                })
            })
        }, e
    }($a)
});
var Sd, w0 = w(() => {
    "use strict";
    dt();
    Br();
    n0();
    g0();
    y0();
    Sd = function(r) {
        var e = r.config,
            t = r.sessionId,
            n = r.minInterval,
            i = r.maxInterval,
            o = r.type,
            s = r.payloadBatcher,
            u = r.storeType;
        return N(void 0, void 0, void 0, function() {
            function a(v) {
                return v === void 0 && (v = !1), N(this, void 0, void 0, function() {
                    return M(this, function(y) {
                        return [2, l.flush(v)]
                    })
                })
            }
            var l, c, f, d, p, h, g, m, b;
            return M(this, function(v) {
                switch (v.label) {
                    case 0:
                        return l = new r0(V(V({}, e), {
                            loggerProvider: e.loggerProvider,
                            payloadBatcher: s
                        })), c = function() {
                            return new v0({
                                loggerProvider: e.loggerProvider,
                                maxInterval: i,
                                minInterval: n
                            })
                        }, f = function() {
                            return N(void 0, void 0, void 0, function() {
                                var y;
                                return M(this, function(S) {
                                    switch (S.label) {
                                        case 0:
                                            return [4, m0.new(o, {
                                                loggerProvider: e.loggerProvider,
                                                minInterval: n,
                                                maxInterval: i,
                                                apiKey: e.apiKey
                                            }, t)];
                                        case 1:
                                            return y = S.sent(), e.loggerProvider.log("Failed to initialize idb store, falling back to memory store."), [2, y ? ? c()]
                                    }
                                })
                            })
                        }, u !== "idb" ? [3, 2] : [4, f()];
                    case 1:
                        return p = v.sent(), [3, 3];
                    case 2:
                        p = c(), v.label = 3;
                    case 3:
                        return d = p, h = function(y) {
                            var S = y.events,
                                _ = y.sessionId,
                                x = y.deviceId,
                                C = y.sequenceId;
                            e.debugMode && ka().then(function(E) {
                                var I = E.totalStorageSize,
                                    R = E.percentOfQuota,
                                    k = E.usageDetails;
                                e.loggerProvider.debug("Total storage size: ".concat(I, " KB, percentage of quota: ").concat(R, "%, usage details: ").concat(k))
                            }).catch(function() {}), l.sendEventsList({
                                events: S,
                                sessionId: _,
                                flushMaxRetries: e.flushMaxRetries,
                                apiKey: e.apiKey,
                                deviceId: x,
                                sampleRate: e.sampleRate,
                                serverZone: e.serverZone,
                                version: e.version,
                                type: o,
                                onComplete: function() {
                                    return N(void 0, void 0, void 0, function() {
                                        return M(this, function(E) {
                                            switch (E.label) {
                                                case 0:
                                                    return [4, d.cleanUpSessionEventsStore(_, C)];
                                                case 1:
                                                    return E.sent(), [2]
                                            }
                                        })
                                    })
                                }
                            })
                        }, g = function(y) {
                            var S = y.sessionId,
                                _ = y.deviceId;
                            d.storeCurrentSequence(S).then(function(x) {
                                x && h({
                                    sequenceId: x.sequenceId,
                                    events: x.events,
                                    sessionId: x.sessionId,
                                    deviceId: _
                                })
                            }).catch(function(x) {
                                e.loggerProvider.warn("Failed to get current sequence of session replay events for session:", x)
                            })
                        }, m = function(y) {
                            var S = y.deviceId;
                            return N(void 0, void 0, void 0, function() {
                                var _;
                                return M(this, function(x) {
                                    switch (x.label) {
                                        case 0:
                                            return [4, d.getSequencesToSend()];
                                        case 1:
                                            return _ = x.sent(), _ && _.forEach(function(C) {
                                                h({
                                                    sequenceId: C.sequenceId,
                                                    events: C.events,
                                                    sessionId: C.sessionId,
                                                    deviceId: S
                                                })
                                            }), [2]
                                    }
                                })
                            })
                        }, b = function(y) {
                            var S = y.event,
                                _ = y.sessionId,
                                x = y.deviceId;
                            d.addEventToCurrentSequence(_, S.data).then(function(C) {
                                return C && h({
                                    sequenceId: C.sequenceId,
                                    events: C.events,
                                    sessionId: C.sessionId,
                                    deviceId: x
                                })
                            }).catch(function(C) {
                                e.loggerProvider.warn("Failed to add event to session replay capture:", C)
                            })
                        }, [2, {
                            sendCurrentSequenceEvents: g,
                            addEvent: b,
                            sendStoredEvents: m,
                            flush: a
                        }]
                }
            })
        })
    }
});
var Ed, b0 = w(() => {
    "use strict";
    dt();
    Ed = function() {
        function r() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = new Map;
            e.forEach(function(i) {
                n.set(i.name, i.manager)
            }), this.managers = n
        }
        return r.prototype.sendStoredEvents = function(e) {
            return N(this, void 0, void 0, function() {
                var t;
                return M(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return t = [], this.managers.forEach(function(i) {
                                t.push(i.sendStoredEvents(e))
                            }), [4, Promise.all(t)];
                        case 1:
                            return n.sent(), [2]
                    }
                })
            })
        }, r.prototype.addEvent = function(e) {
            var t, n = e.sessionId,
                i = e.event,
                o = e.deviceId;
            (t = this.managers.get(i.type)) === null || t === void 0 || t.addEvent({
                sessionId: n,
                event: i,
                deviceId: o
            })
        }, r.prototype.sendCurrentSequenceEvents = function(e) {
            var t = e.sessionId,
                n = e.deviceId;
            this.managers.forEach(function(i) {
                i.sendCurrentSequenceEvents({
                    sessionId: t,
                    deviceId: n
                })
            })
        }, r.prototype.flush = function(e) {
            return N(this, void 0, void 0, function() {
                var t;
                return M(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return t = [], this.managers.forEach(function(i) {
                                t.push(i.flush(e))
                            }), [4, Promise.all(t)];
                        case 1:
                            return n.sent(), [2]
                    }
                })
            })
        }, r
    }()
});
var _d, S0 = w(() => {
    "use strict";
    _d = (r => (r[r.MouseUp = 0] = "MouseUp", r[r.MouseDown = 1] = "MouseDown", r[r.Click = 2] = "Click", r[r.ContextMenu = 3] = "ContextMenu", r[r.DblClick = 4] = "DblClick", r[r.Focus = 5] = "Focus", r[r.Blur = 6] = "Blur", r[r.TouchStart = 7] = "TouchStart", r[r.TouchMove_Departed = 8] = "TouchMove_Departed", r[r.TouchEnd = 9] = "TouchEnd", r[r.TouchCancel = 10] = "TouchCancel", r))(_d || {})
});

function I0(r, e) {
    if (C0 = new Date, r.nodeType !== Node.ELEMENT_NODE) throw new Error("Can't generate CSS selector for non-element node type.");
    if (r.tagName.toLowerCase() === "html") return "html";
    var t = {
        root: document.body,
        idName: function(o) {
            return !0
        },
        className: function(o) {
            return !0
        },
        tagName: function(o) {
            return !0
        },
        attr: function(o, s) {
            return !1
        },
        seedMinLength: 1,
        optimizedMinLength: 2,
        threshold: 1e3,
        maxNumberOfTries: 1e4,
        timeoutMs: void 0
    };
    xt = V(V({}, t), e), Cd = iA(xt.root, t);
    var n = ja(r, "all", function() {
        return ja(r, "two", function() {
            return ja(r, "one", function() {
                return ja(r, "none")
            })
        })
    });
    if (n) {
        var i = R0(P0(n, r));
        return i.length > 0 && (n = i[0]), Wa(n)
    } else throw new Error("Selector was not found.")
}

function iA(r, e) {
    return r.nodeType === Node.DOCUMENT_NODE ? r : r === e.root ? r.ownerDocument : r
}

function ja(r, e, t) {
    for (var n = null, i = [], o = r, s = 0, u = function() {
            var l, c, f = new Date().getTime() - C0.getTime();
            if (xt.timeoutMs !== void 0 && f > xt.timeoutMs) throw new Error("Timeout: Can't find a unique selector after ".concat(f, "ms"));
            var d = Va(oA(o)) || Va.apply(void 0, tr([], ft(sA(o)), !1)) || Va.apply(void 0, tr([], ft(aA(o)), !1)) || Va(lA(o)) || [x0()],
                p = uA(o);
            if (e == "all") p && (d = d.concat(d.filter(xd).map(function(v) {
                return Ba(v, p)
            })));
            else if (e == "two") d = d.slice(0, 1), p && (d = d.concat(d.filter(xd).map(function(v) {
                return Ba(v, p)
            })));
            else if (e == "one") {
                var h = ft(d = d.slice(0, 1), 1),
                    g = h[0];
                p && xd(g) && (d = [Ba(g, p)])
            } else e == "none" && (d = [x0()], p && (d = [Ba(d[0], p)]));
            try {
                for (var m = (l = void 0, et(d)), b = m.next(); !b.done; b = m.next()) {
                    var g = b.value;
                    g.level = s
                }
            } catch (v) {
                l = {
                    error: v
                }
            } finally {
                try {
                    b && !b.done && (c = m.return) && c.call(m)
                } finally {
                    if (l) throw l.error
                }
            }
            if (i.push(d), i.length >= xt.seedMinLength && (n = E0(i, t), n)) return "break";
            o = o.parentElement, s++
        }; o;) {
        var a = u();
        if (a === "break") break
    }
    return n || (n = E0(i, t)), !n && t ? t() : n
}

function E0(r, e) {
    var t, n, i = R0(O0(r));
    if (i.length > xt.threshold) return e ? e() : null;
    try {
        for (var o = et(i), s = o.next(); !s.done; s = o.next()) {
            var u = s.value;
            if (T0(u)) return u
        }
    } catch (a) {
        t = {
            error: a
        }
    } finally {
        try {
            s && !s.done && (n = o.return) && n.call(o)
        } finally {
            if (t) throw t.error
        }
    }
    return null
}

function Wa(r) {
    for (var e = r[0], t = e.name, n = 1; n < r.length; n++) {
        var i = r[n].level || 0;
        e.level === i - 1 ? t = "".concat(r[n].name, " > ").concat(t) : t = "".concat(r[n].name, " ").concat(t), e = r[n]
    }
    return t
}

function _0(r) {
    return r.map(function(e) {
        return e.penalty
    }).reduce(function(e, t) {
        return e + t
    }, 0)
}

function T0(r) {
    var e = Wa(r);
    switch (Cd.querySelectorAll(e).length) {
        case 0:
            throw new Error("Can't select any node with this selector: ".concat(e));
        case 1:
            return !0;
        default:
            return !1
    }
}

function oA(r) {
    var e = r.getAttribute("id");
    return e && xt.idName(e) ? {
        name: "#" + CSS.escape(e),
        penalty: 0
    } : null
}

function sA(r) {
    var e = Array.from(r.attributes).filter(function(t) {
        return xt.attr(t.name, t.value)
    });
    return e.map(function(t) {
        return {
            name: "[".concat(CSS.escape(t.name), '="').concat(CSS.escape(t.value), '"]'),
            penalty: .5
        }
    })
}

function aA(r) {
    var e = Array.from(r.classList).filter(xt.className);
    return e.map(function(t) {
        return {
            name: "." + CSS.escape(t),
            penalty: 1
        }
    })
}

function lA(r) {
    var e = r.tagName.toLowerCase();
    return xt.tagName(e) ? {
        name: e,
        penalty: 2
    } : null
}

function x0() {
    return {
        name: "*",
        penalty: 3
    }
}

function uA(r) {
    var e = r.parentNode;
    if (!e) return null;
    var t = e.firstChild;
    if (!t) return null;
    for (var n = 0; t && (t.nodeType === Node.ELEMENT_NODE && n++, t !== r);) t = t.nextSibling;
    return n
}

function Ba(r, e) {
    return {
        name: r.name + ":nth-child(".concat(e, ")"),
        penalty: r.penalty + 1
    }
}

function xd(r) {
    return r.name !== "html" && !r.name.startsWith("#")
}

function Va() {
    for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
    var t = r.filter(cA);
    return t.length > 0 ? t : null
}

function cA(r) {
    return r != null
}

function O0(r, e) {
    var t, n, i, o, s, u;
    return e === void 0 && (e = []), M(this, function(a) {
        switch (a.label) {
            case 0:
                if (!(r.length > 0)) return [3, 9];
                a.label = 1;
            case 1:
                a.trys.push([1, 6, 7, 8]), t = et(r[0]), n = t.next(), a.label = 2;
            case 2:
                return n.done ? [3, 5] : (i = n.value, [5, et(O0(r.slice(1, r.length), e.concat(i)))]);
            case 3:
                a.sent(), a.label = 4;
            case 4:
                return n = t.next(), [3, 2];
            case 5:
                return [3, 8];
            case 6:
                return o = a.sent(), s = {
                    error: o
                }, [3, 8];
            case 7:
                try {
                    n && !n.done && (u = t.return) && u.call(t)
                } finally {
                    if (s) throw s.error
                }
                return [7];
            case 8:
                return [3, 11];
            case 9:
                return [4, e];
            case 10:
                a.sent(), a.label = 11;
            case 11:
                return [2]
        }
    })
}

function R0(r) {
    return tr([], ft(r), !1).sort(function(e, t) {
        return _0(e) - _0(t)
    })
}

function P0(r, e, t) {
    var n, i, o;
    return t === void 0 && (t = {
        counter: 0,
        visited: new Map
    }), M(this, function(s) {
        switch (s.label) {
            case 0:
                if (!(r.length > 2 && r.length > xt.optimizedMinLength)) return [3, 5];
                n = 1, s.label = 1;
            case 1:
                return n < r.length - 1 ? t.counter > xt.maxNumberOfTries ? [2] : (t.counter += 1, i = tr([], ft(r), !1), i.splice(n, 1), o = Wa(i), t.visited.has(o) ? [2] : T0(i) && fA(i, e) ? [4, i] : [3, 4]) : [3, 5];
            case 2:
                return s.sent(), t.visited.set(o, !0), [5, et(P0(i, e, t))];
            case 3:
                s.sent(), s.label = 4;
            case 4:
                return n++, [3, 1];
            case 5:
                return [2]
        }
    })
}

function fA(r, e) {
    return Cd.querySelector(Wa(r)) === e
}
var xt, Cd, C0, A0 = w(() => {
    "use strict";
    dt()
});
var dA, M0, N0, D0, k0 = w(() => {
    "use strict";
    dt();
    S0();
    da();
    A0();
    Me();
    dA = 36e5, M0 = function(r) {
        var e = r.version,
            t = r.events,
            n = [];
        return t.forEach(function(i) {
            var o = JSON.parse(i);
            o.count = 1, o.type === "click" && n.push(o)
        }), {
            version: e,
            events: n
        }
    }, N0 = function(r) {
        var e = r.version,
            t = r.events,
            n = [];
        t.forEach(function(o) {
            var s = JSON.parse(o);
            s.type === "click" && n.push(s)
        });
        var i = n.reduce(function(o, s) {
            var u = s.x,
                a = s.y,
                l = s.selector,
                c = s.timestamp,
                f = c - c % dA,
                d = "".concat(u, ":").concat(a, ":").concat(l ? ? "", ":").concat(f);
            return o[d] ? o[d].count += 1 : o[d] = V(V({}, s), {
                timestamp: f,
                count: 1
            }), o
        }, {});
        return {
            version: e,
            events: Object.values(i)
        }
    }, D0 = function(r, e) {
        var t = e.eventsManager,
            n = e.sessionId,
            i = e.deviceIdFn;
        return function(o) {
            if (o.type === _d.Click) {
                var s = B();
                if (s) {
                    var u = s.location,
                        a = s.innerHeight,
                        l = s.innerWidth;
                    if (u) {
                        var c = o.x,
                            f = o.y;
                        if (!(c === void 0 || f === void 0)) {
                            var d = _t.mirror.getNode(o.id),
                                p;
                            if (d) try {
                                p = I0(d)
                            } catch {
                                r.debug("error resolving selector from finder")
                            }
                            var h = Ii.getWindowScroll(s),
                                g = h.left,
                                m = h.top,
                                b = {
                                    x: c + g,
                                    y: f + m,
                                    selector: p,
                                    viewportHeight: a,
                                    viewportWidth: l,
                                    pageUrl: u.href,
                                    timestamp: Date.now(),
                                    type: "click"
                                },
                                v = i();
                            v && t.addEvent({
                                sessionId: n,
                                event: {
                                    type: "interaction",
                                    data: JSON.stringify(b)
                                },
                                deviceId: v
                            })
                        }
                    }
                }
            }
        }
    }
});
var L0, F0 = w(() => {
    "use strict";
    Me();
    Br();
    L0 = function() {
        function r(e, t) {
            var n = B();
            n && n.navigator && typeof n.navigator.sendBeacon == "function" ? this.sendBeacon = function(i, o) {
                try {
                    if (n.navigator.sendBeacon(i, JSON.stringify(o))) return !0
                } catch {}
                return !1
            } : this.sendBeacon = function() {
                return !1
            }, this.sendXhr = function(i, o) {
                var s = new XMLHttpRequest;
                return s.open("POST", i, !0), s.setRequestHeader("Accept", "*/*"), s.send(JSON.stringify(o)), !0
            }, this.basePageUrl = Da(t.serverZone, t.trackServerUrl), this.apiKey = t.apiKey, this.context = e
        }
        return r.prototype.send = function(e, t) {
            var n = this.context,
                i = n.sessionId,
                o = n.type,
                s = new URLSearchParams({
                    device_id: e,
                    session_id: String(i),
                    type: String(o),
                    api_key: this.apiKey
                }),
                u = "".concat(this.basePageUrl, "?").concat(s.toString());
            this.sendBeacon(u, t) || this.sendXhr(u, t)
        }, r
    }()
});
var Id, Td, U0, $0 = w(() => {
    "use strict";
    da();
    F0();
    Me();
    Id = Ii.getWindowHeight, Td = Ii.getWindowWidth, U0 = function() {
        function r(e) {
            var t = this;
            this.timestamp = Date.now(), this.hook = function(n) {
                t.update(n)
            }, this.send = function(n) {
                return function(i) {
                    var o = n(),
                        s = B();
                    s && o && t.transport.send(o, {
                        version: 1,
                        events: [{
                            maxScrollX: t._maxScrollX,
                            maxScrollY: t._maxScrollY,
                            maxScrollWidth: t._maxScrollWidth,
                            maxScrollHeight: t._maxScrollHeight,
                            viewportHeight: Id(),
                            viewportWidth: Td(),
                            pageUrl: s.location.href,
                            timestamp: t.timestamp,
                            type: "scroll"
                        }]
                    })
                }
            }, this._maxScrollX = 0, this._maxScrollY = 0, this._maxScrollWidth = Td(), this._maxScrollHeight = Id(), this.transport = e
        }
        return r.default = function(e, t) {
            return new r(new L0(e, t))
        }, Object.defineProperty(r.prototype, "maxScrollX", {
            get: function() {
                return this._maxScrollX
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r.prototype, "maxScrollY", {
            get: function() {
                return this._maxScrollY
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r.prototype, "maxScrollWidth", {
            get: function() {
                return this._maxScrollWidth
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r.prototype, "maxScrollHeight", {
            get: function() {
                return this._maxScrollHeight
            },
            enumerable: !1,
            configurable: !0
        }), r.prototype.update = function(e) {
            var t = Date.now();
            if (e.x > this._maxScrollX) {
                var n = Td();
                this._maxScrollX = e.x;
                var i = e.x + n;
                i > this._maxScrollWidth && (this._maxScrollWidth = i), this.timestamp = t
            }
            if (e.y > this._maxScrollY) {
                var o = Id();
                this._maxScrollY = e.y;
                var s = e.y + o;
                s > this._maxScrollHeight && (this._maxScrollHeight = s), this.timestamp = t
            }
        }, r
    }()
});
var Od, j0 = w(() => {
    "use strict";
    Br();
    Od = function() {
        function r(e) {
            var t = e.sessionId,
                n = e.deviceId;
            this.deviceId = n, this.sessionId = t, t && n && (this.sessionReplayId = YS(t, n))
        }
        return r
    }()
});

function X0(r, e) {
    e === void 0 && (e = {});
    var t = yA();
    t.p(r);
    var n = wA(r, e, 2, 4);
    return SA(n, e), bA(n, n.length - 4, t.d()), n
}

function Ld(r, e) {
    var t = r.length;
    if (!e && typeof TextEncoder < "u") return new TextEncoder().encode(r);
    for (var n = new Ct(r.length + (r.length >>> 1)), i = 0, o = function(l) {
            n[i++] = l
        }, s = 0; s < t; ++s) {
        if (i + 5 > n.length) {
            var u = new Ct(i + 8 + (t - s << 1));
            u.set(n), n = u
        }
        var a = r.charCodeAt(s);
        a < 128 || e ? o(a) : a < 2048 ? (o(192 | a >>> 6), o(128 | a & 63)) : a > 55295 && a < 57344 ? (a = 65536 + (a & 1047552) | r.charCodeAt(++s) & 1023, o(240 | a >>> 18), o(128 | a >>> 12 & 63), o(128 | a >>> 6 & 63), o(128 | a & 63)) : (o(224 | a >>> 12), o(128 | a >>> 6 & 63), o(128 | a & 63))
    }
    return K0(n, 0, i)
}

function Fd(r, e) {
    var t = "";
    if (!e && typeof TextDecoder < "u") return new TextDecoder().decode(r);
    for (var n = 0; n < r.length;) {
        var i = r[n++];
        i < 128 || e ? t += String.fromCharCode(i) : i < 224 ? t += String.fromCharCode((i & 31) << 6 | r[n++] & 63) : i < 240 ? t += String.fromCharCode((i & 15) << 12 | (r[n++] & 63) << 6 | r[n++] & 63) : (i = ((i & 15) << 18 | (r[n++] & 63) << 12 | (r[n++] & 63) << 6 | r[n++] & 63) - 65536, t += String.fromCharCode(55296 | i >> 10, 56320 | i & 1023))
    }
    return t
}
var Ct, tt, Vi, Dd, kd, B0, z0, q0, pA, Pd, H0, xW, V0, Ad, sr, K, Bi, Gr, K, K, K, K, Ga, K, hA, mA, Y0, K0, ar, $i, Rd, Md, W0, ji, Nd, G0, gA, vA, yA, wA, bA, SA, Ud, $d = w(() => {
    "use strict";
    Ct = Uint8Array, tt = Uint16Array, Vi = Uint32Array, Dd = new Ct([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), kd = new Ct([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), B0 = new Ct([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), z0 = function(r, e) {
        for (var t = new tt(31), n = 0; n < 31; ++n) t[n] = e += 1 << r[n - 1];
        for (var i = new Vi(t[30]), n = 1; n < 30; ++n)
            for (var o = t[n]; o < t[n + 1]; ++o) i[o] = o - t[n] << 5 | n;
        return [t, i]
    }, q0 = z0(Dd, 2), pA = q0[0], Pd = q0[1];
    pA[28] = 258, Pd[258] = 28;
    H0 = z0(kd, 0), xW = H0[0], V0 = H0[1], Ad = new tt(32768);
    for (K = 0; K < 32768; ++K) sr = (K & 43690) >>> 1 | (K & 21845) << 1, sr = (sr & 52428) >>> 2 | (sr & 13107) << 2, sr = (sr & 61680) >>> 4 | (sr & 3855) << 4, Ad[K] = ((sr & 65280) >>> 8 | (sr & 255) << 8) >>> 1;
    Bi = function(r, e, t) {
        for (var n = r.length, i = 0, o = new tt(e); i < n; ++i) ++o[r[i] - 1];
        var s = new tt(e);
        for (i = 0; i < e; ++i) s[i] = s[i - 1] + o[i - 1] << 1;
        var u;
        if (t) {
            u = new tt(1 << e);
            var a = 15 - e;
            for (i = 0; i < n; ++i)
                if (r[i])
                    for (var l = i << 4 | r[i], c = e - r[i], f = s[r[i] - 1]++ << c, d = f | (1 << c) - 1; f <= d; ++f) u[Ad[f] >>> a] = l
        } else
            for (u = new tt(n), i = 0; i < n; ++i) u[i] = Ad[s[r[i] - 1]++] >>> 15 - r[i];
        return u
    }, Gr = new Ct(288);
    for (K = 0; K < 144; ++K) Gr[K] = 8;
    for (K = 144; K < 256; ++K) Gr[K] = 9;
    for (K = 256; K < 280; ++K) Gr[K] = 7;
    for (K = 280; K < 288; ++K) Gr[K] = 8;
    Ga = new Ct(32);
    for (K = 0; K < 32; ++K) Ga[K] = 5;
    hA = Bi(Gr, 9, 0), mA = Bi(Ga, 5, 0), Y0 = function(r) {
        return (r / 8 >> 0) + (r & 7 && 1)
    }, K0 = function(r, e, t) {
        (t == null || t > r.length) && (t = r.length);
        var n = new(r instanceof tt ? tt : r instanceof Vi ? Vi : Ct)(t - e);
        return n.set(r.subarray(e, t)), n
    }, ar = function(r, e, t) {
        t <<= e & 7;
        var n = e / 8 >> 0;
        r[n] |= t, r[n + 1] |= t >>> 8
    }, $i = function(r, e, t) {
        t <<= e & 7;
        var n = e / 8 >> 0;
        r[n] |= t, r[n + 1] |= t >>> 8, r[n + 2] |= t >>> 16
    }, Rd = function(r, e) {
        for (var t = [], n = 0; n < r.length; ++n) r[n] && t.push({
            s: n,
            f: r[n]
        });
        var i = t.length,
            o = t.slice();
        if (!i) return [new Ct(0), 0];
        if (i == 1) {
            var s = new Ct(t[0].s + 1);
            return s[t[0].s] = 1, [s, 1]
        }
        t.sort(function(_, x) {
            return _.f - x.f
        }), t.push({
            s: -1,
            f: 25001
        });
        var u = t[0],
            a = t[1],
            l = 0,
            c = 1,
            f = 2;
        for (t[0] = {
                s: -1,
                f: u.f + a.f,
                l: u,
                r: a
            }; c != i - 1;) u = t[t[l].f < t[f].f ? l++ : f++], a = t[l != c && t[l].f < t[f].f ? l++ : f++], t[c++] = {
            s: -1,
            f: u.f + a.f,
            l: u,
            r: a
        };
        for (var d = o[0].s, n = 1; n < i; ++n) o[n].s > d && (d = o[n].s);
        var p = new tt(d + 1),
            h = Md(t[c - 1], p, 0);
        if (h > e) {
            var n = 0,
                g = 0,
                m = h - e,
                b = 1 << m;
            for (o.sort(function(x, C) {
                    return p[C.s] - p[x.s] || x.f - C.f
                }); n < i; ++n) {
                var v = o[n].s;
                if (p[v] > e) g += b - (1 << h - p[v]), p[v] = e;
                else break
            }
            for (g >>>= m; g > 0;) {
                var y = o[n].s;
                p[y] < e ? g -= 1 << e - p[y]++ - 1 : ++n
            }
            for (; n >= 0 && g; --n) {
                var S = o[n].s;
                p[S] == e && (--p[S], ++g)
            }
            h = e
        }
        return [new Ct(p), h]
    }, Md = function(r, e, t) {
        return r.s == -1 ? Math.max(Md(r.l, e, t + 1), Md(r.r, e, t + 1)) : e[r.s] = t
    }, W0 = function(r) {
        for (var e = r.length; e && !r[--e];);
        for (var t = new tt(++e), n = 0, i = r[0], o = 1, s = function(a) {
                t[n++] = a
            }, u = 1; u <= e; ++u)
            if (r[u] == i && u != e) ++o;
            else {
                if (!i && o > 2) {
                    for (; o > 138; o -= 138) s(32754);
                    o > 2 && (s(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305), o = 0)
                } else if (o > 3) {
                    for (s(i), --o; o > 6; o -= 6) s(8304);
                    o > 2 && (s(o - 3 << 5 | 8208), o = 0)
                }
                for (; o--;) s(i);
                o = 1, i = r[u]
            }
        return [t.subarray(0, n), e]
    }, ji = function(r, e) {
        for (var t = 0, n = 0; n < e.length; ++n) t += r[n] * e[n];
        return t
    }, Nd = function(r, e, t) {
        var n = t.length,
            i = Y0(e + 2);
        r[i] = n & 255, r[i + 1] = n >>> 8, r[i + 2] = r[i] ^ 255, r[i + 3] = r[i + 1] ^ 255;
        for (var o = 0; o < n; ++o) r[i + o + 4] = t[o];
        return (i + 4 + n) * 8
    }, G0 = function(r, e, t, n, i, o, s, u, a, l, c) {
        ar(e, c++, t), ++i[256];
        for (var f = Rd(i, 15), d = f[0], p = f[1], h = Rd(o, 15), g = h[0], m = h[1], b = W0(d), v = b[0], y = b[1], S = W0(g), _ = S[0], x = S[1], C = new tt(19), E = 0; E < v.length; ++E) C[v[E] & 31]++;
        for (var E = 0; E < _.length; ++E) C[_[E] & 31]++;
        for (var I = Rd(C, 7), R = I[0], k = I[1], D = 19; D > 4 && !R[B0[D - 1]]; --D);
        var P = l + 5 << 3,
            X = ji(i, Gr) + ji(o, Ga) + s,
            Z = ji(i, d) + ji(o, g) + s + 14 + 3 * D + ji(C, R) + (2 * C[16] + 3 * C[17] + 7 * C[18]);
        if (P <= X && P <= Z) return Nd(e, c, r.subarray(a, a + l));
        var L, F, Q, J;
        if (ar(e, c, 1 + (Z < X)), c += 2, Z < X) {
            L = Bi(d, p, 0), F = d, Q = Bi(g, m, 0), J = g;
            var A = Bi(R, k, 0);
            ar(e, c, y - 257), ar(e, c + 5, x - 1), ar(e, c + 10, D - 4), c += 14;
            for (var E = 0; E < D; ++E) ar(e, c + 3 * E, R[B0[E]]);
            c += 3 * D;
            for (var ye = [v, _], je = 0; je < 2; ++je)
                for (var Oe = ye[je], E = 0; E < Oe.length; ++E) {
                    var we = Oe[E] & 31;
                    ar(e, c, A[we]), c += R[we], we > 15 && (ar(e, c, Oe[E] >>> 5 & 127), c += Oe[E] >>> 12)
                }
        } else L = hA, F = Gr, Q = mA, J = Ga;
        for (var E = 0; E < u; ++E)
            if (n[E] > 255) {
                var we = n[E] >>> 18 & 31;
                $i(e, c, L[we + 257]), c += F[we + 257], we > 7 && (ar(e, c, n[E] >>> 23 & 31), c += Dd[we]);
                var oe = n[E] & 31;
                $i(e, c, Q[oe]), c += J[oe], oe > 3 && ($i(e, c, n[E] >>> 5 & 8191), c += kd[oe])
            } else $i(e, c, L[n[E]]), c += F[n[E]];
        return $i(e, c, L[256]), c + F[256]
    }, gA = new Vi([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), vA = function(r, e, t, n, i, o) {
        var s = r.length,
            u = new Ct(n + s + 5 * (1 + Math.floor(s / 7e3)) + i),
            a = u.subarray(n, u.length - i),
            l = 0;
        if (!e || s < 8)
            for (var c = 0; c <= s; c += 65535) {
                var f = c + 65535;
                f < s ? l = Nd(a, l, r.subarray(c, f)) : (a[c] = o, l = Nd(a, l, r.subarray(c, s)))
            } else {
                for (var d = gA[e - 1], p = d >>> 13, h = d & 8191, g = (1 << t) - 1, m = new tt(32768), b = new tt(g + 1), v = Math.ceil(t / 3), y = 2 * v, S = function(se) {
                        return (r[se] ^ r[se + 1] << v ^ r[se + 2] << y) & g
                    }, _ = new Vi(25e3), x = new tt(288), C = new tt(32), E = 0, I = 0, c = 0, R = 0, k = 0, D = 0; c < s; ++c) {
                    var P = S(c),
                        X = c & 32767,
                        Z = b[P];
                    if (m[X] = Z, b[P] = X, k <= c) {
                        var L = s - c;
                        if ((E > 7e3 || R > 24576) && L > 423) {
                            l = G0(r, a, 0, _, x, C, I, R, D, c - D, l), R = E = I = 0, D = c;
                            for (var F = 0; F < 286; ++F) x[F] = 0;
                            for (var F = 0; F < 30; ++F) C[F] = 0
                        }
                        var Q = 2,
                            J = 0,
                            A = h,
                            ye = X - Z & 32767;
                        if (L > 2 && P == S(c - ye))
                            for (var je = Math.min(p, L) - 1, Oe = Math.min(32767, c), we = Math.min(258, L); ye <= Oe && --A && X != Z;) {
                                if (r[c + Q] == r[c + Q - ye]) {
                                    for (var oe = 0; oe < we && r[c + oe] == r[c + oe - ye]; ++oe);
                                    if (oe > Q) {
                                        if (Q = oe, J = ye, oe > je) break;
                                        for (var ht = Math.min(ye, oe - 2), De = 0, F = 0; F < ht; ++F) {
                                            var Re = c - ye + F + 32768 & 32767,
                                                Ht = m[Re],
                                                Ze = Re - Ht + 32768 & 32767;
                                            Ze > De && (De = Ze, Z = Re)
                                        }
                                    }
                                }
                                X = Z, Z = m[X], ye += X - Z + 32768 & 32767
                            }
                        if (J) {
                            _[R++] = 268435456 | Pd[Q] << 18 | V0[J];
                            var q = Pd[Q] & 31,
                                rt = V0[J] & 31;
                            I += Dd[q] + kd[rt], ++x[257 + q], ++C[rt], k = c + Q, ++E
                        } else _[R++] = r[c], ++x[r[c]]
                    }
                }
                l = G0(r, a, o, _, x, C, I, R, D, c - D, l)
            }
        return K0(u, 0, n + Y0(l) + i)
    }, yA = function() {
        var r = 1,
            e = 0;
        return {
            p: function(t) {
                for (var n = r, i = e, o = t.length, s = 0; s != o;) {
                    for (var u = Math.min(s + 5552, o); s < u; ++s) n += t[s], i += n;
                    n %= 65521, i %= 65521
                }
                r = n, e = i
            },
            d: function() {
                return (r >>> 8 << 16 | (e & 255) << 8 | e >>> 8) + ((r & 255) << 23) * 2
            }
        }
    }, wA = function(r, e, t, n, i) {
        return vA(r, e.level == null ? 6 : e.level, e.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(r.length))) * 1.5) : 12 + e.mem, t, n, !i)
    }, bA = function(r, e, t) {
        for (; t; ++e) r[e] = t, t >>>= 8
    }, SA = function(r, e) {
        var t = e.level,
            n = t == 0 ? 0 : t < 6 ? 1 : t == 9 ? 3 : 2;
        r[0] = 120, r[1] = n << 6 | (n ? 32 - 2 * n : 1)
    };
    Ud = "v1"
});
var jd, J0 = w(() => {
    "use strict";
    $d();
    jd = r => {
        let e = { ...r,
            v: Ud
        };
        return Fd(X0(Ld(JSON.stringify(e))), !0)
    }
});
var Z0 = w(() => {
    "use strict";
    $d()
});
var Q0 = w(() => {
    "use strict";
    J0();
    Z0()
});
var EA, eE, tE = w(() => {
    "use strict";
    Me();
    Q0();
    EA = 2e3, eE = function() {
        function r(e, t, n, i) {
            var o = this,
                s, u, a;
            this.taskQueue = [], this.isProcessing = !1, this.compressEvent = function(p) {
                var h = jd(p);
                return JSON.stringify(h)
            }, this.addCompressedEventToManager = function(p, h) {
                o.eventsManager && o.deviceId && o.eventsManager.addEvent({
                    event: {
                        type: "replay",
                        data: p
                    },
                    sessionId: h,
                    deviceId: o.deviceId
                })
            }, this.addCompressedEvent = function(p, h) {
                if (o.worker) o.worker.postMessage({
                    event: p,
                    sessionId: h
                });
                else {
                    var g = o.compressEvent(p);
                    o.addCompressedEventToManager(g, h)
                }
            }, this.terminate = function() {
                var p;
                (p = o.worker) === null || p === void 0 || p.terminate()
            };
            var l = B();
            this.canUseIdleCallback = l && "requestIdleCallback" in l, this.eventsManager = e, this.config = t, this.deviceId = n, this.timeout = ((s = t.performanceConfig) === null || s === void 0 ? void 0 : s.timeout) || EA;
            var c = {},
                f = (u = c.COMPRESSION_WEBWORKER_BODY) !== null && u !== void 0 ? u : i;
            if (!((a = this.config.experimental) === null || a === void 0) && a.useWebWorker && l && l.Worker && f) {
                t.loggerProvider.log("[Experimental] Enabling web worker for compression");
                var d = new Worker(URL.createObjectURL(new Blob([f], {
                    type: "application/javascript"
                })));
                d.onerror = function(p) {
                    t.loggerProvider.error(p)
                }, d.onmessage = function(p) {
                    var h = p.data,
                        g = h.compressedEvent,
                        m = h.sessionId;
                    o.addCompressedEventToManager(g, m)
                }, this.worker = d
            }
        }
        return r.prototype.scheduleIdleProcessing = function() {
            var e = this;
            this.isProcessing || (this.isProcessing = !0, requestIdleCallback(function(t) {
                e.processQueue(t)
            }, {
                timeout: this.timeout
            }))
        }, r.prototype.enqueueEvent = function(e, t) {
            var n;
            this.canUseIdleCallback && (!((n = this.config.performanceConfig) === null || n === void 0) && n.enabled) ? (this.config.loggerProvider.debug("Enqueuing event for processing during idle time."), this.taskQueue.push({
                event: e,
                sessionId: t
            }), this.scheduleIdleProcessing()) : (this.config.loggerProvider.debug("Processing event without idle callback."), this.addCompressedEvent(e, t))
        }, r.prototype.processQueue = function(e) {
            for (var t = this; this.taskQueue.length > 0 && (e.timeRemaining() > 0 || e.didTimeout);) {
                var n = this.taskQueue.shift();
                if (n) {
                    var i = n.event,
                        o = n.sessionId;
                    this.addCompressedEvent(i, o)
                }
            }
            this.taskQueue.length > 0 ? requestIdleCallback(function(s) {
                t.processQueue(s)
            }, {
                timeout: this.timeout
            }) : this.isProcessing = !1
        }, r
    }()
});
var rE, nE = w(() => {
    "use strict";
    dt();
    Me();
    Ae();
    da();
    XS();
    nn();
    w0();
    b0();
    Br();
    k0();
    $0();
    j0();
    dd();
    tE();
    rE = function() {
        function r() {
            var e = this;
            this.name = "@amplitude/session-replay-browser", this.recordCancelCallback = null, this.eventCount = 0, this.pageLeaveFns = [], this.teardownEventListeners = function(t) {
                var n = B();
                n && (n.removeEventListener("blur", e.blurListener), n.removeEventListener("focus", e.focusListener), !t && n.addEventListener("blur", e.blurListener), !t && n.addEventListener("focus", e.focusListener), n.self && "onpagehide" in n.self ? (n.removeEventListener("pagehide", e.pageLeaveListener), !t && n.addEventListener("pagehide", e.pageLeaveListener)) : (n.removeEventListener("beforeunload", e.pageLeaveListener), !t && n.addEventListener("beforeunload", e.pageLeaveListener)))
            }, this.blurListener = function() {
                e.sendEvents()
            }, this.focusListener = function() {
                e.recordEvents()
            }, this.pageLeaveListener = function(t) {
                e.pageLeaveFns.forEach(function(n) {
                    n(t)
                })
            }, this.addCustomRRWebEvent = function(t, n, i) {
                return n === void 0 && (n = {}), i === void 0 && (i = !0), N(e, void 0, void 0, function() {
                    var o, s, u, a;
                    return M(this, function(l) {
                        switch (l.label) {
                            case 0:
                                return l.trys.push([0, 3, , 4]), o = void 0, s = this.config, s ? (o = {
                                    config: La(s),
                                    version: Fa
                                }, i ? [4, ka()] : [3, 2]) : [3, 2];
                            case 1:
                                u = l.sent(), o = V(V({}, u), o), l.label = 2;
                            case 2:
                                return this.recordCancelCallback ? _t.addCustomEvent(t, V(V({}, n), o)) : this.loggerProvider.debug("Not able to add custom replay capture event ".concat(t, " due to no ongoing recording.")), [3, 4];
                            case 3:
                                return a = l.sent(), this.loggerProvider.debug("Error while adding custom replay capture event: ", a), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, this.stopRecordingEvents = function() {
                try {
                    e.loggerProvider.log("Session Replay capture stopping."), e.recordCancelCallback && e.recordCancelCallback(), e.recordCancelCallback = null
                } catch (n) {
                    var t = n;
                    e.loggerProvider.warn("Error occurred while stopping replay capture: ".concat(t.toString()))
                }
            }, this.loggerProvider = new $t
        }
        return r.prototype.init = function(e, t) {
            return Ue(this._init(e, t))
        }, r.prototype._init = function(e, t) {
            var n, i, o, s;
            return N(this, void 0, void 0, function() {
                var u, a, l, c, f, d, p, b, h, g, m, b;
                return M(this, function(v) {
                    switch (v.label) {
                        case 0:
                            return this.loggerProvider = t.loggerProvider || new $t, Object.prototype.hasOwnProperty.call(t, "logLevel") && this.loggerProvider.enable(t.logLevel), this.identifiers = new Od({
                                sessionId: t.sessionId,
                                deviceId: t.deviceId
                            }), u = this, [4, KS(e, t)];
                        case 1:
                            return u.joinedConfigGenerator = v.sent(), a = this, [4, this.joinedConfigGenerator.generateJoinedConfig(this.identifiers.sessionId)];
                        case 2:
                            a.config = v.sent(), t.sessionId && (!((n = this.config.interactionConfig) === null || n === void 0) && n.enabled) && (l = U0.default({
                                sessionId: t.sessionId,
                                type: "interaction"
                            }, this.config), this.pageLeaveFns = [l.send(this.getDeviceId.bind(this)).bind(l)], this.scrollHook = l.hook.bind(l)), c = [], f = this.config.storeType, f === "idb" && !(!((i = B()) === null || i === void 0) && i.indexedDB) && (f = "memory", this.loggerProvider.warn("Could not use preferred indexedDB storage, reverting to in memory option.")), this.loggerProvider.log("Using ".concat(f, " for event storage.")), v.label = 3;
                        case 3:
                            return v.trys.push([3, 5, , 6]), [4, Sd({
                                config: this.config,
                                sessionId: this.identifiers.sessionId,
                                type: "replay",
                                storeType: f
                            })];
                        case 4:
                            return d = v.sent(), c.push({
                                name: "replay",
                                manager: d
                            }), [3, 6];
                        case 5:
                            return p = v.sent(), b = p, this.loggerProvider.warn("Error occurred while creating replay events manager: ".concat(b.toString())), [3, 6];
                        case 6:
                            if (!(!((o = this.config.interactionConfig) === null || o === void 0) && o.enabled)) return [3, 10];
                            h = this.config.interactionConfig.batch ? N0 : M0, v.label = 7;
                        case 7:
                            return v.trys.push([7, 9, , 10]), [4, Sd({
                                config: this.config,
                                sessionId: this.identifiers.sessionId,
                                type: "interaction",
                                minInterval: (s = this.config.interactionConfig.trackEveryNms) !== null && s !== void 0 ? s : zv,
                                maxInterval: qv,
                                payloadBatcher: h,
                                storeType: f
                            })];
                        case 8:
                            return g = v.sent(), c.push({
                                name: "interaction",
                                manager: g
                            }), [3, 10];
                        case 9:
                            return m = v.sent(), b = m, this.loggerProvider.warn("Error occurred while creating interaction events manager: ".concat(b.toString())), [3, 10];
                        case 10:
                            return this.eventsManager = new(Ed.bind.apply(Ed, tr([void 0], ft(c), !1))), this.eventCompressor && this.eventCompressor.terminate(), this.eventCompressor = new eE(this.eventsManager, this.config, this.getDeviceId()), this.loggerProvider.log("Installing @amplitude/session-replay-browser."), this.teardownEventListeners(!1), this.initialize(!0), [2]
                    }
                })
            })
        }, r.prototype.setSessionId = function(e, t) {
            return Ue(this.asyncSetSessionId(e, t))
        }, r.prototype.asyncSetSessionId = function(e, t) {
            return N(this, void 0, void 0, function() {
                var n, i, o;
                return M(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return n = this.identifiers && this.identifiers.sessionId, n && this.sendEvents(n), i = t || this.getDeviceId(), this.identifiers = new Od({
                                sessionId: e,
                                deviceId: i
                            }), this.joinedConfigGenerator && n ? (o = this, [4, this.joinedConfigGenerator.generateJoinedConfig(this.identifiers.sessionId)]) : [3, 2];
                        case 1:
                            o.config = s.sent(), s.label = 2;
                        case 2:
                            return this.recordEvents(), [2]
                    }
                })
            })
        }, r.prototype.getSessionReplayProperties = function() {
            var e, t = this.config,
                n = this.identifiers;
            if (!t || !n) return this.loggerProvider.warn("Session replay init has not been called, cannot get session replay properties."), {};
            var i = this.getShouldRecord(),
                o = {};
            return i && (o = (e = {}, e[kv] = n.sessionReplayId ? n.sessionReplayId : null, e), t.debugMode && (o[Uv] = JSON.stringify({
                appHash: cd(t.apiKey).toString()
            }))), this.addCustomRRWebEvent(ri.GET_SR_PROPS, {
                shouldRecord: i,
                eventProperties: o
            }, this.eventCount === 10), this.eventCount === 10 && (this.eventCount = 0), this.eventCount++, o
        }, r.prototype.sendEvents = function(e) {
            var t, n = e || ((t = this.identifiers) === null || t === void 0 ? void 0 : t.sessionId),
                i = this.getDeviceId();
            this.eventsManager && n && i && this.eventsManager.sendCurrentSequenceEvents({
                sessionId: n,
                deviceId: i
            })
        }, r.prototype.initialize = function(e) {
            var t;
            if (e === void 0 && (e = !1), !(!((t = this.identifiers) === null || t === void 0) && t.sessionId)) {
                this.loggerProvider.log("Session is not being recorded due to lack of session id.");
                return
            }
            var n = this.getDeviceId();
            if (!n) {
                this.loggerProvider.log("Session is not being recorded due to lack of device id.");
                return
            }
            this.eventsManager && e && this.eventsManager.sendStoredEvents({
                deviceId: n
            }), this.recordEvents()
        }, r.prototype.shouldOptOut = function() {
            var e, t, n;
            if (!((e = this.config) === null || e === void 0) && e.instanceName) {
                var i = jt(this.config.instanceName).identityStore;
                n = i.getIdentity().optOut
            }
            return n !== void 0 ? n : (t = this.config) === null || t === void 0 ? void 0 : t.optOut
        }, r.prototype.getShouldRecord = function() {
            if (!this.identifiers || !this.config || !this.identifiers.sessionId) return this.loggerProvider.warn("Session is not being recorded due to lack of config, please call sessionReplay.init."), !1;
            if (!this.config.captureEnabled) return this.loggerProvider.log("Session ".concat(this.identifiers.sessionId, " not being captured due to capture being disabled for project or because the remote config could not be fetched.")), !1;
            if (this.shouldOptOut()) return this.loggerProvider.log("Opting session ".concat(this.identifiers.sessionId, " out of recording due to optOut config.")), !1;
            var e = qS(this.identifiers.sessionId, this.config.sampleRate);
            return e || this.loggerProvider.log("Opting session ".concat(this.identifiers.sessionId, " out of recording due to sample rate.")), e
        }, r.prototype.getBlockSelectors = function() {
            var e, t, n, i = (n = (t = (e = this.config) === null || e === void 0 ? void 0 : e.privacyConfig) === null || t === void 0 ? void 0 : t.blockSelector) !== null && n !== void 0 ? n : [];
            if (i.length !== 0) return i
        }, r.prototype.getMaskTextSelectors = function() {
            var e, t, n, i;
            if (((t = (e = this.config) === null || e === void 0 ? void 0 : e.privacyConfig) === null || t === void 0 ? void 0 : t.defaultMaskLevel) === "conservative") return "*";
            var o = (i = (n = this.config) === null || n === void 0 ? void 0 : n.privacyConfig) === null || i === void 0 ? void 0 : i.maskSelector;
            if (o) return o
        }, r.prototype.recordEvents = function() {
            var e = this,
                t, n = this.config,
                i = this.getShouldRecord(),
                o = (t = this.identifiers) === null || t === void 0 ? void 0 : t.sessionId;
            if (!(!i || !o || !n)) {
                this.stopRecordingEvents();
                var s = n.privacyConfig,
                    u = n.interactionConfig,
                    a = u ? .enabled ? {
                        mouseInteraction: this.eventsManager && D0(this.loggerProvider, {
                            eventsManager: this.eventsManager,
                            sessionId: o,
                            deviceIdFn: this.getDeviceId.bind(this)
                        }),
                        scroll: this.scrollHook
                    } : {};
                this.loggerProvider.log("Session Replay capture beginning for ".concat(o, ".")), this.recordCancelCallback = _t({
                    emit: function(l) {
                        if (e.shouldOptOut()) {
                            e.loggerProvider.log("Opting session ".concat(o, " out of recording due to optOut config.")), e.stopRecordingEvents(), e.sendEvents();
                            return
                        }
                        e.eventCompressor && e.eventCompressor.enqueueEvent(l, o)
                    },
                    inlineStylesheet: n.shouldInlineStylesheet,
                    hooks: a,
                    maskAllInputs: !0,
                    maskTextClass: ls,
                    blockClass: $v,
                    blockSelector: this.getBlockSelectors(),
                    maskInputFn: ud("input", s),
                    maskTextFn: ud("text", s),
                    maskTextSelector: this.getMaskTextSelectors(),
                    recordCanvas: !1,
                    errorHandler: function(l) {
                        var c = l;
                        if (c.message.includes("insertRule") && c.message.includes("CSSStyleSheet") || c._external_) throw c;
                        return e.loggerProvider.warn("Error while capturing replay: ", c.toString()), !0
                    }
                }), this.addCustomRRWebEvent(ri.DEBUG_INFO)
            }
        }, r.prototype.getDeviceId = function() {
            var e;
            return (e = this.identifiers) === null || e === void 0 ? void 0 : e.deviceId
        }, r.prototype.getSessionId = function() {
            var e;
            return (e = this.identifiers) === null || e === void 0 ? void 0 : e.sessionId
        }, r.prototype.flush = function(e) {
            var t;
            return e === void 0 && (e = !1), N(this, void 0, void 0, function() {
                return M(this, function(n) {
                    return [2, (t = this.eventsManager) === null || t === void 0 ? void 0 : t.flush(e)]
                })
            })
        }, r.prototype.shutdown = function() {
            this.teardownEventListeners(!0), this.stopRecordingEvents(), this.sendEvents()
        }, r
    }()
});
var En, _A, zr, iE = w(() => {
    "use strict";
    Ae();
    Ju();
    nE();
    En = function(r) {
        return function() {
            var e = r.config,
                t = e || Xu(),
                n = t.loggerProvider,
                i = t.logLevel;
            return {
                logger: n,
                logLevel: i
            }
        }
    }, _A = function() {
        var r = new rE;
        return {
            init: ee(r.init.bind(r), "init", En(r)),
            setSessionId: ee(r.setSessionId.bind(r), "setSessionId", En(r)),
            getSessionId: ee(r.getSessionId.bind(r), "getSessionId", En(r)),
            getSessionReplayProperties: ee(r.getSessionReplayProperties.bind(r), "getSessionReplayProperties", En(r)),
            flush: ee(r.flush.bind(r), "flush", En(r)),
            shutdown: ee(r.shutdown.bind(r), "shutdown", En(r))
        }
    }, zr = _A()
});
var oE, Bd, Vd, za, iG, sE, aE = w(() => {
    "use strict";
    iE();
    oE = zr.init, Bd = zr.setSessionId, Vd = zr.getSessionId, za = zr.getSessionReplayProperties, iG = zr.flush, sE = zr.shutdown
});
var Wd, lE = w(() => {
    "use strict";
    Wd = "1.13.2"
});
var CA, qa, uE = w(() => {
    "use strict";
    Nv();
    aE();
    lE();
    CA = function() {
        function r(e) {
            this.name = "@amplitude/plugin-session-replay-browser", this.type = "enrichment", this.options = Wt({
                forceSessionTracking: !1
            }, e)
        }
        return r.prototype.setup = function(e) {
            var t, n, i, o, s;
            return ss(this, void 0, void 0, function() {
                var u;
                return as(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 2, , 3]), e ? .loggerProvider.log("Installing @amplitude/plugin-session-replay, version ".concat(Wd, ".")), this.config = e, this.options.forceSessionTracking && (typeof e.defaultTracking == "boolean" ? e.defaultTracking === !1 && (e.defaultTracking = {
                                pageViews: !1,
                                formInteractions: !1,
                                fileDownloads: !1,
                                sessions: !0
                            }) : e.defaultTracking = Wt(Wt({}, e.defaultTracking), {
                                sessions: !0
                            })), [4, oE(e.apiKey, {
                                instanceName: this.config.instanceName,
                                deviceId: (t = this.options.deviceId) !== null && t !== void 0 ? t : this.config.deviceId,
                                optOut: this.config.optOut,
                                sessionId: this.options.customSessionId ? void 0 : this.config.sessionId,
                                loggerProvider: this.config.loggerProvider,
                                logLevel: this.config.logLevel,
                                flushMaxRetries: this.config.flushMaxRetries,
                                serverZone: this.config.serverZone,
                                configServerUrl: this.options.configServerUrl,
                                trackServerUrl: this.options.trackServerUrl,
                                sampleRate: this.options.sampleRate,
                                privacyConfig: {
                                    blockSelector: (n = this.options.privacyConfig) === null || n === void 0 ? void 0 : n.blockSelector,
                                    maskSelector: (i = this.options.privacyConfig) === null || i === void 0 ? void 0 : i.maskSelector,
                                    unmaskSelector: (o = this.options.privacyConfig) === null || o === void 0 ? void 0 : o.unmaskSelector,
                                    defaultMaskLevel: (s = this.options.privacyConfig) === null || s === void 0 ? void 0 : s.defaultMaskLevel
                                },
                                debugMode: this.options.debugMode,
                                shouldInlineStylesheet: this.options.shouldInlineStylesheet,
                                version: {
                                    type: "plugin",
                                    version: Wd
                                },
                                performanceConfig: this.options.performanceConfig,
                                storeType: this.options.storeType,
                                experimental: this.options.experimental
                            }).promise];
                        case 1:
                            return a.sent(), [3, 3];
                        case 2:
                            return u = a.sent(), e ? .loggerProvider.error("Session Replay: Failed to initialize due to ".concat(u.message)), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        }, r.prototype.execute = function(e) {
            var t;
            return ss(this, void 0, void 0, function() {
                var n, i, n, i, o;
                return as(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return s.trys.push([0, 8, , 9]), this.options.customSessionId ? (n = this.options.customSessionId(e), n ? n === Vd() ? [3, 2] : [4, Bd(n).promise] : [3, 3]) : [3, 4];
                        case 1:
                            s.sent(), s.label = 2;
                        case 2:
                            i = za(), e.event_properties = Wt(Wt({}, e.event_properties), i), s.label = 3;
                        case 3:
                            return [3, 7];
                        case 4:
                            return n = this.config.sessionId, n && n !== Vd() ? [4, Bd(n).promise] : [3, 6];
                        case 5:
                            s.sent(), s.label = 6;
                        case 6:
                            n && n === e.session_id && (i = za(), e.event_properties = Wt(Wt({}, e.event_properties), i)), s.label = 7;
                        case 7:
                            return [2, Promise.resolve(e)];
                        case 8:
                            return o = s.sent(), (t = this.config) === null || t === void 0 || t.loggerProvider.error("Session Replay: Failed to enrich event due to ".concat(o.message)), [2, Promise.resolve(e)];
                        case 9:
                            return [2]
                    }
                })
            })
        }, r.prototype.teardown = function() {
            var e;
            return ss(this, void 0, void 0, function() {
                return as(this, function(t) {
                    try {
                        sE(), this.config = null
                    } catch (n) {
                        (e = this.config) === null || e === void 0 || e.loggerProvider.error("Session Replay: teardown failed due to ".concat(n.message))
                    }
                    return [2]
                })
            })
        }, r.prototype.getSessionReplayProperties = function() {
            return za()
        }, r
    }(), qa = function(r) {
        return new CA(r)
    }
});
var cE = w(() => {
    "use strict";
    uE()
});
var O, fE, dE, fG, pE, dG, pG, hG, hE, Wi, Gd = w(() => {
    "use strict";
    (function(r) {
        r.Designer = "Designer", r.Journalist = "Journalist", r.MarketingSpecialist = "Marketing Specialist", r.Photographer = "Photographer", r.Videographer = "Videographer", r.Student = "Student", r.Teacher = "Teacher", r.DesignersClient = "Designer's Client", r.Artist = "Artist", r.Developer = "Developer", r.BusinessOwner = "BusinessOwner", r.Work = "Work", r.Education = "Education", r.Myself = "Myself", r.Freelance = "Freelance", r.Company = "Company", r.Agency = "Agency", r.CompanyWebsite = "Company website", r.LandingPage = "Landing page", r.Presentation = "Presentation", r.Portfolio = "Portfolio", r.Editorial = "Editorial", r.OnlineStore = "Online store", r.JustTestingOut = "Just testing out", r.ClientsCompanyWebsite = "Client's company website", r.MyPortfolio = "My portfolio", r.MyCompanyWebsite = "My company website", r.OtherCompanyWebsite = "Other company website", r.PersonalPortfolio = "Personal portfolio", r.MyAgencyWebsite = "My agency website", r.FriendsColleagues = "Friends/Colleagues", r.TikTok = "TikTok", r.Instagram = "Instagram", r.Youtube = "Youtube", r.EventConference = "Event/conference", r.SearchEngineLikeGoogle = "Search engine like Google", r.Other = "Other"
    })(O || (O = {}));
    fE = [{
        label: O.Designer,
        analyticsValue: "designer"
    }, {
        label: O.Artist,
        analyticsValue: "artist"
    }, {
        label: O.Journalist,
        analyticsValue: "journalist"
    }, {
        label: O.MarketingSpecialist,
        analyticsValue: "marketing specialist"
    }, {
        label: O.Photographer,
        analyticsValue: "photographer"
    }, {
        label: O.Videographer,
        analyticsValue: "videographer"
    }, {
        label: O.Developer,
        analyticsValue: "developer"
    }, {
        label: O.Student,
        analyticsValue: "student"
    }, {
        label: O.Teacher,
        analyticsValue: "teacher"
    }, {
        label: O.BusinessOwner,
        analyticsValue: "business owner"
    }, {
        label: O.DesignersClient,
        analyticsValue: "designer's client"
    }, {
        label: O.Other,
        analyticsValue: "other"
    }], dE = [{
        label: O.Work,
        analyticsValue: "work"
    }, {
        label: O.Education,
        analyticsValue: "education"
    }, {
        label: O.Myself,
        analyticsValue: "myself"
    }, {
        label: O.Other,
        analyticsValue: "other"
    }], fG = [{
        label: O.Freelance,
        analyticsValue: "freelance"
    }, {
        label: O.Company,
        analyticsValue: "company"
    }, {
        label: O.Agency,
        analyticsValue: "agency"
    }], pE = [{
        label: O.CompanyWebsite,
        analyticsValue: "company website"
    }, {
        label: O.LandingPage,
        analyticsValue: "landing page"
    }, {
        label: O.Presentation,
        analyticsValue: "presentation"
    }, {
        label: O.Portfolio,
        analyticsValue: "portfolio"
    }, {
        label: O.Editorial,
        analyticsValue: "editorial"
    }, {
        label: O.OnlineStore,
        analyticsValue: "online store"
    }, {
        label: O.JustTestingOut,
        analyticsValue: "just testing out"
    }, {
        label: O.Other,
        analyticsValue: "other"
    }], dG = [{
        label: O.ClientsCompanyWebsite,
        analyticsValue: "client's company website"
    }, {
        label: O.LandingPage,
        analyticsValue: "landing page"
    }, {
        label: O.Presentation,
        analyticsValue: "presentation"
    }, {
        label: O.MyPortfolio,
        analyticsValue: "my portfolio"
    }, {
        label: O.Editorial,
        analyticsValue: "editorial"
    }, {
        label: O.OnlineStore,
        analyticsValue: "online store"
    }, {
        label: O.JustTestingOut,
        analyticsValue: "just testing out"
    }, {
        label: O.Other,
        analyticsValue: "other"
    }], pG = [{
        label: O.MyCompanyWebsite,
        analyticsValue: "my company website"
    }, {
        label: O.LandingPage,
        analyticsValue: "landing page"
    }, {
        label: O.OtherCompanyWebsite,
        analyticsValue: "other company website"
    }, {
        label: O.Presentation,
        analyticsValue: "presentation"
    }, {
        label: O.PersonalPortfolio,
        analyticsValue: "personal portfolio"
    }, {
        label: O.Editorial,
        analyticsValue: "editorial"
    }, {
        label: O.OnlineStore,
        analyticsValue: "online store"
    }, {
        label: O.JustTestingOut,
        analyticsValue: "just testing out"
    }, {
        label: O.Other,
        analyticsValue: "other"
    }], hG = [{
        label: O.MyAgencyWebsite,
        analyticsValue: "my agency website"
    }, {
        label: O.LandingPage,
        analyticsValue: "landing page"
    }, {
        label: O.ClientsCompanyWebsite,
        analyticsValue: "client's company website"
    }, {
        label: O.Presentation,
        analyticsValue: "presentation"
    }, {
        label: O.PersonalPortfolio,
        analyticsValue: "personal portfolio"
    }, {
        label: O.Editorial,
        analyticsValue: "editorial"
    }, {
        label: O.OnlineStore,
        analyticsValue: "online store"
    }, {
        label: O.JustTestingOut,
        analyticsValue: "just testing out"
    }, {
        label: O.Other,
        analyticsValue: "other"
    }], hE = [{
        label: O.FriendsColleagues,
        analyticsValue: "friends/colleagues"
    }, {
        label: O.Teacher,
        analyticsValue: "teacher"
    }, {
        label: O.TikTok,
        analyticsValue: "tikTok"
    }, {
        label: O.Instagram,
        analyticsValue: "instagram"
    }, {
        label: O.Youtube,
        analyticsValue: "youtube"
    }, {
        label: O.EventConference,
        analyticsValue: "event/conference"
    }, {
        label: O.SearchEngineLikeGoogle,
        analyticsValue: "search engine like google"
    }, {
        label: O.Other,
        analyticsValue: "other"
    }], Wi = ({
        value: r,
        options: e
    }) => {
        if (r = r.toLowerCase(), r.includes(O.DesignersClient.toLowerCase())) return e.find(n => n.label === O.DesignersClient) ? .analyticsValue || r;
        if (r.includes("other:")) return e.find(n => n.label === O.Other) ? .analyticsValue || "other";
        if (r.includes(O.Work.toLowerCase())) return r;
        let t = e.find(n => r.includes(n.analyticsValue.toLowerCase()));
        return t ? t.analyticsValue : r
    }
});

function SG({
    apiKey: r,
    user: e,
    config: t,
    plugins: n
}) {
    if (!ke() || !r) return;
    let i = e ? ._id;
    if (Rv(r, i, t), n ? .sessionReplay) {
        let o = qa({
            sampleRate: 1,
            ...n.sessionReplay
        });
        IA(o)
    }
    e && (Pv(i), TA(OA(e)))
}

function EG(r, e, t) {
    !ke() || !r || Av(r, e, t)
}

function IA(r) {
    !ke() || !r || Tv(r)
}

function TA(r) {
    if (!ke() || !r) return;
    let e = new Tt;
    for (let [t, n] of Object.entries(r)) e.set(t, n);
    Ov(e)
}

function OA(r) {
    return {
        userId: r._id,
        customer: !!r.plan,
        coupon: r.stripe ? .coupon_name,
        planType: r.plan ? .level || "free",
        planPeriod: r.plan ? .interval,
        totalProjects: r.created_mags_count || 0,
        publishedProjects: r.mags_count || 0,
        customDomainProjects: r.projectDomains || 0,
        betaTester: !!r.permissions ? .can_use_beta_testing,
        lifeTimeValue: r.analytics_data ? .lifeTimeValue || 0,
        numOfVisits: ["profile", "public", "editor"].reduce((e, t) => e + (r.analytics_data ? .[`visit_${t}`] || 0), 0),
        job: Wi({
            value: r.registrationData ? .job || "",
            options: fE
        }),
        businessRelationship: r.registrationData ? .business_relationship || "other",
        project: Wi({
            value: r.registrationData ? .future_project || "",
            options: pE
        }),
        audience: Wi({
            value: r.registrationData ? .design_purpose || "",
            options: dE
        }),
        wordOfMouth: (r.registrationData ? .discovery_channels || []).map(e => Wi({
            value: e,
            options: hE
        })),
        signUpDate: zd(r.createDate),
        lastVisitDate: zd(r.last_token_refresh),
        firstPaymentDate: zd(r.stripe ? .subscription_start)
    }
}

function zd(r) {
    return r ? rp(np(r), "yyyy-MM-dd") : ""
}
var mE = w(() => {
    "use strict";
    Mv();
    cE();
    UE();
    xn();
    Gd()
});
var RA, gE = w(() => {
    "use strict";
    RA = lr(FE())
});
var vE = Jd((Ha, qd) => {
    "use strict";
    (function(r, e) {
        typeof Ha == "object" && typeof qd == "object" ? qd.exports = e() : typeof define == "function" && define.amd ? define([], e) : typeof Ha == "object" ? Ha.ReactPixel = e() : r.ReactPixel = e()
    })(window, function() {
        return function(r) {
            var e = {};

            function t(n) {
                if (e[n]) return e[n].exports;
                var i = e[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return r[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
            }
            return t.m = r, t.c = e, t.d = function(n, i, o) {
                t.o(n, i) || Object.defineProperty(n, i, {
                    enumerable: !0,
                    get: o
                })
            }, t.r = function(n) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(n, "__esModule", {
                    value: !0
                })
            }, t.t = function(n, i) {
                if (1 & i && (n = t(n)), 8 & i || 4 & i && typeof n == "object" && n && n.__esModule) return n;
                var o = Object.create(null);
                if (t.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: n
                    }), 2 & i && typeof n != "string")
                    for (var s in n) t.d(o, s, function(u) {
                        return n[u]
                    }.bind(null, s));
                return o
            }, t.n = function(n) {
                var i = n && n.__esModule ? function() {
                    return n.default
                } : function() {
                    return n
                };
                return t.d(i, "a", i), i
            }, t.o = function(n, i) {
                return Object.prototype.hasOwnProperty.call(n, i)
            }, t.p = "", t(t.s = 0)
        }([function(r, e, t) {
            r.exports = t(1)
        }, function(r, e, t) {
            "use strict";

            function n(f) {
                return function(d) {
                    if (Array.isArray(d)) return i(d)
                }(f) || function(d) {
                    if (typeof Symbol < "u" && Symbol.iterator in Object(d)) return Array.from(d)
                }(f) || function(d, p) {
                    if (d) {
                        if (typeof d == "string") return i(d, p);
                        var h = Object.prototype.toString.call(d).slice(8, -1);
                        if (h === "Object" && d.constructor && (h = d.constructor.name), h === "Map" || h === "Set") return Array.from(d);
                        if (h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h)) return i(d, p)
                    }
                }(f) || function() {
                    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                }()
            }

            function i(f, d) {
                (d == null || d > f.length) && (d = f.length);
                for (var p = 0, h = new Array(d); p < d; p++) h[p] = f[p];
                return h
            }
            t.r(e);
            var o = !1,
                s = !1,
                u = function() {
                    var f;
                    if (s) {
                        for (var d = arguments.length, p = new Array(d), h = 0; h < d; h++) p[h] = arguments[h];
                        (f = console).info.apply(f, n(["[react-facebook-pixel]"].concat(p)))
                    }
                },
                a = function() {
                    var f;
                    if (s) {
                        for (var d = arguments.length, p = new Array(d), h = 0; h < d; h++) p[h] = arguments[h];
                        (f = console).info.apply(f, n(["[react-facebook-pixel]"].concat(p)))
                    }
                },
                l = function() {
                    return o || u("Pixel not initialized before using call ReactPixel.init with required params"), o
                },
                c = {
                    autoConfig: !0,
                    debug: !1
                };
            e.default = {
                init: function(f) {
                    var d, p, h, g, m, b, v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : c;
                    o = typeof window < "u" && !!window.fbq, d = window, p = document, h = "script", d.fbq || (g = d.fbq = function() {
                        g.callMethod ? g.callMethod.apply(g, arguments) : g.queue.push(arguments)
                    }, d._fbq || (d._fbq = g), g.push = g, g.loaded = !0, g.version = "2.0", g.queue = [], (m = p.createElement(h)).async = !0, m.src = "https://connect.facebook.net/en_US/fbevents.js", (b = p.getElementsByTagName(h)[0]).parentNode.insertBefore(m, b)), f ? (y.autoConfig === !1 && fbq("set", "autoConfig", !1, f), fbq("init", f, v), o = !0, s = y.debug) : u("Please insert pixel id for initializing")
                },
                pageView: function() {
                    l() && (fbq("track", "PageView"), s && a("called fbq('track', 'PageView');"))
                },
                track: function(f, d, p) {
                    l() && (fbq("track", f, d, p), s && (a("called fbq('track', '".concat(f, "');")), d && a("with data", d), p && a("with eventData", p)))
                },
                trackSingle: function(f, d, p, h) {
                    l() && (fbq("trackSingle", f, d, p, h), s && (a("called fbq('trackSingle', '".concat(f, "', '").concat(d, "');")), p && a("with data", p), h && a("with eventData", h)))
                },
                trackCustom: function(f, d, p) {
                    l() && (fbq("trackCustom", f, d, p), s && (a("called fbq('trackCustom', '".concat(f, "');")), d && a("with data", d), p && a("with eventData", p)))
                },
                trackSingleCustom: function(f, d, p, h) {
                    l() && (fbq("trackSingle", f, d, p, h), s && (a("called fbq('trackSingleCustom', '".concat(f, "', '").concat(d, "');")), p && a("with data", p), h && a("with eventData", h)))
                },
                grantConsent: function() {
                    l() && (fbq("consent", "grant"), s && a("called fbq('consent', 'grant');"))
                },
                revokeConsent: function() {
                    l() && (fbq("consent", "revoke"), s && a("called fbq('consent', 'revoke');"))
                },
                fbq: function(f) {
                    function d() {
                        return f.apply(this, arguments)
                    }
                    return d.toString = function() {
                        return f.toString()
                    }, d
                }(function() {
                    if (l()) {
                        for (var f = arguments.length, d = new Array(f), p = 0; p < f; p++) d[p] = arguments[p];
                        fbq.apply(void 0, d), s && (a("called fbq('".concat(d.slice(0, 2).join("', '"), "')")), d[2] && a("with data", d[2]))
                    }
                })
            }
        }])
    })
});
var yE, wE, bE = w(() => {
    "use strict";
    xn();
    yE = !1, wE = ({
        id: r,
        eventName: e,
        eventParams: t = {},
        eventIdParams: n = {},
        blockInIframe: i = !1
    }) => {
        if (!ke() || i && dp()) return;
        let o = vE();
        yE || (o.default.init(r), yE = !0), o.default.track(e, t, n)
    }
});
var TG, SE = w(() => {
    "use strict";
    TG = () => {
        (function(r, e, t, n) {
            if (typeof r.hj != "function") {
                let o = (...s) => {
                    r.hj ? .q ? .push(s)
                };
                o.q = [], r.hj = o
            }
            r._hjSettings = {
                hjid: 2740585,
                hjsv: 6
            };
            let i = e.querySelector("head");
            if (i) {
                let o = e.createElement("script");
                o.async = !0, o.src = `${t}${r._hjSettings.hjid}${n}${r._hjSettings.hjsv}`, i.appendChild(o)
            }
        })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")
    }
});
var RG, EE = w(() => {
    "use strict";
    RG = () => {
        let r = Math.random().toString(36).substring(7),
            e = document.createElement("script");
        e.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${r}`, e.async = !0, e.defer = !0, e.onload = () => {
            window.trackingFunctions ? .onLoad({
                appId: "6633414d65821501c7ba05b4"
            })
        }, document.head.appendChild(e)
    }
});
var _E = w(() => {
    "use strict"
});
var Ka, Ya, IE, xE, Hd, PA, AA, Xa, CE, TE = w(() => {
    "use strict";
    Ka = !1, Ya = {}, IE = (...r) => {
        Ka && console.info(...["[tiktok-pixel]"].concat(r))
    }, xE = () => (Object.keys(Ya).length > 0 && IE("Pixel not initialized before using call tiktokPixel.init with required params"), Ya), Hd = (...r) => {
        Ka && console.info(...["[tiktok-pixel]"].concat(r))
    }, PA = (r, e, t, n, i) => {
        r.TiktokAnalyticsObject = e;
        let o = r[e] = r[e] || [];
        o.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], o.setAndDefer = function(s, u) {
            s[u] = function(...a) {
                s.push([u, ...a])
            }
        };
        for (let s = 0; s < o.methods.length; s++) o.setAndDefer(o, o.methods[s]);
        o.instance = function(s) {
            for (var u = o._i[s] || [], a = 0; a < o.methods.length; a++) o.setAndDefer(u, o.methods[a]);
            return u
        }, o.load = function(s, u) {
            let a = "https://analytics.tiktok.com/i18n/pixel/events.js";
            o._i = o._i || {}, o._i[s] = [], o._i[s]._u = a, o._t = o._t || {}, o._t[s] = +new Date, o._o = o._o || {}, o._o[s] = u || {};
            let l = document.createElement("script");
            l.type = "text/javascript", l.async = !0, l.src = a + "?sdkid=" + s + "&lib=" + e;
            let c = document.getElementsByTagName("script")[0];
            c ? .parentNode ? .insertBefore(l, c)
        }, t ? (o.load(t), o.identify(n), o.page(), Ya[t] = !0, Ka = i.debug) : IE("Please insert pixel id for initializing")
    }, AA = {
        debug: !1
    }, Xa = {
        async init(r, e = {}, t = AA) {
            typeof window < "u" && !!window.ttq && Ya[r] || PA(window, "ttq", r, e, t)
        },
        pageView() {
            if (!xE()) return;
            CE().page()
        },
        track(r, e, t = {}) {
            if (!xE()) return;
            r || Hd("please specificy an event name"), CE().track(r, e, t), Ka && (Hd(`called ttq.track('${r}')`, e, t), e && Hd("with data", e, t))
        }
    }, CE = () => window.ttq
});
var OE = w(() => {
    "use strict";
    _E();
    TE()
});
var Yd = w(() => {
    "use strict";
    sl();
    sl();
    Sp();
    _p();
    gE();
    bE();
    mE();
    Gd();
    SE();
    EE();
    OE()
});
var kt, vr, Je, _n, PE = w(() => {
    "use strict";
    kt = lr(Zd()), vr = lr(el());
    Yd();
    RE();
    tp();
    LE();
    kE();
    $E();
    Yd();
    Je = {
        isPageNativelyScaled: function() {
            return window.innerWidth != document.documentElement.clientWidth
        },
        declination: function(r, e, t, n, i) {
            let o = [r, e, t],
                s = n % 100;
            return s >= 11 && s <= 14 ? s = 0 : s = (s %= 10) < 5 ? s > 2 ? 2 : s : 0, i || (s = n == 1 ? 1 : 0), o[s]
        },
        autoWindowScroll: function(r, e, t) {
            this.autoWindowScrollClear();
            let n = 10,
                i = 0,
                o = 100,
                s = (0, kt.default)(window).height();
            r.pageY < n && (i = -Math.abs(Math.floor((n - r.pageY) * 3))), r.pageY > s - n && (i = Math.abs(Math.floor((n - (s - r.pageY)) * 3))), i = Math.max(Math.min(20, i), -20), i != 0 && (e.scrollTop(e.scrollTop() + i), RM.common.autoWindowScrollTimeout = setTimeout(function() {
                t && t()
            }, o))
        },
        autoWindowScrollClear: function() {
            clearTimeout(RM.common.autoWindowScrollTimeout)
        },
        parseUriParameters: r => Object.fromEntries(new URLSearchParams(r)),
        getRGBA: function(r, e) {
            let t = "";
            if (r) {
                let n = [parseInt(r.substring(0, 2), 16), parseInt(r.substring(2, 4), 16), parseInt(r.substring(4, 6), 16)];
                e > .99 ? t = "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")" : t = "rgba(" + n[0] + "," + n[1] + "," + n[2] + ", " + e + ")"
            }
            return t
        },
        generateUUID: function() {
            let r = new Date().getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                let n = (r + Math.random() * 16) % 16 | 0;
                return r = Math.floor(r / 16), (t == "x" ? n : n & 3 | 8).toString(16)
            })
        },
        escapeSpecial: function(r, e) {
            return r = (r + "").replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1"), r && e && (r = "'" + r + "'"), r
        },
        isEqual: (r, e) => r instanceof Array && e instanceof Array ? r.length !== e.length ? !1 : r.every((t, n) => Je.isEqual(t, e[n])) : r instanceof Object && e instanceof Object ? vr.default.uniq([...Object.keys(r), ...Object.keys(e)]).every(n => {
            let i = r[n];
            return Je.isEqual(i, e[n])
        }) : vr.default.isEqual(r, e),
        scanForURIs: function(r, e, t) {
            function n(a, l, c, f) {
                let d = a;
                (l == null || l == "") && (d = "http://" + d);
                let p = c;
                return f != null && f != "" && (p += "." + f), u++, t || (p = d, p = p.replace(/^https?:\/\//, "")), s[u] = "<a " + (e ? 'class = "' + e + '"' : "") + ' href="' + d + '" target="_blank" title="' + d + '">' + p + "</a>", "INNER_TMP_BLOCK_" + u + "_INNER_TMP_BLOCK"
            }

            function i(a) {
                return u++, s[u] = "<a " + (e ? 'class = "' + e + '"' : "") + ' href="mailto:' + a + '">' + a + "</a>", "INNER_TMP_BLOCK_" + u + "_INNER_TMP_BLOCK"
            }

            function o(a, l) {
                return s[l]
            }
            var s = [],
                u = 0;
            return r += " ", r = r.replace(/\b([a-z0-9_\.-]+)@([\da-z\.-]+)\.(biz|com|edu|gov|net|org|us|ru|ua|uk|su|se|co|no|jp|it|in|il|gb|fr|fi|es|de|cz|ch|ca|by|at|au)/gim, i), r = r.replace(/\b(https?:\/\/)?([\da-z\.-]+)\.(biz|com|edu|gov|net|org|us|ru|ua|uk|su|se|co|no|jp|it|in|il|gb|fr|fi|es|de|cz|ch|ca|by|at|au)(\/[^\s\(\)\[\]\{\}\<\>]*)*/gim, n), r = r.replace(/INNER_TMP_BLOCK_([\d]+)_INNER_TMP_BLOCK/gim, o), r
        },
        plainTextToHtml: function(r, e) {
            return r = r || "", r = r.replace(/\&/gim, "&amp;"), r = r.replace(/\</gim, "&lt;"), r = r.replace(/\>/gim, "&gt;"), r = r.replace(/\n/gim, "<br/>"), r = r.replace(/\s\s/gim, " &nbsp;"), e && e.detectLinks && (r = Je.scanForURIs(r)), r
        },
        URLParts: function(r) {
            let t = /(.+:\/\/)?([^\/]+)(\/.*)*/i.exec(r);
            return t = t || [], {
                url: t[0] || "",
                protocol: t[1] || "",
                hostname: t[2] || "",
                path: t[3] || ""
            }
        },
        filterNonAscii: function(r) {
            if (!r || !r.val) return;
            let e = r.val();
            return /[^\x00-\x7f]/.test(e) ? (e = e.replace(/[^\x00-\x7f]/g, ""), r.val(e), !0) : !1
        },
        applyTransform: function(r, e) {
            r.css({
                "-webkit-transform": e,
                transform: e
            })
        },
        getElementScale(r) {
            let e = window.getComputedStyle(r),
                t = e.transform || e.webkitTransform,
                n;
            if (t === "none" || typeof t > "u") return n;
            let i = t.match(/matrix.*\((.+)\)/) ? .[1].split(", ");
            return {
                x: +i[0],
                y: +i[3]
            }
        },
        getElementTranslateByString(r) {
            if (r.style.transform) {
                let e = r.style.transform.match(/translate\(([-\.\d]+\w*),\s([-\.\d]+\w*)\)/);
                if (e && e[1] && e[2]) {
                    let t = parseFloat(e[1], 10),
                        n = parseFloat(e[2], 10);
                    return {
                        x: t,
                        y: n
                    }
                }
            }
            return {
                x: 0,
                y: 0
            }
        },
        getElementTranslate(r, e = !1) {
            let t = window.getComputedStyle(r),
                n = t.transform || t.webkitTransform,
                i = {
                    x: 0,
                    y: 0,
                    z: 0
                };
            if (n === "none" || typeof n > "u") return i;
            let o = n.includes("3d") ? "3d" : "2d",
                s = n.match(/matrix.*\((.+)\)/) ? .[1].split(", ");
            return s && s.length && (o === "2d" && (i = {
                x: +s[4] / (e ? s[0] : 1),
                y: +s[5] / (e ? s[3] : 1),
                z: 0
            }), o === "3d" && (i = {
                x: +s[12],
                y: +s[13],
                z: +s[14]
            })), i
        },
        getElementRotationAngle(r) {
            let e = window.getComputedStyle(r),
                t = e.transform || e.webkitTransform,
                n = 0;
            if (t === "none" || typeof t > "u") return n;
            let i = t.match(/matrix.*\((.+)\)/) ? .[1].split(", ");
            return i && i.length && (n = Math.round(Math.atan2(+i[1], +i[0]) * (180 / Math.PI))), n
        },
        getCurrentTranslate: function(r) {
            let e = window.getComputedStyle(r, null),
                t = e.getPropertyValue("-webkit-transform") || e.getPropertyValue("transform");
            if (!t || t == "none") return [0, 0];
            var n = t.split("(")[1],
                n = n.split(")")[0],
                n = n.split(",");
            return [n[4] - 0, n[5] - 0]
        },
        applyTransition: function(r, e) {
            r.css({
                "-webkit-transition": e.replace("transform", "-webkit-transform"),
                transition: e
            })
        },
        waitForTransitionEnd: function(r, e, t, n) {
            return this.animationTransitionEndHandler("transition", r, e, t, n)
        },
        waitForAnimationEnd: function(r, e, t, n) {
            return this.animationTransitionEndHandler("animation", r, e, t, n)
        },
        animationTransitionEndHandler: function(r, e, t, n, i) {
            e = e instanceof kt.default ? e : (0, kt.default)(e);
            let u = r === "transition" ? {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    msTransition: "MSTransitionEnd",
                    transition: "transitionend"
                }[Modernizr.prefixed("transition")] : {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OTransition: "oAnimationEnd",
                    msTransition: "MSAnimationEnd",
                    animation: "animationend"
                }[Modernizr.prefixed("animation")],
                a = function(f) {
                    if (f) {
                        let d = r === "transition" ? f.originalEvent.propertyName.toLowerCase() : f.originalEvent.animationName.toLowerCase();
                        if (r === "transition" && !(0, kt.default)(f.target).is(e) || d.indexOf(n) === -1) return
                    }
                    e.off(u, a), clearTimeout(c), i()
                },
                l = function() {
                    e.off(u, a), clearTimeout(c)
                };
            e.on(u, a);
            var c = setTimeout(a, t);
            return l
        },
        vueTransitionsShow: function(r, e) {
            let t = e + "-enter",
                n = e + "-enter-active";
            r.addClass(t), window.requestAnimationFrame(function() {
                r.removeClass(t), r.addClass(n), Je.waitForTransitionEnd(r, 200, "opacity", function() {
                    r.removeClass(n)
                })
            })
        },
        vueTransitionsHide: function(r, e) {
            let t = e + "-leave-to",
                n = e + "-leave-active";
            return r.addClass(t + " " + n), new window.Promise(function(i) {
                Je.waitForTransitionEnd(r, 200, "opacity", i)
            }).then(function() {
                r.removeClass(t + " " + n)
            })
        },
        getFixedPositionCSS: function(r, e, t) {
            let n = e.left * t,
                i = e.top * t,
                o = e.width,
                s = e.height,
                u = o * (1 - t) / 2,
                a = s * (1 - t) / 2,
                l = {
                    left: "",
                    top: "",
                    bottom: "",
                    right: "",
                    "margin-left": "",
                    "margin-top": ""
                };
            return r ? (r != "c" && (r.indexOf("n") > -1 && (l.top = i - a), r.indexOf("w") > -1 && (l.left = n - u), r.indexOf("e") > -1 && (l.right = n - u), r.indexOf("s") > -1 && (l.bottom = i - a)), ["n", "c", "s"].indexOf(r) > -1 && (l.left = "50%", l["margin-left"] = -o / 2 + n), ["w", "c", "e"].indexOf(r) > -1 && (l.top = "50%", l["margin-top"] = -s / 2 + i), l) : vr.default.extend({}, l, e)
        },
        hex2rgb: function(r) {
            return r ? [parseInt(r.substring(0, 2), 16), parseInt(r.substring(2, 4), 16), parseInt(r.substring(4, 6), 16)] : []
        },
        getCursorStylesString({
            cusrsorUrl: r,
            cursorSize: e,
            isLambda: t,
            isHover: n
        }) {
            let i = `url(${r}), ${n?"pointer":"auto"}`;
            if (e && t) {
                let o = Math.max(e.width, e.height);
                i = `
      -webkit-image-set(
        url(${r}?w=${Math.round(o/2)}) 1x,
        url(${r}) 2x
      ), ${n?"pointer":"auto"}`
            }
            return i
        },
        loadLoggedUser: function(r) {
            if (window.RM ? .common.isDownloadedSource && !window.RM ? .common.homepageRewrite) return r && r();
            if (window.ServerData ? .me ? .user) return r && r(window.ServerData.me.user);
            if (Je.__loadLoggedUserCallbackStack = Je.__loadLoggedUserCallbackStack || [], r && typeof r == "function" && Je.__loadLoggedUserCallbackStack.push(r), Je.__loadLoggedUserLoadStarted) return;
            Je.__loadLoggedUserLoadStarted = !0, (0, kt.default)(window).on("message", vr.default.bind(function(t) {
                if (t = t.originalEvent || {}, t.origin === Be.readymag_auth_host) {
                    if (typeof t.data != "string") return;
                    let n = JSON.parse(t.data);
                    if (n.event !== "user") return;
                    let i = n.message;
                    i && window.location.href === `${Be.readymag_host}/` && (op("_rm_redirect", "profile", 60, "lax"), window.location.href = Be.readymag_auth_host), window.ServerData && (window.ServerData.me = {
                        user: i
                    });
                    for (let o = 0; o < Je.__loadLoggedUserCallbackStack.length; o++) Je.__loadLoggedUserCallbackStack[o].call(this, i);
                    Je.__loadLoggedUserCallbackStack = [], Je.__loadLoggedUserLoadStarted = !1, e.remove()
                }
            }, this));
            let e = (0, kt.default)("<iframe>").attr("width", "0").attr("height", "0").css({
                position: "absolute",
                top: "-999px"
            }).on("load", function() {
                e[0].contentWindow.postMessage("GetLoggedUser", "*")
            }).attr("src", Be.readymag_auth_host + "/get_user_cookies." + Date.now()).appendTo("body")
        },
        selectProtocol: function(r) {
            return !r || !r.length || r.indexOf("//") == 0 && Be.IS_FILE_PROTOCOL && (r = "http:" + r), r
        },
        _sendFBGraphRequest: function(r) {
            fetch("https://graph.facebook.com/?id=" + encodeURIComponent(r) + "&scrape=true&method=post")
        },
        facebookGraphRefresh: function(r) {
            let t = Be.readymag_viewer_host || window.location.origin,
                n, i, o;
            o = t + "/" + r.user_uri + "/" + r.mag_uri + "/", this._sendFBGraphRequest(o);
            let s = t + "/" + r.mag_numid + "/";
            this._sendFBGraphRequest(s), r.mag_domain ? (n = "http://" + r.mag_domain + "/", this._sendFBGraphRequest(n)) : r.user_domain && (i = "http://" + r.user_domain + "/" + r.mag_uri + "/", this._sendFBGraphRequest(i));
            let u = r.pages;
            if (u.length != 0)
                for (let a in u) {
                    a = u[a];
                    let l = t + "p" + a.num_id + "/";
                    this._sendFBGraphRequest(l)
                }
        },
        simulateEvent: function(r, e) {
            if (!r) return;
            let t = {
                    HTMLEvents: /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
                    MouseEvents: /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
                },
                i = u({
                    pointerX: 0,
                    pointerY: 0,
                    button: 0,
                    ctrlKey: !1,
                    altKey: !1,
                    shiftKey: !1,
                    metaKey: !1,
                    bubbles: !0,
                    cancelable: !0
                }, arguments[2] || {}),
                o, s = null;
            for (let a in t)
                if (t[a].test(e)) {
                    s = a;
                    break
                }
            if (!s) throw new SyntaxError("Only HTMLEvents and MouseEvents interfaces are supported");
            if (document.createEvent) o = document.createEvent(s), s === "HTMLEvents" ? o.initEvent(e, i.bubbles, i.cancelable) : o.initMouseEvent(e, i.bubbles, i.cancelable, document.defaultView, i.button, i.pointerX, i.pointerY, i.pointerX, i.pointerY, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.button, r), r.dispatchEvent(o);
            else {
                i.clientX = i.pointerX, i.clientY = i.pointerY;
                let a = document.createEventObject();
                o = u(a, i), r.fireEvent("on" + e, o)
            }
            return r;

            function u(a, l) {
                for (let c in l) a[c] = l[c];
                return a
            }
        },
        getTestIndexes: function() {
            if (RM.common.rm_test) return RM.common.rm_test;
            let r = 2,
                e = 5,
                t = {},
                n, i;
            for (n = r; n <= e; n++) t["_test_" + n] = -1;
            if (Modernizr.localstorage)
                for (n = r; n <= e; n++) i = "_test_" + n, t[i] = localStorage.getItem("rm_test_" + n), (parseInt(t[i]) != t[i] || t[i] < 0 || t[i] >= n) && (t[i] = Math.floor(Math.random() * n), localStorage.setItem("rm_test_" + n, t[i])), t[i] -= 0;
            return RM.common.rm_test = t, t
        },
        setInputSize: function(r, e, t) {
            let n = (0, kt.default)('<div style="position:absolute; left:-9999px; right:auto; margin:0; white-space:pre; width:auto"></div>').appendTo(r.parent());
            n[0].className = r[0].className, n.text(t || r.val());
            let i = n.width();
            i = Math.ceil(i / 2) * 2 + 2, e && i > e && (i = e), r.width(i), n.remove()
        },
        PageVisibilityManager: function() {
            let r, e;
            return typeof document < "u" && (typeof document.hidden < "u" ? (r = "hidden", e = "visibilitychange") : typeof document.mozHidden < "u" ? (r = "mozHidden", e = "mozvisibilitychange") : typeof document.msHidden < "u" ? (r = "msHidden", e = "msvisibilitychange") : typeof document.webkitHidden < "u" && (r = "webkitHidden", e = "webkitvisibilitychange")), {
                addEventListener: function(o) {
                    if (!r) return !1;
                    document.addEventListener(e, o)
                },
                removeEventListener: function(o) {
                    if (!r) return !1;
                    document.removeEventListener(e, o)
                },
                isPageHidden: function() {
                    return document[r]
                }
            }
        }(),
        isMongoObjectId: function(r) {
            let e;
            return e = /^[0-9a-fA-F]{24}$/, e.test(r)
        },
        setNoTransitions: function(r) {
            return r = !!r || r === void 0, Be.noanimations = r, (0, kt.default)("html").toggleClass("notransitions"), "Transitions are " + (r ? "disabled" : "enabled")
        },
        getGAcid: function() {
            let r = ip("_ga"),
                e;
            return r && (r = r.match(/GA[0-9]+\.[0-9]+\.(.*)/), r.length > 1 && (e = r[1])), e
        },
        initLinkedInInsights: async function() {
            try {
                if (!(await Ja.waitForCookieConsent()).marketing) return;
                ol.initLinkedInInsights({
                    partnerId: Be.linkedInPartnerId
                })
            } catch (r) {
                console.log(r)
            }
        },
        trackPixelPageView: async function(r = !0) {
            try {
                if (!(await Ja.waitForCookieConsent()).marketing) return;
                wE({
                    id: Be.fbPixelId,
                    eventName: "ViewContent",
                    blockInIframe: r
                })
            } catch (e) {
                console.log(e)
            }
        },
        trackTiktokPixelView: async function() {
            try {
                if (!(await Ja.waitForCookieConsent()).marketing) return;
                await Promise.all([Be.TIKTOK_PIXEL_ID ? Xa.init(Be.TIKTOK_PIXEL_ID) : null, Be.TIKTOK_PIXEL_US_ID ? Xa.init(Be.TIKTOK_PIXEL_US_ID) : null]), Xa.track("ViewContent", "public")
            } catch (r) {
                console.log(r)
            }
        },
        isNounSearchAvailable: function() {
            let r = RM.constructorRouter && RM.constructorRouter.me && RM.constructorRouter.me.get("permissions");
            return r && r.can_use_noun_icons
        },
        escapeRegExp: function(r) {
            let e = ["$", "^", "*", "(", ")", "+", "[", "]", "{", "}", "\\", "|", ".", "?", "/"],
                t = new RegExp("(\\" + e.join("|\\") + ")", "g");
            return r.replace(t, "\\$1")
        },
        capitalize: function(r) {
            return !r || typeof r != "string" ? "" : r.charAt(0).toUpperCase() + r.slice(1)
        },
        getSvgSizesByUrl: async function(r, e) {
            if (!r || !e) return;
            let t = await fetch(r),
                n;
            if (t.headers.get("content-type") ? .includes("image/svg")) n = await t.text();
            else throw new Error("incorrect svg content-type");
            if (!n) return;
            let i = document.createElement("div");
            i.className = "svg-size-checker", i.style.position = "relative", i.style.left = "-99999px", i.style.bottom = "-99999px", i.style.visibility = "hidden", i.style.zIndex = "-1", i.innerHTML = n, e.append(i);
            let o = i.getElementsByTagName("svg");
            if (!o[0]) return;
            let s = o[0].getBBox(),
                u = o[0].getBoundingClientRect();
            return i.remove(), {
                bbox: {
                    width: s.width,
                    height: s.height
                },
                clientRect: {
                    width: u.width,
                    height: u.height
                }
            }
        },
        cleanupSVG: function(r) {
            let e = (0, kt.default)(r),
                t = e && e[0] ? e[0].outerHTML : void 0;
            return t ? (vr.default.chain(e.find("[id]")).map(function(n) {
                return {
                    id: n.getAttribute("id"),
                    newId: Je.generateUUID()
                }
            }).sortBy(function(n) {
                return -n.id.length
            }).each(function(n) {
                t = t.split("#" + n.id).join("#" + n.newId), t = t.split('id="' + n.id + '"').join('id="' + n.newId + '"')
            }), t) : r
        },
        usedWidgets: function(r, e = []) {
            let t = {};
            return vr.default.each([...r, {
                wids: e
            }], n => {
                vr.default.each(n.wids, i => {
                    i.type && (t[i.type] = 1)
                })
            }), Object.keys(t)
        },
        canUseMinimalViewport: function(r) {
            return (r ? r.is_mag_use_minimal_viewport : RM.constructorRouter ? .mag ? .get("is_mag_use_minimal_viewport")) || ep("constructor.viewportMinimal")
        },
        getFileExt: function(r) {
            let e = r.split(".");
            return e.length > 1 ? e.pop() : void 0
        },
        isIframe: function() {
            try {
                return window.self !== window.top
            } catch {
                return !0
            }
        },
        isFreePlan(r) {
            return r ? ["free", "beginner"].includes(r) : !0
        },
        isSubscriptionPaused(r = {}) {
            return window ? .RM ? .constructorRouter ? .isOwner || Qd(r) ? window ? .RM ? .constructorRouter ? .me ? .get("permissions") ? ._reasons ? .limited_usage ? .code === "reason_subscription_paused" : r.get("permissions") ? ._reasons ? .limited_usage ? .code === "reason_subscription_paused"
        },
        forceRepaint(r) {
            let e = r instanceof kt.default ? r[0] : r,
                t = e.style.display;
            e.style.display = "none", e.offsetHeight, e.style.display = t
        }
    }, _n = Je
});
var yr, pt, Kd, AE, ME, Xd, Za, NE, ze, Ja, RE = w(() => {
    "use strict";
    yr = lr(Zd()), pt = lr(el());
    tp();
    PE();
    lp();
    Kd = [], AE = [], ME = [], Xd = [], Za = null;
    typeof window < "u" && (window.googleMapsAPIAuthError = !1, window.gm_authFailure = () => {
        ap.trigger("gmaps:auth_error", !0), window.googleMapsAPIAuthError = !0
    });
    NE = "//maps.googleapis.com/maps/api/js", ze = {
        initGMapsAPI: function(r, e) {
            if (window.googleMapsAPIAuthError && r && ze.destroyGMapsAPI(), window.google && window.google.maps) return e();
            if (!window.processGoogleMapsAPICallbacks) {
                window.processGoogleMapsAPICallbacks = function() {
                    pt.default.each(Kd, function(o) {
                        pt.default.isFunction(o) && o()
                    })
                };
                let t = document.createElement("script");
                t.type = "text/javascript";
                let n = {
                    libraries: "places",
                    callback: "processGoogleMapsAPICallbacks"
                };
                r ? n.key = r : window.googleMapsAPIAuthError = !0;
                let i = Be.IS_FILE_PROTOCOL ? "" : yr.default.param(n);
                t.src = _n.selectProtocol(NE + "?" + i), document.body.appendChild(t)
            }
            Kd.push(e)
        },
        destroyGMapsAPI: function() {
            let r = document.querySelectorAll("script[src*='" + NE + "']");
            for (let e = 0; e < r.length; e++) r[e].parentNode.removeChild(r[e]);
            window.google && window.google.maps && delete window.google.maps, delete window.processGoogleMapsAPICallbacks, Kd = [], window.googleMapsAPIAuthError = !1
        },
        initFacebookAPI: function(r) {
            let e, t = Be.FACEBOOK_APP_ID || "";
            if (typeof r == "function") {
                if (ze.isFacebookInited) return r();
                AE.push(r), e = (0, yr.default)("#fb-root"), e.length || (0, yr.default)("body").prepend((0, yr.default)('<div id="fb-root"></div>')), window.fbAsyncInit = function() {
                        FB.init({
                            appId: t,
                            xfbml: !1,
                            version: "v" + Be.FACEBOOK_API_VERSION
                        }), pt.default.each(AE, function(n) {
                            pt.default.isFunction(n) && n()
                        }), ze.isFacebookInited = !0
                    },
                    function(n, i, o) {
                        let s, u = n.getElementsByTagName(i)[0];
                        n.getElementById(o) || (s = n.createElement(i), s.id = o, s.src = _n.selectProtocol("//connect.facebook.net/en_US/sdk.js"), u.parentNode.insertBefore(s, u))
                    }(document, "script", "facebook-jssdk")
            }
        },
        initTwitterAPI: function(r) {
            if (ze.isTwitterInited) {
                pt.default.isFunction(r) && r();
                return
            } else pt.default.isFunction(r) && ME.push(r);
            ze.isTwitterLoading || (ze.isTwitterLoading = !0, (0, yr.default)('body > script[src^="//syndication.twimg.com/tweets.json"]').remove(), yr.default.ajax({
                url: _n.selectProtocol("//platform.twitter.com/widgets.js"),
                dataType: "script",
                cache: !1,
                success: function() {
                    pt.default.each(ME, function(e) {
                        pt.default.isFunction(e) && e()
                    }), twttr.events.bind("click", _n.getFocusBack), ze.isTwitterInited = !0, ze.isTwitterLoading = !1
                }
            }))
        },
        initMailchimpAPI: function(r) {
            if (ze.isMailchimpInited) {
                pt.default.isFunction(r) && r(ze.mailchimp);
                return
            } else pt.default.isFunction(r) && Xd.push(r);
            ze.isMailchimpLoading || (ze.isMailchimpLoading = !0, yr.default.ajax({
                url: _n.selectProtocol("//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js"),
                dataType: "script",
                cache: !1,
                success: function() {
                    if (!window.require) {
                        Xd = [];
                        return
                    }
                    window.require(["mojo/signup-forms/Loader"], function(e) {
                        ze.mailchimp = e, pt.default.each(Xd, function(t) {
                            pt.default.isFunction(t) && t(ze.mailchimp)
                        }), ze.isMailchimpInited = !0
                    })
                },
                complete: function() {
                    ze.isMailchimpLoading = !1
                }
            }))
        },
        waitForCookieConsent: function() {
            return Za || (Za = new Promise(r => {
                let e = {
                    necessary: !0,
                    preferences: !0,
                    statistics: !0,
                    marketing: !0
                };
                if (window.RM ? .common.mode === "constructor") return r(e);
                if (window.Cookiebot ? .consented) return r(window.Cookiebot ? .consent);
                if (!window.ServerData ? .isCountryInEU && !window.Cookiebot ? .declined) return r(e);
                window.addEventListener("CookiebotOnAccept", () => {
                    r(window.Cookiebot ? .consent)
                }, {
                    once: !0
                }), window.addEventListener("CookiebotOnDecline", () => {
                    r(window.Cookiebot ? .consent)
                }, {
                    once: !0
                })
            }), Za)
        }
    }, Ja = ze
});
export {
    It as a, ol as b, yp as c, wp as d, Ep as e, SG as f, EG as g, wE as h, TG as i, RG as j, Xa as k, Yd as l, ap as m, lp as n, Ja as o, RE as p, _n as q, PE as r
};