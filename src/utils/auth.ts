export const getJWTSecret = (): string => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("no jwt provided, check the environment variables");
  }
  return secret;
};
