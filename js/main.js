var oAs = document.getElementsByTagName("a");
var oSearchText = document.getElementById("search-text");
var oSearch = document.getElementsByClassName("search")[0];
var oNavContent = document.getElementsByClassName("nav-content");

// 定义搜索引擎
var SearchEngines = {
    "baidu": "https://www.baidu.com/s?ie=UTF-8&wd=",
    "google": "https://www.google.com/search?source=hp&ei=uWC3W6u9N8v6vASSm4WQAw&btnG=Google+%E6%90%9C%E7%B4%A2&q=",
    "bing": "https://cn.bing.com/search?q=",
    "fanyi": "https://fanyi.baidu.com/translate?aldtype=16047&query="
};

// 循环为控件添加事件
for(let i = 0; i < 8; i++){
    oAs[i].onclick = () => {
        if(i === 0 || i === 1){
            oAs[0].classList.remove("active");
            oAs[1].classList.remove("active");
        }else {
            for (let i = 0; i < oNavContent.length; i++){
                oNavContent[i].classList.remove("active");
            }
            oNavContent[i - 2].classList.add("active");
            for(let j = 2; j < 8; j++){
                oAs[j].classList.remove("active");
            }
        }
        oAs[i].classList.add("active");
    }
}

// 搜索框获取焦点事件
oSearchText.onfocus = () => {
    oSearch.style.borderBottom = "1.5px solid rgb(44, 158, 158)";
    oSearch.style.transition = '0.5s';
};

// 搜索框失去焦点事件
oSearchText.onblur = () => {
    oSearch.style.borderBottom = "3px solid #9900EA";
    oSearch.style.transition = '0.5s';
};

// 搜索框回车键搜索功能实现
oSearchText.onkeyup = (e) => {
    if (e.code == "Enter") {
        search();
    }
};

// 搜索功能实现
function search() {
    var data = oSearchText.value;
    if (data.indexOf(":") === -1) {
        window.location.href = SearchEngines.baidu + data;
    }else {
        var datas = data.split(":");
        let searchEngine = datas[0];
        let keyWord = datas[1];
        switch (searchEngine) {
            case "bd":
                // 百度搜索
                window.location.href = SearchEngines.baidu + keyWord;
                break;
            case "gg":
                // 谷歌搜索
                window.location.href = SearchEngines.google + keyWord;
                break;
            case "by":
                // 必应搜索
                window.location.href = SearchEngines.bing + keyWord;
                break;
            case "fy":
                // 翻译搜索
                window.location.href = SearchEngines.fanyi + keyWord + "&keyfrom=baidu&smartresult=dict&lang=auto2zh#en/zh/";
                break;
            default:
                // 默认百度搜索
                window.location.href = SearchEngines.baidu + data;
                break;
        }
    }
}