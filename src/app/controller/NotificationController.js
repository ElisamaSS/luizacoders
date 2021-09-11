import User from "../models/User";
import Notifications from "../schema/Notification";

class NotificationsController{

    async index(req, res){

        const isEmployee = await User.findOne({
            where: { id: req.userId, employee: true }
        })

        if(!isEmployee){
            return res.status(400).json({ message: "Usuário não é um colaborador"})
        }

        const notifications = await Notifications.find({
            user: req.userId,

        }).sort({ createdAt: 'desc' }).limit(20);

        return res.json(notifications)
    }


    async update(req, res){
        const notifications = await Notifications.findByIdAndUpdate( 
            req.parms.id,
            { read: true },
            { new: true }
        )
        return res.json(notifications)
    }
}


export default new NotificationsController();