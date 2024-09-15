(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[686],{8206:function(e,t,r){Promise.resolve().then(r.bind(r,4084))},4084:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var s=r(7437),n=r(2265);function a(){return(0,s.jsx)("div",{className:"flex items-center justify-center w-screen h-screen bg-[#3b3b3b] flex-col",children:(0,s.jsx)("h1",{className:"text-2xl font-bold text-white",children:"\uD83D\uDC68\uD83C\uDFFD‍\uD83C\uDF73 Cheffing your recipes.. \uD83D\uDC68\uD83C\uDFFD‍\uD83C\uDF73"})})}let l=e=>{let{isOpen:t,onClose:r,children:n}=e;return t?(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center",children:(0,s.jsxs)("div",{className:"bg-white p-6 rounded-lg max-w-md w-full",children:[n,(0,s.jsx)("button",{className:"mt-4 bg-[#861F41] text-white px-4 py-2 rounded hover:bg-[#6e1a36]",onClick:r,children:"Close"})]})}):null};var o=e=>{let{response:t}=e,[r,a]=(0,n.useState)(!1),[o,i]=(0,n.useState)(null),c=e=>{i(e),a(!0)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"grid grid-rows-3 gap-4 bg-[#3b3b3b] pt-10 min-h-screen",children:t.map((e,t)=>(0,s.jsx)("div",{className:"border p-4 cursor-pointer bg-[#861F41] text-white rounded-xl",onClick:()=>c(e),children:(0,s.jsx)("h2",{className:"font-bold text-lg",children:e.name})},t))}),(0,s.jsxs)(l,{isOpen:r,onClose:()=>a(!1),children:[(0,s.jsx)("h2",{className:"text-xl font-bold mb-2 text-black max-h-screen overflow-auto",children:null==o?void 0:o.name}),(0,s.jsx)("p",{className:"whitespace-break-spaces text-black",children:null==o?void 0:o.content})]})]})};function i(){return(0,s.jsx)("div",{className:"w-full h-full bg-[#3b3b3b]",children:(0,s.jsx)("h1",{className:"text-3xl font-bold m-auto text-[#861F41]",children:"There was an error retrieving your recipes :("})})}var c=()=>{let[e,t]=(0,n.useState)(!1),[r,l]=(0,n.useState)([]),[c,u]=(0,n.useState)(!1),d=(0,n.useCallback)(e=>{t(!1),u(!1),fetch("http://recipe-ai-1726371321357.azurewebsites.net/api/v1/recipes/generateFull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>{if(!e.ok)throw Error("Network response was not ok "+e.statusText);return e.json()}).then(e=>{if(console.log(e),Array.isArray(e))e.forEach(e=>{console.log("Recipe Name: ".concat(e.name)),console.log("Content: ".concat(e.content))}),l(e);else throw console.error("Received data is not an array:",e),Error("Received data is not in the expected format")}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)}).finally(()=>{t(!0)})},[]);return((0,n.useEffect)(()=>{d({spices:JSON.parse(localStorage.getItem("spices_string")||"[]"),dietRestrictions:JSON.parse(localStorage.getItem("diets_string")||"[]"),preferences:JSON.parse(localStorage.getItem("health_string")||"[]"),ingredients:JSON.parse(localStorage.getItem("ings_string")||"[]")})},[d]),e)?c?(0,s.jsx)(i,{}):(0,s.jsx)(o,{response:r}):(0,s.jsx)(a,{})};function u(){return(0,s.jsx)(c,{})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=8206)}),_N_E=e.O()}]);