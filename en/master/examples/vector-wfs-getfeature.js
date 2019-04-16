(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{393:function(e,t,r){"use strict";r.r(t);var o=r(2),n=r(3),i=r(23),a=function(e){this.tagName_=e};a.prototype.getTagName=function(){return this.tagName_};var s=a,p=function(e){function t(t,r){e.call(this,t),this.conditions=r,Object(i.a)(this.conditions.length>=2,57)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(s),u=function(e){function t(t){e.call(this,"And",Array.prototype.slice.call(arguments))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(p),c=function(e){function t(t,r,o){e.call(this,"BBOX"),this.geometryName=t,this.extent=r,this.srsName=o}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(s),l=function(e){function t(t,r){e.call(this,t),this.propertyName=r}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(s),m=function(e){function t(t,r,o,n){e.call(this,t,r),this.expression=o,this.matchCase=n}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(l),h=function(e){function t(t,r,o){e.call(this,"PropertyIsEqualTo",t,r,o)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(m),b=function(e){function t(t,r,o,n,i,a){e.call(this,"PropertyIsLike",t),this.pattern=r,this.wildCard=void 0!==o?o:"*",this.singleChar=void 0!==n?n:".",this.escapeChar=void 0!==i?i:"!",this.matchCase=a}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(l);function d(e){var t=[null].concat(Array.prototype.slice.call(arguments));return new(Function.prototype.bind.apply(u,t))}var f=r(181),O=r(16),y=r(1),g=r(38),_=r(51),v=r(4),j=r(18),S=r(32),w=r(68),E=r(79),N=r(35),R=r(12),P=r(5),C=r(0),A=_.a+" http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd",M={MultiLineString:"lineStringMember",MultiCurve:"curveMember",MultiPolygon:"polygonMember",MultiSurface:"surfaceMember"},T=function(e){function t(t){var r=t||{};e.call(this,r),this.surface_=void 0!==r.surface&&r.surface,this.curve_=void 0!==r.curve&&r.curve,this.multiCurve_=void 0===r.multiCurve||r.multiCurve,this.multiSurface_=void 0===r.multiSurface||r.multiSurface,this.schemaLocation=r.schemaLocation?r.schemaLocation:A,this.hasZ=void 0!==r.hasZ&&r.hasZ}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.readMultiCurve_=function(e,t){var r=Object(C.t)([],this.MULTICURVE_PARSERS_,e,t,this);return r?new w.a(r):void 0},t.prototype.readMultiSurface_=function(e,t){var r=Object(C.t)([],this.MULTISURFACE_PARSERS_,e,t,this);if(r)return new E.a(r)},t.prototype.curveMemberParser_=function(e,t){Object(C.s)(this.CURVEMEMBER_PARSERS_,e,t,this)},t.prototype.surfaceMemberParser_=function(e,t){Object(C.s)(this.SURFACEMEMBER_PARSERS_,e,t,this)},t.prototype.readPatch_=function(e,t){return Object(C.t)([null],this.PATCHES_PARSERS_,e,t,this)},t.prototype.readSegment_=function(e,t){return Object(C.t)([null],this.SEGMENTS_PARSERS_,e,t,this)},t.prototype.readPolygonPatch_=function(e,t){return Object(C.t)([null],this.FLAT_LINEAR_RINGS_PARSERS,e,t,this)},t.prototype.readLineStringSegment_=function(e,t){return Object(C.t)([null],this.GEOMETRY_FLAT_COORDINATES_PARSERS,e,t,this)},t.prototype.interiorParser_=function(e,t){var r=Object(C.t)(void 0,this.RING_PARSERS,e,t,this);r&&t[t.length-1].push(r)},t.prototype.exteriorParser_=function(e,t){var r=Object(C.t)(void 0,this.RING_PARSERS,e,t,this);r&&(t[t.length-1][0]=r)},t.prototype.readSurface_=function(e,t){var r=Object(C.t)([null],this.SURFACE_PARSERS_,e,t,this);if(r&&r[0]){var o,n,i=r[0],a=[i.length];for(o=1,n=r.length;o<n;++o)Object(O.c)(i,r[o]),a.push(i.length);return new N.b(i,j.a.XYZ,a)}},t.prototype.readCurve_=function(e,t){var r=Object(C.t)([null],this.CURVE_PARSERS_,e,t,this);return r?new S.a(r,j.a.XYZ):void 0},t.prototype.readEnvelope_=function(e,t){var r=Object(C.t)([null],this.ENVELOPE_PARSERS_,e,t,this);return Object(y.k)(r[1][0],r[1][1],r[2][0],r[2][1])},t.prototype.readFlatPos_=function(e,t){for(var r,o=Object(C.e)(e,!1),n=/^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/,i=[];r=n.exec(o);)i.push(parseFloat(r[1])),o=o.substr(r[0].length);if(""===o){var a,s,p=t[0].srsName,u="enu";if(p)u=Object(P.g)(p).getAxisOrientation();if("neu"===u)for(a=0,s=i.length;a<s;a+=3){var c=i[a],l=i[a+1];i[a]=l,i[a+1]=c}var m=i.length;if(2==m&&i.push(0),0!==m)return i}},t.prototype.readFlatPosList_=function(e,t){var r=Object(C.e)(e,!1).replace(/^\s*|\s*$/g,""),o=t[0],n=o.srsName,i=o.srsDimension,a="enu";n&&(a=Object(P.g)(n).getAxisOrientation());var s,p,u,c=r.split(/\s+/),l=2;e.getAttribute("srsDimension")?l=Object(v.g)(e.getAttribute("srsDimension")):e.getAttribute("dimension")?l=Object(v.g)(e.getAttribute("dimension")):e.parentNode.getAttribute("srsDimension")?l=Object(v.g)(e.parentNode.getAttribute("srsDimension")):i&&(l=Object(v.g)(i));for(var m=[],h=0,b=c.length;h<b;h+=l)s=parseFloat(c[h]),p=parseFloat(c[h+1]),u=3===l?parseFloat(c[h+2]):0,"en"===a.substr(0,2)?m.push(s,p,u):m.push(p,s,u);return m},t.prototype.writePos_=function(e,t,r){var o=r[r.length-1],n=o.hasZ,i=n?"3":"2";e.setAttribute("srsDimension",i);var a=o.srsName,s="enu";a&&(s=Object(P.g)(a).getAxisOrientation());var p,u=t.getCoordinates();(p="en"===s.substr(0,2)?u[0]+" "+u[1]:u[1]+" "+u[0],n)&&(p+=" "+(u[2]||0));Object(v.n)(e,p)},t.prototype.getCoords_=function(e,t,r){var o="enu";t&&(o=Object(P.g)(t).getAxisOrientation());var n="en"===o.substr(0,2)?e[0]+" "+e[1]:e[1]+" "+e[0];r&&(n+=" "+(e[2]||0));return n},t.prototype.writePosList_=function(e,t,r){var o=r[r.length-1],n=o.hasZ,i=n?"3":"2";e.setAttribute("srsDimension",i);for(var a,s=o.srsName,p=t.getCoordinates(),u=p.length,c=new Array(u),l=0;l<u;++l)a=p[l],c[l]=this.getCoords_(a,s,n);Object(v.n)(e,c.join(" "))},t.prototype.writePoint_=function(e,t,r){var o=r[r.length-1].srsName;o&&e.setAttribute("srsName",o);var n=Object(C.d)(e.namespaceURI,"pos");e.appendChild(n),this.writePos_(n,t,r)},t.prototype.writeEnvelope=function(e,t,r){var o=r[r.length-1].srsName;o&&e.setAttribute("srsName",o);var n=[t[0]+" "+t[1],t[2]+" "+t[3]];Object(C.u)({node:e},this.ENVELOPE_SERIALIZERS_,C.b,n,r,["lowerCorner","upperCorner"],this)},t.prototype.writeLinearRing_=function(e,t,r){var o=r[r.length-1].srsName;o&&e.setAttribute("srsName",o);var n=Object(C.d)(e.namespaceURI,"posList");e.appendChild(n),this.writePosList_(n,t,r)},t.prototype.RING_NODE_FACTORY_=function(e,t,r){var o=t[t.length-1],n=o.node,i=o.exteriorWritten;return void 0===i&&(o.exteriorWritten=!0),Object(C.d)(n.namespaceURI,void 0!==i?"interior":"exterior")},t.prototype.writeSurfaceOrPolygon_=function(e,t,r){var o=r[r.length-1],n=o.hasZ,i=o.srsName;if("PolygonPatch"!==e.nodeName&&i&&e.setAttribute("srsName",i),"Polygon"===e.nodeName||"PolygonPatch"===e.nodeName){var a=t.getLinearRings();Object(C.u)({node:e,hasZ:n,srsName:i},this.RING_SERIALIZERS_,this.RING_NODE_FACTORY_,a,r,void 0,this)}else if("Surface"===e.nodeName){var s=Object(C.d)(e.namespaceURI,"patches");e.appendChild(s),this.writeSurfacePatches_(s,t,r)}},t.prototype.writeCurveOrLineString_=function(e,t,r){var o=r[r.length-1].srsName;if("LineStringSegment"!==e.nodeName&&o&&e.setAttribute("srsName",o),"LineString"===e.nodeName||"LineStringSegment"===e.nodeName){var n=Object(C.d)(e.namespaceURI,"posList");e.appendChild(n),this.writePosList_(n,t,r)}else if("Curve"===e.nodeName){var i=Object(C.d)(e.namespaceURI,"segments");e.appendChild(i),this.writeCurveSegments_(i,t,r)}},t.prototype.writeMultiSurfaceOrPolygon_=function(e,t,r){var o=r[r.length-1],n=o.hasZ,i=o.srsName,a=o.surface;i&&e.setAttribute("srsName",i);var s=t.getPolygons();Object(C.u)({node:e,hasZ:n,srsName:i,surface:a},this.SURFACEORPOLYGONMEMBER_SERIALIZERS_,this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_,s,r,void 0,this)},t.prototype.writeMultiPoint_=function(e,t,r){var o=r[r.length-1],n=o.srsName,i=o.hasZ;n&&e.setAttribute("srsName",n);var a=t.getPoints();Object(C.u)({node:e,hasZ:i,srsName:n},this.POINTMEMBER_SERIALIZERS_,Object(C.p)("pointMember"),a,r,void 0,this)},t.prototype.writeMultiCurveOrLineString_=function(e,t,r){var o=r[r.length-1],n=o.hasZ,i=o.srsName,a=o.curve;i&&e.setAttribute("srsName",i);var s=t.getLineStrings();Object(C.u)({node:e,hasZ:n,srsName:i,curve:a},this.LINESTRINGORCURVEMEMBER_SERIALIZERS_,this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_,s,r,void 0,this)},t.prototype.writeRing_=function(e,t,r){var o=Object(C.d)(e.namespaceURI,"LinearRing");e.appendChild(o),this.writeLinearRing_(o,t,r)},t.prototype.writeSurfaceOrPolygonMember_=function(e,t,r){var o=this.GEOMETRY_NODE_FACTORY_(t,r);o&&(e.appendChild(o),this.writeSurfaceOrPolygon_(o,t,r))},t.prototype.writePointMember_=function(e,t,r){var o=Object(C.d)(e.namespaceURI,"Point");e.appendChild(o),this.writePoint_(o,t,r)},t.prototype.writeLineStringOrCurveMember_=function(e,t,r){var o=this.GEOMETRY_NODE_FACTORY_(t,r);o&&(e.appendChild(o),this.writeCurveOrLineString_(o,t,r))},t.prototype.writeSurfacePatches_=function(e,t,r){var o=Object(C.d)(e.namespaceURI,"PolygonPatch");e.appendChild(o),this.writeSurfaceOrPolygon_(o,t,r)},t.prototype.writeCurveSegments_=function(e,t,r){var o=Object(C.d)(e.namespaceURI,"LineStringSegment");e.appendChild(o),this.writeCurveOrLineString_(o,t,r)},t.prototype.writeGeometryElement=function(e,t,r){var o,n=r[r.length-1],i=Object(R.a)({},n);i.node=e,o=Array.isArray(t)?Object(g.b)(t,n):Object(g.c)(t,!0,n),Object(C.u)(i,this.GEOMETRY_SERIALIZERS_,this.GEOMETRY_NODE_FACTORY_,[o],r,void 0,this)},t.prototype.writeFeatureElement=function(e,t,r){var o=t.getId();o&&e.setAttribute("fid",o);var n=r[r.length-1],i=n.featureNS,a=t.getGeometryName();n.serializers||(n.serializers={},n.serializers[i]={});var s=t.getProperties(),p=[],u=[];for(var c in s){var l=s[c];null!==l&&(p.push(c),u.push(l),c==a||"function"==typeof l.getSimplifiedGeometry?c in n.serializers[i]||(n.serializers[i][c]=Object(C.k)(this.writeGeometryElement,this)):c in n.serializers[i]||(n.serializers[i][c]=Object(C.k)(v.n)))}var m=Object(R.a)({},n);m.node=e,Object(C.u)(m,n.serializers,Object(C.p)(void 0,i),u,r,p)},t.prototype.writeFeatureMembers_=function(e,t,r){var o=r[r.length-1],n=o.featureType,i=o.featureNS,a={};a[i]={},a[i][n]=Object(C.k)(this.writeFeatureElement,this);var s=Object(R.a)({},o);s.node=e,Object(C.u)(s,a,Object(C.p)(n,i),t,r)},t.prototype.MULTIGEOMETRY_MEMBER_NODE_FACTORY_=function(e,t,r){var o=t[t.length-1].node;return Object(C.d)(this.namespace,M[o.nodeName])},t.prototype.GEOMETRY_NODE_FACTORY_=function(e,t,r){var o,n=t[t.length-1],i=n.multiSurface,a=n.surface,s=n.curve,p=n.multiCurve;return Array.isArray(e)?o="Envelope":"MultiPolygon"===(o=e.getType())&&!0===i?o="MultiSurface":"Polygon"===o&&!0===a?o="Surface":"LineString"===o&&!0===s?o="Curve":"MultiLineString"===o&&!0===p&&(o="MultiCurve"),Object(C.d)(this.namespace,o)},t.prototype.writeGeometryNode=function(e,t){t=this.adaptOptions(t);var r=Object(C.d)(this.namespace,"geom"),o={node:r,hasZ:this.hasZ,srsName:this.srsName,curve:this.curve_,surface:this.surface_,multiSurface:this.multiSurface_,multiCurve:this.multiCurve_};return t&&Object(R.a)(o,t),this.writeGeometryElement(r,e,[o]),r},t.prototype.writeFeaturesNode=function(e,t){t=this.adaptOptions(t);var r=Object(C.d)(this.namespace,"featureMembers");r.setAttributeNS(C.c,"xsi:schemaLocation",this.schemaLocation);var o={srsName:this.srsName,hasZ:this.hasZ,curve:this.curve_,surface:this.surface_,multiSurface:this.multiSurface_,multiCurve:this.multiCurve_,featureNS:this.featureNS,featureType:this.featureType};return t&&Object(R.a)(o,t),this.writeFeatureMembers_(r,e,[o]),r},t}(_.b);T.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS={"http://www.opengis.net/gml":{pos:Object(C.n)(T.prototype.readFlatPos_),posList:Object(C.n)(T.prototype.readFlatPosList_)}},T.prototype.FLAT_LINEAR_RINGS_PARSERS={"http://www.opengis.net/gml":{interior:T.prototype.interiorParser_,exterior:T.prototype.exteriorParser_}},T.prototype.GEOMETRY_PARSERS={"http://www.opengis.net/gml":{Point:Object(C.n)(_.b.prototype.readPoint),MultiPoint:Object(C.n)(_.b.prototype.readMultiPoint),LineString:Object(C.n)(_.b.prototype.readLineString),MultiLineString:Object(C.n)(_.b.prototype.readMultiLineString),LinearRing:Object(C.n)(_.b.prototype.readLinearRing),Polygon:Object(C.n)(_.b.prototype.readPolygon),MultiPolygon:Object(C.n)(_.b.prototype.readMultiPolygon),Surface:Object(C.n)(T.prototype.readSurface_),MultiSurface:Object(C.n)(T.prototype.readMultiSurface_),Curve:Object(C.n)(T.prototype.readCurve_),MultiCurve:Object(C.n)(T.prototype.readMultiCurve_),Envelope:Object(C.n)(T.prototype.readEnvelope_)}},T.prototype.MULTICURVE_PARSERS_={"http://www.opengis.net/gml":{curveMember:Object(C.i)(T.prototype.curveMemberParser_),curveMembers:Object(C.i)(T.prototype.curveMemberParser_)}},T.prototype.MULTISURFACE_PARSERS_={"http://www.opengis.net/gml":{surfaceMember:Object(C.i)(T.prototype.surfaceMemberParser_),surfaceMembers:Object(C.i)(T.prototype.surfaceMemberParser_)}},T.prototype.CURVEMEMBER_PARSERS_={"http://www.opengis.net/gml":{LineString:Object(C.i)(_.b.prototype.readLineString),Curve:Object(C.i)(T.prototype.readCurve_)}},T.prototype.SURFACEMEMBER_PARSERS_={"http://www.opengis.net/gml":{Polygon:Object(C.i)(_.b.prototype.readPolygon),Surface:Object(C.i)(T.prototype.readSurface_)}},T.prototype.SURFACE_PARSERS_={"http://www.opengis.net/gml":{patches:Object(C.n)(T.prototype.readPatch_)}},T.prototype.CURVE_PARSERS_={"http://www.opengis.net/gml":{segments:Object(C.n)(T.prototype.readSegment_)}},T.prototype.ENVELOPE_PARSERS_={"http://www.opengis.net/gml":{lowerCorner:Object(C.i)(T.prototype.readFlatPosList_),upperCorner:Object(C.i)(T.prototype.readFlatPosList_)}},T.prototype.PATCHES_PARSERS_={"http://www.opengis.net/gml":{PolygonPatch:Object(C.n)(T.prototype.readPolygonPatch_)}},T.prototype.SEGMENTS_PARSERS_={"http://www.opengis.net/gml":{LineStringSegment:Object(C.n)(T.prototype.readLineStringSegment_)}},T.prototype.writeFeatures,T.prototype.RING_SERIALIZERS_={"http://www.opengis.net/gml":{exterior:Object(C.k)(T.prototype.writeRing_),interior:Object(C.k)(T.prototype.writeRing_)}},T.prototype.ENVELOPE_SERIALIZERS_={"http://www.opengis.net/gml":{lowerCorner:Object(C.k)(v.n),upperCorner:Object(C.k)(v.n)}},T.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS_={"http://www.opengis.net/gml":{surfaceMember:Object(C.k)(T.prototype.writeSurfaceOrPolygonMember_),polygonMember:Object(C.k)(T.prototype.writeSurfaceOrPolygonMember_)}},T.prototype.POINTMEMBER_SERIALIZERS_={"http://www.opengis.net/gml":{pointMember:Object(C.k)(T.prototype.writePointMember_)}},T.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS_={"http://www.opengis.net/gml":{lineStringMember:Object(C.k)(T.prototype.writeLineStringOrCurveMember_),curveMember:Object(C.k)(T.prototype.writeLineStringOrCurveMember_)}},T.prototype.GEOMETRY_SERIALIZERS_={"http://www.opengis.net/gml":{Curve:Object(C.k)(T.prototype.writeCurveOrLineString_),MultiCurve:Object(C.k)(T.prototype.writeMultiCurveOrLineString_),Point:Object(C.k)(T.prototype.writePoint_),MultiPoint:Object(C.k)(T.prototype.writeMultiPoint_),LineString:Object(C.k)(T.prototype.writeCurveOrLineString_),MultiLineString:Object(C.k)(T.prototype.writeMultiCurveOrLineString_),LinearRing:Object(C.k)(T.prototype.writeLinearRing_),Polygon:Object(C.k)(T.prototype.writeSurfaceOrPolygon_),MultiPolygon:Object(C.k)(T.prototype.writeMultiSurfaceOrPolygon_),Surface:Object(C.k)(T.prototype.writeSurfaceOrPolygon_),MultiSurface:Object(C.k)(T.prototype.writeMultiSurfaceOrPolygon_),Envelope:Object(C.k)(T.prototype.writeEnvelope)}};var L=T,F=r(115),I={"http://www.opengis.net/gml":{boundedBy:Object(C.m)(_.b.prototype.readGeometryElement,"bounds")}},k={"http://www.opengis.net/wfs":{totalInserted:Object(C.m)(v.f),totalUpdated:Object(C.m)(v.f),totalDeleted:Object(C.m)(v.f)}},x={"http://www.opengis.net/wfs":{TransactionSummary:Object(C.m)(function(e,t){return Object(C.t)({},k,e,t)},"transactionSummary"),InsertResults:Object(C.m)(function(e,t){return Object(C.t)([],H,e,t)},"insertIds")}},G={"http://www.opengis.net/wfs":{PropertyName:Object(C.k)(v.n)}},U={"http://www.opengis.net/wfs":{Insert:Object(C.k)(function(e,t,r){var o=r[r.length-1],n=o.featureType,i=o.featureNS,a=o.gmlVersion,s=Object(C.d)(i,n);e.appendChild(s),2===a?f.a.prototype.writeFeatureElement(s,t,r):L.prototype.writeFeatureElement(s,t,r)}),Update:Object(C.k)(function(e,t,r){var o=r[r.length-1];Object(i.a)(void 0!==t.getId(),27);var n=o.featureType,a=o.featurePrefix,s=o.featureNS,p=K(a,n),u=t.getGeometryName();e.setAttribute("typeName",p),e.setAttributeNS(D,"xmlns:"+a,s);var c=t.getId();if(void 0!==c){for(var l=t.getKeys(),m=[],h=0,b=l.length;h<b;h++){var d=t.get(l[h]);if(void 0!==d){var f=l[h];d&&"function"==typeof d.getSimplifiedGeometry&&(f=u),m.push({name:f,value:d})}}Object(C.u)({gmlVersion:o.gmlVersion,node:e,hasZ:o.hasZ,srsName:o.srsName},U,Object(C.p)("Property"),m,r),J(e,c,r)}}),Delete:Object(C.k)(function(e,t,r){var o=r[r.length-1];Object(i.a)(void 0!==t.getId(),26);var n=o.featureType,a=o.featurePrefix,s=o.featureNS,p=K(a,n);e.setAttribute("typeName",p),e.setAttributeNS(D,"xmlns:"+a,s);var u=t.getId();void 0!==u&&J(e,u,r)}),Property:Object(C.k)(function(e,t,r){var o=Object(C.d)(Y,"Name"),n=r[r.length-1].gmlVersion;if(e.appendChild(o),Object(v.n)(o,t.name),void 0!==t.value&&null!==t.value){var i=Object(C.d)(Y,"Value");e.appendChild(i),t.value&&"function"==typeof t.value.getSimplifiedGeometry?2===n?f.a.prototype.writeGeometryElement(i,t.value,r):L.prototype.writeGeometryElement(i,t.value,r):Object(v.n)(i,t.value)}}),Native:Object(C.k)(function(e,t,r){t.vendorId&&e.setAttribute("vendorId",t.vendorId);void 0!==t.safeToIgnore&&e.setAttribute("safeToIgnore",String(t.safeToIgnore));void 0!==t.value&&Object(v.n)(e,t.value)})}},Z="feature",D="http://www.w3.org/2000/xmlns/",B="http://www.opengis.net/ogc",Y="http://www.opengis.net/wfs",V="http://www.opengis.net/fes",z={"1.1.0":"http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd","1.0.0":"http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.0.0/wfs.xsd"},q="1.1.0",W=function(e){function t(t){e.call(this);var r=t||{};this.featureType_=r.featureType,this.featureNS_=r.featureNS,this.gmlFormat_=r.gmlFormat?r.gmlFormat:new L,this.schemaLocation_=r.schemaLocation?r.schemaLocation:z[q]}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.getFeatureType=function(){return this.featureType_},t.prototype.setFeatureType=function(e){this.featureType_=e},t.prototype.readFeaturesFromNode=function(e,t){var r={node:e};Object(R.a)(r,{featureType:this.featureType_,featureNS:this.featureNS_}),Object(R.a)(r,this.getReadOptions(e,t||{}));var o=[r];this.gmlFormat_.FEATURE_COLLECTION_PARSERS[_.a].featureMember=Object(C.i)(_.b.prototype.readFeaturesInternal);var n=Object(C.t)([],this.gmlFormat_.FEATURE_COLLECTION_PARSERS,e,o,this.gmlFormat_);return n||(n=[]),n},t.prototype.readTransactionResponse=function(e){if(e){if("string"==typeof e){var t=Object(C.r)(e);return this.readTransactionResponseFromDocument(t)}return Object(C.g)(e)?this.readTransactionResponseFromDocument(e):this.readTransactionResponseFromNode(e)}},t.prototype.readFeatureCollectionMetadata=function(e){if(e){if("string"==typeof e){var t=Object(C.r)(e);return this.readFeatureCollectionMetadataFromDocument(t)}return Object(C.g)(e)?this.readFeatureCollectionMetadataFromDocument(e):this.readFeatureCollectionMetadataFromNode(e)}},t.prototype.readFeatureCollectionMetadataFromDocument=function(e){for(var t=e.firstChild;t;t=t.nextSibling)if(t.nodeType==Node.ELEMENT_NODE)return this.readFeatureCollectionMetadataFromNode(t)},t.prototype.readFeatureCollectionMetadataFromNode=function(e){var t={},r=Object(v.g)(e.getAttribute("numberOfFeatures"));return t.numberOfFeatures=r,Object(C.t)(t,I,e,[],this.gmlFormat_)},t.prototype.readTransactionResponseFromDocument=function(e){for(var t=e.firstChild;t;t=t.nextSibling)if(t.nodeType==Node.ELEMENT_NODE)return this.readTransactionResponseFromNode(t)},t.prototype.readTransactionResponseFromNode=function(e){return Object(C.t)({},x,e,[])},t.prototype.writeGetFeature=function(e){var t,r,o,n,a=Object(C.d)(Y,"GetFeature");if(a.setAttribute("service","WFS"),a.setAttribute("version","1.1.0"),e&&(e.handle&&a.setAttribute("handle",e.handle),e.outputFormat&&a.setAttribute("outputFormat",e.outputFormat),void 0!==e.maxFeatures&&a.setAttribute("maxFeatures",String(e.maxFeatures)),e.resultType&&a.setAttribute("resultType",e.resultType),void 0!==e.startIndex&&a.setAttribute("startIndex",String(e.startIndex)),void 0!==e.count&&a.setAttribute("count",String(e.count)),void 0!==e.viewParams&&a.setAttribute("viewParams ",e.viewParams),t=e.filter,e.bbox)){Object(i.a)(e.geometryName,12);var s=(r=e.geometryName,o=e.bbox,n=e.srsName,new c(r,o,n));t=t?d(t,s):s}a.setAttributeNS(C.c,"xsi:schemaLocation",this.schemaLocation_);var p={node:a};return Object(R.a)(p,{srsName:e.srsName,featureNS:e.featureNS?e.featureNS:this.featureNS_,featurePrefix:e.featurePrefix,geometryName:e.geometryName,filter:t,propertyNames:e.propertyNames?e.propertyNames:[]}),Object(i.a)(Array.isArray(e.featureTypes),11),function(e,t,r){var o=r[r.length-1],n=Object(R.a)({},o);n.node=e,Object(C.u)(n,Q,Object(C.p)("Query"),t,r)}(a,e.featureTypes,[p]),a},t.prototype.writeTransaction=function(e,t,r,o){var n,i,a=[],s=Object(C.d)(Y,"Transaction"),p=o.version?o.version:q,u="1.0.0"===p?2:3;s.setAttribute("service","WFS"),s.setAttribute("version",p),o&&(n=o.gmlOptions?o.gmlOptions:{},o.handle&&s.setAttribute("handle",o.handle));var c=z[p];s.setAttributeNS(C.c,"xsi:schemaLocation",c);var l=o.featurePrefix?o.featurePrefix:Z;return e&&(i=Object(R.a)({node:s},{featureNS:o.featureNS,featureType:o.featureType,featurePrefix:l,gmlVersion:u,hasZ:o.hasZ,srsName:o.srsName}),Object(R.a)(i,n),Object(C.u)(i,U,Object(C.p)("Insert"),e,a)),t&&(i=Object(R.a)({node:s},{featureNS:o.featureNS,featureType:o.featureType,featurePrefix:l,gmlVersion:u,hasZ:o.hasZ,srsName:o.srsName}),Object(R.a)(i,n),Object(C.u)(i,U,Object(C.p)("Update"),t,a)),r&&Object(C.u)({node:s,featureNS:o.featureNS,featureType:o.featureType,featurePrefix:l,gmlVersion:u,srsName:o.srsName},U,Object(C.p)("Delete"),r,a),o.nativeElements&&Object(C.u)({node:s,featureNS:o.featureNS,featureType:o.featureType,featurePrefix:l,gmlVersion:u,srsName:o.srsName},U,Object(C.p)("Native"),o.nativeElements,a),s},t.prototype.readProjectionFromDocument=function(e){for(var t=e.firstChild;t;t=t.nextSibling)if(t.nodeType==Node.ELEMENT_NODE)return this.readProjectionFromNode(t);return null},t.prototype.readProjectionFromNode=function(e){if(e.firstElementChild&&e.firstElementChild.firstElementChild)for(var t=(e=e.firstElementChild.firstElementChild).firstElementChild;t;t=t.nextElementSibling)if(0!==t.childNodes.length&&(1!==t.childNodes.length||3!==t.firstChild.nodeType)){var r=[{}];return this.gmlFormat_.readGeometryElement(t,r),Object(P.g)(r.pop().srsName)}return null},t}(F.a);var X={"http://www.opengis.net/ogc":{FeatureId:Object(C.i)(function(e,t){return e.getAttribute("fid")})}};var H={"http://www.opengis.net/wfs":{Feature:function(e,t){Object(C.s)(X,e,t)}}};function J(e,t,r){var o=Object(C.d)(B,"Filter"),n=Object(C.d)(B,"FeatureId");o.appendChild(n),n.setAttribute("fid",t),e.appendChild(o)}function K(e,t){var r=(e=e||Z)+":";return 0===t.indexOf(r)?t:r+t}var Q={"http://www.opengis.net/wfs":{Query:Object(C.k)(function(e,t,r){var o,n=r[r.length-1],i=n.featurePrefix,a=n.featureNS,s=n.propertyNames,p=n.srsName;o=i?K(i,t):t;e.setAttribute("typeName",o),p&&e.setAttribute("srsName",p);a&&e.setAttributeNS(D,"xmlns:"+i,a);var u=Object(R.a)({},n);u.node=e,Object(C.u)(u,G,Object(C.p)("PropertyName"),s,r);var c=n.filter;if(c){var l=Object(C.d)(B,"Filter");e.appendChild(l),$(l,c,r)}})},"http://www.opengis.net/ogc":{During:Object(C.k)(function(e,t,r){var o=Object(C.d)(V,"ValueReference");Object(v.n)(o,t.propertyName),e.appendChild(o);var n=Object(C.d)(_.a,"TimePeriod");e.appendChild(n);var i=Object(C.d)(_.a,"begin");n.appendChild(i),ie(i,t.begin);var a=Object(C.d)(_.a,"end");n.appendChild(a),ie(a,t.end)}),And:Object(C.k)(ee),Or:Object(C.k)(ee),Not:Object(C.k)(function(e,t,r){var o={node:e},n=t.condition;Object(C.u)(o,Q,Object(C.p)(n.getTagName()),[n],r)}),BBOX:Object(C.k)(function(e,t,r){r[r.length-1].srsName=t.srsName,oe(e,t.geometryName),L.prototype.writeGeometryElement(e,t.extent,r)}),Contains:Object(C.k)(function(e,t,r){r[r.length-1].srsName=t.srsName,oe(e,t.geometryName),L.prototype.writeGeometryElement(e,t.geometry,r)}),Intersects:Object(C.k)(function(e,t,r){r[r.length-1].srsName=t.srsName,oe(e,t.geometryName),L.prototype.writeGeometryElement(e,t.geometry,r)}),Within:Object(C.k)(function(e,t,r){r[r.length-1].srsName=t.srsName,oe(e,t.geometryName),L.prototype.writeGeometryElement(e,t.geometry,r)}),PropertyIsEqualTo:Object(C.k)(te),PropertyIsNotEqualTo:Object(C.k)(te),PropertyIsLessThan:Object(C.k)(te),PropertyIsLessThanOrEqualTo:Object(C.k)(te),PropertyIsGreaterThan:Object(C.k)(te),PropertyIsGreaterThanOrEqualTo:Object(C.k)(te),PropertyIsNull:Object(C.k)(function(e,t,r){oe(e,t.propertyName)}),PropertyIsBetween:Object(C.k)(function(e,t,r){oe(e,t.propertyName);var o=Object(C.d)(B,"LowerBoundary");e.appendChild(o),ne(o,""+t.lowerBoundary);var n=Object(C.d)(B,"UpperBoundary");e.appendChild(n),ne(n,""+t.upperBoundary)}),PropertyIsLike:Object(C.k)(function(e,t,r){e.setAttribute("wildCard",t.wildCard),e.setAttribute("singleChar",t.singleChar),e.setAttribute("escapeChar",t.escapeChar),void 0!==t.matchCase&&e.setAttribute("matchCase",t.matchCase.toString());oe(e,t.propertyName),ne(e,""+t.pattern)})}};function $(e,t,r){var o={node:e};Object(C.u)(o,Q,Object(C.p)(t.getTagName()),[t],r)}function ee(e,t,r){for(var o={node:e},n=t.conditions,i=0,a=n.length;i<a;++i){var s=n[i];Object(C.u)(o,Q,Object(C.p)(s.getTagName()),[s],r)}}function te(e,t,r){void 0!==t.matchCase&&e.setAttribute("matchCase",t.matchCase.toString()),oe(e,t.propertyName),ne(e,""+t.expression)}function re(e,t,r){var o=Object(C.d)(B,e);Object(v.n)(o,r),t.appendChild(o)}function oe(e,t){re("PropertyName",e,t)}function ne(e,t){re("Literal",e,t)}function ie(e,t){var r=Object(C.d)(_.a,"TimeInstant");e.appendChild(r);var o=Object(C.d)(_.a,"timePosition");r.appendChild(o),Object(v.n)(o,t)}var ae,se,pe,ue,ce,le,me=W,he=r(36),be=r(21),de=r(6),fe=r(41),Oe=r(13),ye=r(14),ge=r(19),_e=new Oe.a,ve=new be.a({source:_e,style:new ye.c({stroke:new ge.a({color:"rgba(0, 0, 255, 1.0)",width:2})})}),je=new de.a({source:new fe.a({imagerySet:"Aerial",key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5"})}),Se=new o.a({layers:[je,ve],target:document.getElementById("map"),view:new n.a({center:[-8908887.277395891,5381918.072437216],maxZoom:19,zoom:12})}),we=(new me).writeGetFeature({srsName:"EPSG:3857",featureNS:"http://openstreemap.org",featurePrefix:"osm",featureTypes:["water_areas"],outputFormat:"application/json",filter:d((ae="name",se="Mississippi*",new b(ae,se,pe,ue,ce,le)),function(e,t,r){return new h(e,t,r)}("waterway","riverbank"))});fetch("https://ahocevar.com/geoserver/wfs",{method:"POST",body:(new XMLSerializer).serializeToString(we)}).then(function(e){return e.json()}).then(function(e){var t=(new he.a).readFeatures(e);_e.addFeatures(t),Se.getView().fit(_e.getExtent())})}},[[393,0]]]);
//# sourceMappingURL=vector-wfs-getfeature.js.map