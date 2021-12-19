    
    const setofWord = [
        "The Mauryan empire encompassed most of the Indian subcontinent from the end of the 4th century BCE to the beginning of the 2nd century BCE",
        "The succession of Mauryan rulers after Asoka is not certain, since genealogies recorded surviving texts differ.",
        "Bindusara further extended the boundaries of the Mauryan empire to the Deccan peninsula of southern India before dying in 272 BCE.",
        "These inscriptions were written in various dialects of Prakrit vernaculars, and are the earliest examples of writing in the Brahmi and Kharosthi scripts."

    ];
    
    
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
    let correctword = "👍 correct ▶  " +count+ "   correct out of  " +word1.length+ " ";
    correct.innerText = correctword;
    
    let errorwords = (word1.length - count);
    let errors= "😡 error is ▶  " +errorwords+ " ";
    error.innerText = errors;

    let accuracy=((count / (count + errorwords )) * 100);
console.log(accuracy);
let accur=" accurecy is ▶" +accuracy+ " ";
acc.innerText=accur;
    }
    
    
    
    
    
    
    