import {
    c as l,
    f as b
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BGHF7VSW.js";
import {
    b as p,
    e as f
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-6XMPDTIY.js";
import {
    a as c,
    b as k
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-RDXN3NMA.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-FZKUL5ZS.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-MWTOBXCT.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-K4MSOFN3.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-YZMXGORB.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-VCWMZ4MQ.js";
import {
    a as h
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-TCPTYTUX.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-XGXYOKTY.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-I6JNYDBX.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-X2AVVSDG.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-FX3USXD4.js";
import {
    b as d,
    c as v
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-LURZCKUX.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-UHXY36KN.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ISPIXJKU.js";
import {
    a as w
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-JIE3ALW5.js";
import {
    b as g
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-33VGZGAT.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ILD4NFNU.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BXWTANI3.js";
import {
    d as o
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";
var a = o(w()),
    u = o(h()),
    i = o(g());
b();
k();
var m = {
    "template-viewer-mag-page-password": c `
	<div class="magpassword-container">
		<div class="img-preloader"></div>
		<div class="back invisible" <%=(imgSrc ? 'style="background-image:url(' + imgSrc + ')"' : "")%>></div>
		<div class="center-table">
			<div class="center-cell">
				<div class="center-content invisible">
					<div class="password-wrapper">
						<div class="input-wrapper">
							<input type="password" class="password-input" placeholder="Enter password"<%=(isPagePassword ? '' : ' id="magpassword-input"')%> required <%=(isPagePassword ? 'autocomplete="new-password"' : 'autofocus')%>>
							<div class="access disabled">Open</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<% if (!user.get('permissions') || !user.get('permissions').white_label) { %>
			<div class="powered invisible">
				<div class="caption-powered">Made with</div>
				<a href="<%=Constants.readymag_host%>"><div class="logo-powered"></div></a>
			</div>
		<% } %>
	</div>
`
};
v();
f();
var $ = u.default.View.extend({
        className: "magpassword",
        events: {
            "click .access": "onAccessClick",
            "keydown #magpassword-input": "onPasswordKeydown",
            "input #magpassword-input": "onPasswordInput"
        },
        initialize: function(s) {
            i.default.bindAll(this), i.default.extend(this, s), this.router = s.router, this.template = m["template-viewer-mag-page-password"]
        },
        render: function(s) {
            let e = this,
                t = s.mag.pass_bg,
                r, n;
            i.default.extend(this, s), n = new l(this.mag.user), r = (0, a.default)(new Image).load(function() {
                e.$el.html(e.template({
                    user: n,
                    imgSrc: t,
                    Constants: d,
                    isPagePassword: !1
                })), e.$parent && (e.$parent.find(e.className).remove(), e.$parent.append(e.$el)), e.delegateEvents(), i.default.delay(function() {
                    e.$(".back, .center-content").removeClass("invisible"), i.default.delay(function() {
                        (0, a.default)("#magpassword-input").focus().select(), e.$(".author, .powered").removeClass("invisible")
                    }, 700)
                }, 200)
            }), r.prop("src", t || p("./viewer/mag-password/bg.jpg"))
        },
        onAccessClick: function() {
            let s = a.default.trim((0, a.default)("#magpassword-input").val());
            if (!s) {
                this.shake();
                return
            }
            this.xhr && this.xhr.abort(), this.xhr = a.default.ajax({
                url: "/api/readymag/authorize",
                method: "POST",
                data: {
                    pass: s,
                    num_id: this.mag.num_id
                },
                success: function() {
                    this.proceed()
                },
                error: function() {
                    (0, a.default)("#magpassword-input").focus().select(), this.shake()
                },
                context: this
            })
        },
        proceed: function() {
            (0, a.default)("body").removeClass("black"), this.remove(), this.mag.has_code_injection || this.mag.opts && this.mag.opts.gtm_id ? window.location.reload() : this.router.restartFullMag(this.pageUri, this.isPageNum)
        },
        onPasswordKeydown: function(s) {
            s.keyCode === 13 && this.onAccessClick()
        },
        onPasswordInput: function() {
            this.$(".access").toggleClass("disabled", !this.$(".password-input").val()), this.$(".password-input").toggleClass("active", this.$(".password-input").val().length > 0)
        },
        shake: function() {
            let s = this;
            this.$(".password-wrapper").addClass("shake"), i.default.delay(function() {
                s.$(".password-wrapper").removeClass("shake")
            }, 500)
        }
    }),
    I = $;
export {
    I as
    default
};