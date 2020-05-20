import accordFunction from './accordFunction';

const calculate = () => {
  const accordionGroup = document.getElementById('accordion'),
        accordHeading = accordionGroup.querySelectorAll('.panel-heading'),
        accordContent = accordionGroup.querySelectorAll('.panel-collapse'),
        checkbox = document.querySelectorAll('.onoffswitch-checkbox'),
        formControl = document.querySelectorAll('.form-control'),
        calcResult = document.getElementById('calc-result');
  
      
  // Аккордеон для калькулятора + нажатие на След шаг
  accordFunction (accordionGroup, accordHeading, accordContent);

  
  accordContent.forEach((block, index) => {
    const nextBtn = block.querySelector('.button');
    nextBtn.addEventListener('click', (event) => {
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

    let coef = 0;
    let total = 0;


  let arrType = [1, 2];
  let arrDiam = [1.4, 2];
  let arrCirc = [1, 2, 3];
  let arrFloor = [1, 2];
  let len = 0;
  let arrCoef = [[1.4, 2], [1, 1.2], [1, 1.2]];


  const func = (price = 10000) => {
    

    // Прячу блок для двухкамерного
    const secondType = document.querySelector('.second-type');
          secondType.classList.add('hidden-sec-type');

    // Начинаю с Блока 1 (один/два)
    if (accordContent[0].classList.contains('in')){
      price = 10000;
      if (checkbox[0].checked) {
        price = 10000;      
      } else {
        price = 15000;
        secondType.classList.toggle('hidden-sec-type'); 
      }
      return price;
    }
        
    // Рассчет второго блока
    if (accordContent[1].classList.contains('in')) {
      if (price < 15000) {
        if (formControl[0].options[1].selected) {
          coef = 0.2;
        }
  
        if (formControl[1].options[1].selected) {
          coef = 0.3;
        } else if (formControl[1].options[2].selected) {
          coef = 0.5;
        }
  
      } else {
        if (formControl[0].options[1].selected && formControl[2].options[1].selected) {
          coef = 0.4;
        } else if (formControl[0].options[1].selected || formControl[2].options[1].selected) {
          coef = 0.2;
        }
      }
    

      // Для селекторов с кольцами
      if ((formControl[1].options[1].selected && formControl[3].options[0].selected ) || 
          (formControl[1].options[0].selected && formControl[3].options[1].selected)) {
        coef = 0.3;
      } else if ((formControl[1].options[2].selected && formControl[3].options[0].selected) || 
                (formControl[1].options[0].selected && formControl[3].options[2].selected)) {
        coef = 0.5;
      } else if (formControl[1].options[1].selected && formControl[3].options[1].selected) {
        coef = 0.6;
      } else if ((formControl[1].options[1].selected && formControl[3].options[2].selected) ||
      (formControl[1].options[2].selected && formControl[3].options[1].selected)) {
        coef = 0.8;
      } else if ((formControl[1].options[2].selected && formControl[3].options[2].selected)) {
        coef = 1;
      }
      return price * (1 + coef);
    }
    
    
    // Для третьего блока
    const onoffswitchLabel = document.querySelectorAll('.onoffswitch-label');
    onoffswitchLabel[1].classList.add('no');

    if (accordContent[2].classList.contains('in')){
      if (price < 15000) {
        total = price * (1 + coef) + 1000;
      } else {
        total = price * (1 + coef) + 2000;
      }
      if (checkbox[1].checked){
        onoffswitchLabel[1].classList.toggle('no');
      }

      if (onoffswitchLabel[1].classList.contains('no')) {
        return price * (1 + coef);
      } else {
        return total;
      }  
    }

  };  
  
  accordionGroup.addEventListener('change', () => {
    calcResult.value = func();
  });

    


  
  

};

export default calculate;