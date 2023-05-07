function checkQuestCompletion() {
    var iconsCollected = parseInt(localStorage.getItem('iconsCollected')) || 0;
    if (iconsCollected >= 3) {
      return true;
    } else {
      return false;
    }
  }
  
  function collectIcon(icon) {
    icon.style.display = 'none';
    var iconsCollected = parseInt(localStorage.getItem('iconsCollected')) || 0;
    iconsCollected++;
    localStorage.setItem('iconsCollected', iconsCollected);
  
    if (checkQuestCompletion()) {
      showQuestCompletedMessage();
    }
  }
  
  function showQuestCompletedMessage() {
    var messageBox = document.getElementById('message-box');
    messageBox.innerText = 'Вітаємо! Ви знайшли всі іконки і завершили квест!';
    messageBox.style.display = 'block';
    
    // Перенаправлення на іншу сторінку після кількох секунд
    setTimeout(function() {
      window.location.href = 'index.html';
    }, 3000);
  }