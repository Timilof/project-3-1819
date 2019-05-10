(function() {
  var socket = io();
  const inputs = ["Dropdown","Text-input","File-upload","Picture-upload","Custom","Codeer","Talen","Opleidingsniveau"];
  const candidateForm = document.querySelector(".candidateForm")
  const container = document.querySelector('.modalholder')

document.querySelector('.inpud').focus();
// document.querySelectorAll('.predicts').forEach(x=> {
// x.classList.add('hidden')
// })
// document.querySelector('#search').addEventListener('input', (e) => {
//
//   const filteredinput = inputs.filter((inpu) => inpu.toLowerCase().includes(e.target.value.toLowerCase()));
// document.querySelectorAll('.predicts').forEach(x=> {
// x.classList.add('hidden')
// })
// filteredinput.forEach(x=>{
// const hidd = document.querySelector(`.${x}`)
// document.querySelectorAll('.predicts').forEach(x=> {
// x.classList.add('hidden')
// })
// hidd.classList.remove('hidden');
// container.appendChild(hidd)
// console.log(hidd)
// })
// });
// for the create input you can also search but this has to be fixed and made smaller and cleaner
document.querySelector('#create').addEventListener('input', (e) => {
let inputval = document.querySelector('#create').value
if(inputval !== ""||inputval !== " "||inputval !== "   "){
document.querySelector('.specialbutt').addEventListener('click', specialAdd)
}else {
  document.querySelector('#create').focus();
}
});

function removeCustom(){

  const asd = document.querySelector(`.${this.value}`)
  console.log(asd)
  asd.parentNode.removeChild(asd);
}

function specialAdd(){
console.log(document.querySelector('.cont'))
let title = document.querySelector('#create').value
let typo = document.querySelector('.customselect').value
const optionarray = [];
if(typo === "select"){
let startstring = `<article class="${title}"><h3>${title}</h3><select name='' id=''>`
const endstring =`</select><button value='${title}'class='remot yeya' type='button' name='button'>x</button></article>`
const textoption = document.querySelectorAll('.specialtext')
textoption.forEach(x => {
// optionarray.push(x.value)

startstring += `<option value="${x.value}">${x.value}</option>`
})
startstring += endstring
console.log(startstring)
const modal = document.querySelector('.tooltipModal');
modal.classList.toggle('hidden');
candidateForm.insertAdjacentHTML('beforeend', startstring)
const newremovers = document.querySelectorAll('.yeya')
newremovers.forEach(x=>{
x.addEventListener('click', removeCustom)
})
}else{
let realtype = `<article class="${title}">
  <h3>${title}</h3>
  <input type="${typo}" name="" value="">
  <button value='${title}'class='remot yeya' type='button' name='button'>x</button>
</article>
`
console.log(realtype)

const modal = document.querySelector('.tooltipModal');
modal.classList.toggle('hidden');
candidateForm.insertAdjacentHTML('beforeend', realtype)
const newremovers = document.querySelectorAll('.yeya')
newremovers.forEach(x=>{
x.addEventListener('click', removeCustom)
})
}
}

document.querySelector('.inlok .versturen').addEventListener('click', (e) => {
if(document.querySelector('#email').value === "3@moderator.lifely.nl"){
document.querySelector('.inlok').classList.add("hidden");
document.querySelector('.plebchat').classList.add("hidden");
document.querySelector('.usert').textContent = "3@moderator.lifely.nl"
}else{
  document.querySelector('.inlok').classList.add("hidden");
  document.querySelector('.plebchat').classList.remove("hidden");
  document.querySelector('.candidateForm').classList.add("hidden");
  document.querySelector('.chatForm').classList.add("hidden");
  document.querySelector('.usert').textContent = "Paardenboy"
}
})
document.querySelector('.customselect').addEventListener('input', (e) => {
if(document.querySelector('.customselect').value === "select"){
document.querySelector('.numero').classList.remove("hidden");
}else{
document.querySelector('.numero').classList.add("hidden");
}
})

document.querySelector('.numero select').addEventListener('input', (e) => {
const numberval = document.querySelector('.numero select').value
const specialcontainer = document.querySelector('.optionHolder')
specialcontainer.innerHTML = ""
const anInput = `<input class="specialtext" placeholder="custom option" type="text" name="" value="">`
for (var i = 0; i < numberval; i++) {

        specialcontainer.insertAdjacentHTML('beforeend', anInput)
// console.log(anInput)
        }
})


const buns = document.querySelectorAll('.create')
buns.forEach(x=>{
x.addEventListener('click', adding)
})

function adding(x){
  const modal = document.querySelector('.tooltipModal');
  modal.classList.toggle('hidden');


const valb = document.querySelector(`.${this.value}`)
  console.log("adding")
  candidateForm.appendChild(valb)
}
const removebuns = document.querySelectorAll('.remot')
removebuns.forEach(x=>{
x.addEventListener('click', putback)
})
function putback(){
  const valb = document.querySelector(`.${this.value}`)
  container.appendChild(valb)
console.log("delete test")
}

function addfunctions(){
const ader = document.querySelector('.adderall');
const funtools = document.querySelector('.tooltip');
funtools.classList.toggle('hidden');
}
function customer(){
const modal = document.querySelector('.tooltipModal');
modal.classList.toggle('hidden');
const funtools = document.querySelector('.tooltip');
funtools.classList.toggle('hidden');
console.log(modal)
console.log(funtools)
}
document.querySelector('.adderall').addEventListener("click", function(e){
e.preventDefault();
addfunctions()
});
document.querySelector('.exer').addEventListener("click", function(e){
e.preventDefault();
const modal = document.querySelector('.tooltipModal');
modal.classList.toggle('hidden');
});


document.querySelector('.custom').addEventListener("click", function(e){
e.preventDefault();
customer();
});

document.querySelector('.send').addEventListener("click", function (e) {
    e.preventDefault();
    const message = document.querySelector('.inpud').value
    if(message == ''||message == null || message === " "|| message === "  "|| message === "   "|| message === "    "){
    console.log("illegal message")
    document.querySelector('.inpud').value = "";
    document.querySelector('.inpud').focus();
  }else{
    let seconds = new Date().getSeconds()
    let minutes = new Date().getMinutes()
    let hours = new Date().getHours()
    const timestamp = hours+":"+minutes+":"+seconds

    socket.emit('chat message', {msg: message, time: timestamp});
    // socket.emit('chat message', document.querySelector('.inpud').value);
    document.querySelector('.inpud').value = "";
    document.querySelector('.inpud').focus();
    return false;
}
});

document.querySelector('.sent').addEventListener("click", function (e) {
    e.preventDefault();
    const message = document.querySelector('.inpuds').value
    if(message == ''||message == null || message === " "|| message === "  "|| message === "   "|| message === "    "){
    console.log("illegal message")
    document.querySelector('.inpuds').value = "";
    document.querySelector('.inpuds').focus();
  }else{
    let seconds = new Date().getSeconds()
    let minutes = new Date().getMinutes()
    let hours = new Date().getHours()
    const timestamp = hours+":"+minutes+":"+seconds
    const me = "horselord"
    socket.emit('chat message', {msg: message, time: timestamp, user: me});
    // socket.emit('chat message', document.querySelector('.inpud').value);
    document.querySelector('.inpuds').value = "";
    document.querySelector('.inpuds').focus();
    return false;
}
});





  socket.on('connect', function() {
    // console.log('connecting');
  });
  socket.on('disconnect', function() {
    // console.log('disconnecting');
  });

  socket.on('chat message', function (data) {
  const chatWindow = document.querySelector(".chatMessages")
const theMessage =
  `
  <li class="chatMessage ${data.user}">
    <p>${data.msg}</p>
    <span>${data.time}</span>
  </li>
`
chatWindow.insertAdjacentHTML('beforeend', theMessage)
})


function preview(){
const vidCont = document.querySelector("iframe");
vidCont.src = this.value
}


  socket.on('temp vid', function(template) {
    const sug = document.querySelector(".suggestion-container")
    sug.innerHTML = '';
    if (template.val !== undefined) {
      template.val.forEach(item => {
        const element =
          `
          <div>
            <p>${message}</p>
            <span></span>
          </div>
    `

        sug.insertAdjacentHTML('beforeend', element)
      })
      document.querySelectorAll('.prev').forEach(function(temp) {
        temp.addEventListener('click', preview)
      })
      document.querySelectorAll('.temp').forEach(function(temp) {
        temp.addEventListener('click', add)
      })
      console.log(template.val)

    } else {
      console.log("There's no data yet")
    }
  })

  socket.on('temp change', function(data) {
    const headStat = document.querySelector('.status')
    const headImg = document.querySelector('.statu')
    console.log('Temperature')
    console.log(data);
    if (data.wind >= 10) {
      headStat.textContent = "Windy"
      headImg.src = "/img/stormy.svg"
    } else if (data.temp <= 16) {
      headStat.textContent = "Cloudy"
      headImg.src = "/img/cloudy.svg"
    } else if (data.temp >= 16) {
      headStat.textContent = "Sunny"
      headImg.src = "/img/sunny.svg"
    } else {
      headStat.textContent = "Windy"
      headImg.src = "/img/stormy.svg"
    }
  });

}());
