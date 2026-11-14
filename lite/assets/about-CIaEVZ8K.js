import{a as e,h as t,l as n,n as r,o as i,t as a,u as o}from"./theme-Y1AjXvFk.js";a(r()),t([...document.querySelectorAll(`[data-emergency]`)]),fetch(new URL(`data/meta.json`,document.baseURI),{cache:`no-cache`}).then(e=>e.json()).then(t=>{document.getElementById(`run`).textContent=i(t.weather_run,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`}),document.getElementById(`credits`).innerHTML=t.credits.map(t=>`
      <div class="card">
        <p><b>${e(t.name)}</b></p>
        <p>${e(t.credit)}</p>
        <p class="tag">${e(t.licence)}${t.status===`verified`?``:` · licence being checked`}</p>
        ${t.use?`<p class="tag">${e(t.use)}</p>`:``}
      </div>`).join(``)+`
      <div class="card"><p><b>Protomaps basemap</b></p><p>Map tiles from the Protomaps build of OpenStreetMap. © OpenStreetMap contributors (ODbL).</p></div>`});var s=[...o.map(e=>({name:e.latin,photos:e.photos})),...n.map(e=>({name:e.latin,photos:e.photos}))];document.getElementById(`photo-credits`).innerHTML=s.map(t=>t.photos.map(n=>`
  <li><i>${e(n.taxon??t.name)}</i>: <a href="${e(n.page)}" target="_blank" rel="noopener">${e(n.attribution)}</a></li>`).join(``)).join(``);