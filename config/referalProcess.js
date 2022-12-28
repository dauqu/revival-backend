
const User = require('../models/userSchema');

function getAmount(level) {
    switch (Number(level)) {
        case 1:
            amount = 150;
            break;
        case 2:
            amount = 225;
            break;
        case 3:
            amount = 337.5;
            break;
        case 4:
            amount = 506.25;
            break;
        case 5:
            amount = 759.375;
            break;
        default:
            amount = 150;
            break;
    }
    return amount;
}

function calculateAmout(percentage, amount) {
    return (percentage / 100) * amount;
}

async function updateUpperLevel(referal, amount, level, maxlevel, direct = false) {
    try {

        console.log('Working...' + referal + " " + level + " " + maxlevel + " " + amount);
        if (level === maxlevel) {
            return amount;
        }

        const user = await User.findOneAndUpdate({ username: referal });

        // console.log('Updating...');
        // console.log(user);

        if (direct) {
            user.total_referral += 1;
        }

        let calcAmount = calculateAmout(10, amount);
        
        user.total_earning += calcAmount;
        user.total_referral_earning += calcAmount;
        amount -= calcAmount;

        await user.save();

        level += 1;
        direct = false;
        if(user.referal){
            updateUpperLevel(user.referal, amount, level, maxlevel, direct);
        }
        return amount;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAmount,
    calculateAmout,
    updateUpperLevel
}