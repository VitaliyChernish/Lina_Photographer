export function showMessage(message, duration) {
    const alertContainer = document.createElement('div');
    alertContainer.textContent = message;
    alertContainer.style.position = 'fixed';
    alertContainer.style.top = '5vw';
    alertContainer.style.left = '50%';
    alertContainer.style.transform = 'translateX(-50%)';
    alertContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    alertContainer.style.fontSize = '3vw'
    alertContainer.style.color = 'white';
    alertContainer.style.padding = '5vw';
    alertContainer.style.borderRadius = '5px';
    alertContainer.style.zIndex = '9999'
    document.body.appendChild(alertContainer);
  
    setTimeout(function () {
      alertContainer.remove();
    }, duration);
  }
