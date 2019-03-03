/* global shoppingList, store, api */
'use strict';

// $(document).ready(function() {
//   shoppingList.bindEventListeners();
//   shoppingList.render();

//   api.getItems((items) => {
//     items.forEach((item) => store.addItem(item));
//     shoppingList.render();
//   });
// });


api.createItem('dragon')
  .then(res => res.json())
  .then((newItem) => {
    return api.getItems();
  })
  .then(res => res.json())
  .then(((items) => {
    console.log('testing',items);
  }));

  