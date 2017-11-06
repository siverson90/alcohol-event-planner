// Wait to attach handlers until DOM loaded
$(function() {

  $('.alcohol-selection-wrapper').on('click', function(event) {
    $(this).toggleClass('selected');
    var text = $(this).attr('title') == 'Select this' ? 'Unselect this' : 'Select this';
    $(this).attr('title', text);
    console.log($(this).data('alcoholid'));
  });

  $('#submit-selections').on('click', function(event) {

      console.log('#submit-selections clicked');

    var userSelections = [];
    $('.selected').each(function() {
      userSelections.push(parseInt($(this).data('alcoholid')));
    });

      console.log('userSelections: ', userSelections);

    $.ajax('/api/user/:id/occasion/', {
      type: 'POST',
      data: userSelections
    }).then(
      function() {
        // Reload page for updated list
        // location.reload();
      }
    );
  });


  // two functions below may prove useful in this alcohol app
  // $('.change-devoured').on('click', function(event) {
  //   var id = $(this).data('id');

  //   var newDevourState = {
  //     devoured: true
  //   };

  //   // Send PUT request
  //   $.ajax('/api/burgers/' + id, {
  //     type: 'PUT',
  //     data: newDevourState
  //   }).then(
  //     function() {
  //       // Reload page for updated list
  //       location.reload();
  //     }
  //   );
  // });

  // $('#alchlists').on('submit', function(event) {
  //   event.preventDefault();

  //   var newList = {
  //     name: $('').val().trim(),
  //   };

  //   // Send POST request.
  //   $.ajax('/api/burgers', {
  //     type: 'POST',
  //     data: newList
  //   }).then(
  //     function() {
  //       // Reload page for updated list
  //       location.reload();
  //     }
  //   );
  // });

});
