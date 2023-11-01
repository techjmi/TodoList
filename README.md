In this code, we maintain an array item to store the list of items, and currentItem to store the currently input item. When you click the + button, the listOfItem function is called, which adds the currentItem to the item array and then clears the input field.

We use the map method to iterate through the item array and render each item as a list item within the <ol> element. Each list item has a unique key attribute to help React efficiently update the list when items change.
...
const listOfItem=()=>{
  setItem((oldItem)=>{
    return [...oldItem,list]
    setList(" ");
  })
}
simply when we click on button 
const [item, setItem]=useState([]);
setItem state is called upon....lets it have some prev value in list
so ...OldItem, also we add list which current eneter input....
value will stored in item array and will be displayed by method of map...under list section...
here return is play role of new array and the value reflect in item....