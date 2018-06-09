const model = {
    cats: [
        {name: 'cat 1', clickCount: 0, image: 'cat_picture1.jpg'},
        {name: 'cat 2', clickCount: 0, image: 'cat_picture2.jpeg'},
        {name: 'cat 3', clickCount: 0, image: 'cat_picture3.jpeg'},
        {name: 'cat 4', clickCount: 0, image: 'cat_picture4.jpeg'},
        {name: 'cat 5', clickCount: 0, image: 'cat_picture5.jpeg'},
    ]
};

const octo = {
    start: function() {
        view.renderCat(model.cats[0]);
        view.renderButtons(model.cats);
    }
};

const view = {
    cats: document.querySelector(".cat"),
    buttons: document.querySelector(".catlist"),

    renderCat: function (cat) {
        const counter = this.cats.querySelector(".counter");
        const image = document.createElement('img');
        this.cats.removeChild(this.cats.querySelector("img"));

        counter.innerText = cat.clickCount;
        image.src = cat.image;
        image.addEventListener("click", function () {
            cat.clickCount += 1;
            counter.innerText = cat.clickCount;
        });
        this.cats.appendChild(image);
    },

    renderButtons: function (cats) {
        const self = this;
            counter = 1;
        for (const cat of cats) {

            const button = document.createElement('button');
            button.classList.add(`button${counter}`);
            button.innerText = cat.name;
            button.addEventListener('click', function(event) {
                event.preventDefault();
                console.log("Cat " + cat.name + " is clicked");
                self.renderCat(cat);
            });

            this.buttons.appendChild(button);
            counter++;
        }
    }
};



octo.start();