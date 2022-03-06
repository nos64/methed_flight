import start from './modules/start.js'
import getFormPerson from './modules/formPerson.js';
import readyPlane from './modules/readyPlane.js';

const init = (selectorApp, title) => {
  const app = document.querySelector(selectorApp);

  const {main, firstForm} = start(app, title);
  
  firstForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const forms = getFormPerson(firstForm.count.value);

    firstForm.remove();

    main.append(...forms);

    readyPlane(forms, main);
  })

};

init('.app', 'Выберете тур');

