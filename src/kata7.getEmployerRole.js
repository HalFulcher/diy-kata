const getEmployerRole = (employeeName, employees) => {


let obj = employees.find(o => o.name === employeeName);

return obj.role;

};



module.exports = getEmployerRole;
