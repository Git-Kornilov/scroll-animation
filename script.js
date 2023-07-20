'use strict';

const boxes = document.querySelectorAll('.box');

const checkBoxes = function () {
  const triggerBottom = (window.innerHeight / 5) * 4; // some decrease (../5 *4) interior height of the window in pixels

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top; // coord - top of each box

    if (boxTop < triggerBottom) box.classList.add('show');
    if (boxTop > triggerBottom) box.classList.remove('show');
  });
};

checkBoxes(); // to display initial box - can be removed

window.addEventListener('scroll', checkBoxes);
