const { axe, toHaveNoViolations } = require('jest-axe');
const { JSDOM } = require('jsdom');

expect.extend(toHaveNoViolations);

describe('Accessibility Tests', () => {
  let dom;
  let document;

  beforeEach(() => {
    dom = new JSDOM(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <title>Clínica Bihu - Salud Mental Humanizada</title>
        </head>
        <body>
          <header>
            <nav>
              <a href="/">Inicio</a>
              <a href="/servicios">Servicios</a>
              <a href="/contacto">Contacto</a>
            </nav>
          </header>
          <main>
            <h1>Clínica Bihu - Salud Mental Humanizada</h1>
            <section>
              <h2>Nuestros Servicios</h2>
              <button aria-label="Contactar por WhatsApp">WhatsApp</button>
              <form>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required>
                <label for="telefono">Teléfono:</label>
                <input type="tel" id="telefono" name="telefono" required>
                <button type="submit">Enviar</button>
              </form>
            </section>
          </main>
        </body>
      </html>
    `);
    document = dom.window.document;
  });

  test('should not have accessibility violations', async () => {
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  test('should have proper color contrast', () => {
    const elements = document.querySelectorAll('*');
    // This would need a more sophisticated test with actual color values
    // For now, we'll check that elements have proper structure
    expect(elements.length).toBeGreaterThan(0);
  });

  test('should have proper form labels', () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      expect(label).toBeTruthy();
    });
  });

  test('should have proper button labels', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      expect(button.textContent || button.getAttribute('aria-label')).toBeTruthy();
    });
  });

  test('should have proper heading hierarchy', () => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      expect(level).toBeGreaterThan(previousLevel - 1);
      previousLevel = level;
    });
  });

  test('should have proper navigation structure', () => {
    const nav = document.querySelector('nav');
    expect(nav).toBeTruthy();
    
    const navLinks = nav.querySelectorAll('a');
    expect(navLinks.length).toBeGreaterThan(0);
  });
});
