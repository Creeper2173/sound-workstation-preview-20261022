
const APP="efflux-atelier-app-c314f240ff56";
const SOUNDS="efflux-atelier-sounds-v1";
const BASE=new URL("./",self.location.href);
const FILES=["OCR-CREDITS.md","SOUND-CREDITS.md","assets/Dropbox-sdk.min-DUJwmdhV.js","assets/ToggleButton-DKJ-RIJn.js","assets/_plugin-vue_export-helper-D7rbJBD7.js","assets/advanced-pattern-editor-pZiS8_yi.js","assets/analyser-CMmVQnA7.js","assets/audio-encode-util-BiMtU5fx.js","assets/audio-math-C4WGKX_A.js","assets/chord-generator-window-xMN1ebwJ.js","assets/compression.worker-grI5_PE7.js","assets/config-B2D1m24P.js","assets/dialog-window-Ci3xfEry.js","assets/dropbox-connector-8E6F0XLc.js","assets/dropbox-file-selector-kDLKasu5.js","assets/editor-actions-CsFkKze7.js","assets/event-actions-CHu2_Oul.js","assets/event-factory-CFdeekm0.js","assets/event-util-1BVGP5yg.js","assets/file-loader-CpGqhIv9.js","assets/file-util-VIlEqdmB.js","assets/form-list-item-DgUpUzlv.js","assets/help-section-vSRFskej.js","assets/icon-audio-Bpwk7bzS.png","assets/icon-copy-D8vlEkoi.js","assets/icon-download-BNCQKWOf.js","assets/icon-note-delete-COg_Aiex.png","assets/icon-pencil-CtLbiL5d.js","assets/icon-trashcan-THnMUWzM.js","assets/index-LmuMpJzP.js","assets/instrument-editor-DBGqJn-Y.js","assets/instrument-manager-D0rLo-yz.js","assets/instrument-util-DbO-UXMx.js","assets/jam-mode-editor-4VeLdBRq.js","assets/jam-mode-instrument-editor-Cfqdbf_l.js","assets/layout-ooGG-Kfi.js","assets/logo-B1mKvbNd.js","assets/logo-Di2yBzAB.png","assets/midi-export-window-D8HNW01c.js","assets/midi-preset-manager-DRM508_j.js","assets/mixer-CtzKPfuC.js","assets/module-param-editor-BNQtxI5u.js","assets/montserrat-CTXbpqt7.woff","assets/mpg123-decoder-BTOnvPy5.js","assets/note-entry-editor-2vbH4Odg.js","assets/object-util-DI2gyZvi.js","assets/optimization-window-BKF8QXpN.js","assets/pattern-delete-B4eUIgPS.js","assets/pattern-editor-7LrLAkjf.js","assets/pattern-factory-BTwtvT47.js","assets/pattern-manager-DAIHsSwt.js","assets/pattern-order-util-DPY2oOcF.js","assets/pattern-order-window-Bt8eXkJX.js","assets/pattern-to-order-conversion-window-DlCozMdw.js","assets/pattern-track-list-BNl7KIJ5.js","assets/pattern-update-order-CfIGi6v3.js","assets/piano-roll-Boykf6uw.js","assets/pitch-CbsTXpue.js","assets/preload-helper-CRzLMJPS.js","assets/recorder.worker-Bl2oA6PK.js","assets/resource-manager-CuB57LXk.js","assets/rolldown-runtime-BCiCTKAo.js","assets/sample-display-CtAMCNMe.js","assets/sample-editor-Bk1oZf4g.js","assets/sample-loader-Dy1rT0mJ.js","assets/select-box-Bx0duJQZ.js","assets/settings-window-BeN_tCXj.js","assets/shared-song-window-D8djnRhx.js","assets/snippet_jam_mode-DzeMRnBu.png","assets/snippet_tracker-U_BodIrE.png","assets/song-DfIC3N9r.js","assets/song-browser-BJzLeJ6l.js","assets/song-creation-window-CeyguXn6.js","assets/song-save-window-xBALaeos.js","assets/squada-one-Ba0UQDGF.woff2","assets/src-BmUdCsRu.js","assets/src/assets/animations/loader.svg","assets/src/assets/favicon/android-icon-144x144.png","assets/src/assets/favicon/android-icon-192x192.png","assets/src/assets/favicon/android-icon-36x36.png","assets/src/assets/favicon/android-icon-48x48.png","assets/src/assets/favicon/android-icon-72x72.png","assets/src/assets/favicon/android-icon-96x96.png","assets/src/assets/favicon/apple-icon-114x114.png","assets/src/assets/favicon/apple-icon-120x120.png","assets/src/assets/favicon/apple-icon-144x144.png","assets/src/assets/favicon/apple-icon-152x152.png","assets/src/assets/favicon/apple-icon-180x180.png","assets/src/assets/favicon/apple-icon-57x57.png","assets/src/assets/favicon/apple-icon-60x60.png","assets/src/assets/favicon/apple-icon-72x72.png","assets/src/assets/favicon/apple-icon-76x76.png","assets/src/assets/favicon/apple-icon-precomposed.png","assets/src/assets/favicon/apple-icon.png","assets/src/assets/favicon/favicon-16x16.png","assets/src/assets/favicon/favicon-32x32.png","assets/src/assets/favicon/favicon-96x96.png","assets/src/assets/favicon/favicon.ico","assets/src/assets/fonts/montserrat.woff","assets/src/assets/fonts/squada-one.woff2","assets/src/assets/fonts/transporter.eot","assets/src/assets/fonts/transporter.svg","assets/src/assets/fonts/transporter.ttf","assets/src/assets/fonts/transporter.woff","assets/src/assets/icons/icon-audio.png","assets/src/assets/icons/icon-copy.svg","assets/src/assets/icons/icon-download.svg","assets/src/assets/icons/icon-drag.svg","assets/src/assets/icons/icon-folder.png","assets/src/assets/icons/icon-locked.svg","assets/src/assets/icons/icon-maximize.svg","assets/src/assets/icons/icon-minimize.svg","assets/src/assets/icons/icon-module-glide.png","assets/src/assets/icons/icon-module-params.png","assets/src/assets/icons/icon-note-add.png","assets/src/assets/icons/icon-note-delete.png","assets/src/assets/icons/icon-note-mute.png","assets/src/assets/icons/icon-pencil.svg","assets/src/assets/icons/icon-project.svg","assets/src/assets/icons/icon-redo.png","assets/src/assets/icons/icon-trashcan.svg","assets/src/assets/icons/icon-undo.png","assets/src/assets/icons/icon-unlocked.svg","assets/src/assets/icons/icon-zoom-in.svg","assets/src/assets/icons/icon-zoom-out.svg","assets/src/assets/images/logo.png","assets/src/assets/images/snippet_jam_mode.png","assets/src/assets/images/snippet_tracker.png","assets/storage-util-5brpuvTO.js","assets/style-DmXffuX7.css","assets/time-util-BfEpo11Q.js","assets/transport-CRywpgzo.js","assets/transporter-3dP_xsqg.eot","assets/transporter-DMSr_0jF.ttf","assets/transporter-dDigNov2.svg","assets/transposition-editor-Bv5pqblw.js","assets/wave-tables-DRWXIC5W.js","assets/waveform-display-CUdeuVWz.js","assets/welcome-window-DcpPpjpN.js","favicon.svg","fixtures/fixtures-instruments.json","fixtures/fixtures-songs.json","index.html","login.html"];
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
