const nav=document.querySelector('.nav')
const hamburger=document.querySelector('.hamburger')
const downloadResume=document.querySelector('.resume')
const readMoreButton=document.querySelector(".read-more")
const extraInf=document.querySelector(".extra-inf")
const InternCertificate=document.querySelector('.intern')
const HTMLCSSCertificate=document.querySelector('.html-css')
const JavascriptCertificate=document.querySelector('.javascript')
hamburger.addEventListener('click',()=>{
    nav.classList.toggle('open')
    hamburger.classList.toggle('hamburger-open')
})
downloadResume.addEventListener('click',()=>{
    const a=document.createElement('a')
    a.href="Resume-tcs.pdf";
    a.document="Resume-tcs.pdf";
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
  HTMLCSSCertificate.addEventListener('click',()=>{
    const a=document.createElement('a')
    a.href="certificates/html and css.pdf";
    a.document="certificates/html and css.pdf";
    a.target = '_blank';
    document.body.appendChild(a)
    a.click();
    document.body.removeChild(a);
})
  JavascriptCertificate.addEventListener('click',()=>{
    const a=document.createElement('a')
    a.href="certificates/javascript certificate.pdf";
    a.document="certificates/javascript certificate.pdf";
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