import { NextRequest, NextResponse } from "next/server";

export interface Lead {
  id: string;
  name: string;
  email: string;
  companyName: string;
  phone?: string;
  teamSize?: string;
  programInterest?: string;
  message?: string;
  createdAt: string;
}

// In-memory mock lead storage for demonstration
const mockLeads: Lead[] = [];

export async function GET() {
  return NextResponse.json({
    success: true,
    total: mockLeads.length,
    leads: mockLeads,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, companyName, company, phone, teamSize, programInterest, message } = body;

    const finalCompany = companyName || company;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Valid full name is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Valid work email address is required." },
        { status: 400 }
      );
    }

    if (!finalCompany || typeof finalCompany !== "string" || finalCompany.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Company name is required." },
        { status: 400 }
      );
    }

    const newLead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      companyName: finalCompany.trim(),
      phone: phone ? String(phone).trim() : undefined,
      teamSize: teamSize || "10-50",
      programInterest: programInterest || "General Enterprise Inquiry",
      message: message ? String(message).trim() : undefined,
      createdAt: new Date().toISOString(),
    };

    mockLeads.push(newLead);

    return NextResponse.json(
      {
        success: true,
        message: "Enterprise lead captured successfully.",
        data: newLead,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error while processing lead." },
      { status: 500 }
    );
  }
}
