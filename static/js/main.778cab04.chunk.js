(this.webpackJsonpsandbox=this.webpackJsonpsandbox||[]).push([[0],{179:function(e,t,a){e.exports=a(380)},184:function(e,t,a){},185:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},186:function(e,t,a){},380:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(16),i=a.n(l),o=(a(184),a(185),a(186),a(28)),c=a(29),u=a(17),s=a(30),d=a(31),p=a(148),m=a(149),b=a(50),f=a(161),g=a(163),h=a(162),v=a(40),E=a(61),y=a(62),I=a(53),O=a(52),x=a(157),j=a(20),R=a(60),S=a.n(R),k=a(160),G=a(159),D=function(e,t,a){var r=Array.from(e),n=r.splice(t,1),l=Object(O.a)(n,1)[0];return r.splice(a,0,l),r},C=function(e,t,a,r){var n=Array.from(e),l=Array.from(t),i=n.splice(a.index,1),o=Object(O.a)(i,1)[0];l.splice(r.index,0,o),n.splice(a.index,0,function(e,t){var a=e.id,r=parseInt(a.split("-")[1]),n=Object(I.a)({},e);return n.id="item-".concat(r+t),n}(o,e.length));var c={};return c[a.droppableId]=n,c[r.droppableId]=l,c},N=function(e,t){return Object(I.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),background:e?"lightgreen":"grey"},t)},w=function(e){return{background:e?"lightblue":"lightgrey",display:"flex",padding:8,overflow:"auto"}},U=(r.Component,function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).handleChange=r.handleChange.bind(Object(u.a)(r)),r.state={value:""},r}return Object(c.a)(a,[{key:"handleChange",value:function(e){console.log("VVVVVVV ",this.props.ref,e.target.value),this.setState({value:e.target.value})}},{key:"render",value:function(){return n.a.createElement(k.a,null,n.a.createElement(G.a,{type:this.props.type,disabled:this.props.disabled,value:this.state.value,onChange:this.handleChange,ref:this.props.myRef,placeholder:this.props.content}))}}]),a}(r.Component)),A=function(e,t,a,r){var n=Array.from(e),l=Array.from(t),i=n.splice(a.index,1),o=Object(O.a)(i,1)[0];l.splice(r.index,0,o),n.splice(a.index,0,function(e,t){var a=e.id,r=parseInt(a.split("-")[1]),n=Object(I.a)({},e);return n.id="item-".concat(r+t),n}(o,e.length));var c={};return c[a.droppableId]=n,c[r.droppableId]=l,c},P=function(e,t){return Object(I.a)({userSelect:"none",padding:12,margin:"0 0 ".concat(6,"px 0"),background:e?"lightgreen":"grey"},t)},V=function(e){return{background:e?"lightblue":"lightgrey",display:"flex",padding:6,overflow:"auto"}},z=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).symbols=[{id:"item-1",content:"Space",value:"\\s*",editable:!1},{id:"item-2",content:"Specific Text",value:"",editable:!0,type:"text"},{id:"item-3",content:"Specific Number",value:"",editable:!0,type:"number"},{id:"item-4",content:"Number",value:"[0-9,.]+",editable:!1},{id:"item-5",content:"String",value:"[a-z,A-Z]+",editable:!1},{id:"item-6",content:"OR",value:"|",editable:!1}],r.id2List={droppable:"items",droppable2:"selected"},r.getList=function(e){return r.state[r.id2List[e]]},r.onDragEnd=function(e){var t=e.source,a=e.destination;if(a)if(t.droppableId===a.droppableId){var n=function(e,t,a){var r=Array.from(e),n=r.splice(t,1),l=Object(O.a)(n,1)[0];return r.splice(a,0,l),r}(r.getList(t.droppableId),t.index,a.index),l={items:n};"droppable2"===t.droppableId&&(l={selected:n}),r.setState(l)}else if("droppable"===t.droppableId){var i=A(r.getList(t.droppableId),r.getList(a.droppableId),t,a);r.setState({items:i.droppable,selected:i.droppable2})}},r.handleValidSubmit=r.handleValidSubmit.bind(Object(u.a)(r)),r.handleInvalidSubmit=r.handleInvalidSubmit.bind(Object(u.a)(r)),r.addNewRule=r.addNewRule.bind(Object(u.a)(r)),r.removeRule=r.removeRule.bind(Object(u.a)(r)),r.state={uuid:e.groupUUID,prefix:void 0,text:void 0,postfix:void 0,freezeGroup:!1,capturePattern:void 0,items:r.symbols,selected:[{id:"item-0",content:"Start",editable:!1,value:"",ref:n.a.createRef()}]},r}return Object(c.a)(a,[{key:"handleValidSubmit",value:function(e,t){"groupCaptured-".concat(this.props.groupUUID);var a="freezeGroup-".concat(this.props.groupUUID),r=("customInput-".concat(this.props.groupUUID),"");this.state.selected.map((function(e,t){e.editable?e.ref&&e.ref.current&&e.ref.current.props&&""!==e.ref.current.props.value?(console.log("Value Ref2 ",e.ref.current.props.value),r+=e.ref.current.props.value):console.log("Emty Ref2 ",e):r+=e.value})),this.setState({freezeGroup:t[a],pattern:"(".concat(r,")")})}},{key:"handleInvalidSubmit",value:function(e,t){console.log("handleInvalidSubmit ",e,t)}},{key:"addNewRule",value:function(){this.props._addNewRule(this.props.groupUUID)}},{key:"removeRule",value:function(){this.props._removeRule(this.props.groupUUID)}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(v.AvForm,{onValidSubmit:this.handleValidSubmit,onInvalidSubmit:this.handleInvalidSubmit},n.a.createElement(p.a,{className:"mb-2 mt-2 ml-2 mr-2"},n.a.createElement(m.a,{md:"10",xs:"12"},n.a.createElement(j.a,{onDragEnd:this.onDragEnd},n.a.createElement(p.a,null,n.a.createElement(m.a,null,n.a.createElement(j.c,{droppableId:"droppable",direction:"horizontal"},(function(t,a){return n.a.createElement("div",{ref:t.innerRef,style:V(a.isDraggingOver)},e.state.items.map((function(e,t){return n.a.createElement(j.b,{key:e.id,draggableId:e.id,index:t},(function(t,a){return n.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:P(a.isDragging,t.draggableProps.style)}),e.content)}))})),t.placeholder)})))),n.a.createElement(p.a,null,n.a.createElement(m.a,null,n.a.createElement(S.a,null,n.a.createElement(j.c,{droppableId:"droppable2",direction:"horizontal"},(function(t,a){return n.a.createElement("div",{ref:t.innerRef,style:V(a.isDraggingOver)},e.state.selected.map((function(t,a){return n.a.createElement(j.b,{key:t.id,draggableId:t.id,index:a},(function(a,r){return n.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps,{style:P(r.isDragging,a.draggableProps.style)}),(t.ref=n.a.createRef(),t.editable?n.a.createElement(U,{type:t.type,disabled:!!e.state.freezeGroup,myRef:t.ref,placeholder:t.content}):t.content))}))})),t.placeholder)}))))))),n.a.createElement(m.a,{md:"2",xs:"12"},n.a.createElement(S.a,null,n.a.createElement(p.a,{className:"mb-2"},n.a.createElement(m.a,{md:"12",xs:"12"},n.a.createElement(b.a,{id:"button-fluid",color:"secondary"},n.a.createElement(v.AvInput,{disabled:!!this.state.freezeGroup,tag:x.a,type:"checkbox",name:"groupCaptured-".concat(this.props.groupUUID),label:"Capture"})))),n.a.createElement(p.a,{className:"mb-2"},n.a.createElement(m.a,{md:"12",xs:"12"},n.a.createElement(b.a,{id:"button-fluid",color:"secondary"},n.a.createElement(v.AvInput,{disabled:!!this.state.freezeGroup,tag:x.a,type:"checkbox",name:"freezeGroup-".concat(this.props.groupUUID),label:"Freeze"})))),n.a.createElement(p.a,null,n.a.createElement(m.a,{md:"6",xs:"6"},n.a.createElement(b.a,{id:"button-fluid",color:"secondary",onClick:this.addNewRule},n.a.createElement(E.a,{icon:y.b}))),n.a.createElement(m.a,{md:"6",xs:"6"},n.a.createElement(b.a,{id:"button-fluid",color:"secondary",onClick:this.removeRule},n.a.createElement(E.a,{icon:y.a})))))))))}}]),a}(r.Component),F=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).currentID=0,r.addNewRule=r.addNewRule.bind(Object(u.a)(r)),r.removeRule=r.removeRule.bind(Object(u.a)(r)),r.addFirstGroup=r.addFirstGroup.bind(Object(u.a)(r)),r.generateCapturePattern=r.generateCapturePattern.bind(Object(u.a)(r)),r.state={captureGroups:[{uuid:r.currentID,ref:n.a.createRef()}],pattern:void 0},r}return Object(c.a)(a,[{key:"addFirstGroup",value:function(){console.log("CapturePatternBuilder::addFirstGroup"),this.currentID=0,this.setState({captureGroups:[{uuid:this.currentID,groups:n.a.createRef()}]})}},{key:"generateCapturePattern",value:function(){var e="";this.state.captureGroups.map((function(t,a){var r=t.ref.current.state;e+=r.pattern})),this.setState({pattern:e}),console.log("PATTERN ",this.state.pattern)}},{key:"addNewRule",value:function(e){for(var t=-1,a=0;a<this.state.captureGroups.length;a+=1)this.state.captureGroups[a].uuid===e&&(t=a+1);this.currentID++,this.state.captureGroups.splice(t,0,{uuid:this.currentID,ref:n.a.createRef()}),this.setState({captureGroups:this.state.captureGroups})}},{key:"removeRule",value:function(e){for(var t=-1,a=0;a<this.state.captureGroups.length;a+=1)this.state.captureGroups[a].uuid===e&&(t=a);-1!==t&&(this.state.captureGroups.splice(t,1),this.setState({captureGroups:this.state.captureGroups}))}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,this.state.captureGroups.map((function(t,a){return n.a.createElement(z,{ref:t.ref,key:t.uuid,groupUUID:t.uuid,prefixOptions:[{value:"Single Space",pattern:"\\s"},{value:"One or more Space",pattern:"\\s*"}],postfixOptions:[{value:"One or more Space",pattern:"\\s*"},{value:"String",pattern:"[a-z,A-Z]*"},{value:"Number",pattern:"[0-9,.]+"}],_addNewRule:e.addNewRule,_removeRule:e.removeRule})})),n.a.createElement(p.a,{className:"mb-2 mt-2 ml-2 mr-2"},n.a.createElement(m.a,null,n.a.createElement(b.a,{id:"button-fluid",onClick:0===this.state.captureGroups.length?this.addFirstGroup:this.generateCapturePattern},0===this.state.captureGroups.length?n.a.createElement(E.a,{icon:y.b}):"Generate"))),n.a.createElement(p.a,{className:"mb-2 mt-2 ml-2 mr-2"},n.a.createElement(m.a,null,n.a.createElement(f.a,{id:"toast-fluid"},n.a.createElement(g.a,null,"Pattern "),n.a.createElement(h.a,null,this.state.pattern)))))}}]),a}(r.Component),L=a(158),T=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement(v.AvForm,null,n.a.createElement(p.a,{className:"mb-2 mt-2 ml-2 mr-2"},n.a.createElement(m.a,{md:"6",xs:"12"},n.a.createElement(f.a,{id:"toast-fluid"},n.a.createElement(g.a,null,"Telegram Signal "),n.a.createElement(h.a,null,n.a.createElement(L.a,null,n.a.createElement(v.AvField,{name:"telegramMessage",type:"textarea",validate:{required:{value:!0,errorMessage:"Telegram Message is required"}}}))))),n.a.createElement(m.a,{md:"6",xs:"12"},n.a.createElement(f.a,{id:"toast-fluid"},n.a.createElement(g.a,null,"Trade Signal "),n.a.createElement(h.a,null)))),n.a.createElement(p.a,null,n.a.createElement(m.a,null,n.a.createElement(F,null))))))}}]),a}(r.Component);var M=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(379);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[179,1,2]]]);
//# sourceMappingURL=main.778cab04.chunk.js.map