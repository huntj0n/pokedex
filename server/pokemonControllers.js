module.exports = {
    getPokemon: (req, res) => {
        const db = req.app.get('db')
        db.pokemon
            .get_pokemon()
            .then((pokemon) => {
                res.status(200).send(pokemon)
            })
            .catch((err) => {
                console.log(err)
                res.status(500).send(err)
            })
    },
    addPokemon: (req, res) => {
        const db = req.app.get('db')
        db.pokemon
            .add_pokemon()
            .then((pokemon) => res.status(200).send(pokemon))
            .catch((err) => {
                console.log(err)
                res.status(500).send(err)
            })
    },
    editPokemon: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params;
        const {} = req.body
        db.pokemon
            .edit_pokemon()
            .then((pokemon) => res.status(200).send(pokemon))
            .catch((err) => {
                console.log(err)
                res.status(500).send(err)
            })
    },
    deletePokemon: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params;
        db.pokemon
            .delete_pokemon(id)
            .then((pokemon) => res.status(200).send(pokemon))
            .catch((err) => {
                console.log(err)
                res.status(500).send(err)
            })
    },
}