document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        alert(result.message);
        this.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});

$(document).ready(function() {
    $('.counter').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).data('count')
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('multi-step-form');
    const steps = form.getElementsByClassName('form-step');
    let currentStep = 0;

    function showStep(stepIndex) {
        for (let i = 0; i < steps.length; i++) {
            steps[i].classList.remove('active');
        }
        steps[stepIndex].classList.add('active');
    }

    function nextStep() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    }

    function prevStep() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    }

    showStep(currentStep);

    const nextButtons = form.getElementsByClassName('next-step');
    const prevButtons = form.getElementsByClassName('prev-step');

    for (let button of nextButtons) {
        button.addEventListener('click', nextStep);
    }

    for (let button of prevButtons) {
        button.addEventListener('click', prevStep);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to your server
        alert('Form submitted successfully!');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});