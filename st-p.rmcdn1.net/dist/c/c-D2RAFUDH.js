import {
    a as t,
    e as s
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-Z4HHCED6.js";
import {
    p as a,
    r,
    v as d
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-ZCYSW665.js";
import {
    b as o,
    h as l,
    i as p
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-QXKVEKVP.js";
import {
    a as n
} from "https://st-p.rmcdn1.net/ae5fa58f/dist/c/c-64BUEHBL.js";
var i, b, c = n(() => {
    "use strict";
    d();
    p();
    s();
    i = t.withComponent(r("input")
        `
  font-family: ${l.fonts.main};
  ${e=>e.ellipsis?`overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;`:""}
  display: block;
  width: 100%;
  background: transparent;
  outline: none;
  resize: none;
  border-radius: 0;
  appearance: none;
  color: inherit;

  &::-webkit-search-cancel-button {
    appearance: none;
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.gray};
  }

  &:disabled,
  &:disabled::placeholder {
    -webkit-text-fill-color: ${({theme:e})=>e.colors.gray};
    opacity: 1;
  }

  ${a({regular:{padding:"0 0 10px 0",height:20,color:o.black,"&:focus":{borderBottom:`2px solid ${o.black}`}},small:{padding:0,height:40,color:o.black,"&:focus":{padding:"2px 0 0",height:38,borderBottom:`
        2 px solid $ {
            o.black
        }
        `}},smallMasked:{padding:0,height:40,color:o.gray,"&:focus":{padding:"2px 0 0",height:38,borderBottom:`
        2 px solid $ {
            o.gray
        }
        `}}})};
`);
    i.defaultProps = {
        variant: "regular",
        textStyle: "regular",
        border: "none"
    };
    b = i
});
export {
    b as a, c as b
};