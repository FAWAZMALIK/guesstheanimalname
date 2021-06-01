 const b = document.getElementById("bs");
 const gh = document.getElementById("input");
 let fs = document.getElementById("FS");
 let ss = document.getElementById("SS");
 let ts = document.getElementById("TS");
 let os = document.getElementById("OS");
 let vs = document.getElementById("VS");
 let is = document.getElementById("IS");
 let as = document.getElementById("AS");
 let es = document.getElementById("ES");
 let ns = document.getElementById("NS");
 let qs = document.getElementById("QS");
 let xs = document.getElementById("XS");
 let cs = document.getElementById("CS");
 let len = document.getElementById("leng");
 let note = document.getElementById("note");
 const i = document.getElementById("input");
 const oppo = document.getElementsByTagName("li");
 const body = document.getElementById("body");
 const rsb = document.getElementById("rs");
 const cnb = document.getElementById("cn");
 const namesarr = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Reddeer",
    "Redpanda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "SandDollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]; 
 var a3 = "A"
 var o = document.getElementById("try");
 let poco = 0;




 function poi() {
     gh.value = '';
     gh.focus();
 };
 
 function wrong() {
    if (i.value.toUpperCase() === fs.textContent.toLocaleUpperCase() || i.value.toUpperCase() === ss.textContent.toLocaleUpperCase() || i.value.toUpperCase() === ts.textContent.toLocaleUpperCase() || i.value.toUpperCase() === os.textContent.toLocaleUpperCase() || i.value.toUpperCase() === vs.textContent.toLocaleUpperCase() || i.value.toUpperCase() === is.textContent.toLocaleUpperCase() || i.value.toUpperCase() === as.textContent.toLocaleUpperCase() || i.value.toUpperCase() === es.textContent.toLocaleUpperCase() || i.value.toUpperCase() === ns.textContent.toLocaleUpperCase() || i.value.toUpperCase() === qs.textContent.toLocaleUpperCase() || i.value.toUpperCase === xs.textContent.toLocaleUpperCase || i.value.toUpperCase === cs.textContent.toLocaleUpperCase ){
        body.className = "yes";
        poco = poco + 1 ;
        
        
    }else{
         o.innerHTML == o.value--;
         body.className = "wer";
    }
    
};
 
var oi;
var names1;
var names2
 function randomname() {
     names2 = namesarr[Math.floor(Math.random() * namesarr.length)];
     names1 = names2.toUpperCase();
     let aa = names1[0];
     let bb = names1[1];
     let cc = names1[2];
     let dd = names1[3];
     let ee = names1[4];
     let ff = names1[5];
     let gg = names1[6];
     let hh = names1[7];
     let ii = names1[8];
     let jj = names1[9];
     let kk = names1[10];
     let ll = names1[11]; 
     fs.textContent = aa;
     ss.textContent = bb;
     ts.textContent = cc;
     os.textContent = dd;
     vs.textContent = ee;
     is.textContent = ff;
     as.textContent = gg;
     es.textContent = hh;
     ns.textContent = ii;
     qs.textContent = jj;
     xs.textContent = kk;
     cs.textContent = ll;
     oi = names2.length;
     len.innerHTML = "Length: " + oi;
     
    
 };
 function toco(){
   if (poco === oi){
       alert("You Have Won");
       oppo.className = "hide";
       b.className = "hide";
       rsb.className = "";
 }};

 


 function end() {
     if (o.value <= 0) {
         alert("You Lost The Game");
         b.className = "hide";
         rsb.className = "";
         cnb.className = "lpl";
     }
 };
 

 function Red() {
     let wrongspling = i.value.toLocaleLowerCase();
     let wrongss = document.getElementById(wrongspling);
     wrongss.className = "hide";
 };
 cnb.addEventListener("click",function(){
     alert(names2);

 });
 rsb.addEventListener("click",function(){
    location.reload();
 });




 randomname();
 b.addEventListener("click", function () {
     note.className = "hide";
     Red();
     document.getElementsByTagName("li").className === "hide";
     if (i.value.toUpperCase() === fs.textContent) {
         fs.className = "ok"
     }
     if (i.value.toUpperCase() === ss.textContent) {
         ss.className = "ok"
     }
     if (i.value.toUpperCase() === ts.textContent) {
         ts.className = "ok"
     }
     if (i.value.toUpperCase() === os.textContent) {
         os.className = "ok"
     }
     if (i.value.toUpperCase() === vs.textContent) {
         vs.className = "ok"
     }
     if (i.value.toUpperCase() === is.textContent) {
         is.className = "ok"
     }
     if (i.value.toUpperCase() === as.textContent) {
         as.className = "ok"
     }
     if (i.value.toUpperCase() === es.textContent) {
         es.className = "ok"
     }
     if (i.value.toUpperCase() === ns.textContent) {
         ns.className = "ok"
     }
     if (i.value.toUpperCase() === qs.textContent) {
         qs.className = "ok"
     } 
     if (i.value.toUpperCase() === xs.textContent) {
        xs.className = "ok"
    }
    if (i.value.toUpperCase() === cs.textContent) {
         cs.className = "ok"
    } else {
         wrong();
     };
     poi();
     end();
     toco();

 });