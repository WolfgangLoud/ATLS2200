const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was -32 fahrenheit outside, so :insertx: went a nice lollygag. When they got to :inserty:, began aggresivly break-dancing for a few moments, then :insertz:. Bob observed in the most astute fashion, and decided to get the hell outta there. Although bob was very slow because his designer gucci belt weighs 300 pounds."

const insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"]

const inserty = ["the soup kitchen", "Disneyland", "the White House"]

const insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]


randomize.addEventListener('click', result);

function result() {

    let newStory = storyText

    console.log=newStory

  const xItem = randomValueFromArray(insertx);
  const yItem = randomValueFromArray(inserty);
  const zItem = randomValueFromArray(insertz);

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name)
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stones';
    const temperature =  Math.round((-32-32)*.5556) + ' centigrade';
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('-32 fahrenheit', temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

