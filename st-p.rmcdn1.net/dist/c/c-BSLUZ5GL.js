import {
    a as n
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BJKDAX5B.js";
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
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-MWTOBXCT.js";
import {
    a as o,
    b as m
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-K4MSOFN3.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-OQWTLMV5.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BBGOCAHY.js";
import {
    o as a,
    p as l
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
import {
    a as g
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-JIE3ALW5.js";
import {
    b as p
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-33VGZGAT.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ILD4NFNU.js";
import "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BXWTANI3.js";
import {
    d as r
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";
var h = r(g()),
    d = r(p());
l();
m();
var c = n.extend({
        DO_NOT_WAIT_FOR_PRELOAD: !0,
        render: function() {
            this.makeBox("widget-gmaps"), this.$el.html((0, h.default)('<div class="map-container"></div>')), this.rendered = !0;
            let e = this.api_key;
            return this.mag && this.mag.opts && this.mag.opts.gmaps_key && this.mag.opts.gmaps_key !== this.api_key && (e = this.mag.opts.gmaps_key), a.initGMapsAPI(e, function() {
                this.destroyed || d.default.defer(function() {
                    if (this.destroyed) return;
                    let s;
                    o.isOn(this.page.pageViewport, this.mag.getViewportWidth(this.page.pageViewport), this.mag.viewOpts) && this.scale(), this.map = new google.maps.Map(this.$(".map-container").get(0), {
                        zoom: this.map_zoom,
                        center: new google.maps.LatLng(this.center_lat, this.center_lng),
                        mapTypeId: this.map_type_id || google.maps.MapTypeId.ROADMAP,
                        disableDefaultUI: !this.show_controls,
                        streetViewControl: !1,
                        scrollwheel: this.scrollwheel === void 0 || !!this.scrollwheel
                    }), this.marker_lat && this.marker_lng && this.current_type !== "directions" && (this.marker = new google.maps.Marker({
                        map: this.map,
                        position: new google.maps.LatLng(this.marker_lat, this.marker_lng)
                    }), google.maps.event.addListener(this.marker, "click", function() {
                        this.infowindow && this.infowindow.open(this.map, this.marker)
                    }.bind(this)), this.infowindow = new google.maps.InfoWindow({
                        maxWidth: this.w - 100
                    }), this.formatted_address ? this.infowindow.setContent(this.formatted_address) : (s = new google.maps.Geocoder, s.geocode({
                        latLng: new google.maps.LatLng(this.marker_lat, this.marker_lng)
                    }, function(t, i) {
                        i === google.maps.GeocoderStatus.OK && t[0] && this.infowindow.setContent(t[0].formatted_address)
                    }.bind(this)))), this.current_type === "directions" && this.direction_start_lat && this.direction_start_lng && this.direction_end_lat && this.direction_end_lng && this.direction_route_type ? (this.directionsService = new google.maps.DirectionsService, this.directionsDisplay = new google.maps.DirectionsRenderer({
                        preserveViewport: !0
                    }), this.directionsService.route({
                        origin: new google.maps.LatLng(this.direction_start_lat, this.direction_start_lng),
                        destination: new google.maps.LatLng(this.direction_end_lat, this.direction_end_lng),
                        travelMode: google.maps.TravelMode[this.direction_route_type.toUpperCase()]
                    }, function(t, i) {
                        i === google.maps.DirectionsStatus.OK && (this.directionsDisplay.setDirections(t), this.directionsDisplay.setMap(this.map), google.maps.event.addListener(this.map, "tilesloaded", function() {
                            this.widgetIsLoaded()
                        }.bind(this)))
                    }.bind(this))) : google.maps.event.addListener(this.map, "tilesloaded", function() {
                        this.widgetIsLoaded()
                    }.bind(this)), this.current_type === "custom" && this.custom_json && this.map.setOptions({
                        styles: JSON.parse(this.custom_json)
                    })
                }.bind(this))
            }.bind(this)), this
        },
        scale: function() {
            let e = this.mag.getScale(this.page.pageViewport),
                s = this.$(".map-container");
            if (o.isCSSZoom()) s.css("zoom", 1 / e);
            else if (o.isCSSTransform()) {
                let t = e * 100,
                    i = (t - 100) / 2;
                s.css({
                    transform: "scale(" + 1 / e + ") translate(-" + i + "%, -" + i + "%)",
                    width: t + "%",
                    height: t + "%"
                })
            }
        },
        start: function() {
            return this.started = !0, !this.rendered || this.destroyed || !this.map ? this : (google.maps.event.trigger(this.map, "resize"), this.map.setCenter(new google.maps.LatLng(this.center_lat, this.center_lng)), this)
        },
        destroy: function() {
            return this.map && google.maps.event.clearListeners(this.map, "tilesloaded"), this.marker && google.maps.event.clearListeners(this.marker, "click"), n.prototype.destroy.apply(this, arguments)
        }
    }),
    u = c;
export {
    u as
    default
};