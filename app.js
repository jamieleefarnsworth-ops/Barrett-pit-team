'use strict';
const STORAGE_KEY='barrett-racing:psi:v1';
const inputs=[...document.querySelectorAll('[data-tire]')];
const status=document.getElementById('status');
function read(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')}catch{return {}}}
function save(){const values={};for(const input of inputs){values[input.dataset.tire]=input.value}try{localStorage.setItem(STORAGE_KEY,JSON.stringify(values));status.textContent='Pressures saved on this device.'}catch{status.textContent='Could not save pressures. Check browser storage settings.'}}
const values=read();for(const input of inputs){const v=values[input.dataset.tire];if(v!==undefined)input.value=v;input.addEventListener('input',save)}
document.getElementById('save').addEventListener('click',save);
document.getElementById('clear').addEventListener('click',()=>{if(!confirm('Clear all four tire pressures?'))return;for(const input of inputs)input.value='';save()});
if('serviceWorker'in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{status.textContent='Offline mode unavailable; check HTTPS and refresh.'}))}
