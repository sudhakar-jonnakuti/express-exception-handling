import { object, string } from 'zod';
import mongoose from 'mongoose';

export const postTitleSchema = object({
  query: object({
    title: string().nullable().optional()
      .refine((val: any) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(val), {
        message: 'Please enter a valid title',
      })
  })
});

export const postIdSchema = object({
  params: object({
    id: string().optional()
      .refine((val: any) => mongoose.isValidObjectId(val), {
        message: 'Please enter a valid ObjectId',
      })
  })
});

export const createPostSchema = object({
  body: object({
    title:
      string({
        required_error: 'The title is required',
      }).refine((val: any) => /^[a-zA-Z ]*$/.test(val), {
        message: "Please enter a valid title",
      }),
    author:
      string({
        required_error: 'The author is required',
      }).refine((val: any) => /^[a-zA-Z ]*$/.test(val), {
        message: "Please enter a valid author",
      }),
    url: string({ required_error: 'The url is required' }).url(),
    content: string({ required_error: 'The content is required' })
  })
});

export const updatePostSchema = object({
  params: object({
    id: string().optional()
      .refine((val: any) => mongoose.isValidObjectId(val), {
        message: 'Please enter a valid ObjectId',
      })
  }),
  body: object({
    title: string().nullable().optional()
      .refine((val: any) => /^[a-zA-Z ]*$/.test(val), {
        message: "Please enter a valid title",
      }),
    author:
      string().nullable().optional()
        .refine((val: any) => /^[a-zA-Z ]*$/.test(val), {
          message: "Please enter a valid author",
        }),
    url: string().url().nullable().optional(),
    content: string().nullable().optional()
  })
});
