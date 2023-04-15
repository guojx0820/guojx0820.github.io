/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5547d8fdfbe355f95165280f7d21a1ac"],["/about/index.html","3338aeae438f12ef4fb224dcbe6db93d"],["/archives/1033b493.html","e95d9259c2782d7c151a18a5ce67e8c3"],["/archives/1abb07a6.html","aa6cb8e172669e1e8b3e1a3fcf381c93"],["/archives/1def5f0d.html","3feb8b75c58cec66763311ec24ace29b"],["/archives/2021/03/index.html","fc0d9653938563a9d9fc00c0d17ae0a1"],["/archives/2021/04/index.html","2db70ec3851490b08bd32d5d70e86a1a"],["/archives/2021/index.html","773f7a9a39ae2fdb4f3c6c887df4dbe0"],["/archives/2022/04/index.html","2de9174042cc7f9b123a07e8ba6f9716"],["/archives/2022/05/index.html","dae9a0fbc42128eb03aa076c8df631e8"],["/archives/2022/06/index.html","c23423dedade0f0bba8761ec0a71466e"],["/archives/2022/index.html","b2681b30470e69cae3507698d995be16"],["/archives/2022/page/2/index.html","193140f94cb9d12fcd1c8d299f73d006"],["/archives/2023/01/index.html","3bfed5d9502617c8dcaedce3c7c479a9"],["/archives/2023/02/index.html","ef6fc8368e779e1dde68a48e29a633bb"],["/archives/2023/03/index.html","50c1916af8512caa85844aa20a20ac53"],["/archives/2023/index.html","3b3a5a4fa0dd72e93db7b96d0afad0a5"],["/archives/23cd4859.html","303d30774acade9630ee2e5e98b09d23"],["/archives/266295d8.html","94a96513f9f9626cee7fb0ee94520b6e"],["/archives/330ac4a4.html","361df073554d8ee9a44c956312e28617"],["/archives/3a816938.html","0b3e9c0f3d8483f991f7a4360b239ab7"],["/archives/4360a9bd.html","954ecda9106cd1ec872d0ed6bf93733d"],["/archives/49977e84.html","9c02e5b2c78b3040c621b1c3345fee60"],["/archives/573e690a.html","38e715eb5a433cd29b7b6679fbabac34"],["/archives/57eb0d7a.html","06e00013eae5988c7a1592c083b6f764"],["/archives/58b02e48.html","ac97794e4081faf4bb8cf46495bc1bc7"],["/archives/59a3b95f.html","b2461d257c94fca4b4a34da8b04b361c"],["/archives/61521166.html","96314257442cad045fe5445d38df299f"],["/archives/7576230f.html","d95c049007343b37b68818dd0de87d73"],["/archives/8063fed6.html","184fc2ab893281059a3bd0ed8f0a3d43"],["/archives/8c1f6a98.html","15dd52cb287a3a640b7dd77f4bb7b6ab"],["/archives/91104203.html","21da08bd93d4b3275953aee4c8f608ca"],["/archives/92a27152.html","31d16317e1adeb11a59910215963365f"],["/archives/a1db3116.html","237a96303fbf6ef5175ce195d54692fe"],["/archives/a8ccf4cb.html","26b8d77b7d86cb6bf009c31336a01ed7"],["/archives/b7563557.html","de0c8c4f71f0aed7699b9bd4e58efaff"],["/archives/b9d5eb5f.html","3b3f9477acb679ff29988fcce9296f3e"],["/archives/c144f20a.html","d2000bfdfacb097be61cf9406f5625f0"],["/archives/e84af901.html","ecaac5fe911ef50bb8cf8b0064d3a505"],["/archives/f3ecd78a.html","613cee9cce365220c03cc25284a2db30"],["/archives/fe82aeb3.html","8e818648422efa7b3fda9d34b452de5d"],["/archives/index.html","339f7183e2a451cd0fda8e0b7d0ceea2"],["/archives/page/2/index.html","5475ab79f68e380280eca48580b36684"],["/archives/page/3/index.html","ad5c068b1699ee75becc2e384c97459c"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","e17ca2347f2d60b3bc1746103e596c09"],["/books/index.html","fb675e38c8877e9484a8a4a0129fd7c5"],["/categories/index.html","5a2abc4a58c52b16a22b5f860736494a"],["/categories/博客搭建/index.html","90bc0637ea9d5f7a420fac625a000339"],["/categories/生活/index.html","d0c43f35d12e66634cab0427266ed7da"],["/categories/研究方法/index.html","598122ca61acc3ecbe81e44c38b07c71"],["/categories/程序代码/index.html","3ca0976c4678ac11eb160081684ed800"],["/categories/解决方案/index.html","b99446b24152ec808064370b797de99a"],["/categories/读书与生活/index.html","482b51cc99cc860a770d816052089158"],["/categories/遥感与大数据/index.html","1511d9a9426fc56aef33d50d33c1f83a"],["/comment/index.html","3b8f829fd039b6c456444df306edd81f"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","a5b4ace59f34ae52c819faa572ac0571"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","83ee75275f89b32922e13c4c650f28b4"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","32be4de6c49226e4e3f56c46cfd64620"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","7eb4900c12aa1ebdf591437ad6649a6f"],["/music/index.html","b9dfc4c7d31f61f73f612847a33db527"],["/notes/index.html","8261be7aea05de6c581dcf4c0af2f626"],["/page/2/index.html","f0faf34fc69e2fa9f77f6d40a59ae992"],["/page/3/index.html","ed7c2c46c34f57cc81b7c0c02e859efa"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","51fe132ad5599baef7abde445e589d7d"],["/sw-register.js","e9af967a91e1f8ca2d6e01dac073cd2f"],["/tags/C/index.html","cd43e8d3b71f3a05c97018212c65dfa2"],["/tags/Hexo/index.html","f70f3e16fd53ec2ca14301b7bcf96b11"],["/tags/Python/index.html","69c3597facf3a6a4a1ea55088ff7b336"],["/tags/Python卫星数据处理/index.html","62e333ff3e5bda2c5069258f968a653f"],["/tags/Python数值分析/index.html","ee279c8e1e6ce9058aad28cefe3c9454"],["/tags/Python数字图像处理/index.html","8b771bafdb20509e831eea615439e11d"],["/tags/index.html","91bb189ce4a04ba55e920f6fe288fed4"],["/tags/人生/index.html","e64cf0d961757473866556d44e4093c9"],["/tags/生活与感悟/index.html","81f56d56afbd03ef364d74df6d3a36aa"],["/tags/网络与浏览器/index.html","3479ec40176bb90d9dc29d78a584c694"],["/tags/诗歌/index.html","001bffcf56d40e6af94d0512f8f74ea0"],["/tags/读书与生活/index.html","bf3a72aa2dd3a7132673212a4cabb385"],["/tags/辐射传输/index.html","9ae77d580dc1d32bdb62503e4d87efbe"],["/tags/遥感/index.html","f20bd4010348cc948562119698d76222"],["/tags/遥感与大气/index.html","f3d54da23ac0231dff9080d1e6761295"],["/tags/遥感影像分类/index.html","25b8b481089309a123276c1b846ccac2"],["/tags/问题解决方案/index.html","35b24525d956111e32608b17a1b35bbc"]];
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
