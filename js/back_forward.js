const prev = document.getElementById('previous-btn');
const next = document.getElementById('forward-btn');

if(window.history.back()) {
    prev.className = 'active-btn';
}
else {
    prev.className = 'non-active';
}

if(window.history.forward()) {
    next.className = 'active-btn';
}
else {
    next.className = 'non-active';
}

prev.addEventListener('click', () => {
    if(window.history.back()){
        window.history.back();
    }
});

next.addEventListener('click', () => {
    if(window.history.forward()) {
        window.history.forward();
    }
})