/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7256ad0ecad370c9bad310afbdcf6216"],["/about/index.html","d83c659c65c41b04638c35df2883ff4d"],["/archives/1033b493.html","faa047280ab4651e09281d90ddb9401c"],["/archives/1abb07a6.html","9af08cc09f8b577fd15e34e8ae2f6df4"],["/archives/1def5f0d.html","e2022298ae998f077a7d842c6dd05c0d"],["/archives/2021/03/index.html","2bc63c24390d537647a6c77906912133"],["/archives/2021/04/index.html","1f811d9314b06ea4e875deffb2db4a06"],["/archives/2021/index.html","72cb30ce2bd0a858d53edae63bbbe4c4"],["/archives/2022/04/index.html","52596dd3d30587db818ff717bcbef397"],["/archives/2022/05/index.html","89081f259b206dbcfc04ec5381905cf3"],["/archives/2022/06/index.html","a82421dacf1df5616ac2831981a13854"],["/archives/2022/index.html","b144d08abd25fb4df0193c87ce3c1cd5"],["/archives/2022/page/2/index.html","11de0a9ebc519f527bfe2f26e951c082"],["/archives/2023/01/index.html","b2e7c5c90e290795875fe394b05f3b11"],["/archives/2023/02/index.html","669c0a795cb015107e6120cf50a0d09e"],["/archives/2023/index.html","9e129e1f2f265c0e59351c28e3609bbd"],["/archives/23cd4859.html","8e11895b69efa9c5fe30845a567944d2"],["/archives/266295d8.html","b63f28c79ff60ea089267bc7f713931f"],["/archives/330ac4a4.html","cac0491834681cb33066d33bcacc33a2"],["/archives/3a816938.html","6a1546417a11ef081af6282b8953684c"],["/archives/4360a9bd.html","12ec448b57a7c27c681032b8d3d88326"],["/archives/49977e84.html","6efd4a08da639f9cefa5d7c17f44a292"],["/archives/573e690a.html","0be67fe382a36371461829eb981d85a7"],["/archives/57eb0d7a.html","0978fbb8f596fdbbe4421cc1d1946636"],["/archives/61521166.html","a3a377fd331d9509314618df3645161d"],["/archives/7576230f.html","0054b2fd99f2651e169d66600e361026"],["/archives/8063fed6.html","31bd29982bd0e1838e5e5bb524360909"],["/archives/8c1f6a98.html","16ad05abbd2da54ec664efcfbca616db"],["/archives/91104203.html","ebeb235c2de3202893569e3da36b055c"],["/archives/a1db3116.html","052ee998062c7e2509453a7c55ac71ff"],["/archives/a8ccf4cb.html","46507a7907758de5a6552c1fe43a703b"],["/archives/c144f20a.html","c34b9d5475c641e5d7348ddda6f99af4"],["/archives/e84af901.html","32336d7048fb900bc04f05cd09c98e2f"],["/archives/f3ecd78a.html","96e19b6a0f4131f694d4a8a4639bc8d0"],["/archives/fe82aeb3.html","5a5721aef0f63bbcdf45d339cd172897"],["/archives/index.html","90f0035ba7192d1245d441d92df5c9f0"],["/archives/page/2/index.html","c5605e2c9835eac68593db9338d959a6"],["/archives/page/3/index.html","261abd65529425e20a94868402b9a012"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","d2375d43d4e975ea3198f399a2fc5c4c"],["/books/index.html","87628fcfcc5d1aba11dc57a7a0739965"],["/categories/index.html","a566e5bf4c81b69fa1d77c344a45c988"],["/categories/博客搭建/index.html","a4e77a1010ecd5868ba43df26aedfc73"],["/categories/生活/index.html","eb7a3ad2a5dc238da378d66148021fc3"],["/categories/程序代码/index.html","e0cd55ff48e74b4b2ac1ebd740ed6741"],["/categories/解决方案/index.html","4225032ee92c8ba57b8021e6b2bf1a71"],["/categories/读书与生活/index.html","7f286bc47af9a3fd5ce1d401e2e5f2bd"],["/categories/遥感与大数据/index.html","085949996c2916bf630122efb052c96a"],["/comment/index.html","36679fb3eb17cc846fed5d459b5c1f36"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","e32e783745251b4fcc3bb229445beb8b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1ef6975b8eaaa15fd2f859c6206ed7d6"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","42c1bb881eee628a6b1a4348f6842f02"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","18b0e2ffbc293e511fe60b9b9394c812"],["/music/index.html","21e9336c6c0d373358c1f067afa44f9c"],["/notes/index.html","e853c953f788a58a80f4eba0e38d1358"],["/page/2/index.html","add3fd1b313bd4eecd26b60cf03daaa2"],["/page/3/index.html","f3371636ea48f2f1c8d6faddd7c2b943"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","1e181adf67b25e812d656f834c5b06dd"],["/sw-register.js","7c131f8fa51cc125ef28df56072ec4c1"],["/tags/C/index.html","02c3113e747e5f34ee698b2c3956b5e7"],["/tags/Hexo/index.html","5a27f080462598e3e99be04f46067758"],["/tags/Python/index.html","991655b5a84b634bb295515a395cb61c"],["/tags/Python数值分析/index.html","d2995fec3492ee415a619b4cbdf98086"],["/tags/Python数字图像处理/index.html","500cdcf17578408f0b3e840844cf387e"],["/tags/index.html","d78bc3503346d4869fad2b4bebd6ca56"],["/tags/人生/index.html","454dbbc35776d18d7044507e964d2611"],["/tags/生活与感悟/index.html","ecf46ec83da153a2ff7b714138eac7c5"],["/tags/网络与浏览器/index.html","5231b395b5dded2433d68328e72db980"],["/tags/诗歌/index.html","8703ebc7b9d643e3b84d092f3fb68ca9"],["/tags/读书与生活/index.html","ae65849971691ba333aff8e7461eaff5"],["/tags/辐射传输/index.html","0295c48062433cbc3eb08d4fa726060b"],["/tags/遥感/index.html","14847bda42d2b7e75940509906c91e33"],["/tags/问题解决方案/index.html","c2046251f23b3ad0877655accb92d84c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
