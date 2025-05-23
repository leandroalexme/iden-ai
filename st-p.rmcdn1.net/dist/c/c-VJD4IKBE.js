import {
    a as l,
    d as $
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-P5VDGSEO.js";
import {
    b as y,
    l as I
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-YZMXGORB.js";
import {
    b as p,
    e as w
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-Z4HHCED6.js";
import {
    v as G
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ZCYSW665.js";
import {
    j as x,
    k as P
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-QXKVEKVP.js";
import {
    c as h
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-YNQJOZVU.js";
import {
    D as r,
    E as n,
    F as u
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-6YK6Y3LS.js";
import {
    a as v
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-X2AVVSDG.js";
import {
    b as f,
    c as L
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-LURZCKUX.js";
import {
    a as c,
    d as B
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";

function T({
    url: i,
    label: a,
    color: o = "white"
}) {
    let [s, e] = (0, S.useState)(!1);
    return r(p, {
        onMouseEnter: () => e(!0),
        onMouseLeave: () => e(!1),
        as: "a",
        href: i,
        color: s ? "orange" : o,
        fontFamily: "Graphik",
        fontWeight: 400,
        fontSize: 16,
        letterSpacing: -.04,
        lineHeight: "24px",
        display: "inline-block",
        textDecoration: "none",
        fontStyle: "normal",
        onClick: t => {
            t.preventDefault();
            let g = a.toLowerCase().replace(/[ ]/gim, "_").replace(/[().]/gim, "");
            y.sendEvent(`rm_footer_${g}`), window.location.href = i
        },
        children: a
    })
}

function m({
    items: i,
    width: a,
    title: o,
    isMobile: s,
    linkColor: e = "white",
    listTitleColor: t = "darkGray"
}) {
    return n(l, {
        width: a,
        children: [r(l, {
            borderBottom: "1px solid rgba(128, 128, 128, 0.24)",
            paddingBottom: "1.5rm",
            marginBottom: "1.5rm",
            children: r(p, {
                fontFamily: "Graphik",
                fontWeight: 400,
                fontSize: 16,
                letterSpacing: -.04,
                lineHeight: "24px",
                color: t,
                fontStyle: "normal",
                children: o
            })
        }), r(l, { ...i.length > 1 && !s ? {
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between"
            } : {},
            children: i.map((g, d) => r(l, {
                marginBottom: s && g.mobileSeparator ? 36 : void 0,
                children: g.items.map((b, C) => r(l, {
                    marginRight: i.length - 1 === d && !s ? 30 : void 0,
                    children: r(T, {
                        color: e,
                        url: b.url,
                        label: b.label
                    })
                }, `ul-${d}-li-${C}`))
            }, `ul-${d}`))
        })]
    })
}
var S, k = c(() => {
    "use strict";
    $();
    w();
    S = B(v());
    I();
    u()
});

function Y({
    isFullSize: i = !1,
    linkColor: a,
    listTitleColor: o = "darkGray",
    style: s
}) {
    let e = f.readymag_host,
        t = !i;
    return n(l, {
        backgroundColor: "rgb(40, 40, 40)",
        height: "100%",
        width: "100%",
        css: h `
        ${s}
      `,
        children: [r("style", {
            dangerouslySetInnerHTML: {
                __html: F
            }
        }), n(l, {
            margin: "0 auto",
            width: "100%",
            maxWidth: t ? "none" : 1024,
            height: "100%",
            padding: t ? "36px 20px 36px" : "58px 20px 36px",
            children: [n(l, {
                alignItems: "flex-start",
                justifyContent: "space-between",
                display: t ? "block" : "flex",
                children: [r(m, {
                    linkColor: a,
                    listTitleColor: o,
                    title: "company",
                    isMobile: t,
                    width: t ? "100%" : 185,
                    items: [{
                        mobileSeparator: !0,
                        items: [{
                            label: "about",
                            url: `${e}/about/`
                        }, {
                            label: "we are hiring",
                            url: `${e}/readymag/we-are-hiring/`
                        }, {
                            label: "reviews",
                            url: `${e}/reviews/`
                        }, {
                            label: "terms of service",
                            url: `${e}/readymag/terms-and-privacy/`
                        }, {
                            label: "privacy policy",
                            url: `${e}/readymag/terms-and-privacy/2/`
                        }, {
                            label: "cookie policy",
                            url: `${e}/readymag/terms-and-privacy/cookie_policy/`
                        }]
                    }]
                }), r(m, {
                    linkColor: a,
                    listTitleColor: o,
                    title: "product",
                    isMobile: t,
                    width: t ? "100%" : 185,
                    items: [{
                        mobileSeparator: !0,
                        items: [{
                            label: "pricing",
                            url: `${e}/pricing`
                        }, {
                            label: "templates",
                            url: `${e}/templates`
                        }, {
                            label: "product updates",
                            url: "https://blog.readymag.com/tag/updates/"
                        }, {
                            label: "affiliate program",
                            url: "https://readymag.com/affiliate-program"
                        }, {
                            label: "referral program",
                            url: `${e}/referral/`
                        }, {
                            label: "npo discount",
                            url: `${e}/npo/`
                        }, {
                            label: "integrations",
                            url: "https://readymag.com/readymag/integrations/"
                        }, {
                            label: "forum",
                            url: "https://forum.readymag.com/"
                        }, {
                            label: "status",
                            url: "https://status.readymag.com/"
                        }, {
                            label: "help",
                            url: "https://help.readymag.com/"
                        }]
                    }]
                }), r(m, {
                    linkColor: a,
                    listTitleColor: o,
                    title: "case studies",
                    isMobile: t,
                    width: t ? "100%" : 185,
                    items: [{
                        mobileSeparator: !0,
                        items: [{
                            label: "examples",
                            url: `${e}/examples`
                        }, {
                            label: "freelancers",
                            url: `${e}/no-code-website-builder-designers`
                        }, {
                            label: "agencies",
                            url: `${e}/studios`
                        }, {
                            label: "students",
                            url: `${e}/students`
                        }, {
                            label: "businesses",
                            url: `${e}/enterprise`
                        }, {
                            label: "portfolios",
                            url: `${e}/portfolio`
                        }, {
                            label: "presentations",
                            url: `${e}/presentations`
                        }, {
                            label: "customer stories",
                            url: `${e}/customers/main`
                        }]
                    }]
                }), r(m, {
                    linkColor: a,
                    listTitleColor: o,
                    title: "editorials",
                    isMobile: t,
                    width: t ? "100%" : 185,
                    items: [{
                        mobileSeparator: !0,
                        items: [{
                            label: "all editorials",
                            url: `${e}/special-projects/`
                        }, {
                            label: "designing women",
                            url: `${e}/designingwomen`
                        }, {
                            label: "navigating career",
                            url: `${e}/readymag/navigating-design-career/`
                        }, {
                            label: "collaboration report",
                            url: `${e}/readymag/design-collaboration-report/`
                        }, {
                            label: "design almanac",
                            url: `${e}/almanac`
                        }, {
                            label: "design stories",
                            url: `${e}/designstories`
                        }, {
                            label: "websites of the year",
                            url: `${e}/websites-of-the-year/`
                        }]
                    }]
                }), r(m, {
                    linkColor: a,
                    listTitleColor: o,
                    title: "resources",
                    isMobile: t,
                    width: t ? "100%" : 185,
                    items: [{
                        mobileSeparator: !0,
                        items: [{
                            label: "blog",
                            url: "https://blog.readymag.com"
                        }, {
                            label: "newsletter",
                            url: "https://readymag.com/subscribe"
                        }, {
                            label: "readymag experts",
                            url: "https://contra.com/readymag"
                        }, {
                            label: "instagram",
                            url: "https://instagram.com/readymag/"
                        }, {
                            label: "threads",
                            url: "https://threads.net/@readymag"
                        }, {
                            label: "youtube",
                            url: "https://www.youtube.com/@Readymag"
                        }, {
                            label: "tiktok",
                            url: "https://tiktok.com/@readymag"
                        }, {
                            label: "linkedin",
                            url: "https://www.linkedin.com/company/readymag/"
                        }, {
                            label: "are.na",
                            url: "https://are.na/readymag"
                        }]
                    }]
                })]
            }), r(l, {
                alignItems: "flex-start",
                display: t ? "block" : "flex",
                children: r(l, {
                    width: t ? "100%" : 252,
                    children: n(p, {
                        fontFamily: "Graphik",
                        color: o,
                        fontWeight: 400,
                        fontSize: 12,
                        letterSpacing: -.04,
                        lineHeight: t ? "1" : "24px",
                        children: ["\xA9 ", new Date().getFullYear(), " Readymag Inc."]
                    })
                })
            })]
        })]
    })
}
var F, M = c(() => {
    "use strict";
    $();
    w();
    G();
    P();
    L();
    k();
    u();
    F = x(`
  @font-face {
    font-family: "Graphik";
    src:  url("https://c-p.rmcdn1.net/hosted-fonts/typetoday/GraphikLC-Regular-Web.woff2") format("woff2"),
          url("https://c-p.rmcdn1.net/hosted-fonts/typetoday/GraphikLC-Regular-Web.woff") format("woff");
    font-style: normal;
    font-weight: 400;
  }
`)
});
export {
    Y as a, M as b
};