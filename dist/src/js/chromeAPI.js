export default class APIchrome{constructor(){let e={protocol:"chrome:",hostname:"chrome.google.com"};this.filter=(t=>{let n=new URL(t.url);if(t.title==n.hostname)return!1;for(let t in e)if(n[t]==e[t])return!1;return!0})}send(e,t=null){null==t?chrome.runtime.sendMessage(e):chrome.tabs.sendMessage(t,e)}async exeScript(e,t,n=100){return new Promise((r,o)=>{let s;chrome.tabs.executeScript(e,t,function(e){s=null,r(e)}),s=setTimeout(function(){r("timeout")},n)})}async getTab(e={}){return"active"==e&&(e={active:!0,lastFocusedWindow:!0}),await new Promise((t,n)=>{"number"==typeof e?chrome.tabs.get(e,e=>{t(e&&e.url?e:"empty")}):chrome.tabs.query(e,e=>{t(e&&e.length>0?e:"empty")})})}async getStorage(e=null){return await new Promise(async(t,n)=>{chrome.storage.sync.get(e,n=>{n=null==e?n:n[e],t(n?n:"empty")})})}async removeStorage(e=null){return new Promise((t,n)=>{e?chrome.storage.sync.remove(e,function(){t()}):chrome.storage.sync.clean(function(){t()})})}async setStorage(e,t){let n=await this.getStorage(e);return new Promise((r,o)=>{chrome.storage.sync.set({[e]:t},function(){r(n=={}?"setted":"modified")})})}async onUpdated(e){chrome.tabs.onUpdated.addListener((t,n)=>{if("complete"==n.status)for(let r in e)e[r]({tabId:t,info:n})})}onMessages(e){e&&chrome.runtime.onMessage.addListener(async(t,n,r)=>{let o=!0;for(let n in e)if(t.action){if(t.action==n){if("await"!=t.response)return e[n](t),!0;r(e[n](t));o=!1;break}}else if(t.verifyURL){e.verifyURL(t),o=!1;break}1==o&&e.default&&e.default(t)})}async onCommand(){chrome.commands.onCommand.addListener(async e=>{if("createNote"==e){await this.requestIndex("selection");this.sendContentScript({})}})}};