(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{321:function(e,t,n){"use strict";n.r(t);var o=n(2),c=n(3),a=n(1),i=n(6),r=n(5),w=n(11);function u(e,t){document.getElementById(e).value=t.toFixed(2)}function l(e){return e-360*Math.floor((e+180)/360)}new o.a({layers:[new i.a({source:new w.b})],target:"map",view:new c.a({center:[0,0],zoom:2})}).on("moveend",function(e){var t=e.map,n=t.getView().calculateExtent(t.getSize()),o=Object(r.l)(Object(a.v)(n)),c=Object(r.l)(Object(a.D)(n));u("left",l(o[0])),u("bottom",o[1]),u("right",l(c[0])),u("top",c[1])})}},[[321,0]]]);
//# sourceMappingURL=moveend.js.map