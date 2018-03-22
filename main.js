var iframe = document.getElementById('frameID'),
    iframeWin = iframe.contentWindow || iframe,
    iframeDoc = iframe.contentDocument || iframeWin.document;

$(iframeDoc).ready(function (event) {
    iframeDoc.open();
    iframeDoc.write('<script src="//c.fqtag.com/tag/implement-r.js?org=TksRHGen5rmjsG48m9pC&s=a&p=TEST&a=TEST&cmp=TEST&fmt=banner&app=com.TEST.TEST&rt=display&sl=1&fq=1"></script>');
    iframeDoc.close();
});
