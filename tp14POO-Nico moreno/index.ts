/**
 * Ejemplos SOLID en TypeScript
 */

// SRP - Responsabilidad Única
class Usuario {
  constructor(public nombre: string, public email: string) {}

  validarEmail(): boolean {
    return this.email.includes("@");
  }
}

class UsuarioRepositorio {
  guardar(usuario: Usuario): void {
    console.log(`Guardando ${usuario.nombre} en BD`);
  }

  cargar(id: string): Usuario | null {
    console.log(`Cargando usuario ${id}`);
    return null;
  }
}

class EmailService {
  enviarEmail(usuario: Usuario, mensaje: string): void {
    console.log(`Enviando email a ${usuario.email}: ${mensaje}`);
  }
}

// OCP - Abierto/Cerrado
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

// LSP - Sustitución de Liskov
interface FormaArea {
  calcularArea(): number;
}

class RectanguloSimple implements FormaArea {
  constructor(private ancho: number, private alto: number) {}

  calcularArea(): number {
    return this.ancho * this.alto;
  }
}

class Cuadrado implements FormaArea {
  constructor(private lado: number) {}

  calcularArea(): number {
    return this.lado ** 2;
  }
}

function calcularAreaTotal(formas: FormaArea[]): number {
  return formas.reduce((total, forma) => total + forma.calcularArea(), 0);
}

// ISP - Segregación de Interfaces
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

// DIP - Inversión de Dependencias
interface BaseDeDatos {
  conectar(): void;
  guardar(datos: string): void;
}

class MySQLDatabase implements BaseDeDatos {
  conectar(): void {
    console.log("Conectando a MySQL");
  }

  guardar(datos: string): void {
    console.log(`Guardando en MySQL: ${datos}`);
  }
}

class PostgreSQLDatabase implements BaseDeDatos {
  conectar(): void {
    console.log("Conectando a PostgreSQL");
  }

  guardar(datos: string): void {
    console.log(`Guardando en PostgreSQL: ${datos}`);
  }
}

class Aplicacion {
  constructor(private database: BaseDeDatos) {}

  procesarDatos(datos: string): void {
    this.database.conectar();
    this.database.guardar(datos);
  }
}

// Ejemplo integrado - Sistema de notificaciones
interface Notificador {
  enviar(mensaje: string): void;
}

class EmailNotificador implements Notificador {
  enviar(mensaje: string): void {
    console.log(`Enviando email: ${mensaje}`);
  }
}

class SMSNotificador implements Notificador {
  enviar(mensaje: string): void {
    console.log(`Enviando SMS: ${mensaje}`);
  }
}

class PushNotificador implements Notificador {
  enviar(mensaje: string): void {
    console.log(`Enviando push: ${mensaje}`);
  }
}

class ServicioNotificaciones {
  private notificadores: Notificador[] = [];

  agregarNotificador(notificador: Notificador): void {
    this.notificadores.push(notificador);
  }

  notificarTodos(mensaje: string): void {
    this.notificadores.forEach((notificador) => notificador.enviar(mensaje));
  }
}

function main(): void {
  console.log("--- SRP ---");
  const usuario = new Usuario("Juan", "juan@email.com");
  console.log("Email válido:", usuario.validarEmail());
  const repositorio = new UsuarioRepositorio();
  repositorio.guardar(usuario);
  const emailService = new EmailService();
  emailService.enviarEmail(usuario, "Bienvenido!");

  console.log("\n--- OCP ---");
  const formas: Forma[] = [new Circulo(5), new Rectangulo(4, 6), new Triangulo(3, 8)];
  const calculadora = new CalculadoraArea();
  console.log("Área total:", calculadora.calcularAreaTotal(formas));

  console.log("\n--- LSP ---");
  const formasLSP: FormaArea[] = [new RectanguloSimple(5, 4), new Cuadrado(3)];
  console.log("Área total:", calcularAreaTotal(formasLSP));

  console.log("\n--- ISP ---");
  const humano = new Humano();
  const robot = new Robot();
  humano.trabajar();
  humano.comer();
  humano.dormir();
  robot.trabajar();

  console.log("\n--- DIP ---");
  const appMySQL = new Aplicacion(new MySQLDatabase());
  const appPostgres = new Aplicacion(new PostgreSQLDatabase());
  appMySQL.procesarDatos("Datos importantes");
  appPostgres.procesarDatos("Datos importantes");

  console.log("\n--- Ejemplo integrado ---");
  const servicio = new ServicioNotificaciones();
  servicio.agregarNotificador(new EmailNotificador());
  servicio.agregarNotificador(new SMSNotificador());
  servicio.agregarNotificador(new PushNotificador());
  servicio.notificarTodos(`Bienvenida ${usuario.nombre}!`);
}

main();
