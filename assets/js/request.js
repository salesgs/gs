(async function (){
  const response = await fetch('https://raw.githubusercontent.com/salesgs/js-developer-portfolio/main/data/profile.json');
  const data = await response.json(); //estruturação da informação em json
  domHtml(data);
})();//invoced function
function domHtml(params){
  const header = document.querySelector('.header');
    header.innerHTML = `<img 
              src="./assets/img/gabriel.jpg"
              alt="Foto do Gabriel Sales" 
              class="photo"
          >  
        <h1 class="title">${params.name}</h1>
        <div class="information">
          <p class="job">${params.job}</p>
          <p class="location">${params.location}</p>
          <p class="phone">
              <a href="https://api.whatsapp.com/send?phone=${params.phone}" target="_blank">Whatsapp</a>
          </p>
          <p class="email">
              <a href="mailto:${params.email}"target="_blank">email</a>
          </p>
        </div>`;
}