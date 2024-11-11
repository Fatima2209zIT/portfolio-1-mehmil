"use client";
const Footer = () => {
    return(
<footer className="bg-black text-white py-6 mt-8 sm:py-4">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-sm">&copy; {new Date().getFullYear()} Mehmil Zeeshan. All Rights Reserved.</p>
    <div className="mt-2">
      <a href="https://www.instagram.com/mehmil2209z" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 mx-2">
        Instagram
      </a>
      <a href="www.linkedin.com/in/mehmil-zeeshan-b340832b5" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 mx-2">
        LinkedIn
      </a>
      <a href="mailto:mehmilzeeshan125@gmail.com" className="text-sky-500 hover:text-sky-600 mx-2">
        Email
      </a>
    </div>
  </div>
</footer>
    );
};
export default Footer;