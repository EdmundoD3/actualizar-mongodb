import Status from "../models/Status.js"

class StatusRepository {
    static async save(status){
        const statusFinded = await Status.findOne({status})
        if(statusFinded) return statusFinded
        const newStatus = new Status({status})
        return newStatus.save()
    }
}

export default StatusRepository