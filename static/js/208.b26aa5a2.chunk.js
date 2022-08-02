"use strict";(self.webpackChunkartemis_ecommerce=self.webpackChunkartemis_ecommerce||[]).push([[208],{2044:function(n,e,t){t.d(e,{v:function(){return c}});var r=t(1413),a=t(4925),o=t(4942),s=(t(2791),t(6332)),i=t(184),l=["children","buttonType","isLoading"],c={base:"base",google:"google-sign-in",inverted:"inverted"};e.Z=function(n){var e=n.children,t=n.buttonType,u=n.isLoading,d=(0,a.Z)(n,l),p=function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.base;return(n={},(0,o.Z)(n,c.base,s.Yd),(0,o.Z)(n,c.google,s.NY),(0,o.Z)(n,c.inverted,s.OZ),n)[e]}(t);return(0,i.jsx)(p,(0,r.Z)((0,r.Z)({disabled:u},d),{},{children:u?(0,i.jsx)(s.m6,{}):e}))}},6332:function(n,e,t){t.d(e,{NY:function(){return u},OZ:function(){return d},Yd:function(){return c},m6:function(){return p}});var r,a,o,s,i=t(168),l=t(5751),c=l.ZP.button(r||(r=(0,i.Z)(["\n\tmin-width: 165px;\n\twidth: auto;\n\theight: 50px;\n    // height:auto;\n\tletter-spacing: 0.5px;\n\tline-height: 50px;\n\tpadding: 0 35px 0 35px;\n\tfont-size: 15px; //add to cart box does not fit in box when small\n\tbackground-color: black;\n\tcolor: white;\n\ttext-transform: uppercase;\n\tfont-family: 'Open Sans', sans-serif;\n\tfont-weight: bolder;\n\tborder: none;\n\tcursor: pointer;\n\tdisplay: flex;\n\tjustify-content: center;\n\n\t&:hover {\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\tborder: 1px solid black;\n\t}\n"]))),u=(0,l.ZP)(c)(a||(a=(0,i.Z)(["\n\tbackground-color: #4285f4;\n\tcolor: white;\n\n\t&:hover {\n\t\tbackground-color: #357ae8;\n\t\tborder: none;\n\t}\n"]))),d=(0,l.ZP)(c)(o||(o=(0,i.Z)(["\n\tbackground-color: white;\n\tcolor: black;\n\tborder: 1px solid black;\n\n\t&:hover {\n\t\tbackground-color: black;\n\t\tcolor: white;\n\t\tborder: none;\n\t}\n"]))),p=l.ZP.div(s||(s=(0,i.Z)(["\n\tdisplay: inline-block;\n\twidth: 30px;\n\theight: 30px;\n\tborder: 3px solid rgba(195, 195, 195, 0.6);\n\tborder-radius: 50%;\n\tborder-top-color: #636767;\n\tanimation: spin 1s ease-in-out infinite;\n\t-webkit-animation: spin 1s ease-in-out infinite;\n\t@keyframes spin {\n\t\tto {\n\t\t\t-webkit-transform: rotate(360deg);\n\t\t}\n\t}\n\t@-webkit-keyframes spin {\n\t\tto {\n\t\t\t-webkit-transform: rotate(360deg);\n\t\t}\n\t}\n"])))},1208:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r=t(2791),a=(t(6084),t(4942)),o=t(1413),s=t(5861),i=t(885),l=t(7757),c=t.n(l),u=t(9028),d=t(2044),p=t(4925),m=t(184),f=["label"];var h=function(n){var e=n.label,t=(0,p.Z)(n,f);return(0,m.jsxs)("div",{className:"group",children:[e&&(0,m.jsx)("label",{className:"".concat(t.value.length?"shrink":""," form-input-label"),children:e}),(0,m.jsx)("input",(0,o.Z)({className:"form-input"},t))]})};var b=function(){var n=(0,r.useState)({displayName:"",email:"",password:"",confirmPassword:""}),e=(0,i.Z)(n,2),t=e[0],l=e[1],p=function(){var n=(0,s.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t.password===t.confirmPassword){n.next=4;break}return alert("passwords do not match"),n.abrupt("return");case 4:return n.prev=4,n.next=7,(0,u.Xq)(t.email,t.password);case 7:return r=n.sent,console.log(r),n.next=11,(0,u.o6)(r.user,t.displayName);case 11:l({displayName:"",email:"",password:"",confirmPassword:""}),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),"auth/email-already-in-use"===n.t0.code?alert("Email already in use"):console.log("user creation encountered an error",n.t0);case 17:case"end":return n.stop()}}),n,null,[[4,14]])})));return function(e){return n.apply(this,arguments)}}(),f=function(n){l((0,o.Z)((0,o.Z)({},t),{},(0,a.Z)({},n.target.name,n.target.value)))};return(0,m.jsxs)("div",{className:"sign-up-container",children:[(0,m.jsx)("h2",{children:"Don't have an account?"}),(0,m.jsx)("span",{children:"Sign up with your email and password"}),(0,m.jsxs)("form",{onSubmit:p,children:[(0,m.jsx)(h,{label:"Display Name",autoComplete:"new-password",type:"text",required:!0,onChange:f,name:"displayName",value:t.displayName}),(0,m.jsx)(h,{label:"Email",autoComplete:"new-password",type:"email",required:!0,onChange:f,name:"email",value:t.email}),(0,m.jsx)(h,{label:"Password",autoComplete:"new-password",type:"password",required:!0,onChange:f,name:"password",value:t.password,minLength:"8"}),(0,m.jsx)(h,{label:"Confirm Password",autoComplete:"new-password",type:"password",required:!0,onChange:f,name:"confirmPassword",value:t.confirmPassword,minLength:"8"}),(0,m.jsx)(d.Z,{type:"submit",children:"Sign Up"})]})]})};var w=function(){var n=(0,r.useState)({email:"",password:""}),e=(0,i.Z)(n,2),t=e[0],l=e[1],p=function(){var n=(0,s.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.TX)();case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,s.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,n.next=4,(0,u.J1)(t.email,t.password);case 4:r=n.sent,console.log(r),l({email:"",password:""}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),"auth/wrong-password"===n.t0.code?alert("Incorrect password for email"):"auth/user-not-found"===n.t0.code?alert("Email not found"):console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}(),b=function(n){l((0,o.Z)((0,o.Z)({},t),{},(0,a.Z)({},n.target.name,n.target.value)))};return(0,m.jsxs)("div",{className:"sign-up-container",children:[(0,m.jsx)("h2",{children:"Already have an account?"}),(0,m.jsx)("span",{children:"Sign in with your email and password"}),(0,m.jsxs)("form",{onSubmit:f,children:[(0,m.jsx)(h,{label:"Email",autoComplete:"new-password",type:"email",required:!0,onChange:b,name:"email",value:t.email}),(0,m.jsx)(h,{label:"Password",autoComplete:"new-password",type:"password",required:!0,onChange:b,name:"password",value:t.password,minLength:"8"}),(0,m.jsxs)("div",{className:"buttons-container",children:[(0,m.jsx)(d.Z,{type:"submit",children:"Sign in"}),(0,m.jsx)(d.Z,{type:"button",buttonType:d.v.google,onClick:p,children:"Google sign in"})]})]})]})};var g=function(){return(0,m.jsxs)("div",{className:"authentication-container",children:[(0,m.jsx)(w,{}),(0,m.jsx)(b,{})]})}},4925:function(n,e,t){function r(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}t.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=208.b26aa5a2.chunk.js.map