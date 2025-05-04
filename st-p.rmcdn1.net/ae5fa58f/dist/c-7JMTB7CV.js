import {
    a as e,
    b as c
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-RDXN3NMA.js";
import {
    a as r
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-TCPTYTUX.js";
import {
    b as a,
    c as m
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-LURZCKUX.js";
import {
    b as d
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-33VGZGAT.js";
import {
    d as s
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";
var o = s(r()),
    t = s(d());
c();
var i = {
    "template-common-404": e `
    <div id="page404">
        <table>
            <tr>
                <td>
                    <div class="caption">Page Not Found.</div>
                    <div class="message">Sorry, there’s nothing here.<br/>Visit our <a class="front-page-link" href="/">front page</a>.</div>
                </td>
            </tr>
        </table>
    </div>
`,
    "template-common-mag-suspended": e `
	<div class="magsuspended-container">
		<div class="img-preloader"></div>
		<div class="center-table">
			<div class="center-cell">
				<div class="center-content">
					<div class="caption">Suspended</div>
					<!--__magterm-->
					<div class="text">Sorry, this project has been suspended due to violation of Readymag’s <a class="link guides-link nowrap" href="https://readymag.com/readymag/terms-and-privacy/">content guidelines</a>.</div>
				</div>
			</div>
		</div>
		<a class="link contact" href="mailto:<%=Constants.SUPPORT_MAIL%>">Contact us</a>
	</div>
`,
    "template-common-user-suspended": e `
	<div class="usersuspended-container">
		<div class="img-preloader"></div>
		<div class="center-table">
			<div class="center-cell">
				<div class="center-content">
					<div class="caption">Suspended</div>
					<!--__magterm-->
					<div class="text">Sorry, this account has been suspended due to violation of Readymag’s <a class="link guides-link nowrap" href="https://readymag.com/readymag/terms-and-privacy/">content guidelines</a>.</div>
				</div>
			</div>
		</div>
		<a class="link contact" href="mailto:<%=Constants.SUPPORT_MAIL%>">Contact us</a>
	</div>
`,
    "template-common-domain-errors": e `

	<div class="domain-errors">
		<div class="message">
			<% if (state.magNotFound || state.domainNotFound) { %>
			<div class="message-caption">The website is almost ready</div>
			<!--__magterm-->
			<div class="message-text">Connect a domain to this project to complete setup.<br /> If you got here by accident, take a peek at other spellbinding<br class="br-desktop" />
			<a href="https://readymag.com/examples">web projects</a> made with Readymag.</div>
			<a class="help-phone" href="https://help.readymag.com/hc/en-us/articles/4403970232091-Mapping-a-domain">Need Help?</a>
			<% } %>
			<% if (state.magNotPublished) { %>
			<div class="message-caption">Website is Offline</div>
			<!--__magterm-->
			<div class="message-text">This project has been unpublished.</div>
			<% } %>
			<% if (state.subscriptionExpired) { %>
			<div class="message-caption">Zoinks! This page is down</div>
			<div class="message-text">Please, check your payment <a href="<%=Constants.readymag_auth_host%>/settings/">settings</a> if this page is yours.<br />While you’re here, why not explore other inspiring <a href="https://readymag.com/examples">web projects</a> made with Readymag?</div>
			<% } %>
		</div>

		<a class="logo" href="<%=Constants.readymag_host%>"></a>

		<% if (state.magNotFound || state.domainNotFound) { %>
		<a class="help" href="http://help.readymag.com/hc/en-us/articles/360020588592-Domain">Need Help?</a>
		<% } %>
	</div>
`
};
m();
var l = o.default.View.extend({
        TEMPLATES: {
            404: "template-common-404",
            "mag-suspended": "template-common-mag-suspended",
            "user-suspended": "template-common-user-suspended",
            "domain-error": "template-common-domain-errors"
        },
        initialize: function(n) {
            t.default.bindAll(this), t.default.extend(this, n), this.router = this.router || RM.collectorRouter || RM.constructorRouter, this.template = i[this.TEMPLATES[this.type]], this.setElement(this.$container)
        },
        render: function() {
            return this.$el.html(this.template({ ...this.templateData,
                Constants: a
            })), this.postRenderTasks(), this
        },
        postRenderTasks: function() {
            switch (this.type) {
                case "domain-error":
                    t.default.delay(t.default.bind(function() {
                        this.$(".domain-errors").addClass("show-elements")
                    }, this), 1e3);
                    break
            }
        }
    }),
    v = l;
export {
    v as a
};