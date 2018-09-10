const titles = document.querySelectorAll('.title');
function toggleContent(){
	titles.forEach(title => title.parentNode.classList.remove('active'));
	this.parentNode.classList.add('active');
}
titles.forEach(title =>title.addEventListener('click', toggleContent));

const articles = document.querySelectorAll('.content-about');
function scrollArticle(){
	for(let i = 0; i < articles.length; i++ ) {
		let style = window.getComputedStyle(articles[i]);
		let top = style.getPropertyValue('top');
		articles[i].style.top = `calc(${top} + 100%`;
	}
}
articles.forEach(article =>article.addEventListener('swipeDown', scrollArticle));
//const button = document.querySelector('button');
//button.addEventListener('click', scrollArticle);
