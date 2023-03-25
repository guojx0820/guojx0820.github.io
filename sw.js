/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","772986a259338c26b4d25ec3242171c7"],["/about/index.html","89acca996b225f880d177bfa787b394b"],["/archives/1033b493.html","e95d9259c2782d7c151a18a5ce67e8c3"],["/archives/1abb07a6.html","aa6cb8e172669e1e8b3e1a3fcf381c93"],["/archives/1def5f0d.html","3feb8b75c58cec66763311ec24ace29b"],["/archives/2021/03/index.html","a4c45288f96602f5207eba3386fcdd55"],["/archives/2021/04/index.html","72f2842fcbd44201684535dd71077382"],["/archives/2021/index.html","7dbd9a0f38d2e8a6ee42f9db60b45bd4"],["/archives/2022/04/index.html","a30cfff7ba854a12381e8758780b3482"],["/archives/2022/05/index.html","eaac69a4d51386984cd4a8680571c723"],["/archives/2022/06/index.html","40fc6d4bc9ce0bba39d7cef500743d2e"],["/archives/2022/index.html","cf5444846894b8d896760d60dde727a1"],["/archives/2022/page/2/index.html","6f7e18135afb190e24e7376814f40ff7"],["/archives/2023/01/index.html","5d003519cb96d4d6c8c52313548299f3"],["/archives/2023/02/index.html","fbe566637176066ffdc5d9360f8e194d"],["/archives/2023/03/index.html","e7563333ebc35178ddb7baf1962e8e05"],["/archives/2023/index.html","15dea7efaf0fab79381840a8610a0bf9"],["/archives/23cd4859.html","303d30774acade9630ee2e5e98b09d23"],["/archives/266295d8.html","94a96513f9f9626cee7fb0ee94520b6e"],["/archives/330ac4a4.html","361df073554d8ee9a44c956312e28617"],["/archives/3a816938.html","0b3e9c0f3d8483f991f7a4360b239ab7"],["/archives/4360a9bd.html","954ecda9106cd1ec872d0ed6bf93733d"],["/archives/49977e84.html","9c02e5b2c78b3040c621b1c3345fee60"],["/archives/573e690a.html","38e715eb5a433cd29b7b6679fbabac34"],["/archives/57eb0d7a.html","06e00013eae5988c7a1592c083b6f764"],["/archives/58b02e48.html","01bbb6ed0850d38f77cb08de3a935f5f"],["/archives/59a3b95f.html","dce7f547d2eb9c8d0c8ae60b178422de"],["/archives/61521166.html","96314257442cad045fe5445d38df299f"],["/archives/7576230f.html","d95c049007343b37b68818dd0de87d73"],["/archives/8063fed6.html","184fc2ab893281059a3bd0ed8f0a3d43"],["/archives/8c1f6a98.html","6fdfce707d6697b69d4a20cdc42d5f09"],["/archives/91104203.html","21da08bd93d4b3275953aee4c8f608ca"],["/archives/92a27152.html","055c90d3e42edbad8ede17e4455cf03e"],["/archives/a1db3116.html","237a96303fbf6ef5175ce195d54692fe"],["/archives/a8ccf4cb.html","26b8d77b7d86cb6bf009c31336a01ed7"],["/archives/b7563557.html","de0c8c4f71f0aed7699b9bd4e58efaff"],["/archives/b9d5eb5f.html","30c2c63e52d4166b053f6c0b21f5e346"],["/archives/c144f20a.html","d2000bfdfacb097be61cf9406f5625f0"],["/archives/e84af901.html","ecaac5fe911ef50bb8cf8b0064d3a505"],["/archives/f3ecd78a.html","613cee9cce365220c03cc25284a2db30"],["/archives/fe82aeb3.html","8e818648422efa7b3fda9d34b452de5d"],["/archives/index.html","cae826184951d88ad1d2a078acb54eee"],["/archives/page/2/index.html","b7b1b3140a8b70f379e4272b22d77043"],["/archives/page/3/index.html","aa0f759bfbf7c45f0f21824f9a6c02f3"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","38007e5fb1dcd6573103ae7e41d60ba7"],["/books/index.html","26d4c08cb6c8b86dc44b27126d192edc"],["/categories/index.html","5880eebf21f7a7b4242ef4a3f98fcc0d"],["/categories/博客搭建/index.html","35776869cf6dbeaa6fef6738fe41d7df"],["/categories/生活/index.html","7440cec35a5e323ef323f439a88f9251"],["/categories/研究方法/index.html","ed43affa9ec1cc37eae1601f377d3032"],["/categories/程序代码/index.html","5a32570d439a2c87393d2664988a9f6c"],["/categories/解决方案/index.html","99a15d42b11096059709b72407c3b6fb"],["/categories/读书与生活/index.html","f4b6187c8fd6805d4dee7f357983c61b"],["/categories/遥感与大数据/index.html","ed2128dab1c288c029c965cb4fcfe3b0"],["/comment/index.html","847789fbf1c3803d8de3003df463ec45"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","1d0324e1d6f9f93849c6476259566e60"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8e6b0d7ad054167270b4b90754fc144c"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","a86ab0cfe4508756395f1baaa99c7584"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","5de8f4b32a2971fe9f0588b584a41feb"],["/music/index.html","ba2d35f64d4a67c0cfd997d8cfd7e008"],["/notes/index.html","dac2ca75fb73ade169a4d1d6d132a527"],["/page/2/index.html","2fe3dd45717dd517135ad09de367ef59"],["/page/3/index.html","5a9d2c812ccb04a1ff1f895bd748c6ea"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","95f72cfa0eed93235a0336b1cab72f21"],["/sw-register.js","4f4229ec9ab34289a50e60ee02e063bb"],["/tags/C/index.html","9e4a5a01552b988d0e100ff084a19c2a"],["/tags/Hexo/index.html","48ec5b9f95d03e847764eed203b29b64"],["/tags/Python/index.html","1fd27897f6ced1ec7f9db9850b2e5dd5"],["/tags/Python卫星数据处理/index.html","63fa2ee96b660833f228f68124c3fe3f"],["/tags/Python数值分析/index.html","42e5547bb94ad1f41dd80a479ae5b5a4"],["/tags/Python数字图像处理/index.html","c85410313a1492cfe172821f6d8c3434"],["/tags/index.html","4c70fd2a462185a241161a1554727389"],["/tags/人生/index.html","725478bc86b20f0692d49974a400fb49"],["/tags/生活与感悟/index.html","0a8f7db77745d91d9f399060fcbbc09a"],["/tags/网络与浏览器/index.html","b4f5a16b704102ccf491fb35207412df"],["/tags/诗歌/index.html","445a5f2042c82b15753e9a0416ce1d07"],["/tags/读书与生活/index.html","7b55d7e9903a49e284331eed73099227"],["/tags/辐射传输/index.html","2bcad3efccba48431b4c0a0774c47f88"],["/tags/遥感/index.html","7a1e853a2eca2bd5eeb51a69d345732a"],["/tags/遥感与大气/index.html","ce1a3b9cce87701369b72a5e6bc18f57"],["/tags/遥感影像分类/index.html","9f2a9f1970b57d18a645a75f50e976b4"],["/tags/问题解决方案/index.html","e46501daa2a72c420b9fc658d507e697"]];
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
