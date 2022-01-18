// News一覧を取得するための関数群
const getNewsListHtmlTagStr = (contents) => {
	let newsListHtmlTagStr = "";
	contents.map(content => {
    date = parseCreatedAtDate(content.publishedAt)
    id = content.id
    category = content.category[0]
    title = content.title
    newsListHtmlTagStr += newsItemHtmlString(id, date, category, title)
	})
  return newsListHtmlTagStr
};

const newsItemHtmlString = (id, date, category, title) => {
  return `
		<a href="./news/post.html?content_id=${id}">
      <li class="list_top_news">
        <div class="top_news_info">
            <p class="news_date">${date}</p>
            <p class="news_kind">${category}</p>
        </div>
        <h5>${title}</h5>
      </li>
		</a>
  `
};


// News記事詳細を取得するための関数群
const getNewsPostHtmlTagStr = (content) => {
  console.log(content)
  date = parseCreatedAtDate(content.publishedAt)
  category = content.category[0]
  title = content.title
  body = content.body
  imageUrl = getImageUrl(content)
  const newsPostDetailHtmlStr = newsPostDetailHtmlString(date, category, title, body, imageUrl)
  return newsPostDetailHtmlStr
};

const newsPostDetailHtmlString = (date, category, title, body, imageUrl) => {
  return `
    <div class="news_post_head">
      <div class="news_post_title">${title}</div>
      <div class="news_post_date">${date}</div>
      <div class="news_post_category">${category}</div>
    </div>
    <div class="news_post_content">
      <div class="news_post_img">
        <img src=${imageUrl} width=30%> 
      </div>
      <div class="news_post_body">${body}</div>
    </div>
  `
}


// 共通の関数
const parseCreatedAtDate = (dateAt) => {
  const date = new Date(dateAt);
  const year_str = date.getFullYear();
  const month_str = ('0' + (1 + date.getMonth())).slice(-2);;
  const day_str = ('0' + date.getDate()).slice(-2);
  return `
    ${year_str}.${month_str}.${day_str}
  `
};

const getImageUrl = (content) => {
  if (content.image) {
    return content.image.url
  }
  else {
    return ""
  }
};