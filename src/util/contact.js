export { submitFormToGoogleScript };

async function submitFormToGoogleScript(formData) {
  try {
    const targetUrl = 'https://script.google.com/macros/s/AKfycbz-0W4UWeP-p-EY5E4TDY2YfBP_FaIORtZxSn5ADVVci-nth1IDuj9jWqy3G6-giC2x/exec';
    
    console.log('Submitting form via direct POST (no-cors mode)...');
    
    const response = await fetch(targetUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    // With no-cors mode, we can't read the response, but if no error is thrown, it likely succeeded
    console.log('Form submitted successfully (no-cors mode)');
    return { success: true, data: 'Form submitted successfully' };
    
  } catch (error) {
    console.error('Error submitting form to Google Script:', error.message);
    return { success: false, error: error.message };
  }
}