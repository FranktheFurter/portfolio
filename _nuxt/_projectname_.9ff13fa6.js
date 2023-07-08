import{p as $,_ as I,a as U}from"./projects.c589b0ea.js";import{_ as N}from"./nuxt-link.c26866ae.js";import{f as C,j as L,o as t,c as s,F as m,r as p,v as j,a as e,x as w,y as f,z as B,q as D,g as c,b as v,w as g,d as _,t as u,s as S}from"./entry.17e37248.js";import"./_plugin-vue_export-helper.c27b6911.js";const T={class:"flex flex-wrap"},V=["onClick"],F=["src"],G=["onClick"],R=["src"],z=["onClick"],q=C({__name:"ImageGallery",props:{imgUrls:{},childCss:{}},setup(y){const i=y,l=L(null),n=r=>{l.value=r},d=()=>{l.value=null},k=()=>{l.value!==null&&(l.value=(l.value+1)%i.imgUrls.length)},h=()=>{l.value!==null&&(l.value=(l.value-1+i.imgUrls.length)%i.imgUrls.length)};return(r,b)=>(t(),s("div",T,[(t(!0),s(m,null,p(i.imgUrls,(x,o)=>(t(),s("div",{key:o,class:j(["cursor-pointer m-2",i.childCss]),onClick:a=>n(o)},[e("img",{src:r.$config.app.baseURL+x,alt:"Gallery Image",class:"h-32 w-32 object-cover"},null,8,F)],10,V))),128)),l.value!==null?(t(),s("div",{key:0,class:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center",onClick:d},[e("div",{class:"absolute top-20% bottom-20% left-0 text-2xl text-white flex items-center px-4 cursor-pointer",onClick:w(h,["stop"])}," ← ",8,G),e("img",{src:r.$config.app.baseURL+i.imgUrls[l.value],alt:"Full Screen Image",class:"max-w-100% max-h-100% md:max-w-4/5 md:max-h-4/5"},null,8,R),e("div",{class:"absolute top-20% bottom-20% right-0 text-2xl text-white flex items-center px-4 cursor-pointer",onClick:w(k,["stop"])}," → ",8,z)])):f("",!0)]))}}),E={class:"v-bg-high min-h-100vh"},H={class:"bg-black/80 min-h-100vh"},M={key:0},O={class:"flex flex-col-reverse md:flex-col-reverse gap-8 p-4"},A={class:""},J=e("h3",{class:"mt-0 text-2xl text-opacity-90 v-text-base my-0"},[e("span",{class:"text-white/33"},"// "),_("Tools & Technologies ")],-1),K={class:"flex flex-wrap gap-2 py-4 text-sm"},P=e("h3",{class:"mt-0 text-2xl text-opacity-90 v-text-base my-0"},[e("span",{class:"text-white/33"},"// "),_("Objective ")],-1),Q=e("h3",{class:"mt-0 text-2xl text-opacity-90 v-text-base my-0"},[e("span",{class:"text-white/33"},"// "),_("Details ")],-1),W={key:0},X=e("h3",{class:"mt-0 text-2xl text-opacity-90 v-text-base my-0"},[e("span",{class:"text-white/33"},"// "),_("Links ")],-1),Y={key:1,class:"h-8 w-8 i-mdi-link"},Z={class:"underline-none"},le=C({__name:"[projectname]",setup(y){const l=B().params.projectname,n=D(()=>$.find(d=>d.url===l));return(d,k)=>{const h=I,r=N,b=q,x=U;return t(),s("div",E,[e("div",H,[c(n)?(t(),s("div",M,[v(x,null,{default:g(()=>[v(h,null,{default:g(()=>[_(u(c(n).projectTitle),1)]),_:1}),e("div",O,[e("div",A,[J,e("div",K,[(t(!0),s(m,null,p(c(n).tech,(o,a)=>(t(),s("div",{key:a,class:"glass-3 p-x-3 py-1 rounded-full text-white/50"},u(o),1))),128))]),P,(t(!0),s(m,null,p(c(n).objectiveDetails,(o,a)=>(t(),s("p",{key:a,class:"opacity-80"},u(o),1))),128)),Q,(t(!0),s(m,null,p(c(n).projectDetails,(o,a)=>(t(),s("p",{key:a,class:"opacity-80"},u(o),1))),128)),c(n).links?(t(),s("div",W,[X,(t(!0),s(m,null,p(c(n).links,(o,a)=>(t(),S(r,{key:a,href:o.url,target:"_blank",class:"opacity-80 flex py-2 mt-4 underline-none text-white/80 gap-2 items-center hover:border-white hover:border-solid rounded-md border-solid px-2"},{default:g(()=>[o.icon?(t(),s("span",{key:0,class:j([o.icon,"h-8 w-8"])},null,2)):(t(),s("span",Y)),e("span",Z,u(o.desc),1)]),_:2},1032,["href"]))),128))])):f("",!0)]),e("div",null,[v(b,{"img-urls":c(n).images,"child-css":""},null,8,["img-urls"])])])]),_:1})])):f("",!0)])])}}});export{le as default};