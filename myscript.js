function patch(){
  depApo1 = 'SFO';
}
var script = document.createElement('script');
script.appendChild(document.createTextNode('('+patch+')();'));
document.body.appendChild(script);
