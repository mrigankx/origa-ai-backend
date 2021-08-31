
import Order from "../models/Order.js";
import User from "../models/User.js";

export const postOrders = async (req, res) => {
    try {
        const { orderId, userId, subtotal, date } = req.body;
        const newdata = new Order({
            orderId,
            userId,
            subtotal,
            date
        });
        await newdata.save();
        return res.status(201).json({ status: "ok", body: null, msg: "Expenses Added Successfully", error: null });
    } catch (error) {
        console.log(error);
    }
}
export const details = async (req, res) => {
    try {
        let resultData = await Order.aggregate([
            {
                $group: {
                    _id: "$userId",
                    averageBillValue: { $avg: "$subtotal" },
                    noOfOrders: { $sum: 1 }
                }
            },
        ]);
        let userdata = await User.find();
        resultData = userdata.map((item, i) => Object.assign({}, item._doc, resultData[i]));
        if (!resultData.length) {
            return res.status(404).json({ success: false, message: "No data found" });
        }
        resultData.map((data) => {
            data['userId'] = data['_id'];
            delete data['_id'];
            data['averageBillValue'] = Math.floor(data['averageBillValue']);
        });

        return res.status(201).json({ success: true, message: "data found", data: resultData });
    } catch (error) {
        console.log(error);
    }
}

export const updateUserInfo = async (req, res) => {
    try {
        let resultData = await Order.aggregate([
            {
                $group: {
                    _id: "$userId",
                    noOfOrders: { $sum: 1 }
                }
            },
        ]);

        for (let i = 0; i < resultData.length; i++) {
            await User.updateOne({ "userId": resultData[i]._id }, { $set: { "noOfOrders": resultData[i].noOfOrders } });
        }

        return res.status(201).json({ success: true, message: "Successfully updated" });
    } catch (error) {
        console.log(error);
    }
}