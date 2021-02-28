(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{38:function(e,t,a){},43:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(18),r=a.n(i),c=(a(38),a(4)),o=(a(43),a(5)),d=a(8),l=a(6),u=a(14),m=function(e){return{type:"SET_ACTIVE_USER",payload:e}},h=function(e){return{type:"SET_CHAT_DATA",payload:e}},j=function(e){return{type:"SET_ACTIVE_CHAT",payload:e}},f=function(){return{type:"SET_DATA_UPDATED"}},b=function(e){return{type:"SET_USER_CHATS",payload:e}},v=function(e){return{type:"SET_CHAT_FRIEND",payload:e}},p=function(){return{type:"SET_PROFILE_VIEW_OPEN"}},O=function(){return{type:"SET_NEW_CHAT_WINDOW_OPEN"}},g=a(0);var x={setActiveUser:m},N=Object(c.b)((function(e){return{users:e.setUsersData.users,activeUser:e.setActiveUser.activeUser}}),x)((function(e){var t=e.users,a=e.setActiveUser,n=e.activeUser,i=Object(u.a)(),r=i.register,c=i.handleSubmit,m=i.errors,h=Object(s.useState)(!1),j=Object(o.a)(h,2),f=j[0],b=j[1],v=Object(s.useState)(""),p=Object(o.a)(v,2),O=(p[0],p[1]);return""===n?Object(g.jsx)("div",{className:"login-view-container",children:Object(g.jsxs)("form",{className:"login-form form",onSubmit:c((function(e){!function(e){var s=!1;t.forEach((function(t,n){t.email===e.email&&t.password===e.password&&(s=!0,a(t))})),b(!s)}(e)})),children:[Object(g.jsxs)("div",{className:"logo",children:[Object(g.jsx)(d.a,{icon:l.c,className:"icon icon-top"}),Object(g.jsx)("h1",{className:"form-main-heading",children:"Chat App"})]}),Object(g.jsxs)("div",{className:"form-input",children:[Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"input-field",children:[Object(g.jsx)("input",{onChange:function(e){O(e.target.value)},defaultValue:"user1@website.com",name:"email",placeholder:"Email",ref:r({required:"*Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"*Invalid email address"}})}),Object(g.jsx)(d.a,{icon:l.d,className:"icon"})]})}),Object(g.jsx)("div",{className:"error-message",children:m.email&&m.email.message})]}),Object(g.jsxs)("div",{className:"form-input",children:[Object(g.jsxs)("div",{className:"input-field",children:[Object(g.jsx)("input",{type:"password",placeholder:"Password",name:"password",defaultValue:"123",ref:r({required:"*Password is required"})}),Object(g.jsx)(d.a,{icon:l.i,className:"icon"})]}),Object(g.jsx)("div",{className:"error-message",children:m.password&&Object(g.jsx)("p",{children:m.password.message})}),Object(g.jsx)("div",{className:"error-message error-message-incorrect-input",style:{opacity:f?1:0},children:"*Incorrect email or password"})]}),Object(g.jsx)("button",{className:"btn-wide btn-submit",type:"submit",children:"Login"})]})}):null})),w=a(19),C=a.n(w),U={url:"https://api.jsonbin.io/b/603be1ea0866664b108546b9",headers:{headers:{"secret-key":"$2b$10$AgTzU7bySpzUlTMa4xuwT.Y.GSwY4okUERqzYphPesdnIj0G3K32q",versioning:!1}}};var I={setActiveUser:m,setProfileViewOpen:p,setChatData:h,setUserChats:b},y=Object(c.b)((function(e){return{activeUser:e.setActiveUser.activeUser}}),I)((function(e){var t=e.activeUser,a=e.setActiveUser,s=e.setProfileViewOpen,n=e.setChatData;return Object(g.jsx)("div",{className:"user-panel-container",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("div",{className:"profile-image",style:{backgroundImage:'url("'.concat(t.profileImageUrl,'")')}}),Object(g.jsxs)("button",{className:"btn btn-edit-profile",onClick:function(){return s()},children:[Object(g.jsx)(d.a,{icon:l.j,className:"icon"}),Object(g.jsx)("div",{className:"btn-text",children:"Profile"})]}),Object(g.jsxs)("button",{className:"btn btn-sign-out",onClick:function(){a(""),n(""),b("")},children:[Object(g.jsx)(d.a,{icon:l.g,className:"icon"}),Object(g.jsx)("div",{className:"btn-text",children:"Sign out"})]})]})})}));var E={setActiveChat:j,setDataUpdated:f,setChatFriend:v,setNewChatWindowOpen:O},S=Object(c.b)((function(e){return{activeUser:e.setActiveUser.activeUser,users:e.setUsersData.users,chats:e.setChatData.chats,activeChatIndex:e.setActiveChat.activeChatIndex,userChats:e.setUserChats.userChats,chatFriend:e.setChatFriend.chatFriend[0]}}),E)((function(e){var t=e.activeUser,a=e.setActiveChat,s=e.activeChatIndex,n=e.userChats,i=e.setNewChatWindowOpen,r=function(e){var t=JSON.parse(JSON.stringify(e)).messages.reverse().findIndex((function(e){return void 0===e[2]}));return t=e.messages.length-t-1};return""!==n&&void 0!==n?Object(g.jsxs)("div",{className:"chats-list-container",children:[Object(g.jsxs)("div",{className:"chats-list-top",children:[Object(g.jsx)("h1",{children:"Chats"}),Object(g.jsx)("button",{className:"btn btn-new-chat",onClick:function(){return i()},children:Object(g.jsx)(d.a,{icon:l.f,className:"icon"})})]}),Object(g.jsx)("div",{className:"user-chats",children:n.map((function(e,i){var c=function(e){var a="",s="",n=r(e);if(e.messages.length>0&&n>=0&&e.messages.length>n){var i=e.messages[n][0];a=e.messages[n][1],s="",s=i===t.id?"you":(s=e.usersInChat.filter((function(e){return i===e.id})))[0].firstName}return{sender:s,text:a}}(e),o=s===i?"active-chat":"",d=function(e){return n[e].usersInChat.filter((function(e){return t.id!==e.id}))[0]}(i);return Object(g.jsxs)("div",{className:"user-chat ".concat(o),onClick:function(){return a({index:i,open:!0})},children:[Object(g.jsx)("div",{className:"friend-profile-image",style:{backgroundImage:'url("'.concat(d.profileImageUrl,'")')}}),Object(g.jsxs)("div",{className:"chat-info",children:[Object(g.jsxs)("div",{className:"name-container",children:[Object(g.jsx)("div",{className:"firstname",children:d.firstName}),Object(g.jsx)("div",{className:"secondname",children:d.secondName})]}),Object(g.jsxs)("div",{className:"last-message-container",children:[Object(g.jsx)("div",{className:"message-sender",children:"".concat(c.sender).concat(""!==c.sender?":":"")}),Object(g.jsx)("div",{className:"message-text",children:c.text})]})]})]},i)}))})]}):null}));var A={setActiveChat:j},T=Object(c.b)((function(e){return{activeUser:e.setActiveUser.activeUser,activeChatIndex:e.setActiveChat.activeChatIndex,userChats:e.setUserChats.userChats}}),A)((function(e){var t=e.activeUser,a=e.activeChatIndex,s=e.userChats,n=e.setActiveChat;return Object(g.jsx)("div",{className:"users-in-chat-container",children:s[a].usersInChat.map((function(e,a){var s=e.profileImageUrl;return e.id!==t.id?Object(g.jsxs)("div",{className:"user-in-chat-info",children:[Object(g.jsx)("button",{className:"btn btn-back",onClick:function(){return n({open:!1})},children:Object(g.jsx)(d.a,{icon:l.a,className:"icon"})}),Object(g.jsx)("div",{className:"user-avatar-container",style:{backgroundImage:'url("'.concat(s,'")')}}),Object(g.jsxs)("div",{className:"name-container",children:[Object(g.jsx)("div",{className:"user-firstname user-name",children:e.firstName}),Object(g.jsx)("div",{className:"user-secondname user-name",children:e.secondName})]})]},a):null}))})}));var D=Object(c.b)((function(e){return{activeUser:e.setActiveUser.activeUser}}),null)((function(e){var t=e.messageData,a=e.activeUser,n=e.onMessageTimerChange,i=e.messageIndex,r=Object(s.useState)(10),c=Object(o.a)(r,2),d=c[0],l=c[1];Object(s.useEffect)((function(){if(d>=1){var e=setTimeout((function(){l(d-1)}),1e3);return function(){return clearTimeout(e)}}0===d&&u()}));var u=function(){t[2].forEach((function(e,s){var r=e[0];if(a.id===r){var c=t;c[2][s][1]=!1,n(c,i)}}))};return Object(g.jsx)("div",{className:"message-timer",children:"00:".concat(d>=10?"":"0").concat(d)})}));var _={setActiveChat:j,setChatData:h},F=Object(c.b)((function(e){return{activeUser:e.setActiveUser.activeUser,chats:e.setChatData.chats,activeChatIndex:e.setActiveChat.activeChatIndex,activeChatOpen:e.setActiveChat.activeChatOpen,userChats:e.setUserChats.userChats,chatFriend:e.setChatFriend.chatFriend,dataUpdateIndex:e.setDataUpdated.dataUpdateIndex}}),_)((function(e){var t=e.activeUser,a=e.chats,n=e.activeChatIndex,i=e.userChats,r=e.dataUpdateIndex,c=e.setActiveChat,m=e.activeChatOpen,h=e.setChatData,j=e.chatFriend,f=Object(s.useRef)(null),b=Object(u.a)(),v=b.register,p=b.handleSubmit,O=(b.errors,function(e){var t;null===(t=f.current)||void 0===t||t.scrollIntoView({behavior:e})});Object(s.useEffect)((function(){O("smooth")}),[a,m]),Object(s.useEffect)((function(){O("auto")}),[n]),Object(s.useEffect)((function(){k(a)}),[r]);var x=Object(s.useState)(!0),N=Object(o.a)(x,2),w=(N[0],N[1]),I=Object(s.useState)(""),y=Object(o.a)(I,2),E=(y[0],y[1]),S=Object(s.useState)(!1),A=Object(o.a)(S,2),_=A[0],F=A[1],k=function(e){C.a.put(U.url,{chats:e},U.headers).then((function(){w(!1)})).catch((function(e){w(!1),E(e)}))},P=function(e,t){var s=function(e,t){var s=i[n].id,r=JSON.parse(JSON.stringify(a)),c=function(e){var t=e[2],a=0;if(t)return t.forEach((function(e,t){e[1]||a++})),a===t.length}(e);return r.forEach((function(a){s===a.id&&(void 0===t?(a.updateTime=Date.now(),a.messages.push(e)):c?a.messages.splice(t,1):a.messages[t]=e)})),r}(e,t);h(s),c({index:0}),k(s)},V=function(e,t){P(e,t)};return Object(g.jsxs)("div",{className:"messages-window-container messages-window-hide-mobile ".concat(m?"messages-window-show-mobile":""),children:[Object(g.jsx)(T,{}),Object(g.jsx)("div",{className:"sent-messages-container",children:Object(g.jsxs)("div",{className:"overflow-wrapper",children:[i[n].messages.map((function(e,a){var s=e[0],r=e[1],c=function(e){return i[n].usersInChat.filter((function(t){return e===t.id}))[0]}(s),o=t.id===s?"right":"left",d=e[2];return function(e){var a=!0;return e&&e.forEach((function(e,s){var n=e[0];t.id===n&&(a=e[1])})),a}(e[2])?Object(g.jsxs)("div",{className:"message-container message-container-".concat(o),children:[d?Object(g.jsx)(D,{messageData:e,messageIndex:a,onMessageTimerChange:V}):null,Object(g.jsxs)("div",{className:"name-container",children:[Object(g.jsx)("div",{className:"sender-firstname sender-name",children:c.firstName}),Object(g.jsx)("div",{className:"sender-secondname sender-name",children:c.secondName})]}),Object(g.jsx)("div",{className:"friend-avatar-container",style:{backgroundImage:'url("'.concat(c.profileImageUrl,'")')}}),Object(g.jsx)("div",{className:"message-text",children:r})]},a):null})),Object(g.jsx)("div",{ref:f,className:"bottom-container"})]})}),Object(g.jsxs)("form",{className:"send-message-container",onSubmit:p((function(e,a){a.target.reset();var s=[t.id,e.message];s=function(e,a){if(a){var s=[[t.id,!0],[j.id,!0]];e.push(s)}return e}(s,_),P(s)})),children:[Object(g.jsxs)("div",{className:"dissapearing-message-container",children:["Dissapearing message",Object(g.jsx)("div",{className:"check-box",onClick:function(){return F(!_)},children:_?Object(g.jsx)(d.a,{icon:l.b,className:"icon"}):null})]}),Object(g.jsx)("textarea",{className:"message-input",type:"text",placeholder:"Type a message here...",name:"message",ref:v({required:!0})}),Object(g.jsx)("button",{className:"btn btn-send-message",children:Object(g.jsx)(d.a,{icon:l.e,className:"icon"})})]})]})}));var k=Object(c.b)((function(e){return{chatFriend:e.setChatFriend.chatFriend}}),null)((function(e){var t=e.chatFriend;return Object(g.jsx)("div",{className:"friend-panel-container",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("div",{className:"profile-image",style:{backgroundImage:'url("'.concat(t.profileImageUrl,'")')}}),Object(g.jsxs)("div",{className:"names-container",children:[Object(g.jsx)("div",{className:"first-name",children:t.firstName}),Object(g.jsx)("div",{className:"second-name",children:t.secondName})]})]})})})),P=a(7);var V={setChatData:h,setActiveChat:j,setNewChatWindowOpen:O,setDataUpdated:f},W=Object(c.b)((function(e){return{userFriends:e.setUserFriends.userFriends,newChatWindowOpen:e.setNewChatWindowOpen.newChatWindowOpen,activeUser:e.setActiveUser.activeUser,chats:e.setChatData.chats,userChats:e.setUserChats.userChats}}),V)((function(e){var t=e.userFriends,a=e.activeUser,s=e.newChatWindowOpen,n=e.chats,i=e.setChatData,r=e.userChats,c=e.setActiveChat,o=e.setNewChatWindowOpen,d=e.setDataUpdated,l=function(e){var t,a=!1;return r.forEach((function(s,n){s.usersIDs.forEach((function(s){e===s&&(a=!0,t=n)}))})),{chatExist:a,chatIndex:t}};return""!==t?Object(g.jsxs)("div",{className:"new-chat-container",style:{display:s?"flex":"none"},children:[Object(g.jsx)("h1",{children:"New chat"}),Object(g.jsx)("div",{className:"friends-container",children:t.map((function(e,t){return Object(g.jsxs)("div",{className:"friend-info",onClick:function(){return function(e){var t=JSON.parse(JSON.stringify(n)),s={id:n.length+1,updateTime:Date.now(),usersIDs:[a.id,e],messages:[]},r=l(e);if(r.chatExist)c({index:r.chatIndex,open:!0});else{var u=[s].concat(Object(P.a)(t));i(u),c({index:0,open:!0})}o(),d()}(e.id)},children:[Object(g.jsx)("div",{className:"friend-profile-image",style:{backgroundImage:'url("'.concat(e.profileImageUrl,'")')}}),Object(g.jsxs)("div",{className:"name-container",children:[Object(g.jsx)("div",{className:"firstname",children:e.firstName}),Object(g.jsx)("div",{className:"secondname",children:e.secondName})]})]},t)}))})]}):null}));var R={setNewChatWindowOpen:O},J=Object(c.b)((function(e){return{newChatWindowOpen:e.setNewChatWindowOpen.newChatWindowOpen}}),R)((function(e){var t=e.setNewChatWindowOpen,a=e.newChatWindowOpen;return Object(g.jsx)("div",{className:"dark-overlay-container",style:{display:a?"flex":"none"},onClick:function(){return t()}})}));var M={setChatData:h,setUserChats:b,setUserFriends:function(e){return{type:"SET_USER_FRIENDS",payload:e}},setChatFriend:v},q=Object(c.b)((function(e){return{users:e.setUsersData.users,chats:e.setChatData.chats,activeUser:e.setActiveUser.activeUser,userChats:e.setUserChats.userChats,activeChatIndex:e.setActiveChat.activeChatIndex,dataUpdateIndex:e.setDataUpdated.dataUpdateIndex}}),M)((function(e){var t=e.users,a=e.chats,n=e.activeUser,i=e.userChats,r=(e.dataUpdateIndex,e.activeChatIndex),c=e.setUserChats,u=e.setChatFriend,m=e.setUserFriends,h=e.setChatData,j=Object(s.useState)(!1),f=Object(o.a)(j,2),b=f[0],v=f[1],p=Object(s.useState)(""),O=Object(o.a)(p,2),x=(O[0],O[1]),N=Object(s.useRef)(!0);Object(s.useEffect)((function(){""!==n&&w()}),[n]),Object(s.useEffect)((function(){N.current?N.current=!1:c(I())}),[a]),Object(s.useEffect)((function(){N.current?N.current=!1:(A(),E())}),[i]),Object(s.useEffect)((function(){""!==n&&A()}),[r]);var w=function(){v(!0),C.a.get(U.url,U.headers).then((function(e){v(!1);var t=e.data.chats;h(t)})).catch((function(e){x(e),v(!1)}))},I=function(){var e=JSON.parse(JSON.stringify(a));if(""!==e&&void 0!==e&&""!==t&&void 0!==t){var s=[];return e.forEach((function(e,a){var i=!1,r=[];e.usersIDs.forEach((function(e){e===n.id&&(i=!0),t.forEach((function(t){e===t.id&&r.push(t)}))})),i&&(s.push(e),s[a].usersInChat=r)})),s.sort((function(e,t){return t.updateTime-e.updateTime})),s}},E=function(){var e=[];void 0!==i&&""!==i&&""!==n&&(n.friendsId.forEach((function(a){t.forEach((function(t){a===t.id&&e.push(t)}))})),m(e))},A=function(){if(void 0!==i&&""!==i){var e=JSON.parse(JSON.stringify(i))[r].usersInChat.filter((function(e){return n.id!==e.id}));u(e[0])}};return""!==i&&void 0!==i&&""!==n?Object(g.jsx)("div",{className:"chat-view-container",children:Object(g.jsxs)("div",{className:"chat-view-content",children:[Object(g.jsx)(y,{}),Object(g.jsx)(S,{}),Object(g.jsx)(F,{}),Object(g.jsx)(k,{}),Object(g.jsx)(J,{}),Object(g.jsx)(W,{})]})}):b?Object(g.jsxs)("div",{className:"chats-loading-container",children:["Loading chats",Object(g.jsx)(d.a,{icon:l.h,className:"icon"})]}):null}));var B={setActiveUser:m,setProfileViewOpen:p},H=Object(c.b)((function(e){return{users:e.setUsersData.users,chats:e.setChatData.chats,activeUser:e.setActiveUser.activeUser,profileViewOpen:e.setProfileViewOpen.profileViewOpen}}),B)((function(e){var t=e.users,a=e.activeUser,n=e.profileViewOpen,i=e.setActiveUser,r=e.setProfileViewOpen,c=Object(u.a)(),m=c.register,h=c.handleSubmit,j=c.errors,f=Object(s.useState)(""),b=Object(o.a)(f,2),v=b[0],p=b[1],O=Object(s.useState)(!0),x=Object(o.a)(O,2),N=x[0],w=x[1],C=Object(s.useState)(!1),U=Object(o.a)(C,2),I=U[0],y=U[1];Object(s.useEffect)((function(){p(a.profileImageUrl)}),[n]);var E=Object(s.useState)(""),S=Object(o.a)(E,2),A=(S[0],S[1]);return function(e){if(""!==e){var t=new Image;t.onload=function(){this.width>0&&w(!0)},t.onerror=function(){w(!1)},t.src=e}}(v),n?Object(g.jsx)("div",{className:"profile-view-container",children:Object(g.jsxs)("form",{className:"profile-form form",onSubmit:h((function(e){!function(e){var s=!1;t.forEach((function(t){a.id!==t.id&&(e!==t.email||(s=!0))})),y(!!s)}(e.email),I||!N&&""!==e.profileImageUrl||(""===e.profileImageUrl&&(e.profileImageUrl="./images/user.png"),i(e))})),children:[Object(g.jsxs)("h1",{className:"form-main-heading",children:[Object(g.jsx)("button",{className:"btn btn-back",onClick:function(){return r()},children:Object(g.jsx)(d.a,{icon:l.a,className:"icon"})}),"EDIT PROFILE"]}),Object(g.jsxs)("div",{className:"profile-info-container",children:[Object(g.jsx)("div",{className:"profile-image",style:{backgroundImage:'url("'.concat(a.profileImageUrl,'")')}}),Object(g.jsx)("div",{className:"profile-info",children:Object(g.jsxs)("div",{className:"names-container",children:[Object(g.jsx)("div",{className:"first-name",children:a.firstName}),Object(g.jsx)("div",{className:"second-name",children:a.secondName})]})})]}),Object(g.jsxs)("div",{className:"form-input",children:[Object(g.jsxs)("div",{className:"input-field",children:[Object(g.jsx)("label",{htmlFor:"email",children:"Email"}),Object(g.jsx)("input",{defaultValue:a.email,onChange:function(e){A(e.target.value)},name:"email",placeholder:"Email",ref:m({required:"*Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"*Invalid email address"}})})]}),Object(g.jsx)("div",{className:"error-message",children:j.email&&!I?j.email.message:""}),Object(g.jsx)("div",{className:"error-message error-message-email-exist",children:I?"*User with same email exists":""})]}),Object(g.jsxs)("div",{className:"form-input",children:[Object(g.jsxs)("div",{className:"input-field",children:[Object(g.jsx)("label",{htmlFor:"password",children:"Password"}),Object(g.jsx)("input",{defaultValue:a.password,type:"password",placeholder:"Password",name:"password",ref:m({required:"*Password is required"})})]}),Object(g.jsx)("div",{className:"error-message",children:j.password&&Object(g.jsx)("p",{children:j.password.message})})]}),Object(g.jsxs)("div",{className:"form-input",children:[Object(g.jsxs)("div",{className:"input-field",children:[Object(g.jsx)("label",{htmlFor:"firstname",children:"First name"}),Object(g.jsx)("input",{defaultValue:a.firstName,type:"text",placeholder:"First name",name:"firstName",ref:m({required:"*First name is required"})})]}),Object(g.jsx)("div",{className:"error-message",children:j.firstname&&Object(g.jsx)("p",{children:j.firstname.message})})]}),Object(g.jsxs)("div",{className:"form-input",children:[Object(g.jsxs)("div",{className:"input-field",children:[Object(g.jsx)("label",{htmlFor:"secondname",children:"Second name"}),Object(g.jsx)("input",{defaultValue:a.secondName,type:"text",placeholder:"Second name",name:"secondName",ref:m({required:"*Second name is required"})})]}),Object(g.jsx)("div",{className:"error-message",children:j.secondname&&Object(g.jsx)("p",{children:j.secondname.message})})]}),Object(g.jsxs)("div",{className:"form-input",children:[Object(g.jsxs)("div",{className:"input-field",children:[Object(g.jsx)("label",{htmlFor:"profileImageUrl",children:"Profile image"}),Object(g.jsx)("input",{defaultValue:a.profileImageUrl,type:"text",placeholder:"Profile image url",name:"profileImageUrl",ref:m(),onChange:function(e){return p(e.target.value)}})]}),Object(g.jsx)("div",{className:"error-message",children:N||""===v?"":"Image does not exist"})]}),Object(g.jsxs)("div",{className:"form-input",children:[Object(g.jsxs)("div",{className:"input-field",children:[Object(g.jsx)("label",{htmlFor:"city",children:"City"}),Object(g.jsx)("input",{defaultValue:a.city,type:"text",placeholder:"City",name:"city",ref:m()})]}),Object(g.jsx)("div",{className:"error-message",children:j.city&&Object(g.jsx)("p",{children:j.city.message})})]}),Object(g.jsxs)("div",{className:"form-input form-input-about",children:[Object(g.jsxs)("div",{className:"input-field",children:[Object(g.jsx)("label",{htmlFor:"about",children:"Biography"}),Object(g.jsx)("textarea",{defaultValue:a.about,type:"text",placeholder:"About me",name:"about",ref:m()})]}),Object(g.jsx)("div",{className:"error-message",children:j.about&&Object(g.jsx)("p",{children:j.about.message})})]}),Object(g.jsxs)("div",{className:"buttons-container",children:[Object(g.jsx)("button",{className:"btn-wide btn-cancel",onClick:function(){return r()},children:"Close"}),Object(g.jsx)("button",{className:"btn-wide btn-submit",type:"submit",children:"Update"})]})]})},a):null}));var L={setBrowserName:function(e){return{type:"SET_BROWSER_NAME",payload:e}}},z=Object(c.b)((function(e){return{browserName:e.setBrowserName.browserName}}),L)((function(e){var t=e.browserName,a=e.setBrowserName;Object(s.useEffect)((function(){n()}));var n=function(){var e="";e=navigator.vendor.match(/google/i)?"chrome/blink":navigator.vendor.match(/apple/i)?"safari/webkit":navigator.userAgent.match(/firefox\//i)?"firefox/gecko":navigator.userAgent.match(/edge\//i)?"edge/edgehtml":navigator.userAgent.match(/trident\//i)?"ie/trident":navigator.userAgent+"\n"+navigator.vendor,a(e)};return Object(g.jsx)("div",{className:"app-wrapper",children:Object(g.jsxs)("div",{className:"app-container ".concat("safari/webkit"!==t?"container-size":""),children:[Object(g.jsx)(N,{}),Object(g.jsx)(q,{}),Object(g.jsx)(H,{})]})})})),Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),i(e),r(e)}))},G=a(12),$=a(2),Y={activeUser:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTIVE_USER":var a=t.payload;return""!==e.activeUser&&""!==a&&(a.id=e.activeUser.id,a.friendsId=e.activeUser.friendsId),Object($.a)(Object($.a)({},e),{},{activeUser:a});default:return e}},X={chats:""},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CHAT_DATA":return Object($.a)(Object($.a)({},e),{},{chats:t.payload});default:return e}},ee={users:[{id:1,email:"user1@website.com",password:"123",friendsId:[2,3,4,5,6,7,8,9,10],firstName:"Tom",secondName:"Gill",profileImageUrl:"https://i.ibb.co/K0hFfTX/profile02.jpg",city:"Los Angeles",about:"A few of my favorite sports and games are skating, gymnastics, and ping pong."},{id:2,email:"user2@website.com",password:"123",friendsId:[1,3,4,5],firstName:"James",secondName:"Jordan",profileImageUrl:"https://businesstech.co.za/news/wp-content/uploads/2015/03/Male-ideal-beauty.jpg",city:"New York",about:"Let me tell you about pets: I have 3 dogs, 1 cat, and a lizard."},{id:3,email:"user3@website.com",password:"123",friendsId:[1,2,4,9,10],firstName:"Silvia",secondName:"Cox",profileImageUrl:"https://i.ibb.co/54mFXJy/profile01.jpg",city:"Seattle",about:"My favorite fun places I like to go are Disneyland, the beach, and grandma's house."},{id:4,email:"user4@website.com",password:"123",friendsId:[1,2,3],firstName:"Phil",secondName:"Garret",profileImageUrl:"https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",city:"New Mexico",about:""},{id:5,email:"user5@website.com",password:"123",friendsId:[1,2],firstName:"Peter",secondName:"Pearce",profileImageUrl:"https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-2.png",city:"Chicago",about:"My favorite subjects are art, robotics, dance, and math."},{id:6,email:"user6@website.com",password:"123",friendsId:[1],firstName:"Devon",secondName:"Randolph",profileImageUrl:"https://i.pinimg.com/originals/8e/43/e6/8e43e679cb2f6c4cbd83dbc0d026539f.jpg",city:"Vancouver",about:""},{id:7,email:"user7@website.com",password:"123",friendsId:[1,10],firstName:"Ashton",secondName:"Gordon",profileImageUrl:"https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg",city:"Banff",about:"My family members are Shyli, Grace, Sky, Megan, and Joey."},{id:8,email:"user8@website.com",password:"123",friendsId:[1,9],firstName:"Daniel",secondName:"Morris",profileImageUrl:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/266749_2200-732x549.jpg",city:"Toronto",about:""},{id:9,email:"user9@website.com",password:"123",friendsId:[1,3,8,10],firstName:"Alan",secondName:"Baldwin",profileImageUrl:"https://i.ibb.co/rfKSm75/user.png",city:"Lima",about:"Certified internet ninja. Foodaholic. Hardcore bacon aficionado. Student. Organizer. Incurable travel fanatic. Twitter nerd."},{id:10,email:"user10@website.com",password:"123",friendsId:[1,3,7,9],firstName:"Jane",secondName:"Allen",profileImageUrl:"https://cupcakesandcashmere.com/.image/t_share/MTU5MzMzODc5MDkyNjE4NDU0/img_0863.jpg",city:"San Francisco",about:"Bacon practitioner. Falls down a lot. Tv fanatic. Zombie nerd."}]},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS_DATA":return Object($.a)(Object($.a)({},e),{},{users:t.payload});default:return e}},ae={activeChatIndex:0,activeChatOpen:!1},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTIVE_CHAT":var a,s,n=t.payload;return a=void 0!==n.index?n.index:e.activeChatIndex,s=void 0!==n.open?n.open:e.activeChatOpen,Object($.a)(Object($.a)({},e),{},{activeChatIndex:a,activeChatOpen:s});default:return e}},ne={dataUpdateIndex:0},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DATA_UPDATED":return Object($.a)(Object($.a)({},e),{},{dataUpdateIndex:e.dataUpdateIndex+1});default:return e}},re={userChats:""},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_CHATS":return Object($.a)(Object($.a)({},e),{},{userChats:t.payload});default:return e}},oe={chatFriend:""},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CHAT_FRIEND":return Object($.a)(Object($.a)({},e),{},{chatFriend:t.payload});default:return e}},le={userFriends:""},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_FRIENDS":return Object($.a)(Object($.a)({},e),{},{userFriends:t.payload});default:return e}},me={profileViewOpen:!1},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PROFILE_VIEW_OPEN":var a=e.profileViewOpen;return Object($.a)(Object($.a)({},e),{},{profileViewOpen:!a});default:return e}},je={newChatWindowOpen:!1},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NEW_CHAT_WINDOW_OPEN":var a=e.newChatWindowOpen;return Object($.a)(Object($.a)({},e),{},{newChatWindowOpen:!a});default:return e}},be={browserName:""},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BROWSER_NAME":return Object($.a)(Object($.a)({},e),{},{browserName:t.payload});default:return e}},pe=Object(G.b)({setActiveUser:K,setChatData:Q,setUsersData:te,setActiveChat:se,setDataUpdated:ie,setUserChats:ce,setChatFriend:de,setUserFriends:ue,setProfileViewOpen:he,setNewChatWindowOpen:fe,setBrowserName:ve}),Oe=Object(G.c)(pe);r.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(c.a,{store:Oe,children:Object(g.jsx)(z,{})})}),document.getElementById("root")),Z()}},[[65,1,2]]]);
//# sourceMappingURL=main.3702b7a0.chunk.js.map