(() => {
'use strict';
const D=window.EXHIBIT;
const chapters=['journey','features','technology','future'];
const labels=['JOURNEY','FEATURES','TECHNOLOGY','FUTURE'];
let active='journey',tour=null,remaining=25,lastFocus=null,detailKey=null,detailHistory=[];
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
$('.skip').addEventListener('click',e=>{e.preventDefault();$('#main').focus();});
const num=n=>String(n+1).padStart(2,'0');
const icons={scan:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M7 12h10M12 7v10"/>',layers:'<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',text:'<path d="M4 4h16M8 4v16m8-16v16M4 11h16M4 20h16"/>',archive:'<path d="M3 4h18v5H3zM5 9v12h14V9M9 13h6"/>',people:'<circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3m1-17a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 5v2"/>',chip:'<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v5m6-5v5M9 18v5m6-5v5M1 9h5m-5 6h5m12-6h5m-5 6h5"/>',move:'<path d="M12 3v18M3 12h18M8 7l4-4 4 4M8 17l4 4 4-4M7 8l-4 4 4 4m10-8 4 4-4 4"/>'};

Object.assign(icons,{
 camera:'<path d="M3 7h4l2-3h6l2 3h4v14H3z"/><circle cx="12" cy="13" r="4"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
 contrast:'<circle cx="12" cy="12" r="9"/><path d="M12 3v18M12 7h5m-5 4h8m-8 4h7"/>',
 blur:'<circle cx="8" cy="8" r="4"/><circle cx="16" cy="8" r="3"/><circle cx="8" cy="16" r="3"/><circle cx="16" cy="16" r="2"/>',
 edge:'<path d="M3 20h5v-6h5V8h8M3 14h3V8h6V3"/>',
 thermal:'<path d="M9 14V5a3 3 0 0 1 6 0v9a5 5 0 1 1-6 0Z"/><path d="M12 7v10m5-10h4m-4 4h3"/>',
 range:'<path d="M4 5v14m16-14v14M4 12h16m-12-3-3 3 3 3m8-6 3 3-3 3"/>',
 cloud:'<path d="M6 18a4 4 0 0 1-1-8 7 7 0 0 1 13-2 5 5 0 0 1 0 10H6Z"/>',
 database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',
 book:'<path d="M12 5C8 2 4 3 2 4v16c3-2 7-2 10 0 3-2 7-2 10 0V4c-3-1-7-2-10 1Zm0 0v15M5 8h4m-4 4h4m6-4h4m-4 4h4"/>',
 cube:'<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Zm0 10 9-5M12 12 3 7m9 5v10"/>',
 relief:'<path d="M2 16c4-8 6 7 10-1s6 1 10-7M2 11c4-8 6 7 10-1s6 1 10-7M2 21c4-8 6 7 10-1s6 1 10-7"/>',
 file:'<path d="M5 2h9l5 5v15H5V2Zm9 0v6h5M8 12h8m-8 4h8"/>',
 laser:'<path d="m4 3 6 6m-5 2 6-6M11 11l9 9m-8-2 2-6 6-2M2 22h20"/>',
 cnc:'<path d="M3 3h18M8 3v6h8V3m-4 6v7m-4-2 4 4 4-4M3 22h18v-3H3z"/>',
 voice:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5m-4 0h8"/>',
 language:'<path d="M3 5h12M9 2v3m4 0c-1 6-4 9-9 11m1-8c1 3 4 6 8 8m0 6 5-12 5 12m-8-4h6"/>',
 check:'<path d="M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6l-9-4Z"/><path d="m7 12 3 3 7-7"/>',
 model:'<circle cx="12" cy="12" r="3"/><circle cx="4" cy="4" r="2"/><circle cx="20" cy="4" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="20" cy="20" r="2"/><path d="m6 6 4 4m4 4 4 4M6 18l4-4m4-4 4-4"/>',
 tools:'<path d="m3 21 9-9M15 2l-2 5 4 4 5-2a7 7 0 0 1-10 6L5 22l-3-3 7-7A7 7 0 0 1 15 2Z"/>',
 crop:'<path d="M7 2v15h15M2 7h15v15M11 3h10v10"/>',
 route:'<circle cx="5" cy="5" r="3"/><circle cx="19" cy="19" r="3"/><path d="M8 5h9a4 4 0 0 1 0 8H7a4 4 0 0 0 0 8h8"/>'
});
function itemIcon(title,fallback){
 const rules=[[/camera|capture the evidence/i,'camera'],[/RTI|reflectance|controlled light/i,'sun'],[/Gaussian/i,'blur'],[/CLAHE|contrast|enhancement/i,'contrast'],[/Sobel/i,'edge'],[/Thermal/i,'thermal'],[/Ultrasonic|VL53|dimension|distance/i,'range'],[/Claude|cloud/i,'cloud'],[/Kaggle|archive|metadata|history/i,'database'],[/Prinsep|reference|script identification|transcription/i,'book'],[/3D|reconstruction/i,'cube'],[/topograph|surface analysis/i,'relief'],[/laser/i,'laser'],[/CNC/i,'cnc'],[/report/i,'file'],[/language|translation/i,'language'],[/voice/i,'voice'],[/review|uncertainty|confidence|priority/i,'check'],[/CNN|brahmiGAN|Brahmi recognition/i,'model'],[/modular|frame|power|motor|servo/i,'tools'],[/target|crop/i,'crop'],[/workflow|orchestration|prepare supporting/i,'route'],[/Qwen|laptop|Arduino/i,'chip']];
 return rules.find(([r])=>r.test(title))?.[1]||fallback;
}
const icon=k=>`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[k]||icons.layers}</svg>`;
function showDialog(kicker,title,body,options={}){
 stopTour();const dialog=$('#detail-dialog');
 if(!dialog.open)lastFocus=document.activeElement;
 if(!options.catalogue){detailKey=null;detailHistory=[];}
 dialog.classList.toggle('wide-detail',!!options.wide);
 $('#dialog-content').innerHTML=(options.icon?'<span class="detail-emblem">'+icon(options.icon)+'</span>':'')+'<p class="eyebrow">'+esc(kicker)+'</p><h2 id="dialog-title" tabindex="-1">'+esc(title)+'</h2>'+body;
 if(!dialog.open)dialog.showModal();dialog.scrollTop=0;
 if(options.catalogue)$('#dialog-title').focus({preventScroll:true});
}
function closeDialog(){$('#detail-dialog').close();}
$('#detail-dialog .dialog-close').addEventListener('click',closeDialog);
$('#detail-dialog').addEventListener('click',e=>{if(e.target===$('#detail-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDialog();}});
$('#detail-dialog').addEventListener('close',()=>{detailKey=null;detailHistory=[];if(lastFocus&&document.contains(lastFocus))lastFocus.focus({preventScroll:true});});
function toast(message){$('#toast').textContent=message;$('#toast').hidden=false;clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('#toast').hidden=true,4500);}
function selectEdp(i){const d=D.edp[i];$$('.edp-step').forEach((b,j)=>{b.classList.toggle('selected',j===i);b.setAttribute('aria-pressed',String(j===i));});$('#edp-detail').innerHTML=`<span class="detail-number" aria-hidden="true">${num(i)}</span><p class="eyebrow">${esc(d.label)}</p><h2>${esc(d.title)}</h2><p>${esc(d.body)}</p><div class="takeaway"><span>DESIGN REQUIREMENT</span><p>${esc(d.takeaway)}</p></div><button class="text-button" data-edp-more="${i}">Explore this stage <span aria-hidden="true">+</span></button>`;}
$('#edp-steps').setAttribute('role','group');$('#edp-steps').setAttribute('aria-label','Engineering Design Process stages');
$$('.edp-step').forEach((b,i)=>b.addEventListener('click',()=>{stopTour();selectEdp(i);}));
$('#edp-detail').addEventListener('click',e=>{const b=e.target.closest('[data-edp-more]');if(b){const d=D.edp[Number(b.dataset.edpMore)];showDialog('OUR ENGINEERING DESIGN PROCESS',d.label,`<p>${esc(d.body)}</p><p>${esc(d.evidence)}</p><div class="dialog-note"><h3>What this means for Punaruttham</h3><p>${esc(d.takeaway)}</p></div>`);}});
$('.edp-card').insertAdjacentHTML('beforeend',`<div class="print-only">${D.edp.map((d,i)=>`<p><strong>${num(i)} ${esc(d.label)}.</strong> ${esc(d.takeaway)}</p>`).join('')}</div>`);
$('#teamwork-button').addEventListener('click',()=>showDialog('OUR TEAM','Different strengths. Shared ownership.',`<div class="team-dialog-grid"><div><h3>Amor · hardware & mechanics</h3><p>Rover body, modular construction, mechanical integration, scanning movement and the lift.</p></div><div><h3>Sankalp · software & intelligence</h3><p>Target detection, mode selection, interpretation, confidence displays, reports and digital records.</p></div></div><div class="dialog-note"><h3>At the interfaces, we work together</h3><p>Thermal/depth sensing, camera viewpoints, damage mapping and automated lift alignment connect our two areas. The complete scan-to-archive workflow depends on both.</p></div><p>Our presentation connects explanation and operation: one teammate explains the problem and engineering decisions while the other demonstrates the system. The EDP gives us a shared language for choosing, testing and improving.</p>`));

const catalogue=new Map();
const byTechTitle=new Map();
D.featureGroups.forEach((g,i)=>g.items.forEach((f,j)=>catalogue.set('feature:'+i+':'+j,{kind:'feature',group:g,index:j,groupIndex:i,title:f[0],lead:f[1],body:f[2],benefit:f[3],icon:itemIcon(f[0],g.icon)})));
D.technology.forEach((g,i)=>g.components.forEach((c,j)=>{const key='technology:'+i+':'+j;catalogue.set(key,{kind:'technology',group:g,index:j,groupIndex:i,title:c[0],lead:c[1],body:c[2],benefit:g.description,icon:itemIcon(c[0],g.icon)});byTechTitle.set(c[0],key);}));
function linkedCard(title,text,target){const key=byTechTitle.get(target);return key?'<button class="explanation-card" data-detail-key="'+esc(key)+'"><span class="small-icon">'+icon(itemIcon(target,'layers'))+'</span><h3>'+esc(title)+'</h3><p>'+esc(text)+'</p><span class="mini-more" aria-hidden="true">+</span></button>':'<div class="explanation-card"><h3>'+esc(title)+'</h3><p>'+esc(text)+'</p></div>';}
function relatedLinks(titles){return titles.filter(t=>byTechTitle.has(t)&&byTechTitle.get(t)!==detailKey).map(t=>'<button class="related-link" data-detail-key="'+esc(byTechTitle.get(t))+'">'+icon(itemIcon(t,'layers'))+'<span>'+esc(t)+'</span><span aria-hidden="true">+</span></button>').join('');}
function workflowHTML(){return '<div class="workflow-grid">'+D.workflow.map((w,i)=>'<section class="workflow-step"><span class="workflow-number">'+num(i)+'</span><h3>'+esc(w.title)+'</h3><p>'+esc(w.text)+'</p><div class="workflow-links">'+relatedLinks(w.links)+'</div></section>').join('')+'</div><div class="fallback-pair"><div><span>API UNAVAILABLE</span><strong>Use local Qwen</strong></div><div><span>BRAHMI STILL UNRESOLVED</span><strong>Consult the Prinsep chart</strong></div></div>';}
function extraExplanation(title){const d=D.details?.[title];if(!d)return '';if(d.workflow)return workflowHTML();return '<section class="explanation-section"><h3 class="explanation-heading">'+esc(d.heading)+'</h3>'+(d.intro?'<p>'+esc(d.intro)+'</p>':'')+'<div class="explanation-grid">'+d.cards.map(c=>linkedCard(...c)).join('')+'</div></section>'+(d.related?.length?'<div class="related-section"><span class="eyebrow">CONNECTED IN THE SYSTEM</span><div class="related-links">'+relatedLinks(d.related)+'</div></div>':'');}
function openDetail(key,remember=false,preserveHistory=false){
 const item=catalogue.get(key);if(!item)return;
 if(remember&&detailKey&&detailKey!==key)detailHistory.push(detailKey);else if(!remember&&!preserveHistory)detailHistory=[];
 detailKey=key;
 const siblings=item.kind==='feature'?item.group.items:item.group.components;
 const base=item.kind+':'+item.groupIndex+':';
 const special=!!D.details?.[item.title];
 const back=detailHistory.length?'<button class="detail-back" data-detail-back>Back to previous explanation</button>':'';
 const body=back+'<p class="dialog-lead">'+esc(item.lead)+'</p><p class="detail-body">'+esc(item.body)+'</p>'+extraExplanation(item.title)+(special?'':'<div class="dialog-note"><h3>'+(item.kind==='feature'?'Why it matters':'Its place in the system')+'</h3><p>'+esc(item.benefit)+'</p></div>')+'<div class="detail-pagination"><button data-detail-key="'+base+((item.index+siblings.length-1)%siblings.length)+'">Previous item</button><span>'+String(item.index+1)+' / '+siblings.length+' · '+esc(item.group.title||item.group.name)+'</span><button data-detail-key="'+base+((item.index+1)%siblings.length)+'">Next item</button></div>';
 showDialog((item.kind==='feature'?'FEATURES':'TECHNOLOGY')+' / '+(item.group.title||item.group.name),item.title,body,{catalogue:true,wide:special,icon:item.icon});
}
function showWorkflow(){detailKey=null;detailHistory=[];showDialog('THE COMPLETE SYSTEM','From capture to a lasting record.','<p class="dialog-lead">The laptop connects the camera, supporting image views, interpretation and reusable outputs.</p>'+workflowHTML(),{wide:true,icon:'route'});}
$('#dialog-content').addEventListener('click',e=>{const link=e.target.closest('[data-detail-key]');if(link){openDetail(link.dataset.detailKey,!link.closest('.detail-pagination'));return;}if(e.target.closest('[data-detail-back]')){const key=detailHistory.pop();if(key){openDetail(key,false,true);}}});

const sourceLink=([label,url])=>'<a class="source-link" href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">'+esc(label)+' ↗</a>';
let faqCategory='All topics';
function showFAQs(){
 faqCategory='All topics';
 const categories=['All topics',...new Set(D.faqs.map(f=>f.category))];
 const stats=D.evidence.stats.map(s=>'<article class="evidence-stat"><strong>'+esc(s.value)+'</strong><h3>'+esc(s.label)+'</h3><p>'+esc(s.context)+'</p>'+sourceLink(s.source)+'</article>').join('');
 const filters=categories.map((c,i)=>'<button class="faq-filter" data-faq-category="'+esc(c)+'" aria-pressed="'+String(i===0)+'">'+esc(c)+'</button>').join('');
 const items=D.faqs.map((f,i)=>'<details class="faq-item" data-faq-item="'+i+'"><summary>'+esc(f.q)+'</summary><div class="faq-answer">'+f.a.map(a=>'<p>'+esc(a)+'</p>').join('')+(f.sources?.length?'<div class="faq-source-row">'+f.sources.map(sourceLink).join('')+'</div>':'')+(f.related?.length?'<div class="related-links">'+relatedLinks(f.related)+'</div>':'')+'</div></details>').join('');
 showDialog('THE PROBLEM, THE EVIDENCE & OUR APPROACH','Questions worth asking.','<p class="dialog-lead faq-intro">Explore why inscription preservation matters, how it is done today and where Punaruttham fits.</p><div class="evidence-stats">'+stats+'</div><p class="evidence-scope">National programme context · These are ASI figures, not Punaruttham results. Dates and collection scope matter.</p><div class="faq-tools"><div class="faq-search"><label for="faq-search">Search the questions and answers</label><input id="faq-search" type="search" placeholder="Try Brahmi, RTI, museums or data…" autocomplete="off"></div><span class="faq-count" role="status" aria-live="polite">'+D.faqs.length+' questions</span></div><div class="faq-filters" role="group" aria-label="FAQ topics">'+filters+'</div><div class="faq-list">'+items+'</div><p class="faq-empty" hidden>No matching questions. Try another word or choose All topics.</p><p class="faq-footnote"><strong>Sources checked '+esc(D.evidence.checked)+'.</strong> Project answers describe the team’s International WRO system. External references support the heritage context and established methods.</p>',{wide:true,icon:'book'});
 $('#faq-search').addEventListener('input',filterFAQs);
 $$('.faq-filter').forEach(b=>b.addEventListener('click',()=>{faqCategory=b.dataset.faqCategory;filterFAQs();}));
}
function filterFAQs(){
 const query=$('#faq-search').value.trim().toLocaleLowerCase();let count=0;
 $$('.faq-item').forEach(el=>{const f=D.faqs[Number(el.dataset.faqItem)];const match=(faqCategory==='All topics'||faqCategory===f.category)&&[f.q,...f.a,f.category].join(' ').toLocaleLowerCase().includes(query);el.hidden=!match;if(match)count++;});
 $$('.faq-filter').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.faqCategory===faqCategory)));
 $('.faq-count').textContent=count+' '+(count===1?'question':'questions');$('.faq-empty').hidden=count!==0;
}
$('#faq-button').addEventListener('click',showFAQs);

const featureTotal=D.featureGroups.reduce((n,g)=>n+g.items.length,0);
$('#features-panel').innerHTML=`<div class="section-heading"><div><p class="eyebrow">02 / FEATURES & CAPABILITIES</p><h1 id="features-title">What Punaruttham does.</h1><p class="section-intro">Select any icon to explore the capability.</p></div><div class="section-stamp"><strong>${featureTotal}</strong><span>CONNECTED CAPABILITIES<small>One scan-to-archive workflow</small></span></div></div><div class="icon-directory feature-directory">${D.featureGroups.map((g,i)=>`<section class="directory-column"><div class="directory-heading"><span>${num(i)}</span><div><h2>${esc(g.title)}</h2><p>${esc(g.subtitle)}</p></div></div><div class="directory-items">${g.items.map((f,j)=>`<button class="directory-item" data-feature-group="${i}" data-feature="${j}"><span class="directory-icon">${icon(itemIcon(f[0],g.icon))}</span><span>${esc(f[0])}</span><span class="directory-plus" aria-hidden="true">+</span></button>`).join('')}</div></section>`).join('')}</div><div class="principle-strip"><span>OUR PRESERVATION PRINCIPLE</span><p>Original evidence stays visible. Proposed reconstructions stay distinguishable. Experts remain part of the process.</p></div>`;
$$('[data-feature]').forEach(b=>{b.setAttribute('aria-haspopup','dialog');b.addEventListener('click',()=>openDetail('feature:'+b.dataset.featureGroup+':'+b.dataset.feature));});
$('#technology-panel').innerHTML=`<div class="section-heading"><div><p class="eyebrow">03 / TECHNOLOGY & ARCHITECTURE</p><h1 id="technology-title">Inside Punaruttham.</h1><p class="section-intro">Select any icon to explore its role in the system.</p></div><button class="workflow-button" data-open-workflow>${icon("route")} How the system connects <span aria-hidden="true">+</span></button></div><div class="icon-directory tech-directory">${D.technology.map((t,i)=>`<section class="directory-column"><div class="directory-heading"><span>${num(i)}</span><div><h2>${esc(t.name)}</h2><p>${esc(t.kicker)}</p></div></div><div class="directory-items">${t.components.map((c,j)=>`<button class="directory-item" data-tech-group="${i}" data-component="${j}"><span class="directory-icon">${icon(itemIcon(c[0],t.icon))}</span><span>${esc(c[0])}</span><span class="directory-plus" aria-hidden="true">+</span></button>`).join('')}</div></section>`).join('')}</div><div class="principle-strip"><span>THE SYSTEM AT A GLANCE</span><p>USB capture · Laptop processing · Image preparation for CNN · Cloud / local AI · Reference fallback · Archive & museum outputs</p></div>`;
$$('[data-component]').forEach(b=>{b.setAttribute('aria-haspopup','dialog');b.addEventListener('click',()=>openDetail('technology:'+b.dataset.techGroup+':'+b.dataset.component));});
$('#future-panel').innerHTML=`<div class="section-heading"><div><p class="eyebrow">04 / FUTURE & WIDER IMPACT</p><h1 id="future-title">A future worth preserving.</h1><p class="section-intro">Extend access, deepen the evidence and take preservation into more places.</p></div><div class="segmented" role="group" aria-label="Future view"><button data-future-view="roadmap" class="selected" aria-pressed="true">Future roadmap</button><button data-future-view="business" aria-pressed="false">Access model</button></div></div><div id="roadmap-view"><div class="future-columns"><div class="future-column"><div class="horizon-heading"><span>01</span><div><p class="eyebrow">EXPAND ACCESS</p><h2>Put preservation within reach.</h2></div></div>${futureCard(D.future[0])}${futureCard(D.future[1])}</div><div class="future-column"><div class="horizon-heading"><span>02</span><div><p class="eyebrow">DEEPEN IMPACT</p><h2>Make the evidence stronger.</h2></div></div>${futureCard(D.future[2])}${futureCard(D.future[3])}${futureCard(D.future[4])}</div><div class="future-column"><div class="horizon-heading"><span>03</span><div><p class="eyebrow">EXPLORE FURTHER</p><h2>Open new possibilities.</h2></div></div>${futureCard(D.future[5])}${futureCard(D.future[6])}<div class="future-quote"><span>THE LONG-TERM VISION</span><p>A record that remains useful even when the original becomes harder to read.</p></div></div></div></div><div id="business-view" hidden><div class="business-intro"><h2>Access without owning every capability.</h2><p>A modular model for institutions with different needs, budgets and periods of use.</p></div><div class="business-canvas">${D.business.map(b=>`<button class="canvas-block canvas-${b[0]}" data-business="${b[0]}"><span class="eyebrow">${esc(b[1])}</span><h3>${esc(b[2])}</h3><span class="card-plus" aria-hidden="true">+</span></button>`).join('')}</div><div class="rental-flow"><strong>THE MODULE LIBRARY</strong><span>Select a capability</span><span>Record its condition</span><span>Use & return</span><span>Inspect & repair</span><span>Recirculate</span></div></div><div class="principle-strip"><span>FROM THIS BOOTH TO THE FIELD</span><p>Expert-supervised pilots, accessible tools and reusable modules guide our next steps.</p></div>`;
function futureCard(f){return `<button class="future-card" data-future="${f.id}"><span class="eyebrow">${esc(f.category)}</span><h3>${esc(f.title)}</h3><p>${esc(f.body)}</p><span class="card-plus" aria-hidden="true">+</span></button>`;}
$$('[data-future]').forEach(b=>b.addEventListener('click',()=>{const f=D.future.find(f=>f.id===b.dataset.future);showDialog('FUTURE / '+f.category,f.title,`<p>${esc(f.body)}</p><ul>${f.points.map(p=>`<li>${esc(p)}</li>`).join('')}</ul><div class="dialog-note"><h3>What this opens up</h3><p>${esc(f.outcome)}</p></div>`);}));
$$('[data-business]').forEach(b=>b.addEventListener('click',()=>{const item=D.business.find(x=>x[0]===b.dataset.business);showDialog('FUTURE / ACCESS MODEL',item[1],`<p class="dialog-lead">${esc(item[2])}</p><p>${esc(item[3])}</p>`);}));
function futureView(v){$('#roadmap-view').hidden=v!=='roadmap';$('#business-view').hidden=v!=='business';$$('[data-future-view]').forEach(b=>{b.classList.toggle('selected',b.dataset.futureView===v);b.setAttribute('aria-pressed',String(b.dataset.futureView===v));});}
$$('[data-future-view]').forEach(b=>b.addEventListener('click',()=>{stopTour();futureView(b.dataset.futureView);}));
function showChapter(id,{scroll=true}={}){if(!chapters.includes(id)&&id!=='home')id='home';active=id;$('.chapter-nav').hidden=id==='home';$$('[data-panel]').forEach(s=>s.hidden=s.dataset.panel!==id);$$('.chapter').forEach(a=>{const selected=a.hash==='#'+id;a.classList.toggle('active',selected);if(selected)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});$('#chapter-position').textContent=id==='home'?'FOUR INTERACTIVE POSTERS':num(chapters.indexOf(id))+' — '+labels[chapters.indexOf(id)];document.title=id==='home'?'Punaruttham · International WRO':'Punaruttham · '+labels[chapters.indexOf(id)]+' · International WRO';if(scroll)window.scrollTo({top:0,behavior:'instant'});}
window.addEventListener('hashchange',()=>{showChapter(location.hash.slice(1));});
$$('.chapter,.brand,.quadrant,.home-link').forEach(a=>a.addEventListener('click',()=>{stopTour();if(location.hash===a.hash)showChapter(a.hash.slice(1));}));
function navigate(id){if(location.hash==='#'+id)showChapter(id);else location.hash=id;}
function stopTour(){if(tour){clearInterval(tour);tour=null;}$('#tour-button').setAttribute('aria-pressed','false');$('#tour-status').hidden=true;}
function startTour(){if($('#detail-dialog').open)closeDialog();remaining=25;$('#tour-button').setAttribute('aria-pressed','true');$('#tour-status').hidden=false;$('#tour-countdown').textContent=remaining+'s';tour=setInterval(()=>{if(document.hidden)return;remaining--;if(remaining<=0){remaining=25;const next=chapters[(chapters.indexOf(active)+1)%4];navigate(next);}$('#tour-countdown').textContent=remaining+'s';},1000);}
$('#tour-button').addEventListener('click',()=>tour?stopTour():startTour());$('#stop-tour').addEventListener('click',stopTour);
async function fullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();else toast('Use your browser’s fullscreen or presentation command.');}catch{toast('Use your browser’s fullscreen or presentation command.');}}
$('#fullscreen-button').addEventListener('click',fullscreen);document.addEventListener('fullscreenchange',()=>$('#fullscreen-button').setAttribute('aria-label',document.fullscreenElement?'Exit fullscreen':'Enter fullscreen'));
$('#help-button').addEventListener('click',()=>showDialog('EXHIBIT CONTROLS','Make the booth your own.',`<p>The landscape overview has four quadrants. Select one to open its poster, then touch a stage or icon to explore it. Each chapter also has its own link for a dedicated display.</p><div class="key-row"><kbd>1 2 3 4</kbd><span>Open a chapter</span></div><div class="key-row"><kbd>← / →</kbd><span>Previous / next chapter</span></div><div class="key-row"><kbd>F</kbd><span>Enter or exit fullscreen</span></div><div class="key-row"><kbd>A</kbd><span>Start or stop the 25-second chapter tour</span></div><div class="key-row"><kbd>Esc</kbd><span>Close details or stop the tour</span></div><div class="dialog-note"><h3>For the booth</h3><p>Auto tour rotates through all four chapters. Selecting an item stops the tour so you can explore at your own pace. Print posters produces a landscape summary of all four chapters.</p></div><p>This exhibit explains the project. It does not connect to or control the robot, call an AI service or display live measurements. The included concept image is an illustration.</p>`));
$('#print-button').addEventListener('click',()=>{stopTour();window.print();});
document.addEventListener('keydown',e=>{if(e.altKey||e.ctrlKey||e.metaKey||e.target.matches('input,textarea,select,[contenteditable=true]'))return;if($('#detail-dialog').open)return;const k=e.key.toLowerCase();if(k==='h'||k==='0'){stopTour();navigate('home');}else if(/^[1-4]$/.test(k)){stopTour();navigate(chapters[Number(k)-1]);}else if(k==='f'){e.preventDefault();fullscreen();}else if(k==='a'){e.preventDefault();tour?stopTour():startTour();}else if(k==='escape')stopTour();else if((k==='arrowright'||k==='arrowleft')&&!e.target.closest('button,a')){e.preventDefault();stopTour();navigate(chapters[(chapters.indexOf(active)+(k==='arrowright'?1:3))%4]);}});
$$('[data-open-workflow]').forEach(b=>b.addEventListener('click',showWorkflow));
$('.quadrant-features .quadrant-summary').textContent=D.featureGroups.reduce((n,g)=>n+g.items.length,0)+' capabilities to explore';
$('.quadrant-technology .quadrant-summary').textContent=D.technology.reduce((n,g)=>n+g.components.length,0)+' components & methods';
selectEdp(0);showChapter(location.hash.slice(1)||new URLSearchParams(location.search).get('panel')||'home',{scroll:false});
})();
