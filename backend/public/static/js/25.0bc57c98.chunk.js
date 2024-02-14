"use strict";(self.webpackChunkThe_Gram=self.webpackChunkThe_Gram||[]).push([[25],{9025:function(e,r,a){a.r(r),a.d(r,{default:function(){return z}});var t=a(4942),l=a(1413),s=a(9439),n=a(2791),i=a(9913),o=a(1087),c=a(9616),u=a(3366),m=a(7462),d=a(8182),f=a(767),g=a(9553),h=a(551),v=a(9201),p=a(184),x=(0,v.Z)((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),b=a(5159);function w(e){return(0,b.Z)("MuiAvatar",e)}(0,a(208).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var y=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],j=(0,g.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var a=e.ownerState;return[r.root,r[a.variant],a.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,a=e.ownerState;return(0,m.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===a.variant&&{borderRadius:r.shape.borderRadius},"square"===a.variant&&{borderRadius:0},a.colorDefault&&{color:r.palette.background.default,backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]})})),Z=(0,g.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),N=(0,g.ZP)(x,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var S=n.forwardRef((function(e,r){var a=(0,h.Z)({props:e,name:"MuiAvatar"}),t=a.alt,l=a.children,i=a.className,o=a.component,c=void 0===o?"div":o,g=a.imgProps,v=a.sizes,x=a.src,b=a.srcSet,S=a.variant,k=void 0===S?"circular":S,A=(0,u.Z)(a,y),P=null,R=function(e){var r=e.crossOrigin,a=e.referrerPolicy,t=e.src,l=e.srcSet,i=n.useState(!1),o=(0,s.Z)(i,2),c=o[0],u=o[1];return n.useEffect((function(){if(t||l){u(!1);var e=!0,s=new Image;return s.onload=function(){e&&u("loaded")},s.onerror=function(){e&&u("error")},s.crossOrigin=r,s.referrerPolicy=a,s.src=t,l&&(s.srcset=l),function(){e=!1}}}),[r,a,t,l]),c}((0,m.Z)({},g,{src:x,srcSet:b})),z=x||b,D=z&&"error"!==R,C=(0,m.Z)({},a,{colorDefault:!D,component:c,variant:k}),F=function(e){var r=e.classes,a={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,f.Z)(a,w,r)}(C);return P=D?(0,p.jsx)(Z,(0,m.Z)({alt:t,src:x,srcSet:b,sizes:v,ownerState:C,className:F.img},g)):null!=l?l:z&&t?t[0]:(0,p.jsx)(N,{className:F.fallback}),(0,p.jsx)(j,(0,m.Z)({as:c,ownerState:C,className:(0,d.Z)(F.root,i),ref:r},A,{children:P}))})),k=a(6030),A=a(6960),P=a(7689),R=a(3671),z=function(){var e=(0,k.I0)(),r=(0,c.s0)(),a=(0,k.v9)((function(e){return e.user})),u=a.loading,m=a.isAuthenticated,d=a.error,f=(0,n.useState)({email:"",name:"",username:"",password:""}),g=(0,s.Z)(f,2),h=g[0],v=g[1],x=h.email,b=h.name,w=h.username,y=h.password,j=(0,n.useState)(),Z=(0,s.Z)(j,2),N=Z[0],z=Z[1],D=(0,n.useState)(),C=(0,s.Z)(D,2),F=C[0],M=C[1],q=function(e){if("avatar"===e.target.name){var r=new FileReader;r.onload=function(){2===r.readyState&&M(r.result)},r.readAsDataURL(e.target.files[0]),z(e.target.files[0])}else v((0,l.Z)((0,l.Z)({},h),{},(0,t.Z)({},e.target.name,e.target.value)))};return(0,n.useEffect)((function(){d&&(A.Am.error(d),e((0,P.b9)())),m&&r("/")}),[e,d,m,r]),(0,p.jsxs)(p.Fragment,{children:[u&&(0,p.jsx)(R.Z,{}),(0,p.jsx)("div",{className:"flex items-center justify-center h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 pattern-subtle",children:(0,p.jsxs)("div",{className:"w-full max-w-xs bg-gradient-to-br from-white to-gray-100 flex flex-col gap-2 p-6 pt-12 shadow-inner rounded-xl border border-gray-200",children:[(0,p.jsx)("h1",{className:"text-black font-medium w-full text-2xl text-center",children:"Member Signup"}),(0,p.jsxs)("form",{onSubmit:function(r){r.preventDefault();if(y.length<8)A.Am.error("Password length must be atleast 8 characters");else if(N)if(/^[a-z0-9_.-]{6,25}$/gim.test(w)){var a=new FormData;a.set("email",x),a.set("name",b),a.set("username",w),a.set("password",y),a.set("avatar",N),e((0,P.a$)(a))}else A.Am.error("Invalid Username");else A.Am.error("Select Profile Pic")},encType:"multipart/form-data",className:"flex flex-col justify-center items-center gap-3 m-3 md:m-8",children:[(0,p.jsx)(i.Z,{fullWidth:!0,label:"Email",type:"email",className:"bg-white",name:"email",value:x,onChange:q,required:!0,size:"small"}),(0,p.jsx)(i.Z,{fullWidth:!0,label:"Full Name",className:"bg-white",name:"name",value:b,onChange:q,required:!0,size:"small"}),(0,p.jsx)(i.Z,{label:"Username",type:"text",name:"username",className:"bg-white",value:w,onChange:q,size:"small",required:!0,fullWidth:!0}),(0,p.jsx)(i.Z,{label:"Password",type:"password",className:"bg-white",name:"password",value:y,onChange:q,required:!0,size:"small",fullWidth:!0}),(0,p.jsxs)("div",{className:"flex w-full justify-between gap-3 items-center",children:[(0,p.jsx)(S,{alt:"Avatar Preview",src:F,sx:{width:48,height:48}}),(0,p.jsx)("label",{children:(0,p.jsx)("input",{type:"file",accept:"image/*",name:"avatar",onChange:q,className:"block w-full text-sm text-gray-400 file:mr-3 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:cursor-pointer file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 "})})]}),(0,p.jsx)("button",{type:"submit",className:"bg-primary-blue font-medium py-2 rounded text-white w-full",children:"Sign up"}),(0,p.jsx)("span",{className:" text-gray-500",children:"OR"}),(0,p.jsx)(o.rU,{to:"/password/forgot",className:"text-sm font-medium  text-blue-800",children:"Forgot password?"}),(0,p.jsx)("div",{className:"text-center",children:(0,p.jsxs)("span",{children:["Already have an account?"," ",(0,p.jsx)(o.rU,{to:"/login",className:"text-primary-blue",children:"Log in"})]})})]}),(0,p.jsx)("div",{className:"ribbon-top",children:"\ud83c\udf80"})]})})]})}}}]);
//# sourceMappingURL=25.0bc57c98.chunk.js.map