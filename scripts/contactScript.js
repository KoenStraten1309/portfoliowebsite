const emailButton = document.getElementById('mailId');

emailButton.addEventListener('click', function(event) {
    event.preventDefault();

    copyToClipboard("koen.straten@edu-kw1c.nl")

    alert("E-mailadres succesvol gekopieerd.")
});

const phoneButton = document.getElementById('phoneId');

phoneButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    copyToClipboard("(06) 11424009")

    alert("Telefoonnummer succesvol gekopieerd.")
});

function copyToClipboard(text) {
    
    const textarea = document.createElement('textarea');
  
    textarea.value = text;
  
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
  
    document.body.appendChild(textarea);
  
    textarea.select();
  
    try {
      const successful = document.execCommand('copy');
      const message = successful ? 'Copied to clipboard!' : 'Unable to copy to clipboard';
      console.log(message);
    } catch (err) {
      console.error('Error copying to clipboard:', err);
    }
  
    document.body.removeChild(textarea);
  }