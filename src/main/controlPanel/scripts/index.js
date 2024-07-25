const ChangeTheme = () => {
    document.getElementById('themeControler').classList.toggle('light');
    document.getElementById('theme').innerText = document.getElementById('theme').innerText === 'Light' ? 'Dark' : 'Light';
}