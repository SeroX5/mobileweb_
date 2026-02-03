System.register(["./index-legacy-CzysntQd.js"],function(e,t){"use strict";var n,r,s,a,o;return{setters:[e=>{n=e.aa,r=e.ab,s=e.ac,a=e.ad,o=e.ae}],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
e("startStatusTap",()=>{const e=window;e.addEventListener("statusTap",()=>{n(()=>{const t=e.innerWidth,n=e.innerHeight,i=document.elementFromPoint(t/2,n/2);if(!i)return;const c=r(i);c&&new Promise(e=>s(c,e)).then(()=>{a(async()=>{c.style.setProperty("--overflow","hidden"),await o(c,300),c.style.removeProperty("--overflow")})})})})})}}});
