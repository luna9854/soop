"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { siteConfig } from "@/site.config";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  registrationSchema,
  type RegistrationFormData,
} from "@/lib/schemas/registration";
import { cn } from "@/lib/utils";

// Web3Forms Access Key - 무료로 https://web3forms.com 에서 발급
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

export function RegistrationSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      phone: "",
      interestedType: "",
      privacyConsent: false,
    },
  });

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          to: "ajvls98@gmail.com",
          subject: `[진영 노르웨이 숲] 관심고객 등록 - ${data.name}`,
          from_name: "진영 노르웨이 숲 홈페이지",
          이름: data.name,
          연락처: data.phone,
          관심평형: data.interestedType,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("관심고객 등록이 완료되었습니다.", {
          description: "빠른 시일 내에 연락드리겠습니다.",
        });
        reset();
      } else {
        throw new Error("등록에 실패했습니다.");
      }
    } catch {
      toast.error("등록에 실패했습니다.", {
        description: "잠시 후 다시 시도해주세요.",
      });
    }
  };

  return (
    <SectionWrapper id="registration">
      <SectionHeading
        id="registration-heading"
        subtitle="관심고객으로 등록하시면 분양 관련 정보를 받아보실 수 있습니다"
      >
        관심고객 등록
      </SectionHeading>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto space-y-6"
        noValidate
      >
        {/* 이름 */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            이름 <span className="text-destructive">*</span>
          </label>
          <Input
            id="name"
            type="text"
            placeholder="홍길동"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* 전화번호 */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium">
            휴대폰 번호 <span className="text-destructive">*</span>
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="010-1234-5678"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="text-sm text-destructive">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* 관심 평형 */}
        <div className="space-y-2">
          <label htmlFor="interestedType" className="block text-sm font-medium">
            관심 평형 <span className="text-destructive">*</span>
          </label>
          <select
            id="interestedType"
            aria-invalid={!!errors.interestedType}
            aria-describedby={
              errors.interestedType ? "interestedType-error" : undefined
            }
            className={cn(
              "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-[3px] aria-invalid:ring-[3px] md:text-sm w-full outline-none",
              errors.interestedType && "border-destructive"
            )}
            {...register("interestedType")}
          >
            <option value="">평형을 선택하세요</option>
            {siteConfig.floorPlans.map((plan) => (
              <option key={plan.type} value={plan.type}>
                {plan.type} ({plan.area})
              </option>
            ))}
          </select>
          {errors.interestedType && (
            <p id="interestedType-error" className="text-sm text-destructive">
              {errors.interestedType.message}
            </p>
          )}
        </div>

        {/* 개인정보 동의 */}
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <input
              id="privacyConsent"
              type="checkbox"
              className="mt-1 size-4 rounded border-input"
              aria-invalid={!!errors.privacyConsent}
              aria-describedby={
                errors.privacyConsent ? "privacyConsent-error" : undefined
              }
              {...register("privacyConsent")}
            />
            <label htmlFor="privacyConsent" className="text-sm leading-relaxed">
              <span className="text-destructive">[필수]</span> 개인정보 수집 및
              이용에 동의합니다.
              <br />
              <span className="text-muted-foreground text-xs">
                (수집항목: 이름, 연락처, 관심평형 / 보유기간: 분양 완료 후 1년)
              </span>
            </label>
          </div>
          {errors.privacyConsent && (
            <p id="privacyConsent-error" className="text-sm text-destructive">
              {errors.privacyConsent.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-6 text-lg font-semibold bg-amber-500 hover:bg-amber-600"
        >
          {isSubmitting ? "등록 중..." : "관심고객 등록하기"}
        </Button>
      </form>
    </SectionWrapper>
  );
}
