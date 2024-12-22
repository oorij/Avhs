const phrases = [
  'Hi, love!',
  'Ang dami na nating pinagdaanan but I know na hindi pa yon enough',
  'Masaya ako at natuloy itong date natin at magkasama tayong icelebrate ang Xmas',
  'kahit hindi pa pasko hehe.',
  'I appreciate everything na ginawa mo sakin',
  'and I want to thank you for everything.',
  'Before, magbestfriends lang tayo',
  'who knew na magkakatuluyan tayo :P.',
  'Grabe talaga yung tadhana no',
  'nagkatuluyan tayo na kilala na yung isat isa',
  'but akala lang natin yun',
  'napagtanto natin through our journey na hindi natin kilala ang true selves natin',
  'but I chose to know and love the new traits na nakikita at nakikilala ko sayo',
  'and i know you do love me too.',
  'Love, i want you to know na andito lang ako palagi',
  'kahit palagi ko tong sinasabi sayo',
  'di ako magsasawang ulit ulitin.',
  'Merry Christmas, my love.',
  'I have something for u hehe',
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isTyping = false;
const typewriterElement = document.getElementById('typewriter');
const nextLabelElement = document.getElementById('nextLabel');
const navigationButtonElement = document.getElementById('navigationButton');

function typeNextCharacter() {
  if (currentCharIndex < phrases[currentPhraseIndex].length) {
    typewriterElement.textContent +=
      phrases[currentPhraseIndex][currentCharIndex];
    currentCharIndex++;
    setTimeout(typeNextCharacter, 10);
  } else {
    isTyping = false;
    if (currentPhraseIndex === phrases.length - 1) {
      showNavigationButton();
    } else {
      showNextLabel();
    }
  }
}

function startTyping() {
  if (!isTyping) {
    isTyping = true;
    typewriterElement.textContent = '';
    currentCharIndex = 0;
    hideNextLabel();
    hideNavigationButton();
    typeNextCharacter();
  }
}

function nextPhrase() {
  if (!isTyping) {
    currentPhraseIndex++;
    if (currentPhraseIndex < phrases.length) {
      startTyping();
    }
  }
}

function showNextLabel() {
  nextLabelElement.style.opacity = '1';
}

function hideNextLabel() {
  nextLabelElement.style.opacity = '0';
}

function showNavigationButton() {
  navigationButtonElement.style.display = 'inline-block';
}

function hideNavigationButton() {
  navigationButtonElement.style.display = 'none';
}

document.body.addEventListener('click', function (event) {
  if (event.target !== navigationButtonElement) {
    nextPhrase();
  }
});

navigationButtonElement.addEventListener('click', function () {
  window.location.href = 'album.html';
});

// Start typing the first phrase when the page loads
window.addEventListener('load', startTyping);
