{/* <script> */}
    function goToPage(select) {
        var value = select.value;
        if (value) {
            window.location.href = value;
        }
    }
{/* </script>

<script> */}
    const termsCheckbox = document.getElementById('terms');
    const submitBtn = document.getElementById('submitBtn');

    termsCheckbox.addEventListener('change', function() {
        submitBtn.disabled = !this.checked;
    });

    function redirectToSubmitPage() {
        window.location.href = '/submit/submit.html';
    }
{/* </script>

<script> */}
function goToPage(select) {
    var value = select.value;
    if (value) {
        window.location.href = value;
    }
}
{/* </script> */}