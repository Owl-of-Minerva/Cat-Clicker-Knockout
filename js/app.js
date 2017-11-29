var ViewModel = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/cat1.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/bigtallguy/434164568\'')

    this.incrementCounter = function(){
        this.clickCount(this.clickCount() +1);
    }
    var initialCats = [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/cat1.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/cat2.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/cat3.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709'
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/cat4.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/cat5.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
        }
    ];
}

ko.applyBindings(new ViewModel());