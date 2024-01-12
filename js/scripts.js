const INPUT_ID_LIST = [
    'name',
    'role',
    'availability',
    'age',
    'location',
    'yoe',
    'userEmail'
];

const myForm = document.querySelector('form');
myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (myForm.checkValidity()) {
        INPUT_ID_LIST.forEach((id) => {
            const formValue = document.getElementById(`form-${id}`).value;
            if (formValue.length > 0) {
                document.getElementById(`profile-${id}`).innerHTML = formValue;
            };
        });
        myForm.classList.add('was-validated');
        myDivContainForm.classList.add('d-none');
    } else {
        myForm.classList.add('was-validated');
    };
}, false);

const myDivContainForm = myForm.parentElement;

const myEditBtn = document.getElementById('edit');
myEditBtn.addEventListener('click', (event) => {
    if (myDivContainForm.classList.contains('d-none')) {
        myDivContainForm.classList.remove('d-none');
    };
    
    if (myForm.classList.contains('was-validated')) {
        myForm.classList.remove('was-validated');

        INPUT_ID_LIST.forEach((id) => {
            document.getElementById(`form-${id}`).value = '';
        });
    };
});

const myResumeBtn = document.getElementById('resume');
myResumeBtn.addEventListener('click', (event) => {
    if (myDivContainForm.classList.contains('d-none')) {
        myDivContainForm.classList.remove('d-none');
    } else {
        myDivContainForm.classList.add('d-none');
    };
});