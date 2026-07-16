import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as v from "valibot";

import { sendContactEmail } from "@/functions/send-contact-email";
import { contactSchema } from "@/lib/contact-schema";
import type { ContactSubmitValues } from "@/lib/contact-schema";

import { SectionWrapper } from "../layout/section-wrapper";
import { Button } from "../ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionLabel } from "../ui/section-label";
import { Textarea } from "../ui/textarea";

const defaultValues: ContactSubmitValues = {
  name: "",
  email: "",
  message: "",
  website: "",
};

export function Contact() {
  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: ({ value }) => {
        const result = v.safeParse(contactSchema, value);
        return result.success ? undefined : result.issues;
      },
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
    <SectionWrapper id="contact">
      <Reveal>
        <SectionLabel index={6} label="CONTACT" />

        <SectionHeading>Get in touch</SectionHeading>
        <p className="text-muted mt-4 max-w-md">
          Project, question, or just want to chat — send a message.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
          className="mt-10 max-w-lg"
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
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
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
                      type="email"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                      }}
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
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
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>

          <form.Subscribe selector={(state) => state.isSubmitting}>
            {(isSubmitting) => (
              <Button
                type="submit"
                size="md"
                disabled={isSubmitting}
                className="mt-6 w-fit"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
            )}
          </form.Subscribe>
        </form>
      </Reveal>
    </SectionWrapper>
  );
}
