/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","735ac3549a2f52cae45bb273fd3dfdb6"],["/about/index.html","0218ecb0646c61151c463299d500fb96"],["/archives/1033b493.html","e95d9259c2782d7c151a18a5ce67e8c3"],["/archives/1abb07a6.html","aa6cb8e172669e1e8b3e1a3fcf381c93"],["/archives/1def5f0d.html","3feb8b75c58cec66763311ec24ace29b"],["/archives/2021/03/index.html","03b208fcdf58882424dbb2f4de2b22ac"],["/archives/2021/04/index.html","b49917bd7fa2aa49dd4aa5ac47427e19"],["/archives/2021/index.html","62f5e6da7624628dc264af53dfd9cc57"],["/archives/2022/04/index.html","a95402163494d66f3eb7f6c16033b2fb"],["/archives/2022/05/index.html","6e387dc832a99d06ee588b6c07a05a57"],["/archives/2022/06/index.html","82d68a077c5d1810c081fa813ad0b484"],["/archives/2022/index.html","9ba14591247fb5df4a7b1d7a1c2e74f9"],["/archives/2022/page/2/index.html","030dd127f67c775958c8b364004dcbac"],["/archives/2023/01/index.html","001710a21c3866f3b9ae95750f9e5b49"],["/archives/2023/02/index.html","09cf129c632c38023b5c4b633008afe3"],["/archives/2023/03/index.html","7fd7529ffda7e981ca4734e1a353567a"],["/archives/2023/index.html","b296ecb04e4bd65856d1a5f1e2482d38"],["/archives/23cd4859.html","303d30774acade9630ee2e5e98b09d23"],["/archives/266295d8.html","94a96513f9f9626cee7fb0ee94520b6e"],["/archives/330ac4a4.html","361df073554d8ee9a44c956312e28617"],["/archives/3a816938.html","0b3e9c0f3d8483f991f7a4360b239ab7"],["/archives/4360a9bd.html","954ecda9106cd1ec872d0ed6bf93733d"],["/archives/49977e84.html","9c02e5b2c78b3040c621b1c3345fee60"],["/archives/573e690a.html","38e715eb5a433cd29b7b6679fbabac34"],["/archives/57eb0d7a.html","06e00013eae5988c7a1592c083b6f764"],["/archives/58b02e48.html","74dcafc9e3bb5693f3db73e486b31718"],["/archives/59a3b95f.html","90a86d13abe14c666fd667ca870f05c9"],["/archives/61521166.html","96314257442cad045fe5445d38df299f"],["/archives/7576230f.html","d95c049007343b37b68818dd0de87d73"],["/archives/8063fed6.html","184fc2ab893281059a3bd0ed8f0a3d43"],["/archives/8c1f6a98.html","5e7e79b862a0621fed585ef2165a146f"],["/archives/91104203.html","21da08bd93d4b3275953aee4c8f608ca"],["/archives/92a27152.html","055c90d3e42edbad8ede17e4455cf03e"],["/archives/a1db3116.html","237a96303fbf6ef5175ce195d54692fe"],["/archives/a8ccf4cb.html","26b8d77b7d86cb6bf009c31336a01ed7"],["/archives/b7563557.html","de0c8c4f71f0aed7699b9bd4e58efaff"],["/archives/b9d5eb5f.html","35b70d4426843c99ed81e656f379bfe1"],["/archives/c144f20a.html","d2000bfdfacb097be61cf9406f5625f0"],["/archives/e84af901.html","ecaac5fe911ef50bb8cf8b0064d3a505"],["/archives/f3ecd78a.html","613cee9cce365220c03cc25284a2db30"],["/archives/fe82aeb3.html","8e818648422efa7b3fda9d34b452de5d"],["/archives/index.html","e43dafed4fe3764a14206806b99da49e"],["/archives/page/2/index.html","670b80176ace318d555af0b77033a3e7"],["/archives/page/3/index.html","9b7cc40e541e1383bfbb8d59678ba930"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","840a21d407f0675b7db2e6b56c981c41"],["/books/index.html","485d39b09dfd367b22eaf0aa31017bb3"],["/categories/index.html","2934fc0f4cf844ff6715727011dc76a5"],["/categories/博客搭建/index.html","05fa60628acc1afcd4aa82b076a1750e"],["/categories/生活/index.html","0117dadd6418697414ce8d238011948a"],["/categories/研究方法/index.html","2914cdf754a510819ffcc0cea53fd660"],["/categories/程序代码/index.html","a45664cd0fd20bf8db17700eb28969a8"],["/categories/解决方案/index.html","fc1e7811c4ba3acafe0d44536faac134"],["/categories/读书与生活/index.html","3ed00531de8c645c426815c9dfdb6dc3"],["/categories/遥感与大数据/index.html","3435969996e0b70252caf0b054320347"],["/comment/index.html","de6114ad6327968e2b059c9a720a5140"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","fd0f482684853993b2350d83bd37fd17"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1b48bda6a034646849f7088c7f83739a"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","c36095dc1ca08b644d65e01815b52aa3"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","4fbbb30059e950b2bfa430cf4b49156d"],["/music/index.html","43a7409beaaeaaee63be6eb387e3bfd4"],["/notes/index.html","f4e471b45a4bc42b9a08481558b65d57"],["/page/2/index.html","2d4168f2fbcb15c4042c9d131555e170"],["/page/3/index.html","0229d888fbc7db2e3ec7f737a90f87ad"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","7575362e8560597ea04c543e4465f57e"],["/sw-register.js","29de8f81f1cf0c3c1a067520abf0ce80"],["/tags/C/index.html","cd01d9e0e9e7464471c6e5aec2ee3abc"],["/tags/Hexo/index.html","198e6a82dcde05c6ef395bfba8313504"],["/tags/Python/index.html","5308eca82d39defc78cbad8a0085aa13"],["/tags/Python卫星数据处理/index.html","b5d64cf7e45691a22ec0b2bb4167fe38"],["/tags/Python数值分析/index.html","6ebbbd03938e6512e073427e9e3e34d9"],["/tags/Python数字图像处理/index.html","e2911191ee2e26fdb1e7b5cf203ef516"],["/tags/index.html","d62693d74bf6d483a3c1c08f94632563"],["/tags/人生/index.html","d5ffb5f31bd7625b6419529bae09d53d"],["/tags/生活与感悟/index.html","f48deea618dfa1f67831ad5055d157a8"],["/tags/网络与浏览器/index.html","7adfb492985105185b9feceed5e0358e"],["/tags/诗歌/index.html","bce34d0deccc9599263af6e84af6f2f5"],["/tags/读书与生活/index.html","08214b25d4aa7e48c3666d34a1a33f36"],["/tags/辐射传输/index.html","ead11263667689bddcc22711fb823f2f"],["/tags/遥感/index.html","24c24e8759240c7bc8969276e19e1d54"],["/tags/遥感与大气/index.html","9fbcd7c6685f8b015231e7e2f21791a8"],["/tags/遥感影像分类/index.html","42c0965cbc432d27f2568dcf3800eb36"],["/tags/问题解决方案/index.html","df65ffb79c5495ec16cc6b8ff0bcd0a1"]];
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
