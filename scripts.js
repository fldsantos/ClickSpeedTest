var Stopwatch = /** @class */ (function () {
    function Stopwatch() {
        this.ms = 0;
        this.run = true;
    }
    Stopwatch.prototype.start = function (doc) {
        var _this = this;
        this.ms++;
        doc.textContent = (this.ms / 100).toString();
        if (this.run) {
            setTimeout(function () { return _this.start(doc); }, 10);
        }
        else {
            this.run = true;
        }
    };
    Stopwatch.prototype.startLimit = function (doc, limit) {
        var _this = this;
        this.ms++;
        doc.innerHTML = "Seconds <br> ".concat((this.ms / 100).toString());
        console.log("limit=".concat(limit, " // this.getMs()=").concat(this.getMs()));
        if (this.getMs() >= limit) {
            this.stop();
            clickRate = c / 5;
            console.log(clickRate);
            for (var i = 0; i <= 6; i++) {
                resultsArray[i].full_description = "Your click rate was ".concat(clickRate, "! ").concat(resultsArray[i].description);
                console.log(resultsArray[i].description);
            }
            if (c <= 2) {
                displayResults(0);
            }
            else if (c > 0.3 && c <= 10) {
                displayResults(1);
            }
            else if (c > 10 && c <= 20) {
                displayResults(2);
            }
            else if (c > 20 && c <= 30) {
                displayResults(3);
            }
            else if (c > 30 && c < 50) {
                displayResults(4);
            }
            else if (c >= 50 && c < 100) {
                displayResults(5);
            }
            else if (c >= 100) {
                displayResults(6);
            }
        }
        if (this.run) {
            setTimeout(function () { return _this.startLimit(doc, limit); }, 10);
        }
        else {
            this.run = true;
        }
    };
    Stopwatch.prototype.stop = function () {
        this.run = false;
    };
    Stopwatch.prototype.reset = function (doc) {
        this.ms = 0;
        doc.innerHTML = "Seconds <br> ".concat((this.ms / 100).toString());
    };
    Stopwatch.prototype.getMs = function () {
        return (this.ms) / 100;
    };
    Stopwatch.prototype.getRun = function () {
        return this.run;
    };
    return Stopwatch;
}());
var seconds = document.getElementById("seconds");
var clicks = document.getElementById("clicks");
var clickRate = 0;
var descriptionTitle = document.getElementById("title");
var descriptionImage = document.getElementById("animal");
var descriptionResults = document.getElementById("results-description");
var resultsArray = [
    {
        title: "You're a Snail!",
        img: "https://i.pinimg.com/originals/af/f1/61/aff1610d46b77059f332e88f0417046a.png",
        description: "I mean, seriously? You didn't even try.",
        full_description: ""
    },
    {
        title: "You're a turtle!",
        img: "https://purepng.com/public/uploads/large/purepng.com-turtleshellanimalseaoceanreptileturtletortoise-981524667121fvwwy.png",
        description: "It's honestly pretty slow.",
        full_description: ""
    },
    {
        title: "You're a Squirrel!",
        img: "https://static.vecteezy.com/system/resources/thumbnails/024/722/421/small_2x/squirrel-with-ai-generated-free-png.png",
        description: "Not the slowest, but you're certainly still very slow.",
        full_description: ""
    },
    {
        title: "You're a Rabbit!",
        img: "https://png.pngtree.com/png-clipart/20230429/ourmid/pngtree-portrairt-rabbit-on-white-background-png-image_6744734.png",
        description: "It was reasonably fast. Keep training and you'll improve!",
        full_description: ""
    },
    {
        title: "You're a Horse!",
        img: "https://pngfre.com/wp-content/uploads/horse-png-from-pngfre-9.png",
        description: "It was pretty fast, but could be faster!",
        full_description: ""
    },
    {
        title: "You're a Cheetah!",
        img: "https://png.pngtree.com/png-vector/20230930/ourmid/pngtree-cheetah-png-with-ai-generated-png-image_10153570.png",
        description: "You click really fast! Good job!",
        full_description: ""
    },
    {
        title: "You're a Falcon!",
        img: "https://pngimg.com/d/falcon_PNG29.png",
        description: "You click CRAZY fast! You might be superhuman!",
        full_description: ""
    },
];
function displayResults(option) {
    descriptionImage.src = resultsArray[option].img;
    descriptionResults.textContent = resultsArray[option].full_description;
    descriptionTitle.textContent = resultsArray[option].title;
}
seconds.innerHTML = "Seconds <br> 0";
clicks.innerHTML = "Clicks <br> 0";
var button = document.getElementById("click-button");
var sw = new Stopwatch();
console.log(sw.getRun());
var started = false;
var c = 0;
function countup() {
    c++;
    clicks.innerHTML = "Clicks <br> ".concat(c.toString());
}
function recursiveTimer() {
    if (!started) {
        c = 0;
        sw.startLimit(seconds, 5);
        started = true;
    }
    else if (sw.getMs() == 5) {
        c = 1;
        clicks.innerHTML = "Clicks <br> ".concat(c.toString());
        sw.reset(seconds);
        started = false;
        recursiveTimer();
    }
}
button.addEventListener('click', countup);
button.addEventListener('click', recursiveTimer);
