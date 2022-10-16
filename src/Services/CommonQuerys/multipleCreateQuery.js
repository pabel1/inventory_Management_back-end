const  mongoose = require("mongoose");

const multipleCreateQuery = async (req, ParentModel, ChildModel, joinField) => {
  const transactionSession = await mongoose.startSession();
  try {
    // transaction start
    transactionSession.startTransaction();

    let parenBody = req.body.parent;
    parenBody.email = req.email;
    let parentCreate = await ParentModel.create([parenBody], {
      transactionSession,
    });

    //  child create

    let childBody = req.body.child;
    childBody.forEach((element) => {
      element[joinField] = parentCreate._id;
      element.email = req.email;
    });

    let childCreate = await ChildModel.insertMany(childBody, {
      transactionSession,
    });

    // transaction success
    await transactionSession.commitTransaction();
    await transactionSession.endSession();

    return {
      status: "success",
      parentData: parentCreate,
      childData: childCreate,
    };

    // await ParentModel.remove({ _id: parentCreate._id });
    // return { status: "failed", message: "Child data Creation failed!" };

    // return { status: "failed", message: "Parent data Creation failed!" };
  } catch (error) {
    // when roll back transaction failed

    await transactionSession.abortTransaction();
    await transactionSession.endSession();

    return { status: "failed", error: error.toString() };
  }
};
module.exports = multipleCreateQuery;
