// var pageUrl = window.location.href

var iframe = document.getElementById('drums');
iframe = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
iframe.document.open();
iframe.document.write('<script src="//c.fqtag.com/tag/implement-r.js?org=TksRHGen5rmjsG48m9pC&p=bamfordsTestPage&a=testpage&cmp=drums&fmt=banner&dmn=http://any.dominayoulike.com/thiswont/doanything&rt=display&sl=1&fq=1"></script>');
iframe.document.close();

// This doesn't work - you can't do this to an iFrame
// var iframe = document.evaluate('//iframe[@data-aa="946803"]', document, null, XPathResult.ANY_TYPE, null).iterateNext();
// var tagScript = document.createElement('script');
// tagScript.src = "//c.fqtag.com/tag/implement-r.js?org=TksRHGen5rmjsG48m9pC&p=bamfordsTestPage&a=testpage&cmp=github&fmt=banner&dmn=http://any.dominayoulike.com/thiswont/doanything&rt=display&sl=1&fq=1";
// iframe.contentDocument.body.appendChild(tagScript)

// &rd="+pageUrl+"  - Add this back in after the crapola.
var footer = document.getElementById('footer');
