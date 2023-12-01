const { request, response } = require("express");
const Annotations = require("../models/AnnotationsData");

module.exports = {
  async read(request, response) {
    const AnnotationsList = await Annotations.find();

    return response.json(AnnotationsList);
  },

  async create(request, response) {
    const { title, notes, priority } = request.body;

    console.warn("Chamada chegou no backend")

    if (!notes || !title) {
      return response
        .status(400)
        .json({ error: "Necessário um título/anotação" });
    }
    
    console.warn("Processando camada de banco de dados")

    const annotationsCreate = await Annotations.create({
      title,
      notes,
      priority,
    });

    return response.json(annotationsCreate);
  },

  async delete(request, response) {
    const { id } = request.params;

    try {
      const annotationsDeleted = await Annotations.findOneAndDelete({ _id: id });

      if (annotationsDeleted) {
        return response.json(annotationsDeleted);
      }

      return response.status(404).json({ error: 'Não foi encontrado o registro para deletar' });
    } catch (error) {
      return response.status(500).json({ error: 'Erro interno ao tentar deletar o registro' });
    }
  }
};
