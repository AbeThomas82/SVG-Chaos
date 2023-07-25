const { Circle, Triangle, Square } = require('./lib/shapes');
const Svg = require('./lib/svg');
const inquirer = require("inquirer");
const fs=require("fs")
function startMenu() {
    inquirer.prompt([
        {
            type: "input",
            message: "enter text",
            name: "logo_text"
        },
        {
            type: "list",
            choices: ["red", "yellow", "blue", "green", "purple"],
            message: "enter text color",
            name: "logo_text_color"
        },
        {
            type: "list",
            choices: ["Triangle", "Square", "Circle"],
            message: "enter shape",
            name: "logo_shape"
        },
        {
            type: "list",
            choices: ["Red", "Yellow", "Blue", "Green", "Purple"],
            message: "enter shape color",
            name: "logo_shape_color"
        },


    ])
        .then((response) => {
            switch (response.logo_shape) {
                case "Circle":
                    var myShape = new Circle();
                    break;
                case "Square":
                    var myShape = new Square();
                    break;
                case "Triangle":
                    var myShape = new Triangle();
                    break;
            }
            myShape.setColor(response.logo_shape_color)
            var myLogo = new Svg()
            myLogo.setText(response.logo_text, response.logo_color)
            myLogo.setShape(myShape)
            fs.writeFileSync("./logo.svg",myLogo.render(),function(error){
                if(error)throw error
            })
        })

}
startMenu()