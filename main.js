// var pageUrl = window.location.href

// var iframe = document.getElementById('drums');
// iframe = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
// iframe.document.open();
// iframe.document.write('<script src="//c.fqtag.com/tag/implement-r.js?org=TksRHGen5rmjsG48m9pC&p=bamfordsTestPage&a=testpage&cmp=drums&fmt=banner&dmn=http://any.dominayoulike.com/thiswont/doanything&rt=display&sl=1&fq=1"></script>');
// iframe.document.close();

// This doesn't work - you can't add content to an iFrame without writing over the content: var iframe = document.evaluate('//iframe[@data-aa="946803"]', document, null, XPathResult.ANY_TYPE, null).iterateNe

function addscript(){
  var footer = document.getElementById('footer');
  var tagScript = document.createElement('script');
  tagScript.src = "//c.fqtag.com/tag/implement-r.js?org=TksRHGen5rmjsG48m9pC&p=bamfordsTestPage&a=testpage&cmp=adframe2&fmt=banner&dmn=http://any.dominayoulike.com/thiswont/doanything&rt=display&sl=1&fq=1&ad=adframe2";
  footer.appendChild(tagScript);
}
setTimeout(addscript,200);


// Sale tag functions

  // subTotal
function sale_sToD() {
  dataLayer.push({'event':'saleButtonPushed','saleType':"sToD"})
};
function sale_sTiTD() {
  dataLayer.push({'event':'saleButtonPushed','saleType':"sTiTD"})
};
function sale_sTiD() {
  dataLayer.push({'event':'saleButtonPushed','saleType':"sTiD"})
};
function sale_sTnD() {
  dataLayer.push({'event':'saleButtonPushed','saleType':"sTnD"})
};


  // price
function sale_poD() {
  dataLayer.push({'event':'saleButtonPushed','saleType':"poD"})
};
function sale_piTD() {
  dataLayer.push({'event':'saleButtonPushed','saleType':"piTD"})
};
function sale_piD() {
  dataLayer.push({'event':'saleButtonPushed','saleType':"piD"})
};
function sale_pnD() {
  dataLayer.push({'event':'saleButtonPushed','saleType':"pnD"})
};
function magicTestButton() {
  dataLayer.push({'event':'saleButtonPushed','saleType':"magicTest"})
};
function utm1(){
  window.location = "/test/sale_convert?utm_source=CHANNEL_1"
};
function utm2(){
  window.location = "/test/sale_convert?utm_source=CHANNEL_2"
};
function utm3(){
  window.location = "/test/sale_convert?utm_source=CHANNEL_3"
};
function utm4(){
  window.location = "/test/sale_convert?utm_source=CHANNEL_4"
};
function iframeConv(){
  dataLayer.push({'event':'saleButtonPushed','saleType':"iFrame"})
};






// &rd="+pageUrl+"  - Add this back in the URL after testing.
