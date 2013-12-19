function patch(){
  $('#DepApo').val('SFO');
  $('input[name=DepApoText]').trigger('onSelect');
}
var script = document.createElement('script');
script.appendChild(document.createTextNode('('+patch+')();'));
document.body.appendChild(script);
