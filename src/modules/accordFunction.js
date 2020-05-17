const accordFunction = (block, headers, content) => {
  
  const toggleAccordContent = (index) => {
    for (let i = 0; i < content.length; i++) {
      if (index === i) {
        content[i].classList.add('in');
      } else {
        content[i].classList.remove('in');
      }
    }
  };
  
  
  block.addEventListener('click', (event) => {
    headers.forEach((elem) => {
      elem.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
        });
      });
    });
    
    let target = event.target;
    target = target.closest('.panel-heading');
    
    if (target) {
      headers.forEach((item, i) => {
        if (item === target) {
          toggleAccordContent(i);
        }
      });
    }
  });

};

export default accordFunction;