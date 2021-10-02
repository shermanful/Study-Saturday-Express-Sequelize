const router = require('express').Router();

// router.get("/students", async (req,res,next) => {
//     try {
//         const students = await Students.findAll();
//         res.send(userList(students));
//       } catch (error) {
//         next(error);
//       }
//     });
// })
// GET /users/:userId
// router.get("/:userId", async (req, res, next) => {
//     try {
//       const user = await User.findByPk(req.params.userId);
//       const pages = await Page.findAll({
//         where: {
//           authorId: req.params.userId
//         }
//       });
  
//       res.send(userPages(user, pages));
//     } catch (error) {
//       next(error);
//     }
//   });

function () {
    // returns an array of all people for whom tasks exist
    return Object.keys(studentData);
  },

module.exports = router;
