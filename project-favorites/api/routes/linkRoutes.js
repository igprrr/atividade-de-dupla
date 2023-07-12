const router = require('express').Router()

router.post('/', async (req, res) => {
    const { name, url } = req.body

    if (!name) {
        res.status(422).json({error: 'o nome é obrigatório'})
        return
    }
    if (!url) {
        res.status(422).json({error: 'A url é obrigatória!'})
        return
    }
  
    const link = {
      name,
      url,
    }
  
    try {
      await Link.create(link)
  
      res.status(201).json({ message: 'Link inserido no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  //Read - leitura de dados
  router.get('/', async(req, res) => {
    try{
      const links = Link.find()

      res.status(200).json({ links })
    }catch(error){

    }
  })
  router.get('/:id', async(req, res) => {
    console.log(req)

    //extrair o dado da requisição
    const is = re.params.id
    try{
      const link = await Link.findOne({_id: id})
      if(!link){
        res.status(422).json({message: 'O link não foi encontrado'})
        return
      }
      res.status(200).json({ link })

    }catch(error){
      res.status(500).json({ error })
    }
  })

  // update
  router.patch('/:id', async(req, res) => {
    const id = req.params.id
    const{name, url} = req.body

    const link = {
      name,
      url,
    }

    try{
      const updateLink = await Link.updateOne({_id : id}, link)

      if(updateLink.matchedCount === 0){
        res.status(422).json({message: 'o link não foi encontrado'})
        return

      }
      res.status(200).json({ link })

    }catch(error){
      res.status(500).json({error: error})

    }
     
  })
  //Delete
  router.delete('/:id', async(req, res) => {

    const id = req.params.id

    const link = await Link.findOne({_id: id})

    if (!link){
      res.status(422).json({ message: "O Link não foi encontrado"})
    }

    try{

      await Link.deleteOne({_id: id})

      res.status(200).json({message: 'Link removido com sucesso'})

    }catch(error){
      res.status(500).json({error: error})
    }


  })
  module.exports = router 