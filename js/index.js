

var button= document.getElementById("press");
var notePara= document.getElementById("note");
var writerPara= document.getElementById("writer");


var quotes=[
  
   {notes: `"U looked the door,butshodow is still inside"`, writer:"Edgar Allan Poe"},
    {notes:`"Every time i delete the photo , It still exist in my phone"`, writer:"Stephen King " },
       {notes:`"The whispers in the dark stopped,now the silence scares me more."`, writer:"H.P."  },
       {notes:`"Some one calling me , but its my own number"`, writer:"Lovecraft"  }, 
       {notes:`" Founding note on my book that said dont turn around"`, writer:"Edgar Allan Poe"  }, 
       {notes:`" The last thhing i saw was my reflection smiling at me before the liights went out"`, writer:"H.P."  }, 
]




// function press(){
//     var randomquote;
//     randomquote = Math.floor(Math.random() * quotes.length  );
   
//       notePara=(quotes[randomquote].notes);
//       document.getElementById("note").innerHTML = notePara
      
//       writerPara=(quotes[randomquote].writer);
//       document.getElementById("writer").innerHTML = writerPara
 
// };


lastQuote= -1

 function press(){
    var randomQuote;
  randomQuote = Math.floor(Math.random() * quotes.length   );
 if(randomQuote===lastQuote){

 randomQuote=quotes.length + 1;
 } 
 notePara=(quotes[ randomQuote].notes);
    document.getElementById("note").innerHTML = notePara
   
    writerPara=(quotes[ randomQuote].writer)       
       document.getElementById("writer").innerHTML = writerPara
  
   
 }


//  function press(){
// for(i=0; i<quotes.length; i++){
//    var randomQuote;
//    randomQuote = Math.floor(Math.random() * quotes.length  );
//    notePara=(quotes[ randomQuote].notes);
//    document.getElementById("note").innerHTML = notePara
   
//    writerPara=(quotes[ randomQuote].writer)
            
//       document.getElementById("writer").innerHTML = writerPar
// }
// if(randomQuote===lastQuote){
//    randomQuote=quotes.length + 1
// }

//  }