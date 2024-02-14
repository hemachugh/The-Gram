"use strict";(self.webpackChunkThe_Gram=self.webpackChunkThe_Gram||[]).push([[217],{1217:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var s=n(1413),r=n(9439),a=n(2791),i=n(6030),l=n(1087),o=n(9616),c=n(6960),u=n(5861),d=n(7757),f=n.n(d),x=n(4569),m=n.n(x),h=n(5195),p=function(e){return function(){var t=(0,u.Z)(f().mark((function t(n){var s,r,a;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:h.vn}),s={header:{"Content-Type":"application/json"}},t.next=5,m().post("/api/v1/newMessage/",e,s);case 5:r=t.sent,a=r.data,n({type:h.Ci,payload:a}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:h.qh,payload:t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},v=n(7689),g="https://the-gram12-695e6e1c94da.herokuapp.com",j=n(6346),w=n(1006),y=n(184),N=function(e){var t=e._id,n=e.users,s=e.latestMessage,c=((0,i.I0)(),(0,o.UO)()),u=(0,a.useState)({}),d=(0,r.Z)(u,2),f=d[0],x=d[1],m=(0,a.useRef)(null),h=(0,a.useState)(!1),p=(0,r.Z)(h,2),v=p[0],j=p[1],N=(0,i.v9)((function(e){return e.user})).user;return(0,a.useEffect)((function(){var e=n.find((function(e){return e._id!==N._id}));x(e)}),[n]),(0,a.useEffect)((function(){m.current=(0,w.io)(g)}),[]),(0,a.useEffect)((function(){m.current.on("getUsers",(function(e){j(e.some((function(e){return e.userId===f._id})))}))}),[f._id]),(0,y.jsxs)(l.rU,{to:"/direct/t/".concat(t,"/").concat(f._id),className:"".concat(c.chatId===t&&"bg-gray-100"," flex gap-3 items-center py-2 px-4 cursor-pointer hover:bg-gray-100"),children:[(0,y.jsxs)("div",{className:"w-14 h-14 relative",children:[(0,y.jsx)("img",{draggable:"false",className:"w-full h-full rounded-full object-cover",src:f.avatar,alt:"avatar"}),v&&(0,y.jsx)("div",{className:"absolute right-0 bottom-0.5 h-3 w-3 bg-green-500 rounded-full"})]}),(0,y.jsxs)("div",{className:"flex flex-col items-start",children:[(0,y.jsx)("span",{className:"text-sm",children:f.name}),(0,y.jsx)("span",{className:"text-sm truncate w-36 text-gray-400",children:null===s||void 0===s?void 0:s.content})]})]})},b=(n(6503),function(e){var t=e.openModal,n=(e.socket,(0,i.I0)()),r=(0,o.UO)(),l=(0,i.v9)((function(e){return e.user})).user,u=(0,i.v9)((function(e){return e.allChats})),d=(u.loading,u.error),f=u.chats;return(0,a.useEffect)((function(){d&&(c.Am.error(d),n((0,j.b9)())),n((0,j.BB)())}),[n,d,r.chatId]),(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("div",{className:"hidden sm:flex flex-col h-full w-2/6 border-r",children:[(0,y.jsxs)("div",{className:"flex items-center justify-between border-b p-4",children:[(0,y.jsx)("span",{className:"mx-auto font-medium cursor-pointer",children:l.username}),(0,y.jsxs)("svg",{onClick:t,className:"cursor-pointer","aria-label":"New Message",color:"#262626",fill:"#262626",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[(0,y.jsx)("path",{d:"M12.202 3.203H5.25a3 3 0 00-3 3V18.75a3 3 0 003 3h12.547a3 3 0 003-3v-6.952",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),(0,y.jsx)("path",{d:"M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 012.004 0l1.224 1.225a1.417 1.417 0 010 2.004z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),(0,y.jsx)("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"16.848",x2:"20.076",y1:"3.924",y2:"7.153"})]})]}),(0,y.jsxs)("div",{className:"flex flex-col overflow-y-auto overflow-x-hidden",children:[(0,y.jsx)("span",{className:"px-4 py-2 font-medium",children:"Messages"}),null===f||void 0===f?void 0:f.map((function(e){return(0,a.createElement)(N,(0,s.Z)((0,s.Z)({},e),{},{key:e._id}))}))]})]})})}),k=function(e){var t=e.ownMsg,n=e.avatar,s=e.content;return t?"\u2764\ufe0f"===s?(0,y.jsx)("span",{className:"self-end text-4xl",children:s}):(0,y.jsx)("span",{className:"self-end text-sm text-white bg-violet-600 px-4 py-3 rounded-3xl max-w-xs",children:s}):"\u2764\ufe0f"===s?(0,y.jsxs)("div",{className:"flex items-end gap-2 max-w-xs",children:[(0,y.jsx)("img",{draggable:"false",className:"w-7 h-7 rounded-full object-cover",src:n,alt:"avatar"}),(0,y.jsx)("span",{className:"items-end text-4xl",children:s})]}):(0,y.jsxs)("div",{className:"flex items-end gap-2 max-w-xs",children:[(0,y.jsx)("img",{draggable:"false",className:"w-7 h-7 rounded-full object-cover",src:n,alt:"avatar"}),(0,y.jsx)("span",{className:"px-4 py-3 text-sm bg-gray-200 rounded-3xl max-w-xs overflow-hidden",children:s})]})},Z=n(8950),C=n(9818),I=n(9283),M=n(7047),_=function(e){var t=e.open,n=e.onClose,s=(0,i.I0)(),l=(0,o.s0)(),d=(0,a.useState)([]),x=(0,r.Z)(d,2),h=x[0],p=x[1],v=(0,a.useState)(""),g=(0,r.Z)(v,2),w=g[0],N=g[1],b=(0,a.useState)(!1),k=(0,r.Z)(b,2),Z=k[0],_=k[1],S=(0,i.v9)((function(e){return e.user})).user,L=(0,i.v9)((function(e){return e.newChat})),E=L.error,z=L.chat,U=function(){var e=(0,u.Z)(f().mark((function e(t){var n,s;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.next=3,m().get("/api/v1/users?keyword=".concat(t));case 3:n=e.sent,s=n.data,p(s.users.filter((function(e){return e._id!==S._id}))),_(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){return w.trim().length>0&&U(w),function(){p([])}}),[w]);return(0,a.useEffect)((function(){if(E&&(c.Am.error(E),s((0,j.b9)())),z){var e,t=null===(e=z.users)||void 0===e?void 0:e.find((function(e){return e!==S._id}));l("/direct/t/".concat(z._id,"/").concat(t)),s({type:I.X0}),n()}}),[s,E,z,l]),(0,y.jsx)(C.Z,{open:t,onClose:n,children:(0,y.jsxs)("div",{className:"flex flex-col w-80 sm:w-96",children:[(0,y.jsxs)("div",{className:"flex justify-between items-center px-4 border-b py-2.5",children:[(0,y.jsx)("span",{className:"font-medium mx-auto",children:"New Message"}),(0,y.jsxs)("svg",{onClick:n,className:"cursor-pointer","aria-label":"Close",color:"#262626",fill:"#262626",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[(0,y.jsx)("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"3",y2:"21"}),(0,y.jsx)("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"21",y2:"3"})]})]}),(0,y.jsxs)("div",{className:"flex items-center gap-3 border-b p-3",children:[(0,y.jsx)("span",{className:"font-medium",children:"To:"}),(0,y.jsx)("input",{className:"outline-none w-full",type:"text",placeholder:"Search User..",value:w,onChange:function(e){return N(e.target.value)}})]}),(0,y.jsx)("div",{className:"flex flex-col overflow-x-hidden h-96 w-full",children:Z?Array(8).fill("").map((function(e,t){return(0,y.jsxs)("div",{className:"flex items-center gap-2 py-2 px-4",children:[(0,y.jsx)(M.Z,{animation:"wave",variant:"circular",width:60,height:50}),(0,y.jsxs)("div",{className:"flex flex-col gap-0 w-full",children:[(0,y.jsx)(M.Z,{height:23,width:"45%",animation:"wave"}),(0,y.jsx)(M.Z,{height:23,width:"30%",animation:"wave"})]})]},t)})):h.length>0?h.map((function(e){return(0,y.jsx)("div",{onClick:function(){return t=e._id,s((0,j.rz)(t)),void N("");var t},className:"flex items-center hover:bg-gray-50 py-2 px-4 cursor-pointer",children:(0,y.jsxs)("div",{className:"flex space-x-3 items-center",children:[(0,y.jsx)("img",{draggable:"false",className:"w-11 h-11 rounded-full object-cover",src:e.avatar,alt:"avatar"}),(0,y.jsxs)("div",{className:"flex flex-col items-start",children:[(0,y.jsx)("span",{className:"text-black text-sm font-semibold",children:e.username}),(0,y.jsx)("span",{className:"text-gray-400 text-sm",children:e.name})]})]})},e._id)})):(0,y.jsx)("span",{className:"text-gray-400 text-sm p-2",children:"No accounts found."})})]})})},S=n(3356),L=n(6038),E=n(8278),z=function(){var e=(0,i.I0)(),t=(0,o.UO)(),n=(0,a.useState)(""),d=(0,r.Z)(n,2),x=d[0],j=d[1],N=(0,a.useState)(null),C=(0,r.Z)(N,2),I=C[0],M=C[1],z=(0,a.useRef)(null),U=(0,a.useRef)(null),W=(0,a.useState)(!1),A=(0,r.Z)(W,2),B=A[0],T=A[1],F=(0,a.useState)(!1),D=(0,r.Z)(F,2),R=D[0],G=D[1],O=(0,a.useState)({}),V=(0,r.Z)(O,2),q=V[0],H=V[1],J=(0,a.useState)(!1),Q=(0,r.Z)(J,2),X=Q[0],Y=Q[1],$=(0,a.useState)(!1),K=(0,r.Z)($,2),P=K[0],ee=K[1],te=(0,a.useState)(!1),ne=(0,r.Z)(te,2),se=ne[0],re=ne[1],ae=(0,i.v9)((function(e){return e.user})).user,ie=(0,i.v9)((function(e){return e.userDetails})).user,le=(0,i.v9)((function(e){return e.allMessages})),oe=le.error,ce=le.messages,ue=le.loading,de=(0,i.v9)((function(e){return e.newMessage})),fe=de.success,xe=de.newMessage,me=t.userId;(0,a.useEffect)((function(){U.current=(0,w.io)(g),U.current.on("getMessage",(function(e){M({sender:e.senderId,content:e.content,createdAt:Date.now()})})),U.current.on("typing",(function(e){H({senderId:e,typing:!0})})),U.current.on("typing stop",(function(e){H({senderId:e,typing:!1})}))}),[]),(0,a.useEffect)((function(){q&&q.senderId===me&&G(q.typing)}),[q,me]),(0,a.useEffect)((function(){I&&I.sender===me&&e({type:h._w,payload:I})}),[I,me]),(0,a.useEffect)((function(){U.current.emit("addUser",ae._id),U.current.on("getUsers",(function(e){Y(e.some((function(e){return e.userId===me})))}))}),[ae._id,me]),(0,a.useEffect)((function(){var n;return oe&&(c.Am.error(oe),e((function(e){e({type:h.pp})}))),t.chatId&&me&&(e((n=t.chatId,function(){var e=(0,u.Z)(f().mark((function e(t){var s,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:h.hJ}),e.next=4,m().get("/api/v1/messages/".concat(n));case 4:s=e.sent,r=s.data,t({type:h.$t,payload:r.messages}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:h.MQ,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),e((0,v.uh)(me))),function(){e({type:E.uW})}}),[e,oe,t.chatId,me]),(0,a.useEffect)((function(){fe&&(e({type:h._w,payload:xe}),e({type:h.ME}))}),[e,fe]);var he=function(n){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x;n.preventDefault(),null===U||void 0===U||U.current.emit("sendMessage",{senderId:ae._id,receiverId:me,content:s});var r={chatId:t.chatId,content:s};e(p(r)),j("")};(0,a.useEffect)((function(){var e;null===(e=z.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[ce]);var pe=function(){re(!0)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(L.Z,{title:"The Gram \u2022 Chats"}),(0,y.jsxs)("div",{className:"mt-14 sm:mt-[4.7rem] pb-4 rounded h-[90vh] xl:w-2/3 mx-auto sm:pr-14 sm:pl-8",children:[(0,y.jsxs)("div",{className:"flex border h-full rounded w-full bg-white",children:[(0,y.jsx)(b,{openModal:pe}),me?(0,y.jsxs)("div",{className:"flex flex-col justify-between w-full sm:w-4/6",children:[(0,y.jsxs)("div",{className:"flex py-3 px-6 border-b items-center justify-between",children:[(0,y.jsx)(l.rU,{to:"/".concat(encodeURIComponent(ie.username)),children:(0,y.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,y.jsxs)("div",{className:"w-8 h-8 relative",children:[(0,y.jsx)("img",{draggable:"false",loading:"lazy",className:"w-full h-full rounded-full object-cover",src:ie.avatar,alt:"avatar"}),X&&(0,y.jsx)("div",{className:"absolute -right-0.5 -bottom-0.5 h-3 w-3 bg-green-500 rounded-full"})]}),(0,y.jsx)("span",{className:"font-medium cursor-pointer",children:ie.name})]})}),(0,y.jsxs)("svg",{className:"cursor-pointer","aria-label":"View Thread Details",color:"#262626",fill:"#262626",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[(0,y.jsx)("circle",{cx:"12.001",cy:"12.005",fill:"none",r:"10.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),(0,y.jsx)("circle",{cx:"11.819",cy:"7.709",r:"1.25"}),(0,y.jsx)("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"10.569",x2:"13.432",y1:"16.777",y2:"16.777"}),(0,y.jsx)("polyline",{fill:"none",points:"10.569 11.05 12 11.05 12 16.777",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})]})]}),(0,y.jsxs)("div",{className:"w-full flex-1 flex flex-col gap-1.5 overflow-y-auto overflow-x-hidden p-4",children:[ue?(0,y.jsx)(S.Z,{}):ce.map((function(e,t){return(0,y.jsxs)(a.Fragment,{children:[(0,y.jsx)(k,(0,s.Z)((0,s.Z)({ownMsg:e.sender===ae._id},ie),e)),(0,y.jsx)("div",{ref:z})]},e._id)})),R&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:"flex items-center gap-3 max-w-xs",children:[(0,y.jsx)("img",{draggable:"false",loading:"lazy",className:"w-7 h-7 rounded-full object-cover",src:ie.avatar,alt:"avatar"}),(0,y.jsx)("span",{className:"text-sm text-gray-500",children:"typing..."})]}),(0,y.jsx)("div",{ref:z})]})]}),(0,y.jsxs)("form",{onSubmit:he,className:"flex items-center gap-3 justify-between border rounded-full py-2.5 px-4 m-5 relative",children:[(0,y.jsx)("span",{onClick:function(){return ee(!P)},className:"cursor-pointer hover:opacity-60",children:(0,y.jsx)("svg",{"aria-label":"Emoji",color:"#262626",fill:"#262626",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:(0,y.jsx)("path",{d:"M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"})})}),P&&(0,y.jsx)("div",{className:"absolute bottom-14 -left-10",children:(0,y.jsx)(Z.cW,{set:"google",onSelect:function(e){return j(x+e.native)},title:"Emojis"})}),(0,y.jsx)("input",{className:"flex-1 outline-none text-sm",type:"text",placeholder:"Message...",value:x,onFocus:function(){return ee(!1)},onChange:function(e){j(e.target.value),B||(T(!0),null===U||void 0===U||U.current.emit("typing",{senderId:ae._id,receiverId:me})),setTimeout((function(){null===U||void 0===U||U.current.emit("typing stop",{senderId:ae._id,receiverId:me}),T(!1)}),2e3)},required:!0}),x.trim().length>0?(0,y.jsx)("button",{className:"text-primary-blue font-medium text-sm",children:"Send"}):(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("svg",{onClick:function(e){return he(e,"\u2764\ufe0f")},className:"hover:opacity-70 cursor-pointer","aria-label":"Like",color:"#262626",fill:"#262626",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:(0,y.jsx)("path",{d:"M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"})})})]})]}):(0,y.jsxs)("div",{className:"flex flex-col items-center justify-center w-full sm:w-4/6 gap-2",children:[(0,y.jsx)("div",{className:"w-24 h-24 flex items-center p-2 justify-center border-2 border-black rounded-full",children:(0,y.jsx)("img",{draggable:"false",loading:"lazy",className:"w-full h-full rotate-12 object-contain",src:"https://static.thenounproject.com/png/172101-200.png",alt:"message"})}),(0,y.jsx)("h2",{className:"text-2xl font-thin",children:"Your Messages"}),(0,y.jsx)("p",{className:"text-gray-400 text-sm",children:"Send private photos and messages to a friend or group."}),(0,y.jsx)("button",{onClick:pe,className:"bg-primary-blue rounded px-2.5 mt-2 py-1.5 text-white text-sm font-medium hover:drop-shadow-lg",children:"Send Message"})]})]}),(0,y.jsx)(_,{open:se,onClose:function(){re(!1)}})]})]})}},6503:function(e,t,n){var s=n(7047),r=n(184);t.Z=function(){return(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(s.Z,{animation:"wave",variant:"circular",width:45,height:40}),(0,r.jsxs)("div",{className:"flex flex-col gap-1 w-full",children:[(0,r.jsx)(s.Z,{height:15,variant:"rectangular",width:"60%",animation:"wave"}),(0,r.jsx)(s.Z,{height:12,variant:"rectangular",width:"30%",animation:"wave"})]})]})}}}]);
//# sourceMappingURL=217.d117ee92.chunk.js.map