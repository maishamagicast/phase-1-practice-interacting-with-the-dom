// Let the code begin
const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const heart =document.getElementById('heart');
const plus =document.getElementById('plus');
const pause=document.getElementById('pause');
const likesDisplay =document.getElementsByClassName('likes')
const form =document.getElementById('comment-form'); 
const commentList =document.getElementById('list');
const button =document.getElementById('submit');
const input =document.getElementById('comment-input');
let count=0;
let isPaused = false;
let intervalId = null;
const likeTracker = {};

// timer section
function startTimer(){
    intervalId = setInterval(() => {
        count++;
        counter.innerText = count;
    }, 1000);

};

// start the timer when the page loads
window.addEventListener('DOMContentLoaded', () => {
    startTimer();
});

// manually decrase the counter

minus.addEventListener('click',()=>{
    if (count > 0){
        count--;
        counter.innerText = count;
    }
    else{
        alert('Counter cannot go below zero');
        // console.log('Counter cannot go below zero');
    }
})

// manually increase the counter
plus.addEventListener('click', () => {
    count++;
    counter.innerText = count;
});


// pause counter or resume on click

pause.addEventListener('click',()=>{
    isPaused = !isPaused;
    if (isPaused){
        clearInterval(intervalId);
        pause.innerText = 'resume';
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;

    }
    else{
        startTimer();
        pause.innerText = 'pause';
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
    }
})


// likes section
heart.addEventListener('click',()=>{
    if (!likeTracker[count]){
        likeTracker[count] = 1;
        const newLike =document.createElement('li');
        newLike.id= `like-${count}`;
        newLike.innerText = `${count} has been liked once`;
        likesDisplay[0].appendChild(newLike);
    
    }
    else{
        likeTracker[count]++;
        const updatedLike= document.getElementById( `like-${count}`);
        updatedLike.innerText=`${count} has been liked ${likeTracker[count]}`;
    }
})


//comment-section
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const newComment= document.createElement('p');
    newComment.textContent = input.value;
    commentList.appendChild(newComment);
    input.value = '';
})