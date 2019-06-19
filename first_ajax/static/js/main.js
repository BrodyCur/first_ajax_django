document.addEventListener("DOMContentLoaded", function() {
  const rootButton = document.querySelector('#root');
  const pingPongButton = document.querySelector('#ping-pong');
  const countButton = document.querySelector('#count');
  const timeButton = document.querySelector('#time');
  const carButton = document.querySelector('#car');
  const carList = document.querySelector('#list');

  rootButton.addEventListener('click', () => {
    axios.get("http://intro-ajax-api.herokuapp.com/")
    .then((response) => {
      console.log(response);
    })
  });

  pingPongButton.addEventListener('click', () => {
    axios.get("http://intro-ajax-api.herokuapp.com/ping")
    .then((response) => {
      console.log('Great success!', response.data);
      const dataElem = document.createElement('section');
      dataElem.innerHTML = response.data;
      document.body.append(dataElem);
    })
    .catch((error) => {
      console.log('I am Error', error);
      const errorElem = document.createElement('section');
      errorElem.innerText = 'omg so sowwy';
      document.body.append(errorElem);
    })
    .then(() => {
      console.log('We made it to the other side');
    })
  });

  countButton.addEventListener('click', () => {
    axios.get("http://intro-ajax-api.herokuapp.com/count")
    .then((response) => {
      console.log('hi!', response.data);
      const dataElem = document.createElement('section');
      dataElem.innerHTML = response.data;
      document.body.append(dataElem);
    })
  });

  timeButton.addEventListener('click', () => {
    axios.get("http://intro-ajax-api.herokuapp.com/time", {
      params: {timezone: 'Asia/Kolkata'}
    })
    .then((response) => {
      console.log('hi!', response.data);
      const dataElem = document.createElement('section');
      dataElem.innerHTML = response.data;
      document.body.append(dataElem);
    })
  });

  carButton.addEventListener('click', () => {
    axios.get("http://intro-ajax-api.herokuapp.com/a_car")
    .then((response) => {
      console.log('hello!')
      const listItem = document.createElement('li');
      listItem.innerHTML = response.data;
      carList.append(listItem);
    })
  })
});
    // .then((response) => {
    //   console.log("we did it!")
    // })