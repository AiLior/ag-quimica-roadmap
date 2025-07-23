const widgets = {
  "widgets": [
    {
      "type": "shape",
      "x": 0,
      "y": 0,
      "text": "🔷 Fase 1: Diagnóstico",
      "style": {
        "shapeType": "rectangle",
        "backgroundColor": "#e1ecf4",
        "textAlign": "center"
      },
      "width": 400,
      "height": 100
    },
    {
      "type": "shape",
      "x": 0,
      "y": 150,
      "text": "✅ Auditoría de procesos\n✅ Evaluación de herramientas\n✅ Detección de oportunidades",
      "style": {
        "shapeType": "round_rectangle",
        "backgroundColor": "#d5f5e3",
        "textAlign": "left"
      },
      "width": 400,
      "height": 150
    },
    {
      "type": "shape",
      "x": 500,
      "y": 0,
      "text": "🔷 Fase 2: Implementación",
      "style": {
        "shapeType": "rectangle",
        "backgroundColor": "#fdebd0",
        "textAlign": "center"
      },
      "width": 400,
      "height": 100
    },
    {
      "type": "shape",
      "x": 500,
      "y": 150,
      "text": "⚙️ Automatización\n🧩 Desarrollo de Software\n📊 Tableros de control",
      "style": {
        "shapeType": "round_rectangle",
        "backgroundColor": "#fcf3cf",
        "textAlign": "left"
      },
      "width": 400,
      "height": 150
    }
    // Aquí puedes agregar más elementos si gustas, te puedo ayudar con eso.
  ]
};

document.getElementById("createWidgets").addEventListener("click", async () => {
  await miro.board.widgets.create(widgets.widgets);
});
