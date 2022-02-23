$(document).ready(function(){
  var $app = $('#app');

  var $centerbox = $('<div class="centerBox"></div>');
  var $topBox = $('<div class="topBox"></div>');
  var $bottomBox = $('<div class="bottomBox"></div>')

  var dropsTime = new Date('2022-02-23T15:00:00+0000');

  $topBox.appendTo($centerbox);
  $bottomBox.appendTo($centerbox);

  $topBox.text('Hunt Drops in:')
  $bottomBox.text(timeToGo(dropsTime));

  $centerbox.appendTo($app);

  setInterval(()=>{
    $bottomBox.text(timeToGo(dropsTime));
  }, 1000);

});