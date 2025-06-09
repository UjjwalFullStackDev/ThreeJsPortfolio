const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
        <div>
          <a href="https://github.com/UjjwalFullStackDev">
          <div className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
          </a>
        </div>
        <div>
        <a href="https://linkedin.com/in/ujjwal90611">
          <div className="social-icon">
            <img src="/assets/linkedin.svg" alt="twitter" className="w-1/2 h-1/2" />
          </div>
          </a>
        </div>
          <div>
          <a href="https://instagram.com/mr_ujjawal_tyagi">
          <div className="social-icon">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </div>
          </a>
        </div>
        </div>
  
        <p className="text-white-500">© 2024 Ujjwal Tyagi. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;