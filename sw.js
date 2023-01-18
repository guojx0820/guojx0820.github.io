/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4400c3c7914179efd593f3d735036d80"],["/about/index.html","e21b4d609788daf43578f6a6e5dbc2b6"],["/archives/1abb07a6.html","7a7062fce20ab697ebea6946cbaba223"],["/archives/1def5f0d.html","1bacda6dca499c2a469f2ba09546e091"],["/archives/2021/03/index.html","c3711c35e4854baaba65875d032a51b1"],["/archives/2021/04/index.html","d28db1ef3c1da29465d2a719e1e8f9be"],["/archives/2021/index.html","be2ad97b3cdb37c23ec7ea7518f11b1f"],["/archives/2022/04/index.html","015c18b2f20a57d14d1c5ee67ad65f64"],["/archives/2022/05/index.html","1f2df9bfe90ec13f67d07fdf97959696"],["/archives/2022/06/index.html","aff2138c95a60f07b2ace0437023569a"],["/archives/2022/07/index.html","29ae8ecccb5cabb142b3ffad80886385"],["/archives/2022/index.html","e651ce61b4616eda224f286c25075316"],["/archives/2022/page/2/index.html","7a940c033e59b6128b2c29503450f670"],["/archives/23cd4859.html","50e9316f6087154f4ab383f39153a863"],["/archives/266295d8.html","ff530744171b99564c9eb3067ee23fc5"],["/archives/330ac4a4.html","7f41f434cad9161b50ebfe0001928b4f"],["/archives/3a816938.html","8738637d20a8fd62d3151cbd082c0a82"],["/archives/4360a9bd.html","fa70a0ba26a95ce94017db45e3885335"],["/archives/49977e84.html","3f90d1e3594377443cd4731347464d93"],["/archives/573e690a.html","474f1bc687db8f7efe40c5bbc047d398"],["/archives/57eb0d7a.html","0e0522be3add661592d53ddf5ed631b4"],["/archives/61521166.html","dcf72fa2bb812094d0589db8f89df4fa"],["/archives/7576230f.html","3e7934ada4d9bbf38893229275753992"],["/archives/8063fed6.html","07daa11ae4f3e77f258f8d3658bbfa00"],["/archives/8c1f6a98.html","cf5bcbb4739f587e8c4aa2b51aa0399a"],["/archives/91104203.html","2a053365acee4a0fc2dfbce02c72f20f"],["/archives/a1db3116.html","e9c7d21a4c0302f0b8deb4ff839739b0"],["/archives/a8ccf4cb.html","4b6899ac24c6b464aeabc9d72165a5fb"],["/archives/c144f20a.html","1e0fecf07e6ade41da7d7a3723eec62b"],["/archives/e84af901.html","7c2b43958ec64630e3f4b94990149ba6"],["/archives/f3ecd78a.html","174609614df23d869012376bf8d52ebc"],["/archives/fe82aeb3.html","e494b1eb7b5eb116dd123d62570496a0"],["/archives/index.html","0c70055cf056b15682b4e89a7b52bbad"],["/archives/page/2/index.html","766fa5dbe406de7b6461e06911fa7ab1"],["/archives/page/3/index.html","2a8b70dd00ee35734bd03b01e7829b5d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","53d58783429961240f7bdd9652ba7ab3"],["/books/index.html","c424f9fc36529caec5043322a2c87323"],["/categories/index.html","e76c98df222fb49fbd6c697a46c6ccc8"],["/categories/博客搭建/index.html","7b5b0efafa5908e7aab88759ef8caad8"],["/categories/生活/index.html","204c545b6df5a2537bca2031db2abf1f"],["/categories/程序代码/index.html","76a04a8b59f6c0a574138491e1f11ff9"],["/categories/解决方案/index.html","cc8301e97689636e7c0c50980e965d39"],["/categories/读书与生活/index.html","147c75fe97d7fa73324594186508f3c6"],["/categories/遥感与大数据/index.html","03831928147dc70962ffe78f1fd5eca7"],["/comment/index.html","1de3f7fc94edcc8918a8cbda7390ba84"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","3154eacb29605607825f0fa0a2aa074e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","3a2c65cfd4ea439c002e18c1f808e8e2"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","15e1a578c19fcacafd4e909599b89172"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","e57930011e4b790843d724964ab7fcd9"],["/music/index.html","f4e7cbab191d743af4d42fca1bd827e5"],["/notes/index.html","64c3d8142211bc2ab1b5ddad6d98bc2d"],["/page/2/index.html","feca1044ad2735cc4f62248fe05cfe8d"],["/page/3/index.html","3aca0d253b44ec4f0d364a4d554a2c1a"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","d5a43815d5377939847c8915e8aa94d8"],["/sw-register.js","d7d7c3f210a71bfd4f5ca0a8d4750a9a"],["/tags/C/index.html","70682fcbfba144b4e8c7395ce3f4e120"],["/tags/Hexo/index.html","4a8b987c4e9aa23c84805e5898fd2d66"],["/tags/Python/index.html","c66996615d44d4097e784960fc8bd530"],["/tags/Python数值分析/index.html","0c830eeafcd64d4707eab0ec472c426c"],["/tags/Python数字图像处理/index.html","14fca85f3adb3ae50d38c398af5ad88f"],["/tags/index.html","b87c24f42ed4ddad36730dfdd1fb2704"],["/tags/人生/index.html","f681048c7105015b4f3cd19867924806"],["/tags/生活与感悟/index.html","df07e34d822b9590c798d8adb74ff0dc"],["/tags/网络与浏览器/index.html","aac169dbbf1b372090c860159e2d430c"],["/tags/诗歌/index.html","8dcfc84684249834dbfd461d07ea6b3d"],["/tags/读书与生活/index.html","0e8829244f276c5c85f7e46d84b1f978"],["/tags/辐射传输/index.html","aa1e6acacefa6fdad94c5c718f4a5470"],["/tags/遥感/index.html","f6609a5150311662a76b49f737690319"],["/tags/问题解决方案/index.html","a04d420b153c2a438859d2ffb5e65859"]];
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
