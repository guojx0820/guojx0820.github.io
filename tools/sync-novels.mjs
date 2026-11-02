import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=process.cwd();
const sourceRoot=process.env.NOVEL_SOURCE_ROOT || 'D:/Projects/Wuxia_Novel';
const dataPath=path.join(root,'source/_data/novels.json');
const write=(p,s)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,s,'utf8');};
const numerals=['一','二','三','四','五','六','七','八','九','十','十一'];
const ideas=[
 [['寒江救客','翻上船板'],['断桥护行','断板'],['庄门争路','横梁']],
 [['旧橹与寒灯','旧橹柄'],['知止脱扣','收肘'],['车前守护','短木棍']],
 [['棚前护伤','横着橹叶'],['芦岸弓声','射线窄'],['破弓脱险','弓弦兜住']],
 [['伤院对峙','榻搁到'],['飞矢争门','箭'],['院火救援','火']],
 [['病棚相逢','病者的腿'],['西坡狭屋','褚衡'],['门窗合围','窗']],
 [['双契争药','两张'],['窄巷横枪','邓衡'],['垫轮护车','垫轮']],
 [['旧窑寻人','苗老'],['门槛争距','门槛'],['修车铺围捕','斧']],
 [['试镞验铁','崩'],['寒场练杆','杆尾'],['惊骡清道','孟先简喝令']],
 [['苇席隐身','苇席挡不住'],['泼水救亲','水碗往刀手'],['车辕守路','鞭甩在']],
 [['车门绳结','两道活结'],['门前刀光','刀'],['解绳护婴','脚被绳圈住']],
 [['武牢骑影','半桶水泼进'],['退路护车','两车会一同'],['洛水归灯','路过洛水时']]
];
const rawStyle='Use case: illustration-story. One wide landscape 16:9 Chinese anime wuxia illustration infused with traditional Chinese ink wash aesthetics, elegant clean 2D character linework, restrained cel shading, expressive grounded martial movements, atmospheric ink mountains and generous painterly negative space for the original historical novel 济川山河录. Tang dynasty Tianbao-era winter in the Luoyang/Mengjin region. Ink teal, winter grey, parchment and warm lantern light; beautiful refined guofeng animation storytelling, Qinglü landscape accents, traditional cultural grace; show restraint, compassion and keeping promises through the actual character action, never invent sect symbols or supernatural powers. NO text, captions, logos, watermark, modern objects, fantasy energy, flying martial artists, exaggerated gore. Weapons, hand positions, people, geography and injuries MUST follow the Chinese source excerpt. Do not invent additional battles. Keep recurring identities: 裴照野 young adult Chinese male physician, slim, tied black hair, muted blue-grey robe and medicine pouch, wrist/hand bandages when stated; 沈蘅芜 young adult Chinese woman, tied dark hair, practical dark brown short jacket, small pale scar left of nose, right forearm bandage in later chapters, cannot draw damaged bow after chapter 3; 鲁怀川 mature weathered Chinese boatman, dark hemp coat; 许满 sturdy working man in brown padded tunic; 陶行简 elderly physician grey hair and beard; 卢见微 adult county officer in muted dark practical Tang clothing; 高信 teenage recruit in simple grey-brown padded clothes. Do not put every character in every scene. Frame grounded physical movement, clear silhouettes, credible anatomy. Chinese source is authoritative, character style details only fill unspecified appearances.';
const style=rawStyle.replace(/Keep recurring identities:.*Do not put every character in every scene\. /,'');
let book=fs.existsSync(dataPath)?JSON.parse(fs.readFileSync(dataPath,'utf8')):{slug:'jichuan',title:'济川山河录',author:'洛沐',status:'连载中',genre:'历史武侠 · 河洛群像',description:'一场孟津夜渡，一句生死托付。船户、医者与守城新卒，在天宝末年的河洛风雪中护人、守诺，追寻一条牵动生死的旧药路。',cover:'/images/novels/jichuan/cover.webp',chapters:[]};
book.chapters=numerals.map((num,i)=>{
 const file=`济川山河录·第${num}章.md`,raw=fs.readFileSync(path.join(sourceRoot,file),'utf8').replace(/^\uFEFF/,'').replace(/\r\n/g,'\n');
 const heading=raw.match(/^##\s+(.+)$/m); if(!heading) throw Error(`Missing heading ${file}`);
 const body=raw.slice(heading.index+heading[0].length).trim();const paras=body.split(/\n\s*\n/);
 const old=book.chapters.find(c=>c.number===i+1);const used=new Set();
 const scenes=ideas[i].map(([caption,needle],j)=>{
   const previous=old?.scenes?.find(s=>s.caption===caption);let p=previous?.anchor?paras.indexOf(previous.anchor):-1;
   if(p<0){const hits=paras.map((s,k)=>({s,k})).filter(x=>x.s.includes(needle)&&!used.has(x.k));if(!hits.length)throw Error(`No anchor ${file}: ${needle}`);hits.sort((a,b)=>([...b.s.matchAll(/刀|枪|绳|挡|退|拉|箭|推|扶|火/g)].length)-([...a.s.matchAll(/刀|枪|绳|挡|退|拉|箭|推|扶|火/g)].length));p=hits[0].k;}used.add(p);
   const excerpt=paras.slice(Math.max(0,p-1),p+2).join('\n\n');const stem=`chapter-${String(i+1).padStart(2,'0')}-${j+1}`;
   return {id:stem,caption,paragraphIndex:p,anchor:paras[p],excerpt,prompt:`${style}\nScene focus: ${caption}. Depict ONE coherent moment from this excerpt, prioritizing the middle paragraph.\n${excerpt}`,url:`/images/novels/jichuan/${stem}.webp`,original:previous?.original||null};
 }).filter((_,j)=>j===[0,1,2,2,1,1,1,2,1,2,1][i]);return{number:i+1,sourceFile:file,title:heading[1],hash:crypto.createHash('sha256').update(body).digest('hex'),url:`/novels/jichuan/chapter-${String(i+1).padStart(2,'0')}/`,scenes,body};
});
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const available=s=>fs.existsSync(path.join(root,'source',s.url));
const cover=fs.existsSync(path.join(root,'source',book.cover));
const coverHtml=cover?`<img src="${book.cover}" alt="济川山河录正式封面：孟津寒江孤舟" width="900" height="1350" loading="eager">`:'<div class="novel-cover-placeholder">济川山河录</div>';
const front=title=>`---\ntitle: ${JSON.stringify(title)}\ntype: novel\n---\n\n`;
const chapters=book.chapters;
const completed=chapters.filter(c=>c.scenes.every(available)).length;
const bookMeta=`<span class="novel-badge">${book.status}</span><span>${book.genre}</span><span>已更新 ${chapters.length} 章</span>`;
write(path.join(root,'source/novels/index.md'),front('小说书架')+`<div class="novel-shell novel-library">\n<div class="novel-kicker">洛沐 · 原创连载</div><h1>纸上山河，卷中江湖</h1><p class="novel-lead">翻开一卷，走进另一个人间。这里安放正在生长的故事，也为下一场相逢留一盏灯。</p>\n<div class="novel-section-heading"><h2>连载书架</h2><span>原创作品 · 持续更新</span></div>\n<div class="novel-grid"><article class="novel-book-card"><a class="novel-cover-link" href="/novels/jichuan/" aria-label="进入济川山河录">${coverHtml}</a><div class="novel-card-copy"><div class="novel-meta">${bookMeta}</div><h2><a href="/novels/jichuan/">《济川山河录》</a></h2><p>${book.description}</p><a class="novel-button" href="/novels/jichuan/">进入作品 →</a></div></article>${[1,2].map(n=>`<article class="novel-book-card novel-coming"><div class="novel-empty-cover" aria-hidden="true"><span>卷 ${n===1?'贰':'叁'}</span><b>待 启</b><i>山河有期 · 故事未央</i></div><div class="novel-card-copy"><span class="novel-badge novel-muted">新作筹备中</span><h2>下一卷故事</h2><p>为下一部原创小说预留的书位。作品发布后，这里将展示正式封面与独立章节目录。</p></div></article>`).join('')}</div>\n<p class="novel-library-note">每部作品独立连载 · 点击封面进入作品目录 · 阅读位置仅保存在当前浏览器</p>\n</div>\n`);
write(path.join(root,'source/novels/jichuan/index.md'),front(book.title)+`<div class="novel-shell novel-detail" data-novel-book="jichuan">\n<a class="novel-back" href="/novels/">← 返回小说书架</a><div class="novel-detail-hero"><div class="novel-detail-cover">${coverHtml}</div><div><div class="novel-kicker">河洛风雪 · 原创历史武侠</div><h1>济川山河录</h1><div class="novel-meta">${bookMeta}</div><p class="novel-lead">${book.description}</p><p>写人如何在乱世中护住眼前的人，也写一只旧橹、一张药账、一盏寒灯如何承载一个人的选择。</p><div class="novel-actions"><a class="novel-button" href="${chapters[0].url}">开始阅读</a><a class="novel-button novel-secondary" href="${chapters.at(-1).url}">最新章节 · 第${chapters.length}章</a><a class="novel-button novel-secondary" data-resume hidden href="${chapters[0].url}">继续阅读</a></div><p class="novel-small">作者：${book.author}　｜　插图版已完成 ${completed}/${chapters.length} 章</p></div></div>\n<div class="novel-section-heading"><h2>章节目录</h2><span>顺序阅读 · 全文连载</span></div><ol class="novel-chapter-grid">${chapters.map(c=>`<li><a href="${c.url}"><span class="novel-chapter-number">${String(c.number).padStart(2,'0')}</span><span>${escape(c.title.replace(/^第.+?章\s*/,''))}<small>${c.scenes.every(available)?'插图版 · 关键场景插图':'正文版 · 插图制作中'}</small></span></a></li>`).join('')}</ol><p class="novel-small">故事为原创虚构。章节插图为 AI 辅助创作的场景演绎；正文叙述为情节依据。</p></div>\n`);
for(const c of chapters){const paras=c.body.split(/\n\s*\n/);const figures=c.scenes.filter(available);const nav=`<nav class="novel-chapter-nav" aria-label="章节导航">${c.number>1?`<a href="${chapters[c.number-2].url}">← 上一章</a>`:'<span>卷首</span>'}<a href="/novels/jichuan/">作品目录</a>${c.number<chapters.length?`<a href="${chapters[c.number].url}">下一章 →</a>`:'<span>待续</span>'}</nav>`;
const body=paras.map((p,i)=>p+figures.filter(s=>s.paragraphIndex===i).map(s=>`\n\n<figure class="novel-figure"><img src="${s.url}" alt="${escape(s.caption)}" width="1400" height="788" loading="lazy" decoding="async"><figcaption>${escape(s.caption)} · 原创情节插图</figcaption></figure>`).join('')).join('\n\n');
write(path.join(root,'source',c.url,'index.md'),front(c.title)+`<div class="novel-shell novel-reader" data-novel-book="jichuan" data-chapter="${c.number}">\n<div class="novel-reading-bar"><a href="/novels/jichuan/">《济川山河录》 · 第${c.number}章</a><div role="group" aria-label="阅读字号"><button type="button" data-font="down" aria-label="缩小字号">A−</button><button type="button" data-font="reset">默认</button><button type="button" data-font="up" aria-label="增大字号">A＋</button></div></div>\n${nav}\n\n${body}\n\n${nav}\n<p class="novel-small">${figures.length?`本章含 ${figures.length} 幅 AI 辅助原创插图，情节以正文为准。`:'本章正文已更新，原创插图将陆续补齐。'}</p>\n</div>\n`);
}
write(dataPath,JSON.stringify({...book,chapters:chapters.map(({body,...c})=>c)},null,2)+'\n');
console.log(`Synced ${chapters.length} chapters; illustrated ${completed}; cover ${cover}`);
