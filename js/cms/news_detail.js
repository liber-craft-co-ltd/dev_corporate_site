const contentId = new URLSearchParams(window.location.search).get('content_id');
const query = `https://liber-craft.microcms.io/api/v1/corporate-news/${contentId}`;

fetch(query, {
    headers: {
      "X-MICROCMS-API-KEY": "fb4d923390754d15ab6c8b7207637fbec91e"
    }
  })
    .then(res => res.json())
    .then(res => {
      const NewsListHtmlTagStr = getNewsPostHtmlTagStr(res);
      const targetHtmlTag = document.getElementById("news_post_detail");
      targetHtmlTag.innerHTML = NewsListHtmlTagStr;
    })  
