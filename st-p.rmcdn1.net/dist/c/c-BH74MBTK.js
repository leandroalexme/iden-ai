import {
    a as o,
    b as c
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ESPTCIFT.js";
import {
    c as p
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-LURZCKUX.js";
import {
    a as i
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";
var l, P, d, $, f, j, x, h, v, y, w, C, E, I, T, m = i(() => {
    "use strict";
    c();
    p();
    l = e => o.get(`/api/projects/${e}`), P = e => o.get(`/api/magFullById/${e}`), d = (e, t) => o.post(`/api/publish/${e}${t?"?isSharedAsTemplate=true":""}`), $ = e => o.post(`/api/mag/${e}/revert-version`), f = e => o.post(`/api/unpublish/${e}`), j = (e, t, r) => o.patch(`/api/mag/${e}?skipChanged=${r}`, t), x = e => o.get(`/api/readymag/${e}`), h = ({
        numId: e,
        isPrivate: t = !1,
        isPrivatePages: r = !1,
        password: n,
        isProjectEmailPrivate: s = {}
    }) => {
        let a = {
            is_private: t,
            isPrivatePages: r
        };
        return n !== void 0 && (a.pass = n), Object.keys(s).length && (a.isProjectEmailPrivate = s), o.post(`/api/mag/privacy/${e}`, a)
    }, v = e => o.get(`/api/mag/fbcache/${e}`), y = (e, t, r = "default") => o.post(`/api/mag${r!=="default"?`/${r}`:""}/opts/${e}`, t), w = (e, t) => o.get(`/api/makepdf/${e}`, t ? {
        pages: t
    } : void 0), C = (e, t) => o.get(`/api/mag/${e}/export`, t), E = (e, t) => o.post("/api/readymag/authorize", { ...e,
        num_id: t
    }), I = e => o.post(`/api/countview/${e}`), T = (e, t) => o.post(`/api/iframe-embed/${e}/${t}`)
});
export {
    l as a, P as b, d as c, $ as d, f as e, j as f, x as g, h, v as i, y as j, w as k, C as l, E as m, I as n, T as o, m as p
};