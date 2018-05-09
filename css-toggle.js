document.getElementById("input-animation").checked = document.getElementById("style-animation").disabled ? null : 'disabled';
document.getElementById("input-transition").checked = document.getElementById("style-transition").disabled ? null : 'disabled';

document.getElementById("input-animation").addEventListener('change', function(e) {
    document.getElementById("style-animation").disabled = e.target.checked ? null : 'disabled';
});

document.getElementById("input-transition").addEventListener('change', function(e) {
    document.getElementById("style-transition").disabled = e.target.checked ? null : 'disabled';
});
