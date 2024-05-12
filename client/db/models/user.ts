import { Users } from "@/interfaces";
import { z } from "zod"
import { hashPassword } from "../helpers/bcrypt";
import { db } from "../config";

type NewUserInput = Omit<Users, '_id'>

export const UserInput = z.object({
    "name": z.string().nonempty({
        message: "Name required"
    }),
    "username": z.string().nonempty({
        message: "Username required"
    }),
    "email": z.string().email().nonempty({
        message: "Email required"
    }),
    "password": z.string().min(5).nonempty({
        message: "Password required"
    })
})

export const UserLogin = z.object({
    "email": z.string().email().nonempty({
        message: "Email required"
    }),
    "password": z.string().min(5).nonempty({
        message: "Password required"
    })
})

export default class User {
    static col () {
        return db.collection<Users>("users")
    }
    static async findAll() {
        return await this.col().find({}).toArray() as Users[]
    }
    static async findByEmail (email: string) {
        const user = await this.col().findOne({
            email:email
        })

        return user
    }
    static async addUser(newUser: NewUserInput) {
        const result = UserInput.safeParse(newUser)

        if(!result.success) {
            throw result.error
        }
        return await this.col().insertOne({
            ...newUser,
            password: hashPassword(newUser.password)
        })
    }
}