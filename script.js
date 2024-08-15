const nav=document.querySelector('.nav')
const hamburger=document.querySelector('.hamburger')
const downloadResume=document.querySelector('.resume')
const readMoreButton=document.querySelector(".read-more")
const extraInf=document.querySelector(".extra-inf")
const InternCertificate=document.querySelector('.intern')
const MetaCertificate=document.querySelector('.meta')

hamburger.addEventListener('click',()=>{
    nav.classList.toggle('open')
    hamburger.classList.toggle('hamburger-open')
})
downloadResume.addEventListener('click',()=>{
    const a=document.createElement('a')
    a.href="My-resume.pdf";
    a.document="My-resume.pdf";
    a.target = '_blank';
    document.body.appendChild(a)
    a.click();
    document.body.removeChild(a);
})
readMoreButton.onclick = () => {
    if (extraInf.classList.contains('hidden')) {
      extraInf.classList.remove('hidden');
      readMoreButton.innerText = 'Hide';
    } else {
      extraInf.classList.add('hidden');
      readMoreButton.innerText = 'Read More';
    }
  };
  InternCertificate.addEventListener('click',()=>{
    const a=document.createElement('a')
    a.href="certificates/internship.pdf";
    a.document="certificates/internship.pdf";
    a.target = '_blank';
    document.body.appendChild(a)
    a.click();
    document.body.removeChild(a);
})
  MetaCertificate.addEventListener('click',()=>{
    const a=document.createElement('a')
    a.href="certificates/meta-certificate.pdf";
    a.document="certificates/meta-certificate.pdf";
    a.target = '_blank';
    document.body.appendChild(a)
    a.click();
    document.body.removeChild(a);
})


window.addEventListener('scroll',reveal)

function reveal(){
  var reveals=document.querySelectorAll('.reveal')
  for(var i=0;i<reveals.length;i++){
    var windowHeight=window.innerHeight
    var revealTop=reveals[i].getBoundingClientRect().top;
    var revealPoint=150;

    if(revealTop<windowHeight-revealPoint){
      reveals[i].classList.add('active')
    }
    else{
      reveals[i].classList.remove('active')
    }
  }
}
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});