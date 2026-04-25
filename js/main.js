function openPicture(pictureName) {
  var i;
  var x = document.getElementsByClassName("picture");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(pictureName).style.display = "block";  
}

function openVideo(videoName) {
  var i;
  var x = document.getElementsByClassName("video");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(videoName).style.display = "block";  
}

function openSecrets(secretName) {
  var i;
  var x = document.getElementsByClassName("secret");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(secretName).style.display = "block";  
}


function textSwap() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "GaiaMod") {
    x.innerHTML = "Versolot";
  } else {
    x.innerHTML = "GaiaMod";
  }
}


////////////////////// Years
  document.getElementById("year").innerHTML = new Date().getFullYear();
  

////////////////////// Random Messages  
  	var msg = new Array();
msg[0] = "“Even the stars will fly out, should the world can be doomed?”";
msg[1] = "“Heavens are always upon us!”";
msg[3] = "“Only 60% of people are aware of the autists' habits of running around in circles.”";
msg[4] = "“This website is powered by a <a href='https://www.walmart.com/'>Walmart store</a>! Just kidding.”";
msg[5] = "“Internet is full of surprises. Sometimes it isn't.”";
msg[6] = "“One psychic power is enough to make anything happen. Plain and simple!”";
msg[7] = "“Peppers? Um, they don't do my spicy pizza, right?”";
msg[8] = "“Like my status quo?”";
msg[9] = "“<b>WHOAH! Slow down, kiddo!</b>”";
msg[10] = "“Does this remind you of some kid stuff so much?”";
msg[11] = "“Patrick, the mayonnaise here is not an instrument!”";
msg[12] = "“Scratch = TurboWarp = PenguinMod = GaiaMod. Triple the mod fun!”";
msg[13] = "“What did you mean it's not for kids?”";
msg[14] = "“Now put that thing back where it came from or so help me!”";
msg[15] = "“<a style='color: lightblue;' href='https://www.youtube.com/channel/UC2XpeSO5OwSx42LAX1tS9Eg'>Gaia Windwave was here.</a>”";
msg[16] = "“I'll eat a hot dog.<br>Actually, I put wax on your hot dog.<br>WHAT!?”";
msg[17] = "“No files were harmed in the making of this website.”";
msg[18] = "“Did you know? Gaia is used to be an older brand from the 2010's called \"Super Jump Punch\".”";
msg[19] = "“Good things always happened!”";
msg[20] = "“Humanuh humanuh humanuh humanuh...<br>Website for humanuh?”";
msg[21] = "“Did you know? Try using \"your mom\" as the PenguinMod username to see what you get!";
msg[22] = "“I've gotta act fast!”";
msg[23] = "“OOOOOOOOOOOOOOOOOH NOOOOOOOOOOOOOOOOOOOOO!!!”";
msg[24] = "“Holy shrimp, Batman! We're trapped!”";
msg[25] = "“I went to the homepage and got a popup, asking me if I like waffles or not.”";
msg[26] = "“Oren is reading this message 💀”";
msg[27] = "“Thumbs up if you see an animated logo in this page moving downwards.”";
msg[28] = "“PARMESAN CHEEEEEEEEEEEEEEEEEEEEESE!!!! With cheddar.”";
msg[29] = "“Join the Gaia revolution and have fun like never before!”";
msg[30] = "“Great Hammer Barrage, everyone! I got shocked by the one of the shock images!”";
msg[31] = "“NOTE: If you see this message, please copy it into your signature in any Weasyl journal pages. Thank you!”";
msg[32] = "“Some say mushrooms don't grow on trees.”";
msg[33] = "“This site is built by a 36-year old who is always immature and innocent. Please avoid this.”";
msg[34] = "“Oh yeah? Try and figure your way out of this!”";
msg[35] = "“Don't ask me where I got this message from!”";
msg[36] = "“Evil scissors scare people away.”";
msg[37] = "“Who lives in a chocolate pudding at 4:00 AM?<br>Stuart Pickles!”";
msg[38] = "“PASTAAAAAAAAAAAAAAA!!!!! Just kidding!”";
msg[39] = "“I'm going to send a thank-you gift to Squidward... TORTELLINI!?”";
msg[40] = "“This website is garbage.<br>No it doesn't!”";
msg[41] = "“Why on Earth are you making an orange Jell-O at 3 in the morning!?<br>Because I cannot control of my life!”";
msg[42] = "“Who says I'm starting this meme!?”";
msg[43] = "“Down the hatch, sir!”";
msg[44] = "“It's Waka-Laka time!”";
msg[45] = "“SEGA is what Nintendon't!”";
msg[46] = "“Don't ever stop to play Friday Night Funkin' for nothing!”";
msg[47] = "“I am a strong girl, I have taken my vitamins, I have eaten all the spinach!”";
msg[48] = "“The dragon is off, but he's STILL singing!”";
msg[49] = "“Anything related to furries will be EVERYWHERE in this world!”";
msg[50] = "“Remember, folks! It's a surpreme law of physics written by a furry member. I prefer not to give a shout-out.<br>FINISH THEM!”";
msg[51] = "“To explain why the adblock won't work in Geocities.”";
msg[52] = "“I'd rather watch Wenda dance underwater...”";
msg[53] = "“🎵Boom boom boom boom<br>He's driving in my room<br>Driving cars forever and running now and ever<br>Boom boom boom boom<br>He wants to double boom<br>Bumping cars forever, and he's driving in my room🎵”";

	window.onload = function () {
		document.getElementById("random").innerHTML = msg[Math.floor(Math.random()*msg.length)];
	}
	
////////////////////// Themes
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Load stored theme
const storedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('gui-theme', storedTheme);

// Toggle on button click
themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('gui-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  htmlElement.setAttribute('gui-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

////////////////////// Penguinmod Search
function redirect() {
  var searchitem = document.getElementById("search");
  var url = "https://penguinmod.com/search?q=" + searchitem.value;
  window.open(url,"");
}

////////////////////// Current Date
        // Get the current date
        const today = new Date();

        // Define an array of month names
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        
        // Get the month name (using getMonth() which returns 0-11)
        const month = monthNames[today.getMonth()];

        // Get the day of the month
        const day = today.getDate();
        
      const year = today.getFullYear();

        // Format the date string
        const formattedDate = `${month} ${day}, ${year}`;

        // Get the HTML element where the date will be displayed
        const dateElement = document.getElementById('currentDate');

        // Update the content of the HTML element
        dateElement.textContent = formattedDate;

setInterval(myTimer);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}