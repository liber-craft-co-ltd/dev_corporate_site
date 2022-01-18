fetch("https://liber-craft.microcms.io/api/v1/corporate-news?orders=-createdAt&limit=5", {
	headers: {
		"X-MICROCMS-API-KEY": "fb4d923390754d15ab6c8b7207637fbec91e"
	}
})
	.then(res => res.json())
	.then(res => {
		console.log(res.contents);
		const NewsListHtmlTagStr = getNewsListHtmlTagStr(res.contents);
    console.log(NewsListHtmlTagStr);
    const targetHtmlTag = document.getElementById("list_top_news");
    targetHtmlTag.innerHTML = NewsListHtmlTagStr;  
	})


const getNewsListHtmlTagStr = (contents) => {
	let newsListHtmlTagStr = "";
	contents.map(content => {
    date = parseCreatedAtDate(content.createdAt)
    category = content.category[0]
    title = content.title
    newsListHtmlTagStr += newsItemHtmlString(date, category, title)
	})
  return newsListHtmlTagStr
}

const parseCreatedAtDate = (createdAt) => {
  date = new Date(createdAt)
  const year_str = date.getFullYear();
  const month_str = ('0' + (1 + date.getMonth())).slice(-2);;
  const day_str = ('0' + date.getDate()).slice(-2);
  return `
    ${year_str}.${month_str}.${day_str}
  `
}

const newsItemHtmlString = (date, category, title) => {
  return `
		<a href="">
      <li class="list_top_news">
        <div class="top_news_info">
            <p class="news_date">${date}</p>
            <p class="news_kind">${category}</p>
        </div>
        <h5>${title}</h5>
      </li>
		</a>
  `
}
