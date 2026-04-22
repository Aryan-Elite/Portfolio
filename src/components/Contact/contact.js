"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { SectionTitle, SectionText } from "../../styles/GlobalComponents";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 48px 0;
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  background-color: #0f1624;
  height: 100vh;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 16px 0;
    width: calc(100vw - 32px);
  }
`;

const FormWrapper = styled.div`
  background: #0f1624;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  background: #0f1624;
  color: #fff;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.12);

  &:focus {
    outline: none;
    border-color: #13adc7;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  background: #0f1624;
  color: #fff;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.12);

  &:focus {
    outline: none;
    border-color: #13adc7;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
  border: none;
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 150%);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    padding: 10px 18px;
  }
`;

const StatusMsg = styled.p`
  text-align: center;
  margin-top: 12px;
  font-size: 15px;
  color: ${(props) => (props.error ? "#ff6b6b" : "#00dbd8")};
`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ msg: "", error: false });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ msg: "", error: false });

    emailjs
      .send(
        "service_pmws04o",
        "template_9ekr72h",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          phone: formData.phone,
          message: formData.message,
        },
        "4CneYyndPoh1E9ayJ"
      )
      .then(() => {
        setStatus({ msg: "Message sent! I'll get back to you soon.", error: false });
        setFormData({ name: "", email: "", subject: "", phone: "", message: "" });
      })
      .catch(() => {
        setStatus({ msg: "Something went wrong. Please try again.", error: true });
      })
      .finally(() => setSending(false));
  };

  return (
    <Section id="contact">
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <SectionTitle style={{ margin: "0 auto" }}>Contact Me</SectionTitle>
        <SectionText style={{ textAlign: "center" }}>Wanna Hire Me?</SectionText>
      </div>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Your Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            placeholder="Email Address"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            placeholder="Subject"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <Input
            type="tel"
            placeholder="Phone Number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Textarea
            placeholder="Type your Message..."
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <ButtonWrapper>
            <Button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Submit"}
            </Button>
          </ButtonWrapper>
          {status.msg && <StatusMsg error={status.error}>{status.msg}</StatusMsg>}
        </form>
      </FormWrapper>
    </Section>
  );
};

export default ContactSection;
