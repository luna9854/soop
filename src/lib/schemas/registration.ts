import { z } from "zod";

export const registrationSchema = z.object({
  name: z
    .string()
    .min(2, { message: "이름은 2글자 이상 입력해주세요." })
    .max(20, { message: "이름은 20글자 이하로 입력해주세요." }),
  phone: z
    .string()
    .regex(/^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/, {
      message: "올바른 휴대폰 번호를 입력해주세요.",
    }),
  interestedType: z.string().min(1, { message: "관심 평형을 선택해주세요." }),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집 및 이용에 동의해주세요.",
  }),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
