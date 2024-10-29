let project = document.getElementsByClassName("project");
let slideIndex = 1;

showProject(slideIndex);

function showProject(num) {
  
  if (num > project.length) {
    slideIndex = 1;
  }
  
  if (num < 1) {
    slideIndex = project.length;
  }

  for (let i = 0; i < project.length; i++) {
    project[i].style.display = "none";
  }
  project[slideIndex - 1].style.display = "flex";
}

function navigateProject(num) {
  showProject((slideIndex += num));
}

document.getElementById('emailButton').addEventListener('click', function() {
  const emailDisplay = document.getElementById('emailDisplay');
  if (emailDisplay.style.display === 'none') {
      emailDisplay.style.display = 'block'; // Show email
  } else {
      emailDisplay.style.display = 'none'; // Hide email
  }
});

$(document).ready(function() {
  // Show the modal when any of the buttons are clicked
  $(document).ready(function() {
    // Show the appropriate modal when any button is clicked
    $('[id^="showImageBtn"], [id^="demoBtnPro-"]').click(function() {
        // Hide all modals first
        $('[id^="imageModal"]').css('display', 'none');
        
        // Get the number suffix from the button's ID (e.g., "01", "02", etc.)
        let idSuffix = $(this).attr('id').split('-')[1] || ''; // Extract the number suffix

        // Show the corresponding modal
        if (idSuffix === '') {
            $('#imageModal').css('display', 'flex'); // Default modal
        } else {
            $(`#imageModal-pro-${idSuffix}`).css('display', 'flex'); // Specific modal
        }
    });

    // Close the modals when the close button is clicked
    $('[id^="closeImageBtn"]').click(function() {
        // Hide all modals when closing
        $('[id^="imageModal"]').css('display', 'none'); // Hide all modals
        $('#modalImage').removeClass('zoomed'); // Remove zoom class on close
    });
  });

  // Optional: close modal when clicking outside of the image
  $(window).click(function(event) {
      if ($(event.target).is('#imageModal, #imageModal-pro-01')) {
          $('#imageModal, #imageModal-pro-01').css('display', 'none'); // Hide both modals
          $('#modalImage').removeClass('zoomed'); // Remove zoom class on close
      }
  });

  // Zoom in and out on the modal image click (for both desktop and touch)
  $('#modalImage').on('click touchstart', function(e) {
      e.stopPropagation(); // Prevent closing modal on image click
      
      // Get the mouse/touch position relative to the image
      const offset = $(this).offset();
      const x = e.pageX - offset.left; // X coordinate
      const y = e.pageY - offset.top; // Y coordinate

      // Set the transform origin to the clicked position
      $(this).css('transform-origin', `${x}px ${y}px`);

      // Toggle zoom class
      $(this).toggleClass('zoomed');
  });

  $(document).ready(function() {
    $('#openSiteBtn').click(function() {
        // Specify the URL of the site you want to open
        const siteUrl = 'https://anas524.github.io/Tracking-Maps/'; // Replace with your desired URL
        // Open the site in a new tab
        window.open(siteUrl, '_blank'); // '_blank' specifies that it should open in a new tab
    });

    $('#openSiteBtn-02').click(function() {
        const siteUrl = 'https://anas524.github.io/LatLong-Project/';
        window.open(siteUrl, '_blank');
    });

    $('#openSiteBtn-04').click(function() {
        const siteUrl = 'https://anas524.github.io/MapApp-Login_Register/';
        window.open(siteUrl, '_blank');
    });
  });

});

