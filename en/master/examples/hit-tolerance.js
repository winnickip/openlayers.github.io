(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{284:function(e,t,n){"use strict";n.r(t);var a,o=n(2),r=n(3),c=n(6),i=n(21),l=n(11),s=n(13),w=n(22),u=n(32),g=n(14),h=n(19),d=new c.a({source:new l.b}),p=new g.c({stroke:new h.a({color:"black",width:1})}),f=new w.a(new u.a([[-4e6,0],[4e6,0]])),k=new i.a({source:new s.a({features:[f]}),style:p}),b=new o.a({layers:[d,k],target:"map",view:new r.a({center:[0,0],zoom:2})}),m=document.getElementById("status");b.on("singleclick",function(e){var t=!1;b.forEachFeatureAtPixel(e.pixel,function(){t=!0},{hitTolerance:a}),t?(p.getStroke().setColor("green"),m.innerHTML="&nbsp;A feature got hit!"):(p.getStroke().setColor("black"),m.innerHTML="&nbsp;No feature got hit."),f.changed()});var v=document.getElementById("hitTolerance"),y=document.getElementById("circle"),I=function(){var e=2*(a=parseInt(v.value,10))+2;y.width=e,y.height=e;var t=y.getContext("2d");t.clearRect(0,0,e,e),t.beginPath(),t.arc(a+1,a+1,a+.5,0,2*Math.PI),t.fill(),t.stroke()};v.onchange=I,I()}},[[284,0]]]);
//# sourceMappingURL=hit-tolerance.js.map