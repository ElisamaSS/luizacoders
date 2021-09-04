import File from '../models/File'
import User from '../models/User'

class FileControllers{
    async store(req, res){

        const { originalname: name, filename: path } = req.file;

        const { id, url} = await File.create({
            name,
            path,
        });


        const sendImage = await User.findOne({
            where: { id: req.userId}
        })

        const { name: username, email, id: userid } = sendImage.update({ photo_id: id})
        return res.json({
           id: sendImage.id,
           name: sendImage.name, 
           profile:{
               url
           }
        })
        
    }


}

export default new FileControllers();