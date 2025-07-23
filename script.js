document.getElementById('createWidgets').addEventListener('click', async () => {
  console.log("Creando roadmap…");

  await miro.board.widgets.create([
    {
      type: 'shape',
      text: '🔍 Inicio: AG Química',
      x: 0,
      y: 0,
      style: {
        shapeType: 'rectangle',
        backgroundColor: '#FFE066',
        fontSize: 24,
      },
    },
    {
      type: 'shape',
      text: '📲 Fase 1: Digitalización de procesos\n- Página web\n- Catálogo en línea\n- Cotizador interno',
      x: 0,
      y: 180,
      style: {
        shapeType: 'rectangle',
        backgroundColor: '#A0E7E5',
        fontSize: 16,
      },
    },
    {
      type: 'shape',
      text: '⚙️ Fase 2: Automatización operativa\n- Gestión contable (Odoo)\n- CRM interno\n- Flujo de validación de cotizaciones',
      x: 0,
      y: 360,
      style: {
        shapeType: 'rectangle',
        backgroundColor: '#B4F8C8',
        fontSize: 16,
      },
    },
    {
      type: 'shape',
      text: '🛒 Fase 3: Plataforma de marketplace\n- Productos propios + de proveedores\n- Membresías premium\n- Beneficios por tipo de usuario',
      x: 0,
      y: 540,
      style: {
        shapeType: 'rectangle',
        backgroundColor: '#FFAEBC',
        fontSize: 16,
      },
    },
    {
      type: 'shape',
      text: '🚀 Resultado: AG Química 100% escalable, automatizada y posicionada como líder',
      x: 0,
      y: 720,
      style: {
        shapeType: 'rectangle',
        backgroundColor: '#D2B4DE',
        fontSize: 20,
      },
    },
  ]);
});
