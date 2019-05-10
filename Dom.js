// let val;
// val=document 
// val=document.all
// val=document.all[2]
// val=document.all.length
// val=document.head
// val=document.body
// val=document.doctype
// val=document.domain
// val=document.URL
// val=document.characterSet
// val=document.contentType
// val=document.forms[0]
// val=document.forms[0].className
// val=document.forms[0].method
// val=document.forms[0].action
// val=document.links
// val=document.scripts
// console.log(val);

// DOM SELECTOR

// console.log(document.getElementById('task-title'))
// console.log(document.getElementById('task-title').id)

// // CHANGING STYLE
// document.getElementById('task-title').style.background='#333'
// document.getElementById('task-title').style.color='#fff'
// document.getElementById('task-title').style.padding='5px'

// // CHANGE CONTENT
// document.getElementById('task-title').textContent='TASK LIST'
// document.getElementById('task-title').innerText='Task list'
// document.getElementById('task-title').innerHTML='<span style="color:red">TASK LIST</span>'


// // better way to to this
// const taskTitle=document.getElementById('task-title')
// taskTitle.style.background='#333'
// taskTitle.style.color='#fff'
// taskTitle.style.padding='5px'
// taskTitle.textContent='TASK LIST'
// taskTitle.innerText='Task list'
// taskTitle.innerHTML='<span style="color:red">TASK LIST</span>'


//QUERY SELECTOR
// console.log(document.querySelector('#task-title'))
// console.log(document.querySelector('.card-title'))
// console.log(document.querySelector('h5'))
// document.querySelector('li').style.color='red'//it select single and first element
// document.querySelector('ul li').style.color='red' // You can sub items
// document.querySelector('li:last-child').style.color='red' // it select last items
// document.querySelector('li:nth-child(3)').style.color='blue' // If we want to select particular element
// document.querySelector('li:nth-child(3)').textContent='Hello'
// document.querySelector('li:nth-child(odd)').style.color="#ccc"
// document.querySelector('li:nth-child(even)').style.color="pink"

// MULTIPLE QUERY SELECTOR
// const items=document.getElementsByClassName('collection-item')
// console.log(items);
// console.log(items[0])
// items[0].style.color='red'
// items[3].textContent='Hello'

// DOCUMENT.GET ELEMENT BY TAG NAME

// var lis=document.getElementsByTagName('li')
// console.log(lis);
// console.log(lis[0])
// lis[0].style.color='red'
// lis[3].textContent='Hello'

// // convert HTML collection into array
// lis=Array.from(lis)
// //lis.reverse()
// lis.forEach(function(li,index){
//     console.log(li.className)
//     li.textContent=`hello ${index   }`
    
// })

//const items=Document.querySelectorAll('ul.collection li.collection-item')
// const items=document.querySelectorAll('ul.collection li.collection-item')
// console.log(items)
// items.forEach(function(items,index){
//     items.textContent=`${index} Hello`
// })
// const liOdd=document.querySelectorAll('li:nth-child(odd)')
// liOdd.forEach(function(li,index){
//     li.style.background='#ccc'
// })

// const liEven=document.querySelectorAll('li:nth-child(even')
// for(i=0;i<liEven.length;i++){
//     liEven[i].style.background="#f4f4f4"
// }
// TRAVERSING

// let val;
// const list=document.querySelector('ul.collection')
// const listItem=document.querySelector('li.collection-item')
// val=list.childNodes // It gives the nodes
// val=list.childNodes
// val=list.childNodes[0].nodeName      // 1-Element
                                     //2-Attribut(deprected)
                                     //3-Text node
                                     //8-comment
                                     //9-Document
//                                      //10-doctype
// val=list.childNodes[0].nodeType
// val=list.childNodes[1].nodeType
// val=list.childNodes[3].nodeType
// val=list.children // It gives the Html collection
// val=list.children[1].textContent='Hello'
// // Children or children
// list.children[3].children[0].id="test-link" // we can ID
// val=list.children[3].children[0]
// // First child
// val=list.firstChild
// val=list.firstElementChild
// // last Child
// val=list.lastChild
// val=list.lastElementChild
// // Count
// val=list.childElementCount
// // Get Parent Node
// val=listItem.parentNode
// val=listItem.parentElement
// // parents of parents
// val=listItem.parentElement.parentElement
// // Next Siblings
// val=listItem.nextSibling
// val=listItem.nextElementSibling
// val=listItem.nextElementSibling.nextElementSibling.previousElementSibling
// // Previous Siblings
// val=listItem.previousSibling
// val=listItem.previousElementSibling
// console.log(val)

// CREATE ELEMENT
// const li=document.createElement('li')
// li.className='collection-item' // Add class
// li.id='new-item' // Add id
// li.setAttribute('title','New Item') // ADD Attribute
// // CREATE TEXT NODE AND APPEND
// li.appendChild(document.createTextNode('Hello world'))
// // Create a new link
// var link=document.createElement('a')
// link.className='delete-item secondary-content' //ADD class
// link.innerHTML='<i class="fa fa-remove"></i>' //ADD html icon
// li.appendChild(link)
// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li)

// console.log(li);
//

// REPLACE ELEMENT
// const newHeading=document.createElement('h2')
// newHeading.id='task-title'
// newHeading.appendChild(document.createTextNode('Task List'))
// const oldHeading=document.getElementById('task-title')
// const cardAction=document.querySelector('.card-action')
// cardAction.replaceChild(newHeading,oldHeading)
// //console.log(newHeading);
// //REMOVE
// const lis=document.querySelectorAll('li')
// const list=document.querySelector('ul')
// lis[0].remove() // remove list item
// list.removeChild(lis[3])// remove child
// // CLASSES AND ATTRIBUTES
// const firstli=document.querySelector('li:first-child')
// const link=firstli.children[0]
// // Classes
// let val
// val=link.className
// val=link.classList
// val=link.classList[0]
// link.classList.add('test')
// link.classList.remove('test')
// val=link
// //  ATTRIBUTE
// val=link.getAttribute('href')
// val=link.setAttribute('href','http://www.google.com')
// val=link.hasAttribute('href')// check attribute
// val=link.setAttribute('title','Google')
// link.removeAttribute('title')
// val=link
// console.log(val);


//Event Listner
//document.querySelector('.clear-tasks').addEventListener('click',function(){ // FUNCTION WITHOUT NAME
    //console.log('Hello world')
//})

// FUNCTION WITH NAME

// document.querySelector('.clear-tasks').addEventListener('click',onClick)
// function onClick(e){
//     //console.log('clicked')
//     let val;
//     // Event target element
//     val=e.target
//     val=e.target.id
//     val=e.target.className
//     val=e.target.classList
//     //val=e.target.innerText='ClickMe'
//     // Event Type
//     val=e.type
//     // TIME STAMP
//     val=e.timeStamp
//     // coordinate event to the window 
//     val=e.clientY
//     val=e.clientX
//     // coordinate event to the element
//     val=e.offsetY
//     val=e.offsetX
//     console.log(val);
    
// }

// MOUSE EVENTS
// const clearBtn=document.querySelector('.clear-tasks')
// const card=document.querySelector('.card')
// const heading=document.querySelector('h5')
// //clearBtn.addEventListener('click',runEvent) // CLICK
// //clearBtn.addEventListener('dblclick',runEvent) DOUBLE CLICK
// //clearBtn.addEventListener('mousedown',runEvent)// MOUSE DOWN
// //clearBtn.addEventListener('mouseup',runEvent) // MOUSE UP
// // card.addEventListener('mouseenter', runEvent)
// // card.addEventListener('mouseleave', runEvent)
// // card.addEventListener('mouseover',runEvent)
// // card.addEventListener('mouseout',runEvent)

// //MOUSE MOVE
// card.addEventListener('mousemove',runEvent)
// // EVENT HANDLER
// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`)
//     heading.textContent=`mouseX: ${e.offsetX} mouseY: ${e.offsetY}`
//     document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},40)`
// }

// const form = document.querySelector('form')
// const taskInput=document.getElementById('task')
// const heading=document.querySelector('h5')
//taskInput.value=" " // CLEAR INPUT
//form.addEventListener('submit',runEvent)
//taskInput.addEventListener('keydown',runEvent) // keydown
//taskInput.addEventListener('keyup',runEvent) //Key up
//taskInput.addEventListener('keypress',runEvent) // KEY PRESS
//taskInput.addEventListener('focus',runEvent) // focus
//taskInput.addEventListener('blur',runEvent) // BLUR 
//taskInput.addEventListener('cut',runEvent) //CUT
//taskInput.addEventListener('copy',runEvent) // COPY
//taskInput.addEventListener('paste',runEvent) //PASTE
//taskInput.addEventListener('input',runEvent)
//function runEvent(e){
  //  console.log(`Event Type:${e.type}`)
    //console.log(taskInput.value) // GET INPUT VALUE
    //e.preventDefault() // IT WILL NOT GO ON ANOTHER PAGE
    //console.log(e.target.value)
    //heading.innerText=e.target.value
//}

// EVENT BUBLING

// document.querySelector('.card-title').addEventListener('click',function(){
//     console.log('card title')
// })


// document.querySelector('.card-content').addEventListener('click',function(){
//     console.log('card content')
// })


// document.querySelector('.card').addEventListener('click',function(){
//     console.log('card')
// })

// document.querySelector('.col').addEventListener('click',function(){
//     console.log('col')
// })

//EVENT DELIGATION
//const delItem=document.querySelector('.delete-item')
//delItem.addEventListener('click',deleteItem)
// document.body.addEventListener('click',deleteItem)
// function deleteItem(e){
    // if(e.target.parentElement.className==='delete-item secondary-contents'){
    //     console.log('Item deleted')
    // }
//     if(e.target.parentElement.classList.contains('delete-item')){ // Best way to this
//         console.log('Delete Item') 
//         e.target.parentElement.parentElement.remove()
//     }
      
// }


// SET LOCAL STORAGE ITEM
//localStorage.setItem('name','Hitesh')
// SESSION STORAGE ITEM
//sessionStorage.setItem('Name:','Hitesh')
//sessionStorage.removeItem('Name:')
//localStorage.removeItem('name')

//Get Item
// localStorage.setItem('Name',"hitesh")
// localStorage.setItem('Age','21')
// const name=localStorage.getItem('Name')
// const age=localStorage.getItem('Age')
// localStorage.clear()
// console.log(name,age)


