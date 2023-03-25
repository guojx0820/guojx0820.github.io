/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","399604e7f217de7fc5e506654155db0d"],["/about/index.html","572314c8e25c67eb4efc69fffec3f275"],["/archives/1033b493.html","e95d9259c2782d7c151a18a5ce67e8c3"],["/archives/1abb07a6.html","aa6cb8e172669e1e8b3e1a3fcf381c93"],["/archives/1def5f0d.html","3feb8b75c58cec66763311ec24ace29b"],["/archives/2021/03/index.html","4135cd62b4f66d6021f2f5b43a700edd"],["/archives/2021/04/index.html","6559b24e496395772ac7ad26168e25d6"],["/archives/2021/index.html","e591b1fd56d8e504da220404751359b7"],["/archives/2022/04/index.html","9abd4ba0716dfcda37094228170138eb"],["/archives/2022/05/index.html","11b64b0c71110b90d6f0b5033d5adab1"],["/archives/2022/06/index.html","f91ff0ea023186b02ff55c2a0d34e339"],["/archives/2022/index.html","f06a6e8d69484b0329ac424456b932a3"],["/archives/2022/page/2/index.html","06aa5f724775c5fe9a8374a9dec4a66d"],["/archives/2023/01/index.html","2d0a382e783c395813593aedf27af9ae"],["/archives/2023/02/index.html","bf97b9d5e7ddf303e44dda1b53508b63"],["/archives/2023/03/index.html","1c3b0dfbcc884ba175b33c704b23ef60"],["/archives/2023/index.html","a51493fa280f1310783733dae4aa9bfd"],["/archives/23cd4859.html","303d30774acade9630ee2e5e98b09d23"],["/archives/266295d8.html","94a96513f9f9626cee7fb0ee94520b6e"],["/archives/330ac4a4.html","361df073554d8ee9a44c956312e28617"],["/archives/3a816938.html","0b3e9c0f3d8483f991f7a4360b239ab7"],["/archives/4360a9bd.html","954ecda9106cd1ec872d0ed6bf93733d"],["/archives/49977e84.html","9c02e5b2c78b3040c621b1c3345fee60"],["/archives/573e690a.html","38e715eb5a433cd29b7b6679fbabac34"],["/archives/57eb0d7a.html","06e00013eae5988c7a1592c083b6f764"],["/archives/58b02e48.html","01bbb6ed0850d38f77cb08de3a935f5f"],["/archives/59a3b95f.html","dce7f547d2eb9c8d0c8ae60b178422de"],["/archives/61521166.html","96314257442cad045fe5445d38df299f"],["/archives/7576230f.html","d95c049007343b37b68818dd0de87d73"],["/archives/8063fed6.html","184fc2ab893281059a3bd0ed8f0a3d43"],["/archives/8c1f6a98.html","3cc15fa119e15c94e5478b93d33227a0"],["/archives/91104203.html","21da08bd93d4b3275953aee4c8f608ca"],["/archives/92a27152.html","712c101a8708bdae50159abab939dfc1"],["/archives/a1db3116.html","237a96303fbf6ef5175ce195d54692fe"],["/archives/a8ccf4cb.html","26b8d77b7d86cb6bf009c31336a01ed7"],["/archives/b7563557.html","de0c8c4f71f0aed7699b9bd4e58efaff"],["/archives/b9d5eb5f.html","07424d932be577a78c3693294a233eb4"],["/archives/c144f20a.html","d2000bfdfacb097be61cf9406f5625f0"],["/archives/e84af901.html","ecaac5fe911ef50bb8cf8b0064d3a505"],["/archives/f3ecd78a.html","613cee9cce365220c03cc25284a2db30"],["/archives/fe82aeb3.html","8e818648422efa7b3fda9d34b452de5d"],["/archives/index.html","d2e6a967e50676103049fc131a02094f"],["/archives/page/2/index.html","51115a908061522c270ce6da13ea283e"],["/archives/page/3/index.html","ecacbf01fd48c6cfb10cfd96a2c68b21"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","b5c31b7058de1ce02f77826a940f0d22"],["/books/index.html","e8078725ed68a34bb8f0dd8b0d586077"],["/categories/index.html","894a3e782f5f00233c8ef79aac9519cb"],["/categories/博客搭建/index.html","4cd2185900279afc91bd158df1cddd51"],["/categories/生活/index.html","2ba16d887a3af6ec8c680da2806f1457"],["/categories/研究方法/index.html","0fc6a56703e596562128915eb6af541b"],["/categories/程序代码/index.html","65b39af81c641c74e6a38f504c3c7495"],["/categories/解决方案/index.html","1a6e3f7fb23464ca6e8f61965315fbd1"],["/categories/读书与生活/index.html","5f254f9e015d7b5ef591146dfa90c80d"],["/categories/遥感与大数据/index.html","1b3f231bcf58ca94a1fdc9f9630c3269"],["/comment/index.html","efd6ba8feb7fdb7086ac089cc0a3e15a"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","826949de94e4849f26e901709a866d05"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","cbded463ff035191135af6b9f9808f95"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","0dd498e7a01af80f488086ed54c6b024"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","06a17fbac206d8db1bbd5745c28c5b01"],["/music/index.html","aea4883bf33020f8babafb2939ed5e8d"],["/notes/index.html","358521301d77b15585ffb55ba3f101de"],["/page/2/index.html","28de9d52de5e2087a9904a305b93ec81"],["/page/3/index.html","3ac7576ceaa7e618f1bb92b2fd6bcbc8"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","b47ec393fc0752081a47ef8aac42c0d7"],["/sw-register.js","9c3206dd77db6d7b942fd29111c76223"],["/tags/C/index.html","18de7ccdae804717e0a3e7ec831a6d7d"],["/tags/Hexo/index.html","8f572fbab7f7ef12d622d26d9c7e58a0"],["/tags/Python/index.html","f7ede0990d9fcfeef82911a90f695f64"],["/tags/Python卫星数据处理/index.html","29fc2d007925edac4b279e3ea1c2c31e"],["/tags/Python数值分析/index.html","8e9d169512fea50e2a0e11f89721d2f4"],["/tags/Python数字图像处理/index.html","d2a6628ed6e6727394c784cd3e30220d"],["/tags/index.html","72f44c2ca5b1b2f48f87a3502e02e0e8"],["/tags/人生/index.html","def50cb24ca14bfa2e9d659c2f0c0540"],["/tags/生活与感悟/index.html","483a2c1980d7989e948b42cf336e45c9"],["/tags/网络与浏览器/index.html","f290d769839b18dcbc577e2123ddd578"],["/tags/诗歌/index.html","690aa9dbc19cf4f4be3666d01681dda1"],["/tags/读书与生活/index.html","f30196bc9bb44a0b85228d219e961008"],["/tags/辐射传输/index.html","0ee5c2230b2711d18cbfdc3ac2fe9305"],["/tags/遥感/index.html","2c104824b4279caff5d786d6ea5c08ee"],["/tags/遥感与大气/index.html","0b24cee5a5a80ee30dbc65b9a828f8ef"],["/tags/遥感影像分类/index.html","98d3af0a3e4c48b69c0a82b2addc558d"],["/tags/问题解决方案/index.html","a592b6ccd07c4aae4aa2b8ea4b029947"]];
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
