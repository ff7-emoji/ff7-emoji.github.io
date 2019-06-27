pages = [];
page = 0;

function load(p) {
	var url = window.location.href.split('?')[0];
	window.history.pushState({page:p}, "space-girl-flowers-bike.city "+p, url+"?"+p);
	open(p);
}

function open(p) {
	page = p;
	main.innerHTML = twemoji.parse(pages[p-1].trim());	
	pagenumber.innerHTML = p+'/'+(pages.length-1);
}

function next() {
	if(page < pages.length)
		load(page+1);
}

function back() {
	if(page > 1)
		load(page-1);
}

function end() {
	load(pages.length-1);
}

function begin() {
	load(1);
}

function run() {
	pages = data.split(".");
	btn_begin.onclick = begin;
	btn_back.onclick = back;	
	btn_next.onclick = next;
	btn_end.onclick = end;

	var p = parseInt(location.search.substr(1));
	if(isNaN(p))
		p = 1;

	open(p);
}