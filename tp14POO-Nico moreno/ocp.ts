abstract class Forma {
  abstract calcularArea(): number;
}

class Circulo extends Forma {
  constructor(private radio: number) {
    super();
  }

  calcularArea(): number {
    return Math.PI * this.radio ** 2;
  }
}

class Rectangulo extends Forma {
  constructor(private ancho: number, private alto: number) {
    super();
  }

  calcularArea(): number {
    return this.ancho * this.alto;
  }
}

class Triangulo extends Forma {
  constructor(private base: number, private altura: number) {
    super();
  }

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}

class CalculadoraArea {
  calcularAreaTotal(formas: Forma[]): number {
    return formas.reduce((total, forma) => total + forma.calcularArea(), 0);
  }
}

const formas: Forma[] = [new Circulo(5), new Rectangulo(4, 6), new Triangulo(3, 8)];
const calculadora = new CalculadoraArea();
const areaTotal = calculadora.calcularAreaTotal(formas);

console.log(`Área total: ${areaTotal}`);
