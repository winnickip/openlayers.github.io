(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{280:function(e,n,t){"use strict";t.r(n);var r=t(2),o=t(3),i=t(6),a=new(t(65).a)({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"ne:ne",TILED:!0},serverType:"geoserver",crossOrigin:"anonymous"}),c=new i.a({source:a}),s=new o.a({center:[0,0],zoom:1}),u=new r.a({layers:[c],target:"map",view:s});u.on("singleclick",function(e){document.getElementById("info").innerHTML="";var n=s.getResolution(),t=a.getGetFeatureInfoUrl(e.coordinate,n,"EPSG:3857",{INFO_FORMAT:"text/html"});t&&fetch(t).then(function(e){return e.text()}).then(function(e){document.getElementById("info").innerHTML=e})}),u.on("pointermove",function(e){if(!e.dragging){var n=u.getEventPixel(e.originalEvent),t=u.forEachLayerAtPixel(n,function(){return!0});u.getTargetElement().style.cursor=t?"pointer":""}})}},[[280,0]]]);
//# sourceMappingURL=getfeatureinfo-tile.js.map