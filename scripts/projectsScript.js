const emailButton = document.getElementById('sudokuSolver');

emailButton.addEventListener('click', function(event) {
    event.preventDefault();

    window.location.href = 'sudoku.html';
});

const phoneButton = document.getElementById('averageTimeCalculator');

phoneButton.addEventListener('click', function(event) {
    event.preventDefault();

    window.location.href = 'timecalc.html';
});