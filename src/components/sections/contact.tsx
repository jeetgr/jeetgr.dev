import { useForm } from "@tanstack/react-form";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { toast } from "sonner";

import { sendContactEmail } from "@/functions/send-contact-email";
import { contactSchema } from "@/lib/contact-schema";
import type { ContactFormValues } from "@/lib/contact-schema";
import { fadeOnly, fadeUp } from "@/lib/motion";

import { SectionWrapper } from "../layout/section-wrapper";
import { Button } from "../ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Magnetic } from "../ui/magnetic";
import { Reveal, RevealItem } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionLabel } from "../ui/section-label";
import { Textarea } from "../ui/textarea";

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
  website: "",
};

export function Contact() {
  const reduced = useReducedMotion() ?? false;
  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: contactSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await sendContactEmail({ data: value });
        toast.success("Thanks! I'll get back to you soon.");
        form.reset();
      } catch {
        toast.error("Something went wrong. Try again or email me directly.");
      }
    },
  });

  return (
    <SectionWrapper id="contact">
      <Reveal stagger>
        <SectionLabel index={6} label="Send a signal" />

        <div className="mt-6 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <RevealItem>
            <SectionHeading className="mt-0">Say hello.</SectionHeading>
            <p className="text-muted mt-6 max-w-md leading-7">
              A role, a project, or something interesting on the web — send a
              note and I&apos;ll read it. Every message reaches me directly.
            </p>
            <a
              href="mailto:hello@jeetgr.dev"
              className="text-foreground border-border hover:border-accent hover:text-accent-text mt-9 inline-block border-b pb-1 font-mono text-sm transition-colors"
            >
              hello@jeetgr.dev ↗
            </a>
          </RevealItem>

          <motion.form
            variants={reduced ? fadeOnly : fadeUp}
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
                <Magnetic className="mt-8">
                  <Button
                    type="submit"
                    size="md"
                    disabled={isSubmitting}
                    className="w-fit"
                  >
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={isSubmitting ? "sending" : "idle"}
                        initial={reduced ? false : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduced ? undefined : { opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex items-center gap-2"
                      >
                        {isSubmitting ? "Sending..." : "Send message"}
                      </motion.span>
                    </AnimatePresence>
                  </Button>
                </Magnetic>
              )}
            </form.Subscribe>
          </motion.form>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
