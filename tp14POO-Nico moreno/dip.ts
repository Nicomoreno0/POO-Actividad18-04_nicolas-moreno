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

const mysqlDb = new MySQLDatabase();
const postgresDb = new PostgreSQLDatabase();
const app1 = new Aplicacion(mysqlDb);
const app2 = new Aplicacion(postgresDb);

app1.procesarDatos("Datos importantes");
app2.procesarDatos("Datos importantes");

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

class Usuario {
  constructor(public nombre: string, public email: string) {}
}

const servicio = new ServicioNotificaciones();
servicio.agregarNotificador(new EmailNotificador());
servicio.agregarNotificador(new SMSNotificador());
servicio.agregarNotificador(new PushNotificador());

const usuario = new Usuario("Ana", "ana@email.com");
servicio.notificarTodos(`Bienvenida ${usuario.nombre}!`);
