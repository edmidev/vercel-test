export default function handler(req, res) {
  // Extraemos el código de la query (opcional, por si luego lo necesitas)
  const { code } = req.query;

  // El JSON predeterminado que definiremos
  const responseData = {"data":{"isValid":true},"success":true}


  // Devolvemos la respuesta con estado 200
  return res.status(200).json(responseData);
}