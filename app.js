const articles = {
  "getting-started": {
    kicker:"GETTING STARTED", title:"Set up your CyberCodix workspace",
    intro:"Create your workspace, add your business information and prepare your team for WhatsApp-powered customer communication.",
    body:`<h3>Setup checklist</h3>
      <div class="step"><b>1. Create your workspace</b><br>Sign in to CyberCodix and create a workspace for your business.</div>
      <div class="step"><b>2. Complete your business profile</b><br>Add your business name, logo, website, timezone and business hours.</div>
      <div class="step"><b>3. Invite your team</b><br>Add managers, sales agents and support users with the appropriate permissions.</div>
      <div class="step"><b>4. Connect WhatsApp</b><br>Open Channels → WhatsApp and follow the Meta connection flow.</div>
      <div class="step"><b>5. Configure your first workflow</b><br>Start with a welcome message or lead assignment automation.</div>
      <h3>Next step</h3><p>Once your number is connected, explore the Team Inbox and create your first approved message template.</p>`
  },
  "whatsapp-connect": {
    kicker:"WHATSAPP API", title:"Connect WhatsApp Business API",
    intro:"Connect an eligible WhatsApp Business Account to CyberCodix and manage business conversations from one workspace.",
    body:`<h3>Before you begin</h3><ul><li>Meta Business Portfolio access</li><li>WhatsApp Business Account access</li><li>A business phone number eligible for onboarding</li><li>Business verification details where required</li></ul>
      <h3>Connection flow</h3><div class="step">Open <b>Settings → Channels → WhatsApp</b>.</div><div class="step">Choose <b>Connect with Meta</b> and complete the Meta authorization screens.</div><div class="step">Select your Business Portfolio, WABA and phone number.</div><div class="step">Finish setup and verify that the number shows as connected.</div>
      <h3>After connection</h3><p>Create approved templates, configure your team inbox and test an inbound and outbound conversation.</p>`
  },
  "meta-leads": {
    kicker:"META ADS", title:"Send Meta Lead Ads into CyberCodix",
    intro:"Build a lead flow that captures Facebook and Instagram form submissions and immediately routes them into your CRM.",
    body:`<h3>Recommended flow</h3><div class="step"><b>Meta Ad</b> → Lead Form → <b>CyberCodix</b> → Create Lead → Assign Agent → WhatsApp Follow-up</div>
      <h3>Configure your lead source</h3><ul><li>Connect your Meta Business account.</li><li>Select the Facebook Page and lead form.</li><li>Map form fields to CyberCodix fields.</li><li>Choose a pipeline and default lead status.</li><li>Set assignment rules for your sales team.</li></ul>
      <h3>Automate the first response</h3><p>Trigger an approved WhatsApp template or agent notification when a new lead is created, subject to WhatsApp and Meta policies.</p>`
  },
  "automation-flow": {
    kicker:"AUTOMATION", title:"Create your first automation",
    intro:"Turn repetitive sales actions into a visual workflow using triggers, conditions, delays and actions.",
    body:`<h3>Example: New lead workflow</h3>
      <div class="step"><b>Trigger:</b> Lead created</div><div class="step"><b>Action:</b> Add tag <code>New Lead</code></div><div class="step"><b>Action:</b> Assign to Sales Team</div><div class="step"><b>Action:</b> Send welcome template</div><div class="step"><b>Delay:</b> Wait for response</div><div class="step"><b>Condition:</b> Customer replied?</div>
      <h3>Build safely</h3><p>Start with one simple workflow, test it with internal numbers and add conditions before scaling to larger audiences.</p>`
  },
  "template-create": {
    kicker:"TEMPLATES", title:"Create a WhatsApp message template",
    intro:"Templates are structured business messages submitted for review and used for eligible proactive messaging.",
    body:`<h3>Template structure</h3><ul><li>Choose the correct category.</li><li>Write clear, customer-focused copy.</li><li>Add variables only where useful.</li><li>Add media or buttons when supported by the selected template type.</li><li>Submit the template for review.</li></ul>
      <h3>Example</h3><div class="step">Hello <code>{{1}}</code>, your appointment is confirmed for <code>{{2}}</code>. Reply to this message if you need assistance.</div>
      <p>Always follow the current WhatsApp Business Platform policies and template requirements.</p>`
  },
  "academy": {
    kicker:"ACADEMY", title:"CyberCodix Academy",
    intro:"Structured learning paths for teams that want to master WhatsApp CRM, automation and AI.",
    body:`<h3>Learning paths</h3><ul><li><b>WhatsApp API Fundamentals</b> — Meta, WABA, numbers, templates and messaging.</li><li><b>CyberCodix CRM Masterclass</b> — contacts, leads, pipelines, inbox and reporting.</li><li><b>WhatsApp Marketing</b> — audiences, campaigns, templates and analytics.</li><li><b>Automation</b> — triggers, conditions, delays, actions and webhooks.</li><li><b>CyberCodix AI</b> — assistants, bots, summaries and qualification.</li><li><b>Developer API</b> — API keys, messaging endpoints, webhooks and integrations.</li></ul>`
  }
};

const categoryArticles = {
  "Getting Started":["Create your CyberCodix workspace","Set up your business profile","Invite team members","Understand the dashboard","Connect your first channel","Configure business hours"],
  "WhatsApp API":["Connect WhatsApp Business API","WhatsApp Business Account basics","Phone number requirements","WhatsApp coexistence","Messaging limits","Conversation windows","Business verification","WhatsApp pricing","Number migration","Account quality","Display name","Connection troubleshooting"],
  "Team Inbox":["Understand the team inbox","Assign conversations","Internal notes","Tags and labels","Search conversations","Customer profiles","Media messages","Agent availability","SLA tracking","Conversation history"],
  "CRM & Leads":["Create a lead","Lead pipeline","Lead sources","Lead assignment","Lead scoring","Custom fields","Duplicate leads","Lead statuses","Import contacts","Customer segmentation","Conversion tracking"],
  "Campaigns":["Create a campaign","Import campaign audience","Schedule campaigns","Dynamic variables","Campaign analytics","Retargeting","Failed messages","Audience segmentation","Campaign best practices"],
  "Templates":["Create a template","Template categories","Template variables","Media templates","Interactive buttons","Template approval","Template rejection","Template quality"],
  "Automation":["Create a workflow","Triggers","Conditions","Actions","Delays","Lead routing","Follow-up sequences","Reminder automation","Agent notifications","Webhook automation","Testing workflows","Automation best practices"],
  "AI & Chatbots":["AI assistant","AI reply suggestions","Conversation summaries","AI lead qualification","AI sentiment","AI knowledge base","Create a chatbot","Human handoff","Bot conditions"],
  "Meta Ads":["Connect Meta Lead Ads","Map lead form fields","Click-to-WhatsApp","Campaign source tracking","Automated first response","Meta conversion events","Lead routing","Meta troubleshooting"],
  "Integrations":["Google Sheets","WooCommerce","WordPress","Zapier","Make","Zoho CRM","HubSpot","Salesforce","Custom webhooks","Integration troubleshooting"],
  "Analytics":["Dashboard analytics","WhatsApp metrics","Lead analytics","Agent performance","Campaign reporting","Sales funnel","Source performance"],
  "Developer API":["Authentication","API keys","Send message","Send template","Contacts API","Leads API","Conversation API","Message status","Webhooks","Rate limits","Error codes","PHP examples","Node.js examples","Python examples"],
  "Team & Permissions":["Roles","Permissions","Teams","Agent assignment","Manager access","Activity logs","User management"],
  "Security":["Account security","Two-factor authentication","Role-based access","API security","Data protection","Audit logs","Data deletion"],
  "Billing":["Plans","Upgrade plan","Downgrade plan","Invoices","Usage limits","WhatsApp charges"],
  "Troubleshooting":["WhatsApp connection failed","OTP not received","Meta verification failed","Template rejected","Message not delivered","Message failed","Messaging limit reached","API authentication error","Webhook not received","Meta lead missing","Duplicate lead","Campaign failed","Bot not responding","Agent notification issue","Website widget issue"]
};

function openArticle(key){
  const a=articles[key]; if(!a) return;
  document.getElementById('modalKicker').textContent=a.kicker;
  document.getElementById('modalTitle').textContent=a.title;
  document.getElementById('modalIntro').textContent=a.intro;
  document.getElementById('modalBody').innerHTML=a.body;
  document.getElementById('articleModal').classList.remove('hidden');
  document.body.style.overflow='hidden';
}
function closeArticle(){
  document.getElementById('articleModal').classList.add('hidden');
  document.body.style.overflow='';
}
document.querySelectorAll('[data-article]').forEach(el=>el.addEventListener('click',()=>openArticle(el.dataset.article)));
document.getElementById('closeModal').addEventListener('click',closeArticle);
document.getElementById('modalCloseBtn').addEventListener('click',closeArticle);
document.getElementById('modalBackdrop').addEventListener('click',closeArticle);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeArticle()});

const input=document.getElementById('searchInput'), results=document.getElementById('searchResults'), grid=document.getElementById('resultsGrid');
function allDocs(){
  const list=[];
  Object.entries(categoryArticles).forEach(([cat,arr])=>arr.forEach(title=>list.push({cat,title,text:(title+' '+cat).toLowerCase()})));
  Object.values(articles).forEach(a=>list.push({cat:a.kicker,title:a.title,text:(a.title+' '+a.intro).toLowerCase(),article:true,key:Object.keys(articles).find(k=>articles[k]===a)}));
  return list;
}
function doSearch(q){
  q=q.trim().toLowerCase();
  if(!q){results.classList.add('hidden');return;}
  const hits=allDocs().filter(x=>x.text.includes(q)).slice(0,30);
  results.classList.remove('hidden');
  grid.innerHTML=hits.length?hits.map((x,i)=>`<button class="result-card" data-result="${x.key||''}" data-category-result="${x.cat}"><small>${x.cat}</small><h3>${x.title}</h3><p>Open this CyberCodix guide and learn the recommended setup.</p></button>`).join(''):`<div class="result-card"><small>NO RESULTS</small><h3>We couldn't find that guide.</h3><p>Try searching for WhatsApp, leads, templates, automation or API.</p></div>`;
  document.querySelectorAll('[data-result]').forEach(el=>el.addEventListener('click',()=>{
    if(el.dataset.result) openArticle(el.dataset.result);
    else document.getElementById('category-'+el.dataset.categoryResult.toLowerCase().replace(/[^a-z0-9]+/g,'-'))?.scrollIntoView({behavior:'smooth'});
  }));
  results.scrollIntoView({behavior:'smooth',block:'start'});
}
input.addEventListener('input',e=>doSearch(e.target.value));
document.getElementById('clearSearch').addEventListener('click',()=>{input.value='';results.classList.add('hidden');input.focus()});
document.addEventListener('keydown',e=>{
  if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();input.focus()}
});
document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('mobileNav').classList.toggle('open'));
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('mobileNav').classList.remove('open')));
document.querySelectorAll('.category-card').forEach(card=>{
  card.addEventListener('click',()=>{
    const cat=card.dataset.category;
    const list=categoryArticles[cat]||[];
    const key='category-'+cat.toLowerCase().replace(/[^a-z0-9]+/g,'-');
    const sample=list.slice(0,5).map((x,i)=>`<div class="step"><b>${i+1}. ${x}</b><br>CyberCodix guide for ${x.toLowerCase()}.</div>`).join('');
    document.getElementById('modalKicker').textContent=cat.toUpperCase();
    document.getElementById('modalTitle').textContent=cat;
    document.getElementById('modalIntro').textContent=`Explore the CyberCodix documentation for ${cat.toLowerCase()}.`;
    document.getElementById('modalBody').innerHTML=`<h3>Guides in this section</h3>${sample}<p>This documentation hub is ready for you to replace these starter summaries with your complete product-specific articles.</p>`;
    document.getElementById('articleModal').classList.remove('hidden'); document.body.style.overflow='hidden';
  });
});
document.getElementById('year').textContent=new Date().getFullYear();
