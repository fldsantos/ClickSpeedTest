var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function printDelayed(elements) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, elements_1, element;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, elements_1 = elements;
                    _a.label = 1;
                case 1:
                    if (!(_i < elements_1.length)) return [3 /*break*/, 4];
                    element = elements_1[_i];
                    return [4 /*yield*/, delay(400)];
                case 2:
                    _a.sent();
                    console.log(element);
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function delay(milliseconds) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(resolve, milliseconds);
                })];
        });
    });
}
printDelayed(["Hello", "beautiful", "asynchronous", "world"]).then(function () {
    console.log();
    console.log("Printed every element!");
});
//Wrote a class for the stopwatch, and it is customized to interact with the DOM, and it displays its results directly in a selected element.
var Stopwatch = /** @class */ (function () {
    function Stopwatch() {
        this.ms = 0;
        this.run = true;
    }
    //this function starts the stopwatch and goes on forever, until stopped
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
    //this one is similar to the first one, but has a set limiter, and stops after reaching the desired time, and it also updates the DOM with the results
    Stopwatch.prototype.startLimit = function (doc, limit) {
        var _this = this;
        this.ms++;
        doc.innerHTML = "Seconds <br> ".concat((this.ms / 100).toString());
        console.log("limit=".concat(limit, " // this.getMs()=").concat(this.getMs()));
        if (this.getMs() >= limit) {
            this.stop();
            clickRate = c / 5;
            console.log(clickRate);
            //apparently when a value is set from a variable inside of an array of objects, the value won't update automatically.
            //because of that, I had to write this loop to update every time it the 5 seconds passes.
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
    //stops the stopwatch
    Stopwatch.prototype.stop = function () {
        this.run = false;
    };
    //resets the stopwatch
    Stopwatch.prototype.reset = function (doc) {
        this.ms = 0;
        doc.innerHTML = "Seconds <br> ".concat((this.ms / 100).toString());
    };
    //getters for the variables
    Stopwatch.prototype.getMs = function () {
        return (this.ms) / 100;
    };
    Stopwatch.prototype.getRun = function () {
        return this.run;
    };
    return Stopwatch;
}());
//setting the HTML DOM elements to variables
var seconds = document.getElementById("seconds");
var clicks = document.getElementById("clicks");
var clickRate = 0;
var descriptionTitle = document.getElementById("title");
var descriptionImage = document.getElementById("animal");
var descriptionResults = document.getElementById("results-description");
//Set all the information for the desired results
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
//function to easily update the results DIV
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
//counts the clicks of the button
function countup() {
    c++;
    clicks.innerHTML = "Clicks <br> ".concat(c.toString());
}
//controls the stopwatch so it will behave the way the software needs
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
//event listeners for the button
button.addEventListener('click', countup);
button.addEventListener('click', recursiveTimer);
