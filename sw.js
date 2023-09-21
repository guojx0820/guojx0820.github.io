/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9e0ea74016ba55a9164cffda6964a644"],["/about/index.html","0fb5cf36d9c6d832b68f0c33b91c015a"],["/archives/1033b493.html","291fdc6fc03df6cc5e8dec6ff69c95df"],["/archives/1abb07a6.html","8029bba65916749455e61f11686f3e8e"],["/archives/1def5f0d.html","6b5b554047799b490592753f8057aab1"],["/archives/2021/03/index.html","2eefc22a7eba873051d358ff4233a878"],["/archives/2021/04/index.html","f2334216801b1405d572b3b33860b8e7"],["/archives/2021/index.html","b046168c01e53726c04495b055062ded"],["/archives/2022/04/index.html","36c24cb264cd2df2187f5aac2a12a8c6"],["/archives/2022/05/index.html","eb899fbc2f624f2130f63133d9331b7d"],["/archives/2022/06/index.html","426225a50e0543cf89e97f3ccf1462c0"],["/archives/2022/index.html","29f934bb13ea3870d2bcded8a0145244"],["/archives/2022/page/2/index.html","f0dcf6d583a2a7cb57c2b13811e20ede"],["/archives/2023/01/index.html","33471a359ca9d572f78975173cb5a565"],["/archives/2023/02/index.html","c41daa2e68f59f6b6ccbe4f610addad8"],["/archives/2023/03/index.html","5124b0138874a5ab98f1f8ff86d297e7"],["/archives/2023/07/index.html","23937bf7241be16756e7e858302fd836"],["/archives/2023/09/index.html","aeb2a037842b95162f9af03825135a23"],["/archives/2023/index.html","bf665694e86f0ae9753d383513021a2a"],["/archives/23cd4859.html","41bb2cf1bbf52da65fa1d57497eb7300"],["/archives/266295d8.html","04302123a6db84d552d53808efaa3c7e"],["/archives/330ac4a4.html","8ea9edc770bf994162116755fb0126cd"],["/archives/3a816938.html","6e70e9bd4983a8746f72c5786bd0462f"],["/archives/4360a9bd.html","f49a5d8c4d3257c2702b06e51835d889"],["/archives/49977e84.html","239d3e5a536e57e7c2c3856136cc7e5e"],["/archives/573e690a.html","f45d859dd44371fc799cbe6e6c9f8bc7"],["/archives/57eb0d7a.html","24161dab021a5901a740a9c401590e05"],["/archives/58b02e48.html","3a91d61eaf7b48d77da0a3b03e36d452"],["/archives/59a3b95f.html","ef5005cac1af7d591a8507241fb23942"],["/archives/61521166.html","33ac19c964f4a5bb80f112ef7281f478"],["/archives/6f5df5c1.html","e2b9cfd1dbc107850dc549c5df625cb9"],["/archives/7576230f.html","935e56816bc81402e8f4ea6721cc577f"],["/archives/8063fed6.html","c01173dfa45567415a15eda37d9ffb05"],["/archives/8c1f6a98.html","5bfb52a77d11598dc14146d4b338cac8"],["/archives/91104203.html","56c26a4e5ccd8758fa73fc0179b27cbc"],["/archives/92a27152.html","fe46d4af4f50a0d1af30ca575176154f"],["/archives/a1db3116.html","f4fd29bc370612405db6e6bff65d2527"],["/archives/a8ccf4cb.html","e2bba2c842cc7cfa0f0f12a82e3ebf3a"],["/archives/b7563557.html","f4c4c149b8b740750e0233df2115bf17"],["/archives/b9d5eb5f.html","1ce86405b070f35f796d612b1e765ca9"],["/archives/c144f20a.html","1d26dbd82f7e75367b7ec34f804555ea"],["/archives/e84af901.html","39f0b7471aca9ea993121a8219dad01a"],["/archives/f3ecd78a.html","423e8781806d67d79716d8c93402172a"],["/archives/f863e629.html","b98130a8918b196f45201fbc60369211"],["/archives/fe82aeb3.html","9f0d651bbb84207e56a86ccbc5ed5a92"],["/archives/index.html","f2ff6dea99ebb6fb72e4cd54f8ec2194"],["/archives/page/2/index.html","083ba25a95274dcc3800f49cec18f6e0"],["/archives/page/3/index.html","00538ee49c48ee58199edd969bbbb10b"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","65f21ca35e5e1dfa8c76cb75fad59f41"],["/books/index.html","edc48d27362960af035704b81527f733"],["/categories/index.html","7f3f81e360503a3673f2350c3722791b"],["/categories/博客搭建/index.html","512968da51e96d0c6bdc3c7bdf185e6a"],["/categories/生活/index.html","2174b079c44fb7c6e760e599e7434cbc"],["/categories/研究方法/index.html","1208090256fe1e19315d4e277f43671c"],["/categories/程序代码/index.html","c4a148bac4dbf029fea42fcf781b922a"],["/categories/程序代码/page/2/index.html","e9427b933d22cf7677ead0523df83c7e"],["/categories/解决方案/index.html","92eaf71a062296867aec83317dad0cab"],["/categories/读书与生活/index.html","e5e62a41a48c2896ef5b7ce1fb175c6a"],["/categories/遥感与大数据/index.html","29f6244ebb87147afea0b8e9dfdbf3af"],["/comment/index.html","2d36f90882c56b70c0cdbc7e116c52c8"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","723b28d6574c05d157f7c8c1852d7128"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","d0d0472f764dd056312e32807ac41328"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","f526f8c03420319ec03d4f7e2bc53815"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","6aaaea289c5c4dfca4d694b10df6ac18"],["/music/index.html","323bfab1437893775eddd60c3ce6e5f4"],["/notes/index.html","8f0fd8f750fe7894c29cf4f2099256b4"],["/page/2/index.html","beccaa531dedf8d9eff54cd6110f6fdd"],["/page/3/index.html","86487d096ef0cb1c0f319f56d0bcff21"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","377ed41923aa093b0ac29a5f4f3c85ea"],["/sw-register.js","4c04e885303b0635ec63b4953ab8fad6"],["/tags/C/index.html","b1614733c58c815a0eef28b2905e2329"],["/tags/Hexo/index.html","5928b3101ac4a80368303accaa038f97"],["/tags/Python/index.html","c9a2a769756eb5a33034213af6e3439f"],["/tags/Python卫星数据处理/index.html","09e68a4055254706b98af90a789188b6"],["/tags/Python数值分析/index.html","ed9bdbe3ba20f586d32ac52e4cc67421"],["/tags/Python数字图像处理/index.html","672ff4cbb68bbadabb0beec5cf693df3"],["/tags/index.html","7299a842bc4de649ef8959eb35fb8b94"],["/tags/人生/index.html","c45fcc8fd6b514efff15b88239f3dac4"],["/tags/大气与算法/index.html","985d82910f58021123376e1a60df3b12"],["/tags/深度学习/index.html","c52e175fdbf43dafa76cb85b07494100"],["/tags/生活与感悟/index.html","c13e96a757027cf844beb6c9d3034689"],["/tags/网络与浏览器/index.html","06eaf7993dd146ace5b807718a917b77"],["/tags/诗歌/index.html","155b97e5e5cfb8082817fc35c7adb776"],["/tags/读书与生活/index.html","ff9a79d45587275b99a9d973941ed254"],["/tags/辐射传输/index.html","38fa3aca8f857d0b5899266c1a416e38"],["/tags/遥感/index.html","1fa16e02e1d414740fe491309f700e24"],["/tags/遥感与大气/index.html","3580c27038578202ec1ac784dd48e4ed"],["/tags/遥感影像分类/index.html","125975f87e45a49da5b0e0e7e705881e"],["/tags/问题解决方案/index.html","f29a4397f1dfc6b0b8b2738601e13230"]];
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
