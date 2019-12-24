(window["webpackJsonpms-1"]=window["webpackJsonpms-1"]||[]).push([[0],{165:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(58),u=a.n(r),c=(a(17),a(12)),m=a(5),i=a(20),o=a(27),E=a(1),s=a(11),d=function(){var e=Object(l.useState)(.1),t=Object(E.a)(e,2),a=t[0],r=t[1],u=Object(l.useState)({x1:1800,x2:.8,x3:0,x4:0,x5:.8}),c=Object(E.a)(u,2),m=c[0],d=c[1],b=Object(l.useState)({time:[],xArrays:[],hArray:[],deltaArray:[],numberOfStepsArray:[]}),p=Object(E.a)(b,2),f=p[0],h=p[1],y=Object(l.useState)({p:1e5,a:.5,m:2e3,u:20,cx:.03,cy:.002,m1:.05,m2:.01,T:12,g:9.81}),x=Object(E.a)(y,2),v=x[0],O=x[1],j=v.p,g=v.a,M=v.m,A=v.u,k=v.cx,S=v.cy,L=v.m1,w=v.m2,C=v.T,N=v.g,V=function(e){for(var t=[0],a=Object(o.a)({},m),l=a.x1,n=a.x2,r=a.x3,u=a.x4,c=a.x5,i={x1:[l],x2:[n],x3:[r],x4:[u],x5:[c]},E=0,s=0;s<=C;s+=e)E+=1;for(var d=1;d<E;d++){var b=d*e;l+=e*(-N*Math.sin(n)+(j-g*k*Math.pow(l,2))/(M-A*b)),n+=e*((-N+(j*Math.sin(c-n)+g*S*Math.pow(l,2))/(M-A*b))/l),r+=e*((L*g*(n-c)*Math.pow(l,2)-w*g*Math.pow(l,2)*r)/(M-A*b)),u+=e*(l*Math.sin(n)),c+=e*r,i.x1.push(l),i.x2.push(n),i.x3.push(r),i.x4.push(u),i.x5.push(c),t.push(b)}return{xArrays:i,time:t,numberOfSteps:E,lastValues:{x1:l,x2:n,x3:r,x4:u,x5:c}}},F=function(){for(var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=100,l=[100],n=a,r=[a],u=0,c=0;c<C+n;c+=n)u+=1;var m,i,o=[u];if(e)for(;t>.001;){var E=V(n),s=E.lastValues,d=V(n/2),b=d.xArrays,p=d.lastValues,f=d.time,h=d.numberOfSteps;o.push(h),m=f,i=b,t=Math.abs((s.x4-p.x4)/p.x4),n/=2,r.push(n),l.push(t)}else{var y=V(n);i=y.xArrays,m=y.time,o=[y.numberOfSteps]}return{xArrays:i,time:m,numberOfStepsArray:o,hArray:r,deltaArray:l,h:n}},R=f.time,D=f.xArrays,q=f.hArray,H=f.deltaArray,K=void 0===H?[]:H,X=f.numberOfStepsArray,W=[{xLabel:"\u0412\u0440\u0435\u043c\u044f",yLabel:"x1",data:R.map((function(e,t){return{x:e,y:D.x1[t]}}))},{xLabel:"\u0412\u0440\u0435\u043c\u044f",yLabel:"x2",data:R.map((function(e,t){return{x:e,y:D.x2[t]}}))},{xLabel:"\u0412\u0440\u0435\u043c\u044f",yLabel:"x3",data:R.map((function(e,t){return{x:e,y:D.x3[t]}}))},{xLabel:"\u0412\u0440\u0435\u043c\u044f",yLabel:"x4",data:R.map((function(e,t){return{x:e,y:D.x4[t]}}))},{xLabel:"\u0412\u0440\u0435\u043c\u044f",yLabel:"x5",data:R.map((function(e,t){return{x:e,y:D.x5[t]}}))},{xLabel:"\u0428\u0430\u0433",yLabel:"delta",data:q.map((function(e,t){return{x:e,y:K[t]}}))},{xLabel:"\u0428\u0430\u0433",yLabel:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0448\u0430\u0433\u043e\u0432",data:q.map((function(e,t){return{x:e,y:X[t]}}))}];return console.log(v,f,a),n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement("div",{className:"parametersWrapper"},n.a.createElement("h2",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u043e\u0432"),n.a.createElement("ul",{className:"list"},Object.entries(v).map((function(e,t){var a=Object(E.a)(e,2),l=a[0],r=a[1];return n.a.createElement("li",{key:t},n.a.createElement("label",null,n.a.createElement("span",{className:"inputLabel"},l),n.a.createElement("input",{defaultValue:r,onChange:function(e){O(Object(o.a)({},v,Object(i.a)({},l,+e.target.value)))}})))})))),n.a.createElement("div",{className:"parametersWrapper"},n.a.createElement("h2",null,"\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"),n.a.createElement("ul",{className:"list"},Object.entries(m).map((function(e,t){var a=Object(E.a)(e,2),l=a[0],r=a[1];return n.a.createElement("li",{key:t},n.a.createElement("label",null,n.a.createElement("span",{className:"inputLabel"},"x",n.a.createElement("sub",null,l)),n.a.createElement("input",{defaultValue:r,onChange:function(e){d(Object(o.a)({},m,Object(i.a)({},l,+e.target.value)))}})))}))))),n.a.createElement("div",null,n.a.createElement("input",{type:"button",onClick:function(){return h(F(!1))},value:"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0448\u0430\u0433\u043e\u043c"}),n.a.createElement("input",{defaultValue:a,onChange:function(e){r(+e.target.value)}})),n.a.createElement("input",{type:"button",onClick:function(){return h(F(!0))},value:"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0441 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e 1%"}),n.a.createElement("div",{className:"gridContainer"},W.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement(s.a,{options:{scales:{xAxes:[{type:"linear",scaleLabel:{display:!0,labelString:e.xLabel}}],yAxes:[{scaleLabel:{display:!0,labelString:e.yLabel}}]},legend:{display:!1}},data:{datasets:[{data:e.data,fill:!1,borderColor:"blue"}]}}))}))))},b=a(2),p=[[3,2,1,0],[1,0,3,2]],f=[[0,0,1,1],[0,1,1,0]],h=function(){var e=Object(l.useRef)(null),t=Object(l.useState)(0),a=Object(E.a)(t,2),r=a[0],u=a[1],c=Object(l.useState)("-"),m=Object(E.a)(c,2),i=m[0],o=m[1],s=Object(l.useState)("-"),d=Object(E.a)(s,2),h=d[0],y=d[1];return Object(l.useEffect)((function(){"-"!==i&&(e.current.value+="\u0412\u0445\u043e\u0434 X".concat(i+1," -> \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 Z").concat(r+1," -> \u0412\u044b\u0445\u043e\u0434 Y").concat(h+1,"\n"))})),n.a.createElement("div",null,n.a.createElement("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432"),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null),Object(b.a)(new Array(4)).map((function(e,t){return n.a.createElement("th",{key:t},"Z",n.a.createElement("sub",null,t+1))}))),p.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("th",null,"X",n.a.createElement("sub",null,t+1)),e.map((function(e,t){return n.a.createElement("td",{key:t},"Z",n.a.createElement("sub",null,e+1))})))})))),n.a.createElement("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0432\u044b\u0445\u043e\u0434\u043e\u0432"),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null),Object(b.a)(new Array(4)).map((function(e,t){return n.a.createElement("th",{key:t},"Z",n.a.createElement("sub",null,t+1))}))),f.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("th",null,"X",n.a.createElement("sub",null,t+1)),e.map((function(e,t){return n.a.createElement("td",{key:t},"Y",n.a.createElement("sub",null,e+1))})))})))),n.a.createElement("p",null,"\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0430 - ",n.a.createElement("b",null,"X",r+1)),n.a.createElement("div",null,Object(b.a)(new Array(2)).map((function(e,t){return n.a.createElement("input",{key:t,type:"button",onClick:function(){u(p[t][r]),o(t),y(f[t][r])},value:"\u041f\u043e\u0434\u0430\u0442\u044c \u043d\u0430 \u0432\u0445\u043e\u0434 X".concat(t+1)})}))),n.a.createElement("textarea",{ref:e,style:{width:"320px",height:"300px"},disabled:!0}))},y=(a(161),function(e){return Math.atan(e)}),x=function(e){return Object(b.a)(new Array(e)).map((function(){return Math.random()}))},v=function(){var e=Object(l.useState)(!0),t=Object(E.a)(e,2),a=t[0],r=t[1],u=Object(l.useState)(50),c=Object(E.a)(u,2),m=c[0],i=c[1],o=x(m).sort((function(e,t){return e-t})).map(y),d=[],b=[],p=0,f=1,h=0,v=m>500?30:Math.floor(m/.75),O=Date.now();o.forEach((function(e,t){var a=function(e){return Math.tan(e)}(e);a<f&&(f=a),a>h&&(h=a);var l=(t+1)/m,n=Math.abs(a-l);n>p&&(p=n),d.push(l),b.push(a)}));for(var j=(h-f)/v,g=[],M=0;M<v;){var A=f+j*M,k=A+j;g[M]={minValue:A,maxValue:k,data:[],size:0},M++}o.forEach((function(e){g.forEach((function(t){var a=t.minValue,l=t.maxValue;e>=a&&e<=l&&(t.size+=1,t.data.push(e))}))}));var S=g.map((function(e){return{V:(e.minValue+e.maxValue)/2,P:e.size/m}})),L=S.reduce((function(e,t){return e+t.P*t.V}),0),w=S.reduce((function(e,t){return e+t.P*Math.pow(t.V-L,2)}),0),C=p*Math.sqrt(m),N=C<=1.22,V=o.map((function(e,t){return{x:e,y:b[t]}})),F=o.map((function(e,t){return{x:e,y:d[t]}})),R=Date.now();console.log("Time",R-O);var D=Object(l.useRef)();return n.a.createElement("div",null,n.a.createElement("label",null,n.a.createElement("div",null,"\u0420\u0430\u0437\u043c\u0435\u0440 \u0432\u044b\u0431\u043e\u0440\u043a\u0438"),n.a.createElement("input",{ref:D,type:"number",defaultValue:m}),n.a.createElement("button",{onClick:function(e){e.preventDefault(),i(+D.current.value),r(!a)}},"\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),n.a.createElement("div",{style:{maxWidth:"700px"}},n.a.createElement(s.a,{options:{animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,elements:{line:{tension:0}},scales:{xAxes:[{type:"linear",scaleLabel:{display:!0,labelString:"Xi"}}],yAxes:[{scaleLabel:{display:!0,labelString:"F(x)"}}]},legend:{display:!0}},data:{datasets:[{data:F,steppedLine:!0,fill:!1,borderColor:"blue",label:"F*(x)",pointRadius:0,pointHitRadius:0},{data:V,steppedLine:!0,fill:!1,borderColor:"green",label:"F(x)",pointRadius:0,pointHitRadius:0}]}})),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u0394",n.a.createElement("sub",null,"p")),n.a.createElement("td",{colSpan:2},p.toFixed(3))),n.a.createElement("tr",null,n.a.createElement("th",null,"\u03bb",n.a.createElement("sub",null,"p")),n.a.createElement("td",{colSpan:2},n.a.createElement("b",{style:{color:N?"green":"red"}},C.toFixed(4)),n.a.createElement("b",null,N?"\u2a7d":">"," ",1.22))),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:3},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f")),n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",null,"\u0422\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439"),n.a.createElement("th",null,"\u042d\u043c\u043f\u0438\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439")),n.a.createElement("tr",null,n.a.createElement("th",null,"\u041c\u0430\u0442. \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0435"),n.a.createElement("th",null,.438),n.a.createElement("th",null,L.toFixed(3))),n.a.createElement("tr",null,n.a.createElement("th",null,"\u0414\u0438\u0441\u043f\u0435\u0440\u0441\u0438\u044f"),n.a.createElement("th",null,.053),n.a.createElement("th",null,w.toFixed(3))))))},O=.002,j=Math.sqrt(3e3),g=function(){for(var e=Object(l.useState)(1e4),t=Object(E.a)(e,2),a=t[0],r=(t[1],Object(l.useState)(!0)),u=Object(E.a)(r,2),c=u[0],m=u[1],i=x(a).map((function(e){return e-.5})),o=0,d=new Array(a).fill(0),p=0,f=Object(b.a)(Array(a-1).keys());p<f.length;p++){var h=f[p];d[h+1]=d[h]+O*(j/.5*i[h]-2*d[h]),o+=d[h+1]}o/=a;for(var y=new Array(750).fill(0).map((function(e,t){return.5*Math.exp(-2*t*O)})),v=[],g=0,M=Object(b.a)(Array(750).keys());g<M.length;g++){for(var A=M[g],k=0,S=0,L=Object(b.a)(Array(a-A).keys());S<L.length;S++){var w=L[S];k+=(d[w]-o)*(d[w+A]-o)}k/=a+1-A,v.push(k)}var C=y.map((function(e,t){return{x:t,y:e}})),N=v.map((function(e,t){return{x:t,y:e}}));return n.a.createElement("div",null,n.a.createElement("label",null,n.a.createElement("div",null,"\u0420\u0430\u0437\u043c\u0435\u0440 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 ",a),n.a.createElement("button",{onClick:function(){return m(!c)}},"\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),n.a.createElement("div",{style:{maxWidth:"700px"}},n.a.createElement(s.a,{options:{animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,elements:{line:{tension:0}},scales:{xAxes:[{type:"linear",scaleLabel:{display:!0,labelString:"t"}}],yAxes:[{scaleLabel:{display:!0,labelString:"K(t)"}}]},legend:{display:!0}},data:{datasets:[{data:C,steppedLine:!0,fill:!1,borderColor:"blue",label:"\u0422\u0435\u043e\u0440. K(t)",pointRadius:0,pointHitRadius:0},{data:N,steppedLine:!0,fill:!1,borderColor:"green",label:"\u042d\u043c\u043f\u0438\u0440\u0438\u0447\u0435\u0441\u043a\u0430\u044f K*(t)",pointRadius:0,pointHitRadius:0}]}})))};var M=Math.sqrt(1e3),A=function(){for(var e=Object(l.useState)(!0),t=Object(E.a)(e,2),a=t[0],r=t[1],u=function(e){for(var t=[];t.length<e;){var a=x(2).map((function(e){return 2*e-1})),l=Object(E.a)(a,2),n=l[0],r=l[1],u=Math.pow(n,2)+Math.pow(r,2);if(!(u>=1)){var c=Math.sqrt(-2*Math.log(u)/u);t.push(c*n),t.push(c*r)}}return t.slice(0,e)}(1e4),c=0,m=new Array(1e4).fill(0),i=0,o=Object(b.a)(Array(9999).keys());i<o.length;i++){var d=o[i];m[d+1]=m[d]+.002*(M/1*u[d]-1*m[d]),c+=m[d+1]}console.log(m),c/=1e4;for(var p=new Array(1500).fill(0).map((function(e,t){return 1*Math.exp(-1*t*.002)})),f=[],h=0,y=Object(b.a)(Array(1500).keys());h<y.length;h++){for(var v=y[h],O=0,j=0,g=Object(b.a)(Array(1e4-v).keys());j<g.length;j++){var A=g[j];O+=(m[A]-c)*(m[A+v]-c)}O/=10001-v,f.push(O)}var k=p.map((function(e,t){return{x:t,y:e}})),S=f.map((function(e,t){return{x:t,y:e}}));return n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return r(!a)}},"\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),n.a.createElement("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0430"),n.a.createElement("div",{style:{maxWidth:"700px"}},n.a.createElement(s.a,{options:{animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,elements:{line:{tension:0}},scales:{xAxes:[{type:"linear",scaleLabel:{display:!0,labelString:"t"}}],yAxes:[{scaleLabel:{display:!0,labelString:"K(t)"}}]},legend:{display:!0}},data:{datasets:[{data:k,steppedLine:!0,fill:!1,borderColor:"blue",label:"\u0422\u0435\u043e\u0440. K(t)",pointRadius:0,pointHitRadius:0},{data:S,steppedLine:!0,fill:!1,borderColor:"green",label:"\u042d\u043c\u043f\u0438\u0440\u0438\u0447\u0435\u0441\u043a\u0430\u044f K*(t)",pointRadius:0,pointHitRadius:0}]}})))},k=function(){return n.a.createElement("div",null)},S=function(e){return-Math.log(1-Math.random())/e},L=function(){for(var e=Object(l.useState)(!0),t=Object(E.a)(e,2),a=t[0],r=t[1],u=S(15),c=u+S(20),m=1,i=1;u<100;)m+=1,(u+=S(15))>c&&(i+=1,c=u+S(20));for(var o=i/m,s=3*Math.sqrt(o*(1-o)/m),d={err:s,p:o,t:u,N:m,M:i};s>.01;){for(var p=Math.round(9*o*(1-o)/Math.pow(.01,2)),f=0,h=Object(b.a)(Array(p).keys());f<h.length;f++){h[f];m+=1,(u+=S(15))>c&&(i+=1,c=u+S(20))}o=i/m,s=3*Math.sqrt(o*(1-o)/m)}var y={err:s,p:o,t:u,N:m,M:i};return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r(!a)}},n.a.createElement("button",{type:"submit"},"\u0421\u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"\u03bb"),n.a.createElement("td",null,15)),n.a.createElement("tr",null,n.a.createElement("td",null,"\u03bc"),n.a.createElement("td",null,20)),n.a.createElement("tr",null,n.a.createElement("td",null,"p"),n.a.createElement("td",null,.57)))),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null),n.a.createElement("td",null,"\u0417\u0430 100 \u0441."),n.a.createElement("td",null,"\u0421\u043f\u0443\u0441\u0442\u044f"," ",(y.t-d.t).toFixed(0)," \u0441.")),n.a.createElement("tr",null,n.a.createElement("td",null,"t"),n.a.createElement("td",null,d.t.toFixed(0)),n.a.createElement("td",null,y.t.toFixed(0))),n.a.createElement("tr",null,n.a.createElement("td",null,"\u03b5*"),n.a.createElement("td",null,d.err),n.a.createElement("td",null,y.err)),n.a.createElement("tr",null,n.a.createElement("td",null,"N"),n.a.createElement("td",null,d.N),n.a.createElement("td",null,y.N)),n.a.createElement("tr",null,n.a.createElement("td",null,"M"),n.a.createElement("td",null,d.M),n.a.createElement("td",null,y.M)),n.a.createElement("tr",null,n.a.createElement("td",null,"p*"),n.a.createElement("td",null,d.p),n.a.createElement("td",null,y.p)))))};function w(e){return 0===e?1:1!=e?e*w(e-1):1}var C=1-function(){for(var e=0,t=0,a=Object(b.a)(Array(4).keys());t<a.length;t++){var l=a[t];e+=Math.pow(.75,l)/w(l)}for(var n=0,r=0,u=Object(b.a)(Array(2).keys());r<u.length;r++){var c=u[r];0!==c&&(n+=Math.pow(.75,3+c)/(w(3)*Math.pow(3,c)))}return Math.pow(.75,4)/(w(3)*Math.pow(3,1))/(e+n)}(),N=function(e){return-Math.log(1-Math.random())/e},V=function(){for(var e=Object(l.useState)(!0),t=Object(E.a)(e,2),a=t[0],r=t[1],u=0,c=0,m=Array(3).fill(0),i=0,o=0,s=0,d=0,p=function(){c+=N(15),i+=1;var e=c;3===m.filter((function(t){return e<t})).length&&u<1&&(u+=1);for(var t=function(){var e=l[a],t=c;if(c>m[e]){0!==u&&(u-=1);var n=1;return n=m.filter((function(e){return t<e})).length,m[e]=c+N(20*n),o+=1,"break"}},a=0,l=Object(b.a)(Array(3).keys());a<l.length;a++){if("break"===t())break}s=o/i,d=3*Math.sqrt(s*(1-s)/i)};c<100;)p();for(var f={err:d,p:s,t:c,N:i,M:o};d>.01;){for(var h=Math.round(9*s*(1-s)/Math.pow(.01,2)),y=function(){v[x];c+=N(15),i+=1;var e=c;3===m.filter((function(t){return e<t})).length&&u<1&&(u+=1);for(var t=function(){var e=l[a],t=c;if(c>m[e]){0!==u&&(u-=1);var n=1;return n=m.filter((function(e){return t<e})).length,m[e]=c+N(20*n),o+=1,"break"}},a=0,l=Object(b.a)(Array(3).keys());a<l.length;a++){if("break"===t())break}},x=0,v=Object(b.a)(Array(h).keys());x<v.length;x++)y();s=o/i,d=3*Math.sqrt(s*(1-s)/i)}var O={err:d,p:s,t:c,N:i,M:o};return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r(!a)}},n.a.createElement("button",{type:"submit"},"\u0421\u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"\u03bb"),n.a.createElement("td",null,15)),n.a.createElement("tr",null,n.a.createElement("td",null,"\u03bc"),n.a.createElement("td",null,20)),n.a.createElement("tr",null,n.a.createElement("td",null,"p"),n.a.createElement("td",null,C)),n.a.createElement("tr",null,n.a.createElement("td",null,"m"),n.a.createElement("td",null,1)),n.a.createElement("tr",null,n.a.createElement("td",null,"n"),n.a.createElement("td",null,3)))),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null),n.a.createElement("td",null,"\u0417\u0430 100 \u0441."),n.a.createElement("td",null,"\u0421\u043f\u0443\u0441\u0442\u044f"," ",(O.t-f.t).toFixed(0)," \u0441.")),n.a.createElement("tr",null,n.a.createElement("td",null,"t"),n.a.createElement("td",null,f.t.toFixed(0)),n.a.createElement("td",null,O.t.toFixed(0))),n.a.createElement("tr",null,n.a.createElement("td",null,"\u03b5*"),n.a.createElement("td",null,f.err),n.a.createElement("td",null,O.err)),n.a.createElement("tr",null,n.a.createElement("td",null,"N"),n.a.createElement("td",null,f.N),n.a.createElement("td",null,O.N)),n.a.createElement("tr",null,n.a.createElement("td",null,"M"),n.a.createElement("td",null,f.M),n.a.createElement("td",null,O.M)),n.a.createElement("tr",null,n.a.createElement("td",null,"p*"),n.a.createElement("td",null,f.p),n.a.createElement("td",null,O.p)))))},F=function(){return n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement(m.b,{to:"/lab1"},"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u0430\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438\u043c\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0435\u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/lab2"},"\u0418\u043c\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0435 \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u0442\u0435\u0440\u043c\u0435\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0433\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0430")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/lab3"},"\u041f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0437\u0430\u043a\u043e\u043d\u043e\u043c \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/lab4"},"\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043c\u0435\u0442\u043e\u0434\u043e\u043c \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0430")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/lab5"},"\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0437\u0430\u043a\u043e\u043d\u043e\u043c \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438 \u043a\u043e\u0440\u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/lab6"},"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u0442\u0430\u0446\u0438\u043e\u043d\u0430\u0440\u043d\u043e\u0441\u0442\u0438 \u0438 \u044d\u0440\u0433\u043e\u0434\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/lab7"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0438\u043c\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0435 \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u043a\u0430\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043c\u0430\u0441\u0441\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0441 \u043e\u0442\u043a\u0430\u0437\u0430\u043c\u0438")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/lab8"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0438\u043c\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0435 \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u043d\u043e\u0433\u043e\u043a\u0430\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043c\u0430\u0441\u0441\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f")))},R=function(){return n.a.createElement("div",null,n.a.createElement(c.c,null,n.a.createElement(c.a,{path:"/:any"},n.a.createElement("div",null,n.a.createElement(m.b,{to:"/"},"\u041a \u0441\u043f\u0438\u0441\u043a\u0443 \u0440\u0430\u0431\u043e\u0442")))),n.a.createElement(c.c,null,n.a.createElement(c.a,{exact:!0,path:"/"},n.a.createElement(F,null)),n.a.createElement(c.a,{path:"/lab1"},n.a.createElement(d,null)),n.a.createElement(c.a,{path:"/lab2"},n.a.createElement(h,null)),n.a.createElement(c.a,{path:"/lab3"},n.a.createElement(v,null)),n.a.createElement(c.a,{path:"/lab4"},n.a.createElement(g,null)),n.a.createElement(c.a,{path:"/lab5"},n.a.createElement(A,null)),n.a.createElement(c.a,{path:"/lab6"},n.a.createElement(k,null)),n.a.createElement(c.a,{path:"/lab7"},n.a.createElement(L,null)),n.a.createElement(c.a,{path:"/lab8"},n.a.createElement(V,null))))};u.a.render(n.a.createElement(m.a,{basename:"/systems-modeling"},n.a.createElement(R,null)),document.getElementById("root"))},17:function(e,t,a){},62:function(e,t,a){e.exports=a(165)}},[[62,1,2]]]);
//# sourceMappingURL=main.e40758c6.chunk.js.map