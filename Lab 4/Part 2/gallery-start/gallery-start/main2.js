/*--
Name: Suril Joshi

File: main2.js

Date: 05 April 2024

All the pic names have been added accordingly.
*/
document.addEventListener("DOMContentLoaded", function() {
    const filenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
    const altTexts = {
      'pic1.jpg': 'Closeup of a blue human eye',
      'pic2.jpg': 'A colorful butterfly on a flower',
      'pic3.jpg': 'A beautiful sunset over the ocean',
      'pic4.jpg': 'Majestic mountains in the morning light',
      'pic5.jpg': 'Vibrant cityscape at night'
    };

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */

for (let i = 0; i < filenames.length; i++) {
    const newImage = document.createElement('img');
    newImage.src = 'images/' + filenames[i];
    newImage.alt = altTexts[filenames[i]];
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function() {
        displayedImg.src = this.src;
        displayedImg.alt = this.alt;
      });
    }

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    const currentClass = btn.getAttribute('class');
    if (currentClass === 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
    });
  });
