//<!--FACEBOOK SIGN IN -->
  window.fbAsyncInit = function() {
  FB.init({
    appId      : '178685282868328',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.2' // use version 2.2
  });
  };
  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function sendTokenToServer() {
    $('#signinButton').attr('style', 'display: none');
    $('.facebook-login').attr('style', 'display: none');
    var access_token = FB.getAuthResponse()['accessToken'];
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      $.ajax({
        type: 'POST',
        url: '/fbconnect?state=' + state,
        processData: false,
        data: access_token,
        contentType: 'application/octet-stream; charset=utf-8',
        success: function(result) {
          // Handle or verify the server response if necessary.
          if (result) {
            $('.modal-title').text("Login Successful");
            $('#result').html(result + '</br>Redirecting...')
            setTimeout(function() {
              window.location.href = "/" + page;
            }, 5000);
          } else {
            $('#result').html('Failed to make a server-side call. Check your configuration and console.');
          }
        }

      });
    });
  }
//<!--END FACEBOOK SIGN IN -->
