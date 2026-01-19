
import { NextResponse } from "next/server";
import { getModules } from "@/lib/notion";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export async function GET() {
    try {
        const modules = await getModules();
        return NextResponse.json({ modules });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Failed to fetch modules" },
            { status: 500 }
        );
    }
}