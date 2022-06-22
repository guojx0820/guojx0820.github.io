/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d507f9dd2f728d0fa63bad6d83868ff6"],["/about/index.html","d452b40ac7adc0b7b24491494baedefe"],["/archives/1abb07a6.html","ca39cc26bfc7872c6128ca2b16ae97c9"],["/archives/1def5f0d.html","e363cb2166eacee7293ce96f541a2e8f"],["/archives/2021/03/index.html","53132659d91002ddd6ca62ab9ab49104"],["/archives/2021/04/index.html","b2b6a69cd53b86ebb0af2fccad522818"],["/archives/2021/index.html","317fb2a0ec0e75208ef84f064d65827d"],["/archives/2022/04/index.html","d48e0ec785a65a7eb8747366cc8144d9"],["/archives/2022/05/index.html","19e8e2d527aa136c3e241edf90ace104"],["/archives/2022/06/index.html","c9472c16a7d3ffbb9360cecd176cb685"],["/archives/2022/index.html","9e44d21400f44093774df669faaa64bb"],["/archives/2022/page/2/index.html","5cba34313b4e7172a70e918733216a57"],["/archives/23cd4859.html","e2e2f463e16716f1c062b25e7bc0240f"],["/archives/266295d8.html","a174d0215449fe96d99fcc3e7af174c7"],["/archives/330ac4a4.html","2b07269d57992bc7cf3ea7771246a7ae"],["/archives/4360a9bd.html","800b3cf5f4a8458a040ec804326163c2"],["/archives/49977e84.html","a01c578630f78c1d45e564992c81e12a"],["/archives/573e690a.html","90848eabd59d64f9e60763e993eacbb9"],["/archives/57eb0d7a.html","3aabf980c7d149cf3ef1638f407e87d7"],["/archives/7576230f.html","b6d44b7c42a6d79bed9ee361a840434e"],["/archives/8063fed6.html","26365be36203a83060e754c930e52c79"],["/archives/8c1f6a98.html","8c492ae7a3801f3926aa238e3e60babc"],["/archives/91104203.html","7d4d7c00351166e4cd516a908a0890dd"],["/archives/a1db3116.html","ee75374f7a4a88fbee89336c3f8071e8"],["/archives/a8ccf4cb.html","0fe2cd2050caad62f594c9d1daacb459"],["/archives/c144f20a.html","07031eb9c39de02c5b41869f2bf7b39b"],["/archives/e84af901.html","be9a0f4be05ed042aeb14e3c2ce2a70e"],["/archives/f3ecd78a.html","ade1a29a26c2934a58a5b728619da632"],["/archives/fe82aeb3.html","f409b6e06125bf7c1a639e2b4cc0ed7f"],["/archives/index.html","64cfbb97d8ec03e4953f2601fa6674fa"],["/archives/page/2/index.html","2236e56043278d2ba6b827b137a8eb57"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","50df4b189ad1cb6ce44df89de1f4fdac"],["/books/index.html","826a0d4b88d811b0fe77c123da0fc51f"],["/categories/index.html","3c53a8f62b6da4faa34690feb4303020"],["/categories/博客搭建/index.html","d1af0f072582f2a672dd32f56493ed75"],["/categories/生活/index.html","a55f83bbca36afddce08ed470f42886d"],["/categories/程序代码/index.html","c6c0f92c11c4f8c413cfc75d2963c3a2"],["/categories/解决方案/index.html","ae4db440359bc1115d0cad007cd82ac3"],["/categories/读书与生活/index.html","86c735e304c98580c047e2d0ef808729"],["/categories/遥感与大数据/index.html","945207dcad6710ce758da2334e679b47"],["/comment/index.html","2b373fd471a2e6a2d3722c8ce1603f25"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","de94728f22bf28db242b5717b8719429"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","55b3cfdca0127c68d41e8da642d08834"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e0318f6dbbfcc1a2647b779d2ad61f7e"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","55520ac3c4d62984b9e807a53b8c3275"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","100532b3e76d31f71f9a38ea9ec8269f"],["/music/index.html","19a88e6dec97bc073727406f09c68fd8"],["/notes/index.html","bccb7c8a46ff672b2561e7693e7353d2"],["/page/2/index.html","dd7ace2d20a840dad3edb146bcd202a0"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","60df64bb93cc2aa03101be165bc4a9c7"],["/sw-register.js","e98c59b3041ff8f6593431be25685ee0"],["/tags/C/index.html","d899b59886942ec843b4f372de85e1a3"],["/tags/Hexo/index.html","aa13e8851ad414761ccaa7322d174001"],["/tags/Python/index.html","84ada1eaea9dc83cc0755117e7bdc1d6"],["/tags/Python数值分析/index.html","4b3b538e5a5b72afe817f447fd3e711b"],["/tags/Python数字图像处理/index.html","33272f67942fdddaf343675425f6f45b"],["/tags/index.html","6786b4684d972e0c09e0d6cb00c8caa6"],["/tags/人生/index.html","dfd004645514ca767c0558920a997f05"],["/tags/生活与感悟/index.html","3a438ece76de68670e9c3a82cdd7787b"],["/tags/网络与浏览器/index.html","7f98c95f742e96a4399e81a5254c8905"],["/tags/诗歌/index.html","bdb43086bf55149aa258f02ea5cded10"],["/tags/读书与生活/index.html","31bfc8a9dd20edc066570ce1c71eea20"],["/tags/辐射传输/index.html","bc4d94901ff7ab9049bf41759951f8fb"],["/tags/遥感/index.html","18ce9168c3bcd58043951b760350372f"],["/tags/问题解决方案/index.html","a8ac410281a85496daf4097b4762bb22"]];
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
