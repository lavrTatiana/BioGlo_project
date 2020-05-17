import accordFunction from './accordFunction';

const calculate = () => {
  const accordionGroup = document.getElementById('accordion'),
        accordHeading = accordionGroup.querySelectorAll('.panel-heading'),
        accordContent = accordionGroup.querySelectorAll('.panel-collapse');
  
    accordFunction (accordionGroup, accordHeading, accordContent);
  
};

export default calculate;