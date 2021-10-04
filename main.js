

(function(){
    "use strict";    

    var date = document.getElementById("date");
    function time() {
        date.innerText = new Date().toLocaleString();        
    }
    setInterval(time,1000);

    async function createMultipleBlocks() {
        for (let i = 0;i<10;i++) {
            let copycontent = $("#parent").clone();
            copycontent.attr("id","parent"+i);
            
            $('.container').append(copycontent);
        }

       await fetch("https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia?limit=11", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "trivia-by-api-ninjas.p.rapidapi.com",
                "x-rapidapi-key": "851409302cmsh4d38534dc6383fcp1991d1jsn4fc77d351787"
            }
        })
        .then(response => response.json())
        .then(response => {
            // let i = 3;
            // console.log(response[0].question)

            var variable = document.getElementById("contain");
            var l = variable.childNodes;
            var c = 0;
            for (let i = 0;i<13;i++) {
                if( i == 2 || i == 0){
                    continue;
                }
                l[i].childNodes[1].childNodes[1].innerText = "Q"+(c+1)+". "+ response[c].question;
                l[i].childNodes[1].childNodes[5].setAttribute("data-bs-target","#answer"+i);     
                l[i].childNodes[1].childNodes[5].setAttribute("aria-controls","answer"+i);
                l[i].childNodes[3].id = "answer"+i;
                l[i].childNodes[3].childNodes[1].innerText = response[c].answer;
                c++;
            }
            // console.log(response);
            
        })
        .catch(err => {
            console.error(err);
        });

    }
    createMultipleBlocks();
}());