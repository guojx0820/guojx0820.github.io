/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3573c9956b6dc586904fa1e1b1132c1a"],["/about/index.html","efd26574cdc40361334f33b6e90b9638"],["/archives/1abb07a6.html","2a981501706147d2d220e6e5f759b0b3"],["/archives/1def5f0d.html","1afa25d2c1b0d2c10462246f298e5c6c"],["/archives/2021/03/index.html","075cc34846ea2fd4c77563522718842f"],["/archives/2021/04/index.html","15a17a579f73b37fca9d41250ac19d59"],["/archives/2021/index.html","1cfa8b69bf0d671c914ece40d56eb2e1"],["/archives/2022/04/index.html","edfa851e7606a242ed7e16485186f728"],["/archives/2022/05/index.html","ec2f2593e60ce5fd28beb1b76ca68107"],["/archives/2022/06/index.html","3ba7ab2b71a4349ec6ca6825df1154f8"],["/archives/2022/index.html","6e63849a8400b38a2a3055349efc33c7"],["/archives/2022/page/2/index.html","7e8951df578d5e44227e087712c23142"],["/archives/23cd4859.html","4bbbfd1de790b4342a16fc011c397285"],["/archives/266295d8.html","f7a00e34cc13ce7696d73d93fda346bd"],["/archives/330ac4a4.html","f5f138992dda326b09c9a91db7364f6e"],["/archives/4360a9bd.html","e0b6b7bbfa3a3065466ebf1c4ac93336"],["/archives/49977e84.html","a319fae0ca8595f68f78974fe5a14ffd"],["/archives/573e690a.html","51bb63807455679c8cf07e376a999801"],["/archives/57eb0d7a.html","a729a4e3b1003a1037f5713287dd9c7b"],["/archives/61521166.html","bd83e98d8a8aa33a28686503338a7ed4"],["/archives/7576230f.html","f6c363d250cf47a51779670cb6e1efaf"],["/archives/8063fed6.html","74ec5b41fb1b2ae7da2b836a04b1f046"],["/archives/8c1f6a98.html","947f91411607c2dfa1fbaa3433d8a28a"],["/archives/91104203.html","642e74b39889b7d0ffb55d4d91c93609"],["/archives/a1db3116.html","d758f0173e72300434a9bdaa2e5d0b54"],["/archives/a8ccf4cb.html","52f5acfc7535d40ff36ae65aad5fa637"],["/archives/c144f20a.html","029dfecd5f5f4d53242805e20c035f3e"],["/archives/e84af901.html","7e253e54c4cba3e6efb4474e3ae11b63"],["/archives/f3ecd78a.html","216a205ee848c8b8a10b23887819e377"],["/archives/fe82aeb3.html","396385566d78ff06dcdf2ae66461ad1e"],["/archives/index.html","9057de343ae7ca642ffe46ccc73d881d"],["/archives/page/2/index.html","20104b37780fec01e057e231923d8557"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","8e93b1eeb1aca120dcd15c862982ddbf"],["/books/index.html","66cea9e0d514641cfc2e0874a2459de8"],["/categories/index.html","a455a70287e8204c66e09b65ac7a1063"],["/categories/博客搭建/index.html","fb7999d5eb470af35a7b4a1ab6346835"],["/categories/生活/index.html","eb60f6ec5758a250628f6529eca0823d"],["/categories/程序代码/index.html","51c8c67bfff549a2d1fad7f528da1443"],["/categories/解决方案/index.html","e61dd644ff1726fd28cda97e20d1d93f"],["/categories/读书与生活/index.html","efff86f66a62df8891079f2143c7e509"],["/categories/遥感与大数据/index.html","ec9cafa7416f51254b2e35230d9dd6bf"],["/comment/index.html","54279592a366aed3225908675f799ce8"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","de94728f22bf28db242b5717b8719429"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","34841153dc92e4d0f8bfbea4e6bd660a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","adcd4ab34304833e901b16d4426c0363"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","3a5255a770b664b5b19e09d516cd2f95"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","7737b45548d9bafd6df25a1ecfae6f65"],["/music/index.html","af6c7393ebf57c3b617963d80c2bbd3b"],["/notes/index.html","1b2d105d4fe74204fc404fcb3e0298ec"],["/page/2/index.html","8fa7ab8afe4132fd1a5b71e78550f0a6"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","c6fe6e0e0260f9f2e1d23bdbf2eaf987"],["/sw-register.js","5d8522015592050d7536492b26d62411"],["/tags/C/index.html","459d45ccfed7e72147d35bc6e198d1d3"],["/tags/Hexo/index.html","d790b458d6f943405c5a334122b683bf"],["/tags/Python/index.html","c2bf762ee1f88fdbe8ea21415de6d682"],["/tags/Python数值分析/index.html","25632a4d8f9db21b4dc6bd832a56ca78"],["/tags/Python数字图像处理/index.html","49a9ff4beab21938a34f9f1f11beb2a7"],["/tags/index.html","28515622b7e5a253ee5a0172b7de0e67"],["/tags/人生/index.html","613eb3ba61270661417752d39b683502"],["/tags/生活与感悟/index.html","3d9ca3ecc45dbaa91923ae79d3b689dd"],["/tags/网络与浏览器/index.html","773e2f8ccfacae946ed2e26ed9472e49"],["/tags/诗歌/index.html","b49dfd0ce63f6960d14b0e3607461bcd"],["/tags/读书与生活/index.html","4350cd723ba9f1af3d2d5442f2967658"],["/tags/辐射传输/index.html","a48fbc83d31536ab79831fb1977627e7"],["/tags/遥感/index.html","83cba0d7061dadb845b4946bdb1b6dc6"],["/tags/问题解决方案/index.html","592c03e9223baa0273adb3f2920e2b1b"]];
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
