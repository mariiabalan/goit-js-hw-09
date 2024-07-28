const formData = {
  email: "",
  message: ""
};

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
      return JSON.parse(savedData);
  }
  return formData;
}

function saveFormData(data) {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const savedFormData = loadFormData();

  form.elements.email.value = savedFormData.email;
  form.elements.message.value = savedFormData.message;

  formData.email = savedFormData.email;
  formData.message = savedFormData.message;

  form.addEventListener('input', (event) => {
      const target = event.target;

      if (target.name === 'email' || target.name === 'message') {
      
          formData[target.name] = target.value;

        
          saveFormData(formData);
      }
  });

  form.addEventListener('submit', (event) => {
      event.preventDefault();

  
      if (!formData.email || !formData.message) {
          alert('Fill please all fields');
      } else {
        
          console.log(formData);


          localStorage.removeItem('feedback-form-state');
          formData.email = "";
          formData.message = "";
          form.elements.email.value = "";
          form.elements.message.value = "";
      }
  });
});