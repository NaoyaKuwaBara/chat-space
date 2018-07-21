$(function() {
  $('.form__message').on('submit', function(e) {
    e.preventDefault();
    message = $('.form__message').val();
    console.log(message);
  });
});

//   function buildHTML(message){
//     var html =
//              `<div class="message">
//                 <div class="upper-message">
//                   <div class="upper-message__user-name">
//                     <%= message.user.name %>
//                   </div>
//                   <div class="upper-message__date">
//                     <%= l message.created_at, format: :long %>
//                   </div>
//                 </div>
//                 <div class="lower-message">
//                   <% if message.content.present? %>
//                     <p class="lower-message__content" ></p>
//                       <%= message.content %>
//                   <% end %>
//                   <%= image_tag message.image.url, class: "lower-message__image" if message.image.present? %>
//                 </div>
//               </div>`
//     return html;
//   }
//   $("#group_messages").on("submit", function(e){
//     e.preventDefault();
//     var formData = new FormData(this);
//     var href = window.location.href + '/messages'
//     $.ajax({
//       url: href,
//       type: "POST",
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//     .done(function(data){
//       var html = buildHTML(data);
//       $('.messages').append(html)
//       $('.form__message').val('')
//     })
//     .fail(function(){
//       alert('error');
//     });
//   });
// });

