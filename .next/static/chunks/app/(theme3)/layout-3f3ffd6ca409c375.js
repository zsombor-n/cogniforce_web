(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51],{3376:function(e,t,a){Promise.resolve().then(a.t.bind(a,1749,23)),Promise.resolve().then(a.t.bind(a,5250,23)),Promise.resolve().then(a.bind(a,3117)),Promise.resolve().then(a.bind(a,6679)),Promise.resolve().then(a.t.bind(a,1406,23)),Promise.resolve().then(a.bind(a,5561))},703:function(e,t,a){"use strict";a.d(t,{default:function(){return o.a}});var s=a(7447),o=a.n(s)},8792:function(e,t,a){"use strict";a.d(t,{default:function(){return o.a}});var s=a(5250),o=a.n(s)},7447:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{getImageProps:function(){return l},default:function(){return c}});let s=a(6921),o=a(8630),n=a(1749),i=s._(a(536)),l=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}},c=n.Image},5561:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var s=a(7437),o=a(8792),n=a(2265),i=a(6938);function l(e){let{initialDarkMode:t}=e,[a,o]=(0,n.useState)(t),l=async()=>{!1===a&&(document.body.classList.add("is-dark"),document.body.classList.remove("is-light"),await localStorage.setItem("Theme","dark_mode")),!0===a&&(document.body.classList.remove("is-dark"),document.body.classList.add("is-light"),await localStorage.setItem("Theme","light_mode")),o(!a)};return(0,n.useEffect)(()=>{"light_mode"===localStorage.getItem("Theme")&&(document.body.classList.remove("is-dark"),document.body.classList.add("is-light"),o(!1)),"dark_mode"===localStorage.getItem("Theme")&&(document.body.classList.add("is-dark"),document.body.classList.remove("is-light"),o(!0)),localStorage.getItem("Theme")||(a?localStorage.setItem("Theme","dark_mode"):localStorage.setItem("Theme","light_mode"))},[a]),(0,s.jsxs)("button",{className:!0===a?"dark-mode-toggle dark-active":"dark-mode-toggle",onClick:l,children:[(0,s.jsx)(i.Z,{icon:"sun-fill",className:"off icon"}),(0,s.jsx)(i.Z,{icon:"moon-fill",className:"on icon"})]})}function c(e){let{initialDarkMode:t}=e,[a,o]=(0,n.useState)(t),l=async()=>{!1===a&&(document.body.classList.add("is-dark"),document.body.classList.remove("is-light"),await localStorage.setItem("ThemeTwo","dark_mode")),!0===a&&(document.body.classList.remove("is-dark"),document.body.classList.add("is-light"),await localStorage.setItem("ThemeTwo","light_mode")),o(!a)};return(0,n.useEffect)(()=>{"light_mode"===localStorage.getItem("ThemeTwo")&&(document.body.classList.remove("is-dark"),document.body.classList.add("is-light"),o(!1)),"dark_mode"===localStorage.getItem("ThemeTwo")&&(document.body.classList.add("is-dark"),document.body.classList.remove("is-light"),o(!0)),localStorage.getItem("ThemeTwo")||(a?localStorage.setItem("ThemeTwo","dark_mode"):localStorage.setItem("ThemeTwo","light_mode"))},[a]),(0,s.jsxs)("button",{className:!0===a?"dark-mode-toggle dark-active":"dark-mode-toggle",onClick:l,children:[(0,s.jsx)(i.Z,{icon:"sun-fill",className:"off icon"}),(0,s.jsx)(i.Z,{icon:"moon-fill",className:"on icon"})]})}var d=a(5313),r=a(703);function m(e){let{logoUrl:t,darkLogoUrl:a,linkClasses:n}=e;return(0,s.jsx)(o.default,{href:"/",className:"".concat(n||"logo-link"),children:(0,s.jsxs)("div",{className:"logo-wrap",children:[(0,s.jsx)(r.default,{className:"logo-img logo-light",src:a,alt:"Logo"}),(0,s.jsx)(r.default,{className:"logo-img logo-dark",src:t,alt:"Logo"})]})})}function u(e){let{darkMode:t,varient:a,logoUrl:r,darkLogoUrl:u,language:g,loginBtn:h,actionBtnText:f,actionBtnUrl:A,actionBtnClass:k,menuPosition:b}=e,x=(0,d.usePathname)(),[v,j]=(0,n.useState)(!1),[N,w]=(0,n.useState)(!1),[L,S]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{window.addEventListener("scroll",()=>{window.scrollY>0?w(!0):w(!1)})},[]),(0,s.jsx)("header",{className:"nk-header-main nk-menu-main will-shrink ignore-mask ".concat(v?"header-menu-shown":""," ").concat(a||""," ").concat(N?"has-fixed":""),children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"nk-header-wrap",children:[(0,s.jsx)("div",{className:"nk-header-logo",children:(0,s.jsx)(m,{logoUrl:r,darkLogoUrl:u,href:"/"})}),(0,s.jsxs)("div",{className:"nk-header-toggle",children:[t?(0,s.jsx)(c,{initialDarkMode:t}):(0,s.jsx)(l,{initialDarkMode:t}),(0,s.jsx)("button",{className:"btn btn-light btn-icon header-menu-toggle",onClick:()=>!j(!v),children:(0,s.jsx)(i.Z,{icon:"menu",className:"icon"})})]}),v&&(0,s.jsx)("div",{className:"header-menu-overlay",onClick:()=>j(!v)}),(0,s.jsxs)("nav",{className:"nk-header-menu nk-menu ".concat(v?"header-menu-active":""),children:[(0,s.jsxs)("ul",{className:"nk-menu-list ".concat(b||"mx-auto"),children:[(0,s.jsx)("li",{className:"nk-menu-item ".concat("/"===x?"active":""),children:(0,s.jsx)(o.default,{href:"/",className:"nk-menu-link",children:"Home"})}),(0,s.jsx)("li",{className:"nk-menu-item ".concat("/usecase"===x?"active":""),children:(0,s.jsx)(o.default,{href:"/usecase",className:"nk-menu-link",children:"Use Cases"})}),(0,s.jsx)("li",{className:"nk-menu-item ".concat("/contact"===x?"active":""),children:(0,s.jsx)(o.default,{href:"/contact",className:"nk-menu-link",children:"Contact"})})]}),(0,s.jsx)("div",{className:"mx-2 d-none d-lg-block",children:t?(0,s.jsx)(c,{initialDarkMode:t}):(0,s.jsx)(l,{initialDarkMode:t})}),(0,s.jsx)("ul",{className:"nk-menu-buttons flex-lg-row-reverse"})]})]})})})}},6938:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var s=a(7437);function o(e){let{icon:t,className:a}=e;return(0,s.jsx)("em",{className:"ni ni-".concat(t," ").concat(a||"")})}},1406:function(){},3117:function(e,t,a){"use strict";a.r(t),t.default={src:"/_next/static/media/logo-dark.e8adc44d.png",height:399,width:1352,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAANElEQVR4nGMUL/unysDAwATEIMAGxCJA/BKIfwMxC0iBK5ABUiAHxM+A+C8Q/wfi70DMDwAgHgmPi6WHaAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2}},6679:function(e,t,a){"use strict";a.r(t),t.default={src:"/_next/static/media/logo-white.dd011231.png",height:399,width:1352,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAJ0lEQVR42mP4p/pPHQh1/zn+0wKyNRn+uf5z/5f6z/ufB5C2++cLAEqFE5D8rERJAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}}},function(e){e.O(0,[647,971,69,744],function(){return e(e.s=3376)}),_N_E=e.O()}]);