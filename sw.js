/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6e2a6bd7a69103e9c1b95c83dae9aae4"],["/about/index.html","1fb4c5b2d5a476ecd5c0d34711fb311e"],["/archives/1033b493.html","3d308bcfd809a8c61926396dcb2a7896"],["/archives/1abb07a6.html","7dcb861835a2c3f9cb803d22affbb99f"],["/archives/1def5f0d.html","9f7d2e29932a0993014e2c8e7368dac1"],["/archives/2021/03/index.html","4725540593f6c4490617b2eced521aa3"],["/archives/2021/04/index.html","82014b0857154f6c77f3411db6c110d1"],["/archives/2021/index.html","4d4f3171f4cc257dd9d86c4d3468b7d6"],["/archives/2022/04/index.html","ea0290c99e3095e5399a2945fccc9724"],["/archives/2022/05/index.html","fe3bc50bbacaef7e45d263905a1c287a"],["/archives/2022/06/index.html","78c0fe460b377f333e44919a2b138a5c"],["/archives/2022/index.html","51f0cfaf9931e6de0d2737c720aa23fb"],["/archives/2022/page/2/index.html","c113e49859071d83b6296ac72b53d3ad"],["/archives/2023/01/index.html","afb752ff1823cc6076f47f18cdff7606"],["/archives/2023/02/index.html","987edf1316ab64d8292d7564598d0f55"],["/archives/2023/03/index.html","d0d08adff68fa21513e0ba90e2041079"],["/archives/2023/index.html","c3697457d08f60aa3bfb52884937bc54"],["/archives/23cd4859.html","c58e6252344a3921642e5bfd3d68e59e"],["/archives/266295d8.html","9f298ce794cbfa5c216b9fe9b1b19027"],["/archives/330ac4a4.html","9ca397562be54cdc4183d134f924dd15"],["/archives/3a816938.html","8264c3b2ff2fe4a8c104ad7cf8e4a2bf"],["/archives/4360a9bd.html","b8cce5394342a8e329a573859bb9cc2d"],["/archives/49977e84.html","d5cfed870219804f97c9f199a431aa18"],["/archives/573e690a.html","561d3cb6053d189250aa3f03a265ff39"],["/archives/57eb0d7a.html","70e25a7fcaa8703235380ff59b791742"],["/archives/58b02e48.html","625d9477ccdea420bba6f3913f6a3353"],["/archives/59a3b95f.html","65f3131447f94a67d8047c15cb5db8ca"],["/archives/61521166.html","aeaed89a3e8d5f29c34b1c58e1ded0b1"],["/archives/7576230f.html","5ab0ef069f27893aa1355c81a8dc3036"],["/archives/8063fed6.html","47d80a8419be865a8a95f3ecddf56481"],["/archives/8c1f6a98.html","f643bbce6cdbd7dd29722ee3b62a1130"],["/archives/91104203.html","4f6b3dd8a8379f540146b85702f5776f"],["/archives/92a27152.html","87f043569f9d30599266366b1c20c6c9"],["/archives/a1db3116.html","9284a34b493d98788ab814f46028b8bf"],["/archives/a8ccf4cb.html","45e0ec9f8273f6529c40d1d1a6493910"],["/archives/b7563557.html","295c21a6bff17ed5c8e5ef927e7fee2c"],["/archives/c144f20a.html","0214a171d5be2dea289b39e81efefdd3"],["/archives/e84af901.html","7775bff0bb8df128a7341957c5affe45"],["/archives/f3ecd78a.html","5e58bdb2fd69f4fab6e90ebf44700f19"],["/archives/fe82aeb3.html","17eb0350788d35593648ef048073d625"],["/archives/index.html","c5e589edcf16b07d79e9622128a98847"],["/archives/page/2/index.html","22235d86578237c8b7dc254e97a6a30d"],["/archives/page/3/index.html","99c939ee28ba8f3efca8110ff8ac1c36"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","a7be5cdde213edcb9658c68fe5b36c61"],["/books/index.html","e0d502e88717ab4e7d4ef6301fcfd58e"],["/categories/index.html","71a8109513945b6ef74735bbff8195cf"],["/categories/博客搭建/index.html","5f70c2cf6d92c684d409394887f957b2"],["/categories/生活/index.html","833790db4ac534cee5279698a51aa4cf"],["/categories/研究方法/index.html","3be2dd5fa229ac7c183e1f587db860f8"],["/categories/程序代码/index.html","4fa4a98373e18fcf67e7564d73bbb5e0"],["/categories/解决方案/index.html","b267265f6e4ba03c42030106e2ed53f3"],["/categories/读书与生活/index.html","3e86823e7dfb9a8058685d63dd134895"],["/categories/遥感与大数据/index.html","4e2391236ef9c2b52d460a07093bddb2"],["/comment/index.html","ff0cc4e5c8f009b37fcdc1ccfd21f1d4"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","0cfc4cf0a43bd42e5d54600ccc4eb6d7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8d1bc0974b9806757aa1f75ce4d62c98"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","80bbca274de896291f5237d1c233670d"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","fb080c70cb13128eaecf75b921e29e54"],["/music/index.html","cb0abf1a8f325048dbf7ce9f88049732"],["/notes/index.html","e2864dfdd22f8af3885b873298d86510"],["/page/2/index.html","62d673dab2248c6f5d3c164ad42978c7"],["/page/3/index.html","ff7562695d46412562ee404f77ad9fe2"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","21f4837301da2cc182eb4ea2fd6a41a1"],["/sw-register.js","50a9774ab1f2b40f8f18645017a2e9e3"],["/tags/C/index.html","8283f2f38f291ed7a4baf600f5700d16"],["/tags/Hexo/index.html","90033d624ed1ffd5cff5df71a7a1b65d"],["/tags/Python/index.html","96fb5958eb8f918c86dbc5c40bafc616"],["/tags/Python卫星数据处理/index.html","132c5fa9e7bb2966b6096c4f269ef64d"],["/tags/Python数值分析/index.html","66ce17c0a0c0da4c5b142666577909eb"],["/tags/Python数字图像处理/index.html","ef0365907556430e118d3fb0010b3fb9"],["/tags/index.html","02aa1861e04d42f3b835b6cb13481173"],["/tags/人生/index.html","80a05b63b088c717d447b9a957e7678e"],["/tags/生活与感悟/index.html","83c1990530b1db857d75df3bd3d14914"],["/tags/网络与浏览器/index.html","a3f71993ea27eaf280f9309ea884abe4"],["/tags/诗歌/index.html","6d22585d2c0a26f386c7ea7299d4e514"],["/tags/读书与生活/index.html","b4f98938def9a3a42ce1f7f94dbd8363"],["/tags/辐射传输/index.html","b6f7efc6ebc8a4bc0c55d974ff95da3e"],["/tags/遥感/index.html","81b4b1dfb20736e297441fcd835701e8"],["/tags/遥感与大气/index.html","aa832b5c66c43dd2b0296076d8abaf14"],["/tags/遥感影像分类/index.html","2e778ac6c21c1351bc769e01073fdc4e"],["/tags/问题解决方案/index.html","ddc8cf682e236a7242ca7ad3741ab84b"]];
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
