import PostModel from "../models/Post.model.js";

export const GetAllPosts = async (req, res, next) => {
  try {
    const PostLists = await PostModel.find();
    res.status(200).json({
      message: "All Posts recieved sucessfully",
      data: {
        PostLists,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const GetAPost = async (req, res,next) => {
  try {
    const id = req.params.PostId;
    const SinglePost = await PostModel.findOne({ PostId: id });
    res.status(200).json({
      message: "Single Post recieved",
      data: {
        SinglePost,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const CreatePost = async (req, res, next) => {
  try {
    await new PostModel(req.body).save();

    res.status(200).json({
      message: "New Post Saved Successfully",
      status: "Sucessfull",
    });
  } catch (error) {
    next(error);
  }
};

export const DeletePost = async (req, res, next) => {
  try {
    const id = req.params.PostId;
    await PostModel.deleteOne({ PostId: id });
    res.status(200).json({
      message: "Post successfully Deleted",
      status: "Success",
    });
  } catch (error) {
    next(error);
  }
};
