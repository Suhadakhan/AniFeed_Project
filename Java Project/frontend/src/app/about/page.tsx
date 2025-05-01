"use client"
const Page: React.FC = () => {
  const donateNow = () => {
    window.location.href = '/donate';
  };

  return (
    <section className="about-us py-12">
      <div className="container mx-auto px-4">
        <div id="mission" className="mission bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 text-center">
            At <strong>anifeed</strong>, we are dedicated to feeding needy and helpless animals. Every life matters, and with your support, we can make a significant impact together. Each bowl filled is a step towards kindness, and every donation you make helps us spread love and compassion to those who cannot speak for themselves.
          </p>
        </div>

        <div id="what-we-do" className="what-we-do mb-8">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">What We Do</h2>
          <p className="text-lg text-gray-700 text-center">
            Our primary focus is on feeding animals with empty bowls who are silently calling for help. After the donation period ends, we will go out into the community to fill as many bowls as we can. All donations will be dedicated solely to purchasing food for street animals.
          </p>
        </div>

        <div id="important-note" className="important-note bg-red-100 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-center text-red-600 mb-4">Important Note</h2>
          <p className="text-lg text-gray-700 text-center">
            We want to clarify that <strong>anifeed</strong> is a personal project created by me, Sanjay Verma, for practice in web development. This website is not affiliated with any organization or community; it is simply an initiative to help needy street animals while I learn and grow in my skills.
          </p>
          <p className="text-lg text-gray-700 text-center">
            The donations collected through this platform are solely for purchasing food to feed these animals. If you are unable to feed them directly due to time constraints, your contributions will allow me to do so on your behalf.
          </p>
          <p className="text-lg text-gray-700 text-center">
            Please understand that this is not a formal organization; it is an effort driven by a passion for animal welfare and a desire to learn. Your generosity will go directly to the welfare of street animals in our community, but I cannot guarantee any legal entity status or official recognition.
          </p>
        </div>

        <div id="contact-info" className="contact-info mb-8">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 text-center">
            For inquiries, collaborations, or to learn more about our initiatives, please reach out to us at <strong><a href="mailto:anifeed.street@gmail.com" className="text-blue-600">anifeed.street&#64;gmail.com</a></strong>.
          </p>
        </div>

        <div className="text-center">
          <button onClick={donateNow} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg">Donate Now</button>
        </div>
      </div>
    </section>
  );
};

export default Page;
