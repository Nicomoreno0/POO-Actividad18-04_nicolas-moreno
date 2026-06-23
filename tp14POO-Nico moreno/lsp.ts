interface Forma {
  calcularArea(): number;
}

class Rectangulo implements Forma {
  constructor(private ancho: number, private alto: number) {}

  calcularArea(): number {
    return this.ancho * this.alto;
  }
}

class Cuadrado implements Forma {
  constructor(private lado: number) {}

  calcularArea(): number {
    return this.lado ** 2;
  }
}

function calcularAreaTotal(formas: Forma[]): number {
  return formas.reduce((total, forma) => total + forma.calcularArea(), 0);
}

const formas: Forma[] = [new Rectangulo(5, 4), new Cuadrado(3)];
const areaTotal = calcularAreaTotal(formas);

console.log(`Área total: ${areaTotal}`);
