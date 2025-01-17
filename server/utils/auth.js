import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'mysecretsshhhhh';
const expiration = '2h';

export function authMiddleware({ req }) {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.error(err);
    res.status(401).json({ error: 'Invalid token', });
    return;
  }

  return req;
};

export function signToken({ username, email, _id }) {
  const payload = { username, email, _id };

  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};
