function timeToGo(s) {
  var now = new Date;
  var utc_timestamp = new Date(Date.UTC(now.getFullYear(),now.getMonth(), now.getDate() ,
      now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds()));
  var diff = new Date(s.getTime() - utc_timestamp.getTime());


  out = '';
  out += (diff.getHours()) + " hours, ";
  out += diff.getMinutes() + " minutes, "
  out += diff.getSeconds() + " seconds"


  return out;
}

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