import{r,j as t}from"./index-De-W_0fC.js";const l=[{img:"/assets/r1.png",title:"Inquiry",text:"Raise query by contacting us through WhatsApp or website."},{img:"/assets/r2.png",title:"Registration",text:"Book a consultation with an RMA and sign the service agreement."},{img:"/assets/r3.png",title:"Documentation",text:"Gather and prepare all required documents."},{img:"/assets/r4.png",title:"Lodgement",text:"Lodge your visa application with precision."},{img:"/assets/r5.png",title:"Support",text:"Receive ongoing guidance throughout the process."}];function m(){const n=r.useRef(null),[a,i]=r.useState(!1);return r.useEffect(()=>{const e=()=>{if(!n.current)return;const s=n.current.getBoundingClientRect().top;i(s<=100)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),t.jsxs("section",{ref:n,className:`relative py-12 sm:py-16 md:py-24 bg-[#eff9fb] overflow-hidden \r
                 rounded-3xl md:rounded-[60px] mx-3 md:mx-6 mb-16`,children:[t.jsx("img",{src:"/assets/wave2.jpg",alt:"wave background",className:"absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"}),t.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 lg:h-[600px]",children:[t.jsxs("div",{className:"text-center mb-10 md:mb-16",children:[t.jsx("p",{className:"text-[#8FD07C] text-xs md:text-sm font-bold tracking-widest mb-4",children:"PROCESS OVERVIEW"}),t.jsx("h2",{className:"text-2xl md:text-4xl font-normal",children:"Proven Process"}),t.jsxs("p",{className:"text-[#8fd07c] text-lg md:text-4xl font-semibold mt-3",children:["Simplifying"," ",t.jsx("span",{className:"text-black text-xl md:text-4xl font-semibold",children:"Your Australian Immigration Journey"})]})]}),t.jsx("div",{className:`grid\r
          grid-cols-1\r
          sm:grid-cols-2\r
          lg:grid-cols-3\r
          xl:grid-cols-5\r
          gap-5 sm:gap-6 md:gap-8\r
          justify-items-center\r
          transition-all duration-700 `,children:l.map((e,s)=>t.jsxs("div",{className:`
                bg-white w-full max-w-[250px] sm:max-w-[250px] sm:h-[260px] lg:h-[280px]
                rounded-2xl p-4 sm:p-8 shadow-lg mt-6 
                transition-transform duration-700 ease-in-out
                ${!a&&s%2===0?"translate-y-6":""}
                ${!a&&s%2!==0?"-translate-y-6":""}
              `,children:[t.jsx("img",{src:e.img,alt:e.title,className:"w-12 h-auto mb-4 mt-3"}),t.jsx("h4",{className:"font-semibold text-lg md:text-xl text-[#095256] mb-2",children:e.title}),t.jsx("p",{className:"text-sm md:text-base text-gray-600 leading-relaxed",children:e.text})]},s))})]})]})}export{m as default};
