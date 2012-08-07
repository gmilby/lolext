function replaceMessages() {
  if(!$('title').html().match(/Twitter.*/)) {
    $('.mainWrapper .messageBody').each(function() {
      $(this).html("Going to the dentist. LOL!");
    });
    $('.mainWrapper .uiStreamPassive').each(function() {
      var name = $(this).find('.passiveName').html();

      $(this).html(name + " is going to the dentist.");
    });
    return;
  }

  if($('.js-tweet-text').html()) {
    $('.js-tweet-text').each(function() {
      $(this).html("Going to the dentist. LOL!");
    });
  } else {
    setTimeout(replaceMessages, 200);
  }

}
$(function() {
  replaceMessages();
});
