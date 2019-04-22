(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{215:function(e,t,a){e.exports=a(369)},220:function(e,t,a){},340:function(e,t,a){},341:function(e,t){},369:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),i=a.n(l),c=(a(220),a(25)),o=a(19),m=a(27),s=a(26),f=a(28),g=a(16),u=a(2),h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={helpVisible:!1},a.runAndSubmit=function(){},a.showHelp=function(){a.setState(function(e){return{helpVisible:!0}})},a.hideHelp=function(){a.setState(function(e){return{helpVisible:!1}})},a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.category,a=e.title,n=e.description,l=e.classes,i=e.hints;return r.a.createElement("div",{className:l.root},r.a.createElement(u.i,{direction:"left",in:!0,timeout:500},r.a.createElement(u.a,null,r.a.createElement(u.k,null,r.a.createElement(u.l,{className:l.grow,variant:"h3",color:"inherit"},t),r.a.createElement(u.c,{color:"inherit",className:l.button},r.a.createElement("i",{className:"fas fa-book-open",style:{marginRight:10}}),"My Story")))),r.a.createElement("div",{className:l.spacing},r.a.createElement(u.f,{container:!0,spacing:24},r.a.createElement(u.f,{item:!0,xs:4},r.a.createElement(u.g,{in:!0,timeout:1e3},r.a.createElement(u.h,{className:l.paper,elevation:5},r.a.createElement("div",{className:l.title},a),r.a.createElement("hr",null),r.a.createElement("div",null,n),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(u.e,{className:l.btnHelp,variant:"extended",onClick:this.showHelp},"Hints",r.a.createElement("i",{style:{display:"block"},class:"fas fa-angle-down fa-lg"})))))),r.a.createElement(u.g,{in:!0,timeout:1500},r.a.createElement(u.f,{item:!0,xs:4},r.a.createElement(u.h,{className:l.paper,elevation:5}))),r.a.createElement(u.g,{in:!0,timeout:2e3},r.a.createElement(u.f,{item:!0,xs:4},r.a.createElement(u.h,{className:l.paper,elevation:5},r.a.createElement(u.e,{className:l.btnSubmit,color:"secondary",variant:"extended"},"Run & Submit",r.a.createElement("i",{class:"fas fa-angle-right fa-lg",style:{marginLeft:10}}))))),r.a.createElement(u.d,{anchor:"bottom",open:this.state.helpVisible,onClose:this.hideHelp},r.a.createElement("p",null,r.a.createElement("h1",{style:{marginLeft:50,marginTop:0}},r.a.createElement("i",{class:"fas fa-exclamation-triangle",style:{marginRight:10,color:"#ffb420"}}),"Remember:"),r.a.createElement("hr",null),r.a.createElement("div",{style:{marginLeft:50}},i))))))}}]),t}(n.Component),p=(Object(g.withStyles)(function(e){return{root:{position:"relative",padding:20,overflow:"auto"},grow:{flexGrow:1,textAlign:"left"},button:{textTransform:"capitalize",background:"#72bbf8"},btnSubmit:{textTransform:"capitalize",position:"absolute",color:"white",bottom:"3%",right:"4%"},btnHelp:{display:"block",opacity:.5,textTransform:"capitalize",background:"#ffb420",color:"white",width:"30%",left:"50%",transform:"translate(-50%, 0)",bottom:"3%","&:hover":{background:"#ffb420",opacity:1}},spacing:{flexGrow:1,marginTop:67},paper:{position:"relative",padding:2*e.spacing.unit,textAlign:"left",color:e.palette.text.primary,height:"83vh",overflow:"auto"},title:{padding:e.spacing.unit,textAlign:"center",color:e.palette.text.secondary,fontSize:"2em"}}})(h),a(340),a(24)),E=(a(341),Object(g.createMuiTheme)({palette:{primary:p.blue,secondary:{main:"#5ec95c"}}})),b={flexGrow:1},y={flexGrow:1,marginTop:45,marginLeft:10,marginRight:10,position:"relative",textAlign:"center",color:E.palette.text.primary,overflow:"auto"},d={marginLeft:-12,marginRight:20},v={margin:15},w=(n.Component,Object(g.createMuiTheme)({palette:{primary:p.blue,secondary:{main:"#5ec95c"}}})),x={flexGrow:1},k={direction:"row",textAlign:"left",overflow:"auto"},j={flexGrow:1,position:"relative",textAlign:"left",height:"83vh",overflow:"auto"},O={marginTop:40,marginLeft:20,marginRight:20,position:"relative",textAlign:"left",overflow:"auto"},T={margin:20,backgroundColor:"#72bbf8"},C={marginTop:87,marginLeft:20,marginRight:20,backgroundColor:"#5ec95c",color:"#fafafa"},N={margin:20,backgroundColor:"#ffb420"},R={margin:20,backgroundColor:"#2196f3",color:"#fafafa"},S={margin:20,color:"#616161"},L={margin:20,backgroundColor:"#616161"},A={marginLeft:-12,marginRight:20},H={marginTop:108,marginLeft:20,marginRight:20,backgroundColor:"#ffb420",color:"#fafafa"},G={marginTop:108,marginLeft:20,marginRight:20,backgroundColor:"#72bbf8",color:"#fafafa"},M=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(g.MuiThemeProvider,{theme:w},r.a.createElement("div",{style:x},r.a.createElement(u.f,{container:!0,spacing:16},r.a.createElement(u.f,{item:!0,xs:12},r.a.createElement(u.a,null,r.a.createElement(u.k,null,r.a.createElement(u.c,{color:"inherit",style:A},r.a.createElement("i",{className:"fas fa-qrcode",style:{marginRight:10}}),"UCode "),r.a.createElement(u.l,{variant:"h3",color:"inherit",style:x}," Style Guide")))),r.a.createElement(u.f,{item:!0,style:O,xs:12}),r.a.createElement(u.f,{item:!0,style:k,xs:4},r.a.createElement(u.h,{style:j},r.a.createElement(u.l,{variant:"h3",style:S}," Typography "),r.a.createElement(u.l,{variant:"h1",style:{margin:20}}," h1 "),r.a.createElement(u.l,{variant:"h2",style:{margin:20}}," h2 "),r.a.createElement(u.l,{variant:"h3",style:{margin:20}}," h3 "),r.a.createElement(u.l,{variant:"h4",style:{margin:20}}," h4 "))),r.a.createElement(u.f,{item:!0,style:k,xs:4},r.a.createElement(u.h,{style:j},r.a.createElement(u.f,{container:!0,spacing:12},r.a.createElement(u.f,{item:!0,xs:2,sm:6},r.a.createElement(u.l,{variant:"h3",style:S}," Colors "),r.a.createElement(u.b,{style:R}),r.a.createElement(u.l,{variant:"h6",style:{margin:20}}," #2196f3 "),r.a.createElement(u.b,{style:T}),r.a.createElement(u.l,{variant:"h6",style:{margin:20}}," #72bbf8 "),r.a.createElement(u.b,{style:L}),r.a.createElement(u.l,{variant:"h6",style:{margin:20}}," #616161 ")),r.a.createElement(u.f,{item:!0,xs:2},r.a.createElement(u.b,{style:C}),r.a.createElement(u.l,{variant:"h6",style:{margin:20}}," #5ec95c "),r.a.createElement(u.b,{style:N}),r.a.createElement(u.l,{variant:"h6",style:{margin:20}}," #ffb420 "))))),r.a.createElement(u.f,{item:!0,style:k,xs:4},r.a.createElement(u.h,{style:j},r.a.createElement(u.f,{container:!0,spacing:12},r.a.createElement(u.f,{item:!0,xs:2,sm:6},r.a.createElement(u.l,{variant:"h3",style:S}," Buttons "),r.a.createElement(u.c,{style:R}," Home "),r.a.createElement(u.c,{style:C}," Run/Submit ")),r.a.createElement(u.f,{item:!0,xs:2},r.a.createElement(u.c,{style:H}," Hint "),r.a.createElement(u.c,{style:G}," Navigation "))))))))}}]),t}(n.Component),z=Object(g.createMuiTheme)({palette:{primary:p.blue,secondary:{main:"#5ec95c"},helpcolor:{main:"#f4d142"}}}),V=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.MuiThemeProvider,{theme:z},r.a.createElement(M,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(136);Object(B.a)(),i.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[215,1,2]]]);
//# sourceMappingURL=main.e1be43f5.chunk.js.map