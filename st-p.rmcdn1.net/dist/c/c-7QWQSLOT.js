import {
    a as d,
    b as e
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-RDXN3NMA.js";
e();
var a = {
    "template-viewer-widget-background": d `
	<div class="rmwidget widget-background" style="background-color: #<%=data.color%>">

        <% if (data.selectedType == 'picture') { %>
            <div class="picture-background" style="opacity: <%=data.opacity || 1%>;"></div>
        <% } %>

        <% if (data.selectedType == 'video') { %>
            <div class="video-background">
                <div class="video-container"></div>
                <div class="overlay"></div>
            </div>
		<% } %>

		<% if (data.selectedType == 'slideshow') { %>
			<div class="slideshow-background">
				<div class="slideshow-container"></div>
				<div class="slideshow-preload"></div>
			</div>
		<% } %>
	</div>
`
};
export {
    a
};