const router = require("express").Router();
const Bank = require("../models/bankSchema");

// get all beneficiaries
router.get("/", async (req, res) => {
    try {
        const banks = await Bank.find().sort({ createdAt: -1 });;
        res.json({banks, status: "success"})
    } catch (err) {
        res.json({ message: err });
    }
});

// create new Beneficiary 
router.post("/", validateBank, async (req, res) => {
    const {account_holder,account_no, bank_name, recieve_address, branch_name, bank_code, swift_code, bank_type} = req.body;

    try {
        const new_bank = new Bank({
            account_holder,
            account_no,
            bank_name,
            branch_name,
            bank_code,
            swift_code,
            bank_type,
            recieve_address
        });

        const saved_Bank = await new_bank.save();
        return res.json({ message: "Bank details added", status: "success", bank: saved_Bank});
    } catch (err) {
        return res.json({ message: err });
    }

});

function validateBank(req, res, next) {
    const {account_holder,account_no, bank_name, branch_name, bank_code, swift_code, bank_type, recieve_address} = req.body;

    if (!account_holder || !account_no || !bank_name || !branch_name || !bank_code || !swift_code || !bank_type || !recieve_address || account_holder === "" || account_no === "" || bank_name === "" || branch_name === "" || bank_code === "" || swift_code === "" || bank_type === "" || recieve_address === "") {
        return res.json({ message: "Please fill all fields" });
    }

    next();
}


module.exports = router;
