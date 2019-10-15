(this["webpackJsonpreact-rolodex"]=this["webpackJsonpreact-rolodex"]||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(9),i=a.n(s),r=a(2),c=a(3),d=a(4),o=a(6),u=a(5),m=a(1),p=a(7);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state=b({isEditing:!1},e),a.toggleIsEditing=a.toggleIsEditing.bind(Object(m.a)(a)),a.deleteContact=a.deleteContact.bind(Object(m.a)(a)),a.updateField=a.updateField.bind(Object(m.a)(a)),a.cancelEdit=a.cancelEdit.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"toggleIsEditing",value:function(){this.state.name&&this.state.number&&this.state.email&&this.state.address?this.setState({isEditing:!this.state.isEditing}):alert("Please fill out all forms.")}},{key:"deleteContact",value:function(e){e.target.parentNode.parentNode.remove()}},{key:"updateField",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"cancelEdit",value:function(){var e=this;this.setState(b({},this.props),(function(){return e.toggleIsEditing()}))}},{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null,this.state.isEditing?l.a.createElement("input",{type:"text",className:"form-control",name:"name",placeholder:"Name",defaultValue:this.state.name,onBlur:this.updateField}):l.a.createElement("span",null,this.state.name)),l.a.createElement("td",null,this.state.isEditing?l.a.createElement("input",{type:"text",className:"form-control",name:"number",placeholder:"Phone Number",defaultValue:this.state.number,onBlur:this.updateField}):l.a.createElement("span",null,this.state.number)),l.a.createElement("td",null,this.state.isEditing?l.a.createElement("input",{type:"text",className:"form-control",name:"email",placeholder:"Email",defaultValue:this.state.email,onBlur:this.updateField}):l.a.createElement("span",null,this.state.email)),l.a.createElement("td",null,this.state.isEditing?l.a.createElement("input",{type:"text",className:"form-control",name:"address",placeholder:"Address",defaultValue:this.state.address,onBlur:this.updateField}):l.a.createElement("span",null,this.state.address)),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-warning",name:"edit",onClick:this.toggleIsEditing,style:this.state.isEditing?{display:"none"}:{display:"inline"}},"Edit"),l.a.createElement("button",{type:"button",class:"btn btn-danger",name:"delete",onClick:this.deleteContact,style:this.state.isEditing?{display:"none"}:{display:"inline"}},"Delete"),l.a.createElement("button",{type:"button",class:"btn btn-success",name:"update",onClick:this.toggleIsEditing,style:this.state.isEditing?{display:"inline"}:{display:"none"}},"Update"),l.a.createElement("button",{type:"button",class:"btn btn-danger",name:"cancel",onClick:this.cancelEdit,style:this.state.isEditing?{display:"inline"}:{display:"none"}},"Cancel")))}}]),t}(l.a.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={contacts:[],name:"",number:"",email:"",address:""},a.addContact=a.addContact.bind(Object(m.a)(a)),a.updateInput=a.updateInput.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"addContact",value:function(e){var t={name:this.state.name,number:this.state.number,email:this.state.email,address:this.state.address};t.name&&t.number&&t.email&&t.address?this.setState({contacts:this.state.contacts.concat([t]),name:"",number:"",email:"",address:""}):alert("Please fill out all forms.")}},{key:"updateInput",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"React Rolodex"),l.a.createElement("table",{className:"table table-responsive"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{width:"19%"}},"Name"),l.a.createElement("th",{style:{width:"19%"}},"Phone Number"),l.a.createElement("th",{style:{width:"19%"}},"Email"),l.a.createElement("th",{style:{width:"19%"}},"Address"),l.a.createElement("th",{style:{width:"24%"}},"Action")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"form-control",name:"name",placeholder:"Name",value:this.state.name,onChange:this.updateInput})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"form-control",name:"number",placeholder:"Phone Number",value:this.state.number,onChange:this.updateInput})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"form-control",name:"email",placeholder:"Email",value:this.state.email,onChange:this.updateInput})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"form-control",name:"address",placeholder:"Address",value:this.state.address,onChange:this.updateInput})),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-primary",onClick:this.addContact},"Add Contact")))),l.a.createElement("tbody",null,this.state.contacts.map((function(e){return l.a.createElement(E,e)})))))}}]),t}(l.a.Component);i.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ca167489.chunk.js.map