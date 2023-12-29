const validateUserFields = (requiredFields) => (req, res, next) => {
   const missingFields = [];
   requiredFields.forEach((field) => {
      if (!req.body[field]) {
         missingFields.push(field);
      }
   });
   if (missingFields.length > 0) {
      return res.status(400).json({
         error: `Missing required fields: ${missingFields.join(", ")}`,
      });
   }
   next();
};

module.exports = validateUserFields;
// {
//    "user":"658cac2181cc7f45430d53a2",
//    "name":"Harsimarnjit singh",
//    "email":"hsdosanjh1234@gmail.com",
//    "phone":"123345234",
//    "place":"ontarion, cnada",
//    "instagram":"lakjsdflajdf",
//    "github":"alskdfj",
//    "linkedin":"lkajsdf",
//    "age":"alkdsjf",
//    "freelance":"a;lsdkjf",
//    "projects":"alksdjflj",
//    "experience":"alkdjfkla",
//    "awards":"lkajfd",
//    "roles":["Admin"]
// }
