interface Trabajador {
  trabajar(): void;
}

interface Comedor {
  comer(): void;
}

interface Durmiente {
  dormir(): void;
}

class Humano implements Trabajador, Comedor, Durmiente {
  trabajar(): void {
    console.log("Humano trabajando");
  }

  comer(): void {
    console.log("Humano comiendo");
  }

  dormir(): void {
    console.log("Humano durmiendo");
  }
}

class Robot implements Trabajador {
  trabajar(): void {
    console.log("Robot trabajando");
  }
}

const humano = new Humano();
const robot = new Robot();

humano.trabajar();
humano.comer();
humano.dormir();
robot.trabajar();
