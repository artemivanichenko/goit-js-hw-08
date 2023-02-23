import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const TIME_THROTTLE = 500;
const getFeedbackForm = localStorage.getItem(LOCALSTORAGE_KEY);
const parseFeedbackForm = JSON.parse(getFeedbackForm);

feedbackForm.addEventListener('input', throttle(handleInput, TIME_THROTTLE));

feedbackForm.addEventListener('submit', handleSubmit);

feedbackForm.elements.email.value = getFeedbackForm
  ? parseFeedbackForm.email
  : '';
feedbackForm.elements.message.value = getFeedbackForm
  ? parseFeedbackForm.message
  : '';

function handleInput() {
  const feedback = {
    email: feedbackForm.email.value,
    message: feedbackForm.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
}

function handleSubmit(evt) {
  evt.preventDefault();
  console.log(
    ` email: ${feedbackForm.elements.email.value}\n message: ${feedbackForm.elements.message.value}`
  );
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
