// Select all buttons with the class 'myButton'
const buttons = document.querySelectorAll('.myButton');

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        Swal.fire({
          title: 'Therapist selection!',
          text: 'Once you have selected a doctor as your primary wellness advisor, you will not be able to change this selection on your own.',
          icon: null, // No icon will be displayed
          showCancelButton: true,
          cancelButtonText: 'Cancel',
          confirmButtonText: 'Confirm',
          customClass: {
        confirmButton: 'custom-confirm',
        cancelButton: 'custom-cancel'}
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Confirmed', 'You have confirmed your selection.', 'success');
          } else if (result.isDismissed) {
            Swal.fire('Cancelled', 'Your selection was not confirmed.', 'error');
          }
        });
    });
});
$('#recipeCarousel').carousel({
  interval: 10000
})
$('#recipeCarousel').carousel({
  interval: 10000
})

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});
