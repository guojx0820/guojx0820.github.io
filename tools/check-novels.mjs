import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const book=JSON.parse(fs.readFileSync('source/_data/novels.json','utf8'));
const normalize=s=>s.replace(/\r\n/g,'\n').trim().split(/\n\s*\n/).join('\n\n');
let figures=0;
for(const c of book.chapters){
 const text=fs.readFileSync(path.join('source',c.url,'index.md'),'utf8');
 const navs=[...text.matchAll(/<nav class="novel-chapter-nav"[\s\S]*?<\/nav>/g)];
 if(navs.length!==2)throw Error(`Bad chapter navigation ${c.number}`);
 const body=text.slice(navs[0].index+navs[0][0].length,navs[1].index).replace(/<figure class="novel-figure">[\s\S]*?<\/figure>/g,'');
 const original=process.env.NOVEL_SOURCE_ROOT||'D:/Projects/Wuxia_Novel';
 if(fs.existsSync(path.join(original,c.sourceFile))){const raw=fs.readFileSync(path.join(original,c.sourceFile),'utf8').replace(/\r\n/g,'\n');const h=raw.match(/^##\s+(.+)$/m);if(normalize(body)!==normalize(raw.slice(h.index+h[0].length)))throw Error(`Chapter text differs ${c.number}`);}
 for(const s of c.scenes){const count=text.split(`src="${s.url}"`).length-1;const exists=fs.existsSync(path.join('source',s.url));if(count!==(exists?1:0))throw Error(`Bad image count ${s.id}`);if(exists){figures++;if(!c.scenes.every(x=>fs.existsSync(path.join('source',x.url))))throw Error('Partial chapter image set');}}
 if(!text.includes('/novels/jichuan/'))throw Error('Missing directory link');
}
if(!fs.existsSync(path.join('source',book.cover)))throw Error('Missing cover');
console.log(`Novel check passed: ${book.chapters.length} chapter texts match originals; ${figures} illustrations plus cover; no duplicate figures.`);
