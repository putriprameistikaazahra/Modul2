let users = [
    {id: 1, nama:"raraaa", email: "@putriprameistika@gmail.com"},
    {id: 2, nama:"zaraaa", email: "@prameistikaazahra@gmail.com"},
]

  module.exports = {
    index: (req, res) => {
        if(users.length > 0){
            res.json({
                status: true,
                data: users,
                method: req.method,
                url: req.url,
                message: "Data ketemu nih"
            })
        }else{
            res.json({
                status: false,
                message: "Gaada nih"
            })
        }
      },
      store: (req, res) => {
        users.push(req.body)
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Ada data baru nih"
        })
      },
      update: (req, res) => {
        const id = req.params.id
        users .filter(user => {
            if (user.id == id){
                user.nama = req.body.nama
                user.email = req.body.email
                return user
            }
        })
            res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data udah diganti"
        })
      },
      delete: (req, res) => {
        const id = req.params.id
        users = users.filter(user => user.id != id)
    
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Lha Kok Ilang"
        })
      }
}