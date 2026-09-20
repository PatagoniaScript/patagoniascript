import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export const SocialLinks = ({ className }) => {
  const socials = [
    {
      name: 'x',
      icon: <FaXTwitter className="text-white" />,
      link: 'https://x.com/PatagoniaScript',
    },
    {
      name: 'github',
      icon: <FaGithub className="text-white" />,
      link: 'https://github.com/PatagoniaScript',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="text-white" />,
      link: 'https://www.instagram.com/patagoniascript/',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-white" />,
      link: 'https://www.linkedin.com/company/patagoniascript/',
    },
  ];

  return (
    <div className={`flex gap-8 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:scale-150 transition-transform duration-300"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
