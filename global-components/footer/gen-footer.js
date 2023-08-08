/**
 * Brief:
 * Client Side script to generate the HTML && CSS for each page's footer 
 * 
 * Benefit of this script:
 * reduced code duplication by modifing the "template" in one place
 * 
 * limitations of this script:
 * Client must wait for the script to complete in order to get ANY footer content
 * 
 * Data Structures:
 * list of n<5 social media links
 * 
 * High level Layouts:
 * single col for mobile
 * two col for non-mobile
 * 
 */

genFooter();

 function genFooter(){
   genSocialSection();
    genContactSection();
}


function genSocialSection(){
 // get the html we want to append to
 let footerSection = document.querySelector('#global-footer');

 // document fragment to add our generated footer content to
 let generatedFooter = new DocumentFragment();

 // section element for the list of social media links
 let socialSection = document.createElement('section');
 socialSection.classList.add("social-links");
 generatedFooter.appendChild(socialSection);

 // div element for each of our social media platforms. This will act as our link's wrapper
 let socialLink = document.createElement("div");
 socialLink.classList.add('social-link')
 // add the desired href to the div
 let link = document.createElement("a");
 link.classList.add('fb-link')
 link.target = "_blank";
 link.href = "https://www.facebook.com/profile.php?id=100094460332928";
//  socialLink.appendChild(link);

//  append link to the div
 socialLink.appendChild(link)
//  append div to the section
 socialSection.appendChild(socialLink);

 footerSection.appendChild(generatedFooter)
}

function genContactSection(){
    let footerSection = document.querySelector('#global-footer');
    let contactSection = document.createElement('div');
    contactSection.classList.add('contact-section');

    let mailTOLink = document.createElement('a');
    mailTOLink.href = "mailto:greendaletrailassociation@gmail.com";
    mailTOLink.innerText = "Email Us at greendaletrailassociation@gmail.com"

    contactSection.appendChild(mailTOLink);
    // Email Us at greendaletrailassociation@gmail.com
    footerSection.appendChild(contactSection);
}