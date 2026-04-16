import { useRef, useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const recaptchaRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [dialCode, setDialCode] = useState("61");
  const [phoneNumber, setPhoneNumber] = useState("");

  const texts = [
    "Employer Visa Expert",
    "Skill in Demand Visa SC482",
    "ENS Visa SC186",
    "Labour Agreements",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = texts[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = recaptchaRef.current?.getValue();

    if (!token) {
      alert("Please verify the captcha");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      const finalPhone = `+${dialCode}${phoneNumber}`;

      const payload = {
        name: data.name,
        email: data.email,
        phone: finalPhone,
        visaType: data.visaType,
        message: data.message,
        source: "Website Hero Form",
      };

      const BASE_URL = "https://growmore-1.vercel.app";
      const response = await fetch(`${BASE_URL}/api/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message); // Success Alert
        e.target.reset();
        setPhoneNumber("");
        recaptchaRef.current.reset();
      } else {
        alert("Error: " + (result.message || "Submission failed"));
      }
    } catch {
      alert("Network Error: Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      className="relative bg-cover bg-center" 
      style={{ backgroundImage: `url(/assets/img2.png)` }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
        {/* LEFT CONTENT */}
        <div className="text-white text-center lg:text-left">
          <h2 className="text-sm font-bold tracking-widest text-[#5DC2D3] uppercase mb-4">
            Welcome to Growmore Immigration
          </h2>
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-semibold mb-6">
            The Best Immigration Consulting Services for a Smooth Move to Australia
          </h1>
          <h3 className="text-[#8fd07c] font-bold text-xl mb-8 min-h-[40px]">
            {displayText}<span className="border-r-3 border-[#8fd07c] animate-pulse ml-1"></span>
          </h3>
          <Link to="/who-we-are">
            <button className="bg-[#6dc7d1] px-8 py-3 rounded-full hover:bg-black transition">
              Read More →
            </button>
          </Link>
        </div>

        {/* RIGHT FORM */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-black rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="h-4 bg-[#6dc7d1]"></div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#6dc7d1]">Make an Appointment</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="name" placeholder="Your Name" required className="rounded-lg px-4 py-2 w-full" />
                  <input type="email" name="email" placeholder="Email" required className="rounded-lg px-4 py-2 w-full" />
                </div>
                <div className="flex gap-2">
                  <div className="w-24">
                    <PhoneInput country={"au"} onChange={(_, d) => setDialCode(d.dialCode)} />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                    className="flex-1 rounded-lg px-4 py-2 w-full" 
                    required 
                  />
                </div>
                <select name="visaType" required className="rounded-lg px-4 py-2 w-full">
                  <option value="">Inquiry For</option>
                  <option>Student Visa</option>
                  <option>Work/Skilled Migration</option>
                  <option>Partner Visa</option>
                </select>
                <textarea name="message" rows="3" placeholder="Comments" className="rounded-lg px-4 py-2 w-full"></textarea>
                <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} ref={recaptchaRef} />
                <button type="submit" disabled={loading} className="bg-[#6dc7d1] text-white px-8 py-3 rounded-full w-full disabled:opacity-50">
                  {loading ? "Submitting..." : "Submit →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;