function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border-primary">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-secondary">
          © {year} Vijay Singh. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a href="https://github.com/vijaysingh384" target="_blank" rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/vijaysingh384" target="_blank" rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            LinkedIn
          </a>
          <a href="https://leetcode.com/u/vijaysingh384/" target="_blank" rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            LeetCode
          </a>
        </div>

        <p className="text-xs text-text-secondary">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
