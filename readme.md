<h2>Documentation</h2>
   <h3>Getting Started</h3>
   <p><strong>1. Unzip the contents of TurningGears.zip and place the files in their designated folders.</strong></p>
   <p><strong>2. Reference turninggears.js inside of your HTML file before the closing body tag:</strong></p> 
   <textarea class="textarea-small"><script type="text/javascript" src="js/turninggears.js"></script></textarea></p>

   <p><strong>3. Add the following snippet to your HTML file.</strong></p>

   <textarea><div class="gears">
    <div class="container">

	  <h1>Our gears are always turning.</h1>

      <div class="head boy">
	    <img class="cog-boy-1" id="cog-boy-1" src="images/cog_1.png">
	    <img class="cog-boy-2" id="cog-boy-2" src="images/cog_2.png">
	    <img class="cog-boy-3" id="cog-boy-3" src="images/cog_3.png">
	    <img class="cog-boy-4" id="cog-boy-4" src="images/cog_4.png">
      </div> <!-- .head .boy -->

	  <div class="head girl">
	    <img class="cog-girl-1" id="cog-girl-1" src="images/cog_1.png">
	    <img class="cog-girl-2" id="cog-girl-2" src="images/cog_2.png">
	    <img class="cog-girl-3" id="cog-girl-3" src="images/cog_3.png">
	    <img class="cog-girl-4" id="cog-girl-4" src="images/cog_4.png">
	  </div> <!-- .head .girl -->

      </div> <!-- .container -->
    </div> <!-- .gears --></textarea>

   <p><strong>4. Add the following snippet to your CSS file.</strong></p>
   <textarea>.gears {
	margin-top: 100px;
	position: fixed;
	margin: 0 auto;
	width: 100%;
	height: 100vh;
        text-align: center;
        z-index: 8;
}

.head {
	float: left;
	width: 47%;
	height: 450px;
	margin: 0 5%;
	padding: 0;
}

.boy {
	position: relative;
	width: 420px;
	background: url('../images/head_1.svg');
	background-size: 300px;
	background-repeat: no-repeat;
	background-position: center;
}

.girl {
	position: relative;
	width: 380px;
	background: url('../images/head_2.svg');
	background-size: 360px;
	background-repeat: no-repeat;
	background-position: center;
}

.cog-boy-1 {
	width: 100px;
	position: absolute;
	top: 25px;
	left: 165px;
}

.cog-boy-2 {
	width: 70px;
	position: absolute;
	top: 75px;
	left: 100px;
}

.cog-boy-3 {
	width: 50px;
	position: absolute;
	top: 121px;
	left: 161px;
}

.cog-boy-4 {
	width: 50px;
	position: absolute;
	top: 24px;
	left: 117px;
}

.cog-girl-1 {
	width: 100px;
	position: absolute;
	top: 30px;
	left: 130px;
}

.cog-girl-2 {
	width: 70px;
	position: absolute;
	top: 80px;
	left: 65px;
}

.cog-girl-3 {
	width: 50px;
	position: absolute;
	top: 126px;
	left: 125px;
}

.cog-girl-4 {
	width: 50px;
	position: absolute;
	top: 29px;
	left: 83px;
}</textarea>

   <h3>Smooth Scroll</h3>
   <p>turninggears.js works well with smoothscroll,js which can be downloaded <a href="https://github.com/cferdinandi/smooth-scroll" target=_blank>here</a>.</p>
   <h3>Customization</h3>
   <h4>Images</h4>
   <p>Currently, image color can only be changed by editing the .EPS files in Adobe Illustrator. I am working on making an SVG version that can be edited in CSS in the near future.</p> 
   <h4>Font</h4>
   <p>The font used in this demo is Avenir (font-weight: 400) and can be downloaded <a href="https://www.myfonts.com/fonts/linotype/avenir/" target="_blank">here</a>.</p>
   <h3>Troubleshooting</h3>
   <ol>
   <li>Make sure your internet connection is working.</li>
   <li>Make sure you are referencing JQuery in your HTML file.</li>
   <textarea class="textarea-small"><script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script></textarea>
   <li>Make sure turninggears.js is being properly referenced in your HTML file.</li>
   <li>Make sure the image files are properly referenced in both the HTML and CSS files.</li>
   </ol>
   <h3>Questions? Comments?</h3>
   <p>Please direct all inquiries to <a href="mailto:dana.werpny@gmail.com">dana.werpny@gmail.com</a>.</p>
