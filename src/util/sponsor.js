export { submitFormToGoogleScript };

async function submitFormToGoogleScript(formData) {
  try {
    const targetUrl = 'https://script.google.com/macros/s/AKfycbzCIUBZiVh9RxAEg03khc2QEGhsRQZWYPl2sEQj-lUCyKEKu-Ua9hfQ7SaXnoT8llL2/exec';
    
    console.log('Submitting form via direct POST (no-cors mode)...');
    
    const response = await fetch(targetUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    console.log('Form submitted successfully (no-cors mode)');
    return { success: true, data: 'Form submitted successfully' };
    
  } catch (error) {
    console.error('Error submitting form to Google Script:', error.message);
    return { success: false, error: error.message };
  }
}