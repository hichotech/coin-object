let body = document.querySelector('body')
const flipbutton = document.createElement('button')
const filpresult = document.createElement('h4')
let imgflipresult = document.createElement('div')
body.append(filpresult)
flipbutton.append("flip")
body.append(flipbutton)
let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        let zeroOrOne = Math.floor(Math.random() * 2)
        this.state = zeroOrOne
    },
    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
          "this.state" is 0 or 1. */
        if (this.state === 0) {
            return 'Heads'
        } else if (this.state === 1) {
            return 'Tails'
        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 0) {
            image.src = './images/coin_heads.png'

            imgflipresult.append(image)
        } else if (this.state === 1) {
            image.src = './images/coin_tails.png'

            imgflipresult.append(image)
        }
    }
};

flipbutton.addEventListener("click", function () {
    for (let index = 0; index <= 20; index++) {
        coin.flip()
        let result = coin.toString()


        filpresult.append(result + ' ')
    }
})
flipbutton.addEventListener("click", function () {

    for (let index = 0; index <= 20; index++) {

        coin.toHTML()
        coin.flip()
    }

    body.append(imgflipresult)
})





