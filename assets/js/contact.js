// send ajax request to server on submit
$(document).ready(function () {
  $('#contact-form').on('submit', function (e) {
    e.preventDefault();
    var form = $(this);
    var url = form.attr('action');
    var data = form.serialize();
    $.ajax({
      type: 'POST',
      url: url,
      data: data,
      success: function (resp) {
        $('#contact-form').html(
          `
          <div class="form-success">
            ${resp.message}
          </div>
          `
        )
      },
      error: function (resp) {
        let resp_data = JSON.parse(resp.responseText);
        console.log(resp_data);
        console.log('honey - ', resp_data.honeypot);
        if (resp_data.honeypot) {
          $('#pot').text(resp_data.honeypot[0]);
          $('#pot').css('display', 'block');
        }
      }
    });
  });
});