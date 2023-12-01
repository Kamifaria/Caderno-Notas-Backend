const Annotations = require('../models/AnnotationsData');

module.exports = {

    async update(request, response) {

        const { id } = request.params;
        const { notes } = request.body;

        try {
            const annotation = await Annotations.findOne({ _id: id });

            if (!annotation) {
                return response.status(404).json({ error: 'A anotação não foi encontrada' });
            }

            if (typeof notes !== 'undefined') {
                annotation.notes = notes;
                await annotation.save();
            }

            return response.json(annotation);
        } catch (error) {
            return response.status(500).json({ error: 'Erro interno ao tentar atualizar a anotação' });
        }
    }
};
