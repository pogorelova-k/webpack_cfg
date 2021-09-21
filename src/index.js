import './index.html';
import './css/style.css';
import './scss/style.scss';
import imageJpg from './img/js.jpg'


(() => {
    const btnClick = document.getElementById('click');
    const str = 'world!';
    btnClick.addEventListener('click', () => {
        btnClick.textContent = `Hello ${str}`;
    });

    const block = document.createElement('div');
    block.innerHTML = `
        <img src=${imageJpg} width="400">
    `;
    document.body.append(block)

})()