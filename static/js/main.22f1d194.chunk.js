(this["webpackJsonpproject-2"]=this["webpackJsonpproject-2"]||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},24:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(17),c=a.n(o),r=(a(24),a(1)),l=a(2),i=a(4),u=a(3),m=a(5),g=a(7),h=a(18),p=a.n(h);function d(e){return s.a.createElement("div",null,s.a.createElement("li",{className:"list-group-item"},s.a.createElement("span",{className:"glyphicon glyphicon-trash",onClick:e.onCloseItemClick}),e.oneList,"  "))}var f=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.historyList.map((function(t,a){return s.a.createElement(d,{oneList:t,key:a,onCloseItemClick:function(){return e.props.onCloseItemClick(t)}})}));return s.a.createElement("div",{className:"div-HistoryContainer"},s.a.createElement("ul",{className:"d-inline-flex list-group"},s.a.createElement("span",{className:"clear-all",onClick:this.props.closeClick},"clear all "),s.a.createElement("div",{className:"history-item"},t)))}}]),t}(s.a.Component),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"ResultBox"},s.a.createElement("span",{className:"glyphicon glyphicon-trash imgdlet",onClick:this.props.onRemoveData}),s.a.createElement("a",{href:"".concat(this.props.img),target:"_blank"},s.a.createElement("div",{className:"imgDiv"},s.a.createElement("img",{src:"".concat(this.props.img),alt:"icon of API data "}))))}}]),t}(s.a.Component),y=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.DATA.map((function(t,a){return s.a.createElement(v,{key:a,tags:t.tags,img:t.raster_sizes[t.raster_sizes.length-1].formats[0].preview_url,format:t.raster_sizes[t.raster_sizes.length-1].formats[0].format,onRemoveData:function(){return e.props.onRemoveData(t)}})}));return this.props.DATA.length<=0?s.a.createElement("div",{className:"SearchResult Empty"}):s.a.createElement("div",{className:"SearchResult"},t)}}]),t}(s.a.Component),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).nameChange=function(e){a.setState({newItem:e.target.value})},a.onClick=function(e){a.setState({toggleEdit:"display"})},a.onClickSave=function(e){a.setState({toggleEdit:"none"}),console.log("onClickSave",a.props.username,a.state.newItem),a.props.editUser(a.props.username,a.state.newItem)},a.state={newItem:"",toggleEdit:"none"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("<UserAccount/> name= ",this.props.username),console.log("<UserAccount/> tags =",this.props.history),s.a.createElement("div",{className:"UserAccount"},s.a.createElement("h1",null," Hi ",this.props.username," "),s.a.createElement("p",null,"Edit  ",s.a.createElement("span",{className:"glyphicon glyphicon-edit",onClick:this.onClick})),s.a.createElement("div",{className:"div-Edit-".concat(this.state.toggleEdit)},s.a.createElement("input",{type:"text",placeholder:" new username",onChange:this.nameChange}),s.a.createElement("button",{className:"btn btn-info "},s.a.createElement("span",{className:"glyphicon glyphicon-check",onClick:this.onClickSave}))))}}]),t}(s.a.Component),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).usrnameInputChange=function(e){a.setState({usrnameInput:e.target.value})},a.passwordInputChange=function(e){a.setState({passwordInput:e.target.value})},a.checkUser=function(e){e.preventDefault(),console.log("check user on database ");var t=a.state.usrnameInput,n=a.state.passwordInput;a.state.tags;console.log("check user on database "),console.log(" if ",t),a.props.UsersBD.map((function(e,s){e.usrname===t?(console.log("you have account ",e.usrname),e.password===n?(console.log(" valid pass "),a.setState({toggleLog:"none",userPassed:!0,username:e.usrname,history:e.history})):console.log(" not valid pass ")):console.log("you do not have account !")}))},a.onClickSave=function(e){a.setState({toggleEdit:"none"})},a.state={usrnameInput:"",passwordInput:"",toggleLog:"disply",username:"",history:[],userPassed:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;return this.state.userPassed&&(e=s.a.createElement(E,{editUser:this.props.editUser,username:this.state.username,history:this.state.history})),s.a.createElement("div",null,s.a.createElement("form",{className:"login-".concat(this.state.toggleLog)},s.a.createElement("input",{type:"text",placeholder:"usrname",onChange:this.usrnameInputChange}),s.a.createElement("br",null),s.a.createElement("input",{type:"text",placeholder:"password",onChange:this.passwordInputChange}),s.a.createElement("br",null),s.a.createElement("button",{className:"btn btn-info glyphicon glyphicon-ok",onClick:this.checkUser})),e)}}]),t}(s.a.Component),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).usrnameInputChange=function(e){a.setState({usrnameInput:e.target.value})},a.passwordInputChange=function(e){a.setState({passwordInput:e.target.value})},a.addUser=function(e){e.preventDefault(),""===a.state.usrnameInput||""===a.state.passwordInput?console.log(" you have to fil input "):(console.log("Adding new user to database "),a.props.addUser({usrname:a.state.usrnameInput,password:a.state.passwordInput,history:a.state.history})),a.setState({toggleLog:"none",userPassed:!0})},a.state={toggleLog:"disply",usrnameInput:"",passwordInput:"",history:["history search"],userPassed:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;return this.state.userPassed&&(e=s.a.createElement(E,{username:this.state.usrnameInput,history:this.state.history})),s.a.createElement("div",null,s.a.createElement("form",{className:"login-".concat(this.state.toggleLog)},s.a.createElement("input",{type:"text",placeholder:"usrname",onChange:this.usrnameInputChange}),s.a.createElement("br",null),s.a.createElement("input",{type:"text",placeholder:"password",onChange:this.passwordInputChange}),s.a.createElement("br",null),s.a.createElement("button",{className:"btn btn-info glyphicon glyphicon-ok",onClick:this.addUser})),e)}}]),t}(s.a.Component),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).userLoginClicked=function(e){console.log("history List Div click"),"none"===a.state.toggleLogin?a.setState({toggleLogin:"display",toggle:"none",toggleRegister:"none"}):a.setState({toggleLogin:"none"})},a.userRegisterClicked=function(e){console.log("history List Div click"),"none"===a.state.toggleRegister?a.setState({toggleRegister:"display",toggleLogin:"none",toggle:"none"}):a.setState({toggleRegister:"none"})},a.addUser=function(e){a.setState({dataUsers:[].concat(Object(g.a)(a.state.dataUsers),[e])},(function(){localStorage.setItem("users",JSON.stringify(a.state.dataUsers))}))},a.editUser=function(e,t){a.state.dataUsers.map((function(n){if(n.usrname===e||""===e){n.usrname=t;var s=JSON.stringify(a.state.dataUsers);localStorage.setItem("users",s),a.setState({dataUsers:JSON.parse(localStorage.getItem("users"))},(function(){localStorage.setItem("users",JSON.stringify(a.state.dataUsers))}))}}))},a.state={toggle:"display",toggleLogin:"none",toggleRegister:"none",dataUsers:JSON.parse(localStorage.getItem("users"))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("ul",{className:"d-inline-flex list-group"},s.a.createElement("span",{className:"users-container-".concat(this.state.toggle),onClick:this.userLoginClicked},"Login "),s.a.createElement("div",{className:"user-account-".concat(this.state.toggleLogin)},s.a.createElement(b,{UsersBD:this.state.dataUsers,editUser:this.editUser}))),s.a.createElement("ul",{className:"d-inline-flex list-group"},s.a.createElement("span",{className:"users-container-".concat(this.state.toggle),onClick:this.userRegisterClicked},"Register "),s.a.createElement("div",{className:"user-account-".concat(this.state.toggleRegister)},s.a.createElement(C,{UsersBD:this.state.dataUsers,addUser:this.addUser}))))}}]),t}(s.a.Component),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getData=function(e){console.log(" get data from api work!! ");var t="https://api.iconfinder.com/v3/icons/search?".concat("client_id=NvfBiIhJIHYvaAKF125ScaiL5YSZ7B4pE5JYx5slJaZXSYrUYfChDeQIOPBNOPdv","&").concat("client_secret=kaZCwCWTX2ajcgAZqsdbBqZXljUvyst4WHCamfM70jF1ZNEXFV4vlM2fXBPSJpU4","&query=").concat(a.state.newItem,"&count=100&premium=0");console.log("URL:'",t),p()({method:"get",url:t}).then((function(e){console.log("Data: ",e.data.icons),a.setState({data:e.data.icons})})).catch((function(e){console.log("ERR",e)}))},a.addItem=function(e){e.preventDefault(),console.log("Adding search item to Array Search"),a.setState({search:[].concat(Object(g.a)(a.state.search),[a.state.newItem]),newItem:""}),a.getData(e.target.value)},a.inputChange=function(e){a.setState({newItem:e.target.value})},a.closeClick=function(e){console.log("close ( clear all ) click",e.target),a.setState({search:[]})},a.closeItemClick=function(e){var t=Object(g.a)(a.state.search),n=t.indexOf(e);console.log("close ( clear item ) click"),t.splice(n,1),a.setState({search:t})},a.historyListClicked=function(e){console.log("history List Div click"),"none"===a.state.toggleHistory?a.setState({toggleHistory:"display"}):a.setState({toggleHistory:"none"})},a.userListClicked=function(e){console.log("history List Div click"),"none"===a.state.toggleUser?a.setState({toggleUser:"display"}):a.setState({toggleUser:"none"})},a.removeData=function(e){var t=Object(g.a)(a.state.data),n=t.indexOf(e);console.log("remove ( one item from data ) click"),t.splice(n,1),a.setState({data:t})},a.state={search:[],newItem:"",toggleHistory:"none",toggleUser:"none",data:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.state.data),s.a.createElement("div",{className:"d-block"},s.a.createElement("div",{className:"d-flex justify-content-center heder"},s.a.createElement("form",{className:"form"},s.a.createElement("input",{type:"text",placeholder:"Search",onChange:this.inputChange}),s.a.createElement("button",{className:"btn btn-info",onClick:this.addItem},s.a.createElement("span",{className:"glyphicon glyphicon-search"}))),s.a.createElement("div",{className:"d-inline-flex flex-column History"},s.a.createElement("button",{className:"btn btn-info buttonHistory",onClick:this.historyListClicked}," History "),s.a.createElement("div",{className:"HistoryContainer-".concat(this.state.toggleHistory)},s.a.createElement(f,{onCloseItemClick:this.closeItemClick,closeClick:this.closeClick,historyList:this.state.search}))),s.a.createElement("div",{className:"d-inline-flex flex-column user"},s.a.createElement("button",{className:"btn btn-info ",onClick:this.userListClicked},s.a.createElement("span",{className:"glyphicon glyphicon-user"})),s.a.createElement("div",{className:"userContainer-".concat(this.state.toggleUser)},s.a.createElement(k,null)))),s.a.createElement("div",{className:"mainResult"},s.a.createElement("h1",null,"  ",this.state.data.length," result "),s.a.createElement(y,{DATA:this.state.data,onRemoveData:this.removeData})))}}]),t}(s.a.Component),j=(a(42),function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(O,null)}}]),t}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.22f1d194.chunk.js.map