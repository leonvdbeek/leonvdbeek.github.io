$(document).ready(() => {
  $('.infobutton').on('click', () => {
    $('.info').slideToggle();

  })
  $('.addtocartbutton').on('click', () => {
    BootstrapDialog.show({
            message: 'Hi Apple!'
        });

  })


});
