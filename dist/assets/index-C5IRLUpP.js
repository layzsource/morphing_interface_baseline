(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jl="165",Kp=0,Bd=1,Jp=2,Iu=1,Zp=2,zn=3,li=0,qt=1,pn=2,jn=0,Ni=1,zd=2,kd=3,Vd=4,Qp=5,Ai=100,em=101,tm=102,nm=103,im=104,sm=200,om=201,rm=202,am=203,Il=204,Dl=205,lm=206,cm=207,dm=208,hm=209,um=210,fm=211,pm=212,mm=213,gm=214,xm=0,_m=1,vm=2,Ur=3,ym=4,Sm=5,Mm=6,bm=7,Du=0,Em=1,wm=2,ri=0,Cm=1,Tm=2,Am=3,Rm=4,Pm=5,Lm=6,Im=7,Uu=300,Ds=301,Us=302,Ul=303,Nl=304,Xr=306,Fl=1e3,Ii=1001,Ol=1002,Vt=1003,Dm=1004,qo=1005,mn=1006,Wa=1007,Di=1008,ci=1009,Um=1010,Nm=1011,Nr=1012,Nu=1013,Ns=1014,Gn=1015,Bi=1016,Fu=1017,Ou=1018,Fs=1020,Fm=35902,Om=1021,Bm=1022,Tn=1023,zm=1024,km=1025,ws=1026,Os=1027,Bu=1028,zu=1029,Vm=1030,ku=1031,Vu=1033,ja=33776,$a=33777,Xa=33778,qa=33779,Hd=35840,Gd=35841,Wd=35842,jd=35843,$d=36196,Xd=37492,qd=37496,Yd=37808,Kd=37809,Jd=37810,Zd=37811,Qd=37812,eh=37813,th=37814,nh=37815,ih=37816,sh=37817,oh=37818,rh=37819,ah=37820,lh=37821,Ya=36492,ch=36494,dh=36495,Hm=36283,hh=36284,uh=36285,fh=36286,Gm=3200,Wm=3201,Hu=0,jm=1,ti="",bn="srgb",di="srgb-linear",$l="display-p3",qr="display-p3-linear",Fr="linear",gt="srgb",Or="rec709",Br="p3",Qi=7680,ph=519,$m=512,Xm=513,qm=514,Gu=515,Ym=516,Km=517,Jm=518,Zm=519,Bl=35044,Qm=35048,mh="300 es",Wn=2e3,zr=2001;class ks{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gh=1234567;const go=Math.PI/180,Mo=180/Math.PI;function $n(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function jt(i,e,t){return Math.max(e,Math.min(t,i))}function Xl(i,e){return(i%e+e)%e}function eg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function tg(i,e,t){return i!==e?(t-i)/(e-i):0}function xo(i,e,t){return(1-t)*i+t*e}function ng(i,e,t,n){return xo(i,e,1-Math.exp(-t*n))}function ig(i,e=1){return e-Math.abs(Xl(i,e*2)-e)}function sg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function og(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ag(i,e){return i+Math.random()*(e-i)}function lg(i){return i*(.5-Math.random())}function cg(i){i!==void 0&&(gh=i);let e=gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dg(i){return i*go}function hg(i){return i*Mo}function ug(i){return(i&i-1)===0&&i!==0}function fg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mg(i,e,t,n,s){const o=Math.cos,r=Math.sin,a=o(t/2),c=r(t/2),h=o((e+n)/2),l=r((e+n)/2),f=o((e-n)/2),p=r((e-n)/2),g=o((n-e)/2),_=r((n-e)/2);switch(s){case"XYX":i.set(a*l,c*f,c*p,a*h);break;case"YZY":i.set(c*p,a*l,c*f,a*h);break;case"ZXZ":i.set(c*f,c*p,a*l,a*h);break;case"XZX":i.set(a*l,c*_,c*g,a*h);break;case"YXY":i.set(c*g,a*l,c*_,a*h);break;case"ZYZ":i.set(c*_,c*g,a*l,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const bo={DEG2RAD:go,RAD2DEG:Mo,generateUUID:$n,clamp:jt,euclideanModulo:Xl,mapLinear:eg,inverseLerp:tg,lerp:xo,damp:ng,pingpong:ig,smoothstep:sg,smootherstep:og,randInt:rg,randFloat:ag,randFloatSpread:lg,seededRandom:cg,degToRad:dg,radToDeg:hg,isPowerOfTwo:ug,ceilPowerOfTwo:fg,floorPowerOfTwo:pg,setQuaternionFromProperEuler:mg,normalize:at,denormalize:gn};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*n-r*s+e.x,this.y=o*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,s,o,r,a,c,h){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,r,a,c,h)}set(e,t,n,s,o,r,a,c,h){const l=this.elements;return l[0]=e,l[1]=s,l[2]=a,l[3]=t,l[4]=o,l[5]=c,l[6]=n,l[7]=r,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,r=n[0],a=n[3],c=n[6],h=n[1],l=n[4],f=n[7],p=n[2],g=n[5],_=n[8],v=s[0],m=s[3],u=s[6],y=s[1],S=s[4],w=s[7],U=s[2],A=s[5],R=s[8];return o[0]=r*v+a*y+c*U,o[3]=r*m+a*S+c*A,o[6]=r*u+a*w+c*R,o[1]=h*v+l*y+f*U,o[4]=h*m+l*S+f*A,o[7]=h*u+l*w+f*R,o[2]=p*v+g*y+_*U,o[5]=p*m+g*S+_*A,o[8]=p*u+g*w+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],h=e[7],l=e[8];return t*r*l-t*a*h-n*o*l+n*a*c+s*o*h-s*r*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],h=e[7],l=e[8],f=l*r-a*h,p=a*c-l*o,g=h*o-r*c,_=t*f+n*p+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(s*h-l*n)*v,e[2]=(a*n-s*r)*v,e[3]=p*v,e[4]=(l*t-s*c)*v,e[5]=(s*o-a*t)*v,e[6]=g*v,e[7]=(n*c-h*t)*v,e[8]=(r*t-n*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,r,a){const c=Math.cos(o),h=Math.sin(o);return this.set(n*c,n*h,-n*(c*r+h*a)+r+e,-s*h,s*c,-s*(-h*r+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ka.makeScale(e,t)),this}rotate(e){return this.premultiply(Ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new Ke;function Wu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gg(){const i=Eo("canvas");return i.style.display="block",i}const xh={};function ql(i){i in xh||(xh[i]=!0,console.warn(i))}function xg(i,e,t){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const _h=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vh=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yo={[di]:{transfer:Fr,primaries:Or,toReference:i=>i,fromReference:i=>i},[bn]:{transfer:gt,primaries:Or,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[qr]:{transfer:Fr,primaries:Br,toReference:i=>i.applyMatrix3(vh),fromReference:i=>i.applyMatrix3(_h)},[$l]:{transfer:gt,primaries:Br,toReference:i=>i.convertSRGBToLinear().applyMatrix3(vh),fromReference:i=>i.applyMatrix3(_h).convertLinearToSRGB()}},_g=new Set([di,qr]),lt={enabled:!0,_workingColorSpace:di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!_g.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Yo[e].toReference,s=Yo[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Yo[i].primaries},getTransfer:function(i){return i===ti?Fr:Yo[i].transfer}};function Cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ja(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let es;class vg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{es===void 0&&(es=Eo("canvas")),es.width=e.width,es.height=e.height;const n=es.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Eo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Cs(o[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cs(t[n]/255)*255):t[n]=Cs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yg=0;class ju{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Za(s[r].image)):o.push(Za(s[r]))}else o=Za(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function Za(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sg=0;class Ot extends ks{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Ii,s=Ii,o=mn,r=Di,a=Tn,c=ci,h=Ot.DEFAULT_ANISOTROPY,l=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=$n(),this.name="",this.source=new ju(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fl:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case Ol:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fl:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case Ol:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Uu;Ot.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,n=0,s=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const c=e.elements,h=c[0],l=c[4],f=c[8],p=c[1],g=c[5],_=c[9],v=c[2],m=c[6],u=c[10];if(Math.abs(l-p)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(l+p)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(h+g+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(h+1)/2,w=(g+1)/2,U=(u+1)/2,A=(l+p)/4,R=(f+v)/4,F=(_+m)/4;return S>w&&S>U?S<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(S),s=A/n,o=R/n):w>U?w<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(w),n=A/s,o=F/s):U<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(U),n=R/o,s=F/o),this.set(n,s,o,t),this}let y=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(p-l)*(p-l));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-v)/y,this.z=(p-l)/y,this.w=Math.acos((h+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mg extends ks{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ot(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ju(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends Mg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $u extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bg extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,r,a){let c=n[s+0],h=n[s+1],l=n[s+2],f=n[s+3];const p=o[r+0],g=o[r+1],_=o[r+2],v=o[r+3];if(a===0){e[t+0]=c,e[t+1]=h,e[t+2]=l,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=g,e[t+2]=_,e[t+3]=v;return}if(f!==v||c!==p||h!==g||l!==_){let m=1-a;const u=c*p+h*g+l*_+f*v,y=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const U=Math.sqrt(S),A=Math.atan2(U,u*y);m=Math.sin(m*A)/U,a=Math.sin(a*A)/U}const w=a*y;if(c=c*m+p*w,h=h*m+g*w,l=l*m+_*w,f=f*m+v*w,m===1-a){const U=1/Math.sqrt(c*c+h*h+l*l+f*f);c*=U,h*=U,l*=U,f*=U}}e[t]=c,e[t+1]=h,e[t+2]=l,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,o,r){const a=n[s],c=n[s+1],h=n[s+2],l=n[s+3],f=o[r],p=o[r+1],g=o[r+2],_=o[r+3];return e[t]=a*_+l*f+c*g-h*p,e[t+1]=c*_+l*p+h*f-a*g,e[t+2]=h*_+l*g+a*p-c*f,e[t+3]=l*_-a*f-c*p-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,r=e._order,a=Math.cos,c=Math.sin,h=a(n/2),l=a(s/2),f=a(o/2),p=c(n/2),g=c(s/2),_=c(o/2);switch(r){case"XYZ":this._x=p*l*f+h*g*_,this._y=h*g*f-p*l*_,this._z=h*l*_+p*g*f,this._w=h*l*f-p*g*_;break;case"YXZ":this._x=p*l*f+h*g*_,this._y=h*g*f-p*l*_,this._z=h*l*_-p*g*f,this._w=h*l*f+p*g*_;break;case"ZXY":this._x=p*l*f-h*g*_,this._y=h*g*f+p*l*_,this._z=h*l*_+p*g*f,this._w=h*l*f-p*g*_;break;case"ZYX":this._x=p*l*f-h*g*_,this._y=h*g*f+p*l*_,this._z=h*l*_-p*g*f,this._w=h*l*f+p*g*_;break;case"YZX":this._x=p*l*f+h*g*_,this._y=h*g*f+p*l*_,this._z=h*l*_-p*g*f,this._w=h*l*f-p*g*_;break;case"XZY":this._x=p*l*f-h*g*_,this._y=h*g*f-p*l*_,this._z=h*l*_+p*g*f,this._w=h*l*f+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],r=t[1],a=t[5],c=t[9],h=t[2],l=t[6],f=t[10],p=n+a+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(l-c)*g,this._y=(o-h)*g,this._z=(r-s)*g}else if(n>a&&n>f){const g=2*Math.sqrt(1+n-a-f);this._w=(l-c)/g,this._x=.25*g,this._y=(s+r)/g,this._z=(o+h)/g}else if(a>f){const g=2*Math.sqrt(1+a-n-f);this._w=(o-h)/g,this._x=(s+r)/g,this._y=.25*g,this._z=(c+l)/g}else{const g=2*Math.sqrt(1+f-n-a);this._w=(r-s)/g,this._x=(o+h)/g,this._y=(c+l)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,r=e._w,a=t._x,c=t._y,h=t._z,l=t._w;return this._x=n*l+r*a+s*h-o*c,this._y=s*l+r*c+o*a-n*h,this._z=o*l+r*h+n*c-s*a,this._w=r*l-n*a-s*c-o*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*e._w+n*e._x+s*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-t;return this._w=g*r+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*o+t*this._z,this.normalize(),this}const h=Math.sqrt(c),l=Math.atan2(h,a),f=Math.sin((1-t)*l)/h,p=Math.sin(t*l)/h;return this._w=r*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=o*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,r=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,r=e.y,a=e.z,c=e.w,h=2*(r*s-a*n),l=2*(a*t-o*s),f=2*(o*n-r*t);return this.x=t+c*h+r*f-a*l,this.y=n+c*l+a*h-o*f,this.z=s+c*f+o*l-r*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,r=t.x,a=t.y,c=t.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new I,yh=new Vs;class zi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,dn):dn.fromBufferAttribute(o,r),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}const s=e.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(so),Jo.subVectors(this.max,so),ts.subVectors(e.a,so),ns.subVectors(e.b,so),is.subVectors(e.c,so),qn.subVectors(ns,ts),Yn.subVectors(is,ns),_i.subVectors(ts,is);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-_i.z,_i.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,_i.z,0,-_i.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-_i.y,_i.x,0];return!el(t,ts,ns,is,Jo)||(t=[1,0,0,0,1,0,0,0,1],!el(t,ts,ns,is,Jo))?!1:(Zo.crossVectors(qn,Yn),t=[Zo.x,Zo.y,Zo.z],el(t,ts,ns,is,Jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new I,new I,new I,new I,new I,new I,new I,new I],dn=new I,Ko=new zi,ts=new I,ns=new I,is=new I,qn=new I,Yn=new I,_i=new I,so=new I,Jo=new I,Zo=new I,vi=new I;function el(i,e,t,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){vi.fromArray(i,o);const a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=e.dot(vi),h=t.dot(vi),l=n.dot(vi);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}const Eg=new zi,oo=new I,tl=new I;class Hs{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Eg.setFromPoints(e).getCenter(n);let s=0;for(let o=0,r=e.length;o<r;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);const t=oo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(oo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(tl)),this.expandByPoint(oo.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new I,nl=new I,Qo=new I,Kn=new I,il=new I,er=new I,sl=new I;class Xu{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){nl.copy(e).add(t).multiplyScalar(.5),Qo.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(nl);const o=e.distanceTo(t)*.5,r=-this.direction.dot(Qo),a=Kn.dot(this.direction),c=-Kn.dot(Qo),h=Kn.lengthSq(),l=Math.abs(1-r*r);let f,p,g,_;if(l>0)if(f=r*c-a,p=r*a-c,_=o*l,f>=0)if(p>=-_)if(p<=_){const v=1/l;f*=v,p*=v,g=f*(f+r*p+2*a)+p*(r*f+p+2*c)+h}else p=o,f=Math.max(0,-(r*p+a)),g=-f*f+p*(p+2*c)+h;else p=-o,f=Math.max(0,-(r*p+a)),g=-f*f+p*(p+2*c)+h;else p<=-_?(f=Math.max(0,-(-r*o+a)),p=f>0?-o:Math.min(Math.max(-o,-c),o),g=-f*f+p*(p+2*c)+h):p<=_?(f=0,p=Math.min(Math.max(-o,-c),o),g=p*(p+2*c)+h):(f=Math.max(0,-(r*o+a)),p=f>0?o:Math.min(Math.max(-o,-c),o),g=-f*f+p*(p+2*c)+h);else p=r>0?-o:o,f=Math.max(0,-(r*p+a)),g=-f*f+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(nl).addScaledVector(Qo,p),g}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,o=e.radius*e.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,r,a,c;const h=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,s=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,s=(e.min.x-p.x)*h),l>=0?(o=(e.min.y-p.y)*l,r=(e.max.y-p.y)*l):(o=(e.max.y-p.y)*l,r=(e.min.y-p.y)*l),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,s,o){il.subVectors(t,e),er.subVectors(n,e),sl.crossVectors(il,er);let r=this.direction.dot(sl),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Kn.subVectors(this.origin,e);const c=a*this.direction.dot(er.crossVectors(Kn,er));if(c<0)return null;const h=a*this.direction.dot(il.cross(Kn));if(h<0||c+h>r)return null;const l=-a*Kn.dot(sl);return l<0?null:this.at(l/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,s,o,r,a,c,h,l,f,p,g,_,v,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,r,a,c,h,l,f,p,g,_,v,m)}set(e,t,n,s,o,r,a,c,h,l,f,p,g,_,v,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=o,u[5]=r,u[9]=a,u[13]=c,u[2]=h,u[6]=l,u[10]=f,u[14]=p,u[3]=g,u[7]=_,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ss.setFromMatrixColumn(e,0).length(),o=1/ss.setFromMatrixColumn(e,1).length(),r=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),h=Math.sin(s),l=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const p=r*l,g=r*f,_=a*l,v=a*f;t[0]=c*l,t[4]=-c*f,t[8]=h,t[1]=g+_*h,t[5]=p-v*h,t[9]=-a*c,t[2]=v-p*h,t[6]=_+g*h,t[10]=r*c}else if(e.order==="YXZ"){const p=c*l,g=c*f,_=h*l,v=h*f;t[0]=p+v*a,t[4]=_*a-g,t[8]=r*h,t[1]=r*f,t[5]=r*l,t[9]=-a,t[2]=g*a-_,t[6]=v+p*a,t[10]=r*c}else if(e.order==="ZXY"){const p=c*l,g=c*f,_=h*l,v=h*f;t[0]=p-v*a,t[4]=-r*f,t[8]=_+g*a,t[1]=g+_*a,t[5]=r*l,t[9]=v-p*a,t[2]=-r*h,t[6]=a,t[10]=r*c}else if(e.order==="ZYX"){const p=r*l,g=r*f,_=a*l,v=a*f;t[0]=c*l,t[4]=_*h-g,t[8]=p*h+v,t[1]=c*f,t[5]=v*h+p,t[9]=g*h-_,t[2]=-h,t[6]=a*c,t[10]=r*c}else if(e.order==="YZX"){const p=r*c,g=r*h,_=a*c,v=a*h;t[0]=c*l,t[4]=v-p*f,t[8]=_*f+g,t[1]=f,t[5]=r*l,t[9]=-a*l,t[2]=-h*l,t[6]=g*f+_,t[10]=p-v*f}else if(e.order==="XZY"){const p=r*c,g=r*h,_=a*c,v=a*h;t[0]=c*l,t[4]=-f,t[8]=h*l,t[1]=p*f+v,t[5]=r*l,t[9]=g*f-_,t[2]=_*f-g,t[6]=a*l,t[10]=v*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wg,e,Cg)}lookAt(e,t,n){const s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Jn.crossVectors(n,Kt),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Jn.crossVectors(n,Kt)),Jn.normalize(),tr.crossVectors(Kt,Jn),s[0]=Jn.x,s[4]=tr.x,s[8]=Kt.x,s[1]=Jn.y,s[5]=tr.y,s[9]=Kt.y,s[2]=Jn.z,s[6]=tr.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,r=n[0],a=n[4],c=n[8],h=n[12],l=n[1],f=n[5],p=n[9],g=n[13],_=n[2],v=n[6],m=n[10],u=n[14],y=n[3],S=n[7],w=n[11],U=n[15],A=s[0],R=s[4],F=s[8],C=s[12],b=s[1],P=s[5],W=s[9],G=s[13],J=s[2],Z=s[6],Y=s[10],K=s[14],$=s[3],he=s[7],ge=s[11],ve=s[15];return o[0]=r*A+a*b+c*J+h*$,o[4]=r*R+a*P+c*Z+h*he,o[8]=r*F+a*W+c*Y+h*ge,o[12]=r*C+a*G+c*K+h*ve,o[1]=l*A+f*b+p*J+g*$,o[5]=l*R+f*P+p*Z+g*he,o[9]=l*F+f*W+p*Y+g*ge,o[13]=l*C+f*G+p*K+g*ve,o[2]=_*A+v*b+m*J+u*$,o[6]=_*R+v*P+m*Z+u*he,o[10]=_*F+v*W+m*Y+u*ge,o[14]=_*C+v*G+m*K+u*ve,o[3]=y*A+S*b+w*J+U*$,o[7]=y*R+S*P+w*Z+U*he,o[11]=y*F+S*W+w*Y+U*ge,o[15]=y*C+S*G+w*K+U*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],r=e[1],a=e[5],c=e[9],h=e[13],l=e[2],f=e[6],p=e[10],g=e[14],_=e[3],v=e[7],m=e[11],u=e[15];return _*(+o*c*f-s*h*f-o*a*p+n*h*p+s*a*g-n*c*g)+v*(+t*c*g-t*h*p+o*r*p-s*r*g+s*h*l-o*c*l)+m*(+t*h*f-t*a*g-o*r*f+n*r*g+o*a*l-n*h*l)+u*(-s*a*l-t*c*f+t*a*p+s*r*f-n*r*p+n*c*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],h=e[7],l=e[8],f=e[9],p=e[10],g=e[11],_=e[12],v=e[13],m=e[14],u=e[15],y=f*m*h-v*p*h+v*c*g-a*m*g-f*c*u+a*p*u,S=_*p*h-l*m*h-_*c*g+r*m*g+l*c*u-r*p*u,w=l*v*h-_*f*h+_*a*g-r*v*g-l*a*u+r*f*u,U=_*f*c-l*v*c-_*a*p+r*v*p+l*a*m-r*f*m,A=t*y+n*S+s*w+o*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=y*R,e[1]=(v*p*o-f*m*o-v*s*g+n*m*g+f*s*u-n*p*u)*R,e[2]=(a*m*o-v*c*o+v*s*h-n*m*h-a*s*u+n*c*u)*R,e[3]=(f*c*o-a*p*o-f*s*h+n*p*h+a*s*g-n*c*g)*R,e[4]=S*R,e[5]=(l*m*o-_*p*o+_*s*g-t*m*g-l*s*u+t*p*u)*R,e[6]=(_*c*o-r*m*o-_*s*h+t*m*h+r*s*u-t*c*u)*R,e[7]=(r*p*o-l*c*o+l*s*h-t*p*h-r*s*g+t*c*g)*R,e[8]=w*R,e[9]=(_*f*o-l*v*o-_*n*g+t*v*g+l*n*u-t*f*u)*R,e[10]=(r*v*o-_*a*o+_*n*h-t*v*h-r*n*u+t*a*u)*R,e[11]=(l*a*o-r*f*o-l*n*h+t*f*h+r*n*g-t*a*g)*R,e[12]=U*R,e[13]=(l*v*s-_*f*s+_*n*p-t*v*p-l*n*m+t*f*m)*R,e[14]=(_*a*s-r*v*s-_*n*c+t*v*c+r*n*m-t*a*m)*R,e[15]=(r*f*s-l*a*s+l*n*c-t*f*c-r*n*p+t*a*p)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,r=e.x,a=e.y,c=e.z,h=o*r,l=o*a;return this.set(h*r+n,h*a-s*c,h*c+s*a,0,h*a+s*c,l*a+n,l*c-s*r,0,h*c-s*a,l*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,r){return this.set(1,n,o,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,r=t._y,a=t._z,c=t._w,h=o+o,l=r+r,f=a+a,p=o*h,g=o*l,_=o*f,v=r*l,m=r*f,u=a*f,y=c*h,S=c*l,w=c*f,U=n.x,A=n.y,R=n.z;return s[0]=(1-(v+u))*U,s[1]=(g+w)*U,s[2]=(_-S)*U,s[3]=0,s[4]=(g-w)*A,s[5]=(1-(p+u))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(_+S)*R,s[9]=(m-y)*R,s[10]=(1-(p+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=ss.set(s[0],s[1],s[2]).length();const r=ss.set(s[4],s[5],s[6]).length(),a=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],hn.copy(this);const h=1/o,l=1/r,f=1/a;return hn.elements[0]*=h,hn.elements[1]*=h,hn.elements[2]*=h,hn.elements[4]*=l,hn.elements[5]*=l,hn.elements[6]*=l,hn.elements[8]*=f,hn.elements[9]*=f,hn.elements[10]*=f,t.setFromRotationMatrix(hn),n.x=o,n.y=r,n.z=a,this}makePerspective(e,t,n,s,o,r,a=Wn){const c=this.elements,h=2*o/(t-e),l=2*o/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s);let g,_;if(a===Wn)g=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===zr)g=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=l,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,o,r,a=Wn){const c=this.elements,h=1/(t-e),l=1/(n-s),f=1/(r-o),p=(t+e)*h,g=(n+s)*l;let _,v;if(a===Wn)_=(r+o)*f,v=-2*f;else if(a===zr)_=o*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ss=new I,hn=new ut,wg=new I(0,0,0),Cg=new I(1,1,1),Jn=new I,tr=new I,Kt=new I,Sh=new ut,Mh=new Vs;class An{constructor(e=0,t=0,n=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],r=s[4],a=s[8],c=s[1],h=s[5],l=s[9],f=s[2],p=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,g),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(jt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-l,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mh.setFromEuler(this),this.setFromQuaternion(Mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class qu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tg=0;const bh=new I,os=new Vs,Fn=new ut,nr=new I,ro=new I,Ag=new I,Rg=new Vs,Eh=new I(1,0,0),wh=new I(0,1,0),Ch=new I(0,0,1),Th={type:"added"},Pg={type:"removed"},rs={type:"childadded",child:null},ol={type:"childremoved",child:null};class At extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new I,t=new An,n=new Vs,s=new I(1,1,1);function o(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ke}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Eh,e)}rotateY(e){return this.rotateOnAxis(wh,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return bh.copy(e).applyQuaternion(this.quaternion),this.position.add(bh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eh,e)}translateY(e){return this.translateOnAxis(wh,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nr.copy(e):nr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(ro,nr,this.up):Fn.lookAt(nr,ro,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Fn),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Th),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pg),ol.child=e,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Th),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,Ag),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,Rg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++){const a=s[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const f=c[h];o(e.shapes,f)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(o(e.materials,this.material[c]));s.material=a}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(e.animations,c))}}if(t){const a=r(e.geometries),c=r(e.materials),h=r(e.textures),l=r(e.images),f=r(e.shapes),p=r(e.skeletons),g=r(e.animations),_=r(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function r(a){const c=[];for(const h in a){const l=a[h];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}At.DEFAULT_UP=new I(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new I,On=new I,rl=new I,Bn=new I,as=new I,ls=new I,Ah=new I,al=new I,ll=new I,cl=new I;class xn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){un.subVectors(s,t),On.subVectors(n,t),rl.subVectors(e,t);const r=un.dot(un),a=un.dot(On),c=un.dot(rl),h=On.dot(On),l=On.dot(rl),f=r*h-a*a;if(f===0)return o.set(0,0,0),null;const p=1/f,g=(h*c-a*l)*p,_=(r*l-a*c)*p;return o.set(1-g-_,_,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,s,o,r,a,c){return this.getBarycoord(e,t,n,s,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Bn.x),c.addScaledVector(r,Bn.y),c.addScaledVector(a,Bn.z),c)}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),On.subVectors(e,t),un.cross(On).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),On.subVectors(this.a,this.b),un.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let r,a;as.subVectors(s,n),ls.subVectors(o,n),al.subVectors(e,n);const c=as.dot(al),h=ls.dot(al);if(c<=0&&h<=0)return t.copy(n);ll.subVectors(e,s);const l=as.dot(ll),f=ls.dot(ll);if(l>=0&&f<=l)return t.copy(s);const p=c*f-l*h;if(p<=0&&c>=0&&l<=0)return r=c/(c-l),t.copy(n).addScaledVector(as,r);cl.subVectors(e,o);const g=as.dot(cl),_=ls.dot(cl);if(_>=0&&g<=_)return t.copy(o);const v=g*h-c*_;if(v<=0&&h>=0&&_<=0)return a=h/(h-_),t.copy(n).addScaledVector(ls,a);const m=l*_-g*f;if(m<=0&&f-l>=0&&g-_>=0)return Ah.subVectors(o,s),a=(f-l)/(f-l+(g-_)),t.copy(s).addScaledVector(Ah,a);const u=1/(m+v+p);return r=v*u,a=p*u,t.copy(n).addScaledVector(as,r).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function dl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=Xl(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,r=2*n-o;this.r=dl(r,o,e+1/3),this.g=dl(r,o,e),this.b=dl(r,o,e-1/3)}return lt.toWorkingColorSpace(this,s),this}setStyle(e,t=bn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const n=Yu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=Ja(e.r),this.g=Ja(e.g),this.b=Ja(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return lt.fromWorkingColorSpace(kt.copy(this),e),Math.round(jt(kt.r*255,0,255))*65536+Math.round(jt(kt.g*255,0,255))*256+Math.round(jt(kt.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(kt.copy(this),t);const n=kt.r,s=kt.g,o=kt.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,h;const l=(a+r)/2;if(a===r)c=0,h=0;else{const f=r-a;switch(h=l<=.5?f/(r+a):f/(2-r-a),r){case n:c=(s-o)/f+(s<o?6:0);break;case s:c=(o-n)/f+2;break;case o:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=h,e.l=l,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=bn){lt.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,s=kt.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(ir);const n=xo(Zn.h,ir.h,t),s=xo(Zn.s,ir.s,t),o=xo(Zn.l,ir.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new it;it.NAMES=Yu;let Lg=0;class ki extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Ni,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Dl,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Il&&(n.blendSrc=this.blendSrc),this.blendDst!==Dl&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(t){const o=s(e.textures),r=s(e.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hi extends ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new I,sr=new ke;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ql("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sr.fromBufferAttribute(this,t),sr.applyMatrix3(e),this.setXY(t,sr.x,sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),o=at(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bl&&(e.usage=this.usage),e}}class Ku extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ju extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ig=0;const tn=new ut,hl=new At,cs=new I,Jt=new zi,ao=new zi,Lt=new I;class $t extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wu(e)?Ju:Ku)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Ke().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];Jt.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];ao.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(Jt.min,ao.min),Jt.expandByPoint(Lt),Lt.addVectors(Jt.max,ao.max),Jt.expandByPoint(Lt)):(Jt.expandByPoint(ao.min),Jt.expandByPoint(ao.max))}Jt.getCenter(n);let s=0;for(let o=0,r=e.count;o<r;o++)Lt.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)Lt.fromBufferAttribute(a,h),c&&(cs.fromBufferAttribute(e,h),Lt.add(cs)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new I,c[F]=new I;const h=new I,l=new I,f=new I,p=new ke,g=new ke,_=new ke,v=new I,m=new I;function u(F,C,b){h.fromBufferAttribute(n,F),l.fromBufferAttribute(n,C),f.fromBufferAttribute(n,b),p.fromBufferAttribute(o,F),g.fromBufferAttribute(o,C),_.fromBufferAttribute(o,b),l.sub(h),f.sub(h),g.sub(p),_.sub(p);const P=1/(g.x*_.y-_.x*g.y);isFinite(P)&&(v.copy(l).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(P),m.copy(f).multiplyScalar(g.x).addScaledVector(l,-_.x).multiplyScalar(P),a[F].add(v),a[C].add(v),a[b].add(v),c[F].add(m),c[C].add(m),c[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let F=0,C=y.length;F<C;++F){const b=y[F],P=b.start,W=b.count;for(let G=P,J=P+W;G<J;G+=3)u(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const S=new I,w=new I,U=new I,A=new I;function R(F){U.fromBufferAttribute(s,F),A.copy(U);const C=a[F];S.copy(C),S.sub(U.multiplyScalar(U.dot(C))).normalize(),w.crossVectors(A,C);const P=w.dot(c[F])<0?-1:1;r.setXYZW(F,S.x,S.y,S.z,P)}for(let F=0,C=y.length;F<C;++F){const b=y[F],P=b.start,W=b.count;for(let G=P,J=P+W;G<J;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const s=new I,o=new I,r=new I,a=new I,c=new I,h=new I,l=new I,f=new I;if(e)for(let p=0,g=e.count;p<g;p+=3){const _=e.getX(p+0),v=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),l.subVectors(r,o),f.subVectors(s,o),l.cross(f),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,m),a.add(l),c.add(l),h.add(l),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let p=0,g=t.count;p<g;p+=3)s.fromBufferAttribute(t,p+0),o.fromBufferAttribute(t,p+1),r.fromBufferAttribute(t,p+2),l.subVectors(r,o),f.subVectors(s,o),l.cross(f),n.setXYZ(p+0,l.x,l.y,l.z),n.setXYZ(p+1,l.x,l.y,l.z),n.setXYZ(p+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,c){const h=a.array,l=a.itemSize,f=a.normalized,p=new h.constructor(c.length*l);let g=0,_=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?g=c[v]*a.data.stride+a.offset:g=c[v]*l;for(let u=0;u<l;u++)p[_++]=h[g++]}return new Yt(p,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],h=e(c,n);t.setAttribute(a,h)}const o=this.morphAttributes;for(const a in o){const c=[],h=o[a];for(let l=0,f=h.length;l<f;l++){const p=h[l],g=e(p,n);c.push(g)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const h=r[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const s={};let o=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let f=0,p=h.length;f<p;f++){const g=h[f];l.push(g.toJSON(e.data))}l.length>0&&(s[c]=l,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const h in s){const l=s[h];this.setAttribute(h,l.clone(t))}const o=e.morphAttributes;for(const h in o){const l=[],f=o[h];for(let p=0,g=f.length;p<g;p++)l.push(f[p].clone(t));this.morphAttributes[h]=l}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let h=0,l=r.length;h<l;h++){const f=r[h];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rh=new ut,yi=new Xu,or=new Hs,Ph=new I,ds=new I,hs=new I,us=new I,ul=new I,rr=new I,ar=new ke,lr=new ke,cr=new ke,Lh=new I,Ih=new I,Dh=new I,dr=new I,hr=new I;class Tt extends At{constructor(e=new $t,t=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(o&&a){rr.set(0,0,0);for(let c=0,h=o.length;c<h;c++){const l=a[c],f=o[c];l!==0&&(ul.fromBufferAttribute(f,e),r?rr.addScaledVector(ul,l):rr.addScaledVector(ul.sub(t),l))}t.add(rr)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(o),yi.copy(e.ray).recast(e.near),!(or.containsPoint(yi.origin)===!1&&(yi.intersectSphere(or,Ph)===null||yi.origin.distanceToSquared(Ph)>(e.far-e.near)**2))&&(Rh.copy(o).invert(),yi.copy(e.ray).applyMatrix4(Rh),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,h=o.attributes.uv,l=o.attributes.uv1,f=o.attributes.normal,p=o.groups,g=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,v=p.length;_<v;_++){const m=p[_],u=r[m.materialIndex],y=Math.max(m.start,g.start),S=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let w=y,U=S;w<U;w+=3){const A=a.getX(w),R=a.getX(w+1),F=a.getX(w+2);s=ur(this,u,e,n,h,l,f,A,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let m=_,u=v;m<u;m+=3){const y=a.getX(m),S=a.getX(m+1),w=a.getX(m+2);s=ur(this,r,e,n,h,l,f,y,S,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,v=p.length;_<v;_++){const m=p[_],u=r[m.materialIndex],y=Math.max(m.start,g.start),S=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let w=y,U=S;w<U;w+=3){const A=w,R=w+1,F=w+2;s=ur(this,u,e,n,h,l,f,A,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,g.start),v=Math.min(c.count,g.start+g.count);for(let m=_,u=v;m<u;m+=3){const y=m,S=m+1,w=m+2;s=ur(this,r,e,n,h,l,f,y,S,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Dg(i,e,t,n,s,o,r,a){let c;if(e.side===qt?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,e.side===li,a),c===null)return null;hr.copy(a),hr.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(hr);return h<t.near||h>t.far?null:{distance:h,point:hr.clone(),object:i}}function ur(i,e,t,n,s,o,r,a,c,h){i.getVertexPosition(a,ds),i.getVertexPosition(c,hs),i.getVertexPosition(h,us);const l=Dg(i,e,t,n,ds,hs,us,dr);if(l){s&&(ar.fromBufferAttribute(s,a),lr.fromBufferAttribute(s,c),cr.fromBufferAttribute(s,h),l.uv=xn.getInterpolation(dr,ds,hs,us,ar,lr,cr,new ke)),o&&(ar.fromBufferAttribute(o,a),lr.fromBufferAttribute(o,c),cr.fromBufferAttribute(o,h),l.uv1=xn.getInterpolation(dr,ds,hs,us,ar,lr,cr,new ke)),r&&(Lh.fromBufferAttribute(r,a),Ih.fromBufferAttribute(r,c),Dh.fromBufferAttribute(r,h),l.normal=xn.getInterpolation(dr,ds,hs,us,Lh,Ih,Dh,new I),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const f={a,b:c,c:h,normal:new I,materialIndex:0};xn.getNormal(ds,hs,us,f.normal),l.face=f}return l}class Ao extends $t{constructor(e=1,t=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],h=[],l=[],f=[];let p=0,g=0;_("z","y","x",-1,-1,n,t,e,r,o,0),_("z","y","x",1,-1,n,t,-e,r,o,1),_("x","z","y",1,1,e,n,t,s,r,2),_("x","z","y",1,-1,e,n,-t,s,r,3),_("x","y","z",1,-1,e,t,n,s,o,4),_("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(f,2));function _(v,m,u,y,S,w,U,A,R,F,C){const b=w/R,P=U/F,W=w/2,G=U/2,J=A/2,Z=R+1,Y=F+1;let K=0,$=0;const he=new I;for(let ge=0;ge<Y;ge++){const ve=ge*P-G;for(let Ge=0;Ge<Z;Ge++){const Je=Ge*b-W;he[v]=Je*y,he[m]=ve*S,he[u]=J,h.push(he.x,he.y,he.z),he[v]=0,he[m]=0,he[u]=A>0?1:-1,l.push(he.x,he.y,he.z),f.push(Ge/R),f.push(1-ge/F),K+=1}}for(let ge=0;ge<F;ge++)for(let ve=0;ve<R;ve++){const Ge=p+ve+Z*ge,Je=p+ve+Z*(ge+1),X=p+(ve+1)+Z*(ge+1),ne=p+(ve+1)+Z*ge;c.push(Ge,Je,ne),c.push(Je,X,ne),$+=6}a.addGroup(g,$,C),g+=$,p+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Wt(i){const e={};for(let t=0;t<i.length;t++){const n=Bs(i[t]);for(const s in n)e[s]=n[s]}return e}function Ug(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const Yl={clone:Bs,merge:Wt};var Ng=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ng,this.fragmentShader=Fg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=Ug(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qu extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new I,Uh=new ke,Nh=new ke;class sn extends Qu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,Uh,Nh),t.subVectors(Nh,Uh)}setViewOffset(e,t,n,s,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(go*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,h=r.fullHeight;o+=r.offsetX*s/c,t-=r.offsetY*n/h,s*=r.width/c,n*=r.height/h}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fs=-90,ps=1;class Og extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(fs,ps,e,t);s.layers=this.layers,this.add(s);const o=new sn(fs,ps,e,t);o.layers=this.layers,this.add(o);const r=new sn(fs,ps,e,t);r.layers=this.layers,this.add(r);const a=new sn(fs,ps,e,t);a.layers=this.layers,this.add(a);const c=new sn(fs,ps,e,t);c.layers=this.layers,this.add(c);const h=new sn(fs,ps,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,r,a,c]=t;for(const h of t)this.remove(h);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,h,l]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,l),e.setRenderTarget(f,p,g),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ef extends Ot{constructor(e,t,n,s,o,r,a,c,h,l){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,n,s,o,r,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bg extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ef(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ao(5,5,5),o=new rn({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:jn});o.uniforms.tEquirect.value=t;const r=new Tt(s,o),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=mn),new Og(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(o)}}const fl=new I,zg=new I,kg=new Ke;class Ei{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=fl.subVectors(n,t).cross(zg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kg.getNormalMatrix(e),s=this.coplanarPoint(fl).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Hs,fr=new I;class Kl{constructor(e=new Ei,t=new Ei,n=new Ei,s=new Ei,o=new Ei,r=new Ei){this.planes=[e,t,n,s,o,r]}set(e,t,n,s,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn){const n=this.planes,s=e.elements,o=s[0],r=s[1],a=s[2],c=s[3],h=s[4],l=s[5],f=s[6],p=s[7],g=s[8],_=s[9],v=s[10],m=s[11],u=s[12],y=s[13],S=s[14],w=s[15];if(n[0].setComponents(c-o,p-h,m-g,w-u).normalize(),n[1].setComponents(c+o,p+h,m+g,w+u).normalize(),n[2].setComponents(c+r,p+l,m+_,w+y).normalize(),n[3].setComponents(c-r,p-l,m-_,w-y).normalize(),n[4].setComponents(c-a,p-f,m-v,w-S).normalize(),t===Wn)n[5].setComponents(c+a,p+f,m+v,w+S).normalize();else if(t===zr)n[5].setComponents(a,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(fr.x=s.normal.x>0?e.max.x:e.min.x,fr.y=s.normal.y>0?e.max.y:e.min.y,fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tf(){let i=null,e=!1,t=null,n=null;function s(o,r){t(o,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Vg(i){const e=new WeakMap;function t(a,c){const h=a.array,l=a.usage,f=h.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,h,l),a.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,h){const l=c.array,f=c._updateRange,p=c.updateRanges;if(i.bindBuffer(h,a),f.count===-1&&p.length===0&&i.bufferSubData(h,0,l),p.length!==0){for(let g=0,_=p.length;g<_;g++){const v=p[g];i.bufferSubData(h,v.start*l.BYTES_PER_ELEMENT,l,v.start,v.count)}c.clearUpdateRanges()}f.count!==-1&&(i.bufferSubData(h,f.offset*l.BYTES_PER_ELEMENT,l,f.offset,f.count),f.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function r(a,c){if(a.isGLBufferAttribute){const l=e.get(a);(!l||l.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const h=e.get(a);if(h===void 0)e.set(a,t(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:s,remove:o,update:r}}class ui extends $t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,r=t/2,a=Math.floor(n),c=Math.floor(s),h=a+1,l=c+1,f=e/a,p=t/c,g=[],_=[],v=[],m=[];for(let u=0;u<l;u++){const y=u*p-r;for(let S=0;S<h;S++){const w=S*f-o;_.push(w,-y,0),v.push(0,0,1),m.push(S/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let y=0;y<a;y++){const S=y+h*u,w=y+h*(u+1),U=y+1+h*(u+1),A=y+1+h*u;g.push(S,w,A),g.push(w,U,A)}this.setIndex(g),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(v,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,t0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,n0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,h0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,u0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,f0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_0="gl_FragColor = linearToOutputTexel( gl_FragColor );",v0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,w0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,P0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,U0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,N0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,J0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ax=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Px=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ux=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Yx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,r_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,u_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,v_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Hg,alphahash_pars_fragment:Gg,alphamap_fragment:Wg,alphamap_pars_fragment:jg,alphatest_fragment:$g,alphatest_pars_fragment:Xg,aomap_fragment:qg,aomap_pars_fragment:Yg,batching_pars_vertex:Kg,batching_vertex:Jg,begin_vertex:Zg,beginnormal_vertex:Qg,bsdfs:e0,iridescence_fragment:t0,bumpmap_pars_fragment:n0,clipping_planes_fragment:i0,clipping_planes_pars_fragment:s0,clipping_planes_pars_vertex:o0,clipping_planes_vertex:r0,color_fragment:a0,color_pars_fragment:l0,color_pars_vertex:c0,color_vertex:d0,common:h0,cube_uv_reflection_fragment:u0,defaultnormal_vertex:f0,displacementmap_pars_vertex:p0,displacementmap_vertex:m0,emissivemap_fragment:g0,emissivemap_pars_fragment:x0,colorspace_fragment:_0,colorspace_pars_fragment:v0,envmap_fragment:y0,envmap_common_pars_fragment:S0,envmap_pars_fragment:M0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:U0,envmap_vertex:E0,fog_vertex:w0,fog_pars_vertex:C0,fog_fragment:T0,fog_pars_fragment:A0,gradientmap_pars_fragment:R0,lightmap_pars_fragment:P0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:I0,lights_pars_begin:D0,lights_toon_fragment:N0,lights_toon_pars_fragment:F0,lights_phong_fragment:O0,lights_phong_pars_fragment:B0,lights_physical_fragment:z0,lights_physical_pars_fragment:k0,lights_fragment_begin:V0,lights_fragment_maps:H0,lights_fragment_end:G0,logdepthbuf_fragment:W0,logdepthbuf_pars_fragment:j0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:X0,map_fragment:q0,map_pars_fragment:Y0,map_particle_fragment:K0,map_particle_pars_fragment:J0,metalnessmap_fragment:Z0,metalnessmap_pars_fragment:Q0,morphinstance_vertex:ex,morphcolor_vertex:tx,morphnormal_vertex:nx,morphtarget_pars_vertex:ix,morphtarget_vertex:sx,normal_fragment_begin:ox,normal_fragment_maps:rx,normal_pars_fragment:ax,normal_pars_vertex:lx,normal_vertex:cx,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:hx,clearcoat_normal_fragment_maps:ux,clearcoat_pars_fragment:fx,iridescence_pars_fragment:px,opaque_fragment:mx,packing:gx,premultiplied_alpha_fragment:xx,project_vertex:_x,dithering_fragment:vx,dithering_pars_fragment:yx,roughnessmap_fragment:Sx,roughnessmap_pars_fragment:Mx,shadowmap_pars_fragment:bx,shadowmap_pars_vertex:Ex,shadowmap_vertex:wx,shadowmask_pars_fragment:Cx,skinbase_vertex:Tx,skinning_pars_vertex:Ax,skinning_vertex:Rx,skinnormal_vertex:Px,specularmap_fragment:Lx,specularmap_pars_fragment:Ix,tonemapping_fragment:Dx,tonemapping_pars_fragment:Ux,transmission_fragment:Nx,transmission_pars_fragment:Fx,uv_pars_fragment:Ox,uv_pars_vertex:Bx,uv_vertex:zx,worldpos_vertex:kx,background_vert:Vx,background_frag:Hx,backgroundCube_vert:Gx,backgroundCube_frag:Wx,cube_vert:jx,cube_frag:$x,depth_vert:Xx,depth_frag:qx,distanceRGBA_vert:Yx,distanceRGBA_frag:Kx,equirect_vert:Jx,equirect_frag:Zx,linedashed_vert:Qx,linedashed_frag:e_,meshbasic_vert:t_,meshbasic_frag:n_,meshlambert_vert:i_,meshlambert_frag:s_,meshmatcap_vert:o_,meshmatcap_frag:r_,meshnormal_vert:a_,meshnormal_frag:l_,meshphong_vert:c_,meshphong_frag:d_,meshphysical_vert:h_,meshphysical_frag:u_,meshtoon_vert:f_,meshtoon_frag:p_,points_vert:m_,points_frag:g_,shadow_vert:x_,shadow_frag:__,sprite_vert:v_,sprite_frag:y_},xe={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},En={basic:{uniforms:Wt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Wt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new it(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Wt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Wt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Wt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new it(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Wt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Wt([xe.points,xe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Wt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Wt([xe.common,xe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Wt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Wt([xe.sprite,xe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Wt([xe.common,xe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Wt([xe.lights,xe.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};En.physical={uniforms:Wt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const pr={r:0,b:0,g:0},Mi=new An,S_=new ut;function M_(i,e,t,n,s,o,r){const a=new it(0);let c=o===!0?0:1,h,l,f=null,p=0,g=null;function _(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function v(y){let S=!1;const w=_(y);w===null?u(a,c):w&&w.isColor&&(u(w,1),S=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,r):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){const w=_(S);w&&(w.isCubeTexture||w.mapping===Xr)?(l===void 0&&(l=new Tt(new Ao(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Bs(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(U,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),Mi.copy(S.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),l.material.uniforms.envMap.value=w,l.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(S_.makeRotationFromEuler(Mi)),l.material.toneMapped=lt.getTransfer(w.colorSpace)!==gt,(f!==w||p!==w.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,f=w,p=w.version,g=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new Tt(new ui(2,2),new rn({name:"BackgroundMaterial",uniforms:Bs(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.toneMapped=lt.getTransfer(w.colorSpace)!==gt,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||p!==w.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,f=w,p=w.version,g=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function u(y,S){y.getRGB(pr,Zu(i)),n.buffers.color.setClear(pr.r,pr.g,pr.b,S,r)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),c=S,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,u(a,c)},render:v,addToRenderList:m}}function b_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let o=s,r=!1;function a(b,P,W,G,J){let Z=!1;const Y=f(G,W,P);o!==Y&&(o=Y,h(o.object)),Z=g(b,G,W,J),Z&&_(b,G,W,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,w(b,P,W,G),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return i.createVertexArray()}function h(b){return i.bindVertexArray(b)}function l(b){return i.deleteVertexArray(b)}function f(b,P,W){const G=W.wireframe===!0;let J=n[b.id];J===void 0&&(J={},n[b.id]=J);let Z=J[P.id];Z===void 0&&(Z={},J[P.id]=Z);let Y=Z[G];return Y===void 0&&(Y=p(c()),Z[G]=Y),Y}function p(b){const P=[],W=[],G=[];for(let J=0;J<t;J++)P[J]=0,W[J]=0,G[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:W,attributeDivisors:G,object:b,attributes:{},index:null}}function g(b,P,W,G){const J=o.attributes,Z=P.attributes;let Y=0;const K=W.getAttributes();for(const $ in K)if(K[$].location>=0){const ge=J[$];let ve=Z[$];if(ve===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor)),ge===void 0||ge.attribute!==ve||ve&&ge.data!==ve.data)return!0;Y++}return o.attributesNum!==Y||o.index!==G}function _(b,P,W,G){const J={},Z=P.attributes;let Y=0;const K=W.getAttributes();for(const $ in K)if(K[$].location>=0){let ge=Z[$];ge===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor));const ve={};ve.attribute=ge,ge&&ge.data&&(ve.data=ge.data),J[$]=ve,Y++}o.attributes=J,o.attributesNum=Y,o.index=G}function v(){const b=o.newAttributes;for(let P=0,W=b.length;P<W;P++)b[P]=0}function m(b){u(b,0)}function u(b,P){const W=o.newAttributes,G=o.enabledAttributes,J=o.attributeDivisors;W[b]=1,G[b]===0&&(i.enableVertexAttribArray(b),G[b]=1),J[b]!==P&&(i.vertexAttribDivisor(b,P),J[b]=P)}function y(){const b=o.newAttributes,P=o.enabledAttributes;for(let W=0,G=P.length;W<G;W++)P[W]!==b[W]&&(i.disableVertexAttribArray(W),P[W]=0)}function S(b,P,W,G,J,Z,Y){Y===!0?i.vertexAttribIPointer(b,P,W,J,Z):i.vertexAttribPointer(b,P,W,G,J,Z)}function w(b,P,W,G){v();const J=G.attributes,Z=W.getAttributes(),Y=P.defaultAttributeValues;for(const K in Z){const $=Z[K];if($.location>=0){let he=J[K];if(he===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(he=b.instanceColor)),he!==void 0){const ge=he.normalized,ve=he.itemSize,Ge=e.get(he);if(Ge===void 0)continue;const Je=Ge.buffer,X=Ge.type,ne=Ge.bytesPerElement,fe=X===i.INT||X===i.UNSIGNED_INT||he.gpuType===Nu;if(he.isInterleavedBufferAttribute){const le=he.data,Oe=le.stride,Be=he.offset;if(le.isInstancedInterleavedBuffer){for(let Xe=0;Xe<$.locationSize;Xe++)u($.location+Xe,le.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Xe=0;Xe<$.locationSize;Xe++)m($.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Xe=0;Xe<$.locationSize;Xe++)S($.location+Xe,ve/$.locationSize,X,ge,Oe*ne,(Be+ve/$.locationSize*Xe)*ne,fe)}else{if(he.isInstancedBufferAttribute){for(let le=0;le<$.locationSize;le++)u($.location+le,he.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let le=0;le<$.locationSize;le++)m($.location+le);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let le=0;le<$.locationSize;le++)S($.location+le,ve/$.locationSize,X,ge,ve*ne,ve/$.locationSize*le*ne,fe)}}else if(Y!==void 0){const ge=Y[K];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv($.location,ge);break;case 3:i.vertexAttrib3fv($.location,ge);break;case 4:i.vertexAttrib4fv($.location,ge);break;default:i.vertexAttrib1fv($.location,ge)}}}}y()}function U(){F();for(const b in n){const P=n[b];for(const W in P){const G=P[W];for(const J in G)l(G[J].object),delete G[J];delete P[W]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const W in P){const G=P[W];for(const J in G)l(G[J].object),delete G[J];delete P[W]}delete n[b.id]}function R(b){for(const P in n){const W=n[P];if(W[b.id]===void 0)continue;const G=W[b.id];for(const J in G)l(G[J].object),delete G[J];delete W[b.id]}}function F(){C(),r=!0,o!==s&&(o=s,h(o.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:C,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function E_(i,e,t){let n;function s(h){n=h}function o(h,l){i.drawArrays(n,h,l),t.update(l,n,1)}function r(h,l,f){f!==0&&(i.drawArraysInstanced(n,h,l,f),t.update(l,n,f))}function a(h,l,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],l[g]);else{p.multiDrawArraysWEBGL(n,h,0,l,0,f);let g=0;for(let _=0;_<f;_++)g+=l[_];t.update(g,n,1)}}function c(h,l,f,p){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<h.length;_++)r(h[_],l[_],p[_]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,l,0,p,0,f);let _=0;for(let v=0;v<f;v++)_+=l[v];for(let v=0;v<p.length;v++)t.update(_,n,p[v])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function w_(i,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==Tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===Bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ci&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Gn&&!R)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);const f=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),u=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:u,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:w,maxSamples:U}}function C_(i){const e=this;let t=null,n=0,s=!1,o=!1;const r=new Ei,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||n!==0||s;return s=p,n=f.length,g},this.beginShadows=function(){o=!0,l(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,p){t=l(f,p,0)},this.setState=function(f,p,g){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!s||_===null||_.length===0||o&&!m)o?l(null):h();else{const y=o?0:n,S=y*4;let w=u.clippingState||null;c.value=w,w=l(_,p,S,g);for(let U=0;U!==S;++U)w[U]=t[U];u.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(f,p,g,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const u=g+v*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<u)&&(m=new Float32Array(u));for(let S=0,w=g;S!==v;++S,w+=4)r.copy(f[S]).applyMatrix4(y,a),r.normal.toArray(m,w),m[w+3]=r.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function T_(i){let e=new WeakMap;function t(r,a){return a===Ul?r.mapping=Ds:a===Nl&&(r.mapping=Us),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ul||a===Nl)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const h=new Bg(c.height);return h.fromEquirectangularTexture(i,r),e.set(r,h),r.addEventListener("dispose",s),t(h.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Yr extends Qu{constructor(e=-1,t=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,r=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,r=o+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bs=4,Fh=[.125,.215,.35,.446,.526,.582],Ri=20,pl=new Yr,Oh=new it;let ml=null,gl=0,xl=0,_l=!1;const wi=(1+Math.sqrt(5))/2,ms=1/wi,Bh=[new I(-wi,ms,0),new I(wi,ms,0),new I(-ms,0,wi),new I(ms,0,wi),new I(0,wi,-ms),new I(0,wi,ms),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class zh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ml,gl,xl),this._renderer.xr.enabled=_l,e.scissorTest=!1,mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Bi,format:Tn,colorSpace:di,depthBuffer:!1},s=kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A_(o)),this._blurMaterial=R_(o,e,t)}return s}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,pl)}_sceneToCubeUV(e,t,n,s){const a=new sn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,p=l.toneMapping;l.getClearColor(Oh),l.toneMapping=ri,l.autoClear=!1;const g=new hi({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),_=new Tt(new Ao,g);let v=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,v=!0):(g.color.copy(Oh),v=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(a.up.set(0,c[u],0),a.lookAt(h[u],0,0)):y===1?(a.up.set(0,0,c[u]),a.lookAt(0,h[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,h[u]));const S=this._cubeSize;mr(s,y*S,u>2?S:0,S,S),l.setRenderTarget(s),v&&l.render(_,a),l.render(e,a)}_.geometry.dispose(),_.material.dispose(),l.toneMapping=p,l.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ds||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Tt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;mr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,pl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Bh[(s-o-1)%Bh.length];this._blur(e,o-1,o,r,a)}t.autoClear=n}_blur(e,t,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",o),this._halfBlur(r,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,r,a){const c=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,f=new Tt(this._lodPlanes[s],h),p=h.uniforms,g=this._sizeLods[n]-1,_=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*Ri-1),v=o/_,m=isFinite(o)?1+Math.floor(l*v):Ri;m>Ri&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const u=[];let y=0;for(let R=0;R<Ri;++R){const F=R/v,C=Math.exp(-F*F/2);u.push(C),R===0?y+=C:R<m&&(y+=2*C)}for(let R=0;R<u.length;R++)u[R]=u[R]/y;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=r==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=_,p.mipInt.value=S-n;const w=this._sizeLods[s],U=3*w*(s>S-bs?s-S+bs:0),A=4*(this._cubeSize-w);mr(t,U,A,3*w,2*w),c.setRenderTarget(t),c.render(f,pl)}}function A_(i){const e=[],t=[],n=[];let s=i;const o=i-bs+1+Fh.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);t.push(a);let c=1/a;r>i-bs?c=Fh[r-i+bs-1]:r===0&&(c=0),n.push(c);const h=1/(a-2),l=-h,f=1+h,p=[l,l,f,l,f,f,l,l,f,f,l,f],g=6,_=6,v=3,m=2,u=1,y=new Float32Array(v*_*g),S=new Float32Array(m*_*g),w=new Float32Array(u*_*g);for(let A=0;A<g;A++){const R=A%3*2/3-1,F=A>2?0:-1,C=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];y.set(C,v*_*A),S.set(p,m*_*A);const b=[A,A,A,A,A,A];w.set(b,u*_*A)}const U=new $t;U.setAttribute("position",new Yt(y,v)),U.setAttribute("uv",new Yt(S,m)),U.setAttribute("faceIndex",new Yt(w,u)),e.push(U),s>bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kh(i,e,t){const n=new vn(i,e,t);return n.texture.mapping=Xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function R_(i,e,t){const n=new Float32Array(Ri),s=new I(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Vh(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Hh(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function P_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,h=c===Ul||c===Nl,l=c===Ds||c===Us;if(h||l){let f=e.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new zh(i)),f=h?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const g=a.image;return h&&g&&g.height>0||l&&g&&s(g)?(t===null&&(t=new zh(i)),f=h?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function s(a){let c=0;const h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function o(a){const c=a.target;c.removeEventListener("dispose",o);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function L_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ql("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function I_(i,e,t,n){const s={},o=new WeakMap;function r(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const v=p.morphAttributes[_];for(let m=0,u=v.length;m<u;m++)e.remove(v[m])}p.removeEventListener("dispose",r),delete s[p.id];const g=o.get(p);g&&(e.remove(g),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",r),s[p.id]=!0,t.memory.geometries++),p}function c(f){const p=f.attributes;for(const _ in p)e.update(p[_],i.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const v=g[_];for(let m=0,u=v.length;m<u;m++)e.update(v[m],i.ARRAY_BUFFER)}}function h(f){const p=[],g=f.index,_=f.attributes.position;let v=0;if(g!==null){const y=g.array;v=g.version;for(let S=0,w=y.length;S<w;S+=3){const U=y[S+0],A=y[S+1],R=y[S+2];p.push(U,A,A,R,R,U)}}else if(_!==void 0){const y=_.array;v=_.version;for(let S=0,w=y.length/3-1;S<w;S+=3){const U=S+0,A=S+1,R=S+2;p.push(U,A,A,R,R,U)}}else return;const m=new(Wu(p)?Ju:Ku)(p,1);m.version=v;const u=o.get(f);u&&e.remove(u),o.set(f,m)}function l(f){const p=o.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&h(f)}else h(f);return o.get(f)}return{get:a,update:c,getWireframeAttribute:l}}function D_(i,e,t){let n;function s(p){n=p}let o,r;function a(p){o=p.type,r=p.bytesPerElement}function c(p,g){i.drawElements(n,g,o,p*r),t.update(g,n,1)}function h(p,g,_){_!==0&&(i.drawElementsInstanced(n,g,o,p*r,_),t.update(g,n,_))}function l(p,g,_){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<_;m++)this.render(p[m]/r,g[m]);else{v.multiDrawElementsWEBGL(n,g,0,o,p,0,_);let m=0;for(let u=0;u<_;u++)m+=g[u];t.update(m,n,1)}}function f(p,g,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)h(p[u]/r,g[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,o,p,0,v,0,_);let u=0;for(let y=0;y<_;y++)u+=g[y];for(let y=0;y<v.length;y++)t.update(u,n,v[y])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function U_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function N_(i,e,t){const n=new WeakMap,s=new It;function o(r,a,c){const h=r.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=l!==void 0?l.length:0;let p=n.get(a);if(p===void 0||p.count!==f){let b=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var g=b;p!==void 0&&p.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let w=0;_===!0&&(w=1),v===!0&&(w=2),m===!0&&(w=3);let U=a.attributes.position.count*w,A=1;U>e.maxTextureSize&&(A=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const R=new Float32Array(U*A*4*f),F=new $u(R,U,A,f);F.type=Gn,F.needsUpdate=!0;const C=w*4;for(let P=0;P<f;P++){const W=u[P],G=y[P],J=S[P],Z=U*A*4*P;for(let Y=0;Y<W.count;Y++){const K=Y*C;_===!0&&(s.fromBufferAttribute(W,Y),R[Z+K+0]=s.x,R[Z+K+1]=s.y,R[Z+K+2]=s.z,R[Z+K+3]=0),v===!0&&(s.fromBufferAttribute(G,Y),R[Z+K+4]=s.x,R[Z+K+5]=s.y,R[Z+K+6]=s.z,R[Z+K+7]=0),m===!0&&(s.fromBufferAttribute(J,Y),R[Z+K+8]=s.x,R[Z+K+9]=s.y,R[Z+K+10]=s.z,R[Z+K+11]=J.itemSize===4?s.w:1)}}p={count:f,texture:F,size:new ke(U,A)},n.set(a,p),a.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let _=0;for(let m=0;m<h.length;m++)_+=h[m];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:o}}function F_(i,e,t,n){let s=new WeakMap;function o(c){const h=n.render.frame,l=c.geometry,f=e.get(c,l);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function r(){s=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:r}}class nf extends Ot{constructor(e,t,n,s,o,r,a,c,h,l=ws){if(l!==ws&&l!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===ws&&(n=Ns),n===void 0&&l===Os&&(n=Fs),super(null,s,o,r,a,c,l,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=c!==void 0?c:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const sf=new Ot,of=new nf(1,1);of.compareFunction=Gu;const rf=new $u,af=new bg,lf=new ef,Gh=[],Wh=[],jh=new Float32Array(16),$h=new Float32Array(9),Xh=new Float32Array(4);function Gs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=Gh[s];if(o===void 0&&(o=new Float32Array(s),Gh[s]=o),e!==0){n.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,i[r].toArray(o,a)}return o}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Kr(i,e){let t=Wh[e];t===void 0&&(t=new Int32Array(e),Wh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function O_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function B_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function k_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function V_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Xh.set(n),i.uniformMatrix2fv(this.addr,!1,Xh),Pt(t,n)}}function H_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;$h.set(n),i.uniformMatrix3fv(this.addr,!1,$h),Pt(t,n)}}function G_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;jh.set(n),i.uniformMatrix4fv(this.addr,!1,jh),Pt(t,n)}}function W_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function j_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function $_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function X_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function q_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function K_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function J_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function Z_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const o=this.type===i.SAMPLER_2D_SHADOW?of:sf;t.setTexture2D(e||o,s)}function Q_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||af,s)}function ev(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||lf,s)}function tv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rf,s)}function nv(i){switch(i){case 5126:return O_;case 35664:return B_;case 35665:return z_;case 35666:return k_;case 35674:return V_;case 35675:return H_;case 35676:return G_;case 5124:case 35670:return W_;case 35667:case 35671:return j_;case 35668:case 35672:return $_;case 35669:case 35673:return X_;case 5125:return q_;case 36294:return Y_;case 36295:return K_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return Q_;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}function iv(i,e){i.uniform1fv(this.addr,e)}function sv(i,e){const t=Gs(e,this.size,2);i.uniform2fv(this.addr,t)}function ov(i,e){const t=Gs(e,this.size,3);i.uniform3fv(this.addr,t)}function rv(i,e){const t=Gs(e,this.size,4);i.uniform4fv(this.addr,t)}function av(i,e){const t=Gs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function lv(i,e){const t=Gs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cv(i,e){const t=Gs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dv(i,e){i.uniform1iv(this.addr,e)}function hv(i,e){i.uniform2iv(this.addr,e)}function uv(i,e){i.uniform3iv(this.addr,e)}function fv(i,e){i.uniform4iv(this.addr,e)}function pv(i,e){i.uniform1uiv(this.addr,e)}function mv(i,e){i.uniform2uiv(this.addr,e)}function gv(i,e){i.uniform3uiv(this.addr,e)}function xv(i,e){i.uniform4uiv(this.addr,e)}function _v(i,e,t){const n=this.cache,s=e.length,o=Kr(t,s);Rt(n,o)||(i.uniform1iv(this.addr,o),Pt(n,o));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||sf,o[r])}function vv(i,e,t){const n=this.cache,s=e.length,o=Kr(t,s);Rt(n,o)||(i.uniform1iv(this.addr,o),Pt(n,o));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||af,o[r])}function yv(i,e,t){const n=this.cache,s=e.length,o=Kr(t,s);Rt(n,o)||(i.uniform1iv(this.addr,o),Pt(n,o));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||lf,o[r])}function Sv(i,e,t){const n=this.cache,s=e.length,o=Kr(t,s);Rt(n,o)||(i.uniform1iv(this.addr,o),Pt(n,o));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||rf,o[r])}function Mv(i){switch(i){case 5126:return iv;case 35664:return sv;case 35665:return ov;case 35666:return rv;case 35674:return av;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return dv;case 35667:case 35671:return hv;case 35668:case 35672:return uv;case 35669:case 35673:return fv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Sv}}class bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nv(t.type)}}class Ev{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mv(t.type)}}class wv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(e,t[a.id],n)}}}const vl=/(\w+)(\])?(\[|\.)?/g;function qh(i,e){i.seq.push(e),i.map[e.id]=e}function Cv(i,e,t){const n=i.name,s=n.length;for(vl.lastIndex=0;;){const o=vl.exec(n),r=vl.lastIndex;let a=o[1];const c=o[2]==="]",h=o[3];if(c&&(a=a|0),h===void 0||h==="["&&r+2===s){qh(t,h===void 0?new bv(a,i,e):new Ev(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new wv(a),qh(t,f)),t=f}}}class Pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),r=e.getUniformLocation(t,o.name);Cv(o,r,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,r=t.length;o!==r;++o){const a=t[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function Yh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Tv=37297;let Av=0;function Rv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}function Pv(i){const e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(i);let n;switch(e===t?n="":e===Br&&t===Or?n="LinearDisplayP3ToLinearSRGB":e===Or&&t===Br&&(n="LinearSRGBToLinearDisplayP3"),i){case di:case qr:return[n,"LinearTransferOETF"];case bn:case $l:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Kh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Rv(i.getShaderSource(e),r)}else return s}function Lv(i,e){const t=Pv(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Iv(i,e){let t;switch(e){case Cm:t="Linear";break;case Tm:t="Reinhard";break;case Am:t="OptimizedCineon";break;case Rm:t="ACESFilmic";break;case Lm:t="AgX";break;case Im:t="Neutral";break;case Pm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function Uv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:i.getAttribLocation(e,r),locationSize:a}}return t}function mo(i){return i!==""}function Jh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(i){return i.replace(Fv,Bv)}const Ov=new Map;function Bv(i,e){let t=Ye[e];if(t===void 0){const n=Ov.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zl(t)}const zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(i){return i.replace(zv,kv)}function kv(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function eu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Iu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ds:case Us:e="ENVMAP_TYPE_CUBE";break;case Xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function Wv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Du:e="ENVMAP_BLENDING_MULTIPLY";break;case Em:e="ENVMAP_BLENDING_MIX";break;case wm:e="ENVMAP_BLENDING_ADD";break}return e}function jv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $v(i,e,t,n){const s=i.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const c=Vv(t),h=Hv(t),l=Gv(t),f=Wv(t),p=jv(t),g=Dv(t),_=Uv(o),v=s.createProgram();let m,u,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(mo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(mo).join(`
`),u.length>0&&(u+=`
`)):(m=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),u=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ri?Iv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Lv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mo).join(`
`)),r=zl(r),r=Jh(r,t),r=Zh(r,t),a=zl(a),a=Jh(a,t),a=Zh(a,t),r=Qh(r),a=Qh(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=y+m+r,w=y+u+a,U=Yh(s,s.VERTEX_SHADER,S),A=Yh(s,s.FRAGMENT_SHADER,w);s.attachShader(v,U),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(P){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(v).trim(),G=s.getShaderInfoLog(U).trim(),J=s.getShaderInfoLog(A).trim();let Z=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,U,A);else{const K=Kh(s,U,"vertex"),$=Kh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+K+`
`+$)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||J==="")&&(Y=!1);Y&&(P.diagnostics={runnable:Z,programLog:W,vertexShader:{log:G,prefix:m},fragmentShader:{log:J,prefix:u}})}s.deleteShader(U),s.deleteShader(A),F=new Pr(s,v),C=Nv(s,v)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,Tv)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Av++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=A,this}let Xv=0;class qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yv(e),t.set(e,n)),n}}class Yv{constructor(e){this.id=Xv++,this.code=e,this.usedTimes=0}}function Kv(i,e,t,n,s,o,r){const a=new qu,c=new qv,h=new Set,l=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(C){return h.add(C),C===0?"uv":`uv${C}`}function m(C,b,P,W,G){const J=W.fog,Z=G.geometry,Y=C.isMeshStandardMaterial?W.environment:null,K=(C.isMeshStandardMaterial?t:e).get(C.envMap||Y),$=K&&K.mapping===Xr?K.image.height:null,he=_[C.type];C.precision!==null&&(g=s.getMaxPrecision(C.precision),g!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",g,"instead."));const ge=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ve=ge!==void 0?ge.length:0;let Ge=0;Z.morphAttributes.position!==void 0&&(Ge=1),Z.morphAttributes.normal!==void 0&&(Ge=2),Z.morphAttributes.color!==void 0&&(Ge=3);let Je,X,ne,fe;if(he){const st=En[he];Je=st.vertexShader,X=st.fragmentShader}else Je=C.vertexShader,X=C.fragmentShader,c.update(C),ne=c.getVertexShaderID(C),fe=c.getFragmentShaderID(C);const le=i.getRenderTarget(),Oe=G.isInstancedMesh===!0,Be=G.isBatchedMesh===!0,Xe=!!C.map,L=!!C.matcap,je=!!K,$e=!!C.aoMap,tt=!!C.lightMap,Pe=!!C.bumpMap,Ne=!!C.normalMap,Ve=!!C.displacementMap,ze=!!C.emissiveMap,ct=!!C.metalnessMap,T=!!C.roughnessMap,M=C.anisotropy>0,V=C.clearcoat>0,Q=C.dispersion>0,se=C.iridescence>0,ie=C.sheen>0,Ce=C.transmission>0,pe=M&&!!C.anisotropyMap,ue=V&&!!C.clearcoatMap,He=V&&!!C.clearcoatNormalMap,re=V&&!!C.clearcoatRoughnessMap,Me=se&&!!C.iridescenceMap,We=se&&!!C.iridescenceThicknessMap,Ie=ie&&!!C.sheenColorMap,me=ie&&!!C.sheenRoughnessMap,Te=!!C.specularMap,Re=!!C.specularColorMap,qe=!!C.specularIntensityMap,D=Ce&&!!C.transmissionMap,oe=Ce&&!!C.thicknessMap,j=!!C.gradientMap,q=!!C.alphaMap,ae=C.alphaTest>0,De=!!C.alphaHash,Qe=!!C.extensions;let ft=ri;C.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ft=i.toneMapping);const vt={shaderID:he,shaderType:C.type,shaderName:C.name,vertexShader:Je,fragmentShader:X,defines:C.defines,customVertexShaderID:ne,customFragmentShaderID:fe,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:g,batching:Be,batchingColor:Be&&G._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&G.instanceColor!==null,instancingMorph:Oe&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:di,alphaToCoverage:!!C.alphaToCoverage,map:Xe,matcap:L,envMap:je,envMapMode:je&&K.mapping,envMapCubeUVHeight:$,aoMap:$e,lightMap:tt,bumpMap:Pe,normalMap:Ne,displacementMap:p&&Ve,emissiveMap:ze,normalMapObjectSpace:Ne&&C.normalMapType===jm,normalMapTangentSpace:Ne&&C.normalMapType===Hu,metalnessMap:ct,roughnessMap:T,anisotropy:M,anisotropyMap:pe,clearcoat:V,clearcoatMap:ue,clearcoatNormalMap:He,clearcoatRoughnessMap:re,dispersion:Q,iridescence:se,iridescenceMap:Me,iridescenceThicknessMap:We,sheen:ie,sheenColorMap:Ie,sheenRoughnessMap:me,specularMap:Te,specularColorMap:Re,specularIntensityMap:qe,transmission:Ce,transmissionMap:D,thicknessMap:oe,gradientMap:j,opaque:C.transparent===!1&&C.blending===Ni&&C.alphaToCoverage===!1,alphaMap:q,alphaTest:ae,alphaHash:De,combine:C.combine,mapUv:Xe&&v(C.map.channel),aoMapUv:$e&&v(C.aoMap.channel),lightMapUv:tt&&v(C.lightMap.channel),bumpMapUv:Pe&&v(C.bumpMap.channel),normalMapUv:Ne&&v(C.normalMap.channel),displacementMapUv:Ve&&v(C.displacementMap.channel),emissiveMapUv:ze&&v(C.emissiveMap.channel),metalnessMapUv:ct&&v(C.metalnessMap.channel),roughnessMapUv:T&&v(C.roughnessMap.channel),anisotropyMapUv:pe&&v(C.anisotropyMap.channel),clearcoatMapUv:ue&&v(C.clearcoatMap.channel),clearcoatNormalMapUv:He&&v(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(C.iridescenceMap.channel),iridescenceThicknessMapUv:We&&v(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(C.sheenColorMap.channel),sheenRoughnessMapUv:me&&v(C.sheenRoughnessMap.channel),specularMapUv:Te&&v(C.specularMap.channel),specularColorMapUv:Re&&v(C.specularColorMap.channel),specularIntensityMapUv:qe&&v(C.specularIntensityMap.channel),transmissionMapUv:D&&v(C.transmissionMap.channel),thicknessMapUv:oe&&v(C.thicknessMap.channel),alphaMapUv:q&&v(C.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ne||M),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Z.attributes.uv&&(Xe||q),fog:!!J,useFog:C.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:G.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ge,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:Xe&&C.map.isVideoTexture===!0&&lt.getTransfer(C.map.colorSpace)===gt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===pn,flipSided:C.side===qt,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Qe&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Qe&&C.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return vt.vertexUv1s=h.has(1),vt.vertexUv2s=h.has(2),vt.vertexUv3s=h.has(3),h.clear(),vt}function u(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const P in C.defines)b.push(P),b.push(C.defines[P]);return C.isRawShaderMaterial===!1&&(y(b,C),S(b,C),b.push(i.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function y(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function S(C,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),C.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.doubleSided&&a.enable(10),b.flipSided&&a.enable(11),b.useDepthPacking&&a.enable(12),b.dithering&&a.enable(13),b.transmission&&a.enable(14),b.sheen&&a.enable(15),b.opaque&&a.enable(16),b.pointsUvs&&a.enable(17),b.decodeVideoTexture&&a.enable(18),b.alphaToCoverage&&a.enable(19),C.push(a.mask)}function w(C){const b=_[C.type];let P;if(b){const W=En[b];P=Yl.clone(W.uniforms)}else P=C.uniforms;return P}function U(C,b){let P;for(let W=0,G=l.length;W<G;W++){const J=l[W];if(J.cacheKey===b){P=J,++P.usedTimes;break}}return P===void 0&&(P=new $v(i,b,C,o),l.push(P)),P}function A(C){if(--C.usedTimes===0){const b=l.indexOf(C);l[b]=l[l.length-1],l.pop(),C.destroy()}}function R(C){c.remove(C)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:w,acquireProgram:U,releaseProgram:A,releaseShaderCache:R,programs:l,dispose:F}}function Jv(){let i=new WeakMap;function e(o){let r=i.get(o);return r===void 0&&(r={},i.set(o,r)),r}function t(o){i.delete(o)}function n(o,r,a){i.get(o)[r]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Zv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nu(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function r(f,p,g,_,v,m){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:g,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},i[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=g,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=v,u.group=m),e++,u}function a(f,p,g,_,v,m){const u=r(f,p,g,_,v,m);g.transmission>0?n.push(u):g.transparent===!0?s.push(u):t.push(u)}function c(f,p,g,_,v,m){const u=r(f,p,g,_,v,m);g.transmission>0?n.unshift(u):g.transparent===!0?s.unshift(u):t.unshift(u)}function h(f,p){t.length>1&&t.sort(f||Zv),n.length>1&&n.sort(p||tu),s.length>1&&s.sort(p||tu)}function l(){for(let f=e,p=i.length;f<p;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:l,sort:h}}function Qv(){let i=new WeakMap;function e(n,s){const o=i.get(n);let r;return o===void 0?(r=new nu,i.set(n,[r])):s>=o.length?(r=new nu,o.push(r)):r=o[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function ey(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new it};break;case"SpotLight":t={position:new I,direction:new I,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function ty(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ny=0;function iy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sy(i){const e=new ey,t=ty(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new I);const s=new I,o=new ut,r=new ut;function a(h){let l=0,f=0,p=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let g=0,_=0,v=0,m=0,u=0,y=0,S=0,w=0,U=0,A=0,R=0;h.sort(iy);for(let C=0,b=h.length;C<b;C++){const P=h[C],W=P.color,G=P.intensity,J=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)l+=W.r*G,f+=W.g*G,p+=W.b*G;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],G);R++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,$=t.get(P);$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,n.directionalShadow[g]=$,n.directionalShadowMap[g]=Z,n.directionalShadowMatrix[g]=P.shadow.matrix,y++}n.directional[g]=Y,g++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(W).multiplyScalar(G),Y.distance=J,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[v]=Y;const K=P.shadow;if(P.map&&(n.spotLightMap[U]=P.map,U++,K.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[v]=K.matrix,P.castShadow){const $=t.get(P);$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=Z,w++}v++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(W).multiplyScalar(G),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=Y,m++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const K=P.shadow,$=t.get(P);$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,$.shadowCameraNear=K.camera.near,$.shadowCameraFar=K.camera.far,n.pointShadow[_]=$,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=P.shadow.matrix,S++}n.point[_]=Y,_++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(G),Y.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[u]=Y,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=f,n.ambient[2]=p;const F=n.hash;(F.directionalLength!==g||F.pointLength!==_||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==u||F.numDirectionalShadows!==y||F.numPointShadows!==S||F.numSpotShadows!==w||F.numSpotMaps!==U||F.numLightProbes!==R)&&(n.directional.length=g,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=w+U-A,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,F.directionalLength=g,F.pointLength=_,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=u,F.numDirectionalShadows=y,F.numPointShadows=S,F.numSpotShadows=w,F.numSpotMaps=U,F.numLightProbes=R,n.version=ny++)}function c(h,l){let f=0,p=0,g=0,_=0,v=0;const m=l.matrixWorldInverse;for(let u=0,y=h.length;u<y;u++){const S=h[u];if(S.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(S.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const w=n.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),r.identity(),o.copy(S.matrixWorld),o.premultiply(m),r.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),_++}else if(S.isPointLight){const w=n.point[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function iu(i){const e=new sy(i),t=[],n=[];function s(l){h.camera=l,t.length=0,n.length=0}function o(l){t.push(l)}function r(l){n.push(l)}function a(){e.setup(t)}function c(l){e.setupView(t,l)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function oy(i){let e=new WeakMap;function t(s,o=0){const r=e.get(s);let a;return r===void 0?(a=new iu(i),e.set(s,[a])):o>=r.length?(a=new iu(i),r.push(a)):a=r[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class ry extends ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ay extends ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dy(i,e,t){let n=new Kl;const s=new ke,o=new ke,r=new It,a=new ry({depthPacking:Wm}),c=new ay,h={},l=t.maxTextureSize,f={[li]:qt,[qt]:li,[pn]:pn},p=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:ly,fragmentShader:cy}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new $t;_.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Tt(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iu;let u=this.type;this.render=function(A,R,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const C=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),W=i.state;W.setBlending(jn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const G=u!==zn&&this.type===zn,J=u===zn&&this.type!==zn;for(let Z=0,Y=A.length;Z<Y;Z++){const K=A[Z],$=K.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const he=$.getFrameExtents();if(s.multiply(he),o.copy($.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(o.x=Math.floor(l/he.x),s.x=o.x*he.x,$.mapSize.x=o.x),s.y>l&&(o.y=Math.floor(l/he.y),s.y=o.y*he.y,$.mapSize.y=o.y)),$.map===null||G===!0||J===!0){const ve=this.type!==zn?{minFilter:Vt,magFilter:Vt}:{};$.map!==null&&$.map.dispose(),$.map=new vn(s.x,s.y,ve),$.map.texture.name=K.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const ge=$.getViewportCount();for(let ve=0;ve<ge;ve++){const Ge=$.getViewport(ve);r.set(o.x*Ge.x,o.y*Ge.y,o.x*Ge.z,o.y*Ge.w),W.viewport(r),$.updateMatrices(K,ve),n=$.getFrustum(),w(R,F,$.camera,K,this.type)}$.isPointLightShadow!==!0&&this.type===zn&&y($,F),$.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(C,b,P)};function y(A,R){const F=e.update(v);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new vn(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,F,p,v,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,F,g,v,null)}function S(A,R,F,C){let b=null;const P=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)b=P;else if(b=F.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=b.uuid,G=R.uuid;let J=h[W];J===void 0&&(J={},h[W]=J);let Z=J[G];Z===void 0&&(Z=b.clone(),J[G]=Z,R.addEventListener("dispose",U)),b=Z}if(b.visible=R.visible,b.wireframe=R.wireframe,C===zn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:f[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const W=i.properties.get(b);W.light=F}return b}function w(A,R,F,C,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===zn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const G=e.update(A),J=A.material;if(Array.isArray(J)){const Z=G.groups;for(let Y=0,K=Z.length;Y<K;Y++){const $=Z[Y],he=J[$.materialIndex];if(he&&he.visible){const ge=S(A,he,C,b);A.onBeforeShadow(i,A,R,F,G,ge,$),i.renderBufferDirect(F,null,G,ge,A,$),A.onAfterShadow(i,A,R,F,G,ge,$)}}}else if(J.visible){const Z=S(A,J,C,b);A.onBeforeShadow(i,A,R,F,G,Z,null),i.renderBufferDirect(F,null,G,Z,A,null),A.onAfterShadow(i,A,R,F,G,Z,null)}}const W=A.children;for(let G=0,J=W.length;G<J;G++)w(W[G],R,F,C,b)}function U(A){A.target.removeEventListener("dispose",U);for(const F in h){const C=h[F],b=A.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}function hy(i){function e(){let D=!1;const oe=new It;let j=null;const q=new It(0,0,0,0);return{setMask:function(ae){j!==ae&&!D&&(i.colorMask(ae,ae,ae,ae),j=ae)},setLocked:function(ae){D=ae},setClear:function(ae,De,Qe,ft,vt){vt===!0&&(ae*=ft,De*=ft,Qe*=ft),oe.set(ae,De,Qe,ft),q.equals(oe)===!1&&(i.clearColor(ae,De,Qe,ft),q.copy(oe))},reset:function(){D=!1,j=null,q.set(-1,0,0,0)}}}function t(){let D=!1,oe=null,j=null,q=null;return{setTest:function(ae){ae?fe(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(ae){oe!==ae&&!D&&(i.depthMask(ae),oe=ae)},setFunc:function(ae){if(j!==ae){switch(ae){case xm:i.depthFunc(i.NEVER);break;case _m:i.depthFunc(i.ALWAYS);break;case vm:i.depthFunc(i.LESS);break;case Ur:i.depthFunc(i.LEQUAL);break;case ym:i.depthFunc(i.EQUAL);break;case Sm:i.depthFunc(i.GEQUAL);break;case Mm:i.depthFunc(i.GREATER);break;case bm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=ae}},setLocked:function(ae){D=ae},setClear:function(ae){q!==ae&&(i.clearDepth(ae),q=ae)},reset:function(){D=!1,oe=null,j=null,q=null}}}function n(){let D=!1,oe=null,j=null,q=null,ae=null,De=null,Qe=null,ft=null,vt=null;return{setTest:function(st){D||(st?fe(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(st){oe!==st&&!D&&(i.stencilMask(st),oe=st)},setFunc:function(st,Bt,Dt){(j!==st||q!==Bt||ae!==Dt)&&(i.stencilFunc(st,Bt,Dt),j=st,q=Bt,ae=Dt)},setOp:function(st,Bt,Dt){(De!==st||Qe!==Bt||ft!==Dt)&&(i.stencilOp(st,Bt,Dt),De=st,Qe=Bt,ft=Dt)},setLocked:function(st){D=st},setClear:function(st){vt!==st&&(i.clearStencil(st),vt=st)},reset:function(){D=!1,oe=null,j=null,q=null,ae=null,De=null,Qe=null,ft=null,vt=null}}}const s=new e,o=new t,r=new n,a=new WeakMap,c=new WeakMap;let h={},l={},f=new WeakMap,p=[],g=null,_=!1,v=null,m=null,u=null,y=null,S=null,w=null,U=null,A=new it(0,0,0),R=0,F=!1,C=null,b=null,P=null,W=null,G=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,Y=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=Y>=2);let $=null,he={};const ge=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Ge=new It().fromArray(ge),Je=new It().fromArray(ve);function X(D,oe,j,q){const ae=new Uint8Array(4),De=i.createTexture();i.bindTexture(D,De),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<j;Qe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,q,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(oe+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return De}const ne={};ne[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),fe(i.DEPTH_TEST),o.setFunc(Ur),Pe(!1),Ne(Bd),fe(i.CULL_FACE),$e(jn);function fe(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function le(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Oe(D,oe){return l[D]!==oe?(i.bindFramebuffer(D,oe),l[D]=oe,D===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=oe),D===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Be(D,oe){let j=p,q=!1;if(D){j=f.get(oe),j===void 0&&(j=[],f.set(oe,j));const ae=D.textures;if(j.length!==ae.length||j[0]!==i.COLOR_ATTACHMENT0){for(let De=0,Qe=ae.length;De<Qe;De++)j[De]=i.COLOR_ATTACHMENT0+De;j.length=ae.length,q=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,q=!0);q&&i.drawBuffers(j)}function Xe(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const L={[Ai]:i.FUNC_ADD,[em]:i.FUNC_SUBTRACT,[tm]:i.FUNC_REVERSE_SUBTRACT};L[nm]=i.MIN,L[im]=i.MAX;const je={[sm]:i.ZERO,[om]:i.ONE,[rm]:i.SRC_COLOR,[Il]:i.SRC_ALPHA,[um]:i.SRC_ALPHA_SATURATE,[dm]:i.DST_COLOR,[lm]:i.DST_ALPHA,[am]:i.ONE_MINUS_SRC_COLOR,[Dl]:i.ONE_MINUS_SRC_ALPHA,[hm]:i.ONE_MINUS_DST_COLOR,[cm]:i.ONE_MINUS_DST_ALPHA,[fm]:i.CONSTANT_COLOR,[pm]:i.ONE_MINUS_CONSTANT_COLOR,[mm]:i.CONSTANT_ALPHA,[gm]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(D,oe,j,q,ae,De,Qe,ft,vt,st){if(D===jn){_===!0&&(le(i.BLEND),_=!1);return}if(_===!1&&(fe(i.BLEND),_=!0),D!==Qp){if(D!==v||st!==F){if((m!==Ai||S!==Ai)&&(i.blendEquation(i.FUNC_ADD),m=Ai,S=Ai),st)switch(D){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zd:i.blendFunc(i.ONE,i.ONE);break;case kd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case kd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}u=null,y=null,w=null,U=null,A.set(0,0,0),R=0,v=D,F=st}return}ae=ae||oe,De=De||j,Qe=Qe||q,(oe!==m||ae!==S)&&(i.blendEquationSeparate(L[oe],L[ae]),m=oe,S=ae),(j!==u||q!==y||De!==w||Qe!==U)&&(i.blendFuncSeparate(je[j],je[q],je[De],je[Qe]),u=j,y=q,w=De,U=Qe),(ft.equals(A)===!1||vt!==R)&&(i.blendColor(ft.r,ft.g,ft.b,vt),A.copy(ft),R=vt),v=D,F=!1}function tt(D,oe){D.side===pn?le(i.CULL_FACE):fe(i.CULL_FACE);let j=D.side===qt;oe&&(j=!j),Pe(j),D.blending===Ni&&D.transparent===!1?$e(jn):$e(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const q=D.stencilWrite;r.setTest(q),q&&(r.setMask(D.stencilWriteMask),r.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),r.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ze(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(D){C!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),C=D)}function Ne(D){D!==Kp?(fe(i.CULL_FACE),D!==b&&(D===Bd?i.cullFace(i.BACK):D===Jp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),b=D}function Ve(D){D!==P&&(Z&&i.lineWidth(D),P=D)}function ze(D,oe,j){D?(fe(i.POLYGON_OFFSET_FILL),(W!==oe||G!==j)&&(i.polygonOffset(oe,j),W=oe,G=j)):le(i.POLYGON_OFFSET_FILL)}function ct(D){D?fe(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+J-1),$!==D&&(i.activeTexture(D),$=D)}function M(D,oe,j){j===void 0&&($===null?j=i.TEXTURE0+J-1:j=$);let q=he[j];q===void 0&&(q={type:void 0,texture:void 0},he[j]=q),(q.type!==D||q.texture!==oe)&&($!==j&&(i.activeTexture(j),$=j),i.bindTexture(D,oe||ne[D]),q.type=D,q.texture=oe)}function V(){const D=he[$];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(D){Ge.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ge.copy(D))}function me(D){Je.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Je.copy(D))}function Te(D,oe){let j=c.get(oe);j===void 0&&(j=new WeakMap,c.set(oe,j));let q=j.get(D);q===void 0&&(q=i.getUniformBlockIndex(oe,D.name),j.set(D,q))}function Re(D,oe){const q=c.get(oe).get(D);a.get(oe)!==q&&(i.uniformBlockBinding(oe,q,D.__bindingPointIndex),a.set(oe,q))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,he={},l={},f=new WeakMap,p=[],g=null,_=!1,v=null,m=null,u=null,y=null,S=null,w=null,U=null,A=new it(0,0,0),R=0,F=!1,C=null,b=null,P=null,W=null,G=null,Ge.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:fe,disable:le,bindFramebuffer:Oe,drawBuffers:Be,useProgram:Xe,setBlending:$e,setMaterial:tt,setFlipSided:Pe,setCullFace:Ne,setLineWidth:Ve,setPolygonOffset:ze,setScissorTest:ct,activeTexture:T,bindTexture:M,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:se,texImage2D:Me,texImage3D:We,updateUBOMapping:Te,uniformBlockBinding:Re,texStorage2D:He,texStorage3D:re,texSubImage2D:ie,texSubImage3D:Ce,compressedTexSubImage2D:pe,compressedTexSubImage3D:ue,scissor:Ie,viewport:me,reset:qe}}function uy(i,e,t,n,s,o,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ke,l=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,M){return g?new OffscreenCanvas(T,M):Eo("canvas")}function v(T,M,V){let Q=1;const se=ct(T);if((se.width>V||se.height>V)&&(Q=V/Math.max(se.width,se.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ie=Math.floor(Q*se.width),Ce=Math.floor(Q*se.height);f===void 0&&(f=_(ie,Ce));const pe=M?_(ie,Ce):f;return pe.width=ie,pe.height=Ce,pe.getContext("2d").drawImage(T,0,0,ie,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ie+"x"+Ce+")."),pe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==Vt&&T.minFilter!==mn}function u(T){i.generateMipmap(T)}function y(T,M,V,Q,se=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ie=M;if(M===i.RED&&(V===i.FLOAT&&(ie=i.R32F),V===i.HALF_FLOAT&&(ie=i.R16F),V===i.UNSIGNED_BYTE&&(ie=i.R8)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(ie=i.R8UI),V===i.UNSIGNED_SHORT&&(ie=i.R16UI),V===i.UNSIGNED_INT&&(ie=i.R32UI),V===i.BYTE&&(ie=i.R8I),V===i.SHORT&&(ie=i.R16I),V===i.INT&&(ie=i.R32I)),M===i.RG&&(V===i.FLOAT&&(ie=i.RG32F),V===i.HALF_FLOAT&&(ie=i.RG16F),V===i.UNSIGNED_BYTE&&(ie=i.RG8)),M===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(ie=i.RG8UI),V===i.UNSIGNED_SHORT&&(ie=i.RG16UI),V===i.UNSIGNED_INT&&(ie=i.RG32UI),V===i.BYTE&&(ie=i.RG8I),V===i.SHORT&&(ie=i.RG16I),V===i.INT&&(ie=i.RG32I)),M===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),M===i.RGBA){const Ce=se?Fr:lt.getTransfer(Q);V===i.FLOAT&&(ie=i.RGBA32F),V===i.HALF_FLOAT&&(ie=i.RGBA16F),V===i.UNSIGNED_BYTE&&(ie=Ce===gt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function S(T,M){let V;return T?M===null||M===Ns||M===Fs?V=i.DEPTH24_STENCIL8:M===Gn?V=i.DEPTH32F_STENCIL8:M===Nr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ns||M===Fs?V=i.DEPTH_COMPONENT24:M===Gn?V=i.DEPTH_COMPONENT32F:M===Nr&&(V=i.DEPTH_COMPONENT16),V}function w(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Vt&&T.minFilter!==mn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function U(T){const M=T.target;M.removeEventListener("dispose",U),R(M),M.isVideoTexture&&l.delete(M)}function A(T){const M=T.target;M.removeEventListener("dispose",A),C(M)}function R(T){const M=n.get(T);if(M.__webglInit===void 0)return;const V=T.source,Q=p.get(V);if(Q){const se=Q[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&F(T),Object.keys(Q).length===0&&p.delete(V)}n.remove(T)}function F(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const V=T.source,Q=p.get(V);delete Q[M.__cacheKey],r.memory.textures--}function C(T){const M=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let se=0;se<M.__webglFramebuffer[Q].length;se++)i.deleteFramebuffer(M.__webglFramebuffer[Q][se]);else i.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=T.textures;for(let Q=0,se=V.length;Q<se;Q++){const ie=n.get(V[Q]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),r.memory.textures--),n.remove(V[Q])}n.remove(T)}let b=0;function P(){b=0}function W(){const T=b;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),b+=1,T}function G(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function J(T,M){const V=n.get(T);if(T.isVideoTexture&&Ve(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(V,T,M);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function Z(T,M){const V=n.get(T);if(T.version>0&&V.__version!==T.version){Je(V,T,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function Y(T,M){const V=n.get(T);if(T.version>0&&V.__version!==T.version){Je(V,T,M);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function K(T,M){const V=n.get(T);if(T.version>0&&V.__version!==T.version){X(V,T,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}const $={[Fl]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[Ol]:i.MIRRORED_REPEAT},he={[Vt]:i.NEAREST,[Dm]:i.NEAREST_MIPMAP_NEAREST,[qo]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Wa]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},ge={[$m]:i.NEVER,[Zm]:i.ALWAYS,[Xm]:i.LESS,[Gu]:i.LEQUAL,[qm]:i.EQUAL,[Jm]:i.GEQUAL,[Ym]:i.GREATER,[Km]:i.NOTEQUAL};function ve(T,M){if(M.type===Gn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===mn||M.magFilter===Wa||M.magFilter===qo||M.magFilter===Di||M.minFilter===mn||M.minFilter===Wa||M.minFilter===qo||M.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,$[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,$[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,$[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,he[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,he[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ge[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Vt||M.minFilter!==qo&&M.minFilter!==Di||M.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ge(T,M){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",U));const Q=M.source;let se=p.get(Q);se===void 0&&(se={},p.set(Q,se));const ie=G(M);if(ie!==T.__cacheKey){se[ie]===void 0&&(se[ie]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,V=!0),se[ie].usedTimes++;const Ce=se[T.__cacheKey];Ce!==void 0&&(se[T.__cacheKey].usedTimes--,Ce.usedTimes===0&&F(M)),T.__cacheKey=ie,T.__webglTexture=se[ie].texture}return V}function Je(T,M,V){let Q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=i.TEXTURE_3D);const se=Ge(T,M),ie=M.source;t.bindTexture(Q,T.__webglTexture,i.TEXTURE0+V);const Ce=n.get(ie);if(ie.version!==Ce.__version||se===!0){t.activeTexture(i.TEXTURE0+V);const pe=lt.getPrimaries(lt.workingColorSpace),ue=M.colorSpace===ti?null:lt.getPrimaries(M.colorSpace),He=M.colorSpace===ti||pe===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let re=v(M.image,!1,s.maxTextureSize);re=ze(M,re);const Me=o.convert(M.format,M.colorSpace),We=o.convert(M.type);let Ie=y(M.internalFormat,Me,We,M.colorSpace,M.isVideoTexture);ve(Q,M);let me;const Te=M.mipmaps,Re=M.isVideoTexture!==!0,qe=Ce.__version===void 0||se===!0,D=ie.dataReady,oe=w(M,re);if(M.isDepthTexture)Ie=S(M.format===Os,M.type),qe&&(Re?t.texStorage2D(i.TEXTURE_2D,1,Ie,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Ie,re.width,re.height,0,Me,We,null));else if(M.isDataTexture)if(Te.length>0){Re&&qe&&t.texStorage2D(i.TEXTURE_2D,oe,Ie,Te[0].width,Te[0].height);for(let j=0,q=Te.length;j<q;j++)me=Te[j],Re?D&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,me.width,me.height,Me,We,me.data):t.texImage2D(i.TEXTURE_2D,j,Ie,me.width,me.height,0,Me,We,me.data);M.generateMipmaps=!1}else Re?(qe&&t.texStorage2D(i.TEXTURE_2D,oe,Ie,re.width,re.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,Me,We,re.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,re.width,re.height,0,Me,We,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Re&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Ie,Te[0].width,Te[0].height,re.depth);for(let j=0,q=Te.length;j<q;j++)if(me=Te[j],M.format!==Tn)if(Me!==null)if(Re){if(D)if(M.layerUpdates.size>0){for(const ae of M.layerUpdates){const De=me.width*me.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ae,me.width,me.height,1,Me,me.data.slice(De*ae,De*(ae+1)),0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,re.depth,Me,me.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Ie,me.width,me.height,re.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,re.depth,Me,We,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Ie,me.width,me.height,re.depth,0,Me,We,me.data)}else{Re&&qe&&t.texStorage2D(i.TEXTURE_2D,oe,Ie,Te[0].width,Te[0].height);for(let j=0,q=Te.length;j<q;j++)me=Te[j],M.format!==Tn?Me!==null?Re?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,me.width,me.height,Me,me.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Ie,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?D&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,me.width,me.height,Me,We,me.data):t.texImage2D(i.TEXTURE_2D,j,Ie,me.width,me.height,0,Me,We,me.data)}else if(M.isDataArrayTexture)if(Re){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Ie,re.width,re.height,re.depth),D)if(M.layerUpdates.size>0){let j;switch(We){case i.UNSIGNED_BYTE:switch(Me){case i.ALPHA:j=1;break;case i.LUMINANCE:j=1;break;case i.LUMINANCE_ALPHA:j=2;break;case i.RGB:j=3;break;case i.RGBA:j=4;break;default:throw new Error(`Unknown texel size for format ${Me}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:j=1;break;default:throw new Error(`Unknown texel size for type ${We}.`)}const q=re.width*re.height*j;for(const ae of M.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,re.width,re.height,1,Me,We,re.data.slice(q*ae,q*(ae+1)));M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Me,We,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,re.width,re.height,re.depth,0,Me,We,re.data);else if(M.isData3DTexture)Re?(qe&&t.texStorage3D(i.TEXTURE_3D,oe,Ie,re.width,re.height,re.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Me,We,re.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,re.width,re.height,re.depth,0,Me,We,re.data);else if(M.isFramebufferTexture){if(qe)if(Re)t.texStorage2D(i.TEXTURE_2D,oe,Ie,re.width,re.height);else{let j=re.width,q=re.height;for(let ae=0;ae<oe;ae++)t.texImage2D(i.TEXTURE_2D,ae,Ie,j,q,0,Me,We,null),j>>=1,q>>=1}}else if(Te.length>0){if(Re&&qe){const j=ct(Te[0]);t.texStorage2D(i.TEXTURE_2D,oe,Ie,j.width,j.height)}for(let j=0,q=Te.length;j<q;j++)me=Te[j],Re?D&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Me,We,me):t.texImage2D(i.TEXTURE_2D,j,Ie,Me,We,me);M.generateMipmaps=!1}else if(Re){if(qe){const j=ct(re);t.texStorage2D(i.TEXTURE_2D,oe,Ie,j.width,j.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,We,re)}else t.texImage2D(i.TEXTURE_2D,0,Ie,Me,We,re);m(M)&&u(Q),Ce.__version=ie.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function X(T,M,V){if(M.image.length!==6)return;const Q=Ge(T,M),se=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+V);const ie=n.get(se);if(se.version!==ie.__version||Q===!0){t.activeTexture(i.TEXTURE0+V);const Ce=lt.getPrimaries(lt.workingColorSpace),pe=M.colorSpace===ti?null:lt.getPrimaries(M.colorSpace),ue=M.colorSpace===ti||Ce===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const He=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let q=0;q<6;q++)!He&&!re?Me[q]=v(M.image[q],!0,s.maxCubemapSize):Me[q]=re?M.image[q].image:M.image[q],Me[q]=ze(M,Me[q]);const We=Me[0],Ie=o.convert(M.format,M.colorSpace),me=o.convert(M.type),Te=y(M.internalFormat,Ie,me,M.colorSpace),Re=M.isVideoTexture!==!0,qe=ie.__version===void 0||Q===!0,D=se.dataReady;let oe=w(M,We);ve(i.TEXTURE_CUBE_MAP,M);let j;if(He){Re&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Te,We.width,We.height);for(let q=0;q<6;q++){j=Me[q].mipmaps;for(let ae=0;ae<j.length;ae++){const De=j[ae];M.format!==Tn?Ie!==null?Re?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,0,0,De.width,De.height,Ie,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,Te,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,0,0,De.width,De.height,Ie,me,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,Te,De.width,De.height,0,Ie,me,De.data)}}}else{if(j=M.mipmaps,Re&&qe){j.length>0&&oe++;const q=ct(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Te,q.width,q.height)}for(let q=0;q<6;q++)if(re){Re?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Me[q].width,Me[q].height,Ie,me,Me[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Te,Me[q].width,Me[q].height,0,Ie,me,Me[q].data);for(let ae=0;ae<j.length;ae++){const Qe=j[ae].image[q].image;Re?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,0,0,Qe.width,Qe.height,Ie,me,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,Te,Qe.width,Qe.height,0,Ie,me,Qe.data)}}else{Re?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ie,me,Me[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Te,Ie,me,Me[q]);for(let ae=0;ae<j.length;ae++){const De=j[ae];Re?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,0,0,Ie,me,De.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,Te,Ie,me,De.image[q])}}}m(M)&&u(i.TEXTURE_CUBE_MAP),ie.__version=se.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ne(T,M,V,Q,se,ie){const Ce=o.convert(V.format,V.colorSpace),pe=o.convert(V.type),ue=y(V.internalFormat,Ce,pe,V.colorSpace);if(!n.get(M).__hasExternalTextures){const re=Math.max(1,M.width>>ie),Me=Math.max(1,M.height>>ie);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,ie,ue,re,Me,M.depth,0,Ce,pe,null):t.texImage2D(se,ie,ue,re,Me,0,Ce,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ne(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,se,n.get(V).__webglTexture,0,Pe(M)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,se,n.get(V).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(T,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){const Q=M.depthTexture,se=Q&&Q.isDepthTexture?Q.type:null,ie=S(M.stencilBuffer,se),Ce=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=Pe(M);Ne(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,ie,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ie,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ie,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,T)}else{const Q=M.textures;for(let se=0;se<Q.length;se++){const ie=Q[se],Ce=o.convert(ie.format,ie.colorSpace),pe=o.convert(ie.type),ue=y(ie.internalFormat,Ce,pe,ie.colorSpace),He=Pe(M);V&&Ne(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,ue,M.width,M.height):Ne(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,ue,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ue,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const Q=n.get(M.depthTexture).__webglTexture,se=Pe(M);if(M.depthTexture.format===ws)Ne(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Os)Ne(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Oe(T){const M=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");le(M.__webglFramebuffer,T)}else if(V){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=i.createRenderbuffer(),fe(M.__webglDepthbuffer[Q],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),fe(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(T,M,V){const Q=n.get(T);M!==void 0&&ne(Q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Oe(T)}function Xe(T){const M=T.texture,V=n.get(T),Q=n.get(M);T.addEventListener("dispose",A);const se=T.textures,ie=T.isWebGLCubeRenderTarget===!0,Ce=se.length>1;if(Ce||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=M.version,r.memory.textures++),ie){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[pe]=[];for(let ue=0;ue<M.mipmaps.length;ue++)V.__webglFramebuffer[pe][ue]=i.createFramebuffer()}else V.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)V.__webglFramebuffer[pe]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let pe=0,ue=se.length;pe<ue;pe++){const He=n.get(se[pe]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),r.memory.textures++)}if(T.samples>0&&Ne(T)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pe=0;pe<se.length;pe++){const ue=se[pe];V.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[pe]);const He=o.convert(ue.format,ue.colorSpace),re=o.convert(ue.type),Me=y(ue.internalFormat,He,re,ue.colorSpace,T.isXRRenderTarget===!0),We=Pe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Me,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,V.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ve(i.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)ne(V.__webglFramebuffer[pe][ue],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ue);else ne(V.__webglFramebuffer[pe],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(M)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let pe=0,ue=se.length;pe<ue;pe++){const He=se[pe],re=n.get(He);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),ve(i.TEXTURE_2D,He),ne(V.__webglFramebuffer,T,He,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),m(He)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Q.__webglTexture),ve(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)ne(V.__webglFramebuffer[ue],T,M,i.COLOR_ATTACHMENT0,pe,ue);else ne(V.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,pe,0);m(M)&&u(pe),t.unbindTexture()}T.depthBuffer&&Oe(T)}function L(T){const M=T.textures;for(let V=0,Q=M.length;V<Q;V++){const se=M[V];if(m(se)){const ie=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ce=n.get(se).__webglTexture;t.bindTexture(ie,Ce),u(ie),t.unbindTexture()}}}const je=[],$e=[];function tt(T){if(T.samples>0){if(Ne(T)===!1){const M=T.textures,V=T.width,Q=T.height;let se=i.COLOR_BUFFER_BIT;const ie=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(T),pe=M.length>1;if(pe)for(let ue=0;ue<M.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[ue]);const He=n.get(M[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,V,Q,0,0,V,Q,se,i.NEAREST),c===!0&&(je.length=0,$e.length=0,je.push(i.COLOR_ATTACHMENT0+ue),T.depthBuffer&&T.resolveDepthBuffer===!1&&(je.push(ie),$e.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let ue=0;ue<M.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[ue]);const He=n.get(M[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Pe(T){return Math.min(s.maxSamples,T.samples)}function Ne(T){const M=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ve(T){const M=r.render.frame;l.get(T)!==M&&(l.set(T,M),T.update())}function ze(T,M){const V=T.colorSpace,Q=T.format,se=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==di&&V!==ti&&(lt.getTransfer(V)===gt?(Q!==Tn||se!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=P,this.setTexture2D=J,this.setTexture2DArray=Z,this.setTexture3D=Y,this.setTextureCube=K,this.rebindTextures=Be,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Ne}function fy(i,e){function t(n,s=ti){let o;const r=lt.getTransfer(s);if(n===ci)return i.UNSIGNED_BYTE;if(n===Fu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ou)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Um)return i.BYTE;if(n===Nm)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===Nu)return i.INT;if(n===Ns)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Bi)return i.HALF_FLOAT;if(n===Om)return i.ALPHA;if(n===Bm)return i.RGB;if(n===Tn)return i.RGBA;if(n===zm)return i.LUMINANCE;if(n===km)return i.LUMINANCE_ALPHA;if(n===ws)return i.DEPTH_COMPONENT;if(n===Os)return i.DEPTH_STENCIL;if(n===Bu)return i.RED;if(n===zu)return i.RED_INTEGER;if(n===Vm)return i.RG;if(n===ku)return i.RG_INTEGER;if(n===Vu)return i.RGBA_INTEGER;if(n===ja||n===$a||n===Xa||n===qa)if(r===gt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ja)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ja)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hd||n===Gd||n===Wd||n===jd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Hd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$d||n===Xd||n===qd)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===$d||n===Xd)return r===gt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===qd)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yd||n===Kd||n===Jd||n===Zd||n===Qd||n===eh||n===th||n===nh||n===ih||n===sh||n===oh||n===rh||n===ah||n===lh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Yd)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kd)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jd)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zd)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qd)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eh)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===th)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nh)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ih)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sh)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oh)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rh)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ah)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lh)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ya||n===ch||n===dh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Ya)return r===gt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ch)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hm||n===hh||n===uh||n===fh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ya)return o.COMPRESSED_RED_RGTC1_EXT;if(n===hh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class py extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Es extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const my={type:"move"};class yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){r=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),u=this._getHandJoint(h,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const l=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],p=l.position.distanceTo(f.position),g=.02,_=.005;h.inputState.pinching&&p>g+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=g-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(my)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Es;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _y{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ot,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new rn({vertexShader:gy,fragmentShader:xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class vy extends ks{constructor(e,t){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,h=null,l=null,f=null,p=null,g=null,_=null;const v=new _y,m=t.getContextAttributes();let u=null,y=null;const S=[],w=[],U=new ke;let A=null;const R=new sn;R.layers.enable(1),R.viewport=new It;const F=new sn;F.layers.enable(2),F.viewport=new It;const C=[R,F],b=new py;b.layers.enable(1),b.layers.enable(2);let P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=S[X];return ne===void 0&&(ne=new yl,S[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=S[X];return ne===void 0&&(ne=new yl,S[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=S[X];return ne===void 0&&(ne=new yl,S[X]=ne),ne.getHandSpace()};function G(X){const ne=w.indexOf(X.inputSource);if(ne===-1)return;const fe=S[ne];fe!==void 0&&(fe.update(X.inputSource,X.frame,h||r),fe.dispatchEvent({type:X.type,data:X.inputSource}))}function J(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",Z);for(let X=0;X<S.length;X++){const ne=w[X];ne!==null&&(w[X]=null,S[X].disconnect(ne))}P=null,W=null,v.reset(),e.setRenderTarget(u),g=null,p=null,f=null,s=null,y=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",J),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new vn(g.framebufferWidth,g.framebufferHeight,{format:Tn,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,fe=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Os:ws,fe=m.stencil?Fs:Ns);const Oe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:o};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(Oe),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new vn(p.textureWidth,p.textureHeight,{format:Tn,type:ci,depthTexture:new nf(p.textureWidth,p.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),h=null,r=await s.requestReferenceSpace(a),Je.setContext(s),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function Z(X){for(let ne=0;ne<X.removed.length;ne++){const fe=X.removed[ne],le=w.indexOf(fe);le>=0&&(w[le]=null,S[le].disconnect(fe))}for(let ne=0;ne<X.added.length;ne++){const fe=X.added[ne];let le=w.indexOf(fe);if(le===-1){for(let Be=0;Be<S.length;Be++)if(Be>=w.length){w.push(fe),le=Be;break}else if(w[Be]===null){w[Be]=fe,le=Be;break}if(le===-1)break}const Oe=S[le];Oe&&Oe.connect(fe)}}const Y=new I,K=new I;function $(X,ne,fe){Y.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(fe.matrixWorld);const le=Y.distanceTo(K),Oe=ne.projectionMatrix.elements,Be=fe.projectionMatrix.elements,Xe=Oe[14]/(Oe[10]-1),L=Oe[14]/(Oe[10]+1),je=(Oe[9]+1)/Oe[5],$e=(Oe[9]-1)/Oe[5],tt=(Oe[8]-1)/Oe[0],Pe=(Be[8]+1)/Be[0],Ne=Xe*tt,Ve=Xe*Pe,ze=le/(-tt+Pe),ct=ze*-tt;ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ct),X.translateZ(ze),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const T=Xe+ze,M=L+ze,V=Ne-ct,Q=Ve+(le-ct),se=je*L/M*T,ie=$e*L/M*T;X.projectionMatrix.makePerspective(V,Q,se,ie,T,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function he(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;v.texture!==null&&(X.near=v.depthNear,X.far=v.depthFar),b.near=F.near=R.near=X.near,b.far=F.far=R.far=X.far,(P!==b.near||W!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,W=b.far,R.near=P,R.far=W,F.near=P,F.far=W,R.updateProjectionMatrix(),F.updateProjectionMatrix(),X.updateProjectionMatrix());const ne=X.parent,fe=b.cameras;he(b,ne);for(let le=0;le<fe.length;le++)he(fe[le],ne);fe.length===2?$(b,R,F):b.projectionMatrix.copy(R.projectionMatrix),ge(X,b,ne)};function ge(X,ne,fe){fe===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(fe.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Mo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(X){c=X,p!==null&&(p.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let ve=null;function Ge(X,ne){if(l=ne.getViewerPose(h||r),_=ne,l!==null){const fe=l.views;g!==null&&(e.setRenderTargetFramebuffer(y,g.framebuffer),e.setRenderTarget(y));let le=!1;fe.length!==b.cameras.length&&(b.cameras.length=0,le=!0);for(let Be=0;Be<fe.length;Be++){const Xe=fe[Be];let L=null;if(g!==null)L=g.getViewport(Xe);else{const $e=f.getViewSubImage(p,Xe);L=$e.viewport,Be===0&&(e.setRenderTargetTextures(y,$e.colorTexture,p.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(y))}let je=C[Be];je===void 0&&(je=new sn,je.layers.enable(Be),je.viewport=new It,C[Be]=je),je.matrix.fromArray(Xe.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Xe.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(L.x,L.y,L.width,L.height),Be===0&&(b.matrix.copy(je.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),le===!0&&b.cameras.push(je)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Be=f.getDepthInformation(fe[0]);Be&&Be.isValid&&Be.texture&&v.init(e,Be,s.renderState)}}for(let fe=0;fe<S.length;fe++){const le=w[fe],Oe=S[fe];le!==null&&Oe!==void 0&&Oe.update(le,ne,h||r)}ve&&ve(X,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),_=null}const Je=new tf;Je.setAnimationLoop(Ge),this.setAnimationLoop=function(X){ve=X},this.dispose=function(){}}}const bi=new An,yy=new ut;function Sy(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Zu(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,y,S,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(m,u):u.isMeshToonMaterial?(o(m,u),f(m,u)):u.isMeshPhongMaterial?(o(m,u),l(m,u)):u.isMeshStandardMaterial?(o(m,u),p(m,u),u.isMeshPhysicalMaterial&&g(m,u,w)):u.isMeshMatcapMaterial?(o(m,u),_(m,u)):u.isMeshDepthMaterial?o(m,u):u.isMeshDistanceMaterial?(o(m,u),v(m,u)):u.isMeshNormalMaterial?o(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,y,S):u.isSpriteMaterial?h(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===qt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===qt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const y=e.get(u),S=y.envMap,w=y.envMapRotation;S&&(m.envMap.value=S,bi.copy(w),bi.x*=-1,bi.y*=-1,bi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(yy.makeRotationFromEuler(bi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,y,S){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=S*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===qt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const y=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function My(i,e,t,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){const w=S.program;n.uniformBlockBinding(y,w)}function h(y,S){let w=s[y.id];w===void 0&&(_(y),w=l(y),s[y.id]=w,y.addEventListener("dispose",m));const U=S.program;n.updateUBOMapping(y,U);const A=e.render.frame;o[y.id]!==A&&(p(y),o[y.id]=A)}function l(y){const S=f();y.__bindingPointIndex=S;const w=i.createBuffer(),U=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,U,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function f(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const S=s[y.id],w=y.uniforms,U=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,R=w.length;A<R;A++){const F=Array.isArray(w[A])?w[A]:[w[A]];for(let C=0,b=F.length;C<b;C++){const P=F[C];if(g(P,A,C,U)===!0){const W=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let J=0;for(let Z=0;Z<G.length;Z++){const Y=G[Z],K=v(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,W+J,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,J),J+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(y,S,w,U){const A=y.value,R=S+"_"+w;if(U[R]===void 0)return typeof A=="number"||typeof A=="boolean"?U[R]=A:U[R]=A.clone(),!0;{const F=U[R];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return U[R]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function _(y){const S=y.uniforms;let w=0;const U=16;for(let R=0,F=S.length;R<F;R++){const C=Array.isArray(S[R])?S[R]:[S[R]];for(let b=0,P=C.length;b<P;b++){const W=C[b],G=Array.isArray(W.value)?W.value:[W.value];for(let J=0,Z=G.length;J<Z;J++){const Y=G[J],K=v(Y),$=w%U;$!==0&&U-$<K.boundary&&(w+=U-$),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=K.storage}}}const A=w%U;return A>0&&(w+=U-A),y.__size=w,y.__cache={},this}function v(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const w=r.indexOf(S.__bindingPointIndex);r.splice(w,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function u(){for(const y in s)i.deleteBuffer(s[y]);r=[],s={},o={}}return{bind:c,update:h,dispose:u}}class by{constructor(e={}){const{canvas:t=gg(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const u=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=ri,this.toneMappingExposure=1;const S=this;let w=!1,U=0,A=0,R=null,F=-1,C=null;const b=new It,P=new It;let W=null;const G=new it(0);let J=0,Z=t.width,Y=t.height,K=1,$=null,he=null;const ge=new It(0,0,Z,Y),ve=new It(0,0,Z,Y);let Ge=!1;const Je=new Kl;let X=!1,ne=!1;const fe=new ut,le=new I,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Xe(){return R===null?K:1}let L=n;function je(E,N){return t.getContext(E,N)}try{const E={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jl}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",q,!1),L===null){const N="webgl2";if(L=je(N,E),L===null)throw je(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $e,tt,Pe,Ne,Ve,ze,ct,T,M,V,Q,se,ie,Ce,pe,ue,He,re,Me,We,Ie,me,Te,Re;function qe(){$e=new L_(L),$e.init(),me=new fy(L,$e),tt=new w_(L,$e,e,me),Pe=new hy(L),Ne=new U_(L),Ve=new Jv,ze=new uy(L,$e,Pe,Ve,tt,me,Ne),ct=new T_(S),T=new P_(S),M=new Vg(L),Te=new b_(L,M),V=new I_(L,M,Ne,Te),Q=new F_(L,V,M,Ne),Me=new N_(L,tt,ze),ue=new C_(Ve),se=new Kv(S,ct,T,$e,tt,Te,ue),ie=new Sy(S,Ve),Ce=new Qv,pe=new oy($e),re=new M_(S,ct,T,Pe,Q,p,c),He=new dy(S,Q,tt),Re=new My(L,Ne,tt,Pe),We=new E_(L,$e,Ne),Ie=new D_(L,$e,Ne),Ne.programs=se.programs,S.capabilities=tt,S.extensions=$e,S.properties=Ve,S.renderLists=Ce,S.shadowMap=He,S.state=Pe,S.info=Ne}qe();const D=new vy(S,L);this.xr=D,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=$e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(Z,Y,!1))},this.getSize=function(E){return E.set(Z,Y)},this.setSize=function(E,N,B=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,Y=N,t.width=Math.floor(E*K),t.height=Math.floor(N*K),B===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(Z*K,Y*K).floor()},this.setDrawingBufferSize=function(E,N,B){Z=E,Y=N,K=B,t.width=Math.floor(E*B),t.height=Math.floor(N*B),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(ge)},this.setViewport=function(E,N,B,k){E.isVector4?ge.set(E.x,E.y,E.z,E.w):ge.set(E,N,B,k),Pe.viewport(b.copy(ge).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(ve)},this.setScissor=function(E,N,B,k){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,N,B,k),Pe.scissor(P.copy(ve).multiplyScalar(K).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(E){Pe.setScissorTest(Ge=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){he=E},this.getClearColor=function(E){return E.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(E=!0,N=!0,B=!0){let k=0;if(E){let O=!1;if(R!==null){const ce=R.texture.format;O=ce===Vu||ce===ku||ce===zu}if(O){const ce=R.texture.type,_e=ce===ci||ce===Ns||ce===Nr||ce===Fs||ce===Fu||ce===Ou,ye=re.getClearColor(),be=re.getClearAlpha(),Ue=ye.r,Fe=ye.g,Le=ye.b;_e?(g[0]=Ue,g[1]=Fe,g[2]=Le,g[3]=be,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ue,_[1]=Fe,_[2]=Le,_[3]=be,L.clearBufferiv(L.COLOR,0,_))}else k|=L.COLOR_BUFFER_BIT}N&&(k|=L.DEPTH_BUFFER_BIT),B&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",q,!1),Ce.dispose(),pe.dispose(),Ve.dispose(),ct.dispose(),T.dispose(),Q.dispose(),Te.dispose(),Re.dispose(),se.dispose(),D.dispose(),D.removeEventListener("sessionstart",Bt),D.removeEventListener("sessionend",Dt),Xt.stop()};function oe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=Ne.autoReset,N=He.enabled,B=He.autoUpdate,k=He.needsUpdate,O=He.type;qe(),Ne.autoReset=E,He.enabled=N,He.autoUpdate=B,He.needsUpdate=k,He.type=O}function q(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ae(E){const N=E.target;N.removeEventListener("dispose",ae),De(N)}function De(E){Qe(E),Ve.remove(E)}function Qe(E){const N=Ve.get(E).programs;N!==void 0&&(N.forEach(function(B){se.releaseProgram(B)}),E.isShaderMaterial&&se.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,B,k,O,ce){N===null&&(N=Oe);const _e=O.isMesh&&O.matrixWorld.determinant()<0,ye=Io(E,N,B,k,O);Pe.setMaterial(k,_e);let be=B.index,Ue=1;if(k.wireframe===!0){if(be=V.getWireframeAttribute(B),be===void 0)return;Ue=2}const Fe=B.drawRange,Le=B.attributes.position;let ot=Fe.start*Ue,pt=(Fe.start+Fe.count)*Ue;ce!==null&&(ot=Math.max(ot,ce.start*Ue),pt=Math.min(pt,(ce.start+ce.count)*Ue)),be!==null?(ot=Math.max(ot,0),pt=Math.min(pt,be.count)):Le!=null&&(ot=Math.max(ot,0),pt=Math.min(pt,Le.count));const dt=pt-ot;if(dt<0||dt===1/0)return;Te.setup(O,k,ye,B,be);let Ut,nt=We;if(be!==null&&(Ut=M.get(be),nt=Ie,nt.setIndex(Ut)),O.isMesh)k.wireframe===!0?(Pe.setLineWidth(k.wireframeLinewidth*Xe()),nt.setMode(L.LINES)):nt.setMode(L.TRIANGLES);else if(O.isLine){let Ae=k.linewidth;Ae===void 0&&(Ae=1),Pe.setLineWidth(Ae*Xe()),O.isLineSegments?nt.setMode(L.LINES):O.isLineLoop?nt.setMode(L.LINE_LOOP):nt.setMode(L.LINE_STRIP)}else O.isPoints?nt.setMode(L.POINTS):O.isSprite&&nt.setMode(L.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?nt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):nt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)nt.renderInstances(ot,dt,O.count);else if(B.isInstancedBufferGeometry){const Ae=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Nt=Math.min(B.instanceCount,Ae);nt.renderInstances(ot,dt,Nt)}else nt.render(ot,dt)};function ft(E,N,B){E.transparent===!0&&E.side===pn&&E.forceSinglePass===!1?(E.side=qt,E.needsUpdate=!0,Wi(E,N,B),E.side=li,E.needsUpdate=!0,Wi(E,N,B),E.side=pn):Wi(E,N,B)}this.compile=function(E,N,B=null){B===null&&(B=E),m=pe.get(B),m.init(N),y.push(m),B.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),E!==B&&E.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const k=new Set;return E.traverse(function(O){const ce=O.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){const ye=ce[_e];ft(ye,B,O),k.add(ye)}else ft(ce,B,O),k.add(ce)}),y.pop(),m=null,k},this.compileAsync=function(E,N,B=null){const k=this.compile(E,N,B);return new Promise(O=>{function ce(){if(k.forEach(function(_e){Ve.get(_e).currentProgram.isReady()&&k.delete(_e)}),k.size===0){O(E);return}setTimeout(ce,10)}$e.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let vt=null;function st(E){vt&&vt(E)}function Bt(){Xt.stop()}function Dt(){Xt.start()}const Xt=new tf;Xt.setAnimationLoop(st),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(E){vt=E,D.setAnimationLoop(E),E===null?Xt.stop():Xt.start()},D.addEventListener("sessionstart",Bt),D.addEventListener("sessionend",Dt),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(N),N=D.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,N,R),m=pe.get(E,y.length),m.init(N),y.push(m),fe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Je.setFromProjectionMatrix(fe),ne=this.localClippingEnabled,X=ue.init(this.clippingPlanes,ne),v=Ce.get(E,u.length),v.init(),u.push(v),D.enabled===!0&&D.isPresenting===!0){const ce=S.xr.getDepthSensingMesh();ce!==null&&Qt(ce,N,-1/0,S.sortObjects)}Qt(E,N,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort($,he),Be=D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1,Be&&re.addToRenderList(v,E),this.info.render.frame++,X===!0&&ue.beginShadows();const B=m.state.shadowsArray;He.render(B,E,N),X===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=v.opaque,O=v.transmissive;if(m.setupLights(),N.isArrayCamera){const ce=N.cameras;if(O.length>0)for(let _e=0,ye=ce.length;_e<ye;_e++){const be=ce[_e];fi(k,O,E,be)}Be&&re.render(E);for(let _e=0,ye=ce.length;_e<ye;_e++){const be=ce[_e];Ln(v,E,be,be.viewport)}}else O.length>0&&fi(k,O,E,N),Be&&re.render(E),Ln(v,E,N);R!==null&&(ze.updateMultisampleRenderTarget(R),ze.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(S,E,N),Te.resetDefaultState(),F=-1,C=null,y.pop(),y.length>0?(m=y[y.length-1],X===!0&&ue.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function Qt(E,N,B,k){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Je.intersectsSprite(E)){k&&le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);const _e=Q.update(E),ye=E.material;ye.visible&&v.push(E,_e,ye,B,le.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Je.intersectsObject(E))){const _e=Q.update(E),ye=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),le.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),le.copy(_e.boundingSphere.center)),le.applyMatrix4(E.matrixWorld).applyMatrix4(fe)),Array.isArray(ye)){const be=_e.groups;for(let Ue=0,Fe=be.length;Ue<Fe;Ue++){const Le=be[Ue],ot=ye[Le.materialIndex];ot&&ot.visible&&v.push(E,_e,ot,B,le.z,Le)}}else ye.visible&&v.push(E,_e,ye,B,le.z,null)}}const ce=E.children;for(let _e=0,ye=ce.length;_e<ye;_e++)Qt(ce[_e],N,B,k)}function Ln(E,N,B,k){const O=E.opaque,ce=E.transmissive,_e=E.transparent;m.setupLightsView(B),X===!0&&ue.setGlobalState(S.clippingPlanes,B),k&&Pe.viewport(b.copy(k)),O.length>0&&In(O,N,B),ce.length>0&&In(ce,N,B),_e.length>0&&In(_e,N,B),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function fi(E,N,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new vn(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Bi:ci,minFilter:Di,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const ce=m.state.transmissionRenderTarget[k.id],_e=k.viewport||b;ce.setSize(_e.z,_e.w);const ye=S.getRenderTarget();S.setRenderTarget(ce),S.getClearColor(G),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),Be?re.render(B):S.clear();const be=S.toneMapping;S.toneMapping=ri;const Ue=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),X===!0&&ue.setGlobalState(S.clippingPlanes,k),In(E,B,k),ze.updateMultisampleRenderTarget(ce),ze.updateRenderTargetMipmap(ce),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Le=0,ot=N.length;Le<ot;Le++){const pt=N[Le],dt=pt.object,Ut=pt.geometry,nt=pt.material,Ae=pt.group;if(nt.side===pn&&dt.layers.test(k.layers)){const Nt=nt.side;nt.side=qt,nt.needsUpdate=!0,Gi(dt,B,k,Ut,nt,Ae),nt.side=Nt,nt.needsUpdate=!0,Fe=!0}}Fe===!0&&(ze.updateMultisampleRenderTarget(ce),ze.updateRenderTargetMipmap(ce))}S.setRenderTarget(ye),S.setClearColor(G,J),Ue!==void 0&&(k.viewport=Ue),S.toneMapping=be}function In(E,N,B){const k=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ce=E.length;O<ce;O++){const _e=E[O],ye=_e.object,be=_e.geometry,Ue=k===null?_e.material:k,Fe=_e.group;ye.layers.test(B.layers)&&Gi(ye,N,B,be,Ue,Fe)}}function Gi(E,N,B,k,O,ce){E.onBeforeRender(S,N,B,k,O,ce),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(S,N,B,k,E,ce),O.transparent===!0&&O.side===pn&&O.forceSinglePass===!1?(O.side=qt,O.needsUpdate=!0,S.renderBufferDirect(B,N,k,O,E,ce),O.side=li,O.needsUpdate=!0,S.renderBufferDirect(B,N,k,O,E,ce),O.side=pn):S.renderBufferDirect(B,N,k,O,E,ce),E.onAfterRender(S,N,B,k,O,ce)}function Wi(E,N,B){N.isScene!==!0&&(N=Oe);const k=Ve.get(E),O=m.state.lights,ce=m.state.shadowsArray,_e=O.state.version,ye=se.getParameters(E,O.state,ce,N,B),be=se.getProgramCacheKey(ye);let Ue=k.programs;k.environment=E.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(E.isMeshStandardMaterial?T:ct).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ue===void 0&&(E.addEventListener("dispose",ae),Ue=new Map,k.programs=Ue);let Fe=Ue.get(be);if(Fe!==void 0){if(k.currentProgram===Fe&&k.lightsStateVersion===_e)return en(E,ye),Fe}else ye.uniforms=se.getUniforms(E),E.onBuild(B,ye,S),E.onBeforeCompile(ye,S),Fe=se.acquireProgram(ye,be),Ue.set(be,Fe),k.uniforms=ye.uniforms;const Le=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=ue.uniform),en(E,ye),k.needsLights=ji(E),k.lightsStateVersion=_e,k.needsLights&&(Le.ambientLightColor.value=O.state.ambient,Le.lightProbe.value=O.state.probe,Le.directionalLights.value=O.state.directional,Le.directionalLightShadows.value=O.state.directionalShadow,Le.spotLights.value=O.state.spot,Le.spotLightShadows.value=O.state.spotShadow,Le.rectAreaLights.value=O.state.rectArea,Le.ltc_1.value=O.state.rectAreaLTC1,Le.ltc_2.value=O.state.rectAreaLTC2,Le.pointLights.value=O.state.point,Le.pointLightShadows.value=O.state.pointShadow,Le.hemisphereLights.value=O.state.hemi,Le.directionalShadowMap.value=O.state.directionalShadowMap,Le.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Le.spotShadowMap.value=O.state.spotShadowMap,Le.spotLightMatrix.value=O.state.spotLightMatrix,Le.spotLightMap.value=O.state.spotLightMap,Le.pointShadowMap.value=O.state.pointShadowMap,Le.pointShadowMatrix.value=O.state.pointShadowMatrix),k.currentProgram=Fe,k.uniformsList=null,Fe}function pi(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Pr.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function en(E,N){const B=Ve.get(E);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Io(E,N,B,k,O){N.isScene!==!0&&(N=Oe),ze.resetTextureUnits();const ce=N.fog,_e=k.isMeshStandardMaterial?N.environment:null,ye=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:di,be=(k.isMeshStandardMaterial?T:ct).get(k.envMap||_e),Ue=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Fe=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Le=!!B.morphAttributes.position,ot=!!B.morphAttributes.normal,pt=!!B.morphAttributes.color;let dt=ri;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(dt=S.toneMapping);const Ut=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,nt=Ut!==void 0?Ut.length:0,Ae=Ve.get(k),Nt=m.state.lights;if(X===!0&&(ne===!0||E!==C)){const Ht=E===C&&k.id===F;ue.setState(k,E,Ht)}let rt=!1;k.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Nt.state.version||Ae.outputColorSpace!==ye||O.isBatchedMesh&&Ae.batching===!1||!O.isBatchedMesh&&Ae.batching===!0||O.isBatchedMesh&&Ae.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ae.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ae.instancing===!1||!O.isInstancedMesh&&Ae.instancing===!0||O.isSkinnedMesh&&Ae.skinning===!1||!O.isSkinnedMesh&&Ae.skinning===!0||O.isInstancedMesh&&Ae.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ae.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ae.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ae.instancingMorph===!1&&O.morphTexture!==null||Ae.envMap!==be||k.fog===!0&&Ae.fog!==ce||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ue.numPlanes||Ae.numIntersection!==ue.numIntersection)||Ae.vertexAlphas!==Ue||Ae.vertexTangents!==Fe||Ae.morphTargets!==Le||Ae.morphNormals!==ot||Ae.morphColors!==pt||Ae.toneMapping!==dt||Ae.morphTargetsCount!==nt)&&(rt=!0):(rt=!0,Ae.__version=k.version);let ln=Ae.currentProgram;rt===!0&&(ln=Wi(k,N,O));let $i=!1,yn=!1,$s=!1;const St=ln.getUniforms(),cn=Ae.uniforms;if(Pe.useProgram(ln.program)&&($i=!0,yn=!0,$s=!0),k.id!==F&&(F=k.id,yn=!0),$i||C!==E){St.setValue(L,"projectionMatrix",E.projectionMatrix),St.setValue(L,"viewMatrix",E.matrixWorldInverse);const Ht=St.map.cameraPosition;Ht!==void 0&&Ht.setValue(L,le.setFromMatrixPosition(E.matrixWorld)),tt.logarithmicDepthBuffer&&St.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&St.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),C!==E&&(C=E,yn=!0,$s=!0)}if(O.isSkinnedMesh){St.setOptional(L,O,"bindMatrix"),St.setOptional(L,O,"bindMatrixInverse");const Ht=O.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),St.setValue(L,"boneTexture",Ht.boneTexture,ze))}O.isBatchedMesh&&(St.setOptional(L,O,"batchingTexture"),St.setValue(L,"batchingTexture",O._matricesTexture,ze),St.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&St.setValue(L,"batchingColorTexture",O._colorsTexture,ze));const Xs=B.morphAttributes;if((Xs.position!==void 0||Xs.normal!==void 0||Xs.color!==void 0)&&Me.update(O,B,ln),(yn||Ae.receiveShadow!==O.receiveShadow)&&(Ae.receiveShadow=O.receiveShadow,St.setValue(L,"receiveShadow",O.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(cn.envMap.value=be,cn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(cn.envMapIntensity.value=N.environmentIntensity),yn&&(St.setValue(L,"toneMappingExposure",S.toneMappingExposure),Ae.needsLights&&an(cn,$s),ce&&k.fog===!0&&ie.refreshFogUniforms(cn,ce),ie.refreshMaterialUniforms(cn,k,K,Y,m.state.transmissionRenderTarget[E.id]),Pr.upload(L,pi(Ae),cn,ze)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Pr.upload(L,pi(Ae),cn,ze),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&St.setValue(L,"center",O.center),St.setValue(L,"modelViewMatrix",O.modelViewMatrix),St.setValue(L,"normalMatrix",O.normalMatrix),St.setValue(L,"modelMatrix",O.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ht=k.uniformsGroups;for(let Xi=0,Do=Ht.length;Xi<Do;Xi++){const qs=Ht[Xi];Re.update(qs,ln),Re.bind(qs,ln)}}return ln}function an(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function ji(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,N,B){Ve.get(E.texture).__webglTexture=N,Ve.get(E.depthTexture).__webglTexture=B;const k=Ve.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const B=Ve.get(E);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,B=0){R=E,U=N,A=B;let k=!0,O=null,ce=!1,_e=!1;if(E){const be=Ve.get(E);be.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(L.FRAMEBUFFER,null),k=!1):be.__webglFramebuffer===void 0?ze.setupRenderTarget(E):be.__hasExternalTextures&&ze.rebindTextures(E,Ve.get(E.texture).__webglTexture,Ve.get(E.depthTexture).__webglTexture);const Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(_e=!0);const Fe=Ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?O=Fe[N][B]:O=Fe[N],ce=!0):E.samples>0&&ze.useMultisampledRTT(E)===!1?O=Ve.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?O=Fe[B]:O=Fe,b.copy(E.viewport),P.copy(E.scissor),W=E.scissorTest}else b.copy(ge).multiplyScalar(K).floor(),P.copy(ve).multiplyScalar(K).floor(),W=Ge;if(Pe.bindFramebuffer(L.FRAMEBUFFER,O)&&k&&Pe.drawBuffers(E,O),Pe.viewport(b),Pe.scissor(P),Pe.setScissorTest(W),ce){const be=Ve.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,be.__webglTexture,B)}else if(_e){const be=Ve.get(E.texture),Ue=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.__webglTexture,B||0,Ue)}F=-1},this.readRenderTargetPixels=function(E,N,B,k,O,ce,_e){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){Pe.bindFramebuffer(L.FRAMEBUFFER,ye);try{const be=E.texture,Ue=be.format,Fe=be.type;if(!tt.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-k&&B>=0&&B<=E.height-O&&L.readPixels(N,B,k,O,me.convert(Ue),me.convert(Fe),ce)}finally{const be=R!==null?Ve.get(R).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(E,N,B,k,O,ce,_e){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){Pe.bindFramebuffer(L.FRAMEBUFFER,ye);try{const be=E.texture,Ue=be.format,Fe=be.type;if(!tt.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-k&&B>=0&&B<=E.height-O){const Le=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Le),L.bufferData(L.PIXEL_PACK_BUFFER,ce.byteLength,L.STREAM_READ),L.readPixels(N,B,k,O,me.convert(Ue),me.convert(Fe),0),L.flush();const ot=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await xg(L,ot,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Le),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ce)}finally{L.deleteBuffer(Le),L.deleteSync(ot)}return ce}}finally{const be=R!==null?Ve.get(R).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(E,N=null,B=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const k=Math.pow(2,-B),O=Math.floor(E.image.width*k),ce=Math.floor(E.image.height*k),_e=N!==null?N.x:0,ye=N!==null?N.y:0;ze.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,_e,ye,O,ce),Pe.unbindTexture()},this.copyTextureToTexture=function(E,N,B=null,k=null,O=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],N=arguments[2],O=arguments[3]||0,B=null);let ce,_e,ye,be,Ue,Fe;B!==null?(ce=B.max.x-B.min.x,_e=B.max.y-B.min.y,ye=B.min.x,be=B.min.y):(ce=E.image.width,_e=E.image.height,ye=0,be=0),k!==null?(Ue=k.x,Fe=k.y):(Ue=0,Fe=0);const Le=me.convert(N.format),ot=me.convert(N.type);ze.setTexture2D(N,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const pt=L.getParameter(L.UNPACK_ROW_LENGTH),dt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ut=L.getParameter(L.UNPACK_SKIP_PIXELS),nt=L.getParameter(L.UNPACK_SKIP_ROWS),Ae=L.getParameter(L.UNPACK_SKIP_IMAGES),Nt=E.isCompressedTexture?E.mipmaps[O]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Nt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Nt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,be),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Ue,Fe,ce,_e,Le,ot,Nt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Ue,Fe,Nt.width,Nt.height,Le,Nt.data):L.texSubImage2D(L.TEXTURE_2D,O,Ue,Fe,Le,ot,Nt),L.pixelStorei(L.UNPACK_ROW_LENGTH,pt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ut),L.pixelStorei(L.UNPACK_SKIP_ROWS,nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ae),O===0&&N.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(E,N,B=null,k=null,O=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,E=arguments[2],N=arguments[3],O=arguments[4]||0);let ce,_e,ye,be,Ue,Fe,Le,ot,pt;const dt=E.isCompressedTexture?E.mipmaps[O]:E.image;B!==null?(ce=B.max.x-B.min.x,_e=B.max.y-B.min.y,ye=B.max.z-B.min.z,be=B.min.x,Ue=B.min.y,Fe=B.min.z):(ce=dt.width,_e=dt.height,ye=dt.depth,be=0,Ue=0,Fe=0),k!==null?(Le=k.x,ot=k.y,pt=k.z):(Le=0,ot=0,pt=0);const Ut=me.convert(N.format),nt=me.convert(N.type);let Ae;if(N.isData3DTexture)ze.setTexture3D(N,0),Ae=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)ze.setTexture2DArray(N,0),Ae=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Nt=L.getParameter(L.UNPACK_ROW_LENGTH),rt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ln=L.getParameter(L.UNPACK_SKIP_PIXELS),$i=L.getParameter(L.UNPACK_SKIP_ROWS),yn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,dt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,be),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Fe),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Ae,O,Le,ot,pt,ce,_e,ye,Ut,nt,dt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Ae,O,Le,ot,pt,ce,_e,ye,Ut,dt.data):L.texSubImage3D(Ae,O,Le,ot,pt,ce,_e,ye,Ut,nt,dt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Nt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,rt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ln),L.pixelStorei(L.UNPACK_SKIP_ROWS,$i),L.pixelStorei(L.UNPACK_SKIP_IMAGES,yn),O===0&&N.generateMipmaps&&L.generateMipmap(Ae),Pe.unbindTexture()},this.initRenderTarget=function(E){Ve.get(E).__webglFramebuffer===void 0&&ze.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ze.setTextureCube(E,0):E.isData3DTexture?ze.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ze.setTexture2DArray(E,0):ze.setTexture2D(E,0),Pe.unbindTexture()},this.resetState=function(){U=0,A=0,R=null,Pe.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===$l?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===qr?"display-p3":"srgb"}}class Ey extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ql("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new I;class kr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),o=at(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Zl extends ki{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let gs;const lo=new I,xs=new I,_s=new I,vs=new ke,co=new ke,cf=new ut,gr=new I,ho=new I,xr=new I,su=new ke,Sl=new ke,ou=new ke;class df extends At{constructor(e=new Zl){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new $t;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wy(t,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new kr(n,3,0,!1)),gs.setAttribute("uv",new kr(n,2,3,!1))}this.geometry=gs,this.material=e,this.center=new ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),cf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-_s.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;_r(gr.set(-.5,-.5,0),_s,r,xs,s,o),_r(ho.set(.5,-.5,0),_s,r,xs,s,o),_r(xr.set(.5,.5,0),_s,r,xs,s,o),su.set(0,0),Sl.set(1,0),ou.set(1,1);let a=e.ray.intersectTriangle(gr,ho,xr,!1,lo);if(a===null&&(_r(ho.set(-.5,.5,0),_s,r,xs,s,o),Sl.set(0,1),a=e.ray.intersectTriangle(gr,xr,ho,!1,lo),a===null))return;const c=e.ray.origin.distanceTo(lo);c<e.near||c>e.far||t.push({distance:c,point:lo.clone(),uv:xn.getInterpolation(lo,gr,ho,xr,su,Sl,ou,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function _r(i,e,t,n,s,o){vs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(co.x=o*vs.x-s*vs.y,co.y=s*vs.x+o*vs.y):co.copy(vs),i.copy(e),i.x+=co.x,i.y+=co.y,i.applyMatrix4(cf)}class Cy extends Ot{constructor(e=null,t=1,n=1,s,o,r,a,c,h=Vt,l=Vt,f,p){super(null,r,a,c,h,l,s,o,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vr extends Yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ys=new ut,ru=new ut,vr=[],au=new zi,Ty=new ut,uo=new Tt,fo=new Hs;class hf extends Tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ty)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),au.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(au)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),fo.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=e*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(uo.geometry=this.geometry,uo.material=this.material,uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(n),e.ray.intersectsSphere(fo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,ys),ru.multiplyMatrices(n,ys),uo.matrixWorld=ru,uo.raycast(e,vr);for(let r=0,a=vr.length;r<a;r++){const c=vr[r];c.instanceId=o,c.object=this,t.push(c)}vr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cy(new Float32Array(s*this.count),s,this.count,Bu,Gn));const o=this.morphTexture.source.data.data;let r=0;for(let h=0;h<n.length;h++)r+=n[h];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*e;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class uf extends ki{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hr=new I,Gr=new I,lu=new ut,po=new Xu,yr=new Hs,Ml=new I,cu=new I;class Ay extends At{constructor(e=new $t,t=new uf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)Hr.fromBufferAttribute(t,s-1),Gr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Hr.distanceTo(Gr);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),yr.radius+=o,e.ray.intersectsSphere(yr)===!1)return;lu.copy(s).invert(),po.copy(e.ray).applyMatrix4(lu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=this.isLineSegments?2:1,l=n.index,p=n.attributes.position;if(l!==null){const g=Math.max(0,r.start),_=Math.min(l.count,r.start+r.count);for(let v=g,m=_-1;v<m;v+=h){const u=l.getX(v),y=l.getX(v+1),S=Sr(this,e,po,c,u,y);S&&t.push(S)}if(this.isLineLoop){const v=l.getX(_-1),m=l.getX(g),u=Sr(this,e,po,c,v,m);u&&t.push(u)}}else{const g=Math.max(0,r.start),_=Math.min(p.count,r.start+r.count);for(let v=g,m=_-1;v<m;v+=h){const u=Sr(this,e,po,c,v,v+1);u&&t.push(u)}if(this.isLineLoop){const v=Sr(this,e,po,c,_-1,g);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Sr(i,e,t,n,s,o){const r=i.geometry.attributes.position;if(Hr.fromBufferAttribute(r,s),Gr.fromBufferAttribute(r,o),t.distanceSqToSegment(Hr,Gr,Ml,cu)>n)return;Ml.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ml);if(!(c<e.near||c>e.far))return{distance:c,point:cu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}const du=new I,hu=new I;class Ry extends Ay{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,o=t.count;s<o;s+=2)du.fromBufferAttribute(t,s),hu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+du.distanceTo(hu);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jr extends $t{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const o=[],r=[],a=[],c=[],h=new I,l=new ke;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){const g=n+f/t*s;h.x=e*Math.cos(g),h.y=e*Math.sin(g),r.push(h.x,h.y,h.z),a.push(0,0,1),l.x=(r[p]/e+1)/2,l.y=(r[p+1]/e+1)/2,c.push(l.x,l.y)}for(let f=1;f<=t;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ql extends $t{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const o=[],r=[];a(s),h(n),l(),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(o.slice(),3)),this.setAttribute("uv",new ht(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const S=new I,w=new I,U=new I;for(let A=0;A<t.length;A+=3)g(t[A+0],S),g(t[A+1],w),g(t[A+2],U),c(S,w,U,y)}function c(y,S,w,U){const A=U+1,R=[];for(let F=0;F<=A;F++){R[F]=[];const C=y.clone().lerp(w,F/A),b=S.clone().lerp(w,F/A),P=A-F;for(let W=0;W<=P;W++)W===0&&F===A?R[F][W]=C:R[F][W]=C.clone().lerp(b,W/P)}for(let F=0;F<A;F++)for(let C=0;C<2*(A-F)-1;C++){const b=Math.floor(C/2);C%2===0?(p(R[F][b+1]),p(R[F+1][b]),p(R[F][b])):(p(R[F][b+1]),p(R[F+1][b+1]),p(R[F+1][b]))}}function h(y){const S=new I;for(let w=0;w<o.length;w+=3)S.x=o[w+0],S.y=o[w+1],S.z=o[w+2],S.normalize().multiplyScalar(y),o[w+0]=S.x,o[w+1]=S.y,o[w+2]=S.z}function l(){const y=new I;for(let S=0;S<o.length;S+=3){y.x=o[S+0],y.y=o[S+1],y.z=o[S+2];const w=m(y)/2/Math.PI+.5,U=u(y)/Math.PI+.5;r.push(w,1-U)}_(),f()}function f(){for(let y=0;y<r.length;y+=6){const S=r[y+0],w=r[y+2],U=r[y+4],A=Math.max(S,w,U),R=Math.min(S,w,U);A>.9&&R<.1&&(S<.2&&(r[y+0]+=1),w<.2&&(r[y+2]+=1),U<.2&&(r[y+4]+=1))}}function p(y){o.push(y.x,y.y,y.z)}function g(y,S){const w=y*3;S.x=e[w+0],S.y=e[w+1],S.z=e[w+2]}function _(){const y=new I,S=new I,w=new I,U=new I,A=new ke,R=new ke,F=new ke;for(let C=0,b=0;C<o.length;C+=9,b+=6){y.set(o[C+0],o[C+1],o[C+2]),S.set(o[C+3],o[C+4],o[C+5]),w.set(o[C+6],o[C+7],o[C+8]),A.set(r[b+0],r[b+1]),R.set(r[b+2],r[b+3]),F.set(r[b+4],r[b+5]),U.copy(y).add(S).add(w).divideScalar(3);const P=m(U);v(A,b+0,y,P),v(R,b+2,S,P),v(F,b+4,w,P)}}function v(y,S,w,U){U<0&&y.x===1&&(r[S]=y.x-1),w.x===0&&w.z===0&&(r[S]=U/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.vertices,e.indices,e.radius,e.details)}}class ec extends Ql{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ec(e.radius,e.detail)}}class tc extends $t{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let h=0;const l=[],f=new I,p=new I,g=[],_=[],v=[],m=[];for(let u=0;u<=n;u++){const y=[],S=u/n;let w=0;u===0&&r===0?w=.5/t:u===n&&c===Math.PI&&(w=-.5/t);for(let U=0;U<=t;U++){const A=U/t;f.x=-e*Math.cos(s+A*o)*Math.sin(r+S*a),f.y=e*Math.cos(r+S*a),f.z=e*Math.sin(s+A*o)*Math.sin(r+S*a),_.push(f.x,f.y,f.z),p.copy(f).normalize(),v.push(p.x,p.y,p.z),m.push(A+w,1-S),y.push(h++)}l.push(y)}for(let u=0;u<n;u++)for(let y=0;y<t;y++){const S=l[u][y+1],w=l[u][y],U=l[u+1][y],A=l[u+1][y+1];(u!==0||r>0)&&g.push(S,w,A),(u!==n-1||c<Math.PI)&&g.push(w,U,A)}this.setIndex(g),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(v,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nc extends $t{constructor(e=1,t=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],h=[],l=new I,f=new I,p=new I;for(let g=0;g<=n;g++)for(let _=0;_<=s;_++){const v=_/s*o,m=g/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),l.x=e*Math.cos(v),l.y=e*Math.sin(v),p.subVectors(f,l).normalize(),c.push(p.x,p.y,p.z),h.push(_/s),h.push(g/n)}for(let g=1;g<=n;g++)for(let _=1;_<=s;_++){const v=(s+1)*g+_-1,m=(s+1)*(g-1)+_-1,u=(s+1)*(g-1)+_,y=(s+1)*g+_;r.push(v,m,y),r.push(m,u,y)}this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ff extends ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hu,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const uu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Py{constructor(e,t,n){const s=this;let o=!1,r=0,a=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){a++,o===!1&&s.onStart!==void 0&&s.onStart(l,r,a),o=!0},this.itemEnd=function(l){r++,s.onProgress!==void 0&&s.onProgress(l,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,f){return h.push(l,f),this},this.removeHandler=function(l){const f=h.indexOf(l);return f!==-1&&h.splice(f,2),this},this.getHandler=function(l){for(let f=0,p=h.length;f<p;f+=2){const g=h[f],_=h[f+1];if(g.global&&(g.lastIndex=0),g.test(l))return _}return null}}}const Ly=new Py;class ic{constructor(e){this.manager=e!==void 0?e:Ly,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ic.DEFAULT_MATERIAL_NAME="__DEFAULT";class Iy extends ic{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,r=uu.get(e);if(r!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(r),o.manager.itemEnd(e)},0),r;const a=Eo("img");function c(){l(),uu.add(e,this),t&&t(this),o.manager.itemEnd(e)}function h(f){l(),s&&s(f),o.manager.itemError(e),o.manager.itemEnd(e)}function l(){a.removeEventListener("load",c,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class Dy extends ic{constructor(e){super(e)}load(e,t,n,s){const o=new Ot,r=new Iy(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,s),o}}class pf extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const bl=new ut,fu=new I,pu=new I;class Uy{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kl,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fu.setFromMatrixPosition(e.matrixWorld),t.position.copy(fu),pu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pu),t.updateMatrixWorld(),bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ny extends Uy{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fy extends pf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Ny}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Oy extends pf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class By{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=mu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function mu(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);const zy="modulepreload",ky=function(i){return"/"+i},gu={},we=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=ky(c),c in gu)return;gu[c]=!0;const h=c.endsWith(".css"),l=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${l}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":zy,h||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),h)return new Promise((p,g)=>{f.addEventListener("load",p),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return s.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return e().catch(o)})};console.log("🎯 state.js loaded");const d={rotationX:.01,rotationY:.01,scale:1,morphWeights:{cube:1,sphere:0,pyramid:0,torus:0},morphBaseWeights:[0,1,0,0],morphAudioWeights:[0,0,0,0],morphBaseFrozen:!1,color:"#00ff00",hue:120,idleSpin:!0,texture:null,useTextureOnMorph:!1,useBackgroundImage:!1,colorLayers:{geometry:{baseColor:"#00ff00",audioColor:"#ff0000",audioIntensity:.5},vessel:{baseColor:"#00ff00",audioColor:"#00ffff",audioIntensity:.3},particles:{baseColor:"#ffff00",audioColor:"#ff00ff",audioIntensity:.7},shadows:{baseColor:"#000000",audioColor:"#333333",audioIntensity:.2}},audio:{bass:0,mid:0,treble:0,enabled:!1,sensitivity:1},audioReactive:!1,vessel:{opacity:.5,scale:1,color:"#00ff00",enabled:!0,spinEnabled:!1,spinSpeed:.0035,scaleMultiplier:1.2,layout:"lattice",layoutIndex:0,audioSmoothing:.7,hueShiftRange:20,mode:"gyre"},particles:{enabled:!0,count:5e3,minCount:1e3,maxCount:1e4,layout:"cube",hue:0,size:.02,minSize:.005,maxSize:.1,opacity:.5,organicMotion:!1,organicStrength:.2,audioReactiveHue:!1,velocity:.05,orbitalSpeed:.05,motionSmoothness:.5,trailEnabled:!1,trailLength:0,trailOpacity:.3,trailFade:1,trailAudioReactive:!1,trailLengthMin:2,trailLengthMax:10},motionTrailsEnabled:!1,motionTrailIntensity:.96,particlesEnabled:!0,particlesCount:5e3,particlesMotion:{velocity:.5,spread:1},particleDensity:2e3,particleSize:.1,particleMotionStrength:.5,useAudioJitter:!0,useEmojiParticles:!1,emojiStreams:[],emojiSequencer:{enabled:!1,bpm:120,currentBeat:0,patterns:{},timelineLength:16},emojiBanks:[null,null,null,null,null,null,null,null],currentBank:null,emojiPhysics:{mode:"none",gravityStrength:.01,orbitStrength:.005,repulsionStrength:.02,collisionEnabled:!0,audioModulation:!0,mouseInteraction:!1},emojiFusion:{enabled:!1,threshold:1},emojiConstellations:{type:"None",customPattern:null,scale:5,rotation:0,rotationSpeed:.01,audioSync:!0,beatSync:!1},mandala:{enabled:!1,ringCount:6,symmetry:6,audioReactive:!1},emojiMandala:{enabled:!1,rings:3,symmetry:6,layout:["🍕","🌶️","🍄"],emoji:"🍕",ringRadii:[0,2,4,6,8,10],rotation:0,rotationSpeed:.02,audioModulation:!0,layeredAudio:!0,layoutMode:"radial",mandalaAudioReactive:!0,mandalaSensitivity:1,radiusPulse:0,anglePulse:0,musicalMode:!1,scale:"Major",rootNote:60,noteToEmoji:{},activeNotes:new Set,notePulse:{},performanceMode:!1,ringRotationSpeeds:[0,.01,.015,.02,.025,.03],differentialRotation:!0,scaleSequence:["Major","Dorian","Mixolydian","Phrygian"],scaleSequenceIndex:0,scaleSequenceEnabled:!1,scaleSequenceInterval:4e3,lastScaleChange:0,midiMappings:{symmetry:20,ringCount:21,rotationSpeed:22,scaleSequence:23}},lighting:{ambientIntensity:.4,directionalIntensity:1,directionalAngleX:-45,directionalAngleY:45},presets:[],morphState:{current:"cube",previous:"cube",progress:0,isTransitioning:!1,targets:["cube","sphere","pyramid","torus"]},shadows:{enabled:!0,ground:!0,backdrop:!0,opacity:.25,color:"#000000"},shadowBox:{threshold:.5,gain:1,bgColor:"#000000",fgColor:"#ffffff",palette:"Manual"},sprites:{enabled:!0,count:200},wireframe:{enabled:!0},debug:{showWireframe:!1,showRibbon:!1},interpolation:{enabled:!0,active:!1,duration:2e3,startTime:null,startState:null,targetState:null}},z={presets:[],currentIndex:0,active:!1,duration:2e3,loop:!1,shuffle:!1,savedChains:[],currentChainName:null,stepStartTime:null,paused:!1,pausedAt:null,pausedProgress:0};let El=!1;function sc(){const i=d.morphWeights,e=Object.values(i).reduce((t,n)=>t+n,0);e>1?(Object.keys(i).forEach(t=>{i[t]=i[t]/e}),El||(console.log("🎯 Morph weights auto-normalized (sum exceeded 1.0)"),El=!0)):El=!1}function mf(i,e){if(!d.audioReactive){d.morphBaseFrozen||(console.log("🛑 Audio OFF — morphBaseWeights frozen at",d.morphBaseWeights),d.morphBaseFrozen=!0);return}if(d.morphBaseFrozen=!1,d.morphState.targets.includes(i)){d.morphWeights[i]=Math.max(0,Math.min(1,e)),sc();const t=["sphere","cube","pyramid","torus"].indexOf(i);t>=0&&(d.morphBaseWeights[t]=d.morphWeights[i],console.log("📦 morphBaseWeights updated (setMorphWeight)",d.morphBaseWeights))}else console.warn(`🎯 Invalid morph target: ${i}`)}function oc(i){if(!d.audioReactive){d.morphBaseFrozen||(console.log("🛑 Audio OFF — morphBaseWeights frozen at",d.morphBaseWeights),d.morphBaseFrozen=!0);return}d.morphBaseFrozen=!1,d.morphState.targets.forEach(e=>{i[e]!==void 0&&(d.morphWeights[e]=Math.max(0,Math.min(1,i[e])))}),sc(),d.morphBaseWeights=[d.morphWeights.sphere||0,d.morphWeights.cube||0,d.morphWeights.pyramid||0,d.morphWeights.torus||0],console.log("📦 morphBaseWeights updated (setMorphWeights)",d.morphBaseWeights)}function rc(i){d.color=i;const e=parseInt(i.slice(1,3),16)/255,t=parseInt(i.slice(3,5),16)/255,n=parseInt(i.slice(5,7),16)/255,s=Math.max(e,t,n),o=Math.min(e,t,n),r=s-o;r===0?d.hue=0:s===e?d.hue=(t-n)/r*60:s===t?d.hue=((n-e)/r+2)*60:d.hue=((e-t)/r+4)*60,d.hue<0&&(d.hue+=360),d.hue=Math.round(d.hue)}function ac(i){d.hue=i%360;const e=d.hue/360,t=1,n=.5,s=(1-Math.abs(2*n-1))*t,o=s*(1-Math.abs(e*6%2-1)),r=n-s/2;let a,c,h;e<1/6?(a=s,c=o,h=0):e<2/6?(a=o,c=s,h=0):e<3/6?(a=0,c=s,h=o):e<4/6?(a=0,c=o,h=s):e<5/6?(a=o,c=0,h=s):(a=s,c=0,h=o),a=Math.round((a+r)*255),c=Math.round((c+r)*255),h=Math.round((h+r)*255),d.color=`#${a.toString(16).padStart(2,"0")}${c.toString(16).padStart(2,"0")}${h.toString(16).padStart(2,"0")}`}function wo(i){const e=parseInt(i.slice(1,3),16),t=parseInt(i.slice(3,5),16),n=parseInt(i.slice(5,7),16);return{r:e,g:t,b:n}}function lc(i){const e=Math.round(Math.max(0,Math.min(255,i.r))),t=Math.round(Math.max(0,Math.min(255,i.g))),n=Math.round(Math.max(0,Math.min(255,i.b)));return`#${e.toString(16).padStart(2,"0")}${t.toString(16).padStart(2,"0")}${n.toString(16).padStart(2,"0")}`}function Zr(i,e,t,n){const s=wo(i),o=wo(e),r=t*n,a={r:s.r+o.r*r,g:s.g+o.g*r,b:s.b+o.b*r};return lc(a)}function wn(i,e,t){return i+(e-i)*t}function gf(i,e,t){const n=wo(i),s=wo(e),o={r:wn(n.r,s.r,t),g:wn(n.g,s.g,t),b:wn(n.b,s.b,t)};return lc(o)}function xf(i,e,t){return i.map((n,s)=>wn(n,e[s]||0,t))}function _f(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}var Ru,Pu,Lu;const kn={rotationX:.01,rotationY:.01,scale:1,morphBaseWeights:[0,1,0,0],colorLayers:JSON.parse(JSON.stringify(d.colorLayers)),vessel:{opacity:((Ru=d.vessel)==null?void 0:Ru.opacity)??.5},shadows:{opacity:((Pu=d.shadows)==null?void 0:Pu.opacity)??.25},particles:{opacity:((Lu=d.particles)==null?void 0:Lu.opacity)??.5}};function vf(){d.interpolation.active=!1,z.active=!1,z.paused=!1,d.rotationX=kn.rotationX,d.rotationY=kn.rotationY,d.scale=kn.scale,d.morphBaseWeights=[...kn.morphBaseWeights],console.log("📦 morphBaseWeights updated (resetToBaseline)",d.morphBaseWeights),d.colorLayers=JSON.parse(JSON.stringify(kn.colorLayers)),d.vessel.opacity=kn.vessel.opacity,d.shadows.opacity=kn.shadows.opacity,d.particles.opacity=kn.particles.opacity,console.log("♻️ State reset to baseline")}let Mr=!0;function Vi(){const{audioReactive:i,audio:e}=d;return!i&&Mr!==!1?(console.log("🎵 Audio-reactive OFF — returning zero weights"),Mr=!1):i&&Mr!==!0&&(console.log("🎵 Audio-reactive ON — resuming audio response"),Mr=!0),i?!e||Number.isNaN(e.bass)||Number.isNaN(e.mid)||Number.isNaN(e.treble)?{bass:0,mid:0,treble:0,level:0}:{bass:e.bass??0,mid:e.mid??0,treble:e.treble??0,level:e.level??((e.bass??0)+(e.mid??0)+(e.treble??0))/3}:{bass:0,mid:0,treble:0,level:0}}console.log("🎯 State initialized:",d);const xu=Object.freeze(Object.defineProperty({__proto__:null,BASELINE:kn,blendColors:Zr,easeInOutCubic:_f,getEffectiveAudio:Vi,hexToRGB:wo,lerp:wn,lerpArray:xf,lerpColor:gf,morphChain:z,normalizeMorphWeights:sc,resetToBaseline:vf,rgbToHex:lc,setColor:rc,setHue:ac,setMorphWeight:mf,setMorphWeights:oc,state:d},Symbol.toStringTag,{value:"Module"}));console.log("📟 hud.js loaded");let yf=[];function Sf(){const i=Vy();document.body.appendChild(i),console.log("📟 HUD initialized")}function cc(i){yf.push(i)}function Vy(){const i=document.createElement("div");i.id="hud-panel",i.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    border-radius: 8px;
    font-family: monospace;
    font-size: 14px;
    z-index: 1000;
    min-width: 200px;
    max-height: 90vh;
    overflow-y: auto;
    scrollbar-width: thin;
  `;const e=document.createElement("style");e.textContent=`
    #hud-panel::-webkit-scrollbar {
      width: 6px;
    }
    #hud-panel::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
    #hud-panel::-webkit-scrollbar-track {
      background: transparent;
    }
  `,document.head.appendChild(e);let t=!1;const n=document.createElement("div");n.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;";const s=document.createElement("h3");s.textContent="🔺 Geometry Controls",s.style.cssText="margin: 0; color: #00ff00;";const o=document.createElement("button");o.textContent="−",o.style.cssText=`
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 2px 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
  `;const r=document.createElement("div");r.id="hud-controls-container",o.addEventListener("click",()=>{t=!t,t?(r.style.display="none",o.textContent="+",console.log("📟 HUD collapsed (minimal mode)")):(r.style.display="block",o.textContent="−",console.log("📟 HUD expanded (full mode)"))}),n.appendChild(s),n.appendChild(o),i.appendChild(n);const a=document.createElement("div");a.style.cssText=`
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
    border-bottom: 2px solid #333;
    padding-bottom: 5px;
  `;const c=["Morph","Presets","Audio","Visual","Advanced"],h={},l={};c.forEach(x=>{const H=document.createElement("button");H.textContent=x,H.style.cssText=`
      background: #222;
      color: #aaa;
      border: 1px solid #444;
      padding: 5px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 11px;
    `,H.addEventListener("click",()=>{c.forEach(te=>{h[te].style.background=te===x?"#555":"#222",h[te].style.color=te===x?"white":"#aaa",l[te].style.display=te===x?"block":"none"}),console.log(`📟 Tab switched to: ${x}`)}),a.appendChild(H),h[x]=H;const de=document.createElement("div");de.id=`tab-${x.toLowerCase()}`,de.style.display=x==="Morph"?"block":"none",r.appendChild(de),l[x]=de}),h.Morph.style.background="#555",h.Morph.style.color="white",r.insertBefore(a,r.firstChild);const f=et("Idle Spin",!0,x=>{ee({idleSpin:x})});l.Morph.appendChild(f);const p=Ee("X Rotation",0,0,.2,.001,x=>{ee({rotX:x})});l.Morph.appendChild(p);const g=Ee("Y Rotation",0,0,.2,.001,x=>{ee({rotY:x})});l.Morph.appendChild(g);const _=Ee("Scale",1,.5,2,.1,x=>{ee({scale:x})});l.Morph.appendChild(_);const v=br("Morph Target","cube",["cube","sphere","pyramid","torus"],x=>{ee({morphTarget:x})});l.Morph.appendChild(v);const m=Ee("Morph Intensity",0,0,1,.01,x=>{ee({morphBlend:x})});l.Morph.appendChild(m);const u=document.createElement("hr");u.style.cssText="border: 1px solid #555; margin: 15px 0;",l.Morph.appendChild(u);const y=document.createElement("h4");y.textContent="🌀 Multi-Target Blends",y.style.cssText="margin: 0 0 10px 0; color: #ffff00; font-size: 12px;",l.Morph.appendChild(y);const S=Ee("Cube Weight",1,0,1,.01,x=>{ee({targetWeight:{target:"cube",weight:x}})});l.Morph.appendChild(S);const w=Ee("Sphere Weight",0,0,1,.01,x=>{ee({targetWeight:{target:"sphere",weight:x}})});l.Morph.appendChild(w);const U=Ee("Pyramid Weight",0,0,1,.01,x=>{ee({targetWeight:{target:"pyramid",weight:x}})});l.Morph.appendChild(U);const A=Ee("Torus Weight",0,0,1,.01,x=>{ee({targetWeight:{target:"torus",weight:x}})});l.Morph.appendChild(A);const R=document.createElement("hr");R.style.cssText="border: 1px solid #555; margin: 15px 0;",l.Presets.appendChild(R);const F=document.createElement("h4");F.textContent="💾 Preset Manager (Phase 11.2.4)",F.style.cssText="margin: 0 0 10px 0; color: #00ffff; font-size: 12px;",l.Presets.appendChild(F);const C=document.createElement("div");C.style.cssText="margin-bottom: 10px;";const b=document.createElement("input");b.type="text",b.placeholder="New preset name...",b.style.cssText="width: 58%; padding: 4px; background: #333; color: white; border: 1px solid #555; margin-right: 2%;";const P=document.createElement("button");P.textContent="Save New",P.style.cssText="width: 38%; padding: 4px; background: #00ff00; color: black; border: none; cursor: pointer; font-weight: bold;",P.title="Save current state as new preset";const W=document.createElement("input");W.type="text",W.placeholder="Category (e.g., Live, Test)",W.value="Uncategorized",W.style.cssText="width: 100%; padding: 4px; background: #333; color: white; border: 1px solid #555; margin-top: 5px; font-size: 11px;";const G=document.createElement("input");G.type="text",G.placeholder="Tags (comma-separated, e.g., bright, fast)",G.style.cssText="width: 100%; padding: 4px; background: #333; color: white; border: 1px solid #555; margin-top: 5px; font-size: 11px;",P.addEventListener("click",()=>{const x=b.value.trim();if(x){const H=W.value.trim()||"Uncategorized",de=G.value.trim()?G.value.split(",").map(te=>te.trim()).filter(te=>te.length>0):[];console.log("💾 [HUD] Save button clicked:",{presetName:x,category:H,tags:de}),ee({presetAction:"save",presetName:x,category:H,tags:de}),b.value="",W.value="Uncategorized",G.value=""}else console.warn("💾 [HUD] Save button clicked but preset name is empty")}),C.appendChild(b),C.appendChild(P),C.appendChild(W),C.appendChild(G),l.Presets.appendChild(C);const J=document.createElement("div");J.style.cssText="margin-bottom: 10px;";const Z=document.createElement("div");Z.textContent="Search Presets:",Z.style.cssText="margin-bottom: 3px; color: #aaa; font-size: 10px;";const Y=document.createElement("input");Y.type="text",Y.placeholder="Search by name, category, or tags...",Y.style.cssText="width: 100%; padding: 4px; background: #333; color: white; border: 1px solid #555; margin-bottom: 8px; font-size: 11px;";const K=document.createElement("div");K.textContent="Filter by Category:",K.style.cssText="margin-bottom: 3px; color: #aaa; font-size: 10px;";const $=document.createElement("select");$.style.cssText="width: 100%; padding: 4px; background: #333; color: white; border: 1px solid #555; margin-bottom: 5px; font-size: 11px;";const he=document.createElement("div");he.textContent="Filter by Tags (comma-separated):",he.style.cssText="margin-bottom: 3px; color: #aaa; font-size: 10px;";const ge=document.createElement("input");ge.type="text",ge.placeholder="e.g., bright, fast",ge.style.cssText="width: 100%; padding: 4px; background: #333; color: white; border: 1px solid #555; font-size: 11px;",J.appendChild(Z),J.appendChild(Y),J.appendChild(K),J.appendChild($),J.appendChild(he),J.appendChild(ge),l.Presets.appendChild(J);const ve=document.createElement("div");ve.textContent="Saved Presets:",ve.style.cssText="margin-bottom: 5px; color: #aaa; font-size: 11px;",l.Presets.appendChild(ve);const Ge=document.createElement("div");Ge.id="preset-list-container",Ge.style.cssText=`
    max-height: 150px;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid #555;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 5px;
  `,l.Presets.appendChild(Ge);const Je=document.createElement("div");Je.style.cssText="display: flex; gap: 5px; margin-bottom: 10px;";const X=document.createElement("button");X.textContent="Load",X.style.cssText="flex: 1; padding: 6px; background: #0088ff; color: white; border: none; cursor: pointer; border-radius: 3px;",X.title="Load selected preset",X.disabled=!0;const ne=document.createElement("button");ne.textContent="Update",ne.style.cssText="flex: 1; padding: 6px; background: #ff9900; color: white; border: none; cursor: pointer; border-radius: 3px;",ne.title="Overwrite selected preset with current state",ne.disabled=!0;const fe=document.createElement("button");fe.textContent="Delete",fe.style.cssText="flex: 1; padding: 6px; background: #ff4444; color: white; border: none; cursor: pointer; border-radius: 3px;",fe.title="Delete selected preset",fe.disabled=!0;let le=null;X.addEventListener("click",()=>{le&&ee({presetAction:"load",presetName:le})}),ne.addEventListener("click",()=>{le&&confirm(`Overwrite preset "${le}" with current state?`)&&ee({presetAction:"update",presetName:le})}),fe.addEventListener("click",()=>{le&&confirm(`Delete preset "${le}"?`)&&(ee({presetAction:"delete",presetName:le}),le=null,X.disabled=!0,ne.disabled=!0,fe.disabled=!0)}),Je.appendChild(X),Je.appendChild(ne),Je.appendChild(fe),l.Presets.appendChild(Je);const Oe=document.createElement("div");Oe.style.cssText="margin-bottom: 10px; padding: 8px; background: rgba(0, 100, 150, 0.1); border: 1px solid #0066aa; border-radius: 4px;";const Be=document.createElement("div");Be.textContent="🎚️ Preset Interpolation",Be.style.cssText="margin-bottom: 5px; color: #00aaff; font-size: 11px; font-weight: bold;";const Xe=document.createElement("label");Xe.style.cssText="display: flex; align-items: center; margin-bottom: 5px; font-size: 11px; cursor: pointer;";const L=document.createElement("input");L.type="checkbox",L.checked=d.interpolation.enabled,L.style.cssText="margin-right: 8px;";const je=document.createElement("span");je.textContent=d.interpolation.enabled?"Enabled":"Disabled",je.style.cssText=`color: ${d.interpolation.enabled?"#00ff00":"#ff6666"};`,L.addEventListener("change",()=>{d.interpolation.enabled=L.checked,je.textContent=L.checked?"Enabled":"Disabled",je.style.color=L.checked?"#00ff00":"#ff6666",console.log(`🎚️ Interpolation ${L.checked?"enabled":"disabled"}`)}),Xe.appendChild(L),Xe.appendChild(je);const $e=document.createElement("div");$e.textContent=`Duration: ${d.interpolation.duration}ms`,$e.style.cssText="margin-bottom: 3px; color: #aaa; font-size: 10px;";const tt=document.createElement("input");tt.type="range",tt.min="500",tt.max="10000",tt.step="500",tt.value=d.interpolation.duration,tt.style.cssText="width: 100%; margin-bottom: 3px;",tt.addEventListener("input",()=>{const x=parseInt(tt.value);d.interpolation.duration=x,$e.textContent=`Duration: ${x}ms`}),Oe.appendChild(Be),Oe.appendChild(Xe),Oe.appendChild($e),Oe.appendChild(tt),l.Presets.appendChild(Oe);const Pe=document.createElement("hr");Pe.style.cssText="border: 1px solid #555; margin: 15px 0;",l.Presets.appendChild(Pe);const Ne=document.createElement("div");Ne.className="panel-section",Ne.style.cssText="margin-bottom: 10px;";const Ve=document.createElement("div");Ve.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;";const ze=document.createElement("div");ze.className="panel-title",ze.textContent="🔗 Morph Chain",ze.style.cssText="color: #ff9900; font-size: 12px; font-weight: bold;";const ct=document.createElement("div");ct.id="chainStatusBadge",ct.textContent="⏹ Stopped",ct.style.cssText="padding: 3px 8px; background: #333; color: #888; border-radius: 3px; font-size: 9px; font-weight: bold;",Ve.appendChild(ze),Ve.appendChild(ct),Ne.appendChild(Ve);const T=document.createElement("div");T.style.display="flex",T.style.flexDirection="column",T.style.gap="6px",T.style.maxHeight="150px",T.style.overflowY="auto",T.style.marginBottom="8px",T.style.padding="5px",T.style.background="#222",T.style.border="1px solid #555",Ne.appendChild(T);const M=document.createElement("div");M.style.display="flex",M.style.alignItems="center",M.style.gap="8px",M.style.marginBottom="8px";const V=document.createElement("span");V.textContent="Duration (ms):",V.style.fontSize="10px",V.style.color="#aaa";const Q=document.createElement("input");Q.type="range",Q.min="500",Q.max="10000",Q.step="500",Q.value="2000",Q.style.flex="1";const se=document.createElement("span");se.textContent="2000",se.style.fontSize="10px",se.style.color="#fff",se.style.minWidth="45px",Q.addEventListener("input",()=>se.textContent=Q.value),M.appendChild(V),M.appendChild(Q),M.appendChild(se),Ne.appendChild(M);const ie=document.createElement("div");ie.style.display="flex",ie.style.gap="15px",ie.style.marginBottom="8px",ie.style.fontSize="10px";const Ce=document.createElement("label");Ce.style.display="flex",Ce.style.alignItems="center",Ce.style.gap="5px",Ce.style.cursor="pointer";const pe=document.createElement("input");pe.type="checkbox",pe.id="chainLoopToggle",Ce.appendChild(pe),Ce.appendChild(document.createTextNode("🔁 Loop"));const ue=document.createElement("label");ue.style.display="flex",ue.style.alignItems="center",ue.style.gap="5px",ue.style.cursor="pointer";const He=document.createElement("input");He.type="checkbox",He.id="chainShuffleToggle",ue.appendChild(He),ue.appendChild(document.createTextNode("🔀 Shuffle")),ie.appendChild(Ce),ie.appendChild(ue),Ne.appendChild(ie);const re=document.createElement("div");re.style.marginBottom="8px";const Me=document.createElement("div");Me.textContent="Progress: —",Me.id="chainProgressLabel",Me.style.fontSize="10px",Me.style.color="#aaa",Me.style.marginBottom="3px";const We=document.createElement("div");We.style.width="100%",We.style.height="8px",We.style.background="#333",We.style.border="1px solid #555",We.style.position="relative";const Ie=document.createElement("div");Ie.id="chainProgressFill",Ie.style.width="0%",Ie.style.height="100%",Ie.style.background="#00ff00",Ie.style.transition="width 0.1s linear",We.appendChild(Ie),re.appendChild(Me),re.appendChild(We),re.id="chainProgressContainer",re.style.display="none",Ne.appendChild(re);const me=document.createElement("div");me.style.display="flex",me.style.gap="8px",me.style.marginBottom="8px";const Te=document.createElement("button");Te.id="chainStartBtn",Te.textContent="Start Chain",Te.style.cssText="flex: 1; padding: 6px; background: #00ff00; color: black; border: none; cursor: pointer; font-weight: bold; font-size: 11px;";const Re=document.createElement("button");Re.id="chainStopBtn",Re.textContent="Stop",Re.style.cssText="flex: 1; padding: 6px; background: #ff6666; color: black; border: none; cursor: pointer; font-weight: bold; font-size: 11px;",Re.disabled=!0,Re.style.opacity="0.5",Re.style.cursor="not-allowed";const qe=document.createElement("button");qe.id="chainResetBtn",qe.textContent="🔄",qe.title="Reset Chain",qe.style.cssText="flex: 0.5; padding: 6px; background: #ffaa00; color: black; border: none; cursor: pointer; font-weight: bold; font-size: 11px;",me.appendChild(Te),me.appendChild(Re),me.appendChild(qe),Ne.appendChild(me);const D=document.createElement("div");D.style.cssText="display: flex; gap: 5px; margin-bottom: 8px;";const oe=document.createElement("button");oe.id="chainPauseResumeBtn",oe.textContent="⏸ Pause",oe.style.cssText="flex: 2; padding: 6px; background: #ffaa00; color: black; border: none; cursor: pointer; font-weight: bold; font-size: 11px;",oe.disabled=!0,oe.style.opacity="0.5",oe.style.cursor="not-allowed";const j=document.createElement("button");j.id="chainSkipPrevBtn",j.textContent="⏮",j.style.cssText="flex: 1; padding: 6px; background: #6699ff; color: white; border: none; cursor: pointer; font-weight: bold; font-size: 11px;",j.disabled=!0,j.style.opacity="0.5",j.style.cursor="not-allowed";const q=document.createElement("button");q.id="chainSkipNextBtn",q.textContent="⏭",q.style.cssText="flex: 1; padding: 6px; background: #6699ff; color: white; border: none; cursor: pointer; font-weight: bold; font-size: 11px;",q.disabled=!0,q.style.opacity="0.5",q.style.cursor="not-allowed",D.appendChild(j),D.appendChild(oe),D.appendChild(q),Ne.appendChild(D);const ae=document.createElement("div");ae.id="chainTimeRemaining",ae.textContent="Remaining: --",ae.style.cssText="font-size: 10px; color: #aaa; margin-bottom: 8px; text-align: center;",Ne.appendChild(ae);const De=document.createElement("div");De.style.display="flex",De.style.gap="5px",De.style.marginBottom="8px";const Qe=document.createElement("input");Qe.type="text",Qe.placeholder="Chain name...",Qe.style.cssText="flex: 1; padding: 4px; background: #333; color: white; border: 1px solid #555; font-size: 10px;";const ft=document.createElement("button");ft.textContent="💾 Save Chain",ft.style.cssText="padding: 4px 8px; background: #ff9900; color: black; border: none; cursor: pointer; font-weight: bold; font-size: 10px;",De.appendChild(Qe),De.appendChild(ft),Ne.appendChild(De);const vt=document.createElement("div");vt.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;";const st=document.createElement("div");st.textContent="Saved Chains:",st.style.cssText="font-size: 10px; color: #aaa;";const Bt=document.createElement("div");Bt.style.cssText="display: flex; gap: 5px;";const Dt=document.createElement("button");Dt.id="exportChainsBtn",Dt.textContent="💾",Dt.title="Export chains",Dt.style.cssText="padding: 2px 6px; background: #4CAF50; color: white; border: none; cursor: pointer; font-size: 10px; border-radius: 3px;";const Xt=document.createElement("button");Xt.id="importChainsBtn",Xt.textContent="📂",Xt.title="Import chains",Xt.style.cssText="padding: 2px 6px; background: #2196F3; color: white; border: none; cursor: pointer; font-size: 10px; border-radius: 3px;";const Qt=document.createElement("input");Qt.type="file",Qt.id="importChainsInput",Qt.accept=".json",Qt.style.display="none",Bt.appendChild(Dt),Bt.appendChild(Xt),Bt.appendChild(Qt),vt.appendChild(st),vt.appendChild(Bt),Ne.appendChild(vt);const Ln=document.createElement("div");Ln.id="savedChainsList",Ln.style.cssText="max-height: 100px; overflow-y: auto; background: #222; border: 1px solid #555; padding: 5px; margin-bottom: 8px;",Ne.appendChild(Ln);const fi=document.createElement("button");fi.textContent="♻️ Reset",fi.style.cssText="width: 100%; margin-top: 8px; background: #222; color: #fff; border: 1px solid #444; padding: 6px; cursor: pointer; font-size: 11px; font-weight: bold;",fi.addEventListener("click",()=>{console.log("♻️ HUD reset clicked"),ee({type:"app:reset"})}),Ne.appendChild(fi),l.Presets.appendChild(Ne);function In(){T.innerHTML="";const x=window.__PRESET_NAMES__?window.__PRESET_NAMES__():[];if(x.length===0){const H=document.createElement("div");H.textContent="No presets available",H.style.cssText="color: #888; font-size: 10px; padding: 5px;",T.appendChild(H);return}x.forEach(H=>{const de=document.createElement("label");de.style.display="flex",de.style.alignItems="center",de.style.gap="6px",de.style.cursor="pointer",de.style.fontSize="10px";const te=document.createElement("input");te.type="checkbox",te.value=H,de.appendChild(te),de.appendChild(document.createTextNode(H)),T.appendChild(de)})}function Gi(){Ln.innerHTML="",we(async()=>{const{listChains:x,getChainData:H}=await Promise.resolve().then(()=>wu);return{listChains:x,getChainData:H}},void 0).then(({listChains:x,getChainData:H})=>{const de=x();if(de.length===0){const te=document.createElement("div");te.textContent="No saved chains",te.style.cssText="color: #888; font-size: 9px; padding: 3px;",Ln.appendChild(te);return}de.forEach(te=>{const Se=H(te),Ze=document.createElement("div");Ze.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; font-size: 9px;";const mt=document.createElement("span");mt.textContent=`${te} (${Se.presets.length})`,mt.style.cssText="flex: 1; color: #ccc;",mt.title=`Presets: ${Se.presets.join(", ")}
Duration: ${Se.duration}ms
Loop: ${Se.loop}
Shuffle: ${Se.shuffle}`;const Et=document.createElement("button");Et.textContent="Load",Et.style.cssText="padding: 2px 6px; background: #00aaff; color: white; border: none; cursor: pointer; font-size: 8px; margin-right: 3px;",Et.addEventListener("click",()=>{console.log("🔗 Loading chain:",te),ee({presetAction:"chain:load",chainName:te})});const Ft=document.createElement("button");Ft.textContent="×",Ft.style.cssText="padding: 2px 6px; background: #ff6666; color: white; border: none; cursor: pointer; font-size: 8px;",Ft.addEventListener("click",()=>{confirm(`Delete chain "${te}"?`)&&(console.log("🔗 Deleting chain:",te),ee({presetAction:"chain:delete",chainName:te}),Gi())}),Ze.appendChild(mt),Ze.appendChild(Et),Ze.appendChild(Ft),Ln.appendChild(Ze)})})}Te.addEventListener("click",()=>{const x=[...T.querySelectorAll("input[type=checkbox]:checked")].map(Se=>Se.value);if(x.length===0){alert("⚠️ No presets selected. Please select at least one preset before starting a chain.");return}const H=Number(Q.value)||2e3,de=pe.checked,te=He.checked;console.log("🔗 HUD start chain:",x,H,{loop:de,shuffle:te}),ee({presetAction:"chain:start",chainPresets:x,chainDuration:H,chainLoop:de,chainShuffle:te})}),Re.addEventListener("click",()=>{console.log("🔗 HUD stop chain"),ee({presetAction:"chain:stop"})}),qe.addEventListener("click",()=>{console.log("🔄 HUD reset chain"),ee({presetAction:"chain:reset"})}),oe.addEventListener("click",()=>{oe.textContent.includes("Resume")?(console.log("▶️ HUD resume chain"),ee({presetAction:"chain:resume"})):(console.log("⏸ HUD pause chain"),ee({presetAction:"chain:pause"}))}),j.addEventListener("click",()=>{console.log("⏮ HUD skip to previous preset"),ee({presetAction:"chain:skipPrev"})}),q.addEventListener("click",()=>{console.log("⏭ HUD skip to next preset"),ee({presetAction:"chain:skipNext"})}),Dt.addEventListener("click",()=>{console.log("💾 HUD export chains"),ee({presetAction:"chain:export"})}),Xt.addEventListener("click",()=>{Qt.click()}),Qt.addEventListener("change",x=>{const H=x.target.files[0];H&&(console.log("📂 HUD import chains:",H.name),ee({presetAction:"chain:import",file:H}),Qt.value="")}),ft.addEventListener("click",()=>{const x=Qe.value.trim();if(!x){console.warn("🔗 Chain name is empty");return}const H=[...T.querySelectorAll("input[type=checkbox]:checked")].map(Ze=>Ze.value);if(H.length<2){console.warn("🔗 Need at least 2 presets to save a chain");return}const de=Number(Q.value)||2e3,te=pe.checked,Se=He.checked;console.log("🔗 HUD save chain:",x,H,{duration:de,loop:te,shuffle:Se}),ee({presetAction:"chain:save",chainName:x,chainPresets:H,chainDuration:de,chainLoop:te,chainShuffle:Se}),Qe.value="",setTimeout(Gi,100)});function Wi(){const x=document.getElementById("chainProgressContainer"),H=document.getElementById("chainProgressLabel"),de=document.getElementById("chainProgressFill"),te=document.getElementById("chainStatusBadge");if(!H||!de||!x||!te)return;const Se=d.morphChain;if(!Se||!Se.active){x.style.display="none",H.textContent="Step —",de.style.width="0%",te.textContent="⏹ Stopped",te.style.background="#333",te.style.color="#888";const $o=document.querySelector("#chainStartBtn"),Xo=document.querySelector("#chainStopBtn");$o&&Xo&&($o.disabled=!1,$o.style.opacity="1",$o.style.cursor="pointer",Xo.disabled=!0,Xo.style.opacity="0.5",Xo.style.cursor="not-allowed");return}const{currentIndex:Ze,presets:mt,duration:Et,stepStartTime:Ft}=Se,wt=mt.length;if(!mt||wt===0){x.style.display="none";return}const Dn=performance.now()-(Ft||performance.now()),Go=Math.min(Dn/Et,1),qp=(Ze+Go)/wt,Od=Math.round(qp*100),Yp=Math.min(Ze+1,wt);de.style.width=`${Od}%`,H.textContent=`Step ${Yp}/${wt} (${Od}%)`,x.style.display="block",te.textContent="🟢 Running",te.style.background="#004400",te.style.color="#00ff00";const Wo=document.querySelector("#chainStartBtn"),jo=document.querySelector("#chainStopBtn");Wo&&jo&&(Wo.disabled=!0,Wo.style.opacity="0.5",Wo.style.cursor="not-allowed",jo.disabled=!1,jo.style.opacity="1",jo.style.cursor="pointer")}const pi=document.createElement("div");pi.id="chainToastContainer",pi.style.cssText="position: fixed; top: 20px; right: 20px; z-index: 10000; display: flex; flex-direction: column; gap: 10px; pointer-events: none;",document.body.appendChild(pi);function en(x,H=1500){const de=document.createElement("div");de.style.cssText="background: rgba(0, 0, 0, 0.9); color: white; padding: 12px 16px; border-radius: 4px; border-left: 4px solid #ff9900; font-size: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); max-width: 300px; pointer-events: auto; animation: slideInRight 0.3s ease;",de.textContent=x,pi.appendChild(de),setTimeout(()=>{de.style.opacity="0",de.style.transition="opacity 0.3s ease",setTimeout(()=>de.remove(),300)},H)}const Io=document.createElement("style");Io.textContent=`
    @keyframes slideInRight {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `,document.head.appendChild(Io),window.addEventListener("chainStarted",x=>{const{presets:H}=x.detail;en(`🔗 Chain started: ${H.join(" → ")}`)}),window.addEventListener("chainStepComplete",x=>{const{next:H}=x.detail;en(`✅ Step complete → Next: ${H}`)}),window.addEventListener("chainLoopRestarted",()=>{en("🔁 Loop restarted")}),window.addEventListener("chainFinished",()=>{en("🔗 Chain finished")}),window.addEventListener("chainStarted",()=>{oe.disabled=!1,oe.style.opacity="1",oe.style.cursor="pointer",oe.textContent="⏸ Pause",j.disabled=!1,j.style.opacity="1",j.style.cursor="pointer",q.disabled=!1,q.style.opacity="1",q.style.cursor="pointer",Re.disabled=!1,Re.style.opacity="1",Re.style.cursor="pointer",qe.disabled=!1,qe.style.opacity="1",qe.style.cursor="pointer",Te.disabled=!0,Te.style.opacity="0.5",Te.style.cursor="not-allowed"}),window.addEventListener("chainFinished",()=>{oe.disabled=!0,oe.style.opacity="0.5",oe.style.cursor="not-allowed",oe.textContent="⏸ Pause",j.disabled=!0,j.style.opacity="0.5",j.style.cursor="not-allowed",q.disabled=!0,q.style.opacity="0.5",q.style.cursor="not-allowed",Re.disabled=!0,Re.style.opacity="0.5",Re.style.cursor="not-allowed",qe.disabled=!0,qe.style.opacity="0.5",qe.style.cursor="not-allowed",Te.disabled=!1,Te.style.opacity="1",Te.style.cursor="pointer",ae.textContent="Remaining: --"}),window.addEventListener("chainPaused",()=>{oe.textContent="▶️ Resume",en("⏸ Chain paused")}),window.addEventListener("chainResumed",()=>{oe.textContent="⏸ Pause",en("▶️ Chain resumed")}),window.addEventListener("chainSkipped",x=>{const{direction:H,preset:de}=x.detail;en(`${H==="next"?"⏭":"⏮"} Skipped → ${de}`)}),window.addEventListener("chainReset",()=>{en("♻️ Chain reset to start"),oe.disabled=!0,oe.style.opacity="0.5",oe.style.cursor="not-allowed",oe.textContent="⏸ Pause",j.disabled=!0,j.style.opacity="0.5",j.style.cursor="not-allowed",q.disabled=!0,q.style.opacity="0.5",q.style.cursor="not-allowed",Re.disabled=!0,Re.style.opacity="0.5",Re.style.cursor="not-allowed",qe.disabled=!0,qe.style.opacity="0.5",qe.style.cursor="not-allowed",Te.disabled=!1,Te.style.opacity="1",Te.style.cursor="pointer"}),window.addEventListener("chainStopped",()=>{en("⏹ Chain stopped"),oe.disabled=!0,oe.style.opacity="0.5",oe.style.cursor="not-allowed",oe.textContent="⏸ Pause",j.disabled=!0,j.style.opacity="0.5",j.style.cursor="not-allowed",q.disabled=!0,q.style.opacity="0.5",q.style.cursor="not-allowed",Re.disabled=!0,Re.style.opacity="0.5",Re.style.cursor="not-allowed",qe.disabled=!0,qe.style.opacity="0.5",qe.style.cursor="not-allowed",Te.disabled=!1,Te.style.opacity="1",Te.style.cursor="pointer",ae.textContent="Remaining: --"});let an=null;window.addEventListener("chainStarted",()=>{an&&clearInterval(an),an=setInterval(()=>{we(async()=>{const{getChainProgress:x}=await Promise.resolve().then(()=>wu);return{getChainProgress:x}},void 0).then(({getChainProgress:x})=>{const H=x();if(H){const de=H.timeRemaining,te=Math.floor(de/6e4),Se=Math.floor(de%6e4/1e3);ae.textContent=`Remaining: ${te}m ${Se}s`}else ae.textContent="Remaining: --",an&&(clearInterval(an),an=null)})},100)}),window.addEventListener("chainFinished",()=>{an&&(clearInterval(an),an=null)}),window.addEventListener("chainProgress",x=>{const{step:H,total:de,percent:te,remaining:Se}=x.detail,Ze=document.getElementById("chainProgressFill"),mt=document.getElementById("chainProgressLabel"),Et=document.getElementById("chainProgressContainer");Ze&&mt&&Et&&(Ze.style.width=`${te}%`,mt.textContent=`Step ${H}/${de} (${te}%) — Remaining: ${Se}s`,Et.style.display="block")}),setInterval(Wi,100),In(),Gi(),document.addEventListener("presetsImported",In),document.addEventListener("presetSaved",In),document.addEventListener("presetDeleted",In);const ji=document.createElement("div");ji.style.cssText="display: flex; gap: 5px; margin-bottom: 10px;";const E=document.createElement("button");E.textContent="📥 Export",E.style.cssText="flex: 1; padding: 6px; background: #00aa00; color: white; border: none; cursor: pointer; border-radius: 3px; font-size: 11px;",E.title="Export all presets as JSON file";const N=document.createElement("button");N.textContent="📤 Import",N.style.cssText="flex: 1; padding: 6px; background: #aa00aa; color: white; border: none; cursor: pointer; border-radius: 3px; font-size: 11px;",N.title="Import presets from JSON file";const B=document.createElement("input");B.type="file",B.accept=".json,application/json",B.style.display="none",E.addEventListener("click",()=>{ee({presetAction:"export"})}),N.addEventListener("click",()=>{B.click()}),B.addEventListener("change",x=>{const H=x.target.files[0];H&&(ee({presetAction:"import",file:H}),B.value="")}),ji.appendChild(E),ji.appendChild(N),l.Advanced.appendChild(ji),l.Advanced.appendChild(B),i.presetListContainer=Ge,i.presetLoadButton=X,i.presetUpdateButton=ne,i.presetDeleteButton=fe,i.categoryFilter=$,i.tagFilter=ge,i.searchInput=Y,i.getSelectedPreset=()=>le,i.setSelectedPreset=x=>{le=x,X.disabled=!x,ne.disabled=!x,fe.disabled=!x},$.addEventListener("change",()=>{we(async()=>{const{listPresets:x}=await Promise.resolve().then(()=>ai);return{listPresets:x}},void 0).then(({listPresets:x})=>{_o(x())})}),ge.addEventListener("input",()=>{we(async()=>{const{listPresets:x}=await Promise.resolve().then(()=>ai);return{listPresets:x}},void 0).then(({listPresets:x})=>{_o(x())})}),Y.addEventListener("input",()=>{we(async()=>{const{listPresets:x}=await Promise.resolve().then(()=>ai);return{listPresets:x}},void 0).then(({listPresets:x})=>{_o(x())})});const k=document.createElement("hr");k.style.cssText="border: 1px solid #555; margin: 15px 0;",l.Audio.appendChild(k);const O=document.createElement("h4");O.textContent="🎶 Audio-Reactive",O.style.cssText="margin: 0 0 10px 0; color: #ff9900; font-size: 12px;",l.Audio.appendChild(O);const ce=et("Audio-Reactive Morphing",!1,x=>{ee({audioEnabled:x})});l.Audio.appendChild(ce);const _e=Ee("Audio Sensitivity",1,.5,2,.1,x=>{ee({audioSensitivity:x})});l.Audio.appendChild(_e);const ye=document.createElement("hr");ye.style.cssText="border: 1px solid #555; margin: 15px 0;",l.Visual.appendChild(ye);const be=document.createElement("h4");be.textContent="✨ Particles",be.style.cssText="margin: 0 0 10px 0; color: #00ffff; font-size: 12px;",l.Visual.appendChild(be);const Ue=document.createElement("div");Ue.style.cssText="margin-bottom: 15px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 5px;";const Fe=document.createElement("div");Fe.innerHTML='<span style="color: #888;">FPS:</span> <span id="hud-fps" style="color: #0f0;">--</span>',Fe.style.cssText="margin-bottom: 5px; font-size: 12px;",Ue.appendChild(Fe);const Le=document.createElement("div");Le.innerHTML='<span style="color: #888;">Draw Calls:</span> <span id="hud-drawcalls" style="color: #0ff;">--</span>',Le.style.cssText="font-size: 12px;",Ue.appendChild(Le),l.Visual.appendChild(Ue);const ot=et("Enable Particles",!0,x=>{ee({particlesEnabled:x})});l.Visual.appendChild(ot);const pt=Ee("Particle Density",5e3,1e3,1e4,100,x=>{ee({particlesCount:x})});pt.title="Number of particles (1000-10000, requires reinit)",l.Visual.appendChild(pt);const dt=document.createElement("div");dt.style.cssText="margin-bottom: 10px;";const Ut=document.createElement("label");Ut.textContent="Layout",Ut.style.cssText="display: block; margin-bottom: 5px; color: #ccc; font-size: 12px;",dt.appendChild(Ut);const nt=document.createElement("select");nt.id="particle-layout-dropdown",nt.style.cssText="width: 100%; padding: 5px; background: #333; color: white; border: 1px solid #555; border-radius: 3px;",["cube","sphere","torus","vesselPlanes"].forEach(x=>{const H=document.createElement("option");H.value=x,x==="vesselPlanes"?H.textContent="Vessel Planes":H.textContent=x.charAt(0).toUpperCase()+x.slice(1),H.selected=x==="cube",nt.appendChild(H)}),nt.addEventListener("change",()=>{ee({particlesLayout:nt.value})}),dt.appendChild(nt),l.Visual.appendChild(dt);const Ae=document.createElement("h4");Ae.textContent="✨ Particle Polish",Ae.style.cssText="margin: 15px 0 10px 0; color: #ffff00; font-size: 12px;",l.Visual.appendChild(Ae);const Nt=Ee("Hue Shift",0,0,360,5,x=>{ee({particlesHue:x})});l.Visual.appendChild(Nt);const rt=Ee("Size",.5,.05,2,.05,x=>{ee({particlesSize:x})});rt.title="True 3D world-unit size (0.05 = tiny, 2.0 = large)",l.Visual.appendChild(rt);const ln=Ee("Opacity",.5,0,1,.05,x=>{ee({particlesOpacity:x})});l.Visual.appendChild(ln);const $i=et("Organic Motion",!1,x=>{ee({particlesOrganicMotion:x})});l.Visual.appendChild($i);const yn=Ee("Organic Strength",.2,0,1,.05,x=>{ee({particlesOrganicStrength:x})});yn.title="Controls wander strength (0 = clean orbit, 1 = chaotic swarm)",l.Visual.appendChild(yn);const $s=et("Audio-Reactive Hue",!1,x=>{ee({particlesAudioReactiveHue:x})});l.Visual.appendChild($s);const St=Ee("Audio Gain",2,.5,5,.1,x=>{ee({particlesAudioGain:x})});St.title="Amplifies per-particle audio hue variation",l.Visual.appendChild(St);const cn=Ee("Orbital Speed",.05,.01,2,.01,x=>{ee({particlesVelocity:x})});cn.title="Controls particle orbital speed around vessel (min: 0.01)",l.Visual.appendChild(cn);const Xs=Ee("Motion Smoothness",.5,0,1,.1,x=>{ee({particlesMotionSmoothness:x})});l.Visual.appendChild(Xs);const Ht=Ee("Density (Debug)",2e3,500,4e3,100,x=>{d.particleDensity=x,console.log(`🎛️ Particle density: ${x}`)});Ht.title="Particle density (500-4000)",l.Visual.appendChild(Ht);const Xi=Ee("Size (Debug)",.1,.05,1,.05,x=>{d.particleSize=x,console.log(`🎛️ Particle size: ${x}`)});Xi.title="Particle size (0.05-1.0)",l.Visual.appendChild(Xi);const Do=Ee("Motion Strength",.5,0,1,.1,x=>{d.particleMotionStrength=x,console.log(`🎛️ Particle motion strength: ${x}`)});Do.title="Global drift strength multiplier",l.Visual.appendChild(Do);const qs=et("Audio Jitter",!0,x=>{d.useAudioJitter=x,console.log(`🎛️ Audio jitter: ${x?"ON":"OFF"}`)});qs.title="Add velocity bursts on FFT peaks",l.Visual.appendChild(qs);const ia=document.createElement("h4");ia.textContent="🍕 Emoji Particles",ia.style.cssText="margin: 15px 0 10px 0; color: #00ffff; font-size: 12px;",l.Visual.appendChild(ia);const Sn=document.createElement("select");Sn.id="emojiPicker",Sn.style.cssText="margin-left: 8px; padding: 2px 4px; background: #1a1a1a; color: #00ffff; border: 1px solid #333; border-radius: 3px;",["🍕","🌶️","🍄","⭐","🎵","💫"].forEach(x=>{const H=document.createElement("option");H.value=x,H.textContent=x,Sn.appendChild(H)}),Sn.disabled=!0;const yc=et("Enable Emoji Particles",!1,async x=>{if(d.useEmojiParticles=x,x){const{getParticleSystemInstance:H}=await we(async()=>{const{getParticleSystemInstance:Se}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:Se}},void 0),{scene:de}=await we(async()=>{const{scene:Se}=await Promise.resolve().then(()=>As);return{scene:Se}},void 0),te=H();if(te&&te.points&&(de.remove(te.points),console.log("✨ Default ParticleSystem disabled")),!window.emojiParticles){const{EmojiParticles:Se}=await we(async()=>{const{EmojiParticles:Ze}=await Promise.resolve().then(()=>yt);return{EmojiParticles:Ze}},void 0);window.emojiParticles=new Se(de,500,Sn.value),console.log(`🍕 EmojiParticles enabled with ${Sn.value}`)}Sn.disabled=!1}else{const{getParticleSystemInstance:H}=await we(async()=>{const{getParticleSystemInstance:Se}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:Se}},void 0),{scene:de}=await we(async()=>{const{scene:Se}=await Promise.resolve().then(()=>As);return{scene:Se}},void 0),te=H();te&&te.points&&(de.add(te.points),console.log("✨ Default ParticleSystem restored")),window.emojiParticles&&(window.emojiParticles.dispose(),window.emojiParticles=null,console.log("🍕 EmojiParticles disabled")),Sn.disabled=!0}});yc.title="Toggle audio-reactive emoji particles",Sn.addEventListener("change",x=>{window.emojiParticles&&window.emojiParticles.swapEmoji(x.target.value)});const Uo=document.createElement("div");Uo.style.cssText="display: flex; align-items: center; margin-bottom: 8px;",Uo.appendChild(yc),Uo.appendChild(Sn),l.Visual.appendChild(Uo);const Sc=Ee("Emoji Count",50,10,2e3,50,async x=>{if(window.emojiParticles){const H=window.emojiParticles.emoji,de=window.emojiParticles.layout,te=window.emojiParticles.audioReactivity,{scene:Se}=await we(async()=>{const{scene:mt}=await Promise.resolve().then(()=>As);return{scene:mt}},void 0);window.emojiParticles.dispose();const{EmojiParticles:Ze}=await we(async()=>{const{EmojiParticles:mt}=await Promise.resolve().then(()=>yt);return{EmojiParticles:mt}},void 0);window.emojiParticles=new Ze(Se,x,H),window.emojiParticles.setLayout(de),window.emojiParticles.setAudioReactivity(te),console.log(`🍕 Emoji instanced count set to ${x}`)}});Sc.title="Number of emoji particles (10-2000, instanced rendering)",l.Visual.appendChild(Sc);const sa=document.createElement("label");sa.textContent="Layout",sa.style.cssText="display: block; margin-top: 8px; margin-bottom: 4px; color: #999; font-size: 11px;",l.Visual.appendChild(sa);const Ys=document.createElement("select");Ys.id="emojiLayout",Ys.style.cssText="width: 100%; padding: 4px; background: #1a1a1a; color: #00ffff; border: 1px solid #333; border-radius: 3px;",[{value:"cube",label:"Cube"},{value:"sphere",label:"Sphere"},{value:"orbit",label:"Orbit"},{value:"random",label:"Random"},{value:"spiral",label:"Spiral 🌀"},{value:"wave",label:"Wave Grid 🌊"},{value:"burst",label:"Burst 💥"}].forEach(x=>{const H=document.createElement("option");H.value=x.value,H.textContent=x.label,Ys.appendChild(H)}),Ys.addEventListener("change",x=>{window.emojiParticles&&window.emojiParticles.setLayout(x.target.value)}),l.Visual.appendChild(Ys);const Mc=Ee("Audio Reactivity",1,0,2,.1,x=>{window.emojiParticles&&window.emojiParticles.setAudioReactivity(x)});Mc.title="Multiplier for audio-reactive scale/rotation (0-2x)",l.Visual.appendChild(Mc);const bc=et("Link to Morph/Audio",!1,x=>{window.emojiParticles&&window.emojiParticles.setSignalLinking(x)});bc.title="Link emoji particles to morph weights and audio bands (bass→expansion, mid→rotation, treble→sparkle)",l.Visual.appendChild(bc);const oa=document.createElement("label");oa.textContent="Emoji Set",oa.style.cssText="display: block; margin-top: 8px; margin-bottom: 4px; color: #999; font-size: 11px;",l.Visual.appendChild(oa);const Ks=document.createElement("select");Ks.id="emojiSet",Ks.style.cssText="width: 100%; padding: 4px; background: #1a1a1a; color: #00ffff; border: 1px solid #333; border-radius: 3px;",[{value:"",label:"Single Emoji"},{value:"pizza",label:"🍕 Pizza"},{value:"cosmos",label:"⭐ Cosmos"},{value:"myth",label:"🦁 Myth"},{value:"ocean",label:"🌊 Ocean"},{value:"nature",label:"🌲 Nature"},{value:"tech",label:"💻 Tech"}].forEach(x=>{const H=document.createElement("option");H.value=x.value,H.textContent=x.label,Ks.appendChild(H)}),Ks.addEventListener("change",x=>{window.emojiParticles&&x.target.value&&window.emojiParticles.loadEmojiSet(x.target.value)}),l.Visual.appendChild(Ks);const Ec=et("Auto-Cycle Set",!1,x=>{window.emojiParticles&&window.emojiParticles.setAutoCycle(x,4e3)});Ec.title="Automatically cycle through emojis in the selected set (4s interval)",l.Visual.appendChild(Ec);const wc=et("Story Mode",!1,x=>{if(window.emojiParticles){const H=["pizza","cosmos","myth"];window.emojiParticles.setStoryMode(x,H)}});wc.title="Enable narrative sequence: Pizza → Cosmos → Myth (use CC31 or manual advance)",l.Visual.appendChild(wc);const ra=document.createElement("h4");ra.textContent="🥁 Beat Sync",ra.style.cssText="margin: 15px 0 10px 0; color: #00ffff; font-size: 12px;",l.Visual.appendChild(ra);const Cc=Ee("BPM",120,60,200,1,x=>{window.emojiParticles&&window.emojiParticles.setBPM(x)});Cc.title="Tempo in beats per minute for pulse/sequencer sync",l.Visual.appendChild(Cc);const Tc=et("Enable Beat Sync",!1,x=>{window.emojiParticles&&window.emojiParticles.setBeatSync(x)});Tc.title="Pulse emojis on beat (scale/opacity)",l.Visual.appendChild(Tc);const aa=document.createElement("label");aa.textContent="Subdivision",aa.style.cssText="display: block; margin-top: 8px; margin-bottom: 4px; color: #999; font-size: 11px;",l.Visual.appendChild(aa);const No=document.createElement("select");No.style.cssText="width: 100%; padding: 4px; background: #1a1a1a; color: #00ffff; border: 1px solid #333; border-radius: 3px;",[{value:4,label:"Quarter Notes (1/4)"},{value:8,label:"Eighth Notes (1/8)"},{value:16,label:"Sixteenth Notes (1/16)"}].forEach(x=>{const H=document.createElement("option");H.value=x.value,H.textContent=x.label,No.appendChild(H)}),No.addEventListener("change",x=>{window.emojiParticles&&window.emojiParticles.setSubdivision(parseInt(x.target.value))}),l.Visual.appendChild(No);const Ac=et("Onset Detection",!1,x=>{window.emojiParticles&&window.emojiParticles.setOnsetDetection(x)});Ac.title="Auto-detect beats from audio RMS spikes",l.Visual.appendChild(Ac);const Rc=et("Sequencer Mode",!1,x=>{if(window.emojiParticles){const H=["🍕","🌶️","🍄","🧄"];window.emojiParticles.setSequencer(x,H)}});Rc.title="Step through emoji sequence on each beat (🍕 → 🌶️ → 🍄 → 🧄)",l.Visual.appendChild(Rc);const la=document.createElement("h4");la.textContent="🎨 Emoji Mixer",la.style.cssText="margin: 15px 0 10px 0; color: #00ffff; font-size: 12px;",l.Visual.appendChild(la);const mi=document.createElement("div");mi.id="emojiStreamsContainer",mi.style.cssText="display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px;",l.Visual.appendChild(mi);function Pc(x="🍕",H=100,de=!0){const te=document.createElement("div");te.style.cssText="display: flex; align-items: center; gap: 6px; padding: 4px; background: rgba(0,0,0,0.3); border-radius: 4px;";const Se=document.createElement("input");Se.type="text",Se.value=x,Se.maxLength=2,Se.style.cssText="width: 40px; font-size: 20px; text-align: center; background: rgba(255,255,255,0.1); border: 1px solid #00ffff; color: white; padding: 2px;";const Ze=document.createElement("input");Ze.type="range",Ze.min=10,Ze.max=500,Ze.value=H,Ze.style.cssText="flex: 1; min-width: 80px;";const mt=document.createElement("span");mt.textContent=H,mt.style.cssText="font-size: 10px; color: #00ffff; min-width: 30px;";const Et=document.createElement("input");Et.type="checkbox",Et.checked=de,Et.style.cssText="width: 16px; height: 16px;";const Ft=document.createElement("button");return Ft.textContent="✕",Ft.style.cssText="width: 24px; height: 24px; background: rgba(255,0,0,0.3); border: 1px solid red; color: red; cursor: pointer; border-radius: 4px; font-size: 12px;",Se.addEventListener("input",()=>{const wt=te.dataset.emoji,Dn=Se.value;wt&&Dn&&wt!==Dn&&window.emojiStreamManager&&(window.emojiStreamManager.removeStream(wt),window.emojiStreamManager.addStream(Dn,parseInt(Ze.value),Et.checked),te.dataset.emoji=Dn,Js())}),Ze.addEventListener("input",()=>{mt.textContent=Ze.value,window.emojiStreamManager&&te.dataset.emoji&&(window.emojiStreamManager.updateStreamCount(te.dataset.emoji,parseInt(Ze.value)),Js())}),Et.addEventListener("change",()=>{window.emojiStreamManager&&te.dataset.emoji&&(window.emojiStreamManager.toggleStream(te.dataset.emoji,Et.checked),Js())}),Ft.addEventListener("click",()=>{window.emojiStreamManager&&te.dataset.emoji&&(window.emojiStreamManager.removeStream(te.dataset.emoji),te.remove(),Js(),window.rebuildSequencerGrid&&window.rebuildSequencerGrid())}),te.dataset.emoji=x,te.appendChild(Se),te.appendChild(Ze),te.appendChild(mt),te.appendChild(Et),te.appendChild(Ft),te}function Js(){window.emojiStreamManager&&(d.emojiStreams=window.emojiStreamManager.getStreamsArray())}const Fo=document.createElement("button");Fo.textContent="+ Add Emoji Stream",Fo.style.cssText="padding: 8px; background: rgba(0,255,255,0.2); border: 1px solid #00ffff; color: #00ffff; cursor: pointer; border-radius: 4px; font-size: 11px; margin-bottom: 10px;",Fo.addEventListener("click",()=>{const x=["🍕","🌶️","🍄","⭐","🌙","🦁","🌊","🌲","💻","🔥"],H=Array.from(mi.querySelectorAll("[data-emoji]")).map(Se=>Se.dataset.emoji),de=x.find(Se=>!H.includes(Se))||"🎨",te=Pc(de,100,!0);mi.appendChild(te),window.emojiStreamManager&&(window.emojiStreamManager.addStream(de,100,!0),Js(),window.rebuildSequencerGrid&&window.rebuildSequencerGrid())}),l.Visual.appendChild(Fo);function Lc(){mi.innerHTML="",d.emojiStreams&&d.emojiStreams.length>0&&d.emojiStreams.forEach(({emoji:x,count:H,enabled:de})=>{const te=Pc(x,H,de);mi.appendChild(te)})}window.rebuildEmojiMixerUI=Lc,Lc();const ca=document.createElement("h4");ca.textContent="🎶 Emoji Sequencer",ca.style.cssText="margin: 15px 0 10px 0; color: #00ffff; font-size: 12px;",l.Visual.appendChild(ca);const Ic=et("Enable Sequencer",!1,x=>{window.emojiSequencer&&(window.emojiSequencer.setEnabled(x),d.emojiSequencer.enabled=x)});Ic.title="Enable beat-based emoji sequencing",l.Visual.appendChild(Ic);const Dc=Ee("Sequencer BPM",120,60,200,1,x=>{window.emojiSequencer&&(window.emojiSequencer.setBPM(x),d.emojiSequencer.bpm=x)});Dc.title="Beats per minute for sequencer",l.Visual.appendChild(Dc);const Uc=Ee("Timeline Length",16,4,32,1,x=>{window.emojiSequencer&&(window.emojiSequencer.setTimelineLength(x),d.emojiSequencer.timelineLength=x,ha())});Uc.title="Number of beats in the timeline",l.Visual.appendChild(Uc);const da=document.createElement("div");da.id="timelineGridContainer",da.style.cssText="margin: 10px 0; padding: 8px; background: rgba(0,0,0,0.4); border-radius: 4px; overflow-x: auto; max-height: 300px; overflow-y: auto;",l.Visual.appendChild(da);function ha(){if(!window.emojiSequencer)return;const x=document.getElementById("timelineGridContainer");if(!x)return;x.innerHTML="";const H=Array.from(window.emojiStreamManager.streams.keys());if(H.length===0){x.innerHTML='<div style="color: #888; font-size: 11px; padding: 10px;">Add emoji streams to use sequencer</div>';return}const de=window.emojiSequencer.timelineLength,te=document.createElement("div");te.style.cssText="display: flex; margin-bottom: 4px; padding-left: 40px;";for(let Se=0;Se<de;Se++){const Ze=document.createElement("div");Ze.textContent=Se+1,Ze.style.cssText="width: 24px; height: 20px; display: flex; align-items: center; justify-content: center; font-size: 9px; color: #666; margin-right: 2px;",te.appendChild(Ze)}x.appendChild(te),H.forEach(Se=>{const Ze=document.createElement("div");Ze.style.cssText="display: flex; align-items: center; margin-bottom: 4px;";const mt=document.createElement("div");mt.textContent=Se,mt.style.cssText="width: 30px; font-size: 18px; text-align: center; margin-right: 10px;",Ze.appendChild(mt);const Et=window.emojiSequencer.getPattern(Se);for(let Ft=0;Ft<de;Ft++){const wt=document.createElement("button");wt.textContent="●",wt.dataset.emoji=Se,wt.dataset.beat=Ft,wt.style.cssText=`
          width: 24px;
          height: 24px;
          margin-right: 2px;
          border: 1px solid #00ffff;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.1s;
        `;const Dn=Et[Ft]===1;wt.style.background=Dn?"rgba(0,255,255,0.6)":"rgba(0,0,0,0.3)",wt.style.color=Dn?"#000":"#00ffff",wt.addEventListener("click",()=>{const Go=window.emojiSequencer.toggleBeat(Se,Ft);wt.style.background=Go?"rgba(0,255,255,0.6)":"rgba(0,0,0,0.3)",wt.style.color=Go?"#000":"#00ffff",d.emojiSequencer.patterns[Se]=window.emojiSequencer.getPattern(Se)}),Ze.appendChild(wt)}x.appendChild(Ze)})}window.rebuildSequencerGrid=ha,ha();const Oo=document.createElement("button");Oo.textContent="↺ Reset to Beat 1",Oo.style.cssText="padding: 6px 12px; background: rgba(0,255,255,0.2); border: 1px solid #00ffff; color: #00ffff; cursor: pointer; border-radius: 4px; font-size: 11px; margin-top: 8px;",Oo.addEventListener("click",()=>{window.emojiSequencer&&window.emojiSequencer.reset()}),l.Visual.appendChild(Oo);const ua=document.createElement("h4");ua.textContent="💾 Pattern Banks",ua.style.cssText="margin: 15px 0 10px 0; color: #00ffff; font-size: 12px;",l.Visual.appendChild(ua);const fa=document.createElement("div");fa.style.cssText="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 10px;";const Nc=[];for(let x=0;x<8;x++){const H=document.createElement("button");H.textContent=`${x+1}`,H.dataset.bankIndex=x,H.style.cssText=`
      padding: 12px 8px;
      background: rgba(0,0,0,0.4);
      border: 1px solid #666;
      color: #666;
      cursor: pointer;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      transition: all 0.2s;
      position: relative;
    `,H.addEventListener("click",()=>{window.emojiBankManager&&window.emojiBankManager.loadBank(x)&&(d.currentBank=x,window.rebuildEmojiMixerUI&&window.rebuildEmojiMixerUI(),window.rebuildSequencerGrid&&window.rebuildSequencerGrid(),qi())}),H.addEventListener("contextmenu",de=>{de.preventDefault(),window.emojiBankManager&&(window.emojiBankManager.saveBank(x),d.emojiBanks=window.emojiBankManager.saveBanksToState(),qi())}),Nc.push(H),fa.appendChild(H)}l.Visual.appendChild(fa);function qi(){window.emojiBankManager&&Nc.forEach((x,H)=>{const de=window.emojiBankManager.isBankEmpty(H),te=d.currentBank===H;if(de)x.style.background="rgba(0,0,0,0.4)",x.style.borderColor="#666",x.style.color="#666",x.title=`Bank ${H+1}: Empty
Left-click to load
Right-click to save current pattern`;else{const Se=window.emojiBankManager.getBank(H),Ze=Se.streams.map(mt=>mt.emoji).join("");x.style.background=te?"rgba(0,255,255,0.4)":"rgba(0,255,0,0.2)",x.style.borderColor=te?"#00ffff":"#00ff00",x.style.color=te?"#00ffff":"#00ff00",x.title=`Bank ${H+1}: ${Se.name}
${Ze}
Left-click to load
Right-click to save current pattern`}})}window.updateBankButtonStates=qi,qi();const Bo=document.createElement("div");Bo.style.cssText="display: flex; gap: 6px; margin-top: 8px;";const Zs=document.createElement("button");Zs.textContent="💾 Save to Selected",Zs.style.cssText="flex: 1; padding: 6px; background: rgba(0,255,0,0.2); border: 1px solid #00ff00; color: #00ff00; cursor: pointer; border-radius: 4px; font-size: 11px;",Zs.addEventListener("click",()=>{d.currentBank!==null&&window.emojiBankManager?(window.emojiBankManager.saveBank(d.currentBank),d.emojiBanks=window.emojiBankManager.saveBanksToState(),qi()):console.warn("💾 No bank selected")}),Zs.title="Save current emoji mix + sequencer to selected bank",Bo.appendChild(Zs);const Qs=document.createElement("button");Qs.textContent="✕ Clear Selected",Qs.style.cssText="flex: 1; padding: 6px; background: rgba(255,0,0,0.2); border: 1px solid red; color: red; cursor: pointer; border-radius: 4px; font-size: 11px;",Qs.addEventListener("click",()=>{d.currentBank!==null&&window.emojiBankManager&&(window.emojiBankManager.clearBank(d.currentBank),d.emojiBanks=window.emojiBankManager.saveBanksToState(),qi())}),Qs.title="Clear selected bank",Bo.appendChild(Qs),l.Visual.appendChild(Bo);const pa=document.createElement("div");pa.textContent="Left-click: Load | Right-click: Quick Save",pa.style.cssText="font-size: 10px; color: #888; margin-top: 6px; text-align: center;",l.Visual.appendChild(pa);const ma=document.createElement("h4");ma.textContent="🌐 Emoji Physics",ma.style.cssText="margin: 15px 0 10px 0; color: #00ffff; font-size: 12px;",l.Visual.appendChild(ma);const ga=document.createElement("label");ga.textContent="Physics Mode",ga.style.cssText="display: block; font-size: 11px; margin-bottom: 4px; color: #00ffff;",l.Visual.appendChild(ga);const eo=document.createElement("select");eo.style.cssText="width: 100%; padding: 6px; background: rgba(0,0,0,0.5); border: 1px solid #00ffff; color: #00ffff; border-radius: 4px; margin-bottom: 10px; font-size: 11px;",[{value:"none",label:"None (Static)"},{value:"gravity",label:"Gravity (Fall Down)"},{value:"orbit",label:"Orbit Attraction (Pull to Center)"},{value:"repulsion",label:"Repulsion (Scatter Away)"}].forEach(x=>{const H=document.createElement("option");H.value=x.value,H.textContent=x.label,eo.appendChild(H)}),eo.addEventListener("change",()=>{const x=eo.value;d.emojiPhysics.mode=x,window.emojiStreamManager&&window.emojiStreamManager.setPhysicsMode(x),window.emojiParticles&&window.emojiParticles.setPhysicsMode(x),console.log(`🌐 Emoji physics mode: ${x}`)}),l.Visual.appendChild(eo);const Fc=et("Enable Collisions",!0,x=>{d.emojiPhysics.collisionEnabled=x});Fc.title="Emojis bounce off each other gently",l.Visual.appendChild(Fc);const Oc=et("Audio Modulation",!0,x=>{d.emojiPhysics.audioModulation=x});Oc.title="Gravity affected by bass, repulsion by treble",l.Visual.appendChild(Oc);const Bc=et("Mouse Swirl",!1,x=>{d.emojiPhysics.mouseInteraction=x});Bc.title="Drag mouse to create swirl forces",l.Visual.appendChild(Bc);const zc=Ee("Gravity Strength",.01,.001,.05,.001,x=>{d.emojiPhysics.gravityStrength=x});zc.title="Downward acceleration force",l.Visual.appendChild(zc);const kc=Ee("Orbit Strength",.005,.001,.02,.001,x=>{d.emojiPhysics.orbitStrength=x});kc.title="Attraction force toward center",l.Visual.appendChild(kc);const Vc=Ee("Repulsion Strength",.02,.001,.1,.001,x=>{d.emojiPhysics.repulsionStrength=x});Vc.title="Force pushing emojis away from center",l.Visual.appendChild(Vc);const xa=document.createElement("h4");xa.textContent="⚡ Emoji Fusion & Clusters",xa.style.cssText="margin: 15px 0 10px 0; color: #ff00ff; font-size: 12px;",l.Visual.appendChild(xa);const Hc=et("Enable Fusion",!1,x=>{d.emojiFusion.enabled=x,console.log(x?`⚡ Fusion enabled (threshold ${d.emojiFusion.threshold.toFixed(1)})`:"⚡ Fusion disabled")});Hc.title="Particles merge into clusters when overlapping",l.Visual.appendChild(Hc);const Gc=Ee("Fusion Threshold",1,.1,2,.1,x=>{d.emojiFusion.threshold=x,console.log(`⚡ Fusion threshold = ${x.toFixed(1)}`)});Gc.title="Distance threshold for fusion (smaller = more fusions)",l.Visual.appendChild(Gc);const _a=document.createElement("h4");_a.textContent="🌌 Emoji Constellations",_a.style.cssText="margin: 15px 0 10px 0; color: #ffaa00; font-size: 12px;",l.Visual.appendChild(_a);const va=document.createElement("label");va.textContent="Constellation Pattern",va.style.cssText="display: block; font-size: 11px; margin-bottom: 4px; color: #ffaa00;",l.Visual.appendChild(va);const Yi=document.createElement("select");Yi.style.cssText="width: 100%; padding: 6px; background: rgba(0,0,0,0.5); border: 1px solid #ffaa00; color: #ffaa00; border-radius: 4px; margin-bottom: 10px; font-size: 11px;",[{value:"None",label:"None (Free Motion)"},{value:"Line",label:"Line"},{value:"Triangle",label:"Triangle"},{value:"Star",label:"5-Point Star ⭐"},{value:"Spiral",label:"Golden Spiral 🌀"},{value:"CircleOf5ths",label:"Circle of 5ths 🎵"},{value:"Platonic",label:"Platonic Solid (Icosahedron)"},{value:"Custom",label:"Custom Pattern (JSON)"}].forEach(x=>{const H=document.createElement("option");H.value=x.value,H.textContent=x.label,Yi.appendChild(H)}),Yi.addEventListener("change",()=>{const x=Yi.value;d.emojiConstellations.type=x,d.emojiConstellations.rotation=0,console.log(`🌌 Emoji constellation set: ${x}`)}),l.Visual.appendChild(Yi);const Wc=Ee("Constellation Scale",5,1,15,.5,x=>{d.emojiConstellations.scale=x,console.log(`🌌 Constellation scale: ${x.toFixed(1)}`)});Wc.title="Size of the constellation pattern",l.Visual.appendChild(Wc);const jc=Ee("Rotation Speed",.01,0,.1,.005,x=>{d.emojiConstellations.rotationSpeed=x,console.log(`🌌 Rotation speed: ${x.toFixed(3)}`)});jc.title="Speed of constellation rotation",l.Visual.appendChild(jc);const $c=et("Audio Sync Rotation",!0,x=>{d.emojiConstellations.audioSync=x,console.log(`🌌 Audio sync: ${x?"ON":"OFF"}`)});$c.title="Rotation modulated by audio level",l.Visual.appendChild($c);const Xc=et("Beat Sync Pulse",!1,x=>{d.emojiConstellations.beatSync=x,console.log(`🌌 Beat sync pulse: ${x?"ON":"OFF"}`)});Xc.title="Constellation pulses with sequencer beats",l.Visual.appendChild(Xc);const ya=document.createElement("label");ya.textContent="Upload Custom Pattern (JSON)",ya.style.cssText="display: block; font-size: 11px; margin-top: 10px; margin-bottom: 4px; color: #ffaa00;",l.Visual.appendChild(ya);const to=document.createElement("input");to.type="file",to.accept=".json",to.style.cssText="width: 100%; padding: 4px; background: rgba(0,0,0,0.5); border: 1px solid #ffaa00; color: #ffaa00; border-radius: 4px; margin-bottom: 10px; font-size: 11px;",to.addEventListener("change",async x=>{const H=x.target.files[0];if(H)try{const de=await H.text(),te=JSON.parse(de);if(!te.positions||!Array.isArray(te.positions)){console.error("❌ Invalid pattern format. Expected { positions: [{x, y, z?}, ...] }");return}d.emojiConstellations.customPattern=te,d.emojiConstellations.type="Custom",Yi.value="Custom",console.log(`🌌 Loaded custom constellation → ${H.name}`),console.log(`   ${te.positions.length} positions loaded`)}catch(de){console.error("❌ Failed to load pattern JSON:",de.message)}}),l.Visual.appendChild(to);const Sa=document.createElement("h4");Sa.textContent="🌀 Emoji Mandalas",Sa.style.cssText="margin: 15px 0 10px 0; color: #ff66ff; font-size: 12px;",l.Visual.appendChild(Sa);const qc=et("Enable Mandala Mode",!1,x=>{d.mandala.enabled=x,d.emojiMandala.enabled=x,ee({mandalaEnabled:x}),console.log(`🎛️ Mandala: ${x?"ON":"OFF"}`)});qc.title="Radial symmetry mandala pattern",l.Visual.appendChild(qc);const Yc=Ee("Rings",6,3,12,1,x=>{d.mandala.ringCount=x,d.emojiMandala.rings=x,ee({mandalaRings:x}),console.log(`🎛️ Mandala rings: ${x}`)});Yc.title="Number of concentric rings (3-12)",l.Visual.appendChild(Yc);const Ma=document.createElement("label");Ma.textContent="Layout Mode",Ma.style.cssText="display: block; font-size: 11px; margin-bottom: 4px; color: #ff66ff;",l.Visual.appendChild(Ma);const Ki=document.createElement("select");Ki.style.cssText="width: 100%; padding: 6px; background: rgba(0,0,0,0.5); border: 1px solid #ff66ff; color: #ff66ff; border-radius: 4px; margin-bottom: 10px; font-size: 11px;",[{value:"radial",label:"⭕ Radial (Concentric)"},{value:"spiral",label:"🌀 Spiral (Fibonacci)"},{value:"grid",label:"🔲 Grid (Lattice)"}].forEach(x=>{const H=document.createElement("option");H.value=x.value,H.textContent=x.label,x.value==="radial"&&(H.selected=!0),Ki.appendChild(H)}),Ki.addEventListener("change",()=>{const x=Ki.value;ee({mandala:{layoutMode:x}});const H=x==="spiral"?"🌀":x==="grid"?"🔲":"⭕";console.log(`📟 HUD → Mandala layout set to ${x.charAt(0).toUpperCase()+x.slice(1)} ${H}`)}),Ki.title="Mandala geometry layout pattern",l.Visual.appendChild(Ki);const Kc=Ee("Symmetry",6,2,12,1,x=>{d.mandala.symmetry=x,d.emojiMandala.symmetry=x,ee({mandalaSymmetry:x}),console.log(`🎛️ Mandala symmetry: ${x}`)});Kc.title="Symmetry fold count (2-12 spokes)",l.Visual.appendChild(Kc);const Jc=Ee("Rotation Speed",.02,0,.1,.005,x=>{ee({mandala:{rotationSpeed:x}})});Jc.title="Base rotation speed",l.Visual.appendChild(Jc);const Zc=et("Audio Speed Boost",!0,x=>{ee({mandala:{audioModulation:x}})});Zc.title="Audio increases rotation speed",l.Visual.appendChild(Zc);const Qc=et("Layered Audio (Bass/Mid/Treble)",!0,x=>{ee({mandala:{layeredAudio:x}})});Qc.title="Inner rings→bass, middle→mids, outer→treble",l.Visual.appendChild(Qc);const ed=et("Audio-Reactive Mandala",!0,x=>{ee({mandala:{mandalaAudioReactive:x}}),console.log(`📟 HUD → Mandala audioReactive = ${x?"ON":"OFF"}`)});ed.title="Mandala pulses and expands with audio",l.Visual.appendChild(ed);const td=Ee("Mandala Sensitivity",1,0,2,.1,x=>{ee({mandala:{mandalaSensitivity:x}}),console.log(`📟 HUD → Mandala sensitivity = ${x.toFixed(1)}`)});td.title="Audio reactivity strength (0-200%)",l.Visual.appendChild(td);const ba=document.createElement("label");ba.textContent="Mandala Emoji",ba.style.cssText="display: block; font-size: 11px; margin-top: 10px; margin-bottom: 6px; color: #ff66ff;",l.Visual.appendChild(ba);const Ea=document.createElement("div");Ea.style.cssText="display: flex; gap: 8px; margin-bottom: 10px; padding: 8px; background: rgba(0,0,0,0.3); border-radius: 4px;",["🍕","🌶️","🍄","⭐"].forEach((x,H)=>{const de=document.createElement("label");de.style.cssText="display: flex; align-items: center; gap: 4px; cursor: pointer; padding: 4px 8px; border-radius: 4px; background: rgba(255,255,255,0.1); transition: background 0.2s;";const te=document.createElement("input");te.type="radio",te.name="mandalaEmoji",te.value=x,te.checked=H===0,te.style.cssText="cursor: pointer;";const Se=document.createElement("span");Se.textContent=x,Se.style.cssText="font-size: 20px;",te.addEventListener("change",()=>{te.checked&&(ee({mandala:{emoji:x}}),console.log(`📟 HUD → Mandala emoji set to ${x}`))}),de.appendChild(te),de.appendChild(Se),Ea.appendChild(de)}),l.Visual.appendChild(Ea);const wa=document.createElement("label");wa.textContent="Ring Emoji Layout (center → outer)",wa.style.cssText="display: block; font-size: 11px; margin-top: 10px; margin-bottom: 4px; color: #ff66ff;",l.Visual.appendChild(wa);const gi=document.createElement("input");gi.type="text",gi.value=d.emojiMandala.layout.join(" "),gi.placeholder="🍕 🌶️ 🍄",gi.style.cssText="width: 100%; padding: 6px; background: rgba(0,0,0,0.5); border: 1px solid #ff66ff; color: #ff66ff; border-radius: 4px; margin-bottom: 10px; font-size: 14px;",gi.addEventListener("input",x=>{const H=x.target.value.split(/\s+/).filter(de=>de.length>0);d.emojiMandala.layout=H,console.log(`🌀 Mandala layout updated: ${H.join(" → ")}`)}),gi.title="Space-separated emojis for each ring",l.Visual.appendChild(gi);const Ca=document.createElement("h4");Ca.textContent="🎼 Musical Scale Mode",Ca.style.cssText="margin: 15px 0 10px 0; color: #ffdd66; font-size: 12px;",l.Visual.appendChild(Ca);const nd=et("Enable Musical Mode",!1,x=>{ee({mandala:{musicalMode:x}})});nd.title="Emojis arranged by musical scale intervals",l.Visual.appendChild(nd);const Ta=document.createElement("label");Ta.textContent="Scale/Mode",Ta.style.cssText="display: block; font-size: 11px; margin-bottom: 4px; color: #ffdd66;",l.Visual.appendChild(Ta);const no=document.createElement("select");no.style.cssText="width: 100%; padding: 6px; background: rgba(0,0,0,0.5); border: 1px solid #ffdd66; color: #ffdd66; border-radius: 4px; margin-bottom: 10px; font-size: 11px;",["Major","Minor","Pentatonic","Dorian","Phrygian","Lydian","Mixolydian","Chromatic"].forEach(x=>{const H=document.createElement("option");H.value=x,H.textContent=x,x==="Major"&&(H.selected=!0),no.appendChild(H)}),no.addEventListener("change",()=>{const x=no.value;ee({mandala:{scale:x,mode:x}})}),l.Visual.appendChild(no);const id=Ee("Root Note (MIDI)",60,48,72,1,x=>{d.emojiMandala.rootNote=x;const de=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"][x%12],te=Math.floor(x/12)-1;console.log(`🎼 Root note: ${de}${te} (MIDI ${x})`)});id.title="MIDI root note for scale (C4=60)",l.Visual.appendChild(id);const Aa=document.createElement("h4");Aa.textContent="🎛️ Performance Controls",Aa.style.cssText="margin: 15px 0 10px 0; color: #ff9944; font-size: 12px;",l.Visual.appendChild(Aa);const sd=et("Enable Performance Mode",!1,x=>{ee({mandala:{performanceMode:x}})});sd.title="Live manipulation controls enabled",l.Visual.appendChild(sd);const od=et("Differential Ring Rotation",!0,x=>{d.emojiMandala.differentialRotation=x,console.log(`🎛️ Differential rotation: ${x?"ON (each ring independent)":"OFF (unified)"}`)});od.title="Each ring rotates at different speed",l.Visual.appendChild(od);const rd=Ee("Ring Count (Performance)",3,1,8,1,x=>{d.emojiMandala.rings=x,console.log(`🎛️ Mandala rings: ${x}`)});rd.title="Number of rings (1-8 in performance mode)",l.Visual.appendChild(rd);const ad=Ee("Symmetry (Performance)",6,2,12,1,x=>{d.emojiMandala.symmetry=x,console.log(`🎛️ Mandala symmetry: ${x}-fold`)});ad.title="Radial symmetry spokes (2-12)",l.Visual.appendChild(ad);const ld=et("Auto Scale Sequence",!1,x=>{d.emojiMandala.scaleSequenceEnabled=x,x?(d.emojiMandala.lastScaleChange=performance.now(),console.log(`🎛️ Scale sequencing ON: ${d.emojiMandala.scaleSequence.join(" → ")}`)):console.log("🎛️ Scale sequencing OFF")});ld.title="Auto-advance through scale progression",l.Visual.appendChild(ld);const cd=Ee("Scale Change Interval (s)",4,1,10,.5,x=>{d.emojiMandala.scaleSequenceInterval=x*1e3,console.log(`🎛️ Scale interval: ${x}s`)});cd.title="Seconds between scale changes",l.Visual.appendChild(cd);const Ra=document.createElement("label");Ra.textContent="Scale Sequence",Ra.style.cssText="display: block; font-size: 11px; margin-top: 10px; margin-bottom: 4px; color: #ff9944;",l.Visual.appendChild(Ra);const xi=document.createElement("input");xi.type="text",xi.value=d.emojiMandala.scaleSequence.join(" "),xi.placeholder="Major Dorian Mixolydian",xi.style.cssText="width: 100%; padding: 6px; background: rgba(0,0,0,0.5); border: 1px solid #ff9944; color: #ff9944; border-radius: 4px; margin-bottom: 10px; font-size: 11px;",xi.addEventListener("input",x=>{const H=x.target.value.split(/\s+/).filter(de=>de.length>0);d.emojiMandala.scaleSequence=H,console.log(`🎛️ Scale sequence updated: ${H.join(" → ")}`)}),xi.title="Space-separated scale names",l.Visual.appendChild(xi);const Pa=document.createElement("h4");Pa.textContent="🌊 Particle Trails (Line Segments)",Pa.style.cssText="margin: 15px 0 10px 0; color: #00ffff; font-size: 12px;",l.Visual.appendChild(Pa);const vp=et("Enable Line Trails",!1,x=>{ee({particlesTrailEnabled:x})});l.Visual.appendChild(vp);const dd=Ee("Trail Length",0,0,10,1,x=>{ee({particlesTrailLength:x})});dd.title="Number of frames to persist (0-10)",l.Visual.appendChild(dd);const hd=Ee("Trail Opacity",.3,0,1,.05,x=>{ee({particlesTrailOpacity:x})});hd.title="Transparency of trail lines (0.0-1.0)",l.Visual.appendChild(hd);const ud=Ee("Trail Fade",1,0,1,.05,x=>{ee({particlesTrailFade:x})});ud.title="Strength of fading (0=no fade, 1=full taper)",l.Visual.appendChild(ud);const fd=et("Audio Reactive Length",!1,x=>{ee({particlesTrailAudioReactive:x})});fd.title="Trail length follows audio level",l.Visual.appendChild(fd);const pd=Ee("Min Length",2,1,10,1,x=>{ee({particlesTrailLengthMin:x})});pd.title="Shortest trail when audio is quiet",l.Visual.appendChild(pd);const md=Ee("Max Length",10,1,20,1,x=>{ee({particlesTrailLengthMax:x})});md.title="Longest trail when audio is loud",l.Visual.appendChild(md);const La=document.createElement("h4");La.textContent="🎞️ Motion Trails (Postprocessing)",La.style.cssText="margin: 15px 0 10px 0; color: #ffcc00; font-size: 12px;",l.Visual.appendChild(La);const gd=et("Enable Motion Trails",!1,x=>{ee({motionTrailsEnabled:x})});gd.title="AfterimagePass blur effect (works independently of line trails)",l.Visual.appendChild(gd);const xd=Ee("Trail Intensity",.96,.85,.99,.01,x=>{ee({motionTrailIntensity:x})});xd.title="Blur damp value (higher = longer trails)",l.Visual.appendChild(xd);const zo=document.createElement("button");zo.textContent="🔄 Reset to Defaults",zo.style.cssText="width: 100%; padding: 10px; background: #ff9900; color: black; border: none; cursor: pointer; font-weight: bold; border-radius: 5px; margin-top: 15px; margin-bottom: 15px;",zo.addEventListener("click",()=>{ee({particlesResetDefaults:!0})}),l.Visual.appendChild(zo);const _d=document.createElement("hr");_d.style.cssText="border: 1px solid #555; margin: 15px 0;",l.Visual.appendChild(_d);const Ia=document.createElement("h4");Ia.textContent="🎨 Visual Polish",Ia.style.cssText="margin: 0 0 10px 0; color: #ff66ff; font-size: 12px;",l.Visual.appendChild(Ia);const Ji=document.createElement("input");Ji.type="file",Ji.accept="image/*",Ji.style.display="none";const ko=document.createElement("button");ko.innerText="Upload Image",ko.style.cssText="margin: 10px 0; padding: 8px 12px; background: #444; color: white; border: 1px solid #666; border-radius: 4px; cursor: pointer;",ko.onclick=()=>Ji.click(),Ji.addEventListener("change",x=>{const H=x.target.files[0];if(!H)return;const de=URL.createObjectURL(H);new Dy().load(de,Se=>{d.texture=Se,console.log("🖼️ Image loaded →",H.name)},void 0,Se=>console.error("❌ Texture load failed:",Se))});const Vo=document.createElement("input");Vo.type="checkbox",Vo.checked=d.useTextureOnMorph,Vo.onchange=x=>{d.useTextureOnMorph=x.target.checked,console.log("🎛️ Morph texture:",d.useTextureOnMorph?"ON":"OFF")};const Ho=document.createElement("label");Ho.innerText="Apply texture to morph shape",Ho.style.cssText="display: block; margin: 10px 0; cursor: pointer;",Ho.prepend(Vo);const Zi=document.createElement("input");Zi.type="checkbox",Zi.id="useBackgroundImage",Zi.checked=d.useBackgroundImage,Zi.onchange=()=>{d.useBackgroundImage=Zi.checked,console.log(`🎛️ Background image: ${d.useBackgroundImage?"ON":"OFF"}`)};const io=document.createElement("label");io.htmlFor="useBackgroundImage",io.innerText="Show as background",io.style.cssText="display: block; margin: 10px 0; cursor: pointer;",io.prepend(Zi),l.Visual.appendChild(ko),l.Visual.appendChild(Ji),l.Visual.appendChild(Ho),l.Visual.appendChild(io);const yp=Ee("Ambient Intensity",.4,0,2,.1,x=>{ee({ambientIntensity:x})});l.Visual.appendChild(yp);const Sp=Ee("Directional Intensity",1,0,2,.1,x=>{ee({directionalIntensity:x})});l.Visual.appendChild(Sp);const Mp=Ee("Light Angle X",-45,-90,90,5,x=>{ee({directionalAngleX:x})});l.Visual.appendChild(Mp);const bp=Ee("Light Angle Y",45,-90,90,5,x=>{ee({directionalAngleY:x})});l.Visual.appendChild(bp);const Ep=Zt("Geometry Color","#00ff00",x=>{ee({color:x})});l.Visual.appendChild(Ep);const vd=document.createElement("hr");vd.style.cssText="border: 1px solid #555; margin: 15px 0;",l.Visual.appendChild(vd);const Da=document.createElement("h4");Da.textContent="🎨 Color Layers (Phase 11.2.2)",Da.style.cssText="margin: 0 0 10px 0; color: #ff00ff; font-size: 12px;",l.Visual.appendChild(Da);const Ua=document.createElement("h5");Ua.textContent="🔺 Geometry",Ua.style.cssText="margin: 10px 0 5px 0; color: #00ff00; font-size: 11px;",l.Visual.appendChild(Ua);const wp=Zt("Base Color","#00ff00",x=>{ee({colorLayer:"geometry",property:"baseColor",value:x})});l.Visual.appendChild(wp);const Cp=Zt("Audio Color","#ff0000",x=>{ee({colorLayer:"geometry",property:"audioColor",value:x})});l.Visual.appendChild(Cp);const yd=Ee("Audio Intensity",.5,0,1,.05,x=>{ee({colorLayer:"geometry",property:"audioIntensity",value:x})});yd.title="Controls audio color contribution (0 = none, 1 = full)",l.Visual.appendChild(yd);const Na=document.createElement("h5");Na.textContent="🚢 Vessel",Na.style.cssText="margin: 10px 0 5px 0; color: #00ffff; font-size: 11px;",l.Visual.appendChild(Na);const Tp=Zt("Base Color","#00ff00",x=>{ee({colorLayer:"vessel",property:"baseColor",value:x})});l.Visual.appendChild(Tp);const Ap=Zt("Audio Color","#00ffff",x=>{ee({colorLayer:"vessel",property:"audioColor",value:x})});l.Visual.appendChild(Ap);const Sd=Ee("Audio Intensity",.3,0,1,.05,x=>{ee({colorLayer:"vessel",property:"audioIntensity",value:x})});Sd.title="Controls audio color contribution (0 = none, 1 = full)",l.Visual.appendChild(Sd);const Fa=document.createElement("h5");Fa.textContent="🌑 Shadows",Fa.style.cssText="margin: 10px 0 5px 0; color: #888; font-size: 11px;",l.Visual.appendChild(Fa);const Rp=Zt("Base Color","#000000",x=>{ee({colorLayer:"shadows",property:"baseColor",value:x})});l.Visual.appendChild(Rp);const Pp=Zt("Audio Color","#333333",x=>{ee({colorLayer:"shadows",property:"audioColor",value:x})});l.Visual.appendChild(Pp);const Md=Ee("Audio Intensity",.2,0,1,.05,x=>{ee({colorLayer:"shadows",property:"audioIntensity",value:x})});Md.title="Controls audio color contribution (0 = none, 1 = full)",l.Visual.appendChild(Md);const Oa=document.createElement("h5");Oa.textContent="✨ Particles (Shader - Infra Only)",Oa.style.cssText="margin: 10px 0 5px 0; color: #ffff00; font-size: 11px;",l.Visual.appendChild(Oa);const bd=Zt("Base Color","#ffff00",x=>{ee({colorLayer:"particles",property:"baseColor",value:x})});bd.title="Ready but requires shader update (future phase)",l.Visual.appendChild(bd);const Ed=Zt("Audio Color","#ff00ff",x=>{ee({colorLayer:"particles",property:"audioColor",value:x})});Ed.title="Ready but requires shader update (future phase)",l.Visual.appendChild(Ed);const wd=Ee("Audio Intensity",.7,0,1,.05,x=>{ee({colorLayer:"particles",property:"audioIntensity",value:x})});wd.title="Ready but requires shader update (future phase)",l.Visual.appendChild(wd);const Cd=document.createElement("hr");Cd.style.cssText="border: 1px solid #555; margin: 15px 0;",l.Visual.appendChild(Cd);const Ba=document.createElement("h4");Ba.textContent="🚢 Vessel",Ba.style.cssText="margin: 0 0 10px 0; color: #00ff00; font-size: 12px;",l.Visual.appendChild(Ba);const Lp=et("Enable Vessel",!0,x=>{ee({vesselEnabled:x})});l.Visual.appendChild(Lp);const Td=br("Vessel Mode","gyre",["gyre","conflat6"],x=>{ee({vesselMode:x})});Td.title="Switch between Gyre (torus rings) and Conflat 6 (cube-sphere circles)",l.Visual.appendChild(Td);const Ip=Ee("Vessel Opacity",.5,0,1,.01,x=>{ee({vesselOpacity:x})});l.Visual.appendChild(Ip);const Dp=Ee("Vessel Scale",1,.5,2,.1,x=>{ee({vesselScale:x})});l.Visual.appendChild(Dp);const Up=Zt("Vessel Color","#00ff00",x=>{ee({vesselColor:x})});l.Visual.appendChild(Up);const Np=et("Vessel Spin",!1,x=>{ee({vesselSpinEnabled:x})});l.Visual.appendChild(Np);const Fp=Ee("Spin Speed",.0035,0,.02,5e-4,x=>{ee({vesselSpinSpeed:x})});l.Visual.appendChild(Fp);const Op=br("Vessel Layout","lattice",["lattice","hoops","shells"],x=>{ee({vesselLayout:x})});l.Visual.appendChild(Op);const Bp=Ee("Audio Smoothing",.7,.1,.9,.05,x=>{ee({vesselAudioSmoothing:x})});l.Visual.appendChild(Bp);const zp=Ee("Hue Shift Range",20,0,60,5,x=>{ee({vesselHueShiftRange:x})});l.Visual.appendChild(zp);const za=document.createElement("div");za.style.cssText="margin-top: 15px; font-size: 12px; color: #888;",za.innerHTML='<p id="vessel-debug">Radius: --</p>',l.Visual.appendChild(za);const Ad=document.createElement("hr");Ad.style.cssText="border: 1px solid #555; margin: 15px 0;",l.Visual.appendChild(Ad);const ka=document.createElement("h4");ka.textContent="📦 Shadow Box",ka.style.cssText="margin: 0 0 10px 0; color: #888; font-size: 12px;",l.Visual.appendChild(ka);const kp=et("Project Particles",!1,x=>{ee({shadowBoxProjectParticles:x})});l.Visual.appendChild(kp);const Rd=br("Palette","Manual",["Manual","Alchemy Gold","Blake Indigo","Cosmic White"],x=>{ee({shadowBoxPalette:x})});Rd.title="Quick palette presets or manual color selection",l.Visual.appendChild(Rd);const Pd=Ee("Threshold",.5,0,1,.01,x=>{ee({shadowBoxThreshold:x})});Pd.title="Cutoff point: below = background, above = foreground",l.Visual.appendChild(Pd);const Ld=Ee("Bleach Gain",1,.5,3,.1,x=>{ee({shadowBoxBleachGain:x})});Ld.title="Luminance amplification before threshold",l.Visual.appendChild(Ld);const Id=Zt("Background Color","#000000",x=>{ee({shadowBoxBgColor:x})});Id.title="Color for pixels below threshold",l.Visual.appendChild(Id);const Dd=Zt("Foreground Color","#ffffff",x=>{ee({shadowBoxFgColor:x})});Dd.title="Color for pixels above threshold",l.Visual.appendChild(Dd);const Ud=document.createElement("hr");Ud.style.cssText="border: 1px solid #555; margin: 15px 0;",l.Visual.appendChild(Ud);const Va=document.createElement("h4");Va.textContent="🌑 Shadows",Va.style.cssText="margin: 0 0 10px 0; color: #555; font-size: 12px;",l.Visual.appendChild(Va);const Vp=et("Enable Shadows",!0,x=>{ee({shadowsEnabled:x})});l.Visual.appendChild(Vp);const Hp=et("Ground Shadow",!0,x=>{ee({shadowsGround:x})});l.Visual.appendChild(Hp);const Gp=et("Backdrop Shadow",!0,x=>{ee({shadowsBackdrop:x})});l.Visual.appendChild(Gp);const Wp=Ee("Shadow Opacity",.25,0,1,.05,x=>{ee({shadowsOpacity:x})});l.Visual.appendChild(Wp);const jp=Zt("Shadow Color","#000000",x=>{ee({shadowsColor:x})});l.Visual.appendChild(jp);const Nd=document.createElement("hr");Nd.style.cssText="border: 1px solid #555; margin: 15px 0;",l.Visual.appendChild(Nd);const Ha=document.createElement("h4");Ha.textContent="✨ Sprites",Ha.style.cssText="margin: 0 0 10px 0; color: #ffff00; font-size: 12px;",l.Visual.appendChild(Ha);const $p=et("Enable Sprites",!0,x=>{ee({spritesEnabled:x})});l.Visual.appendChild($p);const Xp=Ee("Sprite Count",200,50,500,10,x=>{ee({spritesCount:x})});l.Visual.appendChild(Xp);const Fd=document.createElement("hr");Fd.style.cssText="border: 1px solid #555; margin: 15px 0;",l.Advanced.appendChild(Fd);const Ga=document.createElement("h4");return Ga.textContent="📐 Debug",Ga.style.cssText="margin: 0 0 10px 0; color: #ff9900; font-size: 12px;",l.Advanced.appendChild(Ga),i.appendChild(r),i}function et(i,e,t){const n=document.createElement("div");n.style.cssText="margin-bottom: 15px;";const s=document.createElement("label");s.textContent=i+": ",s.style.cssText="display: block; margin-bottom: 5px;";const o=document.createElement("input");o.type="checkbox",o.checked=e,o.style.cssText="margin-right: 5px;",o.addEventListener("change",()=>{t(o.checked)});const r=document.createElement("span");return r.textContent=e?"ON":"OFF",r.style.cssText=`color: ${e?"#00ff00":"#ff6666"};`,o.addEventListener("change",()=>{r.textContent=o.checked?"ON":"OFF",r.style.color=o.checked?"#00ff00":"#ff6666"}),s.appendChild(o),s.appendChild(r),n.appendChild(s),n}function Ee(i,e,t,n,s,o){const r=document.createElement("div");r.style.cssText="margin-bottom: 15px;";const a=document.createElement("label");a.textContent=i+": ",a.style.cssText="display: block; margin-bottom: 5px;";const c=document.createElement("input");c.type="range",c.min=t,c.max=n,c.step=s,c.value=e,c.style.cssText="width: 100%; margin-bottom: 5px;";const h=document.createElement("span");return h.textContent=e.toFixed(3),h.style.cssText="color: #00ff00; font-size: 12px;",c.addEventListener("input",()=>{const l=parseFloat(c.value);h.textContent=l.toFixed(3),o(l)}),r.appendChild(a),r.appendChild(c),r.appendChild(h),r}function br(i,e,t,n){const s=document.createElement("div");s.style.cssText="margin-bottom: 15px;";const o=document.createElement("label");o.textContent=i+": ",o.style.cssText="display: block; margin-bottom: 5px;";const r=document.createElement("select");return r.style.cssText="width: 100%; padding: 4px; background: #333; color: white; border: 1px solid #555;",i==="Vessel Layout"&&(r.id="vessel-layout-dropdown"),t.forEach(a=>{const c=document.createElement("option");c.value=a,c.textContent=a.charAt(0).toUpperCase()+a.slice(1),a===e&&(c.selected=!0),r.appendChild(c)}),r.addEventListener("change",()=>{n(r.value)}),s.appendChild(o),s.appendChild(r),s}function Zt(i,e,t){const n=document.createElement("div");n.style.cssText="margin-bottom: 15px;";const s=document.createElement("label");s.textContent=i+": ",s.style.cssText="display: block; margin-bottom: 5px;";const o=document.createElement("input");o.type="color",o.value=e,o.style.cssText="width: 60%; height: 32px; padding: 2px; background: #333; border: 1px solid #555; cursor: pointer; margin-right: 10px;";const r=document.createElement("span");return r.textContent=e.toUpperCase(),r.style.cssText="color: #00ff00; font-size: 12px; font-family: monospace;",o.addEventListener("change",()=>{const a=o.value;r.textContent=a.toUpperCase(),t(a)}),n.appendChild(s),n.appendChild(o),n.appendChild(r),n}function _o(i){const e=document.getElementById("hud-panel");if(e&&e.presetListContainer){const t=e.presetListContainer,n=e.setSelectedPreset,s=e.categoryFilter,o=e.tagFilter,r=e.searchInput;t.innerHTML="";const a=s?s.value:"All",c=o?o.value.trim():"",h=c?c.split(",").map(f=>f.trim().toLowerCase()).filter(f=>f.length>0):[],l=r?r.value.trim().toLowerCase():"";if(l&&console.log(`🔍 Search: ${l}`),s){const f=new Set(["All"]);we(async()=>{const{getPresetData:p}=await Promise.resolve().then(()=>ai);return{getPresetData:p}},void 0).then(({getPresetData:p})=>{i.forEach(_=>{const v=p(_);v&&v.category&&f.add(v.category)});const g=s.value;s.innerHTML="",Array.from(f).sort().forEach(_=>{const v=document.createElement("option");v.value=_,v.textContent=_,_===g&&(v.selected=!0),s.appendChild(v)})})}if(i.length===0){const f=document.createElement("div");f.textContent="No presets saved yet",f.style.cssText="color: #666; font-size: 11px; text-align: center; padding: 10px;",t.appendChild(f);return}we(async()=>{const{getPresetData:f}=await Promise.resolve().then(()=>ai);return{getPresetData:f}},void 0).then(({getPresetData:f})=>{let p=0;if(i.forEach(g=>{const _=f(g),v=(_==null?void 0:_.category)||"Uncategorized",m=(_==null?void 0:_.tags)||[];if(l){const w=g.toLowerCase().includes(l),U=v.toLowerCase().includes(l),A=m.some(R=>R.toLowerCase().includes(l));if(!w&&!U&&!A)return}if(a!=="All"&&v!==a)return;if(h.length>0){const w=m.map(A=>A.toLowerCase());if(!h.every(A=>w.includes(A)))return}p++;const u=document.createElement("div");u.className="preset-item",u.style.cssText=`
          padding: 6px 8px;
          margin-bottom: 3px;
          background: #2a2a2a;
          border: 1px solid #444;
          border-radius: 3px;
          cursor: pointer;
          font-size: 11px;
          transition: background 0.2s, border-color 0.2s;
        `;const y=document.createElement("div");y.textContent=g,y.style.cssText="font-weight: bold; margin-bottom: 3px;",u.appendChild(y);const S=document.createElement("div");S.style.cssText="font-size: 9px; color: #888;",S.textContent=`[${v}]`,m.length>0&&(S.textContent+=` ${m.map(w=>`#${w}`).join(" ")}`),u.appendChild(S),u.addEventListener("mouseenter",()=>{u.style.background="#3a3a3a",u.style.borderColor="#666"}),u.addEventListener("mouseleave",()=>{u.classList.contains("selected")||(u.style.background="#2a2a2a",u.style.borderColor="#444")}),u.addEventListener("click",()=>{t.querySelectorAll(".preset-item").forEach(w=>{w.classList.remove("selected"),w.style.background="#2a2a2a",w.style.borderColor="#444"}),u.classList.add("selected"),u.style.background="#0088ff",u.style.borderColor="#00aaff",n(g)}),t.appendChild(u)}),p===0){const g=document.createElement("div");g.textContent="No presets match filters",g.style.cssText="color: #666; font-size: 11px; text-align: center; padding: 10px;",t.appendChild(g)}})}}function ee(i){yf.forEach(e=>{try{e(i)}catch(t){console.error("📟 Error in HUD callback:",t)}})}const vo=Object.freeze(Object.defineProperty({__proto__:null,initHUD:Sf,onHUDUpdate:cc,updatePresetList:_o},Symbol.toStringTag,{value:"Module"}));let Ts=null,Mf=[],bf=[],Ef=[],Er=!1;function Hy(i){if(Er){i();return}if(!navigator.requestMIDIAccess){console.warn("🎹 Web MIDI API not supported - MIDI functionality disabled"),Er=!0,i();return}navigator.requestMIDIAccess().then(e=>{Ts=e,Xy(),Er=!0,console.log("🎹 MIDI system initialized"),i()}).catch(e=>{console.warn("🎹 MIDI access denied or failed:",e.message),Er=!0,i()})}function Gy(i){Mf.push(i)}function Wy(i){bf.push(i)}function jy(i){Ef.push(i)}function $y(){return Ts?Array.from(Ts.inputs.values()).length:0}function Xy(){if(!Ts)return;const i=Array.from(Ts.inputs.values());if(i.length===0){console.log("🎹 No MIDI input devices found");return}console.log(`🎹 Found ${i.length} MIDI input device(s):`),i.forEach(e=>{console.log(`  - ${e.name}`),e.onmidimessage=wf}),Ts.onstatechange=qy}function wf(i){const[e,t,n]=i.data,s=i.target.name||"Unknown Device",o=e&240;if(o===176)Mf.forEach(r=>{try{r({cc:t,value:n,device:s})}catch(a){console.error("🎹 Error in CC callback:",a)}});else if(o===144||o===128){const r=o===144&&n>0,a=t,c=n;bf.forEach(h=>{try{h({note:a,velocity:c,noteOn:r,device:s})}catch(l){console.error("🎹 Error in note callback:",l)}})}else if(o===224){const r=n<<7|t,a=(r-8192)/8192;Ef.forEach(c=>{try{c({value:a,rawValue:r,device:s})}catch(h){console.error("🎹 Error in pitch bend callback:",h)}})}}function qy(i){const e=i.port;e.type==="input"&&(e.state==="connected"?(console.log(`🎹 MIDI device connected: ${e.name}`),e.onmidimessage=wf):e.state==="disconnected"&&console.log(`🎹 MIDI device disconnected: ${e.name}`))}console.log("🌑 shadows.js loaded");let ni=null,fn=null,Ui=null;function Yy(i){console.log("🌑 Initializing multi-plane shadow system (v2.2.0)..."),Ui=new hi({color:d.shadows.color,transparent:!0,opacity:d.shadows.opacity,depthWrite:!1});const e=new Jr(3,64);ni=new Tt(e,Ui),ni.rotation.x=-Math.PI/2,ni.position.y=-1.2,ni.visible=d.shadows.enabled&&d.shadows.ground,i.add(ni);const t=new ui(8,8);fn=new Tt(t,Ui.clone()),fn.position.z=-4,fn.visible=d.shadows.enabled&&d.shadows.backdrop,i.add(fn),console.log("✅ Multi-plane shadow system initialized")}function Ky(i){if(!ni||!fn||!Ui)return;ni.visible=d.shadows.enabled&&d.shadows.ground,fn.visible=d.shadows.enabled&&d.shadows.backdrop;const e=d.colorLayers.shadows,t=Vi(),n=(t.bass+t.mid+t.treble)/3;let s=e.baseColor;if(d.audioReactive){s=Zr(e.baseColor,e.audioColor,e.audioIntensity,n),Math.random()<.02&&console.log(`🌑 Shadows: base=${e.baseColor} audio=${e.audioColor} final=${s}`);const r=(t.bass||0)*.1,a=d.shadows.opacity;if(Ui.opacity=Math.max(0,Math.min(1,a+r)),fn.visible){const c=(t.mid||0)*.05;fn.material.opacity=Math.max(0,Math.min(1,a+c))}}else Ui.opacity=d.shadows.opacity,fn.material.opacity=d.shadows.opacity;Ui.color.set(s),fn.material.color.set(s);const o=d.vessel.scale||1;ni.scale.setScalar(o),fn.scale.setScalar(o)}console.log("🌑 Enhanced shadow module ready");let on,kl,wr=!1;function dc(i){kl=i,on=new Es;const e=new Zl({color:d.color,transparent:!0,opacity:.4}),t=d.sprites.count||200;for(let n=0;n<t;n++){const s=new df(e.clone());s.position.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10),s.scale.set(.1,.1,.1),on.add(s)}on.visible=d.sprites.enabled,i.add(on),console.log(`✨ Sprites initialized (count: ${t}, enabled: ${d.sprites.enabled})`)}function Cf(){if(!on||(on.visible=d.sprites.enabled,!d.sprites.enabled))return;const{bass:i,mid:e,treble:t,level:n}=Vi(),s=(i+e+t)/3;!d.audioReactive&&!wr?(console.log("🎵 Sprites update clamped to base (audio OFF)"),wr=!0):d.audioReactive&&wr&&(wr=!1),on.children.forEach((o,r)=>{var f,p,g,_,v,m;const a=Date.now()*.001+r;let c=0,h=0,l=0;d.audioReactive&&d.morphAudioWeights?(c=(((f=d.morphBaseWeights)==null?void 0:f[0])||0)+(d.morphAudioWeights[0]||0),h=(((p=d.morphBaseWeights)==null?void 0:p[1])||0)+(d.morphAudioWeights[1]||0),l=(((g=d.morphBaseWeights)==null?void 0:g[2])||0)+(d.morphAudioWeights[2]||0)):(c=((_=d.morphBaseWeights)==null?void 0:_[0])||0,h=((v=d.morphBaseWeights)==null?void 0:v[1])||0,l=((m=d.morphBaseWeights)==null?void 0:m[2])||0),o.position.x=Math.sin(a)*(2+c*3),o.position.y=Math.cos(a)*(2+h*3),o.position.z=Math.sin(a*.5)*(2+l*3),o.material.color.set(d.color),o.material.opacity=d.audioReactive?.2+s*.8:.2})}function Tf(){!on||!kl||(kl.remove(on),on.children.forEach(i=>{i.material&&i.material.dispose()}),on.clear(),on=null,console.log("✨ Sprites destroyed"))}function Jy(i){Tf(),dc(i)}const Zy=Object.freeze(Object.defineProperty({__proto__:null,destroySprites:Tf,initSprites:dc,reinitSprites:Jy,updateSprites:Cf},Symbol.toStringTag,{value:"Module"})),Ci=7,_u={Major:[0,2,4,5,7,9,11],Minor:[0,2,3,5,7,8,10],Pentatonic:[0,2,4,7,9],Dorian:[0,2,3,5,7,9,10],Phrygian:[0,1,3,5,7,8,10],Lydian:[0,2,4,6,7,9,11],Mixolydian:[0,2,4,5,7,9,10],Chromatic:[0,1,2,3,4,5,6,7,8,9,10,11]},Qy=[0,7,2,9,4,11,6,1,8,3,10,5];class Qr{constructor(e,t=5e3){this.scene=e,this.count=t,this.angles=new Float32Array(this.count),this.radii=new Float32Array(this.count),this.velocities=new Float32Array(this.count*3),this.targets=new Float32Array(this.count*3),this.orbitalSpeed=.05,this.smoothness=.5,this.opacity=1,this.organicStrength=.2,this.driftOffsets=[];for(let c=0;c<this.count;c++)this.driftOffsets.push({x:Math.random()*Math.PI*2,y:Math.random()*Math.PI*2,z:Math.random()*Math.PI*2,s:.6+Math.random()*.8,ax:.6+Math.random()*.8,ay:.6+Math.random()*.8,az:.6+Math.random()*.8,a2:.3+Math.random()*.5});this.hueShift=0,this.audioReactive=!0,this.audioLevel=0,this.audioGain=2,this.sizeWorld=.5,this.currentLayout="orbit",this.vesselGroup=null,this.trailEnabled=!1,this.trailLength=0,this.trailOpacity=.3,this.trailFade=1,this.trailAudioReactive=!1,this.trailLengthMin=2,this.trailLengthMax=10,this.trailHistory=[],this.maxTrailLength=20;const n=new tc(1,6,6);this.uniforms={uSize:{value:this.sizeWorld},uOpacity:{value:this.opacity},uHueShift:{value:this.hueShift},uAudioReactive:{value:this.audioReactive},uAudioLevel:{value:0},uBrightnessBoost:{value:1}};const s=`
      uniform float uSize;
      uniform float uHueShift;
      uniform bool  uAudioReactive;
      uniform float uAudioLevel;

      attribute float aBaseHue;
      attribute float aPhase;

      varying float vHue;

      void main() {
        vec3 p = position * uSize;
        vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;

        float audioHue = uAudioLevel * 360.0;
        float finalHue = uAudioReactive
          ? mod(uHueShift + audioHue + aBaseHue + aPhase * 30.0, 360.0)
          : mod(uHueShift + aBaseHue, 360.0);
        vHue = finalHue;
      }
    `,o=`
      precision mediump float;
      uniform float uOpacity;
      uniform float uBrightnessBoost;
      varying float vHue;

      vec3 hsl2rgb(float h, float s, float l) {
        float c = (1.0 - abs(2.0*l - 1.0)) * s;
        float hp = h * 6.0;
        float x = c * (1.0 - abs(mod(hp, 2.0) - 1.0));
        vec3 rgb;
        if      (0.0 <= hp && hp < 1.0) rgb = vec3(c, x, 0.0);
        else if (1.0 <= hp && hp < 2.0) rgb = vec3(x, c, 0.0);
        else if (2.0 <= hp && hp < 3.0) rgb = vec3(0.0, c, x);
        else if (3.0 <= hp && hp < 4.0) rgb = vec3(0.0, x, c);
        else if (4.0 <= hp && hp < 5.0) rgb = vec3(x, 0.0, c);
        else                            rgb = vec3(c, 0.0, x);
        float m = l - 0.5 * c;
        return rgb + vec3(m);
      }

      void main() {
        float h = vHue / 360.0;
        float brightness = 0.5 * uBrightnessBoost;
        vec3 color = hsl2rgb(h, 1.0, brightness);
        gl_FragColor = vec4(color, uOpacity);
      }
    `;this.material=new rn({uniforms:this.uniforms,vertexShader:s,fragmentShader:o,transparent:!0,depthWrite:!1,blending:Ni}),this.mesh=new hf(n,this.material,this.count),this.mesh.instanceMatrix.setUsage(Qm),this.mesh.layers.disable(Ci),e.add(this.mesh);const r=new Float32Array(this.count),a=new Float32Array(this.count);for(let c=0;c<this.count;c++){r[c]=Math.random()*360,a[c]=Math.random(),this.angles[c]=Math.random()*Math.PI*2,this.radii[c]=2+Math.random()*5;const h=c*3;this.velocities[h]=(Math.random()-.5)*.002,this.velocities[h+1]=(Math.random()-.5)*.002,this.velocities[h+2]=(Math.random()-.5)*.002}this.geometry=n,this.geometry.setAttribute("aBaseHue",new Vr(r,1)),this.geometry.setAttribute("aPhase",new Vr(a,1)),this.particleBaseHues=r,this._tmpMatrix=new ut,this._tmpQuat=new Vs,this._tmpScale=new I(1,1,1),this._tmpPos=new I,this.maxSegments=this.count*this.maxTrailLength*2,this.trailSegmentArray=new Float32Array(this.maxSegments*3),this.trailColorArray=new Float32Array(this.maxSegments*3),this.trailGeometry=new $t,this.trailGeometry.setAttribute("position",new Yt(this.trailSegmentArray,3)),this.trailGeometry.setAttribute("color",new Yt(this.trailColorArray,3)),this.trailGeometry.setDrawRange(0,0),this.trailMaterial=new uf({vertexColors:!0,transparent:!0,opacity:this.trailOpacity}),this.trailLines=new Ry(this.trailGeometry,this.trailMaterial),this.trailLines.visible=!1,this.trailLines.layers.disable(Ci),e.add(this.trailLines),this._initParticles(),this.setLayout("orbit"),console.log(`✨ Particle drift initialized for ${this.count} particles`)}_initParticles(){for(let e=0;e<this.count;e++){const t=Math.cos(this.angles[e])*this.radii[e],n=Math.sin(this.angles[e])*this.radii[e],s=0,o=e*3;this.targets[o]=t,this.targets[o+1]=n,this.targets[o+2]=s,this._tmpPos.set(t,n,s),this._tmpMatrix.compose(this._tmpPos,this._tmpQuat,this._tmpScale),this.mesh.setMatrixAt(e,this._tmpMatrix)}this.mesh.instanceMatrix.needsUpdate=!0}setLayout(e){this.currentLayout=e}updateLayoutVesselPlanes(){for(let t=0;t<this.count;t++){const n=t*3,s=t%6,o=t/this.count*Math.PI*2;switch(s){case 0:this.targets[n]=2,this.targets[n+1]=Math.cos(o)*2,this.targets[n+2]=Math.sin(o)*2;break;case 1:this.targets[n]=-2,this.targets[n+1]=Math.cos(o)*2,this.targets[n+2]=Math.sin(o)*2;break;case 2:this.targets[n]=Math.cos(o)*2,this.targets[n+1]=2,this.targets[n+2]=Math.sin(o)*2;break;case 3:this.targets[n]=Math.cos(o)*2,this.targets[n+1]=-2,this.targets[n+2]=Math.sin(o)*2;break;case 4:this.targets[n]=Math.cos(o)*2,this.targets[n+1]=Math.sin(o)*2,this.targets[n+2]=2;break;case 5:this.targets[n]=Math.cos(o)*2,this.targets[n+1]=Math.sin(o)*2,this.targets[n+2]=-2;break}const r=this.organicStrength*.1;this.targets[n]+=(Math.random()-.5)*r,this.targets[n+1]+=(Math.random()-.5)*r,this.targets[n+2]+=(Math.random()-.5)*r}}update(){const e=Date.now()*.001,t=this.smoothness,n=Vi(),s=this.audioReactive?(n.bass+n.mid+n.treble)/3*this.audioGain:0;for(let r=0;r<this.count;r++){const a=r*3;switch(this.currentLayout){case"orbit":{this.angles[r]+=this.orbitalSpeed*.01;const u=this.organicStrength*.05*Math.sin(e*.3+r*.17),y=this.organicStrength*Math.sin(e*.5+r*.23);this.targets[a]=Math.cos(this.angles[r]+u)*(this.radii[r]+y),this.targets[a+1]=Math.sin(this.angles[r]+u)*(this.radii[r]+y),this.targets[a+2]=y*.5;break}case"sphere":{const u=r%180*Math.PI/180,y=r%360*Math.PI/180,S=2.5+this.organicStrength*Math.sin(e*.8+r*.19),w=this.organicStrength*.05*Math.cos(e*.2+r*.31);this.targets[a]=S*Math.sin(u)*Math.cos(y+w),this.targets[a+1]=S*Math.sin(u)*Math.sin(y+w),this.targets[a+2]=S*Math.cos(u);break}case"torus":{const u=r%360*Math.PI/180,y=r%360*Math.PI/180,S=2.5+this.organicStrength*Math.sin(e*.5+r*.11),w=1+this.organicStrength*Math.cos(e*.7+r*.17),U=this.organicStrength*.05*Math.sin(e*.4+r*.29);this.targets[a]=(S+w*Math.cos(y))*Math.cos(u+U),this.targets[a+1]=(S+w*Math.cos(y))*Math.sin(u+U),this.targets[a+2]=w*Math.sin(y);break}case"cube":{const y=Math.sin(e*.1+r*.37)*5,S=Math.cos(e*.15+r*.41)*5,w=Math.sin(e*.12+r*.43)*5,U=this.organicStrength*Math.sin(e*.6+r*.23),A=this.organicStrength*Math.cos(e*.7+r*.29),R=this.organicStrength*Math.sin(e*.5+r*.31);this.targets[a]=y+U,this.targets[a+1]=S+A,this.targets[a+2]=w+R;break}case"vesselPlanes":{this.updateLayoutVesselPlanes();break}}this.mesh.getMatrixAt(r,this._tmpMatrix),this._tmpMatrix.decompose(this._tmpPos,this._tmpQuat,this._tmpScale);let c=this.targets[a],h=this.targets[a+1],l=this.targets[a+2];if(this.organicStrength>0&&this.driftOffsets.length){const u=this.driftOffsets[r],y=.18*u.s,S=.23*u.s,w=.15*u.s,U=this.organicStrength*.018,A=Math.sin(e*y+u.x)*u.ax,R=Math.cos(e*S+u.y)*u.ay,F=Math.sin(e*w+u.z)*u.az,C=Math.sin(e*y*2.3+u.x*1.7)*u.a2,b=Math.sin(e*S*2.1+u.y*1.3)*u.a2,P=Math.cos(e*w*2.4+u.z*1.9)*u.a2;c+=(A+.4*C)*U,h+=(R+.4*b)*U,l+=(F+.4*P)*U,this._driftNotified||(this._driftNotified=!0,console.log(`✨ Particle drift per-axis active (organic=${this.organicStrength.toFixed(2)})`))}const f=r*3,p=(d==null?void 0:d.particleMotionStrength)??.5;c+=this.velocities[f]*p,h+=this.velocities[f+1]*p,l+=this.velocities[f+2]*p;const g=p*.01;if(c+=Math.sin(e*.3+r*.17)*g,h+=Math.cos(e*.4+r*.23)*g,l+=Math.sin(e*.35+r*.29)*g,((d==null?void 0:d.useAudioJitter)??!0)&&this.audioReactive&&s>.1){const u=s*.01,y=r*.37%(Math.PI*2),S=Math.cos(y)*u,w=Math.sin(y)*u,U=Math.sin(y*.7)*u;c+=S,h+=w,l+=U}if(this.currentLayout==="vesselPlanes"&&this.vesselGroup){const u=new I(c,h,l);u.applyQuaternion(this.vesselGroup.quaternion),c=u.x,h=u.y,l=u.z}const v=10,m=c*c+h*h+l*l;if(m>v*v){const u=Math.sqrt(m),y=v/u;c*=y,h*=y,l*=y}this._tmpPos.set(this._tmpPos.x+(c-this._tmpPos.x)*t,this._tmpPos.y+(h-this._tmpPos.y)*t,this._tmpPos.z+(l-this._tmpPos.z)*t),this._tmpMatrix.compose(this._tmpPos,this._tmpQuat,this._tmpScale),this.mesh.setMatrixAt(r,this._tmpMatrix)}if(this.mesh.instanceMatrix.needsUpdate=!0,this.trailEnabled&&this.trailAudioReactive){const r=Math.floor(bo.lerp(this.trailLengthMin,this.trailLengthMax,this.audioLevel));this.trailLength=Math.max(0,Math.min(this.maxTrailLength,r))}if(!this.trailEnabled||this.trailLength<=0||this.count===0)this.trailHistory=[],this.trailLines.visible=!1,this.trailGeometry.setDrawRange(0,0);else{const r=new Float32Array(this.count*3);for(let f=0;f<this.count;f++){this.mesh.getMatrixAt(f,this._tmpMatrix),this._tmpMatrix.decompose(this._tmpPos,this._tmpQuat,this._tmpScale);const p=f*3;r[p]=this._tmpPos.x,r[p+1]=this._tmpPos.y,r[p+2]=this._tmpPos.z}this.trailHistory.unshift(r),this.trailHistory.length>this.trailLength&&this.trailHistory.pop();let a=0,c=0;const h=new it;for(let f=0;f<this.count;f++){const p=f*3,g=this.particleBaseHues[f];let _=this.hueShift;if(this.audioReactive){const v=s*360;_=(this.hueShift+v+g)%360}else _=(this.hueShift+g)%360;h.setHSL(_/360,1,.5);for(let v=0;v<this.trailHistory.length-1;v++){const m=this.trailHistory[v],u=this.trailHistory[v+1];this.trailSegmentArray[a++]=m[p],this.trailSegmentArray[a++]=m[p+1],this.trailSegmentArray[a++]=m[p+2],this.trailSegmentArray[a++]=u[p],this.trailSegmentArray[a++]=u[p+1],this.trailSegmentArray[a++]=u[p+2];const y=1-v/this.trailHistory.length*this.trailFade;this.trailColorArray[c++]=h.r*y,this.trailColorArray[c++]=h.g*y,this.trailColorArray[c++]=h.b*y,this.trailColorArray[c++]=h.r*y,this.trailColorArray[c++]=h.g*y,this.trailColorArray[c++]=h.b*y}}const l=a/3;l>0?(this.trailGeometry.setDrawRange(0,l),this.trailGeometry.attributes.position.needsUpdate=!0,this.trailGeometry.attributes.color.needsUpdate=!0,this.trailLines.visible=!0):(this.trailGeometry.setDrawRange(0,0),this.trailLines.visible=!1),this.trailMaterial.opacity=this.trailOpacity}let o=1;if(this.sizeWorld<.3&&(o=bo.lerp(1.6,1,this.sizeWorld/.3)),this.uniforms.uSize.value=this.sizeWorld,this.uniforms.uOpacity.value=this.opacity,this.uniforms.uHueShift.value=this.hueShift,this.uniforms.uAudioReactive.value=this.audioReactive,this.uniforms.uAudioLevel.value=s,this.uniforms.uBrightnessBoost.value=o,Math.random()<.01){const r=s*360;(this.hueShift+r)%360;const a=this.currentLayout==="vesselPlanes"&&this.vesselGroup?" (coupled)":"";this.audioReactive;const c=this.trailAudioReactive?"audioReactiveLen=true":"",h=this.trailEnabled?` | trails: enabled length=${this.trailLength} opacity=${this.trailOpacity.toFixed(2)} fade=${this.trailFade.toFixed(2)} ${c} perf=OK`:"",l=this.organicStrength>0?` ✨ Particle drift active (organic=${this.organicStrength.toFixed(2)})`:"";console.log(`✨ Layout: ${this.currentLayout}${a} | count: ${this.count} | size: ${this.sizeWorld.toFixed(2)} | speed: ${this.orbitalSpeed.toFixed(2)} | organic: ${this.organicStrength.toFixed(2)}${l}${h}`)}}setOrbitalSpeed(e){this.orbitalSpeed=Math.max(.01,e)}setSmoothness(e){this.smoothness=e}setOpacity(e){this.opacity=e}setOrganicStrength(e){this.organicStrength=e}setHueShift(e){this.hueShift=e%360}setAudioReactive(e){this.audioReactive=!!e}setVesselReference(e){this.vesselGroup=e}setTrailEnabled(e){this.trailEnabled=!!e}setTrailLength(e){this.trailLength=Math.max(0,Math.min(this.maxTrailLength,Math.floor(e)))}setTrailOpacity(e){this.trailOpacity=Math.max(0,Math.min(1,e))}setTrailFade(e){this.trailFade=Math.max(0,Math.min(1,e))}setTrailAudioReactive(e){this.trailAudioReactive=!!e}setTrailLengthMin(e){this.trailLengthMin=Math.max(1,Math.min(this.maxTrailLength,Math.floor(e)))}setTrailLengthMax(e){this.trailLengthMax=Math.max(1,Math.min(this.maxTrailLength,Math.floor(e)))}setProjectParticlesToShadow(e){e?(this.mesh.layers.enable(Ci),this.trailLines.layers.enable(Ci)):(this.mesh.layers.disable(Ci),this.trailLines.layers.disable(Ci))}setAudioLevel(e){this.audioLevel=e}setAudioGain(e){this.audioGain=e}setParticleSizeWorld(e){this.sizeWorld=Math.max(.05,e)}setParticleSize(e){this.sizeWorld=Math.max(.05,e)}changeLayout(e){this.setLayout(e)}setParticleCount(e){this.dispose(this.scene);const t=new Qr(this.scene,e);return t.setParticleSizeWorld(this.sizeWorld),t.setAudioGain(this.audioGain),t.setHueShift(this.hueShift),t.setAudioReactive(this.audioReactive),t.setOrbitalSpeed(this.orbitalSpeed),t.setSmoothness(this.smoothness),t.setOpacity(this.opacity),t.setOrganicStrength(this.organicStrength),t.setLayout(this.currentLayout),t}dispose(e){e.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose()}}let Xn=null;function Co(i,e=5e3){return Xn&&Wr(i),Xn=new Qr(i,e),Xn}function Af(i,e){Xn&&Xn.update()}function Wr(i){Xn&&(Xn.dispose(i),Xn=null)}function Rf(){return Xn}const Cr={pizza:["🍕","🌶️","🍄","🧄","🧀"],cosmos:["⭐","🌙","☀️","🌍","🌌"],myth:["🦁","🦅","🐍","🐉","🔥"],ocean:["🌊","🐠","🐙","🦈","🐚"],nature:["🌲","🍃","🌺","🦋","🌈"],tech:["💻","🤖","⚡","🔮","💎"]};class Vl{constructor(e,t=50,n="🍕"){this.scene=e,this.count=t,this.emoji=n,this.layout="cube",this.audioReactivity=1,this.useInstancing=!0,this.linkedToSignals=!1,this.currentSet=null,this.currentSetIndex=0,this.autoCycleEnabled=!1,this.cycleInterval=4e3,this.lastCycleTime=performance.now(),this.storyMode=!1,this.storySequence=["pizza","cosmos","myth"],this.storyIndex=0,this.bpm=120,this.beatSyncEnabled=!1,this.lastBeatTime=performance.now(),this.beatInterval=0,this.subdivision=4,this.sequencerEnabled=!1,this.sequence=["🍕","🌶️","🍄","🧄"],this.sequenceIndex=0,this.pulseAmount=0,this.pulseDuration=200,this.lastPulseTime=0,this.onsetDetection=!1,this.lastOnsetValue=0,this.orbitSpeed=.01,this.spiralRotation=0,this.gridSpacing=1,this.orbitRings=3,this.orbitRadii=[],this.positions=[],this.velocities=[],this.baseScales=[],this.rotations=[],this.basePositions=[],this.physicsMode="none",this.accelerations=[],this.vesselCenter=new I(0,0,0),this.mousePosition=new I(0,0,0),this.clusters=[],this.particleToCluster=new Map,this.nextClusterId=0;const s=this.createEmojiTexture(this.emoji,128);try{const o=new ui(1,1),r=new hi({map:s,transparent:!0,opacity:.8,side:pn});this.instancedMesh=new hf(o,r,t),this.dummy=new At;for(let a=0;a<t;a++){const c=.4+Math.random()*.4;this.baseScales.push(c);const h=new I((Math.random()-.5)*.01,(Math.random()-.5)*.01,(Math.random()-.5)*.01);this.velocities.push(h),this.positions.push(new I(0,0,0)),this.rotations.push(0),this.accelerations.push(new I(0,0,0))}this.scene.add(this.instancedMesh),this.positionSprites(),console.log(`🍕 EmojiParticles (instanced) initialized: ${t} x ${n}`)}catch(o){console.warn("🍕 Instancing failed, using fallback sprite mode:",o),this.useInstancing=!1,this.initSpriteFallback(s)}}initSpriteFallback(e){this.sprites=[];for(let t=0;t<this.count;t++){const n=new Zl({map:e,transparent:!0,opacity:.8}),s=new df(n);s.userData.baseScale=this.baseScales[t],this.scene.add(s),this.sprites.push(s)}this.positionSprites(),console.log(`🍕 EmojiParticles (fallback sprites) initialized: ${this.count} x ${this.emoji}`)}createEmojiTexture(e,t){const n=document.createElement("canvas");n.width=t,n.height=t;const s=n.getContext("2d");s.font=`${t*.8}px serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(e,t/2,t/2);const o=new Ot(n);return o.needsUpdate=!0,o}update(e=0){var c,h,l,f;const t=e??((c=d==null?void 0:d.audio)==null?void 0:c.level)??0,n=this.audioReactivity;if(this.autoCycleEnabled&&this.currentSet){const p=performance.now();p-this.lastCycleTime>=this.cycleInterval&&(this.cycleEmoji(),this.lastCycleTime=p)}const s=((h=d==null?void 0:d.audio)==null?void 0:h.bass)??0,o=((l=d==null?void 0:d.audio)==null?void 0:l.mid)??0,r=((f=d==null?void 0:d.audio)==null?void 0:f.treble)??0,a=performance.now();if(this.beatSyncEnabled&&this.bpm>0){const p=6e4/this.bpm/(this.subdivision/4);this.beatInterval=p,a-this.lastBeatTime>=p&&(this.triggerBeat(),this.lastBeatTime=a)}if(this.onsetDetection){const p=s+o+r;p>.5&&p>this.lastOnsetValue*1.5&&(this.triggerBeat(),console.log("🥁 Beat detected → pulse")),this.lastOnsetValue=p}if(this.pulseAmount>0){const p=(a-this.lastPulseTime)/this.pulseDuration;this.pulseAmount=Math.max(0,1-p)}if(this.linkedToSignals&&(d!=null&&d.morphWeights)){const p=d.morphWeights,g=(p.cube||0)+(p.sphere||0)+(p.pyramid||0)+(p.torus||0);g>0&&((p.cube||0)/g,(p.sphere||0)/g,(p.pyramid||0)/g,(p.torus||0)/g)}if(this.applyPhysics(t,s,o,r),this.applyCollisions(),this.applyFusion(t),this.applyConstellation(),this.applyMandala(),this.useInstancing&&this.instancedMesh){for(let g=0;g<this.count;g++){const _=this.positions[g],v=this.velocities[g],m=this.baseScales[g];if(_.add(v),this.layout==="orbit"||this.layout==="ring"){this.orbitSpeed*(1+t*n);const w=this.orbitRadii[g]||6,A=g/this.count*Math.PI*2+this.spiralRotation;_.x=w*Math.cos(A),_.z=w*Math.sin(A)}if(this.layout==="spiral"){const w=g*.3+this.spiralRotation,U=5+g*.02;_.x=Math.cos(w)*U,_.z=Math.sin(w)*U,_.y=g*.1}if(this.linkedToSignals&&s>.1){const w=_.clone().normalize();_.add(w.multiplyScalar(s*.05*n))}const u=10;Math.abs(_.x)>u&&(v.x*=-1,_.x=Math.sign(_.x)*u),Math.abs(_.y)>u&&(v.y*=-1,_.y=Math.sign(_.y)*u),Math.abs(_.z)>u&&(v.z*=-1,_.z=Math.sign(_.z)*u);let y=m+t*1.5*n;if(this.pulseAmount>0&&(y+=this.pulseAmount*.3),this.particleToCluster.has(g)){const w=this.particleToCluster.get(g),U=this.clusters.find(A=>A.id===w);U&&(y=U.scale)}const S=this.linkedToSignals?o*.1:0;this.rotations[g]+=(t*.05+S)*n,this.dummy.position.copy(_),this.dummy.scale.set(y,y,y),this.dummy.rotation.z=this.rotations[g],this.dummy.updateMatrix(),this.instancedMesh.setMatrixAt(g,this.dummy.matrix)}let p=.8;this.linkedToSignals&&r>.2&&(p=.7+r*.3),this.pulseAmount>0&&(p=Math.min(1,p+this.pulseAmount*.2)),this.instancedMesh.material.opacity=p,this.instancedMesh.instanceMatrix.needsUpdate=!0,(this.layout==="spiral"||this.layout==="orbit"||this.layout==="ring")&&(this.spiralRotation+=this.orbitSpeed*(1+t*.5))}else this.sprites&&this.sprites.forEach((p,g)=>{const v=(p.userData.baseScale||.5)+t*1.5*n;p.scale.set(v,v,v),p.material.rotation+=t*.05*n,p.material.opacity=.7+t*.3*n;const m=this.velocities[g];p.position.add(m);const u=10;Math.abs(p.position.x)>u&&(m.x*=-1,p.position.x=Math.sign(p.position.x)*u),Math.abs(p.position.y)>u&&(m.y*=-1,p.position.y=Math.sign(p.position.y)*u),Math.abs(p.position.z)>u&&(m.z*=-1,p.position.z=Math.sign(p.position.z)*u)})}setPhysicsMode(e){this.physicsMode=e,console.log(`🌐 Emoji physics: ${e}`)}applyPhysics(e,t,n,s){var l,f,p,g;if(this.physicsMode==="none")return;const{physicsMode:o}=d.emojiPhysics||{},r=((l=d.emojiPhysics)==null?void 0:l.gravityStrength)??.01,a=((f=d.emojiPhysics)==null?void 0:f.orbitStrength)??.005,c=((p=d.emojiPhysics)==null?void 0:p.repulsionStrength)??.02,h=((g=d.emojiPhysics)==null?void 0:g.audioModulation)??!0;for(let _=0;_<this.count;_++){const v=this.positions[_],m=this.velocities[_],u=this.accelerations[_];if(u.set(0,0,0),this.physicsMode==="gravity"){const y=h?r*(1+t*2):r;u.y-=y}else if(this.physicsMode==="orbit"){const y=new I().subVectors(this.vesselCenter,v);if(y.length()>.1){y.normalize();const w=h?a*(1+n*.5):a;u.add(y.multiplyScalar(w))}}else if(this.physicsMode==="repulsion"){const y=new I().subVectors(v,this.vesselCenter);if(y.length()>.1){y.normalize();const w=h?c*(1+s*3):c;u.add(y.multiplyScalar(w))}}m.add(u),m.multiplyScalar(.98)}}applyCollisions(){var t;if(!((t=d.emojiPhysics)!=null&&t.collisionEnabled))return;const e=.5;for(let n=0;n<this.count;n++)for(let s=n+1;s<this.count;s++){const o=this.positions[n],r=this.positions[s],a=this.velocities[n],c=this.velocities[s],h=new I().subVectors(o,r),l=h.length();if(l<e*2&&l>0){const f=e*2-l,p=h.normalize();o.add(p.clone().multiplyScalar(f*.5)),r.sub(p.clone().multiplyScalar(f*.5));const _=new I().subVectors(a,c).dot(p);if(_<0){const m=p.multiplyScalar(_*.3);a.sub(m),c.add(m)}}}}applySwirlForce(e,t){var o;if(!((o=d.emojiPhysics)!=null&&o.mouseInteraction))return;this.mousePosition.set(e/window.innerWidth*20-10,-(t/window.innerHeight)*20+10,0);const n=.05,s=5;for(let r=0;r<this.count;r++){const a=this.positions[r],c=this.velocities[r],h=new I().subVectors(this.mousePosition,a),l=h.length();if(l<s&&l>.1){const f=new I(-h.y,h.x,0).normalize(),p=1-l/s;c.add(f.multiplyScalar(n*p))}}}applyFusion(e=0){var s,o;if(!((s=d.emojiFusion)!=null&&s.enabled))return;const t=((o=d.emojiFusion)==null?void 0:o.threshold)??1,n=new Set;for(let r=0;r<this.count;r++)if(!this.particleToCluster.has(r))for(let a=r+1;a<this.count;a++){if(this.particleToCluster.has(a))continue;const c=this.positions[r],h=this.positions[a];if(c.distanceTo(h)<t){const f=this.nextClusterId++,p=new I().addVectors(c,h).multiplyScalar(.5),g={id:f,particleIndices:[r,a],position:p,scale:this.baseScales[r]+this.baseScales[a],opacity:.9,driftVelocity:new I((this.velocities[r].x+this.velocities[a].x)*.5,(this.velocities[r].y+this.velocities[a].y)*.5,(this.velocities[r].z+this.velocities[a].z)*.5),createdAt:performance.now()};this.clusters.push(g),this.particleToCluster.set(r,f),this.particleToCluster.set(a,f),n.add(f),console.log(`⚡ ${this.emoji} + ${this.emoji} fused → cluster #${f}`)}}this.updateClusters(e),this.checkClusterDecay(t)}updateClusters(e=0){var n,s;performance.now(),(n=d==null?void 0:d.audio)==null||n.bass;const t=((s=d==null?void 0:d.audio)==null?void 0:s.mid)??0;for(const o of this.clusters){const r=1+e*.5;o.scale*=r,o.opacity=.85+t*.15,e<.1&&o.driftVelocity.multiplyScalar(1-.001),o.position.add(o.driftVelocity);for(const a of o.particleIndices)this.positions[a].copy(o.position)}}checkClusterDecay(e){var n;const t=[];for(let s=0;s<this.clusters.length;s++){const o=this.clusters[s];if(performance.now()-o.createdAt>5e3&&(((n=d==null?void 0:d.audio)==null?void 0:n.level)??0)<.1){for(const a of o.particleIndices)this.particleToCluster.delete(a),this.velocities[a].set((Math.random()-.5)*.01,(Math.random()-.5)*.01,(Math.random()-.5)*.01);t.push(s),console.log(`💥 Cluster #${o.id} decayed → particles restored`)}}for(let s=t.length-1;s>=0;s--)this.clusters.splice(t[s],1)}generateConstellationPositions(){const{type:e,scale:t,customPattern:n}=d.emojiConstellations||{},s=[];switch(e){case"Line":for(let c=0;c<this.count;c++){const h=c/(this.count-1)-.5;s.push(new I(h*t*2,0,0))}break;case"Triangle":for(let c=0;c<this.count;c++){const h=c/this.count*Math.PI*2,l=c%3;l===0?s.push(new I(Math.cos(h)*t,Math.sin(h)*t,0)):l===1?s.push(new I(Math.cos(h+Math.PI*2/3)*t,Math.sin(h+Math.PI*2/3)*t,0)):s.push(new I(Math.cos(h+Math.PI*4/3)*t,Math.sin(h+Math.PI*4/3)*t,0))}break;case"Star":for(let c=0;c<this.count;c++){const h=c/this.count*Math.PI*2,f=c%2===0?t:t*.4;s.push(new I(Math.cos(h-Math.PI/2)*f,Math.sin(h-Math.PI/2)*f,0))}break;case"Spiral":for(let c=0;c<this.count;c++){const h=c*.5,l=t*Math.sqrt(c/this.count);s.push(new I(Math.cos(h)*l,Math.sin(h)*l,c*.05))}break;case"CircleOf5ths":const o=[0,7,2,9,4,11,6,1,8,3,10,5];for(let c=0;c<this.count;c++){const h=c%12,f=o[h]/12*Math.PI*2-Math.PI/2,p=Math.floor(c/12),g=t*(1+p*.3);s.push(new I(Math.cos(f)*g,Math.sin(f)*g,p*.2))}break;case"Platonic":const r=(1+Math.sqrt(5))/2,a=[[0,1,r],[0,-1,r],[0,1,-r],[0,-1,-r],[1,r,0],[-1,r,0],[1,-r,0],[-1,-r,0],[r,0,1],[-r,0,1],[r,0,-1],[-r,0,-1]];for(let c=0;c<this.count;c++){const h=a[c%a.length],l=t/2;s.push(new I(h[0]*l,h[1]*l,h[2]*l))}break;case"Custom":if(n&&n.positions)for(let c=0;c<this.count;c++){const h=n.positions[c%n.positions.length];s.push(new I(h.x*t,h.y*t,(h.z||0)*t))}break;default:return null}return s}applyConstellation(){var h,l;const{type:e,rotation:t,audioSync:n,beatSync:s}=d.emojiConstellations||{};if(e==="None")return;const o=this.generateConstellationPositions();if(!o)return;const r=((h=d==null?void 0:d.audio)==null?void 0:h.level)??0,a=t+(n?r*.5:0);for(let f=0;f<this.count;f++)if(f<o.length){const p=o[f],g=p.x*Math.cos(a)-p.z*Math.sin(a),_=p.x*Math.sin(a)+p.z*Math.cos(a);if(this.positions[f].set(g,p.y,_),s&&this.pulseAmount>0){const v=1+this.pulseAmount*.2;this.positions[f].multiplyScalar(v)}}const c=((l=d.emojiConstellations)==null?void 0:l.rotationSpeed)??.01;d.emojiConstellations.rotation+=c}generateMandalaPositions(){const{enabled:e,rings:t,symmetry:n,ringRadii:s,musicalMode:o,scale:r,rootNote:a,layoutMode:c}=d.emojiMandala||{};if(!e)return null;const h=[],l=[],f=[];let p=0;const g=o?_u[r]||_u.Major:null,_=c||"radial",v=Math.PI/6;for(let m=0;m<t&&m<6;m++){const u=s[m]||m*2;let y=m===0?1:n;o&&g&&m>0&&(y=g.length);for(let S=0;S<y&&!(p>=this.count);S++){if(m===0)h.push(new I(0,0,0)),f.push(a);else{let w,U,A=0,R,F=a;if(o&&g){const C=g[S%g.length];R=Qy.indexOf(C)/12*Math.PI*2-Math.PI/2,F=a+C+Math.floor(m/2)*12}else R=S/y*Math.PI*2;if(_==="spiral")R+=m*v,w=Math.cos(R)*u,U=Math.sin(R)*u;else if(_==="grid"){const C=Math.ceil(Math.sqrt(y)),b=Math.floor(S/C),P=S%C,W=u*2/C;w=(P-C/2)*W+W/2,U=(b-C/2)*W+W/2+m*2}else w=Math.cos(R)*u,U=Math.sin(R)*u;h.push(new I(w,U,A)),f.push(F)}l.push(m),p++}}for(;p<this.count;)h.push(new I(0,0,0)),l.push(t-1),f.push(a),p++;return{positions:h,particleRingAssignment:l,particleNoteAssignment:f}}applyMandala(){var G,J,Z,Y;const{enabled:e,rotation:t,rotationSpeed:n,audioModulation:s,layeredAudio:o,musicalMode:r,activeNotes:a,notePulse:c,differentialRotation:h,ringRotationSpeeds:l,scaleSequenceEnabled:f,scaleSequence:p,scaleSequenceIndex:g,scaleSequenceInterval:_,lastScaleChange:v,mandalaAudioReactive:m,radiusPulse:u,anglePulse:y}=d.emojiMandala||{};if(!e)return;if(f&&p&&p.length>0){const K=performance.now();if(K-v>=_){const $=(g+1)%p.length;d.emojiMandala.scaleSequenceIndex=$,d.emojiMandala.scale=p[$],d.emojiMandala.lastScaleChange=K,console.log(`🎛️ Scale sequence → ${p[$]}`)}}const S=this.generateMandalaPositions();if(!S)return;const{positions:w,particleRingAssignment:U,particleNoteAssignment:A}=S,R=((G=d==null?void 0:d.audio)==null?void 0:G.level)??0,F=((J=d==null?void 0:d.audio)==null?void 0:J.bass)??0,C=((Z=d==null?void 0:d.audio)==null?void 0:Z.mid)??0,b=((Y=d==null?void 0:d.audio)==null?void 0:Y.treble)??0;for(let K=0;K<this.count;K++)if(K<w.length){const $=w[K],he=U[K];let ge;if(h&&l){const fe=l[he]||.01,le=s?he===0?F*.2:he<=2?C*.3:b*.5:0,Oe=fe*(1+le);this.ringRotations||(this.ringRotations=Array(6).fill(0)),this.ringRotations[he]+=Oe,ge=this.ringRotations[he]}else ge=t+(s?R*.3:0);m&&y&&(ge+=y);const ve=m?1+(u||0):1,Ge=$.x*Math.cos(ge)-$.y*Math.sin(ge),Je=$.x*Math.sin(ge)+$.y*Math.cos(ge);let X=1;if(o?he===0?X=1+F*.3:he<=1?X=1+F*.2:he<=3?X=1+C*.25:X=1+b*.3:X=1+R*.2,r&&A[K]!==void 0){const fe=A[K],le=c[fe]||0;X+=le*.5,this.particleNoteMap||(this.particleNoteMap={}),this.particleNoteMap[K]=fe}const ne=X*ve;this.positions[K].set(Ge*ne,Je*ne,$.z),this.particleRingIndex||(this.particleRingIndex=[]),this.particleRingIndex[K]=he}const P=n??.02,W=s?P*(1+R*2):P;d.emojiMandala.rotation+=W}positionSprites(){const e=(t,n)=>{if(this.useInstancing&&this.instancedMesh){this.positions[t].copy(n);const s=this.baseScales[t];this.dummy.position.copy(n),this.dummy.scale.set(s,s,s),this.dummy.rotation.z=this.rotations[t],this.dummy.updateMatrix(),this.instancedMesh.setMatrixAt(t,this.dummy.matrix)}else this.sprites&&this.sprites[t]&&this.sprites[t].position.copy(n)};for(let t=0;t<this.count;t++){const n=new I;if(this.layout==="cube")n.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10);else if(this.layout==="sphere"){const o=Math.acos(2*Math.random()-1),r=2*Math.PI*Math.random();n.set(5*Math.sin(o)*Math.cos(r),5*Math.sin(o)*Math.sin(r),5*Math.cos(o))}else if(this.layout==="ring"||this.layout==="orbit"){const o=4+t%this.orbitRings*2;this.orbitRadii[t]=o;const r=t/this.count*Math.PI*2;n.set(o*Math.cos(r),0,o*Math.sin(r))}else if(this.layout==="random")n.set((Math.random()-.5)*20,(Math.random()-.5)*20,(Math.random()-.5)*20);else if(this.layout==="spiral"){const s=t*.3,o=5+t*.02;n.set(Math.cos(s)*o,t*.1,Math.sin(s)*o)}else if(this.layout==="wave"){const s=Math.ceil(Math.sqrt(this.count)),o=t%s*this.gridSpacing-s*this.gridSpacing/2,r=Math.floor(t/s)*this.gridSpacing-s*this.gridSpacing/2;n.set(o,Math.sin((o+r)*.5)*2,r)}else if(this.layout==="burst"){const s=Math.random()*2,o=Math.acos(2*Math.random()-1),r=2*Math.PI*Math.random();n.set(s*Math.sin(o)*Math.cos(r),s*Math.sin(o)*Math.sin(r),s*Math.cos(o));const a=this.velocities[t],c=n.clone().normalize();a.copy(c.multiplyScalar(.02))}e(t,n)}this.useInstancing&&this.instancedMesh&&(this.instancedMesh.instanceMatrix.needsUpdate=!0)}setLayout(e){this.layout=e,this.positionSprites(),console.log(`🍕 Emoji layout set to: ${e}`)}setAudioReactivity(e){this.audioReactivity=e,console.log(`🍕 Emoji audio reactivity = ${e.toFixed(1)}x`)}setSignalLinking(e){this.linkedToSignals=e,console.log(e?"🍕 EmojiParticles linked to morph/audio":"🍕 EmojiParticles unlinked from signals")}loadEmojiSet(e){if(!Cr[e]){console.warn(`🍕 Unknown emoji set: ${e}`);return}this.currentSet=e,this.currentSetIndex=0,this.emoji=Cr[e][0],this.swapEmoji(this.emoji),console.log(`🍕 Emoji set loaded: ${e}`)}cycleEmoji(){if(!this.currentSet||!Cr[this.currentSet]){console.warn("🍕 No emoji set active for cycling");return}const e=Cr[this.currentSet];this.currentSetIndex=(this.currentSetIndex+1)%e.length,this.emoji=e[this.currentSetIndex],this.swapEmoji(this.emoji),console.log(`🍕 Emoji cycled: ${this.emoji}`)}setAutoCycle(e,t=4e3){this.autoCycleEnabled=e,this.cycleInterval=t,this.lastCycleTime=performance.now(),console.log(e?`🍕 Emoji auto-cycle enabled (${t}ms interval)`:"🍕 Emoji auto-cycle disabled")}setBPM(e){this.bpm=e,console.log(`🥁 Emoji sync at ${e} BPM`)}setBeatSync(e){this.beatSyncEnabled=e,this.lastBeatTime=performance.now(),console.log(e?`🥁 Beat sync enabled at ${this.bpm} BPM`:"🥁 Beat sync disabled")}setSubdivision(e){this.subdivision=e,console.log(`🥁 Emoji subdivision = ${{4:"1/4",8:"1/8",16:"1/16"}[e]||e} notes`)}setOnsetDetection(e){this.onsetDetection=e,console.log(e?"🥁 Onset detection enabled":"🥁 Onset detection disabled")}setSequencer(e,t=["🍕","🌶️","🍄","🧄"]){this.sequencerEnabled=e,this.sequence=t,this.sequenceIndex=0,console.log(e?`🥁 Sequencer ON: ${t.join(" → ")}`:"🥁 Sequencer OFF")}triggerBeat(){this.pulseAmount=1,this.lastPulseTime=performance.now(),this.sequencerEnabled&&this.sequence.length>0&&(this.emoji=this.sequence[this.sequenceIndex],this.swapEmoji(this.emoji),console.log(`🥁 Step ${this.sequenceIndex+1}/${this.sequence.length} → ${this.emoji}`),this.sequenceIndex=(this.sequenceIndex+1)%this.sequence.length)}setStoryMode(e,t=["pizza","cosmos","myth"]){this.storyMode=e,this.storySequence=t,this.storyIndex=0,e?(this.loadEmojiSet(t[0]),console.log(`📖 Story mode enabled: ${t.join(" → ")}`)):console.log("📖 Story mode disabled")}advanceStory(){if(!this.storyMode||this.storySequence.length===0){console.warn("📖 Story mode not active");return}this.storyIndex=(this.storyIndex+1)%this.storySequence.length;const e=this.storySequence[this.storyIndex];this.loadEmojiSet(e),console.log(`📖 Story advanced → ${e} set`)}swapEmoji(e){this.emoji=e;const t=this.createEmojiTexture(e,128);this.useInstancing&&this.instancedMesh?(this.instancedMesh.material.map&&this.instancedMesh.material.map.dispose(),this.instancedMesh.material.map=t,this.instancedMesh.material.needsUpdate=!0,console.log(`🍕 Instanced emoji texture updated: ${e}`)):this.sprites&&(this.sprites.forEach(n=>{n.material.map&&n.material.map.dispose(),n.material.map=t,n.material.needsUpdate=!0}),console.log(`🍕 Emoji swapped to: ${e}`))}dispose(){this.useInstancing&&this.instancedMesh?(this.scene.remove(this.instancedMesh),this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.instancedMesh.material.map&&this.instancedMesh.material.map.dispose(),this.instancedMesh=null,console.log("🍕 EmojiParticles (instanced) disposed")):this.sprites&&(this.sprites.forEach(e=>{this.scene.remove(e),e.material.dispose(),e.material.map&&e.material.map.dispose()}),this.sprites=[],console.log("🍕 EmojiParticles disposed")),this.positions=[],this.velocities=[],this.baseScales=[],this.rotations=[]}}class Pf{constructor(e){this.scene=e,this.streams=new Map,console.log("🎨 EmojiStreamManager initialized")}addStream(e,t=100,n=!0){if(this.streams.has(e)){console.warn(`🎨 Stream already exists: ${e}`);return}const s=new Vl(this.scene,t,e);s.enabled=n,n||s.instancedMesh&&this.scene.remove(s.instancedMesh),this.streams.set(e,s),console.log(`${e} Stream added: ${t}`)}removeStream(e){const t=this.streams.get(e);if(!t){console.warn(`🎨 Stream not found: ${e}`);return}t.dispose(),this.streams.delete(e),console.log(`${e} Stream disposed`)}toggleStream(e,t){const n=this.streams.get(e);if(!n){console.warn(`🎨 Stream not found: ${e}`);return}n.enabled=t,t?(n.instancedMesh&&!this.scene.children.includes(n.instancedMesh)&&this.scene.add(n.instancedMesh),console.log(`${e} Stream enabled`)):(n.instancedMesh&&this.scene.remove(n.instancedMesh),console.log(`${e} Stream disabled`))}updateStreamCount(e,t){const n=this.streams.get(e);if(!n){console.warn(`🎨 Stream not found: ${e}`);return}const s=n.enabled,o=n.layout,r=n.audioReactivity;n.dispose();const a=new Vl(this.scene,t,e);a.enabled=s,a.setLayout(o),a.setAudioReactivity(r),!s&&a.instancedMesh&&this.scene.remove(a.instancedMesh),this.streams.set(e,a),console.log(`${e} Count updated: ${t}`)}update(e){this.streams.forEach((t,n)=>{t.enabled&&t.update(e)})}setPhysicsMode(e){this.streams.forEach((t,n)=>{t.setPhysicsMode(e)})}getStreamsArray(){const e=[];return this.streams.forEach((t,n)=>{e.push({emoji:n,count:t.count,enabled:t.enabled})}),e}loadStreams(e){this.streams.forEach((t,n)=>{t.dispose()}),this.streams.clear(),e.forEach(({emoji:t,count:n,enabled:s})=>{this.addStream(t,n,s)}),console.log(`🎨 Loaded ${e.length} emoji streams`)}dispose(){this.streams.forEach((e,t)=>{e.dispose()}),this.streams.clear(),console.log("🎨 EmojiStreamManager disposed")}}class Lf{constructor(e){this.streamManager=e,this.enabled=!1,this.bpm=120,this.currentBeat=0,this.patterns={},this.timelineLength=16,this.lastBeatTime=performance.now(),this.beatInterval=6e4/this.bpm,console.log("🎶 EmojiSequencer initialized")}setBPM(e){this.bpm=e,this.beatInterval=6e4/this.bpm,console.log(`🎶 Sequencer BPM set to ${e}`)}setTimelineLength(e){this.timelineLength=e,Object.keys(this.patterns).forEach(t=>{const n=this.patterns[t];n.length<e?this.patterns[t]=[...n,...new Array(e-n.length).fill(0)]:n.length>e&&(this.patterns[t]=n.slice(0,e))}),console.log(`🎶 Timeline length set to ${e} beats`)}setPattern(e,t){if(!Array.isArray(t)){console.warn(`🎶 Invalid pattern for ${e}`);return}if(t.length!==this.timelineLength){const n=new Array(this.timelineLength).fill(0);for(let s=0;s<Math.min(t.length,this.timelineLength);s++)n[s]=t[s];this.patterns[e]=n}else this.patterns[e]=[...t];console.log(`🎶 Pattern set for ${e}: ${this.patterns[e].join("")}`)}toggleBeat(e,t){return this.patterns[e]||(this.patterns[e]=new Array(this.timelineLength).fill(0)),this.patterns[e][t]=this.patterns[e][t]?0:1,console.log(`🎶 ${e} beat ${t}: ${this.patterns[e][t]?"ON":"OFF"}`),this.patterns[e][t]}getPattern(e){return this.patterns[e]||(this.patterns[e]=new Array(this.timelineLength).fill(0)),this.patterns[e]}setEnabled(e){this.enabled=e,e?(this.currentBeat=0,this.lastBeatTime=performance.now(),console.log(`🎶 Sequencer ON @ ${this.bpm} BPM`)):console.log("🎶 Sequencer OFF")}reset(){this.currentBeat=0,this.lastBeatTime=performance.now(),console.log("🎶 Sequencer reset to beat 0")}update(){if(!this.enabled)return;const e=performance.now();e-this.lastBeatTime>=this.beatInterval&&(this.advanceBeat(),this.lastBeatTime=e)}advanceBeat(){this.currentBeat=(this.currentBeat+1)%this.timelineLength,Object.keys(this.patterns).forEach(e=>{const t=this.patterns[e][this.currentBeat],n=this.streamManager.streams.get(e);if(n){const s=n.enabled,o=t===1;s!==o&&(this.streamManager.toggleStream(e,o),o&&console.log(`🎶 ${e} active on beat ${this.currentBeat+1}`))}})}loadFromState(e){this.bpm=e.bpm||120,this.timelineLength=e.timelineLength||16,this.patterns={},Object.keys(e.patterns||{}).forEach(t=>{this.patterns[t]=[...e.patterns[t]]}),this.beatInterval=6e4/this.bpm,console.log(`🎶 Sequencer loaded: ${this.bpm} BPM, ${this.timelineLength} beats`)}saveToState(){return{enabled:this.enabled,bpm:this.bpm,currentBeat:this.currentBeat,patterns:JSON.parse(JSON.stringify(this.patterns)),timelineLength:this.timelineLength}}}class If{constructor(e,t){this.streamManager=e,this.sequencer=t,this.banks=new Array(8).fill(null),this.currentBankIndex=null,console.log("💾 EmojiPatternBankManager initialized (8 banks)")}saveBank(e,t=null){if(e<0||e>=8)return console.warn(`💾 Invalid bank index: ${e}`),!1;const n=this.streamManager.getStreamsArray(),s=this.sequencer.saveToState(),o={name:t||`Bank ${e+1}`,streams:JSON.parse(JSON.stringify(n)),patterns:JSON.parse(JSON.stringify(s.patterns)),bpm:s.bpm,timelineLength:s.timelineLength,timestamp:new Date().toISOString()};this.banks[e]=o;const r=n.map(a=>a.emoji).join("");return console.log(`💾 Bank ${e+1} saved → ${r}`),!0}loadBank(e){if(e<0||e>=8)return console.warn(`📂 Invalid bank index: ${e}`),!1;const t=this.banks[e];if(!t)return console.warn(`📂 Bank ${e+1} is empty`),!1;this.streamManager&&this.streamManager.loadStreams(t.streams),this.sequencer&&this.sequencer.loadFromState({bpm:t.bpm,patterns:t.patterns,timelineLength:t.timelineLength,enabled:this.sequencer.enabled}),this.currentBankIndex=e;const n=t.streams.map(s=>s.emoji).join("");return console.log(`📂 Bank ${e+1} loaded → ${n}`),!0}clearBank(e){return e<0||e>=8?(console.warn(`💾 Invalid bank index: ${e}`),!1):(this.banks[e]=null,console.log(`💾 Bank ${e+1} cleared`),!0)}getBank(e){return e<0||e>=8?null:this.banks[e]}isBankEmpty(e){return e<0||e>=8?!0:this.banks[e]===null}getBankName(e){const t=this.getBank(e);return t?t.name:`Bank ${e+1}`}renameBank(e,t){if(e<0||e>=8)return!1;const n=this.banks[e];return n?(n.name=t,console.log(`💾 Bank ${e+1} renamed to "${t}"`),!0):!1}loadBanksFromState(e){if(!Array.isArray(e)||e.length!==8){console.warn("💾 Invalid banks array, resetting to empty"),this.banks=new Array(8).fill(null);return}this.banks=e.map(n=>n?{name:n.name||"Unnamed",streams:n.streams||[],patterns:n.patterns||{},bpm:n.bpm||120,timelineLength:n.timelineLength||16,timestamp:n.timestamp||new Date().toISOString()}:null);const t=this.banks.filter(n=>n!==null).length;console.log(`💾 Loaded ${t} pattern banks`)}saveBanksToState(){return this.banks.map(e=>e?{name:e.name,streams:JSON.parse(JSON.stringify(e.streams)),patterns:JSON.parse(JSON.stringify(e.patterns)),bpm:e.bpm,timelineLength:e.timelineLength,timestamp:e.timestamp}:null)}}const yt=Object.freeze(Object.defineProperty({__proto__:null,EmojiParticles:Vl,EmojiPatternBankManager:If,EmojiSequencer:Lf,EmojiStreamManager:Pf,ParticleSystem:Qr,destroyParticles:Wr,getParticleSystemInstance:Rf,initParticles:Co,updateParticles:Af},Symbol.toStringTag,{value:"Module"}));console.log("🎶 audio.js loaded");let Lr=null,Hn=null,vu=null,_n=null,Ir=!1,wl=1,Df=[];const eS=44100,Uf=1024,yu=Uf/2,tS={min:20,max:250},nS={min:250,max:2e3},iS={min:2e3,max:8e3};let Cn={bass:0,mid:0,treble:0,isEnabled:!1,sensitivity:1};function Nf(){console.log("🎶 Audio system initialized")}function sS(){return Ir?(console.log("🎶 Audio already enabled"),Promise.resolve()):navigator.mediaDevices.getUserMedia({audio:!0}).then(i=>(console.log("🎤 Microphone initialized"),Lr=new(window.AudioContext||window.webkitAudioContext),Hn=Lr.createAnalyser(),Hn.fftSize=Uf,Hn.smoothingTimeConstant=.8,vu=Lr.createMediaStreamSource(i),vu.connect(Hn),_n=new Uint8Array(Hn.frequencyBinCount),Ir=!0,Cn.isEnabled=!0,oS(),Hl(),!0)).catch(i=>(console.warn("🎶 Microphone access denied or failed:",i.message),Ir=!1,Cn.isEnabled=!1,Hl(),!1))}function Ff(i){Df.push(i)}function oS(){function i(){if(!Ir||!Hn||!_n)return;Hn.getByteFrequencyData(_n);const e=Cl(tS),t=Cl(nS),n=Cl(iS);Cn.bass=Math.min(1,e/255*wl),Cn.mid=Math.min(1,t/255*wl),Cn.treble=Math.min(1,n/255*wl),Hl(),requestAnimationFrame(i)}i()}function Cl(i){if(!_n||!Lr)return 0;const e=eS/2,t=Math.floor(i.min/e*yu),n=Math.floor(i.max/e*yu);let s=0,o=0;for(let r=t;r<=n&&r<_n.length;r++)s+=_n[r],o++;return o>0?s/o:0}function Hl(){const i={bass:Cn.bass,mid:Cn.mid,treble:Cn.treble,isEnabled:Cn.isEnabled,sensitivity:Cn.sensitivity};Df.forEach(e=>{try{e(i)}catch(t){console.error("🎶 Error in audio callback:",t)}})}function Of(){if(!Hn||!_n)return;Hn.getByteFrequencyData(_n);const i=Tl(_n.slice(0,10))/255,e=Tl(_n.slice(10,40))/255,t=Tl(_n.slice(40,80))/255;d.audio.bass=i,d.audio.mid=e,d.audio.treble=t;const n=d.vessel.audioSmoothing;d.audio.smooth?d.audio.smooth={bass:n*d.audio.smooth.bass+(1-n)*i,mid:n*d.audio.smooth.mid+(1-n)*e,treble:n*d.audio.smooth.treble+(1-n)*t}:d.audio.smooth={bass:i,mid:e,treble:t},d.audioReactive||(d.audio.bass=.5,d.audio.mid=.5,d.audio.treble=.5,d.audio.smooth={bass:.5,mid:.5,treble:.5})}function Tl(i){return i.reduce((e,t)=>e+t,0)/i.length}const rS=Object.freeze(Object.defineProperty({__proto__:null,enableAudio:sS,initAudio:Nf,onAudioUpdate:Ff,updateAudio:Of},Symbol.toStringTag,{value:"Module"}));console.log("🚢 vessel.js loaded");let Ct,Fi,Pi=null;const Su=["lattice","hoops","shells"];function aS(){return[{axis:[0,0,1],angle:0},{axis:[0,0,1],angle:Math.PI/4},{axis:[0,0,1],angle:Math.PI/2},{axis:[0,0,1],angle:3*Math.PI/4},{axis:[1,0,0],angle:Math.PI/4},{axis:[1,0,0],angle:-Math.PI/4},{axis:[0,1,0],angle:Math.PI/4},{axis:[0,1,0],angle:-Math.PI/4},{axis:[1,0,0],angle:3*Math.PI/4},{axis:[1,0,0],angle:-(3*Math.PI)/4},{axis:[0,1,0],angle:3*Math.PI/4},{axis:[0,1,0],angle:-(3*Math.PI)/4}]}function lS(){const i=[];for(let e=0;e<6;e++){const t=(e-2.5)*.4;i.push({axis:[0,0,1],angle:0,position:[0,t,0],scale:1-Math.abs(t)*.1})}return i}function cS(){const i=[];return[.8,1,1.2].forEach(t=>{for(let n=0;n<4;n++)i.push({axis:[0,0,1],angle:n*Math.PI/2,radius:t})}),i}function dS(){return[{dir:[1,0,0]},{dir:[-1,0,0]},{dir:[0,1,0]},{dir:[0,-1,0]},{dir:[0,0,1]},{dir:[0,0,-1]}]}function Mu(i){switch(i){case"hoops":return lS();case"shells":return cS();case"conflat6":return dS();case"lattice":default:return aS()}}let hS=class{constructor(e,t,n){const o=new ui(6,6),r=new hi({map:null,transparent:!0,opacity:.9});this.plane=new Tt(o,r),this.plane.position.set(0,-5,0),this.plane.rotation.x=-Math.PI/2,e.add(this.plane),this.scene=e,this.renderTarget=new vn(1024,1024),this.plane.material.map=this.renderTarget.texture,this.renderer=t,this.camera=n,this.shadowCam=new Yr(-3,3,3,-3,.1,20),this.shadowCam.position.set(0,5,0),this.shadowCam.lookAt(0,0,0)}render(){if(!Ct||!this.renderer)return;const e=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.renderTarget),this.renderer.clear(),this.renderer.render(Ct,this.shadowCam),this.renderer.setRenderTarget(e)}dispose(){this.plane&&(this.scene.remove(this.plane),this.plane.geometry.dispose(),this.plane.material.dispose()),this.renderTarget&&this.renderTarget.dispose()}};function hc(i,e,t){if(console.log("🚢 Initializing vessel system..."),Ct=new Es,(d.vessel.mode||"gyre")==="conflat6"){const s=Mu("conflat6"),o=2,r=64,a=[16711680,65280,255,16776960,65535,16711935];s.forEach((c,h)=>{const{dir:l}=c,f=new Jr(o,r),p=new hi({color:a[h%a.length],transparent:!0,opacity:d.vessel.opacity||.4,side:pn}),g=new Tt(f,p);g.lookAt(new I(...l)),Ct.add(g)}),Ct.rotation.set(Math.PI/6,Math.PI/6,0),!Pi&&e&&t&&(Pi=new hS(i,e,t)),console.log("✅ Vessel initialized - Conflat 6 (cube-sphere) mode")}else Fi=new ff({color:d.vessel.color,transparent:!0,opacity:d.vessel.opacity}),Mu(d.vessel.layout).forEach(o=>{const{axis:r,angle:a,position:c,scale:h,radius:l}=o,f=new nc(l||1,.03,24,100),p=new Tt(f,Fi);p.rotateOnAxis(new I(...r),a),c&&p.position.set(...c),h&&p.scale.setScalar(h),Ct.add(p)}),Pi&&(Pi.dispose(),Pi=null),console.log(`✅ Vessel initialized - Gyre mode (${d.vessel.layout} layout)`);Ct.scale.setScalar(d.vessel.scale),Ct.visible=d.vessel.enabled,Ct.layers.enable(Ci),i.add(Ct)}function Bf(){Pi&&d.vessel.mode==="conflat6"&&d.vessel.enabled&&Pi.render()}function zf(){if(!Ct||!bt||(Ct.visible=d.vessel.enabled,!d.vessel.enabled))return;d.vessel.spinEnabled&&(Ct.rotation.y+=d.vessel.spinSpeed),bt.geometry.computeBoundingSphere();let e=bt.geometry.boundingSphere.radius*(d.vessel.scaleMultiplier||1.2)*d.vessel.scale;Ct.scale.set(e,e,e),Fi.opacity=d.vessel.opacity;const t=d.colorLayers.vessel,n=Vi(),s=(n.bass+n.mid+n.treble)/3;let o=t.baseColor;if(d.audioReactive){const a=1+(n.bass-.5)*.1;Ct.scale.multiplyScalar(a),Fi.opacity=bo.clamp(.2+n.mid*.6,.2,.8),o=Zr(t.baseColor,t.audioColor,t.audioIntensity,s),Math.random()<.02&&console.log(`🎨 Vessel: base=${t.baseColor} audio=${t.audioColor} final=${o}`)}Fi.color.set(o);const r=document.getElementById("vessel-debug");r&&(r.textContent=`Radius: ${e.toFixed(2)}`)}function uS(i){d.vessel.layoutIndex=(d.vessel.layoutIndex+1)%Su.length,d.vessel.layout=Su[d.vessel.layoutIndex],console.log(`🔄 Vessel layout cycled to: ${d.vessel.layout}`),kf(i),fS()}function kf(i,e,t){Ct&&(i.remove(Ct),Ct.clear()),hc(i,e,t),Fi&&Fi.color.set(d.vessel.color)}function fS(){const i=document.getElementById("vessel-layout-dropdown");i&&(i.value=d.vessel.layout,console.log(`🔄 HUD synced to layout: ${d.vessel.layout}`))}function Vf(){return Ct}console.log("🚢 Vessel module ready");const jr=Object.freeze(Object.defineProperty({__proto__:null,cycleLayout:uS,getVesselGroup:Vf,initVessel:hc,reinitVessel:kf,renderShadowProjection:Bf,updateVessel:zf},Symbol.toStringTag,{value:"Module"})),pS={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ro{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const mS=new Yr(-1,1,1,-1,0,1);class gS extends $t{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}}const xS=new gS;class Gl{constructor(e){this._mesh=new Tt(xS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,mS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class _S extends Ro{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yl.clone(e.uniforms),this.material=new rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Gl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class bu extends Ro{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class vS extends Ro{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class yS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ke);this._width=n.width,this._height=n.height,t=new vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _S(pS),this.copyPass.material.blending=jn,this.clock=new By}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}bu!==void 0&&(r instanceof bu?n=!0:r instanceof vS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class SS extends Ro{constructor(e,t,n=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new it}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}}const MS={name:"AfterimageShader",uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};class bS extends Ro{constructor(e=.96){super(),this.shader=MS,this.uniforms=Yl.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new vn(window.innerWidth,window.innerHeight,{magFilter:Vt,type:Bi}),this.textureOld=new vn(window.innerWidth,window.innerHeight,{magFilter:Vt,type:Bi}),this.compFsMaterial=new rn({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new Gl(this.compFsMaterial),this.copyFsMaterial=new hi,this.copyFsQuad=new Gl(this.copyFsMaterial)}render(e,t,n){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=n.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.map=this.textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this.copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.copyFsQuad.render(e));const s=this.textureOld;this.textureOld=this.textureComp,this.textureComp=s}setSize(e,t){this.textureComp.setSize(e,t),this.textureOld.setSize(e,t)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}console.log("🎞️ postprocessing.js loaded");function ES(i,e,t){const n=new yS(i),s=new SS(e,t);n.addPass(s);const o=new bS;return o.uniforms.damp.value=.96,n.addPass(o),console.log("🎞️ EffectComposer initialized with AfterimagePass (damp: 0.96)"),{composer:n,afterimagePass:o}}console.log("💾 presets.js loaded");const Hf="morphing_interface_presets";let wS=[];function Gf(){console.log("💾 Presets system initialized")}function Oi(i,e,t="Uncategorized",n=[]){var a,c,h,l,f,p,g,_,v,m,u,y,S,w,U,A,R,F,C,b,P,W,G,J,Z,Y,K,$,he,ge,ve,Ge,Je,X,ne,fe,le,Oe;if(!i||typeof i!="string")return console.warn("💾 Invalid preset name:",i),!1;const s=js();if(!d.colorLayers)return console.warn("⚠️ savePreset(): colorLayers missing in global state"),!1;const o=Be=>{var Xe,L,je,$e,tt,Pe,Ne,Ve,ze,ct,T,M,V;return Be==="geometry"?{baseColor:((L=(Xe=d.colorLayers)==null?void 0:Xe.geometry)==null?void 0:L.baseColor)??"#ffffff",audioColor:(($e=(je=d.colorLayers)==null?void 0:je.geometry)==null?void 0:$e.audioColor)??"#000000",audioIntensity:((Pe=(tt=d.colorLayers)==null?void 0:tt.geometry)==null?void 0:Pe.audioIntensity)??1}:{baseColor:((Ve=(Ne=d.colorLayers)==null?void 0:Ne[Be])==null?void 0:Ve.baseColor)??"#ffffff",audioColor:((ct=(ze=d.colorLayers)==null?void 0:ze[Be])==null?void 0:ct.audioColor)??"#000000",audioIntensity:((M=(T=d.colorLayers)==null?void 0:T[Be])==null?void 0:M.audioIntensity)??1,opacity:((V=d==null?void 0:d[Be])==null?void 0:V.opacity)??1}},r={name:i,timestamp:new Date().toISOString(),category:t||"Uncategorized",tags:Array.isArray(n)?n:[],visualSettings:{...d.lighting},morphWeights:{...d.morphWeights},color:d.color,idleSpin:d.idleSpin,scale:d.scale,colorLayers:{geometry:o("geometry"),vessel:o("vessel"),shadows:o("shadows"),particles:o("particles")},vessel:{opacity:((a=d.vessel)==null?void 0:a.opacity)??.5,scale:((c=d.vessel)==null?void 0:c.scale)??1,color:((h=d.vessel)==null?void 0:h.color)??"#00ff00",enabled:((l=d.vessel)==null?void 0:l.enabled)??!0,spinEnabled:((f=d.vessel)==null?void 0:f.spinEnabled)??!1,spinSpeed:((p=d.vessel)==null?void 0:p.spinSpeed)??.0035,layout:((g=d.vessel)==null?void 0:g.layout)??"lattice",layoutIndex:((_=d.vessel)==null?void 0:_.layoutIndex)??0,audioSmoothing:((v=d.vessel)==null?void 0:v.audioSmoothing)??.7,hueShiftRange:((m=d.vessel)==null?void 0:m.hueShiftRange)??20},shadows:{enabled:((u=d.shadows)==null?void 0:u.enabled)??!0,ground:((y=d.shadows)==null?void 0:y.ground)??!0,backdrop:((S=d.shadows)==null?void 0:S.backdrop)??!0,opacity:((w=d.shadows)==null?void 0:w.opacity)??.25,color:((U=d.shadows)==null?void 0:U.color)??"#000000"},sprites:{enabled:((A=d.sprites)==null?void 0:A.enabled)??!0,count:((R=d.sprites)==null?void 0:R.count)??200},particles:{enabled:((F=d.particles)==null?void 0:F.enabled)??!0,count:((C=d.particles)==null?void 0:C.count)??5e3,layout:((b=d.particles)==null?void 0:b.layout)??"cube",hue:((P=d.particles)==null?void 0:P.hue)??0,size:((W=d.particles)==null?void 0:W.size)??.02,opacity:((G=d.particles)==null?void 0:G.opacity)??.5,organicMotion:((J=d.particles)==null?void 0:J.organicMotion)??!1,organicStrength:((Z=d.particles)==null?void 0:Z.organicStrength)??.2,audioReactiveHue:((Y=d.particles)==null?void 0:Y.audioReactiveHue)??!1,velocity:((K=d.particles)==null?void 0:K.velocity)??.05,orbitalSpeed:(($=d.particles)==null?void 0:$.orbitalSpeed)??.05,motionSmoothness:((he=d.particles)==null?void 0:he.motionSmoothness)??.5,spread:((ge=d.particlesMotion)==null?void 0:ge.spread)??1,minCount:((ve=d.particles)==null?void 0:ve.minCount)??1e3,maxCount:((Ge=d.particles)==null?void 0:Ge.maxCount)??1e4,minSize:((Je=d.particles)==null?void 0:Je.minSize)??.005,maxSize:((X=d.particles)==null?void 0:X.maxSize)??.1},emojiStreams:d.emojiStreams??[],emojiSequencer:{enabled:((ne=d.emojiSequencer)==null?void 0:ne.enabled)??!1,bpm:((fe=d.emojiSequencer)==null?void 0:fe.bpm)??120,patterns:((le=d.emojiSequencer)==null?void 0:le.patterns)??{},timelineLength:((Oe=d.emojiSequencer)==null?void 0:Oe.timelineLength)??16},emojiBanks:d.emojiBanks??[null,null,null,null,null,null,null,null],currentBank:d.currentBank??null};return s[i]=r,jf(s),console.log(`💾 Preset saved: ${i}`),fc({action:"saved",presetName:i}),!0}function uc(i){var n,s,o;if(!i||typeof i!="string")return console.warn("💾 Invalid preset name:",i),null;const t=js()[i];if(!t)return console.warn(`💾 Preset not found: ${i}`),null;if(t.visualSettings&&Object.assign(d.lighting,t.visualSettings),t.morphWeights&&Object.assign(d.morphWeights,t.morphWeights),t.color&&(d.color=t.color),t.idleSpin!==void 0&&(d.idleSpin=t.idleSpin),t.scale!==void 0&&(d.scale=t.scale),t.vessel){if(t.vessel.opacity!==void 0&&(d.vessel.opacity=t.vessel.opacity),t.vessel.scale!==void 0&&(d.vessel.scale=t.vessel.scale),t.vessel.color!==void 0&&(d.vessel.color=t.vessel.color),t.vessel.enabled!==void 0&&(d.vessel.enabled=t.vessel.enabled),t.vessel.spinEnabled!==void 0&&(d.vessel.spinEnabled=t.vessel.spinEnabled),t.vessel.spinSpeed!==void 0&&(d.vessel.spinSpeed=t.vessel.spinSpeed),t.vessel.layout!==void 0){d.vessel.layout=t.vessel.layout;const r=["lattice","hoops","shells"];d.vessel.layoutIndex=t.vessel.layoutIndex!==void 0?t.vessel.layoutIndex:r.indexOf(t.vessel.layout),we(async()=>{const{reinitVessel:a}=await Promise.resolve().then(()=>jr);return{reinitVessel:a}},void 0).then(({reinitVessel:a})=>{we(async()=>{const{scene:c}=await Promise.resolve().then(()=>As);return{scene:c}},void 0).then(({scene:c})=>{a(c)})})}t.vessel.audioSmoothing!==void 0&&(d.vessel.audioSmoothing=t.vessel.audioSmoothing),t.vessel.hueShiftRange!==void 0&&(d.vessel.hueShiftRange=t.vessel.hueShiftRange)}if(t.shadows?(t.shadows.enabled!==void 0&&(d.shadows.enabled=t.shadows.enabled),t.shadows.ground!==void 0&&(d.shadows.ground=t.shadows.ground),t.shadows.backdrop!==void 0&&(d.shadows.backdrop=t.shadows.backdrop),t.shadows.opacity!==void 0&&(d.shadows.opacity=t.shadows.opacity),t.shadows.color!==void 0&&(d.shadows.color=t.shadows.color)):(d.shadows.enabled=!0,d.shadows.ground=!0,d.shadows.backdrop=!0,d.shadows.opacity=.25,d.shadows.color="#000000"),t.sprites?(d.sprites.enabled=t.sprites.enabled??!0,d.sprites.count=t.sprites.count??200):d.sprites={enabled:!0,count:200},t.particles?(t.particles.enabled!==void 0&&(d.particles.enabled=t.particles.enabled),t.particles.count!==void 0&&(d.particles.count=t.particles.count),t.particles.layout!==void 0&&(d.particles.layout=t.particles.layout),d.particles.hue=t.particles.hue??0,d.particles.size=t.particles.size??.02,d.particles.opacity=t.particles.opacity??.5,d.particles.organicMotion=t.particles.organicMotion??!1,d.particles.organicStrength=t.particles.organicStrength??.2,d.particles.audioReactiveHue=t.particles.audioReactiveHue??!1,d.particles.velocity=t.particles.velocity??((n=t.particles.motion)==null?void 0:n.velocity)??.05,d.particles.orbitalSpeed=t.particles.orbitalSpeed??t.particles.velocity??.05,d.particles.motionSmoothness=t.particles.motionSmoothness??.5,d.particles.minCount=t.particles.minCount??1e3,d.particles.maxCount=t.particles.maxCount??1e4,d.particles.minSize=t.particles.minSize??.005,d.particles.maxSize=t.particles.maxSize??.1,d.particlesMotion={velocity:.5,spread:t.particles.spread??((s=t.particles.motion)==null?void 0:s.spread)??1},(o=d==null?void 0:d.particles)!=null&&o.enabled?(Co(d.particles),console.log("✨ Particles reinitialized via initParticles")):d!=null&&d.particles||console.warn("⚠️ No state.particles found when loading preset")):(d.particles.layout="cube",d.particles.hue=0,d.particles.size=.02,d.particles.opacity=.5,d.particles.organicMotion=!1,d.particles.organicStrength=.2,d.particles.audioReactiveHue=!1,d.particles.velocity=.05,d.particles.orbitalSpeed=.05,d.particles.motionSmoothness=.5,d.particles.minCount=1e3,d.particles.maxCount=1e4,d.particles.minSize=.005,d.particles.maxSize=.1,d.particlesMotion={velocity:.5,spread:1}),t.colorLayers?(t.colorLayers.geometry&&(d.colorLayers.geometry.baseColor=t.colorLayers.geometry.baseColor??"#00ff00",d.colorLayers.geometry.audioColor=t.colorLayers.geometry.audioColor??"#ff0000",d.colorLayers.geometry.audioIntensity=t.colorLayers.geometry.audioIntensity??.5),t.colorLayers.vessel&&(d.colorLayers.vessel.baseColor=t.colorLayers.vessel.baseColor??"#00ff00",d.colorLayers.vessel.audioColor=t.colorLayers.vessel.audioColor??"#00ffff",d.colorLayers.vessel.audioIntensity=t.colorLayers.vessel.audioIntensity??.3),t.colorLayers.shadows&&(d.colorLayers.shadows.baseColor=t.colorLayers.shadows.baseColor??"#000000",d.colorLayers.shadows.audioColor=t.colorLayers.shadows.audioColor??"#333333",d.colorLayers.shadows.audioIntensity=t.colorLayers.shadows.audioIntensity??.2),t.colorLayers.particles&&(d.colorLayers.particles.baseColor=t.colorLayers.particles.baseColor??"#ffff00",d.colorLayers.particles.audioColor=t.colorLayers.particles.audioColor??"#ff00ff",d.colorLayers.particles.audioIntensity=t.colorLayers.particles.audioIntensity??.7),console.log("💾 ColorLayers loaded from preset")):console.log("💾 Legacy preset: colorLayers not found, using defaults"),t.emojiStreams?(d.emojiStreams=t.emojiStreams,window.emojiStreamManager&&(window.emojiStreamManager.loadStreams(t.emojiStreams),console.log(`🎨 Loaded ${t.emojiStreams.length} emoji streams`)),window.rebuildEmojiMixerUI&&window.rebuildEmojiMixerUI()):(d.emojiStreams=[],window.rebuildEmojiMixerUI&&window.rebuildEmojiMixerUI()),t.emojiSequencer?(d.emojiSequencer={enabled:t.emojiSequencer.enabled??!1,bpm:t.emojiSequencer.bpm??120,patterns:t.emojiSequencer.patterns??{},timelineLength:t.emojiSequencer.timelineLength??16,currentBeat:0},window.emojiSequencer&&(window.emojiSequencer.loadFromState(d.emojiSequencer),console.log(`🎶 Sequencer loaded: ${d.emojiSequencer.bpm} BPM, ${d.emojiSequencer.timelineLength} beats`)),window.rebuildSequencerGrid&&window.rebuildSequencerGrid()):(d.emojiSequencer={enabled:!1,bpm:120,currentBeat:0,patterns:{},timelineLength:16},window.rebuildSequencerGrid&&window.rebuildSequencerGrid()),t.emojiBanks){if(d.emojiBanks=t.emojiBanks,d.currentBank=t.currentBank??null,window.emojiBankManager){window.emojiBankManager.loadBanksFromState(t.emojiBanks);const r=d.emojiBanks.filter(a=>a!==null).length;console.log(`💾 Loaded ${r} pattern banks`)}window.updateBankButtonStates&&window.updateBankButtonStates()}else d.emojiBanks=[null,null,null,null,null,null,null,null],d.currentBank=null,window.updateBankButtonStates&&window.updateBankButtonStates();return console.log(`💾 Preset loaded: ${i}`),fc({action:"loaded",presetName:i,presetData:t}),t}function Wf(i){if(!i||typeof i!="string")return console.warn("💾 Invalid preset name:",i),!1;const e=js();return e[i]?(delete e[i],jf(e),console.log(`💾 Preset deleted: ${i}`),fc({action:"deleted",presetName:i}),!0):(console.warn(`💾 Preset not found: ${i}`),!1)}function Po(){const i=js();return Object.keys(i).sort()}typeof window<"u"&&(window.__PRESET_NAMES__=Po);function Ws(i){return js()[i]||null}function js(){try{const i=localStorage.getItem(Hf);return i?JSON.parse(i):{}}catch(i){return console.error("💾 Error reading presets from localStorage:",i),{}}}function jf(i){try{localStorage.setItem(Hf,JSON.stringify(i))}catch(e){console.error("💾 Error saving presets to localStorage:",e)}}function fc(i){wS.forEach(e=>{try{e(i)}catch(t){console.error("💾 Error in preset callback:",t)}})}function $f(){const i=js();Object.keys(i).length===0&&(console.log("💾 Creating default presets..."),Oi("Cube Default"),Oi("Sphere Focus"),Oi("Mixed Blend"))}const ai=Object.freeze(Object.defineProperty({__proto__:null,createDefaultPresets:$f,deletePreset:Wf,getPresetData:Ws,initPresets:Gf,listPresets:Po,loadPreset:uc,savePreset:Oi},Symbol.toStringTag,{value:"Module"}));console.log("🎛️ controlBindings.js loaded");const yo={geometry:{baseColor:{source:"HUD",midi:null,statePath:"colorLayers.geometry.baseColor"},audioColor:{source:"HUD",midi:null,statePath:"colorLayers.geometry.audioColor"},audioIntensity:{source:"HUD",midi:"CC20",statePath:"colorLayers.geometry.audioIntensity"}},vessel:{baseColor:{source:"HUD",midi:null,statePath:"colorLayers.vessel.baseColor"},audioColor:{source:"HUD",midi:null,statePath:"colorLayers.vessel.audioColor"},audioIntensity:{source:"HUD",midi:"CC21",statePath:"colorLayers.vessel.audioIntensity"}},shadows:{baseColor:{source:"HUD",midi:null,statePath:"colorLayers.shadows.baseColor"},audioColor:{source:"HUD",midi:null,statePath:"colorLayers.shadows.audioColor"},audioIntensity:{source:"HUD",midi:"CC22",statePath:"colorLayers.shadows.audioIntensity"}},particles:{baseColor:{source:"HUD",midi:null,statePath:"colorLayers.particles.baseColor"},audioColor:{source:"HUD",midi:null,statePath:"colorLayers.particles.audioColor"},audioIntensity:{source:"HUD",midi:"CC23",statePath:"colorLayers.particles.audioIntensity"},hueShift:{source:"HUD/MIDI",midi:"CC21",statePath:"particles.hue"}},morph:{sphereWeight:{source:"HUD/MIDI",midi:"CC10",statePath:"morphBaseWeights[0]"},cubeWeight:{source:"HUD/MIDI",midi:null,statePath:"morphBaseWeights[1]"},pyramidWeight:{source:"HUD/MIDI",midi:"CC22",statePath:"morphBaseWeights[2]"},torusWeight:{source:"HUD/MIDI",midi:"CC23",statePath:"morphBaseWeights[3]"}}},So={};Object.keys(yo).forEach(i=>{Object.keys(yo[i]).forEach(e=>{const t=yo[i][e];t.midi&&(So[t.midi]={category:i,property:e,statePath:t.statePath})})});function Xf(i,e,t,n="HUD"){var r;const s=(r=yo[i])==null?void 0:r[e];if(!s){console.warn(`🎛️ [ControlBinding] Unknown binding: ${i}.${e}`);return}const o=s.statePath;console.log(`🎛️ [ControlUpdate] ${n} → ${i}.${e} = ${t} (${o})`),qf(d,o,t);try{document.dispatchEvent(new CustomEvent("controlUpdate",{detail:{category:i,property:e,value:t,source:n,statePath:o}}))}catch{}}function qf(i,e,t){const n=e.match(/^(.+)\[(\d+)\]$/);if(n){const r=n[1],a=parseInt(n[2]),c=r.split(".");let h=i;for(let f=0;f<c.length-1;f++)h=h[c[f]];const l=c[c.length-1];h[l]&&Array.isArray(h[l])&&(h[l][a]=t);return}const s=e.split(".");let o=i;for(let r=0;r<s.length-1;r++)o[s[r]]||(o[s[r]]={}),o=o[s[r]];o[s[s.length-1]]=t}function Yf(i){const e=`CC${i}`;return So[e]||null}function Kf(i,e,t=n=>n/127){const n=Yf(i);if(n){const s=t(e);return Xf(n.category,n.property,s,"MIDI"),!0}return!1}function ei(i,e,t="Preset"){console.log(`🎛️ [ControlUpdate] ${t} → ${i} = ${e}`),qf(d,i,e);try{document.dispatchEvent(new CustomEvent("controlUpdate",{detail:{statePath:i,value:e,source:t}}))}catch{}}function Jf(){console.log("🎛️ [ControlBinding] Initializing unified binding system"),console.log(`🎛️ [ControlBinding] Loaded ${Object.keys(yo).length} categories`),console.log(`🎛️ [ControlBinding] MIDI mappings: ${Object.keys(So).length} CCs`),Object.keys(So).forEach(i=>{const e=So[i];console.log(`🎛️ [MIDI Map] ${i} → ${e.category}.${e.property}`)})}console.log("🎛️ Control binding system ready (Phase 11.2.3)");const CS=Object.freeze(Object.defineProperty({__proto__:null,applyBinding:Xf,applyDirectUpdate:ei,applyMIDIBinding:Kf,getBindingForCC:Yf,initDefaultBindings:Jf},Symbol.toStringTag,{value:"Module"}));console.log("💾 presetRouter.js loaded");function ea(){var i;(i=d.interpolation)!=null&&i.active&&(d.interpolation.active=!1,d.interpolation.startTime=null,d.interpolation.startState=null,d.interpolation.targetState=null,console.log("🎚️ Interpolation stopped cleanly"))}function pc(){console.log("♻️ Chain reset to beginning"),z.active=!1,z.paused=!1,z.currentIndex=0,z.pausedAt=null,z.pausedProgress=0,z.presets=[],z.duration=2e3,z.loop=!1,z.shuffle=!1,z.stepStartTime=null,z.currentChainName=null,ea(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("chainReset"))}function TS(){ea(),Lo(),vf(),console.log("♻️ Reset to baseline"),typeof window<"u"&&window.dispatchEvent(new CustomEvent("appReset",{detail:{ok:!0}}))}cc(i=>{if(i.type==="app:reset"){TS();return}if(i.presetAction!==void 0){if(i.presetAction==="chain:start"){const e=i.chainPresets||[],t=i.chainDuration??2e3;if(!Array.isArray(e)||e.length===0){console.warn("💾 [PresetRouter] Missing preset list for chain, aborting");return}const n={loop:i.chainLoop??!1,shuffle:i.chainShuffle??!1};gc(e,t,n);return}if(i.presetAction==="chain:stop"){Lo();return}if(i.presetAction==="chain:save"){const e=i.chainName,t=i.chainPresets||[],n=i.chainDuration??2e3,s=i.chainLoop??!1,o=i.chainShuffle??!1;xc(e,t,n,s,o);return}if(i.presetAction==="chain:load"){rp(i.chainName);return}if(i.presetAction==="chain:delete"){ap(i.chainName);return}if(i.presetAction==="chain:export"){up();return}if(i.presetAction==="chain:import"){i.file?fp(i.file):console.warn("💾 [PresetRouter] Import chains missing file");return}if(i.presetAction==="chain:pause"){ep();return}if(i.presetAction==="chain:resume"){tp();return}if(i.presetAction==="chain:skipNext"){np();return}if(i.presetAction==="chain:skipPrev"){ip();return}if(i.presetAction==="chain:reset"){pc();return}AS(i.presetAction,i.presetName,i.category,i.tags)}});function AS(i,e,t,n){if(console.log("💾 [PresetRouter] handlePresetAction called:",{action:i,presetName:e,category:t,tags:n}),!e&&i!=="export"&&i!=="import"){console.warn("💾 [PresetRouter] Missing preset name, aborting");return}switch(i){case"save":const s={morphWeights:{...d.morphWeights},morphState:{...d.morphState},rotationX:d.rotationX,rotationY:d.rotationY,scale:d.scale,idleSpin:d.idleSpin,color:d.color,hue:d.hue,lighting:{...d.lighting},audio:{...d.audio},colorLayers:JSON.parse(JSON.stringify(d.colorLayers))};console.log("💾 [PresetRouter] Calling savePreset with:",{presetName:e,category:t,tags:n,stateKeys:Object.keys(s)}),Oi(e,s,t,n)&&(console.log(`💾 Saved preset: ${e} [${t}] ${n?n.join(", "):""}`),d.presets.currentPresetName=e,we(async()=>{const{updatePresetList:l}=await Promise.resolve().then(()=>vo);return{updatePresetList:l}},void 0).then(({updatePresetList:l})=>{we(async()=>{const{listPresets:f}=await Promise.resolve().then(()=>ai);return{listPresets:f}},void 0).then(({listPresets:f})=>{l(f())})}));break;case"load":if(d.interpolation.enabled){mc(e);break}const o=uc(e);o&&o.state&&(console.log(`💾 Loading preset: ${e} (Phase 11.2.3+ unified routing, interpolation disabled)`),o.state.morphWeights&&(oc(o.state.morphWeights),console.log("🎛️ [ControlUpdate] Preset → morphWeights (via setMorphWeights)")),o.state.morphState&&(Object.assign(d.morphState,o.state.morphState),console.log("🎛️ [ControlUpdate] Preset → morphState (direct)")),o.state.rotationX!==void 0&&ei("rotationX",o.state.rotationX,"Preset"),o.state.rotationY!==void 0&&ei("rotationY",o.state.rotationY,"Preset"),o.state.scale!==void 0&&ei("scale",o.state.scale,"Preset"),o.state.idleSpin!==void 0&&ei("idleSpin",o.state.idleSpin,"Preset"),o.state.color!==void 0&&(rc(o.state.color),console.log(`🎛️ [ControlUpdate] Preset → color = ${o.state.color} (via setColor)`)),o.state.hue!==void 0&&(ac(o.state.hue),console.log(`🎛️ [ControlUpdate] Preset → hue = ${o.state.hue} (via setHue)`)),o.state.lighting&&Object.keys(o.state.lighting).forEach(l=>{ei(`lighting.${l}`,o.state.lighting[l],"Preset")}),o.state.audio&&Object.keys(o.state.audio).forEach(l=>{ei(`audio.${l}`,o.state.audio[l],"Preset")}),o.state.colorLayers&&Object.keys(o.state.colorLayers).forEach(l=>{Object.keys(o.state.colorLayers[l]).forEach(f=>{ei(`colorLayers.${l}.${f}`,o.state.colorLayers[l][f],"Preset")})}),d.presets.currentPresetName=e,console.log(`✅ Preset "${e}" loaded via unified binding system`));break;case"update":const r=Ws(e),a=t||(r?r.category:"Uncategorized"),c=n||(r?r.tags:[]),h={morphWeights:{...d.morphWeights},morphState:{...d.morphState},rotationX:d.rotationX,rotationY:d.rotationY,scale:d.scale,idleSpin:d.idleSpin,color:d.color,hue:d.hue,lighting:{...d.lighting},audio:{...d.audio},colorLayers:JSON.parse(JSON.stringify(d.colorLayers))};Oi(e,h,a,c)&&(console.log(`💾 Updated preset: ${e} [${a}] ${c.join(", ")}`),d.presets.currentPresetName=e,we(async()=>{const{updatePresetList:l}=await Promise.resolve().then(()=>vo);return{updatePresetList:l}},void 0).then(({updatePresetList:l})=>{we(async()=>{const{listPresets:f}=await Promise.resolve().then(()=>ai);return{listPresets:f}},void 0).then(({listPresets:f})=>{l(f())})}));break;case"delete":Wf(e)&&(console.log(`💾 Deleted preset: ${e}`),d.presets.currentPresetName===e&&(d.presets.currentPresetName=null),we(async()=>{const{updatePresetList:l}=await Promise.resolve().then(()=>vo);return{updatePresetList:l}},void 0).then(({updatePresetList:l})=>{we(async()=>{const{listPresets:f}=await Promise.resolve().then(()=>ai);return{listPresets:f}},void 0).then(({listPresets:f})=>{l(f())})}));break;case"export":RS();break;case"import":update.file?PS(update.file):console.warn("💾 Import action missing file");break;default:console.warn(`💾 Unknown preset action: ${i}`)}}function RS(){const i={},e=Po();e.forEach(r=>{const a=Ws(r);a&&(i[r]=a)});const t=JSON.stringify(i,null,2),n=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`presets_${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s),console.log(`💾 ✅ Exported ${e.length} presets to ${o.download}`);try{document.dispatchEvent(new CustomEvent("presetsExported",{detail:{presetCount:e.length,filename:o.download}}))}catch{}}function PS(i){const e=new FileReader;e.onload=t=>{try{const n=JSON.parse(t.target.result);let s=0,o=0;Object.keys(n).forEach(r=>{const a=n[r];Ws(r)?o++:s++;const h={morphWeights:a.morphWeights||{},morphState:a.morphState||{},rotationX:a.rotationX||0,rotationY:a.rotationY||0,scale:a.scale||1,idleSpin:a.idleSpin!==void 0?a.idleSpin:!0,color:a.color||"#00ff00",hue:a.hue||0,lighting:a.visualSettings||a.lighting||{},audio:a.audio||{},colorLayers:a.colorLayers||{},vessel:a.vessel||{},shadows:a.shadows||{},sprites:a.sprites||{},particles:a.particles||{}},l=a.category||"Uncategorized",f=Array.isArray(a.tags)?a.tags:[];Oi(r,h,l,f)}),console.log(`💾 ✅ Imported ${s+o} presets (${s} new, ${o} overwritten) from ${i.name}`),we(async()=>{const{updatePresetList:r}=await Promise.resolve().then(()=>vo);return{updatePresetList:r}},void 0).then(({updatePresetList:r})=>{r(Po())});try{document.dispatchEvent(new CustomEvent("presetsImported",{detail:{filename:i.name,totalCount:s+o,newCount:s,overwriteCount:o}}))}catch{}}catch(n){console.error(`💾 ❌ Failed to import presets from ${i.name}:`,n),alert(`Failed to import presets: ${n.message}`)}},e.onerror=()=>{console.error(`💾 ❌ Failed to read file: ${i.name}`),alert(`Failed to read file: ${i.name}`)},e.readAsText(i)}function mc(i){if(!d.interpolation.enabled){uc(i)&&console.log(`💾 Loaded preset immediately (interpolation disabled): ${i}`);return}const e=Ws(i);if(!e){console.warn(`💾 Cannot interpolate: preset "${i}" not found`);return}d.interpolation.active=!1,d.interpolation.startState=null,d.interpolation.targetState=null,d.interpolation.startState={morphBaseWeights:[...d.morphBaseWeights],rotationX:d.rotationX,rotationY:d.rotationY,scale:d.scale,idleSpin:d.idleSpin,colorLayers:{geometry:{baseColor:d.colorLayers.geometry.baseColor},vessel:{baseColor:d.colorLayers.vessel.baseColor},shadows:{baseColor:d.colorLayers.shadows.baseColor},particles:{baseColor:d.colorLayers.particles.baseColor}},lighting:{...d.lighting}},d.interpolation.targetState={morphWeights:e.morphWeights||{},rotationX:e.rotationX||0,rotationY:e.rotationY||0,scale:e.scale||1,idleSpin:e.idleSpin!==void 0?e.idleSpin:!0,colorLayers:e.colorLayers||{},lighting:e.visualSettings||e.lighting||{}},d.interpolation.active=!0,d.interpolation.startTime=performance.now(),console.log(`🎚️ Interpolation started → ${i} (duration: ${d.interpolation.duration}ms)`),console.log("🎚️ Interpolation restarted cleanly")}function Zf(){if(!d.interpolation.active)return;const i=performance.now()-d.interpolation.startTime,e=Math.min(i/d.interpolation.duration,1),t=_f(e),n=d.interpolation.startState,s=d.interpolation.targetState;if(n.morphBaseWeights&&s.morphWeights){const o=[s.morphWeights.sphere||0,s.morphWeights.cube||0,s.morphWeights.pyramid||0,s.morphWeights.torus||0];d.morphBaseWeights=xf(n.morphBaseWeights,o,t),Math.random()<.05&&console.log("🔄 Interpolation write",{t:t.toFixed(2),morphBaseWeights:d.morphBaseWeights.slice(0,4).map(r=>r.toFixed(2))})}n.rotationX!==void 0&&s.rotationX!==void 0&&(d.rotationX=wn(n.rotationX,s.rotationX,t)),n.rotationY!==void 0&&s.rotationY!==void 0&&(d.rotationY=wn(n.rotationY,s.rotationY,t)),n.scale!==void 0&&s.scale!==void 0&&(d.scale=wn(n.scale,s.scale,t)),["geometry","vessel","shadows","particles"].forEach(o=>{var r,a,c,h;(a=(r=n.colorLayers)==null?void 0:r[o])!=null&&a.baseColor&&((h=(c=s.colorLayers)==null?void 0:c[o])!=null&&h.baseColor)&&(d.colorLayers[o].baseColor=gf(n.colorLayers[o].baseColor,s.colorLayers[o].baseColor,t))}),n.lighting&&s.lighting&&(n.lighting.ambientIntensity!==void 0&&s.lighting.ambientIntensity!==void 0&&(d.lighting.ambientIntensity=wn(n.lighting.ambientIntensity,s.lighting.ambientIntensity,t)),n.lighting.directionalIntensity!==void 0&&s.lighting.directionalIntensity!==void 0&&(d.lighting.directionalIntensity=wn(n.lighting.directionalIntensity,s.lighting.directionalIntensity,t))),Math.floor(e*10)!==Math.floor((e-.01)*10)&&console.log(`🎚️ Interpolation progress: t=${e.toFixed(2)} (eased: ${t.toFixed(2)})`),e>=1&&(d.interpolation.active=!1,d.interpolation.startState=null,d.interpolation.targetState=null,console.log("✅ Interpolation complete"))}function Wl(){return d.interpolation.active}function gc(i=[],e=2e3,t={}){if(!Array.isArray(i)||i.length<2){console.warn("🔗 [Chain] Need at least 2 presets to start a chain.",i);return}pc(),console.log("🔗 Starting new chain...");let n=i.slice();(t.shuffle||z.shuffle)&&(n=Qf(n),console.log(`🔀 Shuffle enabled → randomized order: [${n.join(", ")}]`)),z.presets=n,z.currentIndex=0,z.active=!0,z.duration=e,t.loop!==void 0&&(z.loop=t.loop),t.shuffle!==void 0&&(z.shuffle=t.shuffle),t.chainName!==void 0&&(z.currentChainName=t.chainName);const s=z.presets[0],o=z.loop?" [LOOP ENABLED]":"";console.log(`🔗 Chain started: ${z.presets.join(" → ")} (duration: ${e}ms)${o}`),typeof window<"u"&&window.dispatchEvent(new CustomEvent("chainStarted",{detail:{presets:z.presets,duration:e,loop:z.loop,shuffle:z.shuffle}})),To(s,e)}function Qf(i){const e=i.slice();for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function Lo(){z.active&&(console.log("🔗 Chain stopped."),z.active=!1,z.currentIndex=0,z.currentChainName=null,ea(),window.dispatchEvent(new CustomEvent("chainStopped",{detail:{reason:"manual stop"}})))}function To(i,e){if(!Ws(i))return console.warn("🔗 [Chain] Missing preset:",i),Lo();z.stepStartTime=performance.now();const n=d.interpolation.duration;d.interpolation.duration=e,mc(i),d.interpolation.duration=n}function ep(){if(!z.active||z.paused){console.warn("⏸ Cannot pause: chain not active or already paused");return}if(z.paused=!0,z.pausedAt=performance.now(),z.stepStartTime){const n=z.pausedAt-z.stepStartTime;z.pausedProgress=Math.min(n/z.duration,1)}d.interpolation.active&&(d.interpolation.active=!1);const i=z.currentIndex+1,e=z.presets.length,t=Math.round(i/e*100);console.log(`⏸ Chain paused at Step ${i}/${e} (${t}%)`),typeof window<"u"&&window.dispatchEvent(new CustomEvent("chainPaused",{detail:{currentStep:i,totalSteps:e,progress:t}}))}function tp(){if(!z.active||!z.paused){console.warn("▶️ Cannot resume: chain not active or not paused");return}if(z.paused=!1,z.stepStartTime&&z.pausedAt){const i=performance.now()-z.pausedAt;z.stepStartTime+=i}z.pausedAt=null,z.pausedProgress<1&&(z.presets[z.currentIndex],d.interpolation.active=!0,d.interpolation.startTime=performance.now()-z.duration*z.pausedProgress),console.log("▶️ Chain resumed"),typeof window<"u"&&window.dispatchEvent(new CustomEvent("chainResumed",{detail:{resumed:!0}}))}function np(){if(!z.active){console.warn("⏭ Cannot skip: chain not active");return}const i=z.currentIndex;if(z.currentIndex=(z.currentIndex+1)%z.presets.length,z.currentIndex===0&&!z.loop&&i===z.presets.length-1){Lo(),console.log("⏭ Skipped to end → Chain stopped (loop disabled)");return}const e=z.presets[z.currentIndex];console.log(`⏭ Skipped → Next preset: ${e}`),z.paused=!1,z.pausedAt=null,z.pausedProgress=0,To(e,z.duration),typeof window<"u"&&window.dispatchEvent(new CustomEvent("chainSkipped",{detail:{direction:"next",preset:e,currentStep:z.currentIndex+1,totalSteps:z.presets.length}}))}function ip(){if(!z.active){console.warn("⏮ Cannot skip: chain not active");return}if(z.currentIndex=z.currentIndex-1,z.currentIndex<0)if(z.loop)z.currentIndex=z.presets.length-1;else{z.currentIndex=0,console.log("⏮ Already at first preset");return}const i=z.presets[z.currentIndex];console.log(`⏮ Skipped → Previous preset: ${i}`),z.paused=!1,z.pausedAt=null,z.pausedProgress=0,To(i,z.duration),typeof window<"u"&&window.dispatchEvent(new CustomEvent("chainSkipped",{detail:{direction:"prev",preset:i,currentStep:z.currentIndex+1,totalSteps:z.presets.length}}))}let Eu=0;function sp(){if(z.active&&!z.paused){if(Wl()&&z.stepStartTime){const i=performance.now();if(i-Eu>100){Eu=i;const e=i-z.stepStartTime,t=z.duration,n=Math.min(e/t,1),s=Math.floor(n*100),r=(Math.max(t-e,0)/1e3).toFixed(1),a=z.currentIndex+1,c=z.presets.length;typeof window<"u"&&window.dispatchEvent(new CustomEvent("chainProgress",{detail:{step:a,total:c,percent:s,remaining:r}})),s%10===0&&s>0&&console.log(`📊 Step ${a}/${c} progress: ${s}% (Remaining: ${r}s)`)}}if(!Wl())if(z.currentIndex<z.presets.length-1){z.currentIndex+=1;const i=z.presets[z.currentIndex],e=Math.round(z.currentIndex/z.presets.length*100);console.log(`✅ Step complete. Next → ${i}`),console.log(`📊 Chain progress: Step ${z.currentIndex+1}/${z.presets.length} (${e}%)`),typeof window<"u"&&window.dispatchEvent(new CustomEvent("chainStepComplete",{detail:{currentStep:z.currentIndex+1,totalSteps:z.presets.length,next:i,progress:e}})),To(i,z.duration)}else if(z.loop){if(console.log("🔁 Loop enabled → restarting chain"),z.currentIndex=0,z.shuffle){const e=z.presets.slice();z.presets=Qf(e),console.log(`🔀 Reshuffled → new order: [${z.presets.join(", ")}]`)}typeof window<"u"&&window.dispatchEvent(new CustomEvent("chainLoopRestarted",{detail:{presets:z.presets,loop:z.loop,shuffle:z.shuffle}}));const i=z.presets[0];console.log(`📊 Chain progress: Step 1/${z.presets.length} (0%)`),To(i,z.duration)}else z.active=!1,z.currentChainName=null,console.log("🔗 Chain finished."),typeof window<"u"&&window.dispatchEvent(new CustomEvent("chainFinished",{detail:{completed:!0}}))}}const op="morphing_interface_chains";function xc(i,e,t,n,s){if(!i||typeof i!="string")return console.warn("🔗 Invalid chain name:",i),!1;if(!Array.isArray(e)||e.length<2)return console.warn("🔗 Chain must have at least 2 presets:",e),!1;const o={name:i,presets:e.slice(),duration:t||2e3,loop:n||!1,shuffle:s||!1,timestamp:new Date().toISOString()},r=Hi();r[i]=o,dp(r);const a=z.savedChains.findIndex(c=>c.name===i);return a>=0?z.savedChains[a]=o:z.savedChains.push(o),console.log(`💾 Chain saved: ${i} (${e.length} presets, ${t}ms, loop: ${n}, shuffle: ${s})`),!0}function rp(i){const t=Hi()[i];return t?(console.log(`💾 Loading chain: ${i}`),gc(t.presets,t.duration,{loop:t.loop,shuffle:t.shuffle,chainName:i}),t):(console.warn(`🔗 Chain not found: ${i}`),null)}function ap(i){if(!i||typeof i!="string")return console.warn("🔗 Invalid chain name:",i),!1;const e=Hi();return e[i]?(delete e[i],dp(e),z.savedChains=z.savedChains.filter(t=>t.name!==i),console.log(`🔗 Chain deleted: ${i}`),!0):(console.warn(`🔗 Chain not found: ${i}`),!1)}function lp(){const i=Hi();return Object.keys(i).sort()}function cp(i){return Hi()[i]||null}function Hi(){try{const i=localStorage.getItem(op);if(i){const e=JSON.parse(i);return z.savedChains=Object.values(e),e}return{}}catch(i){return console.error("🔗 Error reading chains from localStorage:",i),{}}}function dp(i){try{localStorage.setItem(op,JSON.stringify(i))}catch(e){console.error("🔗 Error saving chains to localStorage:",e)}}Hi();function hp(){if(!z.active||!z.stepStartTime)return 0;if(z.paused)return Math.max(0,z.duration*(1-z.pausedProgress));const i=performance.now()-z.stepStartTime;return Math.max(0,z.duration-i)}function LS(){if(!z.active)return null;const i=z.currentIndex+1,e=z.presets.length,t=hp();let n=0;if(z.stepStartTime&&!z.paused){const s=performance.now()-z.stepStartTime;n=Math.min(s/z.duration,1)}else z.paused&&(n=z.pausedProgress);return{currentStep:i,totalSteps:e,stepProgress:n,timeRemaining:t,paused:z.paused,presetName:z.presets[z.currentIndex]}}function up(){const i=Hi(),e=Object.keys(i);if(e.length===0){console.warn("💾 No chains to export");return}const t=JSON.stringify(i,null,2),n=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`chains_${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s),console.log(`💾 Chains exported: ${o.download} (${e.length} chains)`),typeof window<"u"&&window.dispatchEvent(new CustomEvent("chainsExported",{detail:{chainCount:e.length,filename:o.download}}))}function fp(i){const e=new FileReader;e.onload=t=>{try{const n=JSON.parse(t.target.result);let s=0,o=0;if(typeof n!="object"||n===null)throw new Error("Invalid chain file format");Object.keys(n).forEach(r=>{const a=n[r];if(!a.name||!Array.isArray(a.presets)||a.presets.length<2){console.warn(`🔗 Skipping invalid chain: ${r}`);return}cp(r)?o++:s++,xc(a.name,a.presets,a.duration||2e3,a.loop||!1,a.shuffle||!1)}),console.log(`📂 Chains imported: ${s+o} chains loaded (${s} new, ${o} overwritten) from ${i.name}`),we(async()=>{const{updateChainList:r}=await Promise.resolve().then(()=>vo);return{updateChainList:r}},void 0).then(({updateChainList:r})=>{r&&r(lp())}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("chainsImported",{detail:{filename:i.name,totalCount:s+o,newCount:s,overwriteCount:o}}))}catch(n){console.error(`💾 ❌ Failed to import chains from ${i.name}:`,n),alert(`Failed to import chains: ${n.message}`)}},e.onerror=()=>{console.error(`💾 ❌ Failed to read file: ${i.name}`),alert(`Failed to read file: ${i.name}`)},e.readAsText(i)}console.log("💾 Preset routing configured");const wu=Object.freeze(Object.defineProperty({__proto__:null,deleteChain:ap,exportChains:up,getChainData:cp,getChainProgress:LS,getChainTimeRemaining:hp,importChains:fp,isInterpolating:Wl,listChains:lp,loadChain:rp,pauseChain:ep,resetChain:pc,resumeChain:tp,saveChain:xc,skipNext:np,skipPrev:ip,startChain:gc,startInterpolation:mc,stopChain:Lo,stopInterpolation:ea,updateChain:sp,updateInterpolation:Zf},Symbol.toStringTag,{value:"Module"}));console.log("🖼️ visual.js loaded");let Vn=null;function IS(i){const e=new ui(16,9),t=new hi({color:1118481});Vn=new Tt(e,t),Vn.position.z=-10,i.add(Vn),console.log("🖼️ Background plane initialized")}function DS(){Vn&&(d.useBackgroundImage&&d.texture?(Vn.material.map=d.texture,Vn.material.color.set(16777215)):(Vn.material.map=null,Vn.material.color.set(1118481)),Vn.material.needsUpdate=!0)}console.log("🔺 geometry.js loaded");let Ss=!1,Cu=0;const Tu=300;let $r=null,zs=null;const US=document.querySelector("#app"),_t=new Ey,Rn=new sn(75,window.innerWidth/window.innerHeight,.1,1e3),Pn=new by({canvas:US});Pn.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Pn.domElement);const{composer:NS,afterimagePass:FS}=ES(Pn,_t,Rn);function OS(){const e=new ec(1,4).toNonIndexed(),t=e.attributes.position.array;function n(v){return v.clone().normalize().multiplyScalar(.8)}function s(v){const m=v.x,u=v.y,y=v.z,S=Math.max(Math.abs(m),Math.abs(u),Math.abs(y))||1e-6;return new I(m/S,u/S,y/S).multiplyScalar(.8)}function o(v){const m=Math.abs(v.y),u=.75;if(m>.7){const y=Math.sign(v.y)||1;return new I(0,y*u,0)}else{const y=(1-m)*.8,S=bo.clamp(v.x,-1,1)*y,w=bo.clamp(v.z,-1,1)*y,U=v.y*u;return new I(S,U,w)}}const r=Math.PI*2;function a(v){return(v%r+r)%r}function c(v){const m=new Float32Array(v.length),u=v.length/3,y=Math.floor(Math.sqrt(u)),S=1,w=.3;let U=0;for(let A=0;A<=y;A++){const R=a(A/y*r);for(let F=0;F<=y;F++){const C=a(F/y*r),b=(S+w*Math.cos(C))*Math.cos(R),P=w*Math.sin(C),W=(S+w*Math.cos(C))*Math.sin(R);if(m[U++]=b,m[U++]=P,m[U++]=W,U>=m.length)break}if(U>=m.length)break}return m}function h(v){const m=new Float32Array(t.length);for(let u=0;u<t.length;u+=3){const y=new I(t[u],t[u+1],t[u+2]).normalize(),S=v(y);m[u]=S.x,m[u+1]=S.y,m[u+2]=S.z}return m}const l=h(n),f=h(s),p=h(o),g=c(t),_=e.clone();return _.morphAttributes.position=[new ht(l,3),new ht(f,3),new ht(p,3),new ht(g,3)],_}const Ti=new ff({color:d.color,wireframe:!0,roughness:.7,metalness:.3}),BS=OS(),bt=new Tt(BS,Ti);bt.visible=!0;bt.position.set(0,0,0);_t.add(bt);bt.morphTargetInfluences=[0,1,0,0];HS();Rn.position.set(0,0,5);Rn.lookAt(0,0,0);window.addEventListener("resize",()=>{Rn.aspect=window.innerWidth/window.innerHeight,Rn.updateProjectionMatrix(),Pn.setSize(window.innerWidth,window.innerHeight)});function zS(i,e,t){return Math.max(e,Math.min(t,i))}function kS(i){var r,a;const e=i.morphBaseWeights||[i.morphWeights.sphere||0,i.morphWeights.cube||0,i.morphWeights.pyramid||0,i.morphWeights.torus||0],t=bt.morphTargetInfluences.slice(),n=Vi();!i.audioReactive&&!Ss?(console.log("🎵 Geometry morph clamped to base (audio OFF)"),Ss=!0):i.audioReactive&&Ss&&(Ss=!1);const s=[(n.bass||0)*.1,(n.mid||0)*.1,(n.treble||0)*.1,((n.bass||0)+(n.mid||0)+(n.treble||0))/3*.1];i.morphAudioWeights=s;const o=i.audio.sensitivity||1;!i.audioReactive&&Cu++%Tu===0&&console.log("🛑 Geometry clamp check",{baseWeights:e.slice(0,4),audioWeights:s.slice(0,4),influences_before:Array.from(bt.morphTargetInfluences).slice(0,4)});for(let c=0;c<bt.morphTargetInfluences.length;c++){const h=e[c]||0;i.audioReactive?(bt.morphTargetInfluences[c]=zS(h+s[c]*o,0,1),Ss&&(Ss=!1)):bt.morphTargetInfluences[c]=h}i.audioReactive||t.some((h,l)=>Math.abs(h-bt.morphTargetInfluences[l])>.001)&&Cu%Tu===0&&console.log("🔴 Geometry bleed detected (audio OFF)",{prevInfluences:t.slice(0,4).map(h=>h.toFixed(3)),newInfluences:Array.from(bt.morphTargetInfluences).slice(0,4).map(h=>h.toFixed(3)),baseWeights:e.slice(0,4).map(h=>h.toFixed(3)),audioData:n,interpolationActive:(r=i.interpolation)==null?void 0:r.active,chainActive:(a=i.morphChain)==null?void 0:a.active}),Math.random()<.02&&console.log("🎛️ Base:",e.map(c=>c.toFixed(2)),"🎵 Audio:",s.map(c=>c.toFixed(2)),"➡️ Final:",Array.from(bt.morphTargetInfluences).map(c=>c.toFixed(2)))}function VS(){bt&&d.morphWeights&&kS(d);const i=d.colorLayers.geometry,e=Vi(),t=(e.bass+e.mid+e.treble)/3;let n=i.baseColor;d.audioReactive&&(n=Zr(i.baseColor,i.audioColor,i.audioIntensity,t),Math.random()<.02&&console.log(`🎨 Geometry: base=${i.baseColor} audio=${i.audioColor} final=${n}`)),d.useTextureOnMorph&&d.texture?(Ti.map=d.texture,Ti.color.set(16777215),Ti.needsUpdate=!0):(Ti.map=null,Ti.color.set(n),Ti.needsUpdate=!0),$r&&($r.intensity=d.lighting.ambientIntensity),zs&&(zs.intensity=d.lighting.directionalIntensity,pp())}function HS(){$r=new Oy(16777215,d.lighting.ambientIntensity),_t.add($r),zs=new Fy(16777215,d.lighting.directionalIntensity),pp(),_t.add(zs),console.log("🎨 Lighting system initialized")}function pp(){if(!zs)return;const i=d.lighting.directionalAngleX*Math.PI/180,e=d.lighting.directionalAngleY*Math.PI/180;zs.position.set(Math.sin(e)*Math.cos(i)*10,Math.sin(i)*10,Math.cos(e)*Math.cos(i)*10)}let Al=0,Rl=performance.now();function mp(){var o,r,a,c,h;requestAnimationFrame(mp),Al++;const i=performance.now();if(i-Rl>5e3){const l=Al/(i-Rl)*1e3,f=performance.memory?(performance.memory.usedJSHeapSize/1048576).toFixed(1):"N/A";console.log(`📊 FPS: ${l.toFixed(1)} | Mem: ${f}MB | Particles: ${d.particlesCount}`),Al=0,Rl=i}Zf(),sp();const e=(d.idleSpin?.01:0)+d.rotationX,t=(d.idleSpin?.01:0)+d.rotationY,n=d.scale;if(bt.rotation.x+=e,bt.rotation.y+=t,bt.scale.set(n,n,n),d.audioReactive&&Of(),VS(),Ky(d.audioReactive),d.particlesEnabled&&Af(d.audioReactive,performance.now()*.001),Cf(),DS(),window.emojiParticles){const l=((o=d==null?void 0:d.audio)==null?void 0:o.level)??0;window.emojiParticles.update(l)}if(window.emojiStreamManager){const l=((r=d==null?void 0:d.audio)==null?void 0:r.level)??0;window.emojiStreamManager.update(l)}if(window.emojiSequencer&&window.emojiSequencer.update(),window.mandalaController){const l=((a=d==null?void 0:d.audio)==null?void 0:a.level)??0;(c=d.mandala)!=null&&c.audioReactive&&!window.__mandalaAudioLoggedOn?(console.log("🔊 Mandala audioReactive=ON"),window.__mandalaAudioLoggedOn=!0,window.__mandalaAudioLoggedOff=!1):!((h=d.mandala)!=null&&h.audioReactive)&&!window.__mandalaAudioLoggedOff&&(console.log("🔇 Mandala audioReactive=OFF"),window.__mandalaAudioLoggedOff=!0,window.__mandalaAudioLoggedOn=!1),window.mandalaController.update(l)}zf(),Bf();const s=_p();s&&s.render(_t),d.motionTrailsEnabled?(FS.uniforms.damp.value=d.motionTrailIntensity,NS.render()):Pn.render(_t,Rn)}mp();console.log("🔺 Geometry module initialized with state-based architecture");const As=Object.freeze(Object.defineProperty({__proto__:null,camera:Rn,morphMesh:bt,renderer:Pn,scene:_t},Symbol.toStringTag,{value:"Module"}));console.log("🎛️ mandalaController.js loaded");const Tr={Major:[0,2,4,5,7,9,11],Minor:[0,2,3,5,7,8,10],Pentatonic:[0,2,4,7,9],Dorian:[0,2,3,5,7,9,10],Phrygian:[0,1,3,5,7,8,10],Lydian:[0,2,4,6,7,9,11],Mixolydian:[0,2,4,5,7,9,10],Aeolian:[0,2,3,5,7,8,10],Locrian:[0,1,3,5,6,8,10],Chromatic:[0,1,2,3,4,5,6,7,8,9,10,11]};class GS{constructor(e,t={}){this.scene=e,this.rings=t.rings??3,this.symmetry=t.symmetry??6,this.scale=t.scale??"Major",this.mode=t.mode??"Ionian",this.emoji=t.emoji??"🍕",this.layoutMode=t.layoutMode??"radial",this.spiralOffset=t.spiralOffset??Math.PI/6,this.mandalaAudioReactive=t.mandalaAudioReactive??!0,this.mandalaSensitivity=t.mandalaSensitivity??1,this.radiusPulse=0,this.anglePulse=0,this.ringRadii=t.ringRadii??[0,2,4,6,8,10,12,14],this.ringRotationSpeeds=t.ringRotationSpeeds??[0,.01,.015,.02,.025,.03,.035,.04],this.ringRotations=Array(8).fill(0),this.audioModulation=t.audioModulation??!0,this.layeredAudio=t.layeredAudio??!0,this.differentialRotation=t.differentialRotation??!0,this.rotation=0,this.rotationSpeed=t.rotationSpeed??.02,this.musicalMode=t.musicalMode??!1,this.rootNote=t.rootNote??60,this.scaleSequenceEnabled=t.scaleSequenceEnabled??!1,this.scaleSequence=t.scaleSequence??["Major","Dorian","Mixolydian","Phrygian"],this.scaleSequenceIndex=0,this.scaleSequenceInterval=t.scaleSequenceInterval??4e3,this.lastScaleChange=performance.now(),this.performanceMode=t.performanceMode??!1,this.emojiLayout=t.emojiLayout??["🍕","🌶️","🍄"],this.syncToState(),console.log(`🎛️ MandalaController initialized → rings=${this.rings} | symmetry=${this.symmetry} | scale=${this.scale} (${this.mode}) | layout=${this.layoutMode} | emoji=${this.emoji}`)}syncToState(){d.emojiMandala.rings=this.rings,d.emojiMandala.symmetry=this.symmetry,d.emojiMandala.scale=this.scale,d.emojiMandala.rotationSpeed=this.rotationSpeed,d.emojiMandala.rotation=this.rotation,d.emojiMandala.audioModulation=this.audioModulation,d.emojiMandala.layeredAudio=this.layeredAudio,d.emojiMandala.differentialRotation=this.differentialRotation,d.emojiMandala.ringRotationSpeeds=this.ringRotationSpeeds,d.emojiMandala.musicalMode=this.musicalMode,d.emojiMandala.rootNote=this.rootNote,d.emojiMandala.layout=this.emojiLayout,d.emojiMandala.scaleSequenceEnabled=this.scaleSequenceEnabled,d.emojiMandala.scaleSequence=this.scaleSequence,d.emojiMandala.scaleSequenceIndex=this.scaleSequenceIndex,d.emojiMandala.scaleSequenceInterval=this.scaleSequenceInterval,d.emojiMandala.lastScaleChange=this.lastScaleChange,d.emojiMandala.performanceMode=this.performanceMode,d.emojiMandala.layoutMode=this.layoutMode,d.emojiMandala.mandalaAudioReactive=this.mandalaAudioReactive,d.emojiMandala.mandalaSensitivity=this.mandalaSensitivity,d.emojiMandala.radiusPulse=this.radiusPulse,d.emojiMandala.anglePulse=this.anglePulse}update(e=0){const t=(d==null?void 0:d.audio)||{bass:0,mid:0,treble:0,level:0},n=t.bass??0,s=t.mid??0,o=t.treble??0,r=e||t.level||0;if(this.mandalaAudioReactive&&d.audioReactive){const h=this.mandalaSensitivity;this.radiusPulse=r*h*.5,this.anglePulse=r*h*.02;const l=.5+r*h;Math.random()<.02&&console.log(`🔊 AudioLevel=${r.toFixed(2)} → rings expanded x${(1+this.radiusPulse).toFixed(2)}, symmetry pulse ${this.anglePulse.toFixed(3)}, emoji scale x${l.toFixed(2)}`),d.emojiMandala.emojiScale=l}else this.radiusPulse=0,this.anglePulse=0,d.emojiMandala.emojiScale=1;if(this.scaleSequenceEnabled&&this.scaleSequence&&this.scaleSequence.length>0){const h=performance.now();if(h-this.lastScaleChange>=this.scaleSequenceInterval){const l=(this.scaleSequenceIndex+1)%this.scaleSequence.length;this.scaleSequenceIndex=l,this.scale=this.scaleSequence[l],this.lastScaleChange=h,console.log(`🎛️ Scale sequence → ${this.scale}`),this.syncToState()}}if(this.differentialRotation)for(let h=0;h<this.rings;h++){const l=this.ringRotationSpeeds[h]||.01,f=this.audioModulation?h===0?n*.2:h<=2?s*.3:o*.5:0,p=l*(1+f);this.ringRotations[h]+=p}const a=this.rotationSpeed??.02,c=this.audioModulation?a*(1+r*2):a;this.rotation+=c,d.emojiMandala.rotation=this.rotation}setRings(e){const t=this.rings;for(this.rings=Math.max(1,Math.min(8,Math.floor(e)));this.emojiLayout.length<this.rings;){const n=["🍕","🌶️","🍄","🌟","💎","🔥","💧","🌈"];this.emojiLayout.push(n[this.emojiLayout.length%n.length])}this.syncToState(),console.log(`🎛️ Mandala update → rings=${this.rings} (was ${t}) | symmetry=${this.symmetry} | scale=${this.scale} (${this.mode}) | emoji=${this.emoji}`)}setSymmetry(e){const t=this.symmetry;this.symmetry=Math.max(2,Math.min(12,Math.floor(e))),this.syncToState(),console.log(`🎛️ Mandala update → rings=${this.rings} | symmetry=${this.symmetry} (was ${t}) | scale=${this.scale} (${this.mode}) | emoji=${this.emoji}`)}setScale(e,t=null){const n=this.scale,s=this.mode;if(Tr[e])this.scale=e,this.mode=t||e;else{console.warn(`🎛️ Invalid scale: ${e}, keeping current scale ${this.scale}`);return}this.musicalMode&&this.remapNotes(),this.syncToState(),console.log(`🎛️ Mandala update → rings=${this.rings} | symmetry=${this.symmetry} | scale=${this.scale} (${this.mode}) [was ${n} (${s})] | emoji=${this.emoji}`)}remapNotes(){const e=Tr[this.scale]||Tr.Major,t={};e.forEach((n,s)=>{const o=this.rootNote+n,r=s%this.emojiLayout.length;t[o]=this.emojiLayout[r]}),d.emojiMandala.noteToEmoji=t,console.log(`🎼 Notes remapped for ${this.scale} scale (root=${this.rootNote}):`,t)}swapEmoji(e,t=null){const n=this.emoji;if(t!==null&&t>=0&&t<this.rings){const s=this.emojiLayout[t];this.emojiLayout[t]=e,d.emojiMandala.layout=[...this.emojiLayout],console.log(`🎛️ Mandala update → Ring ${t} emoji: ${s} → ${e} | rings=${this.rings} | symmetry=${this.symmetry} | scale=${this.scale} (${this.mode})`)}else this.emoji=e,console.log(`🎛️ Mandala update → rings=${this.rings} | symmetry=${this.symmetry} | scale=${this.scale} (${this.mode}) | emoji=${e} (was ${n})`);this.syncToState()}setRotationSpeed(e){const t=this.rotationSpeed;this.rotationSpeed=Math.max(0,Math.min(.2,e)),this.syncToState(),console.log(`🎛️ Mandala rotation speed: ${this.rotationSpeed.toFixed(3)} (was ${t.toFixed(3)})`)}setLayout(e){if(!["radial","spiral","grid"].includes(e)){console.warn(`🎛️ Invalid layout mode: ${e}, keeping current mode ${this.layoutMode}`);return}const n=this.layoutMode;this.layoutMode=e,this.syncToState(),console.log(`${e==="spiral"?"🌀":e==="grid"?"🔲":"⭕"} Mandala layout set to ${e.charAt(0).toUpperCase()+e.slice(1)} (was ${n}) | rings=${this.rings} | symmetry=${this.symmetry}`)}setMusicalMode(e){this.musicalMode=e,e&&this.remapNotes(),this.syncToState(),console.log(`🎼 Musical mode: ${e?"ON":"OFF"} (scale=${this.scale}, root=${this.rootNote})`)}setRootNote(e){this.rootNote=Math.max(0,Math.min(127,Math.floor(e))),this.musicalMode&&this.remapNotes(),this.syncToState();const n=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"][this.rootNote%12],s=Math.floor(this.rootNote/12)-1;console.log(`🎼 Root note: ${n}${s} (MIDI ${this.rootNote})`)}setAudioModulation(e){this.audioModulation=e,this.syncToState(),console.log(`🎛️ Audio modulation: ${e?"ON":"OFF"}`)}setLayeredAudio(e){this.layeredAudio=e,this.syncToState(),console.log(`🎛️ Layered audio: ${e?"ON (rings react to different bands)":"OFF"}`)}setDifferentialRotation(e){this.differentialRotation=e,this.syncToState(),console.log(`🎛️ Differential rotation: ${e?"ON (each ring independent)":"OFF (unified)"}`)}setScaleSequencing(e){this.scaleSequenceEnabled=e,e&&(this.lastScaleChange=performance.now()),this.syncToState(),console.log(`🎛️ Scale sequencing: ${e?"ON":"OFF"} (${this.scaleSequence.join(" → ")})`)}setScaleSequence(e){this.scaleSequence=e.filter(t=>Tr[t]),this.syncToState(),console.log(`🎛️ Scale sequence updated: ${this.scaleSequence.join(" → ")}`)}setPerformanceMode(e){this.performanceMode=e,this.syncToState(),console.log(`🎛️ Performance mode: ${e?"ON":"OFF"}`)}setMandalaAudioReactive(e){this.mandalaAudioReactive=e,this.syncToState(),console.log(`🎵 Mandala audio-reactive ${e?"ON":"OFF"} (sensitivity=${this.mandalaSensitivity.toFixed(2)})`)}setMandalaSensitivity(e){const t=this.mandalaSensitivity;this.mandalaSensitivity=Math.max(0,Math.min(2,e)),this.syncToState(),console.log(`🎵 Mandala sensitivity: ${(this.mandalaSensitivity*100).toFixed(0)}% (was ${(t*100).toFixed(0)}%)`)}getState(){return{rings:this.rings,symmetry:this.symmetry,scale:this.scale,mode:this.mode,emoji:this.emoji,emojiLayout:[...this.emojiLayout],rotation:this.rotation,rotationSpeed:this.rotationSpeed,audioModulation:this.audioModulation,layeredAudio:this.layeredAudio,differentialRotation:this.differentialRotation,musicalMode:this.musicalMode,rootNote:this.rootNote,scaleSequenceEnabled:this.scaleSequenceEnabled,scaleSequence:[...this.scaleSequence],performanceMode:this.performanceMode,layoutMode:this.layoutMode,spiralOffset:this.spiralOffset}}destroy(){console.log("🎛️ MandalaController destroyed")}}console.log("🎛️ MandalaController class ready");console.log("📡 telemetry.js loaded");let nn=null,Rs=null,Ps=null,Ls=null,ii=null,si=null,oi=null,Is=null,Au=performance.now(),Dr=0,Ar=0;function WS(i){jS(),$S(i),console.log("📡 Telemetry initialized")}function jS(){nn=document.createElement("div"),nn.id="telemetry-overlay",nn.style.cssText=`
    position: fixed;
    bottom: 20px;
    left: 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px;
    border-radius: 6px;
    font-family: monospace;
    font-size: 12px;
    z-index: 1000;
    min-width: 140px;
    line-height: 1.4;
  `;const i=document.createElement("div");i.textContent="📡 Telemetry",i.style.cssText="color: #00ff00; margin-bottom: 8px; font-weight: bold;",nn.appendChild(i),Rs=document.createElement("div"),Rs.textContent="FPS: --",nn.appendChild(Rs),Ps=document.createElement("div"),Ps.textContent="MIDI: -- devices",nn.appendChild(Ps),Ls=document.createElement("div"),Ls.textContent="Idle: --",nn.appendChild(Ls),ii=document.createElement("div"),ii.textContent="Morph: -- (0.0)",nn.appendChild(ii),si=document.createElement("div"),si.textContent="Preset: --",nn.appendChild(si),oi=document.createElement("div"),oi.textContent="Audio: OFF",nn.appendChild(oi),Is=document.createElement("div"),Is.textContent="Visual: --",nn.appendChild(Is),document.body.appendChild(nn)}function $S(i){function e(){const t=performance.now(),n=t-Au;if(Ar++,Ar>=30&&(Dr=Math.round(1e3/(n/Ar)),Ar=0),i)try{const s=i();XS(s)}catch(s){console.warn("📡 Telemetry getState error:",s)}Au=t,requestAnimationFrame(e)}e()}function XS(i){if(Rs&&(Rs.textContent=`FPS: ${Dr}`,Rs.style.color=Dr>=60?"#00ff00":Dr>=30?"#ffff00":"#ff6666"),Ps&&i.midiDevices!==void 0&&(Ps.textContent=`MIDI: ${i.midiDevices} devices`,Ps.style.color=i.midiDevices>0?"#00ff00":"#888888"),Ls&&i.hudIdle!==void 0&&(Ls.textContent=`Idle: ${i.hudIdle?"ON":"OFF"}`,Ls.style.color=i.hudIdle?"#00ff00":"#ff6666"),ii&&i.morphState!==void 0){const{weights:e,isTransitioning:t}=i.morphState,n=t?"⚡":"🌀";if(e){const s=Object.entries(e).filter(([o,r])=>r>.01).map(([o,r])=>`${o.charAt(0).toUpperCase()}${(r*100).toFixed(0)}%`).join(" | ");ii.textContent=`${n} ${s||"None"}`,ii.style.color=s?"#ffff00":"#888888"}else ii.textContent=`${n} Legacy mode`,ii.style.color="#888888"}if(si&&i.currentPreset!==void 0&&(i.currentPreset?(si.textContent=`💾 ${i.currentPreset}`,si.style.color="#00ffff"):(si.textContent="💾 None",si.style.color="#888888")),oi&&i.audioData!==void 0)if(i.audioData.isEnabled){const e=(i.audioData.bass*100).toFixed(0),t=(i.audioData.mid*100).toFixed(0),n=(i.audioData.treble*100).toFixed(0);oi.textContent=`🎶 B${e}% M${t}% T${n}%`,oi.style.color="#ff9900"}else oi.textContent="🎶 OFF",oi.style.color="#888888";if(Is&&i.visualData!==void 0){const e=i.visualData.ambientIntensity.toFixed(1),t=i.visualData.directionalIntensity.toFixed(1),n=i.visualData.color;Is.textContent=`🎨 A${e} D${t} ${n}`,Is.style.color="#ff66ff"}}console.log("🎹 midiRouter.js loaded");let xt;setTimeout(()=>{we(()=>Promise.resolve().then(()=>Li),void 0).then(i=>{xt=i.getMandalaController})},0);window.emojiParticlesMIDI={cycleCC:30,advanceStoryCC:31};window.emojiBankMIDI={startCC:40,endCC:47};Gy(({cc:i,value:e,device:t})=>{var n,s,o,r,a,c;if(console.log(`🎹 CC${i} from ${t}: ${e}`),(n=d.emojiMandala)!=null&&n.enabled){const h=xt==null?void 0:xt();if(i===20){const l=Math.floor(3+e/127*21);h?h.setSymmetry(l):(d.emojiMandala.symmetry=Math.min(24,l),console.log(`🎹 [MIDI] CC20 → Mandala Symmetry = ${d.emojiMandala.symmetry}`));return}else if(i===21){const l=Math.floor(1+e/127*11);h?h.setRings(l):(d.emojiMandala.rings=Math.min(12,l),console.log(`🎹 [MIDI] CC21 → Mandala Rings = ${d.emojiMandala.rings}`));return}else if(i===22){let l;if(e<43?l="radial":e<86?l="spiral":l="grid",h)h.setLayout(l);else{d.emojiMandala.layoutMode=l;const f=l==="spiral"?"🌀":l==="grid"?"🔲":"⭕";console.log(`🎹 [MIDI] CC22 → Mandala Layout = ${l.charAt(0).toUpperCase()+l.slice(1)} ${f}`)}return}else if(i===23){let l;e<32?l="🍕":e<64?l="🌶️":e<96?l="🍄":l="⭐",h?h.swapEmoji(l):(d.emojiMandala.layout[0]=l,console.log(`🎹 [MIDI] CC23 → Mandala Emoji = ${l}`));return}else if(i===24){const l=e/127*2;h?h.setMandalaSensitivity(l):(d.emojiMandala.mandalaSensitivity=l,console.log(`🎹 [MIDI] CC24 → Mandala Sensitivity = ${l.toFixed(1)}`));return}}if(!Kf(i,e)){if(i===1)if((s=d.emojiMandala)!=null&&s.enabled){const h=e/127*.1,l=xt==null?void 0:xt();l?l.setRotationSpeed(h):(d.emojiMandala.rotationSpeed=h,console.log(`🎛️ Mandala rotation speed: ${h.toFixed(3)}`))}else d.rotationX=e/127*.1;else if(i===2)if((o=d.emojiMandala)!=null&&o.enabled){const h=Math.floor(2+e/127*10),l=xt==null?void 0:xt();l?l.setSymmetry(h):(d.emojiMandala.symmetry=Math.min(12,h),console.log(`🎛️ Mandala symmetry: ${d.emojiMandala.symmetry}-fold`))}else{const h=e/127,l=d.morphState.targets,f=l.indexOf(d.morphState.current),p=(f+1)%l.length,g=l[f],_=l[p];l.forEach(v=>{d.morphWeights[v]=0}),d.morphWeights[g]=1-h,d.morphWeights[_]=h,d.morphBaseWeights=[0,0,0,0],d.morphBaseWeights[f]=1-h,d.morphBaseWeights[p]=h,console.log(`🎹 CC2: Morph blend ${g}→${_} (${(h*100).toFixed(0)}%)`)}else if(i===3)if((r=d.emojiMandala)!=null&&r.enabled){const h=Math.floor(1+e/127*7),l=xt==null?void 0:xt();l?l.setRings(h):(d.emojiMandala.rings=Math.min(8,h),console.log(`🎛️ Mandala rings: ${d.emojiMandala.rings}`))}else{const h=["cube","sphere","pyramid","torus"];let l;e<32?l=0:e<64?l=1:e<96?l=2:l=3;const f=h[l];d.morphState.previous=d.morphState.current,d.morphState.current=f,h.forEach(g=>{d.morphWeights[g]=0}),d.morphWeights[f]=1;const p=["sphere","cube","pyramid","torus"].indexOf(f);d.morphBaseWeights=[0,0,0,0],p>=0&&(d.morphBaseWeights[p]=1),console.log(`🎹 CC3: Morph target → ${f}`)}else if(i===4)d.rotationY=e/127*.1;else if(i===5){if((a=d.emojiMandala)!=null&&a.enabled){const h=xt==null?void 0:xt(),l=e/127*2;h?h.setMandalaSensitivity(l):(d.emojiMandala.mandalaSensitivity=l,console.log(`🎵 Mandala sensitivity: ${(l*100).toFixed(0)}%`))}}else if(i===6){if((c=d.emojiMandala)!=null&&c.enabled){const h=xt==null?void 0:xt(),l=e>63;h?h.setMandalaAudioReactive(l):(d.emojiMandala.mandalaAudioReactive=l,console.log(`🎵 Mandala audio-reactive ${l?"ON":"OFF"}`))}}else if(i===7)d.vessel.opacity=e/127;else if(i===8)e>64&&we(async()=>{const{cycleLayout:h}=await Promise.resolve().then(()=>jr);return{cycleLayout:h}},void 0).then(({cycleLayout:h})=>{we(async()=>{const{scene:l}=await Promise.resolve().then(()=>As);return{scene:l}},void 0).then(({scene:l})=>{h(l)})});else if(i===10)console.log("🎹 CC10 fallback: sphere weight (should be handled by binding system)");else if(i===21){const h=e/127*360;ac(h),console.log("🎹 CC21 fallback: hue shift (binding system also active)")}else if(i===22)console.log("🎹 CC22 fallback: pyramid weight (should be handled by binding system)");else if(i===23)console.log("🎹 CC23 fallback: torus weight (should be handled by binding system)");else if(i===24)d.scale=.5+e/127*1.5;else if(i===window.emojiParticlesMIDI.cycleCC)window.emojiParticles&&e>0&&window.emojiParticles.cycleEmoji();else if(i===window.emojiParticlesMIDI.advanceStoryCC)window.emojiParticles&&e>0&&window.emojiParticles.advanceStory();else if(i>=window.emojiBankMIDI.startCC&&i<=window.emojiBankMIDI.endCC&&e>0&&window.emojiBankManager){const h=i-window.emojiBankMIDI.startCC;window.emojiBankManager.loadBank(h)&&(d.currentBank=h,window.rebuildEmojiMixerUI&&window.rebuildEmojiMixerUI(),window.rebuildSequencerGrid&&window.rebuildSequencerGrid(),window.updateBankButtonStates&&window.updateBankButtonStates(),console.log(`🎹 MIDI pad ${i} → Bank ${h+1} loaded`))}}});Wy(({note:i,velocity:e,noteOn:t,device:n})=>{var s;if(console.log(`🎹 Note ${t?"ON":"OFF"} ${i} from ${n}: velocity=${e}`),(s=d.emojiMandala)!=null&&s.enabled&&t&&e>0){const o=xt==null?void 0:xt(),{layout:r,rings:a}=d.emojiMandala;if(i>=36&&i<=43){const c=i-36;if(c<a&&c<r.length){const h=["🍕","🌶️","🍄","🌟","💎","🔥","💧","🌈"],l=r[c],p=(h.indexOf(l)+1)%h.length,g=h[p];o?o.swapEmoji(g,c):(d.emojiMandala.layout[c]=g,console.log(`🎛️ Ring ${c} emoji swap: ${l} → ${g}`))}}d.emojiMandala.musicalMode&&(t&&e>0?(d.emojiMandala.activeNotes.add(i),d.emojiMandala.notePulse[i]=e/127):(d.emojiMandala.activeNotes.delete(i),d.emojiMandala.notePulse[i]=0))}});jy(({value:i,rawValue:e,device:t})=>{var n;if(console.log(`🎹 Pitch bend from ${t}: ${i.toFixed(3)} (raw=${e})`),(n=d.emojiMandala)!=null&&n.enabled){const s=xt==null?void 0:xt(),o=1+i,r=d.emojiMandala.rotationSpeed||.02,a=Math.max(0,Math.min(.2,r*o));s?(s.setRotationSpeed(a),console.log(`🎛️ Mandala wheel spin: ${o.toFixed(2)}x`)):(d.emojiMandala.rotationSpeed=a,console.log(`🎛️ Mandala wheel spin: ${o.toFixed(2)}x (speed=${a.toFixed(3)})`))}});console.log("🎹 MIDI routing configured (Phase 11.7.23/11.7.24/11.7.28: Mandala live control)");console.log("🔗 Mandala MIDI bindings active: CC20=Symmetry | CC21=Rings | CC22=Layout | CC23=Emoji | CC24=Sensitivity");console.log("📟 hudRouter.js loaded");let Mn;setTimeout(()=>{we(()=>Promise.resolve().then(()=>Li),void 0).then(i=>{Mn=i.getMandalaController})},0);cc(i=>{var e;if(i.type==="app:reset"){console.log("📟 HUD action: app:reset");return}if(i.idleSpin!==void 0&&(d.idleSpin=i.idleSpin),i.rotX!==void 0&&(d.rotationX=i.rotX),i.rotY!==void 0&&(d.rotationY=i.rotY),i.scale!==void 0&&(d.scale=i.scale),i.morphTarget!==void 0){d.morphState.previous=d.morphState.current,d.morphState.current=i.morphTarget,d.morphState.targets.forEach(n=>{d.morphWeights[n]=0}),d.morphWeights[i.morphTarget]=1;const t=["sphere","cube","pyramid","torus"].indexOf(i.morphTarget);d.morphBaseWeights=[0,0,0,0],t>=0&&(d.morphBaseWeights[t]=1)}if(i.morphBlend!==void 0){const t=d.morphState.targets,n=t.indexOf(d.morphState.current),s=(n+1)%t.length,o=t[n],r=t[s];t.forEach(a=>{d.morphWeights[a]=0}),d.morphWeights[o]=1-i.morphBlend,d.morphWeights[r]=i.morphBlend,d.morphBaseWeights=[0,0,0,0],d.morphBaseWeights[n]=1-i.morphBlend,d.morphBaseWeights[s]=i.morphBlend}if(i.targetWeight!==void 0){const{target:t,weight:n}=i.targetWeight;mf(t,n)}if(i.audioEnabled!==void 0&&(d.audio.enabled=i.audioEnabled,d.audioReactive=i.audioEnabled,console.log(`🎵 Audio Reactive: ${i.audioEnabled}`),i.audioEnabled?we(async()=>{const{enableAudio:t}=await Promise.resolve().then(()=>rS);return{enableAudio:t}},void 0).then(({enableAudio:t})=>{t()}):(d.audio.bass=0,d.audio.mid=0,d.audio.treble=0)),i.audioSensitivity!==void 0&&(d.audio.sensitivity=i.audioSensitivity),i.ambientIntensity!==void 0&&(d.lighting.ambientIntensity=i.ambientIntensity),i.directionalIntensity!==void 0&&(d.lighting.directionalIntensity=i.directionalIntensity),i.directionalAngleX!==void 0&&(d.lighting.directionalAngleX=i.directionalAngleX),i.directionalAngleY!==void 0&&(d.lighting.directionalAngleY=i.directionalAngleY),i.color!==void 0&&(rc(i.color),d.vessel.color=i.color,console.log(`🎨 Color updated: ${i.color} (vessel + particles)`)),i.particlesEnabled!==void 0&&(d.particlesEnabled=i.particlesEnabled,i.particlesEnabled?(Co(_t,d.particlesCount),console.log(`✨ Particles enabled (count: ${d.particlesCount})`)):(Wr(_t),console.log("✨ Particles disabled"))),i.particlesCount!==void 0&&(d.particlesCount=i.particlesCount,d.particles.count=i.particlesCount,d.particlesEnabled)){const t=d.particles.size||.5,n=d.particles.audioGain||2;Wr(_t),Co(_t,d.particlesCount),we(async()=>{const{getParticleSystemInstance:s}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:s}},void 0).then(({getParticleSystemInstance:s})=>{const o=s();o&&(o.setParticleSize(t),o.setAudioGain(n))}),console.log(`✨ Particle count updated: ${d.particlesCount}`)}if(i.particlesLayout!==void 0&&(d.particles.layout=i.particlesLayout,console.log(`✨ Particles layout: ${i.particlesLayout}`),we(async()=>{const{getParticleSystemInstance:t}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:t}},void 0).then(({getParticleSystemInstance:t})=>{const n=t();n&&n.setLayout(i.particlesLayout)})),i.particlesHue!==void 0&&(d.particles.hue=i.particlesHue,console.log(`✨ Hue shift: ${i.particlesHue}°`),we(async()=>{const{getParticleSystemInstance:t}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:t}},void 0).then(({getParticleSystemInstance:t})=>{const n=t();n&&n.setHueShift(i.particlesHue)})),i.particlesSize!==void 0&&(d.particles.size=i.particlesSize,console.log(`✨ Particle size updated: ${i.particlesSize.toFixed(2)} world units`),we(async()=>{const{getParticleSystemInstance:t}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:t}},void 0).then(({getParticleSystemInstance:t})=>{const n=t();n&&n.setParticleSize(i.particlesSize)})),i.particlesOpacity!==void 0&&(d.particles.opacity=i.particlesOpacity,console.log(`✨ Opacity: ${i.particlesOpacity.toFixed(2)}`),we(async()=>{const{getParticleSystemInstance:t}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:t}},void 0).then(({getParticleSystemInstance:t})=>{const n=t();n&&n.setOpacity(i.particlesOpacity)})),i.particlesOrganicMotion!==void 0&&(d.particles.organicMotion=i.particlesOrganicMotion,console.log(`✨ Organic motion: ${i.particlesOrganicMotion}`)),i.particlesOrganicStrength!==void 0&&(d.particles.organicStrength=i.particlesOrganicStrength,console.log(`✨ Organic strength: ${i.particlesOrganicStrength.toFixed(2)}`),we(async()=>{const{getParticleSystemInstance:t}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:t}},void 0).then(({getParticleSystemInstance:t})=>{const n=t();n&&n.setOrganicStrength(i.particlesOrganicStrength)})),i.particlesAudioReactiveHue!==void 0&&(d.particles.audioReactiveHue=i.particlesAudioReactiveHue,console.log(`✨ Audio-reactive hue: ${i.particlesAudioReactiveHue}`),we(async()=>{const{getParticleSystemInstance:t}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:t}},void 0).then(({getParticleSystemInstance:t})=>{const n=t();n&&n.setAudioReactive(i.particlesAudioReactiveHue)})),i.particlesAudioGain!==void 0&&(d.particles.audioGain=i.particlesAudioGain,console.log(`✨ Audio gain: ${i.particlesAudioGain.toFixed(1)}`),we(async()=>{const{getParticleSystemInstance:t}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:t}},void 0).then(({getParticleSystemInstance:t})=>{const n=t();n&&n.setAudioGain(i.particlesAudioGain)})),i.particlesVelocity!==void 0&&(d.particles.velocity=i.particlesVelocity,d.particles.orbitalSpeed=i.particlesVelocity,console.log(`✨ Orbital speed: ${i.particlesVelocity.toFixed(2)}`),we(async()=>{const{getParticleSystemInstance:t}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:t}},void 0).then(({getParticleSystemInstance:t})=>{const n=t();n&&n.setOrbitalSpeed(i.particlesVelocity)})),i.particlesMotionSmoothness!==void 0&&(d.particles.motionSmoothness=i.particlesMotionSmoothness,console.log(`✨ Smoothness: ${i.particlesMotionSmoothness.toFixed(2)}`),we(async()=>{const{getParticleSystemInstance:t}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:t}},void 0).then(({getParticleSystemInstance:t})=>{const n=t();n&&n.setSmoothness(i.particlesMotionSmoothness)})),i.particlesTrailEnabled!==void 0&&(d.particles.trailEnabled=i.particlesTrailEnabled,console.log(`🌊 Trail enabled: ${i.particlesTrailEnabled}`),we(async()=>{const{getParticleSystemInstance:t}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:t}},void 0).then(({getParticleSystemInstance:t})=>{const n=t();n&&n.setTrailEnabled(i.particlesTrailEnabled)})),i.particlesTrailLength!==void 0&&(d.particles.trailLength=i.particlesTrailLength,console.log(`🌊 Trail length: ${i.particlesTrailLength}`),we(async()=>{const{getParticleSystemInstance:t}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:t}},void 0).then(({getParticleSystemInstance:t})=>{const n=t();n&&n.setTrailLength(i.particlesTrailLength)})),i.particlesTrailOpacity!==void 0&&(d.particles.trailOpacity=i.particlesTrailOpacity,console.log(`🌊 Trail opacity: ${i.particlesTrailOpacity.toFixed(2)}`),we(async()=>{const{getParticleSystemInstance:t}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:t}},void 0).then(({getParticleSystemInstance:t})=>{const n=t();n&&n.setTrailOpacity(i.particlesTrailOpacity)})),i.particlesTrailFade!==void 0&&(d.particles.trailFade=i.particlesTrailFade,console.log(`🌊 Trail fade: ${i.particlesTrailFade.toFixed(2)}`),we(async()=>{const{getParticleSystemInstance:t}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:t}},void 0).then(({getParticleSystemInstance:t})=>{const n=t();n&&n.setTrailFade(i.particlesTrailFade)})),i.particlesTrailAudioReactive!==void 0&&(d.particles.trailAudioReactive=i.particlesTrailAudioReactive,console.log(`🌊 Trail audio-reactive length: ${i.particlesTrailAudioReactive}`),we(async()=>{const{getParticleSystemInstance:t}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:t}},void 0).then(({getParticleSystemInstance:t})=>{const n=t();n&&n.setTrailAudioReactive(i.particlesTrailAudioReactive)})),i.particlesTrailLengthMin!==void 0&&(d.particles.trailLengthMin=i.particlesTrailLengthMin,console.log(`🌊 Trail min length: ${i.particlesTrailLengthMin}`),we(async()=>{const{getParticleSystemInstance:t}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:t}},void 0).then(({getParticleSystemInstance:t})=>{const n=t();n&&n.setTrailLengthMin(i.particlesTrailLengthMin)})),i.particlesTrailLengthMax!==void 0&&(d.particles.trailLengthMax=i.particlesTrailLengthMax,console.log(`🌊 Trail max length: ${i.particlesTrailLengthMax}`),we(async()=>{const{getParticleSystemInstance:t}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:t}},void 0).then(({getParticleSystemInstance:t})=>{const n=t();n&&n.setTrailLengthMax(i.particlesTrailLengthMax)})),i.particlesResetDefaults!==void 0&&(console.log("🔄 Resetting particle system to defaults"),d.particles.size=.5,d.particles.count=5e3,d.particles.orbitalSpeed=.05,d.particles.motionSmoothness=.5,d.particles.opacity=1,d.particles.organicStrength=.2,d.particles.hue=0,d.particles.audioReactiveHue=!0,d.particles.audioGain=2,d.particles.layout="orbit",we(async()=>{const{destroyParticles:t,initParticles:n,getParticleSystemInstance:s}=await Promise.resolve().then(()=>yt);return{destroyParticles:t,initParticles:n,getParticleSystemInstance:s}},void 0).then(({destroyParticles:t,initParticles:n,getParticleSystemInstance:s})=>{t(_t),n(_t,5e3);const o=s();o&&(o.setParticleSize(.5),o.setAudioGain(2),o.setHueShift(0),o.setAudioReactive(!0),o.setOrbitalSpeed(.05),o.setSmoothness(.5),o.setOpacity(1),o.setOrganicStrength(.2),o.setLayout("orbit"))})),i.motionTrailsEnabled!==void 0&&(d.motionTrailsEnabled=i.motionTrailsEnabled,console.log(`🎞️ Motion Trails ${i.motionTrailsEnabled?"ON":"OFF"}`)),i.motionTrailIntensity!==void 0&&(d.motionTrailIntensity=i.motionTrailIntensity,console.log(`🎞️ Motion Trail Intensity: ${i.motionTrailIntensity.toFixed(2)}`)),i.shadowBoxProjectParticles!==void 0&&(console.log(`📦 Shadow Box project particles: ${i.shadowBoxProjectParticles}`),we(async()=>{const{getParticleSystemInstance:t}=await Promise.resolve().then(()=>yt);return{getParticleSystemInstance:t}},void 0).then(({getParticleSystemInstance:t})=>{const n=t();n&&n.setProjectParticlesToShadow(i.shadowBoxProjectParticles)})),i.shadowBoxThreshold!==void 0&&(console.log(`📦 Shadow Box threshold: ${i.shadowBoxThreshold.toFixed(2)}`),we(async()=>{const{getShadowBox:t}=await Promise.resolve().then(()=>Li);return{getShadowBox:t}},void 0).then(({getShadowBox:t})=>{const n=t();n&&n.setThreshold(i.shadowBoxThreshold)})),i.shadowBoxBleachGain!==void 0&&(console.log(`📦 Shadow Box bleach gain: ${i.shadowBoxBleachGain.toFixed(2)}`),we(async()=>{const{getShadowBox:t}=await Promise.resolve().then(()=>Li);return{getShadowBox:t}},void 0).then(({getShadowBox:t})=>{const n=t();n&&n.setGain(i.shadowBoxBleachGain)})),i.shadowBoxPalette!==void 0&&we(async()=>{const{getShadowBox:t}=await Promise.resolve().then(()=>Li);return{getShadowBox:t}},void 0).then(({getShadowBox:t})=>{const n=t();n&&we(async()=>{const{state:s}=await Promise.resolve().then(()=>xu);return{state:s}},void 0).then(({state:s})=>{if(s.shadowBox.palette=i.shadowBoxPalette,i.shadowBoxPalette==="Manual"){const o=s.shadowBox.bgColor||"#000000",r=s.shadowBox.fgColor||"#ffffff";n.setColors(o,r)}else n.setPalette(i.shadowBoxPalette)})}),(i.shadowBoxBgColor!==void 0||i.shadowBoxFgColor!==void 0)&&we(async()=>{const{getShadowBox:t}=await Promise.resolve().then(()=>Li);return{getShadowBox:t}},void 0).then(({getShadowBox:t})=>{const n=t();n&&we(async()=>{const{state:s}=await Promise.resolve().then(()=>xu);return{state:s}},void 0).then(({state:s})=>{const o=i.shadowBoxBgColor||s.shadowBox.bgColor||"#000000",r=i.shadowBoxFgColor||s.shadowBox.fgColor||"#ffffff";s.shadowBox||(s.shadowBox={}),i.shadowBoxBgColor&&(s.shadowBox.bgColor=o),i.shadowBoxFgColor&&(s.shadowBox.fgColor=r),(!s.shadowBox.palette||s.shadowBox.palette==="Manual")&&n.setColors(o,r)})}),i.shadowBoxGain!==void 0&&(console.log(`📦 Shadow Box gain (legacy): ${i.shadowBoxGain.toFixed(2)}`),we(async()=>{const{getShadowBox:t}=await Promise.resolve().then(()=>Li);return{getShadowBox:t}},void 0).then(({getShadowBox:t})=>{const n=t();n&&n.setShadowGain(i.shadowBoxGain)})),i.vesselEnabled!==void 0&&(d.vessel.enabled=i.vesselEnabled,console.log(`🚢 Vessel enabled: ${i.vesselEnabled}`)),i.vesselOpacity!==void 0&&(d.vessel.opacity=i.vesselOpacity,console.log(`🚢 Vessel opacity: ${i.vesselOpacity}`)),i.vesselScale!==void 0&&(d.vessel.scale=i.vesselScale,console.log(`🚢 Vessel scale: ${i.vesselScale}`)),i.vesselColor!==void 0&&(d.vessel.color=i.vesselColor,console.log(`🚢 Vessel color: ${i.vesselColor}`)),i.vesselSpinEnabled!==void 0&&(d.vessel.spinEnabled=i.vesselSpinEnabled,console.log(`🚢 Vessel spin enabled: ${i.vesselSpinEnabled}`)),i.vesselSpinSpeed!==void 0&&(d.vessel.spinSpeed=i.vesselSpinSpeed,console.log(`🚢 Vessel spin speed: ${i.vesselSpinSpeed}`)),i.vesselMode!==void 0&&(d.vessel.mode=i.vesselMode,console.log(`🚢 Vessel mode: ${i.vesselMode}`),we(async()=>{const{reinitVessel:t}=await Promise.resolve().then(()=>jr);return{reinitVessel:t}},void 0).then(({reinitVessel:t})=>{t(_t,Pn,Rn)})),i.vesselLayout!==void 0){d.vessel.layout=i.vesselLayout;const t=["lattice","hoops","shells"];d.vessel.layoutIndex=t.indexOf(i.vesselLayout),console.log(`🚢 Vessel layout: ${i.vesselLayout} (index: ${d.vessel.layoutIndex})`),d.vessel.mode==="gyre"&&we(async()=>{const{reinitVessel:n}=await Promise.resolve().then(()=>jr);return{reinitVessel:n}},void 0).then(({reinitVessel:n})=>{n(_t,Pn,Rn)})}if(i.vesselAudioSmoothing!==void 0&&(d.vessel.audioSmoothing=i.vesselAudioSmoothing,console.log(`🚢 Vessel audio smoothing: ${i.vesselAudioSmoothing}`)),i.vesselHueShiftRange!==void 0&&(d.vessel.hueShiftRange=i.vesselHueShiftRange,console.log(`🚢 Vessel hue shift range: ${i.vesselHueShiftRange}°`)),i.shadowsEnabled!==void 0&&(d.shadows.enabled=i.shadowsEnabled,console.log(`🌑 Shadows enabled: ${i.shadowsEnabled}`)),i.shadowsGround!==void 0&&(d.shadows.ground=i.shadowsGround,console.log(`🌑 Ground shadow: ${i.shadowsGround}`)),i.shadowsBackdrop!==void 0&&(d.shadows.backdrop=i.shadowsBackdrop,console.log(`🌑 Backdrop shadow: ${i.shadowsBackdrop}`)),i.shadowsOpacity!==void 0&&(d.shadows.opacity=i.shadowsOpacity,console.log(`🌑 Shadow opacity: ${i.shadowsOpacity}`)),i.shadowsColor!==void 0&&(d.shadows.color=i.shadowsColor,console.log(`🌑 Shadow color: ${i.shadowsColor}`)),i.spritesEnabled!==void 0&&(d.sprites.enabled=i.spritesEnabled,console.log(`✨ Sprites enabled: ${i.spritesEnabled}`)),i.spritesCount!==void 0&&(d.sprites.count=i.spritesCount,console.log(`✨ Sprites count: ${i.spritesCount}`),we(async()=>{const{reinitSprites:t}=await Promise.resolve().then(()=>Zy);return{reinitSprites:t}},void 0).then(({reinitSprites:t})=>{we(async()=>{const{scene:n}=await Promise.resolve().then(()=>As);return{scene:n}},void 0).then(({scene:n})=>{t(n)})})),i.colorLayer!==void 0){const{colorLayer:t,property:n,value:s}=i,o=n;we(async()=>{const{applyBinding:r}=await Promise.resolve().then(()=>CS);return{applyBinding:r}},void 0).then(({applyBinding:r})=>{r(t,o,s,"HUD")})}if(i.presetAction!==void 0)if(i.presetAction==="chain:start"){const t=i.chainLoop?" [LOOP]":"",n=i.chainShuffle?" [SHUFFLE]":"";console.log(`📟 Chain action: start${t}${n}`,i.chainPresets,`(${i.chainDuration}ms)`)}else i.presetAction==="chain:stop"?console.log("📟 Chain action: stop"):i.presetAction==="chain:save"?console.log("📟 Chain action: save",i.chainName,`(${((e=i.chainPresets)==null?void 0:e.length)||0} presets)`):i.presetAction==="chain:load"?console.log("📟 Chain action: load",i.chainName):i.presetAction==="chain:delete"?console.log("📟 Chain action: delete",i.chainName):i.presetAction==="chain:reset"?console.log("📟 Chain action: reset"):console.log("📟 Preset action:",i.presetAction,i.presetName);if(i.mandalaEnabled!==void 0&&(d.mandala.enabled=i.mandalaEnabled,d.emojiMandala.enabled=i.mandalaEnabled,console.log(`🎛️ Mandala HUD: ${i.mandalaEnabled?"ON":"OFF"}`)),i.mandalaRings!==void 0){d.mandala.ringCount=i.mandalaRings,d.emojiMandala.rings=i.mandalaRings;const t=Mn==null?void 0:Mn();t&&t.setRings(i.mandalaRings)}if(i.mandalaSymmetry!==void 0){d.mandala.symmetry=i.mandalaSymmetry,d.emojiMandala.symmetry=i.mandalaSymmetry;const t=Mn==null?void 0:Mn();t&&t.setSymmetry(i.mandalaSymmetry)}if(i.mandala){const t=i.mandala,n=Mn==null?void 0:Mn();n&&(t.rings!==void 0&&n.setRings(t.rings),t.symmetry!==void 0&&n.setSymmetry(t.symmetry),t.scale!==void 0&&n.setScale(t.scale,t.mode),t.emoji!==void 0&&n.swapEmoji(t.emoji,t.ringIndex),t.rotationSpeed!==void 0&&n.setRotationSpeed(t.rotationSpeed),t.musicalMode!==void 0&&n.setMusicalMode(t.musicalMode),t.rootNote!==void 0&&n.setRootNote(t.rootNote),t.audioModulation!==void 0&&n.setAudioModulation(t.audioModulation),t.layeredAudio!==void 0&&n.setLayeredAudio(t.layeredAudio),t.differentialRotation!==void 0&&n.setDifferentialRotation(t.differentialRotation),t.scaleSequencing!==void 0&&n.setScaleSequencing(t.scaleSequencing),t.scaleSequence!==void 0&&n.setScaleSequence(t.scaleSequence),t.performanceMode!==void 0&&n.setPerformanceMode(t.performanceMode),t.layoutMode!==void 0&&n.setLayout(t.layoutMode),t.mandalaAudioReactive!==void 0&&n.setMandalaAudioReactive(t.mandalaAudioReactive),t.mandalaSensitivity!==void 0&&n.setMandalaSensitivity(t.mandalaSensitivity))}});console.log("📟 HUD routing configured (Phase 11.7.24: MandalaController integration)");console.log("🎶 audioRouter.js loaded");let Ms={cube:0,sphere:0,pyramid:0,torus:0};Ff(i=>{d.audio.bass=i.bass||0,d.audio.mid=i.mid||0,d.audio.treble=i.treble||0,d.audio.enabled=i.isEnabled||!1,d.audio.sensitivity=i.sensitivity||1,i.isEnabled?(Ms.cube=i.bass||0,Ms.sphere=i.mid||0,Ms.pyramid=i.treble||0,Ms.torus=0,qS()):Ms={cube:0,sphere:0,pyramid:0,torus:0}});function qS(){if(!d.audio.enabled)return;const i={...d.morphWeights},e={};Object.keys(i).forEach(t=>{e[t]=i[t]+(Ms[t]||0)}),oc(e)}console.log("🎶 Audio routing configured");var gp={render:()=>{},setThreshold:()=>{},setGain:()=>{},setColors:()=>{},setPalette:()=>{},setShadowGain:()=>{}};console.log("📦 ShadowBox safe stub active (Phase 2.3.3SS) - prevents initialization errors");let ta=null,_c=null,xp=null,na=null;Jf();console.log("🔄 Build timestamp:",new Date().toISOString());class YS{constructor(e,t){console.log("⚠️ ShadowBox initialized in FAILSAFE mode (Phase 2.3.3R) - rendering disabled"),this.renderer=t,this.plane=null}render(e){}setThreshold(e){console.log(`📦 ShadowBox threshold set: ${e.toFixed(2)} (failsafe mode)`)}setGain(e){console.log(`📦 ShadowBox gain set: ${e.toFixed(1)} (failsafe mode)`)}setColors(e,t){console.log(`📦 ShadowBox colors set: bg=${e}, fg=${t} (failsafe mode)`)}setPalette(e){console.log(`📦 ShadowBox palette set: ${e} (failsafe mode)`)}setShadowGain(e){console.log(`📦 ShadowBox gain (legacy) set: ${e.toFixed(1)} (failsafe mode)`)}}Sf();Hy(()=>{console.log("🎹 MIDI ready")});Gf();$f();try{const i=JSON.parse(localStorage.getItem("presets")||"{}");Object.keys(i).length>0&&console.log("💾 Restored presets from localStorage")}catch(i){console.warn("💾 Failed to restore presets:",i)}Nf();Yy(_t);dc(_t);hc(_t,Pn,Rn);IS(_t);gp=new YS(_t,Pn);console.log("📦 ShadowBox stub replaced with failsafe instance");if(d.particlesEnabled){Co(_t,d.particlesCount);const i=Rf(),e=Vf();i&&e&&(i.setVesselReference(e),console.log("🔗 Particles coupled to Vessel rotation"))}ta=new Pf(_t);window.emojiStreamManager=ta;_c=new Lf(ta);window.emojiSequencer=_c;xp=new If(ta,_c);window.emojiBankManager=xp;na=new GS(_t,{rings:d.emojiMandala.rings,symmetry:d.emojiMandala.symmetry,scale:d.emojiMandala.scale,rotationSpeed:d.emojiMandala.rotationSpeed,emojiLayout:d.emojiMandala.layout});window.mandalaController=na;console.log("🎛️ MandalaController initialized and exposed globally");const Rr=na.getState();console.log(`🔗 Mandala bound to HUD + MIDI (rings=${Rr.rings}, symmetry=${Rr.symmetry}, scale=${Rr.scale}, mode=${Rr.mode})`);console.log("🔗 Mandala → Animation Loop: ✅ | HUD Routing: ✅ | MIDI Routing: ✅");let vc=!1,Pl=0,Ll=0;window.addEventListener("mousedown",()=>{vc=!0});window.addEventListener("mouseup",()=>{vc=!1});window.addEventListener("mousemove",i=>{var e;Pl=i.clientX,Ll=i.clientY,vc&&((e=d.emojiPhysics)!=null&&e.mouseInteraction)&&(window.emojiStreamManager&&window.emojiStreamManager.streams.forEach((t,n)=>{t.enabled&&t.applySwirlForce(Pl,Ll)}),window.emojiParticles&&window.emojiParticles.applySwirlForce(Pl,Ll))});WS(()=>({midiDevices:$y(),hudIdle:d.idleSpin,morphState:{current:d.morphState.current,previous:d.morphState.previous,progress:d.morphState.progress,weights:{...d.morphWeights},isTransitioning:d.morphState.isTransitioning,targets:d.morphState.targets},currentPreset:d.presets.currentPresetName,audioData:{bass:d.audio.bass,mid:d.audio.mid,treble:d.audio.treble,isEnabled:d.audio.enabled,sensitivity:d.audio.sensitivity},visualData:{ambientIntensity:d.lighting.ambientIntensity,directionalIntensity:d.lighting.directionalIntensity,color:d.color,hue:d.hue}}));setTimeout(()=>{_o(Po())},100);window.addEventListener("keydown",i=>{if(i.key==="p"||i.key==="P"){const e=d.morphState.targets,n=(e.indexOf(d.morphState.current)+1)%e.length,s=e[n];d.morphState.previous=d.morphState.current,d.morphState.current=s,e.forEach(o=>{d.morphWeights[o]=0}),d.morphWeights[s]=1,console.log(`🔄 Toggled to morph target: ${s}`)}});console.log("✅ main.js loaded – all modules imported");function _p(){return gp}function KS(){return na}function JS(i){console.log("🔍 Scene Object Inventory:"),console.log("===========================");let e=0;i.traverse(t=>{if(t.isMesh||t.isLine||t.isLineSegments){e++;const n=t.geometry?t.geometry.type:"unknown",s=t.material?`${t.material.type} (wireframe:${t.material.wireframe})`:"no material";console.log(`${e}. ${t.type} | name="${t.name||"(unnamed)"}" | geometry=${n} | material=${s}`),console.log(`   visible=${t.visible} | position=(${t.position.x.toFixed(2)}, ${t.position.y.toFixed(2)}, ${t.position.z.toFixed(2)})`),console.log("   ",t)}}),console.log("==========================="),console.log(`Total renderable objects: ${e}`)}setTimeout(()=>{JS(_t)},2e3);const Li=Object.freeze(Object.defineProperty({__proto__:null,getMandalaController:KS,getShadowBox:_p},Symbol.toStringTag,{value:"Module"}));
