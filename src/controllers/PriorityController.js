const Annotations = require('../models/AnnotationsData');

module.exports = {

    async read(request, response) {
        const priority = request.query;
        const priorityNotes = await Annotations.find(priority);
        return response.json(priorityNotes);
    },

    async update(request, response) {
        const { id } = request.params;

        try {
            const annotation = await Annotations.findOne({ _id: id });

            if (!annotation) {
                return response.status(404).json({ error: 'A anotação não foi encontrada' });
            }

            annotation.priority = !annotation.priority; // Toggle the priority

            await annotation.save();
            
            return response.json(annotation);
        } catch (error) {
            return response.status(500).json({ error: 'Erro interno ao tentar atualizar a anotação' });
        }
    }
};
