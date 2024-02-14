try {
    const readMore=document.getElementById('readMore');
const aftrRdMore =document.getElementById('aftrRdMore')
    readMore.addEventListener('click' ,() =>{
        aftrRdMore.classList.toggle('disappear');
        readMore.style.display='none';
    })
} catch (error) {
    
}

// <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

// Attaching favicon to all pages
    const favLink=document.createElement('link');
    favLink.rel='shortcut icon';
    favLink.href='/assets/favicon.ico';
    favLink.type='image/x-icon';
    document.head.appendChild(favLink)
    const nav=document.getElementById('nav')

    // for x banner 
    const navContainer=document.createElement('div')
    navContainer.innerHTML="<li> <a href=/>Home</li>  <li> <a href=../>All Exams</li>";
    navContainer.classList.add('topnav')
    navContainer.classList.add('row')
    navContainer.querySelectorAll('li').forEach(e=>{
        e.classList.add('simple-list')    
    })

    nav.appendChild(navContainer)
   
    // appending the footer to each page of exam section 
    const footer = '<div class="footer row"><div class="foot-zero"><h2><i>CARREINE</i></h2></div><div class="ft-box column"><li class="simple-list">About Us</li><li class="simple-list">Career</li><li class="simple-list">Why Carreine</li><li class="simple-list">Contact Us</li><li class="simple-list">Plans</li></div><div class="ft-box column"><li class="simple-list">Youtube</li><li class="simple-list">LinkedIn</li><li class="simple-list">WhatsApp</li><li class="simple-list">X</li></div><div class="ft-box column"><li class="simple-list">LogIn</li><li class="simple-list">YourExams</li><li class="simple-list">New Update</li><li class="simple-list">Your Profile</li></div></div>';
    document.body.innerHTML+=footer;