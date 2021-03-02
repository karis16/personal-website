
/*Í html gerðum við onclick = toogleMenu(). Það er bara einhver class og síðan erum við að gera fallið toogleMenu onclick er innbyggður classi sem segir hvort aðilinn hafi verið að ýta á merkið okkar. */
/*
Ókei ég skil þetta svona:
Ef ég ýti á takkan þá gerist eftirfarandi:
1.	Html skráinn segir javascript að keyra toogleMenu()
2.	Javascript keyrir 
3.	isMenuShowing er false þ.a. í fallinu toogleMenu() þá förum við inní else-lykkjuna sem segir fallinu openMenu() fallinu að keyra.
4.	openMenu() fallið prentar út “Opened menu” og endurskrifar isMenuShowing sem true.
5.	Þ.a. Núna þegar við ýtum aftur á takkan á vefsíðunni þá er það sem breytist er að isMenuShowing er núna true og þá í fallinu toogleMenu() förum við í if lykkjuna því hún er sönn.
*/

const menuButton = document.getElementById("menu-button")
const menu = document.getElementById("menu")
const mainSection = document.getElementById("main-section")

const home = document.getElementById("home") /*HTML div id="home" */
const projects = document.getElementById("projects")
const about = document.getElementById("about")
const contact = document.getElementById("contact")
 
let currentPage = home;


let isMenuShowing = false; 


handleRefresh();


function handleRefresh(){
    const prevPageID = sessionStorage.getItem("pageID")

    if (prevPageID) {
        [home, projects, about, contact].forEach(section => {
            if (section.id === prevPageID)
                changePage(section);
        });
    }
}


function toogleMenu() {
    if (isMenuShowing) 
        closeMenu();
    else
        openMenu(); 
}

function closeMenu() {
    /*console.log("Closed menu");*/
    menuButton.classList = "fa fa-bars fa-4x"

    /*Felum innihaldið í menu*/
    menu.style.display = "none"


    /* Viljum að allt verði aftur eðlilegt. s.s ekki dofið/dökkt */
    mainSection.style.opacity = "1"


    isMenuShowing = false; 

}

function openMenu() {
    /*Breytum hvaða classa menu takkinn er með(breytum útlitinu).
        console.log("Opened menu"); */
    menuButton.classList = "fa fa-times fa-4x"

    /*Þegar ég opna menu þá byrti ég innihaldið */
    menu.style.display = "flex"


    /*Viljum að allt dofni þegar við opnum */
    mainSection.style.opacity = "0.3"

    isMenuShowing = true; 

}


function showHomePage() {
    changePage(home);
}

function showProjectsPage(){
    changePage(projects)
}
function showAboutPage() {
    changePage(about)
}
function showContactPage(){
    changePage(contact)
}

function changePage(newPage) {
    if (currentPage !== newPage){
        currentPage.style.display = "none"; /*Felum gömlu síðuna */
        newPage.style.display = "block"; /*Byrtum nýju síðuna */
        currentPage = newPage; /*Síðan sem við erum á núna er þá nýja síðan */
    }
    closeMenu();

    sessionStorage.setItem("pageID", currentPage.id);
}


