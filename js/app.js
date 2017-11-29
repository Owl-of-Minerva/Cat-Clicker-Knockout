var Cat = function(cat){
    this.clickCount = ko.observable(cat.clickCount);
    this.name = ko.observable(cat.name);
    this.imgSrc = ko.observable(cat.imgSrc);
    this.imgAttribution = ko.observable(cat.imgAttribution);
    this.nicknames = ko.observableArray(cat.nicknames);
    this.incrementCounter = function(){
        this.clickCount(this.clickCount() +1);
    }

    this.level = ko.computed(function(){
        if (this.clickCount() < 10)
            return "New Born";
        else if (this.clickCount() < 20)
            return "Infant";
        else if (this.clickCount() < 40)
            return "Teenager";
        else
            return "Adult";
    }, this);
}


var initialCats = [
    {
        clickCount : 0,
        name : 'Tabby',
        imgSrc : 'img/cat1.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
        nicknames: (['Tabby', 'Taddy', 'Tabbie'])
    },
    {
        clickCount : 0,
        name : 'Tiger',
        imgSrc : 'img/cat2.jpg',
        imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
        nicknames: (['Tiger', 'Wild'])
    },
    {
        clickCount : 0,
        name : 'Scaredy',
        imgSrc : 'img/cat3.jpg',
        imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
        nicknames: (['Scaredy'])
    },
    {
        clickCount : 0,
        name : 'Shadow',
        imgSrc : 'img/cat4.jpg',
        imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
        nicknames: (['Shadow', "Shade"])
    },
    {
        clickCount : 0,
        name : 'Sleepy',
        imgSrc : 'img/cat5.jpg',
        imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
        nicknames: (['Sleepy', 'Drowsy', 'Nappy'])
    }
];

var viewModel = function(){
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function (cat) {
        self.catList.push(new Cat(cat));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.setCat = function(clickedCat){
        self.currentCat(clickedCat);
    }
}

ko.applyBindings(new viewModel());