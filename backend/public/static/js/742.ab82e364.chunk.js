"use strict";(self.webpackChunkThe_Gram=self.webpackChunkThe_Gram||[]).push([[742],{6742:function(e,t,s){s.r(t),s.d(t,{default:function(){return I}});var n=s(1413),r=s(9439),a=s(2791),c=s(6030),l=s(6960),i=s(2129),o=s(1139),u=s(295),m=s(5861),x=s(7757),f=s.n(x),d=s(1087),h=s(4487),p=s(4588),j=s(8950),v=s(7455),g=s(4569),b=s.n(g),N=s(2426),w=s.n(N),y=s(184),Z=function(e){var t=e._id,s=e.caption,n=e.likes,l=e.comments,o=e.image,u=e.postedBy,x=e.savedBy,g=e.createdAt,N=e.setUsersDialog,Z=e.setUsersList,k=(0,c.I0)(),A=(0,a.useRef)(null),C=(0,c.v9)((function(e){return e.user})).user,S=(0,a.useState)(n),U=(0,r.Z)(S,2),_=U[0],E=U[1],P=(0,a.useState)(l),T=(0,r.Z)(P,2),L=T[0],F=T[1],I=(0,a.useState)(x),D=(0,r.Z)(I,2),G=D[0],B=D[1],H=(0,a.useState)(!1),Y=(0,r.Z)(H,2),z=Y[0],J=Y[1],M=(0,a.useState)(!1),O=(0,r.Z)(M,2),V=O[0],q=O[1],R=(0,a.useState)(""),W=(0,r.Z)(R,2),X=W[0],K=W[1],Q=(0,a.useState)(!1),$=(0,r.Z)(Q,2),ee=$[0],te=$[1],se=(0,a.useState)(!1),ne=(0,r.Z)(se,2),re=ne[0],ae=ne[1],ce=(0,a.useState)(!1),le=(0,r.Z)(ce,2),ie=le[0],oe=le[1],ue=function(){var e=(0,m.Z)(f().mark((function e(){var s,n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J(!z),e.next=3,k((0,i.n9)(t));case 3:return e.next=5,b().get("/api/v1/post/detail/".concat(t));case 5:s=e.sent,n=s.data,E(n.post.likes);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=(0,m.Z)(f().mark((function e(s){var n,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,k((0,i.Ir)(t,X));case 3:return K(""),e.next=6,b().get("/api/v1/post/detail/".concat(t));case 6:n=e.sent,r=n.data,F(r.post.comments);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=(0,m.Z)(f().mark((function e(){var s,n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(!V),e.next=3,k((0,i.TJ)(t));case 3:return e.next=5,b().get("/api/v1/post/detail/".concat(t));case 5:s=e.sent,n=s.data,B(n.post.savedBy);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){J(_.some((function(e){return e._id===C._id})))}),[_]),(0,a.useEffect)((function(){q(G.some((function(e){return e===C._id})))}),[G]),(0,y.jsxs)("div",{className:"flex flex-col border rounded bg-white relative",children:[(0,y.jsxs)("div",{className:"flex justify-between px-3 py-2.5 border-b items-center",children:[(0,y.jsxs)("div",{className:"flex space-x-3 items-center",children:[(0,y.jsx)(d.rU,{to:"/".concat(u.username),children:(0,y.jsx)("img",{draggable:"false",className:"w-10 h-10 rounded-full object-cover",src:u.avatar,alt:"avatar"})}),(0,y.jsx)(d.rU,{to:"/".concat(u.username),className:"text-black text-sm font-semibold",children:u.username})]}),(0,y.jsx)("span",{className:"cursor-pointer",children:p.hf})]}),(0,y.jsxs)("div",{className:"relative flex items-center justify-center",onDoubleClick:function(){oe(!0),setTimeout((function(){oe(!1)}),500),z||ue()},children:[(0,y.jsx)("img",{draggable:"false",loading:"lazy",className:"w-full h-full object-cover object-center",src:o,alt:"post image"}),ie&&(0,y.jsx)("img",{draggable:"false",height:"80px",className:"likeEffect",alt:"heart",src:"https://img.icons8.com/ios-filled/2x/ffffff/like.png"})]}),(0,y.jsxs)("div",{className:"flex flex-col px-4 space-y-1 border-b pb-2 mt-2",children:[(0,y.jsxs)("div",{className:"flex items-center justify-between py-2",children:[(0,y.jsxs)("div",{className:"flex space-x-4",children:[(0,y.jsx)("button",{onClick:ue,children:z?h.Uw:p.XO}),(0,y.jsx)("button",{onClick:function(){return A.current.focus()},children:p.CN}),p.Si]}),(0,y.jsx)("button",{onClick:xe,children:V?p.wM:p.x0})]}),(0,y.jsxs)("span",{onClick:function(){N(!0),Z(_)},className:"font-semibold text-sm cursor-pointer",children:[_.length," likes"]}),(0,y.jsxs)("div",{className:"flex flex-auto items-center space-x-1",children:[(0,y.jsx)(d.rU,{to:"/".concat(u.username),className:"text-sm font-semibold hover:underline",children:u.username}),(0,y.jsx)("span",{className:"text-sm truncate",children:s})]}),L.length>0?(0,y.jsx)("span",{onClick:function(){return te(!ee)},className:"text-[13px] text-gray-500 cursor-pointer",children:ee?"Hide Comments":1===L.length?"View ".concat(L.length," Comment"):"View All ".concat(L.length," Comments")}):(0,y.jsx)("span",{className:"text-[13px] text-gray-500",children:"No Comments Yet!"}),(0,y.jsx)("span",{className:"text-xs text-gray-500 cursor-pointer",children:w()(g).fromNow()}),ee&&(0,y.jsx)(v.ZP,{className:"w-full h-52 overflow-y-auto py-1",children:L.map((function(e){return(0,y.jsxs)("div",{className:"flex items-start mb-2 space-x-2",children:[(0,y.jsx)("img",{draggable:"false",className:"h-7 w-7 rounded-full object-cover mr-0.5",src:e.user.avatar,alt:"avatar"}),(0,y.jsx)(d.rU,{to:"/".concat(e.user),className:"text-sm font-semibold hover:underline",children:e.user.username}),(0,y.jsx)("p",{className:"text-sm",children:e.comment})]},e._id)}))})]}),(0,y.jsxs)("form",{onSubmit:me,className:"flex items-center justify-between p-3 w-full space-x-3",children:[(0,y.jsx)("span",{onClick:function(){return ae(!re)},className:"cursor-pointer",children:p._1}),re&&(0,y.jsx)("div",{className:"absolute bottom-12 -left-2",children:(0,y.jsx)(j.cW,{set:"google",onSelect:function(e){return K(X+e.native)},title:"Emojis"})}),(0,y.jsx)("input",{className:"flex-auto text-sm outline-none border-none bg-transparent",type:"text",value:X,ref:A,required:!0,onFocus:function(){return ae(!1)},onChange:function(e){return K(e.target.value)},placeholder:"Add a comment..."}),(0,y.jsx)("button",{type:"submit",className:"".concat(X.trim().length<1?"text-blue-300":"text-primary-blue"," text-sm font-semibold"),disabled:X.trim().length<1,children:"Post"})]})]})},k=s(4771),A=s(3356),C=s(7047),S=function(){return(0,y.jsxs)("div",{className:"flex flex-col border w-full my-4 rounded bg-white",children:[(0,y.jsxs)("div",{className:"flex items-center gap-2 p-2",children:[(0,y.jsx)(C.Z,{animation:"wave",variant:"circular",width:40,height:40}),(0,y.jsxs)("div",{className:"flex flex-col gap-1 w-full",children:[(0,y.jsx)(C.Z,{height:10,variant:"rectangular",width:"25%",animation:"wave"}),(0,y.jsx)(C.Z,{height:10,variant:"rectangular",width:"20%",animation:"wave"})]})]}),(0,y.jsx)(C.Z,{sx:{height:520},animation:"wave",variant:"rectangular"})]})},U=function(){var e=(0,c.I0)(),t=(0,a.useState)([]),s=(0,r.Z)(t,2),m=s[0],x=s[1],f=(0,a.useState)(!1),d=(0,r.Z)(f,2),h=d[0],p=d[1],j=(0,a.useState)(2),v=(0,r.Z)(j,2),g=v[0],b=v[1],N=(0,c.v9)((function(e){return e.postOfFollowing})),w=N.loading,C=N.error,U=N.posts,_=N.totalPosts,E=(0,c.v9)((function(e){return e.likePost})),P=E.error,T=E.message,L=E.success,F=(0,c.v9)((function(e){return e.newComment})),I=F.error,D=F.success,G=(0,c.v9)((function(e){return e.savePost})),B=G.error,H=G.success,Y=G.message;(0,a.useEffect)((function(){C&&(l.Am.error(C),e((0,i.b9)())),e((0,i.xm)()),e({type:o.T_})}),[e,C]),(0,a.useEffect)((function(){P&&(l.Am.error(P),e((0,i.b9)())),L&&(l.Am.success(T),e({type:o.c2})),I&&(l.Am.error(I),e((0,i.b9)())),D&&(l.Am.success("Comment Added"),e({type:o.j4})),B&&(l.Am.error(B),e((0,i.b9)())),H&&(l.Am.success(Y),e({type:o.Y9}))}),[e,L,P,T,I,D,B,H,Y]);return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("div",{className:"flex flex-col w-full lg:w-2/3 sm:mt-6 sm:px-8 mb-8",children:[w&&Array(5).fill("").map((function(e,t){return(0,y.jsx)(S,{},t)})),(0,y.jsx)(k.Z,{dataLength:U.length,next:function(){b((function(e){return e+1})),e((0,i.xm)(g))},hasMore:U.length!==_,loader:(0,y.jsx)(A.Z,{}),children:(0,y.jsx)("div",{className:"w-full h-full mt-1 sm:mt-6 flex flex-col space-y-4",children:null===U||void 0===U?void 0:U.map((function(e){return(0,y.jsx)(Z,(0,n.Z)((0,n.Z)({},e),{},{setUsersDialog:p,setUsersList:x}),e._id)}))})}),(0,y.jsx)(u.Z,{title:"Likes",open:h,onClose:function(){return p(!1)},usersList:m})]})})},_=s(7689),E=s(8278),P=s(6503),T=function(e){var t=e._id,s=e.username,n=e.avatar,l=(0,c.I0)(),i=(0,a.useState)(!1),o=(0,r.Z)(i,2),u=o[0],m=o[1];return(0,y.jsxs)("div",{className:"flex justify-between items-center",children:[(0,y.jsxs)("div",{className:"flex space-x-3 items-center",children:[(0,y.jsx)(d.rU,{to:"/".concat(s),children:(0,y.jsx)("img",{draggable:"false",className:"w-9 h-9 rounded-full object-cover",src:n,alt:"avatar"})}),(0,y.jsxs)("div",{className:"flex flex-col gap-0.5",children:[(0,y.jsx)(d.rU,{to:"/".concat(s),className:"text-black text-sm font-semibold hover:underline",children:s}),(0,y.jsx)("span",{className:"text-gray-400 text-xs",children:"New to The Gram"})]})]}),(0,y.jsx)("button",{onClick:function(){m(!u),l((0,_.P_)(t))},className:"".concat(u?"text-red-500":"text-blue-500"," text-xs font-medium"),children:u?"Unfollow":"Follow"})]})},L=function(){var e=(0,c.I0)(),t=(0,c.v9)((function(e){return e.user})).user,s=(0,c.v9)((function(e){return e.allUsers})),r=s.error,i=s.users,o=s.loading,u=(0,c.v9)((function(e){return e.followUser})),m=u.error,x=u.success,f=u.message;return(0,a.useEffect)((function(){r&&(l.Am.error(r),e((0,_.b9)())),e((0,_.mf)())}),[e,r]),(0,a.useEffect)((function(){m&&(l.Am.error(m),e((0,_.b9)())),x&&(l.Am.success(f),e({type:E.y9}))}),[x,m]),(0,y.jsx)("div",{className:"fixed lg:right-32 xl:right-56 w-3/12 h-full hidden lg:flex flex-col flex-auto m-8 mt-12 pr-8 -z-1",children:(0,y.jsxs)("div",{className:"ml-10 flex flex-col p-2",children:[(0,y.jsxs)("div",{className:"flex justify-between items-center",children:[(0,y.jsxs)("div",{className:"flex flex-auto space-x-4 items-center",children:[(0,y.jsx)(d.rU,{to:"/".concat(t.username),children:(0,y.jsx)("img",{draggable:"false",className:"w-14 h-14 rounded-full object-cover",src:t.avatar,alt:t.name})}),(0,y.jsxs)("div",{className:"flex flex-col",children:[(0,y.jsx)(d.rU,{to:"/".concat(t.username),className:"text-black text-sm font-semibold",children:t.username}),(0,y.jsx)("span",{className:"text-gray-400 text-sm",children:t.name})]})]}),(0,y.jsx)("span",{className:"text-blue-500 text-xs font-semibold cursor-pointer",children:"Switch"})]}),(0,y.jsxs)("div",{className:"flex justify-between items-center mt-5",children:[(0,y.jsx)("p",{className:"font-semibold text-gray-500 text-sm",children:"Suggestions For You"}),(0,y.jsx)("span",{className:"text-black text-xs font-semibold cursor-pointer",children:"See All"})]}),(0,y.jsx)("div",{className:"flex flex-col flex-auto mt-3 space-y-3.5",children:o?Array(5).fill("").map((function(e,t){return(0,y.jsx)(P.Z,{},t)})):null===i||void 0===i?void 0:i.map((function(e){return(0,a.createElement)(T,(0,n.Z)((0,n.Z)({},e),{},{key:e._id}))}))}),(0,y.jsx)("div",{className:"flex flex-col mt-8 space-y-6 text-xs text-gray-400",children:(0,y.jsxs)("div",{className:"flex flex-col",children:[(0,y.jsx)("div",{className:"flex items-center space-x-1.5",children:["About","Help","Press","API","Jobs","Privacy","Terms","Locations"].map((function(e,t){return(0,y.jsx)("a",{href:"#",children:e},t)}))}),(0,y.jsx)("div",{className:"flex items-center space-x-1.5",children:["Top Accounts","Hashtags","Language"].map((function(e,t){return(0,y.jsx)("a",{href:"#",children:e},t)}))})]})})]})})},F=s(6038),I=function(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(F.Z,{title:"The Gram"}),(0,y.jsxs)("div",{className:"flex h-full md:w-4/5 lg:w-4/6 mt-14 mx-auto",children:[(0,y.jsx)(U,{}),(0,y.jsx)(L,{})]})]})}},6503:function(e,t,s){var n=s(7047),r=s(184);t.Z=function(){return(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(n.Z,{animation:"wave",variant:"circular",width:45,height:40}),(0,r.jsxs)("div",{className:"flex flex-col gap-1 w-full",children:[(0,r.jsx)(n.Z,{height:15,variant:"rectangular",width:"60%",animation:"wave"}),(0,r.jsx)(n.Z,{height:12,variant:"rectangular",width:"30%",animation:"wave"})]})]})}}}]);
//# sourceMappingURL=742.ab82e364.chunk.js.map