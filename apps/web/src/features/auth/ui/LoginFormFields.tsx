import { UseFormReturn } from "react-hook-form";
import { LoginDataForm } from "../lib/login-schemas";
import { Input } from "@kiroku/ui";

interface LoginFormFieldsProps {
  form: UseFormReturn<LoginDataForm>;
}

export const LoginFormFields = ({ form }: LoginFormFieldsProps) => {
  const { register } = form;
  const { errors } = form.formState;
  return (
    <div className="space-y-2 p-1">
      <div className="space-y-2">
        <Input
          label="이메일"
          error={errors.userId?.message}
          {...register("userId")}
          id="email"
          type="text"
          placeholder="이메일"
        />
      </div>

      <div className="space-y-2">
        <Input
          label="비밀번호"
          error={errors.password?.message}
          {...register("password")}
          id="password"
          type="password"
          placeholder="비밀번호"
        />
      </div>
    </div>
  );
};
