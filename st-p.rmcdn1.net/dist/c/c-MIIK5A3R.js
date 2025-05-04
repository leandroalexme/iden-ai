import {
    b as Ht,
    d as Hu
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";
var Dt = Ht((ao, so) => {
    "use strict";
    (function(S, K) {
        typeof ao == "object" && typeof so < "u" ? so.exports = K() : typeof define == "function" && define.amd ? define(K) : (S = S || self, S.CodeMirror = K())
    })(ao, function() {
        "use strict";
        var S = navigator.userAgent,
            K = navigator.platform,
            j = /gecko\/\d/i.test(S),
            ue = /MSIE \d/.test(S),
            re = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(S),
            ce = /Edge\/(\d+)/.exec(S),
            X = ue || re || ce,
            E = X && (ue ? document.documentMode || 6 : +(ce || re)[1]),
            W = !ce && /WebKit\//.test(S),
            R = W && /Qt\/\d+\.\d+/.test(S),
            C = !ce && /Chrome\//.test(S),
            N = /Opera\//.test(S),
            G = /Apple Computer/.test(navigator.vendor),
            le = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(S),
            te = /PhantomJS/.test(S),
            ie = G && (/Mobile\/\w+/.test(S) || navigator.maxTouchPoints > 2),
            D = /Android/.test(S),
            T = ie || D || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(S),
            c = ie || /Mac/.test(K),
            m = /\bCrOS\b/.test(S),
            y = /win/i.test(K),
            b = N && S.match(/Version\/(\d*\.\d*)/);
        b && (b = Number(b[1])), b && b >= 15 && (N = !1, W = !0);
        var L = c && (R || N && (b == null || b < 12.11)),
            F = j || X && E >= 9;

        function A(e) {
            return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
        }
        var O = function(e, t) {
            var n = e.className,
                r = A(t).exec(n);
            if (r) {
                var i = n.slice(r.index + r[0].length);
                e.className = n.slice(0, r.index) + (i ? r[1] + i : "")
            }
        };

        function Z(e) {
            for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
            return e
        }

        function k(e, t) {
            return Z(e).appendChild(t)
        }

        function p(e, t, n, r) {
            var i = document.createElement(e);
            if (n && (i.className = n), r && (i.style.cssText = r), typeof t == "string") i.appendChild(document.createTextNode(t));
            else if (t)
                for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
            return i
        }

        function h(e, t, n, r) {
            var i = p(e, t, n, r);
            return i.setAttribute("role", "presentation"), i
        }
        var I;
        document.createRange ? I = function(e, t, n, r) {
            var i = document.createRange();
            return i.setEnd(r || e, n), i.setStart(e, t), i
        } : I = function(e, t, n) {
            var r = document.body.createTextRange();
            try {
                r.moveToElementText(e.parentNode)
            } catch {
                return r
            }
            return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r
        };

        function V(e, t) {
            if (t.nodeType == 3 && (t = t.parentNode), e.contains) return e.contains(t);
            do
                if (t.nodeType == 11 && (t = t.host), t == e) return !0; while (t = t.parentNode)
        }

        function de() {
            var e;
            try {
                e = document.activeElement
            } catch {
                e = document.body || null
            }
            for (; e && e.shadowRoot && e.shadowRoot.activeElement;) e = e.shadowRoot.activeElement;
            return e
        }

        function Ce(e, t) {
            var n = e.className;
            A(t).test(n) || (e.className += (n ? " " : "") + t)
        }

        function ze(e, t) {
            for (var n = e.split(" "), r = 0; r < n.length; r++) n[r] && !A(n[r]).test(t) && (t += " " + n[r]);
            return t
        }
        var Ne = function(e) {
            e.select()
        };
        ie ? Ne = function(e) {
            e.selectionStart = 0, e.selectionEnd = e.value.length
        } : X && (Ne = function(e) {
            try {
                e.select()
            } catch {}
        });

        function Ie(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return function() {
                return e.apply(null, t)
            }
        }

        function Oe(e, t, n) {
            t || (t = {});
            for (var r in e) e.hasOwnProperty(r) && (n !== !1 || !t.hasOwnProperty(r)) && (t[r] = e[r]);
            return t
        }

        function Fe(e, t, n, r, i) {
            t == null && (t = e.search(/[^\s\u00a0]/), t == -1 && (t = e.length));
            for (var o = r || 0, l = i || 0;;) {
                var a = e.indexOf("	", o);
                if (a < 0 || a >= t) return l + (t - o);
                l += a - o, l += n - l % n, o = a + 1
            }
        }
        var Be = function() {
            this.id = null, this.f = null, this.time = 0, this.handler = Ie(this.onTimeout, this)
        };
        Be.prototype.onTimeout = function(e) {
            e.id = 0, e.time <= +new Date ? e.f() : setTimeout(e.handler, e.time - +new Date)
        }, Be.prototype.set = function(e, t) {
            this.f = t;
            var n = +new Date + e;
            (!this.id || n < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e), this.time = n)
        };

        function ae(e, t) {
            for (var n = 0; n < e.length; ++n)
                if (e[n] == t) return n;
            return -1
        }
        var pe = 50,
            be = {
                toString: function() {
                    return "CodeMirror.Pass"
                }
            },
            Le = {
                scroll: !1
            },
            xe = {
                origin: "*mouse"
            },
            me = {
                origin: "+move"
            };

        function je(e, t, n) {
            for (var r = 0, i = 0;;) {
                var o = e.indexOf("	", r);
                o == -1 && (o = e.length);
                var l = o - r;
                if (o == e.length || i + l >= t) return r + Math.min(l, t - i);
                if (i += o - r, i += n - i % n, r = o + 1, i >= t) return r
            }
        }
        var Pt = [""];

        function rr(e) {
            for (; Pt.length <= e;) Pt.push(we(Pt) + " ");
            return Pt[e]
        }

        function we(e) {
            return e[e.length - 1]
        }

        function Te(e, t) {
            for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
            return n
        }

        function Ze(e, t, n) {
            for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i;) r++;
            e.splice(r, 0, t)
        }

        function xt() {}

        function Nt(e, t) {
            var n;
            return Object.create ? n = Object.create(e) : (xt.prototype = e, n = new xt), t && Oe(t, n), n
        }
        var pr = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

        function Pe(e) {
            return /\w/.test(e) || e > "\x80" && (e.toUpperCase() != e.toLowerCase() || pr.test(e))
        }

        function M(e, t) {
            return t ? t.source.indexOf("\\w") > -1 && Pe(e) ? !0 : t.test(e) : Pe(e)
        }

        function Y(e) {
            for (var t in e)
                if (e.hasOwnProperty(t) && e[t]) return !1;
            return !0
        }
        var z = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

        function ke(e) {
            return e.charCodeAt(0) >= 768 && z.test(e)
        }

        function at(e, t, n) {
            for (;
                (n < 0 ? t > 0 : t < e.length) && ke(e.charAt(t));) t += n;
            return t
        }

        function It(e, t, n) {
            for (var r = t > n ? -1 : 1;;) {
                if (t == n) return t;
                var i = (t + n) / 2,
                    o = r < 0 ? Math.ceil(i) : Math.floor(i);
                if (o == t) return e(o) ? t : n;
                e(o) ? n = o : t = o + r
            }
        }

        function pi(e, t, n, r) {
            if (!e) return r(t, n, "ltr", 0);
            for (var i = !1, o = 0; o < e.length; ++o) {
                var l = e[o];
                (l.from < n && l.to > t || t == n && l.to == t) && (r(Math.max(l.from, t), Math.min(l.to, n), l.level == 1 ? "rtl" : "ltr", o), i = !0)
            }
            i || r(t, n, "ltr")
        }
        var kt = null;

        function Re(e, t, n) {
            var r;
            kt = null;
            for (var i = 0; i < e.length; ++i) {
                var o = e[i];
                if (o.from < t && o.to > t) return i;
                o.to == t && (o.from != o.to && n == "before" ? r = i : kt = i), o.from == t && (o.from != o.to && n != "before" ? r = i : kt = i)
            }
            return r ? ? kt
        }
        var vr = function() {
            var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
                t = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";

            function n(u) {
                return u <= 247 ? e.charAt(u) : 1424 <= u && u <= 1524 ? "R" : 1536 <= u && u <= 1785 ? t.charAt(u - 1536) : 1774 <= u && u <= 2220 ? "r" : 8192 <= u && u <= 8203 ? "w" : u == 8204 ? "b" : "L"
            }
            var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                i = /[stwN]/,
                o = /[LRr]/,
                l = /[Lb1n]/,
                a = /[1n]/;

            function s(u, d, v) {
                this.level = u, this.from = d, this.to = v
            }
            return function(u, d) {
                var v = d == "ltr" ? "L" : "R";
                if (u.length == 0 || d == "ltr" && !r.test(u)) return !1;
                for (var x = u.length, w = [], P = 0; P < x; ++P) w.push(n(u.charCodeAt(P)));
                for (var H = 0, q = v; H < x; ++H) {
                    var J = w[H];
                    J == "m" ? w[H] = q : q = J
                }
                for (var ee = 0, Q = v; ee < x; ++ee) {
                    var ne = w[ee];
                    ne == "1" && Q == "r" ? w[ee] = "n" : o.test(ne) && (Q = ne, ne == "r" && (w[ee] = "R"))
                }
                for (var fe = 1, se = w[0]; fe < x - 1; ++fe) {
                    var ye = w[fe];
                    ye == "+" && se == "1" && w[fe + 1] == "1" ? w[fe] = "1" : ye == "," && se == w[fe + 1] && (se == "1" || se == "n") && (w[fe] = se), se = ye
                }
                for (var We = 0; We < x; ++We) {
                    var $e = w[We];
                    if ($e == ",") w[We] = "N";
                    else if ($e == "%") {
                        var He = void 0;
                        for (He = We + 1; He < x && w[He] == "%"; ++He);
                        for (var wt = We && w[We - 1] == "!" || He < x && w[He] == "1" ? "1" : "N", pt = We; pt < He; ++pt) w[pt] = wt;
                        We = He - 1
                    }
                }
                for (var qe = 0, vt = v; qe < x; ++qe) {
                    var rt = w[qe];
                    vt == "L" && rt == "1" ? w[qe] = "L" : o.test(rt) && (vt = rt)
                }
                for (var Ye = 0; Ye < x; ++Ye)
                    if (i.test(w[Ye])) {
                        var Xe = void 0;
                        for (Xe = Ye + 1; Xe < x && i.test(w[Xe]); ++Xe);
                        for (var Ue = (Ye ? w[Ye - 1] : v) == "L", gt = (Xe < x ? w[Xe] : v) == "L", Qr = Ue == gt ? Ue ? "L" : "R" : v, dr = Ye; dr < Xe; ++dr) w[dr] = Qr;
                        Ye = Xe - 1
                    }
                for (var lt = [], jt, et = 0; et < x;)
                    if (l.test(w[et])) {
                        var oo = et;
                        for (++et; et < x && l.test(w[et]); ++et);
                        lt.push(new s(0, oo, et))
                    } else {
                        var tr = et,
                            Tr = lt.length,
                            Mr = d == "rtl" ? 1 : 0;
                        for (++et; et < x && w[et] != "L"; ++et);
                        for (var ut = tr; ut < et;)
                            if (a.test(w[ut])) {
                                tr < ut && (lt.splice(Tr, 0, new s(1, tr, ut)), Tr += Mr);
                                var Vr = ut;
                                for (++ut; ut < et && a.test(w[ut]); ++ut);
                                lt.splice(Tr, 0, new s(2, Vr, ut)), Tr += Mr, tr = ut
                            } else ++ut;
                        tr < et && lt.splice(Tr, 0, new s(1, tr, et))
                    }
                return d == "ltr" && (lt[0].level == 1 && (jt = u.match(/^\s+/)) && (lt[0].from = jt[0].length, lt.unshift(new s(0, 0, jt[0].length))), we(lt).level == 1 && (jt = u.match(/\s+$/)) && (we(lt).to -= jt[0].length, lt.push(new s(0, x - jt[0].length, x)))), d == "rtl" ? lt.reverse() : lt
            }
        }();

        function mt(e, t) {
            var n = e.order;
            return n == null && (n = e.order = vr(e.text, t)), n
        }
        var Zt = [],
            he = function(e, t, n) {
                if (e.addEventListener) e.addEventListener(t, n, !1);
                else if (e.attachEvent) e.attachEvent("on" + t, n);
                else {
                    var r = e._handlers || (e._handlers = {});
                    r[t] = (r[t] || Zt).concat(n)
                }
            };

        function Ar(e, t) {
            return e._handlers && e._handlers[t] || Zt
        }

        function ft(e, t, n) {
            if (e.removeEventListener) e.removeEventListener(t, n, !1);
            else if (e.detachEvent) e.detachEvent("on" + t, n);
            else {
                var r = e._handlers,
                    i = r && r[t];
                if (i) {
                    var o = ae(i, n);
                    o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)))
                }
            }
        }

        function ve(e, t) {
            var n = Ar(e, t);
            if (n.length)
                for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) n[i].apply(null, r)
        }

        function Ge(e, t, n) {
            return typeof t == "string" && (t = {
                type: t,
                preventDefault: function() {
                    this.defaultPrevented = !0
                }
            }), ve(e, n || t.type, e, t), St(t) || t.codemirrorIgnore
        }

        function Nr(e) {
            var t = e._handlers && e._handlers.cursorActivity;
            if (t)
                for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) ae(n, t[r]) == -1 && n.push(t[r])
        }

        function tt(e, t) {
            return Ar(e, t).length > 0
        }

        function Rt(e) {
            e.prototype.on = function(t, n) {
                he(this, t, n)
            }, e.prototype.off = function(t, n) {
                ft(this, t, n)
            }
        }

        function nt(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        }

        function Or(e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
        }

        function St(e) {
            return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == !1
        }

        function gr(e) {
            nt(e), Or(e)
        }

        function nr(e) {
            return e.target || e.srcElement
        }

        function Fn(e) {
            var t = e.which;
            return t == null && (e.button & 1 ? t = 1 : e.button & 2 ? t = 3 : e.button & 4 && (t = 2)), c && e.ctrlKey && t == 1 && (t = 3), t
        }
        var $r = function() {
                if (X && E < 9) return !1;
                var e = p("div");
                return "draggable" in e || "dragDrop" in e
            }(),
            ct;

        function Bn(e) {
            if (ct == null) {
                var t = p("span", "\u200B");
                k(e, p("span", [t, document.createTextNode("x")])), e.firstChild.offsetHeight != 0 && (ct = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(X && E < 8))
            }
            var n = ct ? p("span", "\u200B") : p("span", "\xA0", null, "display: inline-block; width: 1px; margin-right: -1px");
            return n.setAttribute("cm-text", ""), n
        }
        var en;

        function Kt(e) {
            if (en != null) return en;
            var t = k(e, document.createTextNode("A\u062EA")),
                n = I(t, 0, 1).getBoundingClientRect(),
                r = I(t, 1, 2).getBoundingClientRect();
            return Z(e), !n || n.left == n.right ? !1 : en = r.right - n.right < 3
        }
        var tn = `

b`.split(/\n/).length != 3 ? function(e) {
                for (var t = 0, n = [], r = e.length; t <= r;) {
                    var i = e.indexOf(`
`, t);
                    i == -1 && (i = e.length);
                    var o = e.slice(t, e.charAt(i - 1) == "\r" ? i - 1 : i),
                        l = o.indexOf("\r");
                    l != -1 ? (n.push(o.slice(0, l)), t += l + 1) : (n.push(o), t = i + 1)
                }
                return n
            } : function(e) {
                return e.split(/\r\n?|\n/)
            },
            En = window.getSelection ? function(e) {
                try {
                    return e.selectionStart != e.selectionEnd
                } catch {
                    return !1
                }
            } : function(e) {
                var t;
                try {
                    t = e.ownerDocument.selection.createRange()
                } catch {}
                return !t || t.parentElement() != e ? !1 : t.compareEndPoints("StartToEnd", t) != 0
            },
            Hn = function() {
                var e = p("div");
                return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), typeof e.oncopy == "function")
            }(),
            rn = null;

        function ir(e) {
            if (rn != null) return rn;
            var t = k(e, p("span", "x")),
                n = t.getBoundingClientRect(),
                r = I(t, 0, 1).getBoundingClientRect();
            return rn = Math.abs(n.left - r.left) > 1
        }
        var Ot = {},
            Ct = {};

        function In(e, t) {
            arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Ot[e] = t
        }

        function Jt(e, t) {
            Ct[e] = t
        }

        function Dr(e) {
            if (typeof e == "string" && Ct.hasOwnProperty(e)) e = Ct[e];
            else if (e && typeof e.name == "string" && Ct.hasOwnProperty(e.name)) {
                var t = Ct[e.name];
                typeof t == "string" && (t = {
                    name: t
                }), e = Nt(t, e), e.name = t.name
            } else {
                if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Dr("application/xml");
                if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Dr("application/json")
            }
            return typeof e == "string" ? {
                name: e
            } : e || {
                name: "null"
            }
        }

        function Pr(e, t) {
            t = Dr(t);
            var n = Ot[t.name];
            if (!n) return Pr(e, "text/plain");
            var r = n(e, t);
            if (Wt.hasOwnProperty(t.name)) {
                var i = Wt[t.name];
                for (var o in i) i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = i[o])
            }
            if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps)
                for (var l in t.modeProps) r[l] = t.modeProps[l];
            return r
        }
        var Wt = {};

        function zt(e, t) {
            var n = Wt.hasOwnProperty(e) ? Wt[e] : Wt[e] = {};
            Oe(t, n)
        }

        function Lt(e, t) {
            if (t === !0) return t;
            if (e.copyState) return e.copyState(t);
            var n = {};
            for (var r in t) {
                var i = t[r];
                i instanceof Array && (i = i.concat([])), n[r] = i
            }
            return n
        }

        function nn(e, t) {
            for (var n; e.innerMode && (n = e.innerMode(t), !(!n || n.mode == e));) t = n.state, e = n.mode;
            return n || {
                mode: e,
                state: t
            }
        }

        function on(e, t, n) {
            return e.startState ? e.startState(t, n) : !0
        }
        var Ke = function(e, t, n) {
            this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n
        };
        Ke.prototype.eol = function() {
            return this.pos >= this.string.length
        }, Ke.prototype.sol = function() {
            return this.pos == this.lineStart
        }, Ke.prototype.peek = function() {
            return this.string.charAt(this.pos) || void 0
        }, Ke.prototype.next = function() {
            if (this.pos < this.string.length) return this.string.charAt(this.pos++)
        }, Ke.prototype.eat = function(e) {
            var t = this.string.charAt(this.pos),
                n;
            if (typeof e == "string" ? n = t == e : n = t && (e.test ? e.test(t) : e(t)), n) return ++this.pos, t
        }, Ke.prototype.eatWhile = function(e) {
            for (var t = this.pos; this.eat(e););
            return this.pos > t
        }, Ke.prototype.eatSpace = function() {
            for (var e = this.pos;
                /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
            return this.pos > e
        }, Ke.prototype.skipToEnd = function() {
            this.pos = this.string.length
        }, Ke.prototype.skipTo = function(e) {
            var t = this.string.indexOf(e, this.pos);
            if (t > -1) return this.pos = t, !0
        }, Ke.prototype.backUp = function(e) {
            this.pos -= e
        }, Ke.prototype.column = function() {
            return this.lastColumnPos < this.start && (this.lastColumnValue = Fe(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? Fe(this.string, this.lineStart, this.tabSize) : 0)
        }, Ke.prototype.indentation = function() {
            return Fe(this.string, null, this.tabSize) - (this.lineStart ? Fe(this.string, this.lineStart, this.tabSize) : 0)
        }, Ke.prototype.match = function(e, t, n) {
            if (typeof e == "string") {
                var r = function(l) {
                        return n ? l.toLowerCase() : l
                    },
                    i = this.string.substr(this.pos, e.length);
                if (r(i) == r(e)) return t !== !1 && (this.pos += e.length), !0
            } else {
                var o = this.string.slice(this.pos).match(e);
                return o && o.index > 0 ? null : (o && t !== !1 && (this.pos += o[0].length), o)
            }
        }, Ke.prototype.current = function() {
            return this.string.slice(this.start, this.pos)
        }, Ke.prototype.hideFirstChars = function(e, t) {
            this.lineStart += e;
            try {
                return t()
            } finally {
                this.lineStart -= e
            }
        }, Ke.prototype.lookAhead = function(e) {
            var t = this.lineOracle;
            return t && t.lookAhead(e)
        }, Ke.prototype.baseToken = function() {
            var e = this.lineOracle;
            return e && e.baseToken(this.pos)
        };

        function oe(e, t) {
            if (t -= e.first, t < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
            for (var n = e; !n.lines;)
                for (var r = 0;; ++r) {
                    var i = n.children[r],
                        o = i.chunkSize();
                    if (t < o) {
                        n = i;
                        break
                    }
                    t -= o
                }
            return n.lines[t]
        }

        function Ut(e, t, n) {
            var r = [],
                i = t.line;
            return e.iter(t.line, n.line + 1, function(o) {
                var l = o.text;
                i == n.line && (l = l.slice(0, n.ch)), i == t.line && (l = l.slice(t.ch)), r.push(l), ++i
            }), r
        }

        function ln(e, t, n) {
            var r = [];
            return e.iter(t, n, function(i) {
                r.push(i.text)
            }), r
        }

        function yt(e, t) {
            var n = t - e.height;
            if (n)
                for (var r = e; r; r = r.parent) r.height += n
        }

        function Me(e) {
            if (e.parent == null) return null;
            for (var t = e.parent, n = ae(t.lines, e), r = t.parent; r; t = r, r = r.parent)
                for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
            return n + t.first
        }

        function _t(e, t) {
            var n = e.first;
            e: do {
                for (var r = 0; r < e.children.length; ++r) {
                    var i = e.children[r],
                        o = i.height;
                    if (t < o) {
                        e = i;
                        continue e
                    }
                    t -= o, n += i.chunkSize()
                }
                return n
            } while (!e.lines);
            for (var l = 0; l < e.lines.length; ++l) {
                var a = e.lines[l],
                    s = a.height;
                if (t < s) break;
                t -= s
            }
            return n + l
        }

        function mr(e, t) {
            return t >= e.first && t < e.first + e.size
        }

        function an(e, t) {
            return String(e.lineNumberFormatter(t + e.firstLineNumber))
        }

        function U(e, t, n) {
            if (n === void 0 && (n = null), !(this instanceof U)) return new U(e, t, n);
            this.line = e, this.ch = t, this.sticky = n
        }

        function f(e, t) {
            return e.line - t.line || e.ch - t.ch
        }

        function g(e, t) {
            return e.sticky == t.sticky && f(e, t) == 0
        }

        function B(e) {
            return U(e.line, e.ch)
        }

        function _(e, t) {
            return f(e, t) < 0 ? t : e
        }

        function ge(e, t) {
            return f(e, t) < 0 ? e : t
        }

        function Se(e, t) {
            return Math.max(e.first, Math.min(t, e.first + e.size - 1))
        }

        function $(e, t) {
            if (t.line < e.first) return U(e.first, 0);
            var n = e.first + e.size - 1;
            return t.line > n ? U(n, oe(e, n).text.length) : it(t, oe(e, t.line).text.length)
        }

        function it(e, t) {
            var n = e.ch;
            return n == null || n > t ? U(e.line, t) : n < 0 ? U(e.line, 0) : e
        }

        function Tt(e, t) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = $(e, t[r]);
            return n
        }
        var Wr = function(e, t) {
                this.state = e, this.lookAhead = t
            },
            Gt = function(e, t, n, r) {
                this.state = t, this.doc = e, this.line = n, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1
            };
        Gt.prototype.lookAhead = function(e) {
            var t = this.doc.getLine(this.line + e);
            return t != null && e > this.maxLookAhead && (this.maxLookAhead = e), t
        }, Gt.prototype.baseToken = function(e) {
            if (!this.baseTokens) return null;
            for (; this.baseTokens[this.baseTokenPos] <= e;) this.baseTokenPos += 2;
            var t = this.baseTokens[this.baseTokenPos + 1];
            return {
                type: t && t.replace(/( |^)overlay .*/, ""),
                size: this.baseTokens[this.baseTokenPos] - e
            }
        }, Gt.prototype.nextLine = function() {
            this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
        }, Gt.fromSaved = function(e, t, n) {
            return t instanceof Wr ? new Gt(e, Lt(e.mode, t.state), n, t.lookAhead) : new Gt(e, Lt(e.mode, t), n)
        }, Gt.prototype.save = function(e) {
            var t = e !== !1 ? Lt(this.doc.mode, this.state) : this.state;
            return this.maxLookAhead > 0 ? new Wr(t, this.maxLookAhead) : t
        };

        function po(e, t, n, r) {
            var i = [e.state.modeGen],
                o = {};
            wo(e, t.text, e.doc.mode, n, function(u, d) {
                return i.push(u, d)
            }, o, r);
            for (var l = n.state, a = function(u) {
                    n.baseTokens = i;
                    var d = e.state.overlays[u],
                        v = 1,
                        x = 0;
                    n.state = !0, wo(e, t.text, d.mode, n, function(w, P) {
                        for (var H = v; x < w;) {
                            var q = i[v];
                            q > w && i.splice(v, 1, w, i[v + 1], q), v += 2, x = Math.min(w, q)
                        }
                        if (P)
                            if (d.opaque) i.splice(H, v - H, w, "overlay " + P), v = H + 2;
                            else
                                for (; H < v; H += 2) {
                                    var J = i[H + 1];
                                    i[H + 1] = (J ? J + " " : "") + "overlay " + P
                                }
                    }, o), n.state = l, n.baseTokens = null, n.baseTokenPos = 1
                }, s = 0; s < e.state.overlays.length; ++s) a(s);
            return {
                styles: i,
                classes: o.bgClass || o.textClass ? o : null
            }
        }

        function vo(e, t, n) {
            if (!t.styles || t.styles[0] != e.state.modeGen) {
                var r = sn(e, Me(t)),
                    i = t.text.length > e.options.maxHighlightLength && Lt(e.doc.mode, r.state),
                    o = po(e, t, r);
                i && (r.state = i), t.stateAfter = r.save(!i), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))
            }
            return t.styles
        }

        function sn(e, t, n) {
            var r = e.doc,
                i = e.display;
            if (!r.mode.startState) return new Gt(r, !0, t);
            var o = Ra(e, t, n),
                l = o > r.first && oe(r, o - 1).stateAfter,
                a = l ? Gt.fromSaved(r, l, o) : new Gt(r, on(r.mode), o);
            return r.iter(o, t, function(s) {
                vi(e, s.text, a);
                var u = a.line;
                s.stateAfter = u == t - 1 || u % 5 == 0 || u >= i.viewFrom && u < i.viewTo ? a.save() : null, a.nextLine()
            }), n && (r.modeFrontier = a.line), a
        }

        function vi(e, t, n, r) {
            var i = e.doc.mode,
                o = new Ke(t, e.options.tabSize, n);
            for (o.start = o.pos = r || 0, t == "" && go(i, n.state); !o.eol();) gi(i, o, n.state), o.start = o.pos
        }

        function go(e, t) {
            if (e.blankLine) return e.blankLine(t);
            if (e.innerMode) {
                var n = nn(e, t);
                if (n.mode.blankLine) return n.mode.blankLine(n.state)
            }
        }

        function gi(e, t, n, r) {
            for (var i = 0; i < 10; i++) {
                r && (r[0] = nn(e, n).mode);
                var o = e.token(t, n);
                if (t.pos > t.start) return o
            }
            throw new Error("Mode " + e.name + " failed to advance stream.")
        }
        var mo = function(e, t, n) {
            this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = n
        };

        function yo(e, t, n, r) {
            var i = e.doc,
                o = i.mode,
                l;
            t = $(i, t);
            var a = oe(i, t.line),
                s = sn(e, t.line, n),
                u = new Ke(a.text, e.options.tabSize, s),
                d;
            for (r && (d = []);
                (r || u.pos < t.ch) && !u.eol();) u.start = u.pos, l = gi(o, u, s.state), r && d.push(new mo(u, l, Lt(i.mode, s.state)));
            return r ? d : new mo(u, l, s.state)
        }

        function bo(e, t) {
            if (e)
                for (;;) {
                    var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                    if (!n) break;
                    e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                    var r = n[1] ? "bgClass" : "textClass";
                    t[r] == null ? t[r] = n[2] : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(t[r]) || (t[r] += " " + n[2])
                }
            return e
        }

        function wo(e, t, n, r, i, o, l) {
            var a = n.flattenSpans;
            a == null && (a = e.options.flattenSpans);
            var s = 0,
                u = null,
                d = new Ke(t, e.options.tabSize, r),
                v, x = e.options.addModeClass && [null];
            for (t == "" && bo(go(n, r.state), o); !d.eol();) {
                if (d.pos > e.options.maxHighlightLength ? (a = !1, l && vi(e, t, r, d.pos), d.pos = t.length, v = null) : v = bo(gi(n, d, r.state, x), o), x) {
                    var w = x[0].name;
                    w && (v = "m-" + (v ? w + " " + v : w))
                }
                if (!a || u != v) {
                    for (; s < d.start;) s = Math.min(d.start, s + 5e3), i(s, u);
                    u = v
                }
                d.start = d.pos
            }
            for (; s < d.pos;) {
                var P = Math.min(d.pos, s + 5e3);
                i(P, u), s = P
            }
        }

        function Ra(e, t, n) {
            for (var r, i, o = e.doc, l = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), a = t; a > l; --a) {
                if (a <= o.first) return o.first;
                var s = oe(o, a - 1),
                    u = s.stateAfter;
                if (u && (!n || a + (u instanceof Wr ? u.lookAhead : 0) <= o.modeFrontier)) return a;
                var d = Fe(s.text, null, e.options.tabSize);
                (i == null || r > d) && (i = a - 1, r = d)
            }
            return i
        }

        function Ka(e, t) {
            if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
                for (var n = e.first, r = t - 1; r > n; r--) {
                    var i = oe(e, r).stateAfter;
                    if (i && (!(i instanceof Wr) || r + i.lookAhead < t)) {
                        n = r + 1;
                        break
                    }
                }
                e.highlightFrontier = Math.min(e.highlightFrontier, n)
            }
        }
        var xo = !1,
            Qt = !1;

        function Ua() {
            xo = !0
        }

        function _a() {
            Qt = !0
        }

        function Rn(e, t, n) {
            this.marker = e, this.from = t, this.to = n
        }

        function un(e, t) {
            if (e)
                for (var n = 0; n < e.length; ++n) {
                    var r = e[n];
                    if (r.marker == t) return r
                }
        }

        function Ga(e, t) {
            for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r]);
            return n
        }

        function qa(e, t, n) {
            var r = n && window.WeakSet && (n.markedSpans || (n.markedSpans = new WeakSet));
            r && r.has(e.markedSpans) ? e.markedSpans.push(t) : (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], r && r.add(e.markedSpans)), t.marker.attachLine(e)
        }

        function Xa(e, t, n) {
            var r;
            if (e)
                for (var i = 0; i < e.length; ++i) {
                    var o = e[i],
                        l = o.marker,
                        a = o.from == null || (l.inclusiveLeft ? o.from <= t : o.from < t);
                    if (a || o.from == t && l.type == "bookmark" && (!n || !o.marker.insertLeft)) {
                        var s = o.to == null || (l.inclusiveRight ? o.to >= t : o.to > t);
                        (r || (r = [])).push(new Rn(l, o.from, s ? null : o.to))
                    }
                }
            return r
        }

        function Ya(e, t, n) {
            var r;
            if (e)
                for (var i = 0; i < e.length; ++i) {
                    var o = e[i],
                        l = o.marker,
                        a = o.to == null || (l.inclusiveRight ? o.to >= t : o.to > t);
                    if (a || o.from == t && l.type == "bookmark" && (!n || o.marker.insertLeft)) {
                        var s = o.from == null || (l.inclusiveLeft ? o.from <= t : o.from < t);
                        (r || (r = [])).push(new Rn(l, s ? null : o.from - t, o.to == null ? null : o.to - t))
                    }
                }
            return r
        }

        function mi(e, t) {
            if (t.full) return null;
            var n = mr(e, t.from.line) && oe(e, t.from.line).markedSpans,
                r = mr(e, t.to.line) && oe(e, t.to.line).markedSpans;
            if (!n && !r) return null;
            var i = t.from.ch,
                o = t.to.ch,
                l = f(t.from, t.to) == 0,
                a = Xa(n, i, l),
                s = Ya(r, o, l),
                u = t.text.length == 1,
                d = we(t.text).length + (u ? i : 0);
            if (a)
                for (var v = 0; v < a.length; ++v) {
                    var x = a[v];
                    if (x.to == null) {
                        var w = un(s, x.marker);
                        w ? u && (x.to = w.to == null ? null : w.to + d) : x.to = i
                    }
                }
            if (s)
                for (var P = 0; P < s.length; ++P) {
                    var H = s[P];
                    if (H.to != null && (H.to += d), H.from == null) {
                        var q = un(a, H.marker);
                        q || (H.from = d, u && (a || (a = [])).push(H))
                    } else H.from += d, u && (a || (a = [])).push(H)
                }
            a && (a = ko(a)), s && s != a && (s = ko(s));
            var J = [a];
            if (!u) {
                var ee = t.text.length - 2,
                    Q;
                if (ee > 0 && a)
                    for (var ne = 0; ne < a.length; ++ne) a[ne].to == null && (Q || (Q = [])).push(new Rn(a[ne].marker, null, null));
                for (var fe = 0; fe < ee; ++fe) J.push(Q);
                J.push(s)
            }
            return J
        }

        function ko(e) {
            for (var t = 0; t < e.length; ++t) {
                var n = e[t];
                n.from != null && n.from == n.to && n.marker.clearWhenEmpty !== !1 && e.splice(t--, 1)
            }
            return e.length ? e : null
        }

        function ja(e, t, n) {
            var r = null;
            if (e.iter(t.line, n.line + 1, function(w) {
                    if (w.markedSpans)
                        for (var P = 0; P < w.markedSpans.length; ++P) {
                            var H = w.markedSpans[P].marker;
                            H.readOnly && (!r || ae(r, H) == -1) && (r || (r = [])).push(H)
                        }
                }), !r) return null;
            for (var i = [{
                    from: t,
                    to: n
                }], o = 0; o < r.length; ++o)
                for (var l = r[o], a = l.find(0), s = 0; s < i.length; ++s) {
                    var u = i[s];
                    if (!(f(u.to, a.from) < 0 || f(u.from, a.to) > 0)) {
                        var d = [s, 1],
                            v = f(u.from, a.from),
                            x = f(u.to, a.to);
                        (v < 0 || !l.inclusiveLeft && !v) && d.push({
                            from: u.from,
                            to: a.from
                        }), (x > 0 || !l.inclusiveRight && !x) && d.push({
                            from: a.to,
                            to: u.to
                        }), i.splice.apply(i, d), s += d.length - 3
                    }
                }
            return i
        }

        function So(e) {
            var t = e.markedSpans;
            if (t) {
                for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
                e.markedSpans = null
            }
        }

        function Co(e, t) {
            if (t) {
                for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
                e.markedSpans = t
            }
        }

        function Kn(e) {
            return e.inclusiveLeft ? -1 : 0
        }

        function Un(e) {
            return e.inclusiveRight ? 1 : 0
        }

        function yi(e, t) {
            var n = e.lines.length - t.lines.length;
            if (n != 0) return n;
            var r = e.find(),
                i = t.find(),
                o = f(r.from, i.from) || Kn(e) - Kn(t);
            if (o) return -o;
            var l = f(r.to, i.to) || Un(e) - Un(t);
            return l || t.id - e.id
        }

        function Lo(e, t) {
            var n = Qt && e.markedSpans,
                r;
            if (n)
                for (var i = void 0, o = 0; o < n.length; ++o) i = n[o], i.marker.collapsed && (t ? i.from : i.to) == null && (!r || yi(r, i.marker) < 0) && (r = i.marker);
            return r
        }

        function To(e) {
            return Lo(e, !0)
        }

        function _n(e) {
            return Lo(e, !1)
        }

        function Za(e, t) {
            var n = Qt && e.markedSpans,
                r;
            if (n)
                for (var i = 0; i < n.length; ++i) {
                    var o = n[i];
                    o.marker.collapsed && (o.from == null || o.from < t) && (o.to == null || o.to > t) && (!r || yi(r, o.marker) < 0) && (r = o.marker)
                }
            return r
        }

        function Mo(e, t, n, r, i) {
            var o = oe(e, t),
                l = Qt && o.markedSpans;
            if (l)
                for (var a = 0; a < l.length; ++a) {
                    var s = l[a];
                    if (s.marker.collapsed) {
                        var u = s.marker.find(0),
                            d = f(u.from, n) || Kn(s.marker) - Kn(i),
                            v = f(u.to, r) || Un(s.marker) - Un(i);
                        if (!(d >= 0 && v <= 0 || d <= 0 && v >= 0) && (d <= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? f(u.to, n) >= 0 : f(u.to, n) > 0) || d >= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? f(u.from, r) <= 0 : f(u.from, r) < 0))) return !0
                    }
                }
        }

        function qt(e) {
            for (var t; t = To(e);) e = t.find(-1, !0).line;
            return e
        }

        function Ja(e) {
            for (var t; t = _n(e);) e = t.find(1, !0).line;
            return e
        }

        function Qa(e) {
            for (var t, n; t = _n(e);) e = t.find(1, !0).line, (n || (n = [])).push(e);
            return n
        }

        function bi(e, t) {
            var n = oe(e, t),
                r = qt(n);
            return n == r ? t : Me(r)
        }

        function Ao(e, t) {
            if (t > e.lastLine()) return t;
            var n = oe(e, t),
                r;
            if (!or(e, n)) return t;
            for (; r = _n(n);) n = r.find(1, !0).line;
            return Me(n) + 1
        }

        function or(e, t) {
            var n = Qt && t.markedSpans;
            if (n) {
                for (var r = void 0, i = 0; i < n.length; ++i)
                    if (r = n[i], !!r.marker.collapsed) {
                        if (r.from == null) return !0;
                        if (!r.marker.widgetNode && r.from == 0 && r.marker.inclusiveLeft && wi(e, t, r)) return !0
                    }
            }
        }

        function wi(e, t, n) {
            if (n.to == null) {
                var r = n.marker.find(1, !0);
                return wi(e, r.line, un(r.line.markedSpans, n.marker))
            }
            if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
            for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
                if (i = t.markedSpans[o], i.marker.collapsed && !i.marker.widgetNode && i.from == n.to && (i.to == null || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && wi(e, t, i)) return !0
        }

        function Vt(e) {
            e = qt(e);
            for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) {
                var i = n.lines[r];
                if (i == e) break;
                t += i.height
            }
            for (var o = n.parent; o; n = o, o = n.parent)
                for (var l = 0; l < o.children.length; ++l) {
                    var a = o.children[l];
                    if (a == n) break;
                    t += a.height
                }
            return t
        }

        function Gn(e) {
            if (e.height == 0) return 0;
            for (var t = e.text.length, n, r = e; n = To(r);) {
                var i = n.find(0, !0);
                r = i.from.line, t += i.from.ch - i.to.ch
            }
            for (r = e; n = _n(r);) {
                var o = n.find(0, !0);
                t -= r.text.length - o.from.ch, r = o.to.line, t += r.text.length - o.to.ch
            }
            return t
        }

        function xi(e) {
            var t = e.display,
                n = e.doc;
            t.maxLine = oe(n, n.first), t.maxLineLength = Gn(t.maxLine), t.maxLineChanged = !0, n.iter(function(r) {
                var i = Gn(r);
                i > t.maxLineLength && (t.maxLineLength = i, t.maxLine = r)
            })
        }
        var zr = function(e, t, n) {
            this.text = e, Co(this, t), this.height = n ? n(this) : 1
        };
        zr.prototype.lineNo = function() {
            return Me(this)
        }, Rt(zr);

        function Va(e, t, n, r) {
            e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), e.order != null && (e.order = null), So(e), Co(e, n);
            var i = r ? r(e) : 1;
            i != e.height && yt(e, i)
        }

        function $a(e) {
            e.parent = null, So(e)
        }
        var es = {},
            ts = {};

        function No(e, t) {
            if (!e || /^\s*$/.test(e)) return null;
            var n = t.addModeClass ? ts : es;
            return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"))
        }

        function Oo(e, t) {
            var n = h("span", null, null, W ? "padding-right: .1px" : null),
                r = {
                    pre: h("pre", [n], "CodeMirror-line"),
                    content: n,
                    col: 0,
                    pos: 0,
                    cm: e,
                    trailingSpace: !1,
                    splitSpaces: e.getOption("lineWrapping")
                };
            t.measure = {};
            for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
                var o = i ? t.rest[i - 1] : t.line,
                    l = void 0;
                r.pos = 0, r.addToken = ns, Kt(e.display.measure) && (l = mt(o, e.doc.direction)) && (r.addToken = os(r.addToken, l)), r.map = [];
                var a = t != e.display.externalMeasured && Me(o);
                ls(o, r, vo(e, o, a)), o.styleClasses && (o.styleClasses.bgClass && (r.bgClass = ze(o.styleClasses.bgClass, r.bgClass || "")), o.styleClasses.textClass && (r.textClass = ze(o.styleClasses.textClass, r.textClass || ""))), r.map.length == 0 && r.map.push(0, 0, r.content.appendChild(Bn(e.display.measure))), i == 0 ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}))
            }
            if (W) {
                var s = r.content.lastChild;
                (/\bcm-tab\b/.test(s.className) || s.querySelector && s.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack")
            }
            return ve(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = ze(r.pre.className, r.textClass || "")), r
        }

        function rs(e) {
            var t = p("span", "\u2022", "cm-invalidchar");
            return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t
        }

        function ns(e, t, n, r, i, o, l) {
            if (t) {
                var a = e.splitSpaces ? is(t, e.trailingSpace) : t,
                    s = e.cm.state.specialChars,
                    u = !1,
                    d;
                if (!s.test(t)) e.col += t.length, d = document.createTextNode(a), e.map.push(e.pos, e.pos + t.length, d), X && E < 9 && (u = !0), e.pos += t.length;
                else {
                    d = document.createDocumentFragment();
                    for (var v = 0;;) {
                        s.lastIndex = v;
                        var x = s.exec(t),
                            w = x ? x.index - v : t.length - v;
                        if (w) {
                            var P = document.createTextNode(a.slice(v, v + w));
                            X && E < 9 ? d.appendChild(p("span", [P])) : d.appendChild(P), e.map.push(e.pos, e.pos + w, P), e.col += w, e.pos += w
                        }
                        if (!x) break;
                        v += w + 1;
                        var H = void 0;
                        if (x[0] == "	") {
                            var q = e.cm.options.tabSize,
                                J = q - e.col % q;
                            H = d.appendChild(p("span", rr(J), "cm-tab")), H.setAttribute("role", "presentation"), H.setAttribute("cm-text", "	"), e.col += J
                        } else x[0] == "\r" || x[0] == `
` ? (H = d.appendChild(p("span", x[0] == "\r" ? "\u240D" : "\u2424", "cm-invalidchar")), H.setAttribute("cm-text", x[0]), e.col += 1) : (H = e.cm.options.specialCharPlaceholder(x[0]), H.setAttribute("cm-text", x[0]), X && E < 9 ? d.appendChild(p("span", [H])) : d.appendChild(H), e.col += 1);
                        e.map.push(e.pos, e.pos + 1, H), e.pos++
                    }
                }
                if (e.trailingSpace = a.charCodeAt(t.length - 1) == 32, n || r || i || u || o || l) {
                    var ee = n || "";
                    r && (ee += r), i && (ee += i);
                    var Q = p("span", [d], ee, o);
                    if (l)
                        for (var ne in l) l.hasOwnProperty(ne) && ne != "style" && ne != "class" && Q.setAttribute(ne, l[ne]);
                    return e.content.appendChild(Q)
                }
                e.content.appendChild(d)
            }
        }

        function is(e, t) {
            if (e.length > 1 && !/  /.test(e)) return e;
            for (var n = t, r = "", i = 0; i < e.length; i++) {
                var o = e.charAt(i);
                o == " " && n && (i == e.length - 1 || e.charCodeAt(i + 1) == 32) && (o = "\xA0"), r += o, n = o == " "
            }
            return r
        }

        function os(e, t) {
            return function(n, r, i, o, l, a, s) {
                i = i ? i + " cm-force-border" : "cm-force-border";
                for (var u = n.pos, d = u + r.length;;) {
                    for (var v = void 0, x = 0; x < t.length && (v = t[x], !(v.to > u && v.from <= u)); x++);
                    if (v.to >= d) return e(n, r, i, o, l, a, s);
                    e(n, r.slice(0, v.to - u), i, o, null, a, s), o = null, r = r.slice(v.to - u), u = v.to
                }
            }
        }

        function Do(e, t, n, r) {
            var i = !r && n.widgetNode;
            i && e.map.push(e.pos, e.pos + t, i), !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1
        }

        function ls(e, t, n) {
            var r = e.markedSpans,
                i = e.text,
                o = 0;
            if (!r) {
                for (var l = 1; l < n.length; l += 2) t.addToken(t, i.slice(o, o = n[l]), No(n[l + 1], t.cm.options));
                return
            }
            for (var a = i.length, s = 0, u = 1, d = "", v, x, w = 0, P, H, q, J, ee;;) {
                if (w == s) {
                    P = H = q = x = "", ee = null, J = null, w = 1 / 0;
                    for (var Q = [], ne = void 0, fe = 0; fe < r.length; ++fe) {
                        var se = r[fe],
                            ye = se.marker;
                        if (ye.type == "bookmark" && se.from == s && ye.widgetNode) Q.push(ye);
                        else if (se.from <= s && (se.to == null || se.to > s || ye.collapsed && se.to == s && se.from == s)) {
                            if (se.to != null && se.to != s && w > se.to && (w = se.to, H = ""), ye.className && (P += " " + ye.className), ye.css && (x = (x ? x + ";" : "") + ye.css), ye.startStyle && se.from == s && (q += " " + ye.startStyle), ye.endStyle && se.to == w && (ne || (ne = [])).push(ye.endStyle, se.to), ye.title && ((ee || (ee = {})).title = ye.title), ye.attributes)
                                for (var We in ye.attributes)(ee || (ee = {}))[We] = ye.attributes[We];
                            ye.collapsed && (!J || yi(J.marker, ye) < 0) && (J = se)
                        } else se.from > s && w > se.from && (w = se.from)
                    }
                    if (ne)
                        for (var $e = 0; $e < ne.length; $e += 2) ne[$e + 1] == w && (H += " " + ne[$e]);
                    if (!J || J.from == s)
                        for (var He = 0; He < Q.length; ++He) Do(t, 0, Q[He]);
                    if (J && (J.from || 0) == s) {
                        if (Do(t, (J.to == null ? a + 1 : J.to) - s, J.marker, J.from == null), J.to == null) return;
                        J.to == s && (J = !1)
                    }
                }
                if (s >= a) break;
                for (var wt = Math.min(a, w);;) {
                    if (d) {
                        var pt = s + d.length;
                        if (!J) {
                            var qe = pt > wt ? d.slice(0, wt - s) : d;
                            t.addToken(t, qe, v ? v + P : P, q, s + qe.length == w ? H : "", x, ee)
                        }
                        if (pt >= wt) {
                            d = d.slice(wt - s), s = wt;
                            break
                        }
                        s = pt, q = ""
                    }
                    d = i.slice(o, o = n[u++]), v = No(n[u++], t.cm.options)
                }
            }
        }

        function Po(e, t, n) {
            this.line = t, this.rest = Qa(t), this.size = this.rest ? Me(we(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = or(e, t)
        }

        function qn(e, t, n) {
            for (var r = [], i, o = t; o < n; o = i) {
                var l = new Po(e.doc, oe(e.doc, o), o);
                i = o + l.size, r.push(l)
            }
            return r
        }
        var Fr = null;

        function as(e) {
            Fr ? Fr.ops.push(e) : e.ownsGroup = Fr = {
                ops: [e],
                delayedCallbacks: []
            }
        }

        function ss(e) {
            var t = e.delayedCallbacks,
                n = 0;
            do {
                for (; n < t.length; n++) t[n].call(null);
                for (var r = 0; r < e.ops.length; r++) {
                    var i = e.ops[r];
                    if (i.cursorActivityHandlers)
                        for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
                }
            } while (n < t.length)
        }

        function us(e, t) {
            var n = e.ownsGroup;
            if (n) try {
                ss(n)
            } finally {
                Fr = null, t(n)
            }
        }
        var fn = null;

        function Je(e, t) {
            var n = Ar(e, t);
            if (n.length) {
                var r = Array.prototype.slice.call(arguments, 2),
                    i;
                Fr ? i = Fr.delayedCallbacks : fn ? i = fn : (i = fn = [], setTimeout(fs, 0));
                for (var o = function(a) {
                        i.push(function() {
                            return n[a].apply(null, r)
                        })
                    }, l = 0; l < n.length; ++l) o(l)
            }
        }

        function fs() {
            var e = fn;
            fn = null;
            for (var t = 0; t < e.length; ++t) e[t]()
        }

        function Wo(e, t, n, r) {
            for (var i = 0; i < t.changes.length; i++) {
                var o = t.changes[i];
                o == "text" ? hs(e, t) : o == "gutter" ? Fo(e, t, n, r) : o == "class" ? ki(e, t) : o == "widget" && ds(e, t, r)
            }
            t.changes = null
        }

        function cn(e) {
            return e.node == e.text && (e.node = p("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), X && E < 8 && (e.node.style.zIndex = 2)), e.node
        }

        function cs(e, t) {
            var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
            if (n && (n += " CodeMirror-linebackground"), t.background) n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null);
            else if (n) {
                var r = cn(t);
                t.background = r.insertBefore(p("div", null, n), r.firstChild), e.display.input.setUneditable(t.background)
            }
        }

        function zo(e, t) {
            var n = e.display.externalMeasured;
            return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : Oo(e, t)
        }

        function hs(e, t) {
            var n = t.text.className,
                r = zo(e, t);
            t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, ki(e, t)) : n && (t.text.className = n)
        }

        function ki(e, t) {
            cs(e, t), t.line.wrapClass ? cn(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
            var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
            t.text.className = n || ""
        }

        function Fo(e, t, n, r) {
            if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
                var i = cn(t);
                t.gutterBackground = p("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text)
            }
            var o = t.line.gutterMarkers;
            if (e.options.lineNumbers || o) {
                var l = cn(t),
                    a = t.gutter = p("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
                if (a.setAttribute("aria-hidden", "true"), e.display.input.setUneditable(a), l.insertBefore(a, t.text), t.line.gutterClass && (a.className += " " + t.line.gutterClass), e.options.lineNumbers && (!o || !o["CodeMirror-linenumbers"]) && (t.lineNumber = a.appendChild(p("div", an(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o)
                    for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
                        var u = e.display.gutterSpecs[s].className,
                            d = o.hasOwnProperty(u) && o[u];
                        d && a.appendChild(p("div", [d], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[u] + "px; width: " + r.gutterWidth[u] + "px"))
                    }
            }
        }

        function ds(e, t, n) {
            t.alignable && (t.alignable = null);
            for (var r = A("CodeMirror-linewidget"), i = t.node.firstChild, o = void 0; i; i = o) o = i.nextSibling, r.test(i.className) && t.node.removeChild(i);
            Bo(e, t, n)
        }

        function ps(e, t, n, r) {
            var i = zo(e, t);
            return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), ki(e, t), Fo(e, t, n, r), Bo(e, t, r), t.node
        }

        function Bo(e, t, n) {
            if (Eo(e, t.line, t, n, !0), t.rest)
                for (var r = 0; r < t.rest.length; r++) Eo(e, t.rest[r], t, n, !1)
        }

        function Eo(e, t, n, r, i) {
            if (t.widgets)
                for (var o = cn(n), l = 0, a = t.widgets; l < a.length; ++l) {
                    var s = a[l],
                        u = p("div", [s.node], "CodeMirror-linewidget" + (s.className ? " " + s.className : ""));
                    s.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), vs(s, u, n, r), e.display.input.setUneditable(u), i && s.above ? o.insertBefore(u, n.gutter || n.text) : o.appendChild(u), Je(s, "redraw")
                }
        }

        function vs(e, t, n, r) {
            if (e.noHScroll) {
                (n.alignable || (n.alignable = [])).push(t);
                var i = r.wrapperWidth;
                t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px"
            }
            e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"))
        }

        function hn(e) {
            if (e.height != null) return e.height;
            var t = e.doc.cm;
            if (!t) return 0;
            if (!V(document.body, e.node)) {
                var n = "position: relative;";
                e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"), k(t.display.measure, p("div", [e.node], null, n))
            }
            return e.height = e.node.parentNode.offsetHeight
        }

        function $t(e, t) {
            for (var n = nr(t); n != e.wrapper; n = n.parentNode)
                if (!n || n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true" || n.parentNode == e.sizer && n != e.mover) return !0
        }

        function Xn(e) {
            return e.lineSpace.offsetTop
        }

        function Si(e) {
            return e.mover.offsetHeight - e.lineSpace.offsetHeight
        }

        function Ho(e) {
            if (e.cachedPaddingH) return e.cachedPaddingH;
            var t = k(e.measure, p("pre", "x", "CodeMirror-line-like")),
                n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                r = {
                    left: parseInt(n.paddingLeft),
                    right: parseInt(n.paddingRight)
                };
            return !isNaN(r.left) && !isNaN(r.right) && (e.cachedPaddingH = r), r
        }

        function Xt(e) {
            return pe - e.display.nativeBarWidth
        }

        function yr(e) {
            return e.display.scroller.clientWidth - Xt(e) - e.display.barWidth
        }

        function Ci(e) {
            return e.display.scroller.clientHeight - Xt(e) - e.display.barHeight
        }

        function gs(e, t, n) {
            var r = e.options.lineWrapping,
                i = r && yr(e);
            if (!t.measure.heights || r && t.measure.width != i) {
                var o = t.measure.heights = [];
                if (r) {
                    t.measure.width = i;
                    for (var l = t.text.firstChild.getClientRects(), a = 0; a < l.length - 1; a++) {
                        var s = l[a],
                            u = l[a + 1];
                        Math.abs(s.bottom - u.bottom) > 2 && o.push((s.bottom + u.top) / 2 - n.top)
                    }
                }
                o.push(n.bottom - n.top)
            }
        }

        function Io(e, t, n) {
            if (e.line == t) return {
                map: e.measure.map,
                cache: e.measure.cache
            };
            for (var r = 0; r < e.rest.length; r++)
                if (e.rest[r] == t) return {
                    map: e.measure.maps[r],
                    cache: e.measure.caches[r]
                };
            for (var i = 0; i < e.rest.length; i++)
                if (Me(e.rest[i]) > n) return {
                    map: e.measure.maps[i],
                    cache: e.measure.caches[i],
                    before: !0
                }
        }

        function ms(e, t) {
            t = qt(t);
            var n = Me(t),
                r = e.display.externalMeasured = new Po(e.doc, t, n);
            r.lineN = n;
            var i = r.built = Oo(e, r);
            return r.text = i.pre, k(e.display.lineMeasure, i.pre), r
        }

        function Ro(e, t, n, r) {
            return Yt(e, Br(e, t), n, r)
        }

        function Li(e, t) {
            if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[xr(e, t)];
            var n = e.display.externalMeasured;
            if (n && t >= n.lineN && t < n.lineN + n.size) return n
        }

        function Br(e, t) {
            var n = Me(t),
                r = Li(e, n);
            r && !r.text ? r = null : r && r.changes && (Wo(e, r, n, Di(e)), e.curOp.forceUpdate = !0), r || (r = ms(e, t));
            var i = Io(r, t, n);
            return {
                line: t,
                view: r,
                rect: null,
                map: i.map,
                cache: i.cache,
                before: i.before,
                hasHeights: !1
            }
        }

        function Yt(e, t, n, r, i) {
            t.before && (n = -1);
            var o = n + (r || ""),
                l;
            return t.cache.hasOwnProperty(o) ? l = t.cache[o] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (gs(e, t.view, t.rect), t.hasHeights = !0), l = bs(e, t, n, r), l.bogus || (t.cache[o] = l)), {
                left: l.left,
                right: l.right,
                top: i ? l.rtop : l.top,
                bottom: i ? l.rbottom : l.bottom
            }
        }
        var Ko = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };

        function Uo(e, t, n) {
            for (var r, i, o, l, a, s, u = 0; u < e.length; u += 3)
                if (a = e[u], s = e[u + 1], t < a ? (i = 0, o = 1, l = "left") : t < s ? (i = t - a, o = i + 1) : (u == e.length - 3 || t == s && e[u + 3] > t) && (o = s - a, i = o - 1, t >= s && (l = "right")), i != null) {
                    if (r = e[u + 2], a == s && n == (r.insertLeft ? "left" : "right") && (l = n), n == "left" && i == 0)
                        for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft;) r = e[(u -= 3) + 2], l = "left";
                    if (n == "right" && i == s - a)
                        for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;) r = e[(u += 3) + 2], l = "right";
                    break
                }
            return {
                node: r,
                start: i,
                end: o,
                collapse: l,
                coverStart: a,
                coverEnd: s
            }
        }

        function ys(e, t) {
            var n = Ko;
            if (t == "left")
                for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
            else
                for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--);
            return n
        }

        function bs(e, t, n, r) {
            var i = Uo(t.map, n, r),
                o = i.node,
                l = i.start,
                a = i.end,
                s = i.collapse,
                u;
            if (o.nodeType == 3) {
                for (var d = 0; d < 4; d++) {
                    for (; l && ke(t.line.text.charAt(i.coverStart + l));) --l;
                    for (; i.coverStart + a < i.coverEnd && ke(t.line.text.charAt(i.coverStart + a));) ++a;
                    if (X && E < 9 && l == 0 && a == i.coverEnd - i.coverStart ? u = o.parentNode.getBoundingClientRect() : u = ys(I(o, l, a).getClientRects(), r), u.left || u.right || l == 0) break;
                    a = l, l = l - 1, s = "right"
                }
                X && E < 11 && (u = ws(e.display.measure, u))
            } else {
                l > 0 && (s = r = "right");
                var v;
                e.options.lineWrapping && (v = o.getClientRects()).length > 1 ? u = v[r == "right" ? v.length - 1 : 0] : u = o.getBoundingClientRect()
            }
            if (X && E < 9 && !l && (!u || !u.left && !u.right)) {
                var x = o.parentNode.getClientRects()[0];
                x ? u = {
                    left: x.left,
                    right: x.left + Hr(e.display),
                    top: x.top,
                    bottom: x.bottom
                } : u = Ko
            }
            for (var w = u.top - t.rect.top, P = u.bottom - t.rect.top, H = (w + P) / 2, q = t.view.measure.heights, J = 0; J < q.length - 1 && !(H < q[J]); J++);
            var ee = J ? q[J - 1] : 0,
                Q = q[J],
                ne = {
                    left: (s == "right" ? u.right : u.left) - t.rect.left,
                    right: (s == "left" ? u.left : u.right) - t.rect.left,
                    top: ee,
                    bottom: Q
                };
            return !u.left && !u.right && (ne.bogus = !0), e.options.singleCursorHeightPerLine || (ne.rtop = w, ne.rbottom = P), ne
        }

        function ws(e, t) {
            if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !ir(e)) return t;
            var n = screen.logicalXDPI / screen.deviceXDPI,
                r = screen.logicalYDPI / screen.deviceYDPI;
            return {
                left: t.left * n,
                right: t.right * n,
                top: t.top * r,
                bottom: t.bottom * r
            }
        }

        function _o(e) {
            if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
                for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
        }

        function Go(e) {
            e.display.externalMeasure = null, Z(e.display.lineMeasure);
            for (var t = 0; t < e.display.view.length; t++) _o(e.display.view[t])
        }

        function dn(e) {
            Go(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
        }

        function qo() {
            return C && D ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
        }

        function Xo() {
            return C && D ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
        }

        function Ti(e) {
            var t = 0;
            if (e.widgets)
                for (var n = 0; n < e.widgets.length; ++n) e.widgets[n].above && (t += hn(e.widgets[n]));
            return t
        }

        function Yn(e, t, n, r, i) {
            if (!i) {
                var o = Ti(t);
                n.top += o, n.bottom += o
            }
            if (r == "line") return n;
            r || (r = "local");
            var l = Vt(t);
            if (r == "local" ? l += Xn(e.display) : l -= e.display.viewOffset, r == "page" || r == "window") {
                var a = e.display.lineSpace.getBoundingClientRect();
                l += a.top + (r == "window" ? 0 : Xo());
                var s = a.left + (r == "window" ? 0 : qo());
                n.left += s, n.right += s
            }
            return n.top += l, n.bottom += l, n
        }

        function Yo(e, t, n) {
            if (n == "div") return t;
            var r = t.left,
                i = t.top;
            if (n == "page") r -= qo(), i -= Xo();
            else if (n == "local" || !n) {
                var o = e.display.sizer.getBoundingClientRect();
                r += o.left, i += o.top
            }
            var l = e.display.lineSpace.getBoundingClientRect();
            return {
                left: r - l.left,
                top: i - l.top
            }
        }

        function Mi(e, t, n, r, i) {
            return r || (r = oe(e.doc, t.line)), Yn(e, r, Ro(e, r, t.ch, i), n)
        }

        function Ft(e, t, n, r, i, o) {
            r = r || oe(e.doc, t.line), i || (i = Br(e, r));

            function l(P, H) {
                var q = Yt(e, i, P, H ? "right" : "left", o);
                return H ? q.left = q.right : q.right = q.left, Yn(e, r, q, n)
            }
            var a = mt(r, e.doc.direction),
                s = t.ch,
                u = t.sticky;
            if (s >= r.text.length ? (s = r.text.length, u = "before") : s <= 0 && (s = 0, u = "after"), !a) return l(u == "before" ? s - 1 : s, u == "before");

            function d(P, H, q) {
                var J = a[H],
                    ee = J.level == 1;
                return l(q ? P - 1 : P, ee != q)
            }
            var v = Re(a, s, u),
                x = kt,
                w = d(s, v, u == "before");
            return x != null && (w.other = d(s, x, u != "before")), w
        }

        function jo(e, t) {
            var n = 0;
            t = $(e.doc, t), e.options.lineWrapping || (n = Hr(e.display) * t.ch);
            var r = oe(e.doc, t.line),
                i = Vt(r) + Xn(e.display);
            return {
                left: n,
                right: n,
                top: i,
                bottom: i + r.height
            }
        }

        function Ai(e, t, n, r, i) {
            var o = U(e, t, n);
            return o.xRel = i, r && (o.outside = r), o
        }

        function Ni(e, t, n) {
            var r = e.doc;
            if (n += e.display.viewOffset, n < 0) return Ai(r.first, 0, null, -1, -1);
            var i = _t(r, n),
                o = r.first + r.size - 1;
            if (i > o) return Ai(r.first + r.size - 1, oe(r, o).text.length, null, 1, 1);
            t < 0 && (t = 0);
            for (var l = oe(r, i);;) {
                var a = xs(e, l, i, t, n),
                    s = Za(l, a.ch + (a.xRel > 0 || a.outside > 0 ? 1 : 0));
                if (!s) return a;
                var u = s.find(1);
                if (u.line == i) return u;
                l = oe(r, i = u.line)
            }
        }

        function Zo(e, t, n, r) {
            r -= Ti(t);
            var i = t.text.length,
                o = It(function(l) {
                    return Yt(e, n, l - 1).bottom <= r
                }, i, 0);
            return i = It(function(l) {
                return Yt(e, n, l).top > r
            }, o, i), {
                begin: o,
                end: i
            }
        }

        function Jo(e, t, n, r) {
            n || (n = Br(e, t));
            var i = Yn(e, t, Yt(e, n, r), "line").top;
            return Zo(e, t, n, i)
        }

        function Oi(e, t, n, r) {
            return e.bottom <= n ? !1 : e.top > n ? !0 : (r ? e.left : e.right) > t
        }

        function xs(e, t, n, r, i) {
            i -= Vt(t);
            var o = Br(e, t),
                l = Ti(t),
                a = 0,
                s = t.text.length,
                u = !0,
                d = mt(t, e.doc.direction);
            if (d) {
                var v = (e.options.lineWrapping ? Ss : ks)(e, t, n, o, d, r, i);
                u = v.level != 1, a = u ? v.from : v.to - 1, s = u ? v.to : v.from - 1
            }
            var x = null,
                w = null,
                P = It(function(fe) {
                    var se = Yt(e, o, fe);
                    return se.top += l, se.bottom += l, Oi(se, r, i, !1) ? (se.top <= i && se.left <= r && (x = fe, w = se), !0) : !1
                }, a, s),
                H, q, J = !1;
            if (w) {
                var ee = r - w.left < w.right - r,
                    Q = ee == u;
                P = x + (Q ? 0 : 1), q = Q ? "after" : "before", H = ee ? w.left : w.right
            } else {
                !u && (P == s || P == a) && P++, q = P == 0 ? "after" : P == t.text.length ? "before" : Yt(e, o, P - (u ? 1 : 0)).bottom + l <= i == u ? "after" : "before";
                var ne = Ft(e, U(n, P, q), "line", t, o);
                H = ne.left, J = i < ne.top ? -1 : i >= ne.bottom ? 1 : 0
            }
            return P = at(t.text, P, 1), Ai(n, P, q, J, r - H)
        }

        function ks(e, t, n, r, i, o, l) {
            var a = It(function(v) {
                    var x = i[v],
                        w = x.level != 1;
                    return Oi(Ft(e, U(n, w ? x.to : x.from, w ? "before" : "after"), "line", t, r), o, l, !0)
                }, 0, i.length - 1),
                s = i[a];
            if (a > 0) {
                var u = s.level != 1,
                    d = Ft(e, U(n, u ? s.from : s.to, u ? "after" : "before"), "line", t, r);
                Oi(d, o, l, !0) && d.top > l && (s = i[a - 1])
            }
            return s
        }

        function Ss(e, t, n, r, i, o, l) {
            var a = Zo(e, t, r, l),
                s = a.begin,
                u = a.end;
            /\s/.test(t.text.charAt(u - 1)) && u--;
            for (var d = null, v = null, x = 0; x < i.length; x++) {
                var w = i[x];
                if (!(w.from >= u || w.to <= s)) {
                    var P = w.level != 1,
                        H = Yt(e, r, P ? Math.min(u, w.to) - 1 : Math.max(s, w.from)).right,
                        q = H < o ? o - H + 1e9 : H - o;
                    (!d || v > q) && (d = w, v = q)
                }
            }
            return d || (d = i[i.length - 1]), d.from < s && (d = {
                from: s,
                to: d.to,
                level: d.level
            }), d.to > u && (d = {
                from: d.from,
                to: u,
                level: d.level
            }), d
        }
        var br;

        function Er(e) {
            if (e.cachedTextHeight != null) return e.cachedTextHeight;
            if (br == null) {
                br = p("pre", null, "CodeMirror-line-like");
                for (var t = 0; t < 49; ++t) br.appendChild(document.createTextNode("x")), br.appendChild(p("br"));
                br.appendChild(document.createTextNode("x"))
            }
            k(e.measure, br);
            var n = br.offsetHeight / 50;
            return n > 3 && (e.cachedTextHeight = n), Z(e.measure), n || 1
        }

        function Hr(e) {
            if (e.cachedCharWidth != null) return e.cachedCharWidth;
            var t = p("span", "xxxxxxxxxx"),
                n = p("pre", [t], "CodeMirror-line-like");
            k(e.measure, n);
            var r = t.getBoundingClientRect(),
                i = (r.right - r.left) / 10;
            return i > 2 && (e.cachedCharWidth = i), i || 10
        }

        function Di(e) {
            for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, l = 0; o; o = o.nextSibling, ++l) {
                var a = e.display.gutterSpecs[l].className;
                n[a] = o.offsetLeft + o.clientLeft + i, r[a] = o.clientWidth
            }
            return {
                fixedPos: Pi(t),
                gutterTotalWidth: t.gutters.offsetWidth,
                gutterLeft: n,
                gutterWidth: r,
                wrapperWidth: t.wrapper.clientWidth
            }
        }

        function Pi(e) {
            return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
        }

        function Qo(e) {
            var t = Er(e.display),
                n = e.options.lineWrapping,
                r = n && Math.max(5, e.display.scroller.clientWidth / Hr(e.display) - 3);
            return function(i) {
                if (or(e.doc, i)) return 0;
                var o = 0;
                if (i.widgets)
                    for (var l = 0; l < i.widgets.length; l++) i.widgets[l].height && (o += i.widgets[l].height);
                return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t
            }
        }

        function Wi(e) {
            var t = e.doc,
                n = Qo(e);
            t.iter(function(r) {
                var i = n(r);
                i != r.height && yt(r, i)
            })
        }

        function wr(e, t, n, r) {
            var i = e.display;
            if (!n && nr(t).getAttribute("cm-not-content") == "true") return null;
            var o, l, a = i.lineSpace.getBoundingClientRect();
            try {
                o = t.clientX - a.left, l = t.clientY - a.top
            } catch {
                return null
            }
            var s = Ni(e, o, l),
                u;
            if (r && s.xRel > 0 && (u = oe(e.doc, s.line).text).length == s.ch) {
                var d = Fe(u, u.length, e.options.tabSize) - u.length;
                s = U(s.line, Math.max(0, Math.round((o - Ho(e.display).left) / Hr(e.display)) - d))
            }
            return s
        }

        function xr(e, t) {
            if (t >= e.display.viewTo || (t -= e.display.viewFrom, t < 0)) return null;
            for (var n = e.display.view, r = 0; r < n.length; r++)
                if (t -= n[r].size, t < 0) return r
        }

        function ht(e, t, n, r) {
            t == null && (t = e.doc.first), n == null && (n = e.doc.first + e.doc.size), r || (r = 0);
            var i = e.display;
            if (r && n < i.viewTo && (i.updateLineNumbers == null || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Qt && bi(e.doc, t) < i.viewTo && ar(e);
            else if (n <= i.viewFrom) Qt && Ao(e.doc, n + r) > i.viewFrom ? ar(e) : (i.viewFrom += r, i.viewTo += r);
            else if (t <= i.viewFrom && n >= i.viewTo) ar(e);
            else if (t <= i.viewFrom) {
                var o = jn(e, n, n + r, 1);
                o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : ar(e)
            } else if (n >= i.viewTo) {
                var l = jn(e, t, t, -1);
                l ? (i.view = i.view.slice(0, l.index), i.viewTo = l.lineN) : ar(e)
            } else {
                var a = jn(e, t, t, -1),
                    s = jn(e, n, n + r, 1);
                a && s ? (i.view = i.view.slice(0, a.index).concat(qn(e, a.lineN, s.lineN)).concat(i.view.slice(s.index)), i.viewTo += r) : ar(e)
            }
            var u = i.externalMeasured;
            u && (n < u.lineN ? u.lineN += r : t < u.lineN + u.size && (i.externalMeasured = null))
        }

        function lr(e, t, n) {
            e.curOp.viewChanged = !0;
            var r = e.display,
                i = e.display.externalMeasured;
            if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
                var o = r.view[xr(e, t)];
                if (o.node != null) {
                    var l = o.changes || (o.changes = []);
                    ae(l, n) == -1 && l.push(n)
                }
            }
        }

        function ar(e) {
            e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
        }

        function jn(e, t, n, r) {
            var i = xr(e, t),
                o, l = e.display.view;
            if (!Qt || n == e.doc.first + e.doc.size) return {
                index: i,
                lineN: n
            };
            for (var a = e.display.viewFrom, s = 0; s < i; s++) a += l[s].size;
            if (a != t) {
                if (r > 0) {
                    if (i == l.length - 1) return null;
                    o = a + l[i].size - t, i++
                } else o = a - t;
                t += o, n += o
            }
            for (; bi(e.doc, n) != n;) {
                if (i == (r < 0 ? 0 : l.length - 1)) return null;
                n += r * l[i - (r < 0 ? 1 : 0)].size, i += r
            }
            return {
                index: i,
                lineN: n
            }
        }

        function Cs(e, t, n) {
            var r = e.display,
                i = r.view;
            i.length == 0 || t >= r.viewTo || n <= r.viewFrom ? (r.view = qn(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = qn(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(xr(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(qn(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, xr(e, n)))), r.viewTo = n
        }

        function Vo(e) {
            for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
                var i = t[r];
                !i.hidden && (!i.node || i.changes) && ++n
            }
            return n
        }

        function pn(e) {
            e.display.input.showSelection(e.display.input.prepareSelection())
        }

        function $o(e, t) {
            t === void 0 && (t = !0);
            for (var n = e.doc, r = {}, i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), l = 0; l < n.sel.ranges.length; l++)
                if (!(!t && l == n.sel.primIndex)) {
                    var a = n.sel.ranges[l];
                    if (!(a.from().line >= e.display.viewTo || a.to().line < e.display.viewFrom)) {
                        var s = a.empty();
                        (s || e.options.showCursorWhenSelecting) && el(e, a.head, i), s || Ls(e, a, o)
                    }
                }
            return r
        }

        function el(e, t, n) {
            var r = Ft(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
                i = n.appendChild(p("div", "\xA0", "CodeMirror-cursor"));
            if (i.style.left = r.left + "px", i.style.top = r.top + "px", i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", r.other) {
                var o = n.appendChild(p("div", "\xA0", "CodeMirror-cursor CodeMirror-secondarycursor"));
                o.style.display = "", o.style.left = r.other.left + "px", o.style.top = r.other.top + "px", o.style.height = (r.other.bottom - r.other.top) * .85 + "px"
            }
        }

        function Zn(e, t) {
            return e.top - t.top || e.left - t.left
        }

        function Ls(e, t, n) {
            var r = e.display,
                i = e.doc,
                o = document.createDocumentFragment(),
                l = Ho(e.display),
                a = l.left,
                s = Math.max(r.sizerWidth, yr(e) - r.sizer.offsetLeft) - l.right,
                u = i.direction == "ltr";

            function d(Q, ne, fe, se) {
                ne < 0 && (ne = 0), ne = Math.round(ne), se = Math.round(se), o.appendChild(p("div", null, "CodeMirror-selected", "position: absolute; left: " + Q + `px;
                             top: ` + ne + "px; width: " + (fe ? ? s - Q) + `px;
                             height: ` + (se - ne) + "px"))
            }

            function v(Q, ne, fe) {
                var se = oe(i, Q),
                    ye = se.text.length,
                    We, $e;

                function He(qe, vt) {
                    return Mi(e, U(Q, qe), "div", se, vt)
                }

                function wt(qe, vt, rt) {
                    var Ye = Jo(e, se, null, qe),
                        Xe = vt == "ltr" == (rt == "after") ? "left" : "right",
                        Ue = rt == "after" ? Ye.begin : Ye.end - (/\s/.test(se.text.charAt(Ye.end - 1)) ? 2 : 1);
                    return He(Ue, Xe)[Xe]
                }
                var pt = mt(se, i.direction);
                return pi(pt, ne || 0, fe ? ? ye, function(qe, vt, rt, Ye) {
                    var Xe = rt == "ltr",
                        Ue = He(qe, Xe ? "left" : "right"),
                        gt = He(vt - 1, Xe ? "right" : "left"),
                        Qr = ne == null && qe == 0,
                        dr = fe == null && vt == ye,
                        lt = Ye == 0,
                        jt = !pt || Ye == pt.length - 1;
                    if (gt.top - Ue.top <= 3) {
                        var et = (u ? Qr : dr) && lt,
                            oo = (u ? dr : Qr) && jt,
                            tr = et ? a : (Xe ? Ue : gt).left,
                            Tr = oo ? s : (Xe ? gt : Ue).right;
                        d(tr, Ue.top, Tr - tr, Ue.bottom)
                    } else {
                        var Mr, ut, Vr, lo;
                        Xe ? (Mr = u && Qr && lt ? a : Ue.left, ut = u ? s : wt(qe, rt, "before"), Vr = u ? a : wt(vt, rt, "after"), lo = u && dr && jt ? s : gt.right) : (Mr = u ? wt(qe, rt, "before") : a, ut = !u && Qr && lt ? s : Ue.right, Vr = !u && dr && jt ? a : gt.left, lo = u ? wt(vt, rt, "after") : s), d(Mr, Ue.top, ut - Mr, Ue.bottom), Ue.bottom < gt.top && d(a, Ue.bottom, null, gt.top), d(Vr, gt.top, lo - Vr, gt.bottom)
                    }(!We || Zn(Ue, We) < 0) && (We = Ue), Zn(gt, We) < 0 && (We = gt), (!$e || Zn(Ue, $e) < 0) && ($e = Ue), Zn(gt, $e) < 0 && ($e = gt)
                }), {
                    start: We,
                    end: $e
                }
            }
            var x = t.from(),
                w = t.to();
            if (x.line == w.line) v(x.line, x.ch, w.ch);
            else {
                var P = oe(i, x.line),
                    H = oe(i, w.line),
                    q = qt(P) == qt(H),
                    J = v(x.line, x.ch, q ? P.text.length + 1 : null).end,
                    ee = v(w.line, q ? 0 : null, w.ch).start;
                q && (J.top < ee.top - 2 ? (d(J.right, J.top, null, J.bottom), d(a, ee.top, ee.left, ee.bottom)) : d(J.right, J.top, ee.left - J.right, J.bottom)), J.bottom < ee.top && d(a, J.bottom, null, ee.top)
            }
            n.appendChild(o)
        }

        function zi(e) {
            if (e.state.focused) {
                var t = e.display;
                clearInterval(t.blinker);
                var n = !0;
                t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function() {
                    e.hasFocus() || Ir(e), t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
                }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
            }
        }

        function tl(e) {
            e.hasFocus() || (e.display.input.focus(), e.state.focused || Bi(e))
        }

        function Fi(e) {
            e.state.delayingBlurEvent = !0, setTimeout(function() {
                e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, e.state.focused && Ir(e))
            }, 100)
        }

        function Bi(e, t) {
            e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1), e.options.readOnly != "nocursor" && (e.state.focused || (ve(e, "focus", e, t), e.state.focused = !0, Ce(e.display.wrapper, "CodeMirror-focused"), !e.curOp && e.display.selForContextMenu != e.doc.sel && (e.display.input.reset(), W && setTimeout(function() {
                return e.display.input.reset(!0)
            }, 20)), e.display.input.receivedFocus()), zi(e))
        }

        function Ir(e, t) {
            e.state.delayingBlurEvent || (e.state.focused && (ve(e, "blur", e, t), e.state.focused = !1, O(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
                e.state.focused || (e.display.shift = !1)
            }, 150))
        }

        function Jn(e) {
            for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
                var i = t.view[r],
                    o = e.options.lineWrapping,
                    l = void 0,
                    a = 0;
                if (!i.hidden) {
                    if (X && E < 8) {
                        var s = i.node.offsetTop + i.node.offsetHeight;
                        l = s - n, n = s
                    } else {
                        var u = i.node.getBoundingClientRect();
                        l = u.bottom - u.top, !o && i.text.firstChild && (a = i.text.firstChild.getBoundingClientRect().right - u.left - 1)
                    }
                    var d = i.line.height - l;
                    if ((d > .005 || d < -.005) && (yt(i.line, l), rl(i.line), i.rest))
                        for (var v = 0; v < i.rest.length; v++) rl(i.rest[v]);
                    if (a > e.display.sizerWidth) {
                        var x = Math.ceil(a / Hr(e.display));
                        x > e.display.maxLineLength && (e.display.maxLineLength = x, e.display.maxLine = i.line, e.display.maxLineChanged = !0)
                    }
                }
            }
        }

        function rl(e) {
            if (e.widgets)
                for (var t = 0; t < e.widgets.length; ++t) {
                    var n = e.widgets[t],
                        r = n.node.parentNode;
                    r && (n.height = r.offsetHeight)
                }
        }

        function Qn(e, t, n) {
            var r = n && n.top != null ? Math.max(0, n.top) : e.scroller.scrollTop;
            r = Math.floor(r - Xn(e));
            var i = n && n.bottom != null ? n.bottom : r + e.wrapper.clientHeight,
                o = _t(t, r),
                l = _t(t, i);
            if (n && n.ensure) {
                var a = n.ensure.from.line,
                    s = n.ensure.to.line;
                a < o ? (o = a, l = _t(t, Vt(oe(t, a)) + e.wrapper.clientHeight)) : Math.min(s, t.lastLine()) >= l && (o = _t(t, Vt(oe(t, s)) - e.wrapper.clientHeight), l = s)
            }
            return {
                from: o,
                to: Math.max(l, o + 1)
            }
        }

        function Ts(e, t) {
            if (!Ge(e, "scrollCursorIntoView")) {
                var n = e.display,
                    r = n.sizer.getBoundingClientRect(),
                    i = null;
                if (t.top + r.top < 0 ? i = !0 : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), i != null && !te) {
                    var o = p("div", "\u200B", null, `position: absolute;
                         top: ` + (t.top - n.viewOffset - Xn(e.display)) + `px;
                         height: ` + (t.bottom - t.top + Xt(e) + n.barHeight) + `px;
                         left: ` + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
                    e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o)
                }
            }
        }

        function Ms(e, t, n, r) {
            r == null && (r = 0);
            var i;
            !e.options.lineWrapping && t == n && (n = t.sticky == "before" ? U(t.line, t.ch + 1, "before") : t, t = t.ch ? U(t.line, t.sticky == "before" ? t.ch - 1 : t.ch, "after") : t);
            for (var o = 0; o < 5; o++) {
                var l = !1,
                    a = Ft(e, t),
                    s = !n || n == t ? a : Ft(e, n);
                i = {
                    left: Math.min(a.left, s.left),
                    top: Math.min(a.top, s.top) - r,
                    right: Math.max(a.left, s.left),
                    bottom: Math.max(a.bottom, s.bottom) + r
                };
                var u = Ei(e, i),
                    d = e.doc.scrollTop,
                    v = e.doc.scrollLeft;
                if (u.scrollTop != null && (gn(e, u.scrollTop), Math.abs(e.doc.scrollTop - d) > 1 && (l = !0)), u.scrollLeft != null && (kr(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - v) > 1 && (l = !0)), !l) break
            }
            return i
        }

        function As(e, t) {
            var n = Ei(e, t);
            n.scrollTop != null && gn(e, n.scrollTop), n.scrollLeft != null && kr(e, n.scrollLeft)
        }

        function Ei(e, t) {
            var n = e.display,
                r = Er(e.display);
            t.top < 0 && (t.top = 0);
            var i = e.curOp && e.curOp.scrollTop != null ? e.curOp.scrollTop : n.scroller.scrollTop,
                o = Ci(e),
                l = {};
            t.bottom - t.top > o && (t.bottom = t.top + o);
            var a = e.doc.height + Si(n),
                s = t.top < r,
                u = t.bottom > a - r;
            if (t.top < i) l.scrollTop = s ? 0 : t.top;
            else if (t.bottom > i + o) {
                var d = Math.min(t.top, (u ? a : t.bottom) - o);
                d != i && (l.scrollTop = d)
            }
            var v = e.options.fixedGutter ? 0 : n.gutters.offsetWidth,
                x = e.curOp && e.curOp.scrollLeft != null ? e.curOp.scrollLeft : n.scroller.scrollLeft - v,
                w = yr(e) - n.gutters.offsetWidth,
                P = t.right - t.left > w;
            return P && (t.right = t.left + w), t.left < 10 ? l.scrollLeft = 0 : t.left < x ? l.scrollLeft = Math.max(0, t.left + v - (P ? 0 : 10)) : t.right > w + x - 3 && (l.scrollLeft = t.right + (P ? 0 : 10) - w), l
        }

        function Hi(e, t) {
            t != null && (Vn(e), e.curOp.scrollTop = (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) + t)
        }

        function Rr(e) {
            Vn(e);
            var t = e.getCursor();
            e.curOp.scrollToPos = {
                from: t,
                to: t,
                margin: e.options.cursorScrollMargin
            }
        }

        function vn(e, t, n) {
            (t != null || n != null) && Vn(e), t != null && (e.curOp.scrollLeft = t), n != null && (e.curOp.scrollTop = n)
        }

        function Ns(e, t) {
            Vn(e), e.curOp.scrollToPos = t
        }

        function Vn(e) {
            var t = e.curOp.scrollToPos;
            if (t) {
                e.curOp.scrollToPos = null;
                var n = jo(e, t.from),
                    r = jo(e, t.to);
                nl(e, n, r, t.margin)
            }
        }

        function nl(e, t, n, r) {
            var i = Ei(e, {
                left: Math.min(t.left, n.left),
                top: Math.min(t.top, n.top) - r,
                right: Math.max(t.right, n.right),
                bottom: Math.max(t.bottom, n.bottom) + r
            });
            vn(e, i.scrollLeft, i.scrollTop)
        }

        function gn(e, t) {
            Math.abs(e.doc.scrollTop - t) < 2 || (j || Ri(e, {
                top: t
            }), il(e, t, !0), j && Ri(e), bn(e, 100))
        }

        function il(e, t, n) {
            t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t)), !(e.display.scroller.scrollTop == t && !n) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
        }

        function kr(e, t, n, r) {
            t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)), !((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r) && (e.doc.scrollLeft = t, ul(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
        }

        function mn(e) {
            var t = e.display,
                n = t.gutters.offsetWidth,
                r = Math.round(e.doc.height + Si(e.display));
            return {
                clientHeight: t.scroller.clientHeight,
                viewHeight: t.wrapper.clientHeight,
                scrollWidth: t.scroller.scrollWidth,
                clientWidth: t.scroller.clientWidth,
                viewWidth: t.wrapper.clientWidth,
                barLeft: e.options.fixedGutter ? n : 0,
                docHeight: r,
                scrollHeight: r + Xt(e) + t.barHeight,
                nativeBarWidth: t.nativeBarWidth,
                gutterWidth: n
            }
        }
        var Sr = function(e, t, n) {
            this.cm = n;
            var r = this.vert = p("div", [p("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
                i = this.horiz = p("div", [p("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
            r.tabIndex = i.tabIndex = -1, e(r), e(i), he(r, "scroll", function() {
                r.clientHeight && t(r.scrollTop, "vertical")
            }), he(i, "scroll", function() {
                i.clientWidth && t(i.scrollLeft, "horizontal")
            }), this.checkedZeroWidth = !1, X && E < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
        };
        Sr.prototype.update = function(e) {
            var t = e.scrollWidth > e.clientWidth + 1,
                n = e.scrollHeight > e.clientHeight + 1,
                r = e.nativeBarWidth;
            if (n) {
                this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
                var i = e.viewHeight - (t ? r : 0);
                this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
            } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
            if (t) {
                this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
                var o = e.viewWidth - e.barLeft - (n ? r : 0);
                this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px"
            } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
            return !this.checkedZeroWidth && e.clientHeight > 0 && (r == 0 && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
                right: n ? r : 0,
                bottom: t ? r : 0
            }
        }, Sr.prototype.setScrollLeft = function(e) {
            this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
        }, Sr.prototype.setScrollTop = function(e) {
            this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
        }, Sr.prototype.zeroWidthHack = function() {
            var e = c && !le ? "12px" : "18px";
            this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new Be, this.disableVert = new Be
        }, Sr.prototype.enableZeroWidthBar = function(e, t, n) {
            e.style.pointerEvents = "auto";

            function r() {
                var i = e.getBoundingClientRect(),
                    o = n == "vert" ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1);
                o != e ? e.style.pointerEvents = "none" : t.set(1e3, r)
            }
            t.set(1e3, r)
        }, Sr.prototype.clear = function() {
            var e = this.horiz.parentNode;
            e.removeChild(this.horiz), e.removeChild(this.vert)
        };
        var yn = function() {};
        yn.prototype.update = function() {
            return {
                bottom: 0,
                right: 0
            }
        }, yn.prototype.setScrollLeft = function() {}, yn.prototype.setScrollTop = function() {}, yn.prototype.clear = function() {};

        function Kr(e, t) {
            t || (t = mn(e));
            var n = e.display.barWidth,
                r = e.display.barHeight;
            ol(e, t);
            for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++) n != e.display.barWidth && e.options.lineWrapping && Jn(e), ol(e, mn(e)), n = e.display.barWidth, r = e.display.barHeight
        }

        function ol(e, t) {
            var n = e.display,
                r = n.scrollbars.update(t);
            n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = ""
        }
        var ll = {
            native: Sr,
            null: yn
        };

        function al(e) {
            e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && O(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new ll[e.options.scrollbarStyle](function(t) {
                e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), he(t, "mousedown", function() {
                    e.state.focused && setTimeout(function() {
                        return e.display.input.focus()
                    }, 0)
                }), t.setAttribute("cm-not-content", "true")
            }, function(t, n) {
                n == "horizontal" ? kr(e, t) : gn(e, t)
            }, e), e.display.scrollbars.addClass && Ce(e.display.wrapper, e.display.scrollbars.addClass)
        }
        var Os = 0;

        function Cr(e) {
            e.curOp = {
                cm: e,
                viewChanged: !1,
                startHeight: e.doc.height,
                forceUpdate: !1,
                updateInput: 0,
                typing: !1,
                changeObjs: null,
                cursorActivityHandlers: null,
                cursorActivityCalled: 0,
                selectionChanged: !1,
                updateMaxLine: !1,
                scrollLeft: null,
                scrollTop: null,
                scrollToPos: null,
                focus: !1,
                id: ++Os,
                markArrays: null
            }, as(e.curOp)
        }

        function Lr(e) {
            var t = e.curOp;
            t && us(t, function(n) {
                for (var r = 0; r < n.ops.length; r++) n.ops[r].cm.curOp = null;
                Ds(n)
            })
        }

        function Ds(e) {
            for (var t = e.ops, n = 0; n < t.length; n++) Ps(t[n]);
            for (var r = 0; r < t.length; r++) Ws(t[r]);
            for (var i = 0; i < t.length; i++) zs(t[i]);
            for (var o = 0; o < t.length; o++) Fs(t[o]);
            for (var l = 0; l < t.length; l++) Bs(t[l])
        }

        function Ps(e) {
            var t = e.cm,
                n = t.display;
            Hs(t), e.updateMaxLine && xi(t), e.mustUpdate = e.viewChanged || e.forceUpdate || e.scrollTop != null || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new $n(t, e.mustUpdate && {
                top: e.scrollTop,
                ensure: e.scrollToPos
            }, e.forceUpdate)
        }

        function Ws(e) {
            e.updatedDisplay = e.mustUpdate && Ii(e.cm, e.update)
        }

        function zs(e) {
            var t = e.cm,
                n = t.display;
            e.updatedDisplay && Jn(t), e.barMeasure = mn(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Ro(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Xt(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - yr(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection())
        }

        function Fs(e) {
            var t = e.cm;
            e.adjustWidthTo != null && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && kr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
            var n = e.focus && e.focus == de();
            e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && Kr(t, e.barMeasure), e.updatedDisplay && Ui(t, e.barMeasure), e.selectionChanged && zi(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && tl(e.cm)
        }

        function Bs(e) {
            var t = e.cm,
                n = t.display,
                r = t.doc;
            if (e.updatedDisplay && sl(t, e.update), n.wheelStartX != null && (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos) && (n.wheelStartX = n.wheelStartY = null), e.scrollTop != null && il(t, e.scrollTop, e.forceScroll), e.scrollLeft != null && kr(t, e.scrollLeft, !0, !0), e.scrollToPos) {
                var i = Ms(t, $(r, e.scrollToPos.from), $(r, e.scrollToPos.to), e.scrollToPos.margin);
                Ts(t, i)
            }
            var o = e.maybeHiddenMarkers,
                l = e.maybeUnhiddenMarkers;
            if (o)
                for (var a = 0; a < o.length; ++a) o[a].lines.length || ve(o[a], "hide");
            if (l)
                for (var s = 0; s < l.length; ++s) l[s].lines.length && ve(l[s], "unhide");
            n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && ve(t, "changes", t, e.changeObjs), e.update && e.update.finish()
        }

        function bt(e, t) {
            if (e.curOp) return t();
            Cr(e);
            try {
                return t()
            } finally {
                Lr(e)
            }
        }

        function Qe(e, t) {
            return function() {
                if (e.curOp) return t.apply(e, arguments);
                Cr(e);
                try {
                    return t.apply(e, arguments)
                } finally {
                    Lr(e)
                }
            }
        }

        function st(e) {
            return function() {
                if (this.curOp) return e.apply(this, arguments);
                Cr(this);
                try {
                    return e.apply(this, arguments)
                } finally {
                    Lr(this)
                }
            }
        }

        function Ve(e) {
            return function() {
                var t = this.cm;
                if (!t || t.curOp) return e.apply(this, arguments);
                Cr(t);
                try {
                    return e.apply(this, arguments)
                } finally {
                    Lr(t)
                }
            }
        }

        function bn(e, t) {
            e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, Ie(Es, e))
        }

        function Es(e) {
            var t = e.doc;
            if (!(t.highlightFrontier >= e.display.viewTo)) {
                var n = +new Date + e.options.workTime,
                    r = sn(e, t.highlightFrontier),
                    i = [];
                t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function(o) {
                    if (r.line >= e.display.viewFrom) {
                        var l = o.styles,
                            a = o.text.length > e.options.maxHighlightLength ? Lt(t.mode, r.state) : null,
                            s = po(e, o, r, !0);
                        a && (r.state = a), o.styles = s.styles;
                        var u = o.styleClasses,
                            d = s.classes;
                        d ? o.styleClasses = d : u && (o.styleClasses = null);
                        for (var v = !l || l.length != o.styles.length || u != d && (!u || !d || u.bgClass != d.bgClass || u.textClass != d.textClass), x = 0; !v && x < l.length; ++x) v = l[x] != o.styles[x];
                        v && i.push(r.line), o.stateAfter = r.save(), r.nextLine()
                    } else o.text.length <= e.options.maxHighlightLength && vi(e, o.text, r), o.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();
                    if (+new Date > n) return bn(e, e.options.workDelay), !0
                }), t.highlightFrontier = r.line, t.modeFrontier = Math.max(t.modeFrontier, r.line), i.length && bt(e, function() {
                    for (var o = 0; o < i.length; o++) lr(e, i[o], "text")
                })
            }
        }
        var $n = function(e, t, n) {
            var r = e.display;
            this.viewport = t, this.visible = Qn(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = yr(e), this.force = n, this.dims = Di(e), this.events = []
        };
        $n.prototype.signal = function(e, t) {
            tt(e, t) && this.events.push(arguments)
        }, $n.prototype.finish = function() {
            for (var e = 0; e < this.events.length; e++) ve.apply(null, this.events[e])
        };

        function Hs(e) {
            var t = e.display;
            !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Xt(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Xt(e) + "px", t.scrollbarsClipped = !0)
        }

        function Is(e) {
            if (e.hasFocus()) return null;
            var t = de();
            if (!t || !V(e.display.lineDiv, t)) return null;
            var n = {
                activeElt: t
            };
            if (window.getSelection) {
                var r = window.getSelection();
                r.anchorNode && r.extend && V(e.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode, n.anchorOffset = r.anchorOffset, n.focusNode = r.focusNode, n.focusOffset = r.focusOffset)
            }
            return n
        }

        function Rs(e) {
            if (!(!e || !e.activeElt || e.activeElt == de()) && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && V(document.body, e.anchorNode) && V(document.body, e.focusNode))) {
                var t = window.getSelection(),
                    n = document.createRange();
                n.setEnd(e.anchorNode, e.anchorOffset), n.collapse(!1), t.removeAllRanges(), t.addRange(n), t.extend(e.focusNode, e.focusOffset)
            }
        }

        function Ii(e, t) {
            var n = e.display,
                r = e.doc;
            if (t.editorIsHidden) return ar(e), !1;
            if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && Vo(e) == 0) return !1;
            fl(e) && (ar(e), t.dims = Di(e));
            var i = r.first + r.size,
                o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
                l = Math.min(i, t.visible.to + e.options.viewportMargin);
            n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)), n.viewTo > l && n.viewTo - l < 20 && (l = Math.min(i, n.viewTo)), Qt && (o = bi(e.doc, o), l = Ao(e.doc, l));
            var a = o != n.viewFrom || l != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
            Cs(e, o, l), n.viewOffset = Vt(oe(e.doc, n.viewFrom)), e.display.mover.style.top = n.viewOffset + "px";
            var s = Vo(e);
            if (!a && s == 0 && !t.force && n.renderedView == n.view && (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo)) return !1;
            var u = Is(e);
            return s > 4 && (n.lineDiv.style.display = "none"), Ks(e, n.updateLineNumbers, t.dims), s > 4 && (n.lineDiv.style.display = ""), n.renderedView = n.view, Rs(u), Z(n.cursorDiv), Z(n.selectionDiv), n.gutters.style.height = n.sizer.style.minHeight = 0, a && (n.lastWrapHeight = t.wrapperHeight, n.lastWrapWidth = t.wrapperWidth, bn(e, 400)), n.updateLineNumbers = null, !0
        }

        function sl(e, t) {
            for (var n = t.viewport, r = !0;; r = !1) {
                if (!r || !e.options.lineWrapping || t.oldDisplayWidth == yr(e)) {
                    if (n && n.top != null && (n = {
                            top: Math.min(e.doc.height + Si(e.display) - Ci(e), n.top)
                        }), t.visible = Qn(e.display, e.doc, n), t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo) break
                } else r && (t.visible = Qn(e.display, e.doc, n));
                if (!Ii(e, t)) break;
                Jn(e);
                var i = mn(e);
                pn(e), Kr(e, i), Ui(e, i), t.force = !1
            }
            t.signal(e, "update", e), (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo) && (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
        }

        function Ri(e, t) {
            var n = new $n(e, t);
            if (Ii(e, n)) {
                Jn(e), sl(e, n);
                var r = mn(e);
                pn(e), Kr(e, r), Ui(e, r), n.finish()
            }
        }

        function Ks(e, t, n) {
            var r = e.display,
                i = e.options.lineNumbers,
                o = r.lineDiv,
                l = o.firstChild;

            function a(P) {
                var H = P.nextSibling;
                return W && c && e.display.currentWheelTarget == P ? P.style.display = "none" : P.parentNode.removeChild(P), H
            }
            for (var s = r.view, u = r.viewFrom, d = 0; d < s.length; d++) {
                var v = s[d];
                if (!v.hidden)
                    if (!v.node || v.node.parentNode != o) {
                        var x = ps(e, v, u, n);
                        o.insertBefore(x, l)
                    } else {
                        for (; l != v.node;) l = a(l);
                        var w = i && t != null && t <= u && v.lineNumber;
                        v.changes && (ae(v.changes, "gutter") > -1 && (w = !1), Wo(e, v, u, n)), w && (Z(v.lineNumber), v.lineNumber.appendChild(document.createTextNode(an(e.options, u)))), l = v.node.nextSibling
                    }
                u += v.size
            }
            for (; l;) l = a(l)
        }

        function Ki(e) {
            var t = e.gutters.offsetWidth;
            e.sizer.style.marginLeft = t + "px", Je(e, "gutterChanged", e)
        }

        function Ui(e, t) {
            e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Xt(e) + "px"
        }

        function ul(e) {
            var t = e.display,
                n = t.view;
            if (!(!t.alignWidgets && (!t.gutters.firstChild || !e.options.fixedGutter))) {
                for (var r = Pi(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", l = 0; l < n.length; l++)
                    if (!n[l].hidden) {
                        e.options.fixedGutter && (n[l].gutter && (n[l].gutter.style.left = o), n[l].gutterBackground && (n[l].gutterBackground.style.left = o));
                        var a = n[l].alignable;
                        if (a)
                            for (var s = 0; s < a.length; s++) a[s].style.left = o
                    }
                e.options.fixedGutter && (t.gutters.style.left = r + i + "px")
            }
        }

        function fl(e) {
            if (!e.options.lineNumbers) return !1;
            var t = e.doc,
                n = an(e.options, t.first + t.size - 1),
                r = e.display;
            if (n.length != r.lineNumChars) {
                var i = r.measure.appendChild(p("div", [p("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                    o = i.firstChild.offsetWidth,
                    l = i.offsetWidth - o;
                return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - l) + 1, r.lineNumWidth = r.lineNumInnerWidth + l, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", Ki(e.display), !0
            }
            return !1
        }

        function _i(e, t) {
            for (var n = [], r = !1, i = 0; i < e.length; i++) {
                var o = e[i],
                    l = null;
                if (typeof o != "string" && (l = o.style, o = o.className), o == "CodeMirror-linenumbers")
                    if (t) r = !0;
                    else continue;
                n.push({
                    className: o,
                    style: l
                })
            }
            return t && !r && n.push({
                className: "CodeMirror-linenumbers",
                style: null
            }), n
        }

        function cl(e) {
            var t = e.gutters,
                n = e.gutterSpecs;
            Z(t), e.lineGutter = null;
            for (var r = 0; r < n.length; ++r) {
                var i = n[r],
                    o = i.className,
                    l = i.style,
                    a = t.appendChild(p("div", null, "CodeMirror-gutter " + o));
                l && (a.style.cssText = l), o == "CodeMirror-linenumbers" && (e.lineGutter = a, a.style.width = (e.lineNumWidth || 1) + "px")
            }
            t.style.display = n.length ? "" : "none", Ki(e)
        }

        function wn(e) {
            cl(e.display), ht(e), ul(e)
        }

        function Us(e, t, n, r) {
            var i = this;
            this.input = n, i.scrollbarFiller = p("div", null, "CodeMirror-scrollbar-filler"), i.scrollbarFiller.setAttribute("cm-not-content", "true"), i.gutterFiller = p("div", null, "CodeMirror-gutter-filler"), i.gutterFiller.setAttribute("cm-not-content", "true"), i.lineDiv = h("div", null, "CodeMirror-code"), i.selectionDiv = p("div", null, null, "position: relative; z-index: 1"), i.cursorDiv = p("div", null, "CodeMirror-cursors"), i.measure = p("div", null, "CodeMirror-measure"), i.lineMeasure = p("div", null, "CodeMirror-measure"), i.lineSpace = h("div", [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv], null, "position: relative; outline: none");
            var o = h("div", [i.lineSpace], "CodeMirror-lines");
            i.mover = p("div", [o], null, "position: relative"), i.sizer = p("div", [i.mover], "CodeMirror-sizer"), i.sizerWidth = null, i.heightForcer = p("div", null, null, "position: absolute; height: " + pe + "px; width: 1px;"), i.gutters = p("div", null, "CodeMirror-gutters"), i.lineGutter = null, i.scroller = p("div", [i.sizer, i.heightForcer, i.gutters], "CodeMirror-scroll"), i.scroller.setAttribute("tabIndex", "-1"), i.wrapper = p("div", [i.scrollbarFiller, i.gutterFiller, i.scroller], "CodeMirror"), X && E < 8 && (i.gutters.style.zIndex = -1, i.scroller.style.paddingRight = 0), !W && !(j && T) && (i.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)), i.viewFrom = i.viewTo = t.first, i.reportedViewFrom = i.reportedViewTo = t.first, i.view = [], i.renderedView = null, i.externalMeasured = null, i.viewOffset = 0, i.lastWrapHeight = i.lastWrapWidth = 0, i.updateLineNumbers = null, i.nativeBarWidth = i.barHeight = i.barWidth = 0, i.scrollbarsClipped = !1, i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null, i.alignWidgets = !1, i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null, i.maxLine = null, i.maxLineLength = 0, i.maxLineChanged = !1, i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null, i.shift = !1, i.selForContextMenu = null, i.activeTouch = null, i.gutterSpecs = _i(r.gutters, r.lineNumbers), cl(i), n.init(i)
        }
        var ei = 0,
            Mt = null;
        X ? Mt = -.53 : j ? Mt = 15 : C ? Mt = -.7 : G && (Mt = -1 / 3);

        function hl(e) {
            var t = e.wheelDeltaX,
                n = e.wheelDeltaY;
            return t == null && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), n == null && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : n == null && (n = e.wheelDelta), {
                x: t,
                y: n
            }
        }

        function _s(e) {
            var t = hl(e);
            return t.x *= Mt, t.y *= Mt, t
        }

        function dl(e, t) {
            var n = hl(t),
                r = n.x,
                i = n.y,
                o = e.display,
                l = o.scroller,
                a = l.scrollWidth > l.clientWidth,
                s = l.scrollHeight > l.clientHeight;
            if (r && a || i && s) {
                if (i && c && W) {
                    e: for (var u = t.target, d = o.view; u != l; u = u.parentNode)
                        for (var v = 0; v < d.length; v++)
                            if (d[v].node == u) {
                                e.display.currentWheelTarget = u;
                                break e
                            }
                }
                if (r && !j && !N && Mt != null) {
                    i && s && gn(e, Math.max(0, l.scrollTop + i * Mt)), kr(e, Math.max(0, l.scrollLeft + r * Mt)), (!i || i && s) && nt(t), o.wheelStartX = null;
                    return
                }
                if (i && Mt != null) {
                    var x = i * Mt,
                        w = e.doc.scrollTop,
                        P = w + o.wrapper.clientHeight;
                    x < 0 ? w = Math.max(0, w + x - 50) : P = Math.min(e.doc.height, P + x + 50), Ri(e, {
                        top: w,
                        bottom: P
                    })
                }
                ei < 20 && (o.wheelStartX == null ? (o.wheelStartX = l.scrollLeft, o.wheelStartY = l.scrollTop, o.wheelDX = r, o.wheelDY = i, setTimeout(function() {
                    if (o.wheelStartX != null) {
                        var H = l.scrollLeft - o.wheelStartX,
                            q = l.scrollTop - o.wheelStartY,
                            J = q && o.wheelDY && q / o.wheelDY || H && o.wheelDX && H / o.wheelDX;
                        o.wheelStartX = o.wheelStartY = null, J && (Mt = (Mt * ei + J) / (ei + 1), ++ei)
                    }
                }, 200)) : (o.wheelDX += r, o.wheelDY += i))
            }
        }
        var At = function(e, t) {
            this.ranges = e, this.primIndex = t
        };
        At.prototype.primary = function() {
            return this.ranges[this.primIndex]
        }, At.prototype.equals = function(e) {
            if (e == this) return !0;
            if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
            for (var t = 0; t < this.ranges.length; t++) {
                var n = this.ranges[t],
                    r = e.ranges[t];
                if (!g(n.anchor, r.anchor) || !g(n.head, r.head)) return !1
            }
            return !0
        }, At.prototype.deepCopy = function() {
            for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new Ae(B(this.ranges[t].anchor), B(this.ranges[t].head));
            return new At(e, this.primIndex)
        }, At.prototype.somethingSelected = function() {
            for (var e = 0; e < this.ranges.length; e++)
                if (!this.ranges[e].empty()) return !0;
            return !1
        }, At.prototype.contains = function(e, t) {
            t || (t = e);
            for (var n = 0; n < this.ranges.length; n++) {
                var r = this.ranges[n];
                if (f(t, r.from()) >= 0 && f(e, r.to()) <= 0) return n
            }
            return -1
        };
        var Ae = function(e, t) {
            this.anchor = e, this.head = t
        };
        Ae.prototype.from = function() {
            return ge(this.anchor, this.head)
        }, Ae.prototype.to = function() {
            return _(this.anchor, this.head)
        }, Ae.prototype.empty = function() {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
        };

        function Bt(e, t, n) {
            var r = e && e.options.selectionsMayTouch,
                i = t[n];
            t.sort(function(x, w) {
                return f(x.from(), w.from())
            }), n = ae(t, i);
            for (var o = 1; o < t.length; o++) {
                var l = t[o],
                    a = t[o - 1],
                    s = f(a.to(), l.from());
                if (r && !l.empty() ? s > 0 : s >= 0) {
                    var u = ge(a.from(), l.from()),
                        d = _(a.to(), l.to()),
                        v = a.empty() ? l.from() == l.head : a.from() == a.head;
                    o <= n && --n, t.splice(--o, 2, new Ae(v ? d : u, v ? u : d))
                }
            }
            return new At(t, n)
        }

        function sr(e, t) {
            return new At([new Ae(e, t || e)], 0)
        }

        function ur(e) {
            return e.text ? U(e.from.line + e.text.length - 1, we(e.text).length + (e.text.length == 1 ? e.from.ch : 0)) : e.to
        }

        function pl(e, t) {
            if (f(e, t.from) < 0) return e;
            if (f(e, t.to) <= 0) return ur(t);
            var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
                r = e.ch;
            return e.line == t.to.line && (r += ur(t).ch - t.to.ch), U(n, r)
        }

        function Gi(e, t) {
            for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
                var i = e.sel.ranges[r];
                n.push(new Ae(pl(i.anchor, t), pl(i.head, t)))
            }
            return Bt(e.cm, n, e.sel.primIndex)
        }

        function vl(e, t, n) {
            return e.line == t.line ? U(n.line, e.ch - t.ch + n.ch) : U(n.line + (e.line - t.line), e.ch)
        }

        function Gs(e, t, n) {
            for (var r = [], i = U(e.first, 0), o = i, l = 0; l < t.length; l++) {
                var a = t[l],
                    s = vl(a.from, i, o),
                    u = vl(ur(a), i, o);
                if (i = a.to, o = u, n == "around") {
                    var d = e.sel.ranges[l],
                        v = f(d.head, d.anchor) < 0;
                    r[l] = new Ae(v ? u : s, v ? s : u)
                } else r[l] = new Ae(s, s)
            }
            return new At(r, e.sel.primIndex)
        }

        function qi(e) {
            e.doc.mode = Pr(e.options, e.doc.modeOption), xn(e)
        }

        function xn(e) {
            e.doc.iter(function(t) {
                t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null)
            }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, bn(e, 100), e.state.modeGen++, e.curOp && ht(e)
        }

        function gl(e, t) {
            return t.from.ch == 0 && t.to.ch == 0 && we(t.text) == "" && (!e.cm || e.cm.options.wholeLineUpdateBefore)
        }

        function Xi(e, t, n, r) {
            function i(ee) {
                return n ? n[ee] : null
            }

            function o(ee, Q, ne) {
                Va(ee, Q, ne, r), Je(ee, "change", ee, t)
            }

            function l(ee, Q) {
                for (var ne = [], fe = ee; fe < Q; ++fe) ne.push(new zr(u[fe], i(fe), r));
                return ne
            }
            var a = t.from,
                s = t.to,
                u = t.text,
                d = oe(e, a.line),
                v = oe(e, s.line),
                x = we(u),
                w = i(u.length - 1),
                P = s.line - a.line;
            if (t.full) e.insert(0, l(0, u.length)), e.remove(u.length, e.size - u.length);
            else if (gl(e, t)) {
                var H = l(0, u.length - 1);
                o(v, v.text, w), P && e.remove(a.line, P), H.length && e.insert(a.line, H)
            } else if (d == v)
                if (u.length == 1) o(d, d.text.slice(0, a.ch) + x + d.text.slice(s.ch), w);
                else {
                    var q = l(1, u.length - 1);
                    q.push(new zr(x + d.text.slice(s.ch), w, r)), o(d, d.text.slice(0, a.ch) + u[0], i(0)), e.insert(a.line + 1, q)
                }
            else if (u.length == 1) o(d, d.text.slice(0, a.ch) + u[0] + v.text.slice(s.ch), i(0)), e.remove(a.line + 1, P);
            else {
                o(d, d.text.slice(0, a.ch) + u[0], i(0)), o(v, x + v.text.slice(s.ch), w);
                var J = l(1, u.length - 1);
                P > 1 && e.remove(a.line + 1, P - 1), e.insert(a.line + 1, J)
            }
            Je(e, "change", e, t)
        }

        function fr(e, t, n) {
            function r(i, o, l) {
                if (i.linked)
                    for (var a = 0; a < i.linked.length; ++a) {
                        var s = i.linked[a];
                        if (s.doc != o) {
                            var u = l && s.sharedHist;
                            n && !u || (t(s.doc, u), r(s.doc, i, u))
                        }
                    }
            }
            r(e, null, !0)
        }

        function ml(e, t) {
            if (t.cm) throw new Error("This document is already in use.");
            e.doc = t, t.cm = e, Wi(e), qi(e), yl(e), e.options.direction = t.direction, e.options.lineWrapping || xi(e), e.options.mode = t.modeOption, ht(e)
        }

        function yl(e) {
            (e.doc.direction == "rtl" ? Ce : O)(e.display.lineDiv, "CodeMirror-rtl")
        }

        function qs(e) {
            bt(e, function() {
                yl(e), ht(e)
            })
        }

        function ti(e) {
            this.done = [], this.undone = [], this.undoDepth = e ? e.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e ? e.maxGeneration : 1
        }

        function Yi(e, t) {
            var n = {
                from: B(t.from),
                to: ur(t),
                text: Ut(e, t.from, t.to)
            };
            return xl(e, n, t.from.line, t.to.line + 1), fr(e, function(r) {
                return xl(r, n, t.from.line, t.to.line + 1)
            }, !0), n
        }

        function bl(e) {
            for (; e.length;) {
                var t = we(e);
                if (t.ranges) e.pop();
                else break
            }
        }

        function Xs(e, t) {
            if (t) return bl(e.done), we(e.done);
            if (e.done.length && !we(e.done).ranges) return we(e.done);
            if (e.done.length > 1 && !e.done[e.done.length - 2].ranges) return e.done.pop(), we(e.done)
        }

        function wl(e, t, n, r) {
            var i = e.history;
            i.undone.length = 0;
            var o = +new Date,
                l, a;
            if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && (t.origin.charAt(0) == "+" && i.lastModTime > o - (e.cm ? e.cm.options.historyEventDelay : 500) || t.origin.charAt(0) == "*")) && (l = Xs(i, i.lastOp == r))) a = we(l.changes), f(t.from, t.to) == 0 && f(t.from, a.to) == 0 ? a.to = ur(t) : l.changes.push(Yi(e, t));
            else {
                var s = we(i.done);
                for ((!s || !s.ranges) && ri(e.sel, i.done), l = {
                        changes: [Yi(e, t)],
                        generation: i.generation
                    }, i.done.push(l); i.done.length > i.undoDepth;) i.done.shift(), i.done[0].ranges || i.done.shift()
            }
            i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = o, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, a || ve(e, "historyAdded")
        }

        function Ys(e, t, n, r) {
            var i = t.charAt(0);
            return i == "*" || i == "+" && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
        }

        function js(e, t, n, r) {
            var i = e.history,
                o = r && r.origin;
            n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || Ys(e, o, we(i.done), t)) ? i.done[i.done.length - 1] = t : ri(t, i.done), i.lastSelTime = +new Date, i.lastSelOrigin = o, i.lastSelOp = n, r && r.clearRedo !== !1 && bl(i.undone)
        }

        function ri(e, t) {
            var n = we(t);
            n && n.ranges && n.equals(e) || t.push(e)
        }

        function xl(e, t, n, r) {
            var i = t["spans_" + e.id],
                o = 0;
            e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(l) {
                l.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = l.markedSpans), ++o
            })
        }

        function Zs(e) {
            if (!e) return null;
            for (var t, n = 0; n < e.length; ++n) e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
            return t ? t.length ? t : null : e
        }

        function Js(e, t) {
            var n = t["spans_" + e.id];
            if (!n) return null;
            for (var r = [], i = 0; i < t.text.length; ++i) r.push(Zs(n[i]));
            return r
        }

        function kl(e, t) {
            var n = Js(e, t),
                r = mi(e, t);
            if (!n) return r;
            if (!r) return n;
            for (var i = 0; i < n.length; ++i) {
                var o = n[i],
                    l = r[i];
                if (o && l) e: for (var a = 0; a < l.length; ++a) {
                    for (var s = l[a], u = 0; u < o.length; ++u)
                        if (o[u].marker == s.marker) continue e;
                    o.push(s)
                } else l && (n[i] = l)
            }
            return n
        }

        function Ur(e, t, n) {
            for (var r = [], i = 0; i < e.length; ++i) {
                var o = e[i];
                if (o.ranges) {
                    r.push(n ? At.prototype.deepCopy.call(o) : o);
                    continue
                }
                var l = o.changes,
                    a = [];
                r.push({
                    changes: a
                });
                for (var s = 0; s < l.length; ++s) {
                    var u = l[s],
                        d = void 0;
                    if (a.push({
                            from: u.from,
                            to: u.to,
                            text: u.text
                        }), t)
                        for (var v in u)(d = v.match(/^spans_(\d+)$/)) && ae(t, Number(d[1])) > -1 && (we(a)[v] = u[v], delete u[v])
                }
            }
            return r
        }

        function ji(e, t, n, r) {
            if (r) {
                var i = e.anchor;
                if (n) {
                    var o = f(t, i) < 0;
                    o != f(n, i) < 0 ? (i = t, t = n) : o != f(t, n) < 0 && (t = n)
                }
                return new Ae(i, t)
            } else return new Ae(n || t, t)
        }

        function ni(e, t, n, r, i) {
            i == null && (i = e.cm && (e.cm.display.shift || e.extend)), ot(e, new At([ji(e.sel.primary(), t, n, i)], 0), r)
        }

        function Sl(e, t, n) {
            for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) r[o] = ji(e.sel.ranges[o], t[o], null, i);
            var l = Bt(e.cm, r, e.sel.primIndex);
            ot(e, l, n)
        }

        function Zi(e, t, n, r) {
            var i = e.sel.ranges.slice(0);
            i[t] = n, ot(e, Bt(e.cm, i, e.sel.primIndex), r)
        }

        function Cl(e, t, n, r) {
            ot(e, sr(t, n), r)
        }

        function Qs(e, t, n) {
            var r = {
                ranges: t.ranges,
                update: function(i) {
                    this.ranges = [];
                    for (var o = 0; o < i.length; o++) this.ranges[o] = new Ae($(e, i[o].anchor), $(e, i[o].head))
                },
                origin: n && n.origin
            };
            return ve(e, "beforeSelectionChange", e, r), e.cm && ve(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? Bt(e.cm, r.ranges, r.ranges.length - 1) : t
        }

        function Ll(e, t, n) {
            var r = e.history.done,
                i = we(r);
            i && i.ranges ? (r[r.length - 1] = t, ii(e, t, n)) : ot(e, t, n)
        }

        function ot(e, t, n) {
            ii(e, t, n), js(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
        }

        function ii(e, t, n) {
            (tt(e, "beforeSelectionChange") || e.cm && tt(e.cm, "beforeSelectionChange")) && (t = Qs(e, t, n));
            var r = n && n.bias || (f(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
            Tl(e, Al(e, t, r, !0)), !(n && n.scroll === !1) && e.cm && e.cm.getOption("readOnly") != "nocursor" && Rr(e.cm)
        }

        function Tl(e, t) {
            t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, Nr(e.cm)), Je(e, "cursorActivity", e))
        }

        function Ml(e) {
            Tl(e, Al(e, e.sel, null, !1))
        }

        function Al(e, t, n, r) {
            for (var i, o = 0; o < t.ranges.length; o++) {
                var l = t.ranges[o],
                    a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                    s = oi(e, l.anchor, a && a.anchor, n, r),
                    u = oi(e, l.head, a && a.head, n, r);
                (i || s != l.anchor || u != l.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new Ae(s, u))
            }
            return i ? Bt(e.cm, i, t.primIndex) : t
        }

        function _r(e, t, n, r, i) {
            var o = oe(e, t.line);
            if (o.markedSpans)
                for (var l = 0; l < o.markedSpans.length; ++l) {
                    var a = o.markedSpans[l],
                        s = a.marker,
                        u = "selectLeft" in s ? !s.selectLeft : s.inclusiveLeft,
                        d = "selectRight" in s ? !s.selectRight : s.inclusiveRight;
                    if ((a.from == null || (u ? a.from <= t.ch : a.from < t.ch)) && (a.to == null || (d ? a.to >= t.ch : a.to > t.ch))) {
                        if (i && (ve(s, "beforeCursorEnter"), s.explicitlyCleared))
                            if (o.markedSpans) {
                                --l;
                                continue
                            } else break;
                        if (!s.atomic) continue;
                        if (n) {
                            var v = s.find(r < 0 ? 1 : -1),
                                x = void 0;
                            if ((r < 0 ? d : u) && (v = Nl(e, v, -r, v && v.line == t.line ? o : null)), v && v.line == t.line && (x = f(v, n)) && (r < 0 ? x < 0 : x > 0)) return _r(e, v, t, r, i)
                        }
                        var w = s.find(r < 0 ? -1 : 1);
                        return (r < 0 ? u : d) && (w = Nl(e, w, r, w.line == t.line ? o : null)), w ? _r(e, w, t, r, i) : null
                    }
                }
            return t
        }

        function oi(e, t, n, r, i) {
            var o = r || 1,
                l = _r(e, t, n, o, i) || !i && _r(e, t, n, o, !0) || _r(e, t, n, -o, i) || !i && _r(e, t, n, -o, !0);
            return l || (e.cantEdit = !0, U(e.first, 0))
        }

        function Nl(e, t, n, r) {
            return n < 0 && t.ch == 0 ? t.line > e.first ? $(e, U(t.line - 1)) : null : n > 0 && t.ch == (r || oe(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? U(t.line + 1, 0) : null : new U(t.line, t.ch + n)
        }

        function Ol(e) {
            e.setSelection(U(e.firstLine(), 0), U(e.lastLine()), Le)
        }

        function Dl(e, t, n) {
            var r = {
                canceled: !1,
                from: t.from,
                to: t.to,
                text: t.text,
                origin: t.origin,
                cancel: function() {
                    return r.canceled = !0
                }
            };
            return n && (r.update = function(i, o, l, a) {
                i && (r.from = $(e, i)), o && (r.to = $(e, o)), l && (r.text = l), a !== void 0 && (r.origin = a)
            }), ve(e, "beforeChange", e, r), e.cm && ve(e.cm, "beforeChange", e.cm, r), r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : {
                from: r.from,
                to: r.to,
                text: r.text,
                origin: r.origin
            }
        }

        function Gr(e, t, n) {
            if (e.cm) {
                if (!e.cm.curOp) return Qe(e.cm, Gr)(e, t, n);
                if (e.cm.state.suppressEdits) return
            }
            if (!((tt(e, "beforeChange") || e.cm && tt(e.cm, "beforeChange")) && (t = Dl(e, t, !0), !t))) {
                var r = xo && !n && ja(e, t.from, t.to);
                if (r)
                    for (var i = r.length - 1; i >= 0; --i) Pl(e, {
                        from: r[i].from,
                        to: r[i].to,
                        text: i ? [""] : t.text,
                        origin: t.origin
                    });
                else Pl(e, t)
            }
        }

        function Pl(e, t) {
            if (!(t.text.length == 1 && t.text[0] == "" && f(t.from, t.to) == 0)) {
                var n = Gi(e, t);
                wl(e, t, n, e.cm ? e.cm.curOp.id : NaN), kn(e, t, n, mi(e, t));
                var r = [];
                fr(e, function(i, o) {
                    !o && ae(r, i.history) == -1 && (Bl(i.history, t), r.push(i.history)), kn(i, t, null, mi(i, t))
                })
            }
        }

        function li(e, t, n) {
            var r = e.cm && e.cm.state.suppressEdits;
            if (!(r && !n)) {
                for (var i = e.history, o, l = e.sel, a = t == "undo" ? i.done : i.undone, s = t == "undo" ? i.undone : i.done, u = 0; u < a.length && (o = a[u], !(n ? o.ranges && !o.equals(e.sel) : !o.ranges)); u++);
                if (u != a.length) {
                    for (i.lastOrigin = i.lastSelOrigin = null;;)
                        if (o = a.pop(), o.ranges) {
                            if (ri(o, s), n && !o.equals(e.sel)) {
                                ot(e, o, {
                                    clearRedo: !1
                                });
                                return
                            }
                            l = o
                        } else if (r) {
                        a.push(o);
                        return
                    } else break;
                    var d = [];
                    ri(l, s), s.push({
                        changes: d,
                        generation: i.generation
                    }), i.generation = o.generation || ++i.maxGeneration;
                    for (var v = tt(e, "beforeChange") || e.cm && tt(e.cm, "beforeChange"), x = function(H) {
                            var q = o.changes[H];
                            if (q.origin = t, v && !Dl(e, q, !1)) return a.length = 0, {};
                            d.push(Yi(e, q));
                            var J = H ? Gi(e, q) : we(a);
                            kn(e, q, J, kl(e, q)), !H && e.cm && e.cm.scrollIntoView({
                                from: q.from,
                                to: ur(q)
                            });
                            var ee = [];
                            fr(e, function(Q, ne) {
                                !ne && ae(ee, Q.history) == -1 && (Bl(Q.history, q), ee.push(Q.history)), kn(Q, q, null, kl(Q, q))
                            })
                        }, w = o.changes.length - 1; w >= 0; --w) {
                        var P = x(w);
                        if (P) return P.v
                    }
                }
            }
        }

        function Wl(e, t) {
            if (t != 0 && (e.first += t, e.sel = new At(Te(e.sel.ranges, function(i) {
                    return new Ae(U(i.anchor.line + t, i.anchor.ch), U(i.head.line + t, i.head.ch))
                }), e.sel.primIndex), e.cm)) {
                ht(e.cm, e.first, e.first - t, t);
                for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) lr(e.cm, r, "gutter")
            }
        }

        function kn(e, t, n, r) {
            if (e.cm && !e.cm.curOp) return Qe(e.cm, kn)(e, t, n, r);
            if (t.to.line < e.first) {
                Wl(e, t.text.length - 1 - (t.to.line - t.from.line));
                return
            }
            if (!(t.from.line > e.lastLine())) {
                if (t.from.line < e.first) {
                    var i = t.text.length - 1 - (e.first - t.from.line);
                    Wl(e, i), t = {
                        from: U(e.first, 0),
                        to: U(t.to.line + i, t.to.ch),
                        text: [we(t.text)],
                        origin: t.origin
                    }
                }
                var o = e.lastLine();
                t.to.line > o && (t = {
                    from: t.from,
                    to: U(o, oe(e, o).text.length),
                    text: [t.text[0]],
                    origin: t.origin
                }), t.removed = Ut(e, t.from, t.to), n || (n = Gi(e, t)), e.cm ? Vs(e.cm, t, r) : Xi(e, t, r), ii(e, n, Le), e.cantEdit && oi(e, U(e.firstLine(), 0)) && (e.cantEdit = !1)
            }
        }

        function Vs(e, t, n) {
            var r = e.doc,
                i = e.display,
                o = t.from,
                l = t.to,
                a = !1,
                s = o.line;
            e.options.lineWrapping || (s = Me(qt(oe(r, o.line))), r.iter(s, l.line + 1, function(w) {
                if (w == i.maxLine) return a = !0, !0
            })), r.sel.contains(t.from, t.to) > -1 && Nr(e), Xi(r, t, n, Qo(e)), e.options.lineWrapping || (r.iter(s, o.line + t.text.length, function(w) {
                var P = Gn(w);
                P > i.maxLineLength && (i.maxLine = w, i.maxLineLength = P, i.maxLineChanged = !0, a = !1)
            }), a && (e.curOp.updateMaxLine = !0)), Ka(r, o.line), bn(e, 400);
            var u = t.text.length - (l.line - o.line) - 1;
            t.full ? ht(e) : o.line == l.line && t.text.length == 1 && !gl(e.doc, t) ? lr(e, o.line, "text") : ht(e, o.line, l.line + 1, u);
            var d = tt(e, "changes"),
                v = tt(e, "change");
            if (v || d) {
                var x = {
                    from: o,
                    to: l,
                    text: t.text,
                    removed: t.removed,
                    origin: t.origin
                };
                v && Je(e, "change", e, x), d && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(x)
            }
            e.display.selForContextMenu = null
        }

        function qr(e, t, n, r, i) {
            var o;
            r || (r = n), f(r, n) < 0 && (o = [r, n], n = o[0], r = o[1]), typeof t == "string" && (t = e.splitLines(t)), Gr(e, {
                from: n,
                to: r,
                text: t,
                origin: i
            })
        }

        function zl(e, t, n, r) {
            n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0)
        }

        function Fl(e, t, n, r) {
            for (var i = 0; i < e.length; ++i) {
                var o = e[i],
                    l = !0;
                if (o.ranges) {
                    o.copied || (o = e[i] = o.deepCopy(), o.copied = !0);
                    for (var a = 0; a < o.ranges.length; a++) zl(o.ranges[a].anchor, t, n, r), zl(o.ranges[a].head, t, n, r);
                    continue
                }
                for (var s = 0; s < o.changes.length; ++s) {
                    var u = o.changes[s];
                    if (n < u.from.line) u.from = U(u.from.line + r, u.from.ch), u.to = U(u.to.line + r, u.to.ch);
                    else if (t <= u.to.line) {
                        l = !1;
                        break
                    }
                }
                l || (e.splice(0, i + 1), i = 0)
            }
        }

        function Bl(e, t) {
            var n = t.from.line,
                r = t.to.line,
                i = t.text.length - (r - n) - 1;
            Fl(e.done, n, r, i), Fl(e.undone, n, r, i)
        }

        function Sn(e, t, n, r) {
            var i = t,
                o = t;
            return typeof t == "number" ? o = oe(e, Se(e, t)) : i = Me(t), i == null ? null : (r(o, i) && e.cm && lr(e.cm, i, n), o)
        }

        function Cn(e) {
            this.lines = e, this.parent = null;
            for (var t = 0, n = 0; n < e.length; ++n) e[n].parent = this, t += e[n].height;
            this.height = t
        }
        Cn.prototype = {
            chunkSize: function() {
                return this.lines.length
            },
            removeInner: function(e, t) {
                for (var n = e, r = e + t; n < r; ++n) {
                    var i = this.lines[n];
                    this.height -= i.height, $a(i), Je(i, "delete")
                }
                this.lines.splice(e, t)
            },
            collapse: function(e) {
                e.push.apply(e, this.lines)
            },
            insertInner: function(e, t, n) {
                this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
                for (var r = 0; r < t.length; ++r) t[r].parent = this
            },
            iterN: function(e, t, n) {
                for (var r = e + t; e < r; ++e)
                    if (n(this.lines[e])) return !0
            }
        };

        function Ln(e) {
            this.children = e;
            for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
                var i = e[r];
                t += i.chunkSize(), n += i.height, i.parent = this
            }
            this.size = t, this.height = n, this.parent = null
        }
        Ln.prototype = {
            chunkSize: function() {
                return this.size
            },
            removeInner: function(e, t) {
                this.size -= t;
                for (var n = 0; n < this.children.length; ++n) {
                    var r = this.children[n],
                        i = r.chunkSize();
                    if (e < i) {
                        var o = Math.min(t, i - e),
                            l = r.height;
                        if (r.removeInner(e, o), this.height -= l - r.height, i == o && (this.children.splice(n--, 1), r.parent = null), (t -= o) == 0) break;
                        e = 0
                    } else e -= i
                }
                if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof Cn))) {
                    var a = [];
                    this.collapse(a), this.children = [new Cn(a)], this.children[0].parent = this
                }
            },
            collapse: function(e) {
                for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e)
            },
            insertInner: function(e, t, n) {
                this.size += t.length, this.height += n;
                for (var r = 0; r < this.children.length; ++r) {
                    var i = this.children[r],
                        o = i.chunkSize();
                    if (e <= o) {
                        if (i.insertInner(e, t, n), i.lines && i.lines.length > 50) {
                            for (var l = i.lines.length % 25 + 25, a = l; a < i.lines.length;) {
                                var s = new Cn(i.lines.slice(a, a += 25));
                                i.height -= s.height, this.children.splice(++r, 0, s), s.parent = this
                            }
                            i.lines = i.lines.slice(0, l), this.maybeSpill()
                        }
                        break
                    }
                    e -= o
                }
            },
            maybeSpill: function() {
                if (!(this.children.length <= 10)) {
                    var e = this;
                    do {
                        var t = e.children.splice(e.children.length - 5, 5),
                            n = new Ln(t);
                        if (e.parent) {
                            e.size -= n.size, e.height -= n.height;
                            var i = ae(e.parent.children, e);
                            e.parent.children.splice(i + 1, 0, n)
                        } else {
                            var r = new Ln(e.children);
                            r.parent = e, e.children = [r, n], e = r
                        }
                        n.parent = e.parent
                    } while (e.children.length > 10);
                    e.parent.maybeSpill()
                }
            },
            iterN: function(e, t, n) {
                for (var r = 0; r < this.children.length; ++r) {
                    var i = this.children[r],
                        o = i.chunkSize();
                    if (e < o) {
                        var l = Math.min(t, o - e);
                        if (i.iterN(e, l, n)) return !0;
                        if ((t -= l) == 0) break;
                        e = 0
                    } else e -= o
                }
            }
        };
        var Tn = function(e, t, n) {
            if (n)
                for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
            this.doc = e, this.node = t
        };
        Tn.prototype.clear = function() {
            var e = this.doc.cm,
                t = this.line.widgets,
                n = this.line,
                r = Me(n);
            if (!(r == null || !t)) {
                for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
                t.length || (n.widgets = null);
                var o = hn(this);
                yt(n, Math.max(0, n.height - o)), e && (bt(e, function() {
                    El(e, n, -o), lr(e, r, "widget")
                }), Je(e, "lineWidgetCleared", e, this, r))
            }
        }, Tn.prototype.changed = function() {
            var e = this,
                t = this.height,
                n = this.doc.cm,
                r = this.line;
            this.height = null;
            var i = hn(this) - t;
            i && (or(this.doc, r) || yt(r, r.height + i), n && bt(n, function() {
                n.curOp.forceUpdate = !0, El(n, r, i), Je(n, "lineWidgetChanged", n, e, Me(r))
            }))
        }, Rt(Tn);

        function El(e, t, n) {
            Vt(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Hi(e, n)
        }

        function $s(e, t, n, r) {
            var i = new Tn(e, n, r),
                o = e.cm;
            return o && i.noHScroll && (o.display.alignWidgets = !0), Sn(e, t, "widget", function(l) {
                var a = l.widgets || (l.widgets = []);
                if (i.insertAt == null ? a.push(i) : a.splice(Math.min(a.length, Math.max(0, i.insertAt)), 0, i), i.line = l, o && !or(e, l)) {
                    var s = Vt(l) < e.scrollTop;
                    yt(l, l.height + hn(i)), s && Hi(o, i.height), o.curOp.forceUpdate = !0
                }
                return !0
            }), o && Je(o, "lineWidgetAdded", o, i, typeof t == "number" ? t : Me(t)), i
        }
        var Hl = 0,
            cr = function(e, t) {
                this.lines = [], this.type = t, this.doc = e, this.id = ++Hl
            };
        cr.prototype.clear = function() {
            if (!this.explicitlyCleared) {
                var e = this.doc.cm,
                    t = e && !e.curOp;
                if (t && Cr(e), tt(this, "clear")) {
                    var n = this.find();
                    n && Je(this, "clear", n.from, n.to)
                }
                for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
                    var l = this.lines[o],
                        a = un(l.markedSpans, this);
                    e && !this.collapsed ? lr(e, Me(l), "text") : e && (a.to != null && (i = Me(l)), a.from != null && (r = Me(l))), l.markedSpans = Ga(l.markedSpans, a), a.from == null && this.collapsed && !or(this.doc, l) && e && yt(l, Er(e.display))
                }
                if (e && this.collapsed && !e.options.lineWrapping)
                    for (var s = 0; s < this.lines.length; ++s) {
                        var u = qt(this.lines[s]),
                            d = Gn(u);
                        d > e.display.maxLineLength && (e.display.maxLine = u, e.display.maxLineLength = d, e.display.maxLineChanged = !0)
                    }
                r != null && e && this.collapsed && ht(e, r, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && Ml(e.doc)), e && Je(e, "markerCleared", e, this, r, i), t && Lr(e), this.parent && this.parent.clear()
            }
        }, cr.prototype.find = function(e, t) {
            e == null && this.type == "bookmark" && (e = 1);
            for (var n, r, i = 0; i < this.lines.length; ++i) {
                var o = this.lines[i],
                    l = un(o.markedSpans, this);
                if (l.from != null && (n = U(t ? o : Me(o), l.from), e == -1)) return n;
                if (l.to != null && (r = U(t ? o : Me(o), l.to), e == 1)) return r
            }
            return n && {
                from: n,
                to: r
            }
        }, cr.prototype.changed = function() {
            var e = this,
                t = this.find(-1, !0),
                n = this,
                r = this.doc.cm;
            !t || !r || bt(r, function() {
                var i = t.line,
                    o = Me(t.line),
                    l = Li(r, o);
                if (l && (_o(l), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !or(n.doc, i) && n.height != null) {
                    var a = n.height;
                    n.height = null;
                    var s = hn(n) - a;
                    s && yt(i, i.height + s)
                }
                Je(r, "markerChanged", r, e)
            })
        }, cr.prototype.attachLine = function(e) {
            if (!this.lines.length && this.doc.cm) {
                var t = this.doc.cm.curOp;
                (!t.maybeHiddenMarkers || ae(t.maybeHiddenMarkers, this) == -1) && (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
            }
            this.lines.push(e)
        }, cr.prototype.detachLine = function(e) {
            if (this.lines.splice(ae(this.lines, e), 1), !this.lines.length && this.doc.cm) {
                var t = this.doc.cm.curOp;
                (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
            }
        }, Rt(cr);

        function Xr(e, t, n, r, i) {
            if (r && r.shared) return eu(e, t, n, r, i);
            if (e.cm && !e.cm.curOp) return Qe(e.cm, Xr)(e, t, n, r, i);
            var o = new cr(e, i),
                l = f(t, n);
            if (r && Oe(r, o, !1), l > 0 || l == 0 && o.clearWhenEmpty !== !1) return o;
            if (o.replacedWith && (o.collapsed = !0, o.widgetNode = h("span", [o.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
                if (Mo(e, t.line, t, n, o) || t.line != n.line && Mo(e, n.line, t, n, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                _a()
            }
            o.addToHistory && wl(e, {
                from: t,
                to: n,
                origin: "markText"
            }, e.sel, NaN);
            var a = t.line,
                s = e.cm,
                u;
            if (e.iter(a, n.line + 1, function(v) {
                    s && o.collapsed && !s.options.lineWrapping && qt(v) == s.display.maxLine && (u = !0), o.collapsed && a != t.line && yt(v, 0), qa(v, new Rn(o, a == t.line ? t.ch : null, a == n.line ? n.ch : null), e.cm && e.cm.curOp), ++a
                }), o.collapsed && e.iter(t.line, n.line + 1, function(v) {
                    or(e, v) && yt(v, 0)
                }), o.clearOnEnter && he(o, "beforeCursorEnter", function() {
                    return o.clear()
                }), o.readOnly && (Ua(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++Hl, o.atomic = !0), s) {
                if (u && (s.curOp.updateMaxLine = !0), o.collapsed) ht(s, t.line, n.line + 1);
                else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
                    for (var d = t.line; d <= n.line; d++) lr(s, d, "text");
                o.atomic && Ml(s.doc), Je(s, "markerAdded", s, o)
            }
            return o
        }
        var Mn = function(e, t) {
            this.markers = e, this.primary = t;
            for (var n = 0; n < e.length; ++n) e[n].parent = this
        };
        Mn.prototype.clear = function() {
            if (!this.explicitlyCleared) {
                this.explicitlyCleared = !0;
                for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
                Je(this, "clear")
            }
        }, Mn.prototype.find = function(e, t) {
            return this.primary.find(e, t)
        }, Rt(Mn);

        function eu(e, t, n, r, i) {
            r = Oe(r), r.shared = !1;
            var o = [Xr(e, t, n, r, i)],
                l = o[0],
                a = r.widgetNode;
            return fr(e, function(s) {
                a && (r.widgetNode = a.cloneNode(!0)), o.push(Xr(s, $(s, t), $(s, n), r, i));
                for (var u = 0; u < s.linked.length; ++u)
                    if (s.linked[u].isParent) return;
                l = we(o)
            }), new Mn(o, l)
        }

        function Il(e) {
            return e.findMarks(U(e.first, 0), e.clipPos(U(e.lastLine())), function(t) {
                return t.parent
            })
        }

        function tu(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n],
                    i = r.find(),
                    o = e.clipPos(i.from),
                    l = e.clipPos(i.to);
                if (f(o, l)) {
                    var a = Xr(e, o, l, r.primary, r.primary.type);
                    r.markers.push(a), a.parent = r
                }
            }
        }

        function ru(e) {
            for (var t = function(r) {
                    var i = e[r],
                        o = [i.primary.doc];
                    fr(i.primary.doc, function(s) {
                        return o.push(s)
                    });
                    for (var l = 0; l < i.markers.length; l++) {
                        var a = i.markers[l];
                        ae(o, a.doc) == -1 && (a.parent = null, i.markers.splice(l--, 1))
                    }
                }, n = 0; n < e.length; n++) t(n)
        }
        var nu = 0,
            dt = function(e, t, n, r, i) {
                if (!(this instanceof dt)) return new dt(e, t, n, r, i);
                n == null && (n = 0), Ln.call(this, [new Cn([new zr("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = n;
                var o = U(n, 0);
                this.sel = sr(o), this.history = new ti(null), this.id = ++nu, this.modeOption = t, this.lineSep = r, this.direction = i == "rtl" ? "rtl" : "ltr", this.extend = !1, typeof e == "string" && (e = this.splitLines(e)), Xi(this, {
                    from: o,
                    to: o,
                    text: e
                }), ot(this, sr(o), Le)
            };
        dt.prototype = Nt(Ln.prototype, {
            constructor: dt,
            iter: function(e, t, n) {
                n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
            },
            insert: function(e, t) {
                for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
                this.insertInner(e - this.first, t, n)
            },
            remove: function(e, t) {
                this.removeInner(e - this.first, t)
            },
            getValue: function(e) {
                var t = ln(this, this.first, this.first + this.size);
                return e === !1 ? t : t.join(e || this.lineSeparator())
            },
            setValue: Ve(function(e) {
                var t = U(this.first, 0),
                    n = this.first + this.size - 1;
                Gr(this, {
                    from: t,
                    to: U(n, oe(this, n).text.length),
                    text: this.splitLines(e),
                    origin: "setValue",
                    full: !0
                }, !0), this.cm && vn(this.cm, 0, 0), ot(this, sr(t), Le)
            }),
            replaceRange: function(e, t, n, r) {
                t = $(this, t), n = n ? $(this, n) : t, qr(this, e, t, n, r)
            },
            getRange: function(e, t, n) {
                var r = Ut(this, $(this, e), $(this, t));
                return n === !1 ? r : n === "" ? r.join("") : r.join(n || this.lineSeparator())
            },
            getLine: function(e) {
                var t = this.getLineHandle(e);
                return t && t.text
            },
            getLineHandle: function(e) {
                if (mr(this, e)) return oe(this, e)
            },
            getLineNumber: function(e) {
                return Me(e)
            },
            getLineHandleVisualStart: function(e) {
                return typeof e == "number" && (e = oe(this, e)), qt(e)
            },
            lineCount: function() {
                return this.size
            },
            firstLine: function() {
                return this.first
            },
            lastLine: function() {
                return this.first + this.size - 1
            },
            clipPos: function(e) {
                return $(this, e)
            },
            getCursor: function(e) {
                var t = this.sel.primary(),
                    n;
                return e == null || e == "head" ? n = t.head : e == "anchor" ? n = t.anchor : e == "end" || e == "to" || e === !1 ? n = t.to() : n = t.from(), n
            },
            listSelections: function() {
                return this.sel.ranges
            },
            somethingSelected: function() {
                return this.sel.somethingSelected()
            },
            setCursor: Ve(function(e, t, n) {
                Cl(this, $(this, typeof e == "number" ? U(e, t || 0) : e), null, n)
            }),
            setSelection: Ve(function(e, t, n) {
                Cl(this, $(this, e), $(this, t || e), n)
            }),
            extendSelection: Ve(function(e, t, n) {
                ni(this, $(this, e), t && $(this, t), n)
            }),
            extendSelections: Ve(function(e, t) {
                Sl(this, Tt(this, e), t)
            }),
            extendSelectionsBy: Ve(function(e, t) {
                var n = Te(this.sel.ranges, e);
                Sl(this, Tt(this, n), t)
            }),
            setSelections: Ve(function(e, t, n) {
                if (e.length) {
                    for (var r = [], i = 0; i < e.length; i++) r[i] = new Ae($(this, e[i].anchor), $(this, e[i].head || e[i].anchor));
                    t == null && (t = Math.min(e.length - 1, this.sel.primIndex)), ot(this, Bt(this.cm, r, t), n)
                }
            }),
            addSelection: Ve(function(e, t, n) {
                var r = this.sel.ranges.slice(0);
                r.push(new Ae($(this, e), $(this, t || e))), ot(this, Bt(this.cm, r, r.length - 1), n)
            }),
            getSelection: function(e) {
                for (var t = this.sel.ranges, n, r = 0; r < t.length; r++) {
                    var i = Ut(this, t[r].from(), t[r].to());
                    n = n ? n.concat(i) : i
                }
                return e === !1 ? n : n.join(e || this.lineSeparator())
            },
            getSelections: function(e) {
                for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
                    var i = Ut(this, n[r].from(), n[r].to());
                    e !== !1 && (i = i.join(e || this.lineSeparator())), t[r] = i
                }
                return t
            },
            replaceSelection: function(e, t, n) {
                for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
                this.replaceSelections(r, t, n || "+input")
            },
            replaceSelections: Ve(function(e, t, n) {
                for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                    var l = i.ranges[o];
                    r[o] = {
                        from: l.from(),
                        to: l.to(),
                        text: this.splitLines(e[o]),
                        origin: n
                    }
                }
                for (var a = t && t != "end" && Gs(this, r, t), s = r.length - 1; s >= 0; s--) Gr(this, r[s]);
                a ? Ll(this, a) : this.cm && Rr(this.cm)
            }),
            undo: Ve(function() {
                li(this, "undo")
            }),
            redo: Ve(function() {
                li(this, "redo")
            }),
            undoSelection: Ve(function() {
                li(this, "undo", !0)
            }),
            redoSelection: Ve(function() {
                li(this, "redo", !0)
            }),
            setExtending: function(e) {
                this.extend = e
            },
            getExtending: function() {
                return this.extend
            },
            historySize: function() {
                for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) e.done[r].ranges || ++t;
                for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
                return {
                    undo: t,
                    redo: n
                }
            },
            clearHistory: function() {
                var e = this;
                this.history = new ti(this.history), fr(this, function(t) {
                    return t.history = e.history
                }, !0)
            },
            markClean: function() {
                this.cleanGeneration = this.changeGeneration(!0)
            },
            changeGeneration: function(e) {
                return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
            },
            isClean: function(e) {
                return this.history.generation == (e || this.cleanGeneration)
            },
            getHistory: function() {
                return {
                    done: Ur(this.history.done),
                    undone: Ur(this.history.undone)
                }
            },
            setHistory: function(e) {
                var t = this.history = new ti(this.history);
                t.done = Ur(e.done.slice(0), null, !0), t.undone = Ur(e.undone.slice(0), null, !0)
            },
            setGutterMarker: Ve(function(e, t, n) {
                return Sn(this, e, "gutter", function(r) {
                    var i = r.gutterMarkers || (r.gutterMarkers = {});
                    return i[t] = n, !n && Y(i) && (r.gutterMarkers = null), !0
                })
            }),
            clearGutter: Ve(function(e) {
                var t = this;
                this.iter(function(n) {
                    n.gutterMarkers && n.gutterMarkers[e] && Sn(t, n, "gutter", function() {
                        return n.gutterMarkers[e] = null, Y(n.gutterMarkers) && (n.gutterMarkers = null), !0
                    })
                })
            }),
            lineInfo: function(e) {
                var t;
                if (typeof e == "number") {
                    if (!mr(this, e) || (t = e, e = oe(this, e), !e)) return null
                } else if (t = Me(e), t == null) return null;
                return {
                    line: t,
                    handle: e,
                    text: e.text,
                    gutterMarkers: e.gutterMarkers,
                    textClass: e.textClass,
                    bgClass: e.bgClass,
                    wrapClass: e.wrapClass,
                    widgets: e.widgets
                }
            },
            addLineClass: Ve(function(e, t, n) {
                return Sn(this, e, t == "gutter" ? "gutter" : "class", function(r) {
                    var i = t == "text" ? "textClass" : t == "background" ? "bgClass" : t == "gutter" ? "gutterClass" : "wrapClass";
                    if (!r[i]) r[i] = n;
                    else {
                        if (A(n).test(r[i])) return !1;
                        r[i] += " " + n
                    }
                    return !0
                })
            }),
            removeLineClass: Ve(function(e, t, n) {
                return Sn(this, e, t == "gutter" ? "gutter" : "class", function(r) {
                    var i = t == "text" ? "textClass" : t == "background" ? "bgClass" : t == "gutter" ? "gutterClass" : "wrapClass",
                        o = r[i];
                    if (o)
                        if (n == null) r[i] = null;
                        else {
                            var l = o.match(A(n));
                            if (!l) return !1;
                            var a = l.index + l[0].length;
                            r[i] = o.slice(0, l.index) + (!l.index || a == o.length ? "" : " ") + o.slice(a) || null
                        }
                    else return !1;
                    return !0
                })
            }),
            addLineWidget: Ve(function(e, t, n) {
                return $s(this, e, t, n)
            }),
            removeLineWidget: function(e) {
                e.clear()
            },
            markText: function(e, t, n) {
                return Xr(this, $(this, e), $(this, t), n, n && n.type || "range")
            },
            setBookmark: function(e, t) {
                var n = {
                    replacedWith: t && (t.nodeType == null ? t.widget : t),
                    insertLeft: t && t.insertLeft,
                    clearWhenEmpty: !1,
                    shared: t && t.shared,
                    handleMouseEvents: t && t.handleMouseEvents
                };
                return e = $(this, e), Xr(this, e, e, n, "bookmark")
            },
            findMarksAt: function(e) {
                e = $(this, e);
                var t = [],
                    n = oe(this, e.line).markedSpans;
                if (n)
                    for (var r = 0; r < n.length; ++r) {
                        var i = n[r];
                        (i.from == null || i.from <= e.ch) && (i.to == null || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
                    }
                return t
            },
            findMarks: function(e, t, n) {
                e = $(this, e), t = $(this, t);
                var r = [],
                    i = e.line;
                return this.iter(e.line, t.line + 1, function(o) {
                    var l = o.markedSpans;
                    if (l)
                        for (var a = 0; a < l.length; a++) {
                            var s = l[a];
                            !(s.to != null && i == e.line && e.ch >= s.to || s.from == null && i != e.line || s.from != null && i == t.line && s.from >= t.ch) && (!n || n(s.marker)) && r.push(s.marker.parent || s.marker)
                        }++i
                }), r
            },
            getAllMarks: function() {
                var e = [];
                return this.iter(function(t) {
                    var n = t.markedSpans;
                    if (n)
                        for (var r = 0; r < n.length; ++r) n[r].from != null && e.push(n[r].marker)
                }), e
            },
            posFromIndex: function(e) {
                var t, n = this.first,
                    r = this.lineSeparator().length;
                return this.iter(function(i) {
                    var o = i.text.length + r;
                    if (o > e) return t = e, !0;
                    e -= o, ++n
                }), $(this, U(n, t))
            },
            indexFromPos: function(e) {
                e = $(this, e);
                var t = e.ch;
                if (e.line < this.first || e.ch < 0) return 0;
                var n = this.lineSeparator().length;
                return this.iter(this.first, e.line, function(r) {
                    t += r.text.length + n
                }), t
            },
            copy: function(e) {
                var t = new dt(ln(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
                return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
            },
            linkedDoc: function(e) {
                e || (e = {});
                var t = this.first,
                    n = this.first + this.size;
                e.from != null && e.from > t && (t = e.from), e.to != null && e.to < n && (n = e.to);
                var r = new dt(ln(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
                return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({
                    doc: r,
                    sharedHist: e.sharedHist
                }), r.linked = [{
                    doc: this,
                    isParent: !0,
                    sharedHist: e.sharedHist
                }], tu(r, Il(this)), r
            },
            unlinkDoc: function(e) {
                if (e instanceof Ee && (e = e.doc), this.linked)
                    for (var t = 0; t < this.linked.length; ++t) {
                        var n = this.linked[t];
                        if (n.doc == e) {
                            this.linked.splice(t, 1), e.unlinkDoc(this), ru(Il(this));
                            break
                        }
                    }
                if (e.history == this.history) {
                    var r = [e.id];
                    fr(e, function(i) {
                        return r.push(i.id)
                    }, !0), e.history = new ti(null), e.history.done = Ur(this.history.done, r), e.history.undone = Ur(this.history.undone, r)
                }
            },
            iterLinkedDocs: function(e) {
                fr(this, e)
            },
            getMode: function() {
                return this.mode
            },
            getEditor: function() {
                return this.cm
            },
            splitLines: function(e) {
                return this.lineSep ? e.split(this.lineSep) : tn(e)
            },
            lineSeparator: function() {
                return this.lineSep || `
`
            },
            setDirection: Ve(function(e) {
                e != "rtl" && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function(t) {
                    return t.order = null
                }), this.cm && qs(this.cm))
            })
        }), dt.prototype.eachLine = dt.prototype.iter;
        var Rl = 0;

        function iu(e) {
            var t = this;
            if (Kl(t), !(Ge(t, e) || $t(t.display, e))) {
                nt(e), X && (Rl = +new Date);
                var n = wr(t, e, !0),
                    r = e.dataTransfer.files;
                if (!(!n || t.isReadOnly()))
                    if (r && r.length && window.FileReader && window.File)
                        for (var i = r.length, o = Array(i), l = 0, a = function() {
                                ++l == i && Qe(t, function() {
                                    n = $(t.doc, n);
                                    var w = {
                                        from: n,
                                        to: n,
                                        text: t.doc.splitLines(o.filter(function(P) {
                                            return P != null
                                        }).join(t.doc.lineSeparator())),
                                        origin: "paste"
                                    };
                                    Gr(t.doc, w), Ll(t.doc, sr($(t.doc, n), $(t.doc, ur(w))))
                                })()
                            }, s = function(w, P) {
                                if (t.options.allowDropFileTypes && ae(t.options.allowDropFileTypes, w.type) == -1) {
                                    a();
                                    return
                                }
                                var H = new FileReader;
                                H.onerror = function() {
                                    return a()
                                }, H.onload = function() {
                                    var q = H.result;
                                    if (/[\x00-\x08\x0e-\x1f]{2}/.test(q)) {
                                        a();
                                        return
                                    }
                                    o[P] = q, a()
                                }, H.readAsText(w)
                            }, u = 0; u < r.length; u++) s(r[u], u);
                    else {
                        if (t.state.draggingText && t.doc.sel.contains(n) > -1) {
                            t.state.draggingText(e), setTimeout(function() {
                                return t.display.input.focus()
                            }, 20);
                            return
                        }
                        try {
                            var d = e.dataTransfer.getData("Text");
                            if (d) {
                                var v;
                                if (t.state.draggingText && !t.state.draggingText.copy && (v = t.listSelections()), ii(t.doc, sr(n, n)), v)
                                    for (var x = 0; x < v.length; ++x) qr(t.doc, "", v[x].anchor, v[x].head, "drag");
                                t.replaceSelection(d, "around", "paste"), t.display.input.focus()
                            }
                        } catch {}
                    }
            }
        }

        function ou(e, t) {
            if (X && (!e.state.draggingText || +new Date - Rl < 100)) {
                gr(t);
                return
            }
            if (!(Ge(e, t) || $t(e.display, t)) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !G)) {
                var n = p("img", null, null, "position: fixed; left: 0; top: 0;");
                n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", N && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), N && n.parentNode.removeChild(n)
            }
        }

        function lu(e, t) {
            var n = wr(e, t);
            if (n) {
                var r = document.createDocumentFragment();
                el(e, n, r), e.display.dragCursor || (e.display.dragCursor = p("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), k(e.display.dragCursor, r)
            }
        }

        function Kl(e) {
            e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
        }

        function Ul(e) {
            if (document.getElementsByClassName) {
                for (var t = document.getElementsByClassName("CodeMirror"), n = [], r = 0; r < t.length; r++) {
                    var i = t[r].CodeMirror;
                    i && n.push(i)
                }
                n.length && n[0].operation(function() {
                    for (var o = 0; o < n.length; o++) e(n[o])
                })
            }
        }
        var _l = !1;

        function au() {
            _l || (su(), _l = !0)
        }

        function su() {
            var e;
            he(window, "resize", function() {
                e == null && (e = setTimeout(function() {
                    e = null, Ul(uu)
                }, 100))
            }), he(window, "blur", function() {
                return Ul(Ir)
            })
        }

        function uu(e) {
            var t = e.display;
            t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize()
        }
        for (var hr = {
                3: "Pause",
                8: "Backspace",
                9: "Tab",
                13: "Enter",
                16: "Shift",
                17: "Ctrl",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "PrintScrn",
                45: "Insert",
                46: "Delete",
                59: ";",
                61: "=",
                91: "Mod",
                92: "Mod",
                93: "Mod",
                106: "*",
                107: "=",
                109: "-",
                110: ".",
                111: "/",
                145: "ScrollLock",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                224: "Mod",
                63232: "Up",
                63233: "Down",
                63234: "Left",
                63235: "Right",
                63272: "Delete",
                63273: "Home",
                63275: "End",
                63276: "PageUp",
                63277: "PageDown",
                63302: "Insert"
            }, An = 0; An < 10; An++) hr[An + 48] = hr[An + 96] = String(An);
        for (var ai = 65; ai <= 90; ai++) hr[ai] = String.fromCharCode(ai);
        for (var Nn = 1; Nn <= 12; Nn++) hr[Nn + 111] = hr[Nn + 63235] = "F" + Nn;
        var er = {};
        er.basic = {
            Left: "goCharLeft",
            Right: "goCharRight",
            Up: "goLineUp",
            Down: "goLineDown",
            End: "goLineEnd",
            Home: "goLineStartSmart",
            PageUp: "goPageUp",
            PageDown: "goPageDown",
            Delete: "delCharAfter",
            Backspace: "delCharBefore",
            "Shift-Backspace": "delCharBefore",
            Tab: "defaultTab",
            "Shift-Tab": "indentAuto",
            Enter: "newlineAndIndent",
            Insert: "toggleOverwrite",
            Esc: "singleSelection"
        }, er.pcDefault = {
            "Ctrl-A": "selectAll",
            "Ctrl-D": "deleteLine",
            "Ctrl-Z": "undo",
            "Shift-Ctrl-Z": "redo",
            "Ctrl-Y": "redo",
            "Ctrl-Home": "goDocStart",
            "Ctrl-End": "goDocEnd",
            "Ctrl-Up": "goLineUp",
            "Ctrl-Down": "goLineDown",
            "Ctrl-Left": "goGroupLeft",
            "Ctrl-Right": "goGroupRight",
            "Alt-Left": "goLineStart",
            "Alt-Right": "goLineEnd",
            "Ctrl-Backspace": "delGroupBefore",
            "Ctrl-Delete": "delGroupAfter",
            "Ctrl-S": "save",
            "Ctrl-F": "find",
            "Ctrl-G": "findNext",
            "Shift-Ctrl-G": "findPrev",
            "Shift-Ctrl-F": "replace",
            "Shift-Ctrl-R": "replaceAll",
            "Ctrl-[": "indentLess",
            "Ctrl-]": "indentMore",
            "Ctrl-U": "undoSelection",
            "Shift-Ctrl-U": "redoSelection",
            "Alt-U": "redoSelection",
            fallthrough: "basic"
        }, er.emacsy = {
            "Ctrl-F": "goCharRight",
            "Ctrl-B": "goCharLeft",
            "Ctrl-P": "goLineUp",
            "Ctrl-N": "goLineDown",
            "Ctrl-A": "goLineStart",
            "Ctrl-E": "goLineEnd",
            "Ctrl-V": "goPageDown",
            "Shift-Ctrl-V": "goPageUp",
            "Ctrl-D": "delCharAfter",
            "Ctrl-H": "delCharBefore",
            "Alt-Backspace": "delWordBefore",
            "Ctrl-K": "killLine",
            "Ctrl-T": "transposeChars",
            "Ctrl-O": "openLine"
        }, er.macDefault = {
            "Cmd-A": "selectAll",
            "Cmd-D": "deleteLine",
            "Cmd-Z": "undo",
            "Shift-Cmd-Z": "redo",
            "Cmd-Y": "redo",
            "Cmd-Home": "goDocStart",
            "Cmd-Up": "goDocStart",
            "Cmd-End": "goDocEnd",
            "Cmd-Down": "goDocEnd",
            "Alt-Left": "goGroupLeft",
            "Alt-Right": "goGroupRight",
            "Cmd-Left": "goLineLeft",
            "Cmd-Right": "goLineRight",
            "Alt-Backspace": "delGroupBefore",
            "Ctrl-Alt-Backspace": "delGroupAfter",
            "Alt-Delete": "delGroupAfter",
            "Cmd-S": "save",
            "Cmd-F": "find",
            "Cmd-G": "findNext",
            "Shift-Cmd-G": "findPrev",
            "Cmd-Alt-F": "replace",
            "Shift-Cmd-Alt-F": "replaceAll",
            "Cmd-[": "indentLess",
            "Cmd-]": "indentMore",
            "Cmd-Backspace": "delWrappedLineLeft",
            "Cmd-Delete": "delWrappedLineRight",
            "Cmd-U": "undoSelection",
            "Shift-Cmd-U": "redoSelection",
            "Ctrl-Up": "goDocStart",
            "Ctrl-Down": "goDocEnd",
            fallthrough: ["basic", "emacsy"]
        }, er.default = c ? er.macDefault : er.pcDefault;

        function fu(e) {
            var t = e.split(/-(?!$)/);
            e = t[t.length - 1];
            for (var n, r, i, o, l = 0; l < t.length - 1; l++) {
                var a = t[l];
                if (/^(cmd|meta|m)$/i.test(a)) o = !0;
                else if (/^a(lt)?$/i.test(a)) n = !0;
                else if (/^(c|ctrl|control)$/i.test(a)) r = !0;
                else if (/^s(hift)?$/i.test(a)) i = !0;
                else throw new Error("Unrecognized modifier name: " + a)
            }
            return n && (e = "Alt-" + e), r && (e = "Ctrl-" + e), o && (e = "Cmd-" + e), i && (e = "Shift-" + e), e
        }

        function cu(e) {
            var t = {};
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var r = e[n];
                    if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
                    if (r == "...") {
                        delete e[n];
                        continue
                    }
                    for (var i = Te(n.split(" "), fu), o = 0; o < i.length; o++) {
                        var l = void 0,
                            a = void 0;
                        o == i.length - 1 ? (a = i.join(" "), l = r) : (a = i.slice(0, o + 1).join(" "), l = "...");
                        var s = t[a];
                        if (!s) t[a] = l;
                        else if (s != l) throw new Error("Inconsistent bindings for " + a)
                    }
                    delete e[n]
                }
            for (var u in t) e[u] = t[u];
            return e
        }

        function Yr(e, t, n, r) {
            t = si(t);
            var i = t.call ? t.call(e, r) : t[e];
            if (i === !1) return "nothing";
            if (i === "...") return "multi";
            if (i != null && n(i)) return "handled";
            if (t.fallthrough) {
                if (Object.prototype.toString.call(t.fallthrough) != "[object Array]") return Yr(e, t.fallthrough, n, r);
                for (var o = 0; o < t.fallthrough.length; o++) {
                    var l = Yr(e, t.fallthrough[o], n, r);
                    if (l) return l
                }
            }
        }

        function Gl(e) {
            var t = typeof e == "string" ? e : hr[e.keyCode];
            return t == "Ctrl" || t == "Alt" || t == "Shift" || t == "Mod"
        }

        function ql(e, t, n) {
            var r = e;
            return t.altKey && r != "Alt" && (e = "Alt-" + e), (L ? t.metaKey : t.ctrlKey) && r != "Ctrl" && (e = "Ctrl-" + e), (L ? t.ctrlKey : t.metaKey) && r != "Mod" && (e = "Cmd-" + e), !n && t.shiftKey && r != "Shift" && (e = "Shift-" + e), e
        }

        function Xl(e, t) {
            if (N && e.keyCode == 34 && e.char) return !1;
            var n = hr[e.keyCode];
            return n == null || e.altGraphKey ? !1 : (e.keyCode == 3 && e.code && (n = e.code), ql(n, e, t))
        }

        function si(e) {
            return typeof e == "string" ? er[e] : e
        }

        function jr(e, t) {
            for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
                for (var o = t(n[i]); r.length && f(o.from, we(r).to) <= 0;) {
                    var l = r.pop();
                    if (f(l.from, o.from) < 0) {
                        o.from = l.from;
                        break
                    }
                }
                r.push(o)
            }
            bt(e, function() {
                for (var a = r.length - 1; a >= 0; a--) qr(e.doc, "", r[a].from, r[a].to, "+delete");
                Rr(e)
            })
        }

        function Ji(e, t, n) {
            var r = at(e.text, t + n, n);
            return r < 0 || r > e.text.length ? null : r
        }

        function Qi(e, t, n) {
            var r = Ji(e, t.ch, n);
            return r == null ? null : new U(t.line, r, n < 0 ? "after" : "before")
        }

        function Vi(e, t, n, r, i) {
            if (e) {
                t.doc.direction == "rtl" && (i = -i);
                var o = mt(n, t.doc.direction);
                if (o) {
                    var l = i < 0 ? we(o) : o[0],
                        a = i < 0 == (l.level == 1),
                        s = a ? "after" : "before",
                        u;
                    if (l.level > 0 || t.doc.direction == "rtl") {
                        var d = Br(t, n);
                        u = i < 0 ? n.text.length - 1 : 0;
                        var v = Yt(t, d, u).top;
                        u = It(function(x) {
                            return Yt(t, d, x).top == v
                        }, i < 0 == (l.level == 1) ? l.from : l.to - 1, u), s == "before" && (u = Ji(n, u, 1))
                    } else u = i < 0 ? l.to : l.from;
                    return new U(r, u, s)
                }
            }
            return new U(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after")
        }

        function hu(e, t, n, r) {
            var i = mt(t, e.doc.direction);
            if (!i) return Qi(t, n, r);
            n.ch >= t.text.length ? (n.ch = t.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after");
            var o = Re(i, n.ch, n.sticky),
                l = i[o];
            if (e.doc.direction == "ltr" && l.level % 2 == 0 && (r > 0 ? l.to > n.ch : l.from < n.ch)) return Qi(t, n, r);
            var a = function(J, ee) {
                    return Ji(t, J instanceof U ? J.ch : J, ee)
                },
                s, u = function(J) {
                    return e.options.lineWrapping ? (s = s || Br(e, t), Jo(e, t, s, J)) : {
                        begin: 0,
                        end: t.text.length
                    }
                },
                d = u(n.sticky == "before" ? a(n, -1) : n.ch);
            if (e.doc.direction == "rtl" || l.level == 1) {
                var v = l.level == 1 == r < 0,
                    x = a(n, v ? 1 : -1);
                if (x != null && (v ? x <= l.to && x <= d.end : x >= l.from && x >= d.begin)) {
                    var w = v ? "before" : "after";
                    return new U(n.line, x, w)
                }
            }
            var P = function(J, ee, Q) {
                    for (var ne = function(We, $e) {
                            return $e ? new U(n.line, a(We, 1), "before") : new U(n.line, We, "after")
                        }; J >= 0 && J < i.length; J += ee) {
                        var fe = i[J],
                            se = ee > 0 == (fe.level != 1),
                            ye = se ? Q.begin : a(Q.end, -1);
                        if (fe.from <= ye && ye < fe.to || (ye = se ? fe.from : a(fe.to, -1), Q.begin <= ye && ye < Q.end)) return ne(ye, se)
                    }
                },
                H = P(o + r, r, d);
            if (H) return H;
            var q = r > 0 ? d.end : a(d.begin, -1);
            return q != null && !(r > 0 && q == t.text.length) && (H = P(r > 0 ? 0 : i.length - 1, r, u(q)), H) ? H : null
        }
        var On = {
            selectAll: Ol,
            singleSelection: function(e) {
                return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Le)
            },
            killLine: function(e) {
                return jr(e, function(t) {
                    if (t.empty()) {
                        var n = oe(e.doc, t.head.line).text.length;
                        return t.head.ch == n && t.head.line < e.lastLine() ? {
                            from: t.head,
                            to: U(t.head.line + 1, 0)
                        } : {
                            from: t.head,
                            to: U(t.head.line, n)
                        }
                    } else return {
                        from: t.from(),
                        to: t.to()
                    }
                })
            },
            deleteLine: function(e) {
                return jr(e, function(t) {
                    return {
                        from: U(t.from().line, 0),
                        to: $(e.doc, U(t.to().line + 1, 0))
                    }
                })
            },
            delLineLeft: function(e) {
                return jr(e, function(t) {
                    return {
                        from: U(t.from().line, 0),
                        to: t.from()
                    }
                })
            },
            delWrappedLineLeft: function(e) {
                return jr(e, function(t) {
                    var n = e.charCoords(t.head, "div").top + 5,
                        r = e.coordsChar({
                            left: 0,
                            top: n
                        }, "div");
                    return {
                        from: r,
                        to: t.from()
                    }
                })
            },
            delWrappedLineRight: function(e) {
                return jr(e, function(t) {
                    var n = e.charCoords(t.head, "div").top + 5,
                        r = e.coordsChar({
                            left: e.display.lineDiv.offsetWidth + 100,
                            top: n
                        }, "div");
                    return {
                        from: t.from(),
                        to: r
                    }
                })
            },
            undo: function(e) {
                return e.undo()
            },
            redo: function(e) {
                return e.redo()
            },
            undoSelection: function(e) {
                return e.undoSelection()
            },
            redoSelection: function(e) {
                return e.redoSelection()
            },
            goDocStart: function(e) {
                return e.extendSelection(U(e.firstLine(), 0))
            },
            goDocEnd: function(e) {
                return e.extendSelection(U(e.lastLine()))
            },
            goLineStart: function(e) {
                return e.extendSelectionsBy(function(t) {
                    return Yl(e, t.head.line)
                }, {
                    origin: "+move",
                    bias: 1
                })
            },
            goLineStartSmart: function(e) {
                return e.extendSelectionsBy(function(t) {
                    return jl(e, t.head)
                }, {
                    origin: "+move",
                    bias: 1
                })
            },
            goLineEnd: function(e) {
                return e.extendSelectionsBy(function(t) {
                    return du(e, t.head.line)
                }, {
                    origin: "+move",
                    bias: -1
                })
            },
            goLineRight: function(e) {
                return e.extendSelectionsBy(function(t) {
                    var n = e.cursorCoords(t.head, "div").top + 5;
                    return e.coordsChar({
                        left: e.display.lineDiv.offsetWidth + 100,
                        top: n
                    }, "div")
                }, me)
            },
            goLineLeft: function(e) {
                return e.extendSelectionsBy(function(t) {
                    var n = e.cursorCoords(t.head, "div").top + 5;
                    return e.coordsChar({
                        left: 0,
                        top: n
                    }, "div")
                }, me)
            },
            goLineLeftSmart: function(e) {
                return e.extendSelectionsBy(function(t) {
                    var n = e.cursorCoords(t.head, "div").top + 5,
                        r = e.coordsChar({
                            left: 0,
                            top: n
                        }, "div");
                    return r.ch < e.getLine(r.line).search(/\S/) ? jl(e, t.head) : r
                }, me)
            },
            goLineUp: function(e) {
                return e.moveV(-1, "line")
            },
            goLineDown: function(e) {
                return e.moveV(1, "line")
            },
            goPageUp: function(e) {
                return e.moveV(-1, "page")
            },
            goPageDown: function(e) {
                return e.moveV(1, "page")
            },
            goCharLeft: function(e) {
                return e.moveH(-1, "char")
            },
            goCharRight: function(e) {
                return e.moveH(1, "char")
            },
            goColumnLeft: function(e) {
                return e.moveH(-1, "column")
            },
            goColumnRight: function(e) {
                return e.moveH(1, "column")
            },
            goWordLeft: function(e) {
                return e.moveH(-1, "word")
            },
            goGroupRight: function(e) {
                return e.moveH(1, "group")
            },
            goGroupLeft: function(e) {
                return e.moveH(-1, "group")
            },
            goWordRight: function(e) {
                return e.moveH(1, "word")
            },
            delCharBefore: function(e) {
                return e.deleteH(-1, "codepoint")
            },
            delCharAfter: function(e) {
                return e.deleteH(1, "char")
            },
            delWordBefore: function(e) {
                return e.deleteH(-1, "word")
            },
            delWordAfter: function(e) {
                return e.deleteH(1, "word")
            },
            delGroupBefore: function(e) {
                return e.deleteH(-1, "group")
            },
            delGroupAfter: function(e) {
                return e.deleteH(1, "group")
            },
            indentAuto: function(e) {
                return e.indentSelection("smart")
            },
            indentMore: function(e) {
                return e.indentSelection("add")
            },
            indentLess: function(e) {
                return e.indentSelection("subtract")
            },
            insertTab: function(e) {
                return e.replaceSelection("	")
            },
            insertSoftTab: function(e) {
                for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
                    var o = n[i].from(),
                        l = Fe(e.getLine(o.line), o.ch, r);
                    t.push(rr(r - l % r))
                }
                e.replaceSelections(t)
            },
            defaultTab: function(e) {
                e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
            },
            transposeChars: function(e) {
                return bt(e, function() {
                    for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
                        if (t[r].empty()) {
                            var i = t[r].head,
                                o = oe(e.doc, i.line).text;
                            if (o) {
                                if (i.ch == o.length && (i = new U(i.line, i.ch - 1)), i.ch > 0) i = new U(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), U(i.line, i.ch - 2), i, "+transpose");
                                else if (i.line > e.doc.first) {
                                    var l = oe(e.doc, i.line - 1).text;
                                    l && (i = new U(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + l.charAt(l.length - 1), U(i.line - 1, l.length - 1), i, "+transpose"))
                                }
                            }
                            n.push(new Ae(i, i))
                        }
                    e.setSelections(n)
                })
            },
            newlineAndIndent: function(e) {
                return bt(e, function() {
                    for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--) e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
                    t = e.listSelections();
                    for (var r = 0; r < t.length; r++) e.indentLine(t[r].from().line, null, !0);
                    Rr(e)
                })
            },
            openLine: function(e) {
                return e.replaceSelection(`
`, "start")
            },
            toggleOverwrite: function(e) {
                return e.toggleOverwrite()
            }
        };

        function Yl(e, t) {
            var n = oe(e.doc, t),
                r = qt(n);
            return r != n && (t = Me(r)), Vi(!0, e, r, t, 1)
        }

        function du(e, t) {
            var n = oe(e.doc, t),
                r = Ja(n);
            return r != n && (t = Me(r)), Vi(!0, e, n, t, -1)
        }

        function jl(e, t) {
            var n = Yl(e, t.line),
                r = oe(e.doc, n.line),
                i = mt(r, e.doc.direction);
            if (!i || i[0].level == 0) {
                var o = Math.max(n.ch, r.text.search(/\S/)),
                    l = t.line == n.line && t.ch <= o && t.ch;
                return U(n.line, l ? 0 : o, n.sticky)
            }
            return n
        }

        function ui(e, t, n) {
            if (typeof t == "string" && (t = On[t], !t)) return !1;
            e.display.input.ensurePolled();
            var r = e.display.shift,
                i = !1;
            try {
                e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != be
            } finally {
                e.display.shift = r, e.state.suppressEdits = !1
            }
            return i
        }

        function pu(e, t, n) {
            for (var r = 0; r < e.state.keyMaps.length; r++) {
                var i = Yr(t, e.state.keyMaps[r], n, e);
                if (i) return i
            }
            return e.options.extraKeys && Yr(t, e.options.extraKeys, n, e) || Yr(t, e.options.keyMap, n, e)
        }
        var vu = new Be;

        function Dn(e, t, n, r) {
            var i = e.state.keySeq;
            if (i) {
                if (Gl(t)) return "handled";
                if (/\'$/.test(t) ? e.state.keySeq = null : vu.set(50, function() {
                        e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset())
                    }), Zl(e, i + " " + t, n, r)) return !0
            }
            return Zl(e, t, n, r)
        }

        function Zl(e, t, n, r) {
            var i = pu(e, t, r);
            return i == "multi" && (e.state.keySeq = t), i == "handled" && Je(e, "keyHandled", e, t, n), (i == "handled" || i == "multi") && (nt(n), zi(e)), !!i
        }

        function Jl(e, t) {
            var n = Xl(t, !0);
            return n ? t.shiftKey && !e.state.keySeq ? Dn(e, "Shift-" + n, t, function(r) {
                return ui(e, r, !0)
            }) || Dn(e, n, t, function(r) {
                if (typeof r == "string" ? /^go[A-Z]/.test(r) : r.motion) return ui(e, r)
            }) : Dn(e, n, t, function(r) {
                return ui(e, r)
            }) : !1
        }

        function gu(e, t, n) {
            return Dn(e, "'" + n + "'", t, function(r) {
                return ui(e, r, !0)
            })
        }
        var $i = null;

        function Ql(e) {
            var t = this;
            if (!(e.target && e.target != t.display.input.getField()) && (t.curOp.focus = de(), !Ge(t, e))) {
                X && E < 11 && e.keyCode == 27 && (e.returnValue = !1);
                var n = e.keyCode;
                t.display.shift = n == 16 || e.shiftKey;
                var r = Jl(t, e);
                N && ($i = r ? n : null, !r && n == 88 && !Hn && (c ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), j && !c && !r && n == 46 && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), n == 18 && !/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) && mu(t)
            }
        }

        function mu(e) {
            var t = e.display.lineDiv;
            Ce(t, "CodeMirror-crosshair");

            function n(r) {
                (r.keyCode == 18 || !r.altKey) && (O(t, "CodeMirror-crosshair"), ft(document, "keyup", n), ft(document, "mouseover", n))
            }
            he(document, "keyup", n), he(document, "mouseover", n)
        }

        function Vl(e) {
            e.keyCode == 16 && (this.doc.sel.shift = !1), Ge(this, e)
        }

        function $l(e) {
            var t = this;
            if (!(e.target && e.target != t.display.input.getField()) && !($t(t.display, e) || Ge(t, e) || e.ctrlKey && !e.altKey || c && e.metaKey)) {
                var n = e.keyCode,
                    r = e.charCode;
                if (N && n == $i) {
                    $i = null, nt(e);
                    return
                }
                if (!(N && (!e.which || e.which < 10) && Jl(t, e))) {
                    var i = String.fromCharCode(r ? ? n);
                    i != "\b" && (gu(t, e, i) || t.display.input.onKeyPress(e))
                }
            }
        }
        var yu = 400,
            eo = function(e, t, n) {
                this.time = e, this.pos = t, this.button = n
            };
        eo.prototype.compare = function(e, t, n) {
            return this.time + yu > e && f(t, this.pos) == 0 && n == this.button
        };
        var Pn, Wn;

        function bu(e, t) {
            var n = +new Date;
            return Wn && Wn.compare(n, e, t) ? (Pn = Wn = null, "triple") : Pn && Pn.compare(n, e, t) ? (Wn = new eo(n, e, t), Pn = null, "double") : (Pn = new eo(n, e, t), Wn = null, "single")
        }

        function ea(e) {
            var t = this,
                n = t.display;
            if (!(Ge(t, e) || n.activeTouch && n.input.supportsTouch())) {
                if (n.input.ensurePolled(), n.shift = e.shiftKey, $t(n, e)) {
                    W || (n.scroller.draggable = !1, setTimeout(function() {
                        return n.scroller.draggable = !0
                    }, 100));
                    return
                }
                if (!to(t, e)) {
                    var r = wr(t, e),
                        i = Fn(e),
                        o = r ? bu(r, i) : "single";
                    window.focus(), i == 1 && t.state.selectingText && t.state.selectingText(e), !(r && wu(t, i, r, o, e)) && (i == 1 ? r ? ku(t, r, o, e) : nr(e) == n.scroller && nt(e) : i == 2 ? (r && ni(t.doc, r), setTimeout(function() {
                        return n.input.focus()
                    }, 20)) : i == 3 && (F ? t.display.input.onContextMenu(e) : Fi(t)))
                }
            }
        }

        function wu(e, t, n, r, i) {
            var o = "Click";
            return r == "double" ? o = "Double" + o : r == "triple" && (o = "Triple" + o), o = (t == 1 ? "Left" : t == 2 ? "Middle" : "Right") + o, Dn(e, ql(o, i), i, function(l) {
                if (typeof l == "string" && (l = On[l]), !l) return !1;
                var a = !1;
                try {
                    e.isReadOnly() && (e.state.suppressEdits = !0), a = l(e, n) != be
                } finally {
                    e.state.suppressEdits = !1
                }
                return a
            })
        }

        function xu(e, t, n) {
            var r = e.getOption("configureMouse"),
                i = r ? r(e, t, n) : {};
            if (i.unit == null) {
                var o = m ? n.shiftKey && n.metaKey : n.altKey;
                i.unit = o ? "rectangle" : t == "single" ? "char" : t == "double" ? "word" : "line"
            }
            return (i.extend == null || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey), i.addNew == null && (i.addNew = c ? n.metaKey : n.ctrlKey), i.moveOnDrag == null && (i.moveOnDrag = !(c ? n.altKey : n.ctrlKey)), i
        }

        function ku(e, t, n, r) {
            X ? setTimeout(Ie(tl, e), 0) : e.curOp.focus = de();
            var i = xu(e, n, r),
                o = e.doc.sel,
                l;
            e.options.dragDrop && $r && !e.isReadOnly() && n == "single" && (l = o.contains(t)) > -1 && (f((l = o.ranges[l]).from(), t) < 0 || t.xRel > 0) && (f(l.to(), t) > 0 || t.xRel < 0) ? Su(e, r, t, i) : Cu(e, r, t, i)
        }

        function Su(e, t, n, r) {
            var i = e.display,
                o = !1,
                l = Qe(e, function(u) {
                    W && (i.scroller.draggable = !1), e.state.draggingText = !1, e.state.delayingBlurEvent && (e.hasFocus() ? e.state.delayingBlurEvent = !1 : Fi(e)), ft(i.wrapper.ownerDocument, "mouseup", l), ft(i.wrapper.ownerDocument, "mousemove", a), ft(i.scroller, "dragstart", s), ft(i.scroller, "drop", l), o || (nt(u), r.addNew || ni(e.doc, n, null, null, r.extend), W && !G || X && E == 9 ? setTimeout(function() {
                        i.wrapper.ownerDocument.body.focus({
                            preventScroll: !0
                        }), i.input.focus()
                    }, 20) : i.input.focus())
                }),
                a = function(u) {
                    o = o || Math.abs(t.clientX - u.clientX) + Math.abs(t.clientY - u.clientY) >= 10
                },
                s = function() {
                    return o = !0
                };
            W && (i.scroller.draggable = !0), e.state.draggingText = l, l.copy = !r.moveOnDrag, he(i.wrapper.ownerDocument, "mouseup", l), he(i.wrapper.ownerDocument, "mousemove", a), he(i.scroller, "dragstart", s), he(i.scroller, "drop", l), e.state.delayingBlurEvent = !0, setTimeout(function() {
                return i.input.focus()
            }, 20), i.scroller.dragDrop && i.scroller.dragDrop()
        }

        function ta(e, t, n) {
            if (n == "char") return new Ae(t, t);
            if (n == "word") return e.findWordAt(t);
            if (n == "line") return new Ae(U(t.line, 0), $(e.doc, U(t.line + 1, 0)));
            var r = n(e, t);
            return new Ae(r.from, r.to)
        }

        function Cu(e, t, n, r) {
            X && Fi(e);
            var i = e.display,
                o = e.doc;
            nt(t);
            var l, a, s = o.sel,
                u = s.ranges;
            if (r.addNew && !r.extend ? (a = o.sel.contains(n), a > -1 ? l = u[a] : l = new Ae(n, n)) : (l = o.sel.primary(), a = o.sel.primIndex), r.unit == "rectangle") r.addNew || (l = new Ae(n, n)), n = wr(e, t, !0, !0), a = -1;
            else {
                var d = ta(e, n, r.unit);
                r.extend ? l = ji(l, d.anchor, d.head, r.extend) : l = d
            }
            r.addNew ? a == -1 ? (a = u.length, ot(o, Bt(e, u.concat([l]), a), {
                scroll: !1,
                origin: "*mouse"
            })) : u.length > 1 && u[a].empty() && r.unit == "char" && !r.extend ? (ot(o, Bt(e, u.slice(0, a).concat(u.slice(a + 1)), 0), {
                scroll: !1,
                origin: "*mouse"
            }), s = o.sel) : Zi(o, a, l, xe) : (a = 0, ot(o, new At([l], 0), xe), s = o.sel);
            var v = n;

            function x(Q) {
                if (f(v, Q) != 0)
                    if (v = Q, r.unit == "rectangle") {
                        for (var ne = [], fe = e.options.tabSize, se = Fe(oe(o, n.line).text, n.ch, fe), ye = Fe(oe(o, Q.line).text, Q.ch, fe), We = Math.min(se, ye), $e = Math.max(se, ye), He = Math.min(n.line, Q.line), wt = Math.min(e.lastLine(), Math.max(n.line, Q.line)); He <= wt; He++) {
                            var pt = oe(o, He).text,
                                qe = je(pt, We, fe);
                            We == $e ? ne.push(new Ae(U(He, qe), U(He, qe))) : pt.length > qe && ne.push(new Ae(U(He, qe), U(He, je(pt, $e, fe))))
                        }
                        ne.length || ne.push(new Ae(n, n)), ot(o, Bt(e, s.ranges.slice(0, a).concat(ne), a), {
                            origin: "*mouse",
                            scroll: !1
                        }), e.scrollIntoView(Q)
                    } else {
                        var vt = l,
                            rt = ta(e, Q, r.unit),
                            Ye = vt.anchor,
                            Xe;
                        f(rt.anchor, Ye) > 0 ? (Xe = rt.head, Ye = ge(vt.from(), rt.anchor)) : (Xe = rt.anchor, Ye = _(vt.to(), rt.head));
                        var Ue = s.ranges.slice(0);
                        Ue[a] = Lu(e, new Ae($(o, Ye), Xe)), ot(o, Bt(e, Ue, a), xe)
                    }
            }
            var w = i.wrapper.getBoundingClientRect(),
                P = 0;

            function H(Q) {
                var ne = ++P,
                    fe = wr(e, Q, !0, r.unit == "rectangle");
                if (fe)
                    if (f(fe, v) != 0) {
                        e.curOp.focus = de(), x(fe);
                        var se = Qn(i, o);
                        (fe.line >= se.to || fe.line < se.from) && setTimeout(Qe(e, function() {
                            P == ne && H(Q)
                        }), 150)
                    } else {
                        var ye = Q.clientY < w.top ? -20 : Q.clientY > w.bottom ? 20 : 0;
                        ye && setTimeout(Qe(e, function() {
                            P == ne && (i.scroller.scrollTop += ye, H(Q))
                        }), 50)
                    }
            }

            function q(Q) {
                e.state.selectingText = !1, P = 1 / 0, Q && (nt(Q), i.input.focus()), ft(i.wrapper.ownerDocument, "mousemove", J), ft(i.wrapper.ownerDocument, "mouseup", ee), o.history.lastSelOrigin = null
            }
            var J = Qe(e, function(Q) {
                    Q.buttons === 0 || !Fn(Q) ? q(Q) : H(Q)
                }),
                ee = Qe(e, q);
            e.state.selectingText = ee, he(i.wrapper.ownerDocument, "mousemove", J), he(i.wrapper.ownerDocument, "mouseup", ee)
        }

        function Lu(e, t) {
            var n = t.anchor,
                r = t.head,
                i = oe(e.doc, n.line);
            if (f(n, r) == 0 && n.sticky == r.sticky) return t;
            var o = mt(i);
            if (!o) return t;
            var l = Re(o, n.ch, n.sticky),
                a = o[l];
            if (a.from != n.ch && a.to != n.ch) return t;
            var s = l + (a.from == n.ch == (a.level != 1) ? 0 : 1);
            if (s == 0 || s == o.length) return t;
            var u;
            if (r.line != n.line) u = (r.line - n.line) * (e.doc.direction == "ltr" ? 1 : -1) > 0;
            else {
                var d = Re(o, r.ch, r.sticky),
                    v = d - l || (r.ch - n.ch) * (a.level == 1 ? -1 : 1);
                d == s - 1 || d == s ? u = v < 0 : u = v > 0
            }
            var x = o[s + (u ? -1 : 0)],
                w = u == (x.level == 1),
                P = w ? x.from : x.to,
                H = w ? "after" : "before";
            return n.ch == P && n.sticky == H ? t : new Ae(new U(n.line, P, H), r)
        }

        function ra(e, t, n, r) {
            var i, o;
            if (t.touches) i = t.touches[0].clientX, o = t.touches[0].clientY;
            else try {
                i = t.clientX, o = t.clientY
            } catch {
                return !1
            }
            if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
            r && nt(t);
            var l = e.display,
                a = l.lineDiv.getBoundingClientRect();
            if (o > a.bottom || !tt(e, n)) return St(t);
            o -= a.top - l.viewOffset;
            for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
                var u = l.gutters.childNodes[s];
                if (u && u.getBoundingClientRect().right >= i) {
                    var d = _t(e.doc, o),
                        v = e.display.gutterSpecs[s];
                    return ve(e, n, e, d, v.className, t), St(t)
                }
            }
        }

        function to(e, t) {
            return ra(e, t, "gutterClick", !0)
        }

        function na(e, t) {
            $t(e.display, t) || Tu(e, t) || Ge(e, t, "contextmenu") || F || e.display.input.onContextMenu(t)
        }

        function Tu(e, t) {
            return tt(e, "gutterContextMenu") ? ra(e, t, "gutterContextMenu", !1) : !1
        }

        function ia(e) {
            e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), dn(e)
        }
        var Zr = {
                toString: function() {
                    return "CodeMirror.Init"
                }
            },
            oa = {},
            fi = {};

        function Mu(e) {
            var t = e.optionHandlers;

            function n(r, i, o, l) {
                e.defaults[r] = i, o && (t[r] = l ? function(a, s, u) {
                    u != Zr && o(a, s, u)
                } : o)
            }
            e.defineOption = n, e.Init = Zr, n("value", "", function(r, i) {
                return r.setValue(i)
            }, !0), n("mode", null, function(r, i) {
                r.doc.modeOption = i, qi(r)
            }, !0), n("indentUnit", 2, qi, !0), n("indentWithTabs", !1), n("smartIndent", !0), n("tabSize", 4, function(r) {
                xn(r), dn(r), ht(r)
            }, !0), n("lineSeparator", null, function(r, i) {
                if (r.doc.lineSep = i, !!i) {
                    var o = [],
                        l = r.doc.first;
                    r.doc.iter(function(s) {
                        for (var u = 0;;) {
                            var d = s.text.indexOf(i, u);
                            if (d == -1) break;
                            u = d + i.length, o.push(U(l, d))
                        }
                        l++
                    });
                    for (var a = o.length - 1; a >= 0; a--) qr(r.doc, i, o[a], U(o[a].line, o[a].ch + i.length))
                }
            }), n("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function(r, i, o) {
                r.state.specialChars = new RegExp(i.source + (i.test("	") ? "" : "|	"), "g"), o != Zr && r.refresh()
            }), n("specialCharPlaceholder", rs, function(r) {
                return r.refresh()
            }, !0), n("electricChars", !0), n("inputStyle", T ? "contenteditable" : "textarea", function() {
                throw new Error("inputStyle can not (yet) be changed in a running editor")
            }, !0), n("spellcheck", !1, function(r, i) {
                return r.getInputField().spellcheck = i
            }, !0), n("autocorrect", !1, function(r, i) {
                return r.getInputField().autocorrect = i
            }, !0), n("autocapitalize", !1, function(r, i) {
                return r.getInputField().autocapitalize = i
            }, !0), n("rtlMoveVisually", !y), n("wholeLineUpdateBefore", !0), n("theme", "default", function(r) {
                ia(r), wn(r)
            }, !0), n("keyMap", "default", function(r, i, o) {
                var l = si(i),
                    a = o != Zr && si(o);
                a && a.detach && a.detach(r, l), l.attach && l.attach(r, a || null)
            }), n("extraKeys", null), n("configureMouse", null), n("lineWrapping", !1, Nu, !0), n("gutters", [], function(r, i) {
                r.display.gutterSpecs = _i(i, r.options.lineNumbers), wn(r)
            }, !0), n("fixedGutter", !0, function(r, i) {
                r.display.gutters.style.left = i ? Pi(r.display) + "px" : "0", r.refresh()
            }, !0), n("coverGutterNextToScrollbar", !1, function(r) {
                return Kr(r)
            }, !0), n("scrollbarStyle", "native", function(r) {
                al(r), Kr(r), r.display.scrollbars.setScrollTop(r.doc.scrollTop), r.display.scrollbars.setScrollLeft(r.doc.scrollLeft)
            }, !0), n("lineNumbers", !1, function(r, i) {
                r.display.gutterSpecs = _i(r.options.gutters, i), wn(r)
            }, !0), n("firstLineNumber", 1, wn, !0), n("lineNumberFormatter", function(r) {
                return r
            }, wn, !0), n("showCursorWhenSelecting", !1, pn, !0), n("resetSelectionOnContextMenu", !0), n("lineWiseCopyCut", !0), n("pasteLinesPerSelection", !0), n("selectionsMayTouch", !1), n("readOnly", !1, function(r, i) {
                i == "nocursor" && (Ir(r), r.display.input.blur()), r.display.input.readOnlyChanged(i)
            }), n("screenReaderLabel", null, function(r, i) {
                i = i === "" ? null : i, r.display.input.screenReaderLabelChanged(i)
            }), n("disableInput", !1, function(r, i) {
                i || r.display.input.reset()
            }, !0), n("dragDrop", !0, Au), n("allowDropFileTypes", null), n("cursorBlinkRate", 530), n("cursorScrollMargin", 0), n("cursorHeight", 1, pn, !0), n("singleCursorHeightPerLine", !0, pn, !0), n("workTime", 100), n("workDelay", 100), n("flattenSpans", !0, xn, !0), n("addModeClass", !1, xn, !0), n("pollInterval", 100), n("undoDepth", 200, function(r, i) {
                return r.doc.history.undoDepth = i
            }), n("historyEventDelay", 1250), n("viewportMargin", 10, function(r) {
                return r.refresh()
            }, !0), n("maxHighlightLength", 1e4, xn, !0), n("moveInputWithCursor", !0, function(r, i) {
                i || r.display.input.resetPosition()
            }), n("tabindex", null, function(r, i) {
                return r.display.input.getField().tabIndex = i || ""
            }), n("autofocus", null), n("direction", "ltr", function(r, i) {
                return r.doc.setDirection(i)
            }, !0), n("phrases", null)
        }

        function Au(e, t, n) {
            var r = n && n != Zr;
            if (!t != !r) {
                var i = e.display.dragFunctions,
                    o = t ? he : ft;
                o(e.display.scroller, "dragstart", i.start), o(e.display.scroller, "dragenter", i.enter), o(e.display.scroller, "dragover", i.over), o(e.display.scroller, "dragleave", i.leave), o(e.display.scroller, "drop", i.drop)
            }
        }

        function Nu(e) {
            e.options.lineWrapping ? (Ce(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (O(e.display.wrapper, "CodeMirror-wrap"), xi(e)), Wi(e), ht(e), dn(e), setTimeout(function() {
                return Kr(e)
            }, 100)
        }

        function Ee(e, t) {
            var n = this;
            if (!(this instanceof Ee)) return new Ee(e, t);
            this.options = t = t ? Oe(t) : {}, Oe(oa, t, !1);
            var r = t.value;
            typeof r == "string" ? r = new dt(r, t.mode, null, t.lineSeparator, t.direction) : t.mode && (r.modeOption = t.mode), this.doc = r;
            var i = new Ee.inputStyles[t.inputStyle](this),
                o = this.display = new Us(e, r, i, t);
            o.wrapper.CodeMirror = this, ia(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), al(this), this.state = {
                keyMaps: [],
                overlays: [],
                modeGen: 0,
                overwrite: !1,
                delayingBlurEvent: !1,
                focused: !1,
                suppressEdits: !1,
                pasteIncoming: -1,
                cutIncoming: -1,
                selectingText: !1,
                draggingText: !1,
                highlight: new Be,
                keySeq: null,
                specialChars: null
            }, t.autofocus && !T && o.input.focus(), X && E < 11 && setTimeout(function() {
                return n.display.input.reset(!0)
            }, 20), Ou(this), au(), Cr(this), this.curOp.forceUpdate = !0, ml(this, r), t.autofocus && !T || this.hasFocus() ? setTimeout(function() {
                n.hasFocus() && !n.state.focused && Bi(n)
            }, 20) : Ir(this);
            for (var l in fi) fi.hasOwnProperty(l) && fi[l](this, t[l], Zr);
            fl(this), t.finishInit && t.finishInit(this);
            for (var a = 0; a < ro.length; ++a) ro[a](this);
            Lr(this), W && t.lineWrapping && getComputedStyle(o.lineDiv).textRendering == "optimizelegibility" && (o.lineDiv.style.textRendering = "auto")
        }
        Ee.defaults = oa, Ee.optionHandlers = fi;

        function Ou(e) {
            var t = e.display;
            he(t.scroller, "mousedown", Qe(e, ea)), X && E < 11 ? he(t.scroller, "dblclick", Qe(e, function(s) {
                if (!Ge(e, s)) {
                    var u = wr(e, s);
                    if (!(!u || to(e, s) || $t(e.display, s))) {
                        nt(s);
                        var d = e.findWordAt(u);
                        ni(e.doc, d.anchor, d.head)
                    }
                }
            })) : he(t.scroller, "dblclick", function(s) {
                return Ge(e, s) || nt(s)
            }), he(t.scroller, "contextmenu", function(s) {
                return na(e, s)
            }), he(t.input.getField(), "contextmenu", function(s) {
                t.scroller.contains(s.target) || na(e, s)
            });
            var n, r = {
                end: 0
            };

            function i() {
                t.activeTouch && (n = setTimeout(function() {
                    return t.activeTouch = null
                }, 1e3), r = t.activeTouch, r.end = +new Date)
            }

            function o(s) {
                if (s.touches.length != 1) return !1;
                var u = s.touches[0];
                return u.radiusX <= 1 && u.radiusY <= 1
            }

            function l(s, u) {
                if (u.left == null) return !0;
                var d = u.left - s.left,
                    v = u.top - s.top;
                return d * d + v * v > 20 * 20
            }
            he(t.scroller, "touchstart", function(s) {
                if (!Ge(e, s) && !o(s) && !to(e, s)) {
                    t.input.ensurePolled(), clearTimeout(n);
                    var u = +new Date;
                    t.activeTouch = {
                        start: u,
                        moved: !1,
                        prev: u - r.end <= 300 ? r : null
                    }, s.touches.length == 1 && (t.activeTouch.left = s.touches[0].pageX, t.activeTouch.top = s.touches[0].pageY)
                }
            }), he(t.scroller, "touchmove", function() {
                t.activeTouch && (t.activeTouch.moved = !0)
            }), he(t.scroller, "touchend", function(s) {
                var u = t.activeTouch;
                if (u && !$t(t, s) && u.left != null && !u.moved && new Date - u.start < 300) {
                    var d = e.coordsChar(t.activeTouch, "page"),
                        v;
                    !u.prev || l(u, u.prev) ? v = new Ae(d, d) : !u.prev.prev || l(u, u.prev.prev) ? v = e.findWordAt(d) : v = new Ae(U(d.line, 0), $(e.doc, U(d.line + 1, 0))), e.setSelection(v.anchor, v.head), e.focus(), nt(s)
                }
                i()
            }), he(t.scroller, "touchcancel", i), he(t.scroller, "scroll", function() {
                t.scroller.clientHeight && (gn(e, t.scroller.scrollTop), kr(e, t.scroller.scrollLeft, !0), ve(e, "scroll", e))
            }), he(t.scroller, "mousewheel", function(s) {
                return dl(e, s)
            }), he(t.scroller, "DOMMouseScroll", function(s) {
                return dl(e, s)
            }), he(t.wrapper, "scroll", function() {
                return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0
            }), t.dragFunctions = {
                enter: function(s) {
                    Ge(e, s) || gr(s)
                },
                over: function(s) {
                    Ge(e, s) || (lu(e, s), gr(s))
                },
                start: function(s) {
                    return ou(e, s)
                },
                drop: Qe(e, iu),
                leave: function(s) {
                    Ge(e, s) || Kl(e)
                }
            };
            var a = t.input.getField();
            he(a, "keyup", function(s) {
                return Vl.call(e, s)
            }), he(a, "keydown", Qe(e, Ql)), he(a, "keypress", Qe(e, $l)), he(a, "focus", function(s) {
                return Bi(e, s)
            }), he(a, "blur", function(s) {
                return Ir(e, s)
            })
        }
        var ro = [];
        Ee.defineInitHook = function(e) {
            return ro.push(e)
        };

        function zn(e, t, n, r) {
            var i = e.doc,
                o;
            n == null && (n = "add"), n == "smart" && (i.mode.indent ? o = sn(e, t).state : n = "prev");
            var l = e.options.tabSize,
                a = oe(i, t),
                s = Fe(a.text, null, l);
            a.stateAfter && (a.stateAfter = null);
            var u = a.text.match(/^\s*/)[0],
                d;
            if (!r && !/\S/.test(a.text)) d = 0, n = "not";
            else if (n == "smart" && (d = i.mode.indent(o, a.text.slice(u.length), a.text), d == be || d > 150)) {
                if (!r) return;
                n = "prev"
            }
            n == "prev" ? t > i.first ? d = Fe(oe(i, t - 1).text, null, l) : d = 0 : n == "add" ? d = s + e.options.indentUnit : n == "subtract" ? d = s - e.options.indentUnit : typeof n == "number" && (d = s + n), d = Math.max(0, d);
            var v = "",
                x = 0;
            if (e.options.indentWithTabs)
                for (var w = Math.floor(d / l); w; --w) x += l, v += "	";
            if (x < d && (v += rr(d - x)), v != u) return qr(i, v, U(t, 0), U(t, u.length), "+input"), a.stateAfter = null, !0;
            for (var P = 0; P < i.sel.ranges.length; P++) {
                var H = i.sel.ranges[P];
                if (H.head.line == t && H.head.ch < u.length) {
                    var q = U(t, u.length);
                    Zi(i, P, new Ae(q, q));
                    break
                }
            }
        }
        var Et = null;

        function ci(e) {
            Et = e
        }

        function no(e, t, n, r, i) {
            var o = e.doc;
            e.display.shift = !1, r || (r = o.sel);
            var l = +new Date - 200,
                a = i == "paste" || e.state.pasteIncoming > l,
                s = tn(t),
                u = null;
            if (a && r.ranges.length > 1)
                if (Et && Et.text.join(`
`) == t) {
                    if (r.ranges.length % Et.text.length == 0) {
                        u = [];
                        for (var d = 0; d < Et.text.length; d++) u.push(o.splitLines(Et.text[d]))
                    }
                } else s.length == r.ranges.length && e.options.pasteLinesPerSelection && (u = Te(s, function(J) {
                    return [J]
                }));
            for (var v = e.curOp.updateInput, x = r.ranges.length - 1; x >= 0; x--) {
                var w = r.ranges[x],
                    P = w.from(),
                    H = w.to();
                w.empty() && (n && n > 0 ? P = U(P.line, P.ch - n) : e.state.overwrite && !a ? H = U(H.line, Math.min(oe(o, H.line).text.length, H.ch + we(s).length)) : a && Et && Et.lineWise && Et.text.join(`
`) == s.join(`
`) && (P = H = U(P.line, 0)));
                var q = {
                    from: P,
                    to: H,
                    text: u ? u[x % u.length] : s,
                    origin: i || (a ? "paste" : e.state.cutIncoming > l ? "cut" : "+input")
                };
                Gr(e.doc, q), Je(e, "inputRead", e, q)
            }
            t && !a && aa(e, t), Rr(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = v), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1
        }

        function la(e, t) {
            var n = e.clipboardData && e.clipboardData.getData("Text");
            if (n) return e.preventDefault(), !t.isReadOnly() && !t.options.disableInput && bt(t, function() {
                return no(t, n, 0, null, "paste")
            }), !0
        }

        function aa(e, t) {
            if (!(!e.options.electricChars || !e.options.smartIndent))
                for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
                    var i = n.ranges[r];
                    if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
                        var o = e.getModeAt(i.head),
                            l = !1;
                        if (o.electricChars) {
                            for (var a = 0; a < o.electricChars.length; a++)
                                if (t.indexOf(o.electricChars.charAt(a)) > -1) {
                                    l = zn(e, i.head.line, "smart");
                                    break
                                }
                        } else o.electricInput && o.electricInput.test(oe(e.doc, i.head.line).text.slice(0, i.head.ch)) && (l = zn(e, i.head.line, "smart"));
                        l && Je(e, "electricInput", e, i.head.line)
                    }
                }
        }

        function sa(e) {
            for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
                var i = e.doc.sel.ranges[r].head.line,
                    o = {
                        anchor: U(i, 0),
                        head: U(i + 1, 0)
                    };
                n.push(o), t.push(e.getRange(o.anchor, o.head))
            }
            return {
                text: t,
                ranges: n
            }
        }

        function ua(e, t, n, r) {
            e.setAttribute("autocorrect", n ? "" : "off"), e.setAttribute("autocapitalize", r ? "" : "off"), e.setAttribute("spellcheck", !!t)
        }

        function fa() {
            var e = p("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
                t = p("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
            return W ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), ie && (e.style.border = "1px solid black"), ua(e), t
        }

        function Du(e) {
            var t = e.optionHandlers,
                n = e.helpers = {};
            e.prototype = {
                constructor: e,
                focus: function() {
                    window.focus(), this.display.input.focus()
                },
                setOption: function(r, i) {
                    var o = this.options,
                        l = o[r];
                    o[r] == i && r != "mode" || (o[r] = i, t.hasOwnProperty(r) && Qe(this, t[r])(this, i, l), ve(this, "optionChange", this, r))
                },
                getOption: function(r) {
                    return this.options[r]
                },
                getDoc: function() {
                    return this.doc
                },
                addKeyMap: function(r, i) {
                    this.state.keyMaps[i ? "push" : "unshift"](si(r))
                },
                removeKeyMap: function(r) {
                    for (var i = this.state.keyMaps, o = 0; o < i.length; ++o)
                        if (i[o] == r || i[o].name == r) return i.splice(o, 1), !0
                },
                addOverlay: st(function(r, i) {
                    var o = r.token ? r : e.getMode(this.options, r);
                    if (o.startState) throw new Error("Overlays may not be stateful.");
                    Ze(this.state.overlays, {
                        mode: o,
                        modeSpec: r,
                        opaque: i && i.opaque,
                        priority: i && i.priority || 0
                    }, function(l) {
                        return l.priority
                    }), this.state.modeGen++, ht(this)
                }),
                removeOverlay: st(function(r) {
                    for (var i = this.state.overlays, o = 0; o < i.length; ++o) {
                        var l = i[o].modeSpec;
                        if (l == r || typeof r == "string" && l.name == r) {
                            i.splice(o, 1), this.state.modeGen++, ht(this);
                            return
                        }
                    }
                }),
                indentLine: st(function(r, i, o) {
                    typeof i != "string" && typeof i != "number" && (i == null ? i = this.options.smartIndent ? "smart" : "prev" : i = i ? "add" : "subtract"), mr(this.doc, r) && zn(this, r, i, o)
                }),
                indentSelection: st(function(r) {
                    for (var i = this.doc.sel.ranges, o = -1, l = 0; l < i.length; l++) {
                        var a = i[l];
                        if (a.empty()) a.head.line > o && (zn(this, a.head.line, r, !0), o = a.head.line, l == this.doc.sel.primIndex && Rr(this));
                        else {
                            var s = a.from(),
                                u = a.to(),
                                d = Math.max(o, s.line);
                            o = Math.min(this.lastLine(), u.line - (u.ch ? 0 : 1)) + 1;
                            for (var v = d; v < o; ++v) zn(this, v, r);
                            var x = this.doc.sel.ranges;
                            s.ch == 0 && i.length == x.length && x[l].from().ch > 0 && Zi(this.doc, l, new Ae(s, x[l].to()), Le)
                        }
                    }
                }),
                getTokenAt: function(r, i) {
                    return yo(this, r, i)
                },
                getLineTokens: function(r, i) {
                    return yo(this, U(r), i, !0)
                },
                getTokenTypeAt: function(r) {
                    r = $(this.doc, r);
                    var i = vo(this, oe(this.doc, r.line)),
                        o = 0,
                        l = (i.length - 1) / 2,
                        a = r.ch,
                        s;
                    if (a == 0) s = i[2];
                    else
                        for (;;) {
                            var u = o + l >> 1;
                            if ((u ? i[u * 2 - 1] : 0) >= a) l = u;
                            else if (i[u * 2 + 1] < a) o = u + 1;
                            else {
                                s = i[u * 2 + 2];
                                break
                            }
                        }
                    var d = s ? s.indexOf("overlay ") : -1;
                    return d < 0 ? s : d == 0 ? null : s.slice(0, d - 1)
                },
                getModeAt: function(r) {
                    var i = this.doc.mode;
                    return i.innerMode ? e.innerMode(i, this.getTokenAt(r).state).mode : i
                },
                getHelper: function(r, i) {
                    return this.getHelpers(r, i)[0]
                },
                getHelpers: function(r, i) {
                    var o = [];
                    if (!n.hasOwnProperty(i)) return o;
                    var l = n[i],
                        a = this.getModeAt(r);
                    if (typeof a[i] == "string") l[a[i]] && o.push(l[a[i]]);
                    else if (a[i])
                        for (var s = 0; s < a[i].length; s++) {
                            var u = l[a[i][s]];
                            u && o.push(u)
                        } else a.helperType && l[a.helperType] ? o.push(l[a.helperType]) : l[a.name] && o.push(l[a.name]);
                    for (var d = 0; d < l._global.length; d++) {
                        var v = l._global[d];
                        v.pred(a, this) && ae(o, v.val) == -1 && o.push(v.val)
                    }
                    return o
                },
                getStateAfter: function(r, i) {
                    var o = this.doc;
                    return r = Se(o, r ? ? o.first + o.size - 1), sn(this, r + 1, i).state
                },
                cursorCoords: function(r, i) {
                    var o, l = this.doc.sel.primary();
                    return r == null ? o = l.head : typeof r == "object" ? o = $(this.doc, r) : o = r ? l.from() : l.to(), Ft(this, o, i || "page")
                },
                charCoords: function(r, i) {
                    return Mi(this, $(this.doc, r), i || "page")
                },
                coordsChar: function(r, i) {
                    return r = Yo(this, r, i || "page"), Ni(this, r.left, r.top)
                },
                lineAtHeight: function(r, i) {
                    return r = Yo(this, {
                        top: r,
                        left: 0
                    }, i || "page").top, _t(this.doc, r + this.display.viewOffset)
                },
                heightAtLine: function(r, i, o) {
                    var l = !1,
                        a;
                    if (typeof r == "number") {
                        var s = this.doc.first + this.doc.size - 1;
                        r < this.doc.first ? r = this.doc.first : r > s && (r = s, l = !0), a = oe(this.doc, r)
                    } else a = r;
                    return Yn(this, a, {
                        top: 0,
                        left: 0
                    }, i || "page", o || l).top + (l ? this.doc.height - Vt(a) : 0)
                },
                defaultTextHeight: function() {
                    return Er(this.display)
                },
                defaultCharWidth: function() {
                    return Hr(this.display)
                },
                getViewport: function() {
                    return {
                        from: this.display.viewFrom,
                        to: this.display.viewTo
                    }
                },
                addWidget: function(r, i, o, l, a) {
                    var s = this.display;
                    r = Ft(this, $(this.doc, r));
                    var u = r.bottom,
                        d = r.left;
                    if (i.style.position = "absolute", i.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(i), s.sizer.appendChild(i), l == "over") u = r.top;
                    else if (l == "above" || l == "near") {
                        var v = Math.max(s.wrapper.clientHeight, this.doc.height),
                            x = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth);
                        (l == "above" || r.bottom + i.offsetHeight > v) && r.top > i.offsetHeight ? u = r.top - i.offsetHeight : r.bottom + i.offsetHeight <= v && (u = r.bottom), d + i.offsetWidth > x && (d = x - i.offsetWidth)
                    }
                    i.style.top = u + "px", i.style.left = i.style.right = "", a == "right" ? (d = s.sizer.clientWidth - i.offsetWidth, i.style.right = "0px") : (a == "left" ? d = 0 : a == "middle" && (d = (s.sizer.clientWidth - i.offsetWidth) / 2), i.style.left = d + "px"), o && As(this, {
                        left: d,
                        top: u,
                        right: d + i.offsetWidth,
                        bottom: u + i.offsetHeight
                    })
                },
                triggerOnKeyDown: st(Ql),
                triggerOnKeyPress: st($l),
                triggerOnKeyUp: Vl,
                triggerOnMouseDown: st(ea),
                execCommand: function(r) {
                    if (On.hasOwnProperty(r)) return On[r].call(null, this)
                },
                triggerElectric: st(function(r) {
                    aa(this, r)
                }),
                findPosH: function(r, i, o, l) {
                    var a = 1;
                    i < 0 && (a = -1, i = -i);
                    for (var s = $(this.doc, r), u = 0; u < i && (s = io(this.doc, s, a, o, l), !s.hitSide); ++u);
                    return s
                },
                moveH: st(function(r, i) {
                    var o = this;
                    this.extendSelectionsBy(function(l) {
                        return o.display.shift || o.doc.extend || l.empty() ? io(o.doc, l.head, r, i, o.options.rtlMoveVisually) : r < 0 ? l.from() : l.to()
                    }, me)
                }),
                deleteH: st(function(r, i) {
                    var o = this.doc.sel,
                        l = this.doc;
                    o.somethingSelected() ? l.replaceSelection("", null, "+delete") : jr(this, function(a) {
                        var s = io(l, a.head, r, i, !1);
                        return r < 0 ? {
                            from: s,
                            to: a.head
                        } : {
                            from: a.head,
                            to: s
                        }
                    })
                }),
                findPosV: function(r, i, o, l) {
                    var a = 1,
                        s = l;
                    i < 0 && (a = -1, i = -i);
                    for (var u = $(this.doc, r), d = 0; d < i; ++d) {
                        var v = Ft(this, u, "div");
                        if (s == null ? s = v.left : v.left = s, u = ca(this, v, a, o), u.hitSide) break
                    }
                    return u
                },
                moveV: st(function(r, i) {
                    var o = this,
                        l = this.doc,
                        a = [],
                        s = !this.display.shift && !l.extend && l.sel.somethingSelected();
                    if (l.extendSelectionsBy(function(d) {
                            if (s) return r < 0 ? d.from() : d.to();
                            var v = Ft(o, d.head, "div");
                            d.goalColumn != null && (v.left = d.goalColumn), a.push(v.left);
                            var x = ca(o, v, r, i);
                            return i == "page" && d == l.sel.primary() && Hi(o, Mi(o, x, "div").top - v.top), x
                        }, me), a.length)
                        for (var u = 0; u < l.sel.ranges.length; u++) l.sel.ranges[u].goalColumn = a[u]
                }),
                findWordAt: function(r) {
                    var i = this.doc,
                        o = oe(i, r.line).text,
                        l = r.ch,
                        a = r.ch;
                    if (o) {
                        var s = this.getHelper(r, "wordChars");
                        (r.sticky == "before" || a == o.length) && l ? --l : ++a;
                        for (var u = o.charAt(l), d = M(u, s) ? function(v) {
                                return M(v, s)
                            } : /\s/.test(u) ? function(v) {
                                return /\s/.test(v)
                            } : function(v) {
                                return !/\s/.test(v) && !M(v)
                            }; l > 0 && d(o.charAt(l - 1));) --l;
                        for (; a < o.length && d(o.charAt(a));) ++a
                    }
                    return new Ae(U(r.line, l), U(r.line, a))
                },
                toggleOverwrite: function(r) {
                    r != null && r == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? Ce(this.display.cursorDiv, "CodeMirror-overwrite") : O(this.display.cursorDiv, "CodeMirror-overwrite"), ve(this, "overwriteToggle", this, this.state.overwrite))
                },
                hasFocus: function() {
                    return this.display.input.getField() == de()
                },
                isReadOnly: function() {
                    return !!(this.options.readOnly || this.doc.cantEdit)
                },
                scrollTo: st(function(r, i) {
                    vn(this, r, i)
                }),
                getScrollInfo: function() {
                    var r = this.display.scroller;
                    return {
                        left: r.scrollLeft,
                        top: r.scrollTop,
                        height: r.scrollHeight - Xt(this) - this.display.barHeight,
                        width: r.scrollWidth - Xt(this) - this.display.barWidth,
                        clientHeight: Ci(this),
                        clientWidth: yr(this)
                    }
                },
                scrollIntoView: st(function(r, i) {
                    r == null ? (r = {
                        from: this.doc.sel.primary().head,
                        to: null
                    }, i == null && (i = this.options.cursorScrollMargin)) : typeof r == "number" ? r = {
                        from: U(r, 0),
                        to: null
                    } : r.from == null && (r = {
                        from: r,
                        to: null
                    }), r.to || (r.to = r.from), r.margin = i || 0, r.from.line != null ? Ns(this, r) : nl(this, r.from, r.to, r.margin)
                }),
                setSize: st(function(r, i) {
                    var o = this,
                        l = function(s) {
                            return typeof s == "number" || /^\d+$/.test(String(s)) ? s + "px" : s
                        };
                    r != null && (this.display.wrapper.style.width = l(r)), i != null && (this.display.wrapper.style.height = l(i)), this.options.lineWrapping && Go(this);
                    var a = this.display.viewFrom;
                    this.doc.iter(a, this.display.viewTo, function(s) {
                        if (s.widgets) {
                            for (var u = 0; u < s.widgets.length; u++)
                                if (s.widgets[u].noHScroll) {
                                    lr(o, a, "widget");
                                    break
                                }
                        }++a
                    }), this.curOp.forceUpdate = !0, ve(this, "refresh", this)
                }),
                operation: function(r) {
                    return bt(this, r)
                },
                startOperation: function() {
                    return Cr(this)
                },
                endOperation: function() {
                    return Lr(this)
                },
                refresh: st(function() {
                    var r = this.display.cachedTextHeight;
                    ht(this), this.curOp.forceUpdate = !0, dn(this), vn(this, this.doc.scrollLeft, this.doc.scrollTop), Ki(this.display), (r == null || Math.abs(r - Er(this.display)) > .5 || this.options.lineWrapping) && Wi(this), ve(this, "refresh", this)
                }),
                swapDoc: st(function(r) {
                    var i = this.doc;
                    return i.cm = null, this.state.selectingText && this.state.selectingText(), ml(this, r), dn(this), this.display.input.reset(), vn(this, r.scrollLeft, r.scrollTop), this.curOp.forceScroll = !0, Je(this, "swapDoc", this, i), i
                }),
                phrase: function(r) {
                    var i = this.options.phrases;
                    return i && Object.prototype.hasOwnProperty.call(i, r) ? i[r] : r
                },
                getInputField: function() {
                    return this.display.input.getField()
                },
                getWrapperElement: function() {
                    return this.display.wrapper
                },
                getScrollerElement: function() {
                    return this.display.scroller
                },
                getGutterElement: function() {
                    return this.display.gutters
                }
            }, Rt(e), e.registerHelper = function(r, i, o) {
                n.hasOwnProperty(r) || (n[r] = e[r] = {
                    _global: []
                }), n[r][i] = o
            }, e.registerGlobalHelper = function(r, i, o, l) {
                e.registerHelper(r, i, l), n[r]._global.push({
                    pred: o,
                    val: l
                })
            }
        }

        function io(e, t, n, r, i) {
            var o = t,
                l = n,
                a = oe(e, t.line),
                s = i && e.direction == "rtl" ? -n : n;

            function u() {
                var ee = t.line + s;
                return ee < e.first || ee >= e.first + e.size ? !1 : (t = new U(ee, t.ch, t.sticky), a = oe(e, ee))
            }

            function d(ee) {
                var Q;
                if (r == "codepoint") {
                    var ne = a.text.charCodeAt(t.ch + (n > 0 ? 0 : -1));
                    if (isNaN(ne)) Q = null;
                    else {
                        var fe = n > 0 ? ne >= 55296 && ne < 56320 : ne >= 56320 && ne < 57343;
                        Q = new U(t.line, Math.max(0, Math.min(a.text.length, t.ch + n * (fe ? 2 : 1))), -n)
                    }
                } else i ? Q = hu(e.cm, a, t, n) : Q = Qi(a, t, n);
                if (Q == null)
                    if (!ee && u()) t = Vi(i, e.cm, a, t.line, s);
                    else return !1;
                else t = Q;
                return !0
            }
            if (r == "char" || r == "codepoint") d();
            else if (r == "column") d(!0);
            else if (r == "word" || r == "group")
                for (var v = null, x = r == "group", w = e.cm && e.cm.getHelper(t, "wordChars"), P = !0; !(n < 0 && !d(!P)); P = !1) {
                    var H = a.text.charAt(t.ch) || `
`,
                        q = M(H, w) ? "w" : x && H == `
` ? "n" : !x || /\s/.test(H) ? null : "p";
                    if (x && !P && !q && (q = "s"), v && v != q) {
                        n < 0 && (n = 1, d(), t.sticky = "after");
                        break
                    }
                    if (q && (v = q), n > 0 && !d(!P)) break
                }
            var J = oi(e, t, o, l, !0);
            return g(o, J) && (J.hitSide = !0), J
        }

        function ca(e, t, n, r) {
            var i = e.doc,
                o = t.left,
                l;
            if (r == "page") {
                var a = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                    s = Math.max(a - .5 * Er(e.display), 3);
                l = (n > 0 ? t.bottom : t.top) + n * s
            } else r == "line" && (l = n > 0 ? t.bottom + 3 : t.top - 3);
            for (var u; u = Ni(e, o, l), !!u.outside;) {
                if (n < 0 ? l <= 0 : l >= i.height) {
                    u.hitSide = !0;
                    break
                }
                l += n * 5
            }
            return u
        }
        var De = function(e) {
            this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new Be, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
        };
        De.prototype.init = function(e) {
            var t = this,
                n = this,
                r = n.cm,
                i = n.div = e.lineDiv;
            i.contentEditable = !0, ua(i, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize);

            function o(a) {
                for (var s = a.target; s; s = s.parentNode) {
                    if (s == i) return !0;
                    if (/\bCodeMirror-(?:line)?widget\b/.test(s.className)) break
                }
                return !1
            }
            he(i, "paste", function(a) {
                !o(a) || Ge(r, a) || la(a, r) || E <= 11 && setTimeout(Qe(r, function() {
                    return t.updateFromDOM()
                }), 20)
            }), he(i, "compositionstart", function(a) {
                t.composing = {
                    data: a.data,
                    done: !1
                }
            }), he(i, "compositionupdate", function(a) {
                t.composing || (t.composing = {
                    data: a.data,
                    done: !1
                })
            }), he(i, "compositionend", function(a) {
                t.composing && (a.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0)
            }), he(i, "touchstart", function() {
                return n.forceCompositionEnd()
            }), he(i, "input", function() {
                t.composing || t.readFromDOMSoon()
            });

            function l(a) {
                if (!(!o(a) || Ge(r, a))) {
                    if (r.somethingSelected()) ci({
                        lineWise: !1,
                        text: r.getSelections()
                    }), a.type == "cut" && r.replaceSelection("", null, "cut");
                    else if (r.options.lineWiseCopyCut) {
                        var s = sa(r);
                        ci({
                            lineWise: !0,
                            text: s.text
                        }), a.type == "cut" && r.operation(function() {
                            r.setSelections(s.ranges, 0, Le), r.replaceSelection("", null, "cut")
                        })
                    } else return;
                    if (a.clipboardData) {
                        a.clipboardData.clearData();
                        var u = Et.text.join(`
`);
                        if (a.clipboardData.setData("Text", u), a.clipboardData.getData("Text") == u) {
                            a.preventDefault();
                            return
                        }
                    }
                    var d = fa(),
                        v = d.firstChild;
                    r.display.lineSpace.insertBefore(d, r.display.lineSpace.firstChild), v.value = Et.text.join(`
`);
                    var x = de();
                    Ne(v), setTimeout(function() {
                        r.display.lineSpace.removeChild(d), x.focus(), x == i && n.showPrimarySelection()
                    }, 50)
                }
            }
            he(i, "copy", l), he(i, "cut", l)
        }, De.prototype.screenReaderLabelChanged = function(e) {
            e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label")
        }, De.prototype.prepareSelection = function() {
            var e = $o(this.cm, !1);
            return e.focus = de() == this.div, e
        }, De.prototype.showSelection = function(e, t) {
            !e || !this.cm.display.view.length || ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
        }, De.prototype.getSelection = function() {
            return this.cm.display.wrapper.ownerDocument.getSelection()
        }, De.prototype.showPrimarySelection = function() {
            var e = this.getSelection(),
                t = this.cm,
                n = t.doc.sel.primary(),
                r = n.from(),
                i = n.to();
            if (t.display.viewTo == t.display.viewFrom || r.line >= t.display.viewTo || i.line < t.display.viewFrom) {
                e.removeAllRanges();
                return
            }
            var o = hi(t, e.anchorNode, e.anchorOffset),
                l = hi(t, e.focusNode, e.focusOffset);
            if (!(o && !o.bad && l && !l.bad && f(ge(o, l), r) == 0 && f(_(o, l), i) == 0)) {
                var a = t.display.view,
                    s = r.line >= t.display.viewFrom && ha(t, r) || {
                        node: a[0].measure.map[2],
                        offset: 0
                    },
                    u = i.line < t.display.viewTo && ha(t, i);
                if (!u) {
                    var d = a[a.length - 1].measure,
                        v = d.maps ? d.maps[d.maps.length - 1] : d.map;
                    u = {
                        node: v[v.length - 1],
                        offset: v[v.length - 2] - v[v.length - 3]
                    }
                }
                if (!s || !u) {
                    e.removeAllRanges();
                    return
                }
                var x = e.rangeCount && e.getRangeAt(0),
                    w;
                try {
                    w = I(s.node, s.offset, u.offset, u.node)
                } catch {}
                w && (!j && t.state.focused ? (e.collapse(s.node, s.offset), w.collapsed || (e.removeAllRanges(), e.addRange(w))) : (e.removeAllRanges(), e.addRange(w)), x && e.anchorNode == null ? e.addRange(x) : j && this.startGracePeriod()), this.rememberSelection()
            }
        }, De.prototype.startGracePeriod = function() {
            var e = this;
            clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
                e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
                    return e.cm.curOp.selectionChanged = !0
                })
            }, 20)
        }, De.prototype.showMultipleSelections = function(e) {
            k(this.cm.display.cursorDiv, e.cursors), k(this.cm.display.selectionDiv, e.selection)
        }, De.prototype.rememberSelection = function() {
            var e = this.getSelection();
            this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
        }, De.prototype.selectionInEditor = function() {
            var e = this.getSelection();
            if (!e.rangeCount) return !1;
            var t = e.getRangeAt(0).commonAncestorContainer;
            return V(this.div, t)
        }, De.prototype.focus = function() {
            this.cm.options.readOnly != "nocursor" && ((!this.selectionInEditor() || de() != this.div) && this.showSelection(this.prepareSelection(), !0), this.div.focus())
        }, De.prototype.blur = function() {
            this.div.blur()
        }, De.prototype.getField = function() {
            return this.div
        }, De.prototype.supportsTouch = function() {
            return !0
        }, De.prototype.receivedFocus = function() {
            var e = this;
            this.selectionInEditor() ? this.pollSelection() : bt(this.cm, function() {
                return e.cm.curOp.selectionChanged = !0
            });

            function t() {
                e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t))
            }
            this.polling.set(this.cm.options.pollInterval, t)
        }, De.prototype.selectionChanged = function() {
            var e = this.getSelection();
            return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
        }, De.prototype.pollSelection = function() {
            if (!(this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged())) {
                var e = this.getSelection(),
                    t = this.cm;
                if (D && C && this.cm.display.gutterSpecs.length && Pu(e.anchorNode)) {
                    this.cm.triggerOnKeyDown({
                        type: "keydown",
                        keyCode: 8,
                        preventDefault: Math.abs
                    }), this.blur(), this.focus();
                    return
                }
                if (!this.composing) {
                    this.rememberSelection();
                    var n = hi(t, e.anchorNode, e.anchorOffset),
                        r = hi(t, e.focusNode, e.focusOffset);
                    n && r && bt(t, function() {
                        ot(t.doc, sr(n, r), Le), (n.bad || r.bad) && (t.curOp.selectionChanged = !0)
                    })
                }
            }
        }, De.prototype.pollContent = function() {
            this.readDOMTimeout != null && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
            var e = this.cm,
                t = e.display,
                n = e.doc.sel.primary(),
                r = n.from(),
                i = n.to();
            if (r.ch == 0 && r.line > e.firstLine() && (r = U(r.line - 1, oe(e.doc, r.line - 1).length)), i.ch == oe(e.doc, i.line).text.length && i.line < e.lastLine() && (i = U(i.line + 1, 0)), r.line < t.viewFrom || i.line > t.viewTo - 1) return !1;
            var o, l, a;
            r.line == t.viewFrom || (o = xr(e, r.line)) == 0 ? (l = Me(t.view[0].line), a = t.view[0].node) : (l = Me(t.view[o].line), a = t.view[o - 1].node.nextSibling);
            var s = xr(e, i.line),
                u, d;
            if (s == t.view.length - 1 ? (u = t.viewTo - 1, d = t.lineDiv.lastChild) : (u = Me(t.view[s + 1].line) - 1, d = t.view[s + 1].node.previousSibling), !a) return !1;
            for (var v = e.doc.splitLines(Wu(e, a, d, l, u)), x = Ut(e.doc, U(l, 0), U(u, oe(e.doc, u).text.length)); v.length > 1 && x.length > 1;)
                if (we(v) == we(x)) v.pop(), x.pop(), u--;
                else if (v[0] == x[0]) v.shift(), x.shift(), l++;
            else break;
            for (var w = 0, P = 0, H = v[0], q = x[0], J = Math.min(H.length, q.length); w < J && H.charCodeAt(w) == q.charCodeAt(w);) ++w;
            for (var ee = we(v), Q = we(x), ne = Math.min(ee.length - (v.length == 1 ? w : 0), Q.length - (x.length == 1 ? w : 0)); P < ne && ee.charCodeAt(ee.length - P - 1) == Q.charCodeAt(Q.length - P - 1);) ++P;
            if (v.length == 1 && x.length == 1 && l == r.line)
                for (; w && w > r.ch && ee.charCodeAt(ee.length - P - 1) == Q.charCodeAt(Q.length - P - 1);) w--, P++;
            v[v.length - 1] = ee.slice(0, ee.length - P).replace(/^\u200b+/, ""), v[0] = v[0].slice(w).replace(/\u200b+$/, "");
            var fe = U(l, w),
                se = U(u, x.length ? we(x).length - P : 0);
            if (v.length > 1 || v[0] || f(fe, se)) return qr(e.doc, v, fe, se, "+input"), !0
        }, De.prototype.ensurePolled = function() {
            this.forceCompositionEnd()
        }, De.prototype.reset = function() {
            this.forceCompositionEnd()
        }, De.prototype.forceCompositionEnd = function() {
            this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus())
        }, De.prototype.readFromDOMSoon = function() {
            var e = this;
            this.readDOMTimeout == null && (this.readDOMTimeout = setTimeout(function() {
                if (e.readDOMTimeout = null, e.composing)
                    if (e.composing.done) e.composing = null;
                    else return;
                e.updateFromDOM()
            }, 80))
        }, De.prototype.updateFromDOM = function() {
            var e = this;
            (this.cm.isReadOnly() || !this.pollContent()) && bt(this.cm, function() {
                return ht(e.cm)
            })
        }, De.prototype.setUneditable = function(e) {
            e.contentEditable = "false"
        }, De.prototype.onKeyPress = function(e) {
            e.charCode == 0 || this.composing || (e.preventDefault(), this.cm.isReadOnly() || Qe(this.cm, no)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0))
        }, De.prototype.readOnlyChanged = function(e) {
            this.div.contentEditable = String(e != "nocursor")
        }, De.prototype.onContextMenu = function() {}, De.prototype.resetPosition = function() {}, De.prototype.needsContentAttribute = !0;

        function ha(e, t) {
            var n = Li(e, t.line);
            if (!n || n.hidden) return null;
            var r = oe(e.doc, t.line),
                i = Io(n, r, t.line),
                o = mt(r, e.doc.direction),
                l = "left";
            if (o) {
                var a = Re(o, t.ch);
                l = a % 2 ? "right" : "left"
            }
            var s = Uo(i.map, t.ch, l);
            return s.offset = s.collapse == "right" ? s.end : s.start, s
        }

        function Pu(e) {
            for (var t = e; t; t = t.parentNode)
                if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
            return !1
        }

        function Jr(e, t) {
            return t && (e.bad = !0), e
        }

        function Wu(e, t, n, r, i) {
            var o = "",
                l = !1,
                a = e.doc.lineSeparator(),
                s = !1;

            function u(w) {
                return function(P) {
                    return P.id == w
                }
            }

            function d() {
                l && (o += a, s && (o += a), l = s = !1)
            }

            function v(w) {
                w && (d(), o += w)
            }

            function x(w) {
                if (w.nodeType == 1) {
                    var P = w.getAttribute("cm-text");
                    if (P) {
                        v(P);
                        return
                    }
                    var H = w.getAttribute("cm-marker"),
                        q;
                    if (H) {
                        var J = e.findMarks(U(r, 0), U(i + 1, 0), u(+H));
                        J.length && (q = J[0].find(0)) && v(Ut(e.doc, q.from, q.to).join(a));
                        return
                    }
                    if (w.getAttribute("contenteditable") == "false") return;
                    var ee = /^(pre|div|p|li|table|br)$/i.test(w.nodeName);
                    if (!/^br$/i.test(w.nodeName) && w.textContent.length == 0) return;
                    ee && d();
                    for (var Q = 0; Q < w.childNodes.length; Q++) x(w.childNodes[Q]);
                    /^(pre|p)$/i.test(w.nodeName) && (s = !0), ee && (l = !0)
                } else w.nodeType == 3 && v(w.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "))
            }
            for (; x(t), t != n;) t = t.nextSibling, s = !1;
            return o
        }

        function hi(e, t, n) {
            var r;
            if (t == e.display.lineDiv) {
                if (r = e.display.lineDiv.childNodes[n], !r) return Jr(e.clipPos(U(e.display.viewTo - 1)), !0);
                t = null, n = 0
            } else
                for (r = t;; r = r.parentNode) {
                    if (!r || r == e.display.lineDiv) return null;
                    if (r.parentNode && r.parentNode == e.display.lineDiv) break
                }
            for (var i = 0; i < e.display.view.length; i++) {
                var o = e.display.view[i];
                if (o.node == r) return zu(o, t, n)
            }
        }

        function zu(e, t, n) {
            var r = e.text.firstChild,
                i = !1;
            if (!t || !V(r, t)) return Jr(U(Me(e.line), 0), !0);
            if (t == r && (i = !0, t = r.childNodes[n], n = 0, !t)) {
                var o = e.rest ? we(e.rest) : e.line;
                return Jr(U(Me(o), o.text.length), i)
            }
            var l = t.nodeType == 3 ? t : null,
                a = t;
            for (!l && t.childNodes.length == 1 && t.firstChild.nodeType == 3 && (l = t.firstChild, n && (n = l.nodeValue.length)); a.parentNode != r;) a = a.parentNode;
            var s = e.measure,
                u = s.maps;

            function d(q, J, ee) {
                for (var Q = -1; Q < (u ? u.length : 0); Q++)
                    for (var ne = Q < 0 ? s.map : u[Q], fe = 0; fe < ne.length; fe += 3) {
                        var se = ne[fe + 2];
                        if (se == q || se == J) {
                            var ye = Me(Q < 0 ? e.line : e.rest[Q]),
                                We = ne[fe] + ee;
                            return (ee < 0 || se != q) && (We = ne[fe + (ee ? 1 : 0)]), U(ye, We)
                        }
                    }
            }
            var v = d(l, a, n);
            if (v) return Jr(v, i);
            for (var x = a.nextSibling, w = l ? l.nodeValue.length - n : 0; x; x = x.nextSibling) {
                if (v = d(x, x.firstChild, 0), v) return Jr(U(v.line, v.ch - w), i);
                w += x.textContent.length
            }
            for (var P = a.previousSibling, H = n; P; P = P.previousSibling) {
                if (v = d(P, P.firstChild, -1), v) return Jr(U(v.line, v.ch + H), i);
                H += P.textContent.length
            }
        }
        var _e = function(e) {
            this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new Be, this.hasSelection = !1, this.composing = null
        };
        _e.prototype.init = function(e) {
            var t = this,
                n = this,
                r = this.cm;
            this.createField(e);
            var i = this.textarea;
            e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), ie && (i.style.width = "0px"), he(i, "input", function() {
                X && E >= 9 && t.hasSelection && (t.hasSelection = null), n.poll()
            }), he(i, "paste", function(l) {
                Ge(r, l) || la(l, r) || (r.state.pasteIncoming = +new Date, n.fastPoll())
            });

            function o(l) {
                if (!Ge(r, l)) {
                    if (r.somethingSelected()) ci({
                        lineWise: !1,
                        text: r.getSelections()
                    });
                    else if (r.options.lineWiseCopyCut) {
                        var a = sa(r);
                        ci({
                            lineWise: !0,
                            text: a.text
                        }), l.type == "cut" ? r.setSelections(a.ranges, null, Le) : (n.prevInput = "", i.value = a.text.join(`
`), Ne(i))
                    } else return;
                    l.type == "cut" && (r.state.cutIncoming = +new Date)
                }
            }
            he(i, "cut", o), he(i, "copy", o), he(e.scroller, "paste", function(l) {
                if (!($t(e, l) || Ge(r, l))) {
                    if (!i.dispatchEvent) {
                        r.state.pasteIncoming = +new Date, n.focus();
                        return
                    }
                    var a = new Event("paste");
                    a.clipboardData = l.clipboardData, i.dispatchEvent(a)
                }
            }), he(e.lineSpace, "selectstart", function(l) {
                $t(e, l) || nt(l)
            }), he(i, "compositionstart", function() {
                var l = r.getCursor("from");
                n.composing && n.composing.range.clear(), n.composing = {
                    start: l,
                    range: r.markText(l, r.getCursor("to"), {
                        className: "CodeMirror-composing"
                    })
                }
            }), he(i, "compositionend", function() {
                n.composing && (n.poll(), n.composing.range.clear(), n.composing = null)
            })
        }, _e.prototype.createField = function(e) {
            this.wrapper = fa(), this.textarea = this.wrapper.firstChild
        }, _e.prototype.screenReaderLabelChanged = function(e) {
            e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label")
        }, _e.prototype.prepareSelection = function() {
            var e = this.cm,
                t = e.display,
                n = e.doc,
                r = $o(e);
            if (e.options.moveInputWithCursor) {
                var i = Ft(e, n.sel.primary().head, "div"),
                    o = t.wrapper.getBoundingClientRect(),
                    l = t.lineDiv.getBoundingClientRect();
                r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + l.top - o.top)), r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + l.left - o.left))
            }
            return r
        }, _e.prototype.showSelection = function(e) {
            var t = this.cm,
                n = t.display;
            k(n.cursorDiv, e.cursors), k(n.selectionDiv, e.selection), e.teTop != null && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
        }, _e.prototype.reset = function(e) {
            if (!(this.contextMenuPending || this.composing)) {
                var t = this.cm;
                if (t.somethingSelected()) {
                    this.prevInput = "";
                    var n = t.getSelection();
                    this.textarea.value = n, t.state.focused && Ne(this.textarea), X && E >= 9 && (this.hasSelection = n)
                } else e || (this.prevInput = this.textarea.value = "", X && E >= 9 && (this.hasSelection = null))
            }
        }, _e.prototype.getField = function() {
            return this.textarea
        }, _e.prototype.supportsTouch = function() {
            return !1
        }, _e.prototype.focus = function() {
            if (this.cm.options.readOnly != "nocursor" && (!T || de() != this.textarea)) try {
                this.textarea.focus()
            } catch {}
        }, _e.prototype.blur = function() {
            this.textarea.blur()
        }, _e.prototype.resetPosition = function() {
            this.wrapper.style.top = this.wrapper.style.left = 0
        }, _e.prototype.receivedFocus = function() {
            this.slowPoll()
        }, _e.prototype.slowPoll = function() {
            var e = this;
            this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
                e.poll(), e.cm.state.focused && e.slowPoll()
            })
        }, _e.prototype.fastPoll = function() {
            var e = !1,
                t = this;
            t.pollingFast = !0;

            function n() {
                var r = t.poll();
                !r && !e ? (e = !0, t.polling.set(60, n)) : (t.pollingFast = !1, t.slowPoll())
            }
            t.polling.set(20, n)
        }, _e.prototype.poll = function() {
            var e = this,
                t = this.cm,
                n = this.textarea,
                r = this.prevInput;
            if (this.contextMenuPending || !t.state.focused || En(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
            var i = n.value;
            if (i == r && !t.somethingSelected()) return !1;
            if (X && E >= 9 && this.hasSelection === i || c && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(), !1;
            if (t.doc.sel == t.display.selForContextMenu) {
                var o = i.charCodeAt(0);
                if (o == 8203 && !r && (r = "\u200B"), o == 8666) return this.reset(), this.cm.execCommand("undo")
            }
            for (var l = 0, a = Math.min(r.length, i.length); l < a && r.charCodeAt(l) == i.charCodeAt(l);) ++l;
            return bt(t, function() {
                no(t, i.slice(l), r.length - l, null, e.composing ? "*compose" : null), i.length > 1e3 || i.indexOf(`
`) > -1 ? n.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
                    className: "CodeMirror-composing"
                }))
            }), !0
        }, _e.prototype.ensurePolled = function() {
            this.pollingFast && this.poll() && (this.pollingFast = !1)
        }, _e.prototype.onKeyPress = function() {
            X && E >= 9 && (this.hasSelection = null), this.fastPoll()
        }, _e.prototype.onContextMenu = function(e) {
            var t = this,
                n = t.cm,
                r = n.display,
                i = t.textarea;
            t.contextMenuPending && t.contextMenuPending();
            var o = wr(n, e),
                l = r.scroller.scrollTop;
            if (!o || N) return;
            var a = n.options.resetSelectionOnContextMenu;
            a && n.doc.sel.contains(o) == -1 && Qe(n, ot)(n.doc, sr(o), Le);
            var s = i.style.cssText,
                u = t.wrapper.style.cssText,
                d = t.wrapper.offsetParent.getBoundingClientRect();
            t.wrapper.style.cssText = "position: static", i.style.cssText = `position: absolute; width: 30px; height: 30px;
      top: ` + (e.clientY - d.top - 5) + "px; left: " + (e.clientX - d.left - 5) + `px;
      z-index: 1000; background: ` + (X ? "rgba(255, 255, 255, .05)" : "transparent") + `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;
            var v;
            W && (v = window.scrollY), r.input.focus(), W && window.scrollTo(null, v), r.input.reset(), n.somethingSelected() || (i.value = t.prevInput = " "), t.contextMenuPending = w, r.selForContextMenu = n.doc.sel, clearTimeout(r.detectingSelectAll);

            function x() {
                if (i.selectionStart != null) {
                    var H = n.somethingSelected(),
                        q = "\u200B" + (H ? i.value : "");
                    i.value = "\u21DA", i.value = q, t.prevInput = H ? "" : "\u200B", i.selectionStart = 1, i.selectionEnd = q.length, r.selForContextMenu = n.doc.sel
                }
            }

            function w() {
                if (t.contextMenuPending == w && (t.contextMenuPending = !1, t.wrapper.style.cssText = u, i.style.cssText = s, X && E < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = l), i.selectionStart != null)) {
                    (!X || X && E < 9) && x();
                    var H = 0,
                        q = function() {
                            r.selForContextMenu == n.doc.sel && i.selectionStart == 0 && i.selectionEnd > 0 && t.prevInput == "\u200B" ? Qe(n, Ol)(n) : H++ < 10 ? r.detectingSelectAll = setTimeout(q, 500) : (r.selForContextMenu = null, r.input.reset())
                        };
                    r.detectingSelectAll = setTimeout(q, 200)
                }
            }
            if (X && E >= 9 && x(), F) {
                gr(e);
                var P = function() {
                    ft(window, "mouseup", P), setTimeout(w, 20)
                };
                he(window, "mouseup", P)
            } else setTimeout(w, 50)
        }, _e.prototype.readOnlyChanged = function(e) {
            e || this.reset(), this.textarea.disabled = e == "nocursor", this.textarea.readOnly = !!e
        }, _e.prototype.setUneditable = function() {}, _e.prototype.needsContentAttribute = !1;

        function Fu(e, t) {
            if (t = t ? Oe(t) : {}, t.value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), t.autofocus == null) {
                var n = de();
                t.autofocus = n == e || e.getAttribute("autofocus") != null && n == document.body
            }

            function r() {
                e.value = a.getValue()
            }
            var i;
            if (e.form && (he(e.form, "submit", r), !t.leaveSubmitMethodAlone)) {
                var o = e.form;
                i = o.submit;
                try {
                    var l = o.submit = function() {
                        r(), o.submit = i, o.submit(), o.submit = l
                    }
                } catch {}
            }
            t.finishInit = function(s) {
                s.save = r, s.getTextArea = function() {
                    return e
                }, s.toTextArea = function() {
                    s.toTextArea = isNaN, r(), e.parentNode.removeChild(s.getWrapperElement()), e.style.display = "", e.form && (ft(e.form, "submit", r), !t.leaveSubmitMethodAlone && typeof e.form.submit == "function" && (e.form.submit = i))
                }
            }, e.style.display = "none";
            var a = Ee(function(s) {
                return e.parentNode.insertBefore(s, e.nextSibling)
            }, t);
            return a
        }

        function Bu(e) {
            e.off = ft, e.on = he, e.wheelEventPixels = _s, e.Doc = dt, e.splitLines = tn, e.countColumn = Fe, e.findColumn = je, e.isWordChar = Pe, e.Pass = be, e.signal = ve, e.Line = zr, e.changeEnd = ur, e.scrollbarModel = ll, e.Pos = U, e.cmpPos = f, e.modes = Ot, e.mimeModes = Ct, e.resolveMode = Dr, e.getMode = Pr, e.modeExtensions = Wt, e.extendMode = zt, e.copyState = Lt, e.startState = on, e.innerMode = nn, e.commands = On, e.keyMap = er, e.keyName = Xl, e.isModifierKey = Gl, e.lookupKey = Yr, e.normalizeKeyMap = cu, e.StringStream = Ke, e.SharedTextMarker = Mn, e.TextMarker = cr, e.LineWidget = Tn, e.e_preventDefault = nt, e.e_stopPropagation = Or, e.e_stop = gr, e.addClass = Ce, e.contains = V, e.rmClass = O, e.keyNames = hr
        }
        Mu(Ee), Du(Ee);
        var Eu = "iter insert remove copy getEditor constructor".split(" ");
        for (var di in dt.prototype) dt.prototype.hasOwnProperty(di) && ae(Eu, di) < 0 && (Ee.prototype[di] = function(e) {
            return function() {
                return e.apply(this.doc, arguments)
            }
        }(dt.prototype[di]));
        return Rt(dt), Ee.inputStyles = {
            textarea: _e,
            contenteditable: De
        }, Ee.defineMode = function(e) {
            !Ee.defaults.mode && e != "null" && (Ee.defaults.mode = e), In.apply(this, arguments)
        }, Ee.defineMIME = Jt, Ee.defineMode("null", function() {
            return {
                token: function(e) {
                    return e.skipToEnd()
                }
            }
        }), Ee.defineMIME("text/plain", "null"), Ee.defineExtension = function(e, t) {
            Ee.prototype[e] = t
        }, Ee.defineDocExtension = function(e, t) {
            dt.prototype[e] = t
        }, Ee.fromTextArea = Fu, Bu(Ee), Ee.version = "5.62.1", Ee
    })
});
var uo = Ht((da, pa) => {
    "use strict";
    (function(S) {
        typeof da == "object" && typeof pa == "object" ? S(Dt()) : typeof define == "function" && define.amd ? define(["../../lib/codemirror"], S) : S(CodeMirror)
    })(function(S) {
        "use strict";
        S.defineMode("css", function(A, O) {
            var Z = O.inline;
            O.propertyKeywords || (O = S.resolveMode("text/css"));
            var k = A.indentUnit,
                p = O.tokenHooks,
                h = O.documentTypes || {},
                I = O.mediaTypes || {},
                V = O.mediaFeatures || {},
                de = O.mediaValueKeywords || {},
                Ce = O.propertyKeywords || {},
                ze = O.nonStandardPropertyKeywords || {},
                Ne = O.fontProperties || {},
                Ie = O.counterDescriptors || {},
                Oe = O.colorKeywords || {},
                Fe = O.valueKeywords || {},
                Be = O.allowNested,
                ae = O.lineComment,
                pe = O.supportsAtComponent === !0,
                be = A.highlightNonStandardPropertyKeywords !== !1,
                Le, xe;

            function me(M, Y) {
                return Le = Y, M
            }

            function je(M, Y) {
                var z = M.next();
                if (p[z]) {
                    var ke = p[z](M, Y);
                    if (ke !== !1) return ke
                }
                if (z == "@") return M.eatWhile(/[\w\\\-]/), me("def", M.current());
                if (z == "=" || (z == "~" || z == "|") && M.eat("=")) return me(null, "compare");
                if (z == '"' || z == "'") return Y.tokenize = Pt(z), Y.tokenize(M, Y);
                if (z == "#") return M.eatWhile(/[\w\\\-]/), me("atom", "hash");
                if (z == "!") return M.match(/^\s*\w*/), me("keyword", "important");
                if (/\d/.test(z) || z == "." && M.eat(/\d/)) return M.eatWhile(/[\w.%]/), me("number", "unit");
                if (z === "-") {
                    if (/[\d.]/.test(M.peek())) return M.eatWhile(/[\w.%]/), me("number", "unit");
                    if (M.match(/^-[\w\\\-]*/)) return M.eatWhile(/[\w\\\-]/), M.match(/^\s*:/, !1) ? me("variable-2", "variable-definition") : me("variable-2", "variable");
                    if (M.match(/^\w+-/)) return me("meta", "meta")
                } else return /[,+>*\/]/.test(z) ? me(null, "select-op") : z == "." && M.match(/^-?[_a-z][_a-z0-9-]*/i) ? me("qualifier", "qualifier") : /[:;{}\[\]\(\)]/.test(z) ? me(null, z) : M.match(/^[\w-.]+(?=\()/) ? (/^(url(-prefix)?|domain|regexp)$/i.test(M.current()) && (Y.tokenize = rr), me("variable callee", "variable")) : /[\w\\\-]/.test(z) ? (M.eatWhile(/[\w\\\-]/), me("property", "word")) : me(null, null)
            }

            function Pt(M) {
                return function(Y, z) {
                    for (var ke = !1, at;
                        (at = Y.next()) != null;) {
                        if (at == M && !ke) {
                            M == ")" && Y.backUp(1);
                            break
                        }
                        ke = !ke && at == "\\"
                    }
                    return (at == M || !ke && M != ")") && (z.tokenize = null), me("string", "string")
                }
            }

            function rr(M, Y) {
                return M.next(), M.match(/^\s*[\"\')]/, !1) ? Y.tokenize = null : Y.tokenize = Pt(")"), me(null, "(")
            }

            function we(M, Y, z) {
                this.type = M, this.indent = Y, this.prev = z
            }

            function Te(M, Y, z, ke) {
                return M.context = new we(z, Y.indentation() + (ke === !1 ? 0 : k), M.context), z
            }

            function Ze(M) {
                return M.context.prev && (M.context = M.context.prev), M.context.type
            }

            function xt(M, Y, z) {
                return Pe[z.context.type](M, Y, z)
            }

            function Nt(M, Y, z, ke) {
                for (var at = ke || 1; at > 0; at--) z.context = z.context.prev;
                return xt(M, Y, z)
            }

            function pr(M) {
                var Y = M.current().toLowerCase();
                Fe.hasOwnProperty(Y) ? xe = "atom" : Oe.hasOwnProperty(Y) ? xe = "keyword" : xe = "variable"
            }
            var Pe = {};
            return Pe.top = function(M, Y, z) {
                if (M == "{") return Te(z, Y, "block");
                if (M == "}" && z.context.prev) return Ze(z);
                if (pe && /@component/i.test(M)) return Te(z, Y, "atComponentBlock");
                if (/^@(-moz-)?document$/i.test(M)) return Te(z, Y, "documentTypes");
                if (/^@(media|supports|(-moz-)?document|import)$/i.test(M)) return Te(z, Y, "atBlock");
                if (/^@(font-face|counter-style)/i.test(M)) return z.stateArg = M, "restricted_atBlock_before";
                if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(M)) return "keyframes";
                if (M && M.charAt(0) == "@") return Te(z, Y, "at");
                if (M == "hash") xe = "builtin";
                else if (M == "word") xe = "tag";
                else {
                    if (M == "variable-definition") return "maybeprop";
                    if (M == "interpolation") return Te(z, Y, "interpolation");
                    if (M == ":") return "pseudo";
                    if (Be && M == "(") return Te(z, Y, "parens")
                }
                return z.context.type
            }, Pe.block = function(M, Y, z) {
                if (M == "word") {
                    var ke = Y.current().toLowerCase();
                    return Ce.hasOwnProperty(ke) ? (xe = "property", "maybeprop") : ze.hasOwnProperty(ke) ? (xe = be ? "string-2" : "property", "maybeprop") : Be ? (xe = Y.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag", "block") : (xe += " error", "maybeprop")
                } else return M == "meta" ? "block" : !Be && (M == "hash" || M == "qualifier") ? (xe = "error", "block") : Pe.top(M, Y, z)
            }, Pe.maybeprop = function(M, Y, z) {
                return M == ":" ? Te(z, Y, "prop") : xt(M, Y, z)
            }, Pe.prop = function(M, Y, z) {
                if (M == ";") return Ze(z);
                if (M == "{" && Be) return Te(z, Y, "propBlock");
                if (M == "}" || M == "{") return Nt(M, Y, z);
                if (M == "(") return Te(z, Y, "parens");
                if (M == "hash" && !/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(Y.current())) xe += " error";
                else if (M == "word") pr(Y);
                else if (M == "interpolation") return Te(z, Y, "interpolation");
                return "prop"
            }, Pe.propBlock = function(M, Y, z) {
                return M == "}" ? Ze(z) : M == "word" ? (xe = "property", "maybeprop") : z.context.type
            }, Pe.parens = function(M, Y, z) {
                return M == "{" || M == "}" ? Nt(M, Y, z) : M == ")" ? Ze(z) : M == "(" ? Te(z, Y, "parens") : M == "interpolation" ? Te(z, Y, "interpolation") : (M == "word" && pr(Y), "parens")
            }, Pe.pseudo = function(M, Y, z) {
                return M == "meta" ? "pseudo" : M == "word" ? (xe = "variable-3", z.context.type) : xt(M, Y, z)
            }, Pe.documentTypes = function(M, Y, z) {
                return M == "word" && h.hasOwnProperty(Y.current()) ? (xe = "tag", z.context.type) : Pe.atBlock(M, Y, z)
            }, Pe.atBlock = function(M, Y, z) {
                if (M == "(") return Te(z, Y, "atBlock_parens");
                if (M == "}" || M == ";") return Nt(M, Y, z);
                if (M == "{") return Ze(z) && Te(z, Y, Be ? "block" : "top");
                if (M == "interpolation") return Te(z, Y, "interpolation");
                if (M == "word") {
                    var ke = Y.current().toLowerCase();
                    ke == "only" || ke == "not" || ke == "and" || ke == "or" ? xe = "keyword" : I.hasOwnProperty(ke) ? xe = "attribute" : V.hasOwnProperty(ke) ? xe = "property" : de.hasOwnProperty(ke) ? xe = "keyword" : Ce.hasOwnProperty(ke) ? xe = "property" : ze.hasOwnProperty(ke) ? xe = be ? "string-2" : "property" : Fe.hasOwnProperty(ke) ? xe = "atom" : Oe.hasOwnProperty(ke) ? xe = "keyword" : xe = "error"
                }
                return z.context.type
            }, Pe.atComponentBlock = function(M, Y, z) {
                return M == "}" ? Nt(M, Y, z) : M == "{" ? Ze(z) && Te(z, Y, Be ? "block" : "top", !1) : (M == "word" && (xe = "error"), z.context.type)
            }, Pe.atBlock_parens = function(M, Y, z) {
                return M == ")" ? Ze(z) : M == "{" || M == "}" ? Nt(M, Y, z, 2) : Pe.atBlock(M, Y, z)
            }, Pe.restricted_atBlock_before = function(M, Y, z) {
                return M == "{" ? Te(z, Y, "restricted_atBlock") : M == "word" && z.stateArg == "@counter-style" ? (xe = "variable", "restricted_atBlock_before") : xt(M, Y, z)
            }, Pe.restricted_atBlock = function(M, Y, z) {
                return M == "}" ? (z.stateArg = null, Ze(z)) : M == "word" ? (z.stateArg == "@font-face" && !Ne.hasOwnProperty(Y.current().toLowerCase()) || z.stateArg == "@counter-style" && !Ie.hasOwnProperty(Y.current().toLowerCase()) ? xe = "error" : xe = "property", "maybeprop") : "restricted_atBlock"
            }, Pe.keyframes = function(M, Y, z) {
                return M == "word" ? (xe = "variable", "keyframes") : M == "{" ? Te(z, Y, "top") : xt(M, Y, z)
            }, Pe.at = function(M, Y, z) {
                return M == ";" ? Ze(z) : M == "{" || M == "}" ? Nt(M, Y, z) : (M == "word" ? xe = "tag" : M == "hash" && (xe = "builtin"), "at")
            }, Pe.interpolation = function(M, Y, z) {
                return M == "}" ? Ze(z) : M == "{" || M == ";" ? Nt(M, Y, z) : (M == "word" ? xe = "variable" : M != "variable" && M != "(" && M != ")" && (xe = "error"), "interpolation")
            }, {
                startState: function(M) {
                    return {
                        tokenize: null,
                        state: Z ? "block" : "top",
                        stateArg: null,
                        context: new we(Z ? "block" : "top", M || 0, null)
                    }
                },
                token: function(M, Y) {
                    if (!Y.tokenize && M.eatSpace()) return null;
                    var z = (Y.tokenize || je)(M, Y);
                    return z && typeof z == "object" && (Le = z[1], z = z[0]), xe = z, Le != "comment" && (Y.state = Pe[Y.state](Le, M, Y)), xe
                },
                indent: function(M, Y) {
                    var z = M.context,
                        ke = Y && Y.charAt(0),
                        at = z.indent;
                    return z.type == "prop" && (ke == "}" || ke == ")") && (z = z.prev), z.prev && (ke == "}" && (z.type == "block" || z.type == "top" || z.type == "interpolation" || z.type == "restricted_atBlock") ? (z = z.prev, at = z.indent) : (ke == ")" && (z.type == "parens" || z.type == "atBlock_parens") || ke == "{" && (z.type == "at" || z.type == "atBlock")) && (at = Math.max(0, z.indent - k))), at
                },
                electricChars: "}",
                blockCommentStart: "/*",
                blockCommentEnd: "*/",
                blockCommentContinue: " * ",
                lineComment: ae,
                fold: "brace"
            }
        });

        function K(A) {
            for (var O = {}, Z = 0; Z < A.length; ++Z) O[A[Z].toLowerCase()] = !0;
            return O
        }
        var j = ["domain", "regexp", "url", "url-prefix"],
            ue = K(j),
            re = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"],
            ce = K(re),
            X = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid", "orientation", "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio", "pointer", "any-pointer", "hover", "any-hover", "prefers-color-scheme"],
            E = K(X),
            W = ["landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover", "interlace", "progressive", "dark", "light"],
            R = K(W),
            C = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "all", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backdrop-filter", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-position-x", "background-position-y", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "block-size", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-optical-sizing", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "isolation", "justify-content", "justify-items", "justify-self", "left", "letter-spacing", "line-break", "line-height", "line-height-step", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "place-content", "place-items", "place-self", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotate", "rotation", "rotation-point", "row-gap", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "scale", "scroll-behavior", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-type", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-skip-ink", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-orientation", "text-outline", "text-overflow", "text-rendering", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "touch-action", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "translate", "unicode-bidi", "user-select", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "paint-order", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode"],
            N = K(C),
            G = ["border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "margin-block", "margin-block-end", "margin-block-start", "margin-inline", "margin-inline-end", "margin-inline-start", "padding-block", "padding-block-end", "padding-block-start", "padding-inline", "padding-inline-end", "padding-inline-start", "scroll-snap-stop", "scrollbar-3d-light-color", "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-track-color", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "shape-inside", "zoom"],
            le = K(G),
            te = ["font-display", "font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"],
            ie = K(te),
            D = ["additive-symbols", "fallback", "negative", "pad", "prefix", "range", "speak-as", "suffix", "symbols", "system"],
            T = K(D),
            c = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
            m = K(c),
            y = ["above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page", "avoid-region", "axis-pan", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse", "compact", "condensed", "contain", "content", "contents", "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "dense", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "difference", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fill-box", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "grid", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "manipulation", "match", "matrix", "matrix3d", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "multiple_mask_images", "multiply", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "opacity", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "perspective", "pinch-zoom", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running", "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen", "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "self-start", "self-end", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "space-evenly", "spell-out", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "stroke-box", "sub", "subpixel-antialiased", "svg_masks", "super", "sw-resize", "symbolic", "symbols", "system-ui", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "trad-chinese-formal", "trad-chinese-informal", "transform", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "unidirectional-pan", "unset", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "var", "vertical", "vertical-text", "view-box", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor", "xx-large", "xx-small"],
            b = K(y),
            L = j.concat(re).concat(X).concat(W).concat(C).concat(G).concat(c).concat(y);
        S.registerHelper("hintWords", "css", L);

        function F(A, O) {
            for (var Z = !1, k;
                (k = A.next()) != null;) {
                if (Z && k == "/") {
                    O.tokenize = null;
                    break
                }
                Z = k == "*"
            }
            return ["comment", "comment"]
        }
        S.defineMIME("text/css", {
            documentTypes: ue,
            mediaTypes: ce,
            mediaFeatures: E,
            mediaValueKeywords: R,
            propertyKeywords: N,
            nonStandardPropertyKeywords: le,
            fontProperties: ie,
            counterDescriptors: T,
            colorKeywords: m,
            valueKeywords: b,
            tokenHooks: {
                "/": function(A, O) {
                    return A.eat("*") ? (O.tokenize = F, F(A, O)) : !1
                }
            },
            name: "css"
        }), S.defineMIME("text/x-scss", {
            mediaTypes: ce,
            mediaFeatures: E,
            mediaValueKeywords: R,
            propertyKeywords: N,
            nonStandardPropertyKeywords: le,
            colorKeywords: m,
            valueKeywords: b,
            fontProperties: ie,
            allowNested: !0,
            lineComment: "//",
            tokenHooks: {
                "/": function(A, O) {
                    return A.eat("/") ? (A.skipToEnd(), ["comment", "comment"]) : A.eat("*") ? (O.tokenize = F, F(A, O)) : ["operator", "operator"]
                },
                ":": function(A) {
                    return A.match(/^\s*\{/, !1) ? [null, null] : !1
                },
                $: function(A) {
                    return A.match(/^[\w-]+/), A.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"]
                },
                "#": function(A) {
                    return A.eat("{") ? [null, "interpolation"] : !1
                }
            },
            name: "css",
            helperType: "scss"
        }), S.defineMIME("text/x-less", {
            mediaTypes: ce,
            mediaFeatures: E,
            mediaValueKeywords: R,
            propertyKeywords: N,
            nonStandardPropertyKeywords: le,
            colorKeywords: m,
            valueKeywords: b,
            fontProperties: ie,
            allowNested: !0,
            lineComment: "//",
            tokenHooks: {
                "/": function(A, O) {
                    return A.eat("/") ? (A.skipToEnd(), ["comment", "comment"]) : A.eat("*") ? (O.tokenize = F, F(A, O)) : ["operator", "operator"]
                },
                "@": function(A) {
                    return A.eat("{") ? [null, "interpolation"] : A.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, !1) ? !1 : (A.eatWhile(/[\w\\\-]/), A.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"])
                },
                "&": function() {
                    return ["atom", "atom"]
                }
            },
            name: "css",
            helperType: "less"
        }), S.defineMIME("text/x-gss", {
            documentTypes: ue,
            mediaTypes: ce,
            mediaFeatures: E,
            propertyKeywords: N,
            nonStandardPropertyKeywords: le,
            fontProperties: ie,
            counterDescriptors: T,
            colorKeywords: m,
            valueKeywords: b,
            supportsAtComponent: !0,
            tokenHooks: {
                "/": function(A, O) {
                    return A.eat("*") ? (O.tokenize = F, F(A, O)) : !1
                }
            },
            name: "css",
            helperType: "gss"
        })
    })
});
var fo = Ht((va, ga) => {
    "use strict";
    (function(S) {
        typeof va == "object" && typeof ga == "object" ? S(Dt()) : typeof define == "function" && define.amd ? define(["../../lib/codemirror"], S) : S(CodeMirror)
    })(function(S) {
        "use strict";
        var K = {
                autoSelfClosers: {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    command: !0,
                    embed: !0,
                    frame: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0,
                    menuitem: !0
                },
                implicitlyClosed: {
                    dd: !0,
                    li: !0,
                    optgroup: !0,
                    option: !0,
                    p: !0,
                    rp: !0,
                    rt: !0,
                    tbody: !0,
                    td: !0,
                    tfoot: !0,
                    th: !0,
                    tr: !0
                },
                contextGrabbers: {
                    dd: {
                        dd: !0,
                        dt: !0
                    },
                    dt: {
                        dd: !0,
                        dt: !0
                    },
                    li: {
                        li: !0
                    },
                    option: {
                        option: !0,
                        optgroup: !0
                    },
                    optgroup: {
                        optgroup: !0
                    },
                    p: {
                        address: !0,
                        article: !0,
                        aside: !0,
                        blockquote: !0,
                        dir: !0,
                        div: !0,
                        dl: !0,
                        fieldset: !0,
                        footer: !0,
                        form: !0,
                        h1: !0,
                        h2: !0,
                        h3: !0,
                        h4: !0,
                        h5: !0,
                        h6: !0,
                        header: !0,
                        hgroup: !0,
                        hr: !0,
                        menu: !0,
                        nav: !0,
                        ol: !0,
                        p: !0,
                        pre: !0,
                        section: !0,
                        table: !0,
                        ul: !0
                    },
                    rp: {
                        rp: !0,
                        rt: !0
                    },
                    rt: {
                        rp: !0,
                        rt: !0
                    },
                    tbody: {
                        tbody: !0,
                        tfoot: !0
                    },
                    td: {
                        td: !0,
                        th: !0
                    },
                    tfoot: {
                        tbody: !0
                    },
                    th: {
                        td: !0,
                        th: !0
                    },
                    thead: {
                        tbody: !0,
                        tfoot: !0
                    },
                    tr: {
                        tr: !0
                    }
                },
                doNotIndent: {
                    pre: !0
                },
                allowUnquoted: !0,
                allowMissing: !0,
                caseFold: !0
            },
            j = {
                autoSelfClosers: {},
                implicitlyClosed: {},
                contextGrabbers: {},
                doNotIndent: {},
                allowUnquoted: !1,
                allowMissing: !1,
                allowMissingTagName: !1,
                caseFold: !1
            };
        S.defineMode("xml", function(ue, re) {
            var ce = ue.indentUnit,
                X = {},
                E = re.htmlMode ? K : j;
            for (var W in E) X[W] = E[W];
            for (var W in re) X[W] = re[W];
            var R, C;

            function N(p, h) {
                function I(Ce) {
                    return h.tokenize = Ce, Ce(p, h)
                }
                var V = p.next();
                if (V == "<") return p.eat("!") ? p.eat("[") ? p.match("CDATA[") ? I(te("atom", "]]>")) : null : p.match("--") ? I(te("comment", "-->")) : p.match("DOCTYPE", !0, !0) ? (p.eatWhile(/[\w\._\-]/), I(ie(1))) : null : p.eat("?") ? (p.eatWhile(/[\w\._\-]/), h.tokenize = te("meta", "?>"), "meta") : (R = p.eat("/") ? "closeTag" : "openTag", h.tokenize = G, "tag bracket");
                if (V == "&") {
                    var de;
                    return p.eat("#") ? p.eat("x") ? de = p.eatWhile(/[a-fA-F\d]/) && p.eat(";") : de = p.eatWhile(/[\d]/) && p.eat(";") : de = p.eatWhile(/[\w\.\-:]/) && p.eat(";"), de ? "atom" : "error"
                } else return p.eatWhile(/[^&<]/), null
            }
            N.isInText = !0;

            function G(p, h) {
                var I = p.next();
                if (I == ">" || I == "/" && p.eat(">")) return h.tokenize = N, R = I == ">" ? "endTag" : "selfcloseTag", "tag bracket";
                if (I == "=") return R = "equals", null;
                if (I == "<") {
                    h.tokenize = N, h.state = m, h.tagName = h.tagStart = null;
                    var V = h.tokenize(p, h);
                    return V ? V + " tag error" : "tag error"
                } else return /[\'\"]/.test(I) ? (h.tokenize = le(I), h.stringStartCol = p.column(), h.tokenize(p, h)) : (p.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word")
            }

            function le(p) {
                var h = function(I, V) {
                    for (; !I.eol();)
                        if (I.next() == p) {
                            V.tokenize = G;
                            break
                        }
                    return "string"
                };
                return h.isInAttribute = !0, h
            }

            function te(p, h) {
                return function(I, V) {
                    for (; !I.eol();) {
                        if (I.match(h)) {
                            V.tokenize = N;
                            break
                        }
                        I.next()
                    }
                    return p
                }
            }

            function ie(p) {
                return function(h, I) {
                    for (var V;
                        (V = h.next()) != null;) {
                        if (V == "<") return I.tokenize = ie(p + 1), I.tokenize(h, I);
                        if (V == ">")
                            if (p == 1) {
                                I.tokenize = N;
                                break
                            } else return I.tokenize = ie(p - 1), I.tokenize(h, I)
                    }
                    return "meta"
                }
            }

            function D(p, h, I) {
                this.prev = p.context, this.tagName = h || "", this.indent = p.indented, this.startOfLine = I, (X.doNotIndent.hasOwnProperty(h) || p.context && p.context.noIndent) && (this.noIndent = !0)
            }

            function T(p) {
                p.context && (p.context = p.context.prev)
            }

            function c(p, h) {
                for (var I;;) {
                    if (!p.context || (I = p.context.tagName, !X.contextGrabbers.hasOwnProperty(I) || !X.contextGrabbers[I].hasOwnProperty(h))) return;
                    T(p)
                }
            }

            function m(p, h, I) {
                return p == "openTag" ? (I.tagStart = h.column(), y) : p == "closeTag" ? b : m
            }

            function y(p, h, I) {
                return p == "word" ? (I.tagName = h.current(), C = "tag", A) : X.allowMissingTagName && p == "endTag" ? (C = "tag bracket", A(p, h, I)) : (C = "error", y)
            }

            function b(p, h, I) {
                if (p == "word") {
                    var V = h.current();
                    return I.context && I.context.tagName != V && X.implicitlyClosed.hasOwnProperty(I.context.tagName) && T(I), I.context && I.context.tagName == V || X.matchClosing === !1 ? (C = "tag", L) : (C = "tag error", F)
                } else return X.allowMissingTagName && p == "endTag" ? (C = "tag bracket", L(p, h, I)) : (C = "error", F)
            }

            function L(p, h, I) {
                return p != "endTag" ? (C = "error", L) : (T(I), m)
            }

            function F(p, h, I) {
                return C = "error", L(p, h, I)
            }

            function A(p, h, I) {
                if (p == "word") return C = "attribute", O;
                if (p == "endTag" || p == "selfcloseTag") {
                    var V = I.tagName,
                        de = I.tagStart;
                    return I.tagName = I.tagStart = null, p == "selfcloseTag" || X.autoSelfClosers.hasOwnProperty(V) ? c(I, V) : (c(I, V), I.context = new D(I, V, de == I.indented)), m
                }
                return C = "error", A
            }

            function O(p, h, I) {
                return p == "equals" ? Z : (X.allowMissing || (C = "error"), A(p, h, I))
            }

            function Z(p, h, I) {
                return p == "string" ? k : p == "word" && X.allowUnquoted ? (C = "string", A) : (C = "error", A(p, h, I))
            }

            function k(p, h, I) {
                return p == "string" ? k : A(p, h, I)
            }
            return {
                startState: function(p) {
                    var h = {
                        tokenize: N,
                        state: m,
                        indented: p || 0,
                        tagName: null,
                        tagStart: null,
                        context: null
                    };
                    return p != null && (h.baseIndent = p), h
                },
                token: function(p, h) {
                    if (!h.tagName && p.sol() && (h.indented = p.indentation()), p.eatSpace()) return null;
                    R = null;
                    var I = h.tokenize(p, h);
                    return (I || R) && I != "comment" && (C = null, h.state = h.state(R || I, p, h), C && (I = C == "error" ? I + " error" : C)), I
                },
                indent: function(p, h, I) {
                    var V = p.context;
                    if (p.tokenize.isInAttribute) return p.tagStart == p.indented ? p.stringStartCol + 1 : p.indented + ce;
                    if (V && V.noIndent) return S.Pass;
                    if (p.tokenize != G && p.tokenize != N) return I ? I.match(/^(\s*)/)[0].length : 0;
                    if (p.tagName) return X.multilineTagIndentPastTag !== !1 ? p.tagStart + p.tagName.length + 2 : p.tagStart + ce * (X.multilineTagIndentFactor || 1);
                    if (X.alignCDATA && /<!\[CDATA\[/.test(h)) return 0;
                    var de = h && /^<(\/)?([\w_:\.-]*)/.exec(h);
                    if (de && de[1])
                        for (; V;)
                            if (V.tagName == de[2]) {
                                V = V.prev;
                                break
                            } else if (X.implicitlyClosed.hasOwnProperty(V.tagName)) V = V.prev;
                    else break;
                    else if (de)
                        for (; V;) {
                            var Ce = X.contextGrabbers[V.tagName];
                            if (Ce && Ce.hasOwnProperty(de[2])) V = V.prev;
                            else break
                        }
                    for (; V && V.prev && !V.startOfLine;) V = V.prev;
                    return V ? V.indent + ce : p.baseIndent || 0
                },
                electricInput: /<\/[\s\w:]+>$/,
                blockCommentStart: "<!--",
                blockCommentEnd: "-->",
                configuration: X.htmlMode ? "html" : "xml",
                helperType: X.htmlMode ? "html" : "xml",
                skipAttribute: function(p) {
                    p.state == Z && (p.state = A)
                },
                xmlCurrentTag: function(p) {
                    return p.tagName ? {
                        name: p.tagName,
                        close: p.type == "closeTag"
                    } : null
                },
                xmlCurrentContext: function(p) {
                    for (var h = [], I = p.context; I; I = I.prev) h.push(I.tagName);
                    return h.reverse()
                }
            }
        }), S.defineMIME("text/xml", "xml"), S.defineMIME("application/xml", "xml"), S.mimeModes.hasOwnProperty("text/html") || S.defineMIME("text/html", {
            name: "xml",
            htmlMode: !0
        })
    })
});
var co = Ht((ma, ya) => {
    "use strict";
    (function(S) {
        typeof ma == "object" && typeof ya == "object" ? S(Dt()) : typeof define == "function" && define.amd ? define(["../../lib/codemirror"], S) : S(CodeMirror)
    })(function(S) {
        "use strict";
        S.defineMode("javascript", function(K, j) {
            var ue = K.indentUnit,
                re = j.statementIndent,
                ce = j.jsonld,
                X = j.json || ce,
                E = j.trackScope !== !1,
                W = j.typescript,
                R = j.wordCharacters || /[\w$\xa1-\uffff]/,
                C = function() {
                    function f(it) {
                        return {
                            type: it,
                            style: "keyword"
                        }
                    }
                    var g = f("keyword a"),
                        B = f("keyword b"),
                        _ = f("keyword c"),
                        ge = f("keyword d"),
                        Se = f("operator"),
                        $ = {
                            type: "atom",
                            style: "atom"
                        };
                    return {
                        if: f("if"),
                        while: g,
                        with: g,
                        else: B,
                        do: B,
                        try: B,
                        finally: B,
                        return: ge,
                        break: ge,
                        continue: ge,
                        new: f("new"),
                        delete: _,
                        void: _,
                        throw: _,
                        debugger: f("debugger"),
                        var: f("var"),
                        const: f("var"),
                        let: f("var"),
                        function: f("function"),
                        catch: f("catch"),
                        for: f("for"),
                        switch: f("switch"),
                        case: f("case"),
                        default: f("default"),
                        in: Se,
                        typeof: Se,
                        instanceof: Se,
                        true: $,
                        false: $,
                        null: $,
                        undefined: $,
                        NaN: $,
                        Infinity: $,
                        this: f("this"),
                        class: f("class"),
                        super: f("atom"),
                        yield: _,
                        export: f("export"),
                        import: f("import"),
                        extends: _,
                        await: _
                    }
                }(),
                N = /[+\-*&%=<>!?|~^@]/,
                G = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

            function le(f) {
                for (var g = !1, B, _ = !1;
                    (B = f.next()) != null;) {
                    if (!g) {
                        if (B == "/" && !_) return;
                        B == "[" ? _ = !0 : _ && B == "]" && (_ = !1)
                    }
                    g = !g && B == "\\"
                }
            }
            var te, ie;

            function D(f, g, B) {
                return te = f, ie = B, g
            }

            function T(f, g) {
                var B = f.next();
                if (B == '"' || B == "'") return g.tokenize = c(B), g.tokenize(f, g);
                if (B == "." && f.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return D("number", "number");
                if (B == "." && f.match("..")) return D("spread", "meta");
                if (/[\[\]{}\(\),;\:\.]/.test(B)) return D(B);
                if (B == "=" && f.eat(">")) return D("=>", "operator");
                if (B == "0" && f.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return D("number", "number");
                if (/\d/.test(B)) return f.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), D("number", "number");
                if (B == "/") return f.eat("*") ? (g.tokenize = m, m(f, g)) : f.eat("/") ? (f.skipToEnd(), D("comment", "comment")) : U(f, g, 1) ? (le(f), f.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), D("regexp", "string-2")) : (f.eat("="), D("operator", "operator", f.current()));
                if (B == "`") return g.tokenize = y, y(f, g);
                if (B == "#" && f.peek() == "!") return f.skipToEnd(), D("meta", "meta");
                if (B == "#" && f.eatWhile(R)) return D("variable", "property");
                if (B == "<" && f.match("!--") || B == "-" && f.match("->") && !/\S/.test(f.string.slice(0, f.start))) return f.skipToEnd(), D("comment", "comment");
                if (N.test(B)) return (B != ">" || !g.lexical || g.lexical.type != ">") && (f.eat("=") ? (B == "!" || B == "=") && f.eat("=") : /[<>*+\-|&?]/.test(B) && (f.eat(B), B == ">" && f.eat(B))), B == "?" && f.eat(".") ? D(".") : D("operator", "operator", f.current());
                if (R.test(B)) {
                    f.eatWhile(R);
                    var _ = f.current();
                    if (g.lastType != ".") {
                        if (C.propertyIsEnumerable(_)) {
                            var ge = C[_];
                            return D(ge.type, ge.style, _)
                        }
                        if (_ == "async" && f.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)) return D("async", "keyword", _)
                    }
                    return D("variable", "variable", _)
                }
            }

            function c(f) {
                return function(g, B) {
                    var _ = !1,
                        ge;
                    if (ce && g.peek() == "@" && g.match(G)) return B.tokenize = T, D("jsonld-keyword", "meta");
                    for (;
                        (ge = g.next()) != null && !(ge == f && !_);) _ = !_ && ge == "\\";
                    return _ || (B.tokenize = T), D("string", "string")
                }
            }

            function m(f, g) {
                for (var B = !1, _; _ = f.next();) {
                    if (_ == "/" && B) {
                        g.tokenize = T;
                        break
                    }
                    B = _ == "*"
                }
                return D("comment", "comment")
            }

            function y(f, g) {
                for (var B = !1, _;
                    (_ = f.next()) != null;) {
                    if (!B && (_ == "`" || _ == "$" && f.eat("{"))) {
                        g.tokenize = T;
                        break
                    }
                    B = !B && _ == "\\"
                }
                return D("quasi", "string-2", f.current())
            }
            var b = "([{}])";

            function L(f, g) {
                g.fatArrowAt && (g.fatArrowAt = null);
                var B = f.string.indexOf("=>", f.start);
                if (!(B < 0)) {
                    if (W) {
                        var _ = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(f.string.slice(f.start, B));
                        _ && (B = _.index)
                    }
                    for (var ge = 0, Se = !1, $ = B - 1; $ >= 0; --$) {
                        var it = f.string.charAt($),
                            Tt = b.indexOf(it);
                        if (Tt >= 0 && Tt < 3) {
                            if (!ge) {
                                ++$;
                                break
                            }
                            if (--ge == 0) {
                                it == "(" && (Se = !0);
                                break
                            }
                        } else if (Tt >= 3 && Tt < 6) ++ge;
                        else if (R.test(it)) Se = !0;
                        else if (/["'\/`]/.test(it))
                            for (;; --$) {
                                if ($ == 0) return;
                                var Wr = f.string.charAt($ - 1);
                                if (Wr == it && f.string.charAt($ - 2) != "\\") {
                                    $--;
                                    break
                                }
                            } else if (Se && !ge) {
                                ++$;
                                break
                            }
                    }
                    Se && !ge && (g.fatArrowAt = $)
                }
            }
            var F = {
                atom: !0,
                number: !0,
                variable: !0,
                string: !0,
                regexp: !0,
                this: !0,
                import: !0,
                "jsonld-keyword": !0
            };

            function A(f, g, B, _, ge, Se) {
                this.indented = f, this.column = g, this.type = B, this.prev = ge, this.info = Se, _ != null && (this.align = _)
            }

            function O(f, g) {
                if (!E) return !1;
                for (var B = f.localVars; B; B = B.next)
                    if (B.name == g) return !0;
                for (var _ = f.context; _; _ = _.prev)
                    for (var B = _.vars; B; B = B.next)
                        if (B.name == g) return !0
            }

            function Z(f, g, B, _, ge) {
                var Se = f.cc;
                for (k.state = f, k.stream = ge, k.marked = null, k.cc = Se, k.style = g, f.lexical.hasOwnProperty("align") || (f.lexical.align = !0);;) {
                    var $ = Se.length ? Se.pop() : X ? me : Le;
                    if ($(B, _)) {
                        for (; Se.length && Se[Se.length - 1].lex;) Se.pop()();
                        return k.marked ? k.marked : B == "variable" && O(f, _) ? "variable-2" : g
                    }
                }
            }
            var k = {
                state: null,
                column: null,
                marked: null,
                cc: null
            };

            function p() {
                for (var f = arguments.length - 1; f >= 0; f--) k.cc.push(arguments[f])
            }

            function h() {
                return p.apply(null, arguments), !0
            }

            function I(f, g) {
                for (var B = g; B; B = B.next)
                    if (B.name == f) return !0;
                return !1
            }

            function V(f) {
                var g = k.state;
                if (k.marked = "def", !!E) {
                    if (g.context) {
                        if (g.lexical.info == "var" && g.context && g.context.block) {
                            var B = de(f, g.context);
                            if (B != null) {
                                g.context = B;
                                return
                            }
                        } else if (!I(f, g.localVars)) {
                            g.localVars = new Ne(f, g.localVars);
                            return
                        }
                    }
                    j.globalVars && !I(f, g.globalVars) && (g.globalVars = new Ne(f, g.globalVars))
                }
            }

            function de(f, g) {
                if (g)
                    if (g.block) {
                        var B = de(f, g.prev);
                        return B ? B == g.prev ? g : new ze(B, g.vars, !0) : null
                    } else return I(f, g.vars) ? g : new ze(g.prev, new Ne(f, g.vars), !1);
                else return null
            }

            function Ce(f) {
                return f == "public" || f == "private" || f == "protected" || f == "abstract" || f == "readonly"
            }

            function ze(f, g, B) {
                this.prev = f, this.vars = g, this.block = B
            }

            function Ne(f, g) {
                this.name = f, this.next = g
            }
            var Ie = new Ne("this", new Ne("arguments", null));

            function Oe() {
                k.state.context = new ze(k.state.context, k.state.localVars, !1), k.state.localVars = Ie
            }

            function Fe() {
                k.state.context = new ze(k.state.context, k.state.localVars, !0), k.state.localVars = null
            }

            function Be() {
                k.state.localVars = k.state.context.vars, k.state.context = k.state.context.prev
            }
            Be.lex = !0;

            function ae(f, g) {
                var B = function() {
                    var _ = k.state,
                        ge = _.indented;
                    if (_.lexical.type == "stat") ge = _.lexical.indented;
                    else
                        for (var Se = _.lexical; Se && Se.type == ")" && Se.align; Se = Se.prev) ge = Se.indented;
                    _.lexical = new A(ge, k.stream.column(), f, null, _.lexical, g)
                };
                return B.lex = !0, B
            }

            function pe() {
                var f = k.state;
                f.lexical.prev && (f.lexical.type == ")" && (f.indented = f.lexical.indented), f.lexical = f.lexical.prev)
            }
            pe.lex = !0;

            function be(f) {
                function g(B) {
                    return B == f ? h() : f == ";" || B == "}" || B == ")" || B == "]" ? p() : h(g)
                }
                return g
            }

            function Le(f, g) {
                return f == "var" ? h(ae("vardef", g), $r, be(";"), pe) : f == "keyword a" ? h(ae("form"), Pt, Le, pe) : f == "keyword b" ? h(ae("form"), Le, pe) : f == "keyword d" ? k.stream.match(/^\s*$/, !1) ? h() : h(ae("stat"), we, be(";"), pe) : f == "debugger" ? h(be(";")) : f == "{" ? h(ae("}"), Fe, mt, pe, Be) : f == ";" ? h() : f == "if" ? (k.state.lexical.info == "else" && k.state.cc[k.state.cc.length - 1] == pe && k.state.cc.pop()(), h(ae("form"), Pt, Le, pe, En)) : f == "function" ? h(Ot) : f == "for" ? h(ae("form"), Fe, Hn, Le, Be, pe) : f == "class" || W && g == "interface" ? (k.marked = "keyword", h(ae("form", f == "class" ? f : g), Pr, pe)) : f == "variable" ? W && g == "declare" ? (k.marked = "keyword", h(Le)) : W && (g == "module" || g == "enum" || g == "type") && k.stream.match(/^\s*\w/, !1) ? (k.marked = "keyword", g == "enum" ? h(_t) : g == "type" ? h(In, be("operator"), ve, be(";")) : h(ae("form"), ct, be("{"), ae("}"), mt, pe, pe)) : W && g == "namespace" ? (k.marked = "keyword", h(ae("form"), me, Le, pe)) : W && g == "abstract" ? (k.marked = "keyword", h(Le)) : h(ae("stat"), ke) : f == "switch" ? h(ae("form"), Pt, be("{"), ae("}", "switch"), Fe, mt, pe, pe, Be) : f == "case" ? h(me, be(":")) : f == "default" ? h(be(":")) : f == "catch" ? h(ae("form"), Oe, xe, Le, pe, Be) : f == "export" ? h(ae("stat"), nn, pe) : f == "import" ? h(ae("stat"), Ke, pe) : f == "async" ? h(Le) : g == "@" ? h(me, Le) : p(ae("stat"), me, be(";"), pe)
            }

            function xe(f) {
                if (f == "(") return h(Jt, be(")"))
            }

            function me(f, g) {
                return rr(f, g, !1)
            }

            function je(f, g) {
                return rr(f, g, !0)
            }

            function Pt(f) {
                return f != "(" ? p() : h(ae(")"), we, be(")"), pe)
            }

            function rr(f, g, B) {
                if (k.state.fatArrowAt == k.stream.start) {
                    var _ = B ? Pe : pr;
                    if (f == "(") return h(Oe, ae(")"), Re(Jt, ")"), pe, be("=>"), _, Be);
                    if (f == "variable") return p(Oe, ct, be("=>"), _, Be)
                }
                var ge = B ? Ze : Te;
                return F.hasOwnProperty(f) ? h(ge) : f == "function" ? h(Ot, ge) : f == "class" || W && g == "interface" ? (k.marked = "keyword", h(ae("form"), Dr, pe)) : f == "keyword c" || f == "async" ? h(B ? je : me) : f == "(" ? h(ae(")"), we, be(")"), pe, ge) : f == "operator" || f == "spread" ? h(B ? je : me) : f == "[" ? h(ae("]"), Me, pe, ge) : f == "{" ? vr(It, "}", null, ge) : f == "quasi" ? p(xt, ge) : f == "new" ? h(M(B)) : h()
            }

            function we(f) {
                return f.match(/[;\}\)\],]/) ? p() : p(me)
            }

            function Te(f, g) {
                return f == "," ? h(we) : Ze(f, g, !1)
            }

            function Ze(f, g, B) {
                var _ = B == !1 ? Te : Ze,
                    ge = B == !1 ? me : je;
                if (f == "=>") return h(Oe, B ? Pe : pr, Be);
                if (f == "operator") return /\+\+|--/.test(g) || W && g == "!" ? h(_) : W && g == "<" && k.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1) ? h(ae(">"), Re(ve, ">"), pe, _) : g == "?" ? h(me, be(":"), ge) : h(ge);
                if (f == "quasi") return p(xt, _);
                if (f != ";") {
                    if (f == "(") return vr(je, ")", "call", _);
                    if (f == ".") return h(at, _);
                    if (f == "[") return h(ae("]"), we, be("]"), pe, _);
                    if (W && g == "as") return k.marked = "keyword", h(ve, _);
                    if (f == "regexp") return k.state.lastType = k.marked = "operator", k.stream.backUp(k.stream.pos - k.stream.start - 1), h(ge)
                }
            }

            function xt(f, g) {
                return f != "quasi" ? p() : g.slice(g.length - 2) != "${" ? h(xt) : h(we, Nt)
            }

            function Nt(f) {
                if (f == "}") return k.marked = "string-2", k.state.tokenize = y, h(xt)
            }

            function pr(f) {
                return L(k.stream, k.state), p(f == "{" ? Le : me)
            }

            function Pe(f) {
                return L(k.stream, k.state), p(f == "{" ? Le : je)
            }

            function M(f) {
                return function(g) {
                    return g == "." ? h(f ? z : Y) : g == "variable" && W ? h(gr, f ? Ze : Te) : p(f ? je : me)
                }
            }

            function Y(f, g) {
                if (g == "target") return k.marked = "keyword", h(Te)
            }

            function z(f, g) {
                if (g == "target") return k.marked = "keyword", h(Ze)
            }

            function ke(f) {
                return f == ":" ? h(pe, Le) : p(Te, be(";"), pe)
            }

            function at(f) {
                if (f == "variable") return k.marked = "property", h()
            }

            function It(f, g) {
                if (f == "async") return k.marked = "property", h(It);
                if (f == "variable" || k.style == "keyword") {
                    if (k.marked = "property", g == "get" || g == "set") return h(pi);
                    var B;
                    return W && k.state.fatArrowAt == k.stream.start && (B = k.stream.match(/^\s*:\s*/, !1)) && (k.state.fatArrowAt = k.stream.pos + B[0].length), h(kt)
                } else {
                    if (f == "number" || f == "string") return k.marked = ce ? "property" : k.style + " property", h(kt);
                    if (f == "jsonld-keyword") return h(kt);
                    if (W && Ce(g)) return k.marked = "keyword", h(It);
                    if (f == "[") return h(me, Zt, be("]"), kt);
                    if (f == "spread") return h(je, kt);
                    if (g == "*") return k.marked = "keyword", h(It);
                    if (f == ":") return p(kt)
                }
            }

            function pi(f) {
                return f != "variable" ? p(kt) : (k.marked = "property", h(Ot))
            }

            function kt(f) {
                if (f == ":") return h(je);
                if (f == "(") return p(Ot)
            }

            function Re(f, g, B) {
                function _(ge, Se) {
                    if (B ? B.indexOf(ge) > -1 : ge == ",") {
                        var $ = k.state.lexical;
                        return $.info == "call" && ($.pos = ($.pos || 0) + 1), h(function(it, Tt) {
                            return it == g || Tt == g ? p() : p(f)
                        }, _)
                    }
                    return ge == g || Se == g ? h() : B && B.indexOf(";") > -1 ? p(f) : h(be(g))
                }
                return function(ge, Se) {
                    return ge == g || Se == g ? h() : p(f, _)
                }
            }

            function vr(f, g, B) {
                for (var _ = 3; _ < arguments.length; _++) k.cc.push(arguments[_]);
                return h(ae(g, B), Re(f, g), pe)
            }

            function mt(f) {
                return f == "}" ? h() : p(Le, mt)
            }

            function Zt(f, g) {
                if (W) {
                    if (f == ":") return h(ve);
                    if (g == "?") return h(Zt)
                }
            }

            function he(f, g) {
                if (W && (f == ":" || g == "in")) return h(ve)
            }

            function Ar(f) {
                if (W && f == ":") return k.stream.match(/^\s*\w+\s+is\b/, !1) ? h(me, ft, ve) : h(ve)
            }

            function ft(f, g) {
                if (g == "is") return k.marked = "keyword", h()
            }

            function ve(f, g) {
                if (g == "keyof" || g == "typeof" || g == "infer" || g == "readonly") return k.marked = "keyword", h(g == "typeof" ? je : ve);
                if (f == "variable" || g == "void") return k.marked = "type", h(St);
                if (g == "|" || g == "&") return h(ve);
                if (f == "string" || f == "number" || f == "atom") return h(St);
                if (f == "[") return h(ae("]"), Re(ve, "]", ","), pe, St);
                if (f == "{") return h(ae("}"), Nr, pe, St);
                if (f == "(") return h(Re(Or, ")"), Ge, St);
                if (f == "<") return h(Re(ve, ">"), ve);
                if (f == "quasi") return p(Rt, St)
            }

            function Ge(f) {
                if (f == "=>") return h(ve)
            }

            function Nr(f) {
                return f.match(/[\}\)\]]/) ? h() : f == "," || f == ";" ? h(Nr) : p(tt, Nr)
            }

            function tt(f, g) {
                if (f == "variable" || k.style == "keyword") return k.marked = "property", h(tt);
                if (g == "?" || f == "number" || f == "string") return h(tt);
                if (f == ":") return h(ve);
                if (f == "[") return h(be("variable"), he, be("]"), tt);
                if (f == "(") return p(Ct, tt);
                if (!f.match(/[;\}\)\],]/)) return h()
            }

            function Rt(f, g) {
                return f != "quasi" ? p() : g.slice(g.length - 2) != "${" ? h(Rt) : h(ve, nt)
            }

            function nt(f) {
                if (f == "}") return k.marked = "string-2", k.state.tokenize = y, h(Rt)
            }

            function Or(f, g) {
                return f == "variable" && k.stream.match(/^\s*[?:]/, !1) || g == "?" ? h(Or) : f == ":" ? h(ve) : f == "spread" ? h(Or) : p(ve)
            }

            function St(f, g) {
                if (g == "<") return h(ae(">"), Re(ve, ">"), pe, St);
                if (g == "|" || f == "." || g == "&") return h(ve);
                if (f == "[") return h(ve, be("]"), St);
                if (g == "extends" || g == "implements") return k.marked = "keyword", h(ve);
                if (g == "?") return h(ve, be(":"), ve)
            }

            function gr(f, g) {
                if (g == "<") return h(ae(">"), Re(ve, ">"), pe, St)
            }

            function nr() {
                return p(ve, Fn)
            }

            function Fn(f, g) {
                if (g == "=") return h(ve)
            }

            function $r(f, g) {
                return g == "enum" ? (k.marked = "keyword", h(_t)) : p(ct, Zt, Kt, tn)
            }

            function ct(f, g) {
                if (W && Ce(g)) return k.marked = "keyword", h(ct);
                if (f == "variable") return V(g), h();
                if (f == "spread") return h(ct);
                if (f == "[") return vr(en, "]");
                if (f == "{") return vr(Bn, "}")
            }

            function Bn(f, g) {
                return f == "variable" && !k.stream.match(/^\s*:/, !1) ? (V(g), h(Kt)) : (f == "variable" && (k.marked = "property"), f == "spread" ? h(ct) : f == "}" ? p() : f == "[" ? h(me, be("]"), be(":"), Bn) : h(be(":"), ct, Kt))
            }

            function en() {
                return p(ct, Kt)
            }

            function Kt(f, g) {
                if (g == "=") return h(je)
            }

            function tn(f) {
                if (f == ",") return h($r)
            }

            function En(f, g) {
                if (f == "keyword b" && g == "else") return h(ae("form", "else"), Le, pe)
            }

            function Hn(f, g) {
                if (g == "await") return h(Hn);
                if (f == "(") return h(ae(")"), rn, pe)
            }

            function rn(f) {
                return f == "var" ? h($r, ir) : f == "variable" ? h(ir) : p(ir)
            }

            function ir(f, g) {
                return f == ")" ? h() : f == ";" ? h(ir) : g == "in" || g == "of" ? (k.marked = "keyword", h(me, ir)) : p(me, ir)
            }

            function Ot(f, g) {
                if (g == "*") return k.marked = "keyword", h(Ot);
                if (f == "variable") return V(g), h(Ot);
                if (f == "(") return h(Oe, ae(")"), Re(Jt, ")"), pe, Ar, Le, Be);
                if (W && g == "<") return h(ae(">"), Re(nr, ">"), pe, Ot)
            }

            function Ct(f, g) {
                if (g == "*") return k.marked = "keyword", h(Ct);
                if (f == "variable") return V(g), h(Ct);
                if (f == "(") return h(Oe, ae(")"), Re(Jt, ")"), pe, Ar, Be);
                if (W && g == "<") return h(ae(">"), Re(nr, ">"), pe, Ct)
            }

            function In(f, g) {
                if (f == "keyword" || f == "variable") return k.marked = "type", h(In);
                if (g == "<") return h(ae(">"), Re(nr, ">"), pe)
            }

            function Jt(f, g) {
                return g == "@" && h(me, Jt), f == "spread" ? h(Jt) : W && Ce(g) ? (k.marked = "keyword", h(Jt)) : W && f == "this" ? h(Zt, Kt) : p(ct, Zt, Kt)
            }

            function Dr(f, g) {
                return f == "variable" ? Pr(f, g) : Wt(f, g)
            }

            function Pr(f, g) {
                if (f == "variable") return V(g), h(Wt)
            }

            function Wt(f, g) {
                if (g == "<") return h(ae(">"), Re(nr, ">"), pe, Wt);
                if (g == "extends" || g == "implements" || W && f == ",") return g == "implements" && (k.marked = "keyword"), h(W ? ve : me, Wt);
                if (f == "{") return h(ae("}"), zt, pe)
            }

            function zt(f, g) {
                if (f == "async" || f == "variable" && (g == "static" || g == "get" || g == "set" || W && Ce(g)) && k.stream.match(/^\s+[\w$\xa1-\uffff]/, !1)) return k.marked = "keyword", h(zt);
                if (f == "variable" || k.style == "keyword") return k.marked = "property", h(Lt, zt);
                if (f == "number" || f == "string") return h(Lt, zt);
                if (f == "[") return h(me, Zt, be("]"), Lt, zt);
                if (g == "*") return k.marked = "keyword", h(zt);
                if (W && f == "(") return p(Ct, zt);
                if (f == ";" || f == ",") return h(zt);
                if (f == "}") return h();
                if (g == "@") return h(me, zt)
            }

            function Lt(f, g) {
                if (g == "!" || g == "?") return h(Lt);
                if (f == ":") return h(ve, Kt);
                if (g == "=") return h(je);
                var B = k.state.lexical.prev,
                    _ = B && B.info == "interface";
                return p(_ ? Ct : Ot)
            }

            function nn(f, g) {
                return g == "*" ? (k.marked = "keyword", h(yt, be(";"))) : g == "default" ? (k.marked = "keyword", h(me, be(";"))) : f == "{" ? h(Re(on, "}"), yt, be(";")) : p(Le)
            }

            function on(f, g) {
                if (g == "as") return k.marked = "keyword", h(be("variable"));
                if (f == "variable") return p(je, on)
            }

            function Ke(f) {
                return f == "string" ? h() : f == "(" ? p(me) : f == "." ? p(Te) : p(oe, Ut, yt)
            }

            function oe(f, g) {
                return f == "{" ? vr(oe, "}") : (f == "variable" && V(g), g == "*" && (k.marked = "keyword"), h(ln))
            }

            function Ut(f) {
                if (f == ",") return h(oe, Ut)
            }

            function ln(f, g) {
                if (g == "as") return k.marked = "keyword", h(oe)
            }

            function yt(f, g) {
                if (g == "from") return k.marked = "keyword", h(me)
            }

            function Me(f) {
                return f == "]" ? h() : p(Re(je, "]"))
            }

            function _t() {
                return p(ae("form"), ct, be("{"), ae("}"), Re(mr, "}"), pe, pe)
            }

            function mr() {
                return p(ct, Kt)
            }

            function an(f, g) {
                return f.lastType == "operator" || f.lastType == "," || N.test(g.charAt(0)) || /[,.]/.test(g.charAt(0))
            }

            function U(f, g, B) {
                return g.tokenize == T && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(g.lastType) || g.lastType == "quasi" && /\{\s*$/.test(f.string.slice(0, f.pos - (B || 0)))
            }
            return {
                startState: function(f) {
                    var g = {
                        tokenize: T,
                        lastType: "sof",
                        cc: [],
                        lexical: new A((f || 0) - ue, 0, "block", !1),
                        localVars: j.localVars,
                        context: j.localVars && new ze(null, null, !1),
                        indented: f || 0
                    };
                    return j.globalVars && typeof j.globalVars == "object" && (g.globalVars = j.globalVars), g
                },
                token: function(f, g) {
                    if (f.sol() && (g.lexical.hasOwnProperty("align") || (g.lexical.align = !1), g.indented = f.indentation(), L(f, g)), g.tokenize != m && f.eatSpace()) return null;
                    var B = g.tokenize(f, g);
                    return te == "comment" ? B : (g.lastType = te == "operator" && (ie == "++" || ie == "--") ? "incdec" : te, Z(g, B, te, ie, f))
                },
                indent: function(f, g) {
                    if (f.tokenize == m || f.tokenize == y) return S.Pass;
                    if (f.tokenize != T) return 0;
                    var B = g && g.charAt(0),
                        _ = f.lexical,
                        ge;
                    if (!/^\s*else\b/.test(g))
                        for (var Se = f.cc.length - 1; Se >= 0; --Se) {
                            var $ = f.cc[Se];
                            if ($ == pe) _ = _.prev;
                            else if ($ != En && $ != Be) break
                        }
                    for (;
                        (_.type == "stat" || _.type == "form") && (B == "}" || (ge = f.cc[f.cc.length - 1]) && (ge == Te || ge == Ze) && !/^[,\.=+\-*:?[\(]/.test(g));) _ = _.prev;
                    re && _.type == ")" && _.prev.type == "stat" && (_ = _.prev);
                    var it = _.type,
                        Tt = B == it;
                    return it == "vardef" ? _.indented + (f.lastType == "operator" || f.lastType == "," ? _.info.length + 1 : 0) : it == "form" && B == "{" ? _.indented : it == "form" ? _.indented + ue : it == "stat" ? _.indented + (an(f, g) ? re || ue : 0) : _.info == "switch" && !Tt && j.doubleIndentSwitch != !1 ? _.indented + (/^(?:case|default)\b/.test(g) ? ue : 2 * ue) : _.align ? _.column + (Tt ? 0 : 1) : _.indented + (Tt ? 0 : ue)
                },
                electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                blockCommentStart: X ? null : "/*",
                blockCommentEnd: X ? null : "*/",
                blockCommentContinue: X ? null : " * ",
                lineComment: X ? null : "//",
                fold: "brace",
                closeBrackets: "()[]{}''\"\"``",
                helperType: X ? "json" : "javascript",
                jsonldMode: ce,
                jsonMode: X,
                expressionAllowed: U,
                skipExpression: function(f) {
                    Z(f, "atom", "atom", "true", new S.StringStream("", 2, null))
                }
            }
        }), S.registerHelper("wordChars", "javascript", /[\w$]/), S.defineMIME("text/javascript", "javascript"), S.defineMIME("text/ecmascript", "javascript"), S.defineMIME("application/javascript", "javascript"), S.defineMIME("application/x-javascript", "javascript"), S.defineMIME("application/ecmascript", "javascript"), S.defineMIME("application/json", {
            name: "javascript",
            json: !0
        }), S.defineMIME("application/x-json", {
            name: "javascript",
            json: !0
        }), S.defineMIME("application/manifest+json", {
            name: "javascript",
            json: !0
        }), S.defineMIME("application/ld+json", {
            name: "javascript",
            jsonld: !0
        }), S.defineMIME("text/typescript", {
            name: "javascript",
            typescript: !0
        }), S.defineMIME("application/typescript", {
            name: "javascript",
            typescript: !0
        })
    })
});
var xa = Ht((ba, wa) => {
    "use strict";
    (function(S) {
        typeof ba == "object" && typeof wa == "object" ? S(Dt(), fo(), co(), uo()) : typeof define == "function" && define.amd ? define(["../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css"], S) : S(CodeMirror)
    })(function(S) {
        "use strict";
        var K = {
            script: [
                ["lang", /(javascript|babel)/i, "javascript"],
                ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, "javascript"],
                ["type", /./, "text/plain"],
                [null, null, "javascript"]
            ],
            style: [
                ["lang", /^css$/i, "css"],
                ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"],
                ["type", /./, "text/plain"],
                [null, null, "css"]
            ]
        };

        function j(R, C, N) {
            var G = R.current(),
                le = G.search(C);
            return le > -1 ? R.backUp(G.length - le) : G.match(/<\/?$/) && (R.backUp(G.length), R.match(C, !1) || R.match(G)), N
        }
        var ue = {};

        function re(R) {
            var C = ue[R];
            return C || (ue[R] = new RegExp("\\s+" + R + `\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))
        }

        function ce(R, C) {
            var N = R.match(re(C));
            return N ? /^\s*(.*?)\s*$/.exec(N[2])[1] : ""
        }

        function X(R, C) {
            return new RegExp((C ? "^" : "") + "</s*" + R + "s*>", "i")
        }

        function E(R, C) {
            for (var N in R)
                for (var G = C[N] || (C[N] = []), le = R[N], te = le.length - 1; te >= 0; te--) G.unshift(le[te])
        }

        function W(R, C) {
            for (var N = 0; N < R.length; N++) {
                var G = R[N];
                if (!G[0] || G[1].test(ce(C, G[0]))) return G[2]
            }
        }
        S.defineMode("htmlmixed", function(R, C) {
            var N = S.getMode(R, {
                    name: "xml",
                    htmlMode: !0,
                    multilineTagIndentFactor: C.multilineTagIndentFactor,
                    multilineTagIndentPastTag: C.multilineTagIndentPastTag,
                    allowMissingTagName: C.allowMissingTagName
                }),
                G = {},
                le = C && C.tags,
                te = C && C.scriptTypes;
            if (E(K, G), le && E(le, G), te)
                for (var ie = te.length - 1; ie >= 0; ie--) G.script.unshift(["type", te[ie].matches, te[ie].mode]);

            function D(T, c) {
                var m = N.token(T, c.htmlState),
                    y = /\btag\b/.test(m),
                    b;
                if (y && !/[<>\s\/]/.test(T.current()) && (b = c.htmlState.tagName && c.htmlState.tagName.toLowerCase()) && G.hasOwnProperty(b)) c.inTag = b + " ";
                else if (c.inTag && y && />$/.test(T.current())) {
                    var L = /^([\S]+) (.*)/.exec(c.inTag);
                    c.inTag = null;
                    var F = T.current() == ">" && W(G[L[1]], L[2]),
                        A = S.getMode(R, F),
                        O = X(L[1], !0),
                        Z = X(L[1], !1);
                    c.token = function(k, p) {
                        return k.match(O, !1) ? (p.token = D, p.localState = p.localMode = null, null) : j(k, Z, p.localMode.token(k, p.localState))
                    }, c.localMode = A, c.localState = S.startState(A, N.indent(c.htmlState, "", ""))
                } else c.inTag && (c.inTag += T.current(), T.eol() && (c.inTag += " "));
                return m
            }
            return {
                startState: function() {
                    var T = S.startState(N);
                    return {
                        token: D,
                        inTag: null,
                        localMode: null,
                        localState: null,
                        htmlState: T
                    }
                },
                copyState: function(T) {
                    var c;
                    return T.localState && (c = S.copyState(T.localMode, T.localState)), {
                        token: T.token,
                        inTag: T.inTag,
                        localMode: T.localMode,
                        localState: c,
                        htmlState: S.copyState(N, T.htmlState)
                    }
                },
                token: function(T, c) {
                    return c.token(T, c)
                },
                indent: function(T, c, m) {
                    return !T.localMode || /^\s*<\//.test(c) ? N.indent(T.htmlState, c, m) : T.localMode.indent ? T.localMode.indent(T.localState, c, m) : S.Pass
                },
                innerMode: function(T) {
                    return {
                        state: T.localState || T.htmlState,
                        mode: T.localMode || N
                    }
                }
            }
        }, "xml", "javascript", "css"), S.defineMIME("text/html", "htmlmixed")
    })
});
var Ca = Ht((ka, Sa) => {
    "use strict";
    (function(S) {
        typeof ka == "object" && typeof Sa == "object" ? S(Dt()) : typeof define == "function" && define.amd ? define(["../../lib/codemirror"], S) : S(CodeMirror)
    })(function(S) {
        "use strict";
        var K = {},
            j = /[^\s\u00a0]/,
            ue = S.Pos,
            re = S.cmpPos;

        function ce(W) {
            var R = W.search(j);
            return R == -1 ? 0 : R
        }
        S.commands.toggleComment = function(W) {
            W.toggleComment()
        }, S.defineExtension("toggleComment", function(W) {
            W || (W = K);
            for (var R = this, C = 1 / 0, N = this.listSelections(), G = null, le = N.length - 1; le >= 0; le--) {
                var te = N[le].from(),
                    ie = N[le].to();
                te.line >= C || (ie.line >= C && (ie = ue(C, 0)), C = te.line, G == null ? R.uncomment(te, ie, W) ? G = "un" : (R.lineComment(te, ie, W), G = "line") : G == "un" ? R.uncomment(te, ie, W) : R.lineComment(te, ie, W))
            }
        });

        function X(W, R, C) {
            return /\bstring\b/.test(W.getTokenTypeAt(ue(R.line, 0))) && !/^[\'\"\`]/.test(C)
        }

        function E(W, R) {
            var C = W.getMode();
            return C.useInnerComments === !1 || !C.innerMode ? C : W.getModeAt(R)
        }
        S.defineExtension("lineComment", function(W, R, C) {
            C || (C = K);
            var N = this,
                G = E(N, W),
                le = N.getLine(W.line);
            if (!(le == null || X(N, W, le))) {
                var te = C.lineComment || G.lineComment;
                if (!te) {
                    (C.blockCommentStart || G.blockCommentStart) && (C.fullLines = !0, N.blockComment(W, R, C));
                    return
                }
                var ie = Math.min(R.ch != 0 || R.line == W.line ? R.line + 1 : R.line, N.lastLine() + 1),
                    D = C.padding == null ? " " : C.padding,
                    T = C.commentBlankLines || W.line == R.line;
                N.operation(function() {
                    if (C.indent) {
                        for (var c = null, m = W.line; m < ie; ++m) {
                            var y = N.getLine(m),
                                b = y.slice(0, ce(y));
                            (c == null || c.length > b.length) && (c = b)
                        }
                        for (var m = W.line; m < ie; ++m) {
                            var y = N.getLine(m),
                                L = c.length;
                            !T && !j.test(y) || (y.slice(0, L) != c && (L = ce(y)), N.replaceRange(c + te + D, ue(m, 0), ue(m, L)))
                        }
                    } else
                        for (var m = W.line; m < ie; ++m)(T || j.test(N.getLine(m))) && N.replaceRange(te + D, ue(m, 0))
                })
            }
        }), S.defineExtension("blockComment", function(W, R, C) {
            C || (C = K);
            var N = this,
                G = E(N, W),
                le = C.blockCommentStart || G.blockCommentStart,
                te = C.blockCommentEnd || G.blockCommentEnd;
            if (!le || !te) {
                (C.lineComment || G.lineComment) && C.fullLines != !1 && N.lineComment(W, R, C);
                return
            }
            if (!/\bcomment\b/.test(N.getTokenTypeAt(ue(W.line, 0)))) {
                var ie = Math.min(R.line, N.lastLine());
                ie != W.line && R.ch == 0 && j.test(N.getLine(ie)) && --ie;
                var D = C.padding == null ? " " : C.padding;
                W.line > ie || N.operation(function() {
                    if (C.fullLines != !1) {
                        var T = j.test(N.getLine(ie));
                        N.replaceRange(D + te, ue(ie)), N.replaceRange(le + D, ue(W.line, 0));
                        var c = C.blockCommentLead || G.blockCommentLead;
                        if (c != null)
                            for (var m = W.line + 1; m <= ie; ++m)(m != ie || T) && N.replaceRange(c + D, ue(m, 0))
                    } else {
                        var y = re(N.getCursor("to"), R) == 0,
                            b = !N.somethingSelected();
                        N.replaceRange(te, R), y && N.setSelection(b ? R : N.getCursor("from"), R), N.replaceRange(le, W)
                    }
                })
            }
        }), S.defineExtension("uncomment", function(W, R, C) {
            C || (C = K);
            var N = this,
                G = E(N, W),
                le = Math.min(R.ch != 0 || R.line == W.line ? R.line : R.line - 1, N.lastLine()),
                te = Math.min(W.line, le),
                ie = C.lineComment || G.lineComment,
                D = [],
                T = C.padding == null ? " " : C.padding,
                c;
            e: {
                if (!ie) break e;
                for (var m = te; m <= le; ++m) {
                    var y = N.getLine(m),
                        b = y.indexOf(ie);
                    if (b > -1 && !/comment/.test(N.getTokenTypeAt(ue(m, b + 1))) && (b = -1), b == -1 && j.test(y) || b > -1 && j.test(y.slice(0, b))) break e;
                    D.push(y)
                }
                if (N.operation(function() {
                        for (var ze = te; ze <= le; ++ze) {
                            var Ne = D[ze - te],
                                Ie = Ne.indexOf(ie),
                                Oe = Ie + ie.length;
                            Ie < 0 || (Ne.slice(Oe, Oe + T.length) == T && (Oe += T.length), c = !0, N.replaceRange("", ue(ze, Ie), ue(ze, Oe)))
                        }
                    }), c) return !0
            }
            var L = C.blockCommentStart || G.blockCommentStart,
                F = C.blockCommentEnd || G.blockCommentEnd;
            if (!L || !F) return !1;
            var A = C.blockCommentLead || G.blockCommentLead,
                O = N.getLine(te),
                Z = O.indexOf(L);
            if (Z == -1) return !1;
            var k = le == te ? O : N.getLine(le),
                p = k.indexOf(F, le == te ? Z + L.length : 0),
                h = ue(te, Z + 1),
                I = ue(le, p + 1);
            if (p == -1 || !/comment/.test(N.getTokenTypeAt(h)) || !/comment/.test(N.getTokenTypeAt(I)) || N.getRange(h, I, `
`).indexOf(F) > -1) return !1;
            var V = O.lastIndexOf(L, W.ch),
                de = V == -1 ? -1 : O.slice(0, W.ch).indexOf(F, V + L.length);
            if (V != -1 && de != -1 && de + F.length != W.ch) return !1;
            de = k.indexOf(F, R.ch);
            var Ce = k.slice(R.ch).lastIndexOf(L, de - R.ch);
            return V = de == -1 || Ce == -1 ? -1 : R.ch + Ce, de != -1 && V != -1 && V != R.ch ? !1 : (N.operation(function() {
                N.replaceRange("", ue(le, p - (T && k.slice(p - T.length, p) == T ? T.length : 0)), ue(le, p + F.length));
                var ze = Z + L.length;
                if (T && O.slice(ze, ze + T.length) == T && (ze += T.length), N.replaceRange("", ue(te, Z), ue(te, ze)), A)
                    for (var Ne = te + 1; Ne <= le; ++Ne) {
                        var Ie = N.getLine(Ne),
                            Oe = Ie.indexOf(A);
                        if (!(Oe == -1 || j.test(Ie.slice(0, Oe)))) {
                            var Fe = Oe + A.length;
                            T && Ie.slice(Fe, Fe + T.length) == T && (Fe += T.length), N.replaceRange("", ue(Ne, Oe), ue(Ne, Fe))
                        }
                    }
            }), !0)
        })
    })
});
var Ma = Ht((La, Ta) => {
    "use strict";
    (function(S) {
        typeof La == "object" && typeof Ta == "object" ? S(Dt()) : typeof define == "function" && define.amd ? define(["../../lib/codemirror"], S) : S(CodeMirror)
    })(function(S) {
        "use strict";

        function K(re, ce, X) {
            this.orientation = ce, this.scroll = X, this.screen = this.total = this.size = 1, this.pos = 0, this.node = document.createElement("div"), this.node.className = re + "-" + ce, this.inner = this.node.appendChild(document.createElement("div"));
            var E = this;
            S.on(this.inner, "mousedown", function(R) {
                if (R.which != 1) return;
                S.e_preventDefault(R);
                var C = E.orientation == "horizontal" ? "pageX" : "pageY",
                    N = R[C],
                    G = E.pos;

                function le() {
                    S.off(document, "mousemove", te), S.off(document, "mouseup", le)
                }

                function te(ie) {
                    if (ie.which != 1) return le();
                    E.moveTo(G + (ie[C] - N) * (E.total / E.size))
                }
                S.on(document, "mousemove", te), S.on(document, "mouseup", le)
            }), S.on(this.node, "click", function(R) {
                S.e_preventDefault(R);
                var C = E.inner.getBoundingClientRect(),
                    N;
                E.orientation == "horizontal" ? N = R.clientX < C.left ? -1 : R.clientX > C.right ? 1 : 0 : N = R.clientY < C.top ? -1 : R.clientY > C.bottom ? 1 : 0, E.moveTo(E.pos + N * E.screen)
            });

            function W(R) {
                var C = S.wheelEventPixels(R)[E.orientation == "horizontal" ? "x" : "y"],
                    N = E.pos;
                E.moveTo(E.pos + C), E.pos != N && S.e_preventDefault(R)
            }
            S.on(this.node, "mousewheel", W), S.on(this.node, "DOMMouseScroll", W)
        }
        K.prototype.setPos = function(re, ce) {
            return re < 0 && (re = 0), re > this.total - this.screen && (re = this.total - this.screen), !ce && re == this.pos ? !1 : (this.pos = re, this.inner.style[this.orientation == "horizontal" ? "left" : "top"] = re * (this.size / this.total) + "px", !0)
        }, K.prototype.moveTo = function(re) {
            this.setPos(re) && this.scroll(re, this.orientation)
        };
        var j = 10;
        K.prototype.update = function(re, ce, X) {
            var E = this.screen != ce || this.total != re || this.size != X;
            E && (this.screen = ce, this.total = re, this.size = X);
            var W = this.screen * (this.size / this.total);
            W < j && (this.size -= j - W, W = j), this.inner.style[this.orientation == "horizontal" ? "width" : "height"] = W + "px", this.setPos(this.pos, E)
        };

        function ue(re, ce, X) {
            this.addClass = re, this.horiz = new K(re, "horizontal", X), ce(this.horiz.node), this.vert = new K(re, "vertical", X), ce(this.vert.node), this.width = null
        }
        ue.prototype.update = function(re) {
            if (this.width == null) {
                var ce = window.getComputedStyle ? window.getComputedStyle(this.horiz.node) : this.horiz.node.currentStyle;
                ce && (this.width = parseInt(ce.height))
            }
            var X = this.width || 0,
                E = re.scrollWidth > re.clientWidth + 1,
                W = re.scrollHeight > re.clientHeight + 1;
            return this.vert.node.style.display = W ? "block" : "none", this.horiz.node.style.display = E ? "block" : "none", W && (this.vert.update(re.scrollHeight, re.clientHeight, re.viewHeight - (E ? X : 0)), this.vert.node.style.bottom = E ? X + "px" : "0"), E && (this.horiz.update(re.scrollWidth, re.clientWidth, re.viewWidth - (W ? X : 0) - re.barLeft), this.horiz.node.style.right = W ? X + "px" : "0", this.horiz.node.style.left = re.barLeft + "px"), {
                right: W ? X : 0,
                bottom: E ? X : 0
            }
        }, ue.prototype.setScrollTop = function(re) {
            this.vert.setPos(re)
        }, ue.prototype.setScrollLeft = function(re) {
            this.horiz.setPos(re)
        }, ue.prototype.clear = function() {
            var re = this.horiz.node.parentNode;
            re.removeChild(this.horiz.node), re.removeChild(this.vert.node)
        }, S.scrollbarModel.simple = function(re, ce) {
            return new ue("CodeMirror-simplescroll", re, ce)
        }, S.scrollbarModel.overlay = function(re, ce) {
            return new ue("CodeMirror-overlayscroll", re, ce)
        }
    })
});
var Oa = Ht((Aa, Na) => {
    "use strict";
    (function(S) {
        typeof Aa == "object" && typeof Na == "object" ? S(Dt()) : typeof define == "function" && define.amd ? define(["../../lib/codemirror"], S) : S(CodeMirror)
    })(function(S) {
        "use strict";
        var K = S.Pos;

        function j(D) {
            var T = D.flags;
            return T ? ? (D.ignoreCase ? "i" : "") + (D.global ? "g" : "") + (D.multiline ? "m" : "")
        }

        function ue(D, T) {
            for (var c = j(D), m = c, y = 0; y < T.length; y++) m.indexOf(T.charAt(y)) == -1 && (m += T.charAt(y));
            return c == m ? D : new RegExp(D.source, m)
        }

        function re(D) {
            return /\\s|\\n|\n|\\W|\\D|\[\^/.test(D.source)
        }

        function ce(D, T, c) {
            T = ue(T, "g");
            for (var m = c.line, y = c.ch, b = D.lastLine(); m <= b; m++, y = 0) {
                T.lastIndex = y;
                var L = D.getLine(m),
                    F = T.exec(L);
                if (F) return {
                    from: K(m, F.index),
                    to: K(m, F.index + F[0].length),
                    match: F
                }
            }
        }

        function X(D, T, c) {
            if (!re(T)) return ce(D, T, c);
            T = ue(T, "gm");
            for (var m, y = 1, b = c.line, L = D.lastLine(); b <= L;) {
                for (var F = 0; F < y && !(b > L); F++) {
                    var A = D.getLine(b++);
                    m = m == null ? A : m + `
` + A
                }
                y = y * 2, T.lastIndex = c.ch;
                var O = T.exec(m);
                if (O) {
                    var Z = m.slice(0, O.index).split(`
`),
                        k = O[0].split(`
`),
                        p = c.line + Z.length - 1,
                        h = Z[Z.length - 1].length;
                    return {
                        from: K(p, h),
                        to: K(p + k.length - 1, k.length == 1 ? h + k[0].length : k[k.length - 1].length),
                        match: O
                    }
                }
            }
        }

        function E(D, T, c) {
            for (var m, y = 0; y <= D.length;) {
                T.lastIndex = y;
                var b = T.exec(D);
                if (!b) break;
                var L = b.index + b[0].length;
                if (L > D.length - c) break;
                (!m || L > m.index + m[0].length) && (m = b), y = b.index + 1
            }
            return m
        }

        function W(D, T, c) {
            T = ue(T, "g");
            for (var m = c.line, y = c.ch, b = D.firstLine(); m >= b; m--, y = -1) {
                var L = D.getLine(m),
                    F = E(L, T, y < 0 ? 0 : L.length - y);
                if (F) return {
                    from: K(m, F.index),
                    to: K(m, F.index + F[0].length),
                    match: F
                }
            }
        }

        function R(D, T, c) {
            if (!re(T)) return W(D, T, c);
            T = ue(T, "gm");
            for (var m, y = 1, b = D.getLine(c.line).length - c.ch, L = c.line, F = D.firstLine(); L >= F;) {
                for (var A = 0; A < y && L >= F; A++) {
                    var O = D.getLine(L--);
                    m = m == null ? O : O + `
` + m
                }
                y *= 2;
                var Z = E(m, T, b);
                if (Z) {
                    var k = m.slice(0, Z.index).split(`
`),
                        p = Z[0].split(`
`),
                        h = L + k.length,
                        I = k[k.length - 1].length;
                    return {
                        from: K(h, I),
                        to: K(h + p.length - 1, p.length == 1 ? I + p[0].length : p[p.length - 1].length),
                        match: Z
                    }
                }
            }
        }
        var C, N;
        String.prototype.normalize ? (C = function(D) {
            return D.normalize("NFD").toLowerCase()
        }, N = function(D) {
            return D.normalize("NFD")
        }) : (C = function(D) {
            return D.toLowerCase()
        }, N = function(D) {
            return D
        });

        function G(D, T, c, m) {
            if (D.length == T.length) return c;
            for (var y = 0, b = c + Math.max(0, D.length - T.length);;) {
                if (y == b) return y;
                var L = y + b >> 1,
                    F = m(D.slice(0, L)).length;
                if (F == c) return L;
                F > c ? b = L : y = L + 1
            }
        }

        function le(D, T, c, m) {
            if (!T.length) return null;
            var y = m ? C : N,
                b = y(T).split(/\r|\n\r?/);
            e: for (var L = c.line, F = c.ch, A = D.lastLine() + 1 - b.length; L <= A; L++, F = 0) {
                var O = D.getLine(L).slice(F),
                    Z = y(O);
                if (b.length == 1) {
                    var k = Z.indexOf(b[0]);
                    if (k == -1) continue e;
                    var c = G(O, Z, k, y) + F;
                    return {
                        from: K(L, G(O, Z, k, y) + F),
                        to: K(L, G(O, Z, k + b[0].length, y) + F)
                    }
                } else {
                    var p = Z.length - b[0].length;
                    if (Z.slice(p) != b[0]) continue e;
                    for (var h = 1; h < b.length - 1; h++)
                        if (y(D.getLine(L + h)) != b[h]) continue e;
                    var I = D.getLine(L + b.length - 1),
                        V = y(I),
                        de = b[b.length - 1];
                    if (V.slice(0, de.length) != de) continue e;
                    return {
                        from: K(L, G(O, Z, p, y) + F),
                        to: K(L + b.length - 1, G(I, V, de.length, y))
                    }
                }
            }
        }

        function te(D, T, c, m) {
            if (!T.length) return null;
            var y = m ? C : N,
                b = y(T).split(/\r|\n\r?/);
            e: for (var L = c.line, F = c.ch, A = D.firstLine() - 1 + b.length; L >= A; L--, F = -1) {
                var O = D.getLine(L);
                F > -1 && (O = O.slice(0, F));
                var Z = y(O);
                if (b.length == 1) {
                    var k = Z.lastIndexOf(b[0]);
                    if (k == -1) continue e;
                    return {
                        from: K(L, G(O, Z, k, y)),
                        to: K(L, G(O, Z, k + b[0].length, y))
                    }
                } else {
                    var p = b[b.length - 1];
                    if (Z.slice(0, p.length) != p) continue e;
                    for (var h = 1, c = L - b.length + 1; h < b.length - 1; h++)
                        if (y(D.getLine(c + h)) != b[h]) continue e;
                    var I = D.getLine(L + 1 - b.length),
                        V = y(I);
                    if (V.slice(V.length - b[0].length) != b[0]) continue e;
                    return {
                        from: K(L + 1 - b.length, G(I, V, I.length - b[0].length, y)),
                        to: K(L, G(O, Z, p.length, y))
                    }
                }
            }
        }

        function ie(D, T, c, m) {
            this.atOccurrence = !1, this.doc = D, c = c ? D.clipPos(c) : K(0, 0), this.pos = {
                from: c,
                to: c
            };
            var y;
            typeof m == "object" ? y = m.caseFold : (y = m, m = null), typeof T == "string" ? (y == null && (y = !1), this.matches = function(b, L) {
                return (b ? te : le)(D, T, L, y)
            }) : (T = ue(T, "gm"), !m || m.multiline !== !1 ? this.matches = function(b, L) {
                return (b ? R : X)(D, T, L)
            } : this.matches = function(b, L) {
                return (b ? W : ce)(D, T, L)
            })
        }
        ie.prototype = {
            findNext: function() {
                return this.find(!1)
            },
            findPrevious: function() {
                return this.find(!0)
            },
            find: function(D) {
                for (var T = this.matches(D, this.doc.clipPos(D ? this.pos.from : this.pos.to)); T && S.cmpPos(T.from, T.to) == 0;) D ? T.from.ch ? T.from = K(T.from.line, T.from.ch - 1) : T.from.line == this.doc.firstLine() ? T = null : T = this.matches(D, this.doc.clipPos(K(T.from.line - 1))) : T.to.ch < this.doc.getLine(T.to.line).length ? T.to = K(T.to.line, T.to.ch + 1) : T.to.line == this.doc.lastLine() ? T = null : T = this.matches(D, K(T.to.line + 1, 0));
                if (T) return this.pos = T, this.atOccurrence = !0, this.pos.match || !0;
                var c = K(D ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
                return this.pos = {
                    from: c,
                    to: c
                }, this.atOccurrence = !1
            },
            from: function() {
                if (this.atOccurrence) return this.pos.from
            },
            to: function() {
                if (this.atOccurrence) return this.pos.to
            },
            replace: function(D, T) {
                if (this.atOccurrence) {
                    var c = S.splitLines(D);
                    this.doc.replaceRange(c, this.pos.from, this.pos.to, T), this.pos.to = K(this.pos.from.line + c.length - 1, c[c.length - 1].length + (c.length == 1 ? this.pos.from.ch : 0))
                }
            }
        }, S.defineExtension("getSearchCursor", function(D, T, c) {
            return new ie(this.doc, D, T, c)
        }), S.defineDocExtension("getSearchCursor", function(D, T, c) {
            return new ie(this, D, T, c)
        }), S.defineExtension("selectMatches", function(D, T) {
            for (var c = [], m = this.getSearchCursor(D, this.getCursor("from"), T); m.findNext() && !(S.cmpPos(m.to(), this.getCursor("to")) > 0);) c.push({
                anchor: m.from(),
                head: m.to()
            });
            c.length && this.setSelections(c, 0)
        })
    })
});
var Wa = Ht((Da, Pa) => {
    "use strict";
    (function(S) {
        typeof Da == "object" && typeof Pa == "object" ? S(Dt()) : typeof define == "function" && define.amd ? define(["../../lib/codemirror"], S) : S(CodeMirror)
    })(function(S) {
        var K = /MSIE \d/.test(navigator.userAgent) && (document.documentMode == null || document.documentMode < 8),
            j = S.Pos,
            ue = {
                "(": ")>",
                ")": "(<",
                "[": "]>",
                "]": "[<",
                "{": "}>",
                "}": "{<",
                "<": ">>",
                ">": "<<"
            };

        function re(C) {
            return C && C.bracketRegex || /[(){}[\]]/
        }

        function ce(C, N, G) {
            var le = C.getLineHandle(N.line),
                te = N.ch - 1,
                ie = G && G.afterCursor;
            ie == null && (ie = /(^| )cm-fat-cursor($| )/.test(C.getWrapperElement().className));
            var D = re(G),
                T = !ie && te >= 0 && D.test(le.text.charAt(te)) && ue[le.text.charAt(te)] || D.test(le.text.charAt(te + 1)) && ue[le.text.charAt(++te)];
            if (!T) return null;
            var c = T.charAt(1) == ">" ? 1 : -1;
            if (G && G.strict && c > 0 != (te == N.ch)) return null;
            var m = C.getTokenTypeAt(j(N.line, te + 1)),
                y = X(C, j(N.line, te + (c > 0 ? 1 : 0)), c, m, G);
            return y == null ? null : {
                from: j(N.line, te),
                to: y && y.pos,
                match: y && y.ch == T.charAt(0),
                forward: c > 0
            }
        }

        function X(C, N, G, le, te) {
            for (var ie = te && te.maxScanLineLength || 1e4, D = te && te.maxScanLines || 1e3, T = [], c = re(te), m = G > 0 ? Math.min(N.line + D, C.lastLine() + 1) : Math.max(C.firstLine() - 1, N.line - D), y = N.line; y != m; y += G) {
                var b = C.getLine(y);
                if (b) {
                    var L = G > 0 ? 0 : b.length - 1,
                        F = G > 0 ? b.length : -1;
                    if (!(b.length > ie))
                        for (y == N.line && (L = N.ch - (G < 0 ? 1 : 0)); L != F; L += G) {
                            var A = b.charAt(L);
                            if (c.test(A) && (le === void 0 || (C.getTokenTypeAt(j(y, L + 1)) || "") == (le || ""))) {
                                var O = ue[A];
                                if (O && O.charAt(1) == ">" == G > 0) T.push(A);
                                else if (T.length) T.pop();
                                else return {
                                    pos: j(y, L),
                                    ch: A
                                }
                            }
                        }
                }
            }
            return y - G == (G > 0 ? C.lastLine() : C.firstLine()) ? !1 : null
        }

        function E(C, N, G) {
            for (var le = C.state.matchBrackets.maxHighlightLineLength || 1e3, te = G && G.highlightNonMatching, ie = [], D = C.listSelections(), T = 0; T < D.length; T++) {
                var c = D[T].empty() && ce(C, D[T].head, G);
                if (c && (c.match || te !== !1) && C.getLine(c.from.line).length <= le) {
                    var m = c.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
                    ie.push(C.markText(c.from, j(c.from.line, c.from.ch + 1), {
                        className: m
                    })), c.to && C.getLine(c.to.line).length <= le && ie.push(C.markText(c.to, j(c.to.line, c.to.ch + 1), {
                        className: m
                    }))
                }
            }
            if (ie.length) {
                K && C.state.focused && C.focus();
                var y = function() {
                    C.operation(function() {
                        for (var b = 0; b < ie.length; b++) ie[b].clear()
                    })
                };
                if (N) setTimeout(y, 800);
                else return y
            }
        }

        function W(C) {
            C.operation(function() {
                C.state.matchBrackets.currentlyHighlighted && (C.state.matchBrackets.currentlyHighlighted(), C.state.matchBrackets.currentlyHighlighted = null), C.state.matchBrackets.currentlyHighlighted = E(C, !1, C.state.matchBrackets)
            })
        }

        function R(C) {
            C.state.matchBrackets && C.state.matchBrackets.currentlyHighlighted && (C.state.matchBrackets.currentlyHighlighted(), C.state.matchBrackets.currentlyHighlighted = null)
        }
        S.defineOption("matchBrackets", !1, function(C, N, G) {
            G && G != S.Init && (C.off("cursorActivity", W), C.off("focus", W), C.off("blur", R), R(C)), N && (C.state.matchBrackets = typeof N == "object" ? N : {}, C.on("cursorActivity", W), C.on("focus", W), C.on("blur", R))
        }), S.defineExtension("matchBrackets", function() {
            E(this, !0)
        }), S.defineExtension("findMatchingBracket", function(C, N, G) {
            return (G || typeof N == "boolean") && (G ? (G.strict = N, N = G) : N = N ? {
                strict: !0
            } : null), ce(this, C, N)
        }), S.defineExtension("scanForBracket", function(C, N, G, le) {
            return X(this, C, N, G, le)
        })
    })
});
var Ba = Ht((za, Fa) => {
    "use strict";
    (function(S) {
        typeof za == "object" && typeof Fa == "object" ? S(Dt(), Oa(), Wa()) : typeof define == "function" && define.amd ? define(["../lib/codemirror", "../addon/search/searchcursor", "../addon/edit/matchbrackets"], S) : S(CodeMirror)
    })(function(S) {
        "use strict";
        var K = S.commands,
            j = S.Pos;

        function ue(c, m, y) {
            if (y < 0 && m.ch == 0) return c.clipPos(j(m.line - 1));
            var b = c.getLine(m.line);
            if (y > 0 && m.ch >= b.length) return c.clipPos(j(m.line + 1, 0));
            for (var L = "start", F, A = m.ch, O = A, Z = y < 0 ? 0 : b.length, k = 0; O != Z; O += y, k++) {
                var p = b.charAt(y < 0 ? O - 1 : O),
                    h = p != "_" && S.isWordChar(p) ? "w" : "o";
                if (h == "w" && p.toUpperCase() == p && (h = "W"), L == "start") h != "o" ? (L = "in", F = h) : A = O + y;
                else if (L == "in" && F != h) {
                    if (F == "w" && h == "W" && y < 0 && O--, F == "W" && h == "w" && y > 0)
                        if (O == A + 1) {
                            F = "w";
                            continue
                        } else O--;
                    break
                }
            }
            return j(m.line, O)
        }

        function re(c, m) {
            c.extendSelectionsBy(function(y) {
                return c.display.shift || c.doc.extend || y.empty() ? ue(c.doc, y.head, m) : m < 0 ? y.from() : y.to()
            })
        }
        K.goSubwordLeft = function(c) {
            re(c, -1)
        }, K.goSubwordRight = function(c) {
            re(c, 1)
        }, K.scrollLineUp = function(c) {
            var m = c.getScrollInfo();
            if (!c.somethingSelected()) {
                var y = c.lineAtHeight(m.top + m.clientHeight, "local");
                c.getCursor().line >= y && c.execCommand("goLineUp")
            }
            c.scrollTo(null, m.top - c.defaultTextHeight())
        }, K.scrollLineDown = function(c) {
            var m = c.getScrollInfo();
            if (!c.somethingSelected()) {
                var y = c.lineAtHeight(m.top, "local") + 1;
                c.getCursor().line <= y && c.execCommand("goLineDown")
            }
            c.scrollTo(null, m.top + c.defaultTextHeight())
        }, K.splitSelectionByLine = function(c) {
            for (var m = c.listSelections(), y = [], b = 0; b < m.length; b++)
                for (var L = m[b].from(), F = m[b].to(), A = L.line; A <= F.line; ++A) F.line > L.line && A == F.line && F.ch == 0 || y.push({
                    anchor: A == L.line ? L : j(A, 0),
                    head: A == F.line ? F : j(A)
                });
            c.setSelections(y, 0)
        }, K.singleSelectionTop = function(c) {
            var m = c.listSelections()[0];
            c.setSelection(m.anchor, m.head, {
                scroll: !1
            })
        }, K.selectLine = function(c) {
            for (var m = c.listSelections(), y = [], b = 0; b < m.length; b++) {
                var L = m[b];
                y.push({
                    anchor: j(L.from().line, 0),
                    head: j(L.to().line + 1, 0)
                })
            }
            c.setSelections(y)
        };

        function ce(c, m) {
            if (c.isReadOnly()) return S.Pass;
            c.operation(function() {
                for (var y = c.listSelections().length, b = [], L = -1, F = 0; F < y; F++) {
                    var A = c.listSelections()[F].head;
                    if (!(A.line <= L)) {
                        var O = j(A.line + (m ? 0 : 1), 0);
                        c.replaceRange(`
`, O, null, "+insertLine"), c.indentLine(O.line, null, !0), b.push({
                            head: O,
                            anchor: O
                        }), L = A.line + 1
                    }
                }
                c.setSelections(b)
            }), c.execCommand("indentAuto")
        }
        K.insertLineAfter = function(c) {
            return ce(c, !1)
        }, K.insertLineBefore = function(c) {
            return ce(c, !0)
        };

        function X(c, m) {
            for (var y = m.ch, b = y, L = c.getLine(m.line); y && S.isWordChar(L.charAt(y - 1));) --y;
            for (; b < L.length && S.isWordChar(L.charAt(b));) ++b;
            return {
                from: j(m.line, y),
                to: j(m.line, b),
                word: L.slice(y, b)
            }
        }
        K.selectNextOccurrence = function(c) {
            var m = c.getCursor("from"),
                y = c.getCursor("to"),
                b = c.state.sublimeFindFullWord == c.doc.sel;
            if (S.cmpPos(m, y) == 0) {
                var L = X(c, m);
                if (!L.word) return;
                c.setSelection(L.from, L.to), b = !0
            } else {
                var F = c.getRange(m, y),
                    A = b ? new RegExp("\\b" + F + "\\b") : F,
                    O = c.getSearchCursor(A, y),
                    Z = O.findNext();
                if (Z || (O = c.getSearchCursor(A, j(c.firstLine(), 0)), Z = O.findNext()), !Z || W(c.listSelections(), O.from(), O.to())) return;
                c.addSelection(O.from(), O.to())
            }
            b && (c.state.sublimeFindFullWord = c.doc.sel)
        }, K.skipAndSelectNextOccurrence = function(c) {
            var m = c.getCursor("anchor"),
                y = c.getCursor("head");
            K.selectNextOccurrence(c), S.cmpPos(m, y) != 0 && c.doc.setSelections(c.doc.listSelections().filter(function(b) {
                return b.anchor != m || b.head != y
            }))
        };

        function E(c, m) {
            for (var y = c.listSelections(), b = [], L = 0; L < y.length; L++) {
                var F = y[L],
                    A = c.findPosV(F.anchor, m, "line", F.anchor.goalColumn),
                    O = c.findPosV(F.head, m, "line", F.head.goalColumn);
                A.goalColumn = F.anchor.goalColumn != null ? F.anchor.goalColumn : c.cursorCoords(F.anchor, "div").left, O.goalColumn = F.head.goalColumn != null ? F.head.goalColumn : c.cursorCoords(F.head, "div").left;
                var Z = {
                    anchor: A,
                    head: O
                };
                b.push(F), b.push(Z)
            }
            c.setSelections(b)
        }
        K.addCursorToPrevLine = function(c) {
            E(c, -1)
        }, K.addCursorToNextLine = function(c) {
            E(c, 1)
        };

        function W(c, m, y) {
            for (var b = 0; b < c.length; b++)
                if (S.cmpPos(c[b].from(), m) == 0 && S.cmpPos(c[b].to(), y) == 0) return !0;
            return !1
        }
        var R = "(){}[]";

        function C(c) {
            for (var m = c.listSelections(), y = [], b = 0; b < m.length; b++) {
                var L = m[b],
                    F = L.head,
                    A = c.scanForBracket(F, -1);
                if (!A) return !1;
                for (;;) {
                    var O = c.scanForBracket(F, 1);
                    if (!O) return !1;
                    if (O.ch == R.charAt(R.indexOf(A.ch) + 1)) {
                        var Z = j(A.pos.line, A.pos.ch + 1);
                        if (S.cmpPos(Z, L.from()) == 0 && S.cmpPos(O.pos, L.to()) == 0) {
                            if (A = c.scanForBracket(A.pos, -1), !A) return !1
                        } else {
                            y.push({
                                anchor: Z,
                                head: O.pos
                            });
                            break
                        }
                    }
                    F = j(O.pos.line, O.pos.ch + 1)
                }
            }
            return c.setSelections(y), !0
        }
        K.selectScope = function(c) {
            C(c) || c.execCommand("selectAll")
        }, K.selectBetweenBrackets = function(c) {
            if (!C(c)) return S.Pass
        };

        function N(c) {
            return c ? /\bpunctuation\b/.test(c) ? c : void 0 : null
        }
        K.goToBracket = function(c) {
            c.extendSelectionsBy(function(m) {
                var y = c.scanForBracket(m.head, 1, N(c.getTokenTypeAt(m.head)));
                if (y && S.cmpPos(y.pos, m.head) != 0) return y.pos;
                var b = c.scanForBracket(m.head, -1, N(c.getTokenTypeAt(j(m.head.line, m.head.ch + 1))));
                return b && j(b.pos.line, b.pos.ch + 1) || m.head
            })
        }, K.swapLineUp = function(c) {
            if (c.isReadOnly()) return S.Pass;
            for (var m = c.listSelections(), y = [], b = c.firstLine() - 1, L = [], F = 0; F < m.length; F++) {
                var A = m[F],
                    O = A.from().line - 1,
                    Z = A.to().line;
                L.push({
                    anchor: j(A.anchor.line - 1, A.anchor.ch),
                    head: j(A.head.line - 1, A.head.ch)
                }), A.to().ch == 0 && !A.empty() && --Z, O > b ? y.push(O, Z) : y.length && (y[y.length - 1] = Z), b = Z
            }
            c.operation(function() {
                for (var k = 0; k < y.length; k += 2) {
                    var p = y[k],
                        h = y[k + 1],
                        I = c.getLine(p);
                    c.replaceRange("", j(p, 0), j(p + 1, 0), "+swapLine"), h > c.lastLine() ? c.replaceRange(`
` + I, j(c.lastLine()), null, "+swapLine") : c.replaceRange(I + `
`, j(h, 0), null, "+swapLine")
                }
                c.setSelections(L), c.scrollIntoView()
            })
        }, K.swapLineDown = function(c) {
            if (c.isReadOnly()) return S.Pass;
            for (var m = c.listSelections(), y = [], b = c.lastLine() + 1, L = m.length - 1; L >= 0; L--) {
                var F = m[L],
                    A = F.to().line + 1,
                    O = F.from().line;
                F.to().ch == 0 && !F.empty() && A--, A < b ? y.push(A, O) : y.length && (y[y.length - 1] = O), b = O
            }
            c.operation(function() {
                for (var Z = y.length - 2; Z >= 0; Z -= 2) {
                    var k = y[Z],
                        p = y[Z + 1],
                        h = c.getLine(k);
                    k == c.lastLine() ? c.replaceRange("", j(k - 1), j(k), "+swapLine") : c.replaceRange("", j(k, 0), j(k + 1, 0), "+swapLine"), c.replaceRange(h + `
`, j(p, 0), null, "+swapLine")
                }
                c.scrollIntoView()
            })
        }, K.toggleCommentIndented = function(c) {
            c.toggleComment({
                indent: !0
            })
        }, K.joinLines = function(c) {
            for (var m = c.listSelections(), y = [], b = 0; b < m.length; b++) {
                for (var L = m[b], F = L.from(), A = F.line, O = L.to().line; b < m.length - 1 && m[b + 1].from().line == O;) O = m[++b].to().line;
                y.push({
                    start: A,
                    end: O,
                    anchor: !L.empty() && F
                })
            }
            c.operation(function() {
                for (var Z = 0, k = [], p = 0; p < y.length; p++) {
                    for (var h = y[p], I = h.anchor && j(h.anchor.line - Z, h.anchor.ch), V, de = h.start; de <= h.end; de++) {
                        var Ce = de - Z;
                        de == h.end && (V = j(Ce, c.getLine(Ce).length + 1)), Ce < c.lastLine() && (c.replaceRange(" ", j(Ce), j(Ce + 1, /^\s*/.exec(c.getLine(Ce + 1))[0].length)), ++Z)
                    }
                    k.push({
                        anchor: I || V,
                        head: V
                    })
                }
                c.setSelections(k, 0)
            })
        }, K.duplicateLine = function(c) {
            c.operation(function() {
                for (var m = c.listSelections().length, y = 0; y < m; y++) {
                    var b = c.listSelections()[y];
                    b.empty() ? c.replaceRange(c.getLine(b.head.line) + `
`, j(b.head.line, 0)) : c.replaceRange(c.getRange(b.from(), b.to()), b.from())
                }
                c.scrollIntoView()
            })
        };

        function G(c, m, y) {
            if (c.isReadOnly()) return S.Pass;
            for (var b = c.listSelections(), L = [], F, A = 0; A < b.length; A++) {
                var O = b[A];
                if (!O.empty()) {
                    for (var Z = O.from().line, k = O.to().line; A < b.length - 1 && b[A + 1].from().line == k;) k = b[++A].to().line;
                    b[A].to().ch || k--, L.push(Z, k)
                }
            }
            L.length ? F = !0 : L.push(c.firstLine(), c.lastLine()), c.operation(function() {
                for (var p = [], h = 0; h < L.length; h += 2) {
                    var I = L[h],
                        V = L[h + 1],
                        de = j(I, 0),
                        Ce = j(V),
                        ze = c.getRange(de, Ce, !1);
                    m ? ze.sort(function(Ne, Ie) {
                        return Ne < Ie ? -y : Ne == Ie ? 0 : y
                    }) : ze.sort(function(Ne, Ie) {
                        var Oe = Ne.toUpperCase(),
                            Fe = Ie.toUpperCase();
                        return Oe != Fe && (Ne = Oe, Ie = Fe), Ne < Ie ? -y : Ne == Ie ? 0 : y
                    }), c.replaceRange(ze, de, Ce), F && p.push({
                        anchor: de,
                        head: j(V + 1, 0)
                    })
                }
                F && c.setSelections(p, 0)
            })
        }
        K.sortLines = function(c) {
            G(c, !0, 1)
        }, K.reverseSortLines = function(c) {
            G(c, !0, -1)
        }, K.sortLinesInsensitive = function(c) {
            G(c, !1, 1)
        }, K.reverseSortLinesInsensitive = function(c) {
            G(c, !1, -1)
        }, K.nextBookmark = function(c) {
            var m = c.state.sublimeBookmarks;
            if (m)
                for (; m.length;) {
                    var y = m.shift(),
                        b = y.find();
                    if (b) return m.push(y), c.setSelection(b.from, b.to)
                }
        }, K.prevBookmark = function(c) {
            var m = c.state.sublimeBookmarks;
            if (m)
                for (; m.length;) {
                    m.unshift(m.pop());
                    var y = m[m.length - 1].find();
                    if (!y) m.pop();
                    else return c.setSelection(y.from, y.to)
                }
        }, K.toggleBookmark = function(c) {
            for (var m = c.listSelections(), y = c.state.sublimeBookmarks || (c.state.sublimeBookmarks = []), b = 0; b < m.length; b++) {
                for (var L = m[b].from(), F = m[b].to(), A = m[b].empty() ? c.findMarksAt(L) : c.findMarks(L, F), O = 0; O < A.length; O++)
                    if (A[O].sublimeBookmark) {
                        A[O].clear();
                        for (var Z = 0; Z < y.length; Z++) y[Z] == A[O] && y.splice(Z--, 1);
                        break
                    }
                O == A.length && y.push(c.markText(L, F, {
                    sublimeBookmark: !0,
                    clearWhenEmpty: !1
                }))
            }
        }, K.clearBookmarks = function(c) {
            var m = c.state.sublimeBookmarks;
            if (m)
                for (var y = 0; y < m.length; y++) m[y].clear();
            m.length = 0
        }, K.selectBookmarks = function(c) {
            var m = c.state.sublimeBookmarks,
                y = [];
            if (m)
                for (var b = 0; b < m.length; b++) {
                    var L = m[b].find();
                    L ? y.push({
                        anchor: L.from,
                        head: L.to
                    }) : m.splice(b--, 0)
                }
            y.length && c.setSelections(y, 0)
        };

        function le(c, m) {
            c.operation(function() {
                for (var y = c.listSelections(), b = [], L = [], F = 0; F < y.length; F++) {
                    var A = y[F];
                    A.empty() ? (b.push(F), L.push("")) : L.push(m(c.getRange(A.from(), A.to())))
                }
                c.replaceSelections(L, "around", "case");
                for (var F = b.length - 1, O; F >= 0; F--) {
                    var A = y[b[F]];
                    if (!(O && S.cmpPos(A.head, O) > 0)) {
                        var Z = X(c, A.head);
                        O = Z.from, c.replaceRange(m(Z.word), Z.from, Z.to)
                    }
                }
            })
        }
        K.smartBackspace = function(c) {
            if (c.somethingSelected()) return S.Pass;
            c.operation(function() {
                for (var m = c.listSelections(), y = c.getOption("indentUnit"), b = m.length - 1; b >= 0; b--) {
                    var L = m[b].head,
                        F = c.getRange({
                            line: L.line,
                            ch: 0
                        }, L),
                        A = S.countColumn(F, null, c.getOption("tabSize")),
                        O = c.findPosH(L, -1, "char", !1);
                    if (F && !/\S/.test(F) && A % y == 0) {
                        var Z = new j(L.line, S.findColumn(F, A - y, y));
                        Z.ch != L.ch && (O = Z)
                    }
                    c.replaceRange("", O, L, "+delete")
                }
            })
        }, K.delLineRight = function(c) {
            c.operation(function() {
                for (var m = c.listSelections(), y = m.length - 1; y >= 0; y--) c.replaceRange("", m[y].anchor, j(m[y].to().line), "+delete");
                c.scrollIntoView()
            })
        }, K.upcaseAtCursor = function(c) {
            le(c, function(m) {
                return m.toUpperCase()
            })
        }, K.downcaseAtCursor = function(c) {
            le(c, function(m) {
                return m.toLowerCase()
            })
        }, K.setSublimeMark = function(c) {
            c.state.sublimeMark && c.state.sublimeMark.clear(), c.state.sublimeMark = c.setBookmark(c.getCursor())
        }, K.selectToSublimeMark = function(c) {
            var m = c.state.sublimeMark && c.state.sublimeMark.find();
            m && c.setSelection(c.getCursor(), m)
        }, K.deleteToSublimeMark = function(c) {
            var m = c.state.sublimeMark && c.state.sublimeMark.find();
            if (m) {
                var y = c.getCursor(),
                    b = m;
                if (S.cmpPos(y, b) > 0) {
                    var L = b;
                    b = y, y = L
                }
                c.state.sublimeKilled = c.getRange(y, b), c.replaceRange("", y, b)
            }
        }, K.swapWithSublimeMark = function(c) {
            var m = c.state.sublimeMark && c.state.sublimeMark.find();
            m && (c.state.sublimeMark.clear(), c.state.sublimeMark = c.setBookmark(c.getCursor()), c.setCursor(m))
        }, K.sublimeYank = function(c) {
            c.state.sublimeKilled != null && c.replaceSelection(c.state.sublimeKilled, null, "paste")
        }, K.showInCenter = function(c) {
            var m = c.cursorCoords(null, "local");
            c.scrollTo(null, (m.top + m.bottom) / 2 - c.getScrollInfo().clientHeight / 2)
        };

        function te(c) {
            var m = c.getCursor("from"),
                y = c.getCursor("to");
            if (S.cmpPos(m, y) == 0) {
                var b = X(c, m);
                if (!b.word) return;
                m = b.from, y = b.to
            }
            return {
                from: m,
                to: y,
                query: c.getRange(m, y),
                word: b
            }
        }

        function ie(c, m) {
            var y = te(c);
            if (y) {
                var b = y.query,
                    L = c.getSearchCursor(b, m ? y.to : y.from);
                (m ? L.findNext() : L.findPrevious()) ? c.setSelection(L.from(), L.to()): (L = c.getSearchCursor(b, m ? j(c.firstLine(), 0) : c.clipPos(j(c.lastLine()))), (m ? L.findNext() : L.findPrevious()) ? c.setSelection(L.from(), L.to()) : y.word && c.setSelection(y.from, y.to))
            }
        }
        K.findUnder = function(c) {
            ie(c, !0)
        }, K.findUnderPrevious = function(c) {
            ie(c, !1)
        }, K.findAllUnder = function(c) {
            var m = te(c);
            if (m) {
                for (var y = c.getSearchCursor(m.query), b = [], L = -1; y.findNext();) b.push({
                    anchor: y.from(),
                    head: y.to()
                }), y.from().line <= m.from.line && y.from().ch <= m.from.ch && L++;
                c.setSelections(b, L)
            }
        };
        var D = S.keyMap;
        D.macSublime = {
            "Cmd-Left": "goLineStartSmart",
            "Shift-Tab": "indentLess",
            "Shift-Ctrl-K": "deleteLine",
            "Alt-Q": "wrapLines",
            "Ctrl-Left": "goSubwordLeft",
            "Ctrl-Right": "goSubwordRight",
            "Ctrl-Alt-Up": "scrollLineUp",
            "Ctrl-Alt-Down": "scrollLineDown",
            "Cmd-L": "selectLine",
            "Shift-Cmd-L": "splitSelectionByLine",
            Esc: "singleSelectionTop",
            "Cmd-Enter": "insertLineAfter",
            "Shift-Cmd-Enter": "insertLineBefore",
            "Cmd-D": "selectNextOccurrence",
            "Shift-Cmd-Space": "selectScope",
            "Shift-Cmd-M": "selectBetweenBrackets",
            "Cmd-M": "goToBracket",
            "Cmd-Ctrl-Up": "swapLineUp",
            "Cmd-Ctrl-Down": "swapLineDown",
            "Cmd-/": "toggleCommentIndented",
            "Cmd-J": "joinLines",
            "Shift-Cmd-D": "duplicateLine",
            F5: "sortLines",
            "Shift-F5": "reverseSortLines",
            "Cmd-F5": "sortLinesInsensitive",
            "Shift-Cmd-F5": "reverseSortLinesInsensitive",
            F2: "nextBookmark",
            "Shift-F2": "prevBookmark",
            "Cmd-F2": "toggleBookmark",
            "Shift-Cmd-F2": "clearBookmarks",
            "Alt-F2": "selectBookmarks",
            Backspace: "smartBackspace",
            "Cmd-K Cmd-D": "skipAndSelectNextOccurrence",
            "Cmd-K Cmd-K": "delLineRight",
            "Cmd-K Cmd-U": "upcaseAtCursor",
            "Cmd-K Cmd-L": "downcaseAtCursor",
            "Cmd-K Cmd-Space": "setSublimeMark",
            "Cmd-K Cmd-A": "selectToSublimeMark",
            "Cmd-K Cmd-W": "deleteToSublimeMark",
            "Cmd-K Cmd-X": "swapWithSublimeMark",
            "Cmd-K Cmd-Y": "sublimeYank",
            "Cmd-K Cmd-C": "showInCenter",
            "Cmd-K Cmd-G": "clearBookmarks",
            "Cmd-K Cmd-Backspace": "delLineLeft",
            "Cmd-K Cmd-1": "foldAll",
            "Cmd-K Cmd-0": "unfoldAll",
            "Cmd-K Cmd-J": "unfoldAll",
            "Ctrl-Shift-Up": "addCursorToPrevLine",
            "Ctrl-Shift-Down": "addCursorToNextLine",
            "Cmd-F3": "findUnder",
            "Shift-Cmd-F3": "findUnderPrevious",
            "Alt-F3": "findAllUnder",
            "Shift-Cmd-[": "fold",
            "Shift-Cmd-]": "unfold",
            "Cmd-I": "findIncremental",
            "Shift-Cmd-I": "findIncrementalReverse",
            "Cmd-H": "replace",
            F3: "findNext",
            "Shift-F3": "findPrev",
            fallthrough: "macDefault"
        }, S.normalizeKeyMap(D.macSublime), D.pcSublime = {
            "Shift-Tab": "indentLess",
            "Shift-Ctrl-K": "deleteLine",
            "Alt-Q": "wrapLines",
            "Ctrl-T": "transposeChars",
            "Alt-Left": "goSubwordLeft",
            "Alt-Right": "goSubwordRight",
            "Ctrl-Up": "scrollLineUp",
            "Ctrl-Down": "scrollLineDown",
            "Ctrl-L": "selectLine",
            "Shift-Ctrl-L": "splitSelectionByLine",
            Esc: "singleSelectionTop",
            "Ctrl-Enter": "insertLineAfter",
            "Shift-Ctrl-Enter": "insertLineBefore",
            "Ctrl-D": "selectNextOccurrence",
            "Shift-Ctrl-Space": "selectScope",
            "Shift-Ctrl-M": "selectBetweenBrackets",
            "Ctrl-M": "goToBracket",
            "Shift-Ctrl-Up": "swapLineUp",
            "Shift-Ctrl-Down": "swapLineDown",
            "Ctrl-/": "toggleCommentIndented",
            "Ctrl-J": "joinLines",
            "Shift-Ctrl-D": "duplicateLine",
            F9: "sortLines",
            "Shift-F9": "reverseSortLines",
            "Ctrl-F9": "sortLinesInsensitive",
            "Shift-Ctrl-F9": "reverseSortLinesInsensitive",
            F2: "nextBookmark",
            "Shift-F2": "prevBookmark",
            "Ctrl-F2": "toggleBookmark",
            "Shift-Ctrl-F2": "clearBookmarks",
            "Alt-F2": "selectBookmarks",
            Backspace: "smartBackspace",
            "Ctrl-K Ctrl-D": "skipAndSelectNextOccurrence",
            "Ctrl-K Ctrl-K": "delLineRight",
            "Ctrl-K Ctrl-U": "upcaseAtCursor",
            "Ctrl-K Ctrl-L": "downcaseAtCursor",
            "Ctrl-K Ctrl-Space": "setSublimeMark",
            "Ctrl-K Ctrl-A": "selectToSublimeMark",
            "Ctrl-K Ctrl-W": "deleteToSublimeMark",
            "Ctrl-K Ctrl-X": "swapWithSublimeMark",
            "Ctrl-K Ctrl-Y": "sublimeYank",
            "Ctrl-K Ctrl-C": "showInCenter",
            "Ctrl-K Ctrl-G": "clearBookmarks",
            "Ctrl-K Ctrl-Backspace": "delLineLeft",
            "Ctrl-K Ctrl-1": "foldAll",
            "Ctrl-K Ctrl-0": "unfoldAll",
            "Ctrl-K Ctrl-J": "unfoldAll",
            "Ctrl-Alt-Up": "addCursorToPrevLine",
            "Ctrl-Alt-Down": "addCursorToNextLine",
            "Ctrl-F3": "findUnder",
            "Shift-Ctrl-F3": "findUnderPrevious",
            "Alt-F3": "findAllUnder",
            "Shift-Ctrl-[": "fold",
            "Shift-Ctrl-]": "unfold",
            "Ctrl-I": "findIncremental",
            "Shift-Ctrl-I": "findIncrementalReverse",
            "Ctrl-H": "replace",
            F3: "findNext",
            "Shift-F3": "findPrev",
            fallthrough: "pcDefault"
        }, S.normalizeKeyMap(D.pcSublime);
        var T = D.default == D.macDefault;
        D.sublime = T ? D.macSublime : D.pcSublime
    })
});
var Ia = Ht((Ea, Ha) => {
    "use strict";
    (function(S) {
        typeof Ea == "object" && typeof Ha == "object" ? S(Dt()) : typeof define == "function" && define.amd ? define(["../../lib/codemirror"], S) : S(CodeMirror)
    })(function(S) {
        S.defineOption("placeholder", "", function(E, W, R) {
            var C = R && R != S.Init;
            if (W && !C) E.on("blur", re), E.on("change", ce), E.on("swapDoc", ce), S.on(E.getInputField(), "compositionupdate", E.state.placeholderCompose = function() {
                ue(E)
            }), ce(E);
            else if (!W && C) {
                E.off("blur", re), E.off("change", ce), E.off("swapDoc", ce), S.off(E.getInputField(), "compositionupdate", E.state.placeholderCompose), K(E);
                var N = E.getWrapperElement();
                N.className = N.className.replace(" CodeMirror-empty", "")
            }
            W && !E.hasFocus() && re(E)
        });

        function K(E) {
            E.state.placeholder && (E.state.placeholder.parentNode.removeChild(E.state.placeholder), E.state.placeholder = null)
        }

        function j(E) {
            K(E);
            var W = E.state.placeholder = document.createElement("pre");
            W.style.cssText = "height: 0; overflow: visible", W.style.direction = E.getOption("direction"), W.className = "CodeMirror-placeholder CodeMirror-line-like";
            var R = E.getOption("placeholder");
            typeof R == "string" && (R = document.createTextNode(R)), W.appendChild(R), E.display.lineSpace.insertBefore(W, E.display.lineSpace.firstChild)
        }

        function ue(E) {
            setTimeout(function() {
                var W = !1;
                if (E.lineCount() == 1) {
                    var R = E.getInputField();
                    W = R.nodeName == "TEXTAREA" ? !E.getLine(0).length : !/[^\u200b]/.test(R.querySelector(".CodeMirror-line").textContent)
                }
                W ? j(E) : K(E)
            }, 20)
        }

        function re(E) {
            X(E) && j(E)
        }

        function ce(E) {
            var W = E.getWrapperElement(),
                R = X(E);
            W.className = W.className.replace(" CodeMirror-empty", "") + (R ? " CodeMirror-empty" : ""), R ? j(E) : K(E)
        }

        function X(E) {
            return E.lineCount() === 1 && E.getLine(0) === ""
        }
    })
});
var ho = Hu(Dt());
uo();
xa();
co();
fo();
Ca();
Ma();
Ba();
Ia();
window.CodeMirror = ho.default;
var Iu = ho.default;
export {
    Iu as
    default
};