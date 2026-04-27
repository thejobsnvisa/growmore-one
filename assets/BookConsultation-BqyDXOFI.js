import{i as H,r as l,j as o,H as q}from"./index-euknfoZ5.js";var W=H(),g=function(e,t){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,n){a.__proto__=n}||function(a,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(a[r]=n[r])},g(e,t)};function u(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");g(e,t);function a(){this.constructor=e}e.prototype=t===null?Object.create(t):(a.prototype=t.prototype,new a)}var d=function(){return d=Object.assign||function(t){for(var a,n=1,r=arguments.length;n<r;n++){a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},d.apply(this,arguments)};function K(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",a==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var Q=`/*
  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css
*/

.calendly-inline-widget,
.calendly-inline-widget *,
.calendly-badge-widget,
.calendly-badge-widget *,
.calendly-overlay,
.calendly-overlay * {
  font-size: 16px;
  line-height: 1.2em;
}

.calendly-inline-widget {
  min-width: 320px;
  height: 630px;
}

.calendly-inline-widget iframe,
.calendly-badge-widget iframe,
.calendly-overlay iframe {
  display: inline;
  width: 100%;
  height: 100%;
}

.calendly-popup-content {
  position: relative;
}

.calendly-popup-content.calendly-mobile {
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
}

.calendly-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 9999;
  background-color: #a5a5a5;
  background-color: rgba(31, 31, 31, 0.4);
}

.calendly-overlay .calendly-close-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.calendly-overlay .calendly-popup {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
  width: 80%;
  min-width: 900px;
  max-width: 1000px;
  height: 90%;
  max-height: 680px;
}

@media (max-width: 975px) {
  .calendly-overlay .calendly-popup {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transform: none;
    transform: none;
    width: 100%;
    height: auto;
    min-width: 0;
    max-height: none;
  }
}

.calendly-overlay .calendly-popup .calendly-popup-content {
  height: 100%;
}

.calendly-overlay .calendly-popup-close {
  position: absolute;
  top: 25px;
  right: 25px;
  color: #fff;
  width: 19px;
  height: 19px;
  cursor: pointer;
  background: url(https://assets.calendly.com/assets/external/close-icon.svg)
    no-repeat;
  background-size: contain;
}

@media (max-width: 975px) {
  .calendly-overlay .calendly-popup-close {
    top: 15px;
    right: 15px;
  }
}

.calendly-badge-widget {
  position: fixed;
  right: 20px;
  bottom: 15px;
  z-index: 9998;
}

.calendly-badge-widget .calendly-badge-content {
  display: table-cell;
  width: auto;
  height: 45px;
  padding: 0 30px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 2px 5px;
  font-family: sans-serif;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

.calendly-badge-widget .calendly-badge-content.calendly-white {
  color: #666a73;
}

.calendly-badge-widget .calendly-badge-content span {
  display: block;
  font-size: 12px;
}

.calendly-spinner {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
  z-index: -1;
}

.calendly-spinner > div {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: #e1e1e1;
  border-radius: 50%;
  vertical-align: middle;
  -webkit-animation: calendly-bouncedelay 1.4s infinite ease-in-out;
  animation: calendly-bouncedelay 1.4s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.calendly-spinner .calendly-bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.calendly-spinner .calendly-bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes calendly-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes calendly-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
`;K(Q);function f(e){return e.charAt(0)==="#"?e.slice(1):e}function X(e){return e?.primaryColor&&(e.primaryColor=f(e.primaryColor)),e?.textColor&&(e.textColor=f(e.textColor)),e?.backgroundColor&&(e.backgroundColor=f(e.backgroundColor)),e}var B;(function(e){e.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",e.EVENT_TYPE_VIEWED="calendly.event_type_viewed",e.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",e.EVENT_SCHEDULED="calendly.event_scheduled",e.PAGE_HEIGHT="calendly.page_height"})(B||(B={}));var R=function(e){var t=e.url,a=e.prefill,n=a===void 0?{}:a,r=e.pageSettings,i=r===void 0?{}:r,p=e.utm,s=p===void 0?{}:p,y=e.embedType,c=X(i),b=c.backgroundColor,D=c.hideEventTypeDetails,z=c.hideLandingPageDetails,v=c.primaryColor,w=c.textColor,F=c.hideGdprBanner,C=n.customAnswers,m=n.date,k=n.email,j=n.firstName,N=n.guests,E=n.lastName,_=n.location,S=n.name,I=s.utmCampaign,L=s.utmContent,P=s.utmMedium,M=s.utmSource,T=s.utmTerm,O=s.salesforce_uuid,h=t.indexOf("?"),A=h>-1,$=t.slice(h+1),V=A?t.slice(0,h):t,G=[A?$:null,b?"background_color=".concat(b):null,D?"hide_event_type_details=1":null,z?"hide_landing_page_details=1":null,v?"primary_color=".concat(v):null,w?"text_color=".concat(w):null,F?"hide_gdpr_banner=1":null,S?"name=".concat(encodeURIComponent(S)):null,_?"location=".concat(encodeURIComponent(_)):null,j?"first_name=".concat(encodeURIComponent(j)):null,E?"last_name=".concat(encodeURIComponent(E)):null,N?"guests=".concat(N.map(encodeURIComponent).join(",")):null,k?"email=".concat(encodeURIComponent(k)):null,m&&m instanceof Date?"date=".concat(J(m)):null,I?"utm_campaign=".concat(encodeURIComponent(I)):null,L?"utm_content=".concat(encodeURIComponent(L)):null,P?"utm_medium=".concat(encodeURIComponent(P)):null,M?"utm_source=".concat(encodeURIComponent(M)):null,T?"utm_term=".concat(encodeURIComponent(T)):null,O?"salesforce_uuid=".concat(encodeURIComponent(O)):null,y?"embed_type=".concat(y):null,"embed_domain=1"].concat(C?ee(C):[]).filter(function(Y){return Y!==null}).join("&");return"".concat(V,"?").concat(G)},J=function(e){var t=e.getMonth()+1,a=e.getDate(),n=e.getFullYear();return[n,t<10?"0".concat(t):t,a<10?"0".concat(a):a].join("-")},Z=/^a\d{1,2}$/,ee=function(e){var t=Object.keys(e).filter(function(a){return a.match(Z)});return t.length?t.map(function(a){return"".concat(a,"=").concat(encodeURIComponent(e[a]))}):[]},U=(function(e){u(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.render=function(){return l.createElement("div",{className:"calendly-spinner"},l.createElement("div",{className:"calendly-bounce1"}),l.createElement("div",{className:"calendly-bounce2"}),l.createElement("div",{className:"calendly-bounce3"}))},t})(l.Component),ne="calendly-inline-widget";(function(e){u(t,e);function t(a){var n=e.call(this,a)||this;return n.state={isLoading:!0},n.onLoad=n.onLoad.bind(n),n}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var a=R({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),n=this.props.LoadingSpinner||U;return l.createElement("div",{className:this.props.className||ne,style:this.props.styles||{}},this.state.isLoading&&l.createElement(n,null),l.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:a}))},t})(l.Component);var te=(function(e){u(t,e);function t(a){var n=e.call(this,a)||this;return n.state={isLoading:!0},n.onLoad=n.onLoad.bind(n),n}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var a=R({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),n=this.props.LoadingSpinner||U;return l.createElement(l.Fragment,null,this.state.isLoading&&l.createElement(n,null),l.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:a}))},t})(l.Component),x=(function(e){if(!e.open)return null;if(!e.rootElement)throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return W.createPortal(l.createElement("div",{className:"calendly-overlay"},l.createElement("div",{onClick:e.onModalClose,className:"calendly-close-overlay"}),l.createElement("div",{className:"calendly-popup"},l.createElement("div",{className:"calendly-popup-content"},l.createElement(te,d({},e)))),l.createElement("button",{className:"calendly-popup-close",onClick:e.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),e.rootElement)});(function(e){u(t,e);function t(a){var n=e.call(this,a)||this;return n.state={isOpen:!1},n.onClick=n.onClick.bind(n),n.onClose=n.onClose.bind(n),n}return t.prototype.onClick=function(a){a.preventDefault(),this.setState({isOpen:!0})},t.prototype.onClose=function(a){a.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return l.createElement(l.Fragment,null,l.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),l.createElement(x,d({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t})(l.Component);(function(e){u(t,e);function t(a){var n=e.call(this,a)||this;return n.state={isOpen:!1},n.onClick=n.onClick.bind(n),n.onClose=n.onClose.bind(n),n}return t.prototype.onClick=function(){this.setState({isOpen:!0})},t.prototype.onClose=function(a){a.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return l.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},l.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&l.createElement("span",null,"powered by Calendly")),l.createElement(x,d({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t})(l.Component);const ae=()=>{const e="https://www.growmore.one/book-consultation",[t,a]=l.useState(!1),[n,r]=l.useState(""),i=s=>{r(s),a(!0)},p=()=>{a(!1)};return l.useEffect(()=>{t?(document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden"):(document.documentElement.style.overflow="auto",document.body.style.overflow="auto")},[t]),o.jsxs(o.Fragment,{children:[o.jsxs(q,{children:[o.jsx("title",{children:"Book Your Australian Visa Consultation | Growmore Immigration"}),o.jsx("meta",{name:"description",content:"Secure your future in Australia. Book a professional consultation for PR, Student, or Partner visas with our expert migration team. Start your journey today!"}),o.jsx("link",{rel:"canonical",href:e}),o.jsx("meta",{property:"og:title",content:"Migrate to Australia | Skilled Occupation List with GrowMore Immigration"}),o.jsx("meta",{property:"og:description",content:"Secure your future in Australia. Book a professional consultation for PR, Student, or Partner visas with our expert migration team. Start your journey today!"}),o.jsx("meta",{property:"og:url",content:e}),o.jsx("meta",{property:"og:image",content:"https://www.growmore.one/logo.jpg"})]}),o.jsxs("div",{children:[o.jsx("section",{className:"bg-[#28535B] py-16 md:py-20",children:o.jsxs("div",{className:"max-w-[1400px] mx-auto px-6 md:px-15",children:[o.jsx("h1",{className:"text-[22px] md:text-5xl font-semibold text-white mb-3",children:"Book Consultation"}),o.jsx("p",{className:"text-white font-semibold",children:"Home > Book Consultation"})]})}),o.jsx("div",{className:"py-16 bg-gray-50",children:o.jsxs("div",{className:"max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-4",children:[o.jsxs("div",{className:"bg-white rounded-3xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition duration-300",children:[o.jsx("div",{className:"h-[350px] overflow-hidden rounded-t-3xl",children:o.jsx("img",{src:"/assets/c2.jpg",alt:"Standard Consultation",className:"w-full h-full object-cover object-top"})}),o.jsxs("div",{className:"p-4",children:[o.jsx("h2",{className:"text-[22px] font-bold text-[#042325]",children:"$299"}),o.jsx("h3",{className:"mt-3 text-lg font-bold",children:"Standard Consultation with Krunal Nayak (30 Mins)"}),o.jsx("p",{className:"text-[#042325] text-[15px] mt-4 leading-relaxed ",children:"Book your online Standard consultation with our Principal Migration Agents specialised in Australian visas — appointments available in approximately 3 weeks."}),o.jsxs("a",{href:"https://6fvy.short.gy/icfactsheet",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 text-[15px] mt-4 block",children:[" ","View Factsheet"," "]}),o.jsx("button",{onClick:()=>i("https://calendly.com/krunalnayak/regular"),className:"mt-6 bg-[#5aa7ad] hover:bg-[#4b9398] text-white px-8 py-3 rounded-full transition duration-300",children:"Book Now"})]})]}),o.jsxs("div",{className:"bg-white rounded-3xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition duration-300",children:[o.jsx("div",{className:"h-[350px] overflow-hidden rounded-t-3xl",children:o.jsx("img",{src:"/assets/c1.jpg",alt:"Rapid Consultation",className:"w-full h-full object-cover object-top"})}),o.jsxs("div",{className:"p-4",children:[o.jsx("h2",{className:"text-[22px] font-bold text-[#042325]",children:"$149"}),o.jsx("h3",{className:"mt-3 text-lg font-bold",children:"15-Minute Express Online Consultation with Mr. Krunal Nayak"}),o.jsx("p",{className:"text-[#042325] text-[15px] mt-4 leading-relaxed ",children:"This short consultation is ideal if you have 2–3 quick questions and need clear, professional direction from a Registered Migration Agent."}),o.jsxs("a",{href:"https://6fvy.short.gy/icfactsheet",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 text-[15px] mt-10 block",children:[" ","View Factsheet"," "]}),o.jsx("button",{onClick:()=>i("https://calendly.com/krunalnayak/rapid?month=2026-03"),className:"mt-6 bg-[#5aa7ad] hover:bg-[#4b9398] text-white px-8 py-3 rounded-full transition duration-300",children:"Book Now"})]})]}),o.jsxs("div",{className:"bg-white rounded-3xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition duration-300",children:[o.jsx("div",{className:"h-[350px] overflow-hidden rounded-t-3xl",children:o.jsx("img",{src:"/assets/c.png",alt:"Urgent Consultation",className:"w-full h-full object-cover object-top"})}),o.jsxs("div",{className:"p-4",children:[o.jsx("h2",{className:"text-[22px] font-bold text-[#042325]",children:"$500"}),o.jsx("h3",{className:"mt-3 text-lg font-bold",children:"Urgent Consultation with Krunal Nayak (60 Mins)"}),o.jsx("p",{className:"text-[#042325] text-[15px] mt-4  mb-3 leading-relaxed ",children:"Book your urgent online consultation with our Principal Migration Agents, who specialise in Australian visas and applications, and receive priority expert guidance ."}),o.jsxs("a",{href:"https://6fvy.short.gy/icfactsheet",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 text-[15px] mt-4 block",children:[" ","View Factsheet"," "]}),o.jsx("button",{onClick:()=>i("https://calendly.com/krunalnayak/urgent"),className:"mt-6 bg-[#5aa7ad] hover:bg-[#4b9398] text-white px-8 py-3 rounded-full transition duration-300",children:"Book Now"})]})]}),o.jsxs("div",{className:"bg-white rounded-3xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition duration-300",children:[" ",o.jsxs("div",{className:"h-[350px] overflow-hidden rounded-t-3xl",children:[" ",o.jsx("img",{src:"/assets/c3.jpg",alt:"Urgent Consultation",className:"w-full h-full object-cover object-top"})," "]})," ",o.jsxs("div",{className:"p-4",children:[" ",o.jsx("h2",{className:"text-[22px] font-bold text-[#042325]",children:"Free"})," ",o.jsxs("h3",{className:"mt-3 text-lg font-semibold",children:[" ","Free Information Session with one of our Migration Expert"," "]})," ",o.jsxs("p",{className:"text-[#042325] text-[15px] mt-4 leading-relaxed ",children:[" ","Book your online session with our Migration Support Expert, specializing in Australian visa pathways"," "]})," ",o.jsxs("a",{href:"https://6fvy.short.gy/icfactsheet",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 text-[15px] mt-4 block",children:[" ","View Factsheet"," "]})," ",o.jsx("a",{href:"https://case.growmore.one/add/company-website",target:"_blank",rel:"noopener noreferrer",className:"mt-6 inline-block bg-[#5aa7ad] hover:bg-[#4b9398] text-white px-8 py-3 rounded-full transition duration-300",children:"Book Now"})]})," "]})]})}),t&&o.jsx(x,{url:n,open:t,onModalClose:p,rootElement:document.getElementById("root")})]})]})};export{ae as default};
