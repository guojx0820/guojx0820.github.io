/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a7cca12c8570af352ab08df4d66512c9"],["/about/index.html","dd44ecd2949fa7078744846c726b5297"],["/archives/1abb07a6.html","0c5f4637c15ada52c799f15b253caf05"],["/archives/1def5f0d.html","31b0a0b5d444371ed335034306a30202"],["/archives/2021/03/index.html","b07f4a2d447e344d78a21c1ea6913eec"],["/archives/2021/04/index.html","2d6b492c07cc61c8b599f1a06fec7ff2"],["/archives/2021/index.html","2ed7eb4fcc853354b1d060f36e67371b"],["/archives/2022/04/index.html","3c5d67e6a419c69cb5cc7d77ac3d46f2"],["/archives/2022/05/index.html","b79bff78263fa532cc7eafa827bb3db2"],["/archives/2022/06/index.html","69143de9312d8f6496fdd11439962348"],["/archives/2022/index.html","3831267287acafa69182ecc477d195de"],["/archives/2022/page/2/index.html","9bbfcb641724fa77925c03d2f700abf9"],["/archives/23cd4859.html","f98626712c6e6234fd856b7b02c391fa"],["/archives/266295d8.html","f1256dec69bbbf7c402a0725065b6a95"],["/archives/330ac4a4.html","7e9edcbf6877cb0e8404cf8fc321ecfe"],["/archives/4360a9bd.html","4954576d113769ba813e463fc45fc759"],["/archives/49977e84.html","0ea5dd1cbc9f0cbd86dd3260752b5a52"],["/archives/573e690a.html","4567c4af395bb713c65c77cafccfab05"],["/archives/57eb0d7a.html","8160b19218db95cd9b8e857fb4d980f3"],["/archives/61521166.html","ee6a48fd5761832aee527c47404b46e1"],["/archives/7576230f.html","6e3dd147152fcdfcc90f03c6fc1d5df4"],["/archives/8063fed6.html","5d3b3765e8b40ce95e18bba84a98da9c"],["/archives/8c1f6a98.html","e2745f32bf964fe9124c89e765169f7f"],["/archives/91104203.html","950c541a8e0950777a9710b5c273ae01"],["/archives/a1db3116.html","283456a0cd2f3f5e806ab9a2d69954ca"],["/archives/a8ccf4cb.html","6fe3b1efeb97ae4e097a27156d2dae14"],["/archives/c144f20a.html","082063ecdd31bc954babdf614f086901"],["/archives/e84af901.html","3c4b292150e8972e286d825ca7a5dd2e"],["/archives/f3ecd78a.html","e925f53dba15f05786bce65e2cace61a"],["/archives/fe82aeb3.html","67f38d41253a439a99b7a24c4aa83b42"],["/archives/index.html","7ab86ec4dc83bef4bf80604e7406ea67"],["/archives/page/2/index.html","767745f84675f9d4d132459e9693b49b"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","36b3e0813b8dffae98bad756f0ce061e"],["/books/index.html","4bb40108479ec7dcdd5305148c044672"],["/categories/index.html","48e175c87f94e4c20927b2349e241398"],["/categories/博客搭建/index.html","1f9394120ac11ad3e3b86f863c7e71d0"],["/categories/生活/index.html","b972bbf099cdd82ef979085da8947fe8"],["/categories/程序代码/index.html","74f5adac22ac4d65f8c23ff9345dd5cb"],["/categories/解决方案/index.html","0309bba592d6ad6b647a039c2c401c07"],["/categories/读书与生活/index.html","e0931195383b4fd436e87986c4274fe0"],["/categories/遥感与大数据/index.html","43d77ab3735f5d6eecf5697ee1f6dc08"],["/comment/index.html","7620cd855a18a9fff4c60ed1b5e6b8e6"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","de94728f22bf28db242b5717b8719429"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","587d658b74f0e1c6703a7c6f0e37bf40"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","3df562adf78729a918d305d813df46c6"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","36093cf8e237ccfdf0ea19f44bf4ec0e"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","b766a2557d5dd421d58c012838197c7b"],["/live2d-widget/demo/login.html","1ef70a3be900a00a8f9058620a57cdcc"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","1c5c513e72f4890fc218a32a1906e4d7"],["/music/index.html","35afb59e9ced73d925eeb3903957def0"],["/notes/index.html","a999191deb49659cf579077a12fa6500"],["/page/2/index.html","b97b75ee31d559289230e10bb1b68adc"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","784becb6f2f896d94a7aeb43e1a55a6c"],["/sw-register.js","fcf855c1670d5c1280e30a499dc3900d"],["/tags/C/index.html","b429ac0f4c4436f69ab4b282cbc5d392"],["/tags/Hexo/index.html","faee9d11bd8e9a878901a96160290082"],["/tags/Python/index.html","061cf57fc911c490229a34746d78d122"],["/tags/Python数值分析/index.html","d385f90788e699cc493c812d8219db6e"],["/tags/Python数字图像处理/index.html","e66d3a315decb5335b4531105fc6d456"],["/tags/index.html","79420131db09ee911de2916c75e13a09"],["/tags/人生/index.html","572172ee9afbb5af1594e01dbfbff9aa"],["/tags/生活与感悟/index.html","1a242d03ba26c77956eedfdc269756a0"],["/tags/网络与浏览器/index.html","b22c327469580e0506df19d7c1ac51c3"],["/tags/诗歌/index.html","def6529aea11186115ddb67d3e415ea0"],["/tags/读书与生活/index.html","935bf0920efd797a02824354f26e0c93"],["/tags/辐射传输/index.html","5c9dbd190d1549e7a278402ddc6d1d78"],["/tags/遥感/index.html","2a36f4f2a8287a4c6d4e63729ed278ca"],["/tags/问题解决方案/index.html","8159d34e604d4fc0edc2d4365da42cdc"]];
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
