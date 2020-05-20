import accordFunction from './accordFunction';
import togglePopUp from '../modules/togglePopUp';

const calculate = () => {
  const accordionGroup = document.getElementById('accordion'),
        accordHeading = accordionGroup.querySelectorAll('.panel-heading'),
        accordContent = accordionGroup.querySelectorAll('.panel-collapse'),
        checkbox = document.querySelectorAll('.onoffswitch-checkbox'),
        formControl = document.querySelectorAll('.form-control'),
        calcResult = document.getElementById('calc-result'),
        inputAccord = accordContent[3].querySelector('input'),
        button = accordContent[3].querySelectorAll('.button'),
        popupDiscount = document.querySelector('.popup-discount');
  
        const userName = document.getElementById('name_11');
        const userPhone = document.getElementById('phone_11');    
  
  accordFunction (accordionGroup, accordHeading, accordContent);
  togglePopUp(button, popupDiscount);

  // Переключение по кнопке Next
  accordContent.forEach((block, index) => {
    
    const nextBtn = block.querySelector('.button');
    nextBtn.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;
      target = target.closest('.button');
    
      if (target) {
        if (index < accordContent.length - 1){
          accordContent[index].classList.remove('in');
          accordContent[index + 1].classList.add('in');
        } 
      }
    });
  });

  // Валидация на Input в четвертом блоке
  inputAccord.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/\D/g, '');
  });
  

  const func = () => {
    
    let finalprice=10000,
        price=10000,
        dcoef=1,
        kcoef=1,
        bsum=0;
        
    const secondType = document.querySelector('.second-type');
    
      if (checkbox[0].checked) {
        price = 10000;  
            
            if (formControl[0].options[1].selected) {dcoef = 1.2;}
            if (formControl[1].options[1].selected) {kcoef = 1.3;}
            if (formControl[1].options[2].selected) {kcoef = 1.5;}  
          secondType.classList.add('hidden-sec-type');    

      } else {
        price = 15000;
        if (formControl[0].options[1].selected)  {dcoef = 1.2;}
        if (formControl[2].options[1].selected)  {dcoef += 0.2;}
        if (formControl[1].options[1].selected)  {kcoef = 1.3;}
        if (formControl[1].options[2].selected)  {kcoef = 1.5;}    
        if (formControl[3].options[1].selected)  {kcoef += 0.3;}
        if (formControl[3].options[2].selected)  {kcoef += 0.5;}  
        secondType.classList.remove('hidden-sec-type'); 
      }

      if (checkbox[1].checked){
        secondType.classList.add('hidden-sec-type');   
        if (checkbox[0].checked) {bsum=1000;} else {bsum=2000;}
      }
      
      finalprice=price*dcoef*kcoef+bsum; 
      return finalprice;
  };  

  
  let data = new FormData();
    data = {};

  accordionGroup.addEventListener('change', () => {
    calcResult.value = func();
    
    if (checkbox[0].checked) {
      data.typeSept = '1';
      data.diam1 = '1.4';
      data.countRing = '1';
      if (formControl[0].options[1].selected) {data.diam1 = '2';}
      if (formControl[1].options[1].selected) {data.countRing = '2';}
      if (formControl[1].options[2].selected) {data.countRing = '3';}
    } else {
      data.typeSept = '2';
      data.diam1 = '1.4';
      data.diam2 = '1.4';
      data.countRing1 = '1';
      data.countRing2 = '1';
      if (formControl[0].options[1].selected)  {data.diam1 = '2';}
      if (formControl[2].options[1].selected)  {data.diam2 = '2';}
      if (formControl[1].options[1].selected)  {data.countRing1 = '2';}
      if (formControl[1].options[2].selected)  {data.countRing1 = '3';}    
      if (formControl[3].options[1].selected)  {data.countRing2 = '2';}
      if (formControl[3].options[2].selected)  {data.countRing2 = '3';} 
    }
    if (checkbox[1].checked) {data.bottom = 'yes';} else {data.bottom = 'no';}
    
    data.distance = `${inputAccord.value}`;
    data.calcResult = `${calcResult.value}`;
    
  });
  
  checkbox[1].checked=false;
  calcResult.value =func();

  
  const formDiscont = document.querySelector('.discount');

  const errorMessage = 'Что-то пошло не так',
        successMessage = 'Ваша заявка отправлена! Мы скоро с Вами свяжемся!',
        spinner = document.querySelector('.loadingio-spinner-spinner-ivatvn3eux');
  
    spinner.style.display = 'none';

  
  formDiscont.noValidate = true;
  
  const inputs = formDiscont.querySelectorAll('input');
  inputs.forEach((item) => {
  
    if (item.placeholder === 'Ваше имя') {
      item.addEventListener('keypress', (e) => {
        if(!/[А-Яа-яЁё\s]/.test(e.key)) {
          e.preventDefault();
        }
      });
    }

  });

  formDiscont.addEventListener('click', (event) => {
    
    let target = event.target;

    if (target.classList.contains('popup-close')){
      event.preventDefault();
      formDiscont.noValidate =true;
    } else {
      formDiscont.noValidate = false;
    }

  });
  
  formDiscont.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 1.5rem; color: blue;';
    
    formDiscont.appendChild(statusMessage);
    statusMessage.appendChild(spinner);

    spinner.style.display = 'block';
    spinner.style.margin = 'auto';

    data.userName = `${userName.value}`;
    data.userPhone = `${userPhone.value}`;
    
    
    
    postData(data)
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
    
    clearInputs(formDiscont);
  });

  const postData = (data) => {
    
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });      
  
  };

  const clearInputs = (elem) => {
    let inputs = elem.querySelectorAll('input');
    inputs.forEach((i) => {
      i.value = '';
    });
  };
  
  

};

export default calculate;