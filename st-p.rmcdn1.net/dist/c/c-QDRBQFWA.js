import {
    c as s,
    d as l
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-BXWTANI3.js";
l();
var a = () => {
    let t = [s.isDesktop() ? "isdesktop" : "no-isdesktop"],
        o = s.isTablet() ? ["istablet", "touch"] : ["no-istablet", "no-touch"],
        e = [s.isMobile() ? "isphone" : "no-isphone"],
        i = [...t, ...o, ...e];
    document.querySelector("html").classList.add(...i)
};
export {
    a
};