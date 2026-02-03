System.register([],function(t,e){"use strict";return{execute:function(){t({a:Uc,c:function(t,e,...n){if(t=_(t),qe("collection","path",e),t instanceof Oc){const r=Fe.fromString(e,...n);return ze(r),new Fc(t,null,r)}{if(!(t instanceof Pc||t instanceof Fc))throw new ve(ye.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return ze(r),new Fc(t.firestore,null,r)}},d:function(t){return Lu(He(t.firestore,$c),[new Fs(t._key,Is.none())])},e:function(t,e){const n=He(t.firestore,$c),r=Uc(t),s=function(t,e){let n;return n=t?t.toFirestore(e):e,n}(t.converter,e),i=nu(t.firestore);return Lu(n,[ru(i,"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,Is.exists(!1))]).then(()=>r)},f:
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function(t){t=He(t,Pc);const e=He(t.firestore,$c);return function(t,e,n={}){const r=new we;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,s){const i=new bc({next:a=>{i.Nu(),e.enqueueAndForget(()=>Va(t,o));const c=a.docs.has(n);!c&&a.fromCache?s.reject(new ve(ye.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?s.reject(new ve(ye.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(a)},error:t=>s.reject(t)}),o=new qa(Pr(n.path),i,{includeMetadataChanges:!0,Ka:!0});return Ma(t,o)}(await Ac(t),t.asyncQueue,e,n,r)),r.promise}(zc(e),t._key).then(n=>function(t,e,n){const r=n.docs.get(e._key),s=new gu(t);return new Nu(t,s,e._key,r,new Du(n.hasPendingWrites,n.fromCache),e.converter)}(e,t,n))},g:function(t){t=He(t,Vc);const e=He(t.firestore,$c),n=zc(e),r=new gu(e);
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */return function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ve(ye.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),function(t,e,n={}){const r=new we;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,s){const i=new bc({next:n=>{i.Nu(),e.enqueueAndForget(()=>Va(t,o)),n.fromCache&&"server"===r.source?s.reject(new ve(ye.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new qa(n,i,{includeMetadataChanges:!0,Ka:!0});return Ma(t,o)}(await Ac(t),t.asyncQueue,e,n,r)),r.promise}(n,t._query).then(n=>new Ru(e,r,t,n))},o:function(t,e="asc"){const n=e,r=uu("orderBy",t);return Su._create(r,n)},q:function(t,e,...n){let r=[];e instanceof Eu&&r.push(e),r=r.concat(n),function(t){const e=t.filter(t=>t instanceof Tu).length,n=t.filter(t=>t instanceof _u).length;if(e>1||e>0&&n>0)throw new ve(ye.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(r);for(const s of r)t=s._apply(t);return t},u:function(t,e,n,...r){t=He(t,Pc);const s=He(t.firestore,$c),i=nu(s);let o;return o="string"==typeof(e=_(e))||e instanceof Kc?function(t,e,n,r,s,i){const o=t.createContext(1,e,n),a=[uu(e,r,n)],c=[s];if(i.length%2!=0)throw new ve(ye.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(uu(e,i[d])),c.push(i[d+1]);const u=[],h=ar.empty();for(let d=a.length-1;d>=0;--d)if(!fu(u,a[d])){const t=a[d];let e=c[d];e=_(e);const n=o.childContextForFieldPath(t);if(e instanceof su)u.push(t);else{const r=iu(e,n);null!=r&&(u.push(t),h.set(t,r))}}const l=new Tn(u);return new Xc(h,l,o.fieldTransforms)}(i,"updateDoc",t._key,e,n,r):function(t,e,n,r){const s=t.createContext(1,e,n);cu("Data must be an object, but it was:",s,r);const i=[],o=ar.empty();mn(r,(t,r)=>{const a=lu(e,t,n);r=_(r);const c=s.childContextForFieldPath(a);if(r instanceof su)i.push(a);else{const t=iu(r,c);null!=t&&(i.push(a),o.set(a,t))}});const a=new Tn(i);return new Xc(o,a,s.fieldTransforms)}(i,"updateDoc",t._key,e),Lu(s,[o.toMutation(t._key,Is.exists(!0))])}});var e={};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const n=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(n(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(i>>10)),e[r++]=String.fromCharCode(56320+(1023&i))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==a||null==c)throw new s;const u=e<<2|o>>4;if(r.push(u),64!==a){const t=o<<4&240|a>>2;if(r.push(t),64!==c){const t=a<<6&192|c;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i=function(t){return function(t){const e=n(t);return r.encodeByteArray(e,!0)}(t).replace(/\./g,"")},o=()=>
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */().__FIREBASE_DEFAULTS__,a=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&function(t){try{return r.decodeString(t,!0)}catch(n){console.error("base64Decode failed: ",n)}return null}(t[1]);return e&&JSON.parse(e)},c=()=>{try{return o()||(()=>{if("undefined"==typeof process)return;const t=e.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||a()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},u=t=>{const e=(t=>{var e;return null===(e=c())||void 0===e||null===(e=e.emulatorHosts)||void 0===e?void 0:e[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},h=()=>{var t;return null===(t=c())||void 0===t?void 0:t.config};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
             * @license
             * Copyright 2025 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function d(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}const f={};let p=!1;function g(t,e){if("undefined"==typeof window||"undefined"==typeof document||!d(window.location.host)||f[t]===e||f[t]||p)return;function n(t){return`__firebase__banner__${t}`}f[t]=e;const r="__firebase__banner",s=function(){const t={prod:[],emulator:[]};for(const e of Object.keys(f))f[e]?t.emulator.push(e):t.prod.push(e);return t}().prod.length>0;function i(){const t=document.createElement("span");return t.style.cursor="pointer",t.style.marginLeft="16px",t.style.fontSize="24px",t.innerHTML=" &times;",t.onclick=()=>{p=!0,function(){const t=document.getElementById(r);t&&t.remove()}()},t}function o(){const t=function(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}(r),e=n("text"),o=document.getElementById(e)||document.createElement("span"),a=n("learnmore"),c=document.getElementById(a)||document.createElement("a"),u=n("preprendIcon"),h=document.getElementById(u)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(t.created){const e=t.element;!function(t){t.style.display="flex",t.style.background="#7faaf0",t.style.position="fixed",t.style.bottom="5px",t.style.left="5px",t.style.padding=".5em",t.style.borderRadius="5px",t.style.alignItems="center"}(e),function(t,e){t.setAttribute("id",e),t.innerText="Learn more",t.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",t.setAttribute("target","__blank"),t.style.paddingLeft="5px",t.style.textDecoration="underline"}(c,a);const n=i();!function(t,e){t.setAttribute("width","24"),t.setAttribute("id",e),t.setAttribute("height","24"),t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("fill","none"),t.style.marginLeft="-6px"}(h,u),e.append(h,o,c,n),document.body.appendChild(e)}s?(o.innerText="Preview backend disconnected.",h.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(h.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",e)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function m(){return!function(){var t;const e=null===(t=c())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(n){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class y extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,v.prototype.create)}}class v{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?function(t,e){return t.replace(w,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new y(r,o,n)}}const w=/\{\$([^}]+)}/g;function E(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(b(n)&&b(i)){if(!E(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function b(t){return null!==t&&"object"==typeof t}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function _(t){return t&&t._delegate?t._delegate:t}class T{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const S="[DEFAULT]";
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class I{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new l;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(t))try{this.getOrInitializeService({instanceIdentifier:S})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=S){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=S){return this.instances.has(t)}getOptions(t=S){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(s)&&i.resolve(r);return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===S?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}var r;return n||null}normalizeInstanceIdentifier(t=S){return this.component?this.component.multipleInstances?t:S:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class C{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new I(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var A;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(A||(A={}));const D={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},N=A.INFO,k={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},R=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=k[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class x{constructor(t){this.name=t,this._logLevel=N,this._logHandler=R,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in A))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?D[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...t),this._logHandler(this,A.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...t),this._logHandler(this,A.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,A.INFO,...t),this._logHandler(this,A.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,A.WARN,...t),this._logHandler(this,A.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...t),this._logHandler(this,A.ERROR,...t)}}let L,O;const M=new WeakMap,V=new WeakMap,P=new WeakMap,F=new WeakMap,U=new WeakMap;let B={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return V.get(t);if("objectStoreNames"===e)return t.objectStoreNames||P.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function j(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(O||(O=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(z(this),e),$(M.get(this))}:function(...e){return $(t.apply(z(this),e))}:function(e,...n){const r=t.call(z(this),e,...n);return P.set(r,e.sort?e.sort():[e]),$(r)}}function q(t){return"function"==typeof t?j(t):(t instanceof IDBTransaction&&function(t){if(V.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)});V.set(t,e)}(t),e=t,(L||(L=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(t=>e instanceof t)?new Proxy(t,B):t);var e}function $(t){if(t instanceof IDBRequest)return function(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e($(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)});return e.then(e=>{e instanceof IDBCursor&&M.set(e,t)}).catch(()=>{}),U.set(e,t),e}(t);if(F.has(t))return F.get(t);const e=q(t);return e!==t&&(F.set(t,e),U.set(e,t)),e}const z=t=>U.get(t),G=["get","getKey","getAll","getAllKeys","count"],K=["put","add","delete","clear"],H=new Map;function Q(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(H.get(e))return H.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=K.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!G.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return H.set(e,i),i}var W;W=B,B={...W,get:(t,e,n)=>Q(t,e)||W.get(t,e,n),has:(t,e)=>!!Q(t,e)||W.has(t,e)};
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Y{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const J="@firebase/app",X="0.14.7",Z=new x("@firebase/app"),tt="@firebase/app-compat",et="@firebase/analytics-compat",nt="@firebase/analytics",rt="@firebase/app-check-compat",st="@firebase/app-check",it="@firebase/auth",ot="@firebase/auth-compat",at="@firebase/database",ct="@firebase/data-connect",ut="@firebase/database-compat",ht="@firebase/functions",lt="@firebase/functions-compat",dt="@firebase/installations",ft="@firebase/installations-compat",pt="@firebase/messaging",gt="@firebase/messaging-compat",mt="@firebase/performance",yt="@firebase/performance-compat",vt="@firebase/remote-config",wt="@firebase/remote-config-compat",Et="@firebase/storage",bt="@firebase/storage-compat",_t="@firebase/firestore",Tt="@firebase/ai",St="@firebase/firestore-compat",It="firebase",Ct="[DEFAULT]",At={[J]:"fire-core",[tt]:"fire-core-compat",[nt]:"fire-analytics",[et]:"fire-analytics-compat",[st]:"fire-app-check",[rt]:"fire-app-check-compat",[it]:"fire-auth",[ot]:"fire-auth-compat",[at]:"fire-rtdb",[ct]:"fire-data-connect",[ut]:"fire-rtdb-compat",[ht]:"fire-fn",[lt]:"fire-fn-compat",[dt]:"fire-iid",[ft]:"fire-iid-compat",[pt]:"fire-fcm",[gt]:"fire-fcm-compat",[mt]:"fire-perf",[yt]:"fire-perf-compat",[vt]:"fire-rc",[wt]:"fire-rc-compat",[Et]:"fire-gcs",[bt]:"fire-gcs-compat",[_t]:"fire-fst",[St]:"fire-fst-compat",[Tt]:"fire-vertex","fire-js":"fire-js",[It]:"fire-js-all"},Dt=new Map,Nt=new Map,kt=new Map;function Rt(t,e){try{t.container.addComponent(e)}catch(n){Z.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xt(t){const e=t.name;if(kt.has(e))return Z.debug(`There were multiple attempts to register component ${e}.`),!1;kt.set(e,t);for(const n of Dt.values())Rt(n,t);for(const n of Nt.values())Rt(n,t);return!0}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const Lt=new v("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Ot{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new T("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Mt(t,e={}){let n=t;"object"!=typeof e&&(e={name:e});const r={name:Ct,automaticDataCollectionEnabled:!0,...e},s=r.name;if("string"!=typeof s||!s)throw Lt.create("bad-app-name",{appName:String(s)});if(n||(n=h()),!n)throw Lt.create("no-options");const i=Dt.get(s);if(i){if(E(n,i.options)&&E(r,i.config))return i;throw Lt.create("duplicate-app",{appName:s})}const o=new C(s);for(const c of kt.values())o.addComponent(c);const a=new Ot(n,r,o);return Dt.set(s,a),a}function Vt(t,e,n){var r;let s=null!==(r=At[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${s}" with version "${e}":`];return i&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Z.warn(t.join(" "))}xt(new T(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Pt="firebase-heartbeat-store";let Ft=null;function Ut(){return Ft||(Ft=function(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=$(o);return r&&o.addEventListener("upgradeneeded",t=>{r($(o.result),t.oldVersion,t.newVersion,$(o.transaction),t)}),n&&o.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),a.then(t=>{i&&t.addEventListener("close",()=>i()),s&&t.addEventListener("versionchange",t=>s(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore(Pt)}catch(n){console.warn(n)}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),Ft}async function Bt(t,e){try{const n=(await Ut()).transaction(Pt,"readwrite"),r=n.objectStore(Pt);await r.put(e,jt(t)),await n.done}catch(n){if(n instanceof y)Z.warn(n.message);else{const t=Lt.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});Z.warn(t.message)}}}function jt(t){return`${t.name}!${t.options.appId}`}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class qt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new zt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){try{var t;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$t();var e;if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(t=>t.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){const t=function(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Z.warn(n)}}async getHeartbeatsHeader(){try{var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=$t(),{heartbeatsToSend:n,unsentEntries:r}=function(t,e=1024){const n=[];let r=t.slice();for(const s of t){const t=n.find(t=>t.agent===s.agent);if(t){if(t.dates.push(s.date),Gt(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Gt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),s=i(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Z.warn(e),""}}}function $t(){return(new Date).toISOString().substring(0,10)}class zt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=(await Ut()).transaction(Pt),n=await e.objectStore(Pt).get(jt(t));return await e.done,n}catch(e){if(e instanceof y)Z.warn(e.message);else{const t=Lt.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Z.warn(t.message)}}}(this.app);return null!=t&&t.heartbeats?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){var e;const n=await this.read();return Bt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){if(await this._canUseIndexedDBPromise){var e;const n=await this.read();return Bt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Gt(t){return i(JSON.stringify({version:2,heartbeats:t})).length}var Kt;Kt="",xt(new T("platform-logger",t=>new Y(t),"PRIVATE")),xt(new T("heartbeat",t=>new qt(t),"PRIVATE")),Vt(J,X,Kt),Vt(J,X,"esm2020"),Vt("fire-js","");var Ht,Qt,Wt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
            Copyright The Closure Library Authors.
            SPDX-License-Identifier: Apache-2.0
            */(function(){var t;
/** @license

             Copyright The Closure Library Authors.
             SPDX-License-Identifier: Apache-2.0
            */function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(t,e,n){n||(n=0);const r=Array(16);if("string"==typeof e)for(var s=0;s<16;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;s<16;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];let i,o=t.g[3];i=e+(o^n&(s^o))+r[0]+3614090360&4294967295,i=o+(s^(e=n+(i<<7&4294967295|i>>>25))&(n^s))+r[1]+3905402710&4294967295,o=e+(i<<12&4294967295|i>>>20),i=s+(n^o&(e^n))+r[2]+606105819&4294967295,i=n+(e^(s=o+(i<<17&4294967295|i>>>15))&(o^e))+r[3]+3250441966&4294967295,i=e+(o^(n=s+(i<<22&4294967295|i>>>10))&(s^o))+r[4]+4118548399&4294967295,i=o+(s^(e=n+(i<<7&4294967295|i>>>25))&(n^s))+r[5]+1200080426&4294967295,o=e+(i<<12&4294967295|i>>>20),i=s+(n^o&(e^n))+r[6]+2821735955&4294967295,i=n+(e^(s=o+(i<<17&4294967295|i>>>15))&(o^e))+r[7]+4249261313&4294967295,i=e+(o^(n=s+(i<<22&4294967295|i>>>10))&(s^o))+r[8]+1770035416&4294967295,i=o+(s^(e=n+(i<<7&4294967295|i>>>25))&(n^s))+r[9]+2336552879&4294967295,o=e+(i<<12&4294967295|i>>>20),i=s+(n^o&(e^n))+r[10]+4294925233&4294967295,i=n+(e^(s=o+(i<<17&4294967295|i>>>15))&(o^e))+r[11]+2304563134&4294967295,i=e+(o^(n=s+(i<<22&4294967295|i>>>10))&(s^o))+r[12]+1804603682&4294967295,i=o+(s^(e=n+(i<<7&4294967295|i>>>25))&(n^s))+r[13]+4254626195&4294967295,o=e+(i<<12&4294967295|i>>>20),i=s+(n^o&(e^n))+r[14]+2792965006&4294967295,i=n+(e^(s=o+(i<<17&4294967295|i>>>15))&(o^e))+r[15]+1236535329&4294967295,i=e+(s^o&((n=s+(i<<22&4294967295|i>>>10))^s))+r[1]+4129170786&4294967295,i=o+(n^s&((e=n+(i<<5&4294967295|i>>>27))^n))+r[6]+3225465664&4294967295,o=e+(i<<9&4294967295|i>>>23),i=s+(e^n&(o^e))+r[11]+643717713&4294967295,i=n+(o^e&((s=o+(i<<14&4294967295|i>>>18))^o))+r[0]+3921069994&4294967295,i=e+(s^o&((n=s+(i<<20&4294967295|i>>>12))^s))+r[5]+3593408605&4294967295,i=o+(n^s&((e=n+(i<<5&4294967295|i>>>27))^n))+r[10]+38016083&4294967295,o=e+(i<<9&4294967295|i>>>23),i=s+(e^n&(o^e))+r[15]+3634488961&4294967295,i=n+(o^e&((s=o+(i<<14&4294967295|i>>>18))^o))+r[4]+3889429448&4294967295,i=e+(s^o&((n=s+(i<<20&4294967295|i>>>12))^s))+r[9]+568446438&4294967295,i=o+(n^s&((e=n+(i<<5&4294967295|i>>>27))^n))+r[14]+3275163606&4294967295,o=e+(i<<9&4294967295|i>>>23),i=s+(e^n&(o^e))+r[3]+4107603335&4294967295,i=n+(o^e&((s=o+(i<<14&4294967295|i>>>18))^o))+r[8]+1163531501&4294967295,i=e+(s^o&((n=s+(i<<20&4294967295|i>>>12))^s))+r[13]+2850285829&4294967295,i=o+(n^s&((e=n+(i<<5&4294967295|i>>>27))^n))+r[2]+4243563512&4294967295,o=e+(i<<9&4294967295|i>>>23),i=s+(e^n&(o^e))+r[7]+1735328473&4294967295,i=n+(o^e&((s=o+(i<<14&4294967295|i>>>18))^o))+r[12]+2368359562&4294967295,i=e+((n=s+(i<<20&4294967295|i>>>12))^s^o)+r[5]+4294588738&4294967295,i=o+((e=n+(i<<4&4294967295|i>>>28))^n^s)+r[8]+2272392833&4294967295,o=e+(i<<11&4294967295|i>>>21),i=s+(o^e^n)+r[11]+1839030562&4294967295,i=n+((s=o+(i<<16&4294967295|i>>>16))^o^e)+r[14]+4259657740&4294967295,i=e+((n=s+(i<<23&4294967295|i>>>9))^s^o)+r[1]+2763975236&4294967295,i=o+((e=n+(i<<4&4294967295|i>>>28))^n^s)+r[4]+1272893353&4294967295,o=e+(i<<11&4294967295|i>>>21),i=s+(o^e^n)+r[7]+4139469664&4294967295,i=n+((s=o+(i<<16&4294967295|i>>>16))^o^e)+r[10]+3200236656&4294967295,i=e+((n=s+(i<<23&4294967295|i>>>9))^s^o)+r[13]+681279174&4294967295,i=o+((e=n+(i<<4&4294967295|i>>>28))^n^s)+r[0]+3936430074&4294967295,o=e+(i<<11&4294967295|i>>>21),i=s+(o^e^n)+r[3]+3572445317&4294967295,i=n+((s=o+(i<<16&4294967295|i>>>16))^o^e)+r[6]+76029189&4294967295,i=e+((n=s+(i<<23&4294967295|i>>>9))^s^o)+r[9]+3654602809&4294967295,i=o+((e=n+(i<<4&4294967295|i>>>28))^n^s)+r[12]+3873151461&4294967295,o=e+(i<<11&4294967295|i>>>21),i=s+(o^e^n)+r[15]+530742520&4294967295,i=n+((s=o+(i<<16&4294967295|i>>>16))^o^e)+r[2]+3299628645&4294967295,i=e+(s^((n=s+(i<<23&4294967295|i>>>9))|~o))+r[0]+4096336452&4294967295,i=o+(n^((e=n+(i<<6&4294967295|i>>>26))|~s))+r[7]+1126891415&4294967295,o=e+(i<<10&4294967295|i>>>22),i=s+(e^(o|~n))+r[14]+2878612391&4294967295,i=n+(o^((s=o+(i<<15&4294967295|i>>>17))|~e))+r[5]+4237533241&4294967295,i=e+(s^((n=s+(i<<21&4294967295|i>>>11))|~o))+r[12]+1700485571&4294967295,i=o+(n^((e=n+(i<<6&4294967295|i>>>26))|~s))+r[3]+2399980690&4294967295,o=e+(i<<10&4294967295|i>>>22),i=s+(e^(o|~n))+r[10]+4293915773&4294967295,i=n+(o^((s=o+(i<<15&4294967295|i>>>17))|~e))+r[1]+2240044497&4294967295,i=e+(s^((n=s+(i<<21&4294967295|i>>>11))|~o))+r[8]+1873313359&4294967295,i=o+(n^((e=n+(i<<6&4294967295|i>>>26))|~s))+r[15]+4264355552&4294967295,o=e+(i<<10&4294967295|i>>>22),i=s+(e^(o|~n))+r[6]+2734768916&4294967295,i=n+(o^((s=o+(i<<15&4294967295|i>>>17))|~e))+r[13]+1309151649&4294967295,i=e+(s^((n=s+(i<<21&4294967295|i>>>11))|~o))+r[4]+4149444226&4294967295,i=o+(n^((e=n+(i<<6&4294967295|i>>>26))|~s))+r[11]+3174756917&4294967295,o=e+(i<<10&4294967295|i>>>22),i=s+(e^(o|~n))+r[2]+718787259&4294967295,i=n+(o^((s=o+(i<<15&4294967295|i>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(i<<21&4294967295|i>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+o&4294967295}function r(t,e){this.h=e;const n=[];let r=!0;for(let s=t.length-1;s>=0;s--){const i=0|t[s];r&&i==e||(n[s]=i,r=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.F=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.D=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}(e,function(){this.blockSize=-1}),e.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.v=function(t,e){void 0===e&&(e=t.length);const r=e-this.blockSize,s=this.C;let i=this.h,o=0;for(;o<e;){if(0==i)for(;o<=r;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(s[i++]=t.charCodeAt(o++),i==this.blockSize){n(this,s),i=0;break}}else for(;o<e;)if(s[i++]=t[o++],i==this.blockSize){n(this,s),i=0;break}}this.h=i,this.o+=e},e.prototype.A=function(){var t=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;e=8*this.o;for(var n=t.length-8;n<t.length;++n)t[n]=255&e,e/=256;for(this.v(t),t=Array(16),e=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)t[e++]=this.g[n]>>>r&255;return t};var s={};function i(t){return-128<=t&&t<128?function(t,e){var n=s;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,function(t){return new r([0|t],t<0?-1:0)}):new r([0|t],t<0?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(t<0)return d(o(-t));const e=[];let n=1;for(let r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new r(e,0)}var a=i(0),c=i(1),u=i(16777216);function h(t){if(0!=t.h)return!1;for(let e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function l(t){return-1==t.h}function d(t){const e=t.g.length,n=[];for(let r=0;r<e;r++)n[r]=~t.g[r];return new r(n,~t.h).add(c)}function f(t,e){return t.add(d(e))}function p(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function g(t,e){this.g=t,this.h=e}function m(t,e){if(h(e))throw Error("division by zero");if(h(t))return new g(a,a);if(l(t))return e=m(d(t),e),new g(d(e.g),d(e.h));if(l(e))return e=m(t,d(e)),new g(d(e.g),e.h);if(t.g.length>30){if(l(t)||l(e))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=e;r.l(t)<=0;)n=y(n),r=y(r);var s=v(n,1),i=v(r,1);for(r=v(r,2),n=v(n,2);!h(r);){var u=i.add(r);u.l(t)<=0&&(s=s.add(n),i=u),r=v(r,1),n=v(n,1)}return e=f(t,s.j(e)),new g(s,e)}for(s=a;t.l(e)>=0;){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=(r=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,r-48),u=(i=o(n)).j(e);l(u)||u.l(t)>0;)u=(i=o(n-=r)).j(e);h(i)&&(i=c),s=s.add(i),t=f(t,u)}return new g(s,t)}function y(t){const e=t.g.length+1,n=[];for(let r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new r(n,t.h)}function v(t,e){const n=e>>5;e%=32;const s=t.g.length-n,i=[];for(let r=0;r<s;r++)i[r]=e>0?t.i(r+n)>>>e|t.i(r+n+1)<<32-e:t.i(r+n);return new r(i,t.h)}(t=r.prototype).m=function(){if(l(this))return-d(this).m();let t=0,e=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);t+=(r>=0?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if((t=t||10)<2||36<t)throw Error("radix out of range: "+t);if(h(this))return"0";if(l(this))return"-"+d(this).toString(t);const e=o(Math.pow(t,6));var n=this;let r="";for(;;){const s=m(n,e).g;let i=(((n=f(n,s.j(e))).g.length>0?n.g[0]:n.h)>>>0).toString(t);if(h(n=s))return i+r;for(;i.length<6;)i="0"+i;r=i+r}},t.i=function(t){return t<0?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return l(t=f(this,t))?-1:h(t)?0:1},t.abs=function(){return l(this)?d(this):this},t.add=function(t){const e=Math.max(this.g.length,t.g.length),n=[];let s=0;for(let r=0;r<=e;r++){let e=s+(65535&this.i(r))+(65535&t.i(r)),i=(e>>>16)+(this.i(r)>>>16)+(t.i(r)>>>16);s=i>>>16,e&=65535,i&=65535,n[r]=i<<16|e}return new r(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(h(this)||h(t))return a;if(l(this))return l(t)?d(this).j(d(t)):d(d(this).j(t));if(l(t))return d(this.j(d(t)));if(this.l(u)<0&&t.l(u)<0)return o(this.m()*t.m());const e=this.g.length+t.g.length,n=[];for(var s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(let e=0;e<t.g.length;e++){const r=this.i(s)>>>16,i=65535&this.i(s),o=t.i(e)>>>16,a=65535&t.i(e);n[2*s+2*e]+=i*a,p(n,2*s+2*e),n[2*s+2*e+1]+=r*a,p(n,2*s+2*e+1),n[2*s+2*e+1]+=i*o,p(n,2*s+2*e+1),n[2*s+2*e+2]+=r*o,p(n,2*s+2*e+2)}for(t=0;t<e;t++)n[t]=n[2*t+1]<<16|n[2*t];for(t=e;t<2*e;t++)n[t]=0;return new r(n,0)},t.B=function(t){return m(this,t).h},t.and=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new r(n,this.h&t.h)},t.or=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new r(n,this.h|t.h)},t.xor=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new r(n,this.h^t.h)},e.prototype.digest=e.prototype.A,e.prototype.reset=e.prototype.u,e.prototype.update=e.prototype.v,Qt=e,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return d(t(e.substring(1),n));if(e.indexOf("-")>=0)throw Error('number format error: interior "-" character');const r=o(Math.pow(n,8));let s=a;for(let a=0;a<e.length;a+=8){var i=Math.min(8,e.length-a);const t=parseInt(e.substring(a,a+i),n);i<8?(i=o(Math.pow(n,i)),s=s.j(i).add(o(t))):(s=s.j(r),s=s.add(o(t)))}return s},Ht=r}).apply(void 0!==Wt?Wt:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Yt,Jt,Xt,Zt,te,ee,ne,re,se="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
            Copyright The Closure Library Authors.
            SPDX-License-Identifier: Apache-2.0
            */(function(){var t,e=Object.defineProperty,n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof se&&se];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function r(t,r){if(r)t:{var s=n;t=t.split(".");for(var i=0;i<t.length-1;i++){var o=t[i];if(!(o in s))break t;s=s[o]}(r=r(i=s[t=t[t.length-1]]))!=i&&null!=r&&e(s,t,{configurable:!0,writable:!0,value:r})}}r("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(t){return t||function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push([e,t[e]]);return n}});
/** @license

             Copyright The Closure Library Authors.
             SPDX-License-Identifier: Apache-2.0
            */
var s=s||{},i=this||self;function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function c(t,e,n){return(c=a).apply(null,arguments)}function u(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function h(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Ob=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}var l="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function d(t){const e=t.length;if(e>0){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function f(t,e){for(let r=1;r<arguments.length;r++){const e=arguments[r];var n=typeof e;if("array"==(n="object"!=n?n:e?Array.isArray(e)?"array":n:"null")||"object"==n&&"number"==typeof e.length){n=t.length||0;const r=e.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=e[s]}else t.push(e)}}function p(t){i.setTimeout(()=>{throw t},0)}function g(){var t=E;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var m=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return this.h>0?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new y,t=>t.reset());class y{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let v,w=!1,E=new class{constructor(){this.h=this.g=null}add(t,e){const n=m.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},b=()=>{const t=Promise.resolve(void 0);v=()=>{t.then(_)}};function _(){for(var t;t=g();){try{t.h.call(t.g)}catch(n){p(n)}var e=m;e.j(t),e.h<100&&(e.h++,t.next=e.g,e.g=t)}w=!1}function T(){this.u=this.u,this.C=this.C}function S(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},S.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};i.addEventListener("test",t,e),i.removeEventListener("test",t,e)}catch(n){}return t}();function C(t){return/^[\s\xa0]*$/.test(t)}function A(t,e){S.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,e)}h(A,S),A.prototype.init=function(t,e){const n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=e,(e=t.relatedTarget)||("mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)),this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&A.Z.h.call(this)},A.prototype.h=function(){A.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),N=0;function k(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++N,this.da=this.fa=!1}function R(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function x(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}const O="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<O.length;e++)n=O[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function V(t){this.src=t,this.g={},this.h=0}function P(t,e){const n=e.type;if(n in t.g){var r,s=t.g[n],i=Array.prototype.indexOf.call(s,e,void 0);(r=i>=0)&&Array.prototype.splice.call(s,i,1),r&&(R(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function F(t,e,n,r){for(let s=0;s<t.length;++s){const i=t[s];if(!i.da&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}V.prototype.add=function(t,e,n,r,s){const i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);const o=F(t,e,r,s);return o>-1?(e=t[o],n||(e.fa=!1)):((e=new k(e,this.src,i,!!r,s)).fa=n,t.push(e)),e};var U="closure_lm_"+(1e6*Math.random()|0),B={};function j(t,e,n,r,s){if(Array.isArray(e)){for(let i=0;i<e.length;i++)j(t,e[i],n,r,s);return null}return n=Q(n),t&&t[D]?t.J(e,n,!!o(r)&&!!r.capture,s):function(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");const a=o(s)?!!s.capture:!!s;let c=K(t);if(c||(t[U]=c=new V(t)),(n=c.add(e,n,r,a,i)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=G;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)I||(s=a),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(z(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}(t,e,n,!1,r,s)}function q(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)q(t,e[i],n,r,s);else r=o(r)?!!r.capture:!!r,n=Q(n),t&&t[D]?(t=t.i,(i=String(e).toString())in t.g&&(n=F(e=t.g[i],n,r,s))>-1&&(R(e[n]),Array.prototype.splice.call(e,n,1),0==e.length&&(delete t.g[i],t.h--))):t&&(t=K(t))&&(e=t.g[e.toString()],t=-1,e&&(t=F(e,n,r,s)),(n=t>-1?e[t]:null)&&$(n))}function $(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[D])P(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(z(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=K(e))?(P(n,t),0==n.h&&(n.src=null,e[U]=null)):R(t)}}}function z(t){return t in B?B[t]:B[t]="on"+t}function G(t,e){if(t.da)t=!0;else{e=new A(e,this);const n=t.listener,r=t.ha||t.src;t.fa&&$(t),t=n.call(r,e)}return t}function K(t){return(t=t[U])instanceof V?t:null}var H="__closure_events_fn_"+(1e9*Math.random()>>>0);function Q(t){return"function"==typeof t?t:(t[H]||(t[H]=function(e){return t.handleEvent(e)}),t[H])}function W(){T.call(this),this.i=new V(this),this.M=this,this.G=null}function Y(t,e){var n,r=t.G;if(r)for(n=[];r;r=r.G)n.push(r);if(t=t.M,r=e.type||e,"string"==typeof e)e=new S(e,t);else if(e instanceof S)e.target=e.target||t;else{var s=e;M(e=new S(r,t),s)}let i,o;if(s=!0,n)for(o=n.length-1;o>=0;o--)i=e.g=n[o],s=J(i,r,!0,e)&&s;if(i=e.g=t,s=J(i,r,!0,e)&&s,s=J(i,r,!1,e)&&s,n)for(o=0;o<n.length;o++)i=e.g=n[o],s=J(i,r,!1,e)&&s}function J(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();let s=!0;for(let i=0;i<e.length;++i){const o=e[i];if(o&&!o.da&&o.capture==n){const e=o.listener,n=o.ha||o.src;o.fa&&P(t.i,o),s=!1!==e.call(n,r)&&s}}return s&&!r.defaultPrevented}function X(t){t.g=function(t,e){if("function"!=typeof t){if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=c(t.handleEvent,t)}return Number(e)>2147483647?-1:i.setTimeout(t,e||0)}(()=>{t.g=null,t.i&&(t.i=!1,X(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}h(W,T),W.prototype[D]=!0,W.prototype.removeEventListener=function(t,e,n,r){q(this,t,e,n,r)},W.prototype.N=function(){if(W.Z.N.call(this),this.i){var t=this.i;for(const e in t.g){const n=t.g[e];for(let t=0;t<n.length;t++)R(n[t]);delete t.g[e],t.h--}}this.G=null},W.prototype.J=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},W.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class Z extends T{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:X(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(t){T.call(this),this.h=t,this.g={}}h(tt,T);var et=[];function nt(t){x(t.g,function(t,e){this.g.hasOwnProperty(e)&&$(t)},t),t.g={}}tt.prototype.N=function(){tt.Z.N.call(this),nt(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rt=i.JSON.stringify,st=i.JSON.parse,it=class{stringify(t){return i.JSON.stringify(t,void 0)}parse(t){return i.JSON.parse(t,void 0)}};function ot(){}function at(){}var ct={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ut(){S.call(this,"d")}function ht(){S.call(this,"c")}h(ut,S),h(ht,S);var lt={},dt=null;function ft(){return dt=dt||new W}function pt(t){S.call(this,lt.Ia,t)}function gt(t){const e=ft();Y(e,new pt(e))}function mt(t,e){S.call(this,lt.STAT_EVENT,t),this.stat=e}function yt(t){const e=ft();Y(e,new mt(e,t))}function vt(t,e){S.call(this,lt.Ja,t),this.size=e}function wt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return i.setTimeout(function(){t()},e)}function Et(){this.g=!0}function bt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{const i=JSON.parse(e);if(i)for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var n=i[t];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(let t=1;t<r.length;t++)r[t]=""}}}return rt(i)}catch(i){return e}}(t,n)+(r?" "+r:"")})}lt.Ia="serverreachability",h(pt,S),lt.STAT_EVENT="statevent",h(mt,S),lt.Ja="timingevent",h(vt,S),Et.prototype.ua=function(){this.g=!1},Et.prototype.info=function(){};var _t,Tt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},St={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function It(){}function Ct(t){return encodeURIComponent(String(t))}function At(t){var e=1;t=t.split(":");const n=[];for(;e>0&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Dt(t,e,n,r){this.j=t,this.i=e,this.l=n,this.S=r||1,this.V=new tt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Nt}function Nt(){this.i=null,this.g="",this.h=!1}h(It,ot),It.prototype.g=function(){return new XMLHttpRequest},_t=new It;var kt={},Rt={};function xt(t,e,n){t.M=1,t.A=de(ae(e)),t.u=n,t.R=!0,Lt(t,null)}function Lt(t,e){t.F=Date.now(),Vt(t),t.B=ae(t.A);var n=t.B,r=t.S;Array.isArray(r)||(r=[String(r)]),Ce(n.i,"t",r),t.C=0,n=t.j.L,t.h=new Nt,t.g=pn(t.j,n?e:null,!t.u),t.P>0&&(t.O=new Z(c(t.Y,t,t.g),t.P)),e=t.V,n=t.g,r=t.ba;var s="readystatechange";Array.isArray(s)||(s&&(et[0]=s.toString()),s=et);for(let i=0;i<s.length;i++){const t=j(n,s[i],r||e.handleEvent,!1,e.h||e);if(!t)break;e.g[t.key]=t}e=t.J?L(t.J):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,e)):(t.v="GET",t.g.ea(t.B,t.v,null,e)),gt(),function(t,e,n,r,s,i){t.info(function(){if(t.g)if(i){var o="",a=i.split("&");for(let t=0;t<a.length;t++){var c=a[t].split("=");if(c.length>1){const t=c[0];c=c[1];const e=t.split("_");o=e.length>=2&&"type"==e[1]?o+(t+"=")+c+"&":o+(t+"=redacted&")}}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o})}(t.i,t.v,t.B,t.l,t.S,t.u)}function Ot(t){return!!t.g&&"GET"==t.v&&2!=t.M&&t.j.Aa}function Mt(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Rt:(n=Number(e.substring(n,r)),isNaN(n)?kt:(r+=1)+n>e.length?Rt:(e=e.slice(r,r+n),t.C=r+n,e))}function Vt(t){t.T=Date.now()+t.H,Pt(t,t.H)}function Pt(t,e){if(null!=t.D)throw Error("WatchDog timer not null");t.D=wt(c(t.aa,t),e)}function Ft(t){t.D&&(i.clearTimeout(t.D),t.D=null)}function Ut(t){0==t.j.I||t.K||un(t.j,t)}function Bt(t){Ft(t);var e=t.O;e&&"function"==typeof e.dispose&&e.dispose(),t.O=null,nt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.dispose())}function jt(t,e){try{var n=t.j;if(0!=n.I&&(n.g==t||Kt(n.h,t)))if(!t.L&&Kt(n.h,t)&&3==n.I){try{var r=n.Ba.g.parse(e)}catch(h){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.v){if(n.g){if(!(n.g.F+3e3<t.F))break t;cn(n),Je(n)}sn(n),yt(18)}}else n.xa=s[1],0<n.xa-n.K&&s[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=wt(c(n.Va,n),6e3));Gt(n.h)<=1&&n.ta&&(n.ta=void 0)}else ln(n,11)}else if((t.L||n.g==t)&&cn(n),!C(e))for(s=n.Ba.g.parse(e),e=0;e<s.length;e++){let c=s[e];const h=c[0];if(!(h<=n.K))if(n.K=h,c=c[1],2==n.I)if("c"==c[0]){n.M=c[1],n.ba=c[2];const e=c[3];null!=e&&(n.ka=e,n.j.info("VER="+n.ka));const s=c[4];null!=s&&(n.za=s,n.j.info("SVER="+n.za));const h=c[5];null!=h&&"number"==typeof h&&h>0&&(r=1.5*h,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(Ht(i,i.h),i.h=null))}if(r.G){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.wa=t,le(r.J,r.G,t))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-t.F,n.j.info("Handshake RTT: "+n.T+"ms"));var o=t;if((r=n).na=fn(r,r.L?r.ba:null,r.W),o.L){Qt(r.h,o);var a=o,u=r.O;u&&(a.H=u),a.D&&(Ft(a),Vt(a)),r.g=o}else rn(r);n.i.length>0&&Ze(n)}else"stop"!=c[0]&&"close"!=c[0]||ln(n,7);else 3==n.I&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?ln(n,7):Ye(n):"noop"!=c[0]&&n.l&&n.l.qa(c),n.A=0)}gt()}catch(h){}}Dt.prototype.ba=function(t){t=t.target;const e=this.O;e&&3==Ke(t)?e.j():this.Y(t)},Dt.prototype.Y=function(t){try{if(t==this.g)t:{const c=Ke(this.g),u=this.g.ya();if(this.g.ca(),!(c<3)&&(3!=c||this.g&&(this.h.h||this.g.la()||He(this.g)))){this.K||4!=c||7==u||gt(),Ft(this);var e=this.g.ca();this.X=e;var n=function(t){if(!Ot(t))return t.g.la();const e=He(t.g);if(""===e)return"";let n="";const r=e.length,s=4==Ke(t.g);if(!t.h.i){if("undefined"==typeof TextDecoder)return Bt(t),Ut(t),"";t.h.i=new i.TextDecoder}for(let i=0;i<r;i++)t.h.h=!0,n+=t.h.i.decode(e[i],{stream:!(s&&i==r-1)});return e.length=0,t.h.g+=n,t.C=0,t.h.g}(this);if(this.o=200==e,function(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o})}(this.i,this.v,this.B,this.l,this.S,c,e),this.o){if(this.U&&!this.L){e:{if(this.g){var r,s=this.g;if((r=s.g?s.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(r)){var o=r;break e}}o=null}if(!(t=o)){this.o=!1,this.m=3,yt(12),Bt(this),Ut(this);break t}bt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,jt(this,t)}if(this.R){let e;for(t=!0;!this.K&&this.C<n.length;){if(e=Mt(this,n),e==Rt){4==c&&(this.m=4,yt(14),t=!1),bt(this.i,this.l,null,"[Incomplete Response]");break}if(e==kt){this.m=4,yt(15),bt(this.i,this.l,n,"[Invalid Chunk]"),t=!1;break}bt(this.i,this.l,e,null),jt(this,e)}if(Ot(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=c||0!=n.length||this.h.h||(this.m=1,yt(16),t=!1),this.o=this.o&&t,t){if(n.length>0&&!this.W){this.W=!0;var a=this.j;a.g==this&&a.aa&&!a.P&&(a.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),on(a),a.P=!0,yt(11))}}else bt(this.i,this.l,n,"[Invalid Chunked Response]"),Bt(this),Ut(this)}else bt(this.i,this.l,n,null),jt(this,n);4==c&&Bt(this),this.o&&!this.K&&(4==c?un(this.j,this):(this.o=!1,Vt(this)))}else(function(t){const e={};t=(t.g&&Ke(t)>=2&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(C(t[r]))continue;var n=At(t[r]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,function(t){return t.join(", ")})})(this.g),400==e&&n.indexOf("Unknown SID")>0?(this.m=3,yt(12)):(this.m=0,yt(13)),Bt(this),Ut(this)}}}catch(c){}},Dt.prototype.cancel=function(){this.K=!0,Bt(this)},Dt.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.i,this.B),2!=this.M&&(gt(),yt(17)),Bt(this),this.m=2,Ut(this)):Pt(this,this.T-t)};var qt=class{constructor(t,e){this.g=t,this.map=e}};function $t(t){this.l=t||10,t=i.PerformanceNavigationTiming?(t=i.performance.getEntriesByType("navigation")).length>0&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function zt(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Gt(t){return t.h?1:t.g?t.g.size:0}function Kt(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ht(t,e){t.g?t.g.add(e):t.h=e}function Qt(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Wt(t){if(null!=t.h)return t.i.concat(t.h.G);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.G);return e}return d(t.i)}$t.prototype.cancel=function(){if(this.i=Wt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ie=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oe(t){let e;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,t instanceof oe?(this.l=t.l,ce(this,t.j),this.o=t.o,this.g=t.g,ue(this,t.u),this.h=t.h,he(this,Ae(t.i)),this.m=t.m):t&&(e=String(t).match(ie))?(this.l=!1,ce(this,e[1]||"",!0),this.o=fe(e[2]||""),this.g=fe(e[3]||"",!0),ue(this,e[4]),this.h=fe(e[5]||"",!0),he(this,e[6]||"",!0),this.m=fe(e[7]||"")):(this.l=!1,this.i=new be(null,this.l))}function ae(t){return new oe(t)}function ce(t,e,n){t.j=n?fe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ue(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.u=e}else t.u=null}function he(t,e,n){e instanceof be?(t.i=e,function(t,e){e&&!t.j&&(_e(t),t.i=null,t.g.forEach(function(t,e){const n=e.toLowerCase();e!=n&&(Te(this,e),Ce(this,n,t))},t)),t.j=e}(t.i,t.l)):(n||(e=pe(e,we)),t.i=new be(e,t.l))}function le(t,e,n){t.i.set(e,n)}function de(t){return le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function fe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function pe(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,ge),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ge(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}oe.prototype.toString=function(){const t=[];var e=this.j;e&&t.push(pe(e,me,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(pe(e,me,!0),"@"),t.push(Ct(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&t.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(pe(n,"/"==n.charAt(0)?ve:ye,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",pe(n,Ee)),t.join("")},oe.prototype.resolve=function(t){const e=ae(this);let n=!!t.j;n?ce(e,t.j):n=!!t.o,n?e.o=t.o:n=!!t.g,n?e.g=t.g:n=null!=t.u;var r=t.h;if(n)ue(e,t.u);else if(n=!!t.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var s=e.h.lastIndexOf("/");-1!=s&&(r=e.h.slice(0,s+1)+r)}if(".."==(s=r)||"."==s)r="";else if(-1!=s.indexOf("./")||-1!=s.indexOf("/.")){r=0==s.lastIndexOf("/",0),s=s.split("/");const t=[];for(let e=0;e<s.length;){const n=s[e++];"."==n?r&&e==s.length&&t.push(""):".."==n?((t.length>1||1==t.length&&""!=t[0])&&t.pop(),r&&e==s.length&&t.push("")):(t.push(n),r=!0)}r=t.join("/")}else r=s}return n?e.h=r:n=""!==t.i.toString(),n?he(e,Ae(t.i)):n=!!t.m,n&&(e.m=t.m),e};var me=/[#\/\?@]/g,ye=/[#\?:]/g,ve=/[#\?]/g,we=/[#\?@]/g,Ee=/#/g;function be(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function _e(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(let n=0;n<t.length;n++){const r=t[n].indexOf("=");let s,i=null;r>=0?(s=t[n].substring(0,r),i=t[n].substring(r+1)):s=t[n],e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function Te(t,e){_e(t),e=De(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Se(t,e){return _e(t),e=De(t,e),t.g.has(e)}function Ie(t,e){_e(t);let n=[];if("string"==typeof e)Se(t,e)&&(n=n.concat(t.g.get(De(t,e))));else for(t=Array.from(t.g.values()),e=0;e<t.length;e++)n=n.concat(t[e]);return n}function Ce(t,e,n){Te(t,e),n.length>0&&(t.i=null,t.g.set(De(t,e),d(n)),t.h+=n.length)}function Ae(t){const e=new be;return e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),e}function De(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ne(t,e,n,r,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),r(n)}catch(i){}}function ke(){this.g=new it}function Re(t){this.i=t.Sb||null,this.h=t.ab||!1}function xe(t,e){W.call(this),this.H=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Le(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}function Oe(t){t.readyState=4,t.l=null,t.j=null,t.B=null,Me(t)}function Me(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Pe(t){let e="";return x(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function Fe(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Pe(n),"string"==typeof t?null!=n&&Ct(n):le(t,e,n))}function Ue(t){W.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(t=be.prototype).add=function(t,e){_e(this),this.i=null,t=De(this,t);let n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){_e(this),this.g.forEach(function(n,r){n.forEach(function(n){t.call(e,n,r,this)},this)},this)},t.set=function(t,e){return _e(this),this.i=null,Se(this,t=De(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&(t=Ie(this,t)).length>0?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(let r=0;r<e.length;r++){var n=e[r];const s=Ct(n);n=Ie(this,n);for(let e=0;e<n.length;e++){let r=s;""!==n[e]&&(r+="="+Ct(n[e])),t.push(r)}}return this.i=t.join("&")},h(Re,ot),Re.prototype.g=function(){return new xe(this.i,this.h)},h(xe,W),(t=xe.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=e,this.readyState=1,Me(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const e={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(e.body=t),(this.H||i).fetch(new Request(this.D,e)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,Oe(this)),this.readyState=0},t.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Me(this)),this.g&&(this.readyState=3,Me(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Le(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))},t.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.B.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Oe(this):Me(this),3==this.readyState&&Le(this)}},t.Oa=function(t){this.g&&(this.response=this.responseText=t,Oe(this))},t.Na=function(t){this.g&&(this.response=t,Oe(this))},t.ga=function(){this.g&&Oe(this)},t.setRequestHeader=function(t,e){this.A.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(xe.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),h(Ue,W);var Be=/^https?$/i,je=["POST","PUT"];function qe(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.o=5,$e(t),Ge(t)}function $e(t){t.A||(t.A=!0,Y(t,"complete"),Y(t,"error"))}function ze(t){if(t.h&&void 0!==s)if(t.v&&4==Ke(t))setTimeout(t.Ca.bind(t),0);else if(Y(t,"readystatechange"),4==Ke(t)){t.h=!1;try{const s=t.ca();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){let e=String(t.D).match(ie)[1]||null;!e&&i.self&&i.self.location&&(e=i.self.location.protocol.slice(0,-1)),r=!Be.test(e?e.toLowerCase():"")}n=r}if(n)Y(t,"complete"),Y(t,"success");else{t.o=6;try{var o=Ke(t)>2?t.g.statusText:""}catch(a){o=""}t.l=o+" ["+t.ca()+"]",$e(t)}}finally{Ge(t)}}}function Ge(t,e){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const r=t.g;t.g=null,e||Y(t,"ready");try{r.onreadystatechange=null}catch(n){}}}function Ke(t){return t.g?t.g.readyState:0}function He(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Qe(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function We(t){this.za=0,this.i=[],this.j=new Et,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Qe("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Qe("baseRetryDelayMs",5e3,t),this.Za=Qe("retryDelaySeedMs",1e4,t),this.Ta=Qe("forwardChannelMaxRetries",2,t),this.va=Qe("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new $t(t&&t.concurrentRequestLimit),this.Ba=new ke,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function Ye(t){if(Xe(t),3==t.I){var e=t.V++,n=ae(t.J);if(le(n,"SID",t.M),le(n,"RID",e),le(n,"TYPE","terminate"),en(t,n),(e=new Dt(t,t.j,e)).M=2,e.A=de(ae(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(e.A.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=e.A,n=!0),n||(e.g=pn(e.j,null),e.g.ea(e.A)),e.F=Date.now(),Vt(e)}dn(t)}function Je(t){t.g&&(on(t),t.g.cancel(),t.g=null)}function Xe(t){Je(t),t.v&&(i.clearTimeout(t.v),t.v=null),cn(t),t.h.cancel(),t.m&&("number"==typeof t.m&&i.clearTimeout(t.m),t.m=null)}function Ze(t){if(!zt(t.h)&&!t.m){t.m=!0;var e=t.Ea;v||b(),w||(v(),w=!0),E.add(e,t),t.D=0}}function tn(t,e){var n;n=e?e.l:t.V++;const r=ae(t.J);le(r,"SID",t.M),le(r,"RID",n),le(r,"AID",t.K),en(t,r),t.u&&t.o&&Fe(r,t.u,t.o),n=new Dt(t,t.j,n,t.D+1),null===t.u&&(n.J=t.o),e&&(t.i=e.G.concat(t.i)),e=nn(t,n,1e3),n.H=Math.round(.5*t.va)+Math.round(.5*t.va*Math.random()),Ht(t.h,n),xt(n,r,e)}function en(t,e){t.H&&x(t.H,function(t,n){le(e,n,t)}),t.l&&x({},function(t,n){le(e,n,t)})}function nn(t,e,n){n=Math.min(t.i.length,n);const r=t.l?c(t.l.Ka,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?n>0?(e=s[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let c=!0;for(let u=0;u<n;u++){var i=s[u].g;const n=s[u].map;if((i-=e)<0)e=Math.max(0,s[u].g-100),c=!1;else try{i="req"+i+"_"||"";try{var a=n instanceof Map?n:Object.entries(n);for(const[e,n]of a){let r=n;o(n)&&(r=rt(n)),t.push(i+e+"="+encodeURIComponent(r))}}catch(Ve){throw t.push(i+"type="+encodeURIComponent("_badmap")),Ve}}catch(Ve){r&&r(n)}}if(c){a=t.join("&");break t}}a=void 0}return t=t.i.splice(0,n),e.G=t,a}function rn(t){if(!t.g&&!t.v){t.Y=1;var e=t.Da;v||b(),w||(v(),w=!0),E.add(e,t),t.A=0}}function sn(t){return!(t.g||t.v||t.A>=3||(t.Y++,t.v=wt(c(t.Da,t),hn(t,t.A)),t.A++,0))}function on(t){null!=t.B&&(i.clearTimeout(t.B),t.B=null)}function an(t){t.g=new Dt(t,t.j,"rpc",t.Y),null===t.u&&(t.g.J=t.o),t.g.P=0;var e=ae(t.na);le(e,"RID","rpc"),le(e,"SID",t.M),le(e,"AID",t.K),le(e,"CI",t.F?"0":"1"),!t.F&&t.ia&&le(e,"TO",t.ia),le(e,"TYPE","xmlhttp"),en(t,e),t.u&&t.o&&Fe(e,t.u,t.o),t.O&&(t.g.H=t.O);var n=t.g;t=t.ba,n.M=1,n.A=de(ae(e)),n.u=null,n.R=!0,Lt(n,t)}function cn(t){null!=t.C&&(i.clearTimeout(t.C),t.C=null)}function un(t,e){var n=null;if(t.g==e){cn(t),on(t),t.g=null;var r=2}else{if(!Kt(t.h,e))return;n=e.G,Qt(t.h,e),r=1}if(0!=t.I)if(e.o)if(1==r){n=e.u?e.u.length:0,e=Date.now()-e.F;var s=t.D;Y(r=ft(),new vt(r,n)),Ze(t)}else rn(t);else if(3==(s=e.m)||0==s&&e.X>0||!(1==r&&function(t,e){return!(Gt(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.G.concat(t.i),0):1==t.I||2==t.I||t.D>=(t.Sa?0:t.Ta)||(t.m=wt(c(t.Ea,t,e),hn(t,t.D)),t.D++,0)))}(t,e)||2==r&&sn(t)))switch(n&&n.length>0&&(e=t.h,e.i=e.i.concat(n)),s){case 1:ln(t,5);break;case 4:ln(t,10);break;case 3:ln(t,6);break;default:ln(t,2)}}function hn(t,e){let n=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(n*=2),n*e}function ln(t,e){if(t.j.info("Error code "+e),2==e){var n=c(t.bb,t),r=t.Ua;const e=!r;r=new oe(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||ce(r,"https"),de(r),e?function(t,e){const n=new Et;if(i.Image){const r=new Image;r.onload=u(Ne,n,"TestLoadImage: loaded",!0,e,r),r.onerror=u(Ne,n,"TestLoadImage: error",!1,e,r),r.onabort=u(Ne,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=u(Ne,n,"TestLoadImage: timeout",!1,e,r),i.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}(r.toString(),n):function(t,e){new Et;const n=new AbortController,r=setTimeout(()=>{n.abort(),Ne(0,0,!1,e)},1e4);fetch(t,{signal:n.signal}).then(t=>{clearTimeout(r),t.ok?Ne(0,0,!0,e):Ne(0,0,!1,e)}).catch(()=>{clearTimeout(r),Ne(0,0,!1,e)})}(r.toString(),n)}else yt(2);t.I=0,t.l&&t.l.pa(e),dn(t),Xe(t)}function dn(t){if(t.I=0,t.ja=[],t.l){const e=Wt(t.h);0==e.length&&0==t.i.length||(f(t.ja,e),f(t.ja,t.i),t.h.i.length=0,d(t.i),t.i.length=0),t.l.oa()}}function fn(t,e,n){var r=n instanceof oe?ae(n):new oe(n);if(""!=r.g)e&&(r.g=e+"."+r.g),ue(r,r.u);else{var s=i.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;const t=new oe(null);r&&ce(t,r),e&&(t.g=e),s&&ue(t,s),n&&(t.h=n),r=t}return n=t.G,e=t.wa,n&&e&&le(r,n,e),le(r,"VER",t.ka),en(t,r),r}function pn(t,e,n){if(e&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Aa&&!t.ma?new Ue(new Re({ab:n})):new Ue(t.ma)).Fa(t.L),e}function gn(){}function mn(){}function yn(t,e){W.call(this),this.g=new We(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.sa&&(t?t["X-WebChannel-Client-Profile"]=e.sa:t={"X-WebChannel-Client-Profile":e.sa}),this.g.U=t,(t=e&&e.Qb)&&!C(t)&&(this.g.u=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.g.G=e,null!==(t=this.h)&&e in t&&e in(t=this.h)&&delete t[e]),this.j=new En(this)}function vn(t){ut.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function wn(){ht.call(this),this.status=1}function En(t){this.g=t}(t=Ue.prototype).Fa=function(t){this.H=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():_t.g(),this.g.onreadystatechange=l(c(this.Ca,this));try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void qe(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),s=i.FormData&&t instanceof i.FormData,!(Array.prototype.indexOf.call(je,e,void 0)>=0)||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(o){qe(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,Y(this,"complete"),Y(this,"abort"),Ge(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ge(this,!0)),Ue.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ze(this):this.Xa())},t.Xa=function(){ze(this)},t.isActive=function(){return!!this.g},t.ca=function(){try{return Ke(this)>2?this.g.status:-1}catch(t){return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.La=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),st(e)}},t.ya=function(){return this.o},t.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=We.prototype).ka=8,t.I=1,t.connect=function(t,e,n,r){yt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=fn(this,null,this.W),Ze(this)},t.Ea=function(t){if(this.m)if(this.m=null,1==this.I){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Dt(this,this.j,t);let i=this.o;if(this.U&&(i?(i=L(i),M(i,this.U)):i=this.U),null!==this.u||this.R||(s.J=i,i=null),this.S)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if((e+=r)>4096){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=nn(this,s,e),le(n=ae(this.J),"RID",t),le(n,"CVER",22),this.G&&le(n,"X-HTTP-Session-Id",this.G),en(this,n),i&&(this.R?e="headers="+Ct(Pe(i))+"&"+e:this.u&&Fe(n,this.u,i)),Ht(this.h,s),this.Ra&&le(n,"TYPE","init"),this.S?(le(n,"$req",e),le(n,"SID","null"),s.U=!0,xt(s,n,null)):xt(s,n,e),this.I=2}}else 3==this.I&&(t?tn(this,t):0==this.i.length||zt(this.h)||tn(this))},t.Da=function(){if(this.v=null,an(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=wt(c(this.Wa,this),t)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,yt(10),Je(this),an(this))},t.Va=function(){null!=this.C&&(this.C=null,Je(this),sn(this),yt(19))},t.bb=function(t){t?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=gn.prototype).ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){},mn.prototype.g=function(t,e){return new yn(t,e)},h(yn,W),yn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},yn.prototype.close=function(){Ye(this.g)},yn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=rt(t),t=n);e.i.push(new qt(e.Ya++,t)),3==e.I&&Ze(e)},yn.prototype.N=function(){this.g.l=null,delete this.j,Ye(this.g),delete this.g,yn.Z.N.call(this)},h(vn,ut),h(wn,ht),h(En,gn),En.prototype.ra=function(){Y(this.g,"a")},En.prototype.qa=function(t){Y(this.g,new vn(t))},En.prototype.pa=function(t){Y(this.g,new wn)},En.prototype.oa=function(){Y(this.g,"b")},mn.prototype.createWebChannel=mn.prototype.g,yn.prototype.send=yn.prototype.o,yn.prototype.open=yn.prototype.m,yn.prototype.close=yn.prototype.close,re=function(){return new mn},ne=function(){return ft()},ee=lt,te={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Tt.NO_ERROR=0,Tt.TIMEOUT=8,Tt.HTTP_ERROR=6,Zt=Tt,St.COMPLETE="complete",Xt=St,at.EventType=ct,ct.OPEN="a",ct.CLOSE="b",ct.ERROR="c",ct.MESSAGE="d",W.prototype.listen=W.prototype.J,Jt=at,Ue.prototype.listenOnce=Ue.prototype.K,Ue.prototype.getLastError=Ue.prototype.Ha,Ue.prototype.getLastErrorCode=Ue.prototype.ya,Ue.prototype.getStatus=Ue.prototype.ca,Ue.prototype.getResponseJson=Ue.prototype.La,Ue.prototype.getResponseText=Ue.prototype.la,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Fa,Yt=Ue}).apply(void 0!==se?se:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class ie{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ie.UNAUTHENTICATED=new ie(null),ie.GOOGLE_CREDENTIALS=new ie("google-credentials-uid"),ie.FIRST_PARTY=new ie("first-party-uid"),ie.MOCK_USER=new ie("mock-user");
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
let oe="12.8.0";
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const ae=new x("@firebase/firestore");function ce(){return ae.logLevel}function ue(t,...e){if(ae.logLevel<=A.DEBUG){const n=e.map(de);ae.debug(`Firestore (${oe}): ${t}`,...n)}}function he(t,...e){if(ae.logLevel<=A.ERROR){const n=e.map(de);ae.error(`Firestore (${oe}): ${t}`,...n)}}function le(t,...e){if(ae.logLevel<=A.WARN){const n=e.map(de);ae.warn(`Firestore (${oe}): ${t}`,...n)}}function de(t){if("string"==typeof t)return t;try{return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function fe(t,e,n){let r="Unexpected state";"string"==typeof e?r=e:n=e,pe(t,r,n)}function pe(t,e,n){let r=`FIRESTORE (${oe}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(t){r+=" CONTEXT: "+n}throw he(r),new Error(r)}function ge(t,e,n,r){let s="Unexpected state";"string"==typeof n?s=n:r=n,t||pe(e,s,r)}function me(t,e){return t}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const ye={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ve extends y{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class we{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ee{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class be{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ie.UNAUTHENTICATED))}shutdown(){}}class _e{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Te{constructor(t){this.t=t,this.currentUser=ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ge(void 0===this.o,42304);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new we;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new we,t.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const e=s;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new we)}},0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ge("string"==typeof e.accessToken,31837,{l:e}),new Ee(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ge(null===t||"string"==typeof t,2055,{h:t}),new ie(t)}}class Se{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=ie.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Ie{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Se(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ce{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ae{constructor(t,e){var n;this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,null!=(n=t)&&void 0!==n.settings&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){ge(void 0===this.o,3512);const n=t=>{null!=t.error&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.m;return this.m=t.token,ue("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?r(t):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ce(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(ge("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new Ce(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function De(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ne{static newId(){const t=62*Math.floor(256/62);let e="";for(;e.length<20;){const n=De(40);for(let r=0;r<n.length;++r)e.length<20&&n[r]<t&&(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return e}}function ke(t,e){return t<e?-1:t>e?1:0}function Re(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.charAt(r),s=e.charAt(r);if(n!==s)return Oe(n)===Oe(s)?ke(n,s):Oe(n)?1:-1}return ke(t.length,e.length)}const xe=55296,Le=57343;function Oe(t){const e=t.charCodeAt(0);return e>=xe&&e<=Le}function Me(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Ve="__name__";class Pe{constructor(t,e,n){void 0===e?e=0:e>t.length&&fe(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&fe(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Pe.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Pe?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=Pe.compareSegments(t.get(r),e.get(r));if(0!==n)return n}return ke(t.length,e.length)}static compareSegments(t,e){const n=Pe.isNumericId(t),r=Pe.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?Pe.extractNumericId(t).compare(Pe.extractNumericId(e)):Re(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ht.fromString(t.substring(4,t.length-2))}}class Fe extends Pe{construct(t,e,n){return new Fe(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ve(ye.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new Fe(e)}static emptyPath(){return new Fe([])}}const Ue=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends Pe{construct(t,e,n){return new Be(t,e,n)}static isValidIdentifier(t){return Ue.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Ve}static keyField(){return new Be([Ve])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new ve(ye.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new ve(ye.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ve(ye.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new ve(ye.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Be(e)}static emptyPath(){return new Be([])}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class je{constructor(t){this.path=t}static fromPath(t){return new je(Fe.fromString(t))}static fromName(t){return new je(Fe.fromString(t).popFirst(5))}static empty(){return new je(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Fe.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Fe.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new je(new Fe(t.slice()))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function qe(t,e,n){if(!n)throw new ve(ye.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $e(t){if(!je.isDocumentKey(t))throw new ve(ye.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ze(t){if(je.isDocumentKey(t))throw new ve(ye.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ge(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function Ke(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":fe(12329,{type:typeof t})}function He(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ve(ye.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ke(t);throw new ve(ye.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
             * @license
             * Copyright 2025 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function We(t,e){if(!Ge(t))throw new ve(ye.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(void 0!==i&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ve(ye.INVALID_ARGUMENT,n);return!0}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Ye=-62135596800,Je=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(t){return Xe.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Je);return new Xe(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ve(ye.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ve(ye.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ye)throw new ve(ye.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ve(ye.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Je}_compareTo(t){return this.seconds===t.seconds?ke(this.nanoseconds,t.nanoseconds):ke(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(We(t,Xe._jsonSchema))return new Xe(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ye;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Xe._jsonSchemaVersion="firestore/timestamp/1.0",Xe._jsonSchema={type:Qe("string",Xe._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Ze{static fromTimestamp(t){return new Ze(t)}static min(){return new Ze(new Xe(0,0))}static max(){return new Ze(new Xe(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function tn(t){return new en(t.readTime,t.key,-1)}class en{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new en(Ze.min(),je.empty(),-1)}static max(){return new en(Ze.max(),je.empty(),-1)}}function nn(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=je.comparator(t.documentKey,e.documentKey),0!==n?n:ke(t.largestBatchId,e.largestBatchId)
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */)}const rn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sn{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */async function on(t){if(t.code!==ye.FAILED_PRECONDITION||t.message!==rn)throw t;ue("LocalStore","Unexpectedly lost primary lease")}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class an{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new an((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof an?e:an.resolve(e)}catch(t){return an.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):an.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):an.reject(e)}static resolve(t){return new an((e,n)=>{e(t)})}static reject(t){return new an((e,n)=>{n(t)})}static waitFor(t){return new an((e,n)=>{let r=0,s=0,i=!1;t.forEach(t=>{++r,t.next(()=>{++s,i&&s===r&&e()},t=>n(t))}),i=!0,s===r&&e()})}static or(t){let e=an.resolve(!1);for(const n of t)e=e.next(t=>t?an.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new an((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next(t=>{i[c]=t,++o,o===s&&n(i)},t=>r(t))}})}static doWhile(t,e){return new an((n,r)=>{const s=()=>{!0===t()?e().next(()=>{s()},r):n()};s()})}}function cn(t){return"IndexedDbTransactionError"===t.name}
/**
             * @license
             * Copyright 2018 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class un{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ae(t),this.ue=t=>e.writeSequenceNumber(t))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}un.ce=-1;
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const hn=-1;function ln(t){return null==t}function dn(t){return 0===t&&1/t==-1/0}function fn(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const e=t.charAt(s);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function pn(t){return t+""}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function gn(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yn(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class vn{constructor(t,e){this.comparator=t,this.root=e||En.EMPTY}insert(t,e){return new vn(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,En.BLACK,null,null))}remove(t){return new vn(this.comparator,this.root.remove(t,this.comparator).copy(null,null,En.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wn(this.root,t,this.comparator,!1)}getReverseIterator(){return new wn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wn(this.root,t,this.comparator,!0)}}class wn{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class En{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:En.RED,this.left=null!=r?r:En.EMPTY,this.right=null!=s?s:En.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new En(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return En.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return En.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,En.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,En.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw fe(27949);return t+(this.isRed()?0:1)}}En.EMPTY=null,En.RED=!0,En.BLACK=!1,En.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(t,e,n,r,s){return this}insert(t,e,n){return new En(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class bn{constructor(t){this.comparator=t,this.data=new vn(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new _n(this.data.getIterator())}getIteratorFrom(t){return new _n(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof bn))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new bn(this.comparator);return e.data=t,e}}class _n{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Tn{constructor(t){this.fields=t,t.sort(Be.comparator)}static empty(){return new Tn([])}unionWith(t){let e=new bn(Be.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Tn(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Me(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
             * @license
             * Copyright 2023 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Sn extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class In{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Sn("Invalid base64 string: "+t):t}}(t);return new In(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new In(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ke(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}In.EMPTY_BYTE_STRING=new In("");const Cn=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function An(t){if(ge(!!t,39018),"string"==typeof t){let e=0;const n=Cn.exec(t);if(ge(!!n,46558,{timestamp:t}),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Dn(t.seconds),nanos:Dn(t.nanos)}}function Dn(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Nn(t){return"string"==typeof t?In.fromBase64String(t):In.fromUint8Array(t)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const kn="server_timestamp",Rn="__type__",xn="__previous_value__",Ln="__local_write_time__";function On(t){var e,n;return(null===(e=((null==t||null===(n=t.mapValue)||void 0===n?void 0:n.fields)||{})[Rn])||void 0===e?void 0:e.stringValue)===kn}function Mn(t){const e=t.mapValue.fields[xn];return On(e)?Mn(e):e}function Vn(t){const e=An(t.mapValue.fields[Ln].timestampValue);return new Xe(e.seconds,e.nanos)}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Pn{constructor(t,e,n,r,s,i,o,a,c,u,h){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=u,this.apiKey=h}}const Fn="(default)";class Un{constructor(t,e){this.projectId=t,this.database=e||Fn}static empty(){return new Un("","")}get isDefaultDatabase(){return this.database===Fn}isEqual(t){return t instanceof Un&&t.projectId===this.projectId&&t.database===this.database}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const Bn="__type__",jn="__max__",qn={},$n="__vector__",zn="value";function Gn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?On(t)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===jn}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(t)?9007199254740991:function(t){var e,n;const r=null===(e=((null==t||null===(n=t.mapValue)||void 0===n?void 0:n.fields)||{})[Bn])||void 0===e?void 0:e.stringValue;return r===$n}(t)?10:11:fe(28295,{value:t})}function Kn(t,e){if(t===e)return!0;const n=Gn(t);if(n!==Gn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vn(t).isEqual(Vn(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=An(t.timestampValue),r=An(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Nn(t.bytesValue).isEqual(Nn(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Dn(t.geoPointValue.latitude)===Dn(e.geoPointValue.latitude)&&Dn(t.geoPointValue.longitude)===Dn(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Dn(t.integerValue)===Dn(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Dn(t.doubleValue),r=Dn(e.doubleValue);return n===r?dn(n)===dn(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Me(t.arrayValue.values||[],e.arrayValue.values||[],Kn);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(gn(n)!==gn(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Kn(n[s],r[s])))return!1;return!0}(t,e);default:return fe(52216,{left:t})}}function Hn(t,e){return void 0!==(t.values||[]).find(t=>Kn(t,e))}function Qn(t,e){if(t===e)return 0;const n=Gn(t),r=Gn(e);if(n!==r)return ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Dn(t.integerValue||t.doubleValue),r=Dn(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Wn(t.timestampValue,e.timestampValue);case 4:return Wn(Vn(t),Vn(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Nn(t),r=Nn(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=ke(n[s],r[s]);if(0!==t)return t}return ke(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ke(Dn(t.latitude),Dn(e.latitude));return 0!==n?n:ke(Dn(t.longitude),Dn(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Yn(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,s,i;const o=t.fields||{},a=e.fields||{},c=null===(n=o[zn])||void 0===n?void 0:n.arrayValue,u=null===(r=a[zn])||void 0===r?void 0:r.arrayValue,h=ke((null==c||null===(s=c.values)||void 0===s?void 0:s.length)||0,(null==u||null===(i=u.values)||void 0===i?void 0:i.length)||0);return 0!==h?h:Yn(c,u)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===qn&&e===qn)return 0;if(t===qn)return 1;if(e===qn)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=Re(r[o],i[o]);if(0!==t)return t;const e=Qn(n[r[o]],s[i[o]]);if(0!==e)return e}return ke(r.length,i.length)}(t.mapValue,e.mapValue);default:throw fe(23264,{he:n})}}function Wn(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ke(t,e);const n=An(t),r=An(e),s=ke(n.seconds,r.seconds);return 0!==s?s:ke(n.nanos,r.nanos)}function Yn(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=Qn(n[s],r[s]);if(t)return t}return ke(n.length,r.length)}function Jn(t){return Xn(t)}function Xn(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=An(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Nn(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return je.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Xn(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${Xn(t.fields[s])}`;return n+"}"}(t.mapValue):fe(61005,{value:t})}function Zn(t){switch(Gn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mn(t);return e?16+Zn(e):16;case 5:return 2*t.stringValue.length;case 6:return Nn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce((t,e)=>t+Zn(e),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return mn(t.fields,(t,n)=>{e+=t.length+Zn(n)}),e}(t.mapValue);default:throw fe(13486,{value:t})}}function tr(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function er(t){return!!t&&"integerValue"in t}function nr(t){return!!t&&"arrayValue"in t}function rr(t){return!!t&&"nullValue"in t}function sr(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ir(t){return!!t&&"mapValue"in t}function or(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return mn(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=or(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=or(t.arrayValue.values[n]);return e}return{...t}}class ar{constructor(t){this.value=t}static empty(){return new ar({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ir(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=or(e)}setAll(t){let e=Be.emptyPath(),n={},r=[];t.forEach((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=or(t):r.push(s.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());ir(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Kn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ir(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){mn(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new ar(or(this.value))}}function cr(t){const e=[];return mn(t.fields,(t,n)=>{const r=new Be([t]);if(ir(n)){const t=cr(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new Tn(e)
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */}class ur{constructor(t,e,n,r,s,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(t){return new ur(t,0,Ze.min(),Ze.min(),Ze.min(),ar.empty(),0)}static newFoundDocument(t,e,n,r){return new ur(t,1,e,Ze.min(),n,r,0)}static newNoDocument(t,e){return new ur(t,2,e,Ze.min(),Ze.min(),ar.empty(),0)}static newUnknownDocument(t,e){return new ur(t,3,e,Ze.min(),Ze.min(),ar.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ze.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ar.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ar.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ze.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ur&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ur(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class hr{constructor(t,e){this.position=t,this.inclusive=e}}function lr(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?je.comparator(je.fromName(o.referenceValue),n.key):Qn(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function dr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kn(t.position[n],e.position[n]))return!1;return!0}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class fr{constructor(t,e="asc"){this.field=t,this.dir=e}}function pr(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class gr{}class mr extends gr{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Tr(t,e,n):"array-contains"===e?new Ar(t,n):"in"===e?new Dr(t,n):"not-in"===e?new Nr(t,n):"array-contains-any"===e?new kr(t,n):new mr(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Sr(t,n):new Ir(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&void 0===e.nullValue&&this.matchesComparison(Qn(e,this.value)):null!==e&&Gn(this.value)===Gn(e)&&this.matchesComparison(Qn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yr extends gr{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new yr(t,e)}matches(t){return vr(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function vr(t){return"and"===t.op}function wr(t){return function(t){for(const e of t.filters)if(e instanceof yr)return!1;return!0}(t)&&vr(t)}function Er(t){if(t instanceof mr)return t.field.canonicalString()+t.op.toString()+Jn(t.value);if(wr(t))return t.filters.map(t=>Er(t)).join(",");{const e=t.filters.map(t=>Er(t)).join(",");return`${t.op}(${e})`}}function br(t,e){return t instanceof mr?function(t,e){return e instanceof mr&&t.op===e.op&&t.field.isEqual(e.field)&&Kn(t.value,e.value)}(t,e):t instanceof yr?function(t,e){return e instanceof yr&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce((t,n,r)=>t&&br(n,e.filters[r]),!0)}(t,e):void fe(19439)}function _r(t){return t instanceof mr?function(t){return`${t.field.canonicalString()} ${t.op} ${Jn(t.value)}`}(t):t instanceof yr?function(t){return t.op.toString()+" {"+t.getFilters().map(_r).join(" ,")+"}"}(t):"Filter"}class Tr extends mr{constructor(t,e,n){super(t,e,n),this.key=je.fromName(n.referenceValue)}matches(t){const e=je.comparator(t.key,this.key);return this.matchesComparison(e)}}class Sr extends mr{constructor(t,e){super(t,"in",e),this.keys=Cr(0,e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ir extends mr{constructor(t,e){super(t,"not-in",e),this.keys=Cr(0,e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Cr(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>je.fromName(t.referenceValue))}class Ar extends mr{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return nr(e)&&Hn(e.arrayValue,this.value)}}class Dr extends mr{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Hn(this.value.arrayValue,e)}}class Nr extends mr{constructor(t,e){super(t,"not-in",e)}matches(t){if(Hn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&void 0===e.nullValue&&!Hn(this.value.arrayValue,e)}}class kr extends mr{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!nr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>Hn(this.value.arrayValue,t))}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Rr{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.Te=null}}function xr(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Rr(t,e,n,r,s,i,o)}function Lr(t){const e=me(t);if(null===e.Te){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>Er(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),ln(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>Jn(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>Jn(t)).join(",")),e.Te=t}return e.Te}function Or(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pr(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!br(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dr(t.startAt,e.startAt)&&dr(t.endAt,e.endAt)}function Mr(t){return je.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Vr{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Pr(t){return new Vr(t)}function Fr(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ur(t){return null!==t.collectionGroup}function Br(t){const e=me(t);if(null===e.Ie){e.Ie=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new bn(Be.comparator);return t.filters.forEach(t=>{t.getFlattenedFilters().forEach(t=>{t.isInequality()&&(e=e.add(t.field))})}),e}(e);r.forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new fr(r,n))}),t.has(Be.keyField().canonicalString())||e.Ie.push(new fr(Be.keyField(),n))}return e.Ie}function jr(t){const e=me(t);return e.Ee||(e.Ee=function(t,e){if("F"===t.limitType)return xr(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(t=>{const e="desc"===t.dir?"asc":"desc";return new fr(t.field,e)});const n=t.endAt?new hr(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hr(t.startAt.position,t.startAt.inclusive):null;return xr(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}(e,Br(t))),e.Ee}function qr(t,e){const n=t.filters.concat([e]);return new Vr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $r(t,e,n){return new Vr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zr(t,e){return Or(jr(t),jr(e))&&t.limitType===e.limitType}function Gr(t){return`${Lr(jr(t))}|lt:${t.limitType}`}function Kr(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>_r(t)).join(", ")}]`),ln(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>Jn(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>Jn(t)).join(",")),`Target(${e})`}(jr(t))}; limitType=${t.limitType})`}function Hr(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):je.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Br(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=lr(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Br(t),e)||t.endAt&&!function(t,e,n){const r=lr(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Br(t),e))}(t,e)}function Qr(t){return(e,n)=>{let r=!1;for(const s of Br(t)){const t=Wr(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function Wr(t,e,n){const r=t.field.isKeyField()?je.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?Qn(r,s):fe(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe(19790,{direction:t.dir})}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Yr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){mn(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return yn(this.inner)}size(){return this.innerSize}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Jr=new vn(je.comparator);function Xr(){return Jr}const Zr=new vn(je.comparator);function ts(...t){let e=Zr;for(const n of t)e=e.insert(n.key,n);return e}function es(t){let e=Zr;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function ns(){return ss()}function rs(){return ss()}function ss(){return new Yr(t=>t.toString(),(t,e)=>t.isEqual(e))}const is=new vn(je.comparator),os=new bn(je.comparator);function as(...t){let e=os;for(const n of t)e=e.add(n);return e}const cs=new bn(ke);
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function us(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dn(e)?"-0":e}}function hs(t){return{integerValue:""+t}}function ls(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!dn(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e)?hs(e):us(t,e)}
/**
             * @license
             * Copyright 2018 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class ds{constructor(){this._=void 0}}function fs(t,e,n){return t instanceof ms?function(t,e){const n={fields:{[Rn]:{stringValue:kn},[Ln]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&On(e)&&(e=Mn(e)),e&&(n.fields[xn]=e),{mapValue:n}}(n,e):t instanceof ys?vs(t,e):t instanceof ws?Es(t,e):function(t,e){const n=gs(t,e),r=_s(n)+_s(t.Ae);return er(n)&&er(t.Ae)?hs(r):us(t.serializer,r)}(t,e)}function ps(t,e,n){return t instanceof ys?vs(t,e):t instanceof ws?Es(t,e):n}function gs(t,e){return t instanceof bs?function(t){return er(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class ms extends ds{}class ys extends ds{constructor(t){super(),this.elements=t}}function vs(t,e){const n=Ts(e);for(const r of t.elements)n.some(t=>Kn(t,r))||n.push(r);return{arrayValue:{values:n}}}class ws extends ds{constructor(t){super(),this.elements=t}}function Es(t,e){let n=Ts(e);for(const r of t.elements)n=n.filter(t=>!Kn(t,r));return{arrayValue:{values:n}}}class bs extends ds{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function _s(t){return Dn(t.integerValue||t.doubleValue)}function Ts(t){return nr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class Ss{constructor(t,e){this.version=t,this.transformResults=e}}class Is{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Is}static exists(t){return new Is(void 0,t)}static updateTime(t){return new Is(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Cs(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class As{}function Ds(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Fs(t.key,Is.none()):new Ls(t.key,t.data,Is.none());{const n=t.data,r=ar.empty();let s=new bn(Be.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new Os(t.key,r,new Tn(s.toArray()),Is.none())}}function Ns(t,e,n){t instanceof Ls?function(t,e,n){const r=t.value.clone(),s=Vs(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Os?function(t,e,n){if(!Cs(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Vs(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Ms(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ks(t,e,n,r){return t instanceof Ls?function(t,e,n,r){if(!Cs(t.precondition,e))return n;const s=t.value.clone(),i=Ps(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof Os?function(t,e,n,r){if(!Cs(t.precondition,e))return n;const s=Ps(t.fieldTransforms,r,e),i=e.data;return i.setAll(Ms(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):function(t,e,n){return Cs(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Rs(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=gs(r.transform,t||null);null!=s&&(null===n&&(n=ar.empty()),n.set(r.field,s))}return n||null}function xs(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Me(t,e,(t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ys&&e instanceof ys||t instanceof ws&&e instanceof ws?Me(t.elements,e.elements,Kn):t instanceof bs&&e instanceof bs?Kn(t.Ae,e.Ae):t instanceof ms&&e instanceof ms}(t.transform,e.transform)}(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ls extends As{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Os extends As{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ms(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vs(t,e,n){const r=new Map;ge(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,ps(o,a,n[s]))}return r}function Ps(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,fs(t,i,e))}return r}class Fs extends As{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Us extends As{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Bs{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ns(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ks(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ks(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=rs();return this.mutations.forEach(r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=Ds(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(Ze.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),as())}isEqual(t){return this.batchId===t.batchId&&Me(this.mutations,t.mutations,(t,e)=>xs(t,e))&&Me(this.baseMutations,t.baseMutations,(t,e)=>xs(t,e))}}class js{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){ge(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let r=is;const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new js(t,e,n,r)}}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class qs{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class $s{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var zs,Gs;function Ks(t){if(void 0===t)return he("GRPC error has no .code"),ye.UNKNOWN;switch(t){case zs.OK:return ye.OK;case zs.CANCELLED:return ye.CANCELLED;case zs.UNKNOWN:return ye.UNKNOWN;case zs.DEADLINE_EXCEEDED:return ye.DEADLINE_EXCEEDED;case zs.RESOURCE_EXHAUSTED:return ye.RESOURCE_EXHAUSTED;case zs.INTERNAL:return ye.INTERNAL;case zs.UNAVAILABLE:return ye.UNAVAILABLE;case zs.UNAUTHENTICATED:return ye.UNAUTHENTICATED;case zs.INVALID_ARGUMENT:return ye.INVALID_ARGUMENT;case zs.NOT_FOUND:return ye.NOT_FOUND;case zs.ALREADY_EXISTS:return ye.ALREADY_EXISTS;case zs.PERMISSION_DENIED:return ye.PERMISSION_DENIED;case zs.FAILED_PRECONDITION:return ye.FAILED_PRECONDITION;case zs.ABORTED:return ye.ABORTED;case zs.OUT_OF_RANGE:return ye.OUT_OF_RANGE;case zs.UNIMPLEMENTED:return ye.UNIMPLEMENTED;case zs.DATA_LOSS:return ye.DATA_LOSS;default:return fe(39323,{code:t})}}(Gs=zs||(zs={}))[Gs.OK=0]="OK",Gs[Gs.CANCELLED=1]="CANCELLED",Gs[Gs.UNKNOWN=2]="UNKNOWN",Gs[Gs.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Gs[Gs.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Gs[Gs.NOT_FOUND=5]="NOT_FOUND",Gs[Gs.ALREADY_EXISTS=6]="ALREADY_EXISTS",Gs[Gs.PERMISSION_DENIED=7]="PERMISSION_DENIED",Gs[Gs.UNAUTHENTICATED=16]="UNAUTHENTICATED",Gs[Gs.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Gs[Gs.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Gs[Gs.ABORTED=10]="ABORTED",Gs[Gs.OUT_OF_RANGE=11]="OUT_OF_RANGE",Gs[Gs.UNIMPLEMENTED=12]="UNIMPLEMENTED",Gs[Gs.INTERNAL=13]="INTERNAL",Gs[Gs.UNAVAILABLE=14]="UNAVAILABLE",Gs[Gs.DATA_LOSS=15]="DATA_LOSS";
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const Hs=new Ht([4294967295,4294967295],0);function Qs(t){const e=(new TextEncoder).encode(t),n=new Qt;return n.update(e),new Uint8Array(n.digest())}function Ws(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ht([n,r],0),new Ht([s,i],0)]}class Ys{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Js(`Invalid padding: ${e}`);if(n<0)throw new Js(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Js(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Js(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Ht.fromNumber(this.ge)}ye(t,e,n){let r=t.add(e.multiply(Ht.fromNumber(n)));return 1===r.compare(Hs)&&(r=new Ht([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.ge)return!1;const e=Qs(t),[n,r]=Ws(e);for(let s=0;s<this.hashCount;s++){const t=this.ye(n,r,s);if(!this.we(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),i=new Ys(s,r,e);return n.forEach(t=>i.insert(t)),i}insert(t){if(0===this.ge)return;const e=Qs(t),[n,r]=Ws(e);for(let s=0;s<this.hashCount;s++){const t=this.ye(n,r,s);this.be(t)}}be(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Xs{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Zs.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Xs(Ze.min(),r,new vn(ke),Xr(),as())}}class Zs{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Zs(n,e,as(),as(),as())}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class ti{constructor(t,e,n,r){this.Se=t,this.removedTargetIds=e,this.key=n,this.De=r}}class ei{constructor(t,e){this.targetId=t,this.Ce=e}}class ni{constructor(t,e,n=In.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class ri{constructor(){this.ve=0,this.Fe=oi(),this.Me=In.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=as(),e=as(),n=as();return this.Fe.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:fe(38017,{changeType:s})}}),new Zs(this.Me,this.xe,t,e,n)}Ke(){this.Oe=!1,this.Fe=oi()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,ge(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class si{constructor(t){this.Ge=t,this.ze=new Map,this.je=Xr(),this.He=ii(),this.Je=ii(),this.Ze=new vn(ke)}Xe(t){for(const e of t.Se)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.We(),n.Ne||n.Ke(),n.Le(t.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.Qe(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:fe(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((t,n)=>{this.rt(n)&&e(n)})}st(t){const e=t.targetId,n=t.Ce.count,r=this.ot(e);if(r){const s=r.target;if(Mr(s))if(0===n){const t=new je(s.path);this.et(e,t,ur.newNoDocument(t,Ze.min()))}else ge(1===n,20013,{expectedCount:n});else{const r=this._t(e);if(r!==n){const n=this.ut(t),s=n?this.ct(n,t,r):1;if(0!==s){this.it(e);const t=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,t)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=e;let i,o;try{i=Nn(n).toUint8Array()}catch(t){if(t instanceof Sn)return le("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new Ys(i,r,s)}catch(t){return le(t instanceof Js?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.ge?null:o}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let r=0;return n.forEach(n=>{const s=this.Ge.ht(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.mightContain(i)||(this.et(e,n,null),r++)}),r}Tt(t){const e=new Map;this.ze.forEach((n,r)=>{const s=this.ot(r);if(s){if(n.current&&Mr(s.target)){const e=new je(s.target.path);this.It(e).has(r)||this.Et(r,e)||this.et(r,e,ur.newNoDocument(e,t))}n.Be&&(e.set(r,n.ke()),n.Ke())}});let n=as();this.Je.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.ot(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.je.forEach((e,n)=>n.setReadTime(t));const r=new Xs(t,e,this.Ze,this.je,n);return this.je=Xr(),this.He=ii(),this.Je=ii(),this.Ze=new vn(ke),r}Ye(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,n),this.je=this.je.insert(e.key,e),this.He=this.He.insert(e.key,this.It(e.key).add(t)),this.Je=this.Je.insert(e.key,this.Rt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const r=this.nt(t);this.Et(t,e)?r.qe(e,1):r.Ue(e),this.Je=this.Je.insert(e,this.Rt(e).delete(t)),this.Je=this.Je.insert(e,this.Rt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new ri,this.ze.set(t,e)),e}Rt(t){let e=this.Je.get(t);return e||(e=new bn(ke),this.Je=this.Je.insert(t,e)),e}It(t){let e=this.He.get(t);return e||(e=new bn(ke),this.He=this.He.insert(t,e)),e}rt(t){const e=null!==this.ot(t);return e||ue("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new ri),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function ii(){return new vn(je.comparator)}function oi(){return new vn(je.comparator)}const ai={asc:"ASCENDING",desc:"DESCENDING"},ci={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ui={and:"AND",or:"OR"};class hi{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function li(t,e){return t.useProto3Json||ln(e)?e:{value:e}}function di(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fi(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pi(t,e){return di(t,e.toTimestamp())}function gi(t){return ge(!!t,49232),Ze.fromTimestamp(function(t){const e=An(t);return new Xe(e.seconds,e.nanos)}(t))}function mi(t,e){return yi(t,e).canonicalString()}function yi(t,e){const n=function(t){return new Fe(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function vi(t){const e=Fe.fromString(t);return ge(Vi(e),10190,{key:e.toString()}),e}function wi(t,e){return mi(t.databaseId,e.path)}function Ei(t,e){const n=vi(e);if(n.get(1)!==t.databaseId.projectId)throw new ve(ye.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ve(ye.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new je(Ti(n))}function bi(t,e){return mi(t.databaseId,e)}function _i(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ti(t){return ge(t.length>4&&"documents"===t.get(4),29091,{key:t.toString()}),t.popFirst(5)}function Si(t,e,n){return{name:wi(t,e),fields:n.value.mapValue.fields}}function Ii(t,e){return{documents:[bi(t,e.path)]}}function Ci(t,e){const n={structuredQuery:{}},r=e.path;let s;null!==e.collectionGroup?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=bi(t,s);const i=function(t){if(0!==t.length)return Oi(yr.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:xi(t.field),direction:Ni(t.dir)}}(t))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=li(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ft:n,parent:s}}function Ai(t){let e=function(t){const e=vi(t);return 4===e.length?Fe.emptyPath():Ti(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ge(1===r,65062);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=Di(t);return e instanceof yr&&wr(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map(t=>function(t){return new fr(Li(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,ln(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new hr(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new hr(n,e)}(n.endAt)),function(t,e,n,r,s,i,o,a){return new Vr(t,e,n,r,s,i,o,a)}(e,s,o,i,a,"F",c,u)}function Di(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Li(t.unaryFilter.field);return mr.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Li(t.unaryFilter.field);return mr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Li(t.unaryFilter.field);return mr.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Li(t.unaryFilter.field);return mr.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}}(t):void 0!==t.fieldFilter?function(t){return mr.create(Li(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return yr.create(t.compositeFilter.filters.map(t=>Di(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return fe(1026)}}(t.compositeFilter.op))}(t):fe(30097,{filter:t})}function Ni(t){return ai[t]}function ki(t){return ci[t]}function Ri(t){return ui[t]}function xi(t){return{fieldPath:t.canonicalString()}}function Li(t){return Be.fromServerFormat(t.fieldPath)}function Oi(t){return t instanceof mr?function(t){if("=="===t.op){if(sr(t.value))return{unaryFilter:{field:xi(t.field),op:"IS_NAN"}};if(rr(t.value))return{unaryFilter:{field:xi(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(sr(t.value))return{unaryFilter:{field:xi(t.field),op:"IS_NOT_NAN"}};if(rr(t.value))return{unaryFilter:{field:xi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xi(t.field),op:ki(t.op),value:t.value}}}(t):t instanceof yr?function(t){const e=t.getFilters().map(t=>Oi(t));return 1===e.length?e[0]:{compositeFilter:{op:Ri(t.op),filters:e}}}(t):fe(54877,{filter:t})}function Mi(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Vi(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}function Pi(t){return!!t&&"function"==typeof t._toProto&&"ProtoValue"===t._protoValueType}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Fi{constructor(t,e,n,r,s=Ze.min(),i=Ze.min(),o=In.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Fi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ui{constructor(t){this.yt=t}}function Bi(t){const e=Ai({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?$r(e,e.limit,"L"):e}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class ji{constructor(){this.Sn=new qi}addToCollectionParentIndex(t,e){return this.Sn.add(e),an.resolve()}getCollectionParents(t,e){return an.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return an.resolve()}deleteFieldIndex(t,e){return an.resolve()}deleteAllFieldIndexes(t){return an.resolve()}createTargetIndexes(t,e){return an.resolve()}getDocumentsMatchingTarget(t,e){return an.resolve(null)}getIndexType(t,e){return an.resolve(0)}getFieldIndexes(t,e){return an.resolve([])}getNextCollectionGroupToUpdate(t){return an.resolve(null)}getMinOffset(t,e){return an.resolve(en.min())}getMinOffsetFromCollectionGroup(t,e){return an.resolve(en.min())}updateCollectionGroup(t,e,n){return an.resolve()}updateIndexEntries(t,e){return an.resolve()}}class qi{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new bn(Fe.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new bn(Fe.comparator)).toArray()}}
/**
             * @license
             * Copyright 2018 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const $i={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zi=41943040;class Gi{static withCacheSize(t){return new Gi(t,Gi.DEFAULT_COLLECTION_PERCENTILE,Gi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */Gi.DEFAULT_COLLECTION_PERCENTILE=10,Gi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gi.DEFAULT=new Gi(zi,Gi.DEFAULT_COLLECTION_PERCENTILE,Gi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gi.DISABLED=new Gi(-1,0,0);
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Ki{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Ki(0)}static ar(){return new Ki(-1)}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Hi="LruGarbageCollector";function Qi([t,e],[n,r]){const s=ke(t,n);return 0===s?ke(e,r):s}class Wi{constructor(t){this.Pr=t,this.buffer=new bn(Qi),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();Qi(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Yi{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Ar(t){ue(Hi,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){cn(t)?ue(Hi,"Ignoring IndexedDB error during garbage collection: ",t):await on(t)}await this.Ar(3e5)})}}class Ji{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return an.resolve(un.ce);const n=new Wi(e);return this.Vr.forEachTarget(t,t=>n.Er(t.sequenceNumber)).next(()=>this.Vr.mr(t,t=>n.Er(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),an.resolve($i)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$i):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let n,r,s,i,o,a,c;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,i=Date.now(),this.nthSequenceNumber(t,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(t,n,e))).next(e=>(s=e,a=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(c=Date.now(),ce()<=A.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-u}ms\n\tDetermined least recently used ${r} in `+(o-i)+"ms\n"+`\tRemoved ${s} targets in `+(a-o)+"ms\n"+`\tRemoved ${t} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),an.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:t})))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Xi{constructor(){this.changes=new Yr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ur.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?an.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Zi{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class to{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&ks(n.mutation,t,Tn.empty(),Xe.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,as()).next(()=>e))}getLocalViewOfDocuments(t,e,n=as()){const r=ns();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=ts();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=ns();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,as()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let s=Xr();const i=ss(),o=ss();return e.forEach((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Os)?s=s.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),ks(o.mutation,e,o.mutation.getFieldMask(),Xe.now())):i.set(e.key,Tn.empty())}),this.recalculateAndSaveOverlays(t,s).next(t=>(t.forEach((t,e)=>i.set(t,e)),e.forEach((t,e)=>{var n;return o.set(t,new Zi(e,null!==(n=i.get(t))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(t,e){const n=ss();let r=new vn((t,e)=>t-e),s=as();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const s of t)s.keys().forEach(t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||Tn.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||as()).add(t);r=r.insert(s.batchId,a)})}).next(()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=rs();c.forEach(t=>{if(!s.has(t)){const r=Ds(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}}),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return an.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return je.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ur(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):an.resolve(ns());let o=-1,a=s;return i.next(e=>an.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?an.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,s)).next(()=>this.computeViews(t,a,e,as())).next(t=>({batchId:o,changes:es(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new je(e)).next(t=>{let e=ts();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let i=ts();return this.indexManager.getCollectionParents(t,s).next(o=>an.forEach(o,o=>{const a=function(t,e){return new Vr(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(s));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r))).next(t=>{s.forEach((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,ur.newInvalidDocument(r)))});let n=ts();return t.forEach((t,r)=>{const i=s.get(t);void 0!==i&&ks(i.mutation,r,Tn.empty(),Xe.now()),Hr(e,r)&&(n=n.insert(t,r))}),n})}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class eo{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return an.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:gi(t.createTime)}}(e)),an.resolve()}getNamedQuery(t,e){return an.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(t){return{name:t.name,query:Bi(t.bundledQuery),readTime:gi(t.readTime)}}(e)),an.resolve()}}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class no{constructor(){this.overlays=new vn(je.comparator),this.Lr=new Map}getOverlay(t,e){return an.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ns();return an.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.bt(t,e,r)}),an.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Lr.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.Lr.delete(n)),an.resolve()}getOverlaysForCollection(t,e,n){const r=ns(),s=e.length+1,i=new je(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return an.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new vn((t,e)=>t-e);const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=ns(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ns(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((t,e)=>o.set(t,e)),!(o.size()>=r)););return an.resolve(o)}bt(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new qs(e,n));let s=this.Lr.get(e);void 0===s&&(s=as(),this.Lr.set(e,s)),this.Lr.set(e,s.add(n.key))}}
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class ro{constructor(){this.sessionToken=In.EMPTY_BYTE_STRING}getSessionToken(t){return an.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,an.resolve()}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class so{constructor(){this.kr=new bn(io.Kr),this.qr=new bn(io.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const n=new io(t,e);this.kr=this.kr.add(n),this.qr=this.qr.add(n)}$r(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.Wr(new io(t,e))}Qr(t,e){t.forEach(t=>this.removeReference(t,e))}Gr(t){const e=new je(new Fe([])),n=new io(e,t),r=new io(e,t+1),s=[];return this.qr.forEachInRange([n,r],t=>{this.Wr(t),s.push(t.key)}),s}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new je(new Fe([])),n=new io(e,t),r=new io(e,t+1);let s=as();return this.qr.forEachInRange([n,r],t=>{s=s.add(t.key)}),s}containsKey(t){const e=new io(t,0),n=this.kr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class io{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return je.comparator(t.key,e.key)||ke(t.Hr,e.Hr)}static Ur(t,e){return ke(t.Hr,e.Hr)||je.comparator(t.key,e.key)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class oo{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new bn(io.Kr)}checkEmpty(t){return an.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Bs(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.Jr=this.Jr.add(new io(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return an.resolve(i)}lookupMutationBatch(t,e){return an.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Xr(n),s=r<0?0:r;return an.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return an.resolve(0===this.mutationQueue.length?hn:this.Yn-1)}getAllMutationBatches(t){return an.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new io(e,0),r=new io(e,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([n,r],t=>{const e=this.Zr(t.Hr);s.push(e)}),an.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new bn(ke);return e.forEach(t=>{const e=new io(t,0),r=new io(t,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([e,r],t=>{n=n.add(t.Hr)})}),an.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;je.isDocumentKey(s)||(s=s.child(""));const i=new io(new je(s),0);let o=new bn(ke);return this.Jr.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Hr)),!0)},i),an.resolve(this.Yr(o))}Yr(t){const e=[];return t.forEach(t=>{const n=this.Zr(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){ge(0===this.ei(e.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Jr;return an.forEach(e.mutations,r=>{const s=new io(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Jr=n})}nr(t){}containsKey(t,e){const n=new io(e,0),r=this.Jr.firstAfterOrEqual(n);return an.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,an.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class ao{constructor(t){this.ti=t,this.docs=new vn(je.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.ti(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return an.resolve(n?n.document.mutableCopy():ur.newInvalidDocument(e))}getEntries(t,e){let n=Xr();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ur.newInvalidDocument(t))}),an.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=Xr();const i=e.path,o=new je(i.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||nn(tn(o),n)<=0||(r.has(o.key)||Hr(e,o))&&(s=s.insert(o.key,o.mutableCopy()))}return an.resolve(s)}getAllFromCollectionGroup(t,e,n,r){fe(9500)}ni(t,e){return an.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new co(this)}getSize(t){return an.resolve(this.size)}}class co extends Xi{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.Mr.addEntry(t,r)):this.Mr.removeEntry(n)}),an.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class uo{constructor(t){this.persistence=t,this.ri=new Yr(t=>Lr(t),Or),this.lastRemoteSnapshotVersion=Ze.min(),this.highestTargetId=0,this.ii=0,this.si=new so,this.targetCount=0,this.oi=Ki._r()}forEachTarget(t,e){return this.ri.forEach((t,n)=>e(n)),an.resolve()}getLastRemoteSnapshotVersion(t){return an.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return an.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),an.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ii&&(this.ii=e),an.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Ki(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,an.resolve()}updateTargetData(t,e){return this.lr(e),an.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,an.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.ri.forEach((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.ri.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),an.waitFor(s).next(()=>r)}getTargetCount(t){return an.resolve(this.targetCount)}getTargetData(t,e){const n=this.ri.get(e)||null;return an.resolve(n)}addMatchingKeys(t,e,n){return this.si.$r(e,n),an.resolve()}removeMatchingKeys(t,e,n){this.si.Qr(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(e=>{s.push(r.markPotentiallyOrphaned(t,e))}),an.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),an.resolve()}getMatchingKeysForTargetId(t,e){const n=this.si.jr(e);return an.resolve(n)}containsKey(t,e){return an.resolve(this.si.containsKey(e))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class ho{constructor(t,e){this._i={},this.overlays={},this.ai=new un(0),this.ui=!1,this.ui=!0,this.ci=new ro,this.referenceDelegate=t(this),this.li=new uo(this),this.indexManager=new ji,this.remoteDocumentCache=function(t){return new ao(t)}(t=>this.referenceDelegate.hi(t)),this.serializer=new Ui(e),this.Pi=new eo(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new no,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this._i[t.toKey()];return n||(n=new oo(e,this.referenceDelegate),this._i[t.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,n){ue("MemoryPersistence","Starting transaction:",t);const r=new lo(this.ai.next());return this.referenceDelegate.Ti(),n(r).next(t=>this.referenceDelegate.Ii(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ei(t,e){return an.or(Object.values(this._i).map(n=>()=>n.containsKey(t,e)))}}class lo extends sn{constructor(t){super(),this.currentSequenceNumber=t}}class fo{constructor(t){this.persistence=t,this.Ri=new so,this.Ai=null}static Vi(t){return new fo(t)}get di(){if(this.Ai)return this.Ai;throw fe(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.di.delete(n.toString()),an.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.di.add(n.toString()),an.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),an.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(t=>this.di.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.di.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return an.forEach(this.di,n=>{const r=je.fromPath(n);return this.mi(t,r).next(t=>{t||e.removeEntry(r,Ze.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(t=>{t?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return an.or([()=>an.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class po{constructor(t,e){this.persistence=t,this.fi=new Yr(t=>function(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=pn(e)),e=fn(t.get(n),e);return pn(e)}(t.path),(t,e)=>t.isEqual(e)),this.garbageCollector=function(t,e){return new Ji(t,e)}(this,e)}static Vi(t,e){return new po(t,e)}Ti(){}Ii(t){return an.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}pr(t){let e=0;return this.mr(t,t=>{e++}).next(()=>e)}mr(t,e){return an.forEach(this.fi,(n,r)=>this.wr(t,n,r).next(t=>t?an.resolve():e(r)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.ni(t,r=>this.wr(t,r,e).next(t=>{t||(n++,s.removeEntry(r,Ze.min()))})).next(()=>s.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),an.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),an.resolve()}removeReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),an.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),an.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Zn(t.data.value)),e}wr(t,e,n){return an.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.fi.get(e);return an.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class go{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Ts=n,this.Is=r}static Es(t,e){let n=as(),r=as();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new go(t,e.fromCache,n,r)}}
/**
             * @license
             * Copyright 2023 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class mo{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class yo{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=m()?8:function(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")>0?6:4}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.gs(t,e).next(t=>{s.result=t}).next(()=>{if(!s.result)return this.ps(t,e,r,n).next(t=>{s.result=t})}).next(()=>{if(s.result)return;const n=new mo;return this.ys(t,e,n).next(r=>{if(s.result=r,this.As)return this.ws(t,e,n,r.size)})}).next(()=>s.result)}ws(t,e,n,r){return n.documentReadCount<this.Vs?(ce()<=A.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Kr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),an.resolve()):(ce()<=A.DEBUG&&ue("QueryEngine","Query:",Kr(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(ce()<=A.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Kr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,jr(e))):an.resolve())}gs(t,e){if(Fr(e))return an.resolve(null);let n=jr(e);return this.indexManager.getIndexType(t,n).next(r=>0===r?null:(null!==e.limit&&1===r&&(e=$r(e,null,"F"),n=jr(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(r=>{const s=as(...r);return this.fs.getDocuments(t,s).next(r=>this.indexManager.getMinOffset(t,n).next(n=>{const i=this.bs(e,r);return this.Ss(e,i,s,n.readTime)?this.gs(t,$r(e,null,"F")):this.Ds(t,i,e,n)}))})))}ps(t,e,n,r){return Fr(e)||r.isEqual(Ze.min())?an.resolve(null):this.fs.getDocuments(t,n).next(s=>{const i=this.bs(e,s);return this.Ss(e,i,n,r)?an.resolve(null):(ce()<=A.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Kr(e)),this.Ds(t,i,e,function(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Ze.fromTimestamp(1e9===r?new Xe(n+1,0):new Xe(n,r));return new en(s,je.empty(),e)}(r,-1)).next(t=>t))})}bs(t,e){let n=new bn(Qr(t));return e.forEach((e,r)=>{Hr(t,r)&&(n=n.add(r))}),n}Ss(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ys(t,e,n){return ce()<=A.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Kr(e)),this.fs.getDocumentsMatchingQuery(t,e,en.min(),n)}Ds(t,e,n,r){return this.fs.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const vo="LocalStore",wo=3e8;class Eo{constructor(t,e,n,r){this.persistence=t,this.Cs=e,this.serializer=r,this.vs=new vn(ke),this.Fs=new Yr(t=>Lr(t),Or),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(n)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new to(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}async function bo(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(s=>(r=s,n.Os(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const s=[],i=[];let o=as();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({Ns:t,removedBatchIds:s,addedBatchIds:i}))})})}function _o(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function To(t,e){const n=me(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const o=[];e.targetChanges.forEach((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.li.removeMatchingKeys(t,i.removedDocuments,a).next(()=>n.li.addMatchingKeys(t,i.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(In.EMPTY_BYTE_STRING,Ze.min()).withLastLimboFreeSnapshotVersion(Ze.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=wo||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.li.updateTargetData(t,u))});let a=Xr(),c=as();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(function(t,e,n){let r=as(),s=as();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=Xr();return n.forEach((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(Ze.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):ue(vo,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),{Bs:r,Ls:s}})}(t,i,e.documentUpdates).next(t=>{a=t.Bs,c=t.Ls})),!r.isEqual(Ze.min())){const e=n.li.getLastRemoteSnapshotVersion(t).next(e=>n.li.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return an.waitFor(o).next(()=>i.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.vs=s,t))}function So(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=hn),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}async function Io(t,e,n){const r=me(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,t=>r.persistence.referenceDelegate.removeTarget(t,s))}catch(t){if(!cn(t))throw t;ue(vo,`Failed to update sequence numbers for target ${e}: ${t}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Co(t,e,n){const r=me(t);let s=Ze.min(),i=as();return r.persistence.runTransaction("Execute query","readwrite",t=>function(t,e,n){const r=me(t),s=r.Fs.get(n);return void 0!==s?an.resolve(r.vs.get(s)):r.li.getTargetData(e,n)}(r,t,jr(e)).next(e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(t,e.targetId).next(t=>{i=t})}).next(()=>r.Cs.getDocumentsMatchingQuery(t,e,n?s:Ze.min(),n?i:as())).next(t=>(function(t,e,n){let r=t.Ms.get(e)||Ze.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.Ms.set(e,r)}(r,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,ks:i})))}class Ao{constructor(){this.activeTargetIds=cs}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Do{constructor(){this.vo=new Ao,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,n){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new Ao,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class No{Mo(t){}shutdown(){}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const ko="ConnectivityMonitor";class Ro{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ue(ko,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){ue(ko,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
             * @license
             * Copyright 2023 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let xo=null;function Lo(){return null===xo?xo=268435456+Math.round(2147483648*Math.random()):xo++,"0x"+xo.toString(16)
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */}const Oo="RestConnection",Mo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Vo{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===Fn?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(t,e,n,r,s){const i=Lo(),o=this.Qo(t,e.toUriEncodedString());ue(Oo,`Sending RPC '${t}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(a,r,s);const{host:c}=new URL(o),u=d(c);return this.zo(t,o,a,n,u).then(e=>(ue(Oo,`Received RPC '${t}' ${i}: `,e),e),e=>{throw le(Oo,`RPC '${t}' ${i} failed with error: `,e,"url: ",o,"request:",n),e})}jo(t,e,n,r,s,i){return this.Wo(t,e,n,r,s)}Go(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+oe,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Qo(t,e){const n=Mo[t];let r=`${this.qo}/v1/${e}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Po{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Fo="WebChannelConnection",Uo=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};class Bo extends Vo{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Bo.c_){const t=ne();Uo(t,ee.STAT_EVENT,t=>{t.stat===te.PROXY?ue(Fo,"STAT_EVENT: detected buffering proxy"):t.stat===te.NOPROXY&&ue(Fo,"STAT_EVENT: detected no buffering proxy")}),Bo.c_=!0}}zo(t,e,n,r,s){const i=Lo();return new Promise((s,o)=>{const a=new Yt;a.setWithCredentials(!0),a.listenOnce(Xt.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Zt.NO_ERROR:const n=a.getResponseJson();ue(Fo,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(n)),s(n);break;case Zt.TIMEOUT:ue(Fo,`RPC '${t}' ${i} timed out`),o(new ve(ye.DEADLINE_EXCEEDED,"Request time out"));break;case Zt.HTTP_ERROR:const r=a.getStatus();if(ue(Fo,`RPC '${t}' ${i} failed with status:`,r,"response text:",a.getResponseText()),r>0){var e;let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const n=null===(e=t)||void 0===e?void 0:e.error;if(n&&n.status&&n.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ye).indexOf(e)>=0?e:ye.UNKNOWN}(n.status);o(new ve(t,n.message))}else o(new ve(ye.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ve(ye.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:t,streamId:i,h_:a.getLastErrorCode(),P_:a.getLastError()})}}finally{ue(Fo,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(r);ue(Fo,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)})}T_(t,e,n){const r=Lo(),s=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},a=this.longPollingOptions.timeoutSeconds;void 0!==a&&(o.longPollingTimeout=Math.round(1e3*a)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Go(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const c=s.join("");ue(Fo,`Creating RPC '${t}' stream ${r}: ${c}`,o);const u=i.createWebChannel(c,o);this.I_(u);let h=!1,l=!1;const d=new Po({Ho:e=>{l?ue(Fo,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(ue(Fo,`Opening RPC '${t}' stream ${r} transport.`),u.open(),h=!0),ue(Fo,`RPC '${t}' stream ${r} sending:`,e),u.send(e))},Jo:()=>u.close()});return Uo(u,Jt.EventType.OPEN,()=>{l||(ue(Fo,`RPC '${t}' stream ${r} transport opened.`),d.i_())}),Uo(u,Jt.EventType.CLOSE,()=>{l||(l=!0,ue(Fo,`RPC '${t}' stream ${r} transport closed`),d.o_(),this.E_(u))}),Uo(u,Jt.EventType.ERROR,e=>{l||(l=!0,le(Fo,`RPC '${t}' stream ${r} transport errored. Name:`,e.name,"Message:",e.message),d.o_(new ve(ye.UNAVAILABLE,"The operation could not be completed")))}),Uo(u,Jt.EventType.MESSAGE,e=>{if(!l){var n;const s=e.data[0];ge(!!s,16349);const i=s,o=(null==i?void 0:i.error)||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){ue(Fo,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=zs[t];if(void 0!==e)return Ks(e)}(e),s=o.message;void 0===n&&(n=ye.INTERNAL,s="Unknown error status: "+e+" with message "+o.message),l=!0,d.o_(new ve(n,s)),u.close()}else ue(Fo,`RPC '${t}' stream ${r} received:`,s),d.__(s)}}),Bo.u_(),setTimeout(()=>{d.s_()},0),d}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,n){super.Go(t,e,n),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return re()}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function jo(){return"undefined"!=typeof document?document:null}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function qo(t){return new hi(t,!0)}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */Bo.c_=!1;class $o{constructor(t,e,n=1e3,r=1.5,s=6e4){this.Ci=t,this.timerId=e,this.R_=n,this.A_=r,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,e-n);r>0&&ue("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const zo="PersistentStream";class Go{constructor(t,e,n,r,s,i,o,a){this.Ci=t,this.b_=n,this.S_=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new $o(t,e)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,4!==t?this.M_.reset():e&&e.code===ye.RESOURCE_EXHAUSTED?(he(e.toString()),he("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===ye.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.D_===e&&this.G_(t,n)},e=>{t(()=>{const t=new ve(ye.UNKNOWN,"Fetching auth token failed: "+e.message);return this.z_(t)})})}G_(t,e){const n=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(t=>{n(()=>this.z_(t))}),this.stream.onMessage(t=>{n(()=>1==++this.F_?this.H_(t):this.onNext(t))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return ue(zo,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(ue(zo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ko extends Go{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}j_(t,e){return this.connection.T_("Listen",t,e)}H_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:fe(39313,{state:t})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.useProto3Json?(ge(void 0===e||"string"==typeof e,58123),In.fromBase64String(e||"")):(ge(void 0===e||e instanceof Buffer||e instanceof Uint8Array,16193),In.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?ye.UNKNOWN:Ks(t.code);return new ve(e,t.message||"")}(o);n=new ni(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ei(t,r.document.name),i=gi(r.document.updateTime),o=r.document.createTime?gi(r.document.createTime):Ze.min(),a=new ar({mapValue:{fields:r.document.fields}}),c=ur.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new ti(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ei(t,r.document),i=r.readTime?gi(r.readTime):Ze.min(),o=ur.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ti([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ei(t,r.document),i=r.removedTargetIds||[];n=new ti([],i,s,null)}else{if(!("filter"in e))return fe(11601,{Vt:e});{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:s}=t,i=new $s(r,s),o=t.targetId;n=new ei(o,i)}}return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return Ze.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ze.min():e.readTime?gi(e.readTime):Ze.min()}(t);return this.listener.J_(e,n)}Z_(t){const e={};e.database=_i(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Mr(r)?{documents:Ii(t,r)}:{query:Ci(t,r).ft},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=fi(t,e.resumeToken);const r=li(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(Ze.min())>0){n.readTime=di(t,e.snapshotVersion.toTimestamp());const r=li(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:t})}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.K_(e)}X_(t){const e={};e.database=_i(this.serializer),e.removeTarget=t,this.K_(e)}}class Ho extends Go{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return ge(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,ge(!t.writeResults||0===t.writeResults.length,55816),this.listener.ta()}onNext(t){ge(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=function(t,e){return t&&t.length>0?(ge(void 0!==e,14353),t.map(t=>function(t,e){let n=t.updateTime?gi(t.updateTime):gi(e);return n.isEqual(Ze.min())&&(n=gi(e)),new Ss(n,t.transformResults||[])}(t,e))):[]}(t.writeResults,t.commitTime),n=gi(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=_i(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>function(t,e){let n;if(e instanceof Ls)n={update:Si(t,e.key,e.value)};else if(e instanceof Fs)n={delete:wi(t,e.key)};else if(e instanceof Os)n={update:Si(t,e.key,e.data),updateMask:Mi(e.fieldMask)};else{if(!(e instanceof Us))return fe(16599,{dt:e.type});n={verify:wi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ms)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ys)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ws)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof bs)return{fieldPath:e.field.canonicalString(),increment:n.Ae};throw fe(20930,{transform:e.transform})}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:pi(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:fe(27497)}(t,e.precondition)),n}(this.serializer,t))};this.K_(e)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Qo{}class Wo extends Qo{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new ve(ye.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Wo(t,yi(e,n),r,s,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===ye.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ve(ye.UNKNOWN,t.toString())})}jo(t,e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.jo(t,yi(e,n),r,i,o,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===ye.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ve(ye.UNKNOWN,t.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Yo{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,"Online"===t&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(he(e),this.aa=!1):ue("OnlineStateTracker",e)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Jo="RemoteStore";class Xo{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(t=>{n.enqueueAndForget(async()=>{aa(this)&&(ue(Jo,"Restarting streams for network reachability change."),await async function(t){const e=me(t);e.Ea.add(4),await ta(e),e.Va.set("Unknown"),e.Ea.delete(4),await Zo(e)}(this))})}),this.Va=new Yo(n,r)}}async function Zo(t){if(aa(t))for(const e of t.Ra)await e(!0)}async function ta(t){for(const e of t.Ra)await e(!1)}function ea(t,e){const n=me(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),oa(n)?ia(n):Ia(n).O_()&&ra(n,e))}function na(t,e){const n=me(t),r=Ia(n);n.Ia.delete(e),r.O_()&&sa(n,e),0===n.Ia.size&&(r.O_()?r.L_():aa(n)&&n.Va.set("Unknown"))}function ra(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ze.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ia(t).Z_(e)}function sa(t,e){t.da.$e(e),Ia(t).X_(e)}function ia(t){t.da=new si({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ia(t).start(),t.Va.ua()}function oa(t){return aa(t)&&!Ia(t).x_()&&t.Ia.size>0}function aa(t){return 0===me(t).Ea.size}function ca(t){t.da=void 0}async function ua(t){t.Va.set("Online")}async function ha(t){t.Ia.forEach((e,n)=>{ra(t,e)})}async function la(t,e){ca(t),oa(t)?(t.Va.ha(e),ia(t)):t.Va.set("Unknown")}async function da(t,e,n){if(t.Va.set("Online"),e instanceof ni&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Ia.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Ia.delete(r),t.da.removeTarget(r))}(t,e)}catch(n){ue(Jo,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await fa(t,n)}else if(e instanceof ti?t.da.Xe(e):e instanceof ei?t.da.st(e):t.da.tt(e),!n.isEqual(Ze.min()))try{const e=await _o(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.da.Tt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.Ia.get(r);s&&t.Ia.set(r,s.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach((e,n)=>{const r=t.Ia.get(e);if(!r)return;t.Ia.set(e,r.withResumeToken(In.EMPTY_BYTE_STRING,r.snapshotVersion)),sa(t,e);const s=new Fi(r.target,e,n,r.sequenceNumber);ra(t,s)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){ue(Jo,"Failed to raise snapshot:",e),await fa(t,e)}}async function fa(t,e,n){if(!cn(e))throw e;t.Ea.add(1),await ta(t),t.Va.set("Offline"),n||(n=()=>_o(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ue(Jo,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Zo(t)})}function pa(t,e){return e().catch(n=>fa(t,n,e))}async function ga(t){const e=me(t),n=Ca(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:hn;for(;ma(e);)try{const t=await So(e.localStore,r);if(null===t){0===e.Ta.length&&n.L_();break}r=t.batchId,ya(e,t)}catch(t){await fa(e,t)}va(e)&&wa(e)}function ma(t){return aa(t)&&t.Ta.length<10}function ya(t,e){t.Ta.push(e);const n=Ca(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function va(t){return aa(t)&&!Ca(t).x_()&&t.Ta.length>0}function wa(t){Ca(t).start()}async function Ea(t){Ca(t).ra()}async function ba(t){const e=Ca(t);for(const n of t.Ta)e.ea(n.mutations)}async function _a(t,e,n){const r=t.Ta.shift(),s=js.from(r,e,n);await pa(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ga(t)}async function Ta(t,e){e&&Ca(t).Y_&&await async function(t,e){if(function(t){return function(t){switch(t){case ye.OK:return fe(64938);case ye.CANCELLED:case ye.UNKNOWN:case ye.DEADLINE_EXCEEDED:case ye.RESOURCE_EXHAUSTED:case ye.INTERNAL:case ye.UNAVAILABLE:case ye.UNAUTHENTICATED:return!1;case ye.INVALID_ARGUMENT:case ye.NOT_FOUND:case ye.ALREADY_EXISTS:case ye.PERMISSION_DENIED:case ye.FAILED_PRECONDITION:case ye.ABORTED:case ye.OUT_OF_RANGE:case ye.UNIMPLEMENTED:case ye.DATA_LOSS:return!0;default:return fe(15467,{code:t})}}(t)&&t!==ye.ABORTED}(e.code)){const n=t.Ta.shift();Ca(t).B_(),await pa(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await ga(t)}}(t,e),va(t)&&wa(t)}async function Sa(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),ue(Jo,"RemoteStore received new credentials");const r=aa(n);n.Ea.add(3),await ta(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Zo(n)}function Ia(t){return t.ma||(t.ma=function(t,e,n){const r=me(t);return r.sa(),new Ko(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
             * @license
             * Copyright 2018 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */}(t.datastore,t.asyncQueue,{Zo:ua.bind(null,t),Yo:ha.bind(null,t),t_:la.bind(null,t),J_:da.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),oa(t)?ia(t):t.Va.set("Unknown")):(await t.ma.stop(),ca(t))})),t.ma}function Ca(t){return t.fa||(t.fa=function(t,e,n){const r=me(t);return r.sa(),new Ho(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Ea.bind(null,t),t_:Ta.bind(null,t),ta:ba.bind(null,t),na:_a.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await ga(t)):(await t.fa.stop(),t.Ta.length>0&&(ue(Jo,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */}class Aa{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new we,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new Aa(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ve(ye.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Da(t,e){if(he("AsyncQueue",`${e}: ${t}`),cn(t))return new ve(ye.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Na{static emptySet(t){return new Na(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||je.comparator(e.key,n.key):(t,e)=>je.comparator(t.key,e.key),this.keyedMap=ts(),this.sortedSet=new vn(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Na))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Na;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class ka{constructor(){this.ga=new vn(je.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?0!==t.type&&3===n.type?this.ga=this.ga.insert(e,t):3===t.type&&1!==n.type?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.ga=this.ga.remove(e):1===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):fe(63341,{Vt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ra{constructor(t,e,n,r,s,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,s){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Ra(t,e,Na.emptySet(e),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class xa{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(t=>t.Da())}}class La{constructor(){this.queries=Oa(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(t,e){const n=me(t),r=n.queries;n.queries=Oa(),r.forEach((t,n)=>{for(const r of n.ba)r.onError(e)})}(this,new ve(ye.ABORTED,"Firestore shutting down"))}}function Oa(){return new Yr(t=>Gr(t),zr)}async function Ma(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new xa,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(t){const n=Da(t,`Initialization of query '${Kr(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Ua(n)}async function Va(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const t=i.ba.indexOf(e);t>=0&&(i.ba.splice(t,1),0===i.ba.length?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Pa(t,e){const n=me(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.ba)t.Fa(s)&&(r=!0);e.wa=s}}r&&Ua(n)}function Fa(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function Ua(t){t.Ca.forEach(t=>{t.next()})}var Ba,ja;(ja=Ba||(Ba={})).Ma="default",ja.Cache="cache";class qa{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Ra(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==e;return(!this.options.Ka||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}ka(t){t=Ra.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Ba.Cache}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class $a{constructor(t){this.key=t}}class za{constructor(t){this.key=t}}class Ga{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=as(),this.mutatedKeys=as(),this.eu=Qr(t),this.tu=new Na(this.eu)}get nu(){return this.Za}ru(t,e){const n=e?e.iu:new ka,r=e?e.tu:this.tu;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),h=Hr(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.su(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.eu(h,a)>0||c&&this.eu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))}),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{tu:i,iu:n,Ss:o,mutatedKeys:s}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const s=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const i=t.iu.ya();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Vt:t})}};return n(t)-n(e)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(t.type,e.type)||this.eu(t.doc,e.doc)),this.ou(n),r=null!=r&&r;const o=e&&!r?this._u():[],a=0===this.Ya.size&&this.current&&!r?1:0,c=a!==this.Xa;return this.Xa=a,0!==i.length||c?{snapshot:new Ra(this.query,t.tu,s,i,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:o}:{au:o}}va(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ka,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=as(),this.tu.forEach(t=>{this.uu(t.key)&&(this.Ya=this.Ya.add(t.key))});const e=[];return t.forEach(t=>{this.Ya.has(t)||e.push(new za(t))}),this.Ya.forEach(n=>{t.has(n)||e.push(new $a(n))}),e}cu(t){this.Za=t.ks,this.Ya=as();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Ra.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Xa,this.hasCachedResults)}}const Ka="SyncEngine";class Ha{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Qa{constructor(t){this.key=t,this.hu=!1}}class Wa{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Pu={},this.Tu=new Yr(t=>Gr(t),zr),this.Iu=new Map,this.Eu=new Set,this.Ru=new vn(je.comparator),this.Au=new Map,this.Vu=new so,this.du={},this.mu=new Map,this.fu=Ki.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function Ya(t,e,n=!0){const r=yc(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Xa(r,e,n,!0),s}async function Ja(t,e){const n=yc(t);await Xa(n,e,!0,!1)}async function Xa(t,e,n,r){const s=await function(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.li.getTargetData(t,e).next(s=>s?(r=s,an.resolve(r)):n.li.allocateTargetId(t).next(s=>(r=new Fi(e,s,"TargetPurposeListen",t.currentSequenceNumber),n.li.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.vs.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.vs=n.vs.insert(t.targetId,t),n.Fs.set(e,t.targetId)),t})}(t.localStore,jr(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await async function(t,e,n,r,s){t.pu=(e,n,r)=>async function(t,e,n,r){let s=e.view.ru(n);s.Ss&&(s=await Co(t.localStore,e.query,!1).then(({documents:t})=>e.view.ru(t,s)));const i=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(s,t.isPrimaryClient,i,o);return lc(t,e.targetId,a.au),a.snapshot}(t,e,n,r);const i=await Co(t.localStore,e,!0),o=new Ga(e,i.ks),a=o.ru(i.documents),c=Zs.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,s),u=o.applyChanges(a,t.isPrimaryClient,c);lc(t,n,u.au);const h=new Ha(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}(t,e,i,"current"===o,s.resumeToken)),t.isPrimaryClient&&n&&ea(t.remoteStore,s),a}async function Za(t,e,n){const r=me(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(t=>!zr(t,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Io(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&na(r.remoteStore,s.targetId),uc(r,s.targetId)}).catch(on)):(uc(r,s.targetId),await Io(r.localStore,s.targetId,!0))}async function tc(t,e){const n=me(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),na(n.remoteStore,r.targetId))}async function ec(t,e,n){const r=function(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ic.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oc.bind(null,e),e}(t);try{const t=await function(t,e){const n=me(t),r=Xe.now(),s=e.reduce((t,e)=>t.add(e.key),as());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=Xr(),c=as();return n.xs.getEntries(t,s).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(s=>{i=s;const o=[];for(const t of e){const e=Rs(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new Os(t.key,e,cr(e.value.mapValue),Is.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)}).next(e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)})}).then(()=>({batchId:o.batchId,changes:es(i)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.du[t.currentUser.toKey()];r||(r=new vn(ke)),r=r.insert(e,n),t.du[t.currentUser.toKey()]=r}(r,t.batchId,n),await pc(r,t.changes),await ga(r.remoteStore)}catch(t){const e=Da(t,"Failed to persist write");n.reject(e)}}async function nc(t,e){const n=me(t);try{const t=await To(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Au.get(e);r&&(ge(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?r.hu=!0:t.modifiedDocuments.size>0?ge(r.hu,14607):t.removedDocuments.size>0&&(ge(r.hu,42227),r.hu=!1))}),await pc(n,t,e)}catch(t){await on(t)}}function rc(t,e,n){const r=me(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Tu.forEach((n,r)=>{const s=r.view.va(e);s.snapshot&&t.push(s.snapshot)}),function(t,e){const n=me(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const s of n.ba)s.va(e)&&(r=!0)}),r&&Ua(n)}(r.eventManager,e),t.length&&r.Pu.J_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sc(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let t=new vn(je.comparator);t=t.insert(i,ur.newNoDocument(i,Ze.min()));const n=as().add(i),s=new Xs(Ze.min(),new Map,new vn(ke),t,n);await nc(r,s),r.Ru=r.Ru.remove(i),r.Au.delete(e),fc(r)}else await Io(r.localStore,e,!1).then(()=>uc(r,e,n)).catch(on)}async function ic(t,e){const n=me(t),r=e.batch.batchId;try{const t=await function(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=an.resolve();return i.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const i=n.docVersions.get(t);ge(null!==i,48541),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,s))}(n,t,e,s).next(()=>s.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=as();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,r))})}(n.localStore,e);cc(n,r,null),ac(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pc(n,t)}catch(t){await on(t)}}async function oc(t,e,n){const r=me(t);try{const t=await function(t,e){const n=me(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(ge(null!==e,37113),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>n.localDocuments.getDocuments(t,r))})}(r.localStore,e);cc(r,e,n),ac(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pc(r,t)}catch(n){await on(n)}}function ac(t,e){(t.mu.get(e)||[]).forEach(t=>{t.resolve()}),t.mu.delete(e)}function cc(t,e,n){const r=me(t);let s=r.du[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function uc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(e=>{t.Vu.containsKey(e)||hc(t,e)})}function hc(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);null!==n&&(na(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),fc(t))}function lc(t,e,n){for(const r of n)r instanceof $a?(t.Vu.addReference(r.key,e),dc(t,r)):r instanceof za?(ue(Ka,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||hc(t,r.key)):fe(19791,{wu:r})}function dc(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(ue(Ka,"New document in limbo: "+n),t.Eu.add(r),fc(t))}function fc(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new je(Fe.fromString(e)),r=t.fu.next();t.Au.set(r,new Qa(n)),t.Ru=t.Ru.insert(n,r),ea(t.remoteStore,new Fi(jr(Pr(n.path)),r,"TargetPurposeLimboResolution",un.ce))}}async function pc(t,e,n){const r=me(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((t,a)=>{o.push(r.pu(a,e,n).then(t=>{if((t||n)&&r.isPrimaryClient){var e;const s=t?!t.fromCache:null==n||null===(e=n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,s?"current":"not-current")}if(t){s.push(t);const e=go.Es(a.targetId,t);i.push(e)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(t,e){const n=me(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>an.forEach(e,e=>an.forEach(e.Ts,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>an.forEach(e.Is,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!cn(t))throw t;ue(vo,"Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.vs.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.vs=n.vs.insert(t,s)}}}(r.localStore,i))}async function gc(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){ue(Ka,"User change. New user:",e.toKey());const t=await bo(n.localStore,e);n.currentUser=e,function(t,e){t.mu.forEach(t=>{t.forEach(t=>{t.reject(new ve(ye.CANCELLED,e))})}),t.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await pc(n,t.Ns)}}function mc(t,e){const n=me(t),r=n.Au.get(e);if(r&&r.hu)return as().add(r.key);{let t=as();const r=n.Iu.get(e);if(!r)return t;for(const e of r){const r=n.Tu.get(e);t=t.unionWith(r.view.nu)}return t}}function yc(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sc.bind(null,e),e.Pu.J_=Pa.bind(null,e.eventManager),e.Pu.yu=Fa.bind(null,e.eventManager),e}class vc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=qo(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return function(t,e,n,r){return new Eo(t,e,n,r)}(this.persistence,new yo,t.initialUser,this.serializer)}Cu(t){return new ho(fo.Vi,this.serializer)}Du(t){return new Do}async terminate(){var t,e;null!==(t=this.gcScheduler)&&void 0!==t&&t.stop(),null!==(e=this.indexBackfillerScheduler)&&void 0!==e&&e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vc.provider={build:()=>new vc};class wc extends vc{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){ge(this.persistence.referenceDelegate instanceof po,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Yi(n,t.asyncQueue,e)}Cu(t){const e=void 0!==this.cacheSizeBytes?Gi.withCacheSize(this.cacheSizeBytes):Gi.DEFAULT;return new ho(t=>po.Vi(t,e),this.serializer)}}class Ec{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>rc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=gc.bind(null,this.syncEngine),await async function(t,e){const n=me(t);e?(n.Ea.delete(2),await Zo(n)):e||(n.Ea.add(2),await ta(n),n.Va.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new La}createDatastore(t){const e=qo(t.databaseInfo.databaseId),n=function(t){return new Bo(t)}(t.databaseInfo);return function(t,e,n,r){return new Wo(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,s){return new Xo(t,e,n,r,s)}(this.localStore,this.datastore,t.asyncQueue,t=>rc(this.syncEngine,t,0),Ro.v()?new Ro:new No)}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new Wa(t,e,n,r,s,i);return o&&(a.gu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=me(t);ue(Jo,"RemoteStore shutting down."),e.Ea.add(5),await ta(e),e.Aa.shutdown(),e.Va.set("Unknown")}(this.remoteStore),null!==(t=this.datastore)&&void 0!==t&&t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}Ec.provider={build:()=>new Ec};
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class bc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):he("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const _c="FirestoreClient";class Tc{constructor(t,e,n,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this._databaseInfo=r,this.user=ie.UNAUTHENTICATED,this.clientId=Ne.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async t=>{ue(_c,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(ue(_c,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new we;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Da(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Sc(t,e){t.asyncQueue.verifyOperationInProgress(),ue(_c,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await bo(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ic(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ue(_c,"Using user provided OfflineComponentProvider");try{await Sc(t,t._uninitializedComponentsProvider._offline)}catch(e){const r=e;if(!function(t){return"FirebaseError"===t.name?t.code===ye.FAILED_PRECONDITION||t.code===ye.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(r))throw r;le("Error using user provided cache. Falling back to memory cache: "+r),await Sc(t,new vc)}}else ue(_c,"Using default OfflineComponentProvider"),await Sc(t,new wc(void 0));return t._offlineComponents}(t);ue(_c,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(t=>Sa(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>Sa(e.remoteStore,n)),t._onlineComponents=e}async function Cc(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ue(_c,"Using user provided OnlineComponentProvider"),await Ic(t,t._uninitializedComponentsProvider._online)):(ue(_c,"Using default OnlineComponentProvider"),await Ic(t,new Ec))),t._onlineComponents}async function Ac(t){const e=await Cc(t),n=e.eventManager;return n.onListen=Ya.bind(null,e.syncEngine),n.onUnlisten=Za.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Ja.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=tc.bind(null,e.syncEngine),n}function Dc(t,e){const n=new we;return t.asyncQueue.enqueueAndForget(async()=>ec(await function(t){return Cc(t).then(t=>t.syncEngine)}(t),e,n)),n.promise
/**
             * @license
             * Copyright 2023 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */}function Nc(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */}const kc=new Map,Rc="firestore.googleapis.com",xc=!0;class Lc{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ve(ye.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Rc,this.ssl=xc}else this.host=t.host,this.ssl=null!==(e=t.ssl)&&void 0!==e?e:xc;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=zi;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ve(ye.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,r){if(!0===e&&!0===r)throw new ve(ye.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nc(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ve(ye.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ve(ye.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ve(ye.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Oc{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ve(ye.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ve(ye.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lc(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new be;switch(t.type){case"firstParty":return new Ie(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ve(ye.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=kc.get(t);e&&(ue("ComponentProvider","Removing Datastore"),kc.delete(t),e.terminate())}(this),Promise.resolve()}}function Mc(t,e,n,r={}){t=He(t,Oc);const s=d(e),o=t._getSettings(),a={...o,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(async function(t){(await fetch(t,{credentials:"include"})).ok}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(`https://${c}`),g("Firestore",!0)),o.host!==Rc&&o.host!==c&&le("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...o,host:c,ssl:s,emulatorOptions:r};if(!E(u,a)&&(t._setSettings(u),r.mockUserToken)){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=ie.MOCK_USER;else{var h;e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[i(JSON.stringify({alg:"none",type:"JWT"})),i(JSON.stringify(o)),""].join(".")}(r.mockUserToken,null===(h=t._app)||void 0===h?void 0:h.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ve(ye.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ie(s)}t._authCredentials=new _e(new Ee(e,n))}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Vc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Vc(this.firestore,t,this._query)}}class Pc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Pc(this.firestore,t,this._key)}toJSON(){return{type:Pc._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(We(e,Pc._jsonSchema))return new Pc(t,n||null,new je(Fe.fromString(e.referencePath)))}}Pc._jsonSchemaVersion="firestore/documentReference/1.0",Pc._jsonSchema={type:Qe("string",Pc._jsonSchemaVersion),referencePath:Qe("string")};class Fc extends Vc{constructor(t,e,n){super(t,e,Pr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Pc(this.firestore,null,new je(t))}withConverter(t){return new Fc(this.firestore,t,this._path)}}function Uc(t,e,...n){if(t=_(t),1===arguments.length&&(e=Ne.newId()),qe("doc","path",e),t instanceof Oc){const r=Fe.fromString(e,...n);return $e(r),new Pc(t,null,new je(r))}{if(!(t instanceof Pc||t instanceof Fc))throw new ve(ye.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return $e(r),new Pc(t.firestore,t instanceof Fc?t.converter:null,new je(r))}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Bc="AsyncQueue";class jc{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new $o(this,"async_queue_retry"),this._c=()=>{const t=jo();t&&ue(Bc,"Visibility state changed to "+t.visibilityState),this.M_.w_()},this.ac=t;const e=jo();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=jo();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new we;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!cn(t))throw t;ue(Bc,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(t=>{throw this.nc=t,this.rc=!1,he("INTERNAL UNHANDLED ERROR: ",qc(t)),t}).then(t=>(this.rc=!1,t))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const r=Aa.createAndSchedule(this,t,e,n,t=>this.hc(t));return this.tc.push(r),r}uc(){this.nc&&fe(47125,{Pc:qc(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do{t=this.ac,await t}while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function qc(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}class $c extends Oc{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new jc,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new jc(t),this._firestoreClient=void 0,await t}}}function zc(t){if(t._terminated)throw new ve(ye.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||function(t){var e,n,r,s;const i=t._freezeSettings(),o=function(t,e,n,r,s){return new Pn(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Nc(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,null===(n=t._app)||void 0===n?void 0:n.options.apiKey,i);t._componentsProvider||null!==(r=i.localCache)&&void 0!==r&&r._offlineComponentProvider&&null!==(s=i.localCache)&&void 0!==s&&s._onlineComponentProvider&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Tc(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(t),t._firestoreClient}class Gc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Gc(In.fromBase64String(t))}catch(t){throw new ve(ye.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Gc(In.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Gc._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(We(t,Gc._jsonSchema))return Gc.fromBase64String(t.bytes)}}Gc._jsonSchemaVersion="firestore/bytes/1.0",Gc._jsonSchema={type:Qe("string",Gc._jsonSchemaVersion),bytes:Qe("string")};
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Kc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ve(ye.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Hc{constructor(t){this._methodName=t}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Qc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ve(ye.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ve(ye.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return ke(this._lat,t._lat)||ke(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qc._jsonSchemaVersion}}static fromJSON(t){if(We(t,Qc._jsonSchema))return new Qc(t.latitude,t.longitude)}}Qc._jsonSchemaVersion="firestore/geoPoint/1.0",Qc._jsonSchema={type:Qe("string",Qc._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Wc{constructor(t){this._values=(t||[]).map(t=>t)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Wc._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(We(t,Wc._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(t=>"number"==typeof t))return new Wc(t.vectorValues);throw new ve(ye.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wc._jsonSchemaVersion="firestore/vectorValue/1.0",Wc._jsonSchema={type:Qe("string",Wc._jsonSchemaVersion),vectorValues:Qe("object")};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const Yc=/^__.*__$/;class Jc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Os(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ls(t,this.data,e,this.fieldTransforms)}}class Xc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Os(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Zc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{dataSource:t})}}class tu{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new tu({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return du(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(0===t.length)throw this.createError("Document fields must not be empty");if(Zc(this.dataSource)&&Yc.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class eu{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||qo(t)}createContext(t,e,n,r=!1){return new tu({dataSource:t,methodName:e,targetDoc:n,path:Be.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nu(t){const e=t._freezeSettings(),n=qo(t._databaseId);return new eu(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ru(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);cu("Data must be an object, but it was:",o,r);const a=ou(r,o);let c,u;if(i.merge)c=new Tn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=uu(e,r,n);if(!o.contains(s))throw new ve(ye.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);fu(t,s)||t.push(s)}c=new Tn(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new Jc(new ar(a),c,u)}class su extends Hc{_toFieldTransform(t){if(2!==t.dataSource)throw 1===t.dataSource?t.createError(`${this._methodName}() can only appear at the top level of your update data`):t.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof su}}function iu(t,e){if(au(t=_(t)))return cu("Unsupported field value:",e,t),ou(t,e);if(t instanceof Hc)return function(t,e){if(!Zc(e.dataSource))throw e.createError(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.createError(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&4!==e.dataSource)throw e.createError("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=iu(s,e.childContextForArray(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=_(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ls(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Xe.fromDate(t);return{timestampValue:di(e.serializer,n)}}if(t instanceof Xe){const n=new Xe(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:di(e.serializer,n)}}if(t instanceof Qc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Gc)return{bytesValue:fi(e.serializer,t._byteString)};if(t instanceof Pc){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.createError(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:mi(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof Wc)return function(t,e){const n=t instanceof Wc?t.toArray():t,r={fields:{[Bn]:{stringValue:$n},[zn]:{arrayValue:{values:n.map(t=>{if("number"!=typeof t)throw e.createError("VectorValues must only contain numeric values.");return us(e.serializer,t)})}}}};return{mapValue:r}}(t,e);if(Pi(t))return t._toProto(e.serializer);throw e.createError(`Unsupported field value: ${Ke(t)}`)}(t,e)}function ou(t,e){const n={};return yn(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mn(t,(t,r)=>{const s=iu(r,e.childContextForField(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}function au(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof Qc||t instanceof Gc||t instanceof Pc||t instanceof Hc||t instanceof Wc||Pi(t))}function cu(t,e,n){if(!au(n)||!Ge(n)){const r=Ke(n);throw"an object"===r?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function uu(t,e,n){if((e=_(e))instanceof Kc)return e._internalPath;if("string"==typeof e)return lu(t,e);throw du("Field path arguments must be of type string or ",t,!1,void 0,n)}const hu=new RegExp("[~\\*/\\[\\]]");function lu(t,e,n){if(e.search(hu)>=0)throw du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kc(...e.split("."))._internalPath}catch(r){throw du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function du(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ve(ye.INVALID_ARGUMENT,a+t+c)}function fu(t,e){return t.some(t=>t.isEqual(e))}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class pu{convertValue(t,e="none"){switch(Gn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Dn(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Nn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw fe(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return mn(t,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertVectorValue(t){var e;const n=null===(e=t.fields)||void 0===e||null===(e=e[zn].arrayValue)||void 0===e||null===(e=e.values)||void 0===e?void 0:e.map(t=>Dn(t.doubleValue));return new Wc(n)}convertGeoPoint(t){return new Qc(Dn(t.latitude),Dn(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Mn(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Vn(t));default:return null}}convertTimestamp(t){const e=An(t);return new Xe(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Fe.fromString(t);ge(Vi(n),9688,{name:t});const r=new Un(n.get(1),n.get(3)),s=new je(n.popFirst(5));return r.isEqual(e)||he(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class gu extends pu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Gc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Pc(this.firestore,null,e)}}const mu="@firebase/firestore",yu="4.10.0";
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class vu{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new wu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t,e;return null!==(t=null===(e=this._document)||void 0===e?void 0:e.data.clone().value.mapValue.fields)&&void 0!==t?t:void 0}get(t){if(this._document){const e=this._document.data.field(uu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class wu extends vu{data(){return super.data()}}class Eu{}class bu extends Eu{}class _u extends bu{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new _u(t,e,n)}_apply(t){const e=this._parse(t);return Au(t._query,e),new Vc(t.firestore,t.converter,qr(t._query,e))}_parse(t){const e=nu(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new ve(ye.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Cu(o,i);const e=[];for(const n of o)e.push(Iu(r,t,n));a={arrayValue:{values:e}}}else a=Iu(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Cu(o,i),a=function(t,e,n,r=!1){return iu(n,t.createContext(r?4:3,e))}(n,e,o,"in"===i||"not-in"===i);return mr.create(s,i,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}class Tu extends Eu{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Tu(t,e)}_parse(t){const e=this._queryConstraints.map(e=>e._parse(t)).filter(t=>t.getFilters().length>0);return 1===e.length?e[0]:yr.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const s of r)Au(n,s),n=qr(n,s)}(t._query,e),new Vc(t.firestore,t.converter,qr(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Su extends bu{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Su(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new ve(ye.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new ve(ye.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fr(e,n)}(t._query,this._field,this._direction);return new Vc(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Vr(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Iu(t,e,n){if("string"==typeof(n=_(n))){if(""===n)throw new ve(ye.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ur(e)&&-1!==n.indexOf("/"))throw new ve(ye.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fe.fromString(n));if(!je.isDocumentKey(r))throw new ve(ye.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return tr(t,new je(r))}if(n instanceof Pc)return tr(t,n._key);throw new ve(ye.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ke(n)}.`)}function Cu(t,e){if(!Array.isArray(t)||0===t.length)throw new ve(ye.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Au(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new ve(ye.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ve(ye.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Du{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Nu extends vu{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(uu("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ve(ye.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Nu._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),t&&t.isValidDocument()&&t.isFoundDocument()?(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e):e}}Nu._jsonSchemaVersion="firestore/documentSnapshot/1.0",Nu._jsonSchema={type:Qe("string",Nu._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class ku extends Nu{data(t={}){return super.data(t)}}class Ru{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Du(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new ku(this._firestore,this._userDataWriter,n.key,n,new Du(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ve(ye.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const r=new ku(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Du(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new ku(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Du(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:xu(e.type),doc:r,oldIndex:s,newIndex:i}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ve(ye.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ru._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ne.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],r=[];return this.docs.forEach(t=>{null!==t._document&&(e.push(t._document),n.push(this._userDataWriter.convertObjectMap(t._document.data.value.mapValue.fields,"previous")),r.push(t.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function xu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:t})}}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Lu(t,e){return Dc(zc(t),e)}Ru._jsonSchemaVersion="firestore/querySnapshot/1.0",Ru._jsonSchema={type:Qe("string",Ru._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")},function(t,e=!0){oe="12.8.0",xt(new T("firestore",(t,{instanceIdentifier:n,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new $c(new Te(t.getProvider("auth-internal")),new Ae(s,t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ve(ye.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Un(t.options.projectId,e)}(s,n),s);return r={useFetchStreams:e,...r},i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),Vt(mu,yu,t),Vt(mu,yu,"esm2020")}(),
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
Vt("firebase","12.8.0","app");const Ou=Mt({apiKey:"AIzaSyAuQXq7CZ8HdskSuc-O4L6YQY4sCTXjtv4",authDomain:"moblieweb-dfaa2.firebaseapp.com",projectId:"moblieweb-dfaa2",storageBucket:"moblieweb-dfaa2.firebasestorage.app",messagingSenderId:"693484403683",appId:"1:693484403683:web:5bcb1cdb202fced9dabed6"});t("b",function(t){const e="object"==typeof t?t:function(t=Ct){const e=Dt.get(t);if(!e&&t===Ct&&h())return Mt();if(!e)throw Lt.create("no-app",{appName:t});return e}(),n="string"==typeof t?t:Fn,r=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}(e,"firestore").getImmediate({identifier:n});if(!r._initialized){const t=u("firestore");t&&Mc(r,...t)}return r}(Ou)),t("_",(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n})}}});
