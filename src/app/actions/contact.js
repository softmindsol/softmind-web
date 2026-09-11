"use server";

import { createClient } from "@/utils/supabase/server";

export async function submitContactForm(data) {
  try {
    // If Supabase URL and Key are not set, we simulate a successful submission
    // so the form can still be tested locally without errors.
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      console.warn(
        "Supabase credentials are not set. Simulating form submission.",
      );
      await new Promise((resolve) => setTimeout(resolve, 800));
      return { success: true };
    }

    const supabase = await createClient();
    const { error } = await supabase
      .from("contacts") // You can create a 'contacts' table in your Supabase project
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          project_type: data.projectType,
          message: data.message,
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, error: "Failed to save to database." };
    }

    // Insert kaamyab — ab confirmation email bhejain.
    // Ye best-effort hai: agar RESEND_API_KEY set nahi hai ya email fail
    // ho jaye, form submission ko fail nahi maana jayega kyunke data
    // already save ho chuka hai.
    if (process.env.RESEND_API_KEY) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "SoftMind Solutions <contact@softmindsol.com>",
            to: data.email,
            subject: "We've received your project inquiry",
            html: `
              <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto;">
                <h2 style="color:#00235A;">Thanks for reaching out, ${data.name}!</h2>
                <p>We've received your message about your <strong>${data.projectType}</strong> project.</p>
                <p>Our team will review your submission and get back to you within 24 hours.</p>
                <p style="color:#666; font-size:13px; margin-top:24px;">
                  <strong>Your message:</strong><br/>
                  ${data.message}
                </p>
                <p>Best regards,<br/>SoftMind Solutions Team</p>
              </div>
            `,
          }),
        });

        if (!emailRes.ok) {
          const errBody = await emailRes.json().catch(() => ({}));
          console.error("Resend email error:", errBody);
        }
      } catch (emailErr) {
        console.error("Unexpected email error:", emailErr);
      }
    } else {
      console.warn("RESEND_API_KEY not set. Skipping confirmation email.");
    }

    return { success: true };
  } catch (error) {
    console.error("Server action error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
