const home = document.getElementById("home");
const page_home = document.getElementById("page-home");

const experiences = document.getElementById("experiences");
const page_experiences = document.getElementById("page-experiences");

const projets = document.getElementById("projets");
const page_projets = document.getElementById("page-projets");

const contact = document.getElementById("contact");
const contact_up = document.getElementById("contact-up");
const page_contact = document.getElementById("page-contact");

const submit = document.getElementById("submit");
const check = document.getElementById("check");

// Logiciels
const logiciels = document.getElementById("logiciels");

const html = document.getElementById("html");
const html_text = document.getElementById("html-text");
const bouton_html = document.getElementById("bouton-html");


const css = document.getElementById("css");
const css_text = document.getElementById("css-text");
const bouton_css = document.getElementById("bouton-css");


const javascript = document.getElementById("javascript");
const javascript_text = document.getElementById("javascript-text");
const bouton_javascript = document.getElementById("bouton-javascript");


const react = document.getElementById("react");
const react_text = document.getElementById("react-text");
const bouton_react = document.getElementById("bouton-react");


const git = document.getElementById("git");
const git_text = document.getElementById("git-text");
const bouton_git = document.getElementById("bouton-git");


const visual_studio_code = document.getElementById("visual-studio-code");
const visual_studio_code_text = document.getElementById("visual-studio-code-text");
const bouton_visual_studio_code = document.getElementById("bouton-visual-studio-code");



/////////////////////////////////////////////////
// mouse over
home.addEventListener("mouseover", () => {
    page_home.style.display = "block";
    page_experiences.style.display = "none";
    page_projets.style.display = "none";
    page_contact.style.display = "none"
    contact_up.style.display = "none";
    page_experiences.style.backgroundColor = "";
    page_projets.style.backgroundColor = "";
    document.body.style.backgroundColor = "";
});

// // mouse leave
// home.addEventListener("mouseleave", () => {
//     // page_home.style.display = "block";
//     // // page_experiences.style.backgroundColor = "white";
//     // page_home.style.display = "none";
// });




/////////////////////////////////////////////////
// mouse over
experiences.addEventListener("mouseover", () => {
    page_experiences.style.display = "block";
    page_home.style.display = "none";
    page_projets.style.display = "none";
    page_contact.style.display = "none"
    contact_up.style.display = "none";
    page_projets.style.backgroundColor = "";
    document.body.style.backgroundColor = "";
    projets.style.color = "";
    contact.style.color = "";
});

// // mouse leave
experiences.addEventListener("mouseleave", () => {
    page_experiences.style.display = "block";
    page_home.style.display = "none";
    experiences.style.color = "yellow";
});



/////////////////////////////////////////////////
// mouse over
projets.addEventListener("mouseover", () => {
    page_projets.style.display = "block";
    page_home.style.display = "none";
    page_experiences.style.display = "none";
    page_experiences.style.backgroundColor = "";
    document.body.style.backgroundColor = "";
    page_contact.style.display = "none"
    contact_up.style.display = "none";
    experiences.style.color = "";
    contact.style.color = "";
});

// mouse leave
projets.addEventListener("mouseleave", () => {
    page_projets.style.display = "block";
    page_home.style.display = "none";
    projets.style.color = "red";
});



/////////////////////////////////////////////////
// mouse over
contact.addEventListener("mouseover", () => {
    contact_up.style.display = "block";
    contact_up.style.color = "red";
    document.body.style.backgroundColor = "";
    contact.style.color = "lime";
    
});

// mouse leave
contact.addEventListener("mouseleave", () => {
    contact_up.style.display = "block";
    contact_up.style.backgroundColor = "white";
    contact.style.color = "";
});



//////////////////Experiences///////////////////////////////

logiciels.addEventListener("mouseleave", () => {
    html_text.style.display = "";
    css_text.style.display = "";
    javascript_text.style.display = "";
    react_text.style.display = "";
    git_text.style.display = "";
    visual_studio_code_text.style.display = "";
    bouton_html.style.display = "block";
    bouton_css.style.display = "block";
    bouton_javascript.style.display = "block";
    bouton_react.style.display = "block";
    bouton_git.style.display = "block";
    bouton_visual_studio_code.style.display = "block";
});


/////////////////////CLIQUE////////////////////////////////////////////


function homeBtn() {
    document.body.style.backgroundColor = "black";
    location.reload();
}

function experiencesBtn() {
    page_experiences.style.backgroundColor = "yellow";
    page_experiences.style.display = "block"
    page_home.style.display = "none";
}

function projetsBtn() {
    page_projets.style.backgroundColor = "white";
}

function contactBtn() {
    contact_up.style.backgroundColor = "lime";
    contact_up.style.display = "block"
    page_contact.style.display = "block"
    page_home.style.display = "none";
    page_experiences.style.display = "none";
    page_projets.style.display = "none";
}




function htmlBtn() {
    logiciels.style.backgroundColor = "rgb(255, 111, 0)";
    html_text.style.display = "block";
    bouton_css.style.display = "none";
    bouton_javascript.style.display = "none";
    bouton_react.style.display = "none";
    bouton_git.style.display = "none";
    bouton_visual_studio_code.style.display = "none";
}

function cssBtn() {
    logiciels.style.backgroundColor = "rgb(36, 36, 125)";
    css_text.style.display = "block";
    bouton_html.style.display = "none";
    bouton_css.style.display = "block";
    bouton_javascript.style.display = "none";
    bouton_react.style.display = "none";
    bouton_git.style.display = "none";
    bouton_visual_studio_code.style.display = "none";
}

function jsBtn() {
    logiciels.style.backgroundColor = "yellow";
    javascript_text.style.display = "block";
    bouton_html.style.display = "none";
    bouton_css.style.display = "none";
    bouton_javascript.style.display = "block";
    bouton_react.style.display = "none";
    bouton_git.style.display = "none";
    bouton_visual_studio_code.style.display = "none";
}

function reactBtn() {
    logiciels.style.backgroundColor = "rgb(50, 90, 176)";
    react_text.style.display = "block";
    bouton_html.style.display = "none";
    bouton_css.style.display = "none";
    bouton_javascript.style.display = "none";
    bouton_react.style.display = "block";
    bouton_git.style.display = "none";
    bouton_visual_studio_code.style.display = "none";
}

function gitBtn() {
    logiciels.style.backgroundColor = "rgb(255, 111, 0)";
    git_text.style.display = "block";
    bouton_html.style.display = "none";
    bouton_css.style.display = "none";
    bouton_javascript.style.display = "none";
    bouton_react.style.display = "none";
    bouton_git.style.display = "block";
    bouton_visual_studio_code.style.display = "none";
}

function visualStudioCodeBtn() {
    logiciels.style.backgroundColor = "rgb(19, 155, 208)";
    visual_studio_code_text.style.display = "block";
    bouton_html.style.display = "none";
    bouton_css.style.display = "none";
    bouton_javascript.style.display = "none";
    bouton_react.style.display = "none";
    bouton_git.style.display = "none";
    bouton_visual_studio_code.style.display = "block";
}

function illustratorBtn() {
    logiciels.style.backgroundColor = "rgb(53, 30, 30)";
    illustrator_text.style.display = "block";
    bouton_html.style.display = "none";
    bouton_css.style.display = "none";
    bouton_javascript.style.display = "none";
    bouton_react.style.display = "none";
    bouton_git.style.display = "none";
    bouton_visual_studio_code.style.display = "none";
}

function flStudioBtn() {
    logiciels.style.backgroundColor = "rgb(255, 111, 0)";
    fl_studio_text.style.display = "block";
    bouton_html.style.display = "none";
    bouton_css.style.display = "none";
    bouton_javascript.style.display = "none";
    bouton_react.style.display = "none";
    bouton_git.style.display = "none";
    bouton_visual_studio_code.style.display = "none";
}


function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        message: document.getElementById("msg").value
    };

    emailjs.send("service_tgxsifm", "template_iw7slcd", tempParams)
        .then(function(res) {
            console.log("success", res.status);
        })

        submit.style.display = "none";
        check.style.display = "block";

    }