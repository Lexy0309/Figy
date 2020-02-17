var e = {
    activeWidget: "activeWidget",
    backgroundColor: "backgroundColor",
    backgroundImage: "backgroundImage",
    temperatureUnit: "temperatureUnit",
    timeFormat: "timeFormat"
}, t = 9, s = [ "F25252", "F27F52", "F2B052", "F2D052", "AFDC6C", "7AE280 ", "83DCBC", "6DC6E4", "6D8BE4", "896FE3", "000000", "FFFFFF" ], a = {
    activeWidget: "time",
    backgroundColor: "AAAAA",
    backgroundImage: "9",
    temperatureUnit: "F",
    timeFormat: 12
}, r = {
    searchEngine: "se_bing",
    type: "web"
}, o = {
    fallback: "https://www.bing.com/search?q={searchTerms}",
    se_google: {
        web: "https://www.google.com/search?q={searchTerms}",
        image: "https://www.google.com/search?q={searchTerms}&tbm=isch",
        video: "https://www.google.com/search?q={searchTerms}&tbm=vid",
        suggest: "http://google.com/complete/search?client=chrome-omni&q={searchTerms}"
    },
    se_yandex: {
        web: "https://www.yandex.ru/search/?text={searchTerms}",
        image: "https://yandex.ru/images/search?text={searchTerms}",
        video: "https://yandex.ru/video/search?text={searchTerms}",
        suggest: "https://api.bing.com/osjson.aspx?query={searchTerms}"
    },
    se_baidu: {
        web: "https://www.baidu.com/s?ie=utf-8&wd={searchTerms}",
        image: "https://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word={searchTerms}",
        video: "http://video.baidu.com/v?ie=utf-8&word={searchTerms}",
        suggest: "https://api.bing.com/osjson.aspx?query={searchTerms}"
    },
    se_bing: {
        web: "https://www.bing.com/search?q={searchTerms}",
        image: "https://www.bing.com/images/search?q={searchTerms}",
        video: "https://www.bing.com/videos/search?q={searchTerms}",
        suggest: "https://api.bing.com/osjson.aspx?query={searchTerms}"
    },
    se_yahoo: {
        web: "https://default-search.online/search/?s=se_yahoo&q={searchTerms}",
        image: "https://images.search.yahoo.com/search/images?p={searchTerms}",
        video: "https://video.search.yahoo.com/search/video?p={searchTerms}",
        suggest: "https://search.yahoo.com/sugg/chrome?output=fxjson&nresults=10&command={searchTerms}"
    },
    se_ask: {
        web: "http://www.ask.com/web?q={searchTerms}",
        image: "http://www.ask.com/web?q={searchTerms}",
        video: "http://www.ask.com/youtube?q={searchTerms}",
        suggest: "http://ss.ask.com/query?q={searchTerms}"
    }
}, c = "https://api.bing.com/osjson.aspx", n = "";

