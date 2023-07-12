// javascript: (() => {

var node = document.createElement('div');
node.setAttribute("style","z-index:200;position:absolute;background-color:white;visibility:0.5;width:200px;height:200px;opacity:0.9;");
node.setAttribute("id","pngView");
node.setAttribute("count",0);
node.setAttribute("onload","initPngView()");

var script = document.createElement("script");
script.innerHTML = '\   
var selEls = []; \  
var formats = [".jpg",".jpeg",".png",".gif"]; \  
function next() { \ 
    if(selEls.length==0) initPngView(); \ 
	var n=parseInt(document.getElementById("pngView").getAttribute("count"))+1; \ 
	if(n>=selEls.length) n=0; \ 
	document.getElementById("pngView").setAttribute("count",n);	 update(); \ 
} \ 
function prev() { \ 
	if(selEls.length==0) initPngView(); \ 
	var n=parseInt(document.getElementById("pngView").getAttribute("count"))-1; \ 
	if(n<0) n=selEls.length-1; \ 
	document.getElementById("pngView").setAttribute("count",n);	update(); \ 
}\ 
function update() {\ 
	var n=parseInt(document.getElementById("pngView").getAttribute("count"));\ 
	document.getElementById("pngViewImg").src = selEls[n].href.replaceAll("view","files");\ 
	document.getElementById("pngFile").innerHTML = selEls[n].href;\ 
} \ 
function initPngView() { \ 
	var els = document.getElementsByClassName("item_link"); \ 
	for(var nel=0; nel<els.length; nel++) { var add=0; if(!(els[nel].href.search("view")>0)) continue; if(isImage(els[nel].href)==0) continue; \ 
	selEls.push(els[nel]); \ 
	next(); \ 
	} \ 
}\ 
function close() { \ 
   document.body.removeChild(document.getElementById("pngView"));
} \ 
function isImage(url) { \ 
	for(var nfmt=0; nfmt<formats.length; nfmt++) if(url.search(formats[nfmt])>0) return 1; \ 
	return 0; \ 
}';
document.head.appendChild(script);
node.innerHTML = '<button onclick="prev()">Prev</button><button onclick="next()">Next</button><div id="pngFile"></div><img id="pngViewImg" src="">';
document.body.insertBefore(node, document.body.childNodes[0]);

//})();
