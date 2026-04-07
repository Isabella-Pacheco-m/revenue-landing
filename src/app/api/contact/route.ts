import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("Missing DATABASE_URL environment variable");
}

const sql = neon(DATABASE_URL);

async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT NOT NULL,
      message TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Nombre, email y empresa son requeridos" },
        { status: 400 }
      );
    }

    await ensureTable();

    await sql`
      INSERT INTO contacts (name, email, company, message)
      VALUES (${name}, ${email}, ${company}, ${message || ""})
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
