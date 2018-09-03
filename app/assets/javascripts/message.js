$(function() {
  function buildHTML(message) {
    var insertImage = '';
    if ( message.image.url == null) {
      insertImage = '';
    } else {
      insertImage = `<img src="${message.image.url}">`;
    }
    var html =`
          <div class="message">
            <div class="upper-message">
              <p class="upper-message__user-name">${message.name}</p>
              <p class="upper-message__date">${message.date}</p>
            </div>
            <div class="lower-message">
              <p class="lower-message__content">${message.content}</p>
            </div>
          </div>
            <div class="message-image">${insertImage}</div>`
    return html;
  }
  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href
    $.ajax({
      url: href,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.form_message').val('')
      $("html,body").animate({
        scrollTop: $(document).height()
      },0);
    })
    .fail(function() {
      alert('ERROR');
    })
  })
});
