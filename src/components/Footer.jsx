import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer'>
      <p>
        © 2023 <strong>Adrian Hajdin</strong>. All rights reserved.
      </p>
      <div className='flex gap-3 justify-center items-center'>
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={link.iconUrl}
              alt={link.name}
              className='w-6 h-6 object-contain'
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
