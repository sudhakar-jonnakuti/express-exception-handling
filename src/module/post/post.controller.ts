import { Request, Response } from 'express';

import SuccessResponse from '../../common/builder/success-response.builder';

class PostController {

  public createPost = (request: Request, response: Response) => {
    const postData = request.body;
    response.status(200).json(SuccessResponse(200, { postData }));
  }

  public getPosts = (request: Request, response: Response) => {
    const title = request.query.title;
    response.status(200).json(SuccessResponse(200, { title }));
  }

  public getPostById = (request: Request, response: Response) => {
    const id = request.params.id;
    response.status(200).json(SuccessResponse(200, { id }));
  }

  public updatePost = (request: Request, response: Response) => {
    const id = request.params.id;
    const postData = request.body;
    response.status(200).json(SuccessResponse(200, { id, postData }));
  }

  public deletePost = (request: Request, response: Response) => {
    const id = request.params.id;
    response.status(200).json(SuccessResponse(200, { id }));
  }

}

export default PostController;