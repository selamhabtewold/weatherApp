

let loc = document.getElementById("location");
let tempValue = document.getElementById("temp-value");
let climate = document.getElementById("climate");

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

let iconSpan = document.getElementById('tem-icon');
 iconSpan.style.visibility ='hidden';


searchBtn.addEventListener('click', ()=>{

    getWeather(searchInput.value);
})


  function changeIcon(newClass) {
    let iconSpan = document.getElementById('tem-icon');
    iconSpan.classList.remove('fa-cloud');
    iconSpan.classList.add(newClass); 
    iconSpan.style.visibility ='visible';

}


 async function getWeather(city){

    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=932f05b733519c6ad98790397f60c46c&units=metric`);
    if(res.status == 404) {
       alert("data not found!")
    }

    var data = await res.json();
    console.log(data);
    
   tempValue.innerText =data.main.temp;
   loc.innerText =data.name;
   climate.innerText =data.weather[0].main; 
   
   

   if(data.weather[0].main == "Clouds")
   {
    changeIcon('fa-cloud');
   } else if( data.weather[0].main== "Rain")
   {
   changeIcon('fa-cloud-rain');


   }else if( data.weather[0].main == "Sunny")
   {
    changeIcon('fa-sun-bright');

   }

   else if(data.weather[0].main == "Clear")
   {

    changeIcon('fa-cloud-sun');

   }
   
   else if(data.weather[0].main == "Snow")
   {

    changeIcon('fa-snowflake');

   }
   
   else
   {

    changeIcon('fa-sun');

   }
}


getWeather(searchInput.value);





const video = document.getElementById('video-background');
video.playbackRate = 0.5; // Adjust the value to slow down or speed up the playback

// Example usage to change the playback speed dynamically
function changePlaybackSpeed(speed) {
  video.playbackRate = speed;
}

// Call the function with the desired speed (e.g., 0.5 for half speed)
changePlaybackSpeed(0.10);