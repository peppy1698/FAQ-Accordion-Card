const questionAnswer = document.querySelectorAll('.question');

questionAnswer.forEach((question) => question.addEventListener('click', () => {
    if (question.parentNode.classList.contains('active')) {
        question.parentNode.classList.toggle('active')
    } else {
        questionAnswer.forEach(question => question.parentNode.classList.remove('active'));
        question.parentNode.classList.add('active')
    }
}));