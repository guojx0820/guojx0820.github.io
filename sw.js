/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3a1221671a68f2b3c73f7be6210cfd4d"],["/about/index.html","2c9cff772b768ad149411eed2788f7a5"],["/archives/1033b493.html","291fdc6fc03df6cc5e8dec6ff69c95df"],["/archives/1abb07a6.html","8029bba65916749455e61f11686f3e8e"],["/archives/1def5f0d.html","6b5b554047799b490592753f8057aab1"],["/archives/2021/03/index.html","45646113cbfaaf61077ef6f603545eb0"],["/archives/2021/04/index.html","6ba390e8a0bfb51fa668007ff20be55f"],["/archives/2021/index.html","1f6c0a230aa410eecdc82e9cdeccd14b"],["/archives/2022/04/index.html","c0d9be95e3387497137f6b388595eeb7"],["/archives/2022/05/index.html","b82220d26fa47d2769a871a10993f6d0"],["/archives/2022/06/index.html","b2535fbf44e899acf4f2e10b463b94e2"],["/archives/2022/index.html","8e9d3c72524df413d83bb48b561a6414"],["/archives/2022/page/2/index.html","bc9758ef9e467a97f339cf4169f73b3c"],["/archives/2023/01/index.html","6edbc448be0da1ab9e745fb775a626c1"],["/archives/2023/02/index.html","cd2ce8c8ff2429daf79b3785537854c0"],["/archives/2023/03/index.html","329c6356d2801cff38c69bc0beea1eb2"],["/archives/2023/07/index.html","715ca98a82cdd141f54290e63acb86bf"],["/archives/2023/09/index.html","de7fce1f6b4aff34f2a1b1c6a458e563"],["/archives/2023/index.html","0a766313be822720eadb056d5ac43804"],["/archives/23cd4859.html","41bb2cf1bbf52da65fa1d57497eb7300"],["/archives/266295d8.html","04302123a6db84d552d53808efaa3c7e"],["/archives/330ac4a4.html","8ea9edc770bf994162116755fb0126cd"],["/archives/3a816938.html","6e70e9bd4983a8746f72c5786bd0462f"],["/archives/4360a9bd.html","f49a5d8c4d3257c2702b06e51835d889"],["/archives/49977e84.html","239d3e5a536e57e7c2c3856136cc7e5e"],["/archives/573e690a.html","f45d859dd44371fc799cbe6e6c9f8bc7"],["/archives/57eb0d7a.html","24161dab021a5901a740a9c401590e05"],["/archives/58b02e48.html","3a91d61eaf7b48d77da0a3b03e36d452"],["/archives/59a3b95f.html","ef5005cac1af7d591a8507241fb23942"],["/archives/61521166.html","33ac19c964f4a5bb80f112ef7281f478"],["/archives/6f5df5c1.html","e2b9cfd1dbc107850dc549c5df625cb9"],["/archives/7576230f.html","935e56816bc81402e8f4ea6721cc577f"],["/archives/8063fed6.html","c01173dfa45567415a15eda37d9ffb05"],["/archives/8c1f6a98.html","63a004c67701d434115aa4ef048d8a49"],["/archives/91104203.html","56c26a4e5ccd8758fa73fc0179b27cbc"],["/archives/92a27152.html","fe46d4af4f50a0d1af30ca575176154f"],["/archives/a1db3116.html","f4fd29bc370612405db6e6bff65d2527"],["/archives/a8ccf4cb.html","e2bba2c842cc7cfa0f0f12a82e3ebf3a"],["/archives/b7563557.html","f4c4c149b8b740750e0233df2115bf17"],["/archives/b9d5eb5f.html","1ce86405b070f35f796d612b1e765ca9"],["/archives/c144f20a.html","1d26dbd82f7e75367b7ec34f804555ea"],["/archives/e84af901.html","39f0b7471aca9ea993121a8219dad01a"],["/archives/f3ecd78a.html","423e8781806d67d79716d8c93402172a"],["/archives/f863e629.html","403beed81a20251376430d1ee1029677"],["/archives/fe82aeb3.html","9f0d651bbb84207e56a86ccbc5ed5a92"],["/archives/index.html","9e840affec3f150c441787b38c45078e"],["/archives/page/2/index.html","f54db06c78771f0bd919a8bf2af13b07"],["/archives/page/3/index.html","b8b7d8ad5536c1ae3c2446b2f7f26289"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","bc7e336f29e41dcbc9e4e3d5d9d3ea08"],["/books/index.html","dbb24d22fdbbcceba514bf05c1d1f28d"],["/categories/index.html","a9e4e66fa5f3c2d9ff11255384baebdc"],["/categories/博客搭建/index.html","00ef92419623917bfa4f6dab7f23b1ef"],["/categories/生活/index.html","f23ddfac5f5b2e9412c6e0b0eec9f50f"],["/categories/研究方法/index.html","6b17351b34b31fc6a7e32a5e0b32089e"],["/categories/程序代码/index.html","35e4d1480c74fa51408f798b05eb78b8"],["/categories/程序代码/page/2/index.html","de1d4a4439f4e15cea4495529b3679ac"],["/categories/解决方案/index.html","85232cc1796c276f20d576712560a6c0"],["/categories/读书与生活/index.html","60abd8d6c3e5071f6712988449fe56cc"],["/categories/遥感与大数据/index.html","ab4afda5ca57418057352ee0416ee846"],["/comment/index.html","1f5caa0e25184c122bcd35522a530697"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","8b8b50ce02a2b857821c5ee57f12d298"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6704c0a6790030b764e3e7511e68f0e7"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","b73854a7b1aea45a5a355db7f99bced0"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","fd1b2e706937eeba742e3804ecc31609"],["/music/index.html","4fd5fa71a2c873838ecac86aaa38e041"],["/notes/index.html","8ae4f96333b1bc55d42aae679ca06a86"],["/page/2/index.html","ad2608e5225cc14a356f52694111ae4e"],["/page/3/index.html","7c64c75caa95555372010dfa6440c2ff"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","063b3c292caf536df6a15e15a85fd4ff"],["/sw-register.js","921697129aea2600e8ec96d5b08be48b"],["/tags/C/index.html","326281bbf6bac2296c0aa6ae81826a42"],["/tags/Hexo/index.html","a1c61276acdfb8f603821aef6b28421b"],["/tags/Python/index.html","ab8fa54b52b5bed891720bfec9643332"],["/tags/Python卫星数据处理/index.html","c292cf4bc9883e4f0010367a55ec0cf3"],["/tags/Python数值分析/index.html","2f2f79112155f65304fe157b5669b7b2"],["/tags/Python数字图像处理/index.html","6e23a5ee52d4ec87aa9f01d6d32ffa8d"],["/tags/index.html","4afd9904d89cb0b4319dd9f9af7494bc"],["/tags/人生/index.html","effdf8def8b62935fddc68d6ed601bde"],["/tags/大气与算法/index.html","f9adb66aac89d2c2c9f191aceaf4bda3"],["/tags/深度学习/index.html","03ccb33e721ae648ebf1b03ec3743cda"],["/tags/生活与感悟/index.html","2b5d794578339c90f54edda1fbfb696b"],["/tags/网络与浏览器/index.html","3fa0e39877684d6ac03d5ab71e3b77fd"],["/tags/诗歌/index.html","acf483d8a67daa31a50459fa66a55cc0"],["/tags/读书与生活/index.html","e280aed7d721485d9f3e1cc919b2c82b"],["/tags/辐射传输/index.html","d621f81813e51534d7e5468534cbba37"],["/tags/遥感/index.html","fe096e8c0b4eb03a9e994c482976b47f"],["/tags/遥感与大气/index.html","93bfb2e26dc972c23796924680cf57cd"],["/tags/遥感影像分类/index.html","ba4dd7a3eba27fa8bffa444b0637e965"],["/tags/问题解决方案/index.html","e1e9a27e964fc4ce4216a8dab723813a"]];
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
