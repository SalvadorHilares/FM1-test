String.prototype.repeatify = function(cant){
    if(cant<0) return NaN;
    else if(cant === 0) return '';
    else{
        var str = new String("");
        for(let i=0; i<cant; i++)
            str = str + this;
        return str;
    }
}

console.log('hola'.repeatify(3));   //holaholahola

class Shape{
    constructor(type){
        this.type = type;
    };

    getType() {
        return this.type;
    }
};

class Triangle extends Shape{
    constructor(a,b,c){
        super();
        this.a = a;
        this.b = b;
        this.c = c;
        this.type = 'Triangle';
    }
    getPerimeter(){
        return this.a + this.b + this.c;
    }
    getArea(){
        let s = (this.a + this.b + this.c)/2;
        return Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c));
    }
};

var t = new Triangle(4, 5, 3);
console.log(t instanceof Triangle);
// true
console.log(Shape.prototype.isPrototypeOf(t));
// true
console.log(t.getPerimeter());
// 6
console.log(t.getType());
// "Triangle"
console.log(t.getArea());
// 6

class Circle extends Shape{
    constructor(r){
        super();
        this.r = r;
        this.type = 'Circle';
    }
    getPerimeter(){
        return Math.PI * 2 * this.r;
    }
    getArea(){
        return Math.PI * Math.pow(this.r,2);
    }
};

var c = new Circle(2);
console.log(c instanceof Circle);
// true
console.log(Shape.prototype.isPrototypeOf(c));
// true
console.log(c.getPerimeter());
// 12.566370614359172
console.log(c.getType());
// "Circle"
console.log(c.getArea());
//12.56

class Square extends Shape{
    constructor(l){
        super();
        this.l = l;
        this.type = 'Square';
    }
    getPerimeter(){
        return 4*this.l;
    }
    getArea(){
        return Math.pow(this.l,2);
    }
};

var s = new Square(5);
console.log(s instanceof Square);
// true
console.log(Shape.prototype.isPrototypeOf(s));
// true
console.log(s.getPerimeter());
// 20
console.log(s.getType());
// "Square"
console.log(s.getArea());
// 25