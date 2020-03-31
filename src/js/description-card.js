let isOpenDescription = false;
const openDescriptionBnt = document.getElementsByClassName('item-title');

function rotateImage() {
  if (isOpenDescription) {
    openDescriptionBnt.style.transform = 'rotate(180deg)';
    isOpenDescription = false;
  } else {
    openDescriptionBnt.style.transform = 'rotate(0deg)';
    isOpenDescription = true;
  }
  console.log(openDescriptionBnt);
}

for (let i = 0; i < openDescriptionBnt.length; i++) {
  openDescriptionBnt[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
};


