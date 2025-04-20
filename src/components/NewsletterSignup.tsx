
const NewsletterSignup = () => {
  return (
    <div className="py-24 px-8 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">Stay in the Loop</h2>
        <p className="text-gray-600">
          Subscribe to our newsletter for exclusive deals and new releases
        </p>
        <form className="flex gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#1A1F2C]"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#1A1F2C] text-white rounded-full hover:bg-[#2A2F3C] transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
