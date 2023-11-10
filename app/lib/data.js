import { User } from "./models"
import { connectToDB } from "./utils"

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");

    const ITEM_PER_PAGE = 4

    try {

        connectToDB()
        const users = User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE);
        return users
    } catch (err) {
        console.log(err)
        throw new Error("Failed to fetch users!")
    }
}