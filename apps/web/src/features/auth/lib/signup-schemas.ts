import { z } from "zod";

export const signupSchema = z
  .object({
    userId: z.string().email("이메일 형식이 올바르지 않습니다."),
    password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
    confirmPassword: z.string(),
    name: z.string().min(2, "이름은 2자 이상이어야 합니다."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"], // 에러를 표시할 필드 지정!!
  });

export type SignupDataForm = z.infer<typeof signupSchema>;
