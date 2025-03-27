const logo = document.getElementsByClassName('logo')[0];

logo.addEventListener('click', function () {
  const promise1 = new Promise((resolve, reject) => {
    resolve();
  });

  promise1.then(successHandler).catch(errorHandler);
});

setTimeout(() => {
  const promise2 = new Promise((resolve, reject) => {
    reject();
  });

  promise2.then(successHandler).catch(errorHandler);
}, 3000);

function successHandler() {
  const divEl = document.createElement('div');

  divEl.className = 'message';
  divEl.innerText = 'Promise was resolved!';
  document.querySelector('body').append(divEl);
}

function errorHandler() {
  const divEl = document.createElement('div');

  divEl.className = 'message error-message';
  divEl.innerText = 'Promise was rejected!';
  document.querySelector('body').append(divEl);
}
