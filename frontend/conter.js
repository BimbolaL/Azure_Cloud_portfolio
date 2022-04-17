//when the content is loaded
window.addEventListener('DOMContentLoaded', (event)=>{
    getVisitorCount();
})
const counterApi = '';

const getVisitorCount = () =>{
    let count = 30;
    fetch(counterApi).then(response =>{
        return response.json()
    }).then(response => {
        console.log("Website count Api");
        count = response.count;
        document.getElementById("counter").innerText = count;
//if there is error, grab the error
    }).catch(function(error){
        console.log(error);
    });
    return count;
}
