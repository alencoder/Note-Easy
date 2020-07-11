class controllerLoad extends dragDrop{constructor(){super(),this.id=this.getID(),this.svgIcons={config:'<svg class="configSvgEx0A" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/></svg>',disket:'<?xml version="1.0" encoding="UTF-8"?>\n<svg class="disketSvgEx0A" width="438.53px" height="438.53px" enable-background="new 0 0 438.533 438.533" version="1.1" viewBox="0 0 438.533 438.533" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n  <path d="m432.82 121.05c-3.806-9.132-8.377-16.367-13.709-21.695l-79.941-79.942c-5.325-5.325-12.56-9.895-21.696-13.704-9.131-3.805-17.508-5.708-25.12-5.708h-264.95c-7.611 0-14.084 2.663-19.414 7.993-5.33 5.327-7.992 11.799-7.992 19.414v383.72c0 7.617 2.662 14.089 7.992 19.417 5.33 5.325 11.803 7.991 19.414 7.991h383.72c7.618 0 14.089-2.666 19.417-7.991 5.325-5.328 7.987-11.8 7.987-19.417v-264.95c0-7.616-1.902-15.99-5.708-25.129zm-250.1-75.372c0-2.474 0.905-4.611 2.714-6.423 1.807-1.804 3.949-2.708 6.423-2.708h54.819c2.468 0 4.609 0.902 6.417 2.708 1.813 1.812 2.717 3.949 2.717 6.423v91.362c0 2.478-0.91 4.618-2.717 6.427-1.808 1.803-3.949 2.708-6.417 2.708h-54.819c-2.474 0-4.617-0.902-6.423-2.708-1.809-1.812-2.714-3.949-2.714-6.427v-91.362zm146.18 356.31h-219.27v-109.64h219.27v109.64zm73.094 0h-36.559v-118.77c0-7.617-2.663-14.085-7.991-19.417-5.328-5.328-11.8-7.994-19.41-7.994h-237.54c-7.614 0-14.087 2.666-19.417 7.994-5.327 5.328-7.992 11.8-7.992 19.417v118.77h-36.545v-365.45h36.544v118.77c0 7.615 2.662 14.084 7.992 19.414 5.33 5.327 11.803 7.993 19.417 7.993h164.46c7.61 0 14.089-2.666 19.41-7.993 5.325-5.327 7.994-11.799 7.994-19.414v-118.77c2.854 0 6.563 0.95 11.136 2.853 4.572 1.902 7.806 3.805 9.709 5.708l80.232 80.23c1.902 1.903 3.806 5.19 5.708 9.851 1.909 4.665 2.857 8.33 2.857 10.994v255.81z"/>\n</svg>'}}async getID(t){let e,o=document.querySelectorAll(".noteEx0A");if(o.length>0?(e=o[o.length-1].idnote,e++):e=1,t){let o=!0,n=e;return await new Promise(async(e,i)=>{do{await new Promise(async(e,o)=>{"empty"!=await this.getStorage([t.url+n])?o():e(n)}).then(function(t){o=!1,e(t)},()=>{n++})}while(1==o)})}return e}cleanNotesPageDynamic(){document.querySelectorAll(".removeEx0A").forEach(function(t,e){""!=document.querySelector("#paperEx"+t.id.replace("removeEx","")).value&&t.delete()})}async loadNotes(t){let e=async(t,e,o=!1)=>{let n=0,i=0;for(let s=1;s<=300;s++){const r=await this.getStorage(e+s);if((n="empty"!=r?0:n++)>t)break;if("empty"!=r){let t;(t=0==o?document.getElementById("noteEx"+r.id):document.getElementById("anchor-noteEx"+r.id))||(i++,this.createNote(r,s,o))}}return i};e(50,t.url),e(50,this.getAnchorUrl(t.url),!0)}}class noteText extends controllerLoad{constructor(){super(),this.temp=[],this.default={position:"center",width:"4.3cm",height:"4.3cm",fontSize:"28px",textContent:""}}async setConfigContainer(t,e,o,n){t.menu.style.backgroundColor=o.noteColor,this.on(t.iconConfig,"click",()=>{this.animate(t.menu,{opacity:"0",visibility:"hidden"},{opacity:"1",visibility:"visible"},60,!0)}),window.addEventListener("click",e=>{t.menu.contains(e.target)||(this.css(t.menu,{opacity:"0",visibility:"hidden"}),t.menu.toggleAction="open")});let i,s,r;i=(n=0==n?"":"anchor-")+"anchorDomainEx"+e,s=n+"viewUrlEx"+e,r=n+"colorsEx"+e,t.menu.insertAdjacentHTML("beforeend",'\n            <span>Texto</span><br>\n              <input type="number" value="'+t.text.style.fontSize.replace("px","")+'" /> px<br>\n            <span>Color</span><br>\n              <div class="colorsEx0A" id="'+r+'">\n              \n              </div>\n              <span class="anchorDomainEx0A"><label>Anclar al sub/dominio</label> <input type="checkbox"  id="'+i+'">\n                <div class="viewUrlEx0A" id="'+s+'"></div>\n              </span>\n\n    ')}async createNote(t,e="auto",o=!1){let n="auto"==e?await this.getID(t):e;this.id=n,this.requestFormat(t);let i=this.getModelTextNote(n,t,o);return this.setRequest(i,t),this.setConfigContainer(i,n,t,o),this.onDelete(i,n,o),this.onAutoSave(i,n,t),this.onShowInfo(i,n),this.setNoteDOM(i.fusion()),this.onDrag(i.note.id,i.area.id),this.setPosition(i,t.position),this.onConfigColor(i,t,n,o),this.onConfigTenxSize(i,t,n),this.onConfigAnchorDomain(t,n,i,o),document.querySelector("#"+i.iconConfig.id+" svg").style.fill=t.fontColor,document.querySelector("#"+i.save.id+" svg").style.fill=t.fontColor,n}getAnchorUrl(t){let e;for(let o=t.length-1;o>=0;o--)if("/"==t[o]){e=t.substring(0,o)+"/*";break}return e}onConfigAnchorDomain(t,e,o,n){let i,s;0==n?(i=document.querySelector("#anchorDomainEx"+e),s=document.querySelector("#viewUrlEx"+e)):(i=document.querySelector("#anchor-anchorDomainEx"+e),s=document.querySelector("#anchor-viewUrlEx"+e));let r=this.getAnchorUrl(t.url);i.checked=t.anchorDomain,o.span.idExtension=0==i.checked?t.url+e:r+e,s.textContent=1==i.checked?this.getAnchorUrl(t.url):"",t.urlAnchor=s.textContent,i.addEventListener("change",async()=>{t.anchorDomain=i.checked,0==i.checked?(t.urlAnchor="",s.textContent="",this.removeStorage(r+e),this.send({action:"sendUrlContentScript",response:"urlContentScript"},null,n=>{t.url=n.url,o.span.idExtension=t.url+e,this.saveTextNote(o,t,e,50)})):(o.span.idExtension=r+e,t.urlAnchor=r,s.textContent=t.urlAnchor,this.removeStorage(t.url+e),this.saveTextNote(o,t,e,50))},!1)}async saveTextNote(t,e,o,n=10){""!=t.text.value&&(this.temp[o]&&clearTimeout(this.temp[o]),this.temp[o]=setTimeout(()=>{let o=t.note.idnote,n=e.urlAnchor&&""!=e.urlAnchor?e.urlAnchor:e.url;this.setStorage(n+o,{fontSize:t.text.style.fontSize,fontColor:e.fontColor,noteColor:e.noteColor,text:t.text.value,id:o,url:e.url,position:{x:t.note.style.left,y:t.note.style.top},width:t.text.clientWidth+"px",height:t.text.clientHeight+"px",tackColor:e.tackColor,anchorDomain:e.anchorDomain,urlAnchor:e.urlAnchor}),t.info.show(null)},n))}onDelete(t,e,o){t.span.delete=(()=>{0==o?document.body.removeChild(document.getElementById("areaEx"+e)):document.body.removeChild(document.getElementById("anchor-areaEx"+e))}),t.span.addEventListener("click",async()=>{await this.removeStorage([t.span.idExtension]),t.span.delete()},!1)}onShowInfo(t,e){t.info.show=function(e,o=2e3){return this.textContent=e,null!=e?(this.style.setProperty("height","auto","important"),this.style.setProperty("padding","2px 4px","important")):t.save.style.opacity="1",setTimeout(()=>{this.textContent="",this.style.setProperty("height","0","important"),this.style.setProperty("padding","0px 0px","important"),t.save.style.opacity="0"},o)}}setNoteDOM(t){t.style.height=document.body.clientHeight+"px";document.body.insertBefore(t,(()=>{let t=this.getID();return 1==t?document.body.children[0]:document.body.children[t]})())}onAutoSave(t,e,o){t.saveAuto=(n=>{t.text.addEventListener("keyup",n=>{this.saveTextNote(t,o,e,2e3)}),t.note.addEventListener("dragend",n=>{this.saveTextNote(t,o,e)}),((t,e,o,n)=>{var i=e.text.clientWidth,s=e.text.clientHeight;e.text.addEventListener("mouseup",()=>{e.text.clientWidth==i&&e.text.clientHeight==s||this.saveTextNote(e,o,n,t),i=e.text.clientWidth,s=e.text.clientHeight})})(50,t,o,e)}),t.saveAuto(2e3)}setRequest(t,e){t.note.style.background=e.noteColor,t.text.value=e.text,this.css(t.text,{color:e.fontColor,width:e.width,height:e.height,fontSize:e.fontSize,lineHeight:e.fontSize}),t.menu.style.color=e.fontColor,t.tack.style.backgroundColor=e.tackColor}getModelTextNote(t,e,o){let n=(o,n,i)=>{let s=document.createElement(o);return i=1==i?"anchor-":"",s.classList+=n+"Ex0A notranslate",s.id=i+n+"Ex"+t,s.idnote=t,s.idExtension=e.url+s.idnote,s},i=this.svgIcons;return{area:n("div","area",o),note:n("div","note",o),span:n("span","remove",o),tack:n("div","tack",o),info:n("span","message",o),text:n("textarea","paper",o),iconConfig:n("button","config",o),menu:n("ul","menuConfig",o),save:n("span","saveIcon",o),fusion:function(){return this.tack.appendChild(this.span),this.note.appendChild(this.info),this.note.appendChild(this.tack),this.save.insertAdjacentHTML("beforeend",i.disket),this.note.appendChild(this.save),this.note.appendChild(this.text),this.iconConfig.insertAdjacentHTML("beforeend",i.config),this.note.appendChild(this.iconConfig),this.note.appendChild(this.menu),this.area.appendChild(this.note),this.area}}}requestFormat(t){t.position=t.position?t.position:this.default.position,t.width=t.width?t.width:this.default.width,t.height=t.height?t.height:this.default.height,t.fontSize=t.fontSize?t.fontSize:this.default.fontSize,t.text=t.text?t.text:this.default.textContent}setPosition(t,e){"center"==e?(t=>{this.css(t.note,{position:"absolute",top:window.scrollY+t.note.clientHeight/2+"px",left:t.note.offsetLeft+"px",visibility:"visible"}),t.area.style.visibility="hidden"})(t):((e,o)=>{this.css(t.note,{position:"absolute",top:o,left:e,visibility:"visible"}),t.area.style.visibility="hidden"})(e.x,e.y)}onConfigTenxSize(t,e,o){let n=document.querySelector("#"+t.menu.id+" input");this.on(n,"change",()=>{this.css(t.text,{fontSize:n.value+"px",lineHeight:n.value+"px"}),this.saveTextNote(t,e,o)})}async onConfigColor(t,e,o,n){let i=(t,o,i)=>{let s=document.createElement("div");s.style.backgroundColor=t.note,n=0==n?"":"anchor-",document.querySelector("#"+n+"colorsEx"+i).appendChild(s),s.addEventListener("click",()=>{this.css([o.note,o.menu],{backgroundColor:t.note,color:t.font}),o.tack.style.backgroundColor=t.tack,o.text.style.color=t.font,document.querySelector("#"+o.iconConfig.id+" svg").style.fill=t.font,document.querySelector("#"+o.save.id+" svg").style.fill=t.font,e.tackColor=t.tack,e.noteColor=t.note,e.fontColor=t.font,this.saveTextNote(o,e,i,50)},!1)},s=await this.getStorage("pallete-default"),r=await this.getStorage("pallete-user");for(let e in s.reverse())i(s[e],t,o);for(let e in r)i(r[e],t,o)}}