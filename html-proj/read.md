# Front End Web Development :- CTEC3905
##P14179083

##GitHub Pages Link 
https://bhaumikeduaccount.github.io/

# Introduction
This is a personal profile website regarding the things i have done/achieved in education and my career interests.

It allows the browser of the site to get an idea of who i am what i would like to choose in-terms of my career path in 
the future. The site outlines some of my key skills regarding my career choice of web development and what projects i have done regarding them which show my potential.
Some of the information is which i would have liked to add was left out due to confidentiality and privacy for me. 

The core technology/languages used for development of this project are JS/CSS/HTML the site has no backend 
thus some of the forms are not functional but are implemented as an outline fot a concept of how it would look
with a backend. The site is simple to browse and is responsive.   
# Design
The initial choice was to develop a Blog system with the use of Laravel framework with template technology for its front end.
However, once discussed with lecturer i was given advice to do a project on some thing simple which is elegant and allows to show my understanding of the three technologies.

Thus, first stage was to develop a sketch/mock up of the site and once discussed with lecturer a sketch was developed which will be either uploaded on GitHub or given in. 
The actual mock-up is in a PDF file thus, i am unable to show it using a markdown file however can be viewed on any browser or system.
The lecturer suggested on making a project which considered the new trend and technology, thus for the site a single page development chosen.
##Section one Welcome
The mock-up will allow you to show the thinking of the process for a single page personal site profile, the first design choice was to do a welcome part introducing the site it self.
For this a simple header with a caption was used for this. A simple background was used for a pop-out effect for the text to be viewed easy and attract browsers (user) attention.

With a top navigation and/or a logo which i scraped for development. The second choice which needed to be made was how to show users my current work.


##Section second Project

For this a slide show was chosen with a click able redirection for a user which was adapted from W3Schools slide show tutorial 
the references for all aid will be at the end of this file. 
##Section three Skill
For third section a skill representation was used to show my skills
regarding the technologies and languages i know or have experience in. This part was done through skill bar representation for each of the technology/languages i knew.
##Section four Key interests
For the section four i used a Fontawsome icons representing each key interests of careers i like and gave a brief description of them. 
For this i used a grid lay out for a easy flowing layout. This choice was also made for easy responsive layout keeping mobile view in mind.
##Section five Project Description
This section is a redirection for when a browser clicks an image in project section and will be re-directed to the representative description of the project.
Again for this part a simple centered container layout was chosen to keep to the same theme of the site.
##Section six Contact / small Section About 
Last section and a sub-section was to make a simple email contact me function input which allowed when with a backend to send email for contacting.
The subsection or mini section was just a small addition for information for the browser of who i am and what i do for now/study.

## Testing
For testing of the site a manual inspection/testing was done for responsiveness, loading of the features and its technologies used.

For example: The back to top feature of the site had to be tested for small device view for its compatibility and effectiveness.
The code bellow if from the JS for back to top and checks if the site was scrolled more than 30 px than show the but if not than do not show the button.
This had to be tested for mobile and screen allowing a full compatibility was essential,
as it is vital that users viewing in small display do not struggle for browsing the site and this would save their time and add in experience.

The code can be seen in assets/js folder.

<br>
<br>
 back to top() {

    if ($(this).scrollTop() >= 30) {        // If page is scrolled more than 30px show button if not hide
        $('#back-top').fadeIn(100);
    } else {
        $('#back-top').fadeOut(200);
    }

The second thing that was essential to test was to test the navigation, boxing properties and break points are some of which had to be tested for functionality for HTML and CSS.
The use of list and its layout needed to be amended for a better view a peek of this is code bellow which sets new and removes its listing style. 

The site had to be boxed for its layout and the break points/view ports had to be tested so they did trigger at relevant sizes of the responsive site.
More for full HTML and CSS view index.html and style.css.

CSS
------------------------------------------------------------------------------------------------------------------------
```css   
 ul,nav{
 	list-style: none;
 }
 
 *{
 	margin: 0;
 	padding: 0;
 	box-sizing: border-box;
 }
 
 
@media screen and (max-width: 1000px){

	section{
		padding: 100px 50px;
	}

}

@media screen and (max-width: 600px){

	section{
		padding: 80px 30px;
	}

}
```

HTML5 
-----------------------------------------------------------------------------------------------------------------------
```HTML
{

<meta name="viewport" content="width=device-width, initial-scale=1">

 <nav>
            <ul>
			<li><a href="#home">Home</a></li>
			<li><a href="#project">Projects</a></li>
			<li><a href="#skill">Skill</a></li>
			<li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
		</nav>
		}}
```
## Reference
Skill Bars:
https://codeconvey.com/pure-css3-responsive-animated-skills-bar/
https://www.w3schools.com/howto/howto_css_skill_bar.asp

Load Animation/scrolling:
W3School:https://www.w3schools.com/howto/howto_css_loader.asp
https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll

Background/Images:
http://guilhermecruz.deviantart.com/art/HTML-coder-Wallpaper-182550976
http://creolab.hr/2013/07/image-manipulation-in-laravel-4-with-imagine/
http://logos.wikia.com/wiki/File:Java-logo.jpg
https://www.google.co.uk/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Fadvisordesigns.com%2Fwp-content%2Fuploads%2F2013%2F08%2Fwebsite-security.jpg%3Fresize%3D1047%252C456&imgrefurl=http%3A%2F%2Fadvisordesigns.com%2Fblog%2F&docid=sh_uymNY7wTRiM&tbnid=dzbpnNIh2PGVeM%3A&vet=1&w=1047&h=456&hl=en&bih=864&biw=1745&ved=0ahUKEwiI34Cg4MvSAhWFL8AKHVsEBIMQMwgpKA8wDw&iact=mrc&uact=8

Last image was not found: Taken from and Acknowledgment to creator from google images.

## Compatibility
The site is compatible with Chrome/FireFox and Edge.

There are some issues regarding navigation for Firefox and Edge which need to be sorted out for a flowing site but dues 
to shortage of time it was not addressed. 


 
##Improvements/Criticism
Improvements
------------------------------------------------------------------------------------------------------------------------
Definitely regarding the site there are may improvements i would make some of which are:
First i would add a full Bootstrap and redesign it with regards to navigation and flow of the site.
Second I would use a framework with a template tool to add more functionality for the site and allow it to have a working form.
Third would be to make it compatible with different browser with custom rules for its layout.

Criticism
------------------------------------------------------------------------------------------------------------------------
With the site turning out as i planed i think if i would have chance to redo it with a framework (backend)
 would be my only criticism for it as it is simple and doesn't have a back end. Moreover, maybe have some more themes which the user
 can change with a JS which allows the user to choose through setting their preferred theme 
 or a popup at loading for them to choose would allow for a better browsing experience.

#Tools used
 PHPstorm was used for this project along with chrome and firefox browsers for inspection and testing.