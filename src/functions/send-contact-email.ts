import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

import { env } from "@/env";
import { contactSubmitSchema } from "@/lib/contact-schema";
import { contactRateLimitMiddleware } from "@/middleware/contact-rate-limit";

import ContactEmail from "../../emails/contact-email";

const resend = new Resend(env.RESEND_API_KEY);

export const sendContactEmail = createServerFn({ method: "POST" })
  .middleware([contactRateLimitMiddleware])
  .validator(contactSubmitSchema)
  .handler(async ({ data }) => {
    if (data.website) {
      return { success: true };
    }

    const { name, email, message } = data;

    const { error } = await resend.emails.send({
      from: "jeetgr.dev <hello@jeetgr.dev>",
      to: "hello@jeetgr.dev",
      replyTo: email,
      subject: `New message from ${name}`,
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      throw new Error("Failed to send message");
    }

    return { success: true };
  });
