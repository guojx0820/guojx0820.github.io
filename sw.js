/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","160f804f05b1172ad36274d018c6b8a2"],["/about/index.html","8596799f516c3fab0a0cd2efc8725900"],["/archives/1abb07a6.html","b100f52091805dc1e7a6b080ad004f27"],["/archives/1def5f0d.html","53c123eee72c19b89986f56cc52035ff"],["/archives/2021/03/index.html","8924b569ca63ac95a1e1cae95b184df8"],["/archives/2021/04/index.html","e1367e4767504e93253f83ff22fc1cb3"],["/archives/2021/index.html","5d0cb42e548a07d0fd9dfa94ab8d42f6"],["/archives/2022/04/index.html","f15a8165f5065a9d5b44428873022c0a"],["/archives/2022/05/index.html","d9bf2c31a7e043ebd3ce32404eca7d9f"],["/archives/2022/06/index.html","85eb48907d6e7a6b8c1a55964d5669af"],["/archives/2022/index.html","9f38fa9bf626e420082ad4e77f7abae5"],["/archives/2022/page/2/index.html","eca44e0fa992551ded408e312bea5e3a"],["/archives/23cd4859.html","bbb29d9814099602fbaddd8c1f073ee2"],["/archives/266295d8.html","a861cad4670da106cf84caeb8f5501c6"],["/archives/330ac4a4.html","6585f2fef8fff3bdf1bd64c4638f5e62"],["/archives/4360a9bd.html","99b5eac0ba3cd8ea5ce232f6a40b7e1e"],["/archives/49977e84.html","310e1eb2729533d4fe01faf05c1987cb"],["/archives/573e690a.html","0591f094a6a5809747122dd6b146935f"],["/archives/57eb0d7a.html","94d43374254a53b6164f6e1f1bb0a8d3"],["/archives/7576230f.html","2c0eed1ed1a197946c39e3f868e378d6"],["/archives/8063fed6.html","5c692a66637c2d366fccfb92bfee7892"],["/archives/8c1f6a98.html","1b35470e361db4d2240c7ac0acf4ea71"],["/archives/a1db3116.html","205b059537cc9db8bc30686153f1b376"],["/archives/a8ccf4cb.html","caede0c2d23ef5249d356a87eb6cee03"],["/archives/c144f20a.html","9f30ededc90c09c833b4ea95cd7533db"],["/archives/e84af901.html","ac47a7ed412d9b0243defc904a4ca933"],["/archives/f3ecd78a.html","d891ab381d3365513ea23014332c38fe"],["/archives/fe82aeb3.html","30745a2a97119721d83f68575683462b"],["/archives/index.html","ede16ba074514feb1d9965fba4740a7f"],["/archives/page/2/index.html","8548f2c88393716ab0214a3d45c854b1"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","63f6f33c39f178beac059996a63b7c61"],["/books/index.html","f8237a94925c089fbd30fc3cd0c110ac"],["/categories/index.html","d6c16913a6acd36eca2b2744947d1f7b"],["/categories/博客搭建/index.html","a5cd65128593cf84a329d4ba798dfddd"],["/categories/生活/index.html","e1012c5764f8dd795d798f5d7696757d"],["/categories/程序代码/index.html","a449d2e59394a24e9c8d9793e2cb66cb"],["/categories/解决方案/index.html","dd5867e1617e792a6ddb030e4a5b2946"],["/categories/读书与生活/index.html","60d4eaf307992d11513062dee3f2780c"],["/categories/遥感与大数据/index.html","27a03a62469684056494aaa5844192a9"],["/comment/index.html","5eb00dc17b2a8294d5c8c3dabf840d44"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","de94728f22bf28db242b5717b8719429"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","80791da7a2d04e1006c87daa5866a2b9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","beb248efa33d283c175bbe280a110566"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","70eab46af040942e7fcf7eec46b9098b"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","b766a2557d5dd421d58c012838197c7b"],["/live2d-widget/demo/login.html","1ef70a3be900a00a8f9058620a57cdcc"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","262f8af270f149673468508b582a2d82"],["/music/index.html","e60eb48db82dd28a0d94f30923ba6dd7"],["/notes/index.html","a6ce73220407f4a355cdf31cd2ff33e8"],["/page/2/index.html","36cd76208e99cdf9c413cb6098742e76"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","359d7af145cb906e5033c3fd629847a6"],["/sw-register.js","71b8901025df5cf6eaf6c2d1be58f8ea"],["/tags/C/index.html","3fea93c36a29a36be993baf6e9bc784c"],["/tags/Hexo/index.html","0778a9245f7fffc393c07d34ee466571"],["/tags/Python/index.html","709037ad3fa09523046ec6f5398c67db"],["/tags/Python数值分析/index.html","107738cb1ee617217b8bd8539494ac6b"],["/tags/Python数字图像处理/index.html","f6d6d7350abc9ccd55366809b6bfa7eb"],["/tags/index.html","e0682e4cf73419f3fdf52aaccce3ec89"],["/tags/人生/index.html","48128262d0197a55d98e7959e1a04ec4"],["/tags/生活与感悟/index.html","b119a9cd76897e0b19132e3d1a75a59e"],["/tags/网络与浏览器/index.html","e6f3cf46f459c141046417dd28a74d6d"],["/tags/诗歌/index.html","d88f7f377e43bc82572bbd0ba40974cd"],["/tags/读书与生活/index.html","357e248541fe4f945c953cfbdf868181"],["/tags/辐射传输/index.html","5665a6927569a6fea05e8c87b3891ac6"],["/tags/遥感/index.html","c6c8aac98c21b3154b8ed1e3c440f47c"],["/tags/问题解决方案/index.html","5fdf6c78046aa2e19867a6767084d635"]];
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
