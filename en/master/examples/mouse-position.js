(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{320:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n(3),c=n(94),r=n(209),s=n(28),i=n(6),d=n(11),u=new r.a({coordinateFormat:Object(s.d)(4),projection:"EPSG:4326",className:"custom-mouse-position",target:document.getElementById("mouse-position"),undefinedHTML:"&nbsp;"});new o.a({controls:Object(c.a)().extend([u]),layers:[new i.a({source:new d.b})],target:"map",view:new a.a({center:[0,0],zoom:2})});document.getElementById("projection").addEventListener("change",function(e){u.setProjection(e.target.value)}),document.getElementById("precision").addEventListener("change",function(e){var t=Object(s.d)(e.target.valueAsNumber);u.setCoordinateFormat(t)})}},[[320,0]]]);
//# sourceMappingURL=mouse-position.js.map