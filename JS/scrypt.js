const people=[ {
    id:"#John",
    img:'./IMG/man.png',
    name: 'John',
    massage1:'Hi! Howare you?',
    myansver:'I`m goood!',
    ansver:'go beer!!',
},

{
    id:"#Alise",
    img:'./IMG/women.png',
    name: 'Alice',
    massage1:'how you feel?',
    myansver:'Well, how about you?',
    ansver:'I need u help',
},

{
    id:"#Kate",
    img:'./IMG/Kate.jpg',
    name: 'Kate',
    massage1:'Good morning',
    myansver:'Hi!',
    ansver:'You have to go work!!',
},

{
    id:"#Bill",
    img:'./IMG/Bill.jpg',
    name: 'Bill',
    massage1:'Heeey',
    myansver:'wassssup',
    ansver:'Go to Real Madrid match tomorrow',
}]

function newChat(human){
    document.querySelector("#StartMessage1").textContent=human.massage1;
    document.querySelector("#StartMessage2").textContent=human.ansver;
    document.querySelector('#message__icon1').setAttribute('src', human.img);
    document.querySelector('#message__icon2').setAttribute('src', human.img);
    document.querySelector('.chat__icon').setAttribute('src', human.img);
    document.querySelector('#myMessage').textContent=human.myansver;
    document.querySelector('.chat__name').textContent=human.name;   
}
let inputBtn=document.querySelector(".input__button");
inputBtn.onclick=function(){
    mymsg= document.createElement('div'); mymsg.setAttribute('class','mymessage'); mymsg.setAttribute('id','mymessage2');
    let inputTxt=document.querySelector(".input__text");
    let newMsg= document.createElement('p');
    newMsg.textContent=inputTxt.value;
    newMsg.setAttribute('class','myMessage');
    document.querySelector('#my__mes').appendChild(mymsg);
    document.querySelector('#mymessage2').appendChild(newMsg);
    setTimeout(getMsg, 5000, people[1].img);
}
let johnBtn= document.querySelector("#John");
johnBtn.onclick = function(){
     newChat(people[0]);
   

    inputBtn.onclick=function(){
        mymsg= document.createElement('div'); mymsg.setAttribute('class','mymessage'); mymsg.setAttribute('id','mymessage2');
        let inputTxt=document.querySelector(".input__text");
        let newMsg= document.createElement('p');
        newMsg.textContent=inputTxt.value;
        newMsg.setAttribute('class','myMessage');
        document.querySelector('#my__mes').appendChild(mymsg);
        document.querySelector('#mymessage2').appendChild(newMsg);
        setTimeout(getMsg, 5000, people[0].img);
    }
}
let aliseBtn= document.querySelector("#Alise");
aliseBtn.onclick = function(){ newChat(people[1]); ;
     
    inputBtn.onclick=function(){
        mymsg= document.createElement('div'); mymsg.setAttribute('class','mymessage'); mymsg.setAttribute('id','mymessage2');
        let inputTxt=document.querySelector(".input__text");
        let newMsg= document.createElement('p');
        newMsg.textContent=inputTxt.value;
        newMsg.setAttribute('class','myMessage');
        document.querySelector('#my__mes').appendChild(mymsg);
        document.querySelector('#mymessage2').appendChild(newMsg);
        setTimeout(getMsg, 5000, people[1].img);
    }
    } 
let kateBtn= document.querySelector("#Kate");
kateBtn.onclick = function(){ newChat(people[2]);
     
    inputBtn.onclick=function(){
        let inputTxt=document.querySelector(".input__text");
        let newMsg= document.createElement('p');
        newMsg.textContent=inputTxt.value;
        newMsg.setAttribute('class','myMessage');
        document.querySelector('#mymessage2').appendChild(newMsg);
        setTimeout(getMsg, 5000, people[2].img);
    }}
let billBtn= document.querySelector("#Bill");
billBtn.onclick = function(){ newChat(people[3]);
    inputBtn.onclick=function(){
        let inputTxt=document.querySelector(".input__text");
        let newMsg= document.createElement('p');
        newMsg.textContent=inputTxt.value;
        newMsg.setAttribute('class','myMessage');
        document.querySelector('#mymessage2').appendChild(newMsg);
        setTimeout(getMsg, 5000, people[3].img);}}
   
  
let searchBtn=document.querySelector('.sidebar__btn');



searchBtn.onclick=function(){
   
let subStr=document.querySelector('.sidebar__input').value;


let i=0;
do {
  
    document.querySelector(people[i].id).style.order="0";
    if(people[i].name.toLowerCase().includes(subStr.toLowerCase())){
    document.querySelector(people[i].id).style.order ='-1';
    }
    i++;
    
}while(i<people.length)
}

fetch('https://api.chucknorris.io/jokes/random').then((res)=>res.json()).then((data)=>setInfo(data));
let chuckMsg= document.createElement('p');
function setInfo(value){
   
    chuckMsg.textContent=value.value;
}

//from chack
function getMsg(pict){
    let img=document.createElement('img');img.setAttribute('src', pict);img.setAttribute('class','message__icon');img.setAttribute('id','chIcon');
   let divInner=document.createElement('div');divInner.setAttribute('class', 'messsage__text');divInner.setAttribute('id','chMsgg');
    document.querySelector('#chMsg').appendChild(img);
    document.querySelector('#chMsg').appendChild(divInner);
    divInner.appendChild(chuckMsg);
    let date=new Date();
    let time=document.createElement('span');time.textContent=date.getHours()+':'+date.getMinutes();
    document.querySelector('#chMsg').appendChild(time);
  }


function removee(){
    if(document.querySelector('#chMsgg')!=null||document.querySelector('#chIcon')!=null||document.querySelector('#mymessage2')!=null){
     document.querySelector('#chMsgg').remove();
     document.querySelector('#chIcon').remove();
     document.querySelector('#mymessage2').remove();
    }else return 0;
}



