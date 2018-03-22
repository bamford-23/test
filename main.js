var iframe = document.getElementById('frameID');
iframe = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
iframe.document.open();
iframe.document.write('<script src="//c.fqtag.com/tag/implement-r.js?org=TksRHGen5rmjsG48m9pC&s=a&p=TEST&a=TEST&cmp=TEST&fmt=banner&app=com.TEST.TEST&rt=display&sl=1&fq=1"></script>');
iframe.document.close();
