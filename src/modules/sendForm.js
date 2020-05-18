const sendForm = () => {

  const forms = document.querySelectorAll('form');

  const errorMessage = 'Что-то пошло не так',
        successMessage = 'Ваша заявка отправлена! Мы скоро с Вами свяжемся!';
        
  forms.forEach((form) => {

    form.noValidate = true;
    
    const inputs = form.querySelectorAll('input');
    inputs.forEach((item) => {
      
      if (item.className === 'phone-user') {
        item.addEventListener('keypress', e => {
          if(!/[\+\d]/.test(e.key)) {
            e.preventDefault();
          }
        });
      }
      if (item.placeholder === 'Ваше имя') {
        item.addEventListener('keypress', (e) => {
          if(!/[А-Яа-яЁё\s]/.test(e.key)) {
            e.preventDefault();
          }
        });
      }

    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const statusMessage = document.createElement('div');
      statusMessage.style.cssText = 'font-size: 1.5rem; color: black;';
      
      const spinner = document.querySelector('.loadingio-spinner-spinner-ivatvn3eux');

      form.appendChild(statusMessage);
      statusMessage.appendChild(spinner);

      const formData = new FormData(form);
      console.log(formData);
      
      let body = {};      
      formData.forEach((val, key) => {
        body[key] = val;
      });

      
      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('Status network is not 200');
          }
          statusMessage.removeChild(spinner);
          statusMessage.textContent = successMessage;
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        })
        .catch((error) => {
          statusMessage.removeChild(spinner);
          statusMessage.textContent = errorMessage;
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
          console.error(error);
        });
      
      clearInputs(form);
    });
  });
  

  const postData = (body) => {
    
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });      
  
  };

  const clearInputs = (elem) => {
    let inputs = elem.querySelectorAll('input');
    inputs.forEach((i) => {
      i.value = '';
    });
  };



};

export default sendForm;