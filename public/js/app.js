$(document).ready(function () {

  // data validation for form to ensure that user selects at least one category
  $('#submit-button').click(function() {
    const checked = $('input[type=checkbox]:checked').length;

    if(!checked) {
      alert('Please check at least one checkbox.');
      return false;
    }
  });

  // dynamically generate number of results
  let n = $('li').length;
  $('#count').text(n + ' results');

  // hamburger menu management
  $('header i').on('click', function(){
    $('.menu').toggleClass('hidden');
    $('#mobile-nav').toggleClass('hidden');
  });

  // show and hide descriptions on results page
  $('.desc-button').on('click', function(){
    $(this).toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
    $(this).next('p').toggleClass('hidden');
  });

  // copy contact email address on button click
  const emailLink = document.querySelector('#emaillink');

  $('#emailcopy').on('click', function() {
    const range = document.createRange();
    range.selectNode(emailLink);
    window.getSelection().addRange(range);
    try{
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copy email command was ' + msg);
    } catch(err) {
      console.log('Oops, unable to copy');
    }
    window.getSelection().removeAllRanges();
  });
});



