/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1c12f438e9ea32bf8c71e51050e692bc"],["/about/index.html","f9aab4abbb3a08d987d533ee13bf6213"],["/archives/1abb07a6.html","0c5f4637c15ada52c799f15b253caf05"],["/archives/1def5f0d.html","697c63842e924ba93dce4d9c5d1cff9a"],["/archives/2021/03/index.html","57d7fbc7abbcb732530f7dedc5847ae5"],["/archives/2021/04/index.html","044b1088ea50830c6cf5cff84b9b7460"],["/archives/2021/index.html","edfb12617b68f0e8e2607d05434999fd"],["/archives/2022/04/index.html","89fae024bf40858483eabe1eb7155571"],["/archives/2022/05/index.html","b80ec24c1b40d7430dbca2b3f9c3efd7"],["/archives/2022/06/index.html","dc894344e854d6abbed4eee24614fbbe"],["/archives/2022/index.html","ba566d21ce2d0ea547355bb97505c6e0"],["/archives/2022/page/2/index.html","ed1f130224b9d92953f7f7fd9eef5a62"],["/archives/23cd4859.html","f98626712c6e6234fd856b7b02c391fa"],["/archives/266295d8.html","f1256dec69bbbf7c402a0725065b6a95"],["/archives/330ac4a4.html","7e9edcbf6877cb0e8404cf8fc321ecfe"],["/archives/4360a9bd.html","4954576d113769ba813e463fc45fc759"],["/archives/49977e84.html","0ea5dd1cbc9f0cbd86dd3260752b5a52"],["/archives/573e690a.html","4567c4af395bb713c65c77cafccfab05"],["/archives/57eb0d7a.html","536afe535f120cda3eae37d9d17c4b3e"],["/archives/61521166.html","9e33b52a96bda75d12809c97cecca119"],["/archives/7576230f.html","6e3dd147152fcdfcc90f03c6fc1d5df4"],["/archives/8063fed6.html","5d3b3765e8b40ce95e18bba84a98da9c"],["/archives/8c1f6a98.html","a114a629ee6b53920500658c98c4c74f"],["/archives/91104203.html","950c541a8e0950777a9710b5c273ae01"],["/archives/a1db3116.html","283456a0cd2f3f5e806ab9a2d69954ca"],["/archives/a8ccf4cb.html","6fe3b1efeb97ae4e097a27156d2dae14"],["/archives/c144f20a.html","082063ecdd31bc954babdf614f086901"],["/archives/e84af901.html","0921708035506fb878c40757a21dc8cb"],["/archives/f3ecd78a.html","e925f53dba15f05786bce65e2cace61a"],["/archives/fe82aeb3.html","67f38d41253a439a99b7a24c4aa83b42"],["/archives/index.html","ab24aca0ce396ec596a1cf62006c8a0e"],["/archives/page/2/index.html","d30099b6b7368b80889ff62ea993695a"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","e4836de63874e76f25dd201b4ce40daa"],["/books/index.html","7e64240ccbc79dd27debc5408f88bdfa"],["/categories/index.html","8a7cf77f8380020fba708b2cdedc5a14"],["/categories/博客搭建/index.html","a60846daf3d5d50d4e00745634a46d2b"],["/categories/生活/index.html","5269e084c5eb3b99d0125c177f2a259d"],["/categories/程序代码/index.html","f0095f1a59f28b8994294ca25bda90e3"],["/categories/解决方案/index.html","96bd2d32871fcffd8140c9e8d0793327"],["/categories/读书与生活/index.html","502ebbae31cb2a3284024e6d6665df5a"],["/categories/遥感与大数据/index.html","977a89361ab32d1e2b4de75f59bddac0"],["/comment/index.html","507f82716e6e8ac09f38198f7021f5ad"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","de94728f22bf28db242b5717b8719429"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","f968b7ccf4898fc769e2174bfa080108"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c3a88ca7bb7917ad215f7709c3b7f9e0"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","dfd8f0d99921bbc7ae8eeeb61ac33c3d"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","b766a2557d5dd421d58c012838197c7b"],["/live2d-widget/demo/login.html","1ef70a3be900a00a8f9058620a57cdcc"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","5d8bb5ddc01124e2d9c88f341868023c"],["/music/index.html","662c374c99a2ce389f3d0d3aaeab403e"],["/notes/index.html","b3b8a0b02be4f1eae77eeb344b4f7a7e"],["/page/2/index.html","881008adfd97aac224bb117b6ad637fb"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","674fb124da265dd800901ad18a89e855"],["/sw-register.js","b711245df93684e8ee432e948c2687f3"],["/tags/C/index.html","f468e8f2aae671980429dae0cfd84c03"],["/tags/Hexo/index.html","3c1e1c5830a57c42c08f2c4d9fb6d954"],["/tags/Python/index.html","340efdeeb5310f6ee23a577922aa3d12"],["/tags/Python数值分析/index.html","d7dfd7ba2d6ea3fed76ad6b483b4aa65"],["/tags/Python数字图像处理/index.html","a3e83129db111a4086ae20a8319311a2"],["/tags/index.html","3a0c8cf64cd27d8e579af3311af58af2"],["/tags/人生/index.html","bb0f1f2e586a2d3e0aed376b328113dc"],["/tags/生活与感悟/index.html","dbe0264b2f5cc9f82f30c140d8cc9999"],["/tags/网络与浏览器/index.html","01595da64e210b00de5943cde14fe012"],["/tags/诗歌/index.html","912e04d833d937bc707ac959094289b1"],["/tags/读书与生活/index.html","ec78b9889039f5e15e0abfff585c835c"],["/tags/辐射传输/index.html","8c1da504f68443e1e43f84922f76f4d5"],["/tags/遥感/index.html","844b379fd11fa874e996ea483489cd9b"],["/tags/问题解决方案/index.html","7dfd03409db2f562ee69e4f838db0d53"]];
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
