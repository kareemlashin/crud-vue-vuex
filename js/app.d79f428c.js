(function(t){function e(e){for(var a,o,s=e[0],u=e[1],l=e[2],c=0,f=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("about"),r("router-view")],1)},i=[],o=r("f820"),s={components:{about:o["default"]}},u=s,l=(r("5c0b"),r("2877")),d=Object(l["a"])(u,n,i,!1,null,null,null),c=d.exports,f=(r("d3b7"),r("8c4f")),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home pt-3"},[0==t.cars.length?r("div",{staticClass:"loading"}):t._e(),r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("router-view"),r("div",["Add"!=this.$route.name?r("div",{staticClass:"text-center"},[r("router-link",{staticClass:"mx-auto d-inline-block my-3 btn-all rounded-pill",attrs:{to:"/Add"}},[t._v("add")])],1):t._e()])],1),r("div",{staticClass:"col-md-6"},t._l(t.cars,(function(e){return r("div",{key:e.id,staticClass:"shadow p-3 my-3 rounded bg-white postion-relitive"},[r("div",[t._v(" "+t._s(e.id)+" "),r("div",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.userId))]),r("div",[r("div",{staticClass:"all-option"},[r("button",{staticClass:"Edit",on:{click:function(r){return t.Edit(e.id)}}},[r("i",{staticClass:"far fa-edit"})]),r("button",{staticClass:"deleteItem",on:{click:function(r){return t.deleteItem(e.id)}}},[r("i",{staticClass:"far fa-trash-alt"})])])])]),r("div")])})),0)])])])},p=[],v={name:"Home",components:{},computed:{cars:function(){return this.$store.getters.all}},methods:{Edit:function(t){this.$router.push("/Edit/"+t)},deleteItem:function(t){this.$store.dispatch("deleteUser",t)}},mounted:function(){this.$store.dispatch("fetchUsers"),this.$router.push("/Add")}},h=v,b=(r("6778"),Object(l["a"])(h,m,p,!1,null,"6b1ef570",null)),g=b.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white rounded shadow p-2"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputEmail1"}},[t._v("id")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.id,expression:"form.id"}],staticClass:"form-control",attrs:{type:"number",id:"exampleInputEmail1","aria-describedby":"emailHelp"},domProps:{value:t.form.id},on:{input:function(e){e.target.composing||t.$set(t.form,"id",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputPassword1"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])},I=[],_={name:"Add",created:function(){},data:function(){return{form:{id:"",title:""}}},props:{},methods:{onSubmit:function(){this.$store.dispatch("addUsers",{title:this.form.title,userId:this.form.id})}}},y=_,x=Object(l["a"])(y,w,I,!1,null,"52579473",null),C=x.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white rounded shadow p-2"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.editData(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputEmail1"}},[t._v("id")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.userId,expression:"form.userId"}],staticClass:"form-control",attrs:{type:"number",id:"exampleInputEmail1","aria-describedby":"emailHelp"},domProps:{value:t.form.userId},on:{input:function(e){e.target.composing||t.$set(t.form,"userId",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputPassword1"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])},E=[],P=(r("4de4"),{name:"Edit",data:function(){return{form:{userId:null,title:null},current:null,idItem:null}},mounted:function(){var t=this;this.idItem=this.$route.params.id,this.current=this.$store.getters.all.filter((function(e){if(e.id,t.$route.params.id,e.id==t.$route.params.id)return!0}))[0],this.form.userId=this.current.userId,this.form.title=this.current.title},computed:{},methods:{editData:function(){var t=this.idItem;this.$store.dispatch("save",{id:t,userId:this.form.userId,title:this.form.title})}}}),O=P,j=Object(l["a"])(O,$,E,!1,null,"26e8d030",null),D=j.exports;a["default"].use(f["a"]);var U=[{path:"/",name:"Home",component:g,children:[{path:"/Edit/:id",name:"Edit",component:D},{path:"/Add",name:"Add",component:C}]},{path:"/about",name:"About",component:function(){return Promise.resolve().then(r.bind(null,"f820"))}},{path:"*",redirect:"/"}],k=new f["a"]({mode:"history",base:"/",routes:U}),S=k,A=(r("c740"),r("4160"),r("a434"),r("159b"),r("2f62")),N=r("bc3a"),H=r.n(N);a["default"].use(A["a"]);var R=new A["a"].Store({state:{allData:[],errGet:[],OneItem:null},getters:{all:function(t){return t.allData}},mutations:{set:function(t,e){var r=e;r.forEach((function(e){t.allData.push(e)}))},setERR:function(t,e){t.errGet=e},addNewUser:function(t,e){return t.allData.push(e)},removeUser:function(t,e){var r=t.allData.findIndex((function(t){return t.id==e}));t.allData.splice(r,1)},update:function(t,e){var r=t.allData.findIndex((function(t){return t.id==e.id}));t.allData.splice(r,1,e)}},actions:{fetchUsers:function(t){var e=t.commit;H.a.get("https://5ea6f79384f6290016ba78c2.mockapi.io/api/todo").then((function(t){e("set",t.data)})).catch((function(t){e("setERR",t)}))},addUsers:function(t,e){var r=t.commit,a=e.title,n=e.userId;H.a.post("https://5ea6f79384f6290016ba78c2.mockapi.io/api/todo",{id:"",title:a,userId:n}).then((function(t){r("addNewUser",t.data)}))},deleteUser:function(t,e){var r=t.commit;H.a.delete("https://5ea6f79384f6290016ba78c2.mockapi.io/api/todo/".concat(e)).then((function(t){r("removeUser",e)}))},save:function(t,e){var r=t.commit,a=e.id,n={userId:e.userId,title:e.title};H.a.put("https://5ea6f79384f6290016ba78c2.mockapi.io/api/todo/".concat(a),n).then((function(t){r("update",t.data)}))}}}),M=r("5f5b"),T=r("b1e0");r("f9e3"),r("2dd8"),r("15f5"),r("7051");a["default"].config.productionTip=!1,a["default"].use(M["a"]),a["default"].use(T["a"]),new a["default"]({router:S,store:R,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},6778:function(t,e,r){"use strict";r("c264")},"9c0c":function(t,e,r){},c264:function(t,e,r){},f820:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"bg-white shadow"},[r("b-navbar",{attrs:{variant:"faded",type:"light"}},[r("b-navbar-brand",{attrs:{href:"#"}},[t._v("VUE CRUD WITH VUEX")])],1)],1)])},n=[],i={name:"about"},o=i,s=r("2877"),u=Object(s["a"])(o,a,n,!1,null,null,null);e["default"]=u.exports}});
//# sourceMappingURL=app.d79f428c.js.map