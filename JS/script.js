// function showSidebar(){
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display = 'flex'
//   }
//   function hideSidebar(){
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display = 'none'
//   }

function hideSidebar() {
  document.querySelector('.sidebar').style.display = 'none';
}

function showSidebar() {
  document.querySelector('.sidebar').style.display = 'block';
}


document.getElementById('registerBtn').addEventListener('click', () => {
  const iframe = document.createElement('iframe');
  iframe.src = 'form.html';
  iframe.id = 'formIframe';
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.zIndex = '1000';
  document.body.appendChild(iframe);

  iframe.addEventListener('load', () => {
      const closeBtn = iframe.contentWindow.document.getElementById('closeBtn');
      closeBtn.addEventListener('click', () => {
          document.body.removeChild(iframe);
      });
  });
});

document.getElementById('registerBtnd').addEventListener('click', () => {
  const existingIframe = document.getElementById('formIframe');
  if (existingIframe) {
      existingIframe.remove();
  }
  
  const iframe = document.createElement('iframe');
  iframe.src = 'form.html';
  iframe.id = 'formIframe';
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.zIndex = '1000';
  document.body.appendChild(iframe);

  iframe.addEventListener('load', () => {
      const closeBtn = iframe.contentWindow.document.getElementById('closeBtn');
      if (closeBtn) {
          closeBtn.addEventListener('click', () => {
              document.body.removeChild(iframe);
          });
      }
  });
});
