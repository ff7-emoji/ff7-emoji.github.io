pages = [];
page = 0;

function open(p) {
	page = p;
	main.innerHTML = twemoji.parse(pages[p].trim());	
	pagenumber.innerHTML = p+'/'+pages.length;
}

function next() {
	if(page < pages.length-1)
		open(page+1);
}

function back() {
	if(page > 0)
		open(page-1);
}

function end() {
	open(pages.length-1);
}

function begin() {
	open(0);
}

function run() {
	pages = data.split(".");
	btn_begin.onclick = begin;
	btn_back.onclick = back;	
	btn_next.onclick = next;
	btn_end.onclick = end;
	open(0);
}