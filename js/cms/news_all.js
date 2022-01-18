const query = "https://liber-craft.microcms.io/api/v1/corporate-news?orders=-createdAt"

fetch(query, {
  headers: {
    "X-MICROCMS-API-KEY": "fb4d923390754d15ab6c8b7207637fbec91e"
  }
})
  .then(res => res.json())
  .then(res => {
    const NewsListHtmlTagStr = getNewsListHtmlTagStr(res.contents);
    const targetHtmlTag = document.getElementById("news_all");
    targetHtmlTag.innerHTML = NewsListHtmlTagStr;
  })
