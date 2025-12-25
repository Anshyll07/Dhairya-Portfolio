import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone_number: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = 'service_knsj0xj';
    const templateID = 'template_zmwssyh';
    const userID = 'Ydyl-b4hJeVlrRBqf';

    const fullMessage = `Email sent by: ${formData.from_email}\n${formData.phone_number ? `Phone: ${formData.phone_number}\n` : ''}\n${formData.message}`;

    const templateParams = {
      from_name: formData.from_name,
      from_email: formData.from_email,
      phone_number: formData.phone_number,
      message: fullMessage,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      setFormStatus('Message sent successfully!');
      setFormData({ from_name: '', from_email: '', phone_number: '', message: '' }); // Clear form
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-300">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={formData.from_email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <input
            type="tel"
            name="phone_number"
            placeholder="Your Phone Number (Optional)"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-4 bg-primary text-background font-bold rounded-full hover:bg-white transition-all hover:scale-105 shadow-lg shadow-primary/25 disabled:bg-slate-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </motion.form>

        {formStatus && (
          <p className="text-center mt-4 text-sm font-medium">
            {formStatus}
          </p>
        )}

        <footer className="mt-24 text-center text-slate-600 text-sm">
          © 2025 Dhairya. Built with React, Tailwind & Fluid Motion.
        </footer>
      </div>
    </section>
  );
};

export default Contact;