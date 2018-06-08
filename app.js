const model = {
    cats: [
        {name: 'cat 1', clickCount: 0, image: 'cat_picture1.jpg'},
        {name: 'cat 2', clickCount: 0, image: 'cat_picture2.jpeg'},
        {name: 'cat 3', clickCount: 0, image: 'cat_picture3.jpeg'},
        {name: 'cat 4', clickCount: 0, image: 'cat_picture4.jpeg'},
        {name: 'cat 5', clickCount: 0, image: 'cat_picture5.jpeg'},
    ]
};

const octo = {};

const view = {
    cats: document.querySelector(".cat"),
    buttons: $(".catlist"),

    renderCat: function (cat) {
        this.cats.querySelector(".counter").innerText = cat.clickCount;
        // noinspection JSAnnotator
        this.cats.querySelector("img").src = cat.image;
        this.cats.querySelector("img").addEventListener("click", function () {
            console.log("Cat " + cat.name + " is clicked");
            cat.clickCount += 1;
        })
    },

    renderButtons: function () {
        this.buttons.children(".counter").text = cat.clickCount;
        this.cats.children("img").addEventListener("click", function () {
            console.log("Cat " + cat.name + " is clicked");
            cat.clickCount += 1;
        })
    }
};


view.renderCat(model.cats[1]);

function hideAllCats() {
    for (var i = 0; i < cats.length; i++) {
        $(cats[i]).hide();
    }
}

function bindButtonToCat(idNumber) {
    $("#button" + idNumber).click(function () {
        hideAllCats();
        $("#cat" + idNumber).show();
    })
}

function bindCounterToCat(idNumber) {
    var cat = "#cat" + idNumber
    $(cat).click(function () {
        var count = $(cat + " > .counter").text();
        count = parseInt(count) + 1;
        $(cat + " > .counter").text(count);
    })
}

// for (var i = 1; i <= buttons.length; i++) {
//     bindButtonToCat(i);
// }

// for (var i = 1; i <= cats.length; i++) {
//     bindCounterToCat(i);
// }

// hideAllCats();
// $("#cat1").show();