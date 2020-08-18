var flowers = [];
var flower = function (x, y, s, r, col) {
    this.flowerImg = document.createElement("img");
    this.y = y;
    this.x = x;
    this.s = s;
    this.r = r % 360;
    this.col = Math.floor(col);
};
flower.prototype.draw = function () {
    this.y += 1;
    this.flowerImg.style.position = "fixed";
    this.flowerImg.style.top = this.y + "%";
    this.flowerImg.style.left = this.x;
    this.flowerImg.style.width = this.s;
    this.flowerImg.style.transform = "rotate(" + this.r + "deg)";
    if (this.col === 0) {
        this.flowerImg.src = "https://themuslimgarden.github.io/images/Blue%20Flower.png";
    } else if (this.col === 1) {
        this.flowerImg.src = "https://themuslimgarden.github.io/images/Red%20Flower.png";
    } else {
        this.flowerImg.src = "https://themuslimgarden.github.io/images/White%20Flower.png";
    }
    this.flowerImg.style.zIndex = -2;
    this.r += 1;
    document.getElementsByTagName("html")[0].appendChild(this.flowerImg);

    if (this.y > 100) {
        this.y = Math.random() * -50;
        this.x = Math.random() * 100 + "%";
    }
};

var frameCount = 0;

var drawAllTheFlowers = function () {
    frameCount++;
    if (frameCount >= 100) {
        if (flowers.length < 30) {
            flowers.push(new flower(Math.random() * 100 + "%", Math.random() * 1000, 10 + "%", Math.random() * 360, Math.random() * 3));
        }
        frameCount = 0;
    }
    for (var i = 0; i < flowers.length; i++) {
        flowers[i].draw();
        flowers[i].r += 1;
        if (flowers[i].y > 1000) {
            flowers[i].y = 0;
        }
    }
    window.requestAnimationFrame(drawAllTheFlowers);
};
drawAllTheFlowers();

/*
var Omar = {};

Omar.prototype = function (Hair, Grade,Funny) {
    this.Hair = Hair;
    this.Grade= Grade;
    this.Funny= Funny;
    this.CreateWebsites = function () {
        window.alert(this.Grade + " grade website is created");
    };
};
int v = 9;
Omar.ShoesSize = "9";

var Abdurrahman = {
    Hair: "Short",
    Grade: "8th",
    Funny: true
};

function PrintHair(X) {
    window.alert(X.Hair)
};

var OmarObject = new Omar("Medium", "8th", true);

fn(OmarObject);

OmarObject.CreateWebsites();

*/
