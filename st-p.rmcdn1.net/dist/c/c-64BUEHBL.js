var h = Object.create;
var e = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var j = Object.getOwnPropertyNames;
var k = Object.getPrototypeOf,
    l = Object.prototype.hasOwnProperty;
var m = (b, a, c) => a in b ? e(b, a, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: c
}) : b[a] = c;
var n = (b, a) => () => (b && (a = b(b = 0)), a);
var o = (b, a) => () => (a || b((a = {
        exports: {}
    }).exports, a), a.exports),
    p = (b, a) => {
        for (var c in a) e(b, c, {
            get: a[c],
            enumerable: !0
        })
    },
    g = (b, a, c, f) => {
        if (a && typeof a == "object" || typeof a == "function")
            for (let d of j(a)) !l.call(b, d) && d !== c && e(b, d, {
                get: () => a[d],
                enumerable: !(f = i(a, d)) || f.enumerable
            });
        return b
    };
var q = (b, a, c) => (c = b != null ? h(k(b)) : {}, g(a || !b || !b.__esModule ? e(c, "default", {
        value: b,
        enumerable: !0
    }) : c, b)),
    r = b => g(e({}, "__esModule", {
        value: !0
    }), b);
var s = (b, a, c) => m(b, typeof a != "symbol" ? a + "" : a, c);
export {
    n as a, o as b, p as c, q as d, r as e, s as f
};