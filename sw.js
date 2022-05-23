/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","48a7c7631356068343b6129c891cc8ea"],["/about/index.html","1bb3349bc1f20aee275d0b8a17b3f345"],["/archives/1abb07a6.html","656219727003b93cb59751b42d8d44e5"],["/archives/2021/03/index.html","5e9db87dbd0a83472c3abdc4d8bc50c6"],["/archives/2021/04/index.html","afe97ae6f98b950bacd89076fe3df9fa"],["/archives/2021/index.html","592723bb63dabac5916775005bfbab01"],["/archives/2022/04/index.html","8229d134ff6c2c93e04d6d5cfd95b30a"],["/archives/2022/05/index.html","5ada94e51be749f7efc734c15a5b4d82"],["/archives/2022/index.html","e2f429631a30a0d27faa58c1ae01185c"],["/archives/2022/page/2/index.html","60bad03ee9d74305db2cb15065487ff6"],["/archives/23cd4859.html","a096de6074dc8e540b63ecfc8c30bc23"],["/archives/266295d8.html","211d5bdeb512eb2c19132bd79d5900d7"],["/archives/4360a9bd.html","a305495e749324f61a8e089afc8bdccb"],["/archives/49977e84.html","775c70904dff8a7a92a23998be83efef"],["/archives/573e690a.html","e954a6011e2a3ac66d48b32001e7260e"],["/archives/7576230f.html","c12fe22a76a76e0fe45be04b4d5c2255"],["/archives/8063fed6.html","10716f20345e955d21ca365081e7f703"],["/archives/8c1f6a98.html","f730018b9737347b514e4c14fe00a541"],["/archives/a1db3116.html","b94c08436f88903336a7db3fa3e05ce1"],["/archives/a8ccf4cb.html","d93bcc8af8a6d0282a9888b785d4eceb"],["/archives/c144f20a.html","bbcb5d9281361f0e638733d4f090c27e"],["/archives/f3ecd78a.html","5b7367c32f8a7975a0a50433447d2456"],["/archives/fe82aeb3.html","5cf8b131e52d401357fde99c279ff500"],["/archives/index.html","36ce9dbcba113e2c7f16efe43a8b8bf3"],["/archives/page/2/index.html","6355b81e5ac35e38ce05b712ed706d84"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","bac969933ce1e5c1c9f0edb970ac14d4"],["/books/index.html","a7556cb7b99df7de68254fc834c0e245"],["/categories/index.html","29a08c3940675e6d4c3bca691f5cf1c2"],["/categories/博客搭建/index.html","365af884505e369854cc2ec149f9a8dc"],["/categories/生活/index.html","245dead9b9587784c99764092edddfeb"],["/categories/程序代码/index.html","dcf376f936133046a45e9f860dec20c8"],["/categories/解决方案/index.html","853174d3edb4f4b6ff0ac5dc0e36e559"],["/categories/遥感与大数据/index.html","b7702e2ab5c1b06dd474f07022c922cd"],["/comment/index.html","b0c16898841d864e9cef90853fd0267d"],["/css/index.css","f2bdbbb4db75403c3c74e143a02093a4"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","ffa01f248e4e627b177123da466641d7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c03ec3bf7120a7a6114124807df877ae"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","5fff1d5dc418253572c37822a80625b0"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","334b09a23ecb30ef0abc8fbf22197b6a"],["/music/index.html","c8e29d3e1b37e67bbbdf8d66aaeaaf5d"],["/notes/index.html","06ca7e9469c750389b2edc38cddd2140"],["/page/2/index.html","c554b2f3aa62997af5ee5f7c59bbfa77"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","6af045a128285988400b681d1cdaa3eb"],["/sw-register.js","0cdeaad230cd14fe60788e9535246822"],["/tags/C/index.html","6624a4d7b45f2daf8ac38dc6faf0fabe"],["/tags/Hexo/index.html","88ae067769a3438b9658dfa44acc2c96"],["/tags/Python/index.html","a578b88df315fb6f5d6e1bd145ffae4b"],["/tags/Python数值分析/index.html","15556bc922773d3e9b13bd64791e83fd"],["/tags/Python数字图像处理/index.html","4adbd6c2930e0d62999c520b9aec5164"],["/tags/index.html","9f30eb5aedeb2701802b95c1c01b43ee"],["/tags/生活与感悟/index.html","7098bdc5dcfd724ccd78ed257ab7c7fc"],["/tags/网络与浏览器/index.html","34dd05e67a74a601ded8e40bdf311a9b"],["/tags/诗歌/index.html","e643bf839212e3c63a6832ce36a49e53"],["/tags/读书与生活/index.html","a27b41b8396904cbc5f9f91cf56c759f"],["/tags/辐射传输/index.html","3ab18402686c123cc6deb7ca0ea44709"],["/tags/遥感/index.html","beb279f5c86de7374ea3b1b418acd091"],["/tags/问题解决方案/index.html","dc278c5a8a231d6f8eddda315924edaf"]];
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
