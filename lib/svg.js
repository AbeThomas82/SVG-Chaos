class Svg {
    constructor() {
        this.shape = ''
        this.text = ''
    }
    setText(logoText,color) {
        if(logoText.length > 3) {
            throw new Error("Text too long.")
        }
        this.text = `<text x="20" y="35" fill="${color}" text-anchor="middle" class="small">${logoText}</text>`
    }
    setShape(shape) {
        this.shape = shape.render()
    }
    render(){
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>
        `
    }
}

module.exports = Svg