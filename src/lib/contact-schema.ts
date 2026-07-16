import * as v from "valibot";

export const contactSchema = v.object({
  name: v.pipe(
    v.string(),
    v.minLength(2, "Name is too short"),
    v.maxLength(80)
  ),
  email: v.pipe(v.string(), v.email("Enter a valid email")),
  message: v.pipe(
    v.string(),
    v.minLength(10, "Message is too short"),
    v.maxLength(2000)
  ),
});

/** Includes the honeypot field sent to the server. */
export const contactSubmitSchema = v.object({
  ...contactSchema.entries,
  website: v.optional(v.string(), ""),
});

export type ContactFormValues = v.InferOutput<typeof contactSchema>;
export type ContactSubmitValues = v.InferOutput<typeof contactSubmitSchema>;
