"use server";

import { supabase } from "@/lib/supabase";

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

    return { success: true };
  } catch (error) {
    console.error("Server action error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
