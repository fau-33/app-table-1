const { Address } = require('../models');

const getAllEmployeeId = async (employeeId) => {
    const addresses = await Address.findAll({ where: { employeeId }});
    
    return addresses;
};

module.exports = {
    getAllEmployeeId,
};