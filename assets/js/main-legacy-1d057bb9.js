System.register([],(function(e,t){"use strict";var o=document.createElement("style");return o.textContent='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}*,*:after,*:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body{width:100%;height:100vh;max-width:400px;background:-webkit-gradient(linear,left top,right top,from(#041721),color-stop(50%,#090b18),color-stop(95%,#110710));background:-webkit-linear-gradient(left,#041721 0%,#090b18 50%,#110710 95%);background:-moz-linear-gradient(left,#041721 0%,#090b18 50%,#110710 95%);background:-o-linear-gradient(left,#041721 0%,#090b18 50%,#110710 95%);background:linear-gradient(to right,#041721 0%,#090b18 50%,#110710 95%);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-style:normal;font-weight:400;color:#f3f3f3;text-align:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0 auto}#board{margin:20px auto 0;padding:clamp(4px,1.6vw,8px);background-color:transparent;-webkit-border-radius:.75vmin;-moz-border-radius:.75vmin;border-radius:.75vmin;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(4,1fr);grid-gap:clamp(4px,1.6vw,8px)}.tile{margin:0;padding:.25em;width:100%;height:100%;min-width:clamp(75px,18vw,90px);min-height:clamp(75px,18vw,90px);max-width:90px;max-height:90px;-webkit-border-radius:.5vmin;-moz-border-radius:.5vmin;border-radius:.5vmin;background-color:rgba(121,130,134,.9);font-size:clamp(20px,8.4vw,42px);font-weight:700;color:#201713;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:.25s;-o-transition:.25s;-moz-transition:.25s;transition:.25s;-webkit-animation:show .2s;-moz-animation:show .2s;-o-animation:show .2s;animation:show .2s}@media screen and (max-width: 414px){#board{padding:4px;grid-gap:4px}}h1,h2{margin:0;padding:0;-webkit-font-feature-settings:"ordn" on;-moz-font-feature-settings:"ordn" on;font-feature-settings:"ordn" on;-webkit-font-feature-settings:"pnum" on,"lnum" on;-moz-font-feature-settings:"pnum" on,"lnum" on;font-feature-settings:"pnum" on,"lnum" on;font-size:clamp(26px,11.2vw,56px)}hr{width:100%}.colored{background-color:hsl(25,60%,var(--bg-ligthness));color:hsl(20,25%,var(--text-ligthness))}@-webkit-keyframes show{0%{opacity:.25;scale:0}to{opacity:1;scale:1}}@-moz-keyframes show{0%{opacity:.25;scale:0}to{opacity:1;scale:1}}@-o-keyframes show{0%{opacity:.25;scale:0}to{opacity:1;scale:1}}@keyframes show{0%{opacity:.25;scale:0}to{opacity:1;scale:1}}\n',document.head.appendChild(o),{execute:function(){let e,t=0,o=4,n=4;function i(e,t){if(e.innerText="",e.classList.value="",e.classList.add("tile"),t>0){const o=100-9*Math.log2(t);e.innerText=t.toString(),e.classList.add("colored"),e.style.setProperty("--bg-ligthness",`${o}%`),e.style.setProperty("--text-ligthness",(o<50?90:10)+"%")}}function r(e){return e.filter((e=>0!==e))}function a(e){e=r(e);for(let o=0;o<e.length-1;o++)e[o]===e[o+1]&&(e[o]*=2,e[o+1]=0,t+=e[o]);for(e=r(e);e.length<n;)e.push(0);return e}function s(){if(!function(){for(let t=0;t<o;t++)for(let o=0;o<n;o++)if(0===e[t][o])return!0;return!1}())return;let t=!1;for(;!t;){let i=Math.floor(Math.random()*o),r=Math.floor(Math.random()*n);if(0===e[i][r]){e[i][r]=2;let o=document.getElementById(i.toString()+"-"+r.toString());o.innerText="2",o.classList.add("colored"),o.style.setProperty("--bg-ligthness","90%"),o.style.setProperty("--text-ligthness","10%"),t=!0}}}document.addEventListener("keyup",(r=>{switch(r.code){case"ArrowLeft":!function(){for(let t=0;t<o;t++){let o=e[t];o=a(o),e[t]=o;for(let r=0;r<n;r++)i(document.getElementById(t.toString()+"-"+r.toString()),e[t][r])}}(),s();break;case"ArrowRight":!function(){for(let t=0;t<o;t++){let o=e[t];o.reverse(),o=a(o),e[t]=o.reverse();for(let r=0;r<n;r++)i(document.getElementById(t.toString()+"-"+r.toString()),e[t][r])}}(),s();break;case"ArrowUp":!function(){for(let t=0;t<n;t++){let n=[e[0][t],e[1][t],e[2][t],e[3][t]];n=a(n);for(let r=0;r<o;r++)e[r][t]=n[r],i(document.getElementById(r.toString()+"-"+t.toString()),e[r][t])}}(),s();break;case"ArrowDown":!function(){for(let t=0;t<n;t++){let n=[e[0][t],e[1][t],e[2][t],e[3][t]];n.reverse(),n=a(n),n.reverse();for(let r=0;r<o;r++)e[r][t]=n[r],i(document.getElementById(r.toString()+"-"+t.toString()),e[r][t])}}(),s()}document.getElementById("score").innerText=t})),window.addEventListener("DOMContentLoaded",(()=>{!function(){e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(let t=0;t<o;t++)for(let o=0;o<n;o++){let n=document.createElement("div");n.id=t.toString()+"-"+o.toString(),i(n,e[t][o]),document.getElementById("board").append(n)}s(),s()}()}))}}}));
