const btn = document.querySelector('[data-toggle]');
const targetId = btn.getAttribute('aria-controls');
const target = document.querySelector(`#${targetId}`);

btn.addEventListener('click', toggleCollapse);

function toggleCollapse(e) {
    (this.getAttribute('aria-expanded') === 'true')
        ? this.setAttribute('aria-expanded', 'false')
        : this.setAttribute('aria-expanded', 'true')

    btn.classList.toggle('active');
    document.body.classList.toggle('menu');

    target.classList.toggle('show');
}
