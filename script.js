const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c318demouser';//query request starts with ? then key/value pair

//get list of all todo_items
axios.get(`${BASE_URL}/todos${API_KEY}`).then( getTodoData );

function getTodoData(response){
    console.log('response: ', response);
};

//get single todo_item, may have more data
axios.get(`${BASE_URL}/todos/${idToDelete}${API_KEY}`).then( resp =>{
     console.log('Add one Item response:', resp);
 });

// const newItem = {
//     title: 'James W',
//     details:'When do we see this?'
// };
// add new todo_item
// axios.post(`${BASE_URL}/todos${API_KEY}`,newItem).then( resp =>{
//     console.log('Add Item response:', resp);
// });
//
// const idToDelete = '5b2d4577e3e0f45f2ed5ca26';
//
// delete todo_item
// axios.delete(`${BASE_URL}/todos/${idToDelete}${API_KEY}`).then(
//     resp => {
//         console.log('deleted:', resp);
//     });
//
// toggle complete to todo_item

// axios.put(`${BASE_URL}/todos/${idToToggle}${API_KEY}`).then(
//     resp => {
//         console.log('deleted:', resp);
//     });
