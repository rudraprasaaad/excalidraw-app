import { z } from "zod";

export const CreateUserSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(8),
  name: z.string(),
});

export const signinSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(8),
});

export const createRoomSchema = z.object({
  roomName: z.string().min(3).max(20),
});
