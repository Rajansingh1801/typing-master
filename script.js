const setofWord = [
"In the early medieval era, Christianity, Islam, Judaism, and Zoroastrianism put down roots on India's southern and western coasts.",
"India has been a federal republic since 1950, governed in a democratic parliamentary system. It is a pluralistic, multilingual and multi-ethnic society.",
"In the 15th century, the Vijayanagara Empire created a long-lasting composite Hindu culture in south India.",
"India is a nuclear-weapon state, which ranks high in military expenditure. It has disputes over Kashmir with its neighbours, Pakistan and China, unresolved since the mid-20th century."
];


// const setofWord = [
//     "Kaali Kaali Zulfon Ke Phande Na Dalo Hamein Zinda Rehne Do, Ai Husn-walo",
//     "Na Chhero Hamein, Hum Sataaye Hue Hain Bahut Zakhm Seene Pe Khaye Hue Hain",
//     "Sitam Gar Ho Tum Khoob Pehchaante Hain Tumhari Adaon Ko Hum Jaante Hain",
//     "Daga-baaz Ho Tum Sitam Dhane Wale Fareb-e-muhaabat Mein Uljhaane Wale",
//      "Ye Rangeen Kahani Tumhi Ko Mubarak Tumhari Jawani Tumhi Ko Mubarak",
//      "Ye Rangeen Kahani Tumhi Ko Mubarak Tumhari Jawani Tumhi Ko Mubarak",
//      "Hamari Taraf Say Nigahein Hata Lo Hamein Zinda Rehnay Do Ai Husn Walo",
//      "Aankh uthi mohabbat ne angdaai li Dil ka sauda hua chandni raat mein Ho teri nazaron ne kuch aisa jaadu kiya Lut gaye hum toh pehli mulaqaat mein",
//      "Paanv rakhna na zameen parJaan ruk ja tu ghadi bhar Thode taare toh bichha doon Main tere vaaste",
//      "Qisse mohobbat ke Hai jo kitaabon mein Sab chaahta hoon main Sang tere dohraana",
//      "Mere jaisa ishq mein pagal Phir mile ya na mile kal Sochna kya haath ye de de Mere haath mein"
// ];


const msg=document.getElementById('msg');
const typewords=document.getElementById('mywords');
const btn=document.getElementById('btn');
const result=document.querySelector('#result');
const correct=document.querySelector('#correct');
const error=document.querySelector('#error');
const acc=document.querySelector('#acc');

let starttime,endtime;

// first step to declar that things

btn.addEventListener('click',function(){
    if(this.innerText=='Start'){
        typewords.disabled=false;
        playGame();
    }
    else if(this.innerText=="Done") 
    {
        typewords.disabled=true;
        btn.innerText = "Start";
        endplay();
    }
    }
    )


    // define playgame function

const playGame = () =>{
    let randomNumber=Math.floor(Math.random()*setofWord.length);
    msg.innerText=setofWord[randomNumber];
    let date=new Date();
    starttime=date.getTime();
    btn.innerText="Done";
}

            // define endpaly function 

// =()=>{} isequal to paranthesis header funtion

const endplay = () =>{    
    let date=new Date();
    endtime=date.getTime();
    let totalTime=((endtime - starttime)/1000);

    let totalStr = typewords.value;
    let wordcount = wordCounter(totalStr);

    let speed = Math.round((wordcount / totalTime) *60);
    let finalmsg = "⚡ Speed ▶  " +speed+ " words per minutes";
    result.innerText = finalmsg;

    finalmsg += comparewords(msg.innerText,totalStr);
}


// for count the word using wordcount

const wordCounter = (str) =>{
    let response = str.split(" ").length;
    return response;
}

// for checking correct word an error word

const comparewords = (str1,str2) =>{
let word1 = str1.split(" ");
let word2 = str2.split(" ");
let count = 0;
word1.forEach(function (item,index){
    if(item == word2[index]){
        count++;
    }
})
let correctword = "  correct ▶  " +count+ "   correct out of  " +word1.length+ " ";
correct.innerText = correctword;

let errorwords = (word1.length - count);
let errors= "  error is ▶  " +errorwords+ " ";
error.innerText = errors;

let accuracy=((count / (count + errorwords )) * 100);
console.log(accuracy);
let accur="  Accurecy is ▶" +accuracy+ " ";
acc.innerText=accur;
}

