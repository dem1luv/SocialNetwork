(this["webpackJsonp03-social-network"]=this["webpackJsonp03-social-network"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports={settingsContent:"SettingsContentProfile_settingsContent__v-BJH",item:"SettingsContentProfile_item__tXvNr",buttonAddIntro:"SettingsContentProfile_buttonAddIntro__3Q53x",buttonSaveChanges:"SettingsContentProfile_buttonSaveChanges__3MvIQ"}},function(e,t,n){e.exports={aside:"SidebarLeft_aside__8-4qE",active:"SidebarLeft_active__oTnY-"}},function(e,t,n){e.exports={profileInfo:"ProfileInfo_profileInfo__1gRAx",background:"ProfileInfo_background__1O1JO",ava:"ProfileInfo_ava__13Lzy",name:"ProfileInfo_name__2rSKo",location:"ProfileInfo_location__3tYmw"}},function(e,t,n){e.exports={item:"Post_item__2moPk",head:"Post_head__2heKm",ava:"Post_ava__3D5wP",nameDate:"Post_nameDate__VYXH_",text:"Post_text__DxdpT",stat:"Post_stat__3py6A"}},,function(e,t,n){e.exports={header:"Header_header__2epVt",userMenu:"Header_userMenu__FRhJb",ava:"Header_ava__1FxJc",arrow:"Header_arrow__3q4uE",userMenuNav:"Header_userMenuNav__1hrIj"}},,function(e,t,n){e.exports={usersContent:"Users_usersContent__1aCNE",paginationButton:"Users_paginationButton__1748L",current:"Users_current__2vZ4_"}},,,function(e,t,n){e.exports={profilePosts:"ProfilePosts_profilePosts__1_2iD",addPostContainer:"ProfilePosts_addPostContainer__3Fvda",postsContainer:"ProfilePosts_postsContainer__jkUjO"}},function(e,t,n){e.exports={settingsNavbar:"SettingsNavbar_settingsNavbar__1mS_F",active:"SettingsNavbar_active__2eT72"}},,,function(e,t,n){e.exports={profileIntro:"ProfileIntro_profileIntro__AQeCM"}},,,function(e,t,n){e.exports={profile:"Profile_profile__3ENS9"}},function(e,t,n){e.exports=n.p+"static/media/likedHeart.47b57fcc.svg"},function(e,t,n){e.exports=n.p+"static/media/unlikedHeart.f6108e34.svg"},,function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports={settings:"Settings_settings__hpFvM"}},function(e,t,n){e.exports={settingsContent:"SettingsContent_settingsContent__3UmXE"}},function(e,t,n){e.exports={intro:"SettingsContentProfileIntro_intro__gXFCP"}},function(e,t,n){},function(e,t,n){e.exports={news:"News_news__Yt4aZ"}},function(e,t,n){e.exports=n.p+"static/media/arrowDown.a3396931.svg"},function(e,t,n){e.exports={user:"User_user__ima9h"}},function(e,t,n){e.exports=n(58)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),s=n.n(o),i=(n(50),n(2)),c=n(3),u=n(5),l=n(4),p=(n(51),n(52),n(7)),m=n(9),h=n(32),d=n.n(h),f=n(8),b=n(25),v=n.n(b),g=n(18),E=n.n(g),O=n(33),j=n.n(O),C=n(34),y=n.n(C),_=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"onDoLike",value:function(){this.props.doLike(this.props.post.id)}},{key:"onDoUnlike",value:function(){this.props.doUnlike(this.props.post.id)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:E.a.item},r.a.createElement("div",{className:E.a.head},r.a.createElement("div",{className:E.a.ava},r.a.createElement(p.b,{to:"/profile/".concat(this.props.post.user.id)},r.a.createElement("img",{src:this.props.post.user.avaUrl,alt:""}))),r.a.createElement("div",{className:E.a.nameDate},r.a.createElement("div",null,r.a.createElement(p.b,{to:"/profile/".concat(this.props.post.user.id)},this.props.post.user.name)),r.a.createElement("div",null,this.props.post.date))),r.a.createElement("div",{className:E.a.text},this.props.post.text),r.a.createElement("div",{className:E.a.stat},this.props.post.liked?r.a.createElement("button",{onClick:function(){e.onDoUnlike()}},r.a.createElement("img",{src:j.a,alt:""})):r.a.createElement("button",{onClick:function(){e.onDoLike()}},r.a.createElement("img",{src:y.a,alt:""})),r.a.createElement("span",null,this.props.post.likesCount)))}}]),n}(r.a.Component),N=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).textareaElement=r.a.createRef(),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.textareaElement.current.style.height="33px",this.textareaElement.current.style.height=this.textareaElement.current.scrollHeight+"px"}},{key:"onAddPost",value:function(){this.textareaElement.current.style.height="33px",this.props.addPost(this.props.currentUser)}},{key:"onChangeInput",value:function(e){e.target.style.height="33px",e.target.style.height=e.target.scrollHeight+"px",this.props.changeInput(e.target.value)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:v.a.profilePosts},r.a.createElement("div",{className:v.a.addPostContainer},r.a.createElement("img",{src:this.props.currentUser.avaUrl,alt:""}),r.a.createElement("textarea",{type:"text",value:this.props.inputText,onChange:this.onChangeInput.bind(this),placeholder:"Hey, what's up?",ref:this.textareaElement}),r.a.createElement("button",{onClick:this.onAddPost.bind(this)},"Post")),r.a.createElement("div",{className:v.a.postsContainer},this.props.posts.map((function(t){return r.a.createElement(_,{key:t.id,post:t,doLike:e.props.doLike,doUnlike:e.props.doUnlike})}))))}}]),n}(r.a.Component),k=n(11),U=n(1),D={posts:[{id:0,text:"Hey, people, here's my first post!",date:"28.05.2020, 17:25:09",liked:!1,likesCount:0,user:{id:0,avaUrl:"https://hypeava.ru/uploads/posts/2020-03/1583012706_5.jpg",name:"Dmytry Demjanenko"}}],textInput:"",user:{id:0,avaUrl:"https://hypeava.ru/uploads/posts/2020-03/1583012706_5.jpg",bgUrl:"https://storge.pic2.me/cm/3200x1800/592/55fc5d8db7b39.jpg",name:"Dmytry Demjanenko",city:"Sumy",country:"Ukraine",intro:[{title:"About me",text:"Hi, my name is Dmytro and I'm 15 old"},{title:"Favorite anime",text:"JoJo's Bizzare Adventure"},{title:"Best Friend",text:"Me"}]}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(U.a)(Object(U.a)({},e),{},{posts:[{id:0===e.posts.length?0:e.posts[0].id+1,text:e.textInput,date:(new Date).toLocaleString(),liked:!1,likesCount:0,user:Object(U.a)({},t.currentUser)}].concat(Object(k.a)(e.posts)),textInput:""});case"CHANGE-INPUT":return Object(U.a)(Object(U.a)({},e),{},{textInput:t.text});case"DO-LIKE":return Object(U.a)(Object(U.a)({},e),{},{posts:Object(k.a)(e.posts.map((function(e){return e.id===t.postId&&(e.liked=!0,e.likesCount++),e})))});case"DO-UNLIKE":return Object(U.a)(Object(U.a)({},e),{},{posts:Object(k.a)(e.posts.map((function(e){return e.id===t.postId&&(e.liked=!1,e.likesCount--),e})))});default:return e}},w={id:0,avaUrl:"https://hypeava.ru/uploads/posts/2020-03/1583012706_5.jpg",bgUrl:"https://storge.pic2.me/cm/3200x1800/592/55fc5d8db7b39.jpg",name:"Dmytry Demjanenko",city:"Sumy",country:"Ukraine",intro:[{id:0,title:"About me",text:"Hi, my name is Dmytro and I'm 15 old"},{id:1,title:"Favorite anime",text:"JoJo's Bizzare Adventure"},{id:2,title:"Best Friend",text:"Me"}],newData:{avaUrl:"https://hypeava.ru/uploads/posts/2020-03/1583012706_5.jpg",bgUrl:"https://storge.pic2.me/cm/3200x1800/592/55fc5d8db7b39.jpg",name:"Dmytry Demjanenko",city:"Sumy",country:"Ukraine",intro:[{id:0,title:"About me",text:"Hi, my name is Dmytro and I'm 15 old"},{id:1,title:"Favorite anime",text:"JoJo's Bizzare Adventure"},{id:2,title:"Best Friend",text:"Me"}]}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-NAME":return Object(U.a)(Object(U.a)({},e),{},{newData:Object(U.a)(Object(U.a)({},e.newData),{},{name:t.name})});case"CHANGE-AVA":return Object(U.a)(Object(U.a)({},e),{},{newData:Object(U.a)(Object(U.a)({},e.newData),{},{avaUrl:t.avaUrl})});case"CHANGE-BG":return Object(U.a)(Object(U.a)({},e),{},{newData:Object(U.a)(Object(U.a)({},e.newData),{},{bgUrl:t.bgUrl})});case"CHANGE-CITY":return Object(U.a)(Object(U.a)({},e),{},{newData:Object(U.a)(Object(U.a)({},e.newData),{},{city:t.city})});case"CHANGE-COUNTRY":return Object(U.a)(Object(U.a)({},e),{},{newData:Object(U.a)(Object(U.a)({},e.newData),{},{country:t.country})});case"LOG-OUT":return alert("ur logged out"),e;case"ADD-INTRO":return Object(U.a)(Object(U.a)({},e),{},{newData:Object(U.a)(Object(U.a)({},e.newData),{},{intro:[].concat(Object(k.a)(e.newData.intro),[{id:0===e.newData.intro.length?0:e.newData.intro[e.newData.intro.length-1].id+1,title:"Title",text:"Text"}])})});case"CHANGE-INTRO-TITLE":var n=Object(U.a)(Object(U.a)({},e),{},{newData:Object(U.a)(Object(U.a)({},e.newData),{},{intro:Object(k.a)(e.newData.intro)})}),a=0;return n.newData.intro.map((function(e){e.id===t.id&&(a=n.newData.intro.indexOf(e))})),n.newData.intro[a].title=t.title,n;case"CHANGE-INTRO-TEXT":var r=Object(U.a)(Object(U.a)({},e),{},{newData:Object(U.a)(Object(U.a)({},e.newData),{},{intro:Object(k.a)(e.newData.intro)})}),o=0;return r.newData.intro.map((function(e){e.id===t.id&&(o=r.newData.intro.indexOf(e))})),r.newData.intro[o].text=t.text,r;case"DELETE-INTRO":var s=Object(U.a)(Object(U.a)({},e),{},{newData:Object(U.a)(Object(U.a)({},e.newData),{},{intro:Object(k.a)(e.newData.intro)})});return s.newData.intro=s.newData.intro.filter((function(e){return e.id!==t.id})),s;case"SAVE-CHANGES":return Object(U.a)(Object(U.a)(Object(U.a)({},e),e.newData),{},{intro:Object(k.a)(e.newData.intro)});case"RESET-CHANGES":return Object(U.a)(Object(U.a)({},e),{},{newData:{avaUrl:e.avaUrl,bgUrl:e.bgUrl,name:e.name,city:e.city,country:e.country,intro:Object(k.a)(e.intro)}});default:return e}},T=Object(f.b)((function(e){return{posts:e.profilePage.posts,inputText:e.profilePage.textInput,currentUser:e.currentUser}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",currentUser:e}}(t))},changeInput:function(t,n){e(function(e){return{type:"CHANGE-INPUT",text:e}}(t))},doLike:function(t){e(function(e){return{type:"DO-LIKE",postId:e}}(t))},doUnlike:function(t){e(function(e){return{type:"DO-UNLIKE",postId:e}}(t))}}}))(N),P=n(17),A=n.n(P),S=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:A.a.profileInfo},r.a.createElement("div",{className:A.a.background},r.a.createElement("img",{src:this.props.user.bgUrl,alt:""})),r.a.createElement("div",{className:A.a.ava},r.a.createElement("img",{src:this.props.user.avaUrl,alt:""})),r.a.createElement("div",{className:A.a.name},this.props.user.name),r.a.createElement("div",{className:A.a.location},this.props.user.country,", ",this.props.user.city))}}]),n}(r.a.Component),H=Object(f.b)((function(e){return{user:e.currentUser}}),(function(e){return{}}))(S),L=n(29),M=n.n(L),G=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:M.a.profileIntro},r.a.createElement("h2",null,"Profile Intro"),this.props.userIntro.map((function(e){return r.a.createElement("div",{className:M.a.item},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.text))})))}}]),n}(r.a.Component),R=Object(f.b)((function(e){return{userIntro:e.currentUser.intro}}),(function(e){return{}}))(G),B=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:d.a.profile},r.a.createElement(H,null),r.a.createElement(R,null),r.a.createElement(T,null))}}]),n}(r.a.Component),F=n(36),J=n.n(F),K=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("header",{className:J.a.header},r.a.createElement("img",{src:"",alt:""}),r.a.createElement("span",null,r.a.createElement(m.a,{path:"/profile",render:function(){return"Profile"}}),r.a.createElement(m.a,{path:"/music",render:function(){return"Music"}}),r.a.createElement(m.a,{path:"/news",render:function(){return"News"}}),r.a.createElement(m.a,{path:"/users",render:function(){return"Users"}}),r.a.createElement(m.a,{path:"/messages",render:function(){return"Messages"}}),r.a.createElement(m.a,{path:"/settings",render:function(){return"Settings"}})))}}]),n}(r.a.Component),Y=n(37),z=n.n(Y),V=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("header",{className:z.a.header},r.a.createElement("img",{src:"",alt:""}),r.a.createElement("span",null,r.a.createElement(m.a,{path:"/profile",render:function(){return"Profile"}}),r.a.createElement(m.a,{path:"/music",render:function(){return"Music"}}),r.a.createElement(m.a,{path:"/news",render:function(){return"News"}}),r.a.createElement(m.a,{path:"/users",render:function(){return"Users"}}),r.a.createElement(m.a,{path:"/messages",render:function(){return"Messages"}}),r.a.createElement(m.a,{path:"/settings",render:function(){return"Settings"}})))}}]),n}(r.a.Component),X=n(38),Q=n.n(X),W=n(26),q=n.n(W),Z=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:q.a.settingsNavbar},r.a.createElement("h2",null,"Settings"),r.a.createElement("nav",null,r.a.createElement(p.b,{to:"/settings/profile",activeClassName:q.a.active},"Profile"),r.a.createElement(p.b,{to:"/settings/general",activeClassName:q.a.active},"General")))}}]),n}(r.a.Component),$=n(39),ee=n.n($),te=n(15),ne=n.n(te),ae=n(40),re=n.n(ae),oe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"onChangeTitle",value:function(e){this.props.changeIntroTitle(this.props.intro.id,e.target.value)}},{key:"onChangeText",value:function(e){this.props.changeIntroText(this.props.intro.id,e.target.value)}},{key:"onDeleteIntro",value:function(){this.props.deleteIntro(this.props.intro.id)}},{key:"render",value:function(){return r.a.createElement("div",{className:re.a.intro},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",null,"Title:"),r.a.createElement("input",{type:"text",value:this.props.intro.title,onChange:this.onChangeTitle.bind(this),placeholder:"Title"})),r.a.createElement("div",null,r.a.createElement("span",null,"Text:"),r.a.createElement("textarea",{value:this.props.intro.text,onChange:this.onChangeText.bind(this),placeholder:"Text"}))),r.a.createElement("button",{onClick:this.onDeleteIntro.bind(this)},"Delete"))}}]),n}(r.a.Component),se=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"componentWillUnmount",value:function(){this.props.resetChanges()}},{key:"onChangeName",value:function(e){this.props.changeName(this.props.currentUser,e.target.value)}},{key:"onChangeAva",value:function(e){this.props.changeAva(this.props.currentUser,e.target.value)}},{key:"onChangeBg",value:function(e){this.props.changeBg(this.props.currentUser,e.target.value)}},{key:"onChangeCity",value:function(e){this.props.changeCity(this.props.currentUser,e.target.value)}},{key:"onChangeCountry",value:function(e){this.props.changeCountry(this.props.currentUser,e.target.value)}},{key:"onAddIntro",value:function(){this.props.addIntro()}},{key:"onSaveChanges",value:function(){this.props.saveChanges()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:ne.a.settingsContent},r.a.createElement("img",{src:"",alt:""}),r.a.createElement("h2",null,"Profile Settings"),r.a.createElement("div",null,r.a.createElement("div",{className:ne.a.item},r.a.createElement("span",null,"Name:"),r.a.createElement("input",{type:"text",value:this.props.currentUser.newData.name,onChange:this.onChangeName.bind(this),placeholder:"Name"})),r.a.createElement("div",{className:ne.a.item},r.a.createElement("span",null,"Avatar (URL):"),r.a.createElement("input",{type:"text",value:this.props.currentUser.newData.avaUrl,onChange:this.onChangeAva.bind(this),placeholder:"Avatar URL"})),r.a.createElement("div",{className:ne.a.item},r.a.createElement("span",null,"Background (URL):"),r.a.createElement("input",{type:"text",value:this.props.currentUser.newData.bgUrl,onChange:this.onChangeBg.bind(this),placeholder:"Background URL"})),r.a.createElement("div",{className:ne.a.item},r.a.createElement("span",null,"City:"),r.a.createElement("input",{type:"text",value:this.props.currentUser.newData.city,onChange:this.onChangeCity.bind(this),placeholder:"City"})),r.a.createElement("div",{className:ne.a.item},r.a.createElement("span",null,"Country:"),r.a.createElement("input",{type:"text",value:this.props.currentUser.newData.country,onChange:this.onChangeCountry.bind(this),placeholder:"Country"}))),r.a.createElement("h3",null,"Intro"),r.a.createElement("div",null,r.a.createElement("div",null,this.props.currentUser.newData.intro.map((function(t){return r.a.createElement(oe,{key:t.id,intro:t,changeIntroTitle:e.props.changeIntroTitle,changeIntroText:e.props.changeIntroText,deleteIntro:e.props.deleteIntro})}))),r.a.createElement("button",{onClick:this.onAddIntro.bind(this),className:ne.a.buttonAddIntro},"Add Intro")),r.a.createElement("button",{onClick:this.onSaveChanges.bind(this),className:ne.a.buttonSaveChanges},"Save Changes"))}}]),n}(r.a.Component),ie=Object(f.b)((function(e){return{currentUser:e.currentUser}}),(function(e){return{changeName:function(t,n){e(function(e,t){return{type:"CHANGE-NAME",user:e,name:t}}(t,n))},changeAva:function(t,n){e(function(e,t){return{type:"CHANGE-AVA",user:e,avaUrl:t}}(t,n))},changeBg:function(t,n){e(function(e,t){return{type:"CHANGE-BG",user:e,bgUrl:t}}(t,n))},changeCity:function(t,n){e(function(e,t){return{type:"CHANGE-CITY",user:e,city:t}}(t,n))},changeCountry:function(t,n){e(function(e,t){return{type:"CHANGE-COUNTRY",user:e,country:t}}(t,n))},addIntro:function(){e({type:"ADD-INTRO"})},changeIntroTitle:function(t,n){e(function(e,t){return{type:"CHANGE-INTRO-TITLE",id:e,title:t}}(t,n))},changeIntroText:function(t,n){e(function(e,t){return{type:"CHANGE-INTRO-TEXT",id:e,text:t}}(t,n))},deleteIntro:function(t){e(function(e){return{type:"DELETE-INTRO",id:e}}(t))},saveChanges:function(){e({type:"SAVE-CHANGES"})},resetChanges:function(){e({type:"RESET-CHANGES"})}}}))(se),ce=n(41),ue=n.n(ce),le=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:ue.a.settingsContent},r.a.createElement("img",{src:"",alt:""}),r.a.createElement("span",null,r.a.createElement(m.a,{path:"/settings/profile",render:function(){return"Profile"}}),r.a.createElement(m.a,{path:"/settings/general",render:function(){return"SettingsContentGeneral"}})))}}]),n}(r.a.Component),pe=Object(f.b)((function(e){return{currentUser:e.currentUser.user}}),(function(e){return{}}))(le),me=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:ee.a.settingsContent},r.a.createElement(m.a,{path:"/settings/profile",render:function(){return r.a.createElement(ie,null)}}),r.a.createElement(m.a,{path:"/settings/general",render:function(){return r.a.createElement(pe,null)}}))}}]),n}(r.a.Component),he=Object(f.b)((function(e){return{currentUser:e.currentUser}}),(function(e){return{}}))(me),de=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:Q.a.settings},r.a.createElement(he,null),r.a.createElement(Z,null))}}]),n}(r.a.Component),fe=n(42),be=n.n(fe),ve=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:be.a.news},this.props.posts.map((function(t){return r.a.createElement(_,{post:t,doLike:e.props.doLike,doUnlike:e.props.doUnlike})})))}}]),n}(r.a.Component),ge={posts:[{id:0,text:"Hey, people, here's my first post!",date:"28.05.2020, 17:25:09",liked:!1,likesCount:0,user:{id:0,avaUrl:"https://hypeava.ru/uploads/posts/2020-03/1583012706_5.jpg",name:"Dmytry Demjanenko"}}]},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DO-LIKE":return Object(U.a)(Object(U.a)({},e),{},{posts:Object(k.a)(e.posts.map((function(e){return e.id===t.postId&&(e.liked=!0,e.likesCount++),e})))});case"DO-UNLIKE":return Object(U.a)(Object(U.a)({},e),{},{posts:Object(k.a)(e.posts.map((function(e){return e.id===t.postId&&(e.liked=!1,e.likesCount--),e})))});default:return e}},Oe=Object(f.b)((function(e){return{posts:e.newsPage.posts}}),(function(e){return{doLike:function(t){e(function(e){return{type:"DO-LIKE",postId:e}}(t))},doUnlike:function(t){e(function(e){return{type:"DO-UNLIKE",postId:e}}(t))}}}))(ve),je=n(16),Ce=n.n(je),ye=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("aside",{className:Ce.a.aside},r.a.createElement("nav",null,r.a.createElement(p.b,{to:"/profile/".concat(this.props.userId),activeClassName:Ce.a.active},"Profile"),r.a.createElement(p.b,{to:"/news",activeClassName:Ce.a.active},"News"),r.a.createElement(p.b,{to:"/messages",activeClassName:Ce.a.active},"Messages"),r.a.createElement(p.b,{to:"/music",activeClassName:Ce.a.active},"Music"),r.a.createElement(p.b,{to:"/users",activeClassName:Ce.a.active},"Users"),r.a.createElement(p.b,{to:"/settings/profile",activeClassName:Ce.a.active},"Settings")))}}]),n}(r.a.Component),_e=Object(f.b)((function(e){return{userId:e.currentUser.id}}),(function(){return{}}))(ye),Ne=n(20),ke=n.n(Ne),Ue=n(43),De=n.n(Ue),xe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).userMenuNavElement=r.a.createRef(),a}return Object(c.a)(n,[{key:"toggleUserMenuNav",value:function(){this.userMenuNavElement.current.style.display="block"===this.userMenuNavElement.current.style.display?"none":"block"}},{key:"render",value:function(){return r.a.createElement("header",{className:ke.a.header},r.a.createElement("button",{className:ke.a.userMenu,onClick:this.toggleUserMenuNav.bind(this)},r.a.createElement("img",{className:ke.a.ava,src:this.props.user.avaUrl,alt:""}),r.a.createElement("span",null,this.props.user.name),r.a.createElement("img",{className:ke.a.arrow,src:De.a,alt:""}),r.a.createElement("div",{className:ke.a.userMenuNav,ref:this.userMenuNavElement},r.a.createElement(p.b,{to:"/profile/".concat(this.props.user.id)},"Profile"),r.a.createElement(p.b,{to:"/settings/profile"},"Settings"),r.a.createElement("button",{onClick:this.props.logOut},"Log Out"))))}}]),n}(r.a.Component),we=Object(f.b)((function(e){return{user:e.currentUser}}),(function(e){return{logOut:function(){e({type:"LOG-OUT"})}}}))(xe),Ie=n(22),Te=n.n(Ie),Pe=n(44),Ae=n.n(Pe),Se=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e,t=this.props.photo?this.props.photo:"https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png";return e=this.props.followed?r.a.createElement("button",null,"Unfollow"):r.a.createElement("button",null,"Follow"),r.a.createElement("div",{className:Ae.a.user},r.a.createElement("img",{src:t,alt:""}),r.a.createElement("h4",null,this.props.name),e)}}]),n}(r.a.Component),He=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://social-network.samuraijs.com/api/1.0/users").then((function(e){return e.json()})).then((function(t){e.props.setUsers(t.items),e.props.setUsersTotalCount(t.totalCount)}))}},{key:"onSetCurrentPage",value:function(e){var t=this;fetch("https://social-network.samuraijs.com/api/1.0/users?page=".concat(e,"&count=").concat(this.props.usersCount)).then((function(e){return e.json()})).then((function(n){t.props.setUsers(n.items),t.props.setCurrentPage(e)}))}},{key:"render",value:function(){for(var e=this,t=Math.ceil(this.props.usersTotalCount/this.props.usersCount),n=[],a=function(t){t===e.props.currentPage?n.push(r.a.createElement("button",{className:Te.a.paginationButton+" "+Te.a.current,onClick:function(){e.onSetCurrentPage(t)}},t)):n.push(r.a.createElement("button",{className:Te.a.paginationButton,onClick:function(){e.onSetCurrentPage(t)}},t))},o=1;o<=t;o++)a(o);var s=this.props.users.map((function(e){return r.a.createElement(Se,{key:e.id,name:e.name,photo:e.photos.small,followed:e.followed})}));return r.a.createElement("div",{className:Te.a.usersContent},n,s)}}]),n}(r.a.Component),Le={users:[],usersTotalCount:0,usersCount:5,currentPage:3},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USERS":return Object(U.a)(Object(U.a)({},e),{},{users:t.users});case"SET_USERS_TOTAL_COUNT":return Object(U.a)(Object(U.a)({},e),{},{usersTotalCount:t.usersTotalCount});case"SET_CURRENT_PAGE":return Object(U.a)(Object(U.a)({},e),{},{currentPage:t.page});default:return e}},Ge=Object(f.b)((function(e){return{users:e.usersPage.users,usersTotalCount:e.usersPage.usersTotalCount,usersCount:e.usersPage.usersCount,currentPage:e.usersPage.currentPage}}),(function(e){return{setUsers:function(t){e(function(e){return{type:"SET-USERS",users:e}}(t))},setUsersTotalCount:function(t){e(function(e){return{type:"SET_USERS_TOTAL_COUNT",usersTotalCount:e}}(t))},setCurrentPage:function(t){e(function(e){return{type:"SET_CURRENT_PAGE",page:e}}(t))}}}))(He),Re=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(we,null),r.a.createElement(_e,null),r.a.createElement("main",{className:"content"},r.a.createElement(m.a,{path:"/profile",component:B}),r.a.createElement(m.a,{path:"/news",component:Oe}),r.a.createElement(m.a,{path:"/messages",component:K}),r.a.createElement(m.a,{path:"/music",component:V}),r.a.createElement(m.a,{path:"/users",component:Ge}),r.a.createElement(m.a,{path:"/settings",component:de}))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=n(30),Fe=Object(Be.a)({profilePage:x,newsPage:Ee,currentUser:I,usersPage:Me}),Je=Object(Be.b)(Fe);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:Je},r.a.createElement(Re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[45,1,2]]]);
//# sourceMappingURL=main.0d17a4f9.chunk.js.map