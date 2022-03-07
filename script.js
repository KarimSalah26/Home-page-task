window.onscroll = function() {myFunction1()};

function myFunction1() {
  if ( document.documentElement.scrollTop > 450) {    
         document.getElementById("navhead").classList.replace("bg-transparent","bg-blue");   
  }else{
    document.getElementById("navhead").classList.replace("bg-blue","bg-transparent");
      }}









