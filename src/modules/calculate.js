import accordFunction from './accordFunction';

const calculate = () => {
  const accordionGroup = document.getElementById('accordion'),
        accordHeading = accordionGroup.querySelectorAll('.panel-heading'),
        accordContent = accordionGroup.querySelectorAll('.panel-collapse');
  
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
};

export default calculate;