/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","03f3199c63402e545e017eb871583217"],["/about/index.html","2fba2b61b08cd7d0460e30f7da531e84"],["/archives/1033b493.html","bee2689114f3cd1b43375b5e125955a1"],["/archives/1abb07a6.html","ae4d4032385a199cd9171dc14aa8b409"],["/archives/1def5f0d.html","2395113d38ac584b73f9a6976c8a5975"],["/archives/2021/03/index.html","fba92c793292f7ef03f533b49cdcddfb"],["/archives/2021/04/index.html","e2c69d4eaa71dfbd132e307815477c09"],["/archives/2021/index.html","2d1e7f5476385ac1e597a9b48962feb4"],["/archives/2022/04/index.html","04d6ee5ea72c16405f58813c145da43f"],["/archives/2022/05/index.html","b2ef1de18f03a176ef5ead0bbd078373"],["/archives/2022/06/index.html","05630b3009b57346e9a149e14643c89f"],["/archives/2022/index.html","a8213becfaf85ea2b252f77d5a2dedb6"],["/archives/2022/page/2/index.html","d4b6aea205cb999a5a05c0c297fdfc1f"],["/archives/2023/01/index.html","94828a23b02e481967307d1d3eb362d6"],["/archives/2023/02/index.html","4237296275dbdc21b9f5e2f3613725e6"],["/archives/2023/03/index.html","ae18a76c4d429555e708b67f7291fe26"],["/archives/2023/index.html","b4e94bc40e247780e254d032ddd058e7"],["/archives/23cd4859.html","bf390679ad5da4e5af90247dc83799b6"],["/archives/266295d8.html","df27cc9987c60283f8085bffd1e2dfd4"],["/archives/330ac4a4.html","c6ea16fa0e8bc570fd89f69668db25a5"],["/archives/3a816938.html","6c66ca7336293efccc5c2f9ac6c24359"],["/archives/4360a9bd.html","4cac1b8cd9e7b41555849f5dfface808"],["/archives/49977e84.html","c2da979225356f2f61bb5212e8f66223"],["/archives/573e690a.html","98eb16b14a7fbca8d62d2922092a936a"],["/archives/57eb0d7a.html","27f1b01f0c6c4c33e94c09039fe9adf5"],["/archives/58b02e48.html","5fb081a95308f9291f40c6c3834780cb"],["/archives/61521166.html","264b6dd9932e09aaf3d35af4c3f9111b"],["/archives/7576230f.html","5facadda2acef89beebfb66b621ec29c"],["/archives/8063fed6.html","c8d0cc9f5d0576ac1030ee2146e4249e"],["/archives/8c1f6a98.html","e7b7a8baf8277efc08898f04163f89b1"],["/archives/91104203.html","9b8abe81191729306c9aae3462f7a4c7"],["/archives/a1db3116.html","54aa8e0c6399712d48ea41a6e7db287e"],["/archives/a8ccf4cb.html","c530821fa31f0d69f0c2ee1d90090a7e"],["/archives/b7563557.html","ef7b24f4301d114867c535445a05c0fa"],["/archives/c144f20a.html","6fbf694f2cd08e91d4429e94d5f8f01c"],["/archives/e84af901.html","d95873ff4a9ed1141fea6c72816b05f7"],["/archives/f3ecd78a.html","c26a26c1a3d6fb185140dace256e1401"],["/archives/fe82aeb3.html","6578ae6d186d02ceaea7c7239af6a83e"],["/archives/index.html","865f943b4f610b531f25f8b17773a9b3"],["/archives/page/2/index.html","5466dc64aac4365e9d7706aef0453081"],["/archives/page/3/index.html","70f6cd7a769330fdcbc781e962e08ca4"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","9f905dab7f1af8104496d1dce59e411f"],["/books/index.html","863873cb866b00872b833949a01678cf"],["/categories/index.html","39bb4876e18b48815c9cdc349eaed2da"],["/categories/博客搭建/index.html","b59dcd49599ed079e2d06cd8e43baa53"],["/categories/生活/index.html","69cb74582cfd056f47fb14a6b72f1795"],["/categories/研究方法/index.html","246483a865e3cfb1883d9dc188c7f948"],["/categories/程序代码/index.html","3f269ea90ef8e30dfeb96e04f023f121"],["/categories/解决方案/index.html","e7982ae4df036f2fd85362478b437920"],["/categories/读书与生活/index.html","78dd00e31f371800b39dd21858f9374a"],["/categories/遥感与大数据/index.html","81bdbfb64e78e02d7f33ab34f5d978cb"],["/comment/index.html","626cda395a1ad0be4664706895c750f4"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","ee7f465e76469068bd8bf05cb06e4153"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","84096acd650df0b8dee6ee4d3d149b66"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","81968a29a21a0d313e8d4a9ddb71ae03"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","e3ecdc09520e7bbbfbcc2bfb12d69c45"],["/music/index.html","51a44b8d17a33ff969d69fb51e938133"],["/notes/index.html","f85224049ef9e8b8431dbf2554266f8f"],["/page/2/index.html","7ef14ce9e56ecba0f2e12e2019094367"],["/page/3/index.html","0dfb6d8da877d4efc8d17367fa8b9a30"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","08df852471ed48f0a267548bed6ca7df"],["/sw-register.js","04bf3aceb2d20946e28bffdc50321380"],["/tags/C/index.html","8e35ace1814f21134c3b5eeaaf3b4c39"],["/tags/Hexo/index.html","cae4034ce3cc7494b12ed5d648bd615f"],["/tags/Python/index.html","8e4bd0ff2cf118901b618bcdd396cb06"],["/tags/Python数值分析/index.html","7480d1050b2efb5dd02c36c72163d9ee"],["/tags/Python数字图像处理/index.html","af0add5d6a5a653f931c71a010b0e00e"],["/tags/Python面向对象编程/index.html","b949c678a11a45f38b664362f053a1fe"],["/tags/index.html","916948e599fddacf8b3b06116fbb5910"],["/tags/人生/index.html","9589243347eec3c68d01eb9dcf8b2199"],["/tags/生活与感悟/index.html","1219ee6d1cc8e11b32d0dd88459ec599"],["/tags/网络与浏览器/index.html","39656f4b72cd13c7210595fb4c5c0bbc"],["/tags/诗歌/index.html","bcec57ab3a98d829d0286925bf890898"],["/tags/读书与生活/index.html","f6981cbed3e73bbd7b68db9bc63cf294"],["/tags/辐射传输/index.html","22befd7ad1a707040d18f94b9953d0ae"],["/tags/遥感/index.html","427de09448b8056ff66a946c4d40aee6"],["/tags/遥感与大气/index.html","e86b9d8754bdc177333f8e92f6ef4a77"],["/tags/遥感影像分类/index.html","61f7b93a17c92b47d8feba2b424868c5"],["/tags/问题解决方案/index.html","cd34d836b44aee23d02a7423b0150ecd"]];
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
