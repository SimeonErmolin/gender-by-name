const serverUrl = 'https://api.genderize.io';

export default async function requestGenderByName(name) {
  try {
    const url = `${serverUrl}?name=${name}`;

    const responce = await fetch(url);
    return responce.json();
  } catch(err) {
    alert(err)
  }
}
