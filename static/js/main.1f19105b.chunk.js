(this["webpackJsonpcool-cats-ownership-checker"]=this["webpackJsonpcool-cats-ownership-checker"]||[]).push([[0],{29:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t(13),o=t.n(a),i=t(2),c=t(1),s=Object(r.createContext)(),l=function(n){var e=n.children,t=Object(r.useState)(null),a=Object(i.a)(t,2),o=a[0],l=a[1],d=Object(r.useState)(""),u=Object(i.a)(d,2),b=u[0],f=u[1],h=Object(r.useState)(""),p=Object(i.a)(h,2),j=p[0],w=p[1];return Object(r.useEffect)((function(){document.addEventListener("web3-widget-event",(function(n){var e,t,r;f((null===n||void 0===n||null===(e=n.detail)||void 0===e?void 0:e.address)||""),w((null===n||void 0===n||null===(t=n.detail)||void 0===t?void 0:t.balance)||""),l((null===n||void 0===n||null===(r=n.detail)||void 0===r?void 0:r.web3)||null)}))}),[]),Object(c.jsx)(s.Provider,{value:{address:b,library:o,balance:j},children:e})};var d=function(){var n=Object(r.useContext)(s);if(void 0===n)throw new Error("useWeb3 must be used within a Web3Context");return n},u=t(3),b=t(4),f=t(7),h=function(n,e,t){Object(r.useEffect)((function(){var e=setTimeout((function(){return n()}),t);return function(){return clearTimeout(e)}}),[].concat(Object(f.a)(e||[]),[t]))};var p=function(n,e,t){var a=Object(r.useState)((function(){if("undefined"===typeof window)return e;try{var t=window.localStorage.getItem(n),r=JSON.parse(t),a=r&&r.expiry&&new Date(r.expiry)>new Date&&r.value;return a||e}catch(o){return console.log(o),e}})),o=Object(i.a)(a,2),c=o[0],s=o[1],l=Object(r.useCallback)((function(e){try{var r=e instanceof Function?e(c):e,a=c,o=Date.now()+1e3*("number"===typeof t?t:86400),i={expiry:new Date(o).toISOString(),value:r};s(r),"undefined"!==typeof window&&(window.localStorage.setItem(n,JSON.stringify(i)),window.dispatchEvent(new StorageEvent("storage",{key:n,newValue:JSON.stringify(r),oldValue:JSON.stringify(a)})))}catch(l){console.log(l)}}),[n,c,t]);return Object(r.useEffect)((function(){var e=function(e){e&&e.key===n&&JSON.parse(e.newValue||null)!==JSON.parse(e.oldValue||null)&&s(JSON.parse(e.newValue||null))};return window.addEventListener("storage",e),function(){window.removeEventListener("storage",e)}}),[n]),[c,l]},j=function(n){var e=function(n){switch(String(n)){case"1":return"Main";case"3":return"Ropsten";case"4":return"Rinkeby";case"5":return"Goerli";case"42":return"Kovan";case"137":return"Polygon";default:throw new Error("unsupported network")}}(n);return"Main"===e?"api":["api",e.toLowerCase()].join("-")};var w=function(n){var e=d().library,t=p("".concat(n,"-abi")),a=Object(i.a)(t,2),o=a[0],c=a[1],s=Object(r.useState)(),l=Object(i.a)(s,2),u=l[0],b=l[1],f=Object(r.useState)(),h=Object(i.a)(f,2),w=h[0],m=h[1];return Object(r.useEffect)((function(){!e||o||w||(o?Promise.resolve(o):fetch("//".concat(j(e.currentProvider.networkVersion),".etherscan.io/api?module=contract&action=getabi&address=").concat(n,"&format=raw")).then((function(n){if(200!==n.status)throw new Error("Error connecting to etherscan");return n.json().then((function(n){if("NOTOK"===n.message)throw new Error(n.result||"Error parsing abi json");return n}))}))).then((function(n){c(n)})).catch((function(n){m(n.toString())}))}),[n,e,u,w,o,c]),Object(r.useEffect)((function(){e&&!u&&o&&b(new e.eth.Contract(o,n))}),[n,e,u,o]),Object(r.useEffect)((function(){!e&&u&&b(void 0)}),[e,u]),{loadingContract:!w&&!o,contractError:w,contract:u}},m=Object(r.createContext)(),v=function(n){var e=n.children,t=w("0x645f0303ab62ef56d263747cd26b650c9ea012f7"),r=t.contract,a=t.loadingContract,o=t.contractError;return Object(c.jsx)(m.Provider,{value:{contract:r,loading:a,error:o},children:e})};var g,x=function(){var n=Object(r.useContext)(m);if(void 0===n)throw new Error("useContract must be used within a ContractContext");return n},O=375,y=425,k=600,C=768,S=1024,E=1321,z=1440,N=2560,R={mobileS:"@media screen and (min-width: ".concat(320,"px)"),mobileM:"@media screen and (min-width: ".concat(O,"px)"),mobileL:"@media screen and (min-width: ".concat(y,"px)"),sitecontent:"@media screen and (min-width: ".concat(k,"px)"),below_sitecontent:"@media screen and (max-width: ".concat(k,"px)"),tablet:"@media screen and (min-width: ".concat(C,"px)"),below_tablet:"@media screen and (max-width: ".concat(C,"px)"),laptop:"@media screen and (min-width: ".concat(S,"px)"),below_laptop:"@media screen and (max-width: ".concat(S,"px)"),desktop:"@media screen and (min-width: ".concat(E,"px)"),laptopL:"@media screen and (min-width: ".concat(z,"px)"),desktopL:"@media screen and (min-width: ".concat(N,"px)"),retina:"@media only screen and (-webkit-min-device-pixel-ratio : 1.5), only screen and (min-device-pixel-ratio : 1.5)"},L=t.p+"static/media/CoolCatsHandwritingRegular.f47a6a5f.woff",I=t.p+"static/media/CoolCatsHandwritingRegular.34c1b609.woff2",T="\n  border: 4px solid var(--disabled);\n  border-radius: var(--site-radius);\n  margin-bottom: var(--site-spacing);\n",A="\n  appearance: none;\n  outline: none;\n  padding: calc(var(--site-spacing) / 2);\n  background: transparent;\n  display: block;\n  width: 100%;\n  ".concat(T,"\n\n  &::placeholder {\n    color: var(--disabled);\n    font-weight: 600;\n  }\n\n  &:focus {\n    border-color: var(--primary);\n  }\n"),D="\n  border: 0 none;\n  background: var(--bluecat);\n  color: var(--white);\n  cursor: pointer;\n  border-radius: var(--button-radius);\n  font-family: var(--coolcats-font);\n  display: block;\n  font-family: var(--coolcats-font);\n  font-weight: normal;\n  text-transform: uppercase;\n  text-align: center;\n  height: 40px;\n  line-height: 40px;\n  padding: 0 32px;\n\n  &:not([disabled]) {\n    &:hover {\n      filter: brightness(1.1);\n    }\n  }\n\n  &[disabled] {\n    background-color: var(--disabled);\n    cursor: not-allowed;\n  }\n",J=Object(b.a)(g||(g=Object(u.a)(["\n  :root {\n    --white: white;\n    --primary: #222;\n    --secondary: #0070f3;\n    --bluecat: #90CFF1;\n    --disabled: #CCC;\n    --border-width: 4px;\n    --site-spacing: 16px;\n    --site-spacingx2: calc(var(--site-spacing) * 2);\n    --wrapper-spacing: 28px;\n    --coolcats-font: \"CoolCats Regular\", sans-serif !important;\n    --poppins-font: 'Poppins', sans-serif !important;\n    --footer-header-color: white;\n    --site-width: 1320px;\n    --site-overflow-width: 1920px;\n    --site-content-width: 600px;\n    --font-size-p: 14px;\n    --line-height-p: 24px;\n    --font-size-h1: 48px;\n    --font-size-h1-mobile: 28px;\n    --line-height-h1: 48px;\n    --line-height-h1-mobile: calc(28px * 1.25);\n    --font-size-h2: 36px;\n    --font-size-h2-mobile: 24px;\n    --line-height-h2: 36px;\n    --line-height-h2-mobile: calc(24px * 1.25);\n    --font-size-h3: 32px;\n    --font-size-h3-mobile: 20px;\n    --line-height-h3: 32px;\n    --line-height-h3-mobile: calc(20px * 1.25);\n    --font-size-h4: 24px;\n    --font-size-h4-mobile: 18px;\n    --line-height-h4: 24px;\n    --line-height-h4-mobile: calc(18px * 1.25);\n    --font-size-h5: 14px;\n    --font-size-h5-mobile: 16px;\n    --line-height-h5: 18px;\n    --line-height-h5-mobile: calc(16px * 1.25);\n    --button-radius: 20px;\n    --site-radius: 8px;\n    --footer-background: var(--blue);\n    --transparent-black: rgba(0, 0, 0, 0.5);\n  }\n\n  @font-face {\n    font-family: 'CoolCats Regular';\n    font-style: normal;\n    font-weight: 400;\n    src: local('CoolCats Regular'), url(",") format('woff2'),\n    local('CoolCats Regular'), url(",') format(\'woff\');\n    font-display: swap;\n  }\n\n  *:where(:not(html, iframe, canvas, img, svg, video, audio, input, select):not(svg *, symbol *)) {\n    all: unset;\n    display: revert;\n  }\n\n  iframe {\n    display: none;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n    transition: all 0.3s;\n  }\n\n  a, button {\n    cursor: revert;\n  }\n\n  ol, ul, menu {\n    list-style: none;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  table {\n    border-collapse: collapse;\n  }\n\n  input, textarea {\n    -webkit-user-select: auto;\n  }\n\n  textarea {\n    white-space: revert;\n  }\n\n  ::placeholder {\n    color: unset;\n  }\n\n  :where([hidden]) {\n    display: none;\n  }\n\n  :where([contenteditable]:not([contenteditable="false"])) {\n    -moz-user-modify: read-write;\n    -webkit-user-modify: read-write;\n    overflow-wrap: break-word;\n    -webkit-line-break: after-white-space;\n    -webkit-user-select: auto;\n  }\n\n  /* apply back the draggable feature - exist only in Chromium and Safari */\n  :where([draggable="true"]) {\n    -webkit-user-drag: element;\n  }\n\n  html,\n  body {\n    color: var(--primary);\n    padding: 0;\n    margin: 0;\n    font-family: var(--poppins-font), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  }\n\n  html {\n    background-color: var(--footer-background);\n  }\n\n  body {\n    overflow: overlay;\n    overflow-x: hidden;\n    background-color: white;\n\n    button {\n      ',"\n    }\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  p {\n    font-size: 14px;\n\n    "," {\n      font-size: 16px;\n    }\n  }\n"])),L,I,D,R.mobileL),P=Object(r.createContext)(),F=Object(r.createContext)(),B=function(n){var e=n.children,t=Object(r.useState)(),a=Object(i.a)(t,2),o=a[0],s=a[1],l=Object(r.useState)(!1),d=Object(i.a)(l,2),u=d[0],b=d[1],f=Object(r.useState)([]),h=Object(i.a)(f,2),p=h[0],j=h[1];return Object(c.jsx)(P.Provider,{value:{loading:u,results:p,error:o},children:Object(c.jsx)(F.Provider,{value:{setResults:j,setLoading:b,setError:s},children:e})})};var V,_,M,H,q,K,U=function(){var n=Object(r.useContext)(P);if(void 0===n)throw new Error("useResults must be used within a ResultsContext");return n},W=b.c.form(V||(V=Object(u.a)(["\n  ","\n"])),(function(n){return n.loading?Object(b.b)(_||(_=Object(u.a)(["\n        opacity: 0.8;\n      "]))):Object(b.b)(M||(M=Object(u.a)([""])))})),G=b.c.button(H||(H=Object(u.a)(["\n  ","\n  width: 100%;\n"])),D),Q=b.c.input(q||(q=Object(u.a)(["\n  ","\n  width: 100%;\n"])),A),X=b.c.blockquote(K||(K=Object(u.a)(["\n  width: 100%;\n  background: red;\n  color: white;\n"])));function Y(n){var e=n.error,t=Object(r.useState)(!1),a=Object(i.a)(t,2),o=a[0];a[1];return o?null:Object(c.jsx)(X,{children:e.message})}var Z,$=function(){var n=d().library,e=x().contract,t=U().loading,a=function(){var n=Object(r.useContext)(F);if(void 0===n)throw new Error("useSetResults must be used within a SetResultsContext");return n}(),o=a.setLoading,s=a.setError,l=a.setResults,u=Object(r.useState)(),b=Object(i.a)(u,2),f=b[0],p=b[1],j=Object(r.useState)(),w=Object(i.a)(j,2),m=w[0],v=w[1],g=Object(r.useState)(""),O=Object(i.a)(g,2),y=O[0],k=O[1],C=Object(r.useState)(0),S=Object(i.a)(C,2),E=S[0],z=S[1],N=Object(r.useState)(),R=Object(i.a)(N,2),L=R[0],I=R[1],T=Object(r.useState)(),A=Object(i.a)(T,2),D=A[0],J=A[1],P=Object(r.useState)(),B=Object(i.a)(P,2),V=B[0],_=B[1];return Object(r.useEffect)((function(){e&&V&&!t&&(o(!0),function(n,e,t){var r=1e3,a=function(n,e){for(var t=[],r=0,a=n.length;r<a;)t.push(n.slice(r,r+=e));return t}(Array.from(Array(t>r?t:r).keys()),r).map((function(n){return[n[0],n[n.length-1]]}));return Promise.all(a.map((function(t){return n.methods.safeOwnersOfBetween(e,t[0],t[1]).call().then((function(n){return n})).catch((function(n){return console.error(n),[]}))}))).then((function(n){return[].concat.apply([],n)})).catch((function(n){return console.error(n),[]}))}(e,V.contractAddress,Number(V.lastToken)).then((function(n){l(n)})).finally((function(){_(void 0),o(!1)})))}),[e,V,t]),Object(r.useEffect)((function(){var n=[L,D].filter((function(n){return n}));s(n.length>0?n:void 0),l([])}),[L,D]),Object(r.useEffect)((function(){l([])}),[y,E]),h((function(){f&&f.target&&f.target.value?(I(n.utils.isAddress(f.target.value)?void 0:new Error("Invalid address")),k(f.target.value)):(I(void 0),k(""))}),[f],200),h((function(){if(m&&m.target&&m.target.value)try{var n=Number(m.target.value);if("number"!==typeof n||NaN===n)throw new Error("Last token id not a number");if(n<0)throw new Error("Last token id less than zero");J(void 0),z(n)}catch(e){J(e)}else z(0),J(void 0)}),[m],200),Object(c.jsxs)(c.Fragment,{children:[L&&Object(c.jsx)(Y,{error:L}),D&&Object(c.jsx)(Y,{error:D}),Object(c.jsxs)(W,{onSubmit:function(n){n&&n.preventDefault();var e={};return new FormData(n.target).fd.forEach((function(n,t){return e[t]=n})),_(e),!1},disabled:V||!1,children:[Object(c.jsx)(Q,{onChange:function(n){p(n)},disabled:V||!1,name:"contractAddress",placeholder:"Contract Address"}),Object(c.jsx)(Q,{onChange:function(n){v(n)},disabled:V||!1,name:"lastToken",type:"number",min:0,placeholder:"Last Token Id"}),Object(c.jsx)(G,{disabled:!y||!E||L||D||V||!1,type:"submit",children:"Search"})]})]})},nn=t(17),en=b.c.h1(Z||(Z=Object(u.a)(["\n  ","\n"])),(function(n){return e=n.as,"\n    font-family: var(--coolcats-font);\n    font-weight: normal;\n    font-size: var(--font-size-".concat(e,"-mobile);\n    line-height: var(--line-height-").concat(e,"-mobile);\n    ").concat(R.laptop," {\n      font-size: var(--font-size-").concat(e,");\n      line-height: var(--line-height-").concat(e,");\n    }\n  ");var e}));function tn(n){var e=n.children,t=n.className,r=n.id,a=n.style,o=n.tag,i={className:t,id:r,style:a};return"string"===typeof e?i.dangerouslySetInnerHTML={__html:e}:i.children=e,Object(c.jsx)(en,Object(nn.a)({as:o},i))}var rn,an,on,cn=function(){return Object(r.useEffect)((function(){var n="web3-button-script";if(!document.getElementById(n)){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.id=n,e.innerHTML="(function(w, d, s, o, f, js, fjs) {\n        w['web3-widget'] = o;\n        w[o] = w[o] || function() {\n          (w[o].q = w[o].q || []).push(arguments);\n        };\n        js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];\n        js.id = o;\n        js.src = f;\n        js.async = 1;\n        fjs.parentNode.insertBefore(js, fjs);\n      }(window, document, 'script', 'mw', 'https://coolcatsnft.github.io/web3-widget/main.js'));\n      mw('NETWORK_ID', 1);\n      mw('IS_DEV', true);\n      ",document.body.appendChild(e)}}),[]),Object(r.createElement)("web3-button",{},null)},sn=b.c.header(rn||(rn=Object(u.a)(["\n  padding: var(--site-spacing) 0;\n  display: flex;\n  justify-content: space-between;\n"])));function ln(){return Object(c.jsxs)(sn,{children:[Object(c.jsx)(tn,{tag:"h1",children:"Ownership Checker"}),Object(c.jsx)(cn,{})]})}var dn=b.c.section(an||(an=Object(u.a)(["\n  margin: var(--site-spacing) 0;\n  display: flex;\n  justify-content: space-between;\n"]))),un=b.c.div(on||(on=Object(u.a)(["\n  height: 300px;\n  overflow: auto;\n  ","\n\n  table {\n    width: 100%;\n    table-layout: fixed;\n    border-collapse: collapse;\n  \n    tr {\n      th,\n      td {\n        padding: var(--site-spacing);\n  \n        &:last-of-type {\n          padding-left: calc(var(--site-spacing) * 4);\n        }\n      }\n    }\n  \n    thead {\n      font-family: var(--coolcats-font);\n\n      th {\n        position: sticky;\n        top: 0;\n        background-color: var(--disabled);\n      }\n    }\n  \n    tbody {\n      th {\n        &:hover {\n          background-color: var(--disabled);\n        }\n      }\n    }\n  }\n\n  + button {\n    width: 100%;\n  }\n"])),T);var bn,fn=function(){var n=U(),e=n.results,t=(n.loading,Object(r.useState)(1e3)),a=Object(i.a)(t,2),o=a[0],s=a[1],l=function(n,e){var t=encodeURI(["data:text/csv;charset=utf-8,",n.join(",\n")].join("")),r=document.createElement("a");r.setAttribute("href",t),r.setAttribute("download","".concat(e,".csv")),document.body.appendChild(r),r.click(),document.body.removeChild(r)};return 0===e.length?null:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(dn,{children:[Object(c.jsx)("button",{onClick:function(){l(e,"raw")},children:"Export raw"}),Object(c.jsx)("button",{onClick:function(){return function(n){var e=Object(f.a)(new Set(n.unshift("Address")));l(e,"deduplicated")}(e)},children:"Export Deduplicated"}),Object(c.jsx)("button",{onClick:function(){return function(n){var e=n.reduce((function(n,e,t){return n[e]||(n[e]=""),n[e]=n[e].split(","),n[e].push(t),n[e]=n[e].filter((function(n){return n})).join(","),n}),{}),t=[["Address","Tokens"].join(",")];for(var r in e)t.push([r,e[r]].join(","));return l(t,"tokens")}(e)},children:"Export Token Breakdown"})]}),Object(c.jsx)(un,{children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Address"}),Object(c.jsx)("th",{children:"Token Id"})]})}),Object(c.jsx)("tbody",{children:e.slice(0,o).map((function(n,e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:n}),Object(c.jsx)("td",{children:e})]},e)}))})]})}),Object(c.jsx)("button",{onClick:function(){return s((function(n){return n+1e3}))},children:"Load more"})]})},hn=b.c.div(bn||(bn=Object(u.a)(["\n  width: 100%;\n  max-width: 800px;\n  padding: 0 var(--site-spacing);\n  margin: 0 auto;\n"])));var pn=function(){var n=d().address;return Object(c.jsxs)(hn,{children:[Object(c.jsx)(ln,{}),Object(c.jsxs)("main",{children:[n&&Object(c.jsx)($,{}),n&&Object(c.jsx)(fn,{})]})]})};o.a.createRoot(document.getElementById("root")).render(Object(c.jsx)(l,{children:Object(c.jsxs)(v,{children:[Object(c.jsx)(J,{}),Object(c.jsx)(B,{children:Object(c.jsx)(pn,{})})]})}))}},[[29,1,2]]]);
//# sourceMappingURL=main.1f19105b.chunk.js.map