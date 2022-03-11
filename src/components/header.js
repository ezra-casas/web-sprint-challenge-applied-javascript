const Header = (title, date, temp) => {

  function elementCreate(element){
    return document.createElement(element);
  }
  // create element
  const container = elementCreate('div');
  const span = elementCreate('span');
  const h1 = elementCreate('h1');
  const span1 = elementCreate('span');


  // create class
  container.classList.add('header');
  span.classList.add('date');
  span1.classList.add('temp');
  
  /* TASK 1
  ---------------------
  Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  The text inside elements will be set using their `textContent` property (NOT `innerText`).
  
   <div class="header">
     <span class="date">{ date }</span>
     <h1>{ title }</h1>
     <span class="temp">{ temp }</span>
   </div>
  */

   // text content:
  span.textContent = date;
  h1.textContent = title;
  span1.textContent = temp;


  // append to parent
  container.appendChild(span);
  container.appendChild(h1);
  container.appendChild(span1);


  return container;


}

const headerAppender = (selector) => {

  const getElement = document.querySelector(selector);
  getElement.appendChild(Header("Pizza cures Cancer!", 2023, "13/04/2043"))
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
