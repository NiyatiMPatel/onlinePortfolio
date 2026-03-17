import { useFormik } from "formik";
import * as Yup from "yup";
// import { motion } from "motion/react";
import * as motion from "motion/react-client";
import { Send } from "lucide-react";
// import emailjs from "@emailjs/browser";

const contactValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const ContactForm = ({ onSuccess, onError }) => {
  const submitHandler = async (values, { resetForm, setSubmitting }) => {
    const emailjs = (await import("@emailjs/browser")).default;
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY);
      setSubmitting(false);
      onSuccess();
      resetForm();
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setSubmitting(false);
      onError();
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: contactValidationSchema,
    onSubmit: submitHandler,
  });

  const fields = ["name", "email", "message"];

  return (
    <motion.form
      onSubmit={formik.handleSubmit}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      {fields.map((field, i) => (
        <motion.div
          key={field}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          <label className="block text-sm font-medium mb-1.5 capitalize">
            {field}
          </label>

          {field === "message" ? (
            <textarea
              name={field}
              rows={5}
              value={formik.values[field]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2.5 rounded-xl bg-secondary/80 border border-border/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 resize-none transition-all duration-300"
              placeholder={`Your ${field}...`}
            />
          ) : (
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formik.values[field]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2.5 rounded-xl bg-secondary/80 border border-border/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all duration-300"
              placeholder={`Your ${field}...`}
            />
          )}

          {formik.touched[field] && formik.errors[field] && (
            <p className="text-destructive text-xs mt-1">
              {formik.errors[field]}
            </p>
          )}
        </motion.div>
      ))}

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover-lift text-sm disabled:opacity-50 transition-all"
      >
        <Send
          size={16}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />

        {formik.isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </motion.form>
  );
};

export default ContactForm;
