(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{359:function(e,a,r){"use strict";r.r(a);var n,o,w=r(22),s=r(2),t=r(3),c=r(35),u=r(21),p=r(6),m=r(65),_=r(13),E=new u.a({source:new _.a}),S=new u.a({source:new _.a});new s.a({layers:[new p.a({source:new m.a({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"ne:NE1_HR_LC_SR_W_DR",TILED:!0}})}),E],target:"map4326",view:new t.a({projection:"EPSG:4326",center:[0,0],zoom:2})}),new s.a({layers:[new p.a({source:new m.a({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"ne:NE1_HR_LC_SR_W_DR",TILED:!0}})}),S],target:"map3857",view:new t.a({center:[0,0],zoom:2})});for(n=-180;n<180;n+=30)for(o=-90;o<90;o+=30){var v=Object(c.a)([n,o],8e5,64),R=v.clone().transform("EPSG:4326","EPSG:3857");E.getSource().addFeature(new w.a(v)),S.getSource().addFeature(new w.a(R))}}},[[359,0]]]);
//# sourceMappingURL=tissot.js.map