import {Router} from 'express';
import { postsGet } from './postsGet';
import { postCreate } from './postCreate';
import { postLike } from './postLike';
import { postUnlike } from './postUnlike';
import { postsGetComments } from './postGetComments';
import { postGetSingle } from './postGetSingle';
import { postsFeed } from './postsFeed';
import { postNotifications } from './postNotifications';

const PostsRouter = Router();


postNotifications(PostsRouter);
postsFeed(PostsRouter);
postGetSingle(PostsRouter);
postsGet(PostsRouter);
postCreate(PostsRouter);
postLike(PostsRouter);
postUnlike(PostsRouter);
postsGetComments(PostsRouter);

export {PostsRouter};