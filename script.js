document.getElementById('createWidgets').addEventListener('click', async () => {
  console.log("Visualizando roadmap...");

  const xStart = 0;
  const yLevel = 0;
  const gap = 450;

  const shapes = [
    {
      type: 'shape',
      text: '🧭 Inicio del proyecto\nAnálisis, diagnóstico, objetivos',
      x: xStart,
      y: yLevel,
      style: {
        shapeType: 'rectangle',
        backgroundColor: '#FFE066',
        fontSize: 16,
      },
    },
    {
      type: 'shape',
      text: '📲 Fase 1: Digitalización\n- Página web\n- Catálogo digital\n- Cotizador en línea',
      x: xStart + gap,
      y: yLevel,
      style: {
        shapeType: 'rectangle',
        backgroundColor: '#A0E7E5',
        fontSize: 16,
      },
    },
    {
      type: 'shape',
      text: '⚙️ Fase 2: Automatización\n- CRM interno\n- Odoo contabilidad\n- Flujo validación cotizaciones',
      x: xStart + gap * 2,
      y: yLevel,
      style: {
        shapeType: 'rectangle',
        backgroundColor: '#B4F8C8',
        fontSize: 16,
      },
    },
    {
      type: 'shape',
      text: '🛒 Fase 3: Marketplace\n- Productos propios y de proveedores\n- Membresías premium\n- Subscripción compradores',
      x: xStart + gap * 3,
      y: yLevel,
      style: {
        shapeType: 'rectangle',
        backgroundColor: '#FFAEBC',
        fontSize: 16,
      },
    },
    {
      type: 'shape',
      text: '🚀 Resultado\nAG Química escalable, automatizada y posicionada',
      x: xStart + gap * 4,
      y: yLevel,
      style: {
        shapeType: 'rectangle',
        backgroundColor: '#D2B4DE',
        fontSize: 16,
      },
    },
  ];

  // Conexiones visuales entre fases
  const lines = [
    {
      type: 'line',
      startWidgetId: null, // Lo asignamos después de crear los shapes
      endWidgetId: null,
      style: {
        lineColor: '#888',
        lineEndStyle: 'arrow',
      },
    },
    {
      type: 'line',
      startWidgetId: null,
      endWidgetId: null,
      style: {
        lineColor: '#888',
        lineEndStyle: 'arrow',
      },
    },
    {
      type: 'line',
      startWidgetId: null,
      endWidgetId: null,
      style: {
        lineColor: '#888',
        lineEndStyle: 'arrow',
      },
    },
    {
      type: 'line',
      startWidgetId: null,
      endWidgetId: null,
      style: {
        lineColor: '#888',
        lineEndStyle: 'arrow',
      },
    },
  ];

  // Crear primero los rectángulos
  const createdShapes = await miro.board.widgets.create(shapes);

  // Luego agregamos las líneas conectando cada fase
  lines.forEach((line, index) => {
    line.startWidgetId = createdShapes[index].id;
    line.endWidgetId = createdShapes[index + 1].id;
  });

  await miro.board.widgets.create(lines);
});
