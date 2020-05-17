import accordFunction from './accordFunction';

const questionsAccord = () => {
  const questionGroup = document.getElementById('accordion-two'),
        questionHeading = questionGroup.querySelectorAll('.panel-heading'),
        questionContent = questionGroup.querySelectorAll('.panel-collapse');

  accordFunction (questionGroup, questionHeading, questionContent);

};


export default questionsAccord;