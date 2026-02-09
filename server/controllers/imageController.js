import userModel from "../models/userModel"

export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body
        const user = await userModel.findById()
        if (!user || !prompt) {
            return res.json({ succes: false, message: "Missing Details" })
        }

        if (user.creditBalance === 0 || userModel.creditBalance < 0) {
            res.json({ succes: false, message: "No credit Balance", creditBalance: user.creditBalance })
        }

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }


}