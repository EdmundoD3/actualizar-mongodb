import User from "../models/User.js";

export default class UserRepository {
    static async save({
        name,
        phone="",
        email="",
        password="",
        roles=[],
        isActive=false,
        lastUpdate=new Date(),
      }){
        const userFinded = await User.findOne({name})
        if(userFinded) return userFinded
        const username = name + `gn${new Date().getFullYear()}`;
        const newUser = new User({name,username,phone,email,password,roles,isActive,lastUpdate})
        const user = newUser.save()
        return user
    }
    static async findById(id){
        return User.findById(id)
    }
}