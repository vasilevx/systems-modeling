(window["webpackJsonpms-1"]=window["webpackJsonpms-1"]||[]).push([[0],{165:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(58),u=a.n(r),c=(a(17),a(12)),m=a(5),i=a(20),o=a(27),s=a(1),E=a(11),b=function(){var e=Object(l.useState)(.1),t=Object(s.a)(e,2),a=t[0],r=t[1],u=Object(l.useState)({x1:1800,x2:.8,x3:0,x4:0,x5:.8}),c=Object(s.a)(u,2),m=c[0],b=c[1],p=Object(l.useState)({time:[],xArrays:[],hArray:[],deltaArray:[],numberOfStepsArray:[]}),d=Object(s.a)(p,2),f=d[0],y=d[1],x=Object(l.useState)({p:1e5,a:.5,m:2e3,u:20,cx:.03,cy:.002,m1:.05,m2:.01,T:12,g:9.81}),h=Object(s.a)(x,2),v=h[0],O=h[1],j=v.p,g=v.a,A=v.m,M=v.u,S=v.cx,L=v.cy,k=v.m1,w=v.m2,C=v.T,V=v.g,R=function(e){for(var t=[0],a=Object(o.a)({},m),l=a.x1,n=a.x2,r=a.x3,u=a.x4,c=a.x5,i={x1:[l],x2:[n],x3:[r],x4:[u],x5:[c]},s=0,E=0;E<=C;E+=e)s+=1;for(var b=1;b<s;b++){var p=b*e;l+=e*(-V*Math.sin(n)+(j-g*S*Math.pow(l,2))/(A-M*p)),n+=e*((-V+(j*Math.sin(c-n)+g*L*Math.pow(l,2))/(A-M*p))/l),r+=e*((k*g*(n-c)*Math.pow(l,2)-w*g*Math.pow(l,2)*r)/(A-M*p)),u+=e*(l*Math.sin(n)),c+=e*r,i.x1.push(l),i.x2.push(n),i.x3.push(r),i.x4.push(u),i.x5.push(c),t.push(p)}return{xArrays:i,time:t,numberOfSteps:s,lastValues:{x1:l,x2:n,x3:r,x4:u,x5:c}}},N=function(){for(var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=100,l=[100],n=a,r=[a],u=0,c=0;c<C+n;c+=n)u+=1;var m,i,o=[u];if(e)for(;t>.001;){var s=R(n),E=s.lastValues,b=R(n/2),p=b.xArrays,d=b.lastValues,f=b.time,y=b.numberOfSteps;o.push(y),m=f,i=p,t=Math.abs((E.x4-d.x4)/d.x4),n/=2,r.push(n),l.push(t)}else{var x=R(n);i=x.xArrays,m=x.time,o=[x.numberOfSteps]}return{xArrays:i,time:m,numberOfStepsArray:o,hArray:r,deltaArray:l,h:n}},F=f.time,D=f.xArrays,K=f.hArray,q=f.deltaArray,H=void 0===q?[]:q,X=f.numberOfStepsArray,W=[{xLabel:"\u0412\u0440\u0435\u043c\u044f",yLabel:"x1",data:F.map((function(e,t){return{x:e,y:D.x1[t]}}))},{xLabel:"\u0412\u0440\u0435\u043c\u044f",yLabel:"x2",data:F.map((function(e,t){return{x:e,y:D.x2[t]}}))},{xLabel:"\u0412\u0440\u0435\u043c\u044f",yLabel:"x3",data:F.map((function(e,t){return{x:e,y:D.x3[t]}}))},{xLabel:"\u0412\u0440\u0435\u043c\u044f",yLabel:"x4",data:F.map((function(e,t){return{x:e,y:D.x4[t]}}))},{xLabel:"\u0412\u0440\u0435\u043c\u044f",yLabel:"x5",data:F.map((function(e,t){return{x:e,y:D.x5[t]}}))},{xLabel:"\u0428\u0430\u0433",yLabel:"delta",data:K.map((function(e,t){return{x:e,y:H[t]}}))},{xLabel:"\u0428\u0430\u0433",yLabel:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0448\u0430\u0433\u043e\u0432",data:K.map((function(e,t){return{x:e,y:X[t]}}))}];return console.log(v,f,a),n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement("div",{className:"parametersWrapper"},n.a.createElement("h2",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u043e\u0432"),n.a.createElement("ul",{className:"list"},Object.entries(v).map((function(e,t){var a=Object(s.a)(e,2),l=a[0],r=a[1];return n.a.createElement("li",{key:t},n.a.createElement("label",null,n.a.createElement("span",{className:"inputLabel"},l),n.a.createElement("input",{defaultValue:r,onChange:function(e){O(Object(o.a)({},v,Object(i.a)({},l,+e.target.value)))}})))})))),n.a.createElement("div",{className:"parametersWrapper"},n.a.createElement("h2",null,"\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"),n.a.createElement("ul",{className:"list"},Object.entries(m).map((function(e,t){var a=Object(s.a)(e,2),l=a[0],r=a[1];return n.a.createElement("li",{key:t},n.a.createElement("label",null,n.a.createElement("span",{className:"inputLabel"},"x",n.a.createElement("sub",null,l)),n.a.createElement("input",{defaultValue:r,onChange:function(e){b(Object(o.a)({},m,Object(i.a)({},l,+e.target.value)))}})))}))))),n.a.createElement("div",null,n.a.createElement("input",{type:"button",onClick:function(){return y(N(!1))},value:"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0448\u0430\u0433\u043e\u043c"}),n.a.createElement("input",{defaultValue:a,onChange:function(e){r(+e.target.value)}})),n.a.createElement("input",{type:"button",onClick:function(){return y(N(!0))},value:"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0441 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e 1%"}),n.a.createElement("div",{className:"gridContainer"},W.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement(E.a,{options:{scales:{xAxes:[{type:"linear",scaleLabel:{display:!0,labelString:e.xLabel}}],yAxes:[{scaleLabel:{display:!0,labelString:e.yLabel}}]},legend:{display:!1}},data:{datasets:[{data:e.data,fill:!1,borderColor:"blue"}]}}))}))))},p=a(4),d=[[3,2,1,0],[1,0,3,2]],f=[[0,0,1,1],[0,1,1,0]],y=function(){var e=Object(l.useRef)(null),t=Object(l.useState)(0),a=Object(s.a)(t,2),r=a[0],u=a[1],c=Object(l.useState)("-"),m=Object(s.a)(c,2),i=m[0],o=m[1],E=Object(l.useState)("-"),b=Object(s.a)(E,2),y=b[0],x=b[1];return Object(l.useEffect)((function(){"-"!==i&&(e.current.value+="\u0412\u0445\u043e\u0434 X".concat(i+1," -> \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 Z").concat(r+1," -> \u0412\u044b\u0445\u043e\u0434 Y").concat(y+1,"\n"))})),n.a.createElement("div",null,n.a.createElement("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432"),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null),Object(p.a)(new Array(4)).map((function(e,t){return n.a.createElement("th",{key:t},"Z",n.a.createElement("sub",null,t+1))}))),d.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("th",null,"X",n.a.createElement("sub",null,t+1)),e.map((function(e,t){return n.a.createElement("td",{key:t},"Z",n.a.createElement("sub",null,e+1))})))})))),n.a.createElement("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0432\u044b\u0445\u043e\u0434\u043e\u0432"),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null),Object(p.a)(new Array(4)).map((function(e,t){return n.a.createElement("th",{key:t},"Z",n.a.createElement("sub",null,t+1))}))),f.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("th",null,"X",n.a.createElement("sub",null,t+1)),e.map((function(e,t){return n.a.createElement("td",{key:t},"Y",n.a.createElement("sub",null,e+1))})))})))),n.a.createElement("p",null,"\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0430 - ",n.a.createElement("b",null,"X",r+1)),n.a.createElement("div",null,Object(p.a)(new Array(2)).map((function(e,t){return n.a.createElement("input",{key:t,type:"button",onClick:function(){u(d[t][r]),o(t),x(f[t][r])},value:"\u041f\u043e\u0434\u0430\u0442\u044c \u043d\u0430 \u0432\u0445\u043e\u0434 X".concat(t+1)})}))),n.a.createElement("textarea",{ref:e,style:{width:"320px",height:"300px"},disabled:!0}))},x=(a(161),function(e){return Math.atan(e)}),h=function(e){return Object(p.a)(new Array(e)).map((function(){return Math.random()}))},v=function(){var e=Object(l.useState)(!0),t=Object(s.a)(e,2),a=t[0],r=t[1],u=Object(l.useState)(50),c=Object(s.a)(u,2),m=c[0],i=c[1],o=h(m).sort((function(e,t){return e-t})).map(x),b=[],p=[],d=0,f=1,y=0,v=m>500?30:Math.floor(m/.75),O=Date.now();o.forEach((function(e,t){var a=function(e){return Math.tan(e)}(e);a<f&&(f=a),a>y&&(y=a);var l=(t+1)/m,n=Math.abs(a-l);n>d&&(d=n),b.push(l),p.push(a)}));for(var j=(y-f)/v,g=[],A=0;A<v;){var M=f+j*A,S=M+j;g[A]={minValue:M,maxValue:S,data:[],size:0},A++}o.forEach((function(e){g.forEach((function(t){var a=t.minValue,l=t.maxValue;e>=a&&e<=l&&(t.size+=1,t.data.push(e))}))}));var L=g.map((function(e){return{V:(e.minValue+e.maxValue)/2,P:e.size/m}})),k=L.reduce((function(e,t){return e+t.P*t.V}),0),w=L.reduce((function(e,t){return e+t.P*Math.pow(t.V-k,2)}),0),C=d*Math.sqrt(m),V=C<=1.22,R=o.map((function(e,t){return{x:e,y:p[t]}})),N=o.map((function(e,t){return{x:e,y:b[t]}})),F=Date.now();return console.log("Time",F-O),n.a.createElement("div",null,n.a.createElement("label",null,n.a.createElement("div",null,"\u0420\u0430\u0437\u043c\u0435\u0440 \u0432\u044b\u0431\u043e\u0440\u043a\u0438"),n.a.createElement("input",{type:"number",defaultValue:m,onKeyPress:function(e){"Enter"===e.key&&(i(+e.target.value),r(!a))}})),n.a.createElement("div",{style:{maxWidth:"700px"}},n.a.createElement(E.a,{options:{animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,elements:{line:{tension:0}},scales:{xAxes:[{type:"linear",scaleLabel:{display:!0,labelString:"Xi"}}],yAxes:[{scaleLabel:{display:!0,labelString:"F(x)"}}]},legend:{display:!0}},data:{datasets:[{data:N,fill:!1,borderColor:"blue",label:"F*(x)",pointRadius:0,pointHitRadius:0},{data:R,fill:!1,borderColor:"green",label:"F(x)",pointRadius:0,pointHitRadius:0}]}})),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u0394",n.a.createElement("sub",null,"p")),n.a.createElement("td",{colSpan:2},d.toFixed(3))),n.a.createElement("tr",null,n.a.createElement("th",null,"\u03bb",n.a.createElement("sub",null,"p")),n.a.createElement("td",{colSpan:2},n.a.createElement("b",{style:{color:V?"green":"red"}},C.toFixed(4)),n.a.createElement("b",null,V?"\u2a7d":">"," ",1.22))),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:3},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f")),n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",null,"\u0422\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439"),n.a.createElement("th",null,"\u042d\u043c\u043f\u0438\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439")),n.a.createElement("tr",null,n.a.createElement("th",null,"\u041c\u0430\u0442. \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0435"),n.a.createElement("th",null,.438),n.a.createElement("th",null,k.toFixed(3))),n.a.createElement("tr",null,n.a.createElement("th",null,"\u0414\u0438\u0441\u043f\u0435\u0440\u0441\u0438\u044f"),n.a.createElement("th",null,.053),n.a.createElement("th",null,w.toFixed(3))))))},O=.002,j=Math.sqrt(3e3),g=function(){for(var e=Object(l.useState)(1e4),t=Object(s.a)(e,2),a=t[0],r=(t[1],Object(l.useState)(!0)),u=Object(s.a)(r,2),c=u[0],m=u[1],i=h(a).map((function(e){return e-.5})),o=0,b=new Array(a).fill(0),d=0,f=Object(p.a)(Array(a-1).keys());d<f.length;d++){var y=f[d];b[y+1]=b[y]+O*(j/.5*i[y]-2*b[y]),o+=b[y+1]}o/=a;for(var x=new Array(750).fill(0).map((function(e,t){return.5*Math.exp(-2*t*O)})),v=[],g=0,A=Object(p.a)(Array(750).keys());g<A.length;g++){for(var M=A[g],S=0,L=0,k=Object(p.a)(Array(a-M).keys());L<k.length;L++){var w=k[L];S+=(b[w]-o)*(b[w+M]-o)}S/=a+1-M,v.push(S)}var C=x.map((function(e,t){return{x:t,y:e}})),V=v.map((function(e,t){return{x:t,y:e}}));return n.a.createElement("div",null,n.a.createElement("label",null,n.a.createElement("div",null,"\u0420\u0430\u0437\u043c\u0435\u0440 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 ",a),n.a.createElement("button",{onClick:function(){return m(!c)}},"\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),n.a.createElement("div",{style:{maxWidth:"700px"}},n.a.createElement(E.a,{options:{animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,elements:{line:{tension:0}},scales:{xAxes:[{type:"linear",scaleLabel:{display:!0,labelString:"t"}}],yAxes:[{scaleLabel:{display:!0,labelString:"K(t)"}}]},legend:{display:!0}},data:{datasets:[{data:C,fill:!1,borderColor:"blue",label:"\u0422\u0435\u043e\u0440. K(t)",pointRadius:0,pointHitRadius:0},{data:V,fill:!1,borderColor:"green",label:"\u042d\u043c\u043f\u0438\u0440\u0438\u0447\u0435\u0441\u043a\u0430\u044f K*(t)",pointRadius:0,pointHitRadius:0}]}})))};var A=Math.sqrt(1e3),M=function(){for(var e=Object(l.useState)(!0),t=Object(s.a)(e,2),a=t[0],r=t[1],u=function(e){for(var t=[];t.length<e;){var a=h(2).map((function(e){return 2*e-1})),l=Object(s.a)(a,2),n=l[0],r=l[1],u=Math.pow(n,2)+Math.pow(r,2);if(!(u>=1)){var c=Math.sqrt(-2*Math.log(u)/u);t.push(c*n),t.push(c*r)}}return t.slice(0,e)}(1e4),c=0,m=new Array(1e4).fill(0),i=0,o=Object(p.a)(Array(9999).keys());i<o.length;i++){var b=o[i];m[b+1]=m[b]+.002*(A/1*u[b]-1*m[b]),c+=m[b+1]}console.log(m),c/=1e4;for(var d=new Array(1500).fill(0).map((function(e,t){return 1*Math.exp(-1*t*.002)})),f=[],y=0,x=Object(p.a)(Array(1500).keys());y<x.length;y++){for(var v=x[y],O=0,j=0,g=Object(p.a)(Array(1e4-v).keys());j<g.length;j++){var M=g[j];O+=(m[M]-c)*(m[M+v]-c)}O/=10001-v,f.push(O)}var S=d.map((function(e,t){return{x:t,y:e}})),L=f.map((function(e,t){return{x:t,y:e}}));return n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return r(!a)}},"\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),n.a.createElement("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0430"),n.a.createElement("div",{style:{maxWidth:"700px"}},n.a.createElement(E.a,{options:{animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,elements:{line:{tension:0}},scales:{xAxes:[{type:"linear",scaleLabel:{display:!0,labelString:"t"}}],yAxes:[{scaleLabel:{display:!0,labelString:"K(t)"}}]},legend:{display:!0}},data:{datasets:[{data:S,fill:!1,borderColor:"blue",label:"\u0422\u0435\u043e\u0440. K(t)",pointRadius:0,pointHitRadius:0},{data:L,fill:!1,borderColor:"green",label:"\u042d\u043c\u043f\u0438\u0440\u0438\u0447\u0435\u0441\u043a\u0430\u044f K*(t)",pointRadius:0,pointHitRadius:0}]}})))},S=function(){return n.a.createElement("div",null)},L=function(e){return-Math.log(1-Math.random())/e},k=function(){for(var e=Object(l.useState)(!0),t=Object(s.a)(e,2),a=t[0],r=t[1],u=L(15),c=u+L(20),m=1,i=1;u<100;)m+=1,(u+=L(15))>c&&(i+=1,c=u+L(20));for(var o=i/m,E=3*Math.sqrt(o*(1-o)/m),b={err:E,p:o,t:u,N:m,M:i};E>.01;){for(var d=Math.round(9*o*(1-o)/Math.pow(.01,2)),f=0,y=Object(p.a)(Array(d).keys());f<y.length;f++){y[f];m+=1,(u+=L(15))>c&&(i+=1,c=u+L(20))}o=i/m,E=3*Math.sqrt(o*(1-o)/m)}var x={err:E,p:o,t:u,N:m,M:i};return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r(!a)}},n.a.createElement("button",{type:"submit"},"\u0421\u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"\u03bb"),n.a.createElement("td",null,15)),n.a.createElement("tr",null,n.a.createElement("td",null,"\u03bc"),n.a.createElement("td",null,20)),n.a.createElement("tr",null,n.a.createElement("td",null,"p"),n.a.createElement("td",null,.57)))),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null),n.a.createElement("td",null,"\u0417\u0430 100 \u0441\u0435\u043a\u0443\u043d\u0434"),n.a.createElement("td",null,"\u0421\u043f\u0443\u0441\u0442\u044f"," ",(x.t-b.t).toFixed(0)," ","\u0441\u0435\u043a\u0443\u043d\u0434")),n.a.createElement("tr",null,n.a.createElement("td",null,"t"),n.a.createElement("td",null,b.t.toFixed(0)),n.a.createElement("td",null,x.t.toFixed(0))),n.a.createElement("tr",null,n.a.createElement("td",null,"\u03b5*"),n.a.createElement("td",null,b.err),n.a.createElement("td",null,x.err)),n.a.createElement("tr",null,n.a.createElement("td",null,"N"),n.a.createElement("td",null,b.N),n.a.createElement("td",null,x.N)),n.a.createElement("tr",null,n.a.createElement("td",null,"M"),n.a.createElement("td",null,b.M),n.a.createElement("td",null,x.M)),n.a.createElement("tr",null,n.a.createElement("td",null,"p*"),n.a.createElement("td",null,b.p),n.a.createElement("td",null,x.p)))))},w=function(){return n.a.createElement("div",null)},C=function(){return n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement(m.b,{to:"/lab1"},"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u0430\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438\u043c\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0435\u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/lab2"},"\u0418\u043c\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0435 \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u0442\u0435\u0440\u043c\u0435\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0433\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0430")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/lab3"},"\u041f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0437\u0430\u043a\u043e\u043d\u043e\u043c \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/lab4"},"\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043c\u0435\u0442\u043e\u0434\u043e\u043c \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0430")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/lab5"},"\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0437\u0430\u043a\u043e\u043d\u043e\u043c \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438 \u043a\u043e\u0440\u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/lab6"},"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u0442\u0430\u0446\u0438\u043e\u043d\u0430\u0440\u043d\u043e\u0441\u0442\u0438 \u0438 \u044d\u0440\u0433\u043e\u0434\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/lab7"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0438\u043c\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0435 \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u043a\u0430\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043c\u0430\u0441\u0441\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0441 \u043e\u0442\u043a\u0430\u0437\u0430\u043c\u0438")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/lab8"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0438\u043c\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0435 \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u043d\u043e\u0433\u043e\u043a\u0430\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043c\u0430\u0441\u0441\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f")))},V=function(){return n.a.createElement("div",null,n.a.createElement(c.c,null,n.a.createElement(c.a,{path:"/:any"},n.a.createElement("div",null,n.a.createElement(m.b,{to:"/"},"\u041a \u0441\u043f\u0438\u0441\u043a\u0443 \u0440\u0430\u0431\u043e\u0442")))),n.a.createElement(c.c,null,n.a.createElement(c.a,{exact:!0,path:"/"},n.a.createElement(C,null)),n.a.createElement(c.a,{path:"/lab1"},n.a.createElement(b,null)),n.a.createElement(c.a,{path:"/lab2"},n.a.createElement(y,null)),n.a.createElement(c.a,{path:"/lab3"},n.a.createElement(v,null)),n.a.createElement(c.a,{path:"/lab4"},n.a.createElement(g,null)),n.a.createElement(c.a,{path:"/lab5"},n.a.createElement(M,null)),n.a.createElement(c.a,{path:"/lab6"},n.a.createElement(S,null)),n.a.createElement(c.a,{path:"/lab7"},n.a.createElement(k,null)),n.a.createElement(c.a,{path:"/lab8"},n.a.createElement(w,null))))};u.a.render(n.a.createElement(m.a,{basename:"/systems-modeling"},n.a.createElement(V,null)),document.getElementById("root"))},17:function(e,t,a){},62:function(e,t,a){e.exports=a(165)}},[[62,1,2]]]);
//# sourceMappingURL=main.c2f9a2db.chunk.js.map