import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, telefono, email, motivo, source } = body

    // Validate required fields
    if (!nombre || !telefono) {
      return NextResponse.json({ error: "Nombre y teléfono son requeridos" }, { status: 400 })
    }

    // Prepare data for webhook
    const leadData = {
      nombre,
      telefono,
      email: email || "",
      motivo: motivo || "No especificado",
      source: source || "website",
      timestamp: new Date().toISOString(),
      url: request.headers.get("referer") || "",
    }

    // Send to webhook (n8n/Kommo)
    const webhookUrl = process.env.KOMMO_WEBHOOK_URL
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(leadData),
        })
      } catch (webhookError) {
        console.error("Webhook error:", webhookError)
        // Continue execution even if webhook fails
      }
    }

    // Log lead (you could also save to database here)
    console.log("New lead:", leadData)

    return NextResponse.json({ success: true, message: "Lead enviado correctamente" })
  } catch (error) {
    console.error("Lead API error:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
