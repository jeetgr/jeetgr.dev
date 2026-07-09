import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "react-email";

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

export default function ContactEmail({
  name,
  email,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from {name} via jeetgr.dev</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={eyebrow}>JEETGR.DEV — NEW MESSAGE</Text>

          <Heading style={heading}>{name} sent you a message</Heading>

          <Section style={metaBox}>
            <Text style={metaLabel}>FROM</Text>
            <Text style={metaValue}>
              {name} — {email}
            </Text>
          </Section>

          <Hr style={hr} />

          <Text style={messageLabel}>MESSAGE</Text>
          <Text style={messageBody}>{message}</Text>

          <Hr style={hr} />

          <Text style={footer}>
            Sent from the contact form at jeetgr.dev — reply directly to this
            email to respond to {name}.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#F7F6F2",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  padding: "40px 0",
};

const container = {
  backgroundColor: "#ffffff",
  maxWidth: "480px",
  margin: "0 auto",
  padding: "40px",
  borderRadius: "8px",
  border: "1px solid #E5E4E0",
};

const eyebrow = {
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "11px",
  letterSpacing: "1px",
  color: "#8A8A85",
  margin: "0 0 16px",
};

const heading = {
  fontSize: "22px",
  fontWeight: 600,
  color: "#12141C",
  margin: "0 0 24px",
};

const metaBox = {
  backgroundColor: "#F7F6F2",
  borderRadius: "6px",
  padding: "12px 16px",
};

const metaLabel = {
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "10px",
  letterSpacing: "1px",
  color: "#8A8A85",
  margin: "0 0 4px",
};

const metaValue = {
  fontSize: "14px",
  color: "#12141C",
  margin: 0,
};

const hr = {
  borderColor: "#E5E4E0",
  margin: "24px 0",
};

const messageLabel = {
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "10px",
  letterSpacing: "1px",
  color: "#8A8A85",
  margin: "0 0 8px",
};

const messageBody = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#12141C",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  fontSize: "12px",
  color: "#8A8A85",
  margin: 0,
};
