/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0b8ca7f47dad6ecf1b259bedc5e970b9"],["/about/index.html","36decbc08cff8da52181fe76a70c9ee0"],["/archives/1abb07a6.html","7a7062fce20ab697ebea6946cbaba223"],["/archives/1def5f0d.html","1bacda6dca499c2a469f2ba09546e091"],["/archives/2021/03/index.html","8991fa942ca8452bfd8161e9d937bf7c"],["/archives/2021/04/index.html","30389b61518ef09d4a6735400d651e74"],["/archives/2021/index.html","638ec0e8be08a8a379b743130321c4b8"],["/archives/2022/04/index.html","cb5ec4713a2cda2a195916a23128973d"],["/archives/2022/05/index.html","393be71603608dd223eff9f430c8b6ba"],["/archives/2022/06/index.html","1c5acaf9d47cacd97cbf6e44c5d954c6"],["/archives/2022/07/index.html","75cc33e970817a45be17846275a4653b"],["/archives/2022/index.html","ef0cc24f12f957af949ced04f0246a9c"],["/archives/2022/page/2/index.html","9d89e2c59de2a73145984615f09ccd02"],["/archives/23cd4859.html","50e9316f6087154f4ab383f39153a863"],["/archives/266295d8.html","ff530744171b99564c9eb3067ee23fc5"],["/archives/330ac4a4.html","7f41f434cad9161b50ebfe0001928b4f"],["/archives/3a816938.html","8738637d20a8fd62d3151cbd082c0a82"],["/archives/4360a9bd.html","fa70a0ba26a95ce94017db45e3885335"],["/archives/49977e84.html","3f90d1e3594377443cd4731347464d93"],["/archives/573e690a.html","474f1bc687db8f7efe40c5bbc047d398"],["/archives/57eb0d7a.html","0e0522be3add661592d53ddf5ed631b4"],["/archives/61521166.html","dcf72fa2bb812094d0589db8f89df4fa"],["/archives/7576230f.html","3e7934ada4d9bbf38893229275753992"],["/archives/8063fed6.html","07daa11ae4f3e77f258f8d3658bbfa00"],["/archives/8c1f6a98.html","2b25fb42e8e5205f06b91760aca54dee"],["/archives/91104203.html","2a053365acee4a0fc2dfbce02c72f20f"],["/archives/a1db3116.html","e9c7d21a4c0302f0b8deb4ff839739b0"],["/archives/a8ccf4cb.html","4b6899ac24c6b464aeabc9d72165a5fb"],["/archives/c144f20a.html","1e0fecf07e6ade41da7d7a3723eec62b"],["/archives/e84af901.html","7c2b43958ec64630e3f4b94990149ba6"],["/archives/f3ecd78a.html","174609614df23d869012376bf8d52ebc"],["/archives/fe82aeb3.html","e494b1eb7b5eb116dd123d62570496a0"],["/archives/index.html","a9ad3e7db84de296daccb7b541744e2a"],["/archives/page/2/index.html","2b3463074eba64c5ea77183206c857f5"],["/archives/page/3/index.html","09c7db9fe15784c05ef8f9c751d3ed7a"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","f883d30536459a00443cfb8efa6f7b2e"],["/books/index.html","ecdadcd5986f4d6451144ba928e09872"],["/categories/index.html","579add2fd7a45fb8a0a6f8dbe951ae45"],["/categories/博客搭建/index.html","86be84a5fbfe9404ed714045c54d83f3"],["/categories/生活/index.html","2839973b546479ccedce8af9b710a9bf"],["/categories/程序代码/index.html","56c23db5af7fdacf149e3eef21d6a949"],["/categories/解决方案/index.html","269c26446336d114c394d8b6b0cb69c9"],["/categories/读书与生活/index.html","72df74c73c9d97873e6c028a2c3fcb6d"],["/categories/遥感与大数据/index.html","568a200fbfdbaeba88caabd30ff15611"],["/comment/index.html","eff650a0ddcd63a567ee6c7a08b7dd48"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","8518b6a34c79f54478e509ef7597e3be"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","fbe673e33c4655c3ad8b787c2ed7f592"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","ca423fbe22656533471cb4a47bc9a85d"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","5de26c77024dde74758a49ad8d8222f8"],["/music/index.html","5a4316aa0f038b31f83e104e37df2b17"],["/notes/index.html","30c78399479d6751935a82e738f1d6ba"],["/page/2/index.html","9f7ed96636331dcb138856662445fc9a"],["/page/3/index.html","a6c963db0d0e7473142b531cbc3681be"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","81a57b96b50925551357ff75ebf40b7c"],["/sw-register.js","fcb02e61af60517efbc87d7cb373f2fa"],["/tags/C/index.html","38754b983d791c3c9a79238d08ce5c46"],["/tags/Hexo/index.html","56efa3ab24683907fe32e298b0d333df"],["/tags/Python/index.html","a999815f57bb820c758896f121c391a3"],["/tags/Python数值分析/index.html","f5d2a47d151b78aa8a9f58ce986207eb"],["/tags/Python数字图像处理/index.html","063c3c14c4a3101ee31e9a9c386c1ac5"],["/tags/index.html","4e47c5c544bd2e55686fd2790b551ed8"],["/tags/人生/index.html","ed2c1145c2127ed8533b07647dab21fc"],["/tags/生活与感悟/index.html","6155ca65d75f3d7222ede2ab8738b770"],["/tags/网络与浏览器/index.html","5e1e229c1c36c1e065e8b5d0f6b38e85"],["/tags/诗歌/index.html","0da8a3018492f028ee27f6a7c266bf0f"],["/tags/读书与生活/index.html","8d1718bf0ec089b54b6cad3d472fd35d"],["/tags/辐射传输/index.html","e331eb575a01341808e415e08eed85e9"],["/tags/遥感/index.html","fab51b845e88497b3df8470d6b2962d9"],["/tags/问题解决方案/index.html","206bf82e4eb80315b88a739466fa40f8"]];
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
