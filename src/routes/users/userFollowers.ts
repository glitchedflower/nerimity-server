import { Request, Response, Router } from 'express';

import { authenticate } from '../../middleware/authenticate';
import { rateLimit } from '../../middleware/rateLimit';
import { followerUsers } from '../../services/User/User';

export function userFollowers(Router: Router) {
  Router.get(
    '/users/:userId?/followers',
    authenticate(),
    rateLimit({
      name: 'user_followers',
      restrictMS: 60000,
      requests: 20,
    }),
    route
  );
}

interface Params {
  userId?: string;
}

async function route(req: Request, res: Response) {
  const params = req.params as unknown as Params;

  const [followers, error] = await followerUsers(params.userId || req.userCache.id, req.userCache.id);

  if (error) {
    return res.status(400).json(error);
  }
  res.json(followers);
}
