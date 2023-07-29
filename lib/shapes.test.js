const {Circle} = require('./shapes');
describe("Circle", () => {
    test("should render yellow circle", () => {
    const shape = new Circle();
    shape.setColor("yellow");
    expect(shape.render()).toEqual('<circle cx="150" cy="120" r="80" fill="yellow" />');
    })
})


const {Triangle} = require('./shapes');

describe("Triangle", () => {
    test("should render blue triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

const {Square} = require('./shapes');

describe("Square", () => {
    test("should render red square", () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual('<rect x="90" y="60" width="120" height="120" fill="red" />');
    })
})