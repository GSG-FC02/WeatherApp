window.onload = function () {
    let errorName = document.querySelector('.errorName')
    let errorEmail = document.querySelector('.errorEmail')
    let errorMag = document.querySelector('.errorMag')
    let mainForm = document.mainForm;
    let name = document.mainForm.name;
    let email = document.mainForm.email;
    let massage = document.mainForm.massage;

    function validateForm(e) {
        e.preventDefault();
        if (name.value.trim() === '') {
            name.style.border = '1px solid red';
            errorName.textContent = 'Name is required';
            return false;
        } else {
            name.style.backgroundColor = '#ccc';
            name.style.border = '#ccc'
        }

        if (email.value.trim() === '') {
            email.style.border = '1px solid red';
            errorEmail.textContent = 'Email is required';
            return false;
        } else {
            email.style.backgroundColor = '#ccc';
            email.style.border = '#ccc';

        }

        if (massage.value.length === 0) {
            massage.style.border = '1px solid red';
            errorMag.textContent = 'Please write your massage';
            return false;
        } else {
            massage.style.backgroundColor = '1px solid #ccc';
            massage.style.border = '#ccc';
        }

        mainForm.innerHTML = '<p  class="sendSuccess"> <i class="fas fa-check-circle"></i> Your message send successfully</p>';
       
    }

    mainForm.addEventListener('submit', validateForm);
}
