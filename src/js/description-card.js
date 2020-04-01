const openDescriptionBnt = document.getElementsByClassName('item-title');

for (let i = 0; i < openDescriptionBnt.length; i++) {
  openDescriptionBnt[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.border = '0'
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.border = '2px solid #F3969A';
      content.style.borderTop = '0';
    }
  });
};




