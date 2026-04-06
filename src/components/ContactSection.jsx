import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 text-black
 "
    >
      <div className="max-w-5xl mx-auto  py-16 ">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-5xl font-medium uppercase tracking-wide font-[Bebas_Neue]">
            GET IN TOUCH
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">

          {/* LEFT SIDE */}
         <div className="rounded-3xl p-8 backdrop-blur-sm hover:scale-[1.02] hover:-translate-y-1 transition" style={{border: '1px solid #b2b2b2'}}>

            <p className="text-xs tracking-[3px] uppercase border-b pb-2 mb-6">
              Reach Us Directly
            </p>

            <div className="space-y-4">

              <div className="flex justify-between border-b pb-3">
                <span className="text-xs text-gray-500 uppercase">
                  Email
                </span>

                <a
                  href="mailto:devcubetech@gmail.com"
                  className="font-semibold hover:underline"
                >
                  devcubetech@gmail.com
                </a>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-xs text-gray-500 uppercase">
                  Phone
                </span>

                <a
                  href="tel:+918770753546"
                  className="font-semibold hover:underline"
                >
                  +91 8770753546
                </a>
              </div>

              <div className="flex justify-between">
                <span className="text-xs text-gray-500 uppercase">
                  Response
                </span>

                <span className="font-semibold">
                  Within 24 hrs
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="rounded-3xl p-8 backdrop-blur-sm hover:scale-[1.02] hover:-translate-y-1 transition" style={{border: '1px solid #b2b2b2'}}>

            <p className="text-xs tracking-[3px] uppercase border-b pb-2 mb-6">
              Send Us A Message
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                  className="w-full font-semibold bg-transparent border-b border-gray-400 focus:border-black dark:focus:border-white outline-none py-2"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full font-semibold bg-transparent border-b border-gray-400 focus:border-black dark:focus:border-white outline-none py-2"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full font-semibold bg-transparent border-b border-gray-400 focus:border-black dark:focus:border-white outline-none py-2"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your project.."
                  required
                  className="w-full font-semibold bg-transparent border-b border-gray-400 focus:border-black dark:focus:border-white outline-none py-2 min-h-[90px]"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-8 py-3 border-2 border-black dark:border-white
                  bg-black text-white dark:bg-white dark:text-black
                  hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white
                  transition uppercase text-sm tracking-widest"
                >
                  Send Message
                </button>
              </div>

              {sent && (
                <p className="text-sm text-right pt-3 border-t">
                  ✓ Message sent successfully.
                </p>
              )}

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}