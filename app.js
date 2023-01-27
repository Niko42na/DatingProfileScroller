// дані профілів
const data = [
  {
    name: 'Петро П\'яточкін',
    age: 30,
    gender: 'male',
    lookingfor: 'female',
    location: 'Івано-Франківськ',
    image: 'https://randomuser.me/api/portraits/men/62.jpg'
  },
  {
    name: 'Марта Васильчук',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Умань',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'Василь Демків',
    age: 25,
    gender: 'male',
    lookingfor: 'female',
    location: 'Світловодськ',
    image: 'https://randomuser.me/api/portraits/men/27.jpg'
  },
  {
    name: 'Олена Горак',
    age: 28,
    gender: 'female',
    lookingfor: 'male',
    location: 'Рівне',
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
];

// ітератор профілів
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}


const profiles = profileIterator(data);

// перехід на наступний профіль
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // немає більше профілів
    window.location.reload();
  }
}

// виклик першого профілю
nextProfile();

// привязка події кліку до переходу на наступний профіль 
document.getElementById('next').addEventListener('click', nextProfile);