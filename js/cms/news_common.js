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
		<a href="./news/post?content_id=${id}">
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
  date = parseCreatedAtDate(content.publishedAt)
  category = content.category[0]
  title = content.title
  body = content.body
  imageTag = getImageTag(content)
  const newsPostDetailHtmlStr = newsPostDetailHtmlString(date, category, title, body, imageTag)
  return newsPostDetailHtmlStr
};

const newsPostDetailHtmlString = (date, category, title, body, imageTag) => {
  return `
    <div class="news_post_head">
      <div class="news_post_news_option_area">
        <div class="news_post_date">${date}</div>
        <div class="news_post_category">${category}</div>
      </div>
      <div class="news_post_title">${title}</div>
    </div>
    <div class="news_post_content">
      <div class="news_post_img">
        ${imageTag}
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

const getImageTag = (content) => {
  if (content.image) {
    return `<img src=${content.image.url}> `
  }
  else {
    return ""
  }
};