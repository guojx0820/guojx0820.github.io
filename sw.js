/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","97ad9b340d78813fbfacc736bffd600c"],["/about/index.html","fd4cde1fde4f73dcc48fd03e82afa5c8"],["/archives/1033b493.html","776ee8bfbc5763f899c381ee93930a26"],["/archives/1abb07a6.html","ae4d4032385a199cd9171dc14aa8b409"],["/archives/1def5f0d.html","15ce7692ce705a14787301ee5adf4b03"],["/archives/2021/03/index.html","93ff7e96dfa46035daef84c23eadc7af"],["/archives/2021/04/index.html","3d990a363e5a1b949d969294a3a484e6"],["/archives/2021/index.html","275434b0e578e93619754380c335f6a5"],["/archives/2022/04/index.html","fb40ace7ad482f595e65f96c5ca29b35"],["/archives/2022/05/index.html","6a2b53f8728925c83ce8a48aafbbea24"],["/archives/2022/06/index.html","05fbf70b324bbd0355a3cd5d62631cc9"],["/archives/2022/index.html","b4ec7c04306cb2f6e2f18effa6256bcb"],["/archives/2022/page/2/index.html","76dfd96a426af8a22cff8b957b1407ce"],["/archives/2023/01/index.html","54548975078bd30ef4bf089376a5fb40"],["/archives/2023/02/index.html","f9707d0e09f64410b09b1cbac283ae12"],["/archives/2023/03/index.html","b6ee0c3efd1ea82e9551948428c20579"],["/archives/2023/index.html","66e147c436d42a6086d0abcf8786ea7c"],["/archives/23cd4859.html","bf390679ad5da4e5af90247dc83799b6"],["/archives/266295d8.html","df27cc9987c60283f8085bffd1e2dfd4"],["/archives/330ac4a4.html","c6ea16fa0e8bc570fd89f69668db25a5"],["/archives/3a816938.html","6c66ca7336293efccc5c2f9ac6c24359"],["/archives/4360a9bd.html","4cac1b8cd9e7b41555849f5dfface808"],["/archives/49977e84.html","c2da979225356f2f61bb5212e8f66223"],["/archives/573e690a.html","98eb16b14a7fbca8d62d2922092a936a"],["/archives/57eb0d7a.html","27f1b01f0c6c4c33e94c09039fe9adf5"],["/archives/58b02e48.html","b5c04920a2595445120217248a555c13"],["/archives/61521166.html","264b6dd9932e09aaf3d35af4c3f9111b"],["/archives/7576230f.html","5facadda2acef89beebfb66b621ec29c"],["/archives/8063fed6.html","c8d0cc9f5d0576ac1030ee2146e4249e"],["/archives/8c1f6a98.html","0b533f63dd7bcc1e270fe1084a1e683e"],["/archives/91104203.html","02fb76b06202ebac95de9b5c5c54e45c"],["/archives/a1db3116.html","54aa8e0c6399712d48ea41a6e7db287e"],["/archives/a8ccf4cb.html","c530821fa31f0d69f0c2ee1d90090a7e"],["/archives/b7563557.html","ef7b24f4301d114867c535445a05c0fa"],["/archives/c144f20a.html","6fbf694f2cd08e91d4429e94d5f8f01c"],["/archives/e84af901.html","05412fc2cd144d4b7d182375ef1deb68"],["/archives/f3ecd78a.html","c26a26c1a3d6fb185140dace256e1401"],["/archives/fe82aeb3.html","6578ae6d186d02ceaea7c7239af6a83e"],["/archives/index.html","6f7a80d15287d351a140339d7d84cf50"],["/archives/page/2/index.html","0930e7db68ad1dbaa045963495363d03"],["/archives/page/3/index.html","114ac0477b0c33e7daf6135172c5b2d3"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","51ac72a4c0d150306f7bba81f23a8dd1"],["/books/index.html","696ba6d65d5d462e85053f0d481f3b26"],["/categories/index.html","3034695015eddc1393c3ff1231047b95"],["/categories/博客搭建/index.html","5875adbb08b61831f95a6b99381c9d48"],["/categories/生活/index.html","687f4bdc39fa2f2b64b75e231ddce059"],["/categories/研究方法/index.html","fe05d7dd01be09f3de04323f43b699f1"],["/categories/程序代码/index.html","ce62ff9d7f7713f12d9859e551a5aec7"],["/categories/解决方案/index.html","89fb582973cc1ab7846ed66d9a7085c4"],["/categories/读书与生活/index.html","b7a52cbf46597b5207d8cf428e478771"],["/categories/遥感与大数据/index.html","ed807bbfc401ecbdbda2468c77b389b9"],["/comment/index.html","2405eccc845e561eb4aaa9a2c9933c63"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","c784b1ad8a3e993907cfcafcc7b8bdcd"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","77b9cbf1e37b0b873640b431d9dd5367"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","657629dc884aa041dfbb3278605ece5c"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","4a3dfc680165c65de9830aec782a169b"],["/music/index.html","ce50927dd5cd1f0edec3f518469e09c3"],["/notes/index.html","c5bac25bfaed23567425f999f8e7116a"],["/page/2/index.html","c8d931bcb17489d73d9fa52596651fe9"],["/page/3/index.html","a1bcc8e4bf91447b41631c6a41874378"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","cc2c57ae3d02a416bc0ba8d5eba6e9d0"],["/sw-register.js","1062816826575142fa80254d3aeac46d"],["/tags/C/index.html","58016bbb841ef4d9c6a17695be24bc7b"],["/tags/Hexo/index.html","7cdcd67bafddaa9aacca8d1356812c68"],["/tags/Python/index.html","1c41e8415c70815d582b87f3af8edbb6"],["/tags/Python数值分析/index.html","7e95f6da32ea8b2412c514069ab0ec89"],["/tags/Python数字图像处理/index.html","6abe02bde5bc2923ba9d332d6180ecc0"],["/tags/Python面向对象编程/index.html","73cf4103baca7292f28b841ef29a07ed"],["/tags/index.html","d0efb05b0494de4d76e989415b2ccda9"],["/tags/人生/index.html","35641ae63f434b5cf6226d7acdf93383"],["/tags/生活与感悟/index.html","1dd18c0623c2ee0f56292a16b385098e"],["/tags/网络与浏览器/index.html","9e8593eb25ced0e7f2a9dfc8743ec1f0"],["/tags/诗歌/index.html","36fa0dddc2f891389bac0c5c1905e7b7"],["/tags/读书与生活/index.html","7ec2e4245db0df0ace1df07af593aa36"],["/tags/辐射传输/index.html","c1547cffcfca993000cdcb8e3a6a8639"],["/tags/遥感/index.html","82d10e30b135624a67785e7b30077287"],["/tags/遥感与大气/index.html","c14b3bd72cc4ea6a63ffddb9ea718990"],["/tags/遥感影像分类/index.html","da8b34195ec238b0d2dc97ddbf70fbca"],["/tags/问题解决方案/index.html","c6b42bbac3fddd988b55917c1af6ec10"]];
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
