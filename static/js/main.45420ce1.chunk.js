(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(4),a=c.n(r),o=(c(9),c(2)),i=c(0),l=function(e){var t=e.image,c=t.tags.split(",");return Object(i.jsxs)("div",{className:"max-w-sm rounded overflow-hidden shadow-lg",children:[Object(i.jsx)("img",{src:t.webformatURL,alt:"",className:"w-full"}),Object(i.jsxs)("div",{className:"px-6 py-4",children:[Object(i.jsxs)("div",{className:"font-bold text-purple-500 text-xl mb-2",children:["Photo by ",t.user]}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("strong",{children:"Views: "}),t.views]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("strong",{children:"Downloads: "}),t.downloads]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("strong",{children:"Likes: "}),t.likes]})]})]}),Object(i.jsx)("div",{className:"px-6 py-4",children:c.map((function(e,t){return Object(i.jsxs)("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text sm font-semibold text-gray-700 mr-2",children:["#",e]},t)}))})]})},d=function(e){var t=e.searchText,c=Object(n.useState)(""),s=Object(o.a)(c,2),r=s[0],a=s[1];return Object(i.jsx)("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto",children:Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(r)},className:"w-full max-w-sm",children:Object(i.jsxs)("div",{className:"flex items-center border-b border-b-2 border-teal-500 py-2",children:[Object(i.jsx)("input",{onChange:function(e){return a(e.target.value)},type:"text",className:"appearance-none bg-transparent border-none w-full text-grey-700 mr-3 py-1 px-2 leading-tight focus:outline-none",placeholder:"Search Image Term..."}),Object(i.jsx)("button",{className:"flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-bue-700 text-sm border-4 text-white py-1 px-2 rounded",type:"submit",children:"Search"})]})})})};var b=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!0),a=Object(o.a)(r,2),b=a[0],j=a[1],u=Object(n.useState)(""),x=Object(o.a)(u,2),m=x[0],h=x[1];return Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=20894532-49dbaeb67c41e6b74bdddaf0a&q=".concat(m,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){s(e.hits),j(!1)})).catch((function(e){return console.log(e)}))}),[m]),Object(i.jsxs)("div",{className:"container mx-auto",children:[Object(i.jsx)(d,{searchText:function(e){return h(e)}}),!b&&0===c.length&&Object(i.jsx)("h1",{className:"text-5xl text-center mx-auto mt-32",children:"No Images Found"}),b?Object(i.jsx)("h1",{className:"text-6xl text-center mx-auto mt-32",children:"Loading..."}):Object(i.jsx)("div",{className:"grid grid-cols-3 gap-4",children:c.map((function(e){return Object(i.jsx)(l,{image:e},e.id)}))})]})};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.45420ce1.chunk.js.map