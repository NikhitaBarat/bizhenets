
// @desc 
// @route
const sendSoS = async (req, res) => {

}

// @desc 
// @route
const getSoS = async (req, res) => {
    

}

// @desc 
// @route
const removeSoS = async (req, res) => {

}

// @desc 
// @route
const getOneSoS = async (req, res) => {
    try {


    }catch(error){
        res.status(400).send(error)
    }

}

// @desc 
// @route
const updateSoS = async (req, res) => {
    try{

    }catch(error){
        res.status(400).send(error)
    }

}

module.exports = {
    getOneSoS,
    getSoS,
    removeSoS,
    sendSoS,
    updateSoS
}