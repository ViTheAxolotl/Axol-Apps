"use strict";


let log;
let isLoggedIn = false;
let nav = document.getElementsByTagName("nav");
let url = window.location.href.split("/");
let params = document.body.getElementsByTagName('script');
let query = params[0].classList;
let parentFolder = query[0];
let wholeChars = {};
let name;
let footer = document.getElementById("footer");
let body = document.getElementsByTagName("body");
let imageLocation;
let jsaLocation;
let mainLocation;

if(parentFolder == "noParent")
{
    mainLocation = "";
    imageLocation = "images/";
}

if(parentFolder == "downOne")
{
    mainLocation = "../";
    imageLocation = "../images/";
}

navBarSetup();

function init()
{
    copyrightSetup();
}

function navBarSetup()
{
    nav[0].innerHTML = `<div class="container-fluid">
        <a class="navbar-brand" href="${mainLocation}index.html"><img src = "${imageLocation}axolotl.png" title = "Axolotl" alt = "Axolotl" width = "70" height = "70"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
            <ul class="navbar-nav me-auto my-2 my-lg-0 center" style="--bs-scroll-height: 100px;"> 
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="${mainLocation}index.html">Portfolio</a></li>
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="https://infused.axol-apps.com/index.html">Infused Campaign</a></li>    
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="https://sheets.axol-apps.com/index.html">Standalone Character Sheets</a></li>);    
            </ul>
    </div>`;
}

function copyrightSetup()
{
    footer.innerHTML += `<h6>Copyright &copy; Vi Snyder ${new Date().getFullYear()}</h6>`;
}

init();