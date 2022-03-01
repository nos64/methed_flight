import start from './modules/start.js'
import getFormPerson from './modules/formPerson.js';

const init = (selectorApp, title) => {
  const app = document.querySelector(selectorApp);

  const {main, firstForm} = start(app, title);
  
  firstForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const forms = getFormPerson(firstForm.count.value);

    firstForm.remove();

    main.append(...forms)
  })

};

init('.app', 'Выберете тур');

