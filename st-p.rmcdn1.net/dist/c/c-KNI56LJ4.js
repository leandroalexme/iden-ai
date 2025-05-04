import {
    a as r,
    b as f
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-UE75HU6Z.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-RDXN3NMA.js";
import {
    a as m,
    b as d
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-7M3QGMP5.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-VCWMZ4MQ.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-TCPTYTUX.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-XGXYOKTY.js";
import {
    b as o,
    c
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-LURZCKUX.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ISPIXJKU.js";
import {
    a as l
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-JIE3ALW5.js";
import {
    b as u
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-33VGZGAT.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ILD4NFNU.js";
import {
    c as p,
    d as h
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BXWTANI3.js";
import {
    d as a
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";
var n = a(l()),
    s = a(u());
c();
f();
h();
d();
var i = function(e) {
    if (s.default.bindAll(this), s.default.extend(this, e), RM.common.magCreationInProgress) return;
    if (!p.isDesktop()) {
        this.showMobilePopupWarning();
        return
    }
    if (Modernizr.msie || Modernizr.msie11) {
        this.showIEPopupWarning();
        return
    }
    if (!this.me) {
        this.showJoinForm();
        return
    }
    let t = typeof this.me.get == "function" ? this.me.get("permissions") : this.me.permissions;
    this.skipPermissionsCheck || t && t.can_create_mag ? this.innerCreateMag() : this.showCreatePopupWarning()
};
i.prototype.innerCreateMag = function() {
    let e = {};
    this.currentFolderId && (e.folder = this.currentFolderId), this.sharedUser && (e.user = this.sharedUser), RM.common.magCreationInProgress = !0, n.default.ajax({
        url: o.readymag_auth_host + (this.templateID ? "/api/magFromTemplate/" + this.templateID : "/api/mag/"),
        type: "POST",
        data: e,
        success: s.default.bind(function(t) {
            typeof this.success == "function" && this.success(), RM.common.magCreationInProgress = !1, window.location.href = o.readymag_auth_host + "/edit/" + t.num_id + "/contents/"
        }, this),
        error: s.default.bind(function() {
            if (typeof this.error == "function" && this.error(), RM.common.magCreationInProgress = !1, console.log(arguments), alert("Creating project problem. Contact tech support, please: " + o.SUPPORT_MAIL), this.me) {
                let t = typeof this.me.get == "function" ? this.me.get("uri") : this.me.uri;
                t && (window.location.href = o.readymag_auth_host + "/" + t)
            }
        }, this)
    })
};
i.prototype.showCreatePopupWarning = function() {
    if (!r) return;
    new r({
        $parent: (0, n.default)("body > .popups"),
        router: this.router,
        opts: {
            type: "type-create"
        },
        alert_source: "create mag"
    }).render()
};
i.prototype.showMobilePopupWarning = function() {
    if (!r) return;
    new r({
        $parent: (0, n.default)("body > .popups"),
        router: this.router,
        opts: {
            type: "type-switch-desktop-create"
        },
        alert_source: "create mag mobile"
    }).render()
};
i.prototype.showIEPopupWarning = function() {
    if (!r) return;
    new r({
        $parent: (0, n.default)("body > .popups"),
        router: this.router,
        opts: {
            type: "type-browsers"
        }
    }).render()
};
i.prototype.showJoinForm = function() {
    m(), window.location.href = `${o.readymag_host}/auth/join${this.templateID?"?template="+this.templateID:""}`
};
var b = i;
export {
    b as
    default
};