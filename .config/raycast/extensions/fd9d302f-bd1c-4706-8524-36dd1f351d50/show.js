"use strict";var It=Object.create;var X=Object.defineProperty;var Et=Object.getOwnPropertyDescriptor;var Ct=Object.getOwnPropertyNames;var Tt=Object.getPrototypeOf,Pt=Object.prototype.hasOwnProperty;var l=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),At=(e,n)=>{for(var r in n)X(e,r,{get:n[r],enumerable:!0})},Re=(e,n,r,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of Ct(n))!Pt.call(e,o)&&o!==r&&X(e,o,{get:()=>n[o],enumerable:!(t=Et(n,o))||t.enumerable});return e};var ae=(e,n,r)=>(r=e!=null?It(Tt(e)):{},Re(n||!e||!e.__esModule?X(r,"default",{value:e,enumerable:!0}):r,e)),Gt=e=>Re(X({},"__esModule",{value:!0}),e);var Le=l((Ro,He)=>{He.exports=qe;qe.sync=$t;var Oe=require("fs");function kt(e,n){var r=n.pathExt!==void 0?n.pathExt:process.env.PATHEXT;if(!r||(r=r.split(";"),r.indexOf("")!==-1))return!0;for(var t=0;t<r.length;t++){var o=r[t].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function Ne(e,n,r){return!e.isSymbolicLink()&&!e.isFile()?!1:kt(n,r)}function qe(e,n,r){Oe.stat(e,function(t,o){r(t,t?!1:Ne(o,e,n))})}function $t(e,n){return Ne(Oe.statSync(e),e,n)}});var Ue=l((Oo,Fe)=>{Fe.exports=Be;Be.sync=Rt;var Me=require("fs");function Be(e,n,r){Me.stat(e,function(t,o){r(t,t?!1:je(o,n))})}function Rt(e,n){return je(Me.statSync(e),n)}function je(e,n){return e.isFile()&&Ot(e,n)}function Ot(e,n){var r=e.mode,t=e.uid,o=e.gid,i=n.uid!==void 0?n.uid:process.getuid&&process.getuid(),s=n.gid!==void 0?n.gid:process.getgid&&process.getgid(),a=parseInt("100",8),u=parseInt("010",8),c=parseInt("001",8),f=a|u,p=r&c||r&u&&o===s||r&a&&t===i||r&f&&i===0;return p}});var We=l((qo,De)=>{var No=require("fs"),V;process.platform==="win32"||global.TESTING_WINDOWS?V=Le():V=Ue();De.exports=ce;ce.sync=Nt;function ce(e,n,r){if(typeof n=="function"&&(r=n,n={}),!r){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(t,o){ce(e,n||{},function(i,s){i?o(i):t(s)})})}V(e,n||{},function(t,o){t&&(t.code==="EACCES"||n&&n.ignoreErrors)&&(t=null,o=!1),r(t,o)})}function Nt(e,n){try{return V.sync(e,n||{})}catch(r){if(n&&n.ignoreErrors||r.code==="EACCES")return!1;throw r}}});var Ze=l((Ho,Qe)=>{var T=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Ke=require("path"),qt=T?";":":",Xe=We(),Ve=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),ze=(e,n)=>{let r=n.colon||qt,t=e.match(/\//)||T&&e.match(/\\/)?[""]:[...T?[process.cwd()]:[],...(n.path||process.env.PATH||"").split(r)],o=T?n.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",i=T?o.split(r):[""];return T&&e.indexOf(".")!==-1&&i[0]!==""&&i.unshift(""),{pathEnv:t,pathExt:i,pathExtExe:o}},Ye=(e,n,r)=>{typeof n=="function"&&(r=n,n={}),n||(n={});let{pathEnv:t,pathExt:o,pathExtExe:i}=ze(e,n),s=[],a=c=>new Promise((f,p)=>{if(c===t.length)return n.all&&s.length?f(s):p(Ve(e));let w=t[c],y=/^".*"$/.test(w)?w.slice(1,-1):w,g=Ke.join(y,e),S=!y&&/^\.[\\\/]/.test(e)?e.slice(0,2)+g:g;f(u(S,c,0))}),u=(c,f,p)=>new Promise((w,y)=>{if(p===o.length)return w(a(f+1));let g=o[p];Xe(c+g,{pathExt:i},(S,C)=>{if(!S&&C)if(n.all)s.push(c+g);else return w(c+g);return w(u(c,f,p+1))})});return r?a(0).then(c=>r(null,c),r):a(0)},Ht=(e,n)=>{n=n||{};let{pathEnv:r,pathExt:t,pathExtExe:o}=ze(e,n),i=[];for(let s=0;s<r.length;s++){let a=r[s],u=/^".*"$/.test(a)?a.slice(1,-1):a,c=Ke.join(u,e),f=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+c:c;for(let p=0;p<t.length;p++){let w=f+t[p];try{if(Xe.sync(w,{pathExt:o}))if(n.all)i.push(w);else return w}catch{}}}if(n.all&&i.length)return i;if(n.nothrow)return null;throw Ve(e)};Qe.exports=Ye;Ye.sync=Ht});var ue=l((Lo,le)=>{"use strict";var Je=(e={})=>{let n=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(n).reverse().find(t=>t.toUpperCase()==="PATH")||"Path"};le.exports=Je;le.exports.default=Je});var rn=l((Mo,tn)=>{"use strict";var en=require("path"),Lt=Ze(),Mt=ue();function nn(e,n){let r=e.options.env||process.env,t=process.cwd(),o=e.options.cwd!=null,i=o&&process.chdir!==void 0&&!process.chdir.disabled;if(i)try{process.chdir(e.options.cwd)}catch{}let s;try{s=Lt.sync(e.command,{path:r[Mt({env:r})],pathExt:n?en.delimiter:void 0})}catch{}finally{i&&process.chdir(t)}return s&&(s=en.resolve(o?e.options.cwd:"",s)),s}function Bt(e){return nn(e)||nn(e,!0)}tn.exports=Bt});var on=l((Bo,fe)=>{"use strict";var de=/([()\][%!^"`<>&|;, *?])/g;function jt(e){return e=e.replace(de,"^$1"),e}function Ft(e,n){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(de,"^$1"),n&&(e=e.replace(de,"^$1")),e}fe.exports.command=jt;fe.exports.argument=Ft});var an=l((jo,sn)=>{"use strict";sn.exports=/^#!(.*)/});var ln=l((Fo,cn)=>{"use strict";var Ut=an();cn.exports=(e="")=>{let n=e.match(Ut);if(!n)return null;let[r,t]=n[0].replace(/#! ?/,"").split(" "),o=r.split("/").pop();return o==="env"?t:t?`${o} ${t}`:o}});var dn=l((Uo,un)=>{"use strict";var pe=require("fs"),Dt=ln();function Wt(e){let r=Buffer.alloc(150),t;try{t=pe.openSync(e,"r"),pe.readSync(t,r,0,150,0),pe.closeSync(t)}catch{}return Dt(r.toString())}un.exports=Wt});var wn=l((Do,mn)=>{"use strict";var Kt=require("path"),fn=rn(),pn=on(),Xt=dn(),Vt=process.platform==="win32",zt=/\.(?:com|exe)$/i,Yt=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Qt(e){e.file=fn(e);let n=e.file&&Xt(e.file);return n?(e.args.unshift(e.file),e.command=n,fn(e)):e.file}function Zt(e){if(!Vt)return e;let n=Qt(e),r=!zt.test(n);if(e.options.forceShell||r){let t=Yt.test(n);e.command=Kt.normalize(e.command),e.command=pn.command(e.command),e.args=e.args.map(i=>pn.argument(i,t));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Jt(e,n,r){n&&!Array.isArray(n)&&(r=n,n=null),n=n?n.slice(0):[],r=Object.assign({},r);let t={command:e,args:n,options:r,file:void 0,original:{command:e,args:n}};return r.shell?t:Zt(t)}mn.exports=Jt});var gn=l((Wo,yn)=>{"use strict";var me=process.platform==="win32";function we(e,n){return Object.assign(new Error(`${n} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${n} ${e.command}`,path:e.command,spawnargs:e.args})}function er(e,n){if(!me)return;let r=e.emit;e.emit=function(t,o){if(t==="exit"){let i=hn(o,n,"spawn");if(i)return r.call(e,"error",i)}return r.apply(e,arguments)}}function hn(e,n){return me&&e===1&&!n.file?we(n.original,"spawn"):null}function nr(e,n){return me&&e===1&&!n.file?we(n.original,"spawnSync"):null}yn.exports={hookChildProcess:er,verifyENOENT:hn,verifyENOENTSync:nr,notFoundError:we}});var xn=l((Ko,P)=>{"use strict";var Sn=require("child_process"),he=wn(),ye=gn();function _n(e,n,r){let t=he(e,n,r),o=Sn.spawn(t.command,t.args,t.options);return ye.hookChildProcess(o,t),o}function tr(e,n,r){let t=he(e,n,r),o=Sn.spawnSync(t.command,t.args,t.options);return o.error=o.error||ye.verifyENOENTSync(o.status,t),o}P.exports=_n;P.exports.spawn=_n;P.exports.sync=tr;P.exports._parse=he;P.exports._enoent=ye});var vn=l((Xo,bn)=>{"use strict";bn.exports=e=>{let n=typeof e=="string"?`
`:10,r=typeof e=="string"?"\r":13;return e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e[e.length-1]===r&&(e=e.slice(0,e.length-1)),e}});var Cn=l((Vo,H)=>{"use strict";var q=require("path"),In=ue(),En=e=>{e={cwd:process.cwd(),path:process.env[In()],execPath:process.execPath,...e};let n,r=q.resolve(e.cwd),t=[];for(;n!==r;)t.push(q.join(r,"node_modules/.bin")),n=r,r=q.resolve(r,"..");let o=q.resolve(e.cwd,e.execPath,"..");return t.push(o),t.concat(e.path).join(q.delimiter)};H.exports=En;H.exports.default=En;H.exports.env=e=>{e={env:process.env,...e};let n={...e.env},r=In({env:n});return e.path=n[r],n[r]=H.exports(e),n}});var Pn=l((zo,ge)=>{"use strict";var Tn=(e,n)=>{for(let r of Reflect.ownKeys(n))Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r));return e};ge.exports=Tn;ge.exports.default=Tn});var Gn=l((Yo,Y)=>{"use strict";var rr=Pn(),z=new WeakMap,An=(e,n={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let r,t=0,o=e.displayName||e.name||"<anonymous>",i=function(...s){if(z.set(i,++t),t===1)r=e.apply(this,s),e=null;else if(n.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return r};return rr(i,e),z.set(i,t),i};Y.exports=An;Y.exports.default=An;Y.exports.callCount=e=>{if(!z.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return z.get(e)}});var kn=l(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});Q.SIGNALS=void 0;var or=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];Q.SIGNALS=or});var Se=l(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.SIGRTMAX=A.getRealtimeSignals=void 0;var ir=function(){let e=Rn-$n+1;return Array.from({length:e},sr)};A.getRealtimeSignals=ir;var sr=function(e,n){return{name:`SIGRT${n+1}`,number:$n+n,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},$n=34,Rn=64;A.SIGRTMAX=Rn});var On=l(Z=>{"use strict";Object.defineProperty(Z,"__esModule",{value:!0});Z.getSignals=void 0;var ar=require("os"),cr=kn(),lr=Se(),ur=function(){let e=(0,lr.getRealtimeSignals)();return[...cr.SIGNALS,...e].map(dr)};Z.getSignals=ur;var dr=function({name:e,number:n,description:r,action:t,forced:o=!1,standard:i}){let{signals:{[e]:s}}=ar.constants,a=s!==void 0;return{name:e,number:a?s:n,description:r,supported:a,action:t,forced:o,standard:i}}});var qn=l(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.signalsByNumber=G.signalsByName=void 0;var fr=require("os"),Nn=On(),pr=Se(),mr=function(){return(0,Nn.getSignals)().reduce(wr,{})},wr=function(e,{name:n,number:r,description:t,supported:o,action:i,forced:s,standard:a}){return{...e,[n]:{name:n,number:r,description:t,supported:o,action:i,forced:s,standard:a}}},hr=mr();G.signalsByName=hr;var yr=function(){let e=(0,Nn.getSignals)(),n=pr.SIGRTMAX+1,r=Array.from({length:n},(t,o)=>gr(o,e));return Object.assign({},...r)},gr=function(e,n){let r=Sr(e,n);if(r===void 0)return{};let{name:t,description:o,supported:i,action:s,forced:a,standard:u}=r;return{[e]:{name:t,number:e,description:o,supported:i,action:s,forced:a,standard:u}}},Sr=function(e,n){let r=n.find(({name:t})=>fr.constants.signals[t]===e);return r!==void 0?r:n.find(t=>t.number===e)},_r=yr();G.signalsByNumber=_r});var Ln=l((ni,Hn)=>{"use strict";var{signalsByName:xr}=qn(),br=({timedOut:e,timeout:n,errorCode:r,signal:t,signalDescription:o,exitCode:i,isCanceled:s})=>e?`timed out after ${n} milliseconds`:s?"was canceled":r!==void 0?`failed with ${r}`:t!==void 0?`was killed with ${t} (${o})`:i!==void 0?`failed with exit code ${i}`:"failed",vr=({stdout:e,stderr:n,all:r,error:t,signal:o,exitCode:i,command:s,escapedCommand:a,timedOut:u,isCanceled:c,killed:f,parsed:{options:{timeout:p}}})=>{i=i===null?void 0:i,o=o===null?void 0:o;let w=o===void 0?void 0:xr[o].description,y=t&&t.code,S=`Command ${br({timedOut:u,timeout:p,errorCode:y,signal:o,signalDescription:w,exitCode:i,isCanceled:c})}: ${s}`,C=Object.prototype.toString.call(t)==="[object Error]",W=C?`${S}
${t.message}`:S,K=[W,n,e].filter(Boolean).join(`
`);return C?(t.originalMessage=t.message,t.message=K):t=new Error(K),t.shortMessage=W,t.command=s,t.escapedCommand=a,t.exitCode=i,t.signal=o,t.signalDescription=w,t.stdout=e,t.stderr=n,r!==void 0&&(t.all=r),"bufferedData"in t&&delete t.bufferedData,t.failed=!0,t.timedOut=!!u,t.isCanceled=c,t.killed=f&&!u,t};Hn.exports=vr});var Bn=l((ti,_e)=>{"use strict";var J=["stdin","stdout","stderr"],Ir=e=>J.some(n=>e[n]!==void 0),Mn=e=>{if(!e)return;let{stdio:n}=e;if(n===void 0)return J.map(t=>e[t]);if(Ir(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${J.map(t=>`\`${t}\``).join(", ")}`);if(typeof n=="string")return n;if(!Array.isArray(n))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``);let r=Math.max(n.length,J.length);return Array.from({length:r},(t,o)=>n[o])};_e.exports=Mn;_e.exports.node=e=>{let n=Mn(e);return n==="ipc"?"ipc":n===void 0||typeof n=="string"?[n,n,n,"ipc"]:n.includes("ipc")?n:[...n,"ipc"]}});var jn=l((ri,ee)=>{ee.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&ee.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&ee.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Kn=l((oi,R)=>{var d=global.process,v=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};v(d)?(Fn=require("assert"),k=jn(),Un=/^win/i.test(d.platform),L=require("events"),typeof L!="function"&&(L=L.EventEmitter),d.__signal_exit_emitter__?m=d.__signal_exit_emitter__:(m=d.__signal_exit_emitter__=new L,m.count=0,m.emitted={}),m.infinite||(m.setMaxListeners(1/0),m.infinite=!0),R.exports=function(e,n){if(v(global.process)){Fn.equal(typeof e,"function","a callback must be provided for exit handler"),$===!1&&xe();var r="exit";n&&n.alwaysLast&&(r="afterexit");var t=function(){m.removeListener(r,e),m.listeners("exit").length===0&&m.listeners("afterexit").length===0&&ne()};return m.on(r,e),t}},ne=function(){!$||!v(global.process)||($=!1,k.forEach(function(n){try{d.removeListener(n,te[n])}catch{}}),d.emit=re,d.reallyExit=be,m.count-=1)},R.exports.unload=ne,I=function(n,r,t){m.emitted[n]||(m.emitted[n]=!0,m.emit(n,r,t))},te={},k.forEach(function(e){te[e]=function(){if(v(global.process)){var r=d.listeners(e);r.length===m.count&&(ne(),I("exit",null,e),I("afterexit",null,e),Un&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),R.exports.signals=function(){return k},$=!1,xe=function(){$||!v(global.process)||($=!0,m.count+=1,k=k.filter(function(n){try{return d.on(n,te[n]),!0}catch{return!1}}),d.emit=Wn,d.reallyExit=Dn)},R.exports.load=xe,be=d.reallyExit,Dn=function(n){v(global.process)&&(d.exitCode=n||0,I("exit",d.exitCode,null),I("afterexit",d.exitCode,null),be.call(d,d.exitCode))},re=d.emit,Wn=function(n,r){if(n==="exit"&&v(global.process)){r!==void 0&&(d.exitCode=r);var t=re.apply(this,arguments);return I("exit",d.exitCode,null),I("afterexit",d.exitCode,null),t}else return re.apply(this,arguments)}):R.exports=function(){};var Fn,k,Un,L,m,ne,I,te,$,xe,be,Dn,re,Wn});var Vn=l((ii,Xn)=>{"use strict";var Er=require("os"),Cr=Kn(),Tr=1e3*5,Pr=(e,n="SIGTERM",r={})=>{let t=e(n);return Ar(e,n,r,t),t},Ar=(e,n,r,t)=>{if(!Gr(n,r,t))return;let o=$r(r),i=setTimeout(()=>{e("SIGKILL")},o);i.unref&&i.unref()},Gr=(e,{forceKillAfterTimeout:n},r)=>kr(e)&&n!==!1&&r,kr=e=>e===Er.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",$r=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Tr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Rr=(e,n)=>{e.kill()&&(n.isCanceled=!0)},Or=(e,n,r)=>{e.kill(n),r(Object.assign(new Error("Timed out"),{timedOut:!0,signal:n}))},Nr=(e,{timeout:n,killSignal:r="SIGTERM"},t)=>{if(n===0||n===void 0)return t;let o,i=new Promise((a,u)=>{o=setTimeout(()=>{Or(e,r,u)},n)}),s=t.finally(()=>{clearTimeout(o)});return Promise.race([i,s])},qr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Hr=async(e,{cleanup:n,detached:r},t)=>{if(!n||r)return t;let o=Cr(()=>{e.kill()});return t.finally(()=>{o()})};Xn.exports={spawnedKill:Pr,spawnedCancel:Rr,setupTimeout:Nr,validateTimeout:qr,setExitHandler:Hr}});var Yn=l((si,zn)=>{"use strict";var x=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";x.writable=e=>x(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";x.readable=e=>x(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";x.duplex=e=>x.writable(e)&&x.readable(e);x.transform=e=>x.duplex(e)&&typeof e._transform=="function";zn.exports=x});var Zn=l((ai,Qn)=>{"use strict";var{PassThrough:Lr}=require("stream");Qn.exports=e=>{e={...e};let{array:n}=e,{encoding:r}=e,t=r==="buffer",o=!1;n?o=!(r||t):r=r||"utf8",t&&(r=null);let i=new Lr({objectMode:o});r&&i.setEncoding(r);let s=0,a=[];return i.on("data",u=>{a.push(u),o?s=a.length:s+=u.length}),i.getBufferedValue=()=>n?a:t?Buffer.concat(a,s):a.join(""),i.getBufferedLength=()=>s,i}});var Jn=l((ci,M)=>{"use strict";var{constants:Mr}=require("buffer"),Br=require("stream"),{promisify:jr}=require("util"),Fr=Zn(),Ur=jr(Br.pipeline),oe=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function ve(e,n){if(!e)throw new Error("Expected a stream");n={maxBuffer:1/0,...n};let{maxBuffer:r}=n,t=Fr(n);return await new Promise((o,i)=>{let s=a=>{a&&t.getBufferedLength()<=Mr.MAX_LENGTH&&(a.bufferedData=t.getBufferedValue()),i(a)};(async()=>{try{await Ur(e,t),o()}catch(a){s(a)}})(),t.on("data",()=>{t.getBufferedLength()>r&&s(new oe)})}),t.getBufferedValue()}M.exports=ve;M.exports.buffer=(e,n)=>ve(e,{...n,encoding:"buffer"});M.exports.array=(e,n)=>ve(e,{...n,array:!0});M.exports.MaxBufferError=oe});var nt=l((li,et)=>{"use strict";var{PassThrough:Dr}=require("stream");et.exports=function(){var e=[],n=new Dr({objectMode:!0});return n.setMaxListeners(0),n.add=r,n.isEmpty=t,n.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(r),n;function r(i){return Array.isArray(i)?(i.forEach(r),this):(e.push(i),i.once("end",o.bind(null,i)),i.once("error",n.emit.bind(n,"error")),i.pipe(n,{end:!1}),this)}function t(){return e.length==0}function o(i){e=e.filter(function(s){return s!==i}),!e.length&&n.readable&&n.end()}}});var it=l((ui,ot)=>{"use strict";var rt=Yn(),tt=Jn(),Wr=nt(),Kr=(e,n)=>{n===void 0||e.stdin===void 0||(rt(n)?n.pipe(e.stdin):e.stdin.end(n))},Xr=(e,{all:n})=>{if(!n||!e.stdout&&!e.stderr)return;let r=Wr();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r},Ie=async(e,n)=>{if(e){e.destroy();try{return await n}catch(r){return r.bufferedData}}},Ee=(e,{encoding:n,buffer:r,maxBuffer:t})=>{if(!(!e||!r))return n?tt(e,{encoding:n,maxBuffer:t}):tt.buffer(e,{maxBuffer:t})},Vr=async({stdout:e,stderr:n,all:r},{encoding:t,buffer:o,maxBuffer:i},s)=>{let a=Ee(e,{encoding:t,buffer:o,maxBuffer:i}),u=Ee(n,{encoding:t,buffer:o,maxBuffer:i}),c=Ee(r,{encoding:t,buffer:o,maxBuffer:i*2});try{return await Promise.all([s,a,u,c])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},Ie(e,a),Ie(n,u),Ie(r,c)])}},zr=({input:e})=>{if(rt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};ot.exports={handleInput:Kr,makeAllStream:Xr,getSpawnedResult:Vr,validateInputSync:zr}});var at=l((di,st)=>{"use strict";var Yr=(async()=>{})().constructor.prototype,Qr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Yr,e)]),Zr=(e,n)=>{for(let[r,t]of Qr){let o=typeof n=="function"?(...i)=>Reflect.apply(t.value,n(),i):t.value.bind(n);Reflect.defineProperty(e,r,{...t,value:o})}return e},Jr=e=>new Promise((n,r)=>{e.on("exit",(t,o)=>{n({exitCode:t,signal:o})}),e.on("error",t=>{r(t)}),e.stdin&&e.stdin.on("error",t=>{r(t)})});st.exports={mergePromise:Zr,getSpawnedPromise:Jr}});var ut=l((fi,lt)=>{"use strict";var ct=(e,n=[])=>Array.isArray(n)?[e,...n]:[e],eo=/^[\w.-]+$/,no=/"/g,to=e=>typeof e!="string"||eo.test(e)?e:`"${e.replace(no,'\\"')}"`,ro=(e,n)=>ct(e,n).join(" "),oo=(e,n)=>ct(e,n).map(r=>to(r)).join(" "),io=/ +/g,so=e=>{let n=[];for(let r of e.trim().split(io)){let t=n[n.length-1];t&&t.endsWith("\\")?n[n.length-1]=`${t.slice(0,-1)} ${r}`:n.push(r)}return n};lt.exports={joinCommand:ro,getEscapedCommand:oo,parseCommand:so}});var yt=l((pi,O)=>{"use strict";var ao=require("path"),Ce=require("child_process"),co=xn(),lo=vn(),uo=Cn(),fo=Gn(),ie=Ln(),ft=Bn(),{spawnedKill:po,spawnedCancel:mo,setupTimeout:wo,validateTimeout:ho,setExitHandler:yo}=Vn(),{handleInput:go,getSpawnedResult:So,makeAllStream:_o,validateInputSync:xo}=it(),{mergePromise:dt,getSpawnedPromise:bo}=at(),{joinCommand:pt,parseCommand:mt,getEscapedCommand:wt}=ut(),vo=1e3*1e3*100,Io=({env:e,extendEnv:n,preferLocal:r,localDir:t,execPath:o})=>{let i=n?{...process.env,...e}:e;return r?uo.env({env:i,cwd:t,execPath:o}):i},ht=(e,n,r={})=>{let t=co._parse(e,n,r);return e=t.command,n=t.args,r=t.options,r={maxBuffer:vo,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:r.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...r},r.env=Io(r),r.stdio=ft(r),process.platform==="win32"&&ao.basename(e,".exe")==="cmd"&&n.unshift("/q"),{file:e,args:n,options:r,parsed:t}},B=(e,n,r)=>typeof n!="string"&&!Buffer.isBuffer(n)?r===void 0?void 0:"":e.stripFinalNewline?lo(n):n,se=(e,n,r)=>{let t=ht(e,n,r),o=pt(e,n),i=wt(e,n);ho(t.options);let s;try{s=Ce.spawn(t.file,t.args,t.options)}catch(y){let g=new Ce.ChildProcess,S=Promise.reject(ie({error:y,stdout:"",stderr:"",all:"",command:o,escapedCommand:i,parsed:t,timedOut:!1,isCanceled:!1,killed:!1}));return dt(g,S)}let a=bo(s),u=wo(s,t.options,a),c=yo(s,t.options,u),f={isCanceled:!1};s.kill=po.bind(null,s.kill.bind(s)),s.cancel=mo.bind(null,s,f);let w=fo(async()=>{let[{error:y,exitCode:g,signal:S,timedOut:C},W,K,vt]=await So(s,t.options,c),Ae=B(t.options,W),Ge=B(t.options,K),ke=B(t.options,vt);if(y||g!==0||S!==null){let $e=ie({error:y,exitCode:g,signal:S,stdout:Ae,stderr:Ge,all:ke,command:o,escapedCommand:i,parsed:t,timedOut:C,isCanceled:f.isCanceled,killed:s.killed});if(!t.options.reject)return $e;throw $e}return{command:o,escapedCommand:i,exitCode:0,stdout:Ae,stderr:Ge,all:ke,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return go(s,t.options.input),s.all=_o(s,t.options),dt(s,w)};O.exports=se;O.exports.sync=(e,n,r)=>{let t=ht(e,n,r),o=pt(e,n),i=wt(e,n);xo(t.options);let s;try{s=Ce.spawnSync(t.file,t.args,t.options)}catch(c){throw ie({error:c,stdout:"",stderr:"",all:"",command:o,escapedCommand:i,parsed:t,timedOut:!1,isCanceled:!1,killed:!1})}let a=B(t.options,s.stdout,s.error),u=B(t.options,s.stderr,s.error);if(s.error||s.status!==0||s.signal!==null){let c=ie({stdout:a,stderr:u,error:s.error,signal:s.signal,exitCode:s.status,command:o,escapedCommand:i,parsed:t,timedOut:s.error&&s.error.code==="ETIMEDOUT",isCanceled:!1,killed:s.signal!==null});if(!t.options.reject)return c;throw c}return{command:o,escapedCommand:i,exitCode:0,stdout:a,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};O.exports.command=(e,n)=>{let[r,...t]=mt(e);return se(r,t,n)};O.exports.commandSync=(e,n)=>{let[r,...t]=mt(e);return se.sync(r,t,n)};O.exports.node=(e,n,r={})=>{n&&!Array.isArray(n)&&typeof n=="object"&&(r=n,n=[]);let t=ft.node(r),o=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:i=process.execPath,nodeOptions:s=o}=r;return se(i,[...s,e,...Array.isArray(n)?n:[]],{...r,stdin:void 0,stdout:void 0,stderr:void 0,stdio:t,shell:!1})}});var ko={};At(ko,{default:()=>bt,onlyName:()=>xt,openIn:()=>E,terminal:()=>U});module.exports=Gt(ko);var h=require("@raycast/api"),D=require("react");var gt=ae(require("node:process"),1),St=ae(yt(),1);async function b(e){if(gt.default.platform!=="darwin")throw new Error("macOS only");let{stdout:n}=await(0,St.default)("osascript",["-e",e]);return n}var F=require("@raycast/api"),N=ae(require("fs")),Eo=(0,F.getPreferenceValues)(),j=Eo.sshConfig.replace("~",process.env.HOME);function Co(e){let r=N.readFileSync(e,"utf8").split(`
`),t=[],o=null;for(let i of r){let s=i.trim();if(!(s.startsWith("#")||s==="")){if(s.startsWith("Host ")&&s!=="Host *")o!==null&&t.push(o),o={id:t.length.toString(),address:"",name:s.substring(5),user:""};else if(o!==null){let a=s.indexOf(" "),u=s.substring(0,a),c=s.substring(a+1);switch(u){case"HostName":o.address=c;break;case"User":o.user=c;break;case"Port":o.port=c;break;case"IdentityFile":o.sshKey=c;break;case"HostNameKey":break;case"RemoteCommand":o.command=c;break;default:break}}}}return o!==null&&t.push(o),t}function To(e,n){let r="";for(let t of n)r+=`Host ${t.name}
`,r+=`  HostName ${t.address}
`,t.user&&(r+=`  User ${t.user}
`),t.port&&(r+=`  Port ${t.port}
`),t.sshKey&&(r+=`  IdentityFile ${t.sshKey}
`),t.command&&(r+=`  RemoteCommand ${t.command}
`),r+=`
`;N.writeFileSync(e,r.trimEnd())}async function Te(){switch(j){case"localStorage":{let{connections:e}=await F.LocalStorage.allItems();return e?JSON.parse(e):[]}default:return N.existsSync(j)?Co(j):[]}}async function _t(e){switch(j){case"localStorage":await F.LocalStorage.setItem("connections",JSON.stringify(e));break;default:To(j,e);break}}var _=require("react/jsx-runtime"),Pe=(0,h.getPreferenceValues)(),U=Pe.terminal,E=Pe.openin,xt=Pe.onlyname;async function Po(e){let n;if(xt)n=["ssh",e.name].join(" ");else{let a="";e.sshKey&&(a=`-i ${e.sshKey} `);let u="";e.port&&(u=`-p ${e.port} `);let c="",f="";e.command&&(c=`\\"${e.command}\\" `,f="-t");let p=e.address;e.user&&(p=`${encodeURIComponent(e.user)}@${p}`),n=["ssh",f,a,p,u,c].filter(Boolean).join(" ")}let r=`
      -- For the latest version:
      -- https://github.com/DavidMChan/custom-alfred-warp-scripts

      -- Set this property to true to always open in a new window
      property open_in_new_window : ${E=="newWindow"}

      -- Set this property to true to always open in a new tab
      property open_in_new_tab : ${E=="newTab"}

      -- Don't change this :)
      property opened_new_window : false

      -- Handlers
      on new_window()
          tell application "System Events" to tell process "Warp"
              click menu item "New Window" of menu "File" of menu bar 1
              set frontmost to true
          end tell
          delay 0.5
      end new_window

      on new_tab()
          tell application "System Events" to tell process "Warp"
              click menu item "New Tab" of menu "File" of menu bar 1
              set frontmost to true
          end tell
      end new_tab

      on call_forward()
          tell application "Warp" to activate
      end call_forward

      on is_running()
          application "Warp" is running
      end is_running

      on has_windows()
          if not is_running() then return false
          tell application "System Events"
              if windows of process "Warp" is {} then return false
          end tell
          true
      end has_windows

      on send_text(custom_text)
          tell application "System Events"
              keystroke custom_text
          end tell
      end send_text


      -- Main
      if not is_running() then
          call_forward()
          set opened_new_window to true
      else
          call_forward()
          set opened_new_window to false
      end if

      if has_windows() then
          if open_in_new_window and not opened_new_window then
              new_window()
          else if open_in_new_tab and not opened_new_window then
              new_tab()
          end if
      else
          new_window()
      end if


      -- Make sure a window exists before we continue, or the write may fail
      repeat until has_windows()
          delay 0.5
      end repeat
      delay 0.5

      send_text("${n}")
      call_forward()
  `,t=`
    tell application "Terminal"
      do script ""
      activate
      set position of front window to {1, 1}
      set shell to do script "${n}" in window 1
    end tell

    tell application "System Events" to tell process "Terminal"
        set frontmost to true
        windows where title contains "bash"
        if result is not {} then perform action "AXRaise" of item 1 of result
    end tell
  `,o=`
    -- Set this property to true to open in a new window instead of a new tab
      property open_in_new_window : ${E=="newWindow"}

    on new_window()
    	tell application "iTerm" to create window with default profile
    end new_window

    on new_tab()
    	tell application "iTerm" to tell the first window to create tab with default profile
    end new_tab

    on call_forward()
    	tell application "iTerm" to activate
    end call_forward

    on is_running()
    	application "iTerm" is running
    end is_running

    on is_processing()
    	tell application "iTerm" to tell the first window to tell current session to get is processing
    end is_processing

    on has_windows()
    	if not is_running() then return false
    	if windows of application "iTerm" is {} then return false
    	true
    end has_windows

    on send_text(custom_text)
    	tell application "iTerm" to tell the first window to tell current session to write text custom_text
    end send_text

    -- Main
    if has_windows() then
      if open_in_new_window then
        new_window()
      else
        new_tab()
      end if
    else
    	-- If iTerm is not running and we tell it to create a new window, we get two
    	-- One from opening the application, and the other from the command
    	if is_running() then
    		new_window()
    	else
    		call_forward()
    	end if
    end if

    -- Make sure a window exists before we continue, or the write may fail
    repeat until has_windows()
    	delay 0.01
    end repeat

    send_text("${n}")
    call_forward()
  `,i=`
  -- Set this property to true to always open in a new window
  property open_in_new_window : ${E=="newWindow"}

  -- Set this property to true to always open in a new tab
  property open_in_new_tab : ${E=="newTab"}

  -- Don't change this :)
  property opened_new_window : false

  -- Handlers
  on new_window()
      tell application "Alacritty"
          activate
          delay 0.5
          tell application "System Events" to tell process "Alacritty"
              keystroke "n" using {command down}
          end tell
      end tell
      delay 0.5
  end new_window

  on new_tab()
      tell application "Alacritty"
          activate
          tell application "System Events" to tell process "Alacritty"
              keystroke "t" using {command down}
          end tell
      end tell
      delay 0.5
  end new_tab

  on call_forward()
      tell application "Alacritty" to activate
      tell application "Alacritty" to reopen
  end call_forward

  on is_running()
      application "Alacritty" is running
  end is_running

  on has_windows()
      if not is_running() then return false
      tell application "System Events"
          if windows of process "Alacritty" is {} then return false
      end tell
      true
  end has_windows

  on send_text(custom_text)
      tell application "System Events" to tell process "Alacritty"
          keystroke custom_text
      end tell
  end send_text


  -- Main
  if not is_running() then
      call_forward()
      set opened_new_window to true
  else
      call_forward()
      set opened_new_window to false
  end if

  if not has_windows() then
    tell application "Alacritty" to reopen
    delay 0.2
    tell application "Alacritty" to activate
  end if

  if open_in_new_window and not opened_new_window then
      new_window()
  else if open_in_new_tab and not opened_new_window then
      new_tab()
  end if


  -- Make sure a window exists before we continue, or the write may fail
  repeat until has_windows()
      delay 0.5
  end repeat
  delay 0.5
  send_text("${n}
") -- Enter at the end of string
  call_forward()
  `,s=`
  -- Set this property to true to open in a new window instead of a new tab
  property open_in_new_window : ${E=="newWindow"}

  on new_window()
      tell application "System Events" 
          launch application "Hyper"
      end tell
  end new_window

  on new_tab()
      tell application "System Events"
          -- Check if Hyper is already running
          set isRunning to (exists process "Hyper")

          if isRunning then
              -- If Hyper is running, bring it to the front and open a new tab
              tell application "Hyper" to activate
              tell application "System Events" to keystroke "t" using command down
          else
              -- If Hyper isn't running, launch it
              launch application "Hyper"
          end if
      end tell
  end new_tab

  on call_forward()
      tell application "Hyper" to activate
  end call_forward

  on is_running()
      application "Hyper" is running
  end is_running

  -- Hyper doesn't have a direct equivalent to 'is processing', so we'll assume it's ready if it's running
  on is_processing()
      is_running()
  end is_processing

  on has_windows()
      if not is_running() then return false
      -- Hyper always has at least one window, so we'll just check if it's running
      true
  end has_windows

  on send_text(custom_text)
      tell application "System Events"
          keystroke custom_text & return
      end tell
  end send_text

  -- Main
  if has_windows() then
      if open_in_new_window then
          new_window()
      else
          new_tab()
      end if
  else
      -- If Hyper is not running and we tell it to create a new window, we get two
      -- One from opening the application, and the other from the command
      if is_running() then
          new_window()
      else
          call_forward()
      end if
  end if 


  -- Give Hyper some time to load 
  repeat until has_windows()
      delay 0.5
  end repeat
  delay 0.5

  send_text("${n}")
  call_forward()
  `;if(U=="iTerm")try{await b(o)}catch(a){await b(t),console.log(a)}else if(U=="Warp")try{await b(r)}catch(a){await b(t),console.log(a)}else if(U=="Alacritty")try{await(0,h.closeMainWindow)(),await b(i)}catch(a){await b(t),console.log(a)}else if(U=="Hyper")try{await b(s)}catch(a){await b(t),console.log(a)}else await b(t);await(0,h.showHUD)("Success \u2705")}function bt(){let[e,n]=(0,D.useState)([]),[r,t]=(0,D.useState)(!0);(0,D.useEffect)(()=>{(async()=>{t(!0);let i=await Te();n(i),t(!1)})()},[]);async function o(i){let s=await Te();s=s.filter(a=>a.id!==i.id),await _t(s),n(s)}return(0,_.jsx)(h.List,{isLoading:r,children:e.map(i=>(0,_.jsx)(h.List.Item,{actions:(0,_.jsx)(Ao,{item:i,onItemRemove:o}),id:i.id,title:i.name,subtitle:Go(i)},i.name))})}function Ao({item:e,onItemRemove:n}){return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(h.ActionPanel,{children:[(0,_.jsx)(h.ActionPanel.Item,{title:"Connect",onAction:async()=>{await Po(e)}}),(0,_.jsx)(h.ActionPanel.Item,{title:"Remove",onAction:async()=>{await n(e)}})]})})}function Go(e){return`${e.user?e.user+"@":""}${e.address}${e.port?" Port: "+e.port:""}${e.sshKey?" SSH Key: "+e.sshKey:""} ${e.command?' Command: "'+e.command+'"':""}`}0&&(module.exports={onlyName,openIn,terminal});
