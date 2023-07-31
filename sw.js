/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","aa775705046c9eb26d3859539e85ce16"],["/about/index.html","2f627343e1ac1dc21c905604472a336f"],["/archives/1033b493.html","656369a3e89d2cfab67db1542389ccd3"],["/archives/1abb07a6.html","2f914a6ffa355b1dcb80e29a4208b1d3"],["/archives/1def5f0d.html","b8ac163c95e6fe77de15daab7c58759b"],["/archives/2021/03/index.html","e922c5fefeec4b0cf3b6066a4be15a6b"],["/archives/2021/04/index.html","b710f87ff3b4a7c2078ac670a068605f"],["/archives/2021/index.html","be9e6777bd5b15b377a26f4bea41caca"],["/archives/2022/04/index.html","6bd6e9a2a8db2a116d17f9a9c4727d8b"],["/archives/2022/05/index.html","7b8ff22ccc47a08ad5f1f4963912b91f"],["/archives/2022/06/index.html","27824af85256eaf263cfa1004d22b002"],["/archives/2022/index.html","606e41bb9284f5229bfa2839d05242c2"],["/archives/2022/page/2/index.html","442bd54bab6d07e3d2a0bca2e0031030"],["/archives/2023/01/index.html","a51b0cc209d34d899fed503cc45e5989"],["/archives/2023/02/index.html","c79d84b2c7259cc486f980d7b0abd2b1"],["/archives/2023/03/index.html","03b84a1bdd5c238fb09f05b2e2cb3372"],["/archives/2023/07/index.html","6b8b83d8b942f3a80446ed53bd7a7a27"],["/archives/2023/index.html","647efc7f3d966548a2dff0ca91e77f15"],["/archives/23cd4859.html","7fda3ac6f77fead86cf77f74f5cb7ecd"],["/archives/266295d8.html","077fd46cb206982a25af3d1b75f1f4a3"],["/archives/330ac4a4.html","5e6dd3f829ea2435402c9c3b2d2ed016"],["/archives/3a816938.html","5870800e6c8c5af0d57b4c7d15e60f87"],["/archives/4360a9bd.html","07f2ab13e584fdb44d38368c87ed9505"],["/archives/49977e84.html","93c1f60d75f9d155aaca21e115cb2da7"],["/archives/573e690a.html","6bb0b991584a405fe1ef02e0d1e88a4e"],["/archives/57eb0d7a.html","81ba2c1357493264eba48a91e78e8e88"],["/archives/58b02e48.html","4938e2e94aa3af1f772853f06a4023fb"],["/archives/59a3b95f.html","8eead003909a0224069e8f9fb14499e5"],["/archives/61521166.html","b4cee86ef8cf5db6a518f4114601f54e"],["/archives/6f5df5c1.html","b7c4c9efa2c13af12687a37b33def6b2"],["/archives/7576230f.html","a7c91f9bc1982d062997bd84b727cce9"],["/archives/8063fed6.html","99748682da434bbd902142b88d2f7e75"],["/archives/8c1f6a98.html","95f13e9f7da74476bff831ff89a861c7"],["/archives/91104203.html","27b43f0eed9ed9efe03442c779f851db"],["/archives/92a27152.html","b76f4c44280f1862ccc844f19f0c4663"],["/archives/a1db3116.html","62411a277c390fffc39c09a39e65e063"],["/archives/a8ccf4cb.html","d2a5277b90ab48f8d67d8bb61da49953"],["/archives/b7563557.html","aaf63e34caa84b6a514f43eb4fe47c0f"],["/archives/b9d5eb5f.html","f9eea74b73ff08e0c2ef3ea465aba3fd"],["/archives/c144f20a.html","1dff2173304cafb2047f5abb07d434b3"],["/archives/e84af901.html","216d54c4c364c632769e8579ae96d781"],["/archives/f3ecd78a.html","256bbfd7824d3887aac2f8e8e8c8f45a"],["/archives/fe82aeb3.html","3b1164cc653bae4e91af49a95ef7376c"],["/archives/index.html","75f830731948d53d166ec423bf5d98c9"],["/archives/page/2/index.html","3d2952b15945b21059361ae6ac23f705"],["/archives/page/3/index.html","058514c978c3da3cd8ef4311b2b2c2fe"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","129237faea8cfb8601a7f57253a319b7"],["/books/index.html","6db2c84ac1170fdfecbd11c0242ad3a7"],["/categories/index.html","9a40b59434ccf95e13456180c8517869"],["/categories/博客搭建/index.html","24c65cfd6f399e56ee3fdddafe580003"],["/categories/生活/index.html","8f983bf3e9142bc5c65fb69d770f57eb"],["/categories/研究方法/index.html","e52f2eeae3d8d378ac871fcb27d58502"],["/categories/程序代码/index.html","edcbf7f865856e444d53b718ffa81b2e"],["/categories/程序代码/page/2/index.html","3d635fdec04136d50ed61c37ba4c871e"],["/categories/解决方案/index.html","82501746882835723eb5b2a5678d2655"],["/categories/读书与生活/index.html","4fdb22d3c411847309ee0f56ae228a6c"],["/categories/遥感与大数据/index.html","9e678794511344cdc7273dc30bd29741"],["/comment/index.html","61d34b1599db1eeecd27d983303d4d08"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","4fcc9be714bab0750ff6dadc2c0698eb"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","00712b3d4d52e565f6ae1abb1ca20520"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","c85914e1db63ad6c03e0ea6c56b65cc8"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","a7061ec4375219e778b10b161fc955ac"],["/music/index.html","1b36ce9a41cfa49226c218f918e7c05e"],["/notes/index.html","cdd08c8594c85c2ec561c32bd0193346"],["/page/2/index.html","97aabbc2d3c6e3fa105d2f7750fa3ca4"],["/page/3/index.html","acf5a33d338d959b92a92ae5f100c815"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","6d69cd04fe8925fea9556de9ee745e07"],["/sw-register.js","b082d3a950f8b647726b4b7cd8ae0e4d"],["/tags/C/index.html","fb463a3b6188cfea8bb89858e1e26f24"],["/tags/Hexo/index.html","125e0bcfb7baaf38d13906ea9b659305"],["/tags/Python/index.html","be8a6aae1dbe56c69a2e188eb05d17aa"],["/tags/Python卫星数据处理/index.html","391a3f4dc5895b0dcb6860f7011198f8"],["/tags/Python数值分析/index.html","77ff95fbfd25e84bbe4a1437a79ff855"],["/tags/Python数字图像处理/index.html","b8d56d4937b6c3a4b536a095cea88c77"],["/tags/index.html","a52b77f7015f74e301fd170faa03a715"],["/tags/人生/index.html","8d99bb8a51d6e5819fd7d156f728ef36"],["/tags/深度学习/index.html","7f9c2022ba4b73961f2d0843cb42657e"],["/tags/生活与感悟/index.html","b86ff8659df00e5eb36d03f3b2cc1e29"],["/tags/网络与浏览器/index.html","4b99c64cde10b1bbf51570d5270a8a9d"],["/tags/诗歌/index.html","331e67baf322fe15ce45d1e163ab4170"],["/tags/读书与生活/index.html","c839c3bf3851731da8e59e4c9a518642"],["/tags/辐射传输/index.html","0df60a6cfc24bb1500dd8adbb8f57fae"],["/tags/遥感/index.html","6ddac73be166495e5eca8aef270927f4"],["/tags/遥感与大气/index.html","9c7811542d2cb8236b3e9c48365cc05c"],["/tags/遥感影像分类/index.html","02ad43e4bb94889db93c0a6c04eff983"],["/tags/问题解决方案/index.html","b2b08c7b77a038fcc5578b8e8f166d08"]];
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
