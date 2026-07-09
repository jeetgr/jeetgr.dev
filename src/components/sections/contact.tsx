import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";

import { sendContactEmail } from "@/functions/send-contact-email";
import { contactSchema } from "@/lib/contact-schema";
import type { ContactFormValues } from "@/lib/contact-schema";

import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export function Contact() {
  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: contactSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await sendContactEmail({ data: value });
        toast.success("Message sent — I'll get back to you soon.");
        form.reset();
      } catch {
        toast.error("Something went wrong. Try again or email me directly.");
      }
    },
  });

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <span className="text-muted font-mono text-xs tracking-widest">
        SEC.06 — CONTACT
      </span>

      <h2 className="font-display text-foreground mt-6 text-3xl font-medium md:text-4xl">
        Let's work together.
      </h2>
      <p className="text-muted mt-4 max-w-md">
        Have a project in mind or just want to say hi? Send a message and I'll
        get back to you.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
        className="mt-10 max-w-lg"
      >
        <FieldGroup>
          <form.Field
            name="name"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>NAME</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => {
                      field.handleChange(e.target.value);
                    }}
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          <form.Field
            name="email"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>EMAIL</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="text"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => {
                      field.handleChange(e.target.value);
                    }}
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          <form.Field
            name="message"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>MESSAGE</FieldLabel>
                  <Textarea
                    id={field.name}
                    name={field.name}
                    rows={5}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => {
                      field.handleChange(e.target.value);
                    }}
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </FieldGroup>

        <form.Subscribe selector={(state) => state.isSubmitting}>
          {(isSubmitting) => (
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-primary-foreground mt-6 w-fit rounded-md px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          )}
        </form.Subscribe>
      </form>
    </section>
  );
}
