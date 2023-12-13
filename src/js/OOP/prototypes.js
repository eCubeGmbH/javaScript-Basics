function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function () {
    return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
    return 2 * (this.width + this.height);
};

Rectangle.prototype.isSquare = function () {
    return this.width === this.height;
};

Rectangle.prototype.changeName = function (newName) {
    return (this.name = newName);
};

const rect = new Rectangle('Rect', 10, 20);
const rect2 = new Rectangle('Rect 2', 30, 40);

console.log(rect);
console.log(rect.area());
console.log(rect.perimeter());
console.log(rect.isSquare());
rect.changeName('Test');
console.log(rect.name);

console.log(rect2.area());

// ODER mit createObject

const rectanglePrototypes = {
    area: function () {
        return this.width * this.height;
    },
    perimeter: function () {
        return 2 * (this.width + this.height);
    },
    isSquare: function () {
        return this.height === this.width;
    },
};

function createRectangle(height, width) {
    return Object.create(rectanglePrototypes, {
        height: {
            value: height,
        },
        width: {
            value: width,
        },
    });
}

const rect3 = createRectangle(10, 20);
console.log(rect3);
console.log(rect3.area());
console.log(rect3.isSquare());

const rect4 = createRectangle(20, 20);
console.log(rect4.area());