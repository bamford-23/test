var pageUrl = window.location.href

var iframe = document.getElementById('frameID');
iframe = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
iframe.document.open();
iframe.document.write('<script src="//c.fqtag.com/tag/implement-r.js?org=TksRHGen5rmjsG48m9pC&p=bamfordsTestPage&a=testpage&cmp=github&fmt=banner&rd='+pageUrl+'&rt=display&sl=1&fq=1"></script>');
iframe.document.close();
