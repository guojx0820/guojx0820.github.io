/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","21dfba42d59041d5dd07ee2548a80abd"],["/about/index.html","fe847d4396feb573dbcc08d93b289e03"],["/archives/1abb07a6.html","8563685f8d2051779f4261acbc31ba67"],["/archives/1def5f0d.html","7a48876d33a7b6443297f21496971aaf"],["/archives/2021/03/index.html","72404925c6b9f0b36a3ed7e66c09f734"],["/archives/2021/04/index.html","360e02dd1af8761681a84dbc5b1a0650"],["/archives/2021/index.html","0f2266232ea1de0e01aea48c1ebae2b5"],["/archives/2022/04/index.html","4caea076fbb64ed3db2eec6c2659aa07"],["/archives/2022/05/index.html","38269c351a3399760c75a5fb5ae152cb"],["/archives/2022/06/index.html","f1e03e0cb2de172fabf3047ed4d6b32e"],["/archives/2022/index.html","557ee2cddaa6f0a69e91ac260ac56681"],["/archives/2022/page/2/index.html","63dd7c877d24039f6a17b07a3dd6d034"],["/archives/23cd4859.html","1676e052d150e6c65062f9167ff1e3fc"],["/archives/266295d8.html","28b3b25ea41df4600d0e8787c13e884e"],["/archives/330ac4a4.html","3047d01b52762882190789f64adce31e"],["/archives/4360a9bd.html","ad32bb781860c805bfe3c29370b1fe2c"],["/archives/49977e84.html","bf38bf7da1963dbefa3e9ce6476ebaa2"],["/archives/573e690a.html","334e6037a325c2b342e2f16021360525"],["/archives/7576230f.html","db4df4dd3bf7f2054b6732153be94f6e"],["/archives/8063fed6.html","8546586e5c61e4c7095252bebbebb5f2"],["/archives/8c1f6a98.html","b1bf4669863ed8ae8afe18a083d0f93e"],["/archives/a1db3116.html","cc36bd7023556b99e7252a32e29f01de"],["/archives/a8ccf4cb.html","c65bd3097c80eaf5c3a4213e0dd795fc"],["/archives/c144f20a.html","b5918868abf510c7760bacde2f4c3389"],["/archives/e84af901.html","8123ac2b65f8102908a7e759a260676e"],["/archives/f3ecd78a.html","d5167e626ef196a7c61b04facbb46801"],["/archives/fe82aeb3.html","09b766a91ca653d9fb5ea028fb08a200"],["/archives/index.html","bcced35ac294b6f42f7bc2f75f542dd0"],["/archives/page/2/index.html","a33a9568fef26861b78adfa008f99104"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","aa59b4b3d37b1675a9dead200887ad4e"],["/books/index.html","7312b448a17bd4e46bfdefd52969f095"],["/categories/index.html","660849da67b512e385593c2a439b7212"],["/categories/博客搭建/index.html","a07ee76e6bd173708b1e62e3d862cd18"],["/categories/生活/index.html","fc203eb57b49db56e4a634fed263c963"],["/categories/程序代码/index.html","60a4ea9563a59cfe1f1ec9ed3eb9ee85"],["/categories/解决方案/index.html","cf2217340157a35ae163e3ac13892422"],["/categories/读书与生活/index.html","415c11d7f94754f5b1791a135ecd121f"],["/categories/遥感与大数据/index.html","a367007d0cb6fcb5e204a7bb0c1145f7"],["/comment/index.html","b331a57f7f01097e337de5fbeeb741f2"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","de94728f22bf28db242b5717b8719429"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","1dcc103d76768788f0ab734bfe7f0dc8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","de803c6c015422486cd307112aa16dae"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","8f14366f04afcc40ef74cb2035eb486c"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","b766a2557d5dd421d58c012838197c7b"],["/live2d-widget/demo/login.html","1ef70a3be900a00a8f9058620a57cdcc"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","dfa97d522bbda507da1c3f79293c6725"],["/music/index.html","83fd2e944b93366c4dbdd4d4c8bcea35"],["/notes/index.html","22b732892728e9ca9bd3baa584066a04"],["/page/2/index.html","847dec40cbac59fd1eba15c824279711"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","c026e86801ca62eadbd28f78e8f34ee9"],["/sw-register.js","52fd7d95abf2548f8b1ada6e4505b896"],["/tags/C/index.html","fb8ba884fbb23e962c07f4dfb6c1bc90"],["/tags/Hexo/index.html","f881667a2fa5b9ddd39324a1c7453974"],["/tags/Python/index.html","f1b078a3724573cf8e977386eb65e6fd"],["/tags/Python数值分析/index.html","51ac2029ed09cc4a13fd10e129586424"],["/tags/Python数字图像处理/index.html","9d5f2e47505f3ca8cb5e62a9760a8175"],["/tags/index.html","66db46a3b7aa517261ba5cad7a72d054"],["/tags/人生/index.html","27bb82007faf799a9ecdc55e27c4cf8e"],["/tags/生活与感悟/index.html","b38a261ecd574cdc64c13ea4ad4aaf49"],["/tags/网络与浏览器/index.html","91d1d8da2dbe39556e7db7e860b8d810"],["/tags/诗歌/index.html","ec198df00497fff8e1cd0b0aef5411a3"],["/tags/读书与生活/index.html","6afb69efe1f4ea5b829b76c7572a725e"],["/tags/辐射传输/index.html","bf7708cecc1e4466ae16bd176848745d"],["/tags/遥感/index.html","7eab8dbb0d8b313b4144bb61d909b0af"],["/tags/问题解决方案/index.html","1e945d337554df9ff28e719fa21419d0"]];
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
