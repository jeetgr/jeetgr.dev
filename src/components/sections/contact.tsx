import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";

import { sendContactEmail } from "@/functions/send-contact-email";
import { contactSchema } from "@/lib/contact-schema";
import type { ContactFormValues } from "@/lib/contact-schema";

import { Button, buttonVariants } from "../ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
  website: "",
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
        toast.success("Message sent. I'll reply by email.");
        form.reset();
      } catch {
        toast.error("Message not sent. Try again, or email hello@jeetgr.dev.");
      }
    },
  });

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-line mx-6 grid max-w-[61rem] gap-x-16 gap-y-14 border-t py-20 md:py-28 lg:mx-auto lg:grid-cols-[1.1fr_1fr]"
    >
      <div>
        <h2
          id="contact-heading"
          className="font-display max-w-[14ch] text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-balance"
        >
          Available immediately. Let’s talk.
        </h2>
        <p className="text-body mt-6 max-w-[46ch] text-[17px] leading-relaxed">
          I’m serving my notice period and can join right away.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="mailto:hello@jeetgr.dev" className={buttonVariants()}>
            Email me
          </a>
          <a
            href="/resume.pdf"
            download="Jeet-Gangwar-Full-Stack-Developer.pdf"
            className={buttonVariants({ variant: "secondary" })}
          >
            Download résumé
          </a>
        </div>
        <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-semibold">
          <a
            href="https://linkedin.com/in/jeetgr"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-line hover:decoration-foreground underline underline-offset-4 transition-[text-decoration-color] duration-150"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jeetgr"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-line hover:decoration-foreground underline underline-offset-4 transition-[text-decoration-color] duration-150"
          >
            GitHub
          </a>
          <a
            href="mailto:hello@jeetgr.dev"
            className="decoration-line hover:decoration-foreground underline underline-offset-4 transition-[text-decoration-color] duration-150"
          >
            hello@jeetgr.dev
          </a>
        </p>
      </div>

      <form
        aria-label="Contact form"
        className="relative"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
      >
        <form.Field
          name="website"
          children={(field) => (
            <div
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
            >
              <label htmlFor={field.name}>Website</label>
              <input
                id={field.name}
                name={field.name}
                type="text"
                value={field.state.value}
                tabIndex={-1}
                autoComplete="off"
                onChange={(e) => {
                  field.handleChange(e.target.value);
                }}
              />
            </div>
          )}
        />

        <FieldGroup>
          <form.Field
            name="name"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
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
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="email"
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
                  <FieldLabel htmlFor={field.name}>Message</FieldLabel>
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
            <Button type="submit" disabled={isSubmitting} className="mt-6">
              {isSubmitting ? "Sending…" : "Send message"}
            </Button>
          )}
        </form.Subscribe>
      </form>
    </section>
  );
}
