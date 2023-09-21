/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","64e8a277d4b2803a8762bb7be64662ce"],["/about/index.html","9b4dd2720d8f5cf0ce65364442022ba4"],["/archives/1033b493.html","291fdc6fc03df6cc5e8dec6ff69c95df"],["/archives/1abb07a6.html","8029bba65916749455e61f11686f3e8e"],["/archives/1def5f0d.html","6b5b554047799b490592753f8057aab1"],["/archives/2021/03/index.html","e786c24012d519f46799261265e491ab"],["/archives/2021/04/index.html","1bb85f166c4602c692d22627376b0ab9"],["/archives/2021/index.html","c48b876eb37f4a4a744df77af75896dc"],["/archives/2022/04/index.html","73ddef9c90267eba3162e6671a396ad2"],["/archives/2022/05/index.html","d96c1028a54468f91b8b8a33dfb65d6d"],["/archives/2022/06/index.html","c00350dd44c525d870764bd3316eb69e"],["/archives/2022/index.html","9681e32c89d7c497e998df94cc5266a4"],["/archives/2022/page/2/index.html","22ca1f2b9225e385f60b6671f9b67344"],["/archives/2023/01/index.html","aca7fdfdff2c1145385fc0a89e3b5433"],["/archives/2023/02/index.html","e10f5464a4127877aafe7c4484e69cdb"],["/archives/2023/03/index.html","244d1c34119152d29d832502122edcae"],["/archives/2023/07/index.html","3808aa610327c5b77095c94c10ec8225"],["/archives/2023/09/index.html","39ccc6dabe6dff92b0cc0e1b653de833"],["/archives/2023/index.html","d06844945b5614f06dd4f2e23e255574"],["/archives/23cd4859.html","41bb2cf1bbf52da65fa1d57497eb7300"],["/archives/266295d8.html","04302123a6db84d552d53808efaa3c7e"],["/archives/330ac4a4.html","8ea9edc770bf994162116755fb0126cd"],["/archives/3a816938.html","6e70e9bd4983a8746f72c5786bd0462f"],["/archives/4360a9bd.html","f49a5d8c4d3257c2702b06e51835d889"],["/archives/49977e84.html","239d3e5a536e57e7c2c3856136cc7e5e"],["/archives/573e690a.html","f45d859dd44371fc799cbe6e6c9f8bc7"],["/archives/57eb0d7a.html","24161dab021a5901a740a9c401590e05"],["/archives/58b02e48.html","3a91d61eaf7b48d77da0a3b03e36d452"],["/archives/59a3b95f.html","ef5005cac1af7d591a8507241fb23942"],["/archives/61521166.html","33ac19c964f4a5bb80f112ef7281f478"],["/archives/6f5df5c1.html","e2b9cfd1dbc107850dc549c5df625cb9"],["/archives/7576230f.html","935e56816bc81402e8f4ea6721cc577f"],["/archives/8063fed6.html","c01173dfa45567415a15eda37d9ffb05"],["/archives/8c1f6a98.html","84e2e3bf8828580fc10ef438f6d41374"],["/archives/91104203.html","56c26a4e5ccd8758fa73fc0179b27cbc"],["/archives/92a27152.html","fe46d4af4f50a0d1af30ca575176154f"],["/archives/a1db3116.html","f4fd29bc370612405db6e6bff65d2527"],["/archives/a8ccf4cb.html","e2bba2c842cc7cfa0f0f12a82e3ebf3a"],["/archives/b7563557.html","f4c4c149b8b740750e0233df2115bf17"],["/archives/b9d5eb5f.html","1ce86405b070f35f796d612b1e765ca9"],["/archives/c144f20a.html","1d26dbd82f7e75367b7ec34f804555ea"],["/archives/e84af901.html","39f0b7471aca9ea993121a8219dad01a"],["/archives/f3ecd78a.html","423e8781806d67d79716d8c93402172a"],["/archives/f863e629.html","b98130a8918b196f45201fbc60369211"],["/archives/fe82aeb3.html","9f0d651bbb84207e56a86ccbc5ed5a92"],["/archives/index.html","485a873eaf31bfebc6b8c44f4612803c"],["/archives/page/2/index.html","251acf599cceed42823afe24150c14d3"],["/archives/page/3/index.html","8506de1e2d4db60714281eb45fbdc3c0"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","c1027f9854c9588e347116d7536a4ce6"],["/books/index.html","3e92a44f4dfe7cfc424aca4c1d2636e5"],["/categories/index.html","2db97a3016f5e259301bd730e3349d8d"],["/categories/博客搭建/index.html","ee90f4484dd1e7cb1a3f0a073bff0b3b"],["/categories/生活/index.html","af327b9adb225ee7d06e8cdcdb81998d"],["/categories/研究方法/index.html","9185439ee7235a1f42a5817c7a59c301"],["/categories/程序代码/index.html","1f04759c2f21c4e2bd3fa03512da78da"],["/categories/程序代码/page/2/index.html","47d0d6f6cc3387fa7d08c5584260a8bf"],["/categories/解决方案/index.html","5f2dc41160fc44cd1c961fb9fb54e307"],["/categories/读书与生活/index.html","9aea423f9a104bb7ec2dba1a34f423d9"],["/categories/遥感与大数据/index.html","e11a455630faaefc041d2699651c099d"],["/comment/index.html","89f4cd6df2c58251d901fbb78aa2954e"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","bd7b5eabd8b63fe1630ff3bbe780b013"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","2348746f2d03a52c073729799a1e211b"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","8448213fa08312997b4270c192e9e319"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","0554b55882b58303dfd7f0603538dc4a"],["/music/index.html","0d7f8c9054871180852e0e3e6103f972"],["/notes/index.html","a2026d9a21f1ffbede8b7b6ef62cbdcf"],["/page/2/index.html","7c0a05a7328a4c9cbef219322b83c613"],["/page/3/index.html","697116d1a2dfa36321a16ed95f21e6dc"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","71e4d9e959e8e7ec926f90fd7b47fdc4"],["/sw-register.js","24078ceb6172ee973973749246f2fe39"],["/tags/C/index.html","57e168f06b119c5114c5b161ebc5ddeb"],["/tags/Hexo/index.html","66d928e64656c1b5c8bcc8b1299e0a08"],["/tags/Python/index.html","9636a8df8d3dc8ed64a5f98382444223"],["/tags/Python卫星数据处理/index.html","6cec5bc397bda0e1c2c79734cc0f94a7"],["/tags/Python数值分析/index.html","cfae28de0c1f083c75f1e8f22b354ac9"],["/tags/Python数字图像处理/index.html","4af11fe1d2b85eef33358c6b4ebf5f93"],["/tags/index.html","7b083072c0edbd9e920aa76861749ebe"],["/tags/人生/index.html","3cfc03ef2b60ced19dd5f8f8dad4d429"],["/tags/大气与算法/index.html","620de8a127d21a9f296181e6443baca6"],["/tags/深度学习/index.html","88a745475bd7dd2aa92d63bc199e8608"],["/tags/生活与感悟/index.html","e7eb6c797e8c6c53daf98e22edf0d280"],["/tags/网络与浏览器/index.html","49dcd6f6a6ea679f92b4afa2d6e14e95"],["/tags/诗歌/index.html","9096322b0583d7cfca108c4cb151b849"],["/tags/读书与生活/index.html","f5eea83bbd6b9cee018def15cd563924"],["/tags/辐射传输/index.html","5bc442c13fd4bf462b7496f6a4333a3a"],["/tags/遥感/index.html","808a102a91d2cfbfcf0b4d24257d2378"],["/tags/遥感与大气/index.html","7af51b23358dc388901bdf8e7823b588"],["/tags/遥感影像分类/index.html","d583af44988d54f87de83128ad96bbf6"],["/tags/问题解决方案/index.html","767de725166284d442fadd2434a5ba74"]];
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
