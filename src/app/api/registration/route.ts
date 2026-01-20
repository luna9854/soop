import { NextResponse } from "next/server";

import { registrationSchema } from "@/lib/schemas/registration";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const result = registrationSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "유효하지 않은 데이터입니다.", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, phone, interestedType } = result.data;

    // TODO: 실제 구현 시 데이터베이스 저장 또는 이메일 발송 등 처리
    // 예: Supabase, 이메일 서비스 연동 등
    console.log("관심고객 등록:", { name, phone, interestedType });

    // 성공 응답
    return NextResponse.json(
      { success: true, message: "관심고객 등록이 완료되었습니다." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
