import{l as e,n as t,o as n,t as r,u as i}from"./theme-Cys5R34X.js";r(t()),n([...document.querySelectorAll(`[data-emergency]`)]);var a=/iNaturalist|GBIF/;fetch(new URL(`data/meta.json`,document.baseURI),{cache:`no-cache`}).then(e=>e.json()).then(t=>{document.getElementById(`run`).textContent=i(t.weather_run,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`}),document.getElementById(`credits`).innerHTML=t.credits.filter(e=>!a.test(e.name)).map(t=>`
      <div class="card">
        <p><b>${e(t.name)}</b></p>
        <p>${e(t.credit)}</p>
        <p class="tag">${e(t.licence)}${t.status===`verified`?``:` · licence being checked`}</p>
        ${t.use?`<p class="tag">${e(t.use)}</p>`:``}
      </div>`).join(``)+`
      <div class="card"><p><b>Protomaps basemap</b></p><p>Map tiles from the Protomaps build of OpenStreetMap. © OpenStreetMap contributors (ODbL).</p></div>`});