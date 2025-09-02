import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLinkTransition } from '../hooks/useLinkTransition';

const Contact: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const { handleLinkClick } = useLinkTransition();

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'yashgawhale004@gmail.com',
      href: 'mailto:yashgawhale004@gmail.com',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yash-gawhale',
      href: 'https://www.linkedin.com/in/yash-gawhale-4277b8258/',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Yashcodes04',
      href: 'https://github.com/Yashcodes04',
      color: 'text-gray-700 dark:text-gray-300'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            whileHover={{ 
              scale: 1.05,
              textShadow: "0px 0px 8px rgba(34, 197, 94, 0.3)"
            }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Get in Touch.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Want to chat? Feel free to reach out via{' '}
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer"
              onClick={() => handleLinkClick('mailto:yashgawhale004@gmail.com')}
            >
              email
            </motion.span>
            {' '}or{' '}
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer"
              onClick={() => handleLinkClick('https://www.linkedin.com/in/yash-gawhale-4277b8258/')}
            >
              LinkedIn
            </motion.span>
            <br />
            and I'll respond whenever I can.
          </motion.p>
        </motion.div>

        {/* Simple Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactMethods.map((contact, index) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              onClick={() => handleLinkClick(contact.href)}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700 cursor-pointer group text-center"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex p-4 rounded-full bg-gray-50 dark:bg-gray-800 ${contact.color} mb-4`}
              >
                <contact.icon className="w-6 h-6" />
              </motion.div>
              
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {contact.label}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {contact.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => handleLinkClick('mailto:yashgawhale004@gmail.com')}
          >
            <Send className="w-5 h-5" />
            <span>Let's collaborate!</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;