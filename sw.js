/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","db1f10a1391b6259aaa612fa0e5bf329"],["/about/index.html","f744f3a3ec55e9ec8617de61ec870aee"],["/archives/1abb07a6.html","4570c8b7c6faa143b7cd2fd5ea2694ff"],["/archives/2021/03/index.html","6e1414daf637fe90adcb00fcbf2a03e9"],["/archives/2021/04/index.html","ad9ebb163a5845be738d5bba00d80442"],["/archives/2021/index.html","95a5577c6b568ca692beb6dee16849b0"],["/archives/2022/04/index.html","70014a768f752edd6185cd17a86a8050"],["/archives/2022/05/index.html","9f7eca28d315c380aabc702a9d3aee99"],["/archives/2022/index.html","b7b4677c26763252f54c310a212cf481"],["/archives/2022/page/2/index.html","02b86d379347546da82a51e1b62adf6a"],["/archives/23cd4859.html","fdf94afcbf16b4ae86b623b25c08c89b"],["/archives/266295d8.html","c46b21559590380b7e661c8c5be77791"],["/archives/4360a9bd.html","1bd4521792a82589642eabdeddecd01a"],["/archives/49977e84.html","865c1bb0a0406a13680b5a55ac3a8d7f"],["/archives/573e690a.html","e686ed0d5865fb806d8a1d8cd51bd8c1"],["/archives/7576230f.html","841c1fde368a04532067d913a0012a47"],["/archives/8063fed6.html","baf01058e1506bdf87dcf0739f6a4194"],["/archives/8c1f6a98.html","62ef9b65de3bc290f98c9a87862ada2b"],["/archives/a1db3116.html","3e29654ac0444bae247d7f67a76329d1"],["/archives/a8ccf4cb.html","5e27874ea3402b9cd6668bbd5ecc6e3f"],["/archives/c144f20a.html","0f2a77edef1a1c5830a3f84c31cc2d5b"],["/archives/f3ecd78a.html","7980bd21119bb9fbb4f29eef3a72ef85"],["/archives/fe82aeb3.html","970de9ad66c00d4d58fe1970ba656bcb"],["/archives/index.html","b9b7464e30930940311c193b0c248dbf"],["/archives/page/2/index.html","5d27c495f3ac8487d89e325baf44b7ef"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","93cbc804781df0c5ca17c187c1842648"],["/books/index.html","d4de8ad97e6b4813c7d11a6e12afb007"],["/categories/index.html","73b9f5d5fae9967f52f507ae0f2abed8"],["/categories/博客搭建/index.html","e592d55662163e2ebe173a98852b0908"],["/categories/生活/index.html","c092a149a78e449fda03bde9744de6ef"],["/categories/程序代码/index.html","9a94097f70e857b5ce0ac83347616941"],["/categories/解决方案/index.html","4a4d35cd0ef225b9feba94244bc8d267"],["/categories/遥感与大数据/index.html","370d7c9bd644c15a5605117d2566d7fd"],["/comment/index.html","149def483d57af37795fef0a2e039e26"],["/css/index.css","30f837a26c97ec35ca670ca0ea5b4c4b"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","d5516271d1422b3e5daffad0128f7ba4"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","12dba9899dd5adef6a179cbd3ea64d11"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","0a81efe0acdf6525da2c21d39baef19e"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","817aba9460ef984b089ad8b74f871e09"],["/music/index.html","7bed8c088b6c059865b74467cdc0e04d"],["/notes/index.html","0c65e65a834f8410533dfe629c9adf97"],["/page/2/index.html","d9f3d87e5d1321643ee634ae9429d506"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","8497101e5b670f79510cc4e85c6e9566"],["/sw-register.js","3d9e0c9454bf501ecf5ba4819134bef0"],["/tags/C/index.html","14f56d3094b76d6ec3d93ecbb8bf04e4"],["/tags/Hexo/index.html","b734be6e8478a6e22bb7aaa57f0e34d5"],["/tags/Python/index.html","d604978a47f38d50c11895581486602b"],["/tags/Python数值分析/index.html","c8e285730333b1b83f01dec67fb9f0bc"],["/tags/Python数字图像处理/index.html","b7cba2d86e3eaa824dfeacf355a4409e"],["/tags/index.html","73fb5fd4c833251cb0396106008cb075"],["/tags/生活与感悟/index.html","364424e47512a0078091d3709a60ab55"],["/tags/网络与浏览器/index.html","875188ae09a222fd31ddd49015846016"],["/tags/诗歌/index.html","f189609e9b257bf975ac5b3eebf86203"],["/tags/读书与生活/index.html","ff9b05c39c35135a20d47fcc5642ff14"],["/tags/辐射传输/index.html","e4ddf2b77f050eac54ba4ad72a8c0fd6"],["/tags/遥感/index.html","c2f650dabbc0eacdf294157749563e31"],["/tags/问题解决方案/index.html","d7e2aa16b86becfe5191d9daf6fb1dc7"]];
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
