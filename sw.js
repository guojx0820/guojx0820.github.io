/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","20246ae81c5d1f4c6b3696be94f2a0f5"],["/about/index.html","27e7a9ddb41c44b5e30418fb4a682f09"],["/archives/1abb07a6.html","9bdfe8ed335246396af8ccc00078a8eb"],["/archives/1def5f0d.html","5a138b8138f521f437f56647ee00d60c"],["/archives/2021/03/index.html","e6f7af3a6eaffd176229636946b71684"],["/archives/2021/04/index.html","a1d99e84cdaf7f7a8ce272823ba40aef"],["/archives/2021/index.html","3dc72d6f6124aba655db476f1b91970c"],["/archives/2022/04/index.html","d4b384d57cf8862031311579519c5d68"],["/archives/2022/05/index.html","32aadc3635adb1fd9e39f9f38ba4d03f"],["/archives/2022/06/index.html","a18dcd1104d409c510fe0c33d6ef6e9c"],["/archives/2022/index.html","8d8d48fc0ab2bd432a298a352f13be1c"],["/archives/2022/page/2/index.html","01853f742cc4ca99cd34aa36a8887748"],["/archives/2023/01/index.html","5bf22220b0f6b43bce7e2c7f9287c7d0"],["/archives/2023/index.html","1a70a5c47d4c92431f19fc081518bc50"],["/archives/23cd4859.html","286e49be006c75ad401818122ca84e18"],["/archives/266295d8.html","e4e0274f0391848190778aa1c1092031"],["/archives/330ac4a4.html","be4d8e70cfd2fd3059510ba56f6b5d86"],["/archives/3a816938.html","7a04405ba60125bfc00c84d1d213f48f"],["/archives/4360a9bd.html","b914c5e44be435731e649caddd32c63c"],["/archives/49977e84.html","46330d9b4f70a1edf52f48b921836c0f"],["/archives/573e690a.html","c8541a029000558b6078355110289275"],["/archives/57eb0d7a.html","25ce4fd979e2629d134de5d5a0a1b3e9"],["/archives/61521166.html","fb4f3f5283026dac4b13c665b5f1f29f"],["/archives/7576230f.html","f9c4396c3d6e7d1ac922f79caddd0003"],["/archives/8063fed6.html","d0e3db7135c05741ba8bdf2e81404738"],["/archives/8c1f6a98.html","685469b97bbf31c055febc56813f0383"],["/archives/91104203.html","ee5987f206d07641dec6152f8f6ccd9c"],["/archives/a1db3116.html","50b352c4266827060e58e13ea45ef5ac"],["/archives/a8ccf4cb.html","3ba5cd8b8dd2a5a4fe3fba07288537cd"],["/archives/c144f20a.html","97aa1c996c4307ba98c7b84ace2eafde"],["/archives/e84af901.html","7dbb58e5a5511c4853369696832af03d"],["/archives/f3ecd78a.html","5aaf638a3d73085ad6126062c944e8c5"],["/archives/fe82aeb3.html","d3b944b0519959548b8103234c4fa42b"],["/archives/index.html","8c97125550579f47525feff85af9b98b"],["/archives/page/2/index.html","459d80553bc677611f8808c6a56e45d9"],["/archives/page/3/index.html","39b05f0f622603736429e9aad40d361d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","f52df09e195049f47b749e4c1d4d920f"],["/books/index.html","310d520c666bd9e902a171c9ea61e486"],["/categories/index.html","05a933573763933ac0f11a2096c34bca"],["/categories/博客搭建/index.html","52af296d3ae7d740ca68fd4e474fbdbe"],["/categories/生活/index.html","58d7bec5c786eaf5b53d835604d1f91f"],["/categories/程序代码/index.html","0b2115f553bb52db6b7d2e79a004222e"],["/categories/解决方案/index.html","650020022d1aeb4057b7ac7471a965f7"],["/categories/读书与生活/index.html","bfe10750cf411abd10e8274820502331"],["/categories/遥感与大数据/index.html","1496ab78c3874d495ff9df5ac9b7a660"],["/comment/index.html","ee0fc2405255b52840d8660b84b5c379"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","6ed9b64f9eac0e72efb31d4caa6c5f66"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","15be653d3583e7a95d982bb99c5a02a0"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","87a6cee7536852de585f95a35ef341a8"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","ea560cdfa3dd511eae7e5539de093077"],["/music/index.html","307ab414019b0c397dadba30074ca82d"],["/notes/index.html","03610ca424c081601e66bbe0f07ca7ce"],["/page/2/index.html","3e3a54520b9328845d5fbbe541534eff"],["/page/3/index.html","986de4e60604c5e171e0c5ee240e4084"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","4467a18d23b6023a6211e1b18ba9f702"],["/sw-register.js","a156ed6eaa97afba42b8c6ba8ab15b3d"],["/tags/C/index.html","45bf3340bbb9b5e4ff437c0cc601cfa0"],["/tags/Hexo/index.html","bd3f090e3ad46138450c9ba302f76ccf"],["/tags/Python/index.html","fc32e059cc4ce8a1b1bd710e8cd31ce9"],["/tags/Python数值分析/index.html","0783622d61088006e3748f3087c1f712"],["/tags/Python数字图像处理/index.html","e473061717e64f89d233d7af6460cbd1"],["/tags/index.html","d8def369175771f244d1c3124a0d19b0"],["/tags/人生/index.html","1000b366e65ad1fc0a8d9fcbf10d83ee"],["/tags/生活与感悟/index.html","853b9fe84c1b1e5e58e872441456ed7f"],["/tags/网络与浏览器/index.html","be59c591e958b7d87bb0694c1237fa6f"],["/tags/诗歌/index.html","dcf82baf0eca72406594566e96c665be"],["/tags/读书与生活/index.html","0d638163419c0390d0c483f11cefd57b"],["/tags/辐射传输/index.html","5f9de854c739926bf3170b318cdeb9de"],["/tags/遥感/index.html","40b759107fd38bf60d5bcba7eba90b8e"],["/tags/问题解决方案/index.html","88c94921d51adcea3f142ca269db7eba"]];
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
