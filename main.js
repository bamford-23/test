// var pageUrl = window.location.href

var iframe = document.evaluate('//iframe[@data-aa="946803"]', document, null, XPathResult.ANY_TYPE, null).iterateNext();
iframe = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
iframe.document.open();
iframe.document.write('<script src="//c.fqtag.com/tag/implement-r.js?org=TksRHGen5rmjsG48m9pC&p=bamfordsTestPage&a=testpage&cmp=github&fmt=banner&dmn=http://any.dominayoulike.com/thiswont/doanything&rt=display&sl=1&fq=1"></script>');
iframe.document.close();

// &rd="+pageUrl+"  - Add this back in after the crapola.
