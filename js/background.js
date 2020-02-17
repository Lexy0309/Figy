var e, 
s = "se_bing";



chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({
        // 'url': 'newtab.html'
        url: chrome.extension.getURL("newtab.html")
    }, function( tab ) {

    });
});

chrome.runtime.onInstalled.addListener(function(details){
    if (details.reason == "install") {
        chrome.tabs.create({
            'url': 'welcome.html'
        });
    }
});
chrome.storage.sync.get("searchConfig", function(e) {
    s = void 0 === e.searchConfig ? "se_bing" : e.searchConfig.searchEngine, chrome.webRequest.onBeforeRequest.addListener(r, {
        urls: [ "https://default-search.online/search/?os=t*" ],
        types: [ "main_frame" ]
    }, [ "blocking" ]);
}), chrome.storage.onChanged.addListener(function() {
    chrome.storage.sync.get("searchConfig", function(e) {
        s = void 0 === e.searchConfig ? "se_bing" : e.searchConfig.searchEngine, chrome.webRequest.onBeforeRequest.removeListener(r), 
        chrome.webRequest.onBeforeRequest.addListener(r, {
            urls: [ "https://default-search.online/search/?os=t*" ],
            types: [ "main_frame" ]
        }, [ "blocking" ]);
    });
});


var r = function(e) {
    var r = "https://www.bing.com/search?q=" + new URL(e.url).searchParams.get("q");     
    return {
        redirectUrl: r
    };
};
