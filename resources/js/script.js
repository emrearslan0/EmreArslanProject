var slayt = document.getElementsByClassName("slayt"); 
var button1 = document.getElementById("btn-gezin");
var button2 = document.getElementById("btn-gezin2");

 //Slider
 var slaytSayısı = slayt.length;
 var slaytNo = 0; 
   slaytGoster(slaytNo); 
   function onceki() {
	   
	   slaytNo=0;
       slaytGoster(slaytNo);
       button1.style.backgroundColor = "grey";
	   button2.style.backgroundColor = "black";  
   }
    function sonraki() {
	   
	   slaytNo=1;	   
       slaytGoster(slaytNo);
       button2.style.backgroundColor = "grey";
	   button1.style.backgroundColor = "black";  
   } 
  function slaytGoster(slaytNumarası) {	  
	    slaytNo = slaytNumarası;
		if(slaytNumarası >= slaytSayısı){
			
			slaytNo = 0;
			
		} 
		if(slaytNumarası < 0){
			
			slaytNo = slaytSayısı -1;
		}
	    for(i = 0; i< slaytSayısı; i++) {
			
			slayt[i].style.display = "none";

		} 
		slayt[slaytNo].style.display = "block";
	   	   
  }

//Dropdown
function myFunction() {
	var x = document.getElementById('myDropdown');
	var y = document.getElementById('cont-main');
	if (x.style.display === 'none') {
	  x.style.display = 'flex';
	  y.style.zIndex='0';
	} else {
	  x.style.display = 'none';
	  y.style.zIndex='1';
	}
  }


  //SubMenu-Navbar

  var menuKontrol = 0;

  function showNav() {
	var x = document.getElementById('anasayfa');
	var a = document.getElementById('gezin');
	var y = document.getElementById('icon1');
		x.style.display = 'none';
		a.style.width = "100%"
		y.style.display = 'none';
	reset()
	}

function reset()
{
			var x = document.getElementById('gezinti-bottomheader');
			x.style.display ="flex";
			var p = document.getElementById('menu-input');	
			p.style.display="none";
			var h = document.getElementById('gezin-logo');	
			h.style.display="flex";
			var y = document.getElementById('gezinti-menu');
			y.style.display ="flex";
			var z = document.getElementById('menu-detay');
			z.style.display ="none";
			var t = document.getElementById('detay-Logo');
			t.setAttribute('style', 'display:flex !important');
			var u = document.getElementById('detay-Title');
			u.style.display ="none";
			menuKontrol = 0;
			console.log(menuKontrol);
}
		function exit()
		{
			var x = document.getElementById('anasayfa');
		var a = document.getElementById('gezin');
		var y = document.getElementById('icon1');
			x.style.display = 'block';
			a.style.width = "0"
			y.style.display = 'block';
		}
		function hideNav() {
		if(menuKontrol == 0)
		{
		var x = document.getElementById('anasayfa');
		var a = document.getElementById('gezin');
		var y = document.getElementById('icon1');
			x.style.display = 'block';
			a.style.width = "0"
			y.style.display = 'block';
		}
	
		else if(menuKontrol == 1)
		{
		var z = document.getElementById('iconsearchBox');	
		z.style.display="flex";
		var x = document.getElementById('menu-input');	
		x.style.display="none";
		var y = document.getElementById('gezin-logo');	
		y.style.display="flex";
		menuKontrol=2
		}

		else if(menuKontrol == 2)
		{
			var x = document.getElementById('gezinti-bottomheader');
			x.style.display ="flex";
			var p = document.getElementById('menu-input');	
			p.style.display="none";
			var h = document.getElementById('gezin-logo');	
			h.style.display="flex";
			var y = document.getElementById('gezinti-menu');
			y.style.display ="flex";
			var z = document.getElementById('menu-detay');
			z.style.display ="none";
			var t = document.getElementById('detay-Logo');
			t.setAttribute('style', 'display:flex !important');
			var u = document.getElementById('detay-Title');
			u.style.display ="none";
			menuKontrol = 0;
			console.log(menuKontrol);
		}
	}
//Açılır Menu
function showSearch() {
	var z = document.getElementById('iconsearchBox');	
	var x = document.getElementById('menu-input');	
	var y = document.getElementById('gezin-logo');	
	z.style.display="none";
	x.style.display="block";
	y.style.display="none";
	y.style.width="80%"
	menuKontrol = 1;
	console.log(menuKontrol);
}

function showDetay(obj) 
{
	var x = document.getElementById('gezinti-bottomheader');
	x.style.display ="none";
	var y = document.getElementById('gezinti-menu');
	y.style.display ="none";
	var z = document.getElementById('menu-detay');
	z.setAttribute('style', 'display:flex !important');
	var t = document.getElementById('detay-Logo');
	t.style.display ="none";
	var u = document.getElementById('detay-Title');
	id = obj.getAttribute("id");
	u.textContent=id;
	u.setAttribute('style', 'display:flex !important');
	menuKontrol = 2;
	console.log(menuKontrol);

}

//aramaFocus
function txtFocus() 
{
	var x = document.getElementById('gezinti-bottomheader');
	x.style.display ="none";
	//var y = document.getElementById('gezinti-menu');
	//y.style.display ="none";
	//var z = document.getElementById('menu-detay');
	//z.setAttribute('style', 'display:none !important');
	var z = document.getElementById('last-searches');
	z.setAttribute('style', 'display:flex !important');
}

function txtFocusoff()
{
	var z = document.getElementById('last-searches');
	z.setAttribute('style', 'display:none !important');
}