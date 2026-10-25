
const APP="efflux-atelier-app-eec54d38657b";
const SOUNDS="efflux-atelier-sounds-v1";
const BASE=new URL("./",self.location.href);
const FILES=["OCR-CREDITS.md","SOUND-CREDITS.md","assets/Dropbox-sdk.min-DUJwmdhV.js","assets/ToggleButton-DKJ-RIJn.js","assets/_plugin-vue_export-helper-D7rbJBD7.js","assets/advanced-pattern-editor-CNPHksBF.js","assets/analyser-CMmVQnA7.js","assets/audio-encode-util-DgiM5-sG.js","assets/audio-math-C4WGKX_A.js","assets/chord-generator-window-BzQ8tuml.js","assets/compression.worker-grI5_PE7.js","assets/config-B2D1m24P.js","assets/dialog-window-BVcB5xao.js","assets/dropbox-connector-Hl6iitBP.js","assets/dropbox-file-selector-CDkrMGEB.js","assets/editor-actions-D6Cf27hZ.js","assets/event-actions-CHu2_Oul.js","assets/event-factory-CFdeekm0.js","assets/event-util-1BVGP5yg.js","assets/file-loader-GyJEOE2N.js","assets/file-util-VIlEqdmB.js","assets/form-list-item-DgUpUzlv.js","assets/help-section-vSRFskej.js","assets/icon-audio-Bpwk7bzS.png","assets/icon-copy-D8vlEkoi.js","assets/icon-download-BNCQKWOf.js","assets/icon-note-delete-COg_Aiex.png","assets/icon-pencil-CtLbiL5d.js","assets/icon-trashcan-THnMUWzM.js","assets/index-DTl7_KMS.js","assets/instrument-editor-DKH9_tbc.js","assets/instrument-manager-ea9ACu9V.js","assets/instrument-util-DFgCO_og.js","assets/jam-mode-editor-Dd2wxV-e.js","assets/jam-mode-instrument-editor-DqyRPQxM.js","assets/layout-ooGG-Kfi.js","assets/logo-B1mKvbNd.js","assets/logo-Di2yBzAB.png","assets/midi-export-window-C3uTFwQy.js","assets/midi-preset-manager-B0SZYpMa.js","assets/mixer-yFZCDRGH.js","assets/module-param-editor-BSFvJQLh.js","assets/montserrat-CTXbpqt7.woff","assets/mpg123-decoder-BTOnvPy5.js","assets/note-entry-editor-DV37cRU7.js","assets/object-util-DI2gyZvi.js","assets/optimization-window-Bb48YObJ.js","assets/pattern-delete-B033iXxk.js","assets/pattern-editor-uvKcEPIz.js","assets/pattern-factory-BTwtvT47.js","assets/pattern-manager-BMsv1l-E.js","assets/pattern-order-util-BkaSdkiA.js","assets/pattern-order-window-DjZYy3kI.js","assets/pattern-to-order-conversion-window-CSA12NOr.js","assets/pattern-track-list-CPt9hQm8.js","assets/pattern-update-order-CfIGi6v3.js","assets/piano-roll-DctZd1-N.js","assets/pitch-CbsTXpue.js","assets/preload-helper-CRzLMJPS.js","assets/recorder.worker-Bl2oA6PK.js","assets/resource-manager-CuB57LXk.js","assets/rolldown-runtime-BCiCTKAo.js","assets/sample-display-kC4sAkIM.js","assets/sample-editor-DKOWENkw.js","assets/sample-loader-Dy1rT0mJ.js","assets/select-box-Bx0duJQZ.js","assets/settings-window-Dsb6fhXO.js","assets/shared-song-window-BrkXEq87.js","assets/snippet_jam_mode-DzeMRnBu.png","assets/snippet_tracker-U_BodIrE.png","assets/song-DfIC3N9r.js","assets/song-browser-BRIuX9uZ.js","assets/song-creation-window-C8JG9VTO.js","assets/song-save-window-Bqyui58K.js","assets/squada-one-Ba0UQDGF.woff2","assets/src-BmUdCsRu.js","assets/src/assets/animations/loader.svg","assets/src/assets/favicon/android-icon-144x144.png","assets/src/assets/favicon/android-icon-192x192.png","assets/src/assets/favicon/android-icon-36x36.png","assets/src/assets/favicon/android-icon-48x48.png","assets/src/assets/favicon/android-icon-72x72.png","assets/src/assets/favicon/android-icon-96x96.png","assets/src/assets/favicon/apple-icon-114x114.png","assets/src/assets/favicon/apple-icon-120x120.png","assets/src/assets/favicon/apple-icon-144x144.png","assets/src/assets/favicon/apple-icon-152x152.png","assets/src/assets/favicon/apple-icon-180x180.png","assets/src/assets/favicon/apple-icon-57x57.png","assets/src/assets/favicon/apple-icon-60x60.png","assets/src/assets/favicon/apple-icon-72x72.png","assets/src/assets/favicon/apple-icon-76x76.png","assets/src/assets/favicon/apple-icon-precomposed.png","assets/src/assets/favicon/apple-icon.png","assets/src/assets/favicon/favicon-16x16.png","assets/src/assets/favicon/favicon-32x32.png","assets/src/assets/favicon/favicon-96x96.png","assets/src/assets/favicon/favicon.ico","assets/src/assets/fonts/montserrat.woff","assets/src/assets/fonts/squada-one.woff2","assets/src/assets/fonts/transporter.eot","assets/src/assets/fonts/transporter.svg","assets/src/assets/fonts/transporter.ttf","assets/src/assets/fonts/transporter.woff","assets/src/assets/icons/icon-audio.png","assets/src/assets/icons/icon-copy.svg","assets/src/assets/icons/icon-download.svg","assets/src/assets/icons/icon-drag.svg","assets/src/assets/icons/icon-folder.png","assets/src/assets/icons/icon-locked.svg","assets/src/assets/icons/icon-maximize.svg","assets/src/assets/icons/icon-minimize.svg","assets/src/assets/icons/icon-module-glide.png","assets/src/assets/icons/icon-module-params.png","assets/src/assets/icons/icon-note-add.png","assets/src/assets/icons/icon-note-delete.png","assets/src/assets/icons/icon-note-mute.png","assets/src/assets/icons/icon-pencil.svg","assets/src/assets/icons/icon-project.svg","assets/src/assets/icons/icon-redo.png","assets/src/assets/icons/icon-trashcan.svg","assets/src/assets/icons/icon-undo.png","assets/src/assets/icons/icon-unlocked.svg","assets/src/assets/icons/icon-zoom-in.svg","assets/src/assets/icons/icon-zoom-out.svg","assets/src/assets/images/logo.png","assets/src/assets/images/snippet_jam_mode.png","assets/src/assets/images/snippet_tracker.png","assets/storage-util-5brpuvTO.js","assets/style-BWDygpqd.css","assets/time-util-BfEpo11Q.js","assets/transport-DHfRIfp0.js","assets/transporter-3dP_xsqg.eot","assets/transporter-DMSr_0jF.ttf","assets/transporter-dDigNov2.svg","assets/transposition-editor-DI2Fe9h0.js","assets/wave-tables-DRWXIC5W.js","assets/waveform-display-CzSRiIo3.js","assets/welcome-window-yWy-t6TO.js","favicon.svg","fixtures/fixtures-instruments.json","fixtures/fixtures-songs.json","index.html","login.html"];
self.addEventListener("install",event=>{
 event.waitUntil(caches.open(APP).then(c=>c.addAll(FILES.map(f=>new URL(f,BASE).href))).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",event=>{
 event.waitUntil((async()=>{
  const keys=(await caches.keys()).filter(k=>k.startsWith("efflux-atelier-app-"));
  // Retain the previous app cache for tabs that are still running its lazy chunks.
  const old=keys.filter(k=>k!==APP);for(const k of old.slice(0,-1))await caches.delete(k);
  await self.clients.claim();
 })());
});
self.addEventListener("fetch",event=>{
 const req=event.request,url=new URL(req.url);
 if(req.method!=="GET"||url.origin!==BASE.origin||!url.pathname.startsWith(BASE.pathname))return;
 const isSound=url.pathname.startsWith(new URL("sounds/",BASE).pathname);
 event.respondWith((async()=>{
  const cache=await caches.open(isSound?SOUNDS:APP);
  const cached=await cache.match(req);
  if(cached&&!cached.headers.get("content-type")?.includes("text/html"))return cached;
  if(req.mode==="navigate"){
   try{return await fetch(req)}catch{
    const index=await cache.match(new URL("index.html",BASE).href);
    if(index)return index;throw Error("Offline shell is not available");
   }
  }
  if(cached&&!isSound)return cached;
  if(!isSound){const previous=await caches.match(req);if(previous)return previous;}
  const response=await fetch(req);
  if(response.ok&&!response.headers.get("content-type")?.includes("text/html")){
   try{await cache.put(req,response.clone())}catch{}
  }
  return response;
 })());
});
