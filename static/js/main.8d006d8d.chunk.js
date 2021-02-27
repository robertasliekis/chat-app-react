(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{38:function(e,t,a){},43:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(18),r=a.n(i),c=(a(38),a(4)),d=(a(43),a(5)),o=a(9),l=a(7),u=a(14),h=function(e){return{type:"SET_ACTIVE_USER",payload:e}},m=function(e){return{type:"SET_CHAT_DATA",payload:e}},j=function(e){return{type:"SET_ACTIVE_CHAT",payload:e}},b=function(){return{type:"SET_DATA_UPDATED"}},f=function(e){return{type:"SET_USER_CHATS",payload:e}},v=function(e){return{type:"SET_CHAT_FRIEND",payload:e}},p=function(){return{type:"SET_PROFILE_VIEW_OPEN"}},O=function(){return{type:"SET_NEW_CHAT_WINDOW_OPEN"}},x=a(0);var g={setActiveUser:h},N=Object(c.b)((function(e){return{users:e.setUsersData.users,activeUser:e.setActiveUser.activeUser}}),g)((function(e){var t=e.users,a=e.setActiveUser,n=e.activeUser,i=Object(u.a)(),r=i.register,c=i.handleSubmit,h=i.errors,m=Object(s.useState)(!1),j=Object(d.a)(m,2),b=j[0],f=j[1],v=Object(s.useState)(""),p=Object(d.a)(v,2),O=(p[0],p[1]);return""===n?Object(x.jsx)("div",{className:"login-view-container",children:Object(x.jsxs)("form",{className:"login-form form",onSubmit:c((function(e){!function(e){var s=!1;t.forEach((function(t,n){t.email===e.email&&t.password===e.password&&(s=!0,a(t))})),f(!s)}(e)})),children:[Object(x.jsxs)("div",{className:"logo",children:[Object(x.jsx)(o.a,{icon:l.b,className:"icon icon-top"}),Object(x.jsx)("h1",{className:"form-main-heading",children:"Chat App"})]}),Object(x.jsxs)("div",{className:"form-input",children:[Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("input",{defaultValue:"user1@website.com",onChange:function(e){O(e.target.value)},name:"email",placeholder:"Email",ref:r({required:"*Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"*Invalid email address"}})}),Object(x.jsx)(o.a,{icon:l.c,className:"icon"})]})}),Object(x.jsx)("div",{className:"error-message",children:h.email&&h.email.message})]}),Object(x.jsxs)("div",{className:"form-input",children:[Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("input",{defaultValue:"123",type:"password",placeholder:"Password",name:"password",ref:r({required:"*Password is required"})}),Object(x.jsx)(o.a,{icon:l.g,className:"icon"})]}),Object(x.jsx)("div",{className:"error-message",children:h.password&&Object(x.jsx)("p",{children:h.password.message})}),Object(x.jsx)("div",{className:"error-message error-message-incorrect-input",style:{opacity:b?1:0},children:"*Incorrect email or password"})]}),Object(x.jsx)("button",{className:"btn-wide btn-submit",type:"submit",children:"Login"})]})}):null})),C=a(19),w=a.n(C);var U={url:"./data/messages.json",headers:{headers:{"secret-key":"$2b$10$AgTzU7bySpzUlTMa4xuwT.Y.GSwY4okUERqzYphPesdnIj0G3K32q",versioning:!1}}};var I={setActiveUser:h,setProfileViewOpen:p,setChatData:m,setUserChats:f},y=Object(c.b)((function(e){return{activeUser:e.setActiveUser.activeUser}}),I)((function(e){var t=e.activeUser,a=e.setActiveUser,s=e.setProfileViewOpen,n=e.setChatData;return Object(x.jsx)("div",{className:"user-panel-container",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{className:"profile-image",style:{backgroundImage:'url("'.concat(t.profileImageUrl,'")')}}),Object(x.jsxs)("button",{className:"btn btn-edit-profile",onClick:function(){return s()},children:[Object(x.jsx)(o.a,{icon:l.h,className:"icon"}),Object(x.jsx)("div",{className:"btn-text",children:"Profile"})]}),Object(x.jsxs)("button",{className:"btn btn-sign-out",onClick:function(){a(""),n(""),f("")},children:[Object(x.jsx)(o.a,{icon:l.f,className:"icon"}),Object(x.jsx)("div",{className:"btn-text",children:"Sign out"})]})]})})}));var E={setActiveChat:j,setDataUpdated:b,setChatFriend:v,setNewChatWindowOpen:O},S=Object(c.b)((function(e){return{activeUser:e.setActiveUser.activeUser,users:e.setUsersData.users,chats:e.setChatData.chats,activeChatIndex:e.setActiveChat.activeChatIndex,userChats:e.setUserChats.userChats,chatFriend:e.setChatFriend.chatFriend[0]}}),E)((function(e){var t=e.activeUser,a=e.setActiveChat,s=e.activeChatIndex,n=e.userChats,i=e.setNewChatWindowOpen;return""!==n&&void 0!==n?Object(x.jsxs)("div",{className:"chats-list-container",children:[Object(x.jsxs)("div",{className:"chats-list-top",children:[Object(x.jsx)("h1",{children:"Chats"}),Object(x.jsx)("button",{className:"btn btn-new-chat",onClick:function(){return i()},children:Object(x.jsx)(o.a,{icon:l.e,className:"icon"})})]}),Object(x.jsx)("div",{className:"user-chats",children:n.map((function(e,i){var r=function(e){var a="",s="";if(e.messages.length>0){var n=e.messages[e.messages.length-1][0];a=e.messages[e.messages.length-1][1],s="",s=n===t.id?"you":(s=e.usersInChat.filter((function(e){return n===e.id})))[0].firstName}return{sender:s,text:a}}(e),c=s===i?"active-chat":"",d=function(e){return n[e].usersInChat.filter((function(e){return t.id!==e.id}))[0]}(i);return Object(x.jsxs)("div",{className:"user-chat ".concat(c),onClick:function(){return a({index:i,open:!0})},children:[Object(x.jsx)("div",{className:"friend-profile-image",style:{backgroundImage:'url("'.concat(d.profileImageUrl,'")')}}),Object(x.jsxs)("div",{className:"chat-info",children:[Object(x.jsxs)("div",{className:"name-container",children:[Object(x.jsx)("div",{className:"firstname",children:d.firstName}),Object(x.jsx)("div",{className:"secondname",children:d.secondName})]}),Object(x.jsxs)("div",{className:"last-message-container",children:[Object(x.jsx)("div",{className:"message-sender",children:"".concat(r.sender).concat(""!==r.sender?":":"")}),Object(x.jsx)("div",{className:"message-text",children:r.text})]})]})]},i)}))})]}):null}));var A={setActiveChat:j},T=Object(c.b)((function(e){return{activeUser:e.setActiveUser.activeUser,activeChatIndex:e.setActiveChat.activeChatIndex,userChats:e.setUserChats.userChats}}),A)((function(e){var t=e.activeUser,a=e.activeChatIndex,s=e.userChats,n=e.setActiveChat;return Object(x.jsx)("div",{className:"users-in-chat-container",children:s[a].usersInChat.map((function(e,a){var s=e.profileImageUrl;return e.id!==t.id?Object(x.jsxs)("div",{className:"user-in-chat-info",children:[Object(x.jsx)("button",{className:"btn btn-back",onClick:function(){return n({open:!1})},children:Object(x.jsx)(o.a,{icon:l.a,className:"icon"})}),Object(x.jsx)("div",{className:"user-avatar-container",style:{backgroundImage:'url("'.concat(s,'")')}}),Object(x.jsxs)("div",{className:"name-container",children:[Object(x.jsx)("div",{className:"user-firstname user-name",children:e.firstName}),Object(x.jsx)("div",{className:"user-secondname user-name",children:e.secondName})]})]},a):null}))})}));var D=Object(c.b)((function(e){return{activeUser:e.setActiveUser.activeUser}}),null)((function(e){var t=e.messageData,a=e.activeUser,n=e.onMessageTimerChange,i=e.messageIndex,r=Object(s.useState)(3),c=Object(d.a)(r,2),o=c[0],l=c[1];Object(s.useEffect)((function(){if(o>=1){var e=setTimeout((function(){l(o-1)}),1e3);return function(){return clearTimeout(e)}}0===o&&u()}));var u=function(){t[2].forEach((function(e,s){var r=e[0];if(a.id===r){var c=t;c[2][s][1]=!1,n(c,i)}}))};return Object(x.jsx)("div",{className:"message-timer",children:"00:".concat(o>=10?"":"0").concat(o)})}));var F={setDataUpdated:b,setActiveChat:j,setUserChats:f,setChatData:m},_=Object(c.b)((function(e){return{activeUser:e.setActiveUser.activeUser,chats:e.setChatData.chats,activeChatIndex:e.setActiveChat.activeChatIndex,activeChatOpen:e.setActiveChat.activeChatOpen,userChats:e.setUserChats.userChats,chatFriend:e.setChatFriend.chatFriend}}),F)((function(e){var t=e.activeUser,a=e.chats,n=e.activeChatIndex,i=e.setDataUpdated,r=e.userChats,c=e.setActiveChat,h=e.activeChatOpen,m=e.setUserChats,j=e.setChatData,b=e.chatFriend,f=Object(s.useRef)(null),v=Object(u.a)(),p=v.register,O=v.handleSubmit,g=(v.errors,function(e){var t;null===(t=f.current)||void 0===t||t.scrollIntoView({behavior:e})});Object(s.useEffect)((function(){g("smooth")}),[a]),Object(s.useEffect)((function(){g("auto")}),[n]);var N=Object(s.useState)(!0),C=Object(d.a)(N,2),I=(C[0],C[1]),y=Object(s.useState)(""),E=Object(d.a)(y,2),S=(E[0],E[1]),A=Object(s.useState)(!1),F=Object(d.a)(A,2),_=F[0],k=F[1],P=function(e,a){if(a){var s=[[t.id,!0],[b.id,!0]];e.push(s)}return e},V=function(e,t){var s=r[n].chatID,d=JSON.parse(JSON.stringify(a)),o=JSON.parse(JSON.stringify(r[n])),l=!1;e[2]&&(l=W(e[2])),void 0===t?(o.updateTime=Date.now(),o.messages.push(e)):l?o.messages.splice(t,1):o.messages[t]=e,d.forEach((function(e,a){s===e.chatID&&(d[a]=o,void 0===t&&(d[a].updateTime=Date.now()))}));var u=JSON.parse(JSON.stringify(r));u[n]=o,m(u),j(d),c({index:0}),w.a.put(U.url,{chats:d},U.headers).then((function(){I(!1),i()})).catch((function(e){I(!1),S(e)}))},W=function(e){var t=0;return e.forEach((function(e,a){e[1]||t++})),t===e.length},R=function(e,t){V(e,t)};return Object(x.jsxs)("div",{className:"messages-window-container messages-window-hide-mobile ".concat(h?"messages-window-show-mobile":""),children:[Object(x.jsx)(T,{}),Object(x.jsx)("div",{className:"sent-messages-container",children:Object(x.jsxs)("div",{className:"overflow-wrapper",children:[r[n].messages.map((function(e,a){var s=e[0],i=e[1],c=function(e){return r[n].usersInChat.filter((function(t){return e===t.id}))[0]}(s),d=t.id===s?"right":"left",o=e[2];return function(e){var a=!0;return e&&e.forEach((function(e,s){var n=e[0];t.id===n&&(a=e[1])})),a}(e[2])?Object(x.jsxs)("div",{className:"message-container message-container-".concat(d),children:[o?Object(x.jsx)(D,{messageData:e,messageIndex:a,onMessageTimerChange:R}):null,Object(x.jsxs)("div",{className:"name-container",children:[Object(x.jsx)("div",{className:"sender-firstname sender-name",children:c.firstName}),Object(x.jsx)("div",{className:"sender-secondname sender-name",children:c.secondName})]}),Object(x.jsx)("div",{className:"friend-avatar-container",style:{backgroundImage:'url("'.concat(c.profileImageUrl,'")')}}),Object(x.jsx)("div",{className:"message-text",children:i})]},a):null})),Object(x.jsx)("div",{ref:f,className:"bottom-container"})]})}),Object(x.jsxs)("form",{className:"send-message-container",onSubmit:O((function(e,a){a.target.reset();var s=[t.id,e.message];s=P(s,e.dissapearingMessage),V(s)})),children:[Object(x.jsxs)("div",{className:"dissapearing-message-container",children:[Object(x.jsx)("label",{htmlFor:"dissapearingMessage",children:"Dissapearing message"}),Object(x.jsx)("input",{className:"check-box",type:"checkbox",name:"dissapearingMessage",checked:_,onChange:function(){return k(!_)},ref:p})]}),Object(x.jsx)("textarea",{className:"message-input",type:"text",placeholder:"Type a message here...",name:"message",ref:p({required:!0})}),Object(x.jsx)("button",{className:"btn btn-send-message",children:Object(x.jsx)(o.a,{icon:l.d,className:"icon"})})]})]})}));var k=Object(c.b)((function(e){return{chatFriend:e.setChatFriend.chatFriend}}),null)((function(e){var t=e.chatFriend;return Object(x.jsx)("div",{className:"friend-panel-container",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{className:"profile-image",style:{backgroundImage:'url("'.concat(t.profileImageUrl,'")')}}),Object(x.jsxs)("div",{className:"names-container",children:[Object(x.jsx)("div",{className:"first-name",children:t.firstName}),Object(x.jsx)("div",{className:"second-name",children:t.secondName})]})]})})})),P=a(6);var V={setChatData:m,setActiveChat:j,setNewChatWindowOpen:O},W=Object(c.b)((function(e){return{userFriends:e.setUserFriends.userFriends,newChatWindowOpen:e.setNewChatWindowOpen.newChatWindowOpen,activeUser:e.setActiveUser.activeUser,chats:e.setChatData.chats,userChats:e.setUserChats.userChats}}),V)((function(e){var t=e.userFriends,a=e.activeUser,s=e.newChatWindowOpen,n=e.chats,i=e.setChatData,r=e.userChats,c=e.setActiveChat,d=e.setNewChatWindowOpen,o=function(e){var t,a=!1;return r.forEach((function(s,n){s.usersIDs.forEach((function(s){e===s&&(a=!0,t=n)}))})),{chatExist:a,chatIndex:t}};return""!==t?Object(x.jsxs)("div",{className:"new-chat-container",style:{display:s?"flex":"none"},children:[Object(x.jsx)("h1",{children:"New chat"}),t.map((function(e,t){return Object(x.jsxs)("div",{className:"friend-info",onClick:function(){return function(e){var t=JSON.parse(JSON.stringify(n)),s={chatID:n.length+1,updateTime:Date.now(),usersIDs:[a.id,e],messages:[]},r=o(e);if(r.chatExist)c(r.chatIndex);else{var l=[s].concat(Object(P.a)(t));i(l),c(0)}d()}(e.id)},children:[Object(x.jsx)("div",{className:"friend-profile-image",style:{backgroundImage:'url("'.concat(e.profileImageUrl,'")')}}),Object(x.jsxs)("div",{className:"name-container",children:[Object(x.jsx)("div",{className:"firstname",children:e.firstName}),Object(x.jsx)("div",{className:"secondname",children:e.secondName})]})]},t)}))]}):null}));var R={setNewChatWindowOpen:O},J=Object(c.b)((function(e){return{newChatWindowOpen:e.setNewChatWindowOpen.newChatWindowOpen}}),R)((function(e){var t=e.setNewChatWindowOpen,a=e.newChatWindowOpen;return Object(x.jsx)("div",{className:"dark-overlay-container",style:{display:a?"flex":"none"},onClick:function(){return t()}})}));var q={setChatData:m,setUserChats:f,setUserFriends:function(e){return{type:"SET_USER_FRIENDS",payload:e}},setChatFriend:v},B=Object(c.b)((function(e){return{users:e.setUsersData.users,chats:e.setChatData.chats,activeUser:e.setActiveUser.activeUser,userChats:e.setUserChats.userChats,activeChatIndex:e.setActiveChat.activeChatIndex,dataUpdateIndex:e.setDataUpdated.dataUpdateIndex,chatFriend:e.setChatFriend.chatFriend}}),q)((function(e){var t=e.users,a=e.chats,n=e.activeUser,i=e.userChats,r=e.dataUpdateIndex,c=e.activeChatIndex,o=e.setUserChats,l=e.setChatFriend,u=e.setUserFriends,h=e.setChatData,m=(e.chatFriend,Object(s.useState)(!0)),j=Object(d.a)(m,2),b=(j[0],j[1]),f=Object(s.useState)(""),v=Object(d.a)(f,2),p=(v[0],v[1]),O=Object(s.useState)(9),g=Object(d.a)(O,2),N=(g[0],g[1],Object(s.useRef)(!0));Object(s.useEffect)((function(){N.current?N.current=!1:(o(I()),A(),E())}),[a]),Object(s.useEffect)((function(){""!==n&&C()}),[n]),Object(s.useEffect)((function(){""!==n&&C()}),[r]),Object(s.useEffect)((function(){""!==n&&A()}),[c]);var C=function(){w.a.get(U.url,U.headers).then((function(e){b(!1);var t=e.data.chats;h(t)})).catch((function(e){p(e),b(!1)}))},I=function(){var e=JSON.parse(JSON.stringify(a));if(""!==e&&void 0!==e&&""!==t&&void 0!==t){var s=[];return e.forEach((function(e,a){var i=!1,r=[];e.usersIDs.forEach((function(e){e===n.id&&(i=!0),t.forEach((function(t,a){e===t.id&&r.push(t)}))})),i&&(s.push(e),s[a].usersInChat=r)})),s.sort((function(e,t){return t.updateTime-e.updateTime})),s}},E=function(){var e=[];void 0!==i&&""!==i&&""!==n&&(n.friendsId.forEach((function(a){t.forEach((function(t){a===t.id&&e.push(t)}))})),u(e))},A=function(){if(void 0!==i&&""!==i){var e=JSON.parse(JSON.stringify(i))[c].usersInChat.filter((function(e){return n.id!==e.id}));l(e[0])}};return""!==i&&void 0!==i&&""!==n?Object(x.jsx)("div",{className:"chat-view-container",children:Object(x.jsxs)("div",{className:"chat-view-content",children:[Object(x.jsx)(y,{}),Object(x.jsx)(S,{}),Object(x.jsx)(_,{}),Object(x.jsx)(k,{}),Object(x.jsx)(W,{}),Object(x.jsx)(J,{})]})}):null}));var H={setActiveUser:h,setProfileViewOpen:p},M=Object(c.b)((function(e){return{users:e.setUsersData.users,chats:e.setChatData.chats,activeUser:e.setActiveUser.activeUser,profileViewOpen:e.setProfileViewOpen.profileViewOpen}}),H)((function(e){var t=e.users,a=e.activeUser,n=e.profileViewOpen,i=e.setActiveUser,r=e.setProfileViewOpen,c=Object(u.a)(),h=c.register,m=c.handleSubmit,j=c.errors,b=Object(s.useState)(""),f=Object(d.a)(b,2),v=f[0],p=f[1],O=Object(s.useState)(!0),g=Object(d.a)(O,2),N=g[0],C=g[1],w=Object(s.useState)(!1),U=Object(d.a)(w,2),I=U[0],y=U[1];Object(s.useEffect)((function(){p(a.profileImageUrl)}),[n]);var E=Object(s.useState)(""),S=Object(d.a)(E,2),A=(S[0],S[1]);return function(e){if(""!==e){var t=new Image;t.onload=function(){this.width>0&&C(!0)},t.onerror=function(){C(!1)},t.src=e}}(v),n?Object(x.jsx)("div",{className:"profile-view-container",children:Object(x.jsxs)("form",{className:"profile-form form",onSubmit:m((function(e){!function(e){var s=!1;t.forEach((function(t){a.id!==t.id&&(e!==t.email||(s=!0))})),y(!!s)}(e.email),I||!N&&""!==e.profileImageUrl||(""===e.profileImageUrl&&(e.profileImageUrl="./images/user.png"),i(e))})),children:[Object(x.jsxs)("h1",{className:"form-main-heading",children:[Object(x.jsx)("button",{className:"btn btn-back",onClick:function(){return r()},children:Object(x.jsx)(o.a,{icon:l.a,className:"icon"})}),"EDIT PROFILE"]}),Object(x.jsxs)("div",{className:"profile-info-container",children:[Object(x.jsx)("div",{className:"profile-image",style:{backgroundImage:'url("'.concat(a.profileImageUrl,'")')}}),Object(x.jsx)("div",{className:"profile-info",children:Object(x.jsxs)("div",{className:"names-container",children:[Object(x.jsx)("div",{className:"first-name",children:a.firstName}),Object(x.jsx)("div",{className:"second-name",children:a.secondName})]})})]}),Object(x.jsxs)("div",{className:"form-input",children:[Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{defaultValue:a.email,onChange:function(e){A(e.target.value)},name:"email",placeholder:"Email",ref:h({required:"*Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"*Invalid email address"}})})]}),Object(x.jsx)("div",{className:"error-message",children:j.email&&!I?j.email.message:""}),Object(x.jsx)("div",{className:"error-message error-message-email-exist",children:I?"*User with same email exists":""})]}),Object(x.jsxs)("div",{className:"form-input",children:[Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{defaultValue:a.password,type:"password",placeholder:"Password",name:"password",ref:h({required:"*Password is required"})})]}),Object(x.jsx)("div",{className:"error-message",children:j.password&&Object(x.jsx)("p",{children:j.password.message})})]}),Object(x.jsxs)("div",{className:"form-input",children:[Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("label",{htmlFor:"firstname",children:"First name"}),Object(x.jsx)("input",{defaultValue:a.firstName,type:"text",placeholder:"First name",name:"firstName",ref:h({required:"*First name is required"})})]}),Object(x.jsx)("div",{className:"error-message",children:j.firstname&&Object(x.jsx)("p",{children:j.firstname.message})})]}),Object(x.jsxs)("div",{className:"form-input",children:[Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("label",{htmlFor:"secondname",children:"Second name"}),Object(x.jsx)("input",{defaultValue:a.secondName,type:"text",placeholder:"Second name",name:"secondName",ref:h({required:"*Second name is required"})})]}),Object(x.jsx)("div",{className:"error-message",children:j.secondname&&Object(x.jsx)("p",{children:j.secondname.message})})]}),Object(x.jsxs)("div",{className:"form-input",children:[Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("label",{htmlFor:"profileImageUrl",children:"Profile image"}),Object(x.jsx)("input",{defaultValue:a.profileImageUrl,type:"text",placeholder:"Profile image url",name:"profileImageUrl",ref:h(),onChange:function(e){return p(e.target.value)}})]}),Object(x.jsx)("div",{className:"error-message",children:N||""===v?"":"Image does not exist"})]}),Object(x.jsxs)("div",{className:"form-input",children:[Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("label",{htmlFor:"city",children:"City"}),Object(x.jsx)("input",{defaultValue:a.city,type:"text",placeholder:"City",name:"city",ref:h()})]}),Object(x.jsx)("div",{className:"error-message",children:j.city&&Object(x.jsx)("p",{children:j.city.message})})]}),Object(x.jsxs)("div",{className:"form-input form-input-about",children:[Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("label",{htmlFor:"about",children:"Biography"}),Object(x.jsx)("textarea",{defaultValue:a.about,type:"text",placeholder:"About me",name:"about",ref:h()})]}),Object(x.jsx)("div",{className:"error-message",children:j.about&&Object(x.jsx)("p",{children:j.about.message})})]}),Object(x.jsxs)("div",{className:"buttons-container",children:[Object(x.jsx)("button",{className:"btn-wide btn-cancel",onClick:function(){return r()},children:"Close"}),Object(x.jsx)("button",{className:"btn-wide btn-submit",type:"submit",children:"Update"})]})]})},a):null}));var L={setBrowserName:function(e){return{type:"SET_BROWSER_NAME",payload:e}}},Z=Object(c.b)((function(e){return{browserName:e.setBrowserName.browserName}}),L)((function(e){var t=e.browserName,a=e.setBrowserName;Object(s.useEffect)((function(){n()}));var n=function(){var e="";e=navigator.vendor.match(/google/i)?"chrome/blink":navigator.vendor.match(/apple/i)?"safari/webkit":navigator.userAgent.match(/firefox\//i)?"firefox/gecko":navigator.userAgent.match(/edge\//i)?"edge/edgehtml":navigator.userAgent.match(/trident\//i)?"ie/trident":navigator.userAgent+"\n"+navigator.vendor,a(e)};return Object(x.jsx)("div",{className:"app-wrapper",children:Object(x.jsxs)("div",{className:"app-container ".concat("safari/webkit"!==t?"container-size":""),children:[Object(x.jsx)(N,{}),Object(x.jsx)(B,{}),Object(x.jsx)(M,{})]})})})),z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),i(e),r(e)}))},K=a(12),$=a(2),G={activeUser1:"",activeUser:{id:1,email:"user1@website.com",password:"123",friendsId:[2,3,4,5],firstName:"Tom",secondName:"Silver",city:"vilnius",profileImageUrl:"https://i.ibb.co/K0hFfTX/profile02.jpg",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt blanditiis unde delectus aperiam suscipit perspiciatis libero debitis perferendis corporis."}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTIVE_USER":var a=t.payload;return""!==a&&(void 0===a.id&&(a.id=e.activeUser.id),void 0===a.friendsID&&(a.friendsID=e.activeUser.friendsID)),Object($.a)(Object($.a)({},e),{},{activeUser:a});default:return e}},Y={chats:""},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CHAT_DATA":return Object($.a)(Object($.a)({},e),{},{chats:t.payload});default:return e}},ee={users:[{id:1,email:"user1@website.com",password:"123",friendsId:[2,3,4,5],firstName:"Tom",secondName:"Silver",profileImageUrl:"https://i.ibb.co/K0hFfTX/profile02.jpg",age:28,city:"vilnius"},{id:2,email:"user2@website.com",password:"123",friendsId:[1,3,4,5],firstName:"John",secondName:"Buck",profileImageUrl:"https://i.ibb.co/rfKSm75/user.png",age:22,city:"kaunas"},{id:3,email:"user3@website.com",password:"123",friendsId:[1,2],firstName:"Silvia",secondName:"Gurt",profileImageUrl:"https://i.ibb.co/54mFXJy/profile01.jpg",age:25,city:"klaip\u0117da"},{id:4,email:"user4@website.com",password:"123",friendsId:[1],firstName:"Phil",secondName:"Garret",profileImageUrl:"https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",age:35,city:"Kupiskis"},{id:5,email:"user5@website.com",password:"123",friendsId:[1],firstName:"Peter",secondName:"Big",profileImageUrl:"https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-2.png",age:28,city:"Panevezys"}]},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS_DATA":return Object($.a)(Object($.a)({},e),{},{users:t.payload});default:return e}},ae={activeChatIndex:0,activeChatOpen:!1},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTIVE_CHAT":var a,s,n=t.payload;return a=void 0!==n.index?n.index:e.activeChatIndex,s=void 0!==n.open?n.open:e.activeChatOpen,Object($.a)(Object($.a)({},e),{},{activeChatIndex:a,activeChatOpen:s});default:return e}},ne={dataUpdateIndex:0},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DATA_UPDATED":return Object($.a)(Object($.a)({},e),{},{dataUpdateIndex:e.dataUpdateIndex+1});default:return e}},re={userChats:""},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_CHATS":return Object($.a)(Object($.a)({},e),{},{userChats:t.payload});default:return e}},de={chatFriend:""},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CHAT_FRIEND":return Object($.a)(Object($.a)({},e),{},{chatFriend:t.payload});default:return e}},le={userFriends:""},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_FRIENDS":return Object($.a)(Object($.a)({},e),{},{userFriends:t.payload});default:return e}},he={profileViewOpen:!1},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PROFILE_VIEW_OPEN":var a=e.profileViewOpen;return Object($.a)(Object($.a)({},e),{},{profileViewOpen:!a});default:return e}},je={newChatWindowOpen:!1},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NEW_CHAT_WINDOW_OPEN":var a=e.newChatWindowOpen;return Object($.a)(Object($.a)({},e),{},{newChatWindowOpen:!a});default:return e}},fe={browserName:""},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BROWSER_NAME":return Object($.a)(Object($.a)({},e),{},{browserName:t.payload});default:return e}},pe=Object(K.b)({setActiveUser:X,setChatData:Q,setUsersData:te,setActiveChat:se,setDataUpdated:ie,setUserChats:ce,setChatFriend:oe,setUserFriends:ue,setProfileViewOpen:me,setNewChatWindowOpen:be,setBrowserName:ve}),Oe=Object(K.c)(pe);r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(c.a,{store:Oe,children:Object(x.jsx)(Z,{})})}),document.getElementById("root")),z()}},[[65,1,2]]]);
//# sourceMappingURL=main.8d006d8d.chunk.js.map