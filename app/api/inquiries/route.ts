import { env } from "cloudflare:workers";
import { getDb } from "../../../db";
import { inquiries } from "../../../db/schema";

type Inquiry = { name?: string; email?: string; phone?: string; city?: string; experience?: string; timeline?: string; specialties?: string; message?: string; consent?: string };

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Inquiry;
    const required = ["name", "email", "phone", "city", "experience", "timeline", "message"] as const;
    for (const field of required) if (!body[field]?.trim()) return Response.json({ error: `${field} is required` }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email!)) return Response.json({ error: "A valid email is required" }, { status: 400 });
    if (body.consent !== "yes") return Response.json({ error: "Consent is required" }, { status: 400 });

    const record = { name: body.name!.trim(), email: body.email!.trim().toLowerCase(), phone: body.phone!.trim(), city: body.city!.trim(), experience: body.experience!.trim(), timeline: body.timeline!.trim(), specialties: body.specialties?.trim() ?? "", message: body.message!.trim(), consent: true };
    const [saved] = await getDb().insert(inquiries).values(record).returning({ id: inquiries.id });

    const runtime = env as unknown as { GOOGLE_APPS_SCRIPT_URL?: string };
    if (runtime.GOOGLE_APPS_SCRIPT_URL) {
      await fetch(runtime.GOOGLE_APPS_SCRIPT_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...record, inquiryId: saved.id, source: "Apex Automotive website" }) });
    }
    return Response.json({ ok: true, id: saved.id }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to process inquiry";
    return Response.json({ error: message }, { status: 500 });
  }
}
