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

// Uso del ejemplo SRP
const usuario = new Usuario("Juan", "juan@email.com");
const repositorio = new UsuarioRepositorio();
const emailService = new EmailService();

repositorio.guardar(usuario);
emailService.enviarEmail(usuario, "Bienvenido!");
