(this["webpackJsonpreact-admin"]=this["webpackJsonpreact-admin"]||[]).push([[0],{274:function(e,t,a){},347:function(e,t,a){},349:function(e,t,a){},373:function(e,t,a){},374:function(e,t,a){},438:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(32),c=a.n(r),s=a(0),i=a.n(s),o=a(78),u=a(35),l=(a(54),a(21)),d=(a(94),a(44)),p=(a(126),a(37)),h=a(77),j=a(441),m=a(442),b=a(62),f=a(23),O=a.n(f),g=a(34),x="get_user",y="clear_user",v="error_msg",C="set_title",k=a(146),w=(a(104),a(43)),S=a(189),I=a.n(S);function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return new Promise((function(n,r){("GET"===a?I.a.get(e,{params:t}):I.a.post(e,t)).then((function(e){n(e.data)})).catch((function(e){w.b.error("Request fail\uff1a"+e.message)}))}))}var P="https://mysterious-fjord-53168.herokuapp.com",D=function(e,t){return N(P+"/login",{username:e,password:t},"POST")},A=function(e){return N(P+"/manage/category/list",{parentId:e})},T=function(e){return N(P+"/manage/category/info",{categoryId:e})},M=function(e,t){N(P+"/manage/category/add",{categoryName:e,parentId:t},"POST")},R=function(e){var t=e.categoryId,a=e.categoryName;return N(P+"/manage/category/update",{categoryName:a,categoryId:t},"POST")},_=function(e,t){return N(P+"/manage/product/list",{pageNum:e,pageSize:t})},U=function(e){var t=e.pageNum,a=e.pageSize,n=e.searchName,r=e.searchType;return N(P+"/manage/product/search",Object(k.a)({pageNum:t,pageSize:a},r,n))},q=function(e,t){return N(P+"/manage/product/updateStatus",{productId:e,status:t},"POST")},L=function(e){return N(P+"/manage/img/delete",{name:e},"POST")},F=function(e){N(P+"/manage/product/"+(e._id?"update":"add"),e,"POST")},K=function(e){return N(P+"/manage/role/update",e,"POST")},z=function(e){return N(P+"/manage/role/add",{roleName:e},"POST")},W="user_key",E={getUser:function(){return JSON.parse(localStorage.getItem(W)||"{}")},saveUser:function(e){localStorage.setItem(W,JSON.stringify(e))},removeUser:function(){localStorage.removeItem(W)}},V=function(e){return{type:x,user:e}},B=function(e){return{type:v,errorMsg:e}},J=a.p+"static/media/logo.5df66122.png",H=(a(274),Object(b.b)((function(e){return{user:e.user}}),{login:function(e,t){return function(){var a=Object(g.a)(O.a.mark((function a(n){var r,c,s;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D(e,t);case 2:0===(r=a.sent).status&&(c=r.data,E.saveUser(c),n(V(c))),s=r.msg,n(B(s));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=p.a.useForm(),a=Object(h.a)(t,1)[0],r=e.user;if(r._id)return Object(n.jsx)(u.a,{to:"/dashboard"});return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsxs)("header",{className:"login-header",children:[Object(n.jsx)("img",{src:J,alt:"logo"}),Object(n.jsx)("h1",{children:"Kinaxis Take-home Project"})]}),Object(n.jsxs)("section",{className:"login-content",children:[Object(n.jsx)("div",{className:r.errorMsg?"error-msg show":"error-msg",children:r.errorMsg}),Object(n.jsx)("h4",{children:"Login to"}),Object(n.jsx)("h4",{children:"E-commerce Back-end platform"}),Object(n.jsxs)(p.a,{form:a,name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(t){var a=t.username,n=t.password;e.login(a,n)},children:[Object(n.jsx)(p.a.Item,{name:"username",rules:[{required:!0,whitespace:!0,message:"Username required"},{min:4,message:"Username requires at least 4 characters"},{max:12,message:"Maximun 12 characters"},{pattern:/^[a-zA-Z0-9_]+$/,message:"Must be letter, numbers or underscores"}],children:Object(n.jsx)(d.a,{prefix:Object(n.jsx)(j.a,{className:"site-form-item-icon"}),placeholder:"Username",style:{color:"rgba(0,0,0,.25)"}})}),Object(n.jsx)(p.a.Item,{name:"password",rules:[{required:!0,message:"Password required"},{max:25,message:"Password length should no more than 25"}],children:Object(n.jsx)(d.a,{prefix:Object(n.jsx)(m.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password",style:{color:"rgba(0,0,0,.25)"}})}),Object(n.jsx)(p.a.Item,{children:Object(n.jsx)(l.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Login"})})]})]})]})}))),$=a(38),G=a(39),Q=a(41),Y=a(40),Z=(a(343),a(124)),X=(a(345),a(71)),ee=a(443),te=a(444),ae=a(445),ne=a(446),re=a(447),ce=[{title:"Dashboard",key:"/dashboard",icon:Object(n.jsx)(ee.a,{}),isPublic:!0},{title:"Product",key:"/products",icon:Object(n.jsx)(te.a,{}),children:[{title:"Category",key:"/category",icon:Object(n.jsx)(ae.a,{})},{title:"Product Management",key:"/product",icon:Object(n.jsx)(ne.a,{})}]},{title:"Account",key:"/role",icon:Object(n.jsx)(re.a,{})}],se=(a(347),Object(b.b)((function(e){return{user:e.user}}),{setTitle:function(e){return{type:C,data:e}}})(Object(u.g)((function(e){var t=Object(s.useState)([]),a=Object(h.a)(t,2),r=a[0],c=a[1],i=Object(s.useState)([]),u=Object(h.a)(i,2),l=u[0],d=u[1],p=function t(a){var r=e.location.pathname;return a.map((function(a){return function(t){var a=t.key,n=t.isPublic,r=e.user.role.menus;return!("admin"!==e.user.username&&!n&&-1===r.indexOf(a))||!!t.children&&!!t.children.find((function(e){return-1!==r.indexOf(e.key)}))}(a)?a.children?(a.children.find((function(e){return 0===r.indexOf(e.key)}))&&c(a.key),Object(n.jsx)(X.a.SubMenu,{icon:a.icon,title:a.title,children:t(a.children)},a.key)):(a.key!==r&&0!==r.indexOf(a.key)||e.setTitle(a.title),Object(n.jsx)(X.a.Item,{icon:a.icon,children:Object(n.jsx)(o.b,{to:a.key,onClick:function(){return e.setTitle(a.title)},children:a.title})},a.key)):null}))};Object(s.useEffect)((function(){d(p(ce))}),[]);var j=e.location.pathname;return Object(n.jsxs)("div",{className:"left-nav",children:[Object(n.jsxs)(o.b,{to:"/",className:"left-nav-header",children:[Object(n.jsx)("img",{src:J,alt:"logo"}),Object(n.jsx)("h1",{children:"Management Platform"})]}),Object(n.jsx)(X.a,{selectedKeys:[j],defaultOpenKeys:[r],mode:"inline",theme:"dark",children:l})]})})))),ie=(a(143),a(76));function oe(e){if(!e)return"";var t=new Date(e);return"".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate(),"\n    \xa0 ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds()," ")}a(349);var ue=Object(b.b)((function(e){return{headTitle:e.headTitle,user:e.user}}),{logout:function(){return E.removeUser(),{type:y}}})(Object(u.g)((function(e){var t=Object(s.useState)(oe(Date.now())),a=Object(h.a)(t,2),r=a[0],c=a[1],i=Object(s.useState)({}),o=Object(h.a)(i,2),u=o[0],d=o[1];Object(s.useEffect)((function(){!function(){var e=setInterval((function(){var e=oe(Date.now());c(e)}),1e3);d(e)}()}),[]),Object(s.useEffect)((function(){return function(){clearInterval(u)}}),[u]);var p=e.user.username,j=e.headTitle;return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsxs)("div",{className:"header-top",children:[Object(n.jsx)("span",{children:p}),Object(n.jsx)(l.a,{type:"link",onClick:function(){ie.a.confirm({content:"Are you sure you want to logout?",onOk:function(){e.logout()}})},children:"Logout"})]}),Object(n.jsxs)("div",{className:"header-bottom",children:[Object(n.jsx)("div",{className:"header-bottom-left",children:j}),Object(n.jsx)("div",{className:"header-bottom-right",children:Object(n.jsx)("span",{children:r})})]})]})}))),le=(a(107),a(63)),de=(a(352),a(125)),pe=(a(354),a(233)),he=function(e){Object(Q.a)(a,e);var t=Object(Y.a)(a);function a(){return Object($.a)(this,a),t.apply(this,arguments)}return Object(G.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"dashboard",children:Object(n.jsx)(le.a,{title:"Take home project: Simple e-Commerce management platform",extra:Object(n.jsx)(pe.a,{type:"reload"}),className:"home-table-right",children:Object(n.jsxs)(de.a,{children:[Object(n.jsx)(de.a.Item,{color:"green",children:"Basic module design"}),Object(n.jsx)(de.a.Item,{color:"green",children:"Backend API implement"}),Object(n.jsxs)(de.a.Item,{color:"red",children:[Object(n.jsx)("p",{children:"User Login"}),Object(n.jsx)("p",{children:"Category management"}),Object(n.jsx)("p",{children:"Product management"})]}),Object(n.jsxs)(de.a.Item,{children:[Object(n.jsx)("p",{children:"Account role authorization"}),Object(n.jsx)("p",{children:"File upload"})]})]})})})}}]),a}(s.Component),je=(a(179),a(57)),me=(a(186),a(117)),be=a(448),fe=a(241),Oe=function(e){Object(Q.a)(a,e);var t=Object(Y.a)(a);function a(){var e;Object($.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={loading:!1,categorys:[],subCategorys:[],parentId:"0",parentName:"",showStatus:0,updatedCategoryName:"",addedCategoryName:"",selectedParentId:"0"},e.createColumns=function(){e.columns=[{title:"Category",dataIndex:"name"},{title:"Operation",width:300,render:function(t){return Object(n.jsxs)("span",{children:[Object(n.jsx)(l.a,{type:"link",onClick:function(){e.showUpdateModel(t)},children:"Update"}),"0"===e.state.parentId?Object(n.jsx)(l.a,{type:"link",onClick:function(){e.displaySubCategory(t)},children:"Sub Category"}):null]})}}]},e.loadCategorys=function(){var t=Object(g.a)(O.a.mark((function t(a){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),a=a||e.state.parentId,t.next=4,A(a);case 4:n=t.sent,e.setState({loading:!1}),0===n.status?"0"===a?e.setState({categorys:n.data}):e.setState({subCategorys:n.data}):w.b.error("Request Fail");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.displaySubCategory=function(t){e.setState({parentId:t._id,parentName:t.name,selectedParentId:t._id},(function(){e.loadCategorys()}))},e.displayCategorys=function(){e.setState({parentId:"0",parentName:"",subCategorys:[]})},e.handleCancel=function(){e.setState({showStatus:0,updatedCategoryName:"",addedCategoryName:"",selectedParentId:"0"})},e.parendIdChange=function(t){e.setState({selectedParentId:t},(function(){console.log(e.state.selectedParentId)}))},e.showAddModel=function(){e.setState({showStatus:1})},e.addNewCategory=Object(g.a)(O.a.mark((function t(){var a,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.selectedParentId,n=e.state.addedCategoryName,e.setState({showStatus:0,updatedCategoryName:""}),t.next=5,M(n,a);case 5:t.sent,a===e.state.parentId?e.loadCategorys():"0"===a&&e.loadCategorys("0");case 7:case"end":return t.stop()}}),t)}))),e.showUpdateModel=function(t){e.category=t,e.setState({showStatus:2})},e.updateCategory=Object(g.a)(O.a.mark((function t(){var a,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.category._id,n=e.state.updatedCategoryName,e.setState({showStatus:0,updatedCategoryName:""}),t.next=5,R({categoryId:a,categoryName:n});case 5:0===t.sent.status&&e.loadCategorys();case 7:case"end":return t.stop()}}),t)}))),e}return Object(G.a)(a,[{key:"componentWillMount",value:function(){this.createColumns()}},{key:"componentDidMount",value:function(){this.loadCategorys()}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,r=t.categorys,c=t.subCategorys,s=t.parentId,i=t.parentName,o=t.showStatus,u=this.category||{},h="0"===s?"Main Category":Object(n.jsxs)("span",{children:[Object(n.jsx)(l.a,{type:"link",onClick:this.displayCategorys,children:"Main Category"}),Object(n.jsx)(be.a,{style:{margin:10}}),Object(n.jsx)("span",{children:i})]}),j=Object(n.jsxs)(l.a,{onClick:this.showAddModel,type:"primary",children:[Object(n.jsx)(fe.a,{}),"Add"]});return Object(n.jsxs)(le.a,{title:h,extra:j,children:[Object(n.jsx)(me.a,{loading:a,pagination:{defaultPageSize:8,showQuickJumper:!0},bordered:!0,rowKey:"_id",dataSource:"0"===s?r:c,columns:this.columns}),Object(n.jsx)(ie.a,{visible:1===o,title:"Add category",onOk:this.addNewCategory,onCancel:this.handleCancel,children:Object(n.jsxs)(p.a,{form:this.form,children:[Object(n.jsx)(p.a.Item,{name:"parentId",initialValue:s,children:Object(n.jsxs)(je.a,{onChange:function(t){return e.parendIdChange(t)},children:[Object(n.jsx)(je.a.Option,{value:"0",children:"Main Catergory"}),r.map((function(e){return Object(n.jsx)(je.a.Option,{value:e._id,children:e.name},e._id)}))]})}),Object(n.jsx)(p.a.Item,{name:"categoryName",initialValue:"",rules:[{required:!0,message:"Name required"}],children:Object(n.jsx)(d.a,{placeholder:"Pleace enter Category name",onChange:function(t){return e.setState({addedCategoryName:t.target.value})},value:this.addedCategoryName})})]})}),Object(n.jsx)(ie.a,{visible:2===o,title:"Update Category",onOk:this.updateCategory,onCancel:this.handleCancel,children:Object(n.jsx)(p.a,{form:this.form,children:Object(n.jsx)(p.a.Item,{name:"categoryName",initialValue:u.name,rules:[{required:!0,message:"Name is required"}],children:Object(n.jsx)(d.a,{placeholder:"Please enter category name",onChange:function(t){return e.setState({updatedCategoryName:t.target.value})},value:this.updatedCategoryName})})})})]})}}]),a}(s.Component),ge=function(e){Object(Q.a)(a,e);var t=Object(Y.a)(a);function a(){var e;Object($.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={products:[],total:0,loading:!1,searchWord:"",searchType:"productName"},e.initColumns=function(){e.columns=[{title:"Name",dataIndex:"name"},{title:"Description",dataIndex:"desc"},{title:"Price",dataIndex:"price",render:function(e){return"$"+e}},{width:"100px",title:"Status",render:function(t){var a=t.status,r=t._id;return Object(n.jsxs)("span",{children:[Object(n.jsx)(l.a,{onClick:function(){e.updateStatus(r,1===a?2:1)},type:"primary",children:1===a?"Remove":"Launch"}),Object(n.jsx)("span",{children:1===a?"Launched":"Removed"})]})}},{width:"100px",title:"Opration",render:function(t){return Object(n.jsxs)("span",{children:[Object(n.jsx)(l.a,{type:"link",onClick:function(){e.props.history.push("/product/detail",{product:t})},children:"Detail"}),Object(n.jsx)(l.a,{type:"link",onClick:function(){return e.props.history.push("/product/addupdate",t)},children:"Update"})]})}}]},e.loadProducts=function(){var t=Object(g.a)(O.a.mark((function t(a){var n,r,c,s,i,o,u;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.pageNum=a,e.setState({loading:!0}),n=e.state,r=n.searchWord,c=n.searchType,!r){t.next=9;break}return t.next=6,U({pageNum:a,pageSize:5,searchName:r,searchType:c});case 6:s=t.sent,t.next=12;break;case 9:return t.next=11,_(a,5);case 11:s=t.sent;case 12:e.setState({loading:!1}),0===s.status&&(i=s.data,o=i.total,u=i.list,e.setState({total:o,products:u}));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.updateStatus=function(){var t=Object(g.a)(O.a.mark((function t(a,n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q(a,n);case 2:0===t.sent.status&&(w.b.success("Update Success"),e.loadProducts(e.pageNum));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(G.a)(a,[{key:"componentWillMount",value:function(){this.initColumns()}},{key:"componentDidMount",value:function(){this.loadProducts(1)}},{key:"render",value:function(){var e=this,t=this.state,a=t.products,r=t.total,c=t.loading,s=t.searchWord,i=t.searchType,o=Object(n.jsxs)("span",{children:[Object(n.jsxs)(je.a,{value:i,style:{width:120},onChange:function(t){return e.setState({searchType:t})},children:[Object(n.jsx)(je.a.Option,{value:"productName",children:"Name"}),Object(n.jsx)(je.a.Option,{value:"productDesc",children:"Description"})]}),Object(n.jsx)(d.a,{onChange:function(t){return e.setState({searchWord:t.target.value})},value:s,placeholder:"Keyword",style:{width:150,margin:"0 15px"}}),Object(n.jsx)(l.a,{onClick:function(){e.loadProducts(1)},type:"primary",children:"Search"})]}),u=Object(n.jsxs)(l.a,{onClick:function(){return e.props.history.push("/product/addupdate")},type:"primary",children:[Object(n.jsx)(fe.a,{}),"Add product"]});return Object(n.jsx)(le.a,{title:o,extra:u,children:Object(n.jsx)(me.a,{loading:c,bordered:!0,rowKey:"_id",dataSource:a,columns:this.columns,pagination:{current:this.pageNum,defaultPageSize:5,showQuickJumper:!0,total:r,onChange:this.loadProducts}})})}}]),a}(s.Component),xe=(a(367),a(240)),ye=a(133),ve=a(159),Ce=(a(439),a(238)),ke="https://mysterious-fjord-53168.herokuapp.com/",we=function(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))},Se=function(e){Object(Q.a)(a,e);var t=Object(Y.a)(a);function a(e){var n;Object($.a)(this,a),(n=t.call(this,e)).state={previewDisplay:!1,previewImage:"",ImgList:[]},n.getImgs=function(){return n.state.ImgList.map((function(e){return e.name}))},n.showPreview=function(){var e=Object(g.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,we(t.originFileObj);case 3:t.preview=e.sent;case 4:n.setState({smallImage:t.url||t.preview,previewDisplay:!0});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleImgChange=function(){var e=Object(g.a)(O.a.mark((function e(t){var a,r,c,s,i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.file,r=t.fileList,"done"!==a.status){e.next=6;break}0===(c=a.response).status?(w.b.success("Upload success"),s=c.data,i=s.name,o=s.url,(a=r[r.length-1]).name=i,a.url=o):w.b.error("Upload fail"),e.next=11;break;case 6:if("removed"!==a.status){e.next=11;break}return e.next=9,L(a.name);case 9:0===e.sent.status?w.b.success("Delete success"):w.b.error("Delete fail");case 11:n.setState({ImgList:r});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleCancel=function(){return n.setState({previewDisplay:!1})};var r=n.props.imgs,c=[];return r&&r.length>0&&(c=r.map((function(e,t){return{uid:-t,name:e,status:"done",url:ke+e}}))),n.state={previewDisplay:!1,smallImage:"",ImgList:c},n}return Object(G.a)(a,[{key:"render",value:function(){var e=this.state,t=e.ImgList,a=e.previewDisplay,r=e.smallImage;return Object(n.jsxs)("div",{children:[Object(n.jsx)(Ce.a,{action:"https://mysterious-fjord-53168.herokuapp.com/manage/img/upload",fileList:t,accept:"image/*",name:"image",listType:"picture-card",onPreview:this.showPreview,onChange:this.handleImgChange,children:t.length>=4?null:Object(n.jsxs)("div",{children:[Object(n.jsx)(fe.a,{}),Object(n.jsx)("div",{children:"Upload"})]})}),Object(n.jsx)(ie.a,{visible:a,onCancel:this.handleCancel,children:Object(n.jsx)("img",{alt:"img",style:{width:"100%"},src:r})})]})}}]),a}(i.a.Component),Ie=a(449),Ne=p.a.Item,Pe=function(e){Object(Q.a)(a,e);var t=Object(Y.a)(a);function a(e){var n;return Object($.a)(this,a),(n=t.call(this,e)).formRef=i.a.createRef(),n.state={options:[]},n.initOptions=function(){var e=Object(g.a)(O.a.mark((function e(t){var a,r,c,s,i,o,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.map((function(e){return{value:e._id,label:e.name,isLeaf:!1}})),r=Object(ve.a)(n),c=r.isUpdate,s=r.product,i=s.pCategoryId,!c||"0"===i){e.next=10;break}return e.next=6,n.getCategorys(i);case 6:o=e.sent,u=o.map((function(e){return{value:e._id,label:e.name,isLeaf:!0}})),a.find((function(e){return e.value===i})).children=u;case 10:n.setState({options:a});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getCategorys=function(){var e=Object(g.a)(O.a.mark((function e(t){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:if(0!==(a=e.sent).status){e.next=10;break}if(r=a.data,"0"!==t){e.next=9;break}n.initOptions(r),e.next=10;break;case 9:return e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.validatePrice=function(e,t,a){return 1*t>0?Promise.resolve():Promise.reject("Price should be greater than 0")},n.loadData=function(){var e=Object(g.a)(O.a.mark((function e(t){var a,r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=t[0]).loading=!0,e.next=4,n.getCategorys(a.value);case 4:r=e.sent,a.loading=!1,r&&r.length>0?(c=r.map((function(e){return{value:e._id,label:e.name,isLeaf:!0}})),a.children=c):a.isLeaf=!0,n.setState({options:Object(ye.a)(n.state.options)});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.submit=function(){n.formRef.current.validateFields().then(function(){var e=Object(g.a)(O.a.mark((function e(t){var a,r,c,s,i,o,u,l,d;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,r=t.desc,c=t.price,1===(s=t.categoryIds).length?(i="0",o=s[0]):(i=s[0],o=s[1]),u=n.pw.current.getImgs(),"",l={name:a,desc:r,price:c,imgs:u,detail:"",pCategoryId:i,categoryId:o},n.isUpdate&&(l._id=n.product._id),e.next=8,F(l);case 8:(d=e.sent)&&0==d.status?w.b.success("Success"):d&&0!=d.status&&w.b.error("Fail to ".concat(n.isUpdate?"Update":"Add"," product")),n.props.history.goBack();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("Request error",e)}))},n.pw=i.a.createRef(),n}return Object(G.a)(a,[{key:"componentDidMount",value:function(){this.getCategorys("0")}},{key:"componentWillMount",value:function(){var e=this.props.location.state;this.isUpdate=!!e,this.product=e||{}}},{key:"render",value:function(){var e=this,t=this.isUpdate,a=this.product,r=a.pCategoryId,c=a.categoryId,s=a.imgs,i=[];t&&("0"===r||i.push(r),i.push(c));var o=Object(n.jsxs)("span",{children:[Object(n.jsx)(l.a,{type:"link",onClick:function(){return e.props.history.goBack()},children:Object(n.jsx)(Ie.a,{style:{marginRight:10,fontSize:20}})}),Object(n.jsx)("span",{children:t?"Update":"Add"})]});return Object(n.jsx)(le.a,{title:o,children:Object(n.jsxs)(p.a,{ref:this.formRef,labelCol:{span:7},wrapperCol:{span:10},children:[Object(n.jsx)(Ne,{name:"name",rules:[{required:!0,message:"Name is required"}],initialValue:a.name,label:"Product name",children:Object(n.jsx)(d.a,{placeholder:"Please enter product name"})}),Object(n.jsx)(Ne,{name:"desc",initialValue:a.desc,rules:[{required:!0,message:"Description is required"}],label:"Prduct Description",children:Object(n.jsx)(d.a.TextArea,{placeholder:"Please enter description",autoSize:{minRows:2,maxRows:5}})}),Object(n.jsx)(Ne,{name:"price",initialValue:a.price,rules:[{required:!0,message:"Price is required"},{validator:this.validatePrice}],label:"Price",children:Object(n.jsx)(d.a,{type:"number",addonAfter:"CAD",placeholder:"Please enter price"})}),Object(n.jsx)(Ne,{name:"categoryIds",initialValue:i,rules:[{required:!0,message:"Please specify category"}],label:"Product Category",children:Object(n.jsx)(xe.a,{placeholder:"Please specify category",options:this.state.options,loadData:this.loadData})}),Object(n.jsx)(Ne,{label:"product-images",children:Object(n.jsx)(Se,{ref:this.pw,imgs:s})}),Object(n.jsx)(Ne,{children:Object(n.jsx)(l.a,{onClick:this.submit,type:"primary",children:"Submit"})})]})})}}]),a}(s.Component),De=(a(371),a(102)),Ae=(a(373),function(e){Object(Q.a)(a,e);var t=Object(Y.a)(a);function a(){var e;Object($.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={mainCat:"",subCat:""},e}return Object(G.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(O.a.mark((function e(){var t,a,n,r,c,s,i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.location.state.product,a=t.pCategoryId,n=t.categoryId,"0"!==a){e.next=9;break}return e.next=4,T(n);case 4:r=e.sent,c=r.data.name,this.setState({mainCat:c}),e.next=15;break;case 9:return e.next=11,Promise.all([T(a),T(n)]);case 11:s=e.sent,i=s[0].data.name,o=s[1].data.name,this.setState({mainCat:i,subCat:o});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.location.state.product,a=t.name,r=t.desc,c=t.price,s=t.imgs,i=this.state,o=i.mainCat,u=i.subCat,d=Object(n.jsxs)("span",{children:[Object(n.jsx)(l.a,{type:"link",children:Object(n.jsx)(Ie.a,{style:{marginRight:10,fontSize:20},onClick:function(){return e.props.history.goBack()}})}),Object(n.jsx)("span",{children:"Product Detail"})]});return Object(n.jsx)(le.a,{title:d,className:"product-detail",children:Object(n.jsxs)(De.b,{children:[Object(n.jsxs)(De.b.Item,{children:[Object(n.jsx)("p",{className:"left",children:"Product Name:"}),Object(n.jsx)("p",{className:"left-desc",children:a})]}),Object(n.jsxs)(De.b.Item,{children:[Object(n.jsx)("p",{className:"left",children:"Description:"}),Object(n.jsx)("p",{className:"left-desc",children:r})]}),Object(n.jsxs)(De.b.Item,{children:[Object(n.jsx)("p",{className:"left",children:"Price:"}),Object(n.jsxs)("p",{className:"left-desc",children:["$",c]})]}),Object(n.jsxs)(De.b.Item,{children:[Object(n.jsx)("p",{className:"left",children:"Category:"}),Object(n.jsxs)("p",{className:"left-desc",children:[o," ",u?"---\x3e"+u:""]})]}),Object(n.jsxs)(De.b.Item,{children:[Object(n.jsx)("p",{className:"left",children:"Images:"}),Object(n.jsx)("p",{className:"left-desc",children:s.map((function(e){return Object(n.jsx)("img",{className:"product-img",src:ke+e,alt:"Product Image",style:{width:200,height:200}},e)}))})]})]})})}}]),a}(s.Component)),Te=(a(374),function(e){return Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{path:"/product",component:ge,exact:!0}),Object(n.jsx)(u.b,{path:"/product/addupdate",component:Pe}),Object(n.jsx)(u.b,{path:"/product/detail",component:Ae}),Object(n.jsx)(u.a,{to:"/product"})]})}),Me=a(123),Re=a(235),_e=a.n(Re),Ue=function(e){var t=p.a.useForm(),a=Object(h.a)(t,1)[0];return e.setForm(a),Object(n.jsx)(p.a,{form:a,children:Object(n.jsx)(p.a.Item,Object(Me.a)(Object(Me.a)({label:"Role name"},_e.a),{},{rules:[{required:!0,message:"Accout role name is required"}],name:"roleName",initialValue:"",children:Object(n.jsx)(d.a,{placeholder:"Please enter accout role name"})}))})},qe=(a(436),a(239)),Le=function(e){Object(Q.a)(a,e);var t=Object(Y.a)(a);function a(e){var n;Object($.a)(this,a),(n=t.call(this,e)).getTreeNodes=function(e){return e.reduce((function(e,t){return e.push({title:t.title,key:t.key,children:t.children?n.getTreeNodes(t.children):null}),e}),[])},n.getMenus=function(){return n.state.checkedKeys},n.onCheck=function(e){n.setState({checkedKeys:e})};var r=n.props.role.menus;return n.state={treeData:[{title:"Platform Accessibility",key:"all",children:[]}],checkedKeys:r},n}return Object(G.a)(a,[{key:"componentWillReceiveProps",value:function(e){var t=e.role.menus;this.setState({checkedKeys:t})}},{key:"componentWillMount",value:function(){var e=this.state.treeData;e[0].children=this.getTreeNodes(ce),this.setState({treeData:e})}},{key:"render",value:function(){var e=this.state,t=e.checkedKeys,a=e.treeData,r=this.props.role;return Object(n.jsxs)("div",{children:[Object(n.jsx)(p.a.Item,{label:"Account name",children:Object(n.jsx)(d.a,{value:r.name,disabled:!0})}),Object(n.jsx)(qe.a,{treeData:a,defaultExpandAll:!0,checkable:!0,checkedKeys:{checked:t},onCheck:this.onCheck})]})}}]),a}(s.Component),Fe=function(e){Object(Q.a)(a,e);var t=Object(Y.a)(a);function a(e){var n;return Object($.a)(this,a),(n=t.call(this,e)).state={roles:[],role:{},isDisplayAdd:!1,isDisplayAuth:!1},n.createColumn=function(){n.columns=[{title:"Account name",dataIndex:"name"},{title:"Create Time",dataIndex:"create_time",render:function(e){return oe(e)}},{title:"Autorize Time",dataIndex:"auth_time",render:oe},{title:"Autorized from",dataIndex:"auth_name"}]},n.loadRoles=Object(g.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(P+"/manage/role/list");case 2:0===(t=e.sent).status&&(a=t.data,n.setState({roles:a}));case 4:case"end":return e.stop()}}),e)}))),n.handleRow=function(e){return{onClick:function(t){n.setState({role:e})}}},n.addRole=function(){n.form.validateFields().then(function(){var e=Object(g.a)(O.a.mark((function e(t){var a,r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isDisplayAdd:!1}),a=t.roleName,n.form.resetFields(),e.next=5,z(a);case 5:0===(r=e.sent).status?(c=r.data,n.setState((function(e){return{roles:[].concat(Object(ye.a)(e.roles),[c])}}))):w.b.error("Create account fail");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){alert("Error",e)}))},n.handleCancel=function(){n.form.resetFields(),n.setState({isDisplayAdd:!1})},n.updateRole=Object(g.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isDisplayAuth:!1}),t=n.state.role,a=n.authSection.current.getMenus(),t.menus=a,t.auth_time=Date.now(),t.auth_name=n.props.user.username,e.next=8,K(t);case 8:0===e.sent.status&&(w.b.success("Role update success"),n.setState({roles:Object(ye.a)(n.state.roles)}));case 10:case"end":return e.stop()}}),e)}))),n.handleCancelChange=function(){n.setState({isDisplayAuth:!1})},n.authSection=i.a.createRef(),n}return Object(G.a)(a,[{key:"componentDidMount",value:function(){this.loadRoles()}},{key:"componentWillMount",value:function(){this.createColumn()}},{key:"render",value:function(){var e=this,t=this.state,a=t.role,r=t.roles,c=t.isDisplayAdd,s=t.isDisplayAuth,i=Object(n.jsxs)("span",{children:[Object(n.jsx)(l.a,{style:{marginRight:"20px"},onClick:function(){e.setState({isDisplayAdd:!0})},type:"primary",children:"Create account"}),Object(n.jsx)(l.a,{type:"primary",disabled:!a._id,onClick:function(){e.setState({isDisplayAuth:!0})},children:"Update accessibility"})]});return Object(n.jsxs)(le.a,{title:i,children:[Object(n.jsx)(me.a,{bordered:!0,rowKey:"_id",dataSource:r,columns:this.columns,pagination:{defaultPageSize:5},rowSelection:{type:"radio",selectedRowKeys:[a._id],onSelect:function(t){e.setState({role:t})}},onRow:this.handleRow}),Object(n.jsx)(ie.a,{title:"Create account",visible:c,onOk:this.addRole,onCancel:this.handleCancel,children:Object(n.jsx)(Ue,{setForm:function(t){return e.form=t}})}),Object(n.jsx)(ie.a,{title:"Set account accessibility",visible:s,onOk:this.updateRole,onCancel:this.handleCancelChange,children:Object(n.jsx)(Le,{ref:this.authSection,role:a})})]})}}]),a}(s.Component),Ke=Object(b.b)((function(e){return{user:e.user}}))(Fe),ze=(a(213),a(92)),We=(a(214),a(53)),Ee=function(e){Object(Q.a)(a,e);var t=Object(Y.a)(a);function a(){var e;Object($.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).goHome=function(){e.props.history.replace("/home")},e}return Object(G.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(ze.a,{className:"not-found",children:[Object(n.jsx)(We.a,{span:12,className:"left"}),Object(n.jsxs)(We.a,{span:12,className:"right",children:[Object(n.jsx)("h1",{children:"404"}),Object(n.jsx)("h2",{children:"Sorry, the request page is not find"}),Object(n.jsx)("div",{children:Object(n.jsx)(l.a,{type:"primary",onClick:this.goHome,children:"Back to dashboard"})})]})]})}}]),a}(s.Component),Ve=Z.a.Footer,Be=Z.a.Sider,Je=Z.a.Content,He=function(e){Object(Q.a)(a,e);var t=Object(Y.a)(a);function a(){return Object($.a)(this,a),t.apply(this,arguments)}return Object(G.a)(a,[{key:"render",value:function(){var e=this.props.user;return e&&e._id?Object(n.jsxs)(Z.a,{style:{minHeight:"100%"},children:[Object(n.jsx)(Be,{children:Object(n.jsx)(se,{})}),Object(n.jsxs)(Z.a,{children:[Object(n.jsx)(ue,{}),Object(n.jsx)(Je,{style:{margin:"20px",backgroundColor:"#fff"},children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.a,{exact:!0,from:"/",to:"/dashboard"}),Object(n.jsx)(u.b,{path:"/dashboard",component:he}),Object(n.jsx)(u.b,{path:"/category",component:Oe}),Object(n.jsx)(u.b,{path:"/product",component:Te}),Object(n.jsx)(u.b,{path:"/role",component:Ke}),Object(n.jsx)(u.b,{component:Ee})]})}),Object(n.jsx)(Ve,{style:{textAlign:"right",color:"#ccc"},children:"Made by Kexin Wen"})]})]}):Object(n.jsx)(u.a,{to:"/login"})}}]),a}(s.Component),$e=Object(b.b)((function(e){return{user:e.user}}))(He),Ge=function(e){return Object(n.jsx)(o.a,{children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{path:"/login",component:H}),Object(n.jsx)(u.b,{path:"/",component:$e})]})})},Qe=a(84),Ye=a(236),Ze=a(237);var Xe=Object(Qe.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E.getUser(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.user;case v:var a=t.errorMsg;return Object(Me.a)(Object(Me.a)({},e),{},{errorMsg:a});case y:return{};default:return e}},headTitle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Dashboard",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return t.data;default:return e}}}),et=Object(Qe.createStore)(Xe,Object(Ze.composeWithDevTools)(Object(Qe.applyMiddleware)(Ye.a)));c.a.render(Object(n.jsx)(b.a,{store:et,children:Object(n.jsx)(Ge,{})}),document.getElementById("root"))}},[[438,1,2]]]);
//# sourceMappingURL=main.cd57ce97.chunk.js.map