'use strict';

// Using local container (discord-api)
const api = 'http://discord-api:5007/avatar/';
const id = '484108069505073153';

async function fetchAvatar() {
  try {
    const response = await fetch(api + id, { method: 'GET', mode: 'cors' });
    if (response.ok) {
      const userData = await response.json();
      var avatar = userData.url;
      document.getElementById('avatar').src = avatar;
    } else {
      console.warn('Something went wrong. xd');
    }
  } catch (error) {
    console.warn('Something went wrong. xd');
  }
}

fetchAvatar();
